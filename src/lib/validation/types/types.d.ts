export type TData = {
    token: string,
    message: string,
    status: string,
    user: TUser,
}


export type TUser = {
  name: string;
  userIdentifier: string;
  email: string;
  roles: string[];
  id: number;
} | null;