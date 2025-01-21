
enum Gender {
    male = "male",
    female = "female"
}
type RegisterInput = {
  username: string;
  email: string;
  password: string;
  confirmPassword?: string;
  // age: number;
  // dob: Date;
  // gender: Gender;
};

type  = {
  email: string;
  password: string;
}

export { RegisterInput , LoginUserInput, Gender };