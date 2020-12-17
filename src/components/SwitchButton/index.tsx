import React, { useState } from 'react';
import { SwitchContainer } from './styles';

interface ISwitchButton {
  onClick: () => void;
}

const SwitchButton: React.FC<ISwitchButton> = ({ onClick }) => {
  const initialCheck =
    (JSON.parse(localStorage.getItem('theme') as string) as boolean) || false;

  const [isChecked, setIsChecked] = useState(initialCheck);
  return (
    <SwitchContainer>
      <label className='switch'>
        <input
          type='checkbox'
          checked={isChecked}
          onClick={() => {
            onClick();
            setIsChecked((previState) => !previState);
          }}
        />
        <span className='slider round'></span>
      </label>
    </SwitchContainer>
  );
};

export default SwitchButton;
