
export const RECEIVE_LIST = 'RECEIVE_LIST'
export const AUTO_CLICK = 'AUTO_CLICK'



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
 