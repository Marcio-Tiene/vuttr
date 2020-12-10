import React from 'react';

import { CgClose } from 'react-icons/cg';
import { CloseSpan, NotificatioBox } from './styles';

interface INotification {
  icon?: React.ReactNode;
  isOpen?: boolean;
  closeOnClick?: () => void;
}

const NotificationBanner: React.FC<INotification> = ({
  children,
  icon,
  isOpen,
  closeOnClick,
}) => {
  return (
    <NotificatioBox isOpen={isOpen}>
      {icon}
      <p>{children}</p>
      <CloseSpan onClick={closeOnClick}>
        <CgClose color='white' size={12} />
      </CloseSpan>
    </NotificatioBox>
  );
};

export default NotificationBanner;
