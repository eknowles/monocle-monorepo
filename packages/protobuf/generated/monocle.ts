/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { BrowserHeaders } from "browser-headers";
import { take, share } from "rxjs/operators";
import { Any } from "./google/protobuf/any";
import { DoubleValue, UInt64Value } from "./google/protobuf/wrappers";

export const protobufPackage = "proto";

export enum Codec {
  CodecMETADATA = 0,
  CodecMJPEG = 1,
  CodecMPEG4 = 2,
  CodecH264 = 3,
  CodecH265 = 4,
  CodecOBJECTDETECTOR = 5,
  CodecPCMU = 6,
  CodecG726_32 = 7,
  UNRECOGNIZED = -1,
}

export function codecFromJSON(object: any): Codec {
  switch (object) {
    case 0:
    case "CodecMETADATA":
      return Codec.CodecMETADATA;
    case 1:
    case "CodecMJPEG":
      return Codec.CodecMJPEG;
    case 2:
    case "CodecMPEG4":
      return Codec.CodecMPEG4;
    case 3:
    case "CodecH264":
      return Codec.CodecH264;
    case 4:
    case "CodecH265":
      return Codec.CodecH265;
    case 5:
    case "CodecOBJECTDETECTOR":
      return Codec.CodecOBJECTDETECTOR;
    case 6:
    case "CodecPCMU":
      return Codec.CodecPCMU;
    case 7:
    case "CodecG726_32":
      return Codec.CodecG726_32;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Codec.UNRECOGNIZED;
  }
}

export function codecToJSON(object: Codec): string {
  switch (object) {
    case Codec.CodecMETADATA:
      return "CodecMETADATA";
    case Codec.CodecMJPEG:
      return "CodecMJPEG";
    case Codec.CodecMPEG4:
      return "CodecMPEG4";
    case Codec.CodecH264:
      return "CodecH264";
    case Codec.CodecH265:
      return "CodecH265";
    case Codec.CodecOBJECTDETECTOR:
      return "CodecOBJECTDETECTOR";
    case Codec.CodecPCMU:
      return "CodecPCMU";
    case Codec.CodecG726_32:
      return "CodecG726_32";
    default:
      return "UNKNOWN";
  }
}

export enum FileMonitorState {
  FileMonitorStateUnavailable = 0,
  FileMonitorStateAvailable = 1,
  UNRECOGNIZED = -1,
}

export function fileMonitorStateFromJSON(object: any): FileMonitorState {
  switch (object) {
    case 0:
    case "FileMonitorStateUnavailable":
      return FileMonitorState.FileMonitorStateUnavailable;
    case 1:
    case "FileMonitorStateAvailable":
      return FileMonitorState.FileMonitorStateAvailable;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FileMonitorState.UNRECOGNIZED;
  }
}

export function fileMonitorStateToJSON(object: FileMonitorState): string {
  switch (object) {
    case FileMonitorState.FileMonitorStateUnavailable:
      return "FileMonitorStateUnavailable";
    case FileMonitorState.FileMonitorStateAvailable:
      return "FileMonitorStateAvailable";
    default:
      return "UNKNOWN";
  }
}

export enum FileState {
  FileStateUnmounted = 0,
  FileStateMounted = 1,
  FileStateMounting = 2,
  FileStateUnmounting = 3,
  UNRECOGNIZED = -1,
}

export function fileStateFromJSON(object: any): FileState {
  switch (object) {
    case 0:
    case "FileStateUnmounted":
      return FileState.FileStateUnmounted;
    case 1:
    case "FileStateMounted":
      return FileState.FileStateMounted;
    case 2:
    case "FileStateMounting":
      return FileState.FileStateMounting;
    case 3:
    case "FileStateUnmounting":
      return FileState.FileStateUnmounting;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FileState.UNRECOGNIZED;
  }
}

export function fileStateToJSON(object: FileState): string {
  switch (object) {
    case FileState.FileStateUnmounted:
      return "FileStateUnmounted";
    case FileState.FileStateMounted:
      return "FileStateMounted";
    case FileState.FileStateMounting:
      return "FileStateMounting";
    case FileState.FileStateUnmounting:
      return "FileStateUnmounting";
    default:
      return "UNKNOWN";
  }
}

export enum GPSDeviceState {
  GPSDeviceStateIdle = 0,
  GPSDeviceStateActive = 1,
  GPSDeviceStateError = 2,
  UNRECOGNIZED = -1,
}

export function gPSDeviceStateFromJSON(object: any): GPSDeviceState {
  switch (object) {
    case 0:
    case "GPSDeviceStateIdle":
      return GPSDeviceState.GPSDeviceStateIdle;
    case 1:
    case "GPSDeviceStateActive":
      return GPSDeviceState.GPSDeviceStateActive;
    case 2:
    case "GPSDeviceStateError":
      return GPSDeviceState.GPSDeviceStateError;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GPSDeviceState.UNRECOGNIZED;
  }
}

export function gPSDeviceStateToJSON(object: GPSDeviceState): string {
  switch (object) {
    case GPSDeviceState.GPSDeviceStateIdle:
      return "GPSDeviceStateIdle";
    case GPSDeviceState.GPSDeviceStateActive:
      return "GPSDeviceStateActive";
    case GPSDeviceState.GPSDeviceStateError:
      return "GPSDeviceStateError";
    default:
      return "UNKNOWN";
  }
}

export enum ONVIFUserLevel {
  /** ONVIFUserLevelNone - Should never be used, but protobuf requires a 0 entry */
  ONVIFUserLevelNone = 0,
  ONVIFUserLevelAnonymous = 1,
  ONVIFUserLevelUser = 2,
  ONVIFUserLevelOperator = 3,
  ONVIFUserLevelAdministrator = 4,
  UNRECOGNIZED = -1,
}

export function oNVIFUserLevelFromJSON(object: any): ONVIFUserLevel {
  switch (object) {
    case 0:
    case "ONVIFUserLevelNone":
      return ONVIFUserLevel.ONVIFUserLevelNone;
    case 1:
    case "ONVIFUserLevelAnonymous":
      return ONVIFUserLevel.ONVIFUserLevelAnonymous;
    case 2:
    case "ONVIFUserLevelUser":
      return ONVIFUserLevel.ONVIFUserLevelUser;
    case 3:
    case "ONVIFUserLevelOperator":
      return ONVIFUserLevel.ONVIFUserLevelOperator;
    case 4:
    case "ONVIFUserLevelAdministrator":
      return ONVIFUserLevel.ONVIFUserLevelAdministrator;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ONVIFUserLevel.UNRECOGNIZED;
  }
}

export function oNVIFUserLevelToJSON(object: ONVIFUserLevel): string {
  switch (object) {
    case ONVIFUserLevel.ONVIFUserLevelNone:
      return "ONVIFUserLevelNone";
    case ONVIFUserLevel.ONVIFUserLevelAnonymous:
      return "ONVIFUserLevelAnonymous";
    case ONVIFUserLevel.ONVIFUserLevelUser:
      return "ONVIFUserLevelUser";
    case ONVIFUserLevel.ONVIFUserLevelOperator:
      return "ONVIFUserLevelOperator";
    case ONVIFUserLevel.ONVIFUserLevelAdministrator:
      return "ONVIFUserLevelAdministrator";
    default:
      return "UNKNOWN";
  }
}

export enum PluginState {
  PluginStateIdle = 0,
  PluginStateActive = 1,
  PluginStateDestroying = 2,
  PluginStateError = 3,
  UNRECOGNIZED = -1,
}

export function pluginStateFromJSON(object: any): PluginState {
  switch (object) {
    case 0:
    case "PluginStateIdle":
      return PluginState.PluginStateIdle;
    case 1:
    case "PluginStateActive":
      return PluginState.PluginStateActive;
    case 2:
    case "PluginStateDestroying":
      return PluginState.PluginStateDestroying;
    case 3:
    case "PluginStateError":
      return PluginState.PluginStateError;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PluginState.UNRECOGNIZED;
  }
}

export function pluginStateToJSON(object: PluginState): string {
  switch (object) {
    case PluginState.PluginStateIdle:
      return "PluginStateIdle";
    case PluginState.PluginStateActive:
      return "PluginStateActive";
    case PluginState.PluginStateDestroying:
      return "PluginStateDestroying";
    case PluginState.PluginStateError:
      return "PluginStateError";
    default:
      return "UNKNOWN";
  }
}

export enum ReceiverMode {
  ReceiverModeAutoConnect = 0,
  ReceiverModeAlwaysConnect = 1,
  ReceiverModeNeverConnect = 2,
  UNRECOGNIZED = -1,
}

export function receiverModeFromJSON(object: any): ReceiverMode {
  switch (object) {
    case 0:
    case "ReceiverModeAutoConnect":
      return ReceiverMode.ReceiverModeAutoConnect;
    case 1:
    case "ReceiverModeAlwaysConnect":
      return ReceiverMode.ReceiverModeAlwaysConnect;
    case 2:
    case "ReceiverModeNeverConnect":
      return ReceiverMode.ReceiverModeNeverConnect;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ReceiverMode.UNRECOGNIZED;
  }
}

export function receiverModeToJSON(object: ReceiverMode): string {
  switch (object) {
    case ReceiverMode.ReceiverModeAutoConnect:
      return "ReceiverModeAutoConnect";
    case ReceiverMode.ReceiverModeAlwaysConnect:
      return "ReceiverModeAlwaysConnect";
    case ReceiverMode.ReceiverModeNeverConnect:
      return "ReceiverModeNeverConnect";
    default:
      return "UNKNOWN";
  }
}

export enum ReceiverState {
  ReceiverStateNotConnected = 0,
  ReceiverStateConnecting = 1,
  ReceiverStateConnected = 2,
  UNRECOGNIZED = -1,
}

export function receiverStateFromJSON(object: any): ReceiverState {
  switch (object) {
    case 0:
    case "ReceiverStateNotConnected":
      return ReceiverState.ReceiverStateNotConnected;
    case 1:
    case "ReceiverStateConnecting":
      return ReceiverState.ReceiverStateConnecting;
    case 2:
    case "ReceiverStateConnected":
      return ReceiverState.ReceiverStateConnected;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ReceiverState.UNRECOGNIZED;
  }
}

export function receiverStateToJSON(object: ReceiverState): string {
  switch (object) {
    case ReceiverState.ReceiverStateNotConnected:
      return "ReceiverStateNotConnected";
    case ReceiverState.ReceiverStateConnecting:
      return "ReceiverStateConnecting";
    case ReceiverState.ReceiverStateConnected:
      return "ReceiverStateConnected";
    default:
      return "UNKNOWN";
  }
}

export enum RecordingJobState {
  RecordingJobStateIdle = 0,
  RecordingJobStateActive = 1,
  RecordingJobStateError = 2,
  RecordingJobStateActiveNotRecording = 3,
  UNRECOGNIZED = -1,
}

export function recordingJobStateFromJSON(object: any): RecordingJobState {
  switch (object) {
    case 0:
    case "RecordingJobStateIdle":
      return RecordingJobState.RecordingJobStateIdle;
    case 1:
    case "RecordingJobStateActive":
      return RecordingJobState.RecordingJobStateActive;
    case 2:
    case "RecordingJobStateError":
      return RecordingJobState.RecordingJobStateError;
    case 3:
    case "RecordingJobStateActiveNotRecording":
      return RecordingJobState.RecordingJobStateActiveNotRecording;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RecordingJobState.UNRECOGNIZED;
  }
}

export function recordingJobStateToJSON(object: RecordingJobState): string {
  switch (object) {
    case RecordingJobState.RecordingJobStateIdle:
      return "RecordingJobStateIdle";
    case RecordingJobState.RecordingJobStateActive:
      return "RecordingJobStateActive";
    case RecordingJobState.RecordingJobStateError:
      return "RecordingJobStateError";
    case RecordingJobState.RecordingJobStateActiveNotRecording:
      return "RecordingJobStateActiveNotRecording";
    default:
      return "UNKNOWN";
  }
}

export enum Severity {
  SeverityTrace = 0,
  SeverityDebug = 1,
  SeverityInfo = 2,
  SeverityWarn = 3,
  SeverityErr = 4,
  SeverityCritical = 5,
  UNRECOGNIZED = -1,
}

export function severityFromJSON(object: any): Severity {
  switch (object) {
    case 0:
    case "SeverityTrace":
      return Severity.SeverityTrace;
    case 1:
    case "SeverityDebug":
      return Severity.SeverityDebug;
    case 2:
    case "SeverityInfo":
      return Severity.SeverityInfo;
    case 3:
    case "SeverityWarn":
      return Severity.SeverityWarn;
    case 4:
    case "SeverityErr":
      return Severity.SeverityErr;
    case 5:
    case "SeverityCritical":
      return Severity.SeverityCritical;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Severity.UNRECOGNIZED;
  }
}

export function severityToJSON(object: Severity): string {
  switch (object) {
    case Severity.SeverityTrace:
      return "SeverityTrace";
    case Severity.SeverityDebug:
      return "SeverityDebug";
    case Severity.SeverityInfo:
      return "SeverityInfo";
    case Severity.SeverityWarn:
      return "SeverityWarn";
    case Severity.SeverityErr:
      return "SeverityErr";
    case Severity.SeverityCritical:
      return "SeverityCritical";
    default:
      return "UNKNOWN";
  }
}

export enum TrackType {
  TrackTypeVideo = 0,
  TrackTypeAudio = 1,
  TrackTypeMetadata = 2,
  UNRECOGNIZED = -1,
}

export function trackTypeFromJSON(object: any): TrackType {
  switch (object) {
    case 0:
    case "TrackTypeVideo":
      return TrackType.TrackTypeVideo;
    case 1:
    case "TrackTypeAudio":
      return TrackType.TrackTypeAudio;
    case 2:
    case "TrackTypeMetadata":
      return TrackType.TrackTypeMetadata;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TrackType.UNRECOGNIZED;
  }
}

export function trackTypeToJSON(object: TrackType): string {
  switch (object) {
    case TrackType.TrackTypeVideo:
      return "TrackTypeVideo";
    case TrackType.TrackTypeAudio:
      return "TrackTypeAudio";
    case TrackType.TrackTypeMetadata:
      return "TrackTypeMetadata";
    default:
      return "UNKNOWN";
  }
}

export interface File {
  token: string;
  path: string;
  mountpoint: string;
  numchunks: string;
  chunksize: string;
  automount: boolean;
}

export interface Group {
  token: string;
  name: string;
  manageusers: boolean;
  managerecordings: boolean;
  managemaps: boolean;
  managedevice: boolean;
  manageplugins: boolean;
  reboot: boolean;
  allrecordings: boolean;
  recordings: string[];
}

export interface Index {
  starttime: string;
  endtime: string;
}

export interface LogMessage {
  time: string;
  severity: Severity;
  message: string;
}

export interface Map {
  token: string;
  name: string;
  location: string;
  md5: string;
}

export interface Mount {
  id: string;
  parentid: string;
  majorstdev: string;
  minorstdev: string;
  path: string;
  type: string;
  source: string;
}

export interface ONVIFUser {
  token: string;
  username: string;
  onvifuserlevel: ONVIFUserLevel;
}

export interface Plugin {
  token: string;
  name: string;
  enabled: boolean;
  parameters: string;
  priority: string;
  state: PluginState;
  statemessage: string;
}

export interface Receiver {
  token: string;
  mode: ReceiverMode;
  uri: string;
  autocreated: boolean;
  username: string;
  password: string;
  parameters: string[];
}

export interface Recording {
  token: string;
  sourceid: string;
  name: string;
  location: string;
  description: string;
  address: string;
  content: string;
  retentiontime: string;
  adaptivestreaming: boolean;
  relativelocation: boolean;
  orientation: number;
  jobs: RecordingJob[];
  tracks: RecordingTrack[];
  latitude: number | undefined;
  longitude: number | undefined;
  activejob: string | undefined;
}

export interface RecordingJob {
  recordingtoken: string;
  recordingjobtoken: string;
  name: string;
  enabled: boolean;
  priority: string;
  recordingjobsources: RecordingJobSource[];
}

export interface RecordingJobSource {
  recordingtoken: string;
  recordingjobtoken: string;
  recordingjobsourcetoken: string;
  receivertoken: string;
  recordingjobsourcetracks: RecordingJobSourceTrack[];
}

export interface RecordingJobSourceTrack {
  recordingtoken: string;
  recordingjobtoken: string;
  recordingjobsourcetoken: string;
  recordingjobsourcetracktoken: string;
  recordingtrackid: number;
  parameters: string[];
  state: RecordingJobState;
  error: string;
  activeparameters: string[];
}

export interface RecordingTrack {
  recordingtoken: string;
  recordingtrackid: number;
  token: string;
  tracktype: TrackType;
  description: string;
  fixedfiles: boolean;
  digitalsigning: boolean;
  encrypt: boolean;
  flushfrequency: number;
  files: string[];
  indices: Index[];
  totaltrackdata: TrackData[];
}

export interface TrackData {
  time: string;
  totaldata: string;
}

export interface User {
  token: string;
  username: string;
  grouptoken: string;
}

export interface Version {
  major: string;
  minor: string;
  build: string;
}

export interface State {
  name: string;
  publickey: string;
  architecture: string;
  version: Version | undefined;
  identifier: string;
  environmentvariables: string[];
  commandlinevariables: string[];
  onvifusers: ONVIFUser[];
  groups: Group[];
  users: User[];
  files: File[];
  receivers: Receiver[];
  recordings: Recording[];
  serverlogmessages: LogMessage[];
  maps: Map[];
  mounts: Mount[];
  locationtime: string;
  latitude: number | undefined;
  longitude: number | undefined;
  locationindices: Index[];
  gpsdevice: string;
  gpsdevicestate: GPSDeviceState;
  gpsdevicestatemessage: string;
  locationretentiontime: string;
  openstreetmapbaseuris: string[];
  plugins: Plugin[];
}

export interface FileAdded {
  file: File | undefined;
}

export interface FileRemoved {
  token: string;
}

export interface FileMonitorStateChanged {
  token: string;
  state: FileMonitorState;
}

export interface FileStateChanged {
  token: string;
  state: FileState;
}

export interface GPSDeviceChanged {
  gpsdevice: string;
}

export interface GPSDeviceStateChanged {
  time: string;
  state: GPSDeviceState;
  message: string;
}

export interface GroupAdded {
  group: Group | undefined;
}

export interface GroupChanged {
  group: Group | undefined;
}

export interface GroupRemoved {
  token: string;
}

export interface LocationChanged {
  time: string;
  latitude: number | undefined;
  longitude: number | undefined;
}

export interface LocationRetentionTimeChanged {
  locationretentiontime: string;
}

export interface MapAdded {
  map: Map | undefined;
}

export interface MapChanged {
  map: Map | undefined;
}

export interface MapRemoved {
  token: string;
}

export interface MountAdded {
  mount: Mount | undefined;
}

export interface MountRemoved {
  mount: Mount | undefined;
}

export interface NameChanged {
  name: string;
}

export interface ONVIFUserAdded {
  onvifuser: ONVIFUser | undefined;
}

export interface ONVIFUserChanged {
  onvifuser: ONVIFUser | undefined;
}

export interface ONVIFUserRemoved {
  token: string;
}

export interface OpenStreetMapBaseUrisChanged {
  openstreetmapbaseuris: string[];
}

export interface PluginAdded {
  plugin: Plugin | undefined;
}

export interface PluginChanged {
  token: string;
  enabled: boolean;
  parameters: string;
  priority: string;
  state: PluginState;
  statemessage: string;
}

export interface PluginRemoved {
  token: string;
}

export interface PluginStateChanged {
  token: string;
  state: PluginState;
  message: string;
}

export interface ReceiverAdded {
  receiver: Receiver | undefined;
}

export interface ReceiverChanged {
  receiver: Receiver | undefined;
}

export interface ReceiverRemoved {
  token: string;
}

export interface RecordingJobSourceAdded {
  source: RecordingJobSource | undefined;
}

export interface RecordingJobSourceRemoved {
  recordingtoken: string;
  recordingjobtoken: string;
  recordingjobsourcetoken: string;
}

export interface RecordingJobSourceTrackAdded {
  track: RecordingJobSourceTrack | undefined;
}

export interface RecordingJobSourceTrackRemoved {
  recordingtoken: string;
  recordingjobtoken: string;
  recordingjobsourcetoken: string;
  recordingjobsourcetracktoken: string;
}

export interface RecordingLogMessage {
  token: string;
  logmessage: LogMessage | undefined;
}

export interface RecordingTrackLogMessage {
  recordingtoken: string;
  trackid: number;
  logmessage: LogMessage | undefined;
}

export interface RecordingAdded {
  recording: Recording | undefined;
}

export interface RecordingChanged {
  recording: Recording | undefined;
}

export interface RecordingRemoved {
  token: string;
}

export interface RecordingJobAdded {
  recordingjob: RecordingJob | undefined;
}

export interface RecordingJobChanged {
  recordingjob: RecordingJob | undefined;
}

export interface RecordingJobRemoved {
  recordingtoken: string;
  recordingjobtoken: string;
}

export interface RecordingTrackAdded {
  recordingtrack: RecordingTrack | undefined;
}

export interface RecordingTrackChanged {
  recordingtrack: RecordingTrack | undefined;
}

export interface RecordingTrackRemoved {
  recordingtoken: string;
  recordingtrackid: number;
}

export interface RecordingActiveJobChanged {
  recordingtoken: string;
  activejob: string | undefined;
}

export interface RecordingJobSourceTrackActiveParametersChanged {
  recordingtoken: string;
  recordingjobtoken: string;
  recordingjobsourcetoken: string;
  recordingjobsourcetracktoken: string;
  activeparameters: string[];
}

export interface RecordingJobSourceTrackState {
  recordingtoken: string;
  recordingjobtoken: string;
  recordingjobsourcetoken: string;
  recordingjobsourcetracktoken: string;
  time: string;
  state: RecordingJobState;
  error: string;
}

export interface RecordingTrackCodecAdded {
  recordingtoken: string;
  recordingtrackid: number;
  codecid: string;
  codec: Codec;
  parameters: string;
  timestamp: string;
}

export interface RecordingTrackCodecRemoved {
  recordingtoken: string;
  recordingtrackid: number;
  codecid: string;
}

export interface ServerLogMessage {
  logmessage: LogMessage | undefined;
}

export interface RecordingTrackSetData {
  recordingtoken: string;
  recordingtrackid: number;
  indices: Index[];
}

export interface RecordingTrackDeleteData {
  recordingtoken: string;
  recordingtrackid: number;
  start: string | undefined;
  end: string | undefined;
}

export interface UserAdded {
  user: User | undefined;
}

export interface UserChanged {
  token: string;
  grouptoken: string;
}

export interface UserRemoved {
  token: string;
}

export interface AddIceCandidateWebRTCRequest {
  peerid: string;
  icecandidiate: string;
}

export interface AddIceCandidateWebRTCResponse {}

export interface AuthenticateRequest {
  username: string;
  password: string;
}

export interface AuthenticateResponse {
  jwttoken: string;
}

export interface AddUserRequest {
  username: string;
  digest: string;
  group: string;
}

export interface AddUserResponse {}

export interface CallWebRTCRequest {
  recording: string;
  videotrackid: number;
  audiotrackid?: number | undefined;
  sdp: string;
}

export interface CallWebRTCResponse {
  peerid: string;
  sdp: string;
}

export interface GetIceCandidatesWebRTCRequest {
  peerid: string;
}

export interface GetIceCandidatesWebRTCResponse {
  peerlist: string;
}

export interface HangUpWebRTCRequest {
  peerid: string;
}

export interface HangUpWebRTCResponse {}

export interface RefreshTokenRequest {}

export interface RefreshTokenResponse {
  jwttoken: string;
}

export interface RemoveUserRequest {
  usertoken: string;
}

export interface RemoveUserResponse {}

export interface SubscribeRequest {}

export interface SubscribeResponse {
  message: Any | undefined;
}

const baseFile: object = {
  token: "",
  path: "",
  mountpoint: "",
  numchunks: "0",
  chunksize: "0",
  automount: false,
};

export const File = {
  encode(message: File, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    if (message.mountpoint !== "") {
      writer.uint32(26).string(message.mountpoint);
    }
    if (message.numchunks !== "0") {
      writer.uint32(33).fixed64(message.numchunks);
    }
    if (message.chunksize !== "0") {
      writer.uint32(41).fixed64(message.chunksize);
    }
    if (message.automount === true) {
      writer.uint32(48).bool(message.automount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): File {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFile } as File;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        case 2:
          message.path = reader.string();
          break;
        case 3:
          message.mountpoint = reader.string();
          break;
        case 4:
          message.numchunks = longToString(reader.fixed64() as Long);
          break;
        case 5:
          message.chunksize = longToString(reader.fixed64() as Long);
          break;
        case 6:
          message.automount = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): File {
    const message = { ...baseFile } as File;
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    if (object.path !== undefined && object.path !== null) {
      message.path = String(object.path);
    } else {
      message.path = "";
    }
    if (object.mountpoint !== undefined && object.mountpoint !== null) {
      message.mountpoint = String(object.mountpoint);
    } else {
      message.mountpoint = "";
    }
    if (object.numchunks !== undefined && object.numchunks !== null) {
      message.numchunks = String(object.numchunks);
    } else {
      message.numchunks = "0";
    }
    if (object.chunksize !== undefined && object.chunksize !== null) {
      message.chunksize = String(object.chunksize);
    } else {
      message.chunksize = "0";
    }
    if (object.automount !== undefined && object.automount !== null) {
      message.automount = Boolean(object.automount);
    } else {
      message.automount = false;
    }
    return message;
  },

  toJSON(message: File): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    message.path !== undefined && (obj.path = message.path);
    message.mountpoint !== undefined && (obj.mountpoint = message.mountpoint);
    message.numchunks !== undefined && (obj.numchunks = message.numchunks);
    message.chunksize !== undefined && (obj.chunksize = message.chunksize);
    message.automount !== undefined && (obj.automount = message.automount);
    return obj;
  },

  fromPartial(object: DeepPartial<File>): File {
    const message = { ...baseFile } as File;
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    if (object.path !== undefined && object.path !== null) {
      message.path = object.path;
    } else {
      message.path = "";
    }
    if (object.mountpoint !== undefined && object.mountpoint !== null) {
      message.mountpoint = object.mountpoint;
    } else {
      message.mountpoint = "";
    }
    if (object.numchunks !== undefined && object.numchunks !== null) {
      message.numchunks = object.numchunks;
    } else {
      message.numchunks = "0";
    }
    if (object.chunksize !== undefined && object.chunksize !== null) {
      message.chunksize = object.chunksize;
    } else {
      message.chunksize = "0";
    }
    if (object.automount !== undefined && object.automount !== null) {
      message.automount = object.automount;
    } else {
      message.automount = false;
    }
    return message;
  },
};

