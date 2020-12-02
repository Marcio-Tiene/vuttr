import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { TextAreaContainer } from './styles';

interface Props {
  label?: string;
  name: string;
  hasError?: boolean;
}
type TextAreaProps = JSX.IntrinsicElements['textarea'] & Props;
const UnformTextArea: React.FC<TextAreaProps> = ({
  name,
  label,
  hasError,
  ...rest
}) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRef.current,
    });
  }, [fieldName, registerField]);
  return (
    <TextAreaContainer hasError={hasError}>
      {label && <label htmlFor={fieldName}>{label}</label>}
      <textarea
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />
      {error && <span>{error}</span>}
    </TextAreaContainer>
  );
};
export default UnformTextArea;
