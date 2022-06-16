import { Engine } from "class/Engine"
import { Desk } from "entity/Desk"
import React, { render } from "preact/compat"
import { Container } from "view/Container"

import "./index.sass"

const engine = new Engine()
const desk = new Desk(engine)

render((
  <Container engine={engine} />
), document.querySelector('.root'))