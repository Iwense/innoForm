import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../styles/Colors";

export const useStyles = makeStyles(() => ({
   mainWrapper: {
      display:'flex',
      flexDirection: 'column',
      minHeight: "100vh",
      boxSizing: 'border-box',
    },
    sideBarLeft: {
      height: "100%",
      backgroundColor: "#fff",
      overflowX: "hidden",
      zIndex: 100,
      "&::-webkit-scrollbar": {
        width: 0
      },
    },
    header: {
      height: 70,
      width: "100%",
      boxSizing: 'border-box',
    },
    content: {
      background: Colors.lightBlue,
      boxSizing: 'border-box',
      padding: "12px",
      display: "flex",
      flex: 1,
    },
    contentWrapper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      width:"100%",
    },
}))