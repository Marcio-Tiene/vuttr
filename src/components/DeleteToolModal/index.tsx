import React, { useContext } from 'react';
import { CgClose } from 'react-icons/cg';
import { ModalBackground } from '../AddToolFormModal/styles';
import {
  ButtonContainer,
  DeleteTollHeader,
  DeleteToolArticle,
  DeleteToolButton,
} from './styles';
import { ThemeContext } from '../../context/ThemeContext';

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
  const { DarkMode } = useContext(ThemeContext);
  return (
    <ModalBackground open={isOpen} show={isOpen} DarkMode={DarkMode}>
      <DeleteToolArticle className='animate' DarkMode={DarkMode}>
        <DeleteTollHeader>
          <CgClose size={25} />
          <h3>Remove Tool</h3>
        </DeleteTollHeader>
        <p>
          Are you sure you want to remove <b>{toolName}</b> ?
        </p>
        <ButtonContainer>
          <DeleteToolButton className='secondary-neutral' onClick={onCancel}>
            Cancel
          </DeleteToolButton>
          <DeleteToolButton className='danger' onClick={onConfirm}>
            Yes, remove
          </DeleteToolButton>
        </ButtonContainer>
      </DeleteToolArticle>
    </ModalBackground>
  );
};

export default DeleteToolModal;
