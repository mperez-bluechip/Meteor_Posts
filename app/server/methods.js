import { Meteor } from 'meteor/meteor';
import { Posts } from '../imports/api/posts';

Meteor.methods({
  insertPost(post) {
    Posts.insert(post);
  }
});
