class Base {}

type Method = TypedPropertyDescriptor<(...args: any) => any>
type Proto = (typeof Base)['prototype']

export function bind(obj = null) {
  return ((target: Proto, key: string, {value}: Method) => {
    return {
      configurable: true,
      get() {
        const binded = value.bind(this)
        Object.defineProperty(this, key, {value: binded})
        return binded
      }
    } as Method
  })
}