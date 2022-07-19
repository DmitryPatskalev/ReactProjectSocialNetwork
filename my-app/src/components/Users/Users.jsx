import React from 'react';
import css from "./Users.module.css";
import userPhoto from "../Photo/Tom.jpg";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {toggleFollowingInProgress} from './../../redux/users-reducer'


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
                <button disabled={props.followingInProgress.some(id=>id === u.id)} onClick={() => {
                   props.toggleFollowingInProgress(true,u.id)
                   axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                       {
                          withCredentials: true,
                          headers: {
                             'API-KEY': '4d3cbccb-1ffc-4b1e-9cfc-122f4f11e46d'
                          }
                       })
                       .then(response => {
                          if (response.data.resultCode === 0) {
                             (props.unfollow(u.id))
                          }
                          props.toggleFollowingInProgress(false,u.id)
                       })
                }}>Unfollow</button>
                :
                <button disabled={props.followingInProgress.some(id=>id === u.id)} onClick={() => {
                   props.toggleFollowingInProgress(true,u.id)
                   axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                       {
                          withCredentials: true,
                          headers: {
                             'API-KEY': '4d3cbccb-1ffc-4b1e-9cfc-122f4f11e46d'
                          }
                       })
                       .then(response => {
                          if (response.data.resultCode === 0) {
                             (props.follow(u.id))
                          }
                          props.toggleFollowingInProgress(false,u.id)
                       })
                }}>Follow</button>}
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