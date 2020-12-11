import {
  IHasFormError,
  ITools,
  IToolSLocalStorage,
} from '../interfaces/ITools';
import { v4 as uuidv4 } from 'uuid';

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
  id: uuidv4(),
  title: 'VUTTR',
  description:
    'Very Useful Tools To Rememember: A tool to help you remember other useful tools',
  link: 'https://vuttr-pi.vercel.app/',
  tags: ['tools', 'remember', 'useful'],
};
