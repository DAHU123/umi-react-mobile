type State = {
  data: Array<any>
  counter: number
}

type Pay = {
  payload: any
}

export default {
  namespace: 'puzzleCard',
  state: {
    data: [
      { id: 1,
        setup: 'Did you hear about the two silk worms in a race?',
        punchline: 'It ended in a tie',
      },
      {
        id: 2,
        setup: 'What happens to a frog\'s car when it breaks down?',
        punchline: 'It gets toad away',
      },
    ],
    counter: 100,
  },
  reducers: {
    addNewCard(state:State, { payload: newCard }: Pay) {
      const nextCounter = state.counter + 1;
      const newCardData = { ...newCard, id: nextCounter };
      const nextData = state.data.concat(newCardData)
      return {
        data: nextData,
        counter: nextCounter,
      }
    }
  }

}
