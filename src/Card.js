import React from "react";

export default function Card() {
  return (
    <div className="card">
      <img src="/images/img02.png" className="card--photo"/>
      <div className="card--info">
        <img src="/images/pin.png" />
        <span className="location">JAPAN</span>
        <a href="https://goo.gl/maps/1DGM5WrWnATgkSNB8" className="gray">
          https://goo.gl/maps/1DGM5WrWnATgkSNB8
        </a>
        <h3 className="card--title">Mount Fuji</h3>
        <span className="bold">12 Jan, 2021 - 24 Jan, 2021</span>
        <p>
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </div>
  );
}
