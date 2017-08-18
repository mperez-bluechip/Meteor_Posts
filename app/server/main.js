import { Meteor } from 'meteor/meteor';
import { Posts } from '../imports/api/posts';

Meteor.startup(() => {
  Meteor.publish('posts', function() {
    return Posts.find({});
  })
});
