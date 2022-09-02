import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img src={`/images/${props.item.img}`} className="card--photo" />
      <div className="card--info">
        <img src="/images/pin.png" />
        <span className="location">{props.item.location}</span>
        <a href={props.item.googleMapsUrl} className="gray">
          {props.item.googleMapsUrl}
        </a>
        <h3 className="card--title">{props.item.title}</h3>
        <span className="bold">
          {props.item.startDate} - {props.item.endDate}
        </span>
        <p>{props.item.description}</p>
      </div>
    </div>
  );
}
