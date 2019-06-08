import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/Constants';


class Actions {
  searchRoutes() {
    AppDispatcher.dispatch({
      actionType: Constants.SEARCH_ROUTES,

    })
  }

  showRouteResults(routes) {
    AppDispatcher.dispatch({
      actionType: Constants.SHOW_ROUTE_RESULTS,
      route: routes
    })
  }
}
export default new Actions();






