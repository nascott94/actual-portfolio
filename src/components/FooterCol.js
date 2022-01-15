import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ColStyle = styled.div`
  .heading {
    font-size: 2.4rem;
    margin-bottom: 1rem;
  }
  li {
    margin-bottom: 0.5rem;
  }
  a {
    font-size: 1.5rem;
  }
`;

export default function FooterCol({
  links = [
    { type: 'Link', title: 'Home', path: '/Home' },
    { type: 'Link', title: 'About', path: '/about' },
  ],
}) {
  return (
    <ColStyle>
      <ul>
        {links.map((item, index) => (
          <li key={index}>
            {item.type === 'Link' ? (
              <Link to={item.path}>{item.title}</Link>
            ) : (
              <a href={item.path} target="_blank" rel="noreferrer">
                {item.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    </ColStyle>
  );
}
