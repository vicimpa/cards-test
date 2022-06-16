import { Entity } from "class/Entity"
import { min } from "lib/math"
import { Element, filter } from "snapsvg"

export class Desk extends Entity {
  element: Element
  group: Element

  width = 500
  height = 300
  stroke = 20
  margin = 200

  init() {
    const { snap } = this.engine
    this.group = snap.group()
    this.element = snap.rect()

    this.group.append(this.element)
    
    this.element.attr({
      stroke: snap.gradient('l(0.6, 0.3, .56, .69)#001B41-#001B5F'),
      fill: snap.gradient('r(0.6, 0.3, .56)#009C5A-#00653A'),
      width: this.width,
      height: this.height,
      rx: this.height * 0.5,
      strokeWidth: this.stroke,
      filter: snap.filter(filter.shadow(0, 0, 20, '#000', 1))
    })
  }

  resize() {
    const { engine, width, height, margin, stroke } = this

    const scale = min(
      (engine.width - margin) / width,
      (engine.height - margin) / height
    )

    const sWidth = width * scale 
    const sHeight = height * scale

    const x = engine.width * 0.5 - sWidth * 0.5
    const y = engine.height * 0.5 - sHeight * 0.5

    this.group.attr({
      transform: `translate(${x} ${y}) scale(${scale}) `
    })
  }
}