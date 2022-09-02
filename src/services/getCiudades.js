const keyApi = '661b636d251fa71ea763feebfd4e354e'

const getCiudades = async (Ciudad = 'Buenos Aires') => {

    const apiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${Ciudad}&limit=5&appid=${keyApi}`
    return await fetch(apiUrl)
    .then(res => res.json())
    .then(response =>{ 
        const Ciudades = response.map(singleCity => {
            const {country,name,lat,lon} = singleCity
            return {country,name,lat,lon}
        })
        return Ciudades;
    })
}

export default getCiudades;