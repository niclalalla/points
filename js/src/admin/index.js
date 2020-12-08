import Model from 'flarum/Model';
import Pointslist from './models/Pointslist';

import addSettingsPage from './addSettingsPage';

app.initializers.add('goaskme/points-convert', () => {
  app.store.models.points = Pointslist;

  app.store.models.users.prototype.points = Model.hasMany('banned_ips');
  console.log('[goaskme/points-convert Hello! 8888')
  addSettingsPage()
})
