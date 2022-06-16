import { Engine } from "class/Engine"
import React, { createRef, FC} from "preact/compat"

import "./Container.sass"

export const Container: FC<{engine: Engine}> = (props) => {
  const ref = createRef<HTMLDivElement>()
  props.engine.useEngine(ref)
  return <div ref={ref} className={`container`} />
}