/*
 *
 *  This file is part of fof/username-request.
 *
 *  Copyright (c) 2019 FriendsOfFlarum.
 *
 *  For the full copyright and license information, please view the LICENSE.md
 *  file that was distributed with this source code.
 *
 */

import Alert from 'flarum/components/Alert'
import Modal from 'flarum/components/Modal'
import Button from 'flarum/components/Button'

export default class CloseModal extends Modal {
  oninit(vnode) {
    super.oninit(vnode)

    this.request = app.session.user.goaskme_convert_gam_requests()
  }

  className() {
    return 'ResultsModal Modal'
  }

  title() {
    return app.translator.trans('goaskme-points.forum.convert_gam.close_title')
  }

  content() {
    return (
      <div className="Modal-body">
        <div className="Form Form--centered">
          <h2>{app.translator.trans('goaskme-points.forum.convert_gam.close_info')}</h2>
        </div>
      </div>
    )
  }

  onhide() {
    app.session.user.goaskme_convert_gam_requests = m.prop()
    this.request.save({ delete: true })
  }
}
