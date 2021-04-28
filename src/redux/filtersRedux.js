/* SELECTORS */

export const getAllFilters = ({filters}) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
// TODO - add other action types
export const ADDING_TAG = createActionName('ADDING_TAG');
export const REMOVING_TAG = createActionName('REMOVING_TAG');
export const CHANGE_DURATION_TIME_FROM = createActionName('CHANGE_DURATION_TIME_FROM');
export const CHANGE_DURATION_TIME_TO = createActionName('CHANGE_DURATION_TIME_TO');
export const CHANGE_DISPLAY_ORDER = createActionName('CHANGE_DISPLAY_ORDER');


// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
// TODO - add other action creators
export const addingTag = payload => ({ payload, type: ADDING_TAG });
export const removingTag = payload => ({payload, type: REMOVING_TAG });
export const changeDurationTimeFrom = payload => ({ payload, type: CHANGE_DURATION_TIME_FROM });
export const changeDurationTimeTo = payload => ({ payload, type: CHANGE_DURATION_TIME_TO });
export const changeDisplayOrdrer = payload => ({ payload, type: CHANGE_DISPLAY_ORDER });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_DURATION_TIME_FROM:
      return {
        ...statePart,
        duration: {
          ...statePart.duration,
          from: action.payload,
        },
      };
    case CHANGE_DURATION_TIME_TO:
      return {
        ...statePart,
        duration: {
          ...statePart.duration,
          to: action.payload,
        },
      };
    case REMOVING_TAG:
      return {
        ...statePart,
        tags: [...statePart.tags.filter((tag) => tag != action.payload)],
      };
    case ADDING_TAG:
      return {
        ...statePart,
        tags: [...statePart.tags, action.payload],
      };
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    case CHANGE_DISPLAY_ORDER:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    // TODO - handle other action types
    default:
      return statePart;
  }
}
