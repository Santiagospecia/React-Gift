export const getGift = async (category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=WdQ9ijZz8RZn3mklHaQQbHOK6WC7ZO2y&q=${category}&limit=5`
    const resp = await fetch(url);
    const {data} = await resp.json();
  
    const gift = data.map(img =>({
        id : img.id,
        title : img.title,
        url: img.images.downsized_medium.url,
    }))
    //console.log(gift) //por que vemos 4 console log si el array tiene dos elementos ? Strictmode de react, lo desabilitamos, esta en el main

    return gift;
}
