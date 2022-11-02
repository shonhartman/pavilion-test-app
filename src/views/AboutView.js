/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6362d73c42adb71784f66098").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class AboutView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/AboutController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = AboutView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '6362d73c42adb756faf660a0'
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
    const proxies = AboutView.Controller !== AboutView ? transformProxies(this.props.children) : {

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
                  <a href="about.html" aria-current="page" className="af-class-navigation-link w-nav-link w--current">About</a>
                </nav>
                <div className="af-class-hamburger-button w-nav-button">
                  <div className="w-icon-nav-menu" />
                </div>
              </div>
            </div>
            <div className="af-class-section af-class-wf-section">
              <div className="w-container">
                <div className="w-row">
                  <div className="w-col w-col-6"><img src="images/photo-1421809313281-48f03fa45e9f.jpg" srcSet="images/photo-1421809313281-48f03fa45e9f-p-500x500.jpeg 500w, images/photo-1421809313281-48f03fa45e9f.jpg 700w" sizes="(max-width: 479px) 96vw, (max-width: 721px) 97vw, (max-width: 767px) 700px, (max-width: 991px) 354px, 460px" alt className="af-class-about-photo" /></div>
                  <div className="w-col w-col-6">
                    <div className="w-richtext">
                      <h2>I'm John Smith</h2>
                      <p>The scent of hay was in the air through the lush meadows beyond Pyrford, and the hedges on either side were sweet and gay with multitudes of dog-roses. The heavy firing that had broken out while we were driving down Maybury Hill ceased as abruptly as it began, leaving the evening very peaceful and still. &nbsp;We got to Leatherhead without misadventure about nine o'clock, and the horse had an hour's rest while I took supper with my cousins and commended my wife to their care.</p>
                      <p>My wife was curiously silent throughout the drive, and seemed oppressed with forebodings of evil. &nbsp;I talked to her reassuringly, pointing out that the Martians were tied to the Pit by sheer heaviness, and at the utmost could but crawl a little out of it; but she answered only in monosyllables. &nbsp;Had it not been for my promise to the innkeeper, she would, I think, have urged me to stay in Leatherhead that night. &nbsp;Would that I had! &nbsp;Her face, I remember, was very white as we parted.</p>
                    </div>
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

export default AboutView

/* eslint-enable */