import { createSelector } from "reselect";
import { authStateSelector, usersStateSelector } from "./app.selector";

// export const meSelector = (state: AppState) => {
//     const authState = authStateSelector(state);
//     const usersState = usersStateSelector(state);
//     authState.id !== undefined ? usersState.byId[authState.id] : undefined
// };

export const meSelector = createSelector([
    authStateSelector, usersStateSelector
], (authState, usersState) => {
    return authState.id !== undefined ? usersState.byId[authState.id] : undefined;
});