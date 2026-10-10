import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

import CurrentOrders from "./Components/CurrentOrders";
import OrderHistory from "./Components/OrderHistory";
import CancelledOrders from "./Components/CancelledOrders";
import "./App.css";

function Orders() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>🛍️ SHOPZONE</h1>
        <p>Your Orders, Your Way!</p>
      </header>

      <nav className="navbar">
        <Link to="/">Current Orders</Link>
        <Link to="/history">Order History</Link>
        <Link to="/cancelled">Cancelled Orders</Link>
      </nav>

      <main className="content">
        <Outlet />
      </main>

      <footer className="footer">
        <p>Thank you for shopping with SHOPZONE! 💛</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Orders />}>
          <Route index element={<CurrentOrders />} />
          <Route path="history" element={<OrderHistory />} />
          <Route path="cancelled" element={<CancelledOrders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;