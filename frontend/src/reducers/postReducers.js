
import {
    USER_POST_REQUEST,
    USER_POST_SUCCESS,
    USER_POST_FAIL,
    USER_POST_RESET,
    POST_LIST_REQUEST,
    POST_LIST_SUCESSS,
    POST_LIST_FAIL,
    POST_DELETE_REQUEST,
    POST_DELETE_SUCESSS,
    POST_DELETE_FAIL,
    USER_THEME_SUCCESS,
    USER_THEME_REQUEST,
    USER_THEME_FAIL,
    CHOOSE_THEME_REQUEST,
    CHOOSE_THEME_SUCCESS,
    CHOOSE_THEME_FAIL,
    USER_PROFILE_REQUEST,
    USER_PROFILE_SUCCESS,
    USER_PROFILE_FAIL

} from "../constants/postConstants";


export const postCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_POST_REQUEST:
        return { loading: true }
      case USER_POST_SUCCESS:
        return { loading: false, success: true, post: action.payload }
      case USER_POST_FAIL:
        return { loading: false, error: action.payload }
      case USER_POST_RESET:
        return {}
      default:
        return state
    }
  }

  export const postListReducer = (state = { links: [] }, action) => {
    switch (action.type) {
      case POST_LIST_REQUEST:
        return { loading: true, links: [] }
      case POST_LIST_SUCESSS:
        return {
          loading: false,
          links: action.payload.links
        }
      case POST_LIST_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
}

export const postDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_DELETE_REQUEST:
      return { loading: true }
    case POST_DELETE_SUCESSS:
      return { loading: false, success: true }
    case POST_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}


export const themeUpload = (state = {}, action) => {
  switch (action.type) {
    case USER_THEME_REQUEST:
      return { loading: true }
    case USER_THEME_SUCCESS:
      return { loading: false, success: true }
    case USER_THEME_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const chooseReducer = (state = {}, action) => {
  switch (action.type) {
    case CHOOSE_THEME_REQUEST:
      return { loading: true }
    case CHOOSE_THEME_SUCCESS:
      return { loading: false, success: true }
    case CHOOSE_THEME_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}


export const uploadprofileReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_PROFILE_REQUEST:
      return { loading: true }
    case USER_PROFILE_SUCCESS:
      return { loading: false, success: true }
    case USER_PROFILE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
