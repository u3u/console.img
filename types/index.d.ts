// TypeScript Version: 2.1
interface Console {
  img(url: string, width?: number, height?: number): Promise<void>
}

declare module 'console.img' {
  export = Console
}
