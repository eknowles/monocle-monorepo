import { grpc } from '@improbable-eng/grpc-web';
import { Any } from 'google-protobuf/google/protobuf/any_pb';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { GRPC_SERVER } from '../../constants';
import { State, SubscribeRequest } from '@monocle/protos/generated/monocle_pb';
import { MonocleServiceClient } from '@monocle/protos/generated/monocle_pb_service';
import { RootState } from '../../redux';

const options: grpc.RpcOptions = { debug: true };
const client = new MonocleServiceClient(GRPC_SERVER, options);

export const useMonocleState = () => {
  const token = useSelector<RootState, string>(
    (state) => state.server.token ?? '',
  );
  const [state, updateState] = useState<State.AsObject>();
  const req = new SubscribeRequest();
  const meta = new grpc.Metadata({ jwttoken: token });
  let subReq: ReturnType<MonocleServiceClient['subscribe']>;

  const getState = () => {
    console.log('subscribe');
    subReq = client.subscribe(req, meta);
    subReq.on('data', (response) => {
      const msg = response.getMessage() as Any;
      const typeName = msg.getTypeName();

      if (typeName === 'proto.State') {
        const unpacked = msg.unpack<State>(
          State.deserializeBinary,
          msg.getTypeName(),
        );
        const newState = unpacked?.toObject();
        updateState(newState);
      }

      // State
      // FileAdded
      // FileRemoved
      // FileMonitorStateChanged
      // FileStateChanged
      // GPSDeviceChanged
      // GPSDeviceStateChanged
      // GroupAdded
      // GroupChanged
      // GroupRemoved
      // LocationChanged
      // LocationRetentionTimeChanged
      // MapAdded
      // MapChanged
      // MapRemoved
      // MountAdded
      // MountRemoved
      // NameChanged
      // ONVIFUserAdded
      // ONVIFUserChanged
      // ONVIFUserRemoved
      // OpenStreetMapBaseUrisChanged
      // PluginAdded
      // PluginChanged
      // PluginRemoved
      // PluginStateChanged
      // ReceiverAdded
      // ReceiverChanged
      // ReceiverRemoved
      // RecordingJobSourceAdded
      // RecordingJobSourceRemoved
      // RecordingJobSourceTrackAdded
      // RecordingJobSourceTrackRemoved
      // RecordingLogMessage
      // RecordingTrackLogMessage
      // RecordingAdded
      // RecordingChanged
      // RecordingRemoved
      // RecordingJobAdded
      // RecordingJobChanged
      // RecordingJobRemoved
      // RecordingTrackAdded
      // RecordingTrackChanged
      // RecordingTrackRemoved
      // RecordingActiveJobChanged
      // RecordingJobSourceTrackActiveParametersChanged
      // RecordingJobSourceTrackState
      // RecordingTrackCodecAdded
      // RecordingTrackCodecRemoved
      // ServerLogMessage
      // RecordingTrackSetData
      // RecordingTrackDeleteData
      // UserAdded
      // UserChanged
      // UserRemoved
      // AddUserRequest
      // AddUserResponse
      // RemoveUserRequest
      // RemoveUserResponse
      // AuthenticateRequest
      // AuthenticateResponse
      // RefreshTokenRequest
      // RefreshTokenResponse
      // SubscribeRequest
      // SubscribeResponse
    });

    subReq.on('status', (status) => {
      console.log(status.code);
      console.log(status.details);
      console.log(status.metadata);
    });

    subReq.on('end', (end) => {
      console.log('end', Date.now(), end);
      if (end?.code === grpc.Code.Unauthenticated) {
        // Unauthenticated
      }
    });
  };

  useEffect(() => {
    if (!state) {
      getState();
    }

    return () => {
      if (subReq) {
        subReq.cancel();
      }
    };
  }, []);

  return {
    state,
  };
};
