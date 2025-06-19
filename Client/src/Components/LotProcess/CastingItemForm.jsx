
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { toast } from "react-toastify";
import './CastingItemForm.css'

const CastingItemForm = ({ castingEntryId, items, setItems, scrapItems, setScrapItems,afterWeight,totalScrapWeight,wastage,totalWastage,totalItemWeight,onStockUpdate}) => {
  const [availableItems, setAvailableItems] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/additem");
        setAvailableItems(res.data);
      } catch (err) {
        console.error("Failed to fetch available items:", err);
      }
    };
    fetchItems();
  }, []);

  useEffect(() => {
    if (castingEntryId && availableItems.length > 0) {
      fetchCastingItems();
    }
  }, [castingEntryId, availableItems]);

  const handleItemChange = (list, setList, index, field, value) => {
    const updated = [...list];
    updated[index][field] = value;

    if (field === "item_id") {
      const matched = availableItems.find((i) => i.id === parseInt(value));
      updated[index].name = matched?.name || "";
    }

    setList(updated);
  };
  const addItem = () => {
    setItems([...items, { item_id: "", name: "", weight: "", touch: "", remarks: "" }]);
  };
  const addScrapItem = () => {
    setScrapItems([...scrapItems, { item_id: "", name: "", weight: "", touch: "", remarks: "" }]);
  };


  const saveCastingItems = async (entryId) => {
    const combinedItems = [...items, ...scrapItems];
    let isAfterWeightSaved = false;
    let isScrapWeightSaved = false;
    let isScrapWastageSaved = false;

    let scrapItemSaved = false; // ✅ Track if scrap item was saved

    try {
      for (const item of combinedItems) {
        const item_id = item.item_id;
        if (!item_id) continue;

        const weight = parseFloat(item.weight) || 0;
        const touch = parseFloat(item.touch) || 0;
        const item_purity = (weight * touch) / 100;
        const isScrap = scrapItems.includes(item);

        const payload = {
          weight,
          touch,
          item_purity,
          remarks: item.remarks,
          after_weight: !isScrap && !isAfterWeightSaved ? totalItemWeight : 0,
          scrap_weight: isScrap && !isScrapWeightSaved ? totalScrapWeight : 0,
          scrap_wastage: isScrap && !isScrapWastageSaved ? totalWastage : 0,
          castingEntryId: entryId,
          item_id,
          type: isScrap ? "ScrapItems" : "Items",
        };

        if (!isScrap && !isAfterWeightSaved) isAfterWeightSaved = true;
        if (isScrap && !isScrapWeightSaved) isScrapWeightSaved = true;
        if (isScrap && !isScrapWastageSaved) isScrapWastageSaved = true;

        if (item.id) {
          await axios.put(`http://localhost:5000/api/castingitems/${item.id}`, payload);
        } else {
          await axios.post(`http://localhost:5000/api/castingitems`, payload);
        }

        // ✅ Notify Stock component to refresh after saving scrap
        if (isScrap) {
          scrapItemSaved = true;
        }
      }

      // ✅ Call onStockUpdate once after loop ends if any scrap saved
      if (scrapItemSaved && typeof onStockUpdate === "function") {
        onStockUpdate();
      }

      toast.success("Casting items saved successfully!");
      fetchCastingItems();
    } catch (err) {
      console.error("Error saving casting items:", err);
      toast.error("Failed to save casting items.");
    }
  };

