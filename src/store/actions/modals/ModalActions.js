import { 
    SHOW_MODAL,
    HIDE_MODAL
} from './type'


export const showModal = (type) => async dispatch => dispatch({
    type: SHOW_MODAL,
    payload: type
})

export const hideModal = (type) => async dispatch => dispatch({
    type: HIDE_MODAL,
    payload: type
})





