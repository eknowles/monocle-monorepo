import {
  GrpcWebImpl,
  AuthServiceClientImpl,
} from '@monocle/protobuf/generated/monocle';

export const authenticate = (
  host: string,
  username: string,
  password: string,
) => {
  const rpc = new GrpcWebImpl(host, { debug: true });
  const client = new AuthServiceClientImpl(rpc);
  return client.Authenticate({ username, password });
};
