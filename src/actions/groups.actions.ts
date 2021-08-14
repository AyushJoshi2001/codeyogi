import { Group } from "../models/Group";

export const GROUPS_QUERY = "groups/query";
export const GROUPS_QUERY_COMPLETED = "groups/query_completed";

export const groupsQueryAction = (query: string) => ({type: GROUPS_QUERY, payload: query});
export const groupQueryCompletedAction = (groups: Group[], query: string) => ({type: GROUPS_QUERY_COMPLETED, payload: {groups: groups, query: query}});