import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(() => ({

container: {
    boxShadow: "0px 0px 3px #e5e5e5",
    width: "100%",
    padding: "50px",
}, 
Typography: {
    paddingBottom: "20px",
},

field: {
    marginBottom: "13px"
},
button: {
    margin: "13px"
},
submit: {
    float: "left",
    marginRight: "13px"
},
form: {
    padding: "50px 20px 50px",
}

}))

export default useStyles
