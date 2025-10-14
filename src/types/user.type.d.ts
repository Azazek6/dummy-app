export interface IUserStore {
  getProfile: () => Promise<void>;
  profile: null | IUser;
}

export interface IUser {
  name: string;
}
