import { Formik } from 'formik';
import { Form, Field, FormBtn, ErrorMessage, } from './ContactForm.styled';
import * as yup from 'yup';
import { nanoid } from 'nanoid';

const ContactSchema = yup.object().shape({
    name: yup.string().trim().matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore dArtagnan').required('Required'),
    number: yup.string().trim().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
    'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +').required('Required'),
})

const initialValues = {
    name: '',
    number: '',
}

export const ContactForm = ({ onSubmit }) => {
    // const handleSubmit = (value, {resetForm}) => {
    //     console.log(value);
    //     // onSubmit({ ...value, id: nanoid(), });
    //     // this.props.onSubmit(this.state);
    //     resetForm();
    // }

    return (
    <Formik 
    initialValues={initialValues} 
    validationSchema={ContactSchema}
    onSubmit = {(contacts, {resetForm}) => {
        onSubmit({ ...contacts, id: nanoid(), })
        resetForm();
    }}>
    
        <Form>
            <label>
                Name
                <Field type="text" name="name" placeholder="enter a name" />
                <ErrorMessage name="name" component="div" />
            </label>

            <label>
                Number
                <Field type="tel" name="number" placeholder="enter the phone number" />
                <ErrorMessage name="number" component="div" />
            </label>
            
            <FormBtn type="submit">Add contact</FormBtn>

        </Form>
    </Formik>
    );
}