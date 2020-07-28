import BASE_URL from "./baseURL"
import axios from 'axios' 

export default async function request(url = "/", method = "GET", data) {
  const response = await axios(`${BASE_URL}${url}`, {
    method, // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow",
    referrerPolicy: "no-referrer", 
    body: JSON.stringify(data), 
  })
  return response.data
}
