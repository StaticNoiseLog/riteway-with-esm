export function sum(...args) {
  return args.reduce((num, tot) => tot + num)
}