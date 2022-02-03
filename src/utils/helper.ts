export const numberWithSeparator = (x: number | string | undefined) => {
  if (!x) {
    if (x !== 0) {
      return;
    }
  }

  var parts = x.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return parts.join(',');
};

export const numberWithDefaultSeparator = (x: number | string | undefined) => {
  if (!x) {
    if (x !== 0) {
      return;
    }
  }

  var parts = x.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
};

export const getInitialName = (val: any) => {
  const strArr = val?.split(' ');
  const totalStr = strArr?.length;

  if (totalStr === 1) {
    return strArr[0].charAt(0);
  } else if (totalStr >= 2) {
    return strArr[0].charAt(0) + strArr[1].charAt(0);
  }

  return val;
};
