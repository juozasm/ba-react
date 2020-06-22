export async function getData(url, params) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
      "x-rapidapi-key": "8b9b7ad900mshc8b27d8c3d11d2bp1d3b33jsn71891cf7ee05",
    },
  })

  if (response.ok) return response.json()
}
