import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  const card = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <div>
      <Header />
      <div className="cards--list">{card}</div>
    </div>
  );
}
