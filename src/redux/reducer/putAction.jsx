const initialState = {
  userData: null,
  profileData: null,
  portfolioData: null,
  skillsData: null,
  loading: false,
  error: null
};

const putReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PUT_DATA_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'PUT_DATA_SUCCESS':
      const { dataType, data } = action.payload;
      return {
        ...state,
        [`${dataType}Data`]: data,
        loading: false,
        error: null
      };
    case 'PUT_DATA_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default putReducer;
