interface Console {
  img(url: string): void
  img(url: string, width?: number, height?: number): void
}

declare module 'console.img' {
  export = Console
}
