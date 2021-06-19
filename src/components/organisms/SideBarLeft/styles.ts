import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../styles/Colors";

export const useStyles = makeStyles(() => ({
   wrapper:{  
      position: 'absolute', 
      top: 0,
      left: -280,
      background: Colors.white,
      color: Colors.gray,
      width: 250,
      height: "fit-content",
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
      alignItems: "center",
      borderRadius: 4,
   },
   imageBox:{
      width: 100,
   },
   image:{
      maxWidth: "100%",
   },
}))