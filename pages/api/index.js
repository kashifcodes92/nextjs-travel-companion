import axios from "axios";

const url = 
    "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary"

export const getPlacesData = async (type, sw, ne) => {
    try {
        const {data: {data},
    } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
        params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
              'X-RapidAPI-Key': '7feba04e9amsh3b0e84cdfce33cdp16d41fjsn5a77b51fbdab'      
          }
    });     
    return data;  
    } catch (error) {
        console.log(`Fetch data Error: ${error}`)
    }
}