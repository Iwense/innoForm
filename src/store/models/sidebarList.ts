import { createModel } from "@rematch/core";
import { RootModel } from ".";

const initialState = {
   list: [
     {
      title: "",
      link: "/"
     },
   ]
}

export const sidebarList = createModel<RootModel>()({
  state: {
    error: null,
    ...initialState,
  },
  reducers: {
  },
  effects: (dispatch) => ({
  
  }),
});
