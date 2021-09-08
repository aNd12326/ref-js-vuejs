
// import { owners } from "./data/heroes";

import dea from '../data/heroes'


// const getHeroesByID = (id) =>{
//     return dea.find( hero => hero.id === id)
// }

export const getHeroById = (id) => dea.find( hero => hero.id === id)

const getHeroesByOwner = (owner) => dea.filter( hero => hero.owner === owner)

export default getHeroesByOwner



// ASI DE IMPORTA E EXPORTA DESDE EL INDEX HACOA LA CARPETA BASE
// import {getHeroById} from './bases/08-imp-exp'

// import oka from './bases/08-imp-exp'

// console.log(getHeroById(2));

// console.log((oka('Marvel')));


