import * as yup from "yup";
// import { Gender } from "../../data/type.d";

const registerSchema = yup.object({
  username: yup.string().trim().min(3).required(),
  email: yup.string().trim().email().required(),
  password: yup.string().trim().min(8).required(),
  confirmPassword: yup
    .string()
    .trim()
    .oneOf([yup.ref("password"), undefined], "Passwords must match")
    .required(),
  // age: yup.number().required().min(18).typeError("age is required"),
  // dob: yup.date().required().typeError("dob is required"),
  // gender: yup.mixed<Gender>().oneOf(Object.values(Gender)).required(),
});

const loginSchema = yup.object({
  email: yup.string().trim().email().required(),
  password: yup.string().trim().min(8).required(),
})

const calculateAge = (dob: Date) => {
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth();
  const day = today.getDate();

  if (
    month < birthDate.getMonth() ||
    (month === birthDate.getMonth() && day < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};

export { registerSchema, loginSchema, calculateAge };
