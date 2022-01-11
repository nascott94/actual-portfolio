import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import SectionTitle from '../components/SectionTitle';
import ProjectInfo from '../assets/data/projects';
import ProjectItem from '../components/ProjectItem';

const ProjectStyle = styled.div`
  padding: 10rem 0;
`;

export default function Projects() {
  const [searchText, setSearchText] = useState('');
  const [projectsData, setProjectsData] = useState(ProjectInfo);
  useEffect(() => {
    if (searchText === '') return;
    setProjectsData(() =>
      ProjectInfo.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);

  return (
    <ProjectStyle>
      <h1>this is projects page</h1>
    </ProjectStyle>
  );
}
