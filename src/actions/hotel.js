import { RECEIVE_HOTELS } from "../types";
import { getHotels } from "../api/api";
export function receiveHotels(hotels) {
  return {
    type: RECEIVE_HOTELS,
    hotels,
  };
}
export function handleGethotels() {
  return async (dispatch) => {
    return await getHotels().then((hotels) => {
      dispatch(receiveHotels(hotels));
    });
  };
}
