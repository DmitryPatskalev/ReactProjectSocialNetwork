import React from 'react';
import css from "./Users.module.css";
import userPhoto from "../Photo/Tom.jpg";
import {NavLink} from "react-router-dom";


const Users = (props) => {
   const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
   const pages = []
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
   }
   return <div className={css.usersList}>
      <div>
         {pages.map((elem, index) => {
            return <span key={index}
                         className={props.currentPage === elem ? css.selectedPage : undefined}
                         onClick={() => props.onPageChanged(elem)}>{elem}</span>
         })}
      </div>
      {props.users.map((u) => <div key={u.id}>
         <NavLink to={'/profile/' + u.id}>
            <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={css.userPhoto} alt='ava'/>
         </NavLink>
         <div>
            {u.followed ?
                <button disabled={props.followingInProgress.some(id=>id === u.id)}
                        onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                :
                <button disabled={props.followingInProgress.some(id=>id === u.id)}
                        onClick={() => {props.follow(u.id)}}>Follow</button>}
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