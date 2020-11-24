import { createSelector } from "reselect";
import { numberFields } from "../../util/housingData";

const getHousingData = (state) => state.housingData.items;

export const getMinValues = createSelector(getHousingData, (items) => {
  if (!items || !items.length) return {};
  const result = {};
  numberFields(items[0]).forEach((k) => {
    const values = items.map((item) => item[k]);
    result[k] = Math.min(...values);
  });
  return result;
});

export const getMaxValues = createSelector(getHousingData, (items) => {
  if (!items || !items.length) return {};

  const result = {};
  numberFields(items[0]).forEach((k) => {
    const values = items.map((item) => item[k]);
    result[k] = Math.max(...values);
  });
  return result;
});

export const getHalfValues = createSelector(getHousingData, (items) => {
  if (!items || !items.length) return {};

  const result = {};
  numberFields(items[0]).forEach((k) => {
    const values = items
      .map((item) => item[k])
      .sort(function (a, b) {
        return a - b;
      });
    let median;
    if (values.length % 2 === 0) {
      let midPoint = values.length / 2;
      median = (values[midPoint - 1] + values[midPoint]) / 2;
    } else {
      let midPoint = (values.length + 1) / 2;
      median = values[midPoint - 1];
    }
    result[k] = median.toFixed(2);
  });

  return result;
});

export const getQuarterValues = createSelector(getHousingData, (items) => {
  if (!items || !items.length) return {};

  const result = {};
  numberFields(items[0]).forEach((k) => {
    const values = items
      .map((item) => item[k])
      .sort(function (a, b) {
        return a - b;
      });
    const quarterPoint = parseInt(values.length / 4);
    let median;

    if (values.length % 2 === 0) {
      median = values[quarterPoint];
    } else {
      median = (values[quarterPoint - 1] + values[quarterPoint]) / 2;
    }
    result[k] = median;
  });

  return result;
});

export const getThreeQuarterValues = createSelector(getHousingData, (items) => {
  if (!items || !items.length) return {};

  const result = {};
  numberFields(items[0]).forEach((k) => {
    const values = items
      .map((item) => item[k])
      .sort(function (a, b) {
        return a - b;
      });
    const threeQuarterPoint = parseInt((values.length * 3) / 4);
    let median;

    if (values.length % 2 === 0) {
      median = values[threeQuarterPoint];
    } else {
      median = (values[threeQuarterPoint + 1] + values[threeQuarterPoint]) / 2;
    }
    result[k] = median;
  });

  return result;
});
