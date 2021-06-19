
import { Models } from '@rematch/core'
import { fieldsList } from './fieldsList';
import { elements } from './elements';


export interface RootModel extends Models<RootModel> {
   fieldsList: typeof fieldsList;
   elements: typeof elements;
}

export const models: RootModel = { 
   fieldsList,
   elements
 }