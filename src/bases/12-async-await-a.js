// FUNcion ASYNCRONA = RETORNA UNA PROMESA POR DEFECTO
// FUNCION AWAIT = SOLO PUEDE SER UTILIZADO DENTRO DE UNA FUNCION ASYNCRONA
const miPromesa = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            // resolve('Tenemos un valor en la promesa')
            reject('REJECT EN MI PROMESA')
        }, 1000);
    })
}

const medirTiempoAsync = async () => {
    
    try {
        console.log('Inicio');
    
        const respuesta = await miPromesa()
        console.log(respuesta);
        
        console.log('Fin');
    
        return 'fin de medir tiempo async'
    } catch (error) {
        // return 'catch en medirTiempoAsync'
        throw 'Error en medir tiempo Async'
    }
    
}
 
medirTiempoAsync()
    .then(console.log)
    .catch(console.log)






