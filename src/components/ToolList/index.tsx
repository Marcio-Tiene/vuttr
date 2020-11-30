import React from 'react';
import ToolListGlobalState from '../../hooks/ToolLlistGlobalState';
import ToolCard from '../ToolCard';
import { ToolListContainer } from './styles';

const ToolList: React.FC = () => {
  const { toolList } = ToolListGlobalState();
  return (
    <ToolListContainer>
      {toolList.map((tool) => (
        <ToolCard
          key={`${tool.id}${tool.title}`}
          id={tool.id}
          description={tool.description}
          tags={tool.tags}
          link={tool.link}
          title={tool.title}
        />
      ))}
    </ToolListContainer>
  );
};

export default ToolList;
