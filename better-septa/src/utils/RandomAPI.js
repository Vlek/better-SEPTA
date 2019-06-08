// Random User API logic
import { receiveRandom } from '../actions/actions';
import request from 'superagent';

export function getRandomApi() {
  request.get(`https://septa.p.rapidapi.com/hackathon/Stops/?req1=23`,
                   {headers: {"X-RapidAPI-Key": "648efc9968msh984da544b0866a4p133036jsn68ea9f5ba707"}})
    .set('Accept', 'application/json')
    .end((err, response) => {
      if (err) return console.error(err);
      receiveRandom(response.body);
    });
}

