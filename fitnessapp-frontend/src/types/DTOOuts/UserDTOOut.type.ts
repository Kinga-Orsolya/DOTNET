import { Roles } from "../DTOIns/UserDTOIn.type";

type UserDTOOut = {
  id: number,
  name: string,
  email: string,
  password: string,
  role: Roles
}

export default UserDTOOut;
