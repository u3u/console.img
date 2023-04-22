declare global {
  interface Console {
    img(url: string, options?: ConsoleImgOptions): Promise<HTMLImageElement>
  }
}

export interface ConsoleImgOptions {
  /**
   * Specify the output `width`. If not specified, the original image `width` will be used for output. If only the
   * `width` is set, the image will be output according to its aspect ratio.
   */
  width?: number
  /**
   * Specify the output `height`. If not specified, the original image `height` will be used for output. If only the
   * `height` is set, the image will be output according to its aspect ratio.
   */
  height?: number
  /**
   * Specify the output fit.
   *
   * @default 'contain'
   */
  fit?: 'contain' | 'cover'
  /** Append more custom `css` */
  styles?: string | string[]
  /** Output rendered `css` for debugging */
  debug?: boolean
}
