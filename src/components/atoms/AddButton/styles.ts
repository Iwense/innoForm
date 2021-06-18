import { makeStyles } from '@material-ui/core/styles'
import { Colors } from '../../../styles/Colors'

export const useStyles = makeStyles({
    button: {
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 20,
        height: 20,
        padding: 2,
        margin: 0,
        background: Colors.blue,
        cursor: 'pointer',
        '&:hover':{
            background: Colors.hoverBlue,
        }
    },
    icon:{
        width: 16,
        height: 16,
        fill: Colors.white,
    },

}, {index: 1})