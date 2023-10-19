import axios from "axios";


const URL_API = 'https://api.sampleapis.com/simpsons/characters';

const cards = async () => {
    try {
        const response = await axios.get(URL_API);
        return response.data.items;
    } catch (error) {
        throw error;
    }
}

export default cards;