import axios from "axios";

const apiClient = axios.create({
    baseURL:'https://my-json-server.typicode.com/wesllyt20/eventosapi',
    withCredentials: false,
    headers: {
        Aceppt: 'application/json',
        'Content-Type':'application/json'
    }
})

export default {
    obtenerEventos(){
       return apiClient.get('/eventos')
    }
}
 