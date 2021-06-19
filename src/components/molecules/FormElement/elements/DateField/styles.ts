import { makeStyles } from '@material-ui/core/styles'
import { Colors } from '../../../../../styles/Colors'
import { IProps } from "./index";

export const useStyles =  makeStyles(() => ({
    input:{
        boxSizing: 'border-box',
        width: "100%",
        border: `1px solid ${Colors.hoverWhite}`,
        background: Colors.lightBlue,
        padding: 8,
        borderRadius: 4,
    },
    inputLabel:{
      fontSize: 16,
      color: Colors.gray,
      fontWeight: 500,
    },
    inputBox:{
      display: 'flex',
      flexDirection: 'column',
    },
    error: {
      color: Colors.red,
      fontSize: 12,
      fontWeight: 500,
      marginLeft: 8,
    },
}), {index:1});