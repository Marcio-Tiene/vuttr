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

const ToolCard: React.FC<ITools> = ({ title, link, description, tags, id }) => {
  return (
    <ToolArticle key={id}>
      <ToolHeader>
        <ToolTitle href={link} target='_blank'>
          <h2>{title}</h2>
        </ToolTitle>
        <RemoveButton>
          <CgClose />
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
