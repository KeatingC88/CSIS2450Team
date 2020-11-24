export const ActionTypes = {
  DATA_LOADED: "DATA_LOADED",
};

export const dataLoaded = (data) => ({
  type: ActionTypes.DATA_LOADED,
  payload: data,
});
