import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({

AppBar: {
    position: 'sticky',
},

ToolBar: {
    justifyContent: 'space-between',
},

textNavBar: {
    display: 'flex',
    justifyContent: 'flex-start',
},
Typography: {
    paddingLeft: '10px',
}

}))

export default useStyles
