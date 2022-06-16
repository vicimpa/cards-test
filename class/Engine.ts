import { bind } from "lib/bind"
import { Ref, useEffect } from "preact/compat"
import Snap from "snapsvg"
import { Entity } from "./Entity"

export class Engine {
  snap = Snap()
  entityes: Entity[] = []

  get node() { return this.snap.node }
  get width() { return this.node.clientWidth }
  get height() { return this.node.clientHeight }

  useEngine(ref: Ref<HTMLDivElement>) {
    useEffect(() => {
      ref.current.appendChild(this.node)
      addEventListener('resize', this.resize)

      return () => 
        removeEventListener('resize', this.resize)
    })
  }

  @bind()
  private resize() {
    for(let en of this.entityes)
      en?.resize()
  }
}

/**
 * 13058 - js
 * 11153 - py
 * 9600 - java
 * 6191 - php
 * 5393 - c#
 * 5055 - c++
 * 2400 - kotlin
 * 1573 - swift
 * 1174 - golang
 * 884 - ruby
 * 125 - rust
 */