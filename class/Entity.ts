// import { Renderer } from "class/Renderer"

import { Paper } from "snapsvg";
import { Engine } from "./Engine";

export class Entity {
  constructor(public engine: Engine) {
    engine.entityes.push(this)

    setTimeout(() => {
      this.init(engine.snap)
      this.resize()
    })
  }

  init(snap: Paper) {

  }

  resize() {
    
  }

  drop() {
    const index = this.engine.entityes.indexOf(this)
    index != -1 && this.engine.entityes.splice(index, 1)
  }

  // update(renderer: Renderer) {

  // }

  // render(renderer: Renderer) {

  // } 
}