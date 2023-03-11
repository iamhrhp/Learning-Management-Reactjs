const initialState = {
  user: [],
};

export const DataReducer: any = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_USER':
      return { user: [...state.user, action.payload] };

    default:
      return state;
  }
};
