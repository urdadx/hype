import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
    userLoginReducer,
    userRegisterReducer,
    userDetailsReducer,
    userUpdateProfileReducer,
    userListReducer,
    userDeleteReducer,
    userUpdateReducer,
    
  } from './reducers/userReducers'

import { 
    chooseReducer,
    postCreateReducer,
    postDeleteReducer,
    postListReducer,
    themeUpload,
    uploadprofileReducer,
  
} from './reducers/postReducers';

const middleware = [thunk]

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
    postCreate: postCreateReducer,
    postList: postListReducer,
    postDelete: postDeleteReducer,
    userThemeUpload: themeUpload,
    themeChoose: chooseReducer,
    uploadProfile: uploadprofileReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
}



const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store