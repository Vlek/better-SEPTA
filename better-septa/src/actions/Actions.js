import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/Constants';


class Actions {
  searchRoutes(q) {
    AppDispatcher.dispatch({
      actionType: Constants.SEARCH_ROUTES,
      query: q



    })
  }

  showRouteResults(routes,q) {
    AppDispatcher.dispatch({
      actionType: Constants.SHOW_ROUTE_RESULTS,
      route: routes,
      query: q
    })
  }
}
export default new Actions();






