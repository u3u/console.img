interface Console {
  img(url: string): void | Promise<void>
  img(url: string, width?: number, height?: number): void | Promise<void>
}

declare module 'console.img' {
  export = Console
}
