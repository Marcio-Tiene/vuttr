import { IHasFormError } from '../interfaces/ITools';

const InputErrorHandler = (
  errors: string[],
  setStateFunc: (value: React.SetStateAction<IHasFormError>) => void
) => {
  if (errors.includes('title is a required field')) {
    setStateFunc((prevState) => ({ ...prevState, hasTitleError: true }));
  }

  if (errors.includes('link is a required field')) {
    setStateFunc((prevState) => ({ ...prevState, haslinkError: true }));
  }

  if (errors.includes('description is a required field')) {
    setStateFunc((prevState) => ({
      ...prevState,
      hasDescriptionError: true,
    }));
  }

  if (errors.includes('tags is a required field')) {
    setStateFunc((prevState) => ({ ...prevState, hasTagsError: true }));
  }
};
export default InputErrorHandler;
