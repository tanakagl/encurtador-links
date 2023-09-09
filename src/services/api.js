//Chave API: 8879d90277d6406f46b88f4e2c05414be1b9b912
import axios from "axios";

export const key = "8879d90277d6406f46b88f4e2c05414be1b9b912"

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api
