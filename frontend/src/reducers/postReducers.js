
import {
    USER_POST_REQUEST,
    USER_POST_SUCCESS,
    USER_POST_FAIL,
    USER_POST_RESET,
    POST_LIST_REQUEST,
    POST_LIST_SUCESSS,
    POST_LIST_FAIL

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
