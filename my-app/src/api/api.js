import * as axios from "axios";


const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '4d3cbccb-1ffc-4b1e-9cfc-122f4f11e46d'
  }
})

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(responce => {
        return responce.data
      })
  },
  follow(userId) {
    return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId.id}`)
  },
  unfollow(userId) {
    return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId.id}`)
  },
  getProfile(userId){
    return instance.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)

  }


}



