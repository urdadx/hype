import { useState } from 'react';

const FormValidation = (initialState, validate, reqFunc) => {

  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);


  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  }

  const  handleSubmit = () => {
    window.location.reload()
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitting(true);
  }

  return {
    handleSubmit,
    handleChange,
    values,
    errors,
    isSubmitting, 
    setValues
  };
}

export default FormValidation
