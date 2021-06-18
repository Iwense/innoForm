
import { Models } from '@rematch/core'
import { sidebarList } from './sidebarList';
import { elements } from './elements';


export interface RootModel extends Models<RootModel> {
   sidebarList: typeof sidebarList;
   elements: typeof elements;
}

export const models: RootModel = { 
   sidebarList,
   elements
 }