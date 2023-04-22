export const getBlob = (url: string) => {
  return fetch(url).then((res) => res.blob())
}
