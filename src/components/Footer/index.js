import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Sobre Nostoros </FooterLinkTitle>
              <FooterLink to="/signin">Como funciona G&A</FooterLink>
              <FooterLink to="/signin">Testimonios</FooterLink>
              <FooterLink to="/signin">Carreras</FooterLink>
              <FooterLink to="/signin">Inversiones</FooterLink>
              <FooterLink to="/signin">Terminos de servicio</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contactate con nostros</FooterLinkTitle>
              <FooterLink to="/">Soporte</FooterLink>
              <FooterLink to="/">Destinos</FooterLink>
              <FooterLink to="/">Contacto</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Enlaces </FooterLinkTitle>
              <FooterLink to="https://www.instagram.com/gilyasociados/">Instagram</FooterLink>
              <FooterLink to="https://web.facebook.com/visionfinancieraRD">Facebook</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">Gil&Asociados</SocialLogo>
            <WebsiteRights>
              Gil&AsociadosSSRL © {new Date().getFullYear()} Todos los derechos reservados
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="https://web.facebook.com/visionfinancieraRD" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="https://www.instagram.com/gilyasociados/" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
