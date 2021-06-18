import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../styles/Colors";

export const useStyles = makeStyles({
  wrapper: {
   display:'flex',
   alignItems: 'center',
   color: Colors.white,
   background: Colors.blue,
   height: '100%',
   padding: '0 12px',
  },
  
});
