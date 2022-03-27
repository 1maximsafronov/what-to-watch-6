export const formatRunTime = (value) => {
  const h = Math.floor(value / 60);
  const m = value % 60;
  let str = ``;
  if (h > 0) {
    str += `${h}h `;
  }
  if (m > 0) {
    str += `${m}m`;
  }

  return str;
};

export const getRatinLevel = (rating) => {
  if (rating >= 0 && rating < 3) {
    return `Bad`;
  }
  if (rating >= 3 && rating < 5) {
    return `Normal`;
  }
  if (rating >= 5 && rating < 8) {
    return `Good`;
  }
  if (rating >= 8 && rating < 10) {
    return `Very good`;
  }

  return `Awesome`;
};
