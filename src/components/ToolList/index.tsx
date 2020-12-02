import React, { useEffect } from 'react';
import ToolsRepository from '../../services/ToolsRepository';
import ToolListGlobalState from '../../hooks/ToolLlistGlobalState';
import ToolCard from '../ToolCard';
import { ToolListContainer } from './styles';
import { ITools } from '../../interfaces/ITools';

const ToolList: React.FC = () => {
  const { LoadAllTools } = new ToolsRepository();

  const { toolList, setToolList } = ToolListGlobalState();

  useEffect(() => {
    (async () => {
      const response = (await LoadAllTools()) as ITools[];
      setToolList(response);
    })();
  }, [LoadAllTools, setToolList]);

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
