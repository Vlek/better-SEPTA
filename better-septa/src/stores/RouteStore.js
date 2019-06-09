import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/Constants';
import EventEmitter from 'events';
import API from '../utils/api.js';
const CHANGE_EVENT = 'CHANGE';

let _routes = [];

class RouteStore extends EventEmitter {
  constructor() {
    super();
    AppDispatcher.register(this.registerActions.bind(this));
  }
  registerActions(action) {
    switch(action.actionType) {
      case Constants.SEARCH_ROUTES:
        API.searchRoutes(action.query); //Changed from no param
        this.emit(CHANGE_EVENT);
        break;
      case Constants.SHOW_ROUTE_RESULTS:
      console.log(action);
        this.setRouteResults(action.route); 
        this.emit(CHANGE_EVENT);
        break;
    default:
        return true;
    }
    return true;
  }
  setRouteResults(routes) {
    _routes = routes;
    console.log(_routes);
  }
  getRouteResults() {
    return _routes;
  }
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}
export default new RouteStore();