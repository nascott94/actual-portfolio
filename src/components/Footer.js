import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import FooterCol from './FooterCol';

const FooterStyle = styled.div`
  background-color: #d9eaf4;
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer-col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <div className="footer__col1__title">Natalie Scott</div>
          <PText>Web Development</PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '386-506-1792',
                path: 'tel:+386-506-1792',
              },
              {
                title: 'nascott94@outlook.com',
                path: 'mailto:nascott94@outlook.com',
              },
              {
                title: 'Denver, CO',
                path: '',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'LinkedIn',
                path: 'www.linkedin.com/in/natalie-scott94',
              },
              {
                title: 'GitHub',
                path: 'https://github.com/nascott94',
              },
            ]}
          />
        </div>
      </div>
    </FooterStyle>
  );
}
