import { createModel } from "@rematch/core";
import { RootModel } from ".";
import { ButtonElement, DateElement, IDateField, IInputTextOptions, InputTextElement } from "../../utils/elementsClass";

interface IItem {
  id:number;
  type: string;
  element: InputTextElement | DateElement | ButtonElement |null
}

type TList  = Array<IItem> | []

const list : TList= [
    // {id: 1, type : 'inputText', element: new InputTextElement({label: "ss",fieldType: "ss",max: 10,keyName: "ss", mask: "ss"})},
]

const lastButton:IItem = {
  id: Date.now() + 42 ,
  type: 'buttonField',
  element: new ButtonElement({children: "Отправить"})
}

const lastElement : TList= []

type IProps = IDateField | IInputTextOptions | any

export const elements = createModel<RootModel>()({
  state: {
    error: null,
    list: [...list , ...lastElement],
  },
  reducers: {
    append(state, item: IItem){
      return {
        ...state,
        list: [...state.list, item]
      }
    },
    checkFieldAmount(state){
      console.log("State - ", state)
      return {
        ...state,
        list: state.list.length === 1
        ? state.list[0].type !== 'buttonField' 
        ? [...state.list, lastButton ] : []
        : state.list
      }
    },
    remove(state, id:number){
      return {
        ...state,
        list: state.list.filter((el:IItem) => el.id !== id)
      }
    }
  },
  effects: (dispatch) => ({
    addElement(payload, rootState){
        const props:IProps = {}

        let newItem: IItem = {
          id: Date.now(),
          type: payload,
          element: null
        }


        switch (payload) {
          case 'inputText':{
            props.label = "";
            props.fieldType = "";
            props.max = 100;
            props.keyName = "";
            props.mask = "";
            newItem  = {...newItem, element: new InputTextElement(props)}
            break;
          }
          case 'dateField':{
            props.date = Date.now()
            props.label = ""
            newItem  = {...newItem, element: new DateElement(props)}
            break;
          }
          case 'inputNumber':{
            props.label = "";
            props.fieldType = "";
            props.max = 100;
            props.keyName = "";
            props.mask = "";
            newItem  = {...newItem, element: new InputTextElement(props)}
            break;
          }
          case 'logicField':{
            props.label = "";
            props.fieldType = "";
            props.max = 100;
            props.keyName = "";
            props.mask = "";
            newItem  = {...newItem, element: new InputTextElement(props)}
            break;
          }

          default:
            break;
        }

        dispatch.elements.append(newItem)
        dispatch.elements.checkFieldAmount()
    }
  }),
});
