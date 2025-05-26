import React, { useState } from "react";
import "./MasterPurchaseStock.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Master from "./Master";

const MasterPurchaseStock = () => {
  const [showModal, setShowModal] = useState(false);
  const [purchaseList, setPurchaseList] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const [formData, setFormData] = useState({
    supplierName: "",
    purchaseDate: "",
    item: "",
    goldWeight: "",
    goldTouch: "",
    goldPurity: "",
    goldRate: "",
    goldTotalValue: "",
    silverWeight: "",
    silverTouch: "",
    silverPurity: "",
    silverRate: "",
    silverTotalValue: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (editingIndex !== null) {
  //     const updatedList = [...purchaseList];
  //     updatedList[editingIndex] = formData;
  //     setPurchaseList(updatedList);
  //     toast.success("Purchase updated successfully!");
  //     setEditingIndex(null);
  //   } else {
  //     setPurchaseList([...purchaseList, formData]);
  //     toast.success("Purchase submitted successfully!");
  //   }

  //   setFormData({
  //     supplierName: "",
  //     purchaseDate: "",
  //     item: "",
  //     goldWeight: "",
  //     goldTouch: "",
  //     goldPurity: "",
  //     goldRate: "",
  //     goldTotalValue: "",
  //     silverWeight: "",
  //     silverTouch: "",
  //     silverPurity: "",
  //     silverRate: "",
  //     silverTotalValue: "",
  //   });

  //   setShowModal(false);
  // };



  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const payload = {
      name: formData.supplierName,
      createddAt: formData.purchaseDate,
      item: formData.item,
      goldWeight: formData.goldWeight ? parseFloat(formData.goldWeight) : null,
      goldTouch: formData.goldTouch ? parseFloat(formData.goldTouch) : null,
      goldPurity: formData.goldPurity ? parseFloat(formData.goldPurity) : null,
      goldRate: formData.goldRate ? parseFloat(formData.goldRate) : null,
      goldtotalValue: formData.goldTotalValue ? parseFloat(formData.goldTotalValue) : null,
      silverWeight: formData.silverWeight ? parseFloat(formData.silverWeight) : null,
      silverTouch: formData.silverTouch ? parseFloat(formData.silverTouch) : null,
      silverPurity: formData.silverPurity ? parseFloat(formData.silverPurity) : null,
      silverRate: formData.silverRate ? parseFloat(formData.silverRate) : null,
      silvertotalValue: formData.silverTotalValue ? parseFloat(formData.silverTotalValue) : null,
    };
  
    try {
      const response = await fetch("http://localhost:5000/api/purchase", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create purchase");
      }
  
      const newPurchase = await response.json();
      setPurchaseList((prev) => [...prev, newPurchase]);
      toast.success("Purchase submitted successfully!");
  
      setFormData({
        supplierName: "",
        purchaseDate: "",
        item: "",
        goldWeight: "",
        goldTouch: "",
        goldPurity: "",
        goldRate: "",
        goldTotalValue: "",
        silverWeight: "",
        silverTouch: "",
        silverPurity: "",
        silverRate: "",
        silverTotalValue: "",
      });
      setShowModal(false);
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };
  

  const handleEdit = (index) => {
    setFormData(purchaseList[index]);
    setEditingIndex(index);
    setShowModal(true);
  };

  const handleDelete = (index) => {
    const filteredList = purchaseList.filter((_, i) => i !== index);
    setPurchaseList(filteredList);
    toast.error("Purchase deleted successfully!");
  };

  return (
    <>
      <Master />
      <div className="stock-page">
        <ToastContainer />

        <button
          className="open-modal-btn"
          onClick={() => {
            setShowModal(true);
            setFormData({
              supplierName: "",
              purchaseDate: "",
              item: "",
              goldWeight: "",
              goldTouch: "",
              goldPurity: "",
              goldRate: "",
              goldTotalValue: "",
              silverWeight: "",
              silverTouch: "",
              silverPurity: "",
              silverRate: "",
              silverTotalValue: "",
            });
            setEditingIndex(null);
          }}
        >
          Add Stock Purchase
        </button>

        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h3>{editingIndex !== null ? "Edit Purchase" : "Add Stock Purchase"}</h3>
              <form onSubmit={handleSubmit} className="purchase-form">

              <div className="right-column">
                    <div className="form-group">
                      <label>Supplier Name:</label>
                      <input type="text" name="supplierName" value={formData.supplierName} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label>Purchase Date:</label>
                      <input type="date" name="purchaseDate" value={formData.purchaseDate} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label>Item:</label>
                      <select name="item" value={formData.item} onChange={handleChange} required>
                        <option value="">Select Item</option>
                        <option value="Gold">Gold</option>
                        <option value="Silver">Silver</option>
                      </select>
                    </div>
                  </div>
                <div className="form-content">
                  {/* Left Column - Conditional Fields */}
                  <div className="left-column">
                    {formData.item === "Gold" && (
                      <>
                        <div className="form-group">
                          <label>Gold Weight:</label>
                          <input type="number" name="goldWeight" value={formData.goldWeight} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                          <label>Touch:</label>
                          <input type="number" name="goldTouch" value={formData.goldTouch} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                          <label>Purity:</label>
                          <input type="number" name="goldPurity" value={formData.goldPurity} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                          <label>Gold Rate:</label>
                          <input type="number" name="goldRate" value={formData.goldRate} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                          <label>Total Value:</label>
                          <input type="number" name="goldTotalValue" value={formData.goldTotalValue} onChange={handleChange} />
                        </div>
                      </>
                    )}

                    {formData.item === "Silver" && (
                      <>
                        <div className="form-group">
                          <label>Silver weight:</label>
                          <input type="number" name="silverWeight" value={formData.silverWeight} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                          <label>Touch:</label>
                          <input type="number" name="silverTouch" value={formData.silverTouch} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                          <label>Purity:</label>
                          <input type="number" name="silverPurity" value={formData.silverPurity} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                          <label>Silver Rate:</label>
                          <input type="number" name="silverRate" value={formData.silverRate} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                          <label>Total Value:</label>
                          <input type="number" name="silverTotalValue" value={formData.silverTotalValue} onChange={handleChange} />
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className="form-actions">
                  <button type="submit" className="submit">
                    {editingIndex !== null ? "Update Purchase" : "Submit Purchase"}
                  </button>
                  <button
                    type="button"
                    className="cancel-btn"
                    onClick={() => {
                      setShowModal(false);
                      setEditingIndex(null);
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {purchaseList.length > 0 && (
          <table className="purchase-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Supplier Name</th>
                <th>Purchase Date</th>
                <th>Item</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {purchaseList.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.supplierName}</td>
                  <td>{item.purchaseDate}</td>
                  <td>{item.item}</td>
                  <td>
                    <button onClick={() => handleEdit(index)} className="edit-btn">
                      Edit
                    </button>
                    <button onClick={() => handleDelete(index)} className="delete-btn">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default MasterPurchaseStock;