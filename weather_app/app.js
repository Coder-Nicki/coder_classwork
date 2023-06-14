btn = document.getElementById('submit-location')

btn.addEventListener('click', (e) => {
    const ipt = document.getElementById("location");
    const response = getWeatherFromApi(ipt.value)
    console.log(response)
})

try {
    async function getWeatherFromApi(location) {
        let url = `https://api.api-ninjas.com/v1/weather?city=${location}`
        const apiKey = 
        const response = await fetch(url, {
            headers: {
            "X-API-Key": apiKey,
        },
    });
        const data = await response.json();
        
        return data
    } 
}
   