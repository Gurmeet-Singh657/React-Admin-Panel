import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from "react-router-dom"
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext)

    return (
        <div className='sidebar'>
            <div className="top">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">Admin Panel</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className="icon" />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <li>
                            <PersonOutlineOutlinedIcon className="icon" />
                            <span>Users</span>

                        </li>
                    </Link>
                    <Link to="/products" style={{ textDecoration: "none" }}>
                        <li>
                            <StoreIcon className="icon" />
                            <span>Products</span>
                        </li>
                    </Link>
                    <li>
                        <CreditCardIcon className="icon" />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon className="icon" />
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <AssessmentIcon className="icon" />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNoneIcon className="icon" />
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <MonitorHeartIcon className="icon" />
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyAltIcon className="icon" />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsApplicationsIcon className="icon" />
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AccountCircleIcon className="icon" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <ExitToAppIcon className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="coloroptions" onClick={() => dispatch({ type: "LIGHT" })}></div>
                <div className="coloroptions" onClick={() => dispatch({ type: "DARK" })}></div>
            </div>
        </div>
    )
}

export default Sidebar