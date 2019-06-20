import {
  ST_UPDATE_USER,
  FL_UPDATE_USER,
  SUC_UPDATE_USER,
  ST_GET_USER,
  USER_FETCHED,
  FAIL_REQUEST,
  FETCH_USER_INVITATIONS,
  FETCH_FOLLOWERS,
  FETCH_FOLLOWINGS,
} from '../actions/types';

const initialState = {
  isLoading: false,
  userProfile: null,
  userInvitations: null,
  userFollowers: null,
  userFollowing: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ST_UPDATE_USER:
      return { ...state, isLoading: true };
    case FL_UPDATE_USER:
      return { ...state, isLoading: false };
    case SUC_UPDATE_USER:
      return { ...state, isLoading: false };
    case ST_GET_USER:
      return { ...state, isLoading: true };
    case USER_FETCHED:
      return { ...state, isLoading: false, userProfile: payload };
    case FETCH_USER_INVITATIONS:
      return { ...state, isLoading: false, userInvitations: payload };
    case FAIL_REQUEST:
      return { ...state, isLoading: false };
    case FETCH_FOLLOWERS:
      return { ...state, isLoading: false, userFollowers: payload };
    case FETCH_FOLLOWINGS:
      return { ...state, isLoading: false, userFollowing: payload };
    default:
      return state;
  }
};
