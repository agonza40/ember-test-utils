import Ember from 'ember'
const {Router} = Ember

import config from './config/environment'

var MyRouter = Router.extend({
  location: config.locationType
})

MyRouter.map(function () {
  this.route('demo', {path: '/'})
})

export default MyRouter
