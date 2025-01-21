import { Link } from "react-router-dom"
import Register from "../../components/user/Register"

const RegisterPage = () => {
  return (
    <div className="flex items-center flex-col gap-5 justify-center w-screen h-screen">
      <div className="flex items-center w-[70%] shadow-md flex-col gap-5 justify-center rounded-md p-5">
        <h1 className="text-black font-bold text-2xl">Register here</h1>
        <Register/>
        <div className="w-full flex items-center pt-2">
          <p className="text-sm font-semibold inline-block w-full text-center">Already have an account ? 
            <span className="text-sm font-semibold text-blue-700"><Link to={"/login"}>{" "}Login</Link></span></p> 
        </div>
      </div>

    </div>
  )
}

RegisterPage.displayName = "Register Page"


export default RegisterPage