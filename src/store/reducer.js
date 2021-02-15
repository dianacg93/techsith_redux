const initialState = {
    age: 21,
    history: []
}

const reducer = (state = initialState, action) => {
    const newState = {... state}

    switch (action.type) {
        case "AGE_UP" :
            return {
                ...state,
                age: state.age + action.value,
                history: state.history.concat({age:state.age + action.value, id: Math.random()})
            }
        case "AGE_DOWN" :
            return {
                ...state,
                age: state.age - action.value,
                history: state.history.concat({age:state.age - action.value, id: Math.random()})
            }
        case "DEL_ITEM" :
            return {
                ...state,
                history: state.history.filter((el) => el.id !== action.id)
            }
        default:
            break;
    }

    return newState;
}

export default reducer;