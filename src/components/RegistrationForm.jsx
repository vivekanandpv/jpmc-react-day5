import React from 'react';
import { useForm } from 'react-hook-form';
import { httpService } from '../http-service';
import { DevTool } from '@hookform/devtools';

const RegistrationForm = (props) => {
  const { register, control, handleSubmit, reset, formState } = useForm({
    defaultValues: {
      username: 'john',
      password: 'hello',
      country: {
        primary: 'india',
      },
    },
    mode: 'onChange',
  });

  const {
    isSubmitSuccessful,
    isSubmitted,
    isSubmitting,
    errors,
    dirtyFields,
    touchedFields,
  } = formState;

  const submit = (data) => {
    console.log('form submitted', data);
  };

  const error = (e) => {
    console.log('dirtyFields', dirtyFields);
    console.log('touchedFields', touchedFields);
    console.log('form error', e);
  };

  return (
    <>
      <h4>Please login...</h4>
      <hr />
      <form noValidate onSubmit={handleSubmit(submit, error)}>
        <div className='mb-3'>
          <label htmlFor='username' className='form-label'>
            Username
          </label>
          <input
            type='text'
            className='form-control'
            id='username'
            {...register('username', {
              required: 'Username is required',
              validate: {
                myAsyncValidator: async (fv) => {
                  const val = await httpService
                    .get('users/1')
                    .then((r) => r.data.username);

                  return fv === val || `It should be ${val}`;
                },
              },
            })}
          />
          <p className='text-danger form-text'>{errors.username?.message}</p>
        </div>
        <div className='mb-3'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-control'
            id='password'
            {...register('password', {
              required: 'Password is required',
              validate: {
                passValidator: (fv) => {
                  return fv.length >= 8 || 'Should be 8 or more characters';
                },
              },
            })}
          />
          <p className='text-danger form-text'>{errors.password?.message}</p>
        </div>
        <div className='mb-3'>
          <label htmlFor='primaryCountry' className='form-label'>
            Primary Country
          </label>
          <input
            type='text'
            className='form-control'
            id='primaryCountry'
            {...register('country.primary', {
              required: 'Primary country is required',
            })}
          />
          <p className='text-danger form-text'>
            {errors.country?.primary?.message}
          </p>
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
      <DevTool control={control} />
    </>
  );
};

export default RegistrationForm;
