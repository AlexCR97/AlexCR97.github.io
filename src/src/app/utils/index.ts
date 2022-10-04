export function randomIntFromRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function dot<T>(source: any, dotNotation: string): T | undefined {
  const properties = dotNotation.split('.');
  let currentValue = source;

  for (const property of properties) {
    if (!currentValue) {
      return undefined;
    }

    currentValue = currentValue[property];
  }

  return currentValue;
}
