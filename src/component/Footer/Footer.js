import React from 'react'
import { faInstagram, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () =>  {
  return (
    <>
      <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div class="col-md-4 d-flex align-items-center">
            
            <span class="mb-3 mb-md-0 text-muted">© 2023 MLMIV</span>
          </div>
          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3">
              <a class="text-muted" href="https://www.instagram.com/mattm.codes_/">
                <FontAwesomeIcon icon={faInstagram}/>
              </a>
            </li>
            <li class="ms-3">
            <a class="text-muted" href="https://twitter.com/Mlmcdanieli">
                <FontAwesomeIcon icon={faTwitter}/>
              </a>
            </li>
            <li class="ms-3">
            <a class="text-muted" href="https://github.com/mlmcdan1">
                <FontAwesomeIcon icon={faGithub}/>
              </a>
            </li>
          </ul>
        </footer>

      </div>
        
    </>
  )
}

export default Footer