import { Button, FormLogin, IFormValues } from '@monocle/components';
import type { FC } from 'react';
import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';

import { GRPC_SERVER } from '../../constants';
import { auth as serverAuth } from '../../redux/modules/server';

const LoginPage: FC = () => {
  const dispatch = useDispatch();

  const onSubmit = async (values: IFormValues) => {
    dispatch(
      serverAuth({
        host: GRPC_SERVER,
        username: values.username,
        password: values.password,
      }),
    );
  };

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
