import { IHasFormError, ITools } from '../interfaces/ITools';

export const toolsErrorReference: ITools = {
  id: -1,
  title: 'Connection to database failed',
  description: '',
  link: '',
  tags: [''],
};

export const loadingToolsReference: ITools = {
  title: 'loading',
  tags: [''],
  description: '',
  link: '',
  id: -1,
};
export const hasFormErrorInitialValue: IHasFormError = {
  hasTitleError: false,
  haslinkError: false,
  hasDescriptionError: false,
  hasTagsError: false,
};
