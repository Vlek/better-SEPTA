// Todo actions
import AppDispatcher from '../dispatcher/AppDispatcher';
import { Constants } from '../constants/constants';
import { getRandomApi } from '../utils/RandomAPI';


export function getRandom() {
  AppDispatcher.handleViewAction({
    actionType: TodoConstants.GET_RANDOM,
  });

  getRandomApi();
}

export function receiveRandom(response) {
  AppDispatcher.handleServerAction({
    actionType: TodoConstants.GET_RANDOM_RESPONSE,
    response: response,
  });
}

