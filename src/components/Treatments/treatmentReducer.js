const treatmentReducer = (state = [], action) => {
    switch (action.type) {
    case 'ADD_TREATMENT':
    return state.concat([action.data])
    case 'DELETE_TREATMENT':
    return state.filter((treatment) => treatment.id !== action.id)
    case 'EDIT_TREATMENT':
    return state.map((treatment) => treatment.id === action.id ? { ...treatment, editing: !treatment.editing } : treatment)
    case 'UPDATE':
    return state.map((treatment) => {
    if (treatment.id === action.id) {
    return {
    ...treatment,
    title: action.data.newTitle,
    message: action.data.newMessage,
    editing: !treatment.editing
    }
    } else return treatment;
    })
    default:
    return state;
    }
    }
    export default treatmentReducer;