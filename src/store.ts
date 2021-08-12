import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AnyAction, createStore } from "redux";
import { Group } from "./models/Group";
import { User } from "./models/User";

export const ME_FETCH = "me/fetch";
export const ME_LOGIN = "me/login";
export const ME_GROUPS = "me/groups";

export interface AppState {
    me?: User;
    groups: Group[];
    isSidebarOpen: boolean;   
}

const initialState: AppState = {
    me: undefined,
    groups: [],
    isSidebarOpen: true,
}

const reducer = (currentState = initialState, dispatchedAction: AnyAction) => {
    switch(dispatchedAction.type) {
        case ME_FETCH:
        case ME_LOGIN:
            return {...currentState, me: dispatchedAction.payload};
        
        case ME_GROUPS:
            return {...currentState, groups: dispatchedAction.payload};
        
        default:
            return currentState;
    }
}

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export const meFetchAction = (u: User) => ({ type: ME_FETCH, payload: u });

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;