import { BaseApi } from "../apis/BaseAPI";
import LoginValuesDTOIn from "../types/DTOIns/LoginValuesDTOIn.type";
import RegisterValuesDTOIn from "../types/DTOIns/RegisterValuesDTOIn.type";
import UserDTOOut from "../types/DTOOuts/UserDTOOut.type";

class UserService {
  constructor() {

  }

  login = async (values: LoginValuesDTOIn): Promise<void> => {
    const responseData = await BaseApi.login(values);
    if (responseData.token) {
      localStorage.setItem('AUTH_TOKEN', responseData.token);
    }
  };

  logout = async (): Promise<void> => {
    localStorage.clear();
  };

  register = async (values: RegisterValuesDTOIn): Promise<void> => {
    await BaseApi.register(values);
    await this.login(values);
  };

  /** @returns Logged In User's Data */
  getLoggedInUserData = async (): Promise<UserDTOOut> => {
    return await BaseApi.getLoggedInUserData();
  };

  updateLoggedInUser = async (newValues: RegisterValuesDTOIn): Promise<void> => {
    await BaseApi.updateLoggedInUser(newValues);
  };
}
