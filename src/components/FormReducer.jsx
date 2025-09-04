import { useReducer } from 'react';

// Reducer function
function formReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        [action.field]: action.value,
        errors: {
          ...state.errors,
          [action.field]: ''
        }
      };
    
    case 'SET_ERRORS':
      return {
        ...state,
        errors: action.errors
      };
    
    case 'RESET_FORM':
      return initialState;
    
    default:
      return state;
  }
}

const initialState = {
  name: '',
  email: '',
  message: '',
  errors: {}
};

export default function ContactForm() {
  const [formState, dispatch] = useReducer(formReducer, initialState);

  const validateForm = () => {
    const errors = {};
    
    if (!formState.name.trim()) errors.name = 'Name is required';
    if (!formState.email.includes('@')) errors.email = 'Valid email required';
    if (!formState.message.trim()) errors.message = 'Message is required';
    
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    
    if (Object.keys(errors).length === 0) {
      console.log('Form submitted:', formState);
      dispatch({ type: 'RESET_FORM' });
    } else {
      dispatch({ type: 'SET_ERRORS', errors });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={formState.name}
        onChange={(e) => dispatch({
          type: 'UPDATE_FIELD',
          field: 'name',
          value: e.target.value
        })}
      />
      {formState.errors.name && <span>{formState.errors.name}</span>}

      <input
        type="email"
        placeholder="Email"
        value={formState.email}
        onChange={(e) => dispatch({
          type: 'UPDATE_FIELD',
          field: 'email',
          value: e.target.value
        })}
      />
      {formState.errors.email && <span>{formState.errors.email}</span>}

      <textarea
        placeholder="Message"
        value={formState.message}
        onChange={(e) => dispatch({
          type: 'UPDATE_FIELD',
          field: 'message',
          value: e.target.value
        })}
      />
      {formState.errors.message && <span>{formState.errors.message}</span>}

      <button type="submit">Submit</button>
    </form>
  );
}