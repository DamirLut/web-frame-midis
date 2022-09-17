export function classNames(...classes: Array<any>) {
  return classes.filter((value) => typeof value == 'string').join(' ');
}
