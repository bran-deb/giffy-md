import React, { useState, useEffect } from "react"
import { getGifs } from "../services/getGifs"
import { Gif } from "./Gif"


export const ListGifs = ({ keyword }) => {
    const [gifs, setGifs] = useState([])

    useEffect(() => {
        getGifs({ keyword })
            .then(gifs => setGifs(gifs))
    }, [keyword])

    return (
        gifs.map(({ id, title, image }) => (
            <Gif
                key={id}
                title={title}
                image={image}
            />
        ))
    )
}
