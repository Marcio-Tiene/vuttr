export interface ITools {
  id: number;
  title: string;
  link: string;
  description: string;
  tags: string[];
}

export interface IHasFormError {
  hasTitleError: boolean;
  haslinkError: boolean;
  hasDescriptionError: boolean;
  hasTagsError: boolean;
}
