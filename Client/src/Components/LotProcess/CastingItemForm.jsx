
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { toast} from "react-toastify";

const CastingItemForm = ({ castingEntryId }) => {
  const [items, setItems] = useState([]);
  const [scrapItems, setScrapItems] = useState([]);
  const [availableItems, setAvailableItems] = useState([]);


useEffect(() => {
    if (castingEntryId) {
      console.log("Fetching casting items for ID:", castingEntryId);
      fetchCastingItems();
    } else {
      console.log("CastingEntryId not available yet");
    }
  }, [castingEntryId]);
  
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

  const handleItemChange = (list, setList, index, field, value) => {
    const updated = [...list];
    updated[index][field] = value;
    setList(updated);
  };

  const addItem = () => {
    setItems([...items, { name: "", weight: "", touch: "", remarks: "" }]);
  };

  const addScrapItem = () => {
    setScrapItems([...scrapItems, { name: "", weight: "", touch: "", remarks: "" }]);
  };


const saveCastingItems = async (entryId) => {
    const combinedItems = [...items, ...scrapItems];
  
    const item_id_lookup = (name) => {
      const item = availableItems.find((i) => i.name === name);
      return item?.id || null;
    };
  
    try {
      for (const item of combinedItems) {
        const item_id = item_id_lookup(item.name);
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
          after_weight: isScrap ? 0 : weight,
          scrap_weight: isScrap ? weight : 0,
          scrap_wastage: isScrap ? (weight * 0.02) : 0,
          castingEntryId: entryId, 
          // item_id,
          item_id: item.item_id, // Use ID directly
          type: isScrap ? "ScrapItems" : "Items",

        };
        console.log("Saving payload:", payload);

  
        await axios.post("http://localhost:5000/api/castingitems", payload);
      }
  
      toast.success("Casting items saved successfully!");
    } catch (err) {
      console.error(err);
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
  
  
  return (
    <>  
      <Button onClick={addItem} sx={{backgroundColor:'black', color:'white',marginTop:'1rem'}}>Add Items</Button>
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

                <select
  value={item.item_id || ""}
  onChange={(e) =>
    handleItemChange(items, setItems, index, "item_id", parseInt(e.target.value))
  }
>
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
                <td>
                  <Delete
                    color="error"
                    onClick={() => {
                      const updated = [...items];
                      updated.splice(index, 1);
                      setItems(updated);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br/>
      <hr/>

      <Button onClick={addScrapItem} sx={{backgroundColor:'black', color:'white',marginTop:'1rem'}}>Add Scrap Items</Button>
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

                <select
  value={item.item_id || ""}
  onChange={(e) =>
    handleItemChange(scrapItems, setScrapItems, index, "item_id", parseInt(e.target.value))
  }
>
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
                <td>
                  <Delete
                    color="error"
                    onClick={() => {
                      const updated = [...scrapItems];
                      updated.splice(index, 1);
                      setScrapItems(updated);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Button
      onClick={() => saveCastingItems(castingEntryId)}
        variant="contained"
        color="primary"
        style={{ marginTop: "1rem" }}
      >
        Save Casting Items
      </Button>
    </>
  );
};

export default CastingItemForm;
