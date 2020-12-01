import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { InputContainer } from './styles';

interface Props {
  label?: string;
  name: string;
  hasError?: boolean;
}
type InputProps = JSX.IntrinsicElements['input'] & Props;
const UnformInput: React.FC<InputProps> = ({
  name,
  label,
  hasError,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRef.current,
    });
  }, [fieldName, registerField]);
  return (
    <InputContainer hasError={hasError}>
      {label && <label htmlFor={fieldName}>{label}</label>}
      <input
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />
      {error && <span>{error}</span>}
    </InputContainer>
  );
};
export default UnformInput;
