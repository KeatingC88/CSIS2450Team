export const nonNumberFields = ["ocean_proximity"];

export const numberFields = (obj) =>
  Object.keys(obj).filter((key) => !key.includes(nonNumberFields));

export const convertToNumberField = (data) => {
  const newData = data.map((item) => {
    numberFields(item).forEach((f) => {
      item[f] = parseFloat(item[f]);
    });
    return item;
  });
  return newData;
};

// export const filterOutNonNumberFields = obj => {
//     const numberFields = numberFields(obj)
//     const newItem = {}
//     numberFields.forEach(f => {
//         newItem[f] = obj[f]
//     })
//   return newItem
// }
