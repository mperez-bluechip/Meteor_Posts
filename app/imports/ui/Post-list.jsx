import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import { ListItem } from 'material-ui/List';
import ActionDeleteForever from 'material-ui/svg-icons/action/delete-forever';

export default class PostList extends Component {
  render() {
    return (
      <ListItem
        primaryText={this.props.post.title}

        />
    )
  }
}
