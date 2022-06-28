import React from 'react';
import css from "./Users.module.css";
import userPhoto from "../Photo/Tom.jpg";

const Users = (props) => {
   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
   let pages = []
   for(let i = 1; i <= pagesCount; i++){
      pages.push(i)
   }
   return <div className={css.usersList}>
      <div>
         {pages.map((elem, index)=>{
            return <span key={index}
                         className={props.currentPage === elem ? css.selectedPage:undefined}
                         onClick={()=>props.onPageChanged(elem)}>{elem}</span>
         })}
      </div>

      {this.props.users.map((u) => <div key={u.id}>
         <div>
            <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={css.userPhoto} alt='ava'/>
         </div>
         <div>
            {u.followed ?
                <button onClick={() => (props.unfollow(u.id))}>Unfollow</button> :
                <button onClick={() => (props.follow(u.id))}>Follow</button>}
         </div>
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

};

export default Users;