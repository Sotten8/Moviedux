export function* colorGenerator() {
  const colors = [
    '#a9a9a9',
    '#a5a5a5',
    '#a1a1a1',
    '#9f9f9f',
    '#9b9b9b',
    '#9f9f9f',
    '#a1a1a1',
    '#a5a5a5',
    '#a9a9a9',
  ];
  let i = 0;
  while (true) {
    yield colors[i];
    i = (i + 1) % colors.length;
  }
}
