import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  ShieldCheck,
  LayoutDashboard,
  Award,
  ShoppingCart,
  Archive,
  Settings,
  Plus,
  Search,
  Bell,
  HelpCircle
} from 'lucide-react';
import styles from './DashboardLayout.module.css';
import ProfileModal from '../ProfileModal/ProfileModal';

const DashboardLayout = ({ children, title = 'Dashboard', role = 'Administrator' }) => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const toggleProfileModal = () => setIsProfileModalOpen(!isProfileModalOpen);

  return (
    <div className={styles.layout}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <div className={styles.logo}>
            <ShieldCheck size={36} color="#e5c363" />
            <span>WPOMS</span>
          </div>
          <p className={styles.subtitle}>Enterprise Management</p>
        </div>
        
        <nav className={styles.nav}>
          {/* We use a simple hash link for dummy links to avoid router errors */}
          <NavLink to={`/dashboard/${role.toLowerCase().replace(' ', '-')}`} className={({isActive}) => isActive ? styles.navLinkActive : styles.navLink}>
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </NavLink>
          <a href="#" className={styles.navLink}>
            <Award size={20} />
            <span>Warranties</span>
          </a>
          <a href="#" className={styles.navLink}>
            <ShoppingCart size={20} />
            <span>Purchase Orders</span>
          </a>
          <a href="#" className={styles.navLink}>
            <Archive size={20} />
            <span>Archive</span>
          </a>
          <a href="#" className={styles.navLink}>
            <Settings size={20} />
            <span>Settings</span>
          </a>
        </nav>

        <div className={styles.sidebarFooter}>
          <button className={styles.newEntryBtn}>
            <Plus size={20} />
            New Entry
          </button>
          
          {/* Bottom Left Profile */}
          <div className={styles.profileSection} onClick={toggleProfileModal} role="button" tabIndex={0}>
            <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className={styles.profileImg} />
            <div className={styles.profileInfo}>
              <p className={styles.profileName}>Admin User</p>
              <p className={styles.profileRole}>{role}</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className={styles.mainContent}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <h1 className={styles.pageTitle}>{title}</h1>
          </div>
          
          <div className={styles.headerRight}>
            <div className={styles.searchBar}>
              <Search size={18} className={styles.searchIcon} />
              <input type="text" placeholder="SEARCH RECORDS..." className={styles.searchInput} />
            </div>
            
            <div className={styles.actions}>
              <button className={styles.iconBtn}><Bell size={20} /></button>
              <button className={styles.iconBtn}><HelpCircle size={20} /></button>
              <div className={styles.divider}></div>
              
              {/* Top Right Profile */}
              <div className={styles.topProfile} onClick={toggleProfileModal} role="button" tabIndex={0}>
                 <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className={styles.topProfileImg} />
              </div>
              
              <button className={styles.createBtn}>Create New</button>
            </div>
          </div>
        </header>

        {/* Dynamic Content */}
        <div className={styles.contentArea}>
          {children}
        </div>
      </main>

      {/* Profile Modal */}
      {isProfileModalOpen && <ProfileModal onClose={toggleProfileModal} role={role} />}
    </div>
  );
};

export default DashboardLayout;
