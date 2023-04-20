import { FETCH_TOUR_BY_ID } from "../constants/actionTypes";
import * as api from './../api';

export const getTour = (id) => async (dispatch) => {

    try {
        
        const { data } = await api.fetchTour(id);

        dispatch({ type: FETCH_TOUR_BY_ID, payload: data });

    } catch (error) {
        console.log(error.message);
    }

}