export function getAbsolutePosition(el: HTMLElement) {
  if(!el) return { left: -1000, top: -1000}
  if (document.body == el) return { left: 0, top: 0 }

  let left = 0
  let top = 0

  while(el && el != document.body) {
    left += el.offsetLeft || el.clientLeft
    top += el.offsetTop || el.clientTop
    el = el.parentElement
    break
  }

  return {top, left}
}