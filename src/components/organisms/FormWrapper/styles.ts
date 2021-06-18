import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../styles/Colors";

export const useStyles = makeStyles({
  wrapper: {
   display: 'flex',
   height: 'max-content',
   width: 400,
   padding: 24,
   borderRadius: 4,
   boxShadow: '0 0 10px #e2e2e2',
   color: Colors.textColor,
   background: Colors.white,
  },
  
});
