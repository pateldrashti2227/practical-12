import React from "react";

function CancelledOrders() {
  const orders = [
    {
      id: "ORD095",
      name: "Bluetooth Speaker",
      status: "Cancelled",
    },
    {
      id: "ORD096",
      name: "Phone Cover",
      status: "Cancelled",
    },
  ];

  return (
    <div className="orders-container">
      <h2>❌ Cancelled Orders</h2>

      <div className="orders-list">
        {orders.map((order) => (
          <div className="order-card" key={order.id}>
            <h3>{order.name}</h3>
            <p>Order ID: {order.id}</p>
            <span className="status cancelled">
              {order.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CancelledOrders;