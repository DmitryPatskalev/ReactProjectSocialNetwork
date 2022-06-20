import css from "./Users.module.css";
import {v1} from "uuid";

const Users = (props) => {

   if (props.users.length === 0) {
      props.setUsers([
         {
            id: v1(),
            photoUrl: "https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/mission_-impossible-7-crew-calls-tom-cruise-a-nightmare.jpg",
            followed: false,
            fullName: "Dmitry",
            status: "I am Dude",
            location: {city: "Minsk", country: "Belarus"},
         },
         {
            id: v1(),
            photoUrl:"https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/mission_-impossible-7-crew-calls-tom-cruise-a-nightmare.jpg",
            followed: true,
            fullName: "Tania",
            status: "I am cool girl",
            location: {city: "Minsk", country: "Belarus"},
         },
         {
            id: v1(),
            photoUrl:"https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/mission_-impossible-7-crew-calls-tom-cruise-a-nightmare.jpg",
            followed: false,
            fullName: "Danik",
            status: "I am little boy",
            location: {city: "Minsk", country: "Belarus"},
         },
         {
            id: v1(),
            photoUrl:"https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/mission_-impossible-7-crew-calls-tom-cruise-a-nightmare.jpg",
            followed: true,
            fullName: "Igor",
            status: "I am big man",
            location: {city: "Lviv", country: "Ukraine"},
         },
         {
            id: v1(),
            photoUrl:"https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/mission_-impossible-7-crew-calls-tom-cruise-a-nightmare.jpg",
            followed: false,
            fullName: "Julia",
            status: "I am happy!",
            location: {city: "Chicago", country: "USA"},
         },

      ])
   }

   return <div className={css.usersList}>

      {props.users.map((u) => <div key={u.id}>
  <span>
      <div>
        <img src={u.photoUrl} className={css.userPhoto} alt='ava'/>
      </div>
      <div>
         {u.followed ?
             <button onClick={() => (props.unfollow(u.id))}>Unfollow</button> :
             <button onClick={() => (props.follow(u.id))}>Follow</button>}
      </div>
  </span>
         <span>
            <div>{u.fullName}</div>
            <div>{u.status}</div>
         </span>
         <span>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
         </span>
      </div>)}
   </div>
}
export default Users
