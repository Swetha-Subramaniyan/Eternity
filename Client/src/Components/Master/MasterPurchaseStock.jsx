
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
    quantity: "",
    purchasePrice: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingIndex !== null) {
      const updatedList = [...purchaseList];
      updatedList[editingIndex] = formData;
      setPurchaseList(updatedList);
      toast.success("Purchase updated successfully!");
      setEditingIndex(null);
    } else {
      setPurchaseList([...purchaseList, formData]);
      toast.success("Purchase submitted successfully!");
    }

    setFormData({
      supplierName: "",
      purchaseDate: "",
      item: "",
      quantity: "",
      purchasePrice: "",
    });

    setShowModal(false);
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
    <Master/>
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
            quantity: "",
            purchasePrice: "",
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
              <div className="form-group">
                <label style={{ marginTop: "2rem" }}>Supplier Name:</label>
                <input
                  type="text"
                  name="supplierName"
                  value={formData.supplierName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Purchase Date:</label>
                <input
                  type="date"
                  name="purchaseDate"
                  value={formData.purchaseDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Item:</label>
                <select
                  name="item"
                  value={formData.item}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Item</option>
                  <option value="Gold">Gold</option>
                  <option value="Silver">Silver</option>
                  
                </select>
              </div>

              <div className="form-group">
                <label>Quantity:</label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Purchase Price:</label>
                <input
                  type="number"
                  name="purchasePrice"
                  value={formData.purchasePrice}
                  onChange={handleChange}
                  required
                />
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
              <th>Quantity</th>
              <th>Purchase Price</th>
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
                <td>{item.quantity}</td>
                <td>{item.purchasePrice}</td>
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



