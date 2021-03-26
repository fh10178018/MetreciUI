const getFormat = msec => {
  let ss = parseInt(msec / 1000);
  let ms = parseInt(msec % 1000);
  let mm = 0;
  let hh = 0;
  if (ss > 60) {
  mm = parseInt(ss / 60);
  ss = parseInt(ss % 60);
  if (mm > 60) {
  hh = parseInt(mm / 60);
  mm = parseInt(mm % 60);
  }
  }
  ss = ss > 9 ? ss : `0${ss}`;
  mm = mm > 9 ? mm : `0${mm}`;
  hh = hh > 9 ? hh : `0${hh}`;
  return { ss, mm, hh };
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

module.exports = {
  getFormat
}
