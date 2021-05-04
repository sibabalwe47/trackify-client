import {
    SHOW_MODAL,
    HIDE_MODAL
} from '../actions/modals/type'


const initialState = {
    showModal: false,
    formType: ""
}

export const ModalReducer = (state = initialState, action) => {
    switch(action.type) {

        case SHOW_MODAL: {
            return {
                ...state,
                showModal: true,
                formType: action.payload
            }
        }

        case HIDE_MODAL: {
            return {
                ...state,
                showModal: false,
                formType: ''
            }
        }
        

        default: 
            return state;
    }
}