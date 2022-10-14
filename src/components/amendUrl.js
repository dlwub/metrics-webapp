export default function ammendUrl(id) {
  const API_BASE_URL = 'https://opentdb.com/api.php?amount=5';
  const arr = [9, 10, 11, 12, 13, 14, 15, 16, 29, 31, 32, 17, 18, 19,
    27, 28, 30, 20, 21, 22, 23, 24, 25, 26];
  let index;
  switch (id) {
    case 'entertainement':
      index = 1 + Math.floor(Math.random() * 10);
      break;
    case 'science':
      index = 11 + Math.floor(Math.random() * 6);
      break;
    case 'social':
      index = 17 + Math.floor(Math.random() * 7);
      break;
    default:
      index = 0;
      break;
  }
  return `${API_BASE_URL}&category=${arr[index]}`;
}
