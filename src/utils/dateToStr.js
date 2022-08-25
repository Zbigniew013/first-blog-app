const dateToStr = date => {
  return date.toISOString().slice(0, 10).split("-").reverse().join("/")
};

export default dateToStr;