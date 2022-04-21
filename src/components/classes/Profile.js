import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: this.props.username || "Unidentified user" };
  }

  //contenidos dentro del perfil
  // avatar, username, alias, location, pokemons
  render() {
    return (<>
      <h1>{this.state.username}</h1>
    </>);
  }
}

export default Profile;
