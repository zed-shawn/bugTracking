import * as actionType from "./actions/actionLabels";

let lastID = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case actionType.BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastID,
          description: action.payload.description,
          resolved: false,
        },
      ];

    case actionType.BUG_REMOVED:
      return state.filter((bug) => bug.id !== action.payload.id);

    default:
      return state;
  }
}
