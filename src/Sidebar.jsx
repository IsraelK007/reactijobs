import React from 'react'


export default function Sidebar() {
    return (
        <div className="d-flex flex-column flex-shrink-0 bg-light" style="width: 4.5rem;">
            <a href="/" className="d-block p-3 link-dark text-decoration-none" title="Icon-only" data-bs-toggle="tooltip" data-bs-placement="right">
                <svg className="bi" width="40" height="32"></svg>
                <span className="visually-hidden">Icon-only</span>
            </a>
            <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
                <li className="nav-item">
                    <a href="#" className="nav-link active py-3 border-bottom" aria-current="page" title="Home" data-bs-toggle="tooltip" data-bs-placement="right">
                        <svg className="bi" width="24" height="24" role="img" aria-label="Home"></svg>
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link py-3 border-bottom" title="Dashboard" data-bs-toggle="tooltip" data-bs-placement="right">
                        <svg className="bi" width="24" height="24" role="img" aria-label="Dashboard"></svg>
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link py-3 border-bottom" title="Orders" data-bs-toggle="tooltip" data-bs-placement="right">
                        <svg className="bi" width="24" height="24" role="img" aria-label="Orders"></svg>
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link py-3 border-bottom" title="Products" data-bs-toggle="tooltip" data-bs-placement="right">
                        <svg className="bi" width="24" height="24" role="img" aria-label="Products"></svg>
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link py-3 border-bottom" title="Customers" data-bs-toggle="tooltip" data-bs-placement="right">
                        <svg className="bi" width="24" height="24" role="img" aria-label="Customers"></svg>
                    </a>
                </li>
            </ul>
            <div className="dropdown border-top">
                <a href="#" className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser3"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="mdo" width="24" height="24" className="rounded-circle" />
                </a>
                <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
                    <li><a className="dropdown-item" href="#">New project...</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div>
        </div>

    )
}


