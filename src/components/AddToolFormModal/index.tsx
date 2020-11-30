import React from 'react';
import { ModalBackground } from './styles';

interface IAddToolFormModal {
  open?: boolean;
}

const AddToolFormModal: React.FC<IAddToolFormModal> = ({ open, children }) => {
  return <ModalBackground show={!open}>{children}</ModalBackground>;
};

export default AddToolFormModal;
