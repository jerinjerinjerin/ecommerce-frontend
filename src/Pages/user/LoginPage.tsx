import { Link } from "react-router-dom";
import Login from "../../components/user/Login";

const LoginPage = () => {
  return (
    <div className="flex items-center flex-col gap-5 justify-center w-screen h-screen">
      <div className="flex items-center w-[70%] shadow-md flex-col gap-5 justify-center rounded-md p-5">
        <h1 className="text-black font-bold text-2xl">Login Page</h1>
        <Login />
        <div className="w-full flex items-center pt-2">
          <p className="text-sm font-semibold inline-block w-full text-center">
            Dont't have a account ?
            <span className="text-sm font-semibold text-blue-700">
              <Link to={"/signup"}> Signup</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

LoginPage.displayName = "LoginPage";

export default LoginPage;
