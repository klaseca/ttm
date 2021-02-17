import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
} from '@chakra-ui/react';
import { Field } from 'formik';

const FormikInput = ({ name, label, isTextarea, ...props }) => {
  return (
    <Field name={name}>
      {({ field, form }) => (
        <FormControl pt='3' isInvalid={form.errors[name] && form.touched[name]}>
          <FormLabel>{label}</FormLabel>
          {!isTextarea ? (
            <Input {...field} {...props} id={name} />
          ) : (
            <Textarea {...field} {...props} id={name} />
          )}
          <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

export default FormikInput;
