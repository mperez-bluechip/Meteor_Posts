import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router';

// database - collection
import { Posts } from '../api/posts';

import TeamList from './Team-list';
import TeamStats from './Team-stats';
import Post from './Post';


export default class App extends Component {
  constructor(props) {
    super(props);

    // setting up the state
    this.state = { posts: [] };
  }

  renderPosts() {
    return this.props.posts.map((post) => (
      <TeamList key={post._id} post={post} />
    ));
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <AppBar
            title="POSTS"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            showMenuIconButton={false}>
            </AppBar>
          <div className="row">
            <div className="col s12 m7" ><Post /></div>
            <div className="col s12 m5" >
              <h2>Team list</h2><Link to="/new" className="waves-effect waves-light btn">Add Post</Link>
              <Divider/>
                <List>
                  {this.renderPosts()}
                </List>
              <Divider/>
            </div>
            <div className="col s12 m5" ><TeamStats/></div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default createContainer(() => {
  Meteor.subscribe('posts');
  const user = Meteor.userId();

  return {
    posts: Posts.find({ owner: post }, {sort: { name: 1}}).fetch(),
  };
}, App);
