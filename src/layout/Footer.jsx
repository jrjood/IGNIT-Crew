import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa'; // for social icons
import { FaPhone, FaLocationDot } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';
import Logo from '../components/Logo';

const FooterSection = styled.footer`
  background: black;
  color: white;
  padding: 6rem 2rem 3rem;
  .logo {
    display: flex;
    align-items: start;
    width: 300px;
  }
`;

const ContactTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  flex-wrap: wrap;
  transform: translateY(-10.5rem);
  /* margin-bottom: 4rem; */
`;

const ContactItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
`;

const YellowCircle = styled.a`
  width: 8rem;
  height: 8rem;
  background: #ffc107;
  border-radius: 50%;
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  font-size: 2.1rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    font-size: 2.6rem;
    transform: rotate(-20deg);
  }
`;

const Label = styled.h4`
  margin: 0.5rem 0;
`;

const Info = styled.a`
  color: #00aaff;
  font-size: 0.9rem;
  text-decoration: none;
  &:hover {
    color: #0075af;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 80px;
  background: white;
  opacity: 0.2;
  margin: 0 1rem;
  margin-bottom: -6rem;
`;

const BottomBar = styled.div`
  display: flex;
  align-items: center;
  padding: 0 8rem;
  justify-content: space-between;
  .social-container {
    display: flex;
    flex-direction: column;
    align-items: end;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  a {
    color: white;
  }
  .facebook:hover {
    color: #1877f2;
  }
  .linkedin:hover {
    color: #0077b5;
  }
  .instagram:hover {
    color: #ee2a7b;
  }
`;

const CopyText = styled.div`
  font-size: 0.8rem;
  font-weight: 700;
  color: #ccc;
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const MophxLink = styled.span`
  color: #ff0080;
  cursor: pointer;
`;

export default function Footer() {
  return (
    <FooterSection>
      <ContactTop>
        <ContactItem>
          <YellowCircle href='#'>
            <IoMdMail />
          </YellowCircle>
          <Label>EMAIL US</Label>
          <Info href='mailto:info@ignitrew.com'>info@ignitrew.com</Info>
        </ContactItem>

        <Divider />

        <ContactItem>
          <YellowCircle href='#'>
            <FaPhone />
          </YellowCircle>
          <Label>CALL US</Label>
          <Info href='tel:+20233035518'>+202 33035518</Info>
        </ContactItem>

        <Divider />

        <ContactItem>
          <YellowCircle href='#'>
            <FaLocationDot />
          </YellowCircle>
          <Label>VISIT US</Label>
          <Info href='#'>
            34 Al-Quds Al-Shareef Street, <br />
            Lebanon Square, Mohandeseen
          </Info>
        </ContactItem>
      </ContactTop>

      <BottomBar>
        <Logo />
        <div className='social-container'>
          <SocialIcons>
            <a className='facebook' href=''>
              <FaFacebookF />
            </a>
            <a className='linkedin' href=''>
              <FaLinkedinIn />
            </a>
            <a className='instagram' href=''>
              <FaInstagram />
            </a>
          </SocialIcons>

          <CopyText>
            <p>Ignitrew Crew 2023. All Rights Reserved.</p>
            <p>
              Developed & Designed By
              <MophxLink> JORDI TECH</MophxLink>
            </p>
          </CopyText>
        </div>
      </BottomBar>
    </FooterSection>
  );
}
