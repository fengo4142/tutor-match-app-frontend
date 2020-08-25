const tutorActions = {
  FETCH_REQUEST: 'FETCH_REQUEST',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_FAILED: 'FETCH_FAILED',

  CREATE_REQUEST: 'CREATE_REQUEST',
  CREATE_SUCCESS: 'CREATE_SUCCESS',
  CREATE_FAILED: 'CREATE_FAILED',

  UPDATE_REQUEST: 'UPDATE_REQUEST',
  UPDATE_SUCCESS: 'UPDATE_SUCCESS',
  UPDATE_FAILED: 'UPDATE_FAILED',

  DELETE_REQUEST: 'DELETE_REQUEST',
  DELETE_SUCCESS: 'DELETE_SUCCESS',
  DELETE_FAILED: 'DELETE_FAILED',

  fetchRequest: (payload) => ({ type: tutorActions.FETCH_REQUEST, payload }),
  fetchSuccess: (payload) => ({ type: tutorActions.FETCH_SUCCESS, payload }),
  fetchFailed: (payload) => ({ type: tutorActions.FETCH_FAILED, payload }),

  createRequest: (payload) => ({ type: tutorActions.CREATE_REQUEST, payload }),
  createSuccess: (payload) => ({ type: tutorActions.CREATE_SUCCESS, payload }),
  createFailed: (payload) => ({ type: tutorActions.CREATE_FAILED, payload }),

  updateRequest: (payload) => ({ type: tutorActions.UPDATE_REQUEST, payload }),
  updateSuccess: (payload) => ({ type: tutorActions.UPDATE_SUCCESS, payload }),
  updateFailed: (payload) => ({ type: tutorActions.UPDATE_FAILED, payload }),

  deleteRequest: (payload) => ({ type: tutorActions.DELETE_REQUEST, payload }),
  deleteSuccess: (payload) => ({ type: tutorActions.DELETE_SUCCESS, payload }),
  deleteFailed: (payload) => ({ type: tutorActions.DELETE_FAILED, payload }),
};

export default tutorActions;
