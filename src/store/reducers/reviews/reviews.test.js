import {Reviews} from "./reviews";
import {
  ReviewType,
} from "../../const";

import {reviews} from "../../../mocks-for-tests/mocks";


it(`Reducer without additional parameters should return initial state`, () => {
  expect(Reviews(void 0, {})).toEqual({
    reviews: []
  });
});

/*
it(`GET_REVIEWS`, () => {
  expect(
      new Reviews(
          {},
          {
            type: ReviewType.GET_REVIEWS,
            payload: reviews
          }
      )).not.toBe(null);
});

it(`Add_REVIEWS`, () => {
  expect(
      new Reviews(
          {
            reviews: reviews[0]
          },
          {
            type: ReviewType.ADD_REVIEWS,
            payload: reviews
          }
      )).toEqual({});
});
*/
