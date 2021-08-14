import { Reducer } from "redux";
import { GROUPS_QUERY, GROUPS_QUERY_COMPLETED } from "../actions/actions.constants";
import { Group } from "../models/Group";

export interface GroupState {
    query: string;
    queryMap: { [query: string]: number[] };
    byId: { [id: number]: Group };
}

const initialState: GroupState = {
    query: "",
    queryMap: {},
    byId: {}
}

export const groupReducer: Reducer<GroupState> = (state = initialState, action) => {
    
    switch (action.type) {

        case GROUPS_QUERY:
            return {...state, query: action.payload};
            
        case GROUPS_QUERY_COMPLETED:
            const groups = action.payload.groups as Group[];
            const groupIds = groups.map((g) => g.id);
            
            const groupMap = groups.reduce((prev, group) => {
                return {...prev, [group.id]: group}; 
            }, {});
            
            return {...state, queryMap: {...state.queryMap, [action.payload.query]: groupIds}, byId: { ...state.byId, ...groupMap }};
            
        default:
            return state;
    }
}