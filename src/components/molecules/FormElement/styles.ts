import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../styles/Colors";

export const useStyles = makeStyles({
  wrapper: {
    position: 'relative',
    color: Colors.textColor,
    fontSize: 14,
    width: "100%",
    boxSizing: 'border-box',
    border: `2px solid transparent`,
    padding: '8px 24px 16px 24px',
    borderRadius: 4,
    height: '100%',
    '&:hover': {
      border: `2px solid ${Colors.blue}`
    },
  },
  addButton:{
    position: 'absolute',
    bottom: -10,
    right: 'calc(50% - 10px)'
  },
  settings: {
    position: 'absolute',
    top: -20,
    right: 'calc(50% - 37px)'
  },
  paper:{
    background: Colors.darkBlue,
    borderRadius: 12,
    padding: '12px 24px' ,
    marginTop: 12,
  },
  paperText:{
    color:Colors.white,
    fontSize:14,
    cursor: 'pointer',
    fontWeight: 600,
    marginTop:4,
    '&:hover': {
      color:Colors.hoverWhite,
    }
  },
});
