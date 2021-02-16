import { Button, FormLogin, IFormValues } from '@monocle/components';
import type { FC } from 'react';
import { Formik, Field, Form } from 'formik';
import { Redirect, useHistory, useLocation } from 'react-router-dom';

import { useAuth } from '../../services/auth';

const LoginPage: FC = () => {
  const history = useHistory();
  const location = useLocation<any>();
  const auth = useAuth();

  const { from } = location.state || { from: { pathname: '/app' } };
  const onSubmit = async (values: IFormValues) => {
    const res = await auth.login(values.username, values.password);

    if (res) {
      history.replace(from);
    }
  };

  if (auth.user) {
    return <Redirect to={'/app'} />;
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      <Formik<IFormValues>
        initialValues={{ username: 'admin', password: 'password5' }}
        onSubmit={onSubmit}
      >
        <FormLogin />
      </Formik>
    </div>
  );
};

export default LoginPage;
