import logoSm from "~/assets/images/logo-sm.png"
import logoLight from "~/assets/images/logo-light.png"
import logoDark from "~/assets/images/logo-dark.png"
import { sidebarItems } from "~/static/sidebarItems"
const Sidebar = () => {
  return (
    <div className="app-sidebar-menu">
    <div className="h-100" data-simplebar>
      {/*- Sidemenu */}
      <div id="sidebar-menu">
        <div className="logo-box">
          <a className="logo logo-light" href="index-2.html">
            <span className="logo-sm">
              <img src={logoSm} alt="" height={22} />
            </span>
            <span className="logo-lg">
              <img src={logoLight} alt="" height={24} />
            </span>
          </a>
          <a className="logo logo-dark" href="index-2.html">
            <span className="logo-sm">
              <img src={logoSm} alt="" height={22} />
            </span>
            <span className="logo-lg">
              <img src={logoDark} alt="" height={24} />
            </span>
          </a>
        </div>
        <ul id="side-menu">
            {
                sidebarItems.map((item, index) => (
                    <div key={index}>
                    <li className="menu-title">{item.header_name}</li>
                    {
                        item.pages.map((page, index) => (
                            <li key={index}>
                            <a href={`#${page.title}`}data-bs-toggle="collapse" className="d-flex align-items-center">
                            <span className={`mdi ${page.icon} medium-icon text-mute me-2`} />
                              <span> {page.title} </span>
                              <span className="menu-arrow" />
                            </a>
                            <div className="collapse" id={`${page.title}`}>
                              <ul className="nav-second-level">
                                {
                                    page.children.map((child, index) => (
                                        <li key={index}>
                                        <a className="tp-link" href={child.path}>
                            <span className={`mdi ${child.icon} medium-icon text-mute me-2`} />

                                            {child.title}</a>
                                      </li>
                                    ))
                                }
                              </ul>
                            </div>
                          </li>
                        ))
                    }
                    </div>
                ))
            }
        </ul>
      </div>
      {/* End Sidebar */}
      <div className="clearfix" />
    </div>
  </div>
  )
}

export default Sidebar