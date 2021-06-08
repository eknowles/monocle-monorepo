import { grpc } from '@improbable-eng/grpc-web';
import { MonocleServiceClientImpl, GrpcWebImpl } from '@monocle/protobuf/generated/monocle';

export const subscribe = ({ host, token }: { host: string; token: string }) => {
  const { client, meta } = getClient({ host, token });
  return client.Subscribe({}, meta);
};

export const getClient = ({ host, token }: { host: string; token: string }) => {
  const rpc = new GrpcWebImpl(host, { debug: true });
  const client = new MonocleServiceClientImpl(rpc);
  const meta = new grpc.Metadata({ jwttoken: token });
  return { client, meta };
};
