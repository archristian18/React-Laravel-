import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(() => ({

container: {
    boxShadow: "0px 0px 2px #e5e5e5",
    width: "100%",
    // height: "100%",
    paddingBottom: "50px",
    paddingTop: "50px",
    paddingLeft: "50px",
    paddingRight: "50px",
    marginRight: "10px"
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
    boxShadow: "1px 1px 1px #e5e5e5",
    padding: "50px 20px 50px",
},
action: {
    paddingRight: "10px",
    float: "left",
},

}))

export default useStyles
