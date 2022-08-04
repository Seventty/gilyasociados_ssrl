import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            Conócenos
          </SidebarLink>
          <SidebarLink to="discover" onClick={toggle}>
            Beneficios
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            Servicios
          </SidebarLink>
          <SidebarLink to="advisors" onClick={toggle}>
            Asesores
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>
            Contacto
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
