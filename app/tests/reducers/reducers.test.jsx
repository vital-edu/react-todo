import * as reducers from 'reducers';

import df from 'deep-freeze-strict';
import expect from 'expect';

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      let action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog',
      };
      let response = reducers.searchTextReducer(df(''), df(action));

      expect(response).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      let action = {
        type: 'TOGGLE_SHOW_COMPLETED',
      };
      let response = reducers.showCompletedReducer(df(false), df(action));

      expect(response).toEqual(true);
    });
  });
})
