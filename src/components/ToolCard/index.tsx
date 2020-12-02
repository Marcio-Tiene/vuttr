import React from 'react';
import { ITools } from '../../interfaces/ITools';
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

interface IToolCard extends ITools {
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
          <ToolTag key={index}>#{tag}</ToolTag>
        ))}
      </TagsContainer>
    </ToolArticle>
  );
};

export default ToolCard;
