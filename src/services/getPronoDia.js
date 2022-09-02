const keyApi = 'b2b8c002defd448daa3d6ad9af63bf1f';
const getPronoDia = async (lat = '-34.6075682',lon= '-58.4370894') => {
    const apiUrl = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&lang=es&key=${keyApi}`
    return await fetch(apiUrl)
        .then(respuesta => respuesta.json())
        .then(response => {
                const {city_name,app_temp,weather,rh,wind_spd,vis,pres} = response.data[0] 
                const {description,icon} = weather
                            
                return {city_name,app_temp,description,icon,rh,wind_spd,vis,pres}
        })

}

export default getPronoDia;