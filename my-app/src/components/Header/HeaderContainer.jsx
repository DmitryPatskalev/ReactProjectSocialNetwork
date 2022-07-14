import React from "react";
import Header from "./Header";
import axios from "axios";
import {setAuthUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
      withCredentials: true
    })
      .then(responce => {
        if (responce.data.resultCode === 0) {
          let {id, email, login} = responce.data.data;
          this.props.setAuthUserData(id,email,login)
        }
      })
  }

  render() {
    return <Header {...this.props}/>
  }
}

const mapStateToProps = (state) => ({
  profile:state.profilePage.profile

})
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)