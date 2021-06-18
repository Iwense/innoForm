import { makeStyles } from '@material-ui/core/styles'
import { Colors } from '../../../styles/Colors'

export const useStyles = makeStyles({
    button: {
        padding:0,
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    text: {
        borderRadius: 5,
        fontWeight: 700,
        height: '100%',
        width: '100%',
        padding: '8px 40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        whiteSpace: 'nowrap',
    },

}, {index: 1})