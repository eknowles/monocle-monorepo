import { Button } from '@monocle/components';
import type { FC } from 'react';
import { Formik, Field, Form } from 'formik';
import { Redirect, useHistory, useLocation } from 'react-router-dom';

import { useAuth } from '../../services/auth';

type IFormValues = Record<'username' | 'password', string>;

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
        <Form className="grid gap-2 grid-cols-1 max-w-sm p-4 dark:bg-code-800 shadow-lg">
          <h2 className="dark:text-code-300 text-sm font-light font-mono tracking-wider">
            {window.location.host}
          </h2>
          <Field
            name="username"
            type="text"
            placeholder="Username"
            className="dark:bg-code-600 dark:focus:bg-code-500 dark:text-white px-3 py-2 text-sm font-light font-mono tracking-wider focus:outline-none focus:ring focus:border-blue-900'"
          />
          <Field
            name="password"
            type="password"
            placeholder="Password"
            className="dark:bg-code-600 dark:focus:bg-code-500 dark:text-white px-3 py-2 text-sm font-light font-mono tracking-wider focus:outline-none focus:ring focus:border-blue-900'"
          />
          <Button type="submit">Log in</Button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
