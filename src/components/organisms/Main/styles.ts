import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../styles/Colors";

export const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    color: Colors.gray,
    overflow:"auto",
    padding: '12px 0',
  },
  
}, {index: 3});
