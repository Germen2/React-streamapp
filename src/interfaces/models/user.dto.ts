import { UserRoleDto } from "./userRole.dto";

export interface UserDto {
  id: number;
  firstName: string;
  lastName: string;
  password?: string;
  email: string;
  roles: UserRoleDto[];
}
