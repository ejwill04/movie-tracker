import { expect } from './setup';
import errorMessage from '../app/reducers/errorMessageReducer';
import movies from '../app/reducers/moviesReducer';
import favorites from '../app/reducers/favoritesReducer';
import user from '../app/reducers/userReducer';
import { state as stubAppState } from './fixtures/stubState';
import { stubAddMoviesAction } from './fixtures/stubAddMoviesAction';

describe('reducers', function () {
  describe('errorMessageReducer', function () {
    it('should return an initial state', () => {
      expect(errorMessage(undefined, {})).to.equal('');
    });

    it('should return state with action SET_LOGIN_ERROR_MESSAGE', () => {
      let action = {
        type: 'SET_LOGIN_ERROR_MESSAGE',
        data: 'error message',
      };

      expect(errorMessage(undefined, action)).to.equal('error message');
    });
  });

  describe('moviesReducer', function () {
    beforeEach(() => {
      this.state = stubAppState;
    });

    it('should return an initial state', () => {
      expect(movies(undefined, {})).to.deep.equal([]);
    });

    it('ADD_MOVIES should replace undefined state', () => {
      this.action = stubAddMoviesAction;
      expect(movies(undefined, this.action)).to.deep.equal(this.action.data);
    });

    it('ADD_MOVIES should replace existing state', () => {
      this.action = stubAddMoviesAction;
      expect(movies(this.state, this.action)).to.deep.equal(this.action.data);
    });

    it('TOGGLE_FAVORITE should not modifty state if no match ', () => {
      this.toggleFavoriteAction = {
        type: 'TOGGLE_FAVORITE',
        data: {
          id: 9,
          original_title: 'LOLZ',
          original_language: 'en',
          title: 'LOLZ',
        },
      };

      expect(movies(this.state.movies, this.toggleFavoriteAction)).to.deep.equal(this.state.movies);
    });

    it('TOGGLE_FAVORITE should modifty state if a match and not yet marked as favorite', () => {
      this.toggleFavoriteAction = {
        type: 'TOGGLE_FAVORITE',
        data: {
          poster_path: '/5gJkVIVU7FDp7AfRAbPSvvdbre2.jpg',
          adult: false,
          overview: 'A spacecraft traveling to a distant colony planet and transporting thousands of people has a malfunction in its sleep chambers. As a result, two passengers are awakened 90 years early.',
          release_date: '2016-12-21',
          genre_ids: [12, 18, 10749, 878],
          id: 274870,
          original_title: 'Passengers',
          original_language: 'en',
          title: 'Passengers',
          backdrop_path: '/5EW4TR3fWEqpKsWysNcBMtz9Sgp.jpg',
          popularity: 23.325788,
          vote_count: 907,
          video: false,
          vote_average: 6.3,
        },
      };

      expect(movies(this.state.movies, this.toggleFavoriteAction)).to.not.deep.equal(this.state.movies);
    });
  });

  describe('favoritesReducer', function () {
    beforeEach(() => {
      this.state = stubAppState;
    });

    it('should return an initial state', () => {
      expect(favorites(undefined, {})).to.deep.equal([]);
    });

    it('should accept ACTION TOGGLE_FAVORITE', () => {
      this.state.favorites = [];
      this.toggleFavoriteAction = {
        type: 'TOGGLE_FAVORITE',
        data: {
          poster_path: '/5gJkVIVU7FDp7AfRAbPSvvdbre2.jpg',
          adult: false,
          overview: 'A spacecraft traveling to a distant colony planet and transporting thousands of people has a malfunction in its sleep chambers. As a result, two passengers are awakened 90 years early.',
          release_date: '2016-12-21',
          genre_ids: [12, 18, 10749, 878],
          id: 274870,
          original_title: 'Passengers',
          original_language: 'en',
          title: 'Passengers',
          backdrop_path: '/5EW4TR3fWEqpKsWysNcBMtz9Sgp.jpg',
          popularity: 23.325788,
          vote_count: 907,
          video: false,
          vote_average: 6.3,
        },
      };
      expect(favorites(this.state.favorites, this.toggleFavoriteAction)).to.deep.equal([this.toggleFavoriteAction.data]);
    });
  });

  describe('userReducer', function () {
    beforeEach(() => {
      this.state = false;
    });

    it('should return an initial state', () => {
      expect(user(undefined, {})).to.be.false;
    });

    it('should accept action SET_ACTIVE_USER', () => {
      this.action = {
        type: 'SET_ACTIVE_USER',
        data: {
          id: 1,
          name: 'Taylor',
          password: 'password',
          email: 'tman2272@aol.com',
        },
      };

      const newUserState = user(this.state, this.action);
      expect(newUserState).to.deep.equal(this.action.data);
    });
  });
});
