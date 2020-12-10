import {
  IHasFormError,
  ITools,
  IToolSLocalStorage,
} from '../interfaces/ITools';

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

export const LocalStorageTools: IToolSLocalStorage = {
  id: '32321321321321321321321',
  title: 'VUTTR',
  description:
    'Very Useful Tools To Rememember: A tool to help you remember other useful tools',
  link: 'to be done',
  tags: ['tools', 'remember', 'useful'],
};
