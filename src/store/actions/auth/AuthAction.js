import {
    LOGIN_REQUEST,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    REGISTER_FAIL,
    REGISTER_REQUEST,
    REGISTER_SUCCESS
} from './types'
import apiUrl from '../../../../config';

export const registerUser = (userData) => async dispatch => {
    try {

        // Begin request
        dispatch({
            type: REGISTER_REQUEST,
        })

        // 1. Send request
        const result = await fetch(`${apiUrl}/accounts/register`, {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                "Content-Type": "application/json"
            }
        })

        const resultData = await result.json();

        console.log(resultData.message)
        // 2. Process data
        if(resultData.success) {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: resultData
            })
        } else {
            dispatch({
                type: REGISTER_FAIL,
                payload: resultData.message ? resultData.message : "Error unknown"
            })
        }       

        // 3. Dispatch an action type
    //    if(resultData.success) {
    //         dispatch({
    //             type: LOGIN_SUCCESS,
    //             payload: resultData
    //         })
    //    } else {
    //         dispatch({
    //             type: LOGIN_FAIL,
    //             payload: 'Email or password incorrect.'
    //         })
    //    }

       // Return data
       return resultData;
        
    } catch (error) {
        
    }
} 