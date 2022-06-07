import axios from "axios";

import {
    USER_POST_REQUEST,
    USER_POST_SUCCESS,
    USER_POST_FAIL,
    POST_LIST_REQUEST,
    POST_LIST_SUCESSS,
    POST_LIST_FAIL,
    POST_DELETE_REQUEST,
    POST_DELETE_SUCESSS,
    POST_DELETE_FAIL,
    USER_THEME_REQUEST,
    USER_THEME_SUCCESS,
    USER_THEME_FAIL,
    CHOOSE_THEME_REQUEST,
    CHOOSE_THEME_SUCCESS,
    CHOOSE_THEME_FAIL,
    USER_PROFILE_REQUEST,
    USER_PROFILE_SUCCESS,
    USER_PROFILE_FAIL
 
} from "../constants/postConstants";

import { logout } from './userActions'

const DEV_PORT = "http://127.0.0.1:5000"


export const createLink = (title,url) => async (dispatch, getState) => {
    try {
      dispatch({
        type: USER_POST_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.post(
        `${DEV_PORT}/api/link/new`, 
        {title, url},
        config
      )
  
      dispatch({
        type: USER_POST_SUCCESS,
        payload: data,
      })

      console.log({data})
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
         console.log("Not authorized")
         dispatch(logout())

      }
      dispatch({
        type: USER_POST_FAIL,
        payload: message,
      })
    }
  }


export const queryAllLinks = () => async (
    dispatch,getState
  ) => {
    try {
      dispatch({ type: POST_LIST_REQUEST })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.get(
        `${DEV_PORT}/api/link/all`,
          config,
         
      )
  
      dispatch({
        type: POST_LIST_SUCESSS,
        payload: data.links,
      })
    } catch (error) {
      dispatch({
        type: POST_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }


export const deleteLink = (id) => async (
    dispatch,getState
  ) => {
    try {
      const {
        userLogin: { userInfo },
      } = getState()

      dispatch({ type: POST_DELETE_REQUEST })
      await axios.patch(
        `${DEV_PORT}/api/link/${userInfo.username}/delete`,
          {_id :id}
         
      )
      dispatch({
        type: POST_DELETE_SUCESSS,
      })


    }

    catch(error){
      dispatch({
        type: POST_DELETE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
    

  }

export const uploadTheme = (image) => async (
    dispatch,getState
  ) => {
    try{

      dispatch({ type: USER_THEME_REQUEST })

      const {
        userLogin: { userInfo },
      } = getState()

        const config = { 
          headers: {
           "Content-Type": "multipart/form-data"
          }
        }
  
      const { data } = await axios.patch(
        `${DEV_PORT}/api/link/${userInfo.username}/theme`,
        image,
        config
         
      )

      dispatch({
        type: USER_THEME_SUCCESS,
        payload: data,
      })
    }

    catch(error){
      dispatch({
        type: USER_THEME_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }

  }


  export const chooseTheme = (option) => async (
    dispatch,getState
  ) => {
    try{

      dispatch({ type: CHOOSE_THEME_REQUEST })

      const {
        userLogin: { userInfo },
      } = getState()

      const { data } = await axios.patch(
        `${DEV_PORT}/api/link/${userInfo.username}/choose`,
        {option},
         
      )

      dispatch({
        type: CHOOSE_THEME_SUCCESS,
        payload: data,
      })
    }   

    catch(error){
      dispatch({
        type: CHOOSE_THEME_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }

  }


  export const uploadProfile = (image) => async (
    dispatch,getState
  ) => {
    try{

      dispatch({ type: USER_PROFILE_REQUEST })

      const {
        userLogin: { userInfo },
      } = getState()

        const config = { 
          headers: {
           "Content-Type": "multipart/form-data"
          }
        }
  
      const { data } = await axios.patch(
        `${DEV_PORT}/api/auth/${userInfo.username}/upload`,
        image,
        config
         
      )

      dispatch({
        type: USER_PROFILE_SUCCESS,
        payload: data,
      })
      localStorage.setItem("profilePicture", JSON.stringify(data.image))

    }

    catch(error){
      dispatch({
        type: USER_PROFILE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }

  }
   
   