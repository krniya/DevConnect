import axios from "axios";
import { setAlert } from "./alert";
import { GET_PROFILE, PROFILE_ERROR } from "./types";
import setAuthToken from "../utils/setAuthToken";

// * Get Current user profile
export const getCurrentProfile = () => async (dispatch) => {
    try {
        // if (localStorage.token) {
        //     setAuthToken(localStorage.token);
        // }
        const res = await axios.get("/api/profile/me");
        dispatch({
            type: GET_PROFILE,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status },
        });
    }
};
