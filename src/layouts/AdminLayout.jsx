import { Outlet, NavLink } from "react-router-dom";

export default function AdminLayout() {


    return (
        <div className="wrapper d-flex gap-2 p-3">
            <div className="sidebar">
                <ul className="list-unstyled">
                    <li>
                        <NavLink to="/admin">Dashboard</NavLink>

                    </li>
                    <li>
                        <NavLink to="/posts">Blog</NavLink>

                    </li>
                    
                </ul>

            </div>
            <main>
                <Outlet />
            </main>
        </div>
    )
}
