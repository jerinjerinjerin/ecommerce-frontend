import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import CustomInput from "../ui/Input";
import { RegisterInput } from "../../data/type.d";
import { registerSchema } from "../../validation/user/validate";
import { useDispatch } from "react-redux";
import { createUserAction } from "../../store/user/userActon";
import { AppDispatch, RootState } from "../../store/store";

const Register = () => {
  const dispatch: AppDispatch = useDispatch();
  const {loading, error } = useSelector((state: RootState) => state.auth)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInput>({
    resolver: yupResolver(registerSchema),
  });

  

  const onSubmit: SubmitHandler<RegisterInput> = ({ confirmPassword, ...dataToSend }) => {
    console.log(dataToSend);
  
    dispatch(createUserAction(dataToSend));
  };
  

  return (
    <form
      className="flex items-center flex-col gap-5 w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <CustomInput
        placeholder="Enter Your name"
        className="min-w-full"
        type="text"
        {...register("username")}
      />
      {errors.username && (
        <p className="text-red-500 font-semibold text-sm text-center">
          {errors.username?.message}
        </p>
      )}
      <CustomInput
        placeholder="Enter Your email"
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
        placeholder="Enter Your password"
        className="min-w-full"
        type="password"
        {...register("password")}
      />
      {errors.password && (
        <p className="text-red-500 font-semibold text-sm text-center">
          {errors.password?.message}
        </p>
      )}
      <CustomInput
        placeholder="Enter Your confirmPassword"
        className="min-w-full"
        type="password"
        {...register("confirmPassword")}
      />
      {errors.confirmPassword && (
        <p className="text-red-500 font-semibold text-sm text-center">
          {errors.confirmPassword?.message}
        </p>
      )}
      {/* <CustomInput
        placeholder="Enter Your age"
        className="min-w-full"
        type="number"
        {...register("age")}
        readOnly
      />
      {errors.age && (
        <p className="text-red-500 font-semibold text-sm text-center">
          {errors.age?.message}
        </p>
      )}
      <CustomInput
        placeholder="Enter Your Data of birth"
        className="min-w-full"
        type="date"
        {...register("dob")}
        onChange={handleDobChange}
      />
      {errors.dob && (
        <p className="text-red-500 font-semibold text-sm text-center">
          {errors.dob?.message}
        </p>
      )}
      <div className="flex min-w-full items-center flex-row justify-between px-5">
        <label htmlFor="field-rain">
          <input {...register("gender")} type="radio" value={Gender.male} />
          male
        </label>

        <label htmlFor="field-rain">
          <input {...register("gender")} type="radio" value={Gender.female} />
          female
        </label>
      </div>
      {errors.gender && (
        <p className="text-red-500 font-semibold text-sm text-center">
          {errors.gender?.message}
        </p>
      )} */}


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
        {loading ? "Loading...": "Signup"}
      </Button>
    </form>
  );
};

Register.displayName = "Register";

export default Register;
