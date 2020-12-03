import React, { useEffect, useState } from 'react';
import ToolsRepository from '../../services/ToolsRepository';
import ToolListGlobalState from '../../hooks/ToolLlistGlobalState';
import ToolCard from '../ToolCard';
import { ToolListContainer } from './styles';
import { ITools } from '../../interfaces/ITools';
import api from '../../services/api';
import DeleteToolModal from '../DeleteToolModal';
import { loadingToolsReference } from '../../config/References';

const ToolList: React.FC = () => {
  const { LoadAllTools } = new ToolsRepository();

  const [toolToRemove, setToolToRemove] = useState(loadingToolsReference);
  const [isOpen, setIsOpen] = useState(false);

  const { toolList, setToolList } = ToolListGlobalState();

  const removeTool = async (tool: ITools) => {
    await api.delete(`/tools/${tool.id}`);
    setToolList(await LoadAllTools());
    setIsOpen(false);
  };

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
          removeButtonOnClick={() => {
            setToolToRemove(tool);
            setIsOpen(true);
          }}
          key={`${tool.id}${tool.title}`}
          id={tool.id}
          description={tool.description}
          tags={tool.tags}
          link={tool.link}
          title={tool.title}
        />
      ))}
      <DeleteToolModal
        toolName={toolToRemove.title}
        isOpen={isOpen}
        onConfirm={() => removeTool(toolToRemove)}
        onCancel={() => setIsOpen(false)}
      />
    </ToolListContainer>
  );
};

export default ToolList;
