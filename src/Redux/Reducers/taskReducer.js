// const initialState = [
//     {id:1,nombre:'Comer',finalizada:false},
//     {id:2,nombre:'Cepillarse',finalizada:true},
//     {id:3,nombre:'Correr',finalizada:false},
//     {id:4,nombre:'Salir',finalizada:false},
// ];
const taskReducer = (state = [], action) => {

    switch (action.type) {
        case 'INSERTAR':
            
            return [
                ...state,
                {
                    id:action.id,
                    nombre:action.nombre,
                    finalizada:false
                }
            ];
        case 'ACTUALIZAR':
               return state.map(data => {
                   if(data.id === action.id)
                   {
                       return {
                           ...data,
                           finalizada:!data.finalizada
                       };
                   } else return data;
               });
        
        case 'Eliminar':
               return state.filter(data => data.id !== action.id);
        default:
            return state;
    }
}

export default taskReducer;