import Actions from '../actions/Actions';

const PROXY = 'https://cors-anywhere.herokuapp.com/'
class API {

  searchRoutes(q)
  { 
       fetch(`${PROXY}https://www3.septa.org/api/TransitViewAll/?routes=`+q)
          .then(items => items.json())
          .then(items => Actions.showRouteResults(items));
     }
}
export default new API();



