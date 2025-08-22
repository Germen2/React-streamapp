import { UserDto } from "./models/user.dto";

export interface HeaderInterface {
  isLoggedIn: boolean;
  user: UserDto | null;
}
