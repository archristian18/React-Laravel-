import * as types from './actionTypes'

export function actionSetAccountDetails(accountDetails) {
    return {
      type: types.SET_ACCOUNT_DETAILS,
      payload: accountDetails,
    }
  }