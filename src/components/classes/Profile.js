import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: this.props.username || "Unidentified user" };
  }

  //contenidos dentro del perfil de entrenador pokemon
  // avatar, username, alias, home, region, pokemon_team, type, rank, medals
  render() {
    return (<>
      <h1>{this.state.username}</h1>
    </>);
  }
}

export default Profile;
