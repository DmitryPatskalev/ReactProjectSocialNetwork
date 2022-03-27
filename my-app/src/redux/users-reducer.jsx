const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    {
      id: 1,
      followed: false,
      fullName: "Dmitry",
      status: "I am Dude",
      location: { city: "Minsk", country: "Belrus" },
    },
    {
      id: 2,
      followed: true,
      fullName: "Tania",
      status: "I am cool girl",
      location: { city: "Minsk", country: "Belrus" },
    },
    {
      id: 3,
      followed: false,
      fullName: "Danik",
      status: "I am little boy",
      location: { city: "Minsk", country: "Belrus" },
    },
    {
      id: 4,
      followed: true,
      fullName: "Igor",
      status: "I am big man",
      location: { city: "Bolehov", country: "Ukraine" },
    },
    {
      id: 5,
      followed: false,
      fullName: "Julia",
      status: "I am happy!",
      location: { city: "USA", country: "Chicago" },
    },
  ],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
    default:
      return state;
  }
};

export const followAC = (usreId) => ({ type: FOLLOW, usreId });
export const unfollowAC = (usreId) => ({ type: UNFOLLOW, usreId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export default userReducer;
