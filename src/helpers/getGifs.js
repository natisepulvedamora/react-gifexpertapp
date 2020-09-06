export const getGifs = async(categoria) => {    
        const apiKey='B0qECaENyRaEoN9VYIv4KHWOovaNfwVT';
        const url=`http://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=${apiKey}`;
        const respuesta=await fetch(url);
        const {data}=await respuesta.json();
        //console.log(categoria);
       // console.log(data);
 
        const gifs=data.map(img=>{
            return{
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        });
       return gifs;
   
    
}

