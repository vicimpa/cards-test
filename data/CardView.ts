import { SharedState } from "@vicimpa/shared-state"
import { Ref, useEffect } from "preact/compat"

interface ICardView {
  [key: string]: HTMLElement
}

export class CardView extends SharedState<ICardView> {
  timer = null
  newState: ICardView = {}

  constructor() {
    super({})

    for (let i = 0; i < 52; i++) {
      this.newState[`a${i}`] = null
    }

    this.setState(this.newState)
    addEventListener('resize', () => this.setState({ ...this.newState }))
  }

  set(v: ICardView) {
    if (this.timer) clearTimeout(this.timer)

    this.timer = setTimeout(() => {
      this.setState(v)
      this.timer = null
    }, 2)
  }

  use(v: Ref<HTMLElement>) {
    useEffect(() => {
      const id = v.current.getAttribute('data-id')
      this.newState = { ...this.newState, [id]: v.current }
      this.set(this.newState)

      return () => {
        const { [id]: v, ...state } = this.newState
        this.newState = { ...state, [id]: null }
        this.set(this.newState)
      }
    })
  }
}