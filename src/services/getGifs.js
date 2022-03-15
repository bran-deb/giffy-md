
const API_KEY = 'i6WreDgXbyKNG06qdfOz08YlRDqCbtUx'



export function getGifs({ keyword = 'morty' } = {}) {
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`

    return fetch(URL)
        .then(res => res.json())
        .then(response => {
            const { data = [] } = response

            if (Array.isArray(data)) {
                const gifs = data.map(gif => {
                    const { id, title, images } = gif
                    const { url: image } = images.downsized_medium
                    return { id, title, image }

                })
                return gifs
            }
        })
}