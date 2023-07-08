import React, { Fragment } from 'react';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import './authentication.styles.scss';
import Navigation from '../navigation/navigation.component';

const Authentication = () => {
  return (
    <Fragment>
      <Navigation />
        <div className='authentication-container'>
          <SignInForm />
          <SignUpForm />
        </div>
    </Fragment>
  );
};

export default Authentication;
