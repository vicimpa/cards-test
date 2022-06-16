import { JSX } from "preact"
import { generate } from "./generate"

interface IStyles {
  [key: string]: Partial<JSX.CSSProperties>
}

const firstAZ = /^[a-z]/i

export function generateClass() {
  return generate((Math.random() * 12) | 0 + 6)
    + '-' + generate((Math.random() * 12) | 0 + 6)
}

export function makeStyles<T extends IStyles>(styles: T) {
  const output: Record<keyof T, string> = {} as any
  const element = document.createElement('style')

  
  for (let key in styles) {
    element.removeAttribute('style')
    Object.assign(element.style, styles[key])

    const className = generateClass()
    const styleString = element.getAttribute('style')

    element.removeAttribute('style')
    element.innerHTML && (element.innerHTML += '\n')
    element.innerHTML += `.${className}{${styleString}}`
    output[key] = className
  }

  if (document.head)
    document.head.appendChild(element)
  else
    document.addEventListener('load', () => {
      document.head.appendChild(element)
    }, { once: true })

  return output
}