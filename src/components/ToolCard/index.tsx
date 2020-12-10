import React from 'react';
import { IToolSLocalStorage } from '../../interfaces/ITools';
import { CgClose } from 'react-icons/cg';
import {
  RemoveButton,
  TagsContainer,
  ToolArticle,
  ToolDescription,
  ToolHeader,
  ToolTag,
  ToolTitle,
} from './styles';
import ToolListGlobalState from '../../hooks/ToolLlistGlobalState';

interface IToolCard extends IToolSLocalStorage {
  removeButtonOnClick?: () => void;
}

const ToolCard: React.FC<IToolCard> = ({
  title,
  link,
  description,
  tags,
  id,
  removeButtonOnClick,
}) => {
  const { setSearchText, setIsChecked } = ToolListGlobalState();

  const tagOnClick = (tagName: string) => {
    setIsChecked(true);
    setSearchText(tagName);
  };

  return (
    <ToolArticle key={id}>
      <ToolHeader>
        <ToolTitle href={link} target='_blank'>
          <h2>{title}</h2>
        </ToolTitle>
        <RemoveButton onClick={removeButtonOnClick}>
          <CgClose color='var(--Ink)' />
          <h4>remove</h4>
        </RemoveButton>
      </ToolHeader>
      <ToolDescription>{description}</ToolDescription>
      <TagsContainer>
        {tags.map((tag, index) => (
          <ToolTag onClick={() => tagOnClick(tag)} key={index}>
            #{tag}
          </ToolTag>
        ))}
      </TagsContainer>
    </ToolArticle>
  );
};

export default ToolCard;
