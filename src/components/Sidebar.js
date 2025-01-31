import React from 'react';
import { SidebarContainer, SidebarItem } from './styles';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarItem>Dashboard</SidebarItem>
      <SidebarItem>Projects</SidebarItem>
      <SidebarItem>Settings</SidebarItem>
    </SidebarContainer>
  );
};

export default Sidebar;