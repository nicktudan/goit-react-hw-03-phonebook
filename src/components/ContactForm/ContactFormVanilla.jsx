// import { Component } from 'react';
// import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types'; 
// import { Form, Input, FormBtn } from './ContactForm.styled';

// export class ContactForm extends Component {
//   // state = {
//   //   name: '',
//   //   number: '',
//   // };

//   // nameInputId = nanoid();
//   // numberInputId = nanoid();

//   handleChange = evt => {
//     this.setState({ [evt.currentTarget.name]: evt.currentTarget.value });
//   };

//   handleSubmit = evt => {
//     evt.preventDefault();
//     // console.log(this.state);
//     this.props.onSubmit(this.state);
//     // this.reset();
//   };

//   // reset = () => {
//   //   this.setState({ name: '', number: '' });
//   // }

//   render() {
//     return (
//       <Form onSubmit={this.handleSubmit}> 
//         <label htmlFor={this.nameInputId}>
//           Name
//           <Input
//             // type="text"
//             // name="name"
//             // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             // required
//             value={this.state.name}
//             onChange={this.handleChange}
//             id={this.nameInputId}
//           />
//         </label>

//         <label htmlFor={this.numberInputId}>
//           Number
//           <Input
//             // type="tel"
//             // name="number"
//             // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             // required
//             value={this.state.number}
//             onChange={this.handleChange}
//             id={this.numberInputId}
//           />
//         </label>

//         <FormBtn type="submit">Add contact</FormBtn>
//       </Form>
//     );
//   }
// }

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };