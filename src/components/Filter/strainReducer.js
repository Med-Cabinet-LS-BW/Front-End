const strainReducer = (state = [], action) => {
    switch (action.type) {
    case 'ADD_STRAIN':
    return state.concat([action.data])
    case 'FILTER_STRAIN':
    return state.filter((strain) => strain.id !== action.id)
    case 'FAVORITE_STRAIN':
    return state.map((strain) => strain.id === action.id ? { ...strain, editing: !treatment.editing } : strain)
    case 'UPDATE':
    return state.map((strain) => {
    if (strain.id === action.id) {
    return {
    ...strain,
    title: action.data.newTitle,
    message: action.data.newMessage,
    editing: !strain.editing
    }
    } else return treatment;
    })
    default:
    return state;
    }
    }
    export default strainReducer;