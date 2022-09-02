import React from "react";
import Header from "./Header";
import Card from "./Card";

export default function App() {
  return (
    <div>
      <Header />
      <div className="cards--list">
        <Card />
      </div>
    </div>
  );
}
