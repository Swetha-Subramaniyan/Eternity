// import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./MasterAddItems.css";
// import Master from "./Master";

// const MasterAddItems = () => {
//   const [items, setItems] = useState([]);
//   const [itemName, setItemName] = useState("");

//   const handleAddItem = () => {
//     if (!itemName.trim()) {
//       return toast.warn("Please enter item name.");
//     }

//     const newItem = {
//       id: Date.now(),
//       itemName: itemName.trim(),
//     };

//     setItems((prevItems) => [...prevItems, newItem]);
//     setItemName("");
//     toast.success("Item added successfully!");
//   };

//   return (
//     <> 
//     <Master/> 
//     <div className="master-container">
//       <ToastContainer position="top-right" autoClose={2000} hideProgressBar />

//       <div className="split-container">
//         <div className="left-panel">
//           <div className="add-item-form">
//             <h2>Add Item</h2>
//             <label>Item Name:</label>
//             <input
//               type="text"
//               value={itemName}
//               onChange={(e) => setItemName(e.target.value)}
//               placeholder="Enter item name"
//             />
//             <button onClick={handleAddItem}>Add Item</button>
//           </div>
//         </div>

//         <div className="divider" />

//         <div className="right-panel">
//           <h2>Added Items</h2>
//           {items.length > 0 ? (
//             <div className="cards-wrapper">
//               {items.map((item) => (
//                 <div className="item-card" key={item.id}>
//                   {item.itemName}
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p>No items added.</p>
//           )}
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default MasterAddItems;




// import React, { useState, useEffect } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./MasterAdditems.css";


// const MasterAdditems = () => {
//   const [items, setItems] = useState([]);
//   const [itemName, setItemName] = useState("");

//   useEffect(() => {
//     fetchItems();
//   }, []);

//   const fetchItems = async () => {
//     try {
//       const res = await axios.get(`${BACKEND_SERVER_URL}/api/master-items`);
//        console.log("Fetched items:", res.data);
//       setItems(res.data);
//     } catch (err) {
//       console.error("Failed to fetch items", err);
//     }
//   };


//   const handleAddItem = async () => {
//     if (itemName) {
//       try {
//         await axios.post(`${BACKEND_SERVER_URL}/api/master-items/create`, {
//           itemName,
//         });
//         setItemName("");
//         fetchItems();
//         toast.success("Item added successfully!");
//       } catch (err) {
//         console.error("Failed to add item", err);
//         toast.error("Failed to add item. Please try again.");
//       }
//     } else {
//       toast.warn("Please enter item name.");
//     }
//   };

//   return (
//     <>
   
//       <div className="master-container">
//         <ToastContainer position="top-right" autoClose={2000} hideProgressBar />

//         <div className="add-item-form">
//           <h2 style={{ textAlign: "center" }}>Add Item</h2>
//           <label>Item Name:</label>
//           <input
//             type="text"
//             value={itemName}
//             onChange={(e) => setItemName(e.target.value)}
//             placeholder="Enter item name"
//           />

//           <button onClick={handleAddItem}>Add Item</button>
//         </div>

//         <div className="item-list">
//           <h2 style={{ textAlign: "center" }}>Added Items</h2>
//           {items.length > 0 ? (
//             <table>
//               <thead>
//                 <tr>
//                   <th>SI.No</th>
//                   <th>Item Name</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {items.map((item, index) => (
//                   <tr key={item.id}>
//                     <td>{index + 1}</td>
//                     <td>{item.itemName}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           ) : (
//             <p>No items added</p>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default MasterAdditems;






import React, { useState } from "react";
import "./MasterAdditems.css";
import Master from "./Master";

const MasterAdditems = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");

  const handleAddItem = () => {
    if (itemName.trim()) {
      const newItem = {
        id: items.length + 1,
        itemName: itemName.trim(),
      };
      setItems([...items, newItem]);
      setItemName("");
    }
  };

  return (
    <> 
    <Master/>
    <div className="master-container">
      <div className="add-item-form">
        <h2 style={{ textAlign: "center" }}>Add Item</h2>
        <label>Item Name:</label>
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Enter item name"
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>

      <div className="item-list">
        <h2 style={{ textAlign: "center" }}>Added Items</h2>
        {items.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>SI.No</th>
                <th>Item Name</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.itemName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No items added yet.</p>
        )}
      </div>
    </div>
    </>
  );
};

export default MasterAdditems;
