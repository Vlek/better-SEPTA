import Actions from '../actions/Actions';


class API {

  searchRoutes(s)
  { fetch(`https://www3.septa.org/api/TransitViewAll/?routes=`+ s)
          .then(items => items.json())
          .then(items => Actions.showRouteResults(items));
     }
}
export default new API();



