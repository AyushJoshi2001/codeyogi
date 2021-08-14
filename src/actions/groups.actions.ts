import { bindActionCreators } from "redux";
import { Group } from "../models/Group";
import { store } from "../store";
import { GROUPS_QUERY, GROUPS_QUERY_COMPLETED } from "./actions.constants";


export const groupsQueryAction = (query: string) => ({type: GROUPS_QUERY, payload: query});
export const groupQueryCompletedAction = (groups: Group[], query: string) => ({type: GROUPS_QUERY_COMPLETED, payload: {groups: groups, query: query}});

export const groupsActions = bindActionCreators({
    query: groupsQueryAction,
    queryComplete: groupQueryCompletedAction,
}, store.dispatch);
