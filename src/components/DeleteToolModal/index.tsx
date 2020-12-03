import React from 'react';
import { CgClose } from 'react-icons/cg';
import { ModalBackground } from '../AddToolFormModal/styles';
import {
  ButtonContainer,
  DeleteTollHeader,
  DeleteToolArticle,
  DeleteToolButton,
} from './styles';

interface IRemoveTool {
  onConfirm?: () => void;
  onCancel?: () => void;
  isOpen: boolean;
  toolName: string;
}

const DeleteToolModal: React.FC<IRemoveTool> = ({
  onCancel,
  onConfirm,
  isOpen,
  toolName,
}) => {
  return (
    <ModalBackground open={isOpen} show={isOpen}>
      <DeleteToolArticle>
        <DeleteTollHeader>
          <CgClose size={25} />
          <h3>Remove Tool</h3>
        </DeleteTollHeader>
        <p>
          Are you sure you want to remove <b>{toolName}</b> ?
        </p>
        <ButtonContainer>
          <DeleteToolButton onClick={onCancel}>cancel</DeleteToolButton>
          <DeleteToolButton className='danger' onClick={onConfirm}>
            yes, remove
          </DeleteToolButton>
        </ButtonContainer>
      </DeleteToolArticle>
    </ModalBackground>
  );
};

export default DeleteToolModal;
