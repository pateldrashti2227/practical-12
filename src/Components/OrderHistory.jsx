import React from "react";

function OrderHistory() {
  const orders = [
    {
      id: "ORD098",
      name: "Wireless Keyboard",
      status: "Delivered",
    },
    {
      id: "ORD099",
      name: "Laptop Stand",
      status: "Delivered",
    },
  ];

  return (
    <div className="orders-container">
      <h2>📜 Order History</h2>

      <div className="orders-list">
        {orders.map((order) => (
          <div className="order-card" key={order.id}>
            <h3>{order.name}</h3>
            <p>Order ID: {order.id}</p>
            <span className="status">{order.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderHistory;