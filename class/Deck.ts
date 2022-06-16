import { enumArray } from "lib/loops"
import { Card, ECardSuit, ECardValue } from "class/Card"

export enum EDeckType {
  CARDS_36,
  CARDS_52
}

export class Deck {
  cards: Card[] = []

  constructor(type = EDeckType.CARDS_36) {
    for (let value of enumArray(ECardValue)) {
      if (
        value >= ECardValue.Two &&
        value <= ECardValue.Five &&
        type != EDeckType.CARDS_52
      ) continue

      for(let suit of enumArray(ECardSuit))
        this.cards.push(new Card(value, suit))
    }
  }

  mix() {
    this.cards.sort(() => 
      Math.random() > 0.5 ? 1 : -1)
  }
}