



// const treatmentReducer = (state = [], act) => {
//     switch (act.type) 
    
//     {
//     case 'ADD_TREATMENT':
//     return state.concat([act.data])
//     case 'DELETE_TREATMENT':
//     return state.filter((treatment) => treatment.id !== act.id)
//     case 'EDIT_TREATMENT':
//     return state.map((treatment) => treatment.id === act.id ? { ...treatment, editing: !treatment.editing } : treatment)
    
//     case 'UPDATE':
//     return state.map((treatment) => {
//     if (treatment.id === act.id) {
//     return {
//     ...treatment,
//     title: act.data.newTitle,
//     message: act.data.newMessage,
//     editing: !treatment.editing
//     }
//     } else return treatment;
//     })
//     default:
//     return state;
//     }
//     }
//     export default treatmentReducer;


// // const treatmentReducer = (state = [], act) => {
// //     switch (act.type) 
    
// //     {
// //     case 'ADD_TREATMENT':
// //     return state.concat([act.data])
// //     case 'DELETE_TREATMENT':
// //     return state.filter((treatment) => treatment.id !== act.id)
// //     case 'EDIT_TREATMENT':
// //     return state.map((treatment) => treatment.id === act.id ? { ...treatment, editing: !treatment.editing } : treatment)
// //     case 'UPDATE':
// //     return state.map((treatment) => {
// //     if (treatment.id === act.id) {
// //     return {
// //     ...treatment,
// //     title: act.data.newTitle,
// //     message: act.data.newMessage,
// //     editing: !treatment.editing
// //     }
// //     } else return treatment;
// //     })
// //     default:
// //     return state;
// //     }
// //     }
// //     export default treatmentReducer;