import { createModel } from "@rematch/core";
import { RootModel } from ".";

const list =[
  {
    id: 1,
    title: "Текстовое поле",
    type: "inputText"
  },
  {
    id: 2,
    title: "Числовое поле",
    type: "inputNumber"
  },
  {
    id: 3,
    title: "Поле с датой",
    type: "dateField"
  },
  {
    id: 4,
    title: "Логическое поле",
    type: "logicField"
  },
]

export const fieldsList = createModel<RootModel>()({
  state: {
    error: null,
    list,
  },
  reducers: {
  },
  effects: (dispatch) => ({
  
  }),
});
