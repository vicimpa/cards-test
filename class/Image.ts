class MyImage extends Image {
  loaded = false

  constructor(source: string | {default: string} | Promise<string> | Promise<{default: string}>) {
    super()

    source = source['default'] || source

    this.onload = () => this.loaded = true

    if(typeof source == 'string')
      this.src = source
    else
      Promise.resolve()
        .then(e => source as any)
        .then(e => e.default || e)
        .then(e => this.src = e)
  }
}

export { MyImage as Image }