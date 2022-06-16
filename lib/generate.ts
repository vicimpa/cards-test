import { char, code } from "./chars"

const abc: string[] = []

for(let i = code('A'); i <= code('Z'); i++)
  abc.push(char(i))

for(let i = code('a'); i <= code('z'); i++)
  abc.push(char(i))
  
export function generate(length = 8) {
  let output = ''

  while(output.length < length)
    output += abc[(Math.random() * abc.length) | 0]
    
  return output
}