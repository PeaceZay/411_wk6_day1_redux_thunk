const url = "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"

export const addCar = (car) => {
    return {
        type: 'ADD_CAR',
        value: car
    }
}

export const removeCar = (index) => {
    return {
        type: 'REMOVE_CAR',
        value: index
    }
}
const makesAction = (makes)=>{
    return {
        type: "FETCH_MAKES",
        value: makes
    }
}
export const fetchMakes = () => {
    return (dispatch) => {
        fetch(url)
        .then(res=>res.json())
        .then((response)=> {
            dispatch(makesAction(response.Results))
        })
    }
}

export const deleteMake = (index) => {
    return {
        type:"DELETE_MAKE",
        value: index
    }
}