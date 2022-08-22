import axios from "axios"

let api = 'http://188.166.76.22:30001/api/search?'

export async function search(title){
 let data =   await axios.get(`${api}q=name:${title}`);
 console.log(data);
 return data;
}