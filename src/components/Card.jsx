import React from "react";

export default function Card({name, tel, img}) {
    return (
      <div className="note">
        <h1>{name}</h1>
        <p>{tel}</p>
        <img alt="avatar" src={img} />
      </div>
    );
}