import axios from "axios";

const server = axios.create({
    baseURL: 'https://crpto-transfer.vercel.app/api',
    
})

export default server