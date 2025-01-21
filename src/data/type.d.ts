
enum Gender {
    male = "male",
    female = "female"
}
type RegisterInput = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  // age: number;
  // dob: Date;
  // gender: Gender;
};

type LoginUserInput= {
  email: string;
  password: string;
}

RegisterPayload = Omit<RegisterInput, "confirmPassword">;

export { RegisterInput , LoginUserInput, Gender, RegisterPayload };