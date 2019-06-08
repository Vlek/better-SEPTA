import AppDispatcher from '../dispatcher/AppDispatcher';
import { Constants } from '../constants/constants';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

// Define the store as an empty array
let _store = {
  list: [],
};

class MapStoreClass extends EventEmitter {

  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  }

  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  }

  getList() {
    return _store;
  }

}

const MapStore = new MapStoreClass();

AppDispatcher.register((payload) => {
  const action = payload.action;

  switch (action.actionType) {


  case Constants.GET_RANDOM_RESPONSE:

    _store.list.push(action.response);
    MapStore.emit(CHANGE_EVENT);
    break;

  default:
    return true;
  }
});

export default MapStore;

