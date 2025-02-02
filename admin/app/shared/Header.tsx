import userImage from "~/assets/images/users/user-13.jpg"
import user1 from "~/assets/images/users/user-2.jpg"
import user2 from "~/assets/images/users/user-10.jpg"
import user3 from "~/assets/images/users/user-11.jpg"
import user4 from "~/assets/images/users/user-12.jpg"
import user5 from "~/assets/images/users/user-14.jpg"
import user6 from "~/assets/images/users/user-15.jpg"
const Header = () => {
    return (
        <div className="topbar-custom">
            <div className="container-fluid">
                <div className="d-flex justify-content-between">
                    <ul className="list-unstyled topnav-menu mb-0 d-flex align-items-center">
                        <li>
                            <button className="button-toggle-menu nav-link">
                                <span className="mdi mdi-menu large-icon text-mute me-2" />
                            </button>
                        </li>

                        <li className="d-none d-lg-block">
                            <h5 className="mb-0">Good Morning, Aliasger</h5>
                        </li>
                    </ul>
                    <ul className="list-unstyled topnav-menu mb-0 d-flex align-items-center">
                        <li className="d-none d-lg-block">
                            <form className="app-search d-none d-md-block me-auto">
                                <div className="position-relative topbar-search">
                                    <input type="text" className="form-control ps-4" placeholder="Search..." />
                                    <i className="mdi mdi-magnify fs-16 position-absolute text-muted top-50 translate-middle-y ms-2" />
                                </div>
                            </form>
                        </li>

                        <div>
                            <li className="dropdown notification-list topbar-dropdown">
                                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
            <span className="mdi large-icon mdi-bell-outline text-mute noti-icon" />

                                    <span className="badge bg-danger rounded-circle noti-icon-badge">9</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end dropdown-lg">
                                    {/* item*/}
                                    <div className="dropdown-item noti-title">
                                        <h5 className="m-0">
                                            <span className="float-end"><a href="#" className="text-dark"><small>Clear All</small></a></span>Notification
                                        </h5>
                                    </div>
                                    <div className="noti-scroll" data-simplebar>
                                        {/* item*/}
                                        <a href="javascript:void(0);" className="dropdown-item notify-item text-muted link-primary active">
                                            <div className="notify-icon">
                                                <img src={user1} className="img-fluid rounded-circle" alt="" />
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <p className="notify-details">Carl Steadham</p>
                                                <small className="text-muted">5 min ago</small>
                                            </div>
                                            <p className="mb-0 user-msg">
                                                <small className="fs-14">Completed <span className="text-reset">Improve workflow in Figma</span></small>
                                            </p>
                                        </a>
                                        {/* item*/}
                                        <a href="javascript:void(0);" className="dropdown-item notify-item text-muted link-primary">
                                            <div className="notify-icon">
                                                <img src={user2} className="img-fluid rounded-circle" alt="" />
                                            </div>
                                            <div className="notify-content">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <p className="notify-details">Olivia McGuire</p>
                                                    <small className="text-muted">1 min ago</small>
                                                </div>
                                                <div className="d-flex mt-2 align-items-center">
                                                    <div className="notify-sub-icon">
                                                        <i className="mdi mdi-download-box text-dark" />
                                                    </div>
                                                    <div>
                                                        <p className="notify-details mb-0">dark-themes.zip</p>
                                                        <small className="text-muted">2.4 MB</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        {/* item*/}
                                        <a href="javascript:void(0);" className="dropdown-item notify-item text-muted link-primary">
                                            <div className="notify-icon">
                                                <img src={user3} className="img-fluid rounded-circle" alt="" />
                                            </div>
                                            <div className="notify-content">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <p className="notify-details">Travis Williams</p>
                                                    <small className="text-muted">7 min ago</small>
                                                </div>
                                                <p className="noti-mentioned p-2 rounded-2 mb-0 mt-2">
                                                    <span className="text-primary">@Patryk</span> Please make sure that you're....
                                                </p>
                                            </div>
                                        </a>
                                        {/* item*/}
                                        <a href="javascript:void(0);" className="dropdown-item notify-item text-muted link-primary">
                                            <div className="notify-icon">
                                                <img src={user4} className="img-fluid rounded-circle" alt="" />
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <p className="notify-details">Violette Lasky</p>
                                                <small className="text-muted">5 min ago</small>
                                            </div>
                                            <p className="mb-0 user-msg">
                                                <small className="fs-14">Completed <span className="text-reset">Create new components</span></small>
                                            </p>
                                        </a>
                                        {/* item*/}
                                        <a href="javascript:void(0);" className="dropdown-item notify-item text-muted link-primary">
                                            <div className="notify-icon">
                                                <img src={user5} className="img-fluid rounded-circle" alt="" />
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <p className="notify-details">Ralph Edwards</p>
                                                <small className="text-muted">5 min ago</small>
                                            </div>
                                            <p className="mb-0 user-msg">
                                                <small className="fs-14">Completed<span className="text-reset">Improve workflow in React</span></small>
                                            </p>
                                        </a>
                                        {/* item*/}
                                        <a href="javascript:void(0);" className="dropdown-item notify-item text-muted link-primary">
                                            <div className="notify-icon">
                                                <img src={user6} className="img-fluid rounded-circle" alt="" />
                                            </div>
                                            <div className="notify-content">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <p className="notify-details">Jocab jones</p>
                                                    <small className="text-muted">7 min ago</small>
                                                </div>
                                                <p className="noti-mentioned p-2 rounded-2 mb-0 mt-2">
                                                    <span className="text-reset">@Patryk</span> Please make sure that you're....
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                    {/* All*/}
                                    <a href="javascript:void(0);" className="dropdown-item text-center text-primary notify-item notify-all">View all
                                        <i className="fe-arrow-right" />
                                    </a>
                                </div>
                            </li>
                        </div>

                        {/* User Dropdown */}
                        <li className="dropdown notification-list topbar-dropdown">
                            <a className="nav-link dropdown-toggle nav-user me-0" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                <img src={userImage} alt="user-image" className="rounded-circle" />
                                <span className="pro-user-name ms-1">Aliasger <i className="mdi mdi-chevron-down" /></span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end profile-dropdown">
                                {/* item*/}
                                <div className="dropdown-header noti-title">
                                    <h6 className="text-overflow m-0">Welcome !</h6>
                                </div>
                                {/* item*/}
                                <a className="dropdown-item notify-item" href="pages-profile.html">
                                    <i className="mdi mdi-account-circle-outline fs-16 align-middle" />
                                    <span>My Account</span>
                                </a>
                                {/* item*/}
                                <a className="dropdown-item notify-item" href="auth-lock-screen.html">
                                    <i className="mdi mdi-lock-outline fs-16 align-middle" />
                                    <span>Lock Screen</span>
                                </a>
                                <div className="dropdown-divider" />
                                {/* item*/}
                                <a className="dropdown-item notify-item" href="auth-logout.html">
                                    <i className="mdi mdi-location-exit fs-16 align-middle" />
                                    <span>Logout</span>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header