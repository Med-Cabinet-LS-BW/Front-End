

const Reducer = (state = [], action) => {
    switch (action.type) {
    case 'ADD_STRAIN':
    return state.concat([action.data])
    case 'FILTER_STRAIN':
    return state.filter((strain) => strain.id === action.id)
    case 'FAVORITE_STRAIN':
    return state.map((strain) => strain.id === action.id ? { ...strain, editing: !strain.editing } : strain)
    
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
    treatment: action.data.newTreatment,
    intake: action.data.newIntake,
    dosage: action.data.newDosage,
    schedule: action.data.newSchedule,
    ailments: action.data.newAilments,
    editing: !treatment.editing
    }
    } else return treatment;
    })

    default:
    return state;
    }
    }
    export default Reducer;