const fetchCastingItems = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/castingitems?casting_entry_id=${castingEntryId}`);
      const data = res.data;
      const filteredData = data.filter(item => item.casting_entry_id === castingEntryId);
      const mapWithName = (itemsArray) => {
        return itemsArray.map(item => {
          const matched = availableItems.find(av => av.id === item.item_id);
          return {
            ...item,
            id: item.id, 
            item_id: item.item_id,
            name: matched?.name || "",
          };
        });
      };
      setItems(mapWithName(filteredData.filter(item => item.type === "Items")));
      setScrapItems(mapWithName(filteredData.filter(item => item.type === "ScrapItems")));
    } catch (err) {
      console.error("Error fetching casting items:", err);
    }
  };
  const handleDeleteItem = async (index) => {
    const targetItem = items[index];
    const confirmDelete = window.confirm("Are you sure you want to delete this item?");
    if (!confirmDelete) return;  
    try {
      if (targetItem.id) {
        await axios.delete(`http://localhost:5000/api/castingitems/${targetItem.id}`);
      }  
      const updated = [...items];
      updated.splice(index, 1);
      setItems(updated);  
      toast.success("Item deleted successfully!");
    } catch (err) {
      console.error("Error deleting item:", err);
      toast.error("Failed to delete item.");
    }
  }; 
  const handleDeleteScrapItem = async (index) => {
    const targetItem = scrapItems[index];
    const confirmDelete = window.confirm("Are you sure you want to delete this scrap item?");
    if (!confirmDelete) return; 
    try {
      if (targetItem.id) {
        await axios.delete(`http://localhost:5000/api/castingitems/${targetItem.id}`);
      } 
      const updated = [...scrapItems];
      updated.splice(index, 1);
      setScrapItems(updated);  
      toast.success("Scrap item deleted successfully!");
    } catch (err) {
      console.error("Error deleting scrap item:", err);
      toast.error("Failed to delete scrap item.");
    }
  };
  return (
    <>
      <Button onClick={addItem} className="add-button">
        Add Items
      </Button>
      <div className="scroll-table">
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Weight</th>
              <th>Touch</th>
              <th>Purity</th>
              <th>Remarks</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>
                  <select style={{height:'1.7rem',width:'8rem'}}
                    value={item.item_id || ""}
                    onChange={(e) =>
                      handleItemChange(items, setItems, index, "item_id", parseInt(e.target.value))} >
                    <option value="">Select Item</option>
                    {availableItems.map((obj) => (
                      <option key={obj.id} value={obj.id}>
                        {obj.name}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <input
                    type="number"
                    value={item.weight}
                    onChange={(e) =>
                      handleItemChange(items, setItems, index, "weight", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={item.touch}
                    onChange={(e) =>
                      handleItemChange(items, setItems, index, "touch", e.target.value)
                    }
                  />
                </td>
                <td>
                  {((parseFloat(item.weight || 0) * parseFloat(item.touch || 0)) / 100).toFixed(3)}
                </td>
                <td>
                  <textarea
                    value={item.remarks}
                    onChange={(e) =>
                      handleItemChange(items, setItems, index, "remarks", e.target.value)
                    }
                  />
                </td>
                <td>  <Delete color="error" onClick={() => handleDeleteItem(index)}/></td>  
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="scrap-weight" >
  <b>Item Weight: </b>
  <input type="number" readOnly value={afterWeight.toFixed(3)} />   <span style={{marginLeft:'2rem'}}> </span>
  <b>Current Balance Weight : </b> 
  <input type="number" readOnly value={totalItemWeight.toFixed(3)} />
</div>
 <br />   <hr />
     <Button onClick={addScrapItem} className="add-button">
        Add Scrap Items
      </Button>
      <div className="scroll-table">
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Weight</th>
              <th>Touch</th>
              <th>Purity</th>
              <th>Remarks</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {scrapItems.map((item, index) => (
              <tr key={index}>
                <td>
                  <select style={{height:'1.7rem',width:'8rem'}}
                    value={item.item_id || ""}
                    onChange={(e) =>
                      handleItemChange(scrapItems, setScrapItems, index, "item_id", parseInt(e.target.value))
                    } >
                    <option value="">Select Item</option>
                    {availableItems.map((obj) => (
                      <option key={obj.id} value={obj.id}>
                        {obj.name}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <input
                    type="number"
                    value={item.weight}
                    onChange={(e) =>
                      handleItemChange(scrapItems, setScrapItems, index, "weight", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={item.touch}
                    onChange={(e) =>
                      handleItemChange(scrapItems, setScrapItems, index, "touch", e.target.value)
                    }
                  />
                </td>
                <td>
                  {((parseFloat(item.weight || 0) * parseFloat(item.touch || 0)) / 100).toFixed(3)}
                </td>
                <td>
                  <textarea
                    value={item.remarks}
                    onChange={(e) =>
                      handleItemChange(scrapItems, setScrapItems, index, "remarks", e.target.value)
                    }
                  />
                </td>
              <td>    <Delete color="error" onClick={() => handleDeleteScrapItem(index)} /> </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="total">
  <div className="scrap-weight">
    <b>Scrap Weight: </b>
    <input type="number" readOnly value={totalScrapWeight.toFixed(3)} /> <span style={{marginLeft:'2rem'}}> </span>
    {/* Total Item Weight - Scrap Weight  */}
    <b>Total Wastage :  </b>
    <input type="number" readOnly value={totalWastage.toFixed(3)} />

  </div>
  {/* <div>
    <label>Scrap Wastage: </label>
    <input type="number" readOnly value={wastage.toFixed(3)} />
  </div> */}
  
</div>
      <button className="save-btnn"
        onClick={() => saveCastingItems(castingEntryId)}
         >
        Save Casting Items
      </button>
    </>
  );
};

export default CastingItemForm;
