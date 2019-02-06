export function isPositive(v: number): boolean {
  return v > 0 ? true : false;
}

export function isPositiveWithZero(v: number): boolean {
  return v >= 0 ? true : false;
}

export function mergeProps<T>(
  vue: any,
  field: string,
  defaultValue?: T
): T | undefined {
  const option = vue.$VUE_FLOAT_PREVIEW_OPTIONS;
  if (option && option[field] !== undefined) {
    return option[field];
  }
  return defaultValue;
}
