const isEmpty = (value: any) => !value;

export const isValidArray = (element: unknown[] | undefined | null): boolean =>
  Array.isArray(element) && !isEmpty(element);
