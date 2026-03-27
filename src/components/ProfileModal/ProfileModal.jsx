import React, { useState } from 'react';
import { X, Save, User, Mail, Briefcase, Phone } from 'lucide-react';
import styles from './ProfileModal.module.css';

const ProfileModal = ({ onClose, role }) => {
  const [isEditing, setIsEditing] = useState(false);
  
  // Dummy data
  const [profileData, setProfileData] = useState({
    name: 'Admin User',
    email: 'admin@wpoms.example.com',
    role: role || 'Administrator',
    phone: '+1 (555) 123-4567',
    department: 'Executive'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    // Integrate API call to update profile here
    setIsEditing(false);
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>User Profile</h2>
          <button className={styles.closeBtn} onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className={styles.modalBody}>
          <div className={styles.profileHeader}>
            <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className={styles.largeProfileImg} />
            <div className={styles.profileHeaderInfo}>
              <h3 className={styles.profileNameDisplay}>{profileData.name}</h3>
              <p className={styles.profileRoleDisplay}>{profileData.role}</p>
              {!isEditing && (
                <button className={styles.editBtn} onClick={toggleEdit}>
                  Edit Profile
                </button>
              )}
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>
              <User size={16} className={styles.labelIcon} /> Full Name
            </label>
            <input 
              type="text" 
              name="name" 
              value={profileData.name} 
              onChange={handleInputChange}
              disabled={!isEditing}
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>
              <Mail size={16} className={styles.labelIcon} /> Email Address
            </label>
            <input 
              type="email" 
              name="email" 
              value={profileData.email} 
              onChange={handleInputChange}
              disabled={!isEditing}
              className={styles.input}
            />
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label}>
                <Briefcase size={16} className={styles.labelIcon} /> Department
              </label>
              <input 
                type="text" 
                name="department" 
                value={profileData.department} 
                onChange={handleInputChange}
                disabled={!isEditing}
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>
                <Phone size={16} className={styles.labelIcon} /> Phone Number
              </label>
              <input 
                type="text" 
                name="phone" 
                value={profileData.phone} 
                onChange={handleInputChange}
                disabled={!isEditing}
                className={styles.input}
              />
            </div>
          </div>
        </div>

        {isEditing && (
          <div className={styles.modalFooter}>
            <button className={styles.cancelBtn} onClick={toggleEdit}>Cancel</button>
            <button className={styles.saveBtn} onClick={handleSave}>
              <Save size={16} /> Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileModal;
