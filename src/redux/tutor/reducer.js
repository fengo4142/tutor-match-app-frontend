import actions from './actions';

const initialState = {
  loading: false,
  tutors: null,
  error: null,
};

export default function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case actions.FETCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actions.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        tutors: payload,
        error: null,
      };
    case actions.FETCH_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case actions.CREATE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actions.CREATE_SUCCESS:
      return {
        ...state,
        tutors: [ ...state.tutors, payload ],
        loading: false,
        error: null,
      };
    case actions.CREATE_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case actions.UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actions.UPDATE_SUCCESS:
      return {
        ...state,
        tutors: state.tutors.map(item => item.id === payload.id ? payload : item),
        loading: false,
        error: null,
      };
    case actions.UPDATE_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case actions.DELETE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case actions.DELETE_SUCCESS:
      return {
        ...state,
        tutors: [ ...state.tutors.filter(item => item.id !== payload.id) ],
        loading: false,
        error: null
      }
    case actions.DELETE_FAILED:
      return {
        ...state,
        loading: false,
        error: payload
      }
    default:
      return state;
  }
}
