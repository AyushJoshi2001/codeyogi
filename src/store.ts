import { TypedUseSelectorHook, useSelector } from "react-redux";
import { combineReducers, createStore } from "redux";
import { authReducer } from "./reducers/auth.reducer";
import { groupReducer } from "./reducers/groups.reducer";
import { userReducer } from "./reducers/users.reducer";

export const UI_SIDEBAR_TOGGLE = "ui/sidebar_toggle";

// export interface AppState {
//     auth: AuthState;
//     users: UserState;
//     groups: GroupState;
// };

const reducer = combineReducers({
    auth: authReducer,
    users: userReducer,
    groups: groupReducer
});

// const reducer: Reducer<AppState> = (state = initialState, action: AnyAction) => {
    
//     const newState = {
//         auth: authReducer(state.auth, action),
//         users: userReducer(state.users, action),
//         groups: groupReducer(state.groups, action)
//     };

//     if(
//         newState.auth === state.auth &&
//         newState.users === state.users &&
//         newState.groups === state.groups
//     ) {
//         return state;
//     }

//     return newState;
// };



export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export type AppState = ReturnType<typeof reducer>;

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;