const baseGroup: object = {
  token: "",
  name: "",
  manageusers: false,
  managerecordings: false,
  managemaps: false,
  managedevice: false,
  manageplugins: false,
  reboot: false,
  allrecordings: false,
  recordings: "",
};

export const Group = {
  encode(message: Group, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.manageusers === true) {
      writer.uint32(24).bool(message.manageusers);
    }
    if (message.managerecordings === true) {
      writer.uint32(32).bool(message.managerecordings);
    }
    if (message.managemaps === true) {
      writer.uint32(40).bool(message.managemaps);
    }
    if (message.managedevice === true) {
      writer.uint32(48).bool(message.managedevice);
    }
    if (message.manageplugins === true) {
      writer.uint32(56).bool(message.manageplugins);
    }
    if (message.reboot === true) {
      writer.uint32(64).bool(message.reboot);
    }
    if (message.allrecordings === true) {
      writer.uint32(72).bool(message.allrecordings);
    }
    for (const v of message.recordings) {
      writer.uint32(82).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Group {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGroup } as Group;
    message.recordings = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.manageusers = reader.bool();
          break;
        case 4:
          message.managerecordings = reader.bool();
          break;
        case 5:
          message.managemaps = reader.bool();
          break;
        case 6:
          message.managedevice = reader.bool();
          break;
        case 7:
          message.manageplugins = reader.bool();
          break;
        case 8:
          message.reboot = reader.bool();
          break;
        case 9:
          message.allrecordings = reader.bool();
          break;
        case 10:
          message.recordings.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Group {
    const message = { ...baseGroup } as Group;
    message.recordings = [];
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.manageusers !== undefined && object.manageusers !== null) {
      message.manageusers = Boolean(object.manageusers);
    } else {
      message.manageusers = false;
    }
    if (
      object.managerecordings !== undefined &&
      object.managerecordings !== null
    ) {
      message.managerecordings = Boolean(object.managerecordings);
    } else {
      message.managerecordings = false;
    }
    if (object.managemaps !== undefined && object.managemaps !== null) {
      message.managemaps = Boolean(object.managemaps);
    } else {
      message.managemaps = false;
    }
    if (object.managedevice !== undefined && object.managedevice !== null) {
      message.managedevice = Boolean(object.managedevice);
    } else {
      message.managedevice = false;
    }
    if (object.manageplugins !== undefined && object.manageplugins !== null) {
      message.manageplugins = Boolean(object.manageplugins);
    } else {
      message.manageplugins = false;
    }
    if (object.reboot !== undefined && object.reboot !== null) {
      message.reboot = Boolean(object.reboot);
    } else {
      message.reboot = false;
    }
    if (object.allrecordings !== undefined && object.allrecordings !== null) {
      message.allrecordings = Boolean(object.allrecordings);
    } else {
      message.allrecordings = false;
    }
    if (object.recordings !== undefined && object.recordings !== null) {
      for (const e of object.recordings) {
        message.recordings.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: Group): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    message.name !== undefined && (obj.name = message.name);
    message.manageusers !== undefined &&
      (obj.manageusers = message.manageusers);
    message.managerecordings !== undefined &&
      (obj.managerecordings = message.managerecordings);
    message.managemaps !== undefined && (obj.managemaps = message.managemaps);
    message.managedevice !== undefined &&
      (obj.managedevice = message.managedevice);
    message.manageplugins !== undefined &&
      (obj.manageplugins = message.manageplugins);
    message.reboot !== undefined && (obj.reboot = message.reboot);
    message.allrecordings !== undefined &&
      (obj.allrecordings = message.allrecordings);
    if (message.recordings) {
      obj.recordings = message.recordings.map((e) => e);
    } else {
      obj.recordings = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Group>): Group {
    const message = { ...baseGroup } as Group;
    message.recordings = [];
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.manageusers !== undefined && object.manageusers !== null) {
      message.manageusers = object.manageusers;
    } else {
      message.manageusers = false;
    }
    if (
      object.managerecordings !== undefined &&
      object.managerecordings !== null
    ) {
      message.managerecordings = object.managerecordings;
    } else {
      message.managerecordings = false;
    }
    if (object.managemaps !== undefined && object.managemaps !== null) {
      message.managemaps = object.managemaps;
    } else {
      message.managemaps = false;
    }
    if (object.managedevice !== undefined && object.managedevice !== null) {
      message.managedevice = object.managedevice;
    } else {
      message.managedevice = false;
    }
    if (object.manageplugins !== undefined && object.manageplugins !== null) {
      message.manageplugins = object.manageplugins;
    } else {
      message.manageplugins = false;
    }
    if (object.reboot !== undefined && object.reboot !== null) {
      message.reboot = object.reboot;
    } else {
      message.reboot = false;
    }
    if (object.allrecordings !== undefined && object.allrecordings !== null) {
      message.allrecordings = object.allrecordings;
    } else {
      message.allrecordings = false;
    }
    if (object.recordings !== undefined && object.recordings !== null) {
      for (const e of object.recordings) {
        message.recordings.push(e);
      }
    }
    return message;
  },
};

const baseIndex: object = { starttime: "0", endtime: "0" };

export const Index = {
  encode(message: Index, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.starttime !== "0") {
      writer.uint32(9).fixed64(message.starttime);
    }
    if (message.endtime !== "0") {
      writer.uint32(17).fixed64(message.endtime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Index {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIndex } as Index;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.starttime = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.endtime = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Index {
    const message = { ...baseIndex } as Index;
    if (object.starttime !== undefined && object.starttime !== null) {
      message.starttime = String(object.starttime);
    } else {
      message.starttime = "0";
    }
    if (object.endtime !== undefined && object.endtime !== null) {
      message.endtime = String(object.endtime);
    } else {
      message.endtime = "0";
    }
    return message;
  },

  toJSON(message: Index): unknown {
    const obj: any = {};
    message.starttime !== undefined && (obj.starttime = message.starttime);
    message.endtime !== undefined && (obj.endtime = message.endtime);
    return obj;
  },

  fromPartial(object: DeepPartial<Index>): Index {
    const message = { ...baseIndex } as Index;
    if (object.starttime !== undefined && object.starttime !== null) {
      message.starttime = object.starttime;
    } else {
      message.starttime = "0";
    }
    if (object.endtime !== undefined && object.endtime !== null) {
      message.endtime = object.endtime;
    } else {
      message.endtime = "0";
    }
    return message;
  },
};

const baseLogMessage: object = { time: "0", severity: 0, message: "" };

export const LogMessage = {
  encode(
    message: LogMessage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.time !== "0") {
      writer.uint32(9).fixed64(message.time);
    }
    if (message.severity !== 0) {
      writer.uint32(16).int32(message.severity);
    }
    if (message.message !== "") {
      writer.uint32(26).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LogMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLogMessage } as LogMessage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.severity = reader.int32() as any;
          break;
        case 3:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LogMessage {
    const message = { ...baseLogMessage } as LogMessage;
    if (object.time !== undefined && object.time !== null) {
      message.time = String(object.time);
    } else {
      message.time = "0";
    }
    if (object.severity !== undefined && object.severity !== null) {
      message.severity = severityFromJSON(object.severity);
    } else {
      message.severity = 0;
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = String(object.message);
    } else {
      message.message = "";
    }
    return message;
  },

  toJSON(message: LogMessage): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = message.time);
    message.severity !== undefined &&
      (obj.severity = severityToJSON(message.severity));
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial(object: DeepPartial<LogMessage>): LogMessage {
    const message = { ...baseLogMessage } as LogMessage;
    if (object.time !== undefined && object.time !== null) {
      message.time = object.time;
    } else {
      message.time = "0";
    }
    if (object.severity !== undefined && object.severity !== null) {
      message.severity = object.severity;
    } else {
      message.severity = 0;
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    } else {
      message.message = "";
    }
    return message;
  },
};

const baseMap: object = { token: "", name: "", location: "", md5: "" };

export const Map = {
  encode(message: Map, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.location !== "") {
      writer.uint32(26).string(message.location);
    }
    if (message.md5 !== "") {
      writer.uint32(34).string(message.md5);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Map {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMap } as Map;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.location = reader.string();
          break;
        case 4:
          message.md5 = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Map {
    const message = { ...baseMap } as Map;
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = String(object.location);
    } else {
      message.location = "";
    }
    if (object.md5 !== undefined && object.md5 !== null) {
      message.md5 = String(object.md5);
    } else {
      message.md5 = "";
    }
    return message;
  },

  toJSON(message: Map): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    message.name !== undefined && (obj.name = message.name);
    message.location !== undefined && (obj.location = message.location);
    message.md5 !== undefined && (obj.md5 = message.md5);
    return obj;
  },

  fromPartial(object: DeepPartial<Map>): Map {
    const message = { ...baseMap } as Map;
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = object.location;
    } else {
      message.location = "";
    }
    if (object.md5 !== undefined && object.md5 !== null) {
      message.md5 = object.md5;
    } else {
      message.md5 = "";
    }
    return message;
  },
};

const baseMount: object = {
  id: "0",
  parentid: "0",
  majorstdev: "0",
  minorstdev: "0",
  path: "",
  type: "",
  source: "",
};

export const Mount = {
  encode(message: Mount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "0") {
      writer.uint32(8).sint64(message.id);
    }
    if (message.parentid !== "0") {
      writer.uint32(16).sint64(message.parentid);
    }
    if (message.majorstdev !== "0") {
      writer.uint32(24).sint64(message.majorstdev);
    }
    if (message.minorstdev !== "0") {
      writer.uint32(32).sint64(message.minorstdev);
    }
    if (message.path !== "") {
      writer.uint32(42).string(message.path);
    }
    if (message.type !== "") {
      writer.uint32(50).string(message.type);
    }
    if (message.source !== "") {
      writer.uint32(58).string(message.source);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMount } as Mount;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToString(reader.sint64() as Long);
          break;
        case 2:
          message.parentid = longToString(reader.sint64() as Long);
          break;
        case 3:
          message.majorstdev = longToString(reader.sint64() as Long);
          break;
        case 4:
          message.minorstdev = longToString(reader.sint64() as Long);
          break;
        case 5:
          message.path = reader.string();
          break;
        case 6:
          message.type = reader.string();
          break;
        case 7:
          message.source = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Mount {
    const message = { ...baseMount } as Mount;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "0";
    }
    if (object.parentid !== undefined && object.parentid !== null) {
      message.parentid = String(object.parentid);
    } else {
      message.parentid = "0";
    }
    if (object.majorstdev !== undefined && object.majorstdev !== null) {
      message.majorstdev = String(object.majorstdev);
    } else {
      message.majorstdev = "0";
    }
    if (object.minorstdev !== undefined && object.minorstdev !== null) {
      message.minorstdev = String(object.minorstdev);
    } else {
      message.minorstdev = "0";
    }
    if (object.path !== undefined && object.path !== null) {
      message.path = String(object.path);
    } else {
      message.path = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = "";
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = String(object.source);
    } else {
      message.source = "";
    }
    return message;
  },

  toJSON(message: Mount): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.parentid !== undefined && (obj.parentid = message.parentid);
    message.majorstdev !== undefined && (obj.majorstdev = message.majorstdev);
    message.minorstdev !== undefined && (obj.minorstdev = message.minorstdev);
    message.path !== undefined && (obj.path = message.path);
    message.type !== undefined && (obj.type = message.type);
    message.source !== undefined && (obj.source = message.source);
    return obj;
  },

  fromPartial(object: DeepPartial<Mount>): Mount {
    const message = { ...baseMount } as Mount;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "0";
    }
    if (object.parentid !== undefined && object.parentid !== null) {
      message.parentid = object.parentid;
    } else {
      message.parentid = "0";
    }
    if (object.majorstdev !== undefined && object.majorstdev !== null) {
      message.majorstdev = object.majorstdev;
    } else {
      message.majorstdev = "0";
    }
    if (object.minorstdev !== undefined && object.minorstdev !== null) {
      message.minorstdev = object.minorstdev;
    } else {
      message.minorstdev = "0";
    }
    if (object.path !== undefined && object.path !== null) {
      message.path = object.path;
    } else {
      message.path = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = "";
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    } else {
      message.source = "";
    }
    return message;
  },
};

const baseONVIFUser: object = { token: "", username: "", onvifuserlevel: 0 };

export const ONVIFUser = {
  encode(
    message: ONVIFUser,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.username !== "") {
      writer.uint32(18).string(message.username);
    }
    if (message.onvifuserlevel !== 0) {
      writer.uint32(24).int32(message.onvifuserlevel);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ONVIFUser {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseONVIFUser } as ONVIFUser;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        case 2:
          message.username = reader.string();
          break;
        case 3:
          message.onvifuserlevel = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ONVIFUser {
    const message = { ...baseONVIFUser } as ONVIFUser;
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    if (object.username !== undefined && object.username !== null) {
      message.username = String(object.username);
    } else {
      message.username = "";
    }
    if (object.onvifuserlevel !== undefined && object.onvifuserlevel !== null) {
      message.onvifuserlevel = oNVIFUserLevelFromJSON(object.onvifuserlevel);
    } else {
      message.onvifuserlevel = 0;
    }
    return message;
  },

  toJSON(message: ONVIFUser): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    message.username !== undefined && (obj.username = message.username);
    message.onvifuserlevel !== undefined &&
      (obj.onvifuserlevel = oNVIFUserLevelToJSON(message.onvifuserlevel));
    return obj;
  },

  fromPartial(object: DeepPartial<ONVIFUser>): ONVIFUser {
    const message = { ...baseONVIFUser } as ONVIFUser;
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    if (object.username !== undefined && object.username !== null) {
      message.username = object.username;
    } else {
      message.username = "";
    }
    if (object.onvifuserlevel !== undefined && object.onvifuserlevel !== null) {
      message.onvifuserlevel = object.onvifuserlevel;
    } else {
      message.onvifuserlevel = 0;
    }
    return message;
  },
};

const basePlugin: object = {
  token: "",
  name: "",
  enabled: false,
  parameters: "",
  priority: "0",
  state: 0,
  statemessage: "",
};

export const Plugin = {
  encode(
    message: Plugin,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.enabled === true) {
      writer.uint32(24).bool(message.enabled);
    }
    if (message.parameters !== "") {
      writer.uint32(34).string(message.parameters);
    }
    if (message.priority !== "0") {
      writer.uint32(41).fixed64(message.priority);
    }
    if (message.state !== 0) {
      writer.uint32(48).int32(message.state);
    }
    if (message.statemessage !== "") {
      writer.uint32(58).string(message.statemessage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Plugin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePlugin } as Plugin;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.enabled = reader.bool();
          break;
        case 4:
          message.parameters = reader.string();
          break;
        case 5:
          message.priority = longToString(reader.fixed64() as Long);
          break;
        case 6:
          message.state = reader.int32() as any;
          break;
        case 7:
          message.statemessage = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Plugin {
    const message = { ...basePlugin } as Plugin;
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = Boolean(object.enabled);
    } else {
      message.enabled = false;
    }
    if (object.parameters !== undefined && object.parameters !== null) {
      message.parameters = String(object.parameters);
    } else {
      message.parameters = "";
    }
    if (object.priority !== undefined && object.priority !== null) {
      message.priority = String(object.priority);
    } else {
      message.priority = "0";
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = pluginStateFromJSON(object.state);
    } else {
      message.state = 0;
    }
    if (object.statemessage !== undefined && object.statemessage !== null) {
      message.statemessage = String(object.statemessage);
    } else {
      message.statemessage = "";
    }
    return message;
  },

  toJSON(message: Plugin): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    message.name !== undefined && (obj.name = message.name);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.parameters !== undefined && (obj.parameters = message.parameters);
    message.priority !== undefined && (obj.priority = message.priority);
    message.state !== undefined &&
      (obj.state = pluginStateToJSON(message.state));
    message.statemessage !== undefined &&
      (obj.statemessage = message.statemessage);
    return obj;
  },

  fromPartial(object: DeepPartial<Plugin>): Plugin {
    const message = { ...basePlugin } as Plugin;
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    } else {
      message.enabled = false;
    }
    if (object.parameters !== undefined && object.parameters !== null) {
      message.parameters = object.parameters;
    } else {
      message.parameters = "";
    }
    if (object.priority !== undefined && object.priority !== null) {
      message.priority = object.priority;
    } else {
      message.priority = "0";
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    } else {
      message.state = 0;
    }
    if (object.statemessage !== undefined && object.statemessage !== null) {
      message.statemessage = object.statemessage;
    } else {
      message.statemessage = "";
    }
    return message;
  },
};

const baseReceiver: object = {
  token: "",
  mode: 0,
  uri: "",
  autocreated: false,
  username: "",
  password: "",
  parameters: "",
};

