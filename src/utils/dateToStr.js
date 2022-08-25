const dateToStr = date => {
  return date.toISOString().slice(0, 10).split("-").reverse().join("/")
};

export default dateToStr;

// export const dateToStr = dateObj => {
//   return dateObj.toISOString().replace(/T.*/,'').split('-').reverse().join('-');
// }
// `date` is a `Date` object
// const formatYmd = date => date.toISOString().slice(0, 10);

// Example
// formatYmd(new Date());      // 2020-05-06


// date.value.split("-").reverse().join("-");      //"2021-01-17" --> 17-01-2021