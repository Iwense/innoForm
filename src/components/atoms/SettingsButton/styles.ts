import { makeStyles } from '@material-ui/core/styles'
import { Colors } from '../../../styles/Colors'

export const useStyles = makeStyles({
    button: {
        borderRadius: 25,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 'fit-content',
        height: 'fit-content',
        margin: 0,
        background: Colors.blue,
        cursor: 'pointer',
    },
    moveBox:{
        dispaly: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: Colors.hoverBlue,
        padding: '4px 4px 4px 8px',
        borderRadius: '12px 0 0 12px',
    },
    otherBox:{
        dispaly: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '4px 8px 4px 4px',
        borderRadius: '0 12px 12px 0 ',
    },
    icon:{
        width: 18,
        height: 18,
        fill: Colors.white,
        '&:hover':{
            fill:Colors.hoverWhite
        }
    },
    marginIcon: {
        marginRight: 4,
    }

}, {index: 1})