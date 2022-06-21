import css from "./Users.module.css";
import userPhoto from './../Photo/Tom.jpg'
import * as axios from "axios";
import React from "react";


class Users extends React.Component {
   constructor(props) {
      super(props);
      axios.get('https://social-network.samuraijs.com/api/1.0/users').then(responce => {
         this.props.setUsers(responce.data.items)
      })
   }
   render() {
      return <div className={css.usersList}>
         {this.props.users.map((u) => <div key={u.id}>
  <span>
      <div>
        <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={css.userPhoto} alt='ava'/>
      </div>
      <div>
         {u.followed ?
             <button onClick={() => (this.props.unfollow(u.id))}>Unfollow</button> :
             <button onClick={() => (this.props.follow(u.id))}>Follow</button>}
      </div>
  </span>
            <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
         </span>
            <span>
            <div>{'u.location.country'}</div>
            <div>{'u.location.city'}</div>
         </span>
         </div>)}
      </div>
   }
}

export default Users



// props.setUsers([
//    {
//       id: v1(),
//       photoUrl: "https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/mission_-impossible-7-crew-calls-tom-cruise-a-nightmare.jpg",
//       followed: false,
//       fullName: "Dmitry",
//       status: "I am Dude",
//       location: {city: "Minsk", country: "Belarus"},
//    },
//    {
//       id: v1(),
//       photoUrl:"https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/mission_-impossible-7-crew-calls-tom-cruise-a-nightmare.jpg",
//       followed: true,
//       fullName: "Tania",
//       status: "I am cool girl",
//       location: {city: "Minsk", country: "Belarus"},
//    },
//    {
//       id: v1(),
//       photoUrl:"https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/mission_-impossible-7-crew-calls-tom-cruise-a-nightmare.jpg",
//       followed: false,
//       fullName: "Danik",
//       status: "I am little boy",
//       location: {city: "Minsk", country: "Belarus"},
//    },
//    {
//       id: v1(),
//       photoUrl:"https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/mission_-impossible-7-crew-calls-tom-cruise-a-nightmare.jpg",
//       followed: true,
//       fullName: "Igor",
//       status: "I am big man",
//       location: {city: "Lviv", country: "Ukraine"},
//    },
//    {
//       id: v1(),
//       photoUrl:"https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/mission_-impossible-7-crew-calls-tom-cruise-a-nightmare.jpg",
//       followed: false,
//       fullName: "Julia",
//       status: "I am happy!",
//       location: {city: "Chicago", country: "USA"},
//    },
//
// ])