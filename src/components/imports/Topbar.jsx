import React from 'react';
import { Link, Route} from 'react-router-dom';
import "./topbar.css";
// import {NotificationsSharpIcon} from '@mui/icons-material/NotificationsSharp';

export default function Topbar() {
  return (
    <div>
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="text-center">
            <span className="logo">Admin</span>
          </div>
          <div className="topRight">
            <div className="topbarIconContainer topbarIconDarkMode">
              {/* Dark Mode logo */}
              <i className="fas fa-moon"></i>
            </div>
            <div className="topbarIconContainer">
              {/* notification logo */}
              <i className="fas fa-bell"></i>
              <span className="topIconBadge">3</span>
            </div>
            <div className="topbarIconContainer">
              {/* language logo */}
              <i className="fas fa-globe"></i>
            </div>
            <Link to='/profile'>
            <img src="https://static-prod.adweek.com/wp-content/uploads/2023/01/WhatsApp-Avatar-Profile-Photo-Hero-652x367.png" alt="profile" className="topAvatar" />
            </Link>
            
          </div>
        </div>
      </div>

    </div>
  )
}
