import styled, { css } from 'styled-components';

interface INotificationBox {
  isOpen?: boolean;
}

export const NotificatioBox = styled.dialog`
  width: 95%;
  max-width: 600px;

  position: absolute;
  border: none;
  top: 20px;
  left: 50%;
  transform: translateX(-50%) translateY(-150px);
  background: #12db89 0% 0% no-repeat padding-box;
  box-shadow: 0px 20px 25px #0000001a;
  border-radius: 5px;

  display: flex;
  gap: 2ch;
  align-items: center;
  padding: 2ch;

  p {
    flex: 1;
  }
  transition: transform 0.7s;

  ${(p: INotificationBox) =>
    p.isOpen &&
    css`
      transform: translateX(-50%) translateY(0px);
    `}
`;

export const CloseSpan = styled.span`
  display: flex;
  align-items: center;
  justify-self: flex-end;
`;
