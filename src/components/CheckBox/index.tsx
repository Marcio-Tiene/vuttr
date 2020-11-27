import React from 'react';
import { CheckboxLabel } from './styles';

interface ICheckBox {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
}

const CheckBox: React.FC<ICheckBox> = ({ onChange, children, checked }) => {
  return (
    <CheckboxLabel>
      {children}
      <input type='checkbox' checked={checked} onChange={onChange} />
      <span className='checkmark'></span>
    </CheckboxLabel>
  );
};

export default CheckBox;
