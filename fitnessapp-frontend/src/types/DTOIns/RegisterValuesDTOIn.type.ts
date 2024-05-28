import LoginValuesDTOIn from "./LoginValuesDTOIn.type";

type RegisterValuesDTOIn = LoginValuesDTOIn & {
  name: string
}

export default RegisterValuesDTOIn;
