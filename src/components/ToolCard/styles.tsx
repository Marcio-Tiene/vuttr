import styled from 'styled-components';

export const ToolArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 5px 7px #0000000d;
  border: 1px solid #ebeaed;
  border-radius: 5px;
  transition: linear 0.2s;

  :hover {
    box-shadow: 0px 20px 25px #0000001a;
  }
`;
export const ToolHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2ch;
`;

export const ToolTitle = styled.a`
  text-decoration: underline solid var(--Ink);
`;
export const RemoveButton = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  h4 {
    padding-left: 0.2ch;
  }
`;
export const ToolDescription = styled.p`
  padding: 2ch 2ch;
`;
export const TagsContainer = styled.div`
  padding: 0 2ch;
  display: flex;
  flex-direction: row;
`;
export const ToolTag = styled.h4`
  padding-right: 1ch;
`;
