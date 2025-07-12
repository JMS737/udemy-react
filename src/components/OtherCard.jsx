import React from "react";

export default function OtherCard(props) {
    return (
        <div className="note">
            <h1>{props.name}</h1>
            <p>{props.tel}</p>
            <img alt="avatar" src={props.img} />
        </div>
    )
}