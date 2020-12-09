import * as Yup from 'yup';

const validationFormSchema = Yup.object().shape({
  title: Yup.string().required().max(100),
  link: Yup.string().required().max(300),
  description: Yup.string().required().max(300),
  tags: Yup.string().required().max(100),
});

export default validationFormSchema;
