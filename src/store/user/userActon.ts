import {
    createUserStart, 
    createUserSuccess, 
    createUserFailure,
    loginUserStart,
    loginUserSuccess,
    loginUserFailure, 
} from "./userSlice";
import { 
    REGISTER_USER_MUTATION, 
    LOGIN_USER_MUTATION 
} from "../../graphql/user/mutation/userMutation"
import { RegisterPayload, LoginUserInput } from "../../data/type";
import { ApolloError } from "@apollo/client";
import { AppDispatch } from "../store";
import { client } from "../../graphql/apolloClient";

const createUserAction =  (data:RegisterPayload) => async (dispatch: AppDispatch) => {
    dispatch(createUserStart())   
    try {
        const response = await client.mutate({
            mutation: REGISTER_USER_MUTATION,
            variables: {
                input: data,
            }
        })

        dispatch(createUserSuccess(response.data.registerUser))
    } catch (error: unknown) {

        if (error instanceof ApolloError){
            dispatch (createUserFailure(error.message))
        } else {
            dispatch(createUserFailure("An unknown error occurred during signup"))
        }

    }
}

const loginUserAction = (data: LoginUserInput) => async (dispatch: AppDispatch) => {
     try {
        dispatch(loginUserStart());

        const response = await client.mutate({
            mutation: LOGIN_USER_MUTATION,
            variables: {
                input: data,
            }
        })

        dispatch(loginUserSuccess(response.data.login));


     } catch (error: unknown) {
        if(error instanceof ApolloError){
            dispatch(loginUserFailure(error.message))
        } else {
            dispatch(loginUserFailure("An unknown error occurred during login"))
        }
     }
}

export { createUserAction, loginUserAction }