export enum ECardValue {
  Ace,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Jack,
  Queen,
  King,
}

export enum ECardSuit {
  Hearts,
  Spades,
  Diamonds,
  Clubs,
}

export class Card {
  open = false
  
  value: ECardValue
  suit: ECardSuit

  constructor(value: ECardValue, suit: ECardSuit) {
    this.value = value
    this.suit = suit
  }

  equal(card: Card) {
    return this.value == card.value 
  }

  better(card: Card) {
    if(this.value == card.value)
      return false

    if(this.value == ECardValue.Ace)
      return true

    if(card.value == ECardValue.Ace)
      return false

    return this.value > card.value
  }
}