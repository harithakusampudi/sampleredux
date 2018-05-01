
export const RECEIVE_LIST = 'RECEIVE_LIST'
export const AUTO_CLICK = 'AUTO_CLICK'
export const GET_LOCATION = 'GET_LOCATION'



export const fetchlist = search_term => dispatch => {
    return fetch("https://maps.googleapis.com/maps/api/place/autocomplete/json?input="+search_term+"&key=AIzaSyBUJx80sMf2DQF9hsGC0tgiKxGusOt0KEo")
      .then(response => response.json())
      .then(json => dispatch(receivelist(search_term, json)))
  }

  export const receivelist = (search_term, json) => ({
    type: RECEIVE_LIST,
    search_term:search_term,
    list:json.predictions
  })
  export const autoclick = ele =>({
    type:AUTO_CLICK,
    search_term:ele.description
  })
  export const getlocation = search_term => dispatch => {
    return fetch("https://maps.googleapis.com/maps/api/place/textsearch/json?query="+search_term+"&key=AIzaSyBUJx80sMf2DQF9hsGC0tgiKxGusOt0KEo")
    .then(response => response.json())
    .then(json => dispatch(receivelocationlist(search_term, json)))
  }
  export const receivelocationlist = (search_term, json) => ({
    type: GET_LOCATION,
    search_term:search_term,
    results:json.results
  })

  //maps.googleapis.com/maps/api/place/details/json?placeid=" + search_term.place_id +"&key=AIzaSyBUJx80sMf2DQF9hsGC0tgiKxGusOt0KEo"
 