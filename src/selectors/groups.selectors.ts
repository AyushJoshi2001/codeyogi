import { createSelector } from "reselect";
import { groupStateSelector } from "./app.selector";

export const groupQuerySelector = createSelector([
  groupStateSelector
], (groupState) => groupState.query);

export const groupQueryMapSelector = createSelector([
  groupStateSelector
], (groupState) => groupState.queryMap);

export const groupByIdSelector = createSelector([
  groupStateSelector
], (groupState) => groupState.byId);


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
  const groups = groupIds.map((id: number) => byId[id]);
  return groups;
});