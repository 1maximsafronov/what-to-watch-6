export const extendObject = (a, b) => Object.assign({}, a, b);


export const formatCommentDate = (date) => {
  const string = date.toLocaleDateString(`en-US`, {
    month: `long`,
    day: `numeric`,
    year: `numeric`,
  });

  // December 20, 2020
  return string;
};

export const formateDateTime = (date) => {
  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  let d = date.getDate();

  if (m < 10) {
    m = `0${m}`;
  }

  if (d < 10) {
    d = `0${d}`;
  }

  // 2020-12-20
  return `${y}-${m}-${d}`;
};


export const formatDuration = (current) => {
  let h = Math.floor(current / 60 / 60);
  let m = Math.floor(current / 60);
  let s = Math.floor(current % 60);

  if (h < 10) {
    h = `0${h}`;
  }

  if (m < 10) {
    m = `0${m}`;
  }

  if (s < 10) {
    s = `0${s}`;
  }

  return `${h}:${m}:${s}`;
};
