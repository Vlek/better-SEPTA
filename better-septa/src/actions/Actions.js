import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/Constants';


class Actions {
  searchRoutes(s) {
    AppDispatcher.dispatch({
      actionType: Constants.SEARCH_ROUTES,
      query: s,
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






