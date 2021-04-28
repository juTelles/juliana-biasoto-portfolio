

export function randomPinColor() {
  const colors = ['red', 'yellow', 'blue', 'pink', 'green', 'purple'];
  const colorNum = Math.floor(Math.random() * (7 - 0) + 0);
  return colors[colorNum];
}