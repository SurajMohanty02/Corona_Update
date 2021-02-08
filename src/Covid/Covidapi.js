

export const Covidapi=()=> {
    return (
        fetch("https://coronavirus-19-api.herokuapp.com/countries ").
        then((response)=>response.json()
        ).catch((error)=>console.log("error",error))
         )
}



