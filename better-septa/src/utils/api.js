import Actions from '../actions/Actions';

const PROXY = 'https://cors-anywhere.herokuapp.com/'
class API {

  searchRoutes(q)
  { 
     fetch(`${PROXY}https://www3.septa.org/api/TransitViewAll/?routes=`+q,
     {
     headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
          }
     }).then(items => items.json())
       .then(items => Actions.showRouteResults(items,q));
     }
}
export default new API();