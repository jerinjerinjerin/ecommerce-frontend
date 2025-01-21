import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { LoginUserInput } from "../../data/type.d";
import CustomInput from "../ui/Input";
import { loginSchema } from "../../validation/user/validate";
import { Button } from "@mui/material";
import { AppDispatch, RootState } from "../../store/store";
import { loginUserAction } from "../../store/user/userActon";
import { useNavigate } from "react-router-dom";

const Login = React.memo(() => {
  const dispatch: AppDispatch = useDispatch();
  const { loading, error, user }  = useSelector((state: RootState) => state.auth);;
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUserInput>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginUserInput> = (data) => {
    console.log(data);
    dispatch(loginUserAction(data))

    
    
  };

  React.useEffect(() => {
    if (user?.isAuthenticated) {
      navigate("/");
    } else if (user?.email || !user?.isAuthenticated) {
      navigate("/otp");
    }
  }, [user, navigate]);

  return (
    <form
      className="flex items-center flex-col gap-5 w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <CustomInput
        placeholder="Enter your Email"
        className="min-w-full"
        type="email"
        {...register("email")}
      />
      {errors.email && (
        <p className="text-red-500 font-semibold text-sm text-center">
          {errors.email?.message}
        </p>
      )}
      <CustomInput
        placeholder="Enter your Password"
        className="min-w-full"
        type="password"
        {...register("password")}
      />
      {errors.password && (
        <p className="text-red-500 font-semibold text-sm text-center">
           {errors.password?.message}
        </p>
      )}

      {
        error && (
          <p className="text-red-500 font-semibold text-sm text-center">
            {error}
          </p>
        )
      }

      <Button
        type="submit"
        variant="outlined"
        size="large"
        sx={{
          width: "100%",
        }}
      >
        { loading ? "Loading...": "Login"}
      </Button>
    </form>
  );
});

Login.displayName = 'Login';

export default Login;
