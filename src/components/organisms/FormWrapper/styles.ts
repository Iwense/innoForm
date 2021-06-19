import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../styles/Colors";

export const useStyles = makeStyles({
  wrapper: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    height: 'max-content',
    boxSizing:'border-box',
    width: 600,
    borderRadius: 4,
    boxShadow: '0 0 10px #e2e2e2',
    color: Colors.textColor,
    background: Colors.white,
  },
  noItemsBlock:{
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 12,
  },
  title:{
    margin: '12px 0',
  },
});
