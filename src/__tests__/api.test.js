import store from '../redux/configureStore';

describe('Countries redux state tests', () => {
  it('Should initially set countries to an empty array', () => {
    const state = store.getState().characters;
    expect(state.characters).toEqual([]);
  });
});
