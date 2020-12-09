import React, { useRef } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import { ErrorMsg, Form, SubmitButton } from './styles';
import Input from '../UnformInput';
import TextArea from '../UnformTextArea';
import ToolsRepository from '../../services/ToolsRepository';
import ToolListGlobalState from '../../hooks/ToolLlistGlobalState';
import InputErrorHandler from '../../services/InputErrorHandler';
import validationFormSchema from '../../services/validationFormSchema';

interface FormData {
  title: string;
  link: string;
  description: string;
  tags: string;
}

interface MyProps {
  onSubmited: () => void;
  onSuccess: (props: string) => void;
}

const AddToolForm: React.FC<MyProps> = ({ onSubmited, onSuccess }) => {
  const { LoadAllTools, PostTool } = new ToolsRepository();
  const { setToolList, hasFormError, setHasFormError } = ToolListGlobalState();

  const formRef = useRef<FormHandles>(null);
  const handleSubmit: SubmitHandler<FormData> = async (data, { reset }) => {
    try {
      await validationFormSchema.validate(data, { abortEarly: false });
      const tagsWithoutEmptyStrings = data.tags
        .split(' ')
        .filter((tag) => tag !== '' && tag);

      const formatedData = { ...data, tags: tagsWithoutEmptyStrings };

      await PostTool(formatedData);
      setToolList(await LoadAllTools());

      reset();
      onSubmited();
      onSuccess(formatedData.title);
    } catch (err) {
      InputErrorHandler(err.errors, setHasFormError);
      console.log(err);
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
