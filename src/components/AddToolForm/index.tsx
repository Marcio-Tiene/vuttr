import React, { useRef } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import { ErrorMsg, Form, SubmitButton } from './styles';
import Input from '../UnformInput';
import TextArea from '../UnformTextArea';
import * as Yup from 'yup';
import ToolsRepository from '../../services/ToolsRepository';
import ToolListGlobalState from '../../hooks/ToolLlistGlobalState';

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
  const { LoadAllTools, PostTool } = new ToolsRepository();
  const { setToolList, hasFormError, setHasFormError } = ToolListGlobalState();

  const formRef = useRef<FormHandles>(null);
  const handleSubmit: SubmitHandler<FormData> = async (data, { reset }) => {
    try {
      await schema.validate(data, { abortEarly: false });
      const tagsWithoutEmptyStrings = data.tags
        .split(' ')
        .filter((tag) => tag !== '' && tag);

      const formatedData = { ...data, tags: tagsWithoutEmptyStrings };

      await PostTool(formatedData);
      setToolList(await LoadAllTools());

      reset();
      onSubmited();
    } catch (err) {
      inputErrorHandler(err.errors);
    }
  };

  const inputErrorHandler = (errors: string[]) => {
    if (errors.includes('title is a required field')) {
      setHasFormError((prevState) => ({ ...prevState, hasTitleError: true }));
    }

    if (errors.includes('link is a required field')) {
      setHasFormError((prevState) => ({ ...prevState, haslinkError: true }));
    }

    if (errors.includes('description is a required field')) {
      setHasFormError((prevState) => ({
        ...prevState,
        hasDescriptionError: true,
      }));
    }

    if (errors.includes('tags is a required field')) {
      setHasFormError((prevState) => ({ ...prevState, hasTagsError: true }));
    }
  };
  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Input
        name='title'
        label='Tool Name'
        onClick={() =>
          setHasFormError({ ...hasFormError, hasTitleError: false })
        }
        hasError={hasFormError.hasTitleError}
      />
      <ErrorMsg hasError={hasFormError.hasTitleError}>
        the tool needs a title
      </ErrorMsg>

      <Input
        name='link'
        label='Tool Link'
        onClick={() =>
          setHasFormError({ ...hasFormError, haslinkError: false })
        }
        hasError={hasFormError.haslinkError}
      />
      <ErrorMsg hasError={hasFormError.haslinkError}>
        the tool needs a link
      </ErrorMsg>

      <TextArea
        name='description'
        label='Tool Description'
        onClick={() =>
          setHasFormError({ ...hasFormError, hasDescriptionError: false })
        }
        hasError={hasFormError.hasDescriptionError}
      />
      <ErrorMsg hasError={hasFormError.hasDescriptionError}>
        the tool needs a description
      </ErrorMsg>

      <Input
        name='tags'
        label='Tags'
        onClick={() =>
          setHasFormError({ ...hasFormError, hasTagsError: false })
        }
        hasError={hasFormError.hasTagsError}
      />
      <ErrorMsg hasError={hasFormError.hasTagsError}>
        the tool needs at least one tag
      </ErrorMsg>

      <SubmitButton>Add Tool</SubmitButton>
    </Form>
  );
};
export default AddToolForm;

const schema = Yup.object().shape({
  title: Yup.string().required().max(100),
  link: Yup.string().required().max(300),
  description: Yup.string().required().max(300),
  tags: Yup.string().required().max(100),
});
