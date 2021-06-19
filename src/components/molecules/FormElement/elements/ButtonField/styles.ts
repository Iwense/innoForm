import { makeStyles } from '@material-ui/core/styles'
import { Colors } from '../../../../../styles/Colors'

export const useStyles = makeStyles({
    button: {
        background: Colors.blue,
        padding:'4px 12px',
        '&:hover': {
            background: Colors.blue,
            boxShadow: `0 0 4px ${Colors.hoverBlue}`
        },
    },
    text: {
        color: Colors.white,
        borderRadius: 4,
        fontWeight: 500,
        fontSize:14,
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

}, {index: 1})