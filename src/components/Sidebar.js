import React from 'react';
import { SidebarContainer, SidebarItem } from './styles';
import { FaTachometerAlt, FaProjectDiagram, FaCog, FaChartLine, FaBell, FaUsers, FaQuestionCircle, FaUser, FaEnvelope, FaCalendarAlt, FaChartBar } from 'react-icons/fa'; // Replaced FaAnalytics with FaChartBar

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <SidebarContainer isSidebarOpen={isSidebarOpen}>
      <SidebarItem>
        <FaTachometerAlt style={{ marginRight: '10px' }} /> {isSidebarOpen && 'Dashboard'}
      </SidebarItem>
      <SidebarItem>
        <FaProjectDiagram style={{ marginRight: '10px' }} /> {isSidebarOpen && 'Projects'}
      </SidebarItem>
      <SidebarItem>
        <FaUser style={{ marginRight: '10px' }} /> {isSidebarOpen && 'Profile'}
      </SidebarItem>
      <SidebarItem>
        <FaEnvelope style={{ marginRight: '10px' }} /> {isSidebarOpen && 'Messages'}
      </SidebarItem>
      <SidebarItem>
        <FaCalendarAlt style={{ marginRight: '10px' }} /> {isSidebarOpen && 'Calendar'}
      </SidebarItem>
      <SidebarItem>
        <FaChartLine style={{ marginRight: '10px' }} /> {isSidebarOpen && 'Reports'}
      </SidebarItem>
      <SidebarItem>
        <FaBell style={{ marginRight: '10px' }} /> {isSidebarOpen && 'Notifications'}
      </SidebarItem>
      <SidebarItem>
        <FaUsers style={{ marginRight: '10px' }} /> {isSidebarOpen && 'Team'}
      </SidebarItem>
      <SidebarItem>
        <FaChartBar style={{ marginRight: '10px' }} /> {isSidebarOpen && 'Analytics'}
      </SidebarItem>
      <SidebarItem>
        <FaCog style={{ marginRight: '10px' }} /> {isSidebarOpen && 'Settings'}
      </SidebarItem>
      <SidebarItem>
        <FaQuestionCircle style={{ marginRight: '10px' }} /> {isSidebarOpen && 'Help'}
      </SidebarItem>
    </SidebarContainer>
  );
};

export default Sidebar;
