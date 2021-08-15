import { AppState } from "../store";

export const groupStateSelector = (state: AppState) => state.groups;
export const usersStateSelector = (state: AppState) => state.users;
export const authStateSelector = (state: AppState) => state.auth;