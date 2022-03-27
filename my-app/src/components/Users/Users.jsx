import css from "./Users.module.css";

let Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          "https://upload.wikimedia.org/wikipedia/ru/thumb/7/7a/Manchester_United_FC_crest.svg/375px-Manchester_United_FC_crest.svg.png",
        followed: false,
        fullName: "Dmitry",
        status: "I am Dude",
        location: { city: "Minsk", country: "Belrus" },
      },
      {
        id: 2,
        photoUrl:
          "https://upload.wikimedia.org/wikipedia/ru/thumb/7/7a/Manchester_United_FC_crest.svg/375px-Manchester_United_FC_crest.svg.png",
        followed: true,
        fullName: "Tania",
        status: "I am cool girl",
        location: { city: "Minsk", country: "Belrus" },
      },
      {
        id: 3,
        photoUrl:
          "https://upload.wikimedia.org/wikipedia/ru/thumb/7/7a/Manchester_United_FC_crest.svg/375px-Manchester_United_FC_crest.svg.png",
        followed: false,
        fullName: "Danik",
        status: "I am little boy",
        location: { city: "Minsk", country: "Belrus" },
      },
      {
        id: 4,
        photoUrl:
          "https://upload.wikimedia.org/wikipedia/ru/thumb/7/7a/Manchester_United_FC_crest.svg/375px-Manchester_United_FC_crest.svg.png",
        followed: true,
        fullName: "Igor",
        status: "I am big man",
        location: { city: "Bolehov", country: "Ukraine" },
      },
      {
        id: 5,
        photoUrl:
          "https://upload.wikimedia.org/wikipedia/ru/thumb/7/7a/Manchester_United_FC_crest.svg/375px-Manchester_United_FC_crest.svg.png",
        followed: false,
        fullName: "Julia",
        status: "I am happy!",
        location: { city: "USA", country: "Chicago" },
      },
    ]);
  }
  return (
    <div>
      {props.users.map((u) => (
        <div>
          key={u.id}
          <span>
            <div>
              <img src={u.photoUrl} className={css.userPhoto} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  UNFOLLOW
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  FOLLOW
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};
export default Users;