export const Receiver = {
  encode(
    message: Receiver,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.mode !== 0) {
      writer.uint32(16).int32(message.mode);
    }
    if (message.uri !== "") {
      writer.uint32(26).string(message.uri);
    }
    if (message.autocreated === true) {
      writer.uint32(32).bool(message.autocreated);
    }
    if (message.username !== "") {
      writer.uint32(42).string(message.username);
    }
    if (message.password !== "") {
      writer.uint32(50).string(message.password);
    }
    for (const v of message.parameters) {
      writer.uint32(58).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Receiver {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseReceiver } as Receiver;
    message.parameters = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        case 2:
          message.mode = reader.int32() as any;
          break;
        case 3:
          message.uri = reader.string();
          break;
        case 4:
          message.autocreated = reader.bool();
          break;
        case 5:
          message.username = reader.string();
          break;
        case 6:
          message.password = reader.string();
          break;
        case 7:
          message.parameters.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Receiver {
    const message = { ...baseReceiver } as Receiver;
    message.parameters = [];
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    if (object.mode !== undefined && object.mode !== null) {
      message.mode = receiverModeFromJSON(object.mode);
    } else {
      message.mode = 0;
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = String(object.uri);
    } else {
      message.uri = "";
    }
    if (object.autocreated !== undefined && object.autocreated !== null) {
      message.autocreated = Boolean(object.autocreated);
    } else {
      message.autocreated = false;
    }
    if (object.username !== undefined && object.username !== null) {
      message.username = String(object.username);
    } else {
      message.username = "";
    }
    if (object.password !== undefined && object.password !== null) {
      message.password = String(object.password);
    } else {
      message.password = "";
    }
    if (object.parameters !== undefined && object.parameters !== null) {
      for (const e of object.parameters) {
        message.parameters.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: Receiver): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    message.mode !== undefined && (obj.mode = receiverModeToJSON(message.mode));
    message.uri !== undefined && (obj.uri = message.uri);
    message.autocreated !== undefined &&
      (obj.autocreated = message.autocreated);
    message.username !== undefined && (obj.username = message.username);
    message.password !== undefined && (obj.password = message.password);
    if (message.parameters) {
      obj.parameters = message.parameters.map((e) => e);
    } else {
      obj.parameters = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Receiver>): Receiver {
    const message = { ...baseReceiver } as Receiver;
    message.parameters = [];
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    if (object.mode !== undefined && object.mode !== null) {
      message.mode = object.mode;
    } else {
      message.mode = 0;
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = object.uri;
    } else {
      message.uri = "";
    }
    if (object.autocreated !== undefined && object.autocreated !== null) {
      message.autocreated = object.autocreated;
    } else {
      message.autocreated = false;
    }
    if (object.username !== undefined && object.username !== null) {
      message.username = object.username;
    } else {
      message.username = "";
    }
    if (object.password !== undefined && object.password !== null) {
      message.password = object.password;
    } else {
      message.password = "";
    }
    if (object.parameters !== undefined && object.parameters !== null) {
      for (const e of object.parameters) {
        message.parameters.push(e);
      }
    }
    return message;
  },
};

const baseRecording: object = {
  token: "",
  sourceid: "",
  name: "",
  location: "",
  description: "",
  address: "",
  content: "",
  retentiontime: "0",
  adaptivestreaming: false,
  relativelocation: false,
  orientation: 0,
};

export const Recording = {
  encode(
    message: Recording,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.sourceid !== "") {
      writer.uint32(18).string(message.sourceid);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.location !== "") {
      writer.uint32(34).string(message.location);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.address !== "") {
      writer.uint32(50).string(message.address);
    }
    if (message.content !== "") {
      writer.uint32(58).string(message.content);
    }
    if (message.retentiontime !== "0") {
      writer.uint32(65).fixed64(message.retentiontime);
    }
    if (message.adaptivestreaming === true) {
      writer.uint32(72).bool(message.adaptivestreaming);
    }
    if (message.relativelocation === true) {
      writer.uint32(80).bool(message.relativelocation);
    }
    if (message.orientation !== 0) {
      writer.uint32(89).double(message.orientation);
    }
    for (const v of message.jobs) {
      RecordingJob.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.tracks) {
      RecordingTrack.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    if (message.latitude !== undefined) {
      DoubleValue.encode(
        { value: message.latitude! },
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.longitude !== undefined) {
      DoubleValue.encode(
        { value: message.longitude! },
        writer.uint32(122).fork()
      ).ldelim();
    }
    if (message.activejob !== undefined) {
      UInt64Value.encode(
        { value: message.activejob! },
        writer.uint32(130).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Recording {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRecording } as Recording;
    message.jobs = [];
    message.tracks = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        case 2:
          message.sourceid = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.location = reader.string();
          break;
        case 5:
          message.description = reader.string();
          break;
        case 6:
          message.address = reader.string();
          break;
        case 7:
          message.content = reader.string();
          break;
        case 8:
          message.retentiontime = longToString(reader.fixed64() as Long);
          break;
        case 9:
          message.adaptivestreaming = reader.bool();
          break;
        case 10:
          message.relativelocation = reader.bool();
          break;
        case 11:
          message.orientation = reader.double();
          break;
        case 12:
          message.jobs.push(RecordingJob.decode(reader, reader.uint32()));
          break;
        case 13:
          message.tracks.push(RecordingTrack.decode(reader, reader.uint32()));
          break;
        case 14:
          message.latitude = DoubleValue.decode(reader, reader.uint32()).value;
          break;
        case 15:
          message.longitude = DoubleValue.decode(reader, reader.uint32()).value;
          break;
        case 16:
          message.activejob = UInt64Value.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Recording {
    const message = { ...baseRecording } as Recording;
    message.jobs = [];
    message.tracks = [];
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    if (object.sourceid !== undefined && object.sourceid !== null) {
      message.sourceid = String(object.sourceid);
    } else {
      message.sourceid = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = String(object.location);
    } else {
      message.location = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = String(object.content);
    } else {
      message.content = "";
    }
    if (object.retentiontime !== undefined && object.retentiontime !== null) {
      message.retentiontime = String(object.retentiontime);
    } else {
      message.retentiontime = "0";
    }
    if (
      object.adaptivestreaming !== undefined &&
      object.adaptivestreaming !== null
    ) {
      message.adaptivestreaming = Boolean(object.adaptivestreaming);
    } else {
      message.adaptivestreaming = false;
    }
    if (
      object.relativelocation !== undefined &&
      object.relativelocation !== null
    ) {
      message.relativelocation = Boolean(object.relativelocation);
    } else {
      message.relativelocation = false;
    }
    if (object.orientation !== undefined && object.orientation !== null) {
      message.orientation = Number(object.orientation);
    } else {
      message.orientation = 0;
    }
    if (object.jobs !== undefined && object.jobs !== null) {
      for (const e of object.jobs) {
        message.jobs.push(RecordingJob.fromJSON(e));
      }
    }
    if (object.tracks !== undefined && object.tracks !== null) {
      for (const e of object.tracks) {
        message.tracks.push(RecordingTrack.fromJSON(e));
      }
    }
    if (object.latitude !== undefined && object.latitude !== null) {
      message.latitude = Number(object.latitude);
    } else {
      message.latitude = undefined;
    }
    if (object.longitude !== undefined && object.longitude !== null) {
      message.longitude = Number(object.longitude);
    } else {
      message.longitude = undefined;
    }
    if (object.activejob !== undefined && object.activejob !== null) {
      message.activejob = String(object.activejob);
    } else {
      message.activejob = undefined;
    }
    return message;
  },

  toJSON(message: Recording): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    message.sourceid !== undefined && (obj.sourceid = message.sourceid);
    message.name !== undefined && (obj.name = message.name);
    message.location !== undefined && (obj.location = message.location);
    message.description !== undefined &&
      (obj.description = message.description);
    message.address !== undefined && (obj.address = message.address);
    message.content !== undefined && (obj.content = message.content);
    message.retentiontime !== undefined &&
      (obj.retentiontime = message.retentiontime);
    message.adaptivestreaming !== undefined &&
      (obj.adaptivestreaming = message.adaptivestreaming);
    message.relativelocation !== undefined &&
      (obj.relativelocation = message.relativelocation);
    message.orientation !== undefined &&
      (obj.orientation = message.orientation);
    if (message.jobs) {
      obj.jobs = message.jobs.map((e) =>
        e ? RecordingJob.toJSON(e) : undefined
      );
    } else {
      obj.jobs = [];
    }
    if (message.tracks) {
      obj.tracks = message.tracks.map((e) =>
        e ? RecordingTrack.toJSON(e) : undefined
      );
    } else {
      obj.tracks = [];
    }
    message.latitude !== undefined && (obj.latitude = message.latitude);
    message.longitude !== undefined && (obj.longitude = message.longitude);
    message.activejob !== undefined && (obj.activejob = message.activejob);
    return obj;
  },

  fromPartial(object: DeepPartial<Recording>): Recording {
    const message = { ...baseRecording } as Recording;
    message.jobs = [];
    message.tracks = [];
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    if (object.sourceid !== undefined && object.sourceid !== null) {
      message.sourceid = object.sourceid;
    } else {
      message.sourceid = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = object.location;
    } else {
      message.location = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = object.content;
    } else {
      message.content = "";
    }
    if (object.retentiontime !== undefined && object.retentiontime !== null) {
      message.retentiontime = object.retentiontime;
    } else {
      message.retentiontime = "0";
    }
    if (
      object.adaptivestreaming !== undefined &&
      object.adaptivestreaming !== null
    ) {
      message.adaptivestreaming = object.adaptivestreaming;
    } else {
      message.adaptivestreaming = false;
    }
    if (
      object.relativelocation !== undefined &&
      object.relativelocation !== null
    ) {
      message.relativelocation = object.relativelocation;
    } else {
      message.relativelocation = false;
    }
    if (object.orientation !== undefined && object.orientation !== null) {
      message.orientation = object.orientation;
    } else {
      message.orientation = 0;
    }
    if (object.jobs !== undefined && object.jobs !== null) {
      for (const e of object.jobs) {
        message.jobs.push(RecordingJob.fromPartial(e));
      }
    }
    if (object.tracks !== undefined && object.tracks !== null) {
      for (const e of object.tracks) {
        message.tracks.push(RecordingTrack.fromPartial(e));
      }
    }
    if (object.latitude !== undefined && object.latitude !== null) {
      message.latitude = object.latitude;
    } else {
      message.latitude = undefined;
    }
    if (object.longitude !== undefined && object.longitude !== null) {
      message.longitude = object.longitude;
    } else {
      message.longitude = undefined;
    }
    if (object.activejob !== undefined && object.activejob !== null) {
      message.activejob = object.activejob;
    } else {
      message.activejob = undefined;
    }
    return message;
  },
};

const baseRecordingJob: object = {
  recordingtoken: "",
  recordingjobtoken: "",
  name: "",
  enabled: false,
  priority: "0",
};

export const RecordingJob = {
  encode(
    message: RecordingJob,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.recordingtoken !== "") {
      writer.uint32(10).string(message.recordingtoken);
    }
    if (message.recordingjobtoken !== "") {
      writer.uint32(18).string(message.recordingjobtoken);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.enabled === true) {
      writer.uint32(32).bool(message.enabled);
    }
    if (message.priority !== "0") {
      writer.uint32(41).fixed64(message.priority);
    }
    for (const v of message.recordingjobsources) {
      RecordingJobSource.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecordingJob {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRecordingJob } as RecordingJob;
    message.recordingjobsources = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recordingtoken = reader.string();
          break;
        case 2:
          message.recordingjobtoken = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.enabled = reader.bool();
          break;
        case 5:
          message.priority = longToString(reader.fixed64() as Long);
          break;
        case 6:
          message.recordingjobsources.push(
            RecordingJobSource.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RecordingJob {
    const message = { ...baseRecordingJob } as RecordingJob;
    message.recordingjobsources = [];
    if (object.recordingtoken !== undefined && object.recordingtoken !== null) {
      message.recordingtoken = String(object.recordingtoken);
    } else {
      message.recordingtoken = "";
    }
    if (
      object.recordingjobtoken !== undefined &&
      object.recordingjobtoken !== null
    ) {
      message.recordingjobtoken = String(object.recordingjobtoken);
    } else {
      message.recordingjobtoken = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = Boolean(object.enabled);
    } else {
      message.enabled = false;
    }
    if (object.priority !== undefined && object.priority !== null) {
      message.priority = String(object.priority);
    } else {
      message.priority = "0";
    }
    if (
      object.recordingjobsources !== undefined &&
      object.recordingjobsources !== null
    ) {
      for (const e of object.recordingjobsources) {
        message.recordingjobsources.push(RecordingJobSource.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: RecordingJob): unknown {
    const obj: any = {};
    message.recordingtoken !== undefined &&
      (obj.recordingtoken = message.recordingtoken);
    message.recordingjobtoken !== undefined &&
      (obj.recordingjobtoken = message.recordingjobtoken);
    message.name !== undefined && (obj.name = message.name);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.priority !== undefined && (obj.priority = message.priority);
    if (message.recordingjobsources) {
      obj.recordingjobsources = message.recordingjobsources.map((e) =>
        e ? RecordingJobSource.toJSON(e) : undefined
      );
    } else {
      obj.recordingjobsources = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<RecordingJob>): RecordingJob {
    const message = { ...baseRecordingJob } as RecordingJob;
    message.recordingjobsources = [];
    if (object.recordingtoken !== undefined && object.recordingtoken !== null) {
      message.recordingtoken = object.recordingtoken;
    } else {
      message.recordingtoken = "";
    }
    if (
      object.recordingjobtoken !== undefined &&
      object.recordingjobtoken !== null
    ) {
      message.recordingjobtoken = object.recordingjobtoken;
    } else {
      message.recordingjobtoken = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    } else {
      message.enabled = false;
    }
    if (object.priority !== undefined && object.priority !== null) {
      message.priority = object.priority;
    } else {
      message.priority = "0";
    }
    if (
      object.recordingjobsources !== undefined &&
      object.recordingjobsources !== null
    ) {
      for (const e of object.recordingjobsources) {
        message.recordingjobsources.push(RecordingJobSource.fromPartial(e));
      }
    }
    return message;
  },
};

const baseRecordingJobSource: object = {
  recordingtoken: "",
  recordingjobtoken: "",
  recordingjobsourcetoken: "",
  receivertoken: "",
};

export const RecordingJobSource = {
  encode(
    message: RecordingJobSource,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.recordingtoken !== "") {
      writer.uint32(10).string(message.recordingtoken);
    }
    if (message.recordingjobtoken !== "") {
      writer.uint32(18).string(message.recordingjobtoken);
    }
    if (message.recordingjobsourcetoken !== "") {
      writer.uint32(26).string(message.recordingjobsourcetoken);
    }
    if (message.receivertoken !== "") {
      writer.uint32(34).string(message.receivertoken);
    }
    for (const v of message.recordingjobsourcetracks) {
      RecordingJobSourceTrack.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecordingJobSource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRecordingJobSource } as RecordingJobSource;
    message.recordingjobsourcetracks = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recordingtoken = reader.string();
          break;
        case 2:
          message.recordingjobtoken = reader.string();
          break;
        case 3:
          message.recordingjobsourcetoken = reader.string();
          break;
        case 4:
          message.receivertoken = reader.string();
          break;
        case 5:
          message.recordingjobsourcetracks.push(
            RecordingJobSourceTrack.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RecordingJobSource {
    const message = { ...baseRecordingJobSource } as RecordingJobSource;
    message.recordingjobsourcetracks = [];
    if (object.recordingtoken !== undefined && object.recordingtoken !== null) {
      message.recordingtoken = String(object.recordingtoken);
    } else {
      message.recordingtoken = "";
    }
    if (
      object.recordingjobtoken !== undefined &&
      object.recordingjobtoken !== null
    ) {
      message.recordingjobtoken = String(object.recordingjobtoken);
    } else {
      message.recordingjobtoken = "";
    }
    if (
      object.recordingjobsourcetoken !== undefined &&
      object.recordingjobsourcetoken !== null
    ) {
      message.recordingjobsourcetoken = String(object.recordingjobsourcetoken);
    } else {
      message.recordingjobsourcetoken = "";
    }
    if (object.receivertoken !== undefined && object.receivertoken !== null) {
      message.receivertoken = String(object.receivertoken);
    } else {
      message.receivertoken = "";
    }
    if (
      object.recordingjobsourcetracks !== undefined &&
      object.recordingjobsourcetracks !== null
    ) {
      for (const e of object.recordingjobsourcetracks) {
        message.recordingjobsourcetracks.push(
          RecordingJobSourceTrack.fromJSON(e)
        );
      }
    }
    return message;
  },

  toJSON(message: RecordingJobSource): unknown {
    const obj: any = {};
    message.recordingtoken !== undefined &&
      (obj.recordingtoken = message.recordingtoken);
    message.recordingjobtoken !== undefined &&
      (obj.recordingjobtoken = message.recordingjobtoken);
    message.recordingjobsourcetoken !== undefined &&
      (obj.recordingjobsourcetoken = message.recordingjobsourcetoken);
    message.receivertoken !== undefined &&
      (obj.receivertoken = message.receivertoken);
    if (message.recordingjobsourcetracks) {
      obj.recordingjobsourcetracks = message.recordingjobsourcetracks.map((e) =>
        e ? RecordingJobSourceTrack.toJSON(e) : undefined
      );
    } else {
      obj.recordingjobsourcetracks = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<RecordingJobSource>): RecordingJobSource {
    const message = { ...baseRecordingJobSource } as RecordingJobSource;
    message.recordingjobsourcetracks = [];
    if (object.recordingtoken !== undefined && object.recordingtoken !== null) {
      message.recordingtoken = object.recordingtoken;
    } else {
      message.recordingtoken = "";
    }
    if (
      object.recordingjobtoken !== undefined &&
      object.recordingjobtoken !== null
    ) {
      message.recordingjobtoken = object.recordingjobtoken;
    } else {
      message.recordingjobtoken = "";
    }
    if (
      object.recordingjobsourcetoken !== undefined &&
      object.recordingjobsourcetoken !== null
    ) {
      message.recordingjobsourcetoken = object.recordingjobsourcetoken;
    } else {
      message.recordingjobsourcetoken = "";
    }
    if (object.receivertoken !== undefined && object.receivertoken !== null) {
      message.receivertoken = object.receivertoken;
    } else {
      message.receivertoken = "";
    }
    if (
      object.recordingjobsourcetracks !== undefined &&
      object.recordingjobsourcetracks !== null
    ) {
      for (const e of object.recordingjobsourcetracks) {
        message.recordingjobsourcetracks.push(
          RecordingJobSourceTrack.fromPartial(e)
        );
      }
    }
    return message;
  },
};

const baseRecordingJobSourceTrack: object = {
  recordingtoken: "",
  recordingjobtoken: "",
  recordingjobsourcetoken: "",
  recordingjobsourcetracktoken: "",
  recordingtrackid: 0,
  parameters: "",
  state: 0,
  error: "",
  activeparameters: "",
};

export const RecordingJobSourceTrack = {
  encode(
    message: RecordingJobSourceTrack,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.recordingtoken !== "") {
      writer.uint32(10).string(message.recordingtoken);
    }
    if (message.recordingjobtoken !== "") {
      writer.uint32(18).string(message.recordingjobtoken);
    }
    if (message.recordingjobsourcetoken !== "") {
      writer.uint32(26).string(message.recordingjobsourcetoken);
    }
    if (message.recordingjobsourcetracktoken !== "") {
      writer.uint32(34).string(message.recordingjobsourcetracktoken);
    }
    if (message.recordingtrackid !== 0) {
      writer.uint32(45).fixed32(message.recordingtrackid);
    }
    for (const v of message.parameters) {
      writer.uint32(50).string(v!);
    }
    if (message.state !== 0) {
      writer.uint32(56).int32(message.state);
    }
    if (message.error !== "") {
      writer.uint32(66).string(message.error);
    }
    for (const v of message.activeparameters) {
      writer.uint32(74).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RecordingJobSourceTrack {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRecordingJobSourceTrack,
    } as RecordingJobSourceTrack;
    message.parameters = [];
    message.activeparameters = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recordingtoken = reader.string();
          break;
        case 2:
          message.recordingjobtoken = reader.string();
          break;
        case 3:
          message.recordingjobsourcetoken = reader.string();
          break;
        case 4:
          message.recordingjobsourcetracktoken = reader.string();
          break;
        case 5:
          message.recordingtrackid = reader.fixed32();
          break;
        case 6:
          message.parameters.push(reader.string());
          break;
        case 7:
          message.state = reader.int32() as any;
          break;
        case 8:
          message.error = reader.string();
          break;
        case 9:
          message.activeparameters.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RecordingJobSourceTrack {
    const message = {
      ...baseRecordingJobSourceTrack,
    } as RecordingJobSourceTrack;
    message.parameters = [];
    message.activeparameters = [];
    if (object.recordingtoken !== undefined && object.recordingtoken !== null) {
      message.recordingtoken = String(object.recordingtoken);
    } else {
      message.recordingtoken = "";
    }
    if (
      object.recordingjobtoken !== undefined &&
      object.recordingjobtoken !== null
    ) {
      message.recordingjobtoken = String(object.recordingjobtoken);
    } else {
      message.recordingjobtoken = "";
    }
    if (
      object.recordingjobsourcetoken !== undefined &&
      object.recordingjobsourcetoken !== null
    ) {
      message.recordingjobsourcetoken = String(object.recordingjobsourcetoken);
    } else {
      message.recordingjobsourcetoken = "";
    }
    if (
      object.recordingjobsourcetracktoken !== undefined &&
      object.recordingjobsourcetracktoken !== null
    ) {
      message.recordingjobsourcetracktoken = String(
        object.recordingjobsourcetracktoken
      );
    } else {
      message.recordingjobsourcetracktoken = "";
    }
    if (
      object.recordingtrackid !== undefined &&
      object.recordingtrackid !== null
    ) {
      message.recordingtrackid = Number(object.recordingtrackid);
    } else {
      message.recordingtrackid = 0;
    }
    if (object.parameters !== undefined && object.parameters !== null) {
      for (const e of object.parameters) {
        message.parameters.push(String(e));
      }
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = recordingJobStateFromJSON(object.state);
    } else {
      message.state = 0;
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = String(object.error);
    } else {
      message.error = "";
    }
    if (
      object.activeparameters !== undefined &&
      object.activeparameters !== null
    ) {
      for (const e of object.activeparameters) {
        message.activeparameters.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: RecordingJobSourceTrack): unknown {
    const obj: any = {};
    message.recordingtoken !== undefined &&
      (obj.recordingtoken = message.recordingtoken);
    message.recordingjobtoken !== undefined &&
      (obj.recordingjobtoken = message.recordingjobtoken);
    message.recordingjobsourcetoken !== undefined &&
      (obj.recordingjobsourcetoken = message.recordingjobsourcetoken);
    message.recordingjobsourcetracktoken !== undefined &&
      (obj.recordingjobsourcetracktoken = message.recordingjobsourcetracktoken);
    message.recordingtrackid !== undefined &&
      (obj.recordingtrackid = message.recordingtrackid);
    if (message.parameters) {
      obj.parameters = message.parameters.map((e) => e);
    } else {
      obj.parameters = [];
    }
    message.state !== undefined &&
      (obj.state = recordingJobStateToJSON(message.state));
    message.error !== undefined && (obj.error = message.error);
    if (message.activeparameters) {
      obj.activeparameters = message.activeparameters.map((e) => e);
    } else {
      obj.activeparameters = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<RecordingJobSourceTrack>
  ): RecordingJobSourceTrack {
    const message = {
      ...baseRecordingJobSourceTrack,
    } as RecordingJobSourceTrack;
    message.parameters = [];
    message.activeparameters = [];
    if (object.recordingtoken !== undefined && object.recordingtoken !== null) {
      message.recordingtoken = object.recordingtoken;
    } else {
      message.recordingtoken = "";
    }
    if (
      object.recordingjobtoken !== undefined &&
      object.recordingjobtoken !== null
    ) {
      message.recordingjobtoken = object.recordingjobtoken;
    } else {
      message.recordingjobtoken = "";
    }
    if (
      object.recordingjobsourcetoken !== undefined &&
      object.recordingjobsourcetoken !== null
    ) {
      message.recordingjobsourcetoken = object.recordingjobsourcetoken;
    } else {
      message.recordingjobsourcetoken = "";
    }
    if (
      object.recordingjobsourcetracktoken !== undefined &&
      object.recordingjobsourcetracktoken !== null
    ) {
      message.recordingjobsourcetracktoken =
        object.recordingjobsourcetracktoken;
    } else {
      message.recordingjobsourcetracktoken = "";
    }
    if (
      object.recordingtrackid !== undefined &&
      object.recordingtrackid !== null
    ) {
      message.recordingtrackid = object.recordingtrackid;
    } else {
      message.recordingtrackid = 0;
    }
    if (object.parameters !== undefined && object.parameters !== null) {
      for (const e of object.parameters) {
        message.parameters.push(e);
      }
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    } else {
      message.state = 0;
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    } else {
      message.error = "";
    }
    if (
      object.activeparameters !== undefined &&
      object.activeparameters !== null
    ) {
      for (const e of object.activeparameters) {
        message.activeparameters.push(e);
      }
    }
    return message;
  },
};

const baseRecordingTrack: object = {
  recordingtoken: "",
  recordingtrackid: 0,
  token: "",
  tracktype: 0,
  description: "",
  fixedfiles: false,
  digitalsigning: false,
  encrypt: false,
  flushfrequency: 0,
  files: "",
};

export const RecordingTrack = {
  encode(
    message: RecordingTrack,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.recordingtoken !== "") {
      writer.uint32(10).string(message.recordingtoken);
    }
    if (message.recordingtrackid !== 0) {
      writer.uint32(21).fixed32(message.recordingtrackid);
    }
    if (message.token !== "") {
      writer.uint32(26).string(message.token);
    }
    if (message.tracktype !== 0) {
      writer.uint32(32).int32(message.tracktype);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.fixedfiles === true) {
      writer.uint32(48).bool(message.fixedfiles);
    }
    if (message.digitalsigning === true) {
      writer.uint32(56).bool(message.digitalsigning);
    }
    if (message.encrypt === true) {
      writer.uint32(64).bool(message.encrypt);
    }
    if (message.flushfrequency !== 0) {
      writer.uint32(77).fixed32(message.flushfrequency);
    }
    for (const v of message.files) {
      writer.uint32(82).string(v!);
    }
    for (const v of message.indices) {
      Index.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.totaltrackdata) {
      TrackData.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecordingTrack {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRecordingTrack } as RecordingTrack;
    message.files = [];
    message.indices = [];
    message.totaltrackdata = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recordingtoken = reader.string();
          break;
        case 2:
          message.recordingtrackid = reader.fixed32();
          break;
        case 3:
          message.token = reader.string();
          break;
        case 4:
          message.tracktype = reader.int32() as any;
          break;
        case 5:
          message.description = reader.string();
          break;
        case 6:
          message.fixedfiles = reader.bool();
          break;
        case 7:
          message.digitalsigning = reader.bool();
          break;
        case 8:
          message.encrypt = reader.bool();
          break;
        case 9:
          message.flushfrequency = reader.fixed32();
          break;
        case 10:
          message.files.push(reader.string());
          break;
        case 11:
          message.indices.push(Index.decode(reader, reader.uint32()));
          break;
        case 12:
          message.totaltrackdata.push(
            TrackData.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RecordingTrack {
    const message = { ...baseRecordingTrack } as RecordingTrack;
    message.files = [];
    message.indices = [];
    message.totaltrackdata = [];
    if (object.recordingtoken !== undefined && object.recordingtoken !== null) {
      message.recordingtoken = String(object.recordingtoken);
    } else {
      message.recordingtoken = "";
    }
    if (
      object.recordingtrackid !== undefined &&
      object.recordingtrackid !== null
    ) {
      message.recordingtrackid = Number(object.recordingtrackid);
    } else {
      message.recordingtrackid = 0;
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    if (object.tracktype !== undefined && object.tracktype !== null) {
      message.tracktype = trackTypeFromJSON(object.tracktype);
    } else {
      message.tracktype = 0;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.fixedfiles !== undefined && object.fixedfiles !== null) {
      message.fixedfiles = Boolean(object.fixedfiles);
    } else {
      message.fixedfiles = false;
    }
    if (object.digitalsigning !== undefined && object.digitalsigning !== null) {
      message.digitalsigning = Boolean(object.digitalsigning);
    } else {
      message.digitalsigning = false;
    }
    if (object.encrypt !== undefined && object.encrypt !== null) {
      message.encrypt = Boolean(object.encrypt);
    } else {
      message.encrypt = false;
    }
    if (object.flushfrequency !== undefined && object.flushfrequency !== null) {
      message.flushfrequency = Number(object.flushfrequency);
    } else {
      message.flushfrequency = 0;
    }
    if (object.files !== undefined && object.files !== null) {
      for (const e of object.files) {
        message.files.push(String(e));
      }
    }
    if (object.indices !== undefined && object.indices !== null) {
      for (const e of object.indices) {
        message.indices.push(Index.fromJSON(e));
      }
    }
    if (object.totaltrackdata !== undefined && object.totaltrackdata !== null) {
      for (const e of object.totaltrackdata) {
        message.totaltrackdata.push(TrackData.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: RecordingTrack): unknown {
    const obj: any = {};
    message.recordingtoken !== undefined &&
      (obj.recordingtoken = message.recordingtoken);
    message.recordingtrackid !== undefined &&
      (obj.recordingtrackid = message.recordingtrackid);
    message.token !== undefined && (obj.token = message.token);
    message.tracktype !== undefined &&
      (obj.tracktype = trackTypeToJSON(message.tracktype));
    message.description !== undefined &&
      (obj.description = message.description);
    message.fixedfiles !== undefined && (obj.fixedfiles = message.fixedfiles);
    message.digitalsigning !== undefined &&
      (obj.digitalsigning = message.digitalsigning);
    message.encrypt !== undefined && (obj.encrypt = message.encrypt);
    message.flushfrequency !== undefined &&
      (obj.flushfrequency = message.flushfrequency);
    if (message.files) {
      obj.files = message.files.map((e) => e);
    } else {
      obj.files = [];
    }
    if (message.indices) {
      obj.indices = message.indices.map((e) =>
        e ? Index.toJSON(e) : undefined
      );
    } else {
      obj.indices = [];
    }
    if (message.totaltrackdata) {
      obj.totaltrackdata = message.totaltrackdata.map((e) =>
        e ? TrackData.toJSON(e) : undefined
      );
    } else {
      obj.totaltrackdata = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<RecordingTrack>): RecordingTrack {
    const message = { ...baseRecordingTrack } as RecordingTrack;
    message.files = [];
    message.indices = [];
    message.totaltrackdata = [];
    if (object.recordingtoken !== undefined && object.recordingtoken !== null) {
      message.recordingtoken = object.recordingtoken;
    } else {
      message.recordingtoken = "";
    }
    if (
      object.recordingtrackid !== undefined &&
      object.recordingtrackid !== null
    ) {
      message.recordingtrackid = object.recordingtrackid;
    } else {
      message.recordingtrackid = 0;
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    if (object.tracktype !== undefined && object.tracktype !== null) {
      message.tracktype = object.tracktype;
    } else {
      message.tracktype = 0;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.fixedfiles !== undefined && object.fixedfiles !== null) {
      message.fixedfiles = object.fixedfiles;
    } else {
      message.fixedfiles = false;
    }
    if (object.digitalsigning !== undefined && object.digitalsigning !== null) {
      message.digitalsigning = object.digitalsigning;
    } else {
      message.digitalsigning = false;
    }
    if (object.encrypt !== undefined && object.encrypt !== null) {
      message.encrypt = object.encrypt;
    } else {
      message.encrypt = false;
    }
    if (object.flushfrequency !== undefined && object.flushfrequency !== null) {
      message.flushfrequency = object.flushfrequency;
    } else {
      message.flushfrequency = 0;
    }
    if (object.files !== undefined && object.files !== null) {
      for (const e of object.files) {
        message.files.push(e);
      }
    }
    if (object.indices !== undefined && object.indices !== null) {
      for (const e of object.indices) {
        message.indices.push(Index.fromPartial(e));
      }
    }
    if (object.totaltrackdata !== undefined && object.totaltrackdata !== null) {
      for (const e of object.totaltrackdata) {
        message.totaltrackdata.push(TrackData.fromPartial(e));
      }
    }
    return message;
  },
};

const baseTrackData: object = { time: "0", totaldata: "0" };

export const TrackData = {
  encode(
    message: TrackData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.time !== "0") {
      writer.uint32(9).fixed64(message.time);
    }
    if (message.totaldata !== "0") {
      writer.uint32(17).fixed64(message.totaldata);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TrackData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTrackData } as TrackData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.totaldata = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TrackData {
    const message = { ...baseTrackData } as TrackData;
    if (object.time !== undefined && object.time !== null) {
      message.time = String(object.time);
    } else {
      message.time = "0";
    }
    if (object.totaldata !== undefined && object.totaldata !== null) {
      message.totaldata = String(object.totaldata);
    } else {
      message.totaldata = "0";
    }
    return message;
  },

  toJSON(message: TrackData): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = message.time);
    message.totaldata !== undefined && (obj.totaldata = message.totaldata);
    return obj;
  },

  fromPartial(object: DeepPartial<TrackData>): TrackData {
    const message = { ...baseTrackData } as TrackData;
    if (object.time !== undefined && object.time !== null) {
      message.time = object.time;
    } else {
      message.time = "0";
    }
    if (object.totaldata !== undefined && object.totaldata !== null) {
      message.totaldata = object.totaldata;
    } else {
      message.totaldata = "0";
    }
    return message;
  },
};

const baseUser: object = { token: "", username: "", grouptoken: "" };

export const User = {
  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.username !== "") {
      writer.uint32(18).string(message.username);
    }
    if (message.grouptoken !== "") {
      writer.uint32(26).string(message.grouptoken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): User {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUser } as User;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        case 2:
          message.username = reader.string();
          break;
        case 3:
          message.grouptoken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): User {
    const message = { ...baseUser } as User;
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    if (object.username !== undefined && object.username !== null) {
      message.username = String(object.username);
    } else {
      message.username = "";
    }
    if (object.grouptoken !== undefined && object.grouptoken !== null) {
      message.grouptoken = String(object.grouptoken);
    } else {
      message.grouptoken = "";
    }
    return message;
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    message.username !== undefined && (obj.username = message.username);
    message.grouptoken !== undefined && (obj.grouptoken = message.grouptoken);
    return obj;
  },

  fromPartial(object: DeepPartial<User>): User {
    const message = { ...baseUser } as User;
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    if (object.username !== undefined && object.username !== null) {
      message.username = object.username;
    } else {
      message.username = "";
    }
    if (object.grouptoken !== undefined && object.grouptoken !== null) {
      message.grouptoken = object.grouptoken;
    } else {
      message.grouptoken = "";
    }
    return message;
  },
};

const baseVersion: object = { major: "0", minor: "0", build: "0" };

export const Version = {
  encode(
    message: Version,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.major !== "0") {
      writer.uint32(9).sfixed64(message.major);
    }
    if (message.minor !== "0") {
      writer.uint32(17).sfixed64(message.minor);
    }
    if (message.build !== "0") {
      writer.uint32(25).sfixed64(message.build);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Version {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVersion } as Version;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.major = longToString(reader.sfixed64() as Long);
          break;
        case 2:
          message.minor = longToString(reader.sfixed64() as Long);
          break;
        case 3:
          message.build = longToString(reader.sfixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Version {
    const message = { ...baseVersion } as Version;
    if (object.major !== undefined && object.major !== null) {
      message.major = String(object.major);
    } else {
      message.major = "0";
    }
    if (object.minor !== undefined && object.minor !== null) {
      message.minor = String(object.minor);
    } else {
      message.minor = "0";
    }
    if (object.build !== undefined && object.build !== null) {
      message.build = String(object.build);
    } else {
      message.build = "0";
    }
    return message;
  },

  toJSON(message: Version): unknown {
    const obj: any = {};
    message.major !== undefined && (obj.major = message.major);
    message.minor !== undefined && (obj.minor = message.minor);
    message.build !== undefined && (obj.build = message.build);
    return obj;
  },

  fromPartial(object: DeepPartial<Version>): Version {
    const message = { ...baseVersion } as Version;
    if (object.major !== undefined && object.major !== null) {
      message.major = object.major;
    } else {
      message.major = "0";
    }
    if (object.minor !== undefined && object.minor !== null) {
      message.minor = object.minor;
    } else {
      message.minor = "0";
    }
    if (object.build !== undefined && object.build !== null) {
      message.build = object.build;
    } else {
      message.build = "0";
    }
    return message;
  },
};

const baseState: object = {
  name: "",
  publickey: "",
  architecture: "",
  identifier: "",
  environmentvariables: "",
  commandlinevariables: "",
  locationtime: "0",
  gpsdevice: "",
  gpsdevicestate: 0,
  gpsdevicestatemessage: "",
  locationretentiontime: "0",
  openstreetmapbaseuris: "",
};

export const State = {
  encode(message: State, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.publickey !== "") {
      writer.uint32(18).string(message.publickey);
    }
    if (message.architecture !== "") {
      writer.uint32(26).string(message.architecture);
    }
    if (message.version !== undefined) {
      Version.encode(message.version, writer.uint32(34).fork()).ldelim();
    }
    if (message.identifier !== "") {
      writer.uint32(42).string(message.identifier);
    }
    for (const v of message.environmentvariables) {
      writer.uint32(50).string(v!);
    }
    for (const v of message.commandlinevariables) {
      writer.uint32(58).string(v!);
    }
    for (const v of message.onvifusers) {
      ONVIFUser.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.groups) {
      Group.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.users) {
      User.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.files) {
      File.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.receivers) {
      Receiver.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.recordings) {
      Recording.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.serverlogmessages) {
      LogMessage.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    for (const v of message.maps) {
      Map.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    for (const v of message.mounts) {
      Mount.encode(v!, writer.uint32(130).fork()).ldelim();
    }
    if (message.locationtime !== "0") {
      writer.uint32(137).fixed64(message.locationtime);
    }
    if (message.latitude !== undefined) {
      DoubleValue.encode(
        { value: message.latitude! },
        writer.uint32(146).fork()
      ).ldelim();
    }
    if (message.longitude !== undefined) {
      DoubleValue.encode(
        { value: message.longitude! },
        writer.uint32(154).fork()
      ).ldelim();
    }
    for (const v of message.locationindices) {
      Index.encode(v!, writer.uint32(162).fork()).ldelim();
    }
    if (message.gpsdevice !== "") {
      writer.uint32(170).string(message.gpsdevice);
    }
    if (message.gpsdevicestate !== 0) {
      writer.uint32(176).int32(message.gpsdevicestate);
    }
    if (message.gpsdevicestatemessage !== "") {
      writer.uint32(186).string(message.gpsdevicestatemessage);
    }
    if (message.locationretentiontime !== "0") {
      writer.uint32(193).fixed64(message.locationretentiontime);
    }
    for (const v of message.openstreetmapbaseuris) {
      writer.uint32(202).string(v!);
    }
    for (const v of message.plugins) {
      Plugin.encode(v!, writer.uint32(210).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): State {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseState } as State;
    message.environmentvariables = [];
    message.commandlinevariables = [];
    message.onvifusers = [];
    message.groups = [];
    message.users = [];
    message.files = [];
    message.receivers = [];
    message.recordings = [];
    message.serverlogmessages = [];
    message.maps = [];
    message.mounts = [];
    message.locationindices = [];
    message.openstreetmapbaseuris = [];
    message.plugins = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.publickey = reader.string();
          break;
        case 3:
          message.architecture = reader.string();
          break;
        case 4:
          message.version = Version.decode(reader, reader.uint32());
          break;
        case 5:
          message.identifier = reader.string();
          break;
        case 6:
          message.environmentvariables.push(reader.string());
          break;
        case 7:
          message.commandlinevariables.push(reader.string());
          break;
        case 8:
          message.onvifusers.push(ONVIFUser.decode(reader, reader.uint32()));
          break;
        case 9:
          message.groups.push(Group.decode(reader, reader.uint32()));
          break;
        case 10:
          message.users.push(User.decode(reader, reader.uint32()));
          break;
        case 11:
          message.files.push(File.decode(reader, reader.uint32()));
          break;
        case 12:
          message.receivers.push(Receiver.decode(reader, reader.uint32()));
          break;
        case 13:
          message.recordings.push(Recording.decode(reader, reader.uint32()));
          break;
        case 14:
          message.serverlogmessages.push(
            LogMessage.decode(reader, reader.uint32())
          );
          break;
        case 15:
          message.maps.push(Map.decode(reader, reader.uint32()));
          break;
        case 16:
          message.mounts.push(Mount.decode(reader, reader.uint32()));
          break;
        case 17:
          message.locationtime = longToString(reader.fixed64() as Long);
          break;
        case 18:
          message.latitude = DoubleValue.decode(reader, reader.uint32()).value;
          break;
        case 19:
          message.longitude = DoubleValue.decode(reader, reader.uint32()).value;
          break;
        case 20:
          message.locationindices.push(Index.decode(reader, reader.uint32()));
          break;
        case 21:
          message.gpsdevice = reader.string();
          break;
        case 22:
          message.gpsdevicestate = reader.int32() as any;
          break;
        case 23:
          message.gpsdevicestatemessage = reader.string();
          break;
        case 24:
          message.locationretentiontime = longToString(
            reader.fixed64() as Long
          );
          break;
        case 25:
          message.openstreetmapbaseuris.push(reader.string());
          break;
        case 26:
          message.plugins.push(Plugin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): State {
    const message = { ...baseState } as State;
    message.environmentvariables = [];
    message.commandlinevariables = [];
    message.onvifusers = [];
    message.groups = [];
    message.users = [];
    message.files = [];
    message.receivers = [];
    message.recordings = [];
    message.serverlogmessages = [];
    message.maps = [];
    message.mounts = [];
    message.locationindices = [];
    message.openstreetmapbaseuris = [];
    message.plugins = [];
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.publickey !== undefined && object.publickey !== null) {
      message.publickey = String(object.publickey);
    } else {
      message.publickey = "";
    }
    if (object.architecture !== undefined && object.architecture !== null) {
      message.architecture = String(object.architecture);
    } else {
      message.architecture = "";
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = Version.fromJSON(object.version);
    } else {
      message.version = undefined;
    }
    if (object.identifier !== undefined && object.identifier !== null) {
      message.identifier = String(object.identifier);
    } else {
      message.identifier = "";
    }
    if (
      object.environmentvariables !== undefined &&
      object.environmentvariables !== null
    ) {
      for (const e of object.environmentvariables) {
        message.environmentvariables.push(String(e));
      }
    }
    if (
      object.commandlinevariables !== undefined &&
      object.commandlinevariables !== null
    ) {
      for (const e of object.commandlinevariables) {
        message.commandlinevariables.push(String(e));
      }
    }
    if (object.onvifusers !== undefined && object.onvifusers !== null) {
      for (const e of object.onvifusers) {
        message.onvifusers.push(ONVIFUser.fromJSON(e));
      }
    }
    if (object.groups !== undefined && object.groups !== null) {
      for (const e of object.groups) {
        message.groups.push(Group.fromJSON(e));
      }
    }
    if (object.users !== undefined && object.users !== null) {
      for (const e of object.users) {
        message.users.push(User.fromJSON(e));
      }
    }
    if (object.files !== undefined && object.files !== null) {
      for (const e of object.files) {
        message.files.push(File.fromJSON(e));
      }
    }
    if (object.receivers !== undefined && object.receivers !== null) {
      for (const e of object.receivers) {
        message.receivers.push(Receiver.fromJSON(e));
      }
    }
    if (object.recordings !== undefined && object.recordings !== null) {
      for (const e of object.recordings) {
        message.recordings.push(Recording.fromJSON(e));
      }
    }
    if (
      object.serverlogmessages !== undefined &&
      object.serverlogmessages !== null
    ) {
      for (const e of object.serverlogmessages) {
        message.serverlogmessages.push(LogMessage.fromJSON(e));
      }
    }
    if (object.maps !== undefined && object.maps !== null) {
      for (const e of object.maps) {
        message.maps.push(Map.fromJSON(e));
      }
    }
    if (object.mounts !== undefined && object.mounts !== null) {
      for (const e of object.mounts) {
        message.mounts.push(Mount.fromJSON(e));
      }
    }
    if (object.locationtime !== undefined && object.locationtime !== null) {
      message.locationtime = String(object.locationtime);
    } else {
      message.locationtime = "0";
    }
    if (object.latitude !== undefined && object.latitude !== null) {
      message.latitude = Number(object.latitude);
    } else {
      message.latitude = undefined;
    }
    if (object.longitude !== undefined && object.longitude !== null) {
      message.longitude = Number(object.longitude);
    } else {
      message.longitude = undefined;
    }
    if (
      object.locationindices !== undefined &&
      object.locationindices !== null
    ) {
      for (const e of object.locationindices) {
        message.locationindices.push(Index.fromJSON(e));
      }
    }
    if (object.gpsdevice !== undefined && object.gpsdevice !== null) {
      message.gpsdevice = String(object.gpsdevice);
    } else {
      message.gpsdevice = "";
    }
    if (object.gpsdevicestate !== undefined && object.gpsdevicestate !== null) {
      message.gpsdevicestate = gPSDeviceStateFromJSON(object.gpsdevicestate);
    } else {
      message.gpsdevicestate = 0;
    }
    if (
      object.gpsdevicestatemessage !== undefined &&
      object.gpsdevicestatemessage !== null
    ) {
      message.gpsdevicestatemessage = String(object.gpsdevicestatemessage);
    } else {
      message.gpsdevicestatemessage = "";
    }
    if (
      object.locationretentiontime !== undefined &&
      object.locationretentiontime !== null
    ) {
      message.locationretentiontime = String(object.locationretentiontime);
    } else {
      message.locationretentiontime = "0";
    }
    if (
      object.openstreetmapbaseuris !== undefined &&
      object.openstreetmapbaseuris !== null
    ) {
      for (const e of object.openstreetmapbaseuris) {
        message.openstreetmapbaseuris.push(String(e));
      }
    }
    if (object.plugins !== undefined && object.plugins !== null) {
      for (const e of object.plugins) {
        message.plugins.push(Plugin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: State): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.publickey !== undefined && (obj.publickey = message.publickey);
    message.architecture !== undefined &&
      (obj.architecture = message.architecture);
    message.version !== undefined &&
      (obj.version = message.version
        ? Version.toJSON(message.version)
        : undefined);
    message.identifier !== undefined && (obj.identifier = message.identifier);
    if (message.environmentvariables) {
      obj.environmentvariables = message.environmentvariables.map((e) => e);
    } else {
      obj.environmentvariables = [];
    }
    if (message.commandlinevariables) {
      obj.commandlinevariables = message.commandlinevariables.map((e) => e);
    } else {
      obj.commandlinevariables = [];
    }
    if (message.onvifusers) {
      obj.onvifusers = message.onvifusers.map((e) =>
        e ? ONVIFUser.toJSON(e) : undefined
      );
    } else {
      obj.onvifusers = [];
    }
    if (message.groups) {
      obj.groups = message.groups.map((e) => (e ? Group.toJSON(e) : undefined));
    } else {
      obj.groups = [];
    }
    if (message.users) {
      obj.users = message.users.map((e) => (e ? User.toJSON(e) : undefined));
    } else {
      obj.users = [];
    }
    if (message.files) {
      obj.files = message.files.map((e) => (e ? File.toJSON(e) : undefined));
    } else {
      obj.files = [];
    }
    if (message.receivers) {
      obj.receivers = message.receivers.map((e) =>
        e ? Receiver.toJSON(e) : undefined
      );
    } else {
      obj.receivers = [];
    }
    if (message.recordings) {
      obj.recordings = message.recordings.map((e) =>
        e ? Recording.toJSON(e) : undefined
      );
    } else {
      obj.recordings = [];
    }
    if (message.serverlogmessages) {
      obj.serverlogmessages = message.serverlogmessages.map((e) =>
        e ? LogMessage.toJSON(e) : undefined
      );
    } else {
      obj.serverlogmessages = [];
    }
    if (message.maps) {
      obj.maps = message.maps.map((e) => (e ? Map.toJSON(e) : undefined));
    } else {
      obj.maps = [];
    }
    if (message.mounts) {
      obj.mounts = message.mounts.map((e) => (e ? Mount.toJSON(e) : undefined));
    } else {
      obj.mounts = [];
    }
    message.locationtime !== undefined &&
      (obj.locationtime = message.locationtime);
    message.latitude !== undefined && (obj.latitude = message.latitude);
    message.longitude !== undefined && (obj.longitude = message.longitude);
    if (message.locationindices) {
      obj.locationindices = message.locationindices.map((e) =>
        e ? Index.toJSON(e) : undefined
      );
    } else {
      obj.locationindices = [];
    }
    message.gpsdevice !== undefined && (obj.gpsdevice = message.gpsdevice);
    message.gpsdevicestate !== undefined &&
      (obj.gpsdevicestate = gPSDeviceStateToJSON(message.gpsdevicestate));
    message.gpsdevicestatemessage !== undefined &&
      (obj.gpsdevicestatemessage = message.gpsdevicestatemessage);
    message.locationretentiontime !== undefined &&
      (obj.locationretentiontime = message.locationretentiontime);
    if (message.openstreetmapbaseuris) {
      obj.openstreetmapbaseuris = message.openstreetmapbaseuris.map((e) => e);
    } else {
      obj.openstreetmapbaseuris = [];
    }
    if (message.plugins) {
      obj.plugins = message.plugins.map((e) =>
        e ? Plugin.toJSON(e) : undefined
      );
    } else {
      obj.plugins = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<State>): State {
    const message = { ...baseState } as State;
    message.environmentvariables = [];
    message.commandlinevariables = [];
    message.onvifusers = [];
    message.groups = [];
    message.users = [];
    message.files = [];
    message.receivers = [];
    message.recordings = [];
    message.serverlogmessages = [];
    message.maps = [];
    message.mounts = [];
    message.locationindices = [];
    message.openstreetmapbaseuris = [];
    message.plugins = [];
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.publickey !== undefined && object.publickey !== null) {
      message.publickey = object.publickey;
    } else {
      message.publickey = "";
    }
    if (object.architecture !== undefined && object.architecture !== null) {
      message.architecture = object.architecture;
    } else {
      message.architecture = "";
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = Version.fromPartial(object.version);
    } else {
      message.version = undefined;
    }
    if (object.identifier !== undefined && object.identifier !== null) {
      message.identifier = object.identifier;
    } else {
      message.identifier = "";
    }
    if (
      object.environmentvariables !== undefined &&
      object.environmentvariables !== null
    ) {
      for (const e of object.environmentvariables) {
        message.environmentvariables.push(e);
      }
    }
    if (
      object.commandlinevariables !== undefined &&
      object.commandlinevariables !== null
    ) {
      for (const e of object.commandlinevariables) {
        message.commandlinevariables.push(e);
      }
    }
    if (object.onvifusers !== undefined && object.onvifusers !== null) {
      for (const e of object.onvifusers) {
        message.onvifusers.push(ONVIFUser.fromPartial(e));
      }
    }
    if (object.groups !== undefined && object.groups !== null) {
      for (const e of object.groups) {
        message.groups.push(Group.fromPartial(e));
      }
    }
    if (object.users !== undefined && object.users !== null) {
      for (const e of object.users) {
        message.users.push(User.fromPartial(e));
      }
    }
    if (object.files !== undefined && object.files !== null) {
      for (const e of object.files) {
        message.files.push(File.fromPartial(e));
      }
    }
    if (object.receivers !== undefined && object.receivers !== null) {
      for (const e of object.receivers) {
        message.receivers.push(Receiver.fromPartial(e));
      }
    }
    if (object.recordings !== undefined && object.recordings !== null) {
      for (const e of object.recordings) {
        message.recordings.push(Recording.fromPartial(e));
      }
    }
    if (
      object.serverlogmessages !== undefined &&
      object.serverlogmessages !== null
    ) {
      for (const e of object.serverlogmessages) {
        message.serverlogmessages.push(LogMessage.fromPartial(e));
      }
    }
    if (object.maps !== undefined && object.maps !== null) {
      for (const e of object.maps) {
        message.maps.push(Map.fromPartial(e));
      }
    }
    if (object.mounts !== undefined && object.mounts !== null) {
      for (const e of object.mounts) {
        message.mounts.push(Mount.fromPartial(e));
      }
    }
    if (object.locationtime !== undefined && object.locationtime !== null) {
      message.locationtime = object.locationtime;
    } else {
      message.locationtime = "0";
    }
    if (object.latitude !== undefined && object.latitude !== null) {
      message.latitude = object.latitude;
    } else {
      message.latitude = undefined;
    }
    if (object.longitude !== undefined && object.longitude !== null) {
      message.longitude = object.longitude;
    } else {
      message.longitude = undefined;
    }
    if (
      object.locationindices !== undefined &&
      object.locationindices !== null
    ) {
      for (const e of object.locationindices) {
        message.locationindices.push(Index.fromPartial(e));
      }
    }
    if (object.gpsdevice !== undefined && object.gpsdevice !== null) {
      message.gpsdevice = object.gpsdevice;
    } else {
      message.gpsdevice = "";
    }
    if (object.gpsdevicestate !== undefined && object.gpsdevicestate !== null) {
      message.gpsdevicestate = object.gpsdevicestate;
    } else {
      message.gpsdevicestate = 0;
    }
    if (
      object.gpsdevicestatemessage !== undefined &&
      object.gpsdevicestatemessage !== null
    ) {
      message.gpsdevicestatemessage = object.gpsdevicestatemessage;
    } else {
      message.gpsdevicestatemessage = "";
    }
    if (
      object.locationretentiontime !== undefined &&
      object.locationretentiontime !== null
    ) {
      message.locationretentiontime = object.locationretentiontime;
    } else {
      message.locationretentiontime = "0";
    }
    if (
      object.openstreetmapbaseuris !== undefined &&
      object.openstreetmapbaseuris !== null
    ) {
      for (const e of object.openstreetmapbaseuris) {
        message.openstreetmapbaseuris.push(e);
      }
    }
    if (object.plugins !== undefined && object.plugins !== null) {
      for (const e of object.plugins) {
        message.plugins.push(Plugin.fromPartial(e));
      }
    }
    return message;
  },
};

const baseFileAdded: object = {};

export const FileAdded = {
  encode(
    message: FileAdded,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.file !== undefined) {
      File.encode(message.file, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileAdded {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFileAdded } as FileAdded;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.file = File.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FileAdded {
    const message = { ...baseFileAdded } as FileAdded;
    if (object.file !== undefined && object.file !== null) {
      message.file = File.fromJSON(object.file);
    } else {
      message.file = undefined;
    }
    return message;
  },

  toJSON(message: FileAdded): unknown {
    const obj: any = {};
    message.file !== undefined &&
      (obj.file = message.file ? File.toJSON(message.file) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<FileAdded>): FileAdded {
    const message = { ...baseFileAdded } as FileAdded;
    if (object.file !== undefined && object.file !== null) {
      message.file = File.fromPartial(object.file);
    } else {
      message.file = undefined;
    }
    return message;
  },
};

const baseFileRemoved: object = { token: "" };

export const FileRemoved = {
  encode(
    message: FileRemoved,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileRemoved {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFileRemoved } as FileRemoved;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FileRemoved {
    const message = { ...baseFileRemoved } as FileRemoved;
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    return message;
  },

  toJSON(message: FileRemoved): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },

  fromPartial(object: DeepPartial<FileRemoved>): FileRemoved {
    const message = { ...baseFileRemoved } as FileRemoved;
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    return message;
  },
};

const baseFileMonitorStateChanged: object = { token: "", state: 0 };

export const FileMonitorStateChanged = {
  encode(
    message: FileMonitorStateChanged,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): FileMonitorStateChanged {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseFileMonitorStateChanged,
    } as FileMonitorStateChanged;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        case 2:
          message.state = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FileMonitorStateChanged {
    const message = {
      ...baseFileMonitorStateChanged,
    } as FileMonitorStateChanged;
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = fileMonitorStateFromJSON(object.state);
    } else {
      message.state = 0;
    }
    return message;
  },

  toJSON(message: FileMonitorStateChanged): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    message.state !== undefined &&
      (obj.state = fileMonitorStateToJSON(message.state));
    return obj;
  },

  fromPartial(
    object: DeepPartial<FileMonitorStateChanged>
  ): FileMonitorStateChanged {
    const message = {
      ...baseFileMonitorStateChanged,
    } as FileMonitorStateChanged;
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    } else {
      message.state = 0;
    }
    return message;
  },
};

const baseFileStateChanged: object = { token: "", state: 0 };

export const FileStateChanged = {
  encode(
    message: FileStateChanged,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileStateChanged {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFileStateChanged } as FileStateChanged;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        case 2:
          message.state = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FileStateChanged {
    const message = { ...baseFileStateChanged } as FileStateChanged;
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = fileStateFromJSON(object.state);
    } else {
      message.state = 0;
    }
    return message;
  },

  toJSON(message: FileStateChanged): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    message.state !== undefined && (obj.state = fileStateToJSON(message.state));
    return obj;
  },

  fromPartial(object: DeepPartial<FileStateChanged>): FileStateChanged {
    const message = { ...baseFileStateChanged } as FileStateChanged;
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    } else {
      message.state = 0;
    }
    return message;
  },
};

const baseGPSDeviceChanged: object = { gpsdevice: "" };

export const GPSDeviceChanged = {
  encode(
    message: GPSDeviceChanged,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.gpsdevice !== "") {
      writer.uint32(10).string(message.gpsdevice);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GPSDeviceChanged {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGPSDeviceChanged } as GPSDeviceChanged;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gpsdevice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GPSDeviceChanged {
    const message = { ...baseGPSDeviceChanged } as GPSDeviceChanged;
    if (object.gpsdevice !== undefined && object.gpsdevice !== null) {
      message.gpsdevice = String(object.gpsdevice);
    } else {
      message.gpsdevice = "";
    }
    return message;
  },

  toJSON(message: GPSDeviceChanged): unknown {
    const obj: any = {};
    message.gpsdevice !== undefined && (obj.gpsdevice = message.gpsdevice);
    return obj;
  },

  fromPartial(object: DeepPartial<GPSDeviceChanged>): GPSDeviceChanged {
    const message = { ...baseGPSDeviceChanged } as GPSDeviceChanged;
    if (object.gpsdevice !== undefined && object.gpsdevice !== null) {
      message.gpsdevice = object.gpsdevice;
    } else {
      message.gpsdevice = "";
    }
    return message;
  },
};

const baseGPSDeviceStateChanged: object = { time: "0", state: 0, message: "" };

export const GPSDeviceStateChanged = {
  encode(
    message: GPSDeviceStateChanged,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.time !== "0") {
      writer.uint32(9).fixed64(message.time);
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    if (message.message !== "") {
      writer.uint32(26).string(message.message);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GPSDeviceStateChanged {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGPSDeviceStateChanged } as GPSDeviceStateChanged;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.state = reader.int32() as any;
          break;
        case 3:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GPSDeviceStateChanged {
    const message = { ...baseGPSDeviceStateChanged } as GPSDeviceStateChanged;
    if (object.time !== undefined && object.time !== null) {
      message.time = String(object.time);
    } else {
      message.time = "0";
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = gPSDeviceStateFromJSON(object.state);
    } else {
      message.state = 0;
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = String(object.message);
    } else {
      message.message = "";
    }
    return message;
  },

  toJSON(message: GPSDeviceStateChanged): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = message.time);
    message.state !== undefined &&
      (obj.state = gPSDeviceStateToJSON(message.state));
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GPSDeviceStateChanged>
  ): GPSDeviceStateChanged {
    const message = { ...baseGPSDeviceStateChanged } as GPSDeviceStateChanged;
    if (object.time !== undefined && object.time !== null) {
      message.time = object.time;
    } else {
      message.time = "0";
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    } else {
      message.state = 0;
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    } else {
      message.message = "";
    }
    return message;
  },
};

const baseGroupAdded: object = {};

export const GroupAdded = {
  encode(
    message: GroupAdded,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.group !== undefined) {
      Group.encode(message.group, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupAdded {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGroupAdded } as GroupAdded;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.group = Group.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GroupAdded {
    const message = { ...baseGroupAdded } as GroupAdded;
    if (object.group !== undefined && object.group !== null) {
      message.group = Group.fromJSON(object.group);
    } else {
      message.group = undefined;
    }
    return message;
  },

  toJSON(message: GroupAdded): unknown {
    const obj: any = {};
    message.group !== undefined &&
      (obj.group = message.group ? Group.toJSON(message.group) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GroupAdded>): GroupAdded {
    const message = { ...baseGroupAdded } as GroupAdded;
    if (object.group !== undefined && object.group !== null) {
      message.group = Group.fromPartial(object.group);
    } else {
      message.group = undefined;
    }
    return message;
  },
};

const baseGroupChanged: object = {};

export const GroupChanged = {
  encode(
    message: GroupChanged,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.group !== undefined) {
      Group.encode(message.group, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupChanged {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGroupChanged } as GroupChanged;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.group = Group.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GroupChanged {
    const message = { ...baseGroupChanged } as GroupChanged;
    if (object.group !== undefined && object.group !== null) {
      message.group = Group.fromJSON(object.group);
    } else {
      message.group = undefined;
    }
    return message;
  },

  toJSON(message: GroupChanged): unknown {
    const obj: any = {};
    message.group !== undefined &&
      (obj.group = message.group ? Group.toJSON(message.group) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GroupChanged>): GroupChanged {
    const message = { ...baseGroupChanged } as GroupChanged;
    if (object.group !== undefined && object.group !== null) {
      message.group = Group.fromPartial(object.group);
    } else {
      message.group = undefined;
    }
    return message;
  },
};

const baseGroupRemoved: object = { token: "" };

export const GroupRemoved = {
  encode(
    message: GroupRemoved,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupRemoved {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGroupRemoved } as GroupRemoved;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GroupRemoved {
    const message = { ...baseGroupRemoved } as GroupRemoved;
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    return message;
  },

  toJSON(message: GroupRemoved): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },

  fromPartial(object: DeepPartial<GroupRemoved>): GroupRemoved {
    const message = { ...baseGroupRemoved } as GroupRemoved;
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    return message;
  },
};

const baseLocationChanged: object = { time: "0" };

export const LocationChanged = {
  encode(
    message: LocationChanged,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.time !== "0") {
      writer.uint32(9).fixed64(message.time);
    }
    if (message.latitude !== undefined) {
      DoubleValue.encode(
        { value: message.latitude! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.longitude !== undefined) {
      DoubleValue.encode(
        { value: message.longitude! },
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LocationChanged {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLocationChanged } as LocationChanged;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.latitude = DoubleValue.decode(reader, reader.uint32()).value;
          break;
        case 3:
          message.longitude = DoubleValue.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LocationChanged {
    const message = { ...baseLocationChanged } as LocationChanged;
    if (object.time !== undefined && object.time !== null) {
      message.time = String(object.time);
    } else {
      message.time = "0";
    }
    if (object.latitude !== undefined && object.latitude !== null) {
      message.latitude = Number(object.latitude);
    } else {
      message.latitude = undefined;
    }
    if (object.longitude !== undefined && object.longitude !== null) {
      message.longitude = Number(object.longitude);
    } else {
      message.longitude = undefined;
    }
    return message;
  },

  toJSON(message: LocationChanged): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = message.time);
    message.latitude !== undefined && (obj.latitude = message.latitude);
    message.longitude !== undefined && (obj.longitude = message.longitude);
    return obj;
  },

  fromPartial(object: DeepPartial<LocationChanged>): LocationChanged {
    const message = { ...baseLocationChanged } as LocationChanged;
    if (object.time !== undefined && object.time !== null) {
      message.time = object.time;
    } else {
      message.time = "0";
    }
    if (object.latitude !== undefined && object.latitude !== null) {
      message.latitude = object.latitude;
    } else {
      message.latitude = undefined;
    }
    if (object.longitude !== undefined && object.longitude !== null) {
      message.longitude = object.longitude;
    } else {
      message.longitude = undefined;
    }
    return message;
  },
};

const baseLocationRetentionTimeChanged: object = { locationretentiontime: "0" };

export const LocationRetentionTimeChanged = {
  encode(
    message: LocationRetentionTimeChanged,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.locationretentiontime !== "0") {
      writer.uint32(9).fixed64(message.locationretentiontime);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LocationRetentionTimeChanged {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseLocationRetentionTimeChanged,
    } as LocationRetentionTimeChanged;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.locationretentiontime = longToString(
            reader.fixed64() as Long
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LocationRetentionTimeChanged {
    const message = {
      ...baseLocationRetentionTimeChanged,
    } as LocationRetentionTimeChanged;
    if (
      object.locationretentiontime !== undefined &&
      object.locationretentiontime !== null
    ) {
      message.locationretentiontime = String(object.locationretentiontime);
    } else {
      message.locationretentiontime = "0";
    }
    return message;
  },

  toJSON(message: LocationRetentionTimeChanged): unknown {
    const obj: any = {};
    message.locationretentiontime !== undefined &&
      (obj.locationretentiontime = message.locationretentiontime);
    return obj;
  },

  fromPartial(
    object: DeepPartial<LocationRetentionTimeChanged>
  ): LocationRetentionTimeChanged {
    const message = {
      ...baseLocationRetentionTimeChanged,
    } as LocationRetentionTimeChanged;
    if (
      object.locationretentiontime !== undefined &&
      object.locationretentiontime !== null
    ) {
      message.locationretentiontime = object.locationretentiontime;
    } else {
      message.locationretentiontime = "0";
    }
    return message;
  },
};

const baseMapAdded: object = {};

export const MapAdded = {
  encode(
    message: MapAdded,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.map !== undefined) {
      Map.encode(message.map, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapAdded {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMapAdded } as MapAdded;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.map = Map.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MapAdded {
    const message = { ...baseMapAdded } as MapAdded;
    if (object.map !== undefined && object.map !== null) {
      message.map = Map.fromJSON(object.map);
    } else {
      message.map = undefined;
    }
    return message;
  },

  toJSON(message: MapAdded): unknown {
    const obj: any = {};
    message.map !== undefined &&
      (obj.map = message.map ? Map.toJSON(message.map) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MapAdded>): MapAdded {
    const message = { ...baseMapAdded } as MapAdded;
    if (object.map !== undefined && object.map !== null) {
      message.map = Map.fromPartial(object.map);
    } else {
      message.map = undefined;
    }
    return message;
  },
};

const baseMapChanged: object = {};

export const MapChanged = {
  encode(
    message: MapChanged,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.map !== undefined) {
      Map.encode(message.map, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapChanged {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMapChanged } as MapChanged;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.map = Map.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MapChanged {
    const message = { ...baseMapChanged } as MapChanged;
    if (object.map !== undefined && object.map !== null) {
      message.map = Map.fromJSON(object.map);
    } else {
      message.map = undefined;
    }
    return message;
  },

  toJSON(message: MapChanged): unknown {
    const obj: any = {};
    message.map !== undefined &&
      (obj.map = message.map ? Map.toJSON(message.map) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MapChanged>): MapChanged {
    const message = { ...baseMapChanged } as MapChanged;
    if (object.map !== undefined && object.map !== null) {
      message.map = Map.fromPartial(object.map);
    } else {
      message.map = undefined;
    }
    return message;
  },
};

const baseMapRemoved: object = { token: "" };

export const MapRemoved = {
  encode(
    message: MapRemoved,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapRemoved {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMapRemoved } as MapRemoved;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MapRemoved {
    const message = { ...baseMapRemoved } as MapRemoved;
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    return message;
  },

  toJSON(message: MapRemoved): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },

  fromPartial(object: DeepPartial<MapRemoved>): MapRemoved {
    const message = { ...baseMapRemoved } as MapRemoved;
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    return message;
  },
};

const baseMountAdded: object = {};

export const MountAdded = {
  encode(
    message: MountAdded,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mount !== undefined) {
      Mount.encode(message.mount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MountAdded {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMountAdded } as MountAdded;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mount = Mount.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MountAdded {
    const message = { ...baseMountAdded } as MountAdded;
    if (object.mount !== undefined && object.mount !== null) {
      message.mount = Mount.fromJSON(object.mount);
    } else {
      message.mount = undefined;
    }
    return message;
  },

  toJSON(message: MountAdded): unknown {
    const obj: any = {};
    message.mount !== undefined &&
      (obj.mount = message.mount ? Mount.toJSON(message.mount) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MountAdded>): MountAdded {
    const message = { ...baseMountAdded } as MountAdded;
    if (object.mount !== undefined && object.mount !== null) {
      message.mount = Mount.fromPartial(object.mount);
    } else {
      message.mount = undefined;
    }
    return message;
  },
};

const baseMountRemoved: object = {};

export const MountRemoved = {
  encode(
    message: MountRemoved,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mount !== undefined) {
      Mount.encode(message.mount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MountRemoved {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMountRemoved } as MountRemoved;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mount = Mount.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MountRemoved {
    const message = { ...baseMountRemoved } as MountRemoved;
    if (object.mount !== undefined && object.mount !== null) {
      message.mount = Mount.fromJSON(object.mount);
    } else {
      message.mount = undefined;
    }
    return message;
  },

  toJSON(message: MountRemoved): unknown {
    const obj: any = {};
    message.mount !== undefined &&
      (obj.mount = message.mount ? Mount.toJSON(message.mount) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MountRemoved>): MountRemoved {
    const message = { ...baseMountRemoved } as MountRemoved;
    if (object.mount !== undefined && object.mount !== null) {
      message.mount = Mount.fromPartial(object.mount);
    } else {
      message.mount = undefined;
    }
    return message;
  },
};

const baseNameChanged: object = { name: "" };

export const NameChanged = {
  encode(
    message: NameChanged,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NameChanged {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNameChanged } as NameChanged;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NameChanged {
    const message = { ...baseNameChanged } as NameChanged;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    return message;
  },

  toJSON(message: NameChanged): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(object: DeepPartial<NameChanged>): NameChanged {
    const message = { ...baseNameChanged } as NameChanged;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    return message;
  },
};

const baseONVIFUserAdded: object = {};

export const ONVIFUserAdded = {
  encode(
    message: ONVIFUserAdded,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.onvifuser !== undefined) {
      ONVIFUser.encode(message.onvifuser, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ONVIFUserAdded {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseONVIFUserAdded } as ONVIFUserAdded;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.onvifuser = ONVIFUser.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ONVIFUserAdded {
    const message = { ...baseONVIFUserAdded } as ONVIFUserAdded;
    if (object.onvifuser !== undefined && object.onvifuser !== null) {
      message.onvifuser = ONVIFUser.fromJSON(object.onvifuser);
    } else {
      message.onvifuser = undefined;
    }
    return message;
  },

  toJSON(message: ONVIFUserAdded): unknown {
    const obj: any = {};
    message.onvifuser !== undefined &&
      (obj.onvifuser = message.onvifuser
        ? ONVIFUser.toJSON(message.onvifuser)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ONVIFUserAdded>): ONVIFUserAdded {
    const message = { ...baseONVIFUserAdded } as ONVIFUserAdded;
    if (object.onvifuser !== undefined && object.onvifuser !== null) {
      message.onvifuser = ONVIFUser.fromPartial(object.onvifuser);
    } else {
      message.onvifuser = undefined;
    }
    return message;
  },
};

const baseONVIFUserChanged: object = {};

export const ONVIFUserChanged = {
  encode(
    message: ONVIFUserChanged,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.onvifuser !== undefined) {
      ONVIFUser.encode(message.onvifuser, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ONVIFUserChanged {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseONVIFUserChanged } as ONVIFUserChanged;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.onvifuser = ONVIFUser.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ONVIFUserChanged {
    const message = { ...baseONVIFUserChanged } as ONVIFUserChanged;
    if (object.onvifuser !== undefined && object.onvifuser !== null) {
      message.onvifuser = ONVIFUser.fromJSON(object.onvifuser);
    } else {
      message.onvifuser = undefined;
    }
    return message;
  },

  toJSON(message: ONVIFUserChanged): unknown {
    const obj: any = {};
    message.onvifuser !== undefined &&
      (obj.onvifuser = message.onvifuser
        ? ONVIFUser.toJSON(message.onvifuser)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ONVIFUserChanged>): ONVIFUserChanged {
    const message = { ...baseONVIFUserChanged } as ONVIFUserChanged;
    if (object.onvifuser !== undefined && object.onvifuser !== null) {
      message.onvifuser = ONVIFUser.fromPartial(object.onvifuser);
    } else {
      message.onvifuser = undefined;
    }
    return message;
  },
};

const baseONVIFUserRemoved: object = { token: "" };

export const ONVIFUserRemoved = {
  encode(
    message: ONVIFUserRemoved,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ONVIFUserRemoved {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseONVIFUserRemoved } as ONVIFUserRemoved;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ONVIFUserRemoved {
    const message = { ...baseONVIFUserRemoved } as ONVIFUserRemoved;
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    return message;
  },

  toJSON(message: ONVIFUserRemoved): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },

  fromPartial(object: DeepPartial<ONVIFUserRemoved>): ONVIFUserRemoved {
    const message = { ...baseONVIFUserRemoved } as ONVIFUserRemoved;
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    return message;
  },
};

const baseOpenStreetMapBaseUrisChanged: object = { openstreetmapbaseuris: "" };

export const OpenStreetMapBaseUrisChanged = {
  encode(
    message: OpenStreetMapBaseUrisChanged,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.openstreetmapbaseuris) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OpenStreetMapBaseUrisChanged {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseOpenStreetMapBaseUrisChanged,
    } as OpenStreetMapBaseUrisChanged;
    message.openstreetmapbaseuris = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.openstreetmapbaseuris.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OpenStreetMapBaseUrisChanged {
    const message = {
      ...baseOpenStreetMapBaseUrisChanged,
    } as OpenStreetMapBaseUrisChanged;
    message.openstreetmapbaseuris = [];
    if (
      object.openstreetmapbaseuris !== undefined &&
      object.openstreetmapbaseuris !== null
    ) {
      for (const e of object.openstreetmapbaseuris) {
        message.openstreetmapbaseuris.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: OpenStreetMapBaseUrisChanged): unknown {
    const obj: any = {};
    if (message.openstreetmapbaseuris) {
      obj.openstreetmapbaseuris = message.openstreetmapbaseuris.map((e) => e);
    } else {
      obj.openstreetmapbaseuris = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<OpenStreetMapBaseUrisChanged>
  ): OpenStreetMapBaseUrisChanged {
    const message = {
      ...baseOpenStreetMapBaseUrisChanged,
    } as OpenStreetMapBaseUrisChanged;
    message.openstreetmapbaseuris = [];
    if (
      object.openstreetmapbaseuris !== undefined &&
      object.openstreetmapbaseuris !== null
    ) {
      for (const e of object.openstreetmapbaseuris) {
        message.openstreetmapbaseuris.push(e);
      }
    }
    return message;
  },
};

const basePluginAdded: object = {};

export const PluginAdded = {
  encode(
    message: PluginAdded,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.plugin !== undefined) {
      Plugin.encode(message.plugin, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PluginAdded {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePluginAdded } as PluginAdded;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.plugin = Plugin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PluginAdded {
    const message = { ...basePluginAdded } as PluginAdded;
    if (object.plugin !== undefined && object.plugin !== null) {
      message.plugin = Plugin.fromJSON(object.plugin);
    } else {
      message.plugin = undefined;
    }
    return message;
  },

  toJSON(message: PluginAdded): unknown {
    const obj: any = {};
    message.plugin !== undefined &&
      (obj.plugin = message.plugin ? Plugin.toJSON(message.plugin) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<PluginAdded>): PluginAdded {
    const message = { ...basePluginAdded } as PluginAdded;
    if (object.plugin !== undefined && object.plugin !== null) {
      message.plugin = Plugin.fromPartial(object.plugin);
    } else {
      message.plugin = undefined;
    }
    return message;
  },
};

const basePluginChanged: object = {
  token: "",
  enabled: false,
  parameters: "",
  priority: "0",
  state: 0,
  statemessage: "",
};

export const PluginChanged = {
  encode(
    message: PluginChanged,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.enabled === true) {
      writer.uint32(16).bool(message.enabled);
    }
    if (message.parameters !== "") {
      writer.uint32(26).string(message.parameters);
    }
    if (message.priority !== "0") {
      writer.uint32(33).fixed64(message.priority);
    }
    if (message.state !== 0) {
      writer.uint32(40).int32(message.state);
    }
    if (message.statemessage !== "") {
      writer.uint32(50).string(message.statemessage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PluginChanged {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePluginChanged } as PluginChanged;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        case 2:
          message.enabled = reader.bool();
          break;
        case 3:
          message.parameters = reader.string();
          break;
        case 4:
          message.priority = longToString(reader.fixed64() as Long);
          break;
        case 5:
          message.state = reader.int32() as any;
          break;
        case 6:
          message.statemessage = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PluginChanged {
    const message = { ...basePluginChanged } as PluginChanged;
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = Boolean(object.enabled);
    } else {
      message.enabled = false;
    }
    if (object.parameters !== undefined && object.parameters !== null) {
      message.parameters = String(object.parameters);
    } else {
      message.parameters = "";
    }
    if (object.priority !== undefined && object.priority !== null) {
      message.priority = String(object.priority);
    } else {
      message.priority = "0";
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = pluginStateFromJSON(object.state);
    } else {
      message.state = 0;
    }
    if (object.statemessage !== undefined && object.statemessage !== null) {
      message.statemessage = String(object.statemessage);
    } else {
      message.statemessage = "";
    }
    return message;
  },

  toJSON(message: PluginChanged): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.parameters !== undefined && (obj.parameters = message.parameters);
    message.priority !== undefined && (obj.priority = message.priority);
    message.state !== undefined &&
      (obj.state = pluginStateToJSON(message.state));
    message.statemessage !== undefined &&
      (obj.statemessage = message.statemessage);
    return obj;
  },

  fromPartial(object: DeepPartial<PluginChanged>): PluginChanged {
    const message = { ...basePluginChanged } as PluginChanged;
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    } else {
      message.enabled = false;
    }
    if (object.parameters !== undefined && object.parameters !== null) {
      message.parameters = object.parameters;
    } else {
      message.parameters = "";
    }
    if (object.priority !== undefined && object.priority !== null) {
      message.priority = object.priority;
    } else {
      message.priority = "0";
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    } else {
      message.state = 0;
    }
    if (object.statemessage !== undefined && object.statemessage !== null) {
      message.statemessage = object.statemessage;
    } else {
      message.statemessage = "";
    }
    return message;
  },
};

const basePluginRemoved: object = { token: "" };

export const PluginRemoved = {
  encode(
    message: PluginRemoved,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PluginRemoved {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePluginRemoved } as PluginRemoved;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PluginRemoved {
    const message = { ...basePluginRemoved } as PluginRemoved;
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    return message;
  },

  toJSON(message: PluginRemoved): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },

  fromPartial(object: DeepPartial<PluginRemoved>): PluginRemoved {
    const message = { ...basePluginRemoved } as PluginRemoved;
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    return message;
  },
};

const basePluginStateChanged: object = { token: "", state: 0, message: "" };

export const PluginStateChanged = {
  encode(
    message: PluginStateChanged,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    if (message.message !== "") {
      writer.uint32(26).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PluginStateChanged {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePluginStateChanged } as PluginStateChanged;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        case 2:
          message.state = reader.int32() as any;
          break;
        case 3:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PluginStateChanged {
    const message = { ...basePluginStateChanged } as PluginStateChanged;
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = pluginStateFromJSON(object.state);
    } else {
      message.state = 0;
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = String(object.message);
    } else {
      message.message = "";
    }
    return message;
  },

  toJSON(message: PluginStateChanged): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    message.state !== undefined &&
      (obj.state = pluginStateToJSON(message.state));
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial(object: DeepPartial<PluginStateChanged>): PluginStateChanged {
    const message = { ...basePluginStateChanged } as PluginStateChanged;
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    } else {
      message.state = 0;
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    } else {
      message.message = "";
    }
    return message;
  },
};

const baseReceiverAdded: object = {};

export const ReceiverAdded = {
  encode(
    message: ReceiverAdded,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.receiver !== undefined) {
      Receiver.encode(message.receiver, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReceiverAdded {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseReceiverAdded } as ReceiverAdded;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.receiver = Receiver.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReceiverAdded {
    const message = { ...baseReceiverAdded } as ReceiverAdded;
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = Receiver.fromJSON(object.receiver);
    } else {
      message.receiver = undefined;
    }
    return message;
  },

  toJSON(message: ReceiverAdded): unknown {
    const obj: any = {};
    message.receiver !== undefined &&
      (obj.receiver = message.receiver
        ? Receiver.toJSON(message.receiver)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ReceiverAdded>): ReceiverAdded {
    const message = { ...baseReceiverAdded } as ReceiverAdded;
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = Receiver.fromPartial(object.receiver);
    } else {
      message.receiver = undefined;
    }
    return message;
  },
};

const baseReceiverChanged: object = {};

export const ReceiverChanged = {
  encode(
    message: ReceiverChanged,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.receiver !== undefined) {
      Receiver.encode(message.receiver, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReceiverChanged {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseReceiverChanged } as ReceiverChanged;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.receiver = Receiver.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReceiverChanged {
    const message = { ...baseReceiverChanged } as ReceiverChanged;
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = Receiver.fromJSON(object.receiver);
    } else {
      message.receiver = undefined;
    }
    return message;
  },

  toJSON(message: ReceiverChanged): unknown {
    const obj: any = {};
    message.receiver !== undefined &&
      (obj.receiver = message.receiver
        ? Receiver.toJSON(message.receiver)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ReceiverChanged>): ReceiverChanged {
    const message = { ...baseReceiverChanged } as ReceiverChanged;
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = Receiver.fromPartial(object.receiver);
    } else {
      message.receiver = undefined;
    }
    return message;
  },
};

const baseReceiverRemoved: object = { token: "" };

export const ReceiverRemoved = {
  encode(
    message: ReceiverRemoved,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReceiverRemoved {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseReceiverRemoved } as ReceiverRemoved;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReceiverRemoved {
    const message = { ...baseReceiverRemoved } as ReceiverRemoved;
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    return message;
  },

  toJSON(message: ReceiverRemoved): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },

  fromPartial(object: DeepPartial<ReceiverRemoved>): ReceiverRemoved {
    const message = { ...baseReceiverRemoved } as ReceiverRemoved;
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    return message;
  },
};

const baseRecordingJobSourceAdded: object = {};

export const RecordingJobSourceAdded = {
  encode(
    message: RecordingJobSourceAdded,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.source !== undefined) {
      RecordingJobSource.encode(
        message.source,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RecordingJobSourceAdded {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRecordingJobSourceAdded,
    } as RecordingJobSourceAdded;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.source = RecordingJobSource.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RecordingJobSourceAdded {
    const message = {
      ...baseRecordingJobSourceAdded,
    } as RecordingJobSourceAdded;
    if (object.source !== undefined && object.source !== null) {
      message.source = RecordingJobSource.fromJSON(object.source);
    } else {
      message.source = undefined;
    }
    return message;
  },

  toJSON(message: RecordingJobSourceAdded): unknown {
    const obj: any = {};
    message.source !== undefined &&
      (obj.source = message.source
        ? RecordingJobSource.toJSON(message.source)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RecordingJobSourceAdded>
  ): RecordingJobSourceAdded {
    const message = {
      ...baseRecordingJobSourceAdded,
    } as RecordingJobSourceAdded;
    if (object.source !== undefined && object.source !== null) {
      message.source = RecordingJobSource.fromPartial(object.source);
    } else {
      message.source = undefined;
    }
    return message;
  },
};

const baseRecordingJobSourceRemoved: object = {
  recordingtoken: "",
  recordingjobtoken: "",
  recordingjobsourcetoken: "",
};

export const RecordingJobSourceRemoved = {
  encode(
    message: RecordingJobSourceRemoved,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.recordingtoken !== "") {
      writer.uint32(10).string(message.recordingtoken);
    }
    if (message.recordingjobtoken !== "") {
      writer.uint32(18).string(message.recordingjobtoken);
    }
    if (message.recordingjobsourcetoken !== "") {
      writer.uint32(26).string(message.recordingjobsourcetoken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RecordingJobSourceRemoved {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRecordingJobSourceRemoved,
    } as RecordingJobSourceRemoved;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recordingtoken = reader.string();
          break;
        case 2:
          message.recordingjobtoken = reader.string();
          break;
        case 3:
          message.recordingjobsourcetoken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RecordingJobSourceRemoved {
    const message = {
      ...baseRecordingJobSourceRemoved,
    } as RecordingJobSourceRemoved;
    if (object.recordingtoken !== undefined && object.recordingtoken !== null) {
      message.recordingtoken = String(object.recordingtoken);
    } else {
      message.recordingtoken = "";
    }
    if (
      object.recordingjobtoken !== undefined &&
      object.recordingjobtoken !== null
    ) {
      message.recordingjobtoken = String(object.recordingjobtoken);
    } else {
      message.recordingjobtoken = "";
    }
    if (
      object.recordingjobsourcetoken !== undefined &&
      object.recordingjobsourcetoken !== null
    ) {
      message.recordingjobsourcetoken = String(object.recordingjobsourcetoken);
    } else {
      message.recordingjobsourcetoken = "";
    }
    return message;
  },

  toJSON(message: RecordingJobSourceRemoved): unknown {
    const obj: any = {};
    message.recordingtoken !== undefined &&
      (obj.recordingtoken = message.recordingtoken);
    message.recordingjobtoken !== undefined &&
      (obj.recordingjobtoken = message.recordingjobtoken);
    message.recordingjobsourcetoken !== undefined &&
      (obj.recordingjobsourcetoken = message.recordingjobsourcetoken);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RecordingJobSourceRemoved>
  ): RecordingJobSourceRemoved {
    const message = {
      ...baseRecordingJobSourceRemoved,
    } as RecordingJobSourceRemoved;
    if (object.recordingtoken !== undefined && object.recordingtoken !== null) {
      message.recordingtoken = object.recordingtoken;
    } else {
      message.recordingtoken = "";
    }
    if (
      object.recordingjobtoken !== undefined &&
      object.recordingjobtoken !== null
    ) {
      message.recordingjobtoken = object.recordingjobtoken;
    } else {
      message.recordingjobtoken = "";
    }
    if (
      object.recordingjobsourcetoken !== undefined &&
      object.recordingjobsourcetoken !== null
    ) {
      message.recordingjobsourcetoken = object.recordingjobsourcetoken;
    } else {
      message.recordingjobsourcetoken = "";
    }
    return message;
  },
};

const baseRecordingJobSourceTrackAdded: object = {};

export const RecordingJobSourceTrackAdded = {
  encode(
    message: RecordingJobSourceTrackAdded,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.track !== undefined) {
      RecordingJobSourceTrack.encode(
        message.track,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RecordingJobSourceTrackAdded {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRecordingJobSourceTrackAdded,
    } as RecordingJobSourceTrackAdded;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.track = RecordingJobSourceTrack.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RecordingJobSourceTrackAdded {
    const message = {
      ...baseRecordingJobSourceTrackAdded,
    } as RecordingJobSourceTrackAdded;
    if (object.track !== undefined && object.track !== null) {
      message.track = RecordingJobSourceTrack.fromJSON(object.track);
    } else {
      message.track = undefined;
    }
    return message;
  },

  toJSON(message: RecordingJobSourceTrackAdded): unknown {
    const obj: any = {};
    message.track !== undefined &&
      (obj.track = message.track
        ? RecordingJobSourceTrack.toJSON(message.track)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RecordingJobSourceTrackAdded>
  ): RecordingJobSourceTrackAdded {
    const message = {
      ...baseRecordingJobSourceTrackAdded,
    } as RecordingJobSourceTrackAdded;
    if (object.track !== undefined && object.track !== null) {
      message.track = RecordingJobSourceTrack.fromPartial(object.track);
    } else {
      message.track = undefined;
    }
    return message;
  },
};

const baseRecordingJobSourceTrackRemoved: object = {
  recordingtoken: "",
  recordingjobtoken: "",
  recordingjobsourcetoken: "",
  recordingjobsourcetracktoken: "",
};

export const RecordingJobSourceTrackRemoved = {
  encode(
    message: RecordingJobSourceTrackRemoved,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.recordingtoken !== "") {
      writer.uint32(10).string(message.recordingtoken);
    }
    if (message.recordingjobtoken !== "") {
      writer.uint32(18).string(message.recordingjobtoken);
    }
    if (message.recordingjobsourcetoken !== "") {
      writer.uint32(26).string(message.recordingjobsourcetoken);
    }
    if (message.recordingjobsourcetracktoken !== "") {
      writer.uint32(34).string(message.recordingjobsourcetracktoken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RecordingJobSourceTrackRemoved {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRecordingJobSourceTrackRemoved,
    } as RecordingJobSourceTrackRemoved;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recordingtoken = reader.string();
          break;
        case 2:
          message.recordingjobtoken = reader.string();
          break;
        case 3:
          message.recordingjobsourcetoken = reader.string();
          break;
        case 4:
          message.recordingjobsourcetracktoken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RecordingJobSourceTrackRemoved {
    const message = {
      ...baseRecordingJobSourceTrackRemoved,
    } as RecordingJobSourceTrackRemoved;
    if (object.recordingtoken !== undefined && object.recordingtoken !== null) {
      message.recordingtoken = String(object.recordingtoken);
    } else {
      message.recordingtoken = "";
    }
    if (
      object.recordingjobtoken !== undefined &&
      object.recordingjobtoken !== null
    ) {
      message.recordingjobtoken = String(object.recordingjobtoken);
    } else {
      message.recordingjobtoken = "";
    }
    if (
      object.recordingjobsourcetoken !== undefined &&
      object.recordingjobsourcetoken !== null
    ) {
      message.recordingjobsourcetoken = String(object.recordingjobsourcetoken);
    } else {
      message.recordingjobsourcetoken = "";
    }
    if (
      object.recordingjobsourcetracktoken !== undefined &&
      object.recordingjobsourcetracktoken !== null
    ) {
      message.recordingjobsourcetracktoken = String(
        object.recordingjobsourcetracktoken
      );
    } else {
      message.recordingjobsourcetracktoken = "";
    }
    return message;
  },

  toJSON(message: RecordingJobSourceTrackRemoved): unknown {
    const obj: any = {};
    message.recordingtoken !== undefined &&
      (obj.recordingtoken = message.recordingtoken);
    message.recordingjobtoken !== undefined &&
      (obj.recordingjobtoken = message.recordingjobtoken);
    message.recordingjobsourcetoken !== undefined &&
      (obj.recordingjobsourcetoken = message.recordingjobsourcetoken);
    message.recordingjobsourcetracktoken !== undefined &&
      (obj.recordingjobsourcetracktoken = message.recordingjobsourcetracktoken);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RecordingJobSourceTrackRemoved>
  ): RecordingJobSourceTrackRemoved {
    const message = {
      ...baseRecordingJobSourceTrackRemoved,
    } as RecordingJobSourceTrackRemoved;
    if (object.recordingtoken !== undefined && object.recordingtoken !== null) {
      message.recordingtoken = object.recordingtoken;
    } else {
      message.recordingtoken = "";
    }
    if (
      object.recordingjobtoken !== undefined &&
      object.recordingjobtoken !== null
    ) {
      message.recordingjobtoken = object.recordingjobtoken;
    } else {
      message.recordingjobtoken = "";
    }
    if (
      object.recordingjobsourcetoken !== undefined &&
      object.recordingjobsourcetoken !== null
    ) {
      message.recordingjobsourcetoken = object.recordingjobsourcetoken;
    } else {
      message.recordingjobsourcetoken = "";
    }
    if (
      object.recordingjobsourcetracktoken !== undefined &&
      object.recordingjobsourcetracktoken !== null
    ) {
      message.recordingjobsourcetracktoken =
        object.recordingjobsourcetracktoken;
    } else {
      message.recordingjobsourcetracktoken = "";
    }
    return message;
  },
};

const baseRecordingLogMessage: object = { token: "" };

export const RecordingLogMessage = {
  encode(
    message: RecordingLogMessage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.logmessage !== undefined) {
      LogMessage.encode(message.logmessage, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecordingLogMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRecordingLogMessage } as RecordingLogMessage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        case 2:
          message.logmessage = LogMessage.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RecordingLogMessage {
    const message = { ...baseRecordingLogMessage } as RecordingLogMessage;
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    if (object.logmessage !== undefined && object.logmessage !== null) {
      message.logmessage = LogMessage.fromJSON(object.logmessage);
    } else {
      message.logmessage = undefined;
    }
    return message;
  },

  toJSON(message: RecordingLogMessage): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    message.logmessage !== undefined &&
      (obj.logmessage = message.logmessage
        ? LogMessage.toJSON(message.logmessage)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<RecordingLogMessage>): RecordingLogMessage {
    const message = { ...baseRecordingLogMessage } as RecordingLogMessage;
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    if (object.logmessage !== undefined && object.logmessage !== null) {
      message.logmessage = LogMessage.fromPartial(object.logmessage);
    } else {
      message.logmessage = undefined;
    }
    return message;
  },
};

const baseRecordingTrackLogMessage: object = { recordingtoken: "", trackid: 0 };

export const RecordingTrackLogMessage = {
  encode(
    message: RecordingTrackLogMessage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.recordingtoken !== "") {
      writer.uint32(10).string(message.recordingtoken);
    }
    if (message.trackid !== 0) {
      writer.uint32(21).fixed32(message.trackid);
    }
    if (message.logmessage !== undefined) {
      LogMessage.encode(message.logmessage, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RecordingTrackLogMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRecordingTrackLogMessage,
    } as RecordingTrackLogMessage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recordingtoken = reader.string();
          break;
        case 2:
          message.trackid = reader.fixed32();
          break;
        case 3:
          message.logmessage = LogMessage.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RecordingTrackLogMessage {
    const message = {
      ...baseRecordingTrackLogMessage,
    } as RecordingTrackLogMessage;
    if (object.recordingtoken !== undefined && object.recordingtoken !== null) {
      message.recordingtoken = String(object.recordingtoken);
    } else {
      message.recordingtoken = "";
    }
    if (object.trackid !== undefined && object.trackid !== null) {
      message.trackid = Number(object.trackid);
    } else {
      message.trackid = 0;
    }
    if (object.logmessage !== undefined && object.logmessage !== null) {
      message.logmessage = LogMessage.fromJSON(object.logmessage);
    } else {
      message.logmessage = undefined;
    }
    return message;
  },

  toJSON(message: RecordingTrackLogMessage): unknown {
    const obj: any = {};
    message.recordingtoken !== undefined &&
      (obj.recordingtoken = message.recordingtoken);
    message.trackid !== undefined && (obj.trackid = message.trackid);
    message.logmessage !== undefined &&
      (obj.logmessage = message.logmessage
        ? LogMessage.toJSON(message.logmessage)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RecordingTrackLogMessage>
  ): RecordingTrackLogMessage {
    const message = {
      ...baseRecordingTrackLogMessage,
    } as RecordingTrackLogMessage;
    if (object.recordingtoken !== undefined && object.recordingtoken !== null) {
      message.recordingtoken = object.recordingtoken;
    } else {
      message.recordingtoken = "";
    }
    if (object.trackid !== undefined && object.trackid !== null) {
      message.trackid = object.trackid;
    } else {
      message.trackid = 0;
    }
    if (object.logmessage !== undefined && object.logmessage !== null) {
      message.logmessage = LogMessage.fromPartial(object.logmessage);
    } else {
      message.logmessage = undefined;
    }
    return message;
  },
};

const baseRecordingAdded: object = {};

export const RecordingAdded = {
  encode(
    message: RecordingAdded,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.recording !== undefined) {
      Recording.encode(message.recording, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecordingAdded {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRecordingAdded } as RecordingAdded;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recording = Recording.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RecordingAdded {
    const message = { ...baseRecordingAdded } as RecordingAdded;
    if (object.recording !== undefined && object.recording !== null) {
      message.recording = Recording.fromJSON(object.recording);
    } else {
      message.recording = undefined;
    }
    return message;
  },

  toJSON(message: RecordingAdded): unknown {
    const obj: any = {};
    message.recording !== undefined &&
      (obj.recording = message.recording
        ? Recording.toJSON(message.recording)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<RecordingAdded>): RecordingAdded {
    const message = { ...baseRecordingAdded } as RecordingAdded;
    if (object.recording !== undefined && object.recording !== null) {
      message.recording = Recording.fromPartial(object.recording);
    } else {
      message.recording = undefined;
    }
    return message;
  },
};

const baseRecordingChanged: object = {};

export const RecordingChanged = {
  encode(
    message: RecordingChanged,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.recording !== undefined) {
      Recording.encode(message.recording, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecordingChanged {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRecordingChanged } as RecordingChanged;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recording = Recording.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RecordingChanged {
    const message = { ...baseRecordingChanged } as RecordingChanged;
    if (object.recording !== undefined && object.recording !== null) {
      message.recording = Recording.fromJSON(object.recording);
    } else {
      message.recording = undefined;
    }
    return message;
  },

  toJSON(message: RecordingChanged): unknown {
    const obj: any = {};
    message.recording !== undefined &&
      (obj.recording = message.recording
        ? Recording.toJSON(message.recording)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<RecordingChanged>): RecordingChanged {
    const message = { ...baseRecordingChanged } as RecordingChanged;
    if (object.recording !== undefined && object.recording !== null) {
      message.recording = Recording.fromPartial(object.recording);
    } else {
      message.recording = undefined;
    }
    return message;
  },
};

const baseRecordingRemoved: object = { token: "" };

export const RecordingRemoved = {
  encode(
    message: RecordingRemoved,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecordingRemoved {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRecordingRemoved } as RecordingRemoved;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RecordingRemoved {
    const message = { ...baseRecordingRemoved } as RecordingRemoved;
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    return message;
  },

  toJSON(message: RecordingRemoved): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },

  fromPartial(object: DeepPartial<RecordingRemoved>): RecordingRemoved {
    const message = { ...baseRecordingRemoved } as RecordingRemoved;
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    return message;
  },
};

const baseRecordingJobAdded: object = {};

export const RecordingJobAdded = {
  encode(
    message: RecordingJobAdded,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.recordingjob !== undefined) {
      RecordingJob.encode(
        message.recordingjob,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecordingJobAdded {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRecordingJobAdded } as RecordingJobAdded;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recordingjob = RecordingJob.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RecordingJobAdded {
    const message = { ...baseRecordingJobAdded } as RecordingJobAdded;
    if (object.recordingjob !== undefined && object.recordingjob !== null) {
      message.recordingjob = RecordingJob.fromJSON(object.recordingjob);
    } else {
      message.recordingjob = undefined;
    }
    return message;
  },

  toJSON(message: RecordingJobAdded): unknown {
    const obj: any = {};
    message.recordingjob !== undefined &&
      (obj.recordingjob = message.recordingjob
        ? RecordingJob.toJSON(message.recordingjob)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<RecordingJobAdded>): RecordingJobAdded {
    const message = { ...baseRecordingJobAdded } as RecordingJobAdded;
    if (object.recordingjob !== undefined && object.recordingjob !== null) {
      message.recordingjob = RecordingJob.fromPartial(object.recordingjob);
    } else {
      message.recordingjob = undefined;
    }
    return message;
  },
};

const baseRecordingJobChanged: object = {};

export const RecordingJobChanged = {
  encode(
    message: RecordingJobChanged,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.recordingjob !== undefined) {
      RecordingJob.encode(
        message.recordingjob,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecordingJobChanged {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRecordingJobChanged } as RecordingJobChanged;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recordingjob = RecordingJob.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RecordingJobChanged {
    const message = { ...baseRecordingJobChanged } as RecordingJobChanged;
    if (object.recordingjob !== undefined && object.recordingjob !== null) {
      message.recordingjob = RecordingJob.fromJSON(object.recordingjob);
    } else {
      message.recordingjob = undefined;
    }
    return message;
  },

  toJSON(message: RecordingJobChanged): unknown {
    const obj: any = {};
    message.recordingjob !== undefined &&
      (obj.recordingjob = message.recordingjob
        ? RecordingJob.toJSON(message.recordingjob)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<RecordingJobChanged>): RecordingJobChanged {
    const message = { ...baseRecordingJobChanged } as RecordingJobChanged;
    if (object.recordingjob !== undefined && object.recordingjob !== null) {
      message.recordingjob = RecordingJob.fromPartial(object.recordingjob);
    } else {
      message.recordingjob = undefined;
    }
    return message;
  },
};

const baseRecordingJobRemoved: object = {
  recordingtoken: "",
  recordingjobtoken: "",
};

export const RecordingJobRemoved = {
  encode(
    message: RecordingJobRemoved,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.recordingtoken !== "") {
      writer.uint32(10).string(message.recordingtoken);
    }
    if (message.recordingjobtoken !== "") {
      writer.uint32(18).string(message.recordingjobtoken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecordingJobRemoved {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRecordingJobRemoved } as RecordingJobRemoved;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recordingtoken = reader.string();
          break;
        case 2:
          message.recordingjobtoken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RecordingJobRemoved {
    const message = { ...baseRecordingJobRemoved } as RecordingJobRemoved;
    if (object.recordingtoken !== undefined && object.recordingtoken !== null) {
      message.recordingtoken = String(object.recordingtoken);
    } else {
      message.recordingtoken = "";
    }
    if (
      object.recordingjobtoken !== undefined &&
      object.recordingjobtoken !== null
    ) {
      message.recordingjobtoken = String(object.recordingjobtoken);
    } else {
      message.recordingjobtoken = "";
    }
    return message;
  },

  toJSON(message: RecordingJobRemoved): unknown {
    const obj: any = {};
    message.recordingtoken !== undefined &&
      (obj.recordingtoken = message.recordingtoken);
    message.recordingjobtoken !== undefined &&
      (obj.recordingjobtoken = message.recordingjobtoken);
    return obj;
  },

  fromPartial(object: DeepPartial<RecordingJobRemoved>): RecordingJobRemoved {
    const message = { ...baseRecordingJobRemoved } as RecordingJobRemoved;
    if (object.recordingtoken !== undefined && object.recordingtoken !== null) {
      message.recordingtoken = object.recordingtoken;
    } else {
      message.recordingtoken = "";
    }
    if (
      object.recordingjobtoken !== undefined &&
      object.recordingjobtoken !== null
    ) {
      message.recordingjobtoken = object.recordingjobtoken;
    } else {
      message.recordingjobtoken = "";
    }
    return message;
  },
};

const baseRecordingTrackAdded: object = {};

export const RecordingTrackAdded = {
  encode(
    message: RecordingTrackAdded,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.recordingtrack !== undefined) {
      RecordingTrack.encode(
        message.recordingtrack,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecordingTrackAdded {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRecordingTrackAdded } as RecordingTrackAdded;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recordingtrack = RecordingTrack.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RecordingTrackAdded {
    const message = { ...baseRecordingTrackAdded } as RecordingTrackAdded;
    if (object.recordingtrack !== undefined && object.recordingtrack !== null) {
      message.recordingtrack = RecordingTrack.fromJSON(object.recordingtrack);
    } else {
      message.recordingtrack = undefined;
    }
    return message;
  },

  toJSON(message: RecordingTrackAdded): unknown {
    const obj: any = {};
    message.recordingtrack !== undefined &&
      (obj.recordingtrack = message.recordingtrack
        ? RecordingTrack.toJSON(message.recordingtrack)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<RecordingTrackAdded>): RecordingTrackAdded {
    const message = { ...baseRecordingTrackAdded } as RecordingTrackAdded;
    if (object.recordingtrack !== undefined && object.recordingtrack !== null) {
      message.recordingtrack = RecordingTrack.fromPartial(
        object.recordingtrack
      );
    } else {
      message.recordingtrack = undefined;
    }
    return message;
  },
};

const baseRecordingTrackChanged: object = {};

export const RecordingTrackChanged = {
  encode(
    message: RecordingTrackChanged,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.recordingtrack !== undefined) {
      RecordingTrack.encode(
        message.recordingtrack,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RecordingTrackChanged {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRecordingTrackChanged } as RecordingTrackChanged;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recordingtrack = RecordingTrack.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RecordingTrackChanged {
    const message = { ...baseRecordingTrackChanged } as RecordingTrackChanged;
    if (object.recordingtrack !== undefined && object.recordingtrack !== null) {
      message.recordingtrack = RecordingTrack.fromJSON(object.recordingtrack);
    } else {
      message.recordingtrack = undefined;
    }
    return message;
  },

  toJSON(message: RecordingTrackChanged): unknown {
    const obj: any = {};
    message.recordingtrack !== undefined &&
      (obj.recordingtrack = message.recordingtrack
        ? RecordingTrack.toJSON(message.recordingtrack)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RecordingTrackChanged>
  ): RecordingTrackChanged {
    const message = { ...baseRecordingTrackChanged } as RecordingTrackChanged;
    if (object.recordingtrack !== undefined && object.recordingtrack !== null) {
      message.recordingtrack = RecordingTrack.fromPartial(
        object.recordingtrack
      );
    } else {
      message.recordingtrack = undefined;
    }
    return message;
  },
};

const baseRecordingTrackRemoved: object = {
  recordingtoken: "",
  recordingtrackid: 0,
};

export const RecordingTrackRemoved = {
  encode(
    message: RecordingTrackRemoved,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.recordingtoken !== "") {
      writer.uint32(10).string(message.recordingtoken);
    }
    if (message.recordingtrackid !== 0) {
      writer.uint32(21).fixed32(message.recordingtrackid);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RecordingTrackRemoved {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRecordingTrackRemoved } as RecordingTrackRemoved;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recordingtoken = reader.string();
          break;
        case 2:
          message.recordingtrackid = reader.fixed32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RecordingTrackRemoved {
    const message = { ...baseRecordingTrackRemoved } as RecordingTrackRemoved;
    if (object.recordingtoken !== undefined && object.recordingtoken !== null) {
      message.recordingtoken = String(object.recordingtoken);
    } else {
      message.recordingtoken = "";
    }
    if (
      object.recordingtrackid !== undefined &&
      object.recordingtrackid !== null
    ) {
      message.recordingtrackid = Number(object.recordingtrackid);
    } else {
      message.recordingtrackid = 0;
    }
    return message;
  },

  toJSON(message: RecordingTrackRemoved): unknown {
    const obj: any = {};
    message.recordingtoken !== undefined &&
      (obj.recordingtoken = message.recordingtoken);
    message.recordingtrackid !== undefined &&
      (obj.recordingtrackid = message.recordingtrackid);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RecordingTrackRemoved>
  ): RecordingTrackRemoved {
    const message = { ...baseRecordingTrackRemoved } as RecordingTrackRemoved;
    if (object.recordingtoken !== undefined && object.recordingtoken !== null) {
      message.recordingtoken = object.recordingtoken;
    } else {
      message.recordingtoken = "";
    }
    if (
      object.recordingtrackid !== undefined &&
      object.recordingtrackid !== null
    ) {
      message.recordingtrackid = object.recordingtrackid;
    } else {
      message.recordingtrackid = 0;
    }
    return message;
  },
};

const baseRecordingActiveJobChanged: object = { recordingtoken: "" };

export const RecordingActiveJobChanged = {
  encode(
    message: RecordingActiveJobChanged,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.recordingtoken !== "") {
      writer.uint32(10).string(message.recordingtoken);
    }
    if (message.activejob !== undefined) {
      UInt64Value.encode(
        { value: message.activejob! },
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RecordingActiveJobChanged {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRecordingActiveJobChanged,
    } as RecordingActiveJobChanged;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recordingtoken = reader.string();
          break;
        case 2:
          message.activejob = UInt64Value.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RecordingActiveJobChanged {
    const message = {
      ...baseRecordingActiveJobChanged,
    } as RecordingActiveJobChanged;
    if (object.recordingtoken !== undefined && object.recordingtoken !== null) {
      message.recordingtoken = String(object.recordingtoken);
    } else {
      message.recordingtoken = "";
    }
    if (object.activejob !== undefined && object.activejob !== null) {
      message.activejob = String(object.activejob);
    } else {
      message.activejob = undefined;
    }
    return message;
  },

  toJSON(message: RecordingActiveJobChanged): unknown {
    const obj: any = {};
    message.recordingtoken !== undefined &&
      (obj.recordingtoken = message.recordingtoken);
    message.activejob !== undefined && (obj.activejob = message.activejob);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RecordingActiveJobChanged>
  ): RecordingActiveJobChanged {
    const message = {
      ...baseRecordingActiveJobChanged,
    } as RecordingActiveJobChanged;
    if (object.recordingtoken !== undefined && object.recordingtoken !== null) {
      message.recordingtoken = object.recordingtoken;
    } else {
      message.recordingtoken = "";
    }
    if (object.activejob !== undefined && object.activejob !== null) {
      message.activejob = object.activejob;
    } else {
      message.activejob = undefined;
    }
    return message;
  },
};

const baseRecordingJobSourceTrackActiveParametersChanged: object = {
  recordingtoken: "",
  recordingjobtoken: "",
  recordingjobsourcetoken: "",
  recordingjobsourcetracktoken: "",
  activeparameters: "",
};

export const RecordingJobSourceTrackActiveParametersChanged = {
  encode(
    message: RecordingJobSourceTrackActiveParametersChanged,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.recordingtoken !== "") {
      writer.uint32(10).string(message.recordingtoken);
    }
    if (message.recordingjobtoken !== "") {
      writer.uint32(18).string(message.recordingjobtoken);
    }
    if (message.recordingjobsourcetoken !== "") {
      writer.uint32(26).string(message.recordingjobsourcetoken);
    }
    if (message.recordingjobsourcetracktoken !== "") {
      writer.uint32(34).string(message.recordingjobsourcetracktoken);
    }
    for (const v of message.activeparameters) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RecordingJobSourceTrackActiveParametersChanged {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRecordingJobSourceTrackActiveParametersChanged,
    } as RecordingJobSourceTrackActiveParametersChanged;
    message.activeparameters = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recordingtoken = reader.string();
          break;
        case 2:
          message.recordingjobtoken = reader.string();
          break;
        case 3:
          message.recordingjobsourcetoken = reader.string();
          break;
        case 4:
          message.recordingjobsourcetracktoken = reader.string();
          break;
        case 5:
          message.activeparameters.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RecordingJobSourceTrackActiveParametersChanged {
    const message = {
      ...baseRecordingJobSourceTrackActiveParametersChanged,
    } as RecordingJobSourceTrackActiveParametersChanged;
    message.activeparameters = [];
    if (object.recordingtoken !== undefined && object.recordingtoken !== null) {
      message.recordingtoken = String(object.recordingtoken);
    } else {
      message.recordingtoken = "";
    }
    if (
      object.recordingjobtoken !== undefined &&
      object.recordingjobtoken !== null
    ) {
      message.recordingjobtoken = String(object.recordingjobtoken);
    } else {
      message.recordingjobtoken = "";
    }
    if (
      object.recordingjobsourcetoken !== undefined &&
      object.recordingjobsourcetoken !== null
    ) {
      message.recordingjobsourcetoken = String(object.recordingjobsourcetoken);
    } else {
      message.recordingjobsourcetoken = "";
    }
    if (
      object.recordingjobsourcetracktoken !== undefined &&
      object.recordingjobsourcetracktoken !== null
    ) {
      message.recordingjobsourcetracktoken = String(
        object.recordingjobsourcetracktoken
      );
    } else {
      message.recordingjobsourcetracktoken = "";
    }
    if (
      object.activeparameters !== undefined &&
      object.activeparameters !== null
    ) {
      for (const e of object.activeparameters) {
        message.activeparameters.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: RecordingJobSourceTrackActiveParametersChanged): unknown {
    const obj: any = {};
    message.recordingtoken !== undefined &&
      (obj.recordingtoken = message.recordingtoken);
    message.recordingjobtoken !== undefined &&
      (obj.recordingjobtoken = message.recordingjobtoken);
    message.recordingjobsourcetoken !== undefined &&
      (obj.recordingjobsourcetoken = message.recordingjobsourcetoken);
    message.recordingjobsourcetracktoken !== undefined &&
      (obj.recordingjobsourcetracktoken = message.recordingjobsourcetracktoken);
    if (message.activeparameters) {
      obj.activeparameters = message.activeparameters.map((e) => e);
    } else {
      obj.activeparameters = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<RecordingJobSourceTrackActiveParametersChanged>
  ): RecordingJobSourceTrackActiveParametersChanged {
    const message = {
      ...baseRecordingJobSourceTrackActiveParametersChanged,
    } as RecordingJobSourceTrackActiveParametersChanged;
    message.activeparameters = [];
    if (object.recordingtoken !== undefined && object.recordingtoken !== null) {
      message.recordingtoken = object.recordingtoken;
    } else {
      message.recordingtoken = "";
    }
    if (
      object.recordingjobtoken !== undefined &&
      object.recordingjobtoken !== null
    ) {
      message.recordingjobtoken = object.recordingjobtoken;
    } else {
      message.recordingjobtoken = "";
    }
    if (
      object.recordingjobsourcetoken !== undefined &&
      object.recordingjobsourcetoken !== null
    ) {
      message.recordingjobsourcetoken = object.recordingjobsourcetoken;
    } else {
      message.recordingjobsourcetoken = "";
    }
    if (
      object.recordingjobsourcetracktoken !== undefined &&
      object.recordingjobsourcetracktoken !== null
    ) {
      message.recordingjobsourcetracktoken =
        object.recordingjobsourcetracktoken;
    } else {
      message.recordingjobsourcetracktoken = "";
    }
    if (
      object.activeparameters !== undefined &&
      object.activeparameters !== null
    ) {
      for (const e of object.activeparameters) {
        message.activeparameters.push(e);
      }
    }
    return message;
  },
};

const baseRecordingJobSourceTrackState: object = {
  recordingtoken: "",
  recordingjobtoken: "",
  recordingjobsourcetoken: "",
  recordingjobsourcetracktoken: "",
  time: "0",
  state: 0,
  error: "",
};

export const RecordingJobSourceTrackState = {
  encode(
    message: RecordingJobSourceTrackState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.recordingtoken !== "") {
      writer.uint32(10).string(message.recordingtoken);
    }
    if (message.recordingjobtoken !== "") {
      writer.uint32(18).string(message.recordingjobtoken);
    }
    if (message.recordingjobsourcetoken !== "") {
      writer.uint32(26).string(message.recordingjobsourcetoken);
    }
    if (message.recordingjobsourcetracktoken !== "") {
      writer.uint32(34).string(message.recordingjobsourcetracktoken);
    }
    if (message.time !== "0") {
      writer.uint32(41).fixed64(message.time);
    }
    if (message.state !== 0) {
      writer.uint32(48).int32(message.state);
    }
    if (message.error !== "") {
      writer.uint32(58).string(message.error);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RecordingJobSourceTrackState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRecordingJobSourceTrackState,
    } as RecordingJobSourceTrackState;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recordingtoken = reader.string();
          break;
        case 2:
          message.recordingjobtoken = reader.string();
          break;
        case 3:
          message.recordingjobsourcetoken = reader.string();
          break;
        case 4:
          message.recordingjobsourcetracktoken = reader.string();
          break;
        case 5:
          message.time = longToString(reader.fixed64() as Long);
          break;
        case 6:
          message.state = reader.int32() as any;
          break;
        case 7:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RecordingJobSourceTrackState {
    const message = {
      ...baseRecordingJobSourceTrackState,
    } as RecordingJobSourceTrackState;
    if (object.recordingtoken !== undefined && object.recordingtoken !== null) {
      message.recordingtoken = String(object.recordingtoken);
    } else {
      message.recordingtoken = "";
    }
    if (
      object.recordingjobtoken !== undefined &&
      object.recordingjobtoken !== null
    ) {
      message.recordingjobtoken = String(object.recordingjobtoken);
    } else {
      message.recordingjobtoken = "";
    }
    if (
      object.recordingjobsourcetoken !== undefined &&
      object.recordingjobsourcetoken !== null
    ) {
      message.recordingjobsourcetoken = String(object.recordingjobsourcetoken);
    } else {
      message.recordingjobsourcetoken = "";
    }
    if (
      object.recordingjobsourcetracktoken !== undefined &&
      object.recordingjobsourcetracktoken !== null
    ) {
      message.recordingjobsourcetracktoken = String(
        object.recordingjobsourcetracktoken
      );
    } else {
      message.recordingjobsourcetracktoken = "";
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = String(object.time);
    } else {
      message.time = "0";
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = recordingJobStateFromJSON(object.state);
    } else {
      message.state = 0;
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = String(object.error);
    } else {
      message.error = "";
    }
    return message;
  },

  toJSON(message: RecordingJobSourceTrackState): unknown {
    const obj: any = {};
    message.recordingtoken !== undefined &&
      (obj.recordingtoken = message.recordingtoken);
    message.recordingjobtoken !== undefined &&
      (obj.recordingjobtoken = message.recordingjobtoken);
    message.recordingjobsourcetoken !== undefined &&
      (obj.recordingjobsourcetoken = message.recordingjobsourcetoken);
    message.recordingjobsourcetracktoken !== undefined &&
      (obj.recordingjobsourcetracktoken = message.recordingjobsourcetracktoken);
    message.time !== undefined && (obj.time = message.time);
    message.state !== undefined &&
      (obj.state = recordingJobStateToJSON(message.state));
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RecordingJobSourceTrackState>
  ): RecordingJobSourceTrackState {
    const message = {
      ...baseRecordingJobSourceTrackState,
    } as RecordingJobSourceTrackState;
    if (object.recordingtoken !== undefined && object.recordingtoken !== null) {
      message.recordingtoken = object.recordingtoken;
    } else {
      message.recordingtoken = "";
    }
    if (
      object.recordingjobtoken !== undefined &&
      object.recordingjobtoken !== null
    ) {
      message.recordingjobtoken = object.recordingjobtoken;
    } else {
      message.recordingjobtoken = "";
    }
    if (
      object.recordingjobsourcetoken !== undefined &&
      object.recordingjobsourcetoken !== null
    ) {
      message.recordingjobsourcetoken = object.recordingjobsourcetoken;
    } else {
      message.recordingjobsourcetoken = "";
    }
    if (
      object.recordingjobsourcetracktoken !== undefined &&
      object.recordingjobsourcetracktoken !== null
    ) {
      message.recordingjobsourcetracktoken =
        object.recordingjobsourcetracktoken;
    } else {
      message.recordingjobsourcetracktoken = "";
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = object.time;
    } else {
      message.time = "0";
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    } else {
      message.state = 0;
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    } else {
      message.error = "";
    }
    return message;
  },
};

const baseRecordingTrackCodecAdded: object = {
  recordingtoken: "",
  recordingtrackid: 0,
  codecid: "0",
  codec: 0,
  parameters: "",
  timestamp: "0",
};

export const RecordingTrackCodecAdded = {
  encode(
    message: RecordingTrackCodecAdded,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.recordingtoken !== "") {
      writer.uint32(10).string(message.recordingtoken);
    }
    if (message.recordingtrackid !== 0) {
      writer.uint32(21).fixed32(message.recordingtrackid);
    }
    if (message.codecid !== "0") {
      writer.uint32(25).fixed64(message.codecid);
    }
    if (message.codec !== 0) {
      writer.uint32(32).int32(message.codec);
    }
    if (message.parameters !== "") {
      writer.uint32(42).string(message.parameters);
    }
    if (message.timestamp !== "0") {
      writer.uint32(49).fixed64(message.timestamp);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RecordingTrackCodecAdded {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRecordingTrackCodecAdded,
    } as RecordingTrackCodecAdded;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recordingtoken = reader.string();
          break;
        case 2:
          message.recordingtrackid = reader.fixed32();
          break;
        case 3:
          message.codecid = longToString(reader.fixed64() as Long);
          break;
        case 4:
          message.codec = reader.int32() as any;
          break;
        case 5:
          message.parameters = reader.string();
          break;
        case 6:
          message.timestamp = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RecordingTrackCodecAdded {
    const message = {
      ...baseRecordingTrackCodecAdded,
    } as RecordingTrackCodecAdded;
    if (object.recordingtoken !== undefined && object.recordingtoken !== null) {
      message.recordingtoken = String(object.recordingtoken);
    } else {
      message.recordingtoken = "";
    }
    if (
      object.recordingtrackid !== undefined &&
      object.recordingtrackid !== null
    ) {
      message.recordingtrackid = Number(object.recordingtrackid);
    } else {
      message.recordingtrackid = 0;
    }
    if (object.codecid !== undefined && object.codecid !== null) {
      message.codecid = String(object.codecid);
    } else {
      message.codecid = "0";
    }
    if (object.codec !== undefined && object.codec !== null) {
      message.codec = codecFromJSON(object.codec);
    } else {
      message.codec = 0;
    }
    if (object.parameters !== undefined && object.parameters !== null) {
      message.parameters = String(object.parameters);
    } else {
      message.parameters = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = String(object.timestamp);
    } else {
      message.timestamp = "0";
    }
    return message;
  },

  toJSON(message: RecordingTrackCodecAdded): unknown {
    const obj: any = {};
    message.recordingtoken !== undefined &&
      (obj.recordingtoken = message.recordingtoken);
    message.recordingtrackid !== undefined &&
      (obj.recordingtrackid = message.recordingtrackid);
    message.codecid !== undefined && (obj.codecid = message.codecid);
    message.codec !== undefined && (obj.codec = codecToJSON(message.codec));
    message.parameters !== undefined && (obj.parameters = message.parameters);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RecordingTrackCodecAdded>
  ): RecordingTrackCodecAdded {
    const message = {
      ...baseRecordingTrackCodecAdded,
    } as RecordingTrackCodecAdded;
    if (object.recordingtoken !== undefined && object.recordingtoken !== null) {
      message.recordingtoken = object.recordingtoken;
    } else {
      message.recordingtoken = "";
    }
    if (
      object.recordingtrackid !== undefined &&
      object.recordingtrackid !== null
    ) {
      message.recordingtrackid = object.recordingtrackid;
    } else {
      message.recordingtrackid = 0;
    }
    if (object.codecid !== undefined && object.codecid !== null) {
      message.codecid = object.codecid;
    } else {
      message.codecid = "0";
    }
    if (object.codec !== undefined && object.codec !== null) {
      message.codec = object.codec;
    } else {
      message.codec = 0;
    }
    if (object.parameters !== undefined && object.parameters !== null) {
      message.parameters = object.parameters;
    } else {
      message.parameters = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = "0";
    }
    return message;
  },
};

const baseRecordingTrackCodecRemoved: object = {
  recordingtoken: "",
  recordingtrackid: 0,
  codecid: "0",
};

export const RecordingTrackCodecRemoved = {
  encode(
    message: RecordingTrackCodecRemoved,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.recordingtoken !== "") {
      writer.uint32(10).string(message.recordingtoken);
    }
    if (message.recordingtrackid !== 0) {
      writer.uint32(21).fixed32(message.recordingtrackid);
    }
    if (message.codecid !== "0") {
      writer.uint32(25).fixed64(message.codecid);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RecordingTrackCodecRemoved {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRecordingTrackCodecRemoved,
    } as RecordingTrackCodecRemoved;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recordingtoken = reader.string();
          break;
        case 2:
          message.recordingtrackid = reader.fixed32();
          break;
        case 3:
          message.codecid = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RecordingTrackCodecRemoved {
    const message = {
      ...baseRecordingTrackCodecRemoved,
    } as RecordingTrackCodecRemoved;
    if (object.recordingtoken !== undefined && object.recordingtoken !== null) {
      message.recordingtoken = String(object.recordingtoken);
    } else {
      message.recordingtoken = "";
    }
    if (
      object.recordingtrackid !== undefined &&
      object.recordingtrackid !== null
    ) {
      message.recordingtrackid = Number(object.recordingtrackid);
    } else {
      message.recordingtrackid = 0;
    }
    if (object.codecid !== undefined && object.codecid !== null) {
      message.codecid = String(object.codecid);
    } else {
      message.codecid = "0";
    }
    return message;
  },

  toJSON(message: RecordingTrackCodecRemoved): unknown {
    const obj: any = {};
    message.recordingtoken !== undefined &&
      (obj.recordingtoken = message.recordingtoken);
    message.recordingtrackid !== undefined &&
      (obj.recordingtrackid = message.recordingtrackid);
    message.codecid !== undefined && (obj.codecid = message.codecid);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RecordingTrackCodecRemoved>
  ): RecordingTrackCodecRemoved {
    const message = {
      ...baseRecordingTrackCodecRemoved,
    } as RecordingTrackCodecRemoved;
    if (object.recordingtoken !== undefined && object.recordingtoken !== null) {
      message.recordingtoken = object.recordingtoken;
    } else {
      message.recordingtoken = "";
    }
    if (
      object.recordingtrackid !== undefined &&
      object.recordingtrackid !== null
    ) {
      message.recordingtrackid = object.recordingtrackid;
    } else {
      message.recordingtrackid = 0;
    }
    if (object.codecid !== undefined && object.codecid !== null) {
      message.codecid = object.codecid;
    } else {
      message.codecid = "0";
    }
    return message;
  },
};

const baseServerLogMessage: object = {};

export const ServerLogMessage = {
  encode(
    message: ServerLogMessage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.logmessage !== undefined) {
      LogMessage.encode(message.logmessage, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServerLogMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseServerLogMessage } as ServerLogMessage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.logmessage = LogMessage.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ServerLogMessage {
    const message = { ...baseServerLogMessage } as ServerLogMessage;
    if (object.logmessage !== undefined && object.logmessage !== null) {
      message.logmessage = LogMessage.fromJSON(object.logmessage);
    } else {
      message.logmessage = undefined;
    }
    return message;
  },

  toJSON(message: ServerLogMessage): unknown {
    const obj: any = {};
    message.logmessage !== undefined &&
      (obj.logmessage = message.logmessage
        ? LogMessage.toJSON(message.logmessage)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ServerLogMessage>): ServerLogMessage {
    const message = { ...baseServerLogMessage } as ServerLogMessage;
    if (object.logmessage !== undefined && object.logmessage !== null) {
      message.logmessage = LogMessage.fromPartial(object.logmessage);
    } else {
      message.logmessage = undefined;
    }
    return message;
  },
};

const baseRecordingTrackSetData: object = {
  recordingtoken: "",
  recordingtrackid: 0,
};

export const RecordingTrackSetData = {
  encode(
    message: RecordingTrackSetData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.recordingtoken !== "") {
      writer.uint32(10).string(message.recordingtoken);
    }
    if (message.recordingtrackid !== 0) {
      writer.uint32(21).fixed32(message.recordingtrackid);
    }
    for (const v of message.indices) {
      Index.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RecordingTrackSetData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRecordingTrackSetData } as RecordingTrackSetData;
    message.indices = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recordingtoken = reader.string();
          break;
        case 2:
          message.recordingtrackid = reader.fixed32();
          break;
        case 3:
          message.indices.push(Index.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RecordingTrackSetData {
    const message = { ...baseRecordingTrackSetData } as RecordingTrackSetData;
    message.indices = [];
    if (object.recordingtoken !== undefined && object.recordingtoken !== null) {
      message.recordingtoken = String(object.recordingtoken);
    } else {
      message.recordingtoken = "";
    }
    if (
      object.recordingtrackid !== undefined &&
      object.recordingtrackid !== null
    ) {
      message.recordingtrackid = Number(object.recordingtrackid);
    } else {
      message.recordingtrackid = 0;
    }
    if (object.indices !== undefined && object.indices !== null) {
      for (const e of object.indices) {
        message.indices.push(Index.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: RecordingTrackSetData): unknown {
    const obj: any = {};
    message.recordingtoken !== undefined &&
      (obj.recordingtoken = message.recordingtoken);
    message.recordingtrackid !== undefined &&
      (obj.recordingtrackid = message.recordingtrackid);
    if (message.indices) {
      obj.indices = message.indices.map((e) =>
        e ? Index.toJSON(e) : undefined
      );
    } else {
      obj.indices = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<RecordingTrackSetData>
  ): RecordingTrackSetData {
    const message = { ...baseRecordingTrackSetData } as RecordingTrackSetData;
    message.indices = [];
    if (object.recordingtoken !== undefined && object.recordingtoken !== null) {
      message.recordingtoken = object.recordingtoken;
    } else {
      message.recordingtoken = "";
    }
    if (
      object.recordingtrackid !== undefined &&
      object.recordingtrackid !== null
    ) {
      message.recordingtrackid = object.recordingtrackid;
    } else {
      message.recordingtrackid = 0;
    }
    if (object.indices !== undefined && object.indices !== null) {
      for (const e of object.indices) {
        message.indices.push(Index.fromPartial(e));
      }
    }
    return message;
  },
};

const baseRecordingTrackDeleteData: object = {
  recordingtoken: "",
  recordingtrackid: 0,
};

export const RecordingTrackDeleteData = {
  encode(
    message: RecordingTrackDeleteData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.recordingtoken !== "") {
      writer.uint32(10).string(message.recordingtoken);
    }
    if (message.recordingtrackid !== 0) {
      writer.uint32(21).fixed32(message.recordingtrackid);
    }
    if (message.start !== undefined) {
      UInt64Value.encode(
        { value: message.start! },
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.end !== undefined) {
      UInt64Value.encode(
        { value: message.end! },
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RecordingTrackDeleteData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRecordingTrackDeleteData,
    } as RecordingTrackDeleteData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recordingtoken = reader.string();
          break;
        case 2:
          message.recordingtrackid = reader.fixed32();
          break;
        case 3:
          message.start = UInt64Value.decode(reader, reader.uint32()).value;
          break;
        case 4:
          message.end = UInt64Value.decode(reader, reader.uint32()).value;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RecordingTrackDeleteData {
    const message = {
      ...baseRecordingTrackDeleteData,
    } as RecordingTrackDeleteData;
    if (object.recordingtoken !== undefined && object.recordingtoken !== null) {
      message.recordingtoken = String(object.recordingtoken);
    } else {
      message.recordingtoken = "";
    }
    if (
      object.recordingtrackid !== undefined &&
      object.recordingtrackid !== null
    ) {
      message.recordingtrackid = Number(object.recordingtrackid);
    } else {
      message.recordingtrackid = 0;
    }
    if (object.start !== undefined && object.start !== null) {
      message.start = String(object.start);
    } else {
      message.start = undefined;
    }
    if (object.end !== undefined && object.end !== null) {
      message.end = String(object.end);
    } else {
      message.end = undefined;
    }
    return message;
  },

  toJSON(message: RecordingTrackDeleteData): unknown {
    const obj: any = {};
    message.recordingtoken !== undefined &&
      (obj.recordingtoken = message.recordingtoken);
    message.recordingtrackid !== undefined &&
      (obj.recordingtrackid = message.recordingtrackid);
    message.start !== undefined && (obj.start = message.start);
    message.end !== undefined && (obj.end = message.end);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RecordingTrackDeleteData>
  ): RecordingTrackDeleteData {
    const message = {
      ...baseRecordingTrackDeleteData,
    } as RecordingTrackDeleteData;
    if (object.recordingtoken !== undefined && object.recordingtoken !== null) {
      message.recordingtoken = object.recordingtoken;
    } else {
      message.recordingtoken = "";
    }
    if (
      object.recordingtrackid !== undefined &&
      object.recordingtrackid !== null
    ) {
      message.recordingtrackid = object.recordingtrackid;
    } else {
      message.recordingtrackid = 0;
    }
    if (object.start !== undefined && object.start !== null) {
      message.start = object.start;
    } else {
      message.start = undefined;
    }
    if (object.end !== undefined && object.end !== null) {
      message.end = object.end;
    } else {
      message.end = undefined;
    }
    return message;
  },
};

const baseUserAdded: object = {};

export const UserAdded = {
  encode(
    message: UserAdded,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserAdded {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUserAdded } as UserAdded;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = User.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserAdded {
    const message = { ...baseUserAdded } as UserAdded;
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromJSON(object.user);
    } else {
      message.user = undefined;
    }
    return message;
  },

  toJSON(message: UserAdded): unknown {
    const obj: any = {};
    message.user !== undefined &&
      (obj.user = message.user ? User.toJSON(message.user) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<UserAdded>): UserAdded {
    const message = { ...baseUserAdded } as UserAdded;
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromPartial(object.user);
    } else {
      message.user = undefined;
    }
    return message;
  },
};

const baseUserChanged: object = { token: "", grouptoken: "" };

export const UserChanged = {
  encode(
    message: UserChanged,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.grouptoken !== "") {
      writer.uint32(18).string(message.grouptoken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserChanged {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUserChanged } as UserChanged;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        case 2:
          message.grouptoken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserChanged {
    const message = { ...baseUserChanged } as UserChanged;
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    if (object.grouptoken !== undefined && object.grouptoken !== null) {
      message.grouptoken = String(object.grouptoken);
    } else {
      message.grouptoken = "";
    }
    return message;
  },

  toJSON(message: UserChanged): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    message.grouptoken !== undefined && (obj.grouptoken = message.grouptoken);
    return obj;
  },

  fromPartial(object: DeepPartial<UserChanged>): UserChanged {
    const message = { ...baseUserChanged } as UserChanged;
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    if (object.grouptoken !== undefined && object.grouptoken !== null) {
      message.grouptoken = object.grouptoken;
    } else {
      message.grouptoken = "";
    }
    return message;
  },
};

const baseUserRemoved: object = { token: "" };

export const UserRemoved = {
  encode(
    message: UserRemoved,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserRemoved {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUserRemoved } as UserRemoved;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserRemoved {
    const message = { ...baseUserRemoved } as UserRemoved;
    if (object.token !== undefined && object.token !== null) {
      message.token = String(object.token);
    } else {
      message.token = "";
    }
    return message;
  },

  toJSON(message: UserRemoved): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },

  fromPartial(object: DeepPartial<UserRemoved>): UserRemoved {
    const message = { ...baseUserRemoved } as UserRemoved;
    if (object.token !== undefined && object.token !== null) {
      message.token = object.token;
    } else {
      message.token = "";
    }
    return message;
  },
};

const baseAddIceCandidateWebRTCRequest: object = {
  peerid: "",
  icecandidiate: "",
};

export const AddIceCandidateWebRTCRequest = {
  encode(
    message: AddIceCandidateWebRTCRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.peerid !== "") {
      writer.uint32(10).string(message.peerid);
    }
    if (message.icecandidiate !== "") {
      writer.uint32(18).string(message.icecandidiate);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddIceCandidateWebRTCRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAddIceCandidateWebRTCRequest,
    } as AddIceCandidateWebRTCRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.peerid = reader.string();
          break;
        case 2:
          message.icecandidiate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddIceCandidateWebRTCRequest {
    const message = {
      ...baseAddIceCandidateWebRTCRequest,
    } as AddIceCandidateWebRTCRequest;
    if (object.peerid !== undefined && object.peerid !== null) {
      message.peerid = String(object.peerid);
    } else {
      message.peerid = "";
    }
    if (object.icecandidiate !== undefined && object.icecandidiate !== null) {
      message.icecandidiate = String(object.icecandidiate);
    } else {
      message.icecandidiate = "";
    }
    return message;
  },

  toJSON(message: AddIceCandidateWebRTCRequest): unknown {
    const obj: any = {};
    message.peerid !== undefined && (obj.peerid = message.peerid);
    message.icecandidiate !== undefined &&
      (obj.icecandidiate = message.icecandidiate);
    return obj;
  },

  fromPartial(
    object: DeepPartial<AddIceCandidateWebRTCRequest>
  ): AddIceCandidateWebRTCRequest {
    const message = {
      ...baseAddIceCandidateWebRTCRequest,
    } as AddIceCandidateWebRTCRequest;
    if (object.peerid !== undefined && object.peerid !== null) {
      message.peerid = object.peerid;
    } else {
      message.peerid = "";
    }
    if (object.icecandidiate !== undefined && object.icecandidiate !== null) {
      message.icecandidiate = object.icecandidiate;
    } else {
      message.icecandidiate = "";
    }
    return message;
  },
};

const baseAddIceCandidateWebRTCResponse: object = {};

export const AddIceCandidateWebRTCResponse = {
  encode(
    _: AddIceCandidateWebRTCResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AddIceCandidateWebRTCResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAddIceCandidateWebRTCResponse,
    } as AddIceCandidateWebRTCResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): AddIceCandidateWebRTCResponse {
    const message = {
      ...baseAddIceCandidateWebRTCResponse,
    } as AddIceCandidateWebRTCResponse;
    return message;
  },

  toJSON(_: AddIceCandidateWebRTCResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<AddIceCandidateWebRTCResponse>
  ): AddIceCandidateWebRTCResponse {
    const message = {
      ...baseAddIceCandidateWebRTCResponse,
    } as AddIceCandidateWebRTCResponse;
    return message;
  },
};

const baseAuthenticateRequest: object = { username: "", password: "" };

export const AuthenticateRequest = {
  encode(
    message: AuthenticateRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.username !== "") {
      writer.uint32(10).string(message.username);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthenticateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAuthenticateRequest } as AuthenticateRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.username = reader.string();
          break;
        case 2:
          message.password = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthenticateRequest {
    const message = { ...baseAuthenticateRequest } as AuthenticateRequest;
    if (object.username !== undefined && object.username !== null) {
      message.username = String(object.username);
    } else {
      message.username = "";
    }
    if (object.password !== undefined && object.password !== null) {
      message.password = String(object.password);
    } else {
      message.password = "";
    }
    return message;
  },

  toJSON(message: AuthenticateRequest): unknown {
    const obj: any = {};
    message.username !== undefined && (obj.username = message.username);
    message.password !== undefined && (obj.password = message.password);
    return obj;
  },

  fromPartial(object: DeepPartial<AuthenticateRequest>): AuthenticateRequest {
    const message = { ...baseAuthenticateRequest } as AuthenticateRequest;
    if (object.username !== undefined && object.username !== null) {
      message.username = object.username;
    } else {
      message.username = "";
    }
    if (object.password !== undefined && object.password !== null) {
      message.password = object.password;
    } else {
      message.password = "";
    }
    return message;
  },
};

const baseAuthenticateResponse: object = { jwttoken: "" };

export const AuthenticateResponse = {
  encode(
    message: AuthenticateResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.jwttoken !== "") {
      writer.uint32(10).string(message.jwttoken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AuthenticateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAuthenticateResponse } as AuthenticateResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.jwttoken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthenticateResponse {
    const message = { ...baseAuthenticateResponse } as AuthenticateResponse;
    if (object.jwttoken !== undefined && object.jwttoken !== null) {
      message.jwttoken = String(object.jwttoken);
    } else {
      message.jwttoken = "";
    }
    return message;
  },

  toJSON(message: AuthenticateResponse): unknown {
    const obj: any = {};
    message.jwttoken !== undefined && (obj.jwttoken = message.jwttoken);
    return obj;
  },

  fromPartial(object: DeepPartial<AuthenticateResponse>): AuthenticateResponse {
    const message = { ...baseAuthenticateResponse } as AuthenticateResponse;
    if (object.jwttoken !== undefined && object.jwttoken !== null) {
      message.jwttoken = object.jwttoken;
    } else {
      message.jwttoken = "";
    }
    return message;
  },
};

const baseAddUserRequest: object = { username: "", digest: "", group: "" };

export const AddUserRequest = {
  encode(
    message: AddUserRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.username !== "") {
      writer.uint32(10).string(message.username);
    }
    if (message.digest !== "") {
      writer.uint32(18).string(message.digest);
    }
    if (message.group !== "") {
      writer.uint32(26).string(message.group);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddUserRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAddUserRequest } as AddUserRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.username = reader.string();
          break;
        case 2:
          message.digest = reader.string();
          break;
        case 3:
          message.group = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddUserRequest {
    const message = { ...baseAddUserRequest } as AddUserRequest;
    if (object.username !== undefined && object.username !== null) {
      message.username = String(object.username);
    } else {
      message.username = "";
    }
    if (object.digest !== undefined && object.digest !== null) {
      message.digest = String(object.digest);
    } else {
      message.digest = "";
    }
    if (object.group !== undefined && object.group !== null) {
      message.group = String(object.group);
    } else {
      message.group = "";
    }
    return message;
  },

  toJSON(message: AddUserRequest): unknown {
    const obj: any = {};
    message.username !== undefined && (obj.username = message.username);
    message.digest !== undefined && (obj.digest = message.digest);
    message.group !== undefined && (obj.group = message.group);
    return obj;
  },

  fromPartial(object: DeepPartial<AddUserRequest>): AddUserRequest {
    const message = { ...baseAddUserRequest } as AddUserRequest;
    if (object.username !== undefined && object.username !== null) {
      message.username = object.username;
    } else {
      message.username = "";
    }
    if (object.digest !== undefined && object.digest !== null) {
      message.digest = object.digest;
    } else {
      message.digest = "";
    }
    if (object.group !== undefined && object.group !== null) {
      message.group = object.group;
    } else {
      message.group = "";
    }
    return message;
  },
};

const baseAddUserResponse: object = {};

export const AddUserResponse = {
  encode(
    _: AddUserResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddUserResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAddUserResponse } as AddUserResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): AddUserResponse {
    const message = { ...baseAddUserResponse } as AddUserResponse;
    return message;
  },

  toJSON(_: AddUserResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<AddUserResponse>): AddUserResponse {
    const message = { ...baseAddUserResponse } as AddUserResponse;
    return message;
  },
};

const baseCallWebRTCRequest: object = {
  recording: "",
  videotrackid: 0,
  sdp: "",
};

export const CallWebRTCRequest = {
  encode(
    message: CallWebRTCRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.recording !== "") {
      writer.uint32(10).string(message.recording);
    }
    if (message.videotrackid !== 0) {
      writer.uint32(21).fixed32(message.videotrackid);
    }
    if (message.audiotrackid !== undefined) {
      writer.uint32(29).fixed32(message.audiotrackid);
    }
    if (message.sdp !== "") {
      writer.uint32(34).string(message.sdp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CallWebRTCRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCallWebRTCRequest } as CallWebRTCRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recording = reader.string();
          break;
        case 2:
          message.videotrackid = reader.fixed32();
          break;
        case 3:
          message.audiotrackid = reader.fixed32();
          break;
        case 4:
          message.sdp = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CallWebRTCRequest {
    const message = { ...baseCallWebRTCRequest } as CallWebRTCRequest;
    if (object.recording !== undefined && object.recording !== null) {
      message.recording = String(object.recording);
    } else {
      message.recording = "";
    }
    if (object.videotrackid !== undefined && object.videotrackid !== null) {
      message.videotrackid = Number(object.videotrackid);
    } else {
      message.videotrackid = 0;
    }
    if (object.audiotrackid !== undefined && object.audiotrackid !== null) {
      message.audiotrackid = Number(object.audiotrackid);
    } else {
      message.audiotrackid = undefined;
    }
    if (object.sdp !== undefined && object.sdp !== null) {
      message.sdp = String(object.sdp);
    } else {
      message.sdp = "";
    }
    return message;
  },

  toJSON(message: CallWebRTCRequest): unknown {
    const obj: any = {};
    message.recording !== undefined && (obj.recording = message.recording);
    message.videotrackid !== undefined &&
      (obj.videotrackid = message.videotrackid);
    message.audiotrackid !== undefined &&
      (obj.audiotrackid = message.audiotrackid);
    message.sdp !== undefined && (obj.sdp = message.sdp);
    return obj;
  },

  fromPartial(object: DeepPartial<CallWebRTCRequest>): CallWebRTCRequest {
    const message = { ...baseCallWebRTCRequest } as CallWebRTCRequest;
    if (object.recording !== undefined && object.recording !== null) {
      message.recording = object.recording;
    } else {
      message.recording = "";
    }
    if (object.videotrackid !== undefined && object.videotrackid !== null) {
      message.videotrackid = object.videotrackid;
    } else {
      message.videotrackid = 0;
    }
    if (object.audiotrackid !== undefined && object.audiotrackid !== null) {
      message.audiotrackid = object.audiotrackid;
    } else {
      message.audiotrackid = undefined;
    }
    if (object.sdp !== undefined && object.sdp !== null) {
      message.sdp = object.sdp;
    } else {
      message.sdp = "";
    }
    return message;
  },
};

const baseCallWebRTCResponse: object = { peerid: "", sdp: "" };

export const CallWebRTCResponse = {
  encode(
    message: CallWebRTCResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.peerid !== "") {
      writer.uint32(10).string(message.peerid);
    }
    if (message.sdp !== "") {
      writer.uint32(18).string(message.sdp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CallWebRTCResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCallWebRTCResponse } as CallWebRTCResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.peerid = reader.string();
          break;
        case 2:
          message.sdp = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CallWebRTCResponse {
    const message = { ...baseCallWebRTCResponse } as CallWebRTCResponse;
    if (object.peerid !== undefined && object.peerid !== null) {
      message.peerid = String(object.peerid);
    } else {
      message.peerid = "";
    }
    if (object.sdp !== undefined && object.sdp !== null) {
      message.sdp = String(object.sdp);
    } else {
      message.sdp = "";
    }
    return message;
  },

  toJSON(message: CallWebRTCResponse): unknown {
    const obj: any = {};
    message.peerid !== undefined && (obj.peerid = message.peerid);
    message.sdp !== undefined && (obj.sdp = message.sdp);
    return obj;
  },

  fromPartial(object: DeepPartial<CallWebRTCResponse>): CallWebRTCResponse {
    const message = { ...baseCallWebRTCResponse } as CallWebRTCResponse;
    if (object.peerid !== undefined && object.peerid !== null) {
      message.peerid = object.peerid;
    } else {
      message.peerid = "";
    }
    if (object.sdp !== undefined && object.sdp !== null) {
      message.sdp = object.sdp;
    } else {
      message.sdp = "";
    }
    return message;
  },
};

const baseGetIceCandidatesWebRTCRequest: object = { peerid: "" };

export const GetIceCandidatesWebRTCRequest = {
  encode(
    message: GetIceCandidatesWebRTCRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.peerid !== "") {
      writer.uint32(10).string(message.peerid);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetIceCandidatesWebRTCRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetIceCandidatesWebRTCRequest,
    } as GetIceCandidatesWebRTCRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.peerid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetIceCandidatesWebRTCRequest {
    const message = {
      ...baseGetIceCandidatesWebRTCRequest,
    } as GetIceCandidatesWebRTCRequest;
    if (object.peerid !== undefined && object.peerid !== null) {
      message.peerid = String(object.peerid);
    } else {
      message.peerid = "";
    }
    return message;
  },

  toJSON(message: GetIceCandidatesWebRTCRequest): unknown {
    const obj: any = {};
    message.peerid !== undefined && (obj.peerid = message.peerid);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetIceCandidatesWebRTCRequest>
  ): GetIceCandidatesWebRTCRequest {
    const message = {
      ...baseGetIceCandidatesWebRTCRequest,
    } as GetIceCandidatesWebRTCRequest;
    if (object.peerid !== undefined && object.peerid !== null) {
      message.peerid = object.peerid;
    } else {
      message.peerid = "";
    }
    return message;
  },
};

const baseGetIceCandidatesWebRTCResponse: object = { peerlist: "" };

export const GetIceCandidatesWebRTCResponse = {
  encode(
    message: GetIceCandidatesWebRTCResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.peerlist !== "") {
      writer.uint32(10).string(message.peerlist);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetIceCandidatesWebRTCResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetIceCandidatesWebRTCResponse,
    } as GetIceCandidatesWebRTCResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.peerlist = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetIceCandidatesWebRTCResponse {
    const message = {
      ...baseGetIceCandidatesWebRTCResponse,
    } as GetIceCandidatesWebRTCResponse;
    if (object.peerlist !== undefined && object.peerlist !== null) {
      message.peerlist = String(object.peerlist);
    } else {
      message.peerlist = "";
    }
    return message;
  },

  toJSON(message: GetIceCandidatesWebRTCResponse): unknown {
    const obj: any = {};
    message.peerlist !== undefined && (obj.peerlist = message.peerlist);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetIceCandidatesWebRTCResponse>
  ): GetIceCandidatesWebRTCResponse {
    const message = {
      ...baseGetIceCandidatesWebRTCResponse,
    } as GetIceCandidatesWebRTCResponse;
    if (object.peerlist !== undefined && object.peerlist !== null) {
      message.peerlist = object.peerlist;
    } else {
      message.peerlist = "";
    }
    return message;
  },
};

const baseHangUpWebRTCRequest: object = { peerid: "" };

export const HangUpWebRTCRequest = {
  encode(
    message: HangUpWebRTCRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.peerid !== "") {
      writer.uint32(10).string(message.peerid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HangUpWebRTCRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHangUpWebRTCRequest } as HangUpWebRTCRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.peerid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HangUpWebRTCRequest {
    const message = { ...baseHangUpWebRTCRequest } as HangUpWebRTCRequest;
    if (object.peerid !== undefined && object.peerid !== null) {
      message.peerid = String(object.peerid);
    } else {
      message.peerid = "";
    }
    return message;
  },

  toJSON(message: HangUpWebRTCRequest): unknown {
    const obj: any = {};
    message.peerid !== undefined && (obj.peerid = message.peerid);
    return obj;
  },

  fromPartial(object: DeepPartial<HangUpWebRTCRequest>): HangUpWebRTCRequest {
    const message = { ...baseHangUpWebRTCRequest } as HangUpWebRTCRequest;
    if (object.peerid !== undefined && object.peerid !== null) {
      message.peerid = object.peerid;
    } else {
      message.peerid = "";
    }
    return message;
  },
};

const baseHangUpWebRTCResponse: object = {};

export const HangUpWebRTCResponse = {
  encode(
    _: HangUpWebRTCResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): HangUpWebRTCResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHangUpWebRTCResponse } as HangUpWebRTCResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): HangUpWebRTCResponse {
    const message = { ...baseHangUpWebRTCResponse } as HangUpWebRTCResponse;
    return message;
  },

  toJSON(_: HangUpWebRTCResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<HangUpWebRTCResponse>): HangUpWebRTCResponse {
    const message = { ...baseHangUpWebRTCResponse } as HangUpWebRTCResponse;
    return message;
  },
};

const baseRefreshTokenRequest: object = {};

export const RefreshTokenRequest = {
  encode(
    _: RefreshTokenRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RefreshTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRefreshTokenRequest } as RefreshTokenRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): RefreshTokenRequest {
    const message = { ...baseRefreshTokenRequest } as RefreshTokenRequest;
    return message;
  },

  toJSON(_: RefreshTokenRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<RefreshTokenRequest>): RefreshTokenRequest {
    const message = { ...baseRefreshTokenRequest } as RefreshTokenRequest;
    return message;
  },
};

const baseRefreshTokenResponse: object = { jwttoken: "" };

export const RefreshTokenResponse = {
  encode(
    message: RefreshTokenResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.jwttoken !== "") {
      writer.uint32(10).string(message.jwttoken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RefreshTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRefreshTokenResponse } as RefreshTokenResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.jwttoken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RefreshTokenResponse {
    const message = { ...baseRefreshTokenResponse } as RefreshTokenResponse;
    if (object.jwttoken !== undefined && object.jwttoken !== null) {
      message.jwttoken = String(object.jwttoken);
    } else {
      message.jwttoken = "";
    }
    return message;
  },

  toJSON(message: RefreshTokenResponse): unknown {
    const obj: any = {};
    message.jwttoken !== undefined && (obj.jwttoken = message.jwttoken);
    return obj;
  },

  fromPartial(object: DeepPartial<RefreshTokenResponse>): RefreshTokenResponse {
    const message = { ...baseRefreshTokenResponse } as RefreshTokenResponse;
    if (object.jwttoken !== undefined && object.jwttoken !== null) {
      message.jwttoken = object.jwttoken;
    } else {
      message.jwttoken = "";
    }
    return message;
  },
};

const baseRemoveUserRequest: object = { usertoken: "" };

export const RemoveUserRequest = {
  encode(
    message: RemoveUserRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.usertoken !== "") {
      writer.uint32(10).string(message.usertoken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveUserRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRemoveUserRequest } as RemoveUserRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.usertoken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemoveUserRequest {
    const message = { ...baseRemoveUserRequest } as RemoveUserRequest;
    if (object.usertoken !== undefined && object.usertoken !== null) {
      message.usertoken = String(object.usertoken);
    } else {
      message.usertoken = "";
    }
    return message;
  },

  toJSON(message: RemoveUserRequest): unknown {
    const obj: any = {};
    message.usertoken !== undefined && (obj.usertoken = message.usertoken);
    return obj;
  },

  fromPartial(object: DeepPartial<RemoveUserRequest>): RemoveUserRequest {
    const message = { ...baseRemoveUserRequest } as RemoveUserRequest;
    if (object.usertoken !== undefined && object.usertoken !== null) {
      message.usertoken = object.usertoken;
    } else {
      message.usertoken = "";
    }
    return message;
  },
};

const baseRemoveUserResponse: object = {};

export const RemoveUserResponse = {
  encode(
    _: RemoveUserResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveUserResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRemoveUserResponse } as RemoveUserResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): RemoveUserResponse {
    const message = { ...baseRemoveUserResponse } as RemoveUserResponse;
    return message;
  },

  toJSON(_: RemoveUserResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<RemoveUserResponse>): RemoveUserResponse {
    const message = { ...baseRemoveUserResponse } as RemoveUserResponse;
    return message;
  },
};

const baseSubscribeRequest: object = {};

export const SubscribeRequest = {
  encode(
    _: SubscribeRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSubscribeRequest } as SubscribeRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): SubscribeRequest {
    const message = { ...baseSubscribeRequest } as SubscribeRequest;
    return message;
  },

  toJSON(_: SubscribeRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<SubscribeRequest>): SubscribeRequest {
    const message = { ...baseSubscribeRequest } as SubscribeRequest;
    return message;
  },
};

const baseSubscribeResponse: object = {};

export const SubscribeResponse = {
  encode(
    message: SubscribeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.message !== undefined) {
      Any.encode(message.message, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSubscribeResponse } as SubscribeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SubscribeResponse {
    const message = { ...baseSubscribeResponse } as SubscribeResponse;
    if (object.message !== undefined && object.message !== null) {
      message.message = Any.fromJSON(object.message);
    } else {
      message.message = undefined;
    }
    return message;
  },

  toJSON(message: SubscribeResponse): unknown {
    const obj: any = {};
    message.message !== undefined &&
      (obj.message = message.message ? Any.toJSON(message.message) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SubscribeResponse>): SubscribeResponse {
    const message = { ...baseSubscribeResponse } as SubscribeResponse;
    if (object.message !== undefined && object.message !== null) {
      message.message = Any.fromPartial(object.message);
    } else {
      message.message = undefined;
    }
    return message;
  },
};

export interface AuthService {
  Authenticate(
    request: DeepPartial<AuthenticateRequest>,
    metadata?: grpc.Metadata
  ): Observable<AuthenticateResponse>;
  RefreshToken(
    request: DeepPartial<RefreshTokenRequest>,
    metadata?: grpc.Metadata
  ): Observable<RefreshTokenResponse>;
}

export class AuthServiceClientImpl implements AuthService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }

  Authenticate(
    request: DeepPartial<AuthenticateRequest>,
    metadata?: grpc.Metadata
  ): Observable<AuthenticateResponse> {
    return this.rpc.unary(
      AuthServiceAuthenticateDesc,
      AuthenticateRequest.fromPartial(request),
      metadata
    );
  }

  RefreshToken(
    request: DeepPartial<RefreshTokenRequest>,
    metadata?: grpc.Metadata
  ): Observable<RefreshTokenResponse> {
    return this.rpc.unary(
      AuthServiceRefreshTokenDesc,
      RefreshTokenRequest.fromPartial(request),
      metadata
    );
  }
}

export const AuthServiceDesc = {
  serviceName: "proto.AuthService",
};

export const AuthServiceAuthenticateDesc: UnaryMethodDefinitionish = {
  methodName: "Authenticate",
  service: AuthServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return AuthenticateRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...AuthenticateResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const AuthServiceRefreshTokenDesc: UnaryMethodDefinitionish = {
  methodName: "RefreshToken",
  service: AuthServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return RefreshTokenRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...RefreshTokenResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export interface MonocleService {
  AddIceCandidateWebRTC(
    request: DeepPartial<AddIceCandidateWebRTCRequest>,
    metadata?: grpc.Metadata
  ): Observable<AddIceCandidateWebRTCResponse>;
  AddUser(
    request: DeepPartial<AddUserRequest>,
    metadata?: grpc.Metadata
  ): Observable<AddUserResponse>;
  CallWebRTC(
    request: DeepPartial<CallWebRTCRequest>,
    metadata?: grpc.Metadata
  ): Observable<CallWebRTCResponse>;
  GetIceCandidatesWebRTC(
    request: DeepPartial<GetIceCandidatesWebRTCRequest>,
    metadata?: grpc.Metadata
  ): Observable<GetIceCandidatesWebRTCResponse>;
  HangUpWebRTC(
    request: DeepPartial<HangUpWebRTCRequest>,
    metadata?: grpc.Metadata
  ): Observable<HangUpWebRTCResponse>;
  RemoveUser(
    request: DeepPartial<RemoveUserRequest>,
    metadata?: grpc.Metadata
  ): Observable<RemoveUserResponse>;
  Subscribe(
    request: DeepPartial<SubscribeRequest>,
    metadata?: grpc.Metadata
  ): Observable<SubscribeResponse>;
}

export class MonocleServiceClientImpl implements MonocleService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }

  AddIceCandidateWebRTC(
    request: DeepPartial<AddIceCandidateWebRTCRequest>,
    metadata?: grpc.Metadata
  ): Observable<AddIceCandidateWebRTCResponse> {
    return this.rpc.unary(
      MonocleServiceAddIceCandidateWebRTCDesc,
      AddIceCandidateWebRTCRequest.fromPartial(request),
      metadata
    );
  }

  AddUser(
    request: DeepPartial<AddUserRequest>,
    metadata?: grpc.Metadata
  ): Observable<AddUserResponse> {
    return this.rpc.unary(
      MonocleServiceAddUserDesc,
      AddUserRequest.fromPartial(request),
      metadata
    );
  }

  CallWebRTC(
    request: DeepPartial<CallWebRTCRequest>,
    metadata?: grpc.Metadata
  ): Observable<CallWebRTCResponse> {
    return this.rpc.unary(
      MonocleServiceCallWebRTCDesc,
      CallWebRTCRequest.fromPartial(request),
      metadata
    );
  }

  GetIceCandidatesWebRTC(
    request: DeepPartial<GetIceCandidatesWebRTCRequest>,
    metadata?: grpc.Metadata
  ): Observable<GetIceCandidatesWebRTCResponse> {
    return this.rpc.unary(
      MonocleServiceGetIceCandidatesWebRTCDesc,
      GetIceCandidatesWebRTCRequest.fromPartial(request),
      metadata
    );
  }

  HangUpWebRTC(
    request: DeepPartial<HangUpWebRTCRequest>,
    metadata?: grpc.Metadata
  ): Observable<HangUpWebRTCResponse> {
    return this.rpc.unary(
      MonocleServiceHangUpWebRTCDesc,
      HangUpWebRTCRequest.fromPartial(request),
      metadata
    );
  }

  RemoveUser(
    request: DeepPartial<RemoveUserRequest>,
    metadata?: grpc.Metadata
  ): Observable<RemoveUserResponse> {
    return this.rpc.unary(
      MonocleServiceRemoveUserDesc,
      RemoveUserRequest.fromPartial(request),
      metadata
    );
  }

  Subscribe(
    request: DeepPartial<SubscribeRequest>,
    metadata?: grpc.Metadata
  ): Observable<SubscribeResponse> {
    return this.rpc.invoke(
      MonocleServiceSubscribeDesc,
      SubscribeRequest.fromPartial(request),
      metadata
    );
  }
}

export const MonocleServiceDesc = {
  serviceName: "proto.MonocleService",
};

export const MonocleServiceAddIceCandidateWebRTCDesc: UnaryMethodDefinitionish = {
  methodName: "AddIceCandidateWebRTC",
  service: MonocleServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return AddIceCandidateWebRTCRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...AddIceCandidateWebRTCResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MonocleServiceAddUserDesc: UnaryMethodDefinitionish = {
  methodName: "AddUser",
  service: MonocleServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return AddUserRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...AddUserResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MonocleServiceCallWebRTCDesc: UnaryMethodDefinitionish = {
  methodName: "CallWebRTC",
  service: MonocleServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return CallWebRTCRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...CallWebRTCResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MonocleServiceGetIceCandidatesWebRTCDesc: UnaryMethodDefinitionish = {
  methodName: "GetIceCandidatesWebRTC",
  service: MonocleServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return GetIceCandidatesWebRTCRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...GetIceCandidatesWebRTCResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MonocleServiceHangUpWebRTCDesc: UnaryMethodDefinitionish = {
  methodName: "HangUpWebRTC",
  service: MonocleServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return HangUpWebRTCRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...HangUpWebRTCResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MonocleServiceRemoveUserDesc: UnaryMethodDefinitionish = {
  methodName: "RemoveUser",
  service: MonocleServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return RemoveUserRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...RemoveUserResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MonocleServiceSubscribeDesc: UnaryMethodDefinitionish = {
  methodName: "Subscribe",
  service: MonocleServiceDesc,
  requestStream: false,
  responseStream: true,
  requestType: {
    serializeBinary() {
      return SubscribeRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...SubscribeResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

interface UnaryMethodDefinitionishR
  extends grpc.UnaryMethodDefinition<any, any> {
  requestStream: any;
  responseStream: any;
}

type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;

interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    request: any,
    metadata: grpc.Metadata | undefined
  ): Observable<any>;
  invoke<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    request: any,
    metadata: grpc.Metadata | undefined
  ): Observable<any>;
}

export class GrpcWebImpl {
  private host: string;
  private options: {
    transport?: grpc.TransportFactory;
    streamingTransport?: grpc.TransportFactory;
    debug?: boolean;
    metadata?: grpc.Metadata;
  };

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory;
      streamingTransport?: grpc.TransportFactory;
      debug?: boolean;
      metadata?: grpc.Metadata;
    }
  ) {
    this.host = host;
    this.options = options;
  }

  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    _request: any,
    metadata: grpc.Metadata | undefined
  ): Observable<any> {
    const request = { ..._request, ...methodDesc.requestType };
    const maybeCombinedMetadata =
      metadata && this.options.metadata
        ? new BrowserHeaders({
            ...this.options?.metadata.headersMap,
            ...metadata?.headersMap,
          })
        : metadata || this.options.metadata;
    return new Observable((observer) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata,
        transport: this.options.transport,
        debug: this.options.debug,
        onEnd: (next) => {
          if (next.status !== 0) {
            observer.error({ code: next.status, message: next.statusMessage });
          } else {
            observer.next(next.message as any);
            observer.complete();
          }
        },
      });
    }).pipe(take(1));
  }

  invoke<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    _request: any,
    metadata: grpc.Metadata | undefined
  ): Observable<any> {
    // Status Response Codes (https://developers.google.com/maps-booking/reference/grpc-api/status_codes)
    const upStreamCodes = [2, 4, 8, 9, 10, 13, 14, 15];
    const DEFAULT_TIMEOUT_TIME: number = 3_000;
    const request = { ..._request, ...methodDesc.requestType };
    const maybeCombinedMetadata =
      metadata && this.options.metadata
        ? new BrowserHeaders({
            ...this.options?.metadata.headersMap,
            ...metadata?.headersMap,
          })
        : metadata || this.options.metadata;
    return new Observable((observer) => {
      const upStream = () => {
        grpc.invoke(methodDesc, {
          host: this.host,
          request,
          transport: this.options.streamingTransport || this.options.transport,
          metadata: maybeCombinedMetadata,
          debug: this.options.debug,
          onMessage: (next) => observer.next(next),
          onEnd: (code: grpc.Code, message: string) => {
            if (code === 0) {
              observer.complete();
            } else if (upStreamCodes.includes(code)) {
              setTimeout(upStream, DEFAULT_TIMEOUT_TIME);
            } else {
              observer.error(new Error(`Error ${code} ${message}`));
            }
          },
        });
      };
      upStream();
    }).pipe(share());
  }
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
