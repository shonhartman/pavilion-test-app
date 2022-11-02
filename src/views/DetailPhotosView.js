/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6362d73c42adb71784f66098").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class DetailPhotosView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/DetailPhotosController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = DetailPhotosView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '6362d73c42adb72039f660a4'
    htmlEl.dataset['wfSite'] = '6362d73c42adb71784f66098'

    scripts.concat(null).reduce((active, next) => Promise.resolve(active).then((active) => {
      const loading = active.loading.then((script) => {
        new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script)

        return next
      })

      return active.isAsync ? next : loading
    }))
  }

  render() {
    const proxies = DetailPhotosView.Controller !== DetailPhotosView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/export-app-to-react.webflow.css);
        ` }} />
        <span className="af-view">
          <div>
            <div data-collapse="medium" data-animation="default" data-duration={400} data-easing="ease" data-easing2="ease" role="banner" className="af-class-navigation-bar w-nav">
              <div className="w-container">
                <a href="index.html" className="af-class-brand-link w-nav-brand">
                  <h1 className="af-class-brand-text">NEWPORT</h1>
                </a>
                <nav role="navigation" className="af-class-navigation-menu w-nav-menu">
                  <a href="index.html" className="af-class-navigation-link w-nav-link">Gallery</a>
                  <a href="blog.html" className="af-class-navigation-link w-nav-link">Blog</a>
                  <a href="about.html" className="af-class-navigation-link w-nav-link">About</a>
                </nav>
                <div className="af-class-hamburger-button w-nav-button">
                  <div className="w-icon-nav-menu" />
                </div>
              </div>
            </div>
            <div className="af-class-section af-class-wf-section">
              <div className="w-container">
                <div className="af-class-photo-row w-row">
                  <div className="w-col w-col-4">
                    <h1 className="af-class-photo-page-title" />
                    <div className="af-class-photo-info-text" />
                    <div className="af-class-description-text w-richtext" />
                  </div>
                  <div className="w-col w-col-8">
                    <div className="w-richtext" />
                  </div>
                </div>
              </div>
              <div className="af-class-all-images w-container">
                <h1 className="af-class-photo-page-title af-class-center">ALL PHOTOS</h1>
                <div className="af-class-gallery-wrapper w-dyn-list">
                  <div role="list" className="w-dyn-items w-row">
                    <div role="listitem" className="w-dyn-item w-col w-col-4">
                      <a href="#" className="af-class-photo-link-block w-inline-block"><img src alt />
                        <div className="af-class-title" />
                      </a>
                    </div>
                  </div>
                  <div className="w-dyn-empty">
                    <p>No items found.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-footer af-class-wf-section">
              <div className="w-container">
                <div>
                  <a href="#" className="af-class-social-icon-link w-inline-block"><img src="images/social-03.svg" width={20} alt /></a>
                  <a href="#" className="af-class-social-icon-link w-inline-block"><img src="images/social-18.svg" width={20} alt /></a>
                  <a href="#" className="af-class-social-icon-link w-inline-block"><img src="images/social-30.svg" width={20} alt /></a>
                </div>
              </div>
              <div className="af-class-footer-text">Powered by Webflow</div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default DetailPhotosView

/* eslint-enable */