import { createModel } from "@rematch/core";
import { RootModel } from ".";

const initialState = [
    {type : 'input', },
]

export const elements = createModel<RootModel>()({
  state: {
    error: null,
    list: initialState,
  },
  reducers: {
  },
  effects: (dispatch) => ({
    addElement(payload, rootState){
        
    }
  }),
});
