import Actions from '../actions/Actions';


class API {


  searchRoutes(q)
  { fetch('https://septa.p.rapidapi.com/hackathon/Stops/?req1='+q,
          {headers: {"X-RapidAPI-Key": "648efc9968msh984da544b0866a4p133036jsn68ea9f5ba707"}})
          .then(items => items.json())
          .then(items => Actions.showRouteResults(items));
     }
}
export default new API();



