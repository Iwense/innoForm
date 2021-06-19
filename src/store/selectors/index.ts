import { RootState } from './../index';

// Lists 
export const getFiledsList = (state: RootState) => state.fieldsList.list;
export const getElementsList = (state: RootState) => state.elements.list;