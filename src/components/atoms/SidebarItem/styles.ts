import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../styles/Colors";

export const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    padding: "16px 12px 16px 24px",
    cursor: "pointer",
    width: "100%",
    boxSizing:'border-box',
    '&:hover': {
      backgroundColor: Colors.hoverWhite,
      transition: "background-color 0.1s",
    },
 
  },
  title: {

  },
  active:{
  }
});
