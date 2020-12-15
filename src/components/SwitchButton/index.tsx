import React from 'react';
import { SwitchContainer } from './styles';

interface ISwitchButton {
  onClick: () => void;
}

const SwitchButton: React.FC<ISwitchButton> = ({ onClick }) => {
  return (
    <SwitchContainer>
      <label className='switch'>
        <input type='checkbox' onClick={onClick} />
        <span className='slider round'></span>
      </label>
    </SwitchContainer>
  );
};

export default SwitchButton;
