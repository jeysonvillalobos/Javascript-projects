let idPlus = 0;
const INSERTAR = (data) =>({
    type:'INSERTAR',
    id:idPlus++,
    nombre:data
});

const ACTUALIZAR = (id) =>({
    type:'ACTUALIZAR',
    id:id
});

const ELIMINAR = id => ({
    type:'ELIMINAR',
    id:id
});

export { INSERTAR,ACTUALIZAR,ELIMINAR };