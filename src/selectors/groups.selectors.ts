import { AppState } from "../store";

export const groupQuerySelector = (state: AppState) => state.groups.query;

export const currentQueryGroupsSelector = (state: AppState) => {
    const groupIds = state.groups.queryMap[state.groups.query] || [];
    const groups = groupIds.map((id) => state.groups.byId[id]);
    return groups;
  }