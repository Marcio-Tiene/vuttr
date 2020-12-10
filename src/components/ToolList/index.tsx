import React, { useEffect, useState } from 'react';
import ToolsRepository from '../../services/ToolsRepository';
import ToolListGlobalState from '../../hooks/ToolLlistGlobalState';
import ToolCard from '../ToolCard';
import { ToolListContainer } from './styles';
import { IToolSLocalStorage } from '../../interfaces/ITools';

import DeleteToolModal from '../DeleteToolModal';
import { LocalStorageTools } from '../../config/References';
import NotificationBanner from '../NotificationBanner';
import { HiCheckCircle } from 'react-icons/hi';

const ToolList: React.FC = () => {
  const { LoadAllTools, DeleteTool } = new ToolsRepository();

  const [toolToRemove, setToolToRemove] = useState(LocalStorageTools);
  const [isOpen, setIsOpen] = useState(false);
  const [isRemovedSucess, setIsRemovedSucess] = useState(false);

  const { toolList, setToolList } = ToolListGlobalState();

  const removeTool = (tool: IToolSLocalStorage) => {
    DeleteTool(tool.id);
    setToolList(LoadAllTools());
    setIsOpen(false);
    successHandleer();
  };
  function successHandleer() {
    setIsRemovedSucess(true);
    setTimeout(() => setIsRemovedSucess(false), 5000);
  }

  useEffect(() => {
    const response = LoadAllTools();
    setToolList(response);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
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
      <NotificationBanner
        closeOnClick={() => setIsRemovedSucess(false)}
        isOpen={isRemovedSucess}
        icon={<HiCheckCircle color={'white'} size={25} />}
      >
        The <b>{toolToRemove.title}</b> tool was successfully removed
      </NotificationBanner>
    </>
  );
};

export default ToolList;
