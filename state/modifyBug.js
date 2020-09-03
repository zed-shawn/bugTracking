import addBug from "../models/addBug";

const BUG_ADDED = "bugAdded";
const BUG_REMOVED = "bugRemoved";

export function bugAdded(description) {
  return {
    type: BUG_ADDED,
    payload: {
      description: description,
    },
  };
}

export function bugRemoved(id) {
  return {
    type: BUG_REMOVED,
    payload: {
      id: id,
    },
  };
}
const initialState = {
  activeBugs: [],
  resolvedBugs: [],
  deletedBugs: [],
};

let lastID = 0;

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case BUG_ADDED:
      const newBug = new addBug(++lastID, action.payload.description, false);
      return {
        ...state,
        activeBugs: state.activeBugs.concat(newBug),
      };

    case BUG_REMOVED:
      return state.filter((bug) => bug.id !== action.payload.id);

    default:
      return state;
  }
}
