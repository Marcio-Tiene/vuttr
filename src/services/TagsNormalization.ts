const TagsNormalization = (tagInput: string) => {
  const tagsWithoutEmptyStrings = tagInput
    .split(' ')
    .filter((tag) => tag !== '' && tag);

  const tagsToLowerCase = tagsWithoutEmptyStrings.map((tag) =>
    tag.toLowerCase()
  );

  const formatedTags = tagsToLowerCase.filter(
    (elem, index, self) => index === self.indexOf(elem)
  );

  return formatedTags;
};

export default TagsNormalization;
