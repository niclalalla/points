import { extend } from 'flarum/extend';
import AdminNav from 'flarum/components/AdminNav';
import AdminLinkButton from 'flarum/components/AdminLinkButton';

import SettingsPage from './components/SettingsPage';
import PointsList from './models/Pointslist'

export default () => {
  app.routes['points'] = { path: '/points/list', component: SettingsPage };

  app.extensionSettings['points'] = () => m.route.set(app.route('points'));

  extend(AdminNav.prototype, 'items', (items) => {
    items.add(
        'points',
        AdminLinkButton.component({
          href: app.route('points'),
          icon: 'fas fa-gavel',
          description: 'Points convert check here',
        }, 'Points Bill')
    );
  });


// export default () => {
//   // Main page
//   app.routes.points = {
//     path: '/points/list',
//     component: SettingsPage
//   };
//   console.log(SettingsPage.component);
//   console.log(PointsList);
//   console.log(app.route('points'));
//   // Quick access settings from extensions tab
//   app.extensionSettings['points'] = () => m.route(app.route('points'));
//   // app.store.models['points/list'] = PointsList;
//   extend(AdminNav.prototype, 'items', items => {
//     items.add(
//       'points',
//       AdminLinkButton.component({
//         href: app.route('points'),
//         icon: 'fas fa-gavel',
//         description: 'Points convert check here',
//       }, 'Points Bill222')
//     );
//   });




  // app.routes['points'] = { path: '/goaskme/points-convert', component: SettingsPage.component() };
  //   console.log(SettingsPage.component());
  //   app.extensionSettings['points'] = () => m.route(app.route('points'));
  //   // 列表存储
  //   app.store.models['points/list'] = PoinstsList;
  //   extend(AdminNav.prototype, 'items', (items) => {
  //     items.add(
  //       'goaskme-points-convert',
  //       AdminLinkButton.component({
  //         href: app.route('points'),
  //         icon: 'fas fa-gavel',
  //         description: 'Points convert check here',
  //       }, 'Points Bill')
  //     );
  //   });
};
