import { FETCH_TOUR_BY_ID } from "../constants/actionTypes";

export default (state = { tour: {} }, action) => {

    switch (action.type) {

        case FETCH_TOUR_BY_ID :
            return { ...state, tour: action.payload };
        default :
            return state;

    }

}