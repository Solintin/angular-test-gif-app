// Action Creators
import * as type from "./Types";
import axios from "../../Utils/axios";
import { history } from "../../History/history";
import toast from "react-hot-toast";

const logoutSuccess = () => {
  return {
    type: type.LOGOUT,
  };
};
const signOut = () => {
  return (dispatch) => {
    dispatch(logoutSuccess());
    window.localStorage.removeItem("persist:root");
    toast.success("LogOut  Successfull");
    history.replace("/logout");
  };
};

const getTrips = () => {
  return (dispatch, getState) => {
    const { rider } = getState();
    const { profile } = rider;   
     try {
      axios
        .get("/api/rider/trip/unconfirmed/ ", {
          headers: {
            Authorization: `Bearer ${profile.access_token}`,
          },
        })
        .then((res) => {
          console.log(res);
          dispatch({ type: "GET_TRIPS", payload: res.data });
        });
    } catch (error) {
      console.log(error);
    }
  };
};
const getAvailableTrips = () => {
  return (dispatch, getState) => {
    const { rider } = getState();
    const { profile } = rider;   
     try {
      axios
        .get("/api/rider/trip/ongoing", {
          headers: {
            Authorization: `Bearer ${profile.access_token}`,
          },
        })
        .then((res) => {
          console.log(res);
          dispatch({ type: "GET_AVAILABLE_TRIPS", payload: res.data });
        });
    } catch (error) {
      console.log(error);
    }
  };
};
const getRiderTrips = () => {
  return (dispatch, getState) => {
    const { rider } = getState();
    const { profile } = rider;   
     try {
      axios
        .get("/api/rider/trip/", {
          headers: {
            Authorization: `Bearer ${profile.access_token}`,
          },
        })
        .then((res) => {
          console.log(res);
          dispatch({ type: "GET_RIDER_TRIPS", payload: res.data });
        });
    } catch (error) {
      console.log(error);
    }
  };
};
const updateStatus = (id, status) => {
  return (dispatch, getState) => {
    const { rider } = getState();
    const { profile } = rider;
    dispatch({ type: "ACTION_BEGIN" });
    dispatch(getTrips());
    try {
      axios
        .put(
          `/api/trip/${id}/`,
          { status },
          {
            headers: {
              Authorization: `Bearer ${profile.access_token}`,
            },
          }
        )
        .then((res) => {
          console.log(res);
          status === "accepted"
            ? toast.success("Trip Accepted")
            : toast.error("Trip Rejected");
                history.replace('/rider/notifications')
          dispatch({ type: "ACTION_END" });
        });
    } catch (error) {
      dispatch({ type: "ACTION_END" });

      console.log(error);
    }
  };
};

export { signOut, getRiderTrips, getTrips, updateStatus, getAvailableTrips };
