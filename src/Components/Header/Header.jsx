import React, { useEffect, useRef, useState } from 'react'
import LazyImage from '../LazyLoad/LazyImage'
import img6 from '../../assets/img/160x160/img6.jpg'

const Header = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [search, setSearch] = useState('')
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsDropdownOpen((prevState) => !prevState);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
          }
        };
    
        document.addEventListener('click', handleClickOutside);
    
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      }, []);

    return (
        <header id="header" className="navbar navbar-expand-lg navbar-fixed navbar-height navbar-container navbar-bordered bg-white">
            <div className="navbar-nav-wrap">
                <div className="navbar-nav-wrap-content-start">
                    <button type="button" className="js-navbar-vertical-aside-toggle-invoker navbar-aside-toggler">
                        <i className="bi-arrow-bar-left navbar-toggler-short-align" data-bs-template='<div class="tooltip d-none d-md-block" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>' data-bs-toggle="tooltip" data-bs-placement="right" title="Collapse" />
                        <i className="bi-arrow-bar-right navbar-toggler-full-align" data-bs-template='<div class="tooltip d-none d-md-block" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>' data-bs-toggle="tooltip" data-bs-placement="right" title="Expand" />
                    </button>
                    <div className="dropdown ms-2">
                        <div className="d-none d-lg-block">
                            <div className="input-group input-group-merge input-group-borderless input-group-hover-light navbar-input-group">
                                <div className="input-group-prepend input-group-text">
                                    <i className="bi-search" />
                                </div>
                                <input type="search" name='search' value={search} onChange={(e) => setSearch(e.target.value)} className="js-form-search form-control" placeholder="Search in front" />
                                <button onClick={() => setSearch('')} className="input-group-append input-group-text" aria-label='search'>
                                    <i className="bi-x-lg" style={{ display: `${search !== '' ? 'block' : 'none'}` }} />
                                </button>
                            </div>
                        </div>
                        <button className="js-form-search js-form-search-mobile-toggle btn btn-ghost-secondary btn-icon rounded-circle d-lg-none" type="button">
                            <i className="bi-search" />
                        </button>
                    </div>
                </div>
                <div className="navbar-nav-wrap-content-end">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <div className="dropdown" ref={dropdownRef}>
                                <button className="navbar-dropdown-account-wrapper border-0"  id="accountNavbarDropdown" onClick={toggleDropdown}>
                                    <div className="avatar avatar-sm avatar-circle">
                                        <LazyImage className="avatar-img" src={img6} />
                                        <span className="avatar-status avatar-sm-status avatar-status-success" />
                                    </div>
                                </button>
                                <div className={`dropdown-menu dropdown-menu-end navbar-dropdown-menu navbar-dropdown-menu-borderless navbar-dropdown-account ${isDropdownOpen ? 'show' : ''}`} aria-labelledby="accountNavbarDropdown" style={{ width: "16rem", right : '0' }}>
                                    <div className="dropdown-item-text">
                                        <div className="d-flex align-items-center">
                                            <div className="avatar avatar-sm avatar-circle">
                                                <LazyImage className="avatar-img" src={img6} />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h5 className="mb-0">Mark Williams</h5>
                                                <p className="card-text text-body">mark@site.com</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dropdown-divider" />
                                    <div className="dropdown">
                                        <button className="navbar-dropdown-submenu-item dropdown-item dropdown-toggle"  id="navSubmenuPagesAccountDropdown1" data-bs-toggle="dropdown" aria-expanded="false">
                                            Set status
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-end navbar-dropdown-menu navbar-dropdown-menu-borderless navbar-dropdown-sub-menu" aria-labelledby="navSubmenuPagesAccountDropdown1">
                                            <button className="dropdown-item" href="#"><span className="legend-indicator bg-success me-1" /> Available</button>
                                            <button className="dropdown-item" href="#"><span className="legend-indicator bg-danger me-1" /> Busy</button>
                                            <button className="dropdown-item" href="#"><span className="legend-indicator bg-warning me-1" /> Away</button>
                                            <div className="dropdown-divider" />
                                            <button className="dropdown-item" href="#"> Reset status </button>
                                        </div>
                                    </div>
                                    <button className="dropdown-item" href="#">Profile &amp; account</button>
                                    <button className="dropdown-item" href="#">Settings</button>
                                    <div className="dropdown-divider" />
                                    <button className="dropdown-item" href="#">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <div className="avatar avatar-sm avatar-dark avatar-circle">
                                                    <span className="avatar-initials">HS</span>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                <h5 className="mb-0">Htmlstream <span className="badge bg-primary rounded-pill text-uppercase ms-1">PRO</span></h5>
                                                <span className="card-text">hs.example.com</span>
                                            </div>
                                        </div>
                                    </button>
                                    <div className="dropdown-divider" />
                                    <div className="dropdown">
                                        <button className="navbar-dropdown-submenu-item dropdown-item dropdown-toggle"  id="navSubmenuPagesAccountDropdown2" data-bs-toggle="dropdown" aria-expanded="false">
                                            Customization
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-end navbar-dropdown-menu navbar-dropdown-menu-borderless navbar-dropdown-sub-menu" aria-labelledby="navSubmenuPagesAccountDropdown2">
                                            <button className="dropdown-item" href="#">Invite people</button>
                                            <button className="dropdown-item" href="#">Analytics <i className="bi-box-arrow-in-up-right" /></button>
                                            <button className="dropdown-item" href="#">Customize Front <i className="bi-box-arrow-in-up-right" /></button>
                                        </div>
                                    </div>
                                    <button className="dropdown-item" href="#">Manage team</button>
                                    <div className="dropdown-divider" />
                                    <button className="dropdown-item" href="#">Sign out</button>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </header>

    )
}

export default Header