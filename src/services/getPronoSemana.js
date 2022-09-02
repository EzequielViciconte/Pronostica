const keyApi = 'b2b8c002defd448daa3d6ad9af63bf1f';
const getPronoSemana = (lat = '-34.6075682',lon= '-58.4370894') => {
    const apiUrl = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&lang=es&days=5&key=${keyApi}`
    return fetch(apiUrl)
        .then(respuesta => respuesta.json())
        .then(response => {
            const {data} = response
            const Pronostico = data.map(Dias =>{
                const {datetime,high_temp,low_temp,weather} = Dias
                const {icon,description} = weather;
                return{datetime,high_temp,low_temp,icon,description}
            })
            return Pronostico;
        })
        .catch(err=>{
            console.log(err)
        })
        


}

export default getPronoSemana;