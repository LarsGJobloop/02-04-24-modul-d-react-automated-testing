export function padLeft(str, length, filler) {
  while (str.length < length) {
    str = filler + str
  }
  return str
}