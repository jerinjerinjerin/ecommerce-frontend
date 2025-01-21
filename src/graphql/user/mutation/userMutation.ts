import { gql } from "@apollo/client";

const REGISTER_USER_MUTATION = gql`
 mutation RegisterUser($input: SignUpInput!) {

    registerUser(input: $input){
      id
      username
      email
      profileUrl
      isAuthenticated
      otp
      otpExpiredAt
      createdAt
      updatedAt
      role
    }
 }
 `

const LOGIN_USER_MUTATION = gql`
mutation Login($input: LoginInput!){
 login(input: $input){
   success
   message
    user {
      id
      username
      email
      isAuthenticated
      otp
    }
    token
 }
}
`
export { REGISTER_USER_MUTATION, LOGIN_USER_MUTATION };