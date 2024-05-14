import React from 'react'
import './styles/Navbar.css'; // Import your header styles

export default function Navbar() {
  return (
    <div>
      <nav className="tabs">
            <div className="container">
              <ul>
                <li>
                  <a href="https://medium.com/@vedantdbhamare" target="_blank">
                    Blogs
                  </a>
                </li>
                <li>
                  <a
                    href="https://vedantbhamare.notion.site/Projects-Showcase-441367d3f63a46da95f2f78702c0933b?pvs=4"
                    target="_blank"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/file/d/1T-PWMs_vCdi8P6vhl5Xrkj398t9ZuAQK/view?usp=sharing"
                    target="_blank"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </nav>
    </div>
  )
}
