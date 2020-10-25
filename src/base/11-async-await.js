//const getImagenPromesa = () => new Promise(resolve => resolve('https://ajskdhaskjad.com'));
//getImagenPromesa().then(console.log);

export const getImagen = async() => {
    try {
        const API_KEY = '3h0ZSmmL8NSopDkQb8cZposiGYQGAwZd';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
        const {data} = await  resp.json();
        const {url} = data.images.original;
        return url
    }catch(error) {
        // Manejo Error
        return 'No existe';
    }
}