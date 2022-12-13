import Http from '../utils/Http'
import {
    actionSetAccountDetails,
  } from '../store/account/actionCreators'

  export function accountDetails() {
    return async (dispatch) => {
  
      return Http.get('account/view')
        .then((response) => {
          dispatch(actionSetAccountDetails(response.data.data))
        })
        .catch((error) => {
          console.log(error)
          // TODO Handle error throw a snackbar, alert, toast, or something
        })
    }
  }