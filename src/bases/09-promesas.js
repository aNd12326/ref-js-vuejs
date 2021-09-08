import {getHeroById} from './bases/08-imp-exp'
//resolve = resolver
// reject = si quiero retornar un error


// console.log('Inicio');
// new Promise( (resolve,reject) => {
//     console.log('cuerpo de la promesa');
//     resolve('Promesa Resuelta')
// })
// .then( console.log )
// .catch( console.log )

// console.log('FIN');


const getHeroByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {

        setTimeout(() => {
            
            const hero = getHeroById( id )

            if (hero) {
                resolve( hero )
            }else {
                reject('Heroe no existe')
            }

        }, 1000);

    });

}

getHeroByIdAsync(3)
    .then( h => {
        console.log(`el heroe es: ${h.name}`);
    })
    .catch(console.log)


