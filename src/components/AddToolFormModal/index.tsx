import React, { useState } from 'react';
import { AddFormArticle, AddFormHeader, ModalBackground } from './styles';
import { HiCheckCircle } from 'react-icons/hi';

import { HiOutlinePlus } from 'react-icons/hi';
import { CgClose } from 'react-icons/cg';
import AddToolForm from '../AddToolForm';
import NotificationBanner from '../NotificationBanner';

interface IAddToolFormModal {
  open?: boolean;
  onClick: () => void;
}

const AddToolFormModal: React.FC<IAddToolFormModal> = ({ open, onClick }) => {
  const [isAddSucces, setIsAddSucces] = useState(false);
  const [toolSuccessAdded, setToolSuccessAdded] = useState('');

  function successHandleer(toolName: string) {
    setToolSuccessAdded(toolName);
    setIsAddSucces(true);
    setTimeout(() => setIsAddSucces(false), 5000);
  }

  return (
    <>
      <ModalBackground open={open} show={open}>
        <AddFormArticle className='animate'>
          <AddFormHeader>
            <h2>
              <span>
                <HiOutlinePlus size={25} />
              </span>
              Add new Tool
            </h2>
            <CgClose
              size={25}
              onClick={onClick}
              style={{ cursor: 'pointer' }}
            />
          </AddFormHeader>
          <AddToolForm onSubmited={onClick} onSuccess={successHandleer} />
        </AddFormArticle>
      </ModalBackground>
      <NotificationBanner
        closeOnClick={() => setIsAddSucces(false)}
        isOpen={isAddSucces}
        icon={<HiCheckCircle color='white' size={25} />}
      >
        The <b>{toolSuccessAdded}</b> tool was successfully added
      </NotificationBanner>
    </>
  );
};

export default AddToolFormModal;
