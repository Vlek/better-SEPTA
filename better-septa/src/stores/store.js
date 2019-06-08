import AppDispatcher from '../dispatcher/AppDispatcher';
import { Constants } from '../constants/constants';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

// Define the store as an empty array
let _store = {
  list: [],
};

// Define the public event listeners and getters that
// the views will use to listen for changes and retrieve
// the store
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

// Initialize the singleton to register with the
// dispatcher and export for React components
const MapStore = new MapStoreClass();

// Register each of the actions with the dispatcher
// by changing the store's data and emitting a
// change
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

