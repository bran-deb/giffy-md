import React from "react";

export const Gif = ({ id, title, image }) => {
    return (
        <div key={id}>

            <h4>{title}</h4>
            <img src={image} alt='' />

        </div>
    )
}
