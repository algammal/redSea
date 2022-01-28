import {
  RECEIVE_HOTELS,
  SEARCH_HOTELNAME,
  SEARCH_CHECKOUTDATE,
  SEARCH_CHECKINDATE,
  SEARCH_ADULT,
  SEARCH_CHILD,
  SEARCH_DROPDOWN,
  SEARCH_BTN,
} from "../types";
let initialState = []
const reducer = (state = initialState, action) => {
  if (action.type === RECEIVE_HOTELS) {
    return {
      ...state,
      hotels: [...action.hotels]
      //...action.hotels
    };
  } else if (action.type === SEARCH_HOTELNAME) {
    return {
      ...state,
      value: action.hotelname,
    };
  } else if (action.type === SEARCH_CHECKOUTDATE) {
    return {
      ...state,
      checkoutvalue: action.checkout,
    };
  } else if (action.type === SEARCH_CHECKINDATE) {
    return {
      ...state,
      checkinvalue: action.checkin,
    };
  } else if (action.type === SEARCH_ADULT) {
    return {
      ...state,
      adult: action.adult,
    };
  } else if (action.type === SEARCH_CHILD) {
    return {
      ...state,
      child: action.child,
    };
  } else if (action.type === SEARCH_DROPDOWN) {
    return {
      ...state,
      dropdown:
        state.dropdown === false
          ? state.dropdown !== action.dropdown
          : state.dropdown === action.dropdown,
    };
  } else if (action.type === SEARCH_BTN) {
    return {
      ...state,
      searchItems: [
        {
          oneStar: action.oneStar === false ? false : true,
          twoStar: action.twoStar === false ? false : true,
          threeStar: action.threeStar === false ? false : true,
          fourStar: action.fourStar === false ? false : true,
          fiveStar: action.fiveStar === false ? false : true,
        }
      ]
    };
  }
  return state;
};
export default reducer;
