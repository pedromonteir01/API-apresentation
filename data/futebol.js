import axios from "axios";


const URL_API = '/api/fut';

const teams = async () => {
    try {
        const response = await axios.get(URL_API);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export default teams;