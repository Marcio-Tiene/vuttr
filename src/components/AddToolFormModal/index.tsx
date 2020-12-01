import React from 'react';
import { AddFormArticle, AddFormHeader, ModalBackground } from './styles';

import { HiOutlinePlus } from 'react-icons/hi';
import { CgClose } from 'react-icons/cg';

interface IAddToolFormModal {
  open?: boolean;
  onClick?: () => void;
}

const AddToolFormModal: React.FC<IAddToolFormModal> = ({ open, onClick }) => {
  return (
    <ModalBackground open={open} show={open}>
      <AddFormArticle>
        <AddFormHeader>
          <h2>
            <span>
              <HiOutlinePlus size={25} />
            </span>
            Add new Tool
          </h2>
          <CgClose size={25} onClick={onClick} style={{ cursor: 'pointer' }} />
        </AddFormHeader>
      </AddFormArticle>
    </ModalBackground>
  );
};

export default AddToolFormModal;
