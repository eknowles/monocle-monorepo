import { FormLogin, IFormValues } from "@monocle/components";
import type { FC, PropsWithChildren } from "react";
import { Formik, Field, Form } from "formik";
import { useDispatch } from "react-redux";

import { GRPC_SERVER } from "../../constants";
import { auth as serverAuth } from "../../redux/modules/server";

const LoginPage: FC<PropsWithChildren<unknown>> = () => {
  const dispatch = useDispatch();
  const onSubmit = async (values: IFormValues) => {
    dispatch(
      serverAuth({
        host: GRPC_SERVER,
        username: values.username,
        password: values.password,
      })
    );
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <Formik<IFormValues>
        initialValues={{ username: "", password: "" }}
        onSubmit={onSubmit}
      >
        <FormLogin title={GRPC_SERVER} />
      </Formik>
    </div>
  );
};

export default LoginPage;
