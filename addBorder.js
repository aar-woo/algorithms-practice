function solution(picture) {
  const width = picture[0].length + 2;
  let tb = ''
  for (let i = 0; i < width; i++) {
    tb += '*';
  }
  for (let i = 0; i < picture.length; i++) {
    picture[i] = `*${picture[i]}*`;
  }
  picture.unshift(tb);
  picture.push(tb);
  return picture;
}
