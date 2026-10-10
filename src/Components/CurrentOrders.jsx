import React from "react";

function CurrentOrders() {
  const orders = [
    {
      id: "ORD101",
      name: "Wireless Headphones",
      status: "Processing",
    },
    {
      id: "ORD102",
      name: "Smart Watch",
      status: "Shipped",
    },
  ];

  return (
    <div className="orders-container">
      <h2>📦 Current Orders</h2>

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

export default CurrentOrders;