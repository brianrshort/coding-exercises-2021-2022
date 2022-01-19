import React from 'react';
import { fetchUserData, cancelFetch } from './dataFetcher';
import { Userlist } from './Userlist';

export class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userData: null };
  }

  loadUserData() {
    this.setState({userData: null});
    this.fetchID = fetchUserData(this.props.username, (userData) => {
    this.setState({ userData });
  });
  }

  componentDidMount() {
    this.loadUserData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.username !== prevProps.username) {
      cancelFetch(this.fetchID);
      this.loadUserData();
    }
  }

  render() {
    let isLoading;
    let name;
    let bio;
    let friends;
    let imgSrc;
    if (this.state.userData === null) {
      isLoading = true;
      name = "Loading...";
      bio = "Loading...";
      friends = [];
      imgSrc = "";
    } else {
      isLoading = false;
      name = this.state.userData.name;
      bio = this.state.userData.bio;
      friends = this.state.userData.friends;
      imgSrc = this.state.userData.profilePictureUrl;
    }

    let className = 'Profile';
    if (isLoading) {
      className += ' loading';
    }

    return (
      <div className={className}>
        <div className="profile-picture">
        <img src={imgSrc} />
        </div>
        <div className="profile-body">
          <h2>{name}</h2>
          <h3>@{this.props.username}</h3>
          <p>{bio}</p>
          <h3>{friends}</h3>
          <Userlist usernames={friends} onChoose={this.props.onChoose} />
        </div>
      </div>
    );
  }
}