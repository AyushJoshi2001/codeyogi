import { createSelector } from "reselect";
import { AppState } from "../store";
import { groupStateSelector } from "./app.selector";

export const groupQuerySelector = (state: AppState) => {
  const groupState = groupStateSelector(state);
  return groupState.query;
};

const groupQueryMapSelector = (state: AppState) => {
  const groupState = groupStateSelector(state);
  return groupState.queryMap;
}

const groupByIdSelector = (state: AppState) => {
  const groupState = groupStateSelector(state);
  return groupState.byId;
}

// export const currentQueryGroupsSelector = (state: AppState) => {
//     const query = groupQuerySelector(state);
//     const queryMap = groupQueryMapSelector(state);
//     const byId = groupByIdSelector(state);
//     const groupIds = queryMap[query] || [];
//     const groups = groupIds.map((id) => byId[id]);
//     return groups;
// }

export const currentQueryGroupsSelector = createSelector([
  groupQuerySelector, groupQueryMapSelector, groupByIdSelector
], (query, queryMap, byId) => {
  const groupIds = queryMap[query] || [];
  const groups = groupIds.map((id) => byId[id]);
  return groups;
});