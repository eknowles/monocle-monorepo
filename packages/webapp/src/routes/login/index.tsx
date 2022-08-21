import { FormLogin, IFormValues } from "@monocle/components";
import type { FC, PropsWithChildren } from "react";
import { Formik, Field, Form } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { GRPC_SERVER } from "../../constants";
import { auth as serverAuth } from "../../redux/modules/server";

const LoginPage: FC<PropsWithChildren<unknown>> = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (values: IFormValues) => {
    dispatch(
      serverAuth({
        host: GRPC_SERVER,
        username: values.username,
        password: values.password,
      })
    );
    navigate("/app");
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <Formik<IFormValues>
        initialValues={{ username: "", password: "" }}
        onSubmit={onSubmit}
      >
        <FormLogin />
      </Formik>
    </div>
  );
};

export default LoginPage;
