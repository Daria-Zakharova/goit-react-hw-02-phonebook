import { Formik, Form} from "formik";
import PropTypes from 'prop-types';
import { AddContactWrap, Input, AddContactBtn, ErrorNotify } from "./ContactForm.styled";
import * as yup from 'yup';

export const ContactForm = ({onFormSubmit}) => {

  const NUMBER_REGEXP = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
  const errorMsg = 'Phone number must be at least 5 digits, can contain spaces, dashes, parentheses and can start with +';

  const schema = yup.object().shape({
    name: yup.string().min(3).required(),
    number: yup.string().matches(NUMBER_REGEXP, errorMsg).required(),
  });

  return (
    <AddContactWrap>
      <h2>Add contact</h2>
      <Formik
          initialValues={{
              name: '',
              number: '',
          }}
          validationSchema ={schema}
          onSubmit={onFormSubmit}
       >      
           <Form>
             <label>Name
               <Input
                 type="text"
                 name="name"
               />
               <ErrorNotify name="name" component={"span"}/>
             </label>
             <label>Number
               <Input
                 type="tel"
                 name="number"
               />
               <ErrorNotify name="number" component={"span"} />
             </label>
             <AddContactBtn type="submit">Add</AddContactBtn>
           </Form>      
      </Formik>
    </AddContactWrap>
 )
}

ContactForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
}