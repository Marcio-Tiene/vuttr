import React, { useRef } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import { Form, SubmitButton } from './styles';
import Input from '../UnformInput';
import TextArea from '../UnformTextArea';

interface FormData {
  title: string;
  link: string;
  description: string;
  tags: string;
}

interface MyProps {
  onSubmited: () => void;
}
const AddToolForm: React.FC<MyProps> = ({ onSubmited }) => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit: SubmitHandler<FormData> = (data, { reset }) => {
    const Tags = data.tags.split(' ').filter((tag) => tag !== '' && tag);

    const dataFormated = { ...data, tags: Tags };
    console.log(dataFormated);
    reset();
    onSubmited();
  };
  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Input name='title' label='Tool Name' />
      <Input name='link' label='Tool Link' />
      <TextArea name='description' label='Tool Description' />
      <Input name='tags' label='Tags' />
      <SubmitButton>Add Tool</SubmitButton>
    </Form>
  );
};
export default AddToolForm;
