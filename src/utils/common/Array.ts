export const isDifferentArray = (a: unknown[] = [], b: unknown[] = []) => {
  if (a.length !== b.length) {
    return false;
  }
  return a.some((item, index) => !Object.is(item, b[index]));
};

export const range = (start: number, end: number) =>
  Array.from({ length: end - start }, (_, i) => i + 1);
