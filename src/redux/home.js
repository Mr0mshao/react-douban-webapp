import request from 'superagent'
import jsonp from 'superagent-jsonp'
// action type
export const types = {
  FETCH_EVENTS: 'FETCH_EVENTS',
  FETCH_SINGLE_EVENT: 'FETCH_SINGLE_EVENT'
}
const initialState = {
  events: [],
  temp: [],
  skip: 0,
  eventItem: {}
}
// reducer
export default function reducer (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_EVENTS: 
      return Object.assign({}, state, {
        events: action.events,
        skip: action.skip + 3
      })
    case types.FETCH_SINGLE_EVENT:
      return Object.assign({}, state, {
        eventItem: action.eventItem
      })
    default: return state
  }
}


// action create
export const actions = {
  fetchEvents: (skip) => {
    return dispatch => {
      return request
              .get('https://api.douban.com/v2/event/list?loc=108288&start=' + skip + '&count=6')
              .use(jsonp)
              .end((err, res) => {
                if (err) return false
                dispatch({
                  type: 'FETCH_EVENTS',
                  events: res.body.events,
                  skip: res.body.start
                })
              })
    }
  },
  fetchSingleEvent: () => {}
}


