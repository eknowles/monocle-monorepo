/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { share, take } from "rxjs/operators";
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
    case Codec.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
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
    case FileMonitorState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
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
    case FileState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
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
    case GPSDeviceState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
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
    case ONVIFUserLevel.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
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
    case PluginState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
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
    case ReceiverMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
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
    case ReceiverState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
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
    case RecordingJobState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
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
    case Severity.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
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
    case TrackType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
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

export interface AddIceCandidateWebRTCResponse {
}

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

export interface AddUserResponse {
}

export interface UpdateUserRequest {
  token: string;
  password: string;
  group: string;
}

export interface UpdateUserResponse {
}

export interface DeleteUserRequest {
  token: string;
}

export interface DeleteUserResponse {
}

export interface GetUserDataRequest {
  key: string;
}

export interface GetUserDataResponse {
  data: string;
}

export interface SetUserDataRequest {
  key: string;
  data: string;
}

export interface SetUserDataResponse {
}

export interface CallWebRTCRequest {
  peerid: string;
  recording: string;
  videotrackid: number;
  audiotrackid?: number | undefined;
  sdp: string;
}

export interface CallWebRTCResponse {
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

export interface HangUpWebRTCResponse {
}

export interface RefreshTokenRequest {
}

export interface RefreshTokenResponse {
  jwttoken: string;
}

export interface SubscribeRequest {
}

export interface SubscribeResponse {
  message: Any | undefined;
}

export interface PlayRequest {
  peerid: string;
  starttime: string;
}

export interface PauseRequest {
  peerid: string;
}

export interface PlayResponse {
}

export interface PauseResponse {
}

function createBaseFile(): File {
  return { token: "", path: "", mountpoint: "", numchunks: "0", chunksize: "0", automount: false };
}

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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.token = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.path = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.mountpoint = reader.string();
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.numchunks = longToString(reader.fixed64() as Long);
          continue;
        case 5:
          if (tag !== 41) {
            break;
          }

          message.chunksize = longToString(reader.fixed64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.automount = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): File {
    return {
      token: isSet(object.token) ? globalThis.String(object.token) : "",
      path: isSet(object.path) ? globalThis.String(object.path) : "",
      mountpoint: isSet(object.mountpoint) ? globalThis.String(object.mountpoint) : "",
      numchunks: isSet(object.numchunks) ? globalThis.String(object.numchunks) : "0",
      chunksize: isSet(object.chunksize) ? globalThis.String(object.chunksize) : "0",
      automount: isSet(object.automount) ? globalThis.Boolean(object.automount) : false,
    };
  },

  toJSON(message: File): unknown {
    const obj: any = {};
    if (message.token !== "") {
      obj.token = message.token;
    }
    if (message.path !== "") {
      obj.path = message.path;
    }
    if (message.mountpoint !== "") {
      obj.mountpoint = message.mountpoint;
    }
    if (message.numchunks !== "0") {
      obj.numchunks = message.numchunks;
    }
    if (message.chunksize !== "0") {
      obj.chunksize = message.chunksize;
    }
    if (message.automount === true) {
      obj.automount = message.automount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<File>, I>>(base?: I): File {
    return File.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<File>, I>>(object: I): File {
    const message = createBaseFile();
    message.token = object.token ?? "";
    message.path = object.path ?? "";
    message.mountpoint = object.mountpoint ?? "";
    message.numchunks = object.numchunks ?? "0";
    message.chunksize = object.chunksize ?? "0";
    message.automount = object.automount ?? false;
    return message;
  },
};

function createBaseGroup(): Group {
  return {
    token: "",
    name: "",
    manageusers: false,
    managerecordings: false,
    managemaps: false,
    managedevice: false,
    manageplugins: false,
    reboot: false,
    allrecordings: false,
    recordings: [],
  };
}

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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.token = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.manageusers = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.managerecordings = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.managemaps = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.managedevice = reader.bool();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.manageplugins = reader.bool();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.reboot = reader.bool();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.allrecordings = reader.bool();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.recordings.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Group {
    return {
      token: isSet(object.token) ? globalThis.String(object.token) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      manageusers: isSet(object.manageusers) ? globalThis.Boolean(object.manageusers) : false,
      managerecordings: isSet(object.managerecordings) ? globalThis.Boolean(object.managerecordings) : false,
      managemaps: isSet(object.managemaps) ? globalThis.Boolean(object.managemaps) : false,
      managedevice: isSet(object.managedevice) ? globalThis.Boolean(object.managedevice) : false,
      manageplugins: isSet(object.manageplugins) ? globalThis.Boolean(object.manageplugins) : false,
      reboot: isSet(object.reboot) ? globalThis.Boolean(object.reboot) : false,
      allrecordings: isSet(object.allrecordings) ? globalThis.Boolean(object.allrecordings) : false,
      recordings: globalThis.Array.isArray(object?.recordings)
        ? object.recordings.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: Group): unknown {
    const obj: any = {};
    if (message.token !== "") {
      obj.token = message.token;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.manageusers === true) {
      obj.manageusers = message.manageusers;
    }
    if (message.managerecordings === true) {
      obj.managerecordings = message.managerecordings;
    }
    if (message.managemaps === true) {
      obj.managemaps = message.managemaps;
    }
    if (message.managedevice === true) {
      obj.managedevice = message.managedevice;
    }
    if (message.manageplugins === true) {
      obj.manageplugins = message.manageplugins;
    }
    if (message.reboot === true) {
      obj.reboot = message.reboot;
    }
    if (message.allrecordings === true) {
      obj.allrecordings = message.allrecordings;
    }
    if (message.recordings?.length) {
      obj.recordings = message.recordings;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Group>, I>>(base?: I): Group {
    return Group.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Group>, I>>(object: I): Group {
    const message = createBaseGroup();
    message.token = object.token ?? "";
    message.name = object.name ?? "";
    message.manageusers = object.manageusers ?? false;
    message.managerecordings = object.managerecordings ?? false;
    message.managemaps = object.managemaps ?? false;
    message.managedevice = object.managedevice ?? false;
    message.manageplugins = object.manageplugins ?? false;
    message.reboot = object.reboot ?? false;
    message.allrecordings = object.allrecordings ?? false;
    message.recordings = object.recordings?.map((e) => e) || [];
    return message;
  },
};

function createBaseIndex(): Index {
  return { starttime: "0", endtime: "0" };
}

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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndex();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.starttime = longToString(reader.fixed64() as Long);
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.endtime = longToString(reader.fixed64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Index {
    return {
      starttime: isSet(object.starttime) ? globalThis.String(object.starttime) : "0",
      endtime: isSet(object.endtime) ? globalThis.String(object.endtime) : "0",
    };
  },

  toJSON(message: Index): unknown {
    const obj: any = {};
    if (message.starttime !== "0") {
      obj.starttime = message.starttime;
    }
    if (message.endtime !== "0") {
      obj.endtime = message.endtime;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Index>, I>>(base?: I): Index {
    return Index.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Index>, I>>(object: I): Index {
    const message = createBaseIndex();
    message.starttime = object.starttime ?? "0";
    message.endtime = object.endtime ?? "0";
    return message;
  },
};

function createBaseLogMessage(): LogMessage {
  return { time: "0", severity: 0, message: "" };
}

export const LogMessage = {
  encode(message: LogMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.time = longToString(reader.fixed64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.severity = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LogMessage {
    return {
      time: isSet(object.time) ? globalThis.String(object.time) : "0",
      severity: isSet(object.severity) ? severityFromJSON(object.severity) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
    };
  },

  toJSON(message: LogMessage): unknown {
    const obj: any = {};
    if (message.time !== "0") {
      obj.time = message.time;
    }
    if (message.severity !== 0) {
      obj.severity = severityToJSON(message.severity);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LogMessage>, I>>(base?: I): LogMessage {
    return LogMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LogMessage>, I>>(object: I): LogMessage {
    const message = createBaseLogMessage();
    message.time = object.time ?? "0";
    message.severity = object.severity ?? 0;
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseMap(): Map {
  return { token: "", name: "", location: "", md5: "" };
}

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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.token = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.location = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.md5 = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Map {
    return {
      token: isSet(object.token) ? globalThis.String(object.token) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      location: isSet(object.location) ? globalThis.String(object.location) : "",
      md5: isSet(object.md5) ? globalThis.String(object.md5) : "",
    };
  },

  toJSON(message: Map): unknown {
    const obj: any = {};
    if (message.token !== "") {
      obj.token = message.token;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.location !== "") {
      obj.location = message.location;
    }
    if (message.md5 !== "") {
      obj.md5 = message.md5;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Map>, I>>(base?: I): Map {
    return Map.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Map>, I>>(object: I): Map {
    const message = createBaseMap();
    message.token = object.token ?? "";
    message.name = object.name ?? "";
    message.location = object.location ?? "";
    message.md5 = object.md5 ?? "";
    return message;
  },
};

function createBaseMount(): Mount {
  return { id: "0", parentid: "0", majorstdev: "0", minorstdev: "0", path: "", type: "", source: "" };
}

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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = longToString(reader.sint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.parentid = longToString(reader.sint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.majorstdev = longToString(reader.sint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.minorstdev = longToString(reader.sint64() as Long);
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.path = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.type = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.source = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Mount {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "0",
      parentid: isSet(object.parentid) ? globalThis.String(object.parentid) : "0",
      majorstdev: isSet(object.majorstdev) ? globalThis.String(object.majorstdev) : "0",
      minorstdev: isSet(object.minorstdev) ? globalThis.String(object.minorstdev) : "0",
      path: isSet(object.path) ? globalThis.String(object.path) : "",
      type: isSet(object.type) ? globalThis.String(object.type) : "",
      source: isSet(object.source) ? globalThis.String(object.source) : "",
    };
  },

  toJSON(message: Mount): unknown {
    const obj: any = {};
    if (message.id !== "0") {
      obj.id = message.id;
    }
    if (message.parentid !== "0") {
      obj.parentid = message.parentid;
    }
    if (message.majorstdev !== "0") {
      obj.majorstdev = message.majorstdev;
    }
    if (message.minorstdev !== "0") {
      obj.minorstdev = message.minorstdev;
    }
    if (message.path !== "") {
      obj.path = message.path;
    }
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.source !== "") {
      obj.source = message.source;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Mount>, I>>(base?: I): Mount {
    return Mount.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Mount>, I>>(object: I): Mount {
    const message = createBaseMount();
    message.id = object.id ?? "0";
    message.parentid = object.parentid ?? "0";
    message.majorstdev = object.majorstdev ?? "0";
    message.minorstdev = object.minorstdev ?? "0";
    message.path = object.path ?? "";
    message.type = object.type ?? "";
    message.source = object.source ?? "";
    return message;
  },
};

function createBaseONVIFUser(): ONVIFUser {
  return { token: "", username: "", onvifuserlevel: 0 };
}

export const ONVIFUser = {
  encode(message: ONVIFUser, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseONVIFUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.token = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.username = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.onvifuserlevel = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ONVIFUser {
    return {
      token: isSet(object.token) ? globalThis.String(object.token) : "",
      username: isSet(object.username) ? globalThis.String(object.username) : "",
      onvifuserlevel: isSet(object.onvifuserlevel) ? oNVIFUserLevelFromJSON(object.onvifuserlevel) : 0,
    };
  },

  toJSON(message: ONVIFUser): unknown {
    const obj: any = {};
    if (message.token !== "") {
      obj.token = message.token;
    }
    if (message.username !== "") {
      obj.username = message.username;
    }
    if (message.onvifuserlevel !== 0) {
      obj.onvifuserlevel = oNVIFUserLevelToJSON(message.onvifuserlevel);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ONVIFUser>, I>>(base?: I): ONVIFUser {
    return ONVIFUser.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ONVIFUser>, I>>(object: I): ONVIFUser {
    const message = createBaseONVIFUser();
    message.token = object.token ?? "";
    message.username = object.username ?? "";
    message.onvifuserlevel = object.onvifuserlevel ?? 0;
    return message;
  },
};

function createBasePlugin(): Plugin {
  return { token: "", name: "", enabled: false, parameters: "", priority: "0", state: 0, statemessage: "" };
}

export const Plugin = {
  encode(message: Plugin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlugin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.token = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.enabled = reader.bool();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.parameters = reader.string();
          continue;
        case 5:
          if (tag !== 41) {
            break;
          }

          message.priority = longToString(reader.fixed64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.statemessage = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Plugin {
    return {
      token: isSet(object.token) ? globalThis.String(object.token) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      enabled: isSet(object.enabled) ? globalThis.Boolean(object.enabled) : false,
      parameters: isSet(object.parameters) ? globalThis.String(object.parameters) : "",
      priority: isSet(object.priority) ? globalThis.String(object.priority) : "0",
      state: isSet(object.state) ? pluginStateFromJSON(object.state) : 0,
      statemessage: isSet(object.statemessage) ? globalThis.String(object.statemessage) : "",
    };
  },

  toJSON(message: Plugin): unknown {
    const obj: any = {};
    if (message.token !== "") {
      obj.token = message.token;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.enabled === true) {
      obj.enabled = message.enabled;
    }
    if (message.parameters !== "") {
      obj.parameters = message.parameters;
    }
    if (message.priority !== "0") {
      obj.priority = message.priority;
    }
    if (message.state !== 0) {
      obj.state = pluginStateToJSON(message.state);
    }
    if (message.statemessage !== "") {
      obj.statemessage = message.statemessage;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Plugin>, I>>(base?: I): Plugin {
    return Plugin.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Plugin>, I>>(object: I): Plugin {
    const message = createBasePlugin();
    message.token = object.token ?? "";
    message.name = object.name ?? "";
    message.enabled = object.enabled ?? false;
    message.parameters = object.parameters ?? "";
    message.priority = object.priority ?? "0";
    message.state = object.state ?? 0;
    message.statemessage = object.statemessage ?? "";
    return message;
  },
};

function createBaseReceiver(): Receiver {
  return { token: "", mode: 0, uri: "", autocreated: false, username: "", password: "", parameters: [] };
}

export const Receiver = {
  encode(message: Receiver, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReceiver();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.token = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.mode = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.uri = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.autocreated = reader.bool();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.username = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.password = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.parameters.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Receiver {
    return {
      token: isSet(object.token) ? globalThis.String(object.token) : "",
      mode: isSet(object.mode) ? receiverModeFromJSON(object.mode) : 0,
      uri: isSet(object.uri) ? globalThis.String(object.uri) : "",
      autocreated: isSet(object.autocreated) ? globalThis.Boolean(object.autocreated) : false,
      username: isSet(object.username) ? globalThis.String(object.username) : "",
      password: isSet(object.password) ? globalThis.String(object.password) : "",
      parameters: globalThis.Array.isArray(object?.parameters)
        ? object.parameters.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: Receiver): unknown {
    const obj: any = {};
    if (message.token !== "") {
      obj.token = message.token;
    }
    if (message.mode !== 0) {
      obj.mode = receiverModeToJSON(message.mode);
    }
    if (message.uri !== "") {
      obj.uri = message.uri;
    }
    if (message.autocreated === true) {
      obj.autocreated = message.autocreated;
    }
    if (message.username !== "") {
      obj.username = message.username;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    if (message.parameters?.length) {
      obj.parameters = message.parameters;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Receiver>, I>>(base?: I): Receiver {
    return Receiver.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Receiver>, I>>(object: I): Receiver {
    const message = createBaseReceiver();
    message.token = object.token ?? "";
    message.mode = object.mode ?? 0;
    message.uri = object.uri ?? "";
    message.autocreated = object.autocreated ?? false;
    message.username = object.username ?? "";
    message.password = object.password ?? "";
    message.parameters = object.parameters?.map((e) => e) || [];
    return message;
  },
};

function createBaseRecording(): Recording {
  return {
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
    jobs: [],
    tracks: [],
    latitude: undefined,
    longitude: undefined,
    activejob: undefined,
  };
}

export const Recording = {
  encode(message: Recording, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      DoubleValue.encode({ value: message.latitude! }, writer.uint32(114).fork()).ldelim();
    }
    if (message.longitude !== undefined) {
      DoubleValue.encode({ value: message.longitude! }, writer.uint32(122).fork()).ldelim();
    }
    if (message.activejob !== undefined) {
      UInt64Value.encode({ value: message.activejob! }, writer.uint32(130).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Recording {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecording();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.token = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sourceid = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.location = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.description = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.address = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.content = reader.string();
          continue;
        case 8:
          if (tag !== 65) {
            break;
          }

          message.retentiontime = longToString(reader.fixed64() as Long);
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.adaptivestreaming = reader.bool();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.relativelocation = reader.bool();
          continue;
        case 11:
          if (tag !== 89) {
            break;
          }

          message.orientation = reader.double();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.jobs.push(RecordingJob.decode(reader, reader.uint32()));
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.tracks.push(RecordingTrack.decode(reader, reader.uint32()));
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.latitude = DoubleValue.decode(reader, reader.uint32()).value;
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.longitude = DoubleValue.decode(reader, reader.uint32()).value;
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.activejob = UInt64Value.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Recording {
    return {
      token: isSet(object.token) ? globalThis.String(object.token) : "",
      sourceid: isSet(object.sourceid) ? globalThis.String(object.sourceid) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      location: isSet(object.location) ? globalThis.String(object.location) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      content: isSet(object.content) ? globalThis.String(object.content) : "",
      retentiontime: isSet(object.retentiontime) ? globalThis.String(object.retentiontime) : "0",
      adaptivestreaming: isSet(object.adaptivestreaming) ? globalThis.Boolean(object.adaptivestreaming) : false,
      relativelocation: isSet(object.relativelocation) ? globalThis.Boolean(object.relativelocation) : false,
      orientation: isSet(object.orientation) ? globalThis.Number(object.orientation) : 0,
      jobs: globalThis.Array.isArray(object?.jobs) ? object.jobs.map((e: any) => RecordingJob.fromJSON(e)) : [],
      tracks: globalThis.Array.isArray(object?.tracks) ? object.tracks.map((e: any) => RecordingTrack.fromJSON(e)) : [],
      latitude: isSet(object.latitude) ? Number(object.latitude) : undefined,
      longitude: isSet(object.longitude) ? Number(object.longitude) : undefined,
      activejob: isSet(object.activejob) ? String(object.activejob) : undefined,
    };
  },

  toJSON(message: Recording): unknown {
    const obj: any = {};
    if (message.token !== "") {
      obj.token = message.token;
    }
    if (message.sourceid !== "") {
      obj.sourceid = message.sourceid;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.location !== "") {
      obj.location = message.location;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.content !== "") {
      obj.content = message.content;
    }
    if (message.retentiontime !== "0") {
      obj.retentiontime = message.retentiontime;
    }
    if (message.adaptivestreaming === true) {
      obj.adaptivestreaming = message.adaptivestreaming;
    }
    if (message.relativelocation === true) {
      obj.relativelocation = message.relativelocation;
    }
    if (message.orientation !== 0) {
      obj.orientation = message.orientation;
    }
    if (message.jobs?.length) {
      obj.jobs = message.jobs.map((e) => RecordingJob.toJSON(e));
    }
    if (message.tracks?.length) {
      obj.tracks = message.tracks.map((e) => RecordingTrack.toJSON(e));
    }
    if (message.latitude !== undefined) {
      obj.latitude = message.latitude;
    }
    if (message.longitude !== undefined) {
      obj.longitude = message.longitude;
    }
    if (message.activejob !== undefined) {
      obj.activejob = message.activejob;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Recording>, I>>(base?: I): Recording {
    return Recording.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Recording>, I>>(object: I): Recording {
    const message = createBaseRecording();
    message.token = object.token ?? "";
    message.sourceid = object.sourceid ?? "";
    message.name = object.name ?? "";
    message.location = object.location ?? "";
    message.description = object.description ?? "";
    message.address = object.address ?? "";
    message.content = object.content ?? "";
    message.retentiontime = object.retentiontime ?? "0";
    message.adaptivestreaming = object.adaptivestreaming ?? false;
    message.relativelocation = object.relativelocation ?? false;
    message.orientation = object.orientation ?? 0;
    message.jobs = object.jobs?.map((e) => RecordingJob.fromPartial(e)) || [];
    message.tracks = object.tracks?.map((e) => RecordingTrack.fromPartial(e)) || [];
    message.latitude = object.latitude ?? undefined;
    message.longitude = object.longitude ?? undefined;
    message.activejob = object.activejob ?? undefined;
    return message;
  },
};

function createBaseRecordingJob(): RecordingJob {
  return {
    recordingtoken: "",
    recordingjobtoken: "",
    name: "",
    enabled: false,
    priority: "0",
    recordingjobsources: [],
  };
}

export const RecordingJob = {
  encode(message: RecordingJob, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecordingJob();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.recordingtoken = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.recordingjobtoken = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.enabled = reader.bool();
          continue;
        case 5:
          if (tag !== 41) {
            break;
          }

          message.priority = longToString(reader.fixed64() as Long);
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.recordingjobsources.push(RecordingJobSource.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RecordingJob {
    return {
      recordingtoken: isSet(object.recordingtoken) ? globalThis.String(object.recordingtoken) : "",
      recordingjobtoken: isSet(object.recordingjobtoken) ? globalThis.String(object.recordingjobtoken) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      enabled: isSet(object.enabled) ? globalThis.Boolean(object.enabled) : false,
      priority: isSet(object.priority) ? globalThis.String(object.priority) : "0",
      recordingjobsources: globalThis.Array.isArray(object?.recordingjobsources)
        ? object.recordingjobsources.map((e: any) => RecordingJobSource.fromJSON(e))
        : [],
    };
  },

  toJSON(message: RecordingJob): unknown {
    const obj: any = {};
    if (message.recordingtoken !== "") {
      obj.recordingtoken = message.recordingtoken;
    }
    if (message.recordingjobtoken !== "") {
      obj.recordingjobtoken = message.recordingjobtoken;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.enabled === true) {
      obj.enabled = message.enabled;
    }
    if (message.priority !== "0") {
      obj.priority = message.priority;
    }
    if (message.recordingjobsources?.length) {
      obj.recordingjobsources = message.recordingjobsources.map((e) => RecordingJobSource.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RecordingJob>, I>>(base?: I): RecordingJob {
    return RecordingJob.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RecordingJob>, I>>(object: I): RecordingJob {
    const message = createBaseRecordingJob();
    message.recordingtoken = object.recordingtoken ?? "";
    message.recordingjobtoken = object.recordingjobtoken ?? "";
    message.name = object.name ?? "";
    message.enabled = object.enabled ?? false;
    message.priority = object.priority ?? "0";
    message.recordingjobsources = object.recordingjobsources?.map((e) => RecordingJobSource.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRecordingJobSource(): RecordingJobSource {
  return {
    recordingtoken: "",
    recordingjobtoken: "",
    recordingjobsourcetoken: "",
    receivertoken: "",
    recordingjobsourcetracks: [],
  };
}

export const RecordingJobSource = {
  encode(message: RecordingJobSource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecordingJobSource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.recordingtoken = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.recordingjobtoken = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.recordingjobsourcetoken = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.receivertoken = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.recordingjobsourcetracks.push(RecordingJobSourceTrack.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RecordingJobSource {
    return {
      recordingtoken: isSet(object.recordingtoken) ? globalThis.String(object.recordingtoken) : "",
      recordingjobtoken: isSet(object.recordingjobtoken) ? globalThis.String(object.recordingjobtoken) : "",
      recordingjobsourcetoken: isSet(object.recordingjobsourcetoken)
        ? globalThis.String(object.recordingjobsourcetoken)
        : "",
      receivertoken: isSet(object.receivertoken) ? globalThis.String(object.receivertoken) : "",
      recordingjobsourcetracks: globalThis.Array.isArray(object?.recordingjobsourcetracks)
        ? object.recordingjobsourcetracks.map((e: any) => RecordingJobSourceTrack.fromJSON(e))
        : [],
    };
  },

  toJSON(message: RecordingJobSource): unknown {
    const obj: any = {};
    if (message.recordingtoken !== "") {
      obj.recordingtoken = message.recordingtoken;
    }
    if (message.recordingjobtoken !== "") {
      obj.recordingjobtoken = message.recordingjobtoken;
    }
    if (message.recordingjobsourcetoken !== "") {
      obj.recordingjobsourcetoken = message.recordingjobsourcetoken;
    }
    if (message.receivertoken !== "") {
      obj.receivertoken = message.receivertoken;
    }
    if (message.recordingjobsourcetracks?.length) {
      obj.recordingjobsourcetracks = message.recordingjobsourcetracks.map((e) => RecordingJobSourceTrack.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RecordingJobSource>, I>>(base?: I): RecordingJobSource {
    return RecordingJobSource.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RecordingJobSource>, I>>(object: I): RecordingJobSource {
    const message = createBaseRecordingJobSource();
    message.recordingtoken = object.recordingtoken ?? "";
    message.recordingjobtoken = object.recordingjobtoken ?? "";
    message.recordingjobsourcetoken = object.recordingjobsourcetoken ?? "";
    message.receivertoken = object.receivertoken ?? "";
    message.recordingjobsourcetracks =
      object.recordingjobsourcetracks?.map((e) => RecordingJobSourceTrack.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRecordingJobSourceTrack(): RecordingJobSourceTrack {
  return {
    recordingtoken: "",
    recordingjobtoken: "",
    recordingjobsourcetoken: "",
    recordingjobsourcetracktoken: "",
    recordingtrackid: 0,
    parameters: [],
    state: 0,
    error: "",
    activeparameters: [],
  };
}

export const RecordingJobSourceTrack = {
  encode(message: RecordingJobSourceTrack, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): RecordingJobSourceTrack {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecordingJobSourceTrack();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.recordingtoken = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.recordingjobtoken = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.recordingjobsourcetoken = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.recordingjobsourcetracktoken = reader.string();
          continue;
        case 5:
          if (tag !== 45) {
            break;
          }

          message.recordingtrackid = reader.fixed32();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.parameters.push(reader.string());
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.error = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.activeparameters.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RecordingJobSourceTrack {
    return {
      recordingtoken: isSet(object.recordingtoken) ? globalThis.String(object.recordingtoken) : "",
      recordingjobtoken: isSet(object.recordingjobtoken) ? globalThis.String(object.recordingjobtoken) : "",
      recordingjobsourcetoken: isSet(object.recordingjobsourcetoken)
        ? globalThis.String(object.recordingjobsourcetoken)
        : "",
      recordingjobsourcetracktoken: isSet(object.recordingjobsourcetracktoken)
        ? globalThis.String(object.recordingjobsourcetracktoken)
        : "",
      recordingtrackid: isSet(object.recordingtrackid) ? globalThis.Number(object.recordingtrackid) : 0,
      parameters: globalThis.Array.isArray(object?.parameters)
        ? object.parameters.map((e: any) => globalThis.String(e))
        : [],
      state: isSet(object.state) ? recordingJobStateFromJSON(object.state) : 0,
      error: isSet(object.error) ? globalThis.String(object.error) : "",
      activeparameters: globalThis.Array.isArray(object?.activeparameters)
        ? object.activeparameters.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: RecordingJobSourceTrack): unknown {
    const obj: any = {};
    if (message.recordingtoken !== "") {
      obj.recordingtoken = message.recordingtoken;
    }
    if (message.recordingjobtoken !== "") {
      obj.recordingjobtoken = message.recordingjobtoken;
    }
    if (message.recordingjobsourcetoken !== "") {
      obj.recordingjobsourcetoken = message.recordingjobsourcetoken;
    }
    if (message.recordingjobsourcetracktoken !== "") {
      obj.recordingjobsourcetracktoken = message.recordingjobsourcetracktoken;
    }
    if (message.recordingtrackid !== 0) {
      obj.recordingtrackid = Math.round(message.recordingtrackid);
    }
    if (message.parameters?.length) {
      obj.parameters = message.parameters;
    }
    if (message.state !== 0) {
      obj.state = recordingJobStateToJSON(message.state);
    }
    if (message.error !== "") {
      obj.error = message.error;
    }
    if (message.activeparameters?.length) {
      obj.activeparameters = message.activeparameters;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RecordingJobSourceTrack>, I>>(base?: I): RecordingJobSourceTrack {
    return RecordingJobSourceTrack.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RecordingJobSourceTrack>, I>>(object: I): RecordingJobSourceTrack {
    const message = createBaseRecordingJobSourceTrack();
    message.recordingtoken = object.recordingtoken ?? "";
    message.recordingjobtoken = object.recordingjobtoken ?? "";
    message.recordingjobsourcetoken = object.recordingjobsourcetoken ?? "";
    message.recordingjobsourcetracktoken = object.recordingjobsourcetracktoken ?? "";
    message.recordingtrackid = object.recordingtrackid ?? 0;
    message.parameters = object.parameters?.map((e) => e) || [];
    message.state = object.state ?? 0;
    message.error = object.error ?? "";
    message.activeparameters = object.activeparameters?.map((e) => e) || [];
    return message;
  },
};

function createBaseRecordingTrack(): RecordingTrack {
  return {
    recordingtoken: "",
    recordingtrackid: 0,
    token: "",
    tracktype: 0,
    description: "",
    fixedfiles: false,
    digitalsigning: false,
    encrypt: false,
    flushfrequency: 0,
    files: [],
    indices: [],
    totaltrackdata: [],
  };
}

export const RecordingTrack = {
  encode(message: RecordingTrack, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecordingTrack();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.recordingtoken = reader.string();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.recordingtrackid = reader.fixed32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.token = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.tracktype = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.description = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.fixedfiles = reader.bool();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.digitalsigning = reader.bool();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.encrypt = reader.bool();
          continue;
        case 9:
          if (tag !== 77) {
            break;
          }

          message.flushfrequency = reader.fixed32();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.files.push(reader.string());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.indices.push(Index.decode(reader, reader.uint32()));
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.totaltrackdata.push(TrackData.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RecordingTrack {
    return {
      recordingtoken: isSet(object.recordingtoken) ? globalThis.String(object.recordingtoken) : "",
      recordingtrackid: isSet(object.recordingtrackid) ? globalThis.Number(object.recordingtrackid) : 0,
      token: isSet(object.token) ? globalThis.String(object.token) : "",
      tracktype: isSet(object.tracktype) ? trackTypeFromJSON(object.tracktype) : 0,
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      fixedfiles: isSet(object.fixedfiles) ? globalThis.Boolean(object.fixedfiles) : false,
      digitalsigning: isSet(object.digitalsigning) ? globalThis.Boolean(object.digitalsigning) : false,
      encrypt: isSet(object.encrypt) ? globalThis.Boolean(object.encrypt) : false,
      flushfrequency: isSet(object.flushfrequency) ? globalThis.Number(object.flushfrequency) : 0,
      files: globalThis.Array.isArray(object?.files) ? object.files.map((e: any) => globalThis.String(e)) : [],
      indices: globalThis.Array.isArray(object?.indices) ? object.indices.map((e: any) => Index.fromJSON(e)) : [],
      totaltrackdata: globalThis.Array.isArray(object?.totaltrackdata)
        ? object.totaltrackdata.map((e: any) => TrackData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: RecordingTrack): unknown {
    const obj: any = {};
    if (message.recordingtoken !== "") {
      obj.recordingtoken = message.recordingtoken;
    }
    if (message.recordingtrackid !== 0) {
      obj.recordingtrackid = Math.round(message.recordingtrackid);
    }
    if (message.token !== "") {
      obj.token = message.token;
    }
    if (message.tracktype !== 0) {
      obj.tracktype = trackTypeToJSON(message.tracktype);
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.fixedfiles === true) {
      obj.fixedfiles = message.fixedfiles;
    }
    if (message.digitalsigning === true) {
      obj.digitalsigning = message.digitalsigning;
    }
    if (message.encrypt === true) {
      obj.encrypt = message.encrypt;
    }
    if (message.flushfrequency !== 0) {
      obj.flushfrequency = Math.round(message.flushfrequency);
    }
    if (message.files?.length) {
      obj.files = message.files;
    }
    if (message.indices?.length) {
      obj.indices = message.indices.map((e) => Index.toJSON(e));
    }
    if (message.totaltrackdata?.length) {
      obj.totaltrackdata = message.totaltrackdata.map((e) => TrackData.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RecordingTrack>, I>>(base?: I): RecordingTrack {
    return RecordingTrack.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RecordingTrack>, I>>(object: I): RecordingTrack {
    const message = createBaseRecordingTrack();
    message.recordingtoken = object.recordingtoken ?? "";
    message.recordingtrackid = object.recordingtrackid ?? 0;
    message.token = object.token ?? "";
    message.tracktype = object.tracktype ?? 0;
    message.description = object.description ?? "";
    message.fixedfiles = object.fixedfiles ?? false;
    message.digitalsigning = object.digitalsigning ?? false;
    message.encrypt = object.encrypt ?? false;
    message.flushfrequency = object.flushfrequency ?? 0;
    message.files = object.files?.map((e) => e) || [];
    message.indices = object.indices?.map((e) => Index.fromPartial(e)) || [];
    message.totaltrackdata = object.totaltrackdata?.map((e) => TrackData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTrackData(): TrackData {
  return { time: "0", totaldata: "0" };
}

export const TrackData = {
  encode(message: TrackData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.time !== "0") {
      writer.uint32(9).fixed64(message.time);
    }
    if (message.totaldata !== "0") {
      writer.uint32(17).fixed64(message.totaldata);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TrackData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrackData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.time = longToString(reader.fixed64() as Long);
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.totaldata = longToString(reader.fixed64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TrackData {
    return {
      time: isSet(object.time) ? globalThis.String(object.time) : "0",
      totaldata: isSet(object.totaldata) ? globalThis.String(object.totaldata) : "0",
    };
  },

  toJSON(message: TrackData): unknown {
    const obj: any = {};
    if (message.time !== "0") {
      obj.time = message.time;
    }
    if (message.totaldata !== "0") {
      obj.totaldata = message.totaldata;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TrackData>, I>>(base?: I): TrackData {
    return TrackData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TrackData>, I>>(object: I): TrackData {
    const message = createBaseTrackData();
    message.time = object.time ?? "0";
    message.totaldata = object.totaldata ?? "0";
    return message;
  },
};

function createBaseUser(): User {
  return { token: "", username: "", grouptoken: "" };
}

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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.token = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.username = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.grouptoken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): User {
    return {
      token: isSet(object.token) ? globalThis.String(object.token) : "",
      username: isSet(object.username) ? globalThis.String(object.username) : "",
      grouptoken: isSet(object.grouptoken) ? globalThis.String(object.grouptoken) : "",
    };
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    if (message.token !== "") {
      obj.token = message.token;
    }
    if (message.username !== "") {
      obj.username = message.username;
    }
    if (message.grouptoken !== "") {
      obj.grouptoken = message.grouptoken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<User>, I>>(base?: I): User {
    return User.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<User>, I>>(object: I): User {
    const message = createBaseUser();
    message.token = object.token ?? "";
    message.username = object.username ?? "";
    message.grouptoken = object.grouptoken ?? "";
    return message;
  },
};

function createBaseVersion(): Version {
  return { major: "0", minor: "0", build: "0" };
}

export const Version = {
  encode(message: Version, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.major = longToString(reader.sfixed64() as Long);
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.minor = longToString(reader.sfixed64() as Long);
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.build = longToString(reader.sfixed64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Version {
    return {
      major: isSet(object.major) ? globalThis.String(object.major) : "0",
      minor: isSet(object.minor) ? globalThis.String(object.minor) : "0",
      build: isSet(object.build) ? globalThis.String(object.build) : "0",
    };
  },

  toJSON(message: Version): unknown {
    const obj: any = {};
    if (message.major !== "0") {
      obj.major = message.major;
    }
    if (message.minor !== "0") {
      obj.minor = message.minor;
    }
    if (message.build !== "0") {
      obj.build = message.build;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Version>, I>>(base?: I): Version {
    return Version.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Version>, I>>(object: I): Version {
    const message = createBaseVersion();
    message.major = object.major ?? "0";
    message.minor = object.minor ?? "0";
    message.build = object.build ?? "0";
    return message;
  },
};

function createBaseState(): State {
  return {
    name: "",
    publickey: "",
    architecture: "",
    version: undefined,
    identifier: "",
    environmentvariables: [],
    commandlinevariables: [],
    onvifusers: [],
    groups: [],
    users: [],
    files: [],
    receivers: [],
    recordings: [],
    serverlogmessages: [],
    maps: [],
    mounts: [],
    locationtime: "0",
    latitude: undefined,
    longitude: undefined,
    locationindices: [],
    gpsdevice: "",
    gpsdevicestate: 0,
    gpsdevicestatemessage: "",
    locationretentiontime: "0",
    openstreetmapbaseuris: [],
    plugins: [],
  };
}

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
      DoubleValue.encode({ value: message.latitude! }, writer.uint32(146).fork()).ldelim();
    }
    if (message.longitude !== undefined) {
      DoubleValue.encode({ value: message.longitude! }, writer.uint32(154).fork()).ldelim();
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.publickey = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.architecture = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.version = Version.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.identifier = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.environmentvariables.push(reader.string());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.commandlinevariables.push(reader.string());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.onvifusers.push(ONVIFUser.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.groups.push(Group.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.users.push(User.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.files.push(File.decode(reader, reader.uint32()));
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.receivers.push(Receiver.decode(reader, reader.uint32()));
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.recordings.push(Recording.decode(reader, reader.uint32()));
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.serverlogmessages.push(LogMessage.decode(reader, reader.uint32()));
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.maps.push(Map.decode(reader, reader.uint32()));
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.mounts.push(Mount.decode(reader, reader.uint32()));
          continue;
        case 17:
          if (tag !== 137) {
            break;
          }

          message.locationtime = longToString(reader.fixed64() as Long);
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.latitude = DoubleValue.decode(reader, reader.uint32()).value;
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.longitude = DoubleValue.decode(reader, reader.uint32()).value;
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.locationindices.push(Index.decode(reader, reader.uint32()));
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.gpsdevice = reader.string();
          continue;
        case 22:
          if (tag !== 176) {
            break;
          }

          message.gpsdevicestate = reader.int32() as any;
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.gpsdevicestatemessage = reader.string();
          continue;
        case 24:
          if (tag !== 193) {
            break;
          }

          message.locationretentiontime = longToString(reader.fixed64() as Long);
          continue;
        case 25:
          if (tag !== 202) {
            break;
          }

          message.openstreetmapbaseuris.push(reader.string());
          continue;
        case 26:
          if (tag !== 210) {
            break;
          }

          message.plugins.push(Plugin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): State {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      publickey: isSet(object.publickey) ? globalThis.String(object.publickey) : "",
      architecture: isSet(object.architecture) ? globalThis.String(object.architecture) : "",
      version: isSet(object.version) ? Version.fromJSON(object.version) : undefined,
      identifier: isSet(object.identifier) ? globalThis.String(object.identifier) : "",
      environmentvariables: globalThis.Array.isArray(object?.environmentvariables)
        ? object.environmentvariables.map((e: any) => globalThis.String(e))
        : [],
      commandlinevariables: globalThis.Array.isArray(object?.commandlinevariables)
        ? object.commandlinevariables.map((e: any) => globalThis.String(e))
        : [],
      onvifusers: globalThis.Array.isArray(object?.onvifusers)
        ? object.onvifusers.map((e: any) => ONVIFUser.fromJSON(e))
        : [],
      groups: globalThis.Array.isArray(object?.groups) ? object.groups.map((e: any) => Group.fromJSON(e)) : [],
      users: globalThis.Array.isArray(object?.users) ? object.users.map((e: any) => User.fromJSON(e)) : [],
      files: globalThis.Array.isArray(object?.files) ? object.files.map((e: any) => File.fromJSON(e)) : [],
      receivers: globalThis.Array.isArray(object?.receivers)
        ? object.receivers.map((e: any) => Receiver.fromJSON(e))
        : [],
      recordings: globalThis.Array.isArray(object?.recordings)
        ? object.recordings.map((e: any) => Recording.fromJSON(e))
        : [],
      serverlogmessages: globalThis.Array.isArray(object?.serverlogmessages)
        ? object.serverlogmessages.map((e: any) => LogMessage.fromJSON(e))
        : [],
      maps: globalThis.Array.isArray(object?.maps) ? object.maps.map((e: any) => Map.fromJSON(e)) : [],
      mounts: globalThis.Array.isArray(object?.mounts) ? object.mounts.map((e: any) => Mount.fromJSON(e)) : [],
      locationtime: isSet(object.locationtime) ? globalThis.String(object.locationtime) : "0",
      latitude: isSet(object.latitude) ? Number(object.latitude) : undefined,
      longitude: isSet(object.longitude) ? Number(object.longitude) : undefined,
      locationindices: globalThis.Array.isArray(object?.locationindices)
        ? object.locationindices.map((e: any) => Index.fromJSON(e))
        : [],
      gpsdevice: isSet(object.gpsdevice) ? globalThis.String(object.gpsdevice) : "",
      gpsdevicestate: isSet(object.gpsdevicestate) ? gPSDeviceStateFromJSON(object.gpsdevicestate) : 0,
      gpsdevicestatemessage: isSet(object.gpsdevicestatemessage) ? globalThis.String(object.gpsdevicestatemessage) : "",
      locationretentiontime: isSet(object.locationretentiontime)
        ? globalThis.String(object.locationretentiontime)
        : "0",
      openstreetmapbaseuris: globalThis.Array.isArray(object?.openstreetmapbaseuris)
        ? object.openstreetmapbaseuris.map((e: any) => globalThis.String(e))
        : [],
      plugins: globalThis.Array.isArray(object?.plugins)
        ? object.plugins.map((e: any) => Plugin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: State): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.publickey !== "") {
      obj.publickey = message.publickey;
    }
    if (message.architecture !== "") {
      obj.architecture = message.architecture;
    }
    if (message.version !== undefined) {
      obj.version = Version.toJSON(message.version);
    }
    if (message.identifier !== "") {
      obj.identifier = message.identifier;
    }
    if (message.environmentvariables?.length) {
      obj.environmentvariables = message.environmentvariables;
    }
    if (message.commandlinevariables?.length) {
      obj.commandlinevariables = message.commandlinevariables;
    }
    if (message.onvifusers?.length) {
      obj.onvifusers = message.onvifusers.map((e) => ONVIFUser.toJSON(e));
    }
    if (message.groups?.length) {
      obj.groups = message.groups.map((e) => Group.toJSON(e));
    }
    if (message.users?.length) {
      obj.users = message.users.map((e) => User.toJSON(e));
    }
    if (message.files?.length) {
      obj.files = message.files.map((e) => File.toJSON(e));
    }
    if (message.receivers?.length) {
      obj.receivers = message.receivers.map((e) => Receiver.toJSON(e));
    }
    if (message.recordings?.length) {
      obj.recordings = message.recordings.map((e) => Recording.toJSON(e));
    }
    if (message.serverlogmessages?.length) {
      obj.serverlogmessages = message.serverlogmessages.map((e) => LogMessage.toJSON(e));
    }
    if (message.maps?.length) {
      obj.maps = message.maps.map((e) => Map.toJSON(e));
    }
    if (message.mounts?.length) {
      obj.mounts = message.mounts.map((e) => Mount.toJSON(e));
    }
    if (message.locationtime !== "0") {
      obj.locationtime = message.locationtime;
    }
    if (message.latitude !== undefined) {
      obj.latitude = message.latitude;
    }
    if (message.longitude !== undefined) {
      obj.longitude = message.longitude;
    }
    if (message.locationindices?.length) {
      obj.locationindices = message.locationindices.map((e) => Index.toJSON(e));
    }
    if (message.gpsdevice !== "") {
      obj.gpsdevice = message.gpsdevice;
    }
    if (message.gpsdevicestate !== 0) {
      obj.gpsdevicestate = gPSDeviceStateToJSON(message.gpsdevicestate);
    }
    if (message.gpsdevicestatemessage !== "") {
      obj.gpsdevicestatemessage = message.gpsdevicestatemessage;
    }
    if (message.locationretentiontime !== "0") {
      obj.locationretentiontime = message.locationretentiontime;
    }
    if (message.openstreetmapbaseuris?.length) {
      obj.openstreetmapbaseuris = message.openstreetmapbaseuris;
    }
    if (message.plugins?.length) {
      obj.plugins = message.plugins.map((e) => Plugin.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<State>, I>>(base?: I): State {
    return State.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<State>, I>>(object: I): State {
    const message = createBaseState();
    message.name = object.name ?? "";
    message.publickey = object.publickey ?? "";
    message.architecture = object.architecture ?? "";
    message.version = (object.version !== undefined && object.version !== null)
      ? Version.fromPartial(object.version)
      : undefined;
    message.identifier = object.identifier ?? "";
    message.environmentvariables = object.environmentvariables?.map((e) => e) || [];
    message.commandlinevariables = object.commandlinevariables?.map((e) => e) || [];
    message.onvifusers = object.onvifusers?.map((e) => ONVIFUser.fromPartial(e)) || [];
    message.groups = object.groups?.map((e) => Group.fromPartial(e)) || [];
    message.users = object.users?.map((e) => User.fromPartial(e)) || [];
    message.files = object.files?.map((e) => File.fromPartial(e)) || [];
    message.receivers = object.receivers?.map((e) => Receiver.fromPartial(e)) || [];
    message.recordings = object.recordings?.map((e) => Recording.fromPartial(e)) || [];
    message.serverlogmessages = object.serverlogmessages?.map((e) => LogMessage.fromPartial(e)) || [];
    message.maps = object.maps?.map((e) => Map.fromPartial(e)) || [];
    message.mounts = object.mounts?.map((e) => Mount.fromPartial(e)) || [];
    message.locationtime = object.locationtime ?? "0";
    message.latitude = object.latitude ?? undefined;
    message.longitude = object.longitude ?? undefined;
    message.locationindices = object.locationindices?.map((e) => Index.fromPartial(e)) || [];
    message.gpsdevice = object.gpsdevice ?? "";
    message.gpsdevicestate = object.gpsdevicestate ?? 0;
    message.gpsdevicestatemessage = object.gpsdevicestatemessage ?? "";
    message.locationretentiontime = object.locationretentiontime ?? "0";
    message.openstreetmapbaseuris = object.openstreetmapbaseuris?.map((e) => e) || [];
    message.plugins = object.plugins?.map((e) => Plugin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFileAdded(): FileAdded {
  return { file: undefined };
}

export const FileAdded = {
  encode(message: FileAdded, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.file !== undefined) {
      File.encode(message.file, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileAdded {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileAdded();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.file = File.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FileAdded {
    return { file: isSet(object.file) ? File.fromJSON(object.file) : undefined };
  },

  toJSON(message: FileAdded): unknown {
    const obj: any = {};
    if (message.file !== undefined) {
      obj.file = File.toJSON(message.file);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FileAdded>, I>>(base?: I): FileAdded {
    return FileAdded.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FileAdded>, I>>(object: I): FileAdded {
    const message = createBaseFileAdded();
    message.file = (object.file !== undefined && object.file !== null) ? File.fromPartial(object.file) : undefined;
    return message;
  },
};

function createBaseFileRemoved(): FileRemoved {
  return { token: "" };
}

export const FileRemoved = {
  encode(message: FileRemoved, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileRemoved {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileRemoved();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.token = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FileRemoved {
    return { token: isSet(object.token) ? globalThis.String(object.token) : "" };
  },

  toJSON(message: FileRemoved): unknown {
    const obj: any = {};
    if (message.token !== "") {
      obj.token = message.token;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FileRemoved>, I>>(base?: I): FileRemoved {
    return FileRemoved.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FileRemoved>, I>>(object: I): FileRemoved {
    const message = createBaseFileRemoved();
    message.token = object.token ?? "";
    return message;
  },
};

function createBaseFileMonitorStateChanged(): FileMonitorStateChanged {
  return { token: "", state: 0 };
}

export const FileMonitorStateChanged = {
  encode(message: FileMonitorStateChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileMonitorStateChanged {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileMonitorStateChanged();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.token = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FileMonitorStateChanged {
    return {
      token: isSet(object.token) ? globalThis.String(object.token) : "",
      state: isSet(object.state) ? fileMonitorStateFromJSON(object.state) : 0,
    };
  },

  toJSON(message: FileMonitorStateChanged): unknown {
    const obj: any = {};
    if (message.token !== "") {
      obj.token = message.token;
    }
    if (message.state !== 0) {
      obj.state = fileMonitorStateToJSON(message.state);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FileMonitorStateChanged>, I>>(base?: I): FileMonitorStateChanged {
    return FileMonitorStateChanged.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FileMonitorStateChanged>, I>>(object: I): FileMonitorStateChanged {
    const message = createBaseFileMonitorStateChanged();
    message.token = object.token ?? "";
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseFileStateChanged(): FileStateChanged {
  return { token: "", state: 0 };
}

export const FileStateChanged = {
  encode(message: FileStateChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileStateChanged {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileStateChanged();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.token = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FileStateChanged {
    return {
      token: isSet(object.token) ? globalThis.String(object.token) : "",
      state: isSet(object.state) ? fileStateFromJSON(object.state) : 0,
    };
  },

  toJSON(message: FileStateChanged): unknown {
    const obj: any = {};
    if (message.token !== "") {
      obj.token = message.token;
    }
    if (message.state !== 0) {
      obj.state = fileStateToJSON(message.state);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FileStateChanged>, I>>(base?: I): FileStateChanged {
    return FileStateChanged.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FileStateChanged>, I>>(object: I): FileStateChanged {
    const message = createBaseFileStateChanged();
    message.token = object.token ?? "";
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseGPSDeviceChanged(): GPSDeviceChanged {
  return { gpsdevice: "" };
}

export const GPSDeviceChanged = {
  encode(message: GPSDeviceChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gpsdevice !== "") {
      writer.uint32(10).string(message.gpsdevice);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GPSDeviceChanged {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGPSDeviceChanged();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.gpsdevice = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GPSDeviceChanged {
    return { gpsdevice: isSet(object.gpsdevice) ? globalThis.String(object.gpsdevice) : "" };
  },

  toJSON(message: GPSDeviceChanged): unknown {
    const obj: any = {};
    if (message.gpsdevice !== "") {
      obj.gpsdevice = message.gpsdevice;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GPSDeviceChanged>, I>>(base?: I): GPSDeviceChanged {
    return GPSDeviceChanged.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GPSDeviceChanged>, I>>(object: I): GPSDeviceChanged {
    const message = createBaseGPSDeviceChanged();
    message.gpsdevice = object.gpsdevice ?? "";
    return message;
  },
};

function createBaseGPSDeviceStateChanged(): GPSDeviceStateChanged {
  return { time: "0", state: 0, message: "" };
}

export const GPSDeviceStateChanged = {
  encode(message: GPSDeviceStateChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): GPSDeviceStateChanged {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGPSDeviceStateChanged();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.time = longToString(reader.fixed64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GPSDeviceStateChanged {
    return {
      time: isSet(object.time) ? globalThis.String(object.time) : "0",
      state: isSet(object.state) ? gPSDeviceStateFromJSON(object.state) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
    };
  },

  toJSON(message: GPSDeviceStateChanged): unknown {
    const obj: any = {};
    if (message.time !== "0") {
      obj.time = message.time;
    }
    if (message.state !== 0) {
      obj.state = gPSDeviceStateToJSON(message.state);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GPSDeviceStateChanged>, I>>(base?: I): GPSDeviceStateChanged {
    return GPSDeviceStateChanged.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GPSDeviceStateChanged>, I>>(object: I): GPSDeviceStateChanged {
    const message = createBaseGPSDeviceStateChanged();
    message.time = object.time ?? "0";
    message.state = object.state ?? 0;
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseGroupAdded(): GroupAdded {
  return { group: undefined };
}

export const GroupAdded = {
  encode(message: GroupAdded, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.group !== undefined) {
      Group.encode(message.group, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupAdded {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupAdded();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.group = Group.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GroupAdded {
    return { group: isSet(object.group) ? Group.fromJSON(object.group) : undefined };
  },

  toJSON(message: GroupAdded): unknown {
    const obj: any = {};
    if (message.group !== undefined) {
      obj.group = Group.toJSON(message.group);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GroupAdded>, I>>(base?: I): GroupAdded {
    return GroupAdded.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GroupAdded>, I>>(object: I): GroupAdded {
    const message = createBaseGroupAdded();
    message.group = (object.group !== undefined && object.group !== null) ? Group.fromPartial(object.group) : undefined;
    return message;
  },
};

function createBaseGroupChanged(): GroupChanged {
  return { group: undefined };
}

export const GroupChanged = {
  encode(message: GroupChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.group !== undefined) {
      Group.encode(message.group, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupChanged {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupChanged();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.group = Group.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GroupChanged {
    return { group: isSet(object.group) ? Group.fromJSON(object.group) : undefined };
  },

  toJSON(message: GroupChanged): unknown {
    const obj: any = {};
    if (message.group !== undefined) {
      obj.group = Group.toJSON(message.group);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GroupChanged>, I>>(base?: I): GroupChanged {
    return GroupChanged.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GroupChanged>, I>>(object: I): GroupChanged {
    const message = createBaseGroupChanged();
    message.group = (object.group !== undefined && object.group !== null) ? Group.fromPartial(object.group) : undefined;
    return message;
  },
};

function createBaseGroupRemoved(): GroupRemoved {
  return { token: "" };
}

export const GroupRemoved = {
  encode(message: GroupRemoved, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupRemoved {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupRemoved();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.token = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GroupRemoved {
    return { token: isSet(object.token) ? globalThis.String(object.token) : "" };
  },

  toJSON(message: GroupRemoved): unknown {
    const obj: any = {};
    if (message.token !== "") {
      obj.token = message.token;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GroupRemoved>, I>>(base?: I): GroupRemoved {
    return GroupRemoved.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GroupRemoved>, I>>(object: I): GroupRemoved {
    const message = createBaseGroupRemoved();
    message.token = object.token ?? "";
    return message;
  },
};

function createBaseLocationChanged(): LocationChanged {
  return { time: "0", latitude: undefined, longitude: undefined };
}

export const LocationChanged = {
  encode(message: LocationChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.time !== "0") {
      writer.uint32(9).fixed64(message.time);
    }
    if (message.latitude !== undefined) {
      DoubleValue.encode({ value: message.latitude! }, writer.uint32(18).fork()).ldelim();
    }
    if (message.longitude !== undefined) {
      DoubleValue.encode({ value: message.longitude! }, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LocationChanged {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLocationChanged();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.time = longToString(reader.fixed64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.latitude = DoubleValue.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.longitude = DoubleValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LocationChanged {
    return {
      time: isSet(object.time) ? globalThis.String(object.time) : "0",
      latitude: isSet(object.latitude) ? Number(object.latitude) : undefined,
      longitude: isSet(object.longitude) ? Number(object.longitude) : undefined,
    };
  },

  toJSON(message: LocationChanged): unknown {
    const obj: any = {};
    if (message.time !== "0") {
      obj.time = message.time;
    }
    if (message.latitude !== undefined) {
      obj.latitude = message.latitude;
    }
    if (message.longitude !== undefined) {
      obj.longitude = message.longitude;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LocationChanged>, I>>(base?: I): LocationChanged {
    return LocationChanged.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LocationChanged>, I>>(object: I): LocationChanged {
    const message = createBaseLocationChanged();
    message.time = object.time ?? "0";
    message.latitude = object.latitude ?? undefined;
    message.longitude = object.longitude ?? undefined;
    return message;
  },
};

function createBaseLocationRetentionTimeChanged(): LocationRetentionTimeChanged {
  return { locationretentiontime: "0" };
}

export const LocationRetentionTimeChanged = {
  encode(message: LocationRetentionTimeChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.locationretentiontime !== "0") {
      writer.uint32(9).fixed64(message.locationretentiontime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LocationRetentionTimeChanged {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLocationRetentionTimeChanged();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.locationretentiontime = longToString(reader.fixed64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LocationRetentionTimeChanged {
    return {
      locationretentiontime: isSet(object.locationretentiontime)
        ? globalThis.String(object.locationretentiontime)
        : "0",
    };
  },

  toJSON(message: LocationRetentionTimeChanged): unknown {
    const obj: any = {};
    if (message.locationretentiontime !== "0") {
      obj.locationretentiontime = message.locationretentiontime;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LocationRetentionTimeChanged>, I>>(base?: I): LocationRetentionTimeChanged {
    return LocationRetentionTimeChanged.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LocationRetentionTimeChanged>, I>>(object: I): LocationRetentionTimeChanged {
    const message = createBaseLocationRetentionTimeChanged();
    message.locationretentiontime = object.locationretentiontime ?? "0";
    return message;
  },
};

function createBaseMapAdded(): MapAdded {
  return { map: undefined };
}

export const MapAdded = {
  encode(message: MapAdded, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.map !== undefined) {
      Map.encode(message.map, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapAdded {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapAdded();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.map = Map.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MapAdded {
    return { map: isSet(object.map) ? Map.fromJSON(object.map) : undefined };
  },

  toJSON(message: MapAdded): unknown {
    const obj: any = {};
    if (message.map !== undefined) {
      obj.map = Map.toJSON(message.map);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MapAdded>, I>>(base?: I): MapAdded {
    return MapAdded.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MapAdded>, I>>(object: I): MapAdded {
    const message = createBaseMapAdded();
    message.map = (object.map !== undefined && object.map !== null) ? Map.fromPartial(object.map) : undefined;
    return message;
  },
};

function createBaseMapChanged(): MapChanged {
  return { map: undefined };
}

export const MapChanged = {
  encode(message: MapChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.map !== undefined) {
      Map.encode(message.map, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapChanged {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapChanged();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.map = Map.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MapChanged {
    return { map: isSet(object.map) ? Map.fromJSON(object.map) : undefined };
  },

  toJSON(message: MapChanged): unknown {
    const obj: any = {};
    if (message.map !== undefined) {
      obj.map = Map.toJSON(message.map);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MapChanged>, I>>(base?: I): MapChanged {
    return MapChanged.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MapChanged>, I>>(object: I): MapChanged {
    const message = createBaseMapChanged();
    message.map = (object.map !== undefined && object.map !== null) ? Map.fromPartial(object.map) : undefined;
    return message;
  },
};

function createBaseMapRemoved(): MapRemoved {
  return { token: "" };
}

export const MapRemoved = {
  encode(message: MapRemoved, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapRemoved {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapRemoved();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.token = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MapRemoved {
    return { token: isSet(object.token) ? globalThis.String(object.token) : "" };
  },

  toJSON(message: MapRemoved): unknown {
    const obj: any = {};
    if (message.token !== "") {
      obj.token = message.token;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MapRemoved>, I>>(base?: I): MapRemoved {
    return MapRemoved.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MapRemoved>, I>>(object: I): MapRemoved {
    const message = createBaseMapRemoved();
    message.token = object.token ?? "";
    return message;
  },
};

function createBaseMountAdded(): MountAdded {
  return { mount: undefined };
}

export const MountAdded = {
  encode(message: MountAdded, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mount !== undefined) {
      Mount.encode(message.mount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MountAdded {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMountAdded();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.mount = Mount.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MountAdded {
    return { mount: isSet(object.mount) ? Mount.fromJSON(object.mount) : undefined };
  },

  toJSON(message: MountAdded): unknown {
    const obj: any = {};
    if (message.mount !== undefined) {
      obj.mount = Mount.toJSON(message.mount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MountAdded>, I>>(base?: I): MountAdded {
    return MountAdded.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MountAdded>, I>>(object: I): MountAdded {
    const message = createBaseMountAdded();
    message.mount = (object.mount !== undefined && object.mount !== null) ? Mount.fromPartial(object.mount) : undefined;
    return message;
  },
};

function createBaseMountRemoved(): MountRemoved {
  return { mount: undefined };
}

export const MountRemoved = {
  encode(message: MountRemoved, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mount !== undefined) {
      Mount.encode(message.mount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MountRemoved {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMountRemoved();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.mount = Mount.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MountRemoved {
    return { mount: isSet(object.mount) ? Mount.fromJSON(object.mount) : undefined };
  },

  toJSON(message: MountRemoved): unknown {
    const obj: any = {};
    if (message.mount !== undefined) {
      obj.mount = Mount.toJSON(message.mount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MountRemoved>, I>>(base?: I): MountRemoved {
    return MountRemoved.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MountRemoved>, I>>(object: I): MountRemoved {
    const message = createBaseMountRemoved();
    message.mount = (object.mount !== undefined && object.mount !== null) ? Mount.fromPartial(object.mount) : undefined;
    return message;
  },
};

function createBaseNameChanged(): NameChanged {
  return { name: "" };
}

export const NameChanged = {
  encode(message: NameChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NameChanged {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNameChanged();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NameChanged {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: NameChanged): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NameChanged>, I>>(base?: I): NameChanged {
    return NameChanged.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NameChanged>, I>>(object: I): NameChanged {
    const message = createBaseNameChanged();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseONVIFUserAdded(): ONVIFUserAdded {
  return { onvifuser: undefined };
}

export const ONVIFUserAdded = {
  encode(message: ONVIFUserAdded, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.onvifuser !== undefined) {
      ONVIFUser.encode(message.onvifuser, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ONVIFUserAdded {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseONVIFUserAdded();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.onvifuser = ONVIFUser.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ONVIFUserAdded {
    return { onvifuser: isSet(object.onvifuser) ? ONVIFUser.fromJSON(object.onvifuser) : undefined };
  },

  toJSON(message: ONVIFUserAdded): unknown {
    const obj: any = {};
    if (message.onvifuser !== undefined) {
      obj.onvifuser = ONVIFUser.toJSON(message.onvifuser);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ONVIFUserAdded>, I>>(base?: I): ONVIFUserAdded {
    return ONVIFUserAdded.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ONVIFUserAdded>, I>>(object: I): ONVIFUserAdded {
    const message = createBaseONVIFUserAdded();
    message.onvifuser = (object.onvifuser !== undefined && object.onvifuser !== null)
      ? ONVIFUser.fromPartial(object.onvifuser)
      : undefined;
    return message;
  },
};

function createBaseONVIFUserChanged(): ONVIFUserChanged {
  return { onvifuser: undefined };
}

export const ONVIFUserChanged = {
  encode(message: ONVIFUserChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.onvifuser !== undefined) {
      ONVIFUser.encode(message.onvifuser, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ONVIFUserChanged {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseONVIFUserChanged();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.onvifuser = ONVIFUser.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ONVIFUserChanged {
    return { onvifuser: isSet(object.onvifuser) ? ONVIFUser.fromJSON(object.onvifuser) : undefined };
  },

  toJSON(message: ONVIFUserChanged): unknown {
    const obj: any = {};
    if (message.onvifuser !== undefined) {
      obj.onvifuser = ONVIFUser.toJSON(message.onvifuser);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ONVIFUserChanged>, I>>(base?: I): ONVIFUserChanged {
    return ONVIFUserChanged.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ONVIFUserChanged>, I>>(object: I): ONVIFUserChanged {
    const message = createBaseONVIFUserChanged();
    message.onvifuser = (object.onvifuser !== undefined && object.onvifuser !== null)
      ? ONVIFUser.fromPartial(object.onvifuser)
      : undefined;
    return message;
  },
};

function createBaseONVIFUserRemoved(): ONVIFUserRemoved {
  return { token: "" };
}

export const ONVIFUserRemoved = {
  encode(message: ONVIFUserRemoved, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ONVIFUserRemoved {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseONVIFUserRemoved();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.token = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ONVIFUserRemoved {
    return { token: isSet(object.token) ? globalThis.String(object.token) : "" };
  },

  toJSON(message: ONVIFUserRemoved): unknown {
    const obj: any = {};
    if (message.token !== "") {
      obj.token = message.token;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ONVIFUserRemoved>, I>>(base?: I): ONVIFUserRemoved {
    return ONVIFUserRemoved.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ONVIFUserRemoved>, I>>(object: I): ONVIFUserRemoved {
    const message = createBaseONVIFUserRemoved();
    message.token = object.token ?? "";
    return message;
  },
};

function createBaseOpenStreetMapBaseUrisChanged(): OpenStreetMapBaseUrisChanged {
  return { openstreetmapbaseuris: [] };
}

export const OpenStreetMapBaseUrisChanged = {
  encode(message: OpenStreetMapBaseUrisChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.openstreetmapbaseuris) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OpenStreetMapBaseUrisChanged {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpenStreetMapBaseUrisChanged();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.openstreetmapbaseuris.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OpenStreetMapBaseUrisChanged {
    return {
      openstreetmapbaseuris: globalThis.Array.isArray(object?.openstreetmapbaseuris)
        ? object.openstreetmapbaseuris.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: OpenStreetMapBaseUrisChanged): unknown {
    const obj: any = {};
    if (message.openstreetmapbaseuris?.length) {
      obj.openstreetmapbaseuris = message.openstreetmapbaseuris;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OpenStreetMapBaseUrisChanged>, I>>(base?: I): OpenStreetMapBaseUrisChanged {
    return OpenStreetMapBaseUrisChanged.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OpenStreetMapBaseUrisChanged>, I>>(object: I): OpenStreetMapBaseUrisChanged {
    const message = createBaseOpenStreetMapBaseUrisChanged();
    message.openstreetmapbaseuris = object.openstreetmapbaseuris?.map((e) => e) || [];
    return message;
  },
};

function createBasePluginAdded(): PluginAdded {
  return { plugin: undefined };
}

export const PluginAdded = {
  encode(message: PluginAdded, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.plugin !== undefined) {
      Plugin.encode(message.plugin, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PluginAdded {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePluginAdded();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.plugin = Plugin.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PluginAdded {
    return { plugin: isSet(object.plugin) ? Plugin.fromJSON(object.plugin) : undefined };
  },

  toJSON(message: PluginAdded): unknown {
    const obj: any = {};
    if (message.plugin !== undefined) {
      obj.plugin = Plugin.toJSON(message.plugin);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PluginAdded>, I>>(base?: I): PluginAdded {
    return PluginAdded.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PluginAdded>, I>>(object: I): PluginAdded {
    const message = createBasePluginAdded();
    message.plugin = (object.plugin !== undefined && object.plugin !== null)
      ? Plugin.fromPartial(object.plugin)
      : undefined;
    return message;
  },
};

function createBasePluginChanged(): PluginChanged {
  return { token: "", enabled: false, parameters: "", priority: "0", state: 0, statemessage: "" };
}

export const PluginChanged = {
  encode(message: PluginChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePluginChanged();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.token = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.enabled = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.parameters = reader.string();
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.priority = longToString(reader.fixed64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.statemessage = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PluginChanged {
    return {
      token: isSet(object.token) ? globalThis.String(object.token) : "",
      enabled: isSet(object.enabled) ? globalThis.Boolean(object.enabled) : false,
      parameters: isSet(object.parameters) ? globalThis.String(object.parameters) : "",
      priority: isSet(object.priority) ? globalThis.String(object.priority) : "0",
      state: isSet(object.state) ? pluginStateFromJSON(object.state) : 0,
      statemessage: isSet(object.statemessage) ? globalThis.String(object.statemessage) : "",
    };
  },

  toJSON(message: PluginChanged): unknown {
    const obj: any = {};
    if (message.token !== "") {
      obj.token = message.token;
    }
    if (message.enabled === true) {
      obj.enabled = message.enabled;
    }
    if (message.parameters !== "") {
      obj.parameters = message.parameters;
    }
    if (message.priority !== "0") {
      obj.priority = message.priority;
    }
    if (message.state !== 0) {
      obj.state = pluginStateToJSON(message.state);
    }
    if (message.statemessage !== "") {
      obj.statemessage = message.statemessage;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PluginChanged>, I>>(base?: I): PluginChanged {
    return PluginChanged.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PluginChanged>, I>>(object: I): PluginChanged {
    const message = createBasePluginChanged();
    message.token = object.token ?? "";
    message.enabled = object.enabled ?? false;
    message.parameters = object.parameters ?? "";
    message.priority = object.priority ?? "0";
    message.state = object.state ?? 0;
    message.statemessage = object.statemessage ?? "";
    return message;
  },
};

function createBasePluginRemoved(): PluginRemoved {
  return { token: "" };
}

export const PluginRemoved = {
  encode(message: PluginRemoved, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PluginRemoved {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePluginRemoved();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.token = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PluginRemoved {
    return { token: isSet(object.token) ? globalThis.String(object.token) : "" };
  },

  toJSON(message: PluginRemoved): unknown {
    const obj: any = {};
    if (message.token !== "") {
      obj.token = message.token;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PluginRemoved>, I>>(base?: I): PluginRemoved {
    return PluginRemoved.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PluginRemoved>, I>>(object: I): PluginRemoved {
    const message = createBasePluginRemoved();
    message.token = object.token ?? "";
    return message;
  },
};

function createBasePluginStateChanged(): PluginStateChanged {
  return { token: "", state: 0, message: "" };
}

export const PluginStateChanged = {
  encode(message: PluginStateChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePluginStateChanged();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.token = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PluginStateChanged {
    return {
      token: isSet(object.token) ? globalThis.String(object.token) : "",
      state: isSet(object.state) ? pluginStateFromJSON(object.state) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
    };
  },

  toJSON(message: PluginStateChanged): unknown {
    const obj: any = {};
    if (message.token !== "") {
      obj.token = message.token;
    }
    if (message.state !== 0) {
      obj.state = pluginStateToJSON(message.state);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PluginStateChanged>, I>>(base?: I): PluginStateChanged {
    return PluginStateChanged.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PluginStateChanged>, I>>(object: I): PluginStateChanged {
    const message = createBasePluginStateChanged();
    message.token = object.token ?? "";
    message.state = object.state ?? 0;
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseReceiverAdded(): ReceiverAdded {
  return { receiver: undefined };
}

export const ReceiverAdded = {
  encode(message: ReceiverAdded, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.receiver !== undefined) {
      Receiver.encode(message.receiver, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReceiverAdded {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReceiverAdded();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.receiver = Receiver.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReceiverAdded {
    return { receiver: isSet(object.receiver) ? Receiver.fromJSON(object.receiver) : undefined };
  },

  toJSON(message: ReceiverAdded): unknown {
    const obj: any = {};
    if (message.receiver !== undefined) {
      obj.receiver = Receiver.toJSON(message.receiver);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReceiverAdded>, I>>(base?: I): ReceiverAdded {
    return ReceiverAdded.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReceiverAdded>, I>>(object: I): ReceiverAdded {
    const message = createBaseReceiverAdded();
    message.receiver = (object.receiver !== undefined && object.receiver !== null)
      ? Receiver.fromPartial(object.receiver)
      : undefined;
    return message;
  },
};

function createBaseReceiverChanged(): ReceiverChanged {
  return { receiver: undefined };
}

export const ReceiverChanged = {
  encode(message: ReceiverChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.receiver !== undefined) {
      Receiver.encode(message.receiver, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReceiverChanged {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReceiverChanged();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.receiver = Receiver.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReceiverChanged {
    return { receiver: isSet(object.receiver) ? Receiver.fromJSON(object.receiver) : undefined };
  },

  toJSON(message: ReceiverChanged): unknown {
    const obj: any = {};
    if (message.receiver !== undefined) {
      obj.receiver = Receiver.toJSON(message.receiver);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReceiverChanged>, I>>(base?: I): ReceiverChanged {
    return ReceiverChanged.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReceiverChanged>, I>>(object: I): ReceiverChanged {
    const message = createBaseReceiverChanged();
    message.receiver = (object.receiver !== undefined && object.receiver !== null)
      ? Receiver.fromPartial(object.receiver)
      : undefined;
    return message;
  },
};

function createBaseReceiverRemoved(): ReceiverRemoved {
  return { token: "" };
}

export const ReceiverRemoved = {
  encode(message: ReceiverRemoved, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReceiverRemoved {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReceiverRemoved();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.token = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReceiverRemoved {
    return { token: isSet(object.token) ? globalThis.String(object.token) : "" };
  },

  toJSON(message: ReceiverRemoved): unknown {
    const obj: any = {};
    if (message.token !== "") {
      obj.token = message.token;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReceiverRemoved>, I>>(base?: I): ReceiverRemoved {
    return ReceiverRemoved.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReceiverRemoved>, I>>(object: I): ReceiverRemoved {
    const message = createBaseReceiverRemoved();
    message.token = object.token ?? "";
    return message;
  },
};

function createBaseRecordingJobSourceAdded(): RecordingJobSourceAdded {
  return { source: undefined };
}

export const RecordingJobSourceAdded = {
  encode(message: RecordingJobSourceAdded, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.source !== undefined) {
      RecordingJobSource.encode(message.source, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecordingJobSourceAdded {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecordingJobSourceAdded();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.source = RecordingJobSource.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RecordingJobSourceAdded {
    return { source: isSet(object.source) ? RecordingJobSource.fromJSON(object.source) : undefined };
  },

  toJSON(message: RecordingJobSourceAdded): unknown {
    const obj: any = {};
    if (message.source !== undefined) {
      obj.source = RecordingJobSource.toJSON(message.source);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RecordingJobSourceAdded>, I>>(base?: I): RecordingJobSourceAdded {
    return RecordingJobSourceAdded.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RecordingJobSourceAdded>, I>>(object: I): RecordingJobSourceAdded {
    const message = createBaseRecordingJobSourceAdded();
    message.source = (object.source !== undefined && object.source !== null)
      ? RecordingJobSource.fromPartial(object.source)
      : undefined;
    return message;
  },
};

function createBaseRecordingJobSourceRemoved(): RecordingJobSourceRemoved {
  return { recordingtoken: "", recordingjobtoken: "", recordingjobsourcetoken: "" };
}

export const RecordingJobSourceRemoved = {
  encode(message: RecordingJobSourceRemoved, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): RecordingJobSourceRemoved {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecordingJobSourceRemoved();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.recordingtoken = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.recordingjobtoken = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.recordingjobsourcetoken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RecordingJobSourceRemoved {
    return {
      recordingtoken: isSet(object.recordingtoken) ? globalThis.String(object.recordingtoken) : "",
      recordingjobtoken: isSet(object.recordingjobtoken) ? globalThis.String(object.recordingjobtoken) : "",
      recordingjobsourcetoken: isSet(object.recordingjobsourcetoken)
        ? globalThis.String(object.recordingjobsourcetoken)
        : "",
    };
  },

  toJSON(message: RecordingJobSourceRemoved): unknown {
    const obj: any = {};
    if (message.recordingtoken !== "") {
      obj.recordingtoken = message.recordingtoken;
    }
    if (message.recordingjobtoken !== "") {
      obj.recordingjobtoken = message.recordingjobtoken;
    }
    if (message.recordingjobsourcetoken !== "") {
      obj.recordingjobsourcetoken = message.recordingjobsourcetoken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RecordingJobSourceRemoved>, I>>(base?: I): RecordingJobSourceRemoved {
    return RecordingJobSourceRemoved.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RecordingJobSourceRemoved>, I>>(object: I): RecordingJobSourceRemoved {
    const message = createBaseRecordingJobSourceRemoved();
    message.recordingtoken = object.recordingtoken ?? "";
    message.recordingjobtoken = object.recordingjobtoken ?? "";
    message.recordingjobsourcetoken = object.recordingjobsourcetoken ?? "";
    return message;
  },
};

function createBaseRecordingJobSourceTrackAdded(): RecordingJobSourceTrackAdded {
  return { track: undefined };
}

export const RecordingJobSourceTrackAdded = {
  encode(message: RecordingJobSourceTrackAdded, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.track !== undefined) {
      RecordingJobSourceTrack.encode(message.track, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecordingJobSourceTrackAdded {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecordingJobSourceTrackAdded();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.track = RecordingJobSourceTrack.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RecordingJobSourceTrackAdded {
    return { track: isSet(object.track) ? RecordingJobSourceTrack.fromJSON(object.track) : undefined };
  },

  toJSON(message: RecordingJobSourceTrackAdded): unknown {
    const obj: any = {};
    if (message.track !== undefined) {
      obj.track = RecordingJobSourceTrack.toJSON(message.track);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RecordingJobSourceTrackAdded>, I>>(base?: I): RecordingJobSourceTrackAdded {
    return RecordingJobSourceTrackAdded.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RecordingJobSourceTrackAdded>, I>>(object: I): RecordingJobSourceTrackAdded {
    const message = createBaseRecordingJobSourceTrackAdded();
    message.track = (object.track !== undefined && object.track !== null)
      ? RecordingJobSourceTrack.fromPartial(object.track)
      : undefined;
    return message;
  },
};

function createBaseRecordingJobSourceTrackRemoved(): RecordingJobSourceTrackRemoved {
  return { recordingtoken: "", recordingjobtoken: "", recordingjobsourcetoken: "", recordingjobsourcetracktoken: "" };
}

export const RecordingJobSourceTrackRemoved = {
  encode(message: RecordingJobSourceTrackRemoved, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): RecordingJobSourceTrackRemoved {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecordingJobSourceTrackRemoved();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.recordingtoken = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.recordingjobtoken = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.recordingjobsourcetoken = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.recordingjobsourcetracktoken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RecordingJobSourceTrackRemoved {
    return {
      recordingtoken: isSet(object.recordingtoken) ? globalThis.String(object.recordingtoken) : "",
      recordingjobtoken: isSet(object.recordingjobtoken) ? globalThis.String(object.recordingjobtoken) : "",
      recordingjobsourcetoken: isSet(object.recordingjobsourcetoken)
        ? globalThis.String(object.recordingjobsourcetoken)
        : "",
      recordingjobsourcetracktoken: isSet(object.recordingjobsourcetracktoken)
        ? globalThis.String(object.recordingjobsourcetracktoken)
        : "",
    };
  },

  toJSON(message: RecordingJobSourceTrackRemoved): unknown {
    const obj: any = {};
    if (message.recordingtoken !== "") {
      obj.recordingtoken = message.recordingtoken;
    }
    if (message.recordingjobtoken !== "") {
      obj.recordingjobtoken = message.recordingjobtoken;
    }
    if (message.recordingjobsourcetoken !== "") {
      obj.recordingjobsourcetoken = message.recordingjobsourcetoken;
    }
    if (message.recordingjobsourcetracktoken !== "") {
      obj.recordingjobsourcetracktoken = message.recordingjobsourcetracktoken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RecordingJobSourceTrackRemoved>, I>>(base?: I): RecordingJobSourceTrackRemoved {
    return RecordingJobSourceTrackRemoved.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RecordingJobSourceTrackRemoved>, I>>(
    object: I,
  ): RecordingJobSourceTrackRemoved {
    const message = createBaseRecordingJobSourceTrackRemoved();
    message.recordingtoken = object.recordingtoken ?? "";
    message.recordingjobtoken = object.recordingjobtoken ?? "";
    message.recordingjobsourcetoken = object.recordingjobsourcetoken ?? "";
    message.recordingjobsourcetracktoken = object.recordingjobsourcetracktoken ?? "";
    return message;
  },
};

function createBaseRecordingLogMessage(): RecordingLogMessage {
  return { token: "", logmessage: undefined };
}

export const RecordingLogMessage = {
  encode(message: RecordingLogMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.logmessage !== undefined) {
      LogMessage.encode(message.logmessage, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecordingLogMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecordingLogMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.token = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.logmessage = LogMessage.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RecordingLogMessage {
    return {
      token: isSet(object.token) ? globalThis.String(object.token) : "",
      logmessage: isSet(object.logmessage) ? LogMessage.fromJSON(object.logmessage) : undefined,
    };
  },

  toJSON(message: RecordingLogMessage): unknown {
    const obj: any = {};
    if (message.token !== "") {
      obj.token = message.token;
    }
    if (message.logmessage !== undefined) {
      obj.logmessage = LogMessage.toJSON(message.logmessage);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RecordingLogMessage>, I>>(base?: I): RecordingLogMessage {
    return RecordingLogMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RecordingLogMessage>, I>>(object: I): RecordingLogMessage {
    const message = createBaseRecordingLogMessage();
    message.token = object.token ?? "";
    message.logmessage = (object.logmessage !== undefined && object.logmessage !== null)
      ? LogMessage.fromPartial(object.logmessage)
      : undefined;
    return message;
  },
};

function createBaseRecordingTrackLogMessage(): RecordingTrackLogMessage {
  return { recordingtoken: "", trackid: 0, logmessage: undefined };
}

export const RecordingTrackLogMessage = {
  encode(message: RecordingTrackLogMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): RecordingTrackLogMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecordingTrackLogMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.recordingtoken = reader.string();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.trackid = reader.fixed32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.logmessage = LogMessage.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RecordingTrackLogMessage {
    return {
      recordingtoken: isSet(object.recordingtoken) ? globalThis.String(object.recordingtoken) : "",
      trackid: isSet(object.trackid) ? globalThis.Number(object.trackid) : 0,
      logmessage: isSet(object.logmessage) ? LogMessage.fromJSON(object.logmessage) : undefined,
    };
  },

  toJSON(message: RecordingTrackLogMessage): unknown {
    const obj: any = {};
    if (message.recordingtoken !== "") {
      obj.recordingtoken = message.recordingtoken;
    }
    if (message.trackid !== 0) {
      obj.trackid = Math.round(message.trackid);
    }
    if (message.logmessage !== undefined) {
      obj.logmessage = LogMessage.toJSON(message.logmessage);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RecordingTrackLogMessage>, I>>(base?: I): RecordingTrackLogMessage {
    return RecordingTrackLogMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RecordingTrackLogMessage>, I>>(object: I): RecordingTrackLogMessage {
    const message = createBaseRecordingTrackLogMessage();
    message.recordingtoken = object.recordingtoken ?? "";
    message.trackid = object.trackid ?? 0;
    message.logmessage = (object.logmessage !== undefined && object.logmessage !== null)
      ? LogMessage.fromPartial(object.logmessage)
      : undefined;
    return message;
  },
};

function createBaseRecordingAdded(): RecordingAdded {
  return { recording: undefined };
}

export const RecordingAdded = {
  encode(message: RecordingAdded, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.recording !== undefined) {
      Recording.encode(message.recording, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecordingAdded {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecordingAdded();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.recording = Recording.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RecordingAdded {
    return { recording: isSet(object.recording) ? Recording.fromJSON(object.recording) : undefined };
  },

  toJSON(message: RecordingAdded): unknown {
    const obj: any = {};
    if (message.recording !== undefined) {
      obj.recording = Recording.toJSON(message.recording);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RecordingAdded>, I>>(base?: I): RecordingAdded {
    return RecordingAdded.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RecordingAdded>, I>>(object: I): RecordingAdded {
    const message = createBaseRecordingAdded();
    message.recording = (object.recording !== undefined && object.recording !== null)
      ? Recording.fromPartial(object.recording)
      : undefined;
    return message;
  },
};

function createBaseRecordingChanged(): RecordingChanged {
  return { recording: undefined };
}

export const RecordingChanged = {
  encode(message: RecordingChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.recording !== undefined) {
      Recording.encode(message.recording, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecordingChanged {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecordingChanged();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.recording = Recording.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RecordingChanged {
    return { recording: isSet(object.recording) ? Recording.fromJSON(object.recording) : undefined };
  },

  toJSON(message: RecordingChanged): unknown {
    const obj: any = {};
    if (message.recording !== undefined) {
      obj.recording = Recording.toJSON(message.recording);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RecordingChanged>, I>>(base?: I): RecordingChanged {
    return RecordingChanged.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RecordingChanged>, I>>(object: I): RecordingChanged {
    const message = createBaseRecordingChanged();
    message.recording = (object.recording !== undefined && object.recording !== null)
      ? Recording.fromPartial(object.recording)
      : undefined;
    return message;
  },
};

function createBaseRecordingRemoved(): RecordingRemoved {
  return { token: "" };
}

export const RecordingRemoved = {
  encode(message: RecordingRemoved, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecordingRemoved {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecordingRemoved();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.token = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RecordingRemoved {
    return { token: isSet(object.token) ? globalThis.String(object.token) : "" };
  },

  toJSON(message: RecordingRemoved): unknown {
    const obj: any = {};
    if (message.token !== "") {
      obj.token = message.token;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RecordingRemoved>, I>>(base?: I): RecordingRemoved {
    return RecordingRemoved.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RecordingRemoved>, I>>(object: I): RecordingRemoved {
    const message = createBaseRecordingRemoved();
    message.token = object.token ?? "";
    return message;
  },
};

function createBaseRecordingJobAdded(): RecordingJobAdded {
  return { recordingjob: undefined };
}

export const RecordingJobAdded = {
  encode(message: RecordingJobAdded, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.recordingjob !== undefined) {
      RecordingJob.encode(message.recordingjob, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecordingJobAdded {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecordingJobAdded();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.recordingjob = RecordingJob.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RecordingJobAdded {
    return { recordingjob: isSet(object.recordingjob) ? RecordingJob.fromJSON(object.recordingjob) : undefined };
  },

  toJSON(message: RecordingJobAdded): unknown {
    const obj: any = {};
    if (message.recordingjob !== undefined) {
      obj.recordingjob = RecordingJob.toJSON(message.recordingjob);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RecordingJobAdded>, I>>(base?: I): RecordingJobAdded {
    return RecordingJobAdded.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RecordingJobAdded>, I>>(object: I): RecordingJobAdded {
    const message = createBaseRecordingJobAdded();
    message.recordingjob = (object.recordingjob !== undefined && object.recordingjob !== null)
      ? RecordingJob.fromPartial(object.recordingjob)
      : undefined;
    return message;
  },
};

function createBaseRecordingJobChanged(): RecordingJobChanged {
  return { recordingjob: undefined };
}

export const RecordingJobChanged = {
  encode(message: RecordingJobChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.recordingjob !== undefined) {
      RecordingJob.encode(message.recordingjob, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecordingJobChanged {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecordingJobChanged();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.recordingjob = RecordingJob.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RecordingJobChanged {
    return { recordingjob: isSet(object.recordingjob) ? RecordingJob.fromJSON(object.recordingjob) : undefined };
  },

  toJSON(message: RecordingJobChanged): unknown {
    const obj: any = {};
    if (message.recordingjob !== undefined) {
      obj.recordingjob = RecordingJob.toJSON(message.recordingjob);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RecordingJobChanged>, I>>(base?: I): RecordingJobChanged {
    return RecordingJobChanged.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RecordingJobChanged>, I>>(object: I): RecordingJobChanged {
    const message = createBaseRecordingJobChanged();
    message.recordingjob = (object.recordingjob !== undefined && object.recordingjob !== null)
      ? RecordingJob.fromPartial(object.recordingjob)
      : undefined;
    return message;
  },
};

function createBaseRecordingJobRemoved(): RecordingJobRemoved {
  return { recordingtoken: "", recordingjobtoken: "" };
}

export const RecordingJobRemoved = {
  encode(message: RecordingJobRemoved, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.recordingtoken !== "") {
      writer.uint32(10).string(message.recordingtoken);
    }
    if (message.recordingjobtoken !== "") {
      writer.uint32(18).string(message.recordingjobtoken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecordingJobRemoved {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecordingJobRemoved();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.recordingtoken = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.recordingjobtoken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RecordingJobRemoved {
    return {
      recordingtoken: isSet(object.recordingtoken) ? globalThis.String(object.recordingtoken) : "",
      recordingjobtoken: isSet(object.recordingjobtoken) ? globalThis.String(object.recordingjobtoken) : "",
    };
  },

  toJSON(message: RecordingJobRemoved): unknown {
    const obj: any = {};
    if (message.recordingtoken !== "") {
      obj.recordingtoken = message.recordingtoken;
    }
    if (message.recordingjobtoken !== "") {
      obj.recordingjobtoken = message.recordingjobtoken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RecordingJobRemoved>, I>>(base?: I): RecordingJobRemoved {
    return RecordingJobRemoved.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RecordingJobRemoved>, I>>(object: I): RecordingJobRemoved {
    const message = createBaseRecordingJobRemoved();
    message.recordingtoken = object.recordingtoken ?? "";
    message.recordingjobtoken = object.recordingjobtoken ?? "";
    return message;
  },
};

function createBaseRecordingTrackAdded(): RecordingTrackAdded {
  return { recordingtrack: undefined };
}

export const RecordingTrackAdded = {
  encode(message: RecordingTrackAdded, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.recordingtrack !== undefined) {
      RecordingTrack.encode(message.recordingtrack, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecordingTrackAdded {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecordingTrackAdded();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.recordingtrack = RecordingTrack.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RecordingTrackAdded {
    return {
      recordingtrack: isSet(object.recordingtrack) ? RecordingTrack.fromJSON(object.recordingtrack) : undefined,
    };
  },

  toJSON(message: RecordingTrackAdded): unknown {
    const obj: any = {};
    if (message.recordingtrack !== undefined) {
      obj.recordingtrack = RecordingTrack.toJSON(message.recordingtrack);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RecordingTrackAdded>, I>>(base?: I): RecordingTrackAdded {
    return RecordingTrackAdded.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RecordingTrackAdded>, I>>(object: I): RecordingTrackAdded {
    const message = createBaseRecordingTrackAdded();
    message.recordingtrack = (object.recordingtrack !== undefined && object.recordingtrack !== null)
      ? RecordingTrack.fromPartial(object.recordingtrack)
      : undefined;
    return message;
  },
};

function createBaseRecordingTrackChanged(): RecordingTrackChanged {
  return { recordingtrack: undefined };
}

export const RecordingTrackChanged = {
  encode(message: RecordingTrackChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.recordingtrack !== undefined) {
      RecordingTrack.encode(message.recordingtrack, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecordingTrackChanged {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecordingTrackChanged();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.recordingtrack = RecordingTrack.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RecordingTrackChanged {
    return {
      recordingtrack: isSet(object.recordingtrack) ? RecordingTrack.fromJSON(object.recordingtrack) : undefined,
    };
  },

  toJSON(message: RecordingTrackChanged): unknown {
    const obj: any = {};
    if (message.recordingtrack !== undefined) {
      obj.recordingtrack = RecordingTrack.toJSON(message.recordingtrack);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RecordingTrackChanged>, I>>(base?: I): RecordingTrackChanged {
    return RecordingTrackChanged.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RecordingTrackChanged>, I>>(object: I): RecordingTrackChanged {
    const message = createBaseRecordingTrackChanged();
    message.recordingtrack = (object.recordingtrack !== undefined && object.recordingtrack !== null)
      ? RecordingTrack.fromPartial(object.recordingtrack)
      : undefined;
    return message;
  },
};

function createBaseRecordingTrackRemoved(): RecordingTrackRemoved {
  return { recordingtoken: "", recordingtrackid: 0 };
}

export const RecordingTrackRemoved = {
  encode(message: RecordingTrackRemoved, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.recordingtoken !== "") {
      writer.uint32(10).string(message.recordingtoken);
    }
    if (message.recordingtrackid !== 0) {
      writer.uint32(21).fixed32(message.recordingtrackid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecordingTrackRemoved {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecordingTrackRemoved();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.recordingtoken = reader.string();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.recordingtrackid = reader.fixed32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RecordingTrackRemoved {
    return {
      recordingtoken: isSet(object.recordingtoken) ? globalThis.String(object.recordingtoken) : "",
      recordingtrackid: isSet(object.recordingtrackid) ? globalThis.Number(object.recordingtrackid) : 0,
    };
  },

  toJSON(message: RecordingTrackRemoved): unknown {
    const obj: any = {};
    if (message.recordingtoken !== "") {
      obj.recordingtoken = message.recordingtoken;
    }
    if (message.recordingtrackid !== 0) {
      obj.recordingtrackid = Math.round(message.recordingtrackid);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RecordingTrackRemoved>, I>>(base?: I): RecordingTrackRemoved {
    return RecordingTrackRemoved.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RecordingTrackRemoved>, I>>(object: I): RecordingTrackRemoved {
    const message = createBaseRecordingTrackRemoved();
    message.recordingtoken = object.recordingtoken ?? "";
    message.recordingtrackid = object.recordingtrackid ?? 0;
    return message;
  },
};

function createBaseRecordingActiveJobChanged(): RecordingActiveJobChanged {
  return { recordingtoken: "", activejob: undefined };
}

export const RecordingActiveJobChanged = {
  encode(message: RecordingActiveJobChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.recordingtoken !== "") {
      writer.uint32(10).string(message.recordingtoken);
    }
    if (message.activejob !== undefined) {
      UInt64Value.encode({ value: message.activejob! }, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecordingActiveJobChanged {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecordingActiveJobChanged();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.recordingtoken = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.activejob = UInt64Value.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RecordingActiveJobChanged {
    return {
      recordingtoken: isSet(object.recordingtoken) ? globalThis.String(object.recordingtoken) : "",
      activejob: isSet(object.activejob) ? String(object.activejob) : undefined,
    };
  },

  toJSON(message: RecordingActiveJobChanged): unknown {
    const obj: any = {};
    if (message.recordingtoken !== "") {
      obj.recordingtoken = message.recordingtoken;
    }
    if (message.activejob !== undefined) {
      obj.activejob = message.activejob;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RecordingActiveJobChanged>, I>>(base?: I): RecordingActiveJobChanged {
    return RecordingActiveJobChanged.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RecordingActiveJobChanged>, I>>(object: I): RecordingActiveJobChanged {
    const message = createBaseRecordingActiveJobChanged();
    message.recordingtoken = object.recordingtoken ?? "";
    message.activejob = object.activejob ?? undefined;
    return message;
  },
};

function createBaseRecordingJobSourceTrackActiveParametersChanged(): RecordingJobSourceTrackActiveParametersChanged {
  return {
    recordingtoken: "",
    recordingjobtoken: "",
    recordingjobsourcetoken: "",
    recordingjobsourcetracktoken: "",
    activeparameters: [],
  };
}

export const RecordingJobSourceTrackActiveParametersChanged = {
  encode(
    message: RecordingJobSourceTrackActiveParametersChanged,
    writer: _m0.Writer = _m0.Writer.create(),
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

  decode(input: _m0.Reader | Uint8Array, length?: number): RecordingJobSourceTrackActiveParametersChanged {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecordingJobSourceTrackActiveParametersChanged();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.recordingtoken = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.recordingjobtoken = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.recordingjobsourcetoken = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.recordingjobsourcetracktoken = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.activeparameters.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RecordingJobSourceTrackActiveParametersChanged {
    return {
      recordingtoken: isSet(object.recordingtoken) ? globalThis.String(object.recordingtoken) : "",
      recordingjobtoken: isSet(object.recordingjobtoken) ? globalThis.String(object.recordingjobtoken) : "",
      recordingjobsourcetoken: isSet(object.recordingjobsourcetoken)
        ? globalThis.String(object.recordingjobsourcetoken)
        : "",
      recordingjobsourcetracktoken: isSet(object.recordingjobsourcetracktoken)
        ? globalThis.String(object.recordingjobsourcetracktoken)
        : "",
      activeparameters: globalThis.Array.isArray(object?.activeparameters)
        ? object.activeparameters.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: RecordingJobSourceTrackActiveParametersChanged): unknown {
    const obj: any = {};
    if (message.recordingtoken !== "") {
      obj.recordingtoken = message.recordingtoken;
    }
    if (message.recordingjobtoken !== "") {
      obj.recordingjobtoken = message.recordingjobtoken;
    }
    if (message.recordingjobsourcetoken !== "") {
      obj.recordingjobsourcetoken = message.recordingjobsourcetoken;
    }
    if (message.recordingjobsourcetracktoken !== "") {
      obj.recordingjobsourcetracktoken = message.recordingjobsourcetracktoken;
    }
    if (message.activeparameters?.length) {
      obj.activeparameters = message.activeparameters;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RecordingJobSourceTrackActiveParametersChanged>, I>>(
    base?: I,
  ): RecordingJobSourceTrackActiveParametersChanged {
    return RecordingJobSourceTrackActiveParametersChanged.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RecordingJobSourceTrackActiveParametersChanged>, I>>(
    object: I,
  ): RecordingJobSourceTrackActiveParametersChanged {
    const message = createBaseRecordingJobSourceTrackActiveParametersChanged();
    message.recordingtoken = object.recordingtoken ?? "";
    message.recordingjobtoken = object.recordingjobtoken ?? "";
    message.recordingjobsourcetoken = object.recordingjobsourcetoken ?? "";
    message.recordingjobsourcetracktoken = object.recordingjobsourcetracktoken ?? "";
    message.activeparameters = object.activeparameters?.map((e) => e) || [];
    return message;
  },
};

function createBaseRecordingJobSourceTrackState(): RecordingJobSourceTrackState {
  return {
    recordingtoken: "",
    recordingjobtoken: "",
    recordingjobsourcetoken: "",
    recordingjobsourcetracktoken: "",
    time: "0",
    state: 0,
    error: "",
  };
}

export const RecordingJobSourceTrackState = {
  encode(message: RecordingJobSourceTrackState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): RecordingJobSourceTrackState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecordingJobSourceTrackState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.recordingtoken = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.recordingjobtoken = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.recordingjobsourcetoken = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.recordingjobsourcetracktoken = reader.string();
          continue;
        case 5:
          if (tag !== 41) {
            break;
          }

          message.time = longToString(reader.fixed64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.error = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RecordingJobSourceTrackState {
    return {
      recordingtoken: isSet(object.recordingtoken) ? globalThis.String(object.recordingtoken) : "",
      recordingjobtoken: isSet(object.recordingjobtoken) ? globalThis.String(object.recordingjobtoken) : "",
      recordingjobsourcetoken: isSet(object.recordingjobsourcetoken)
        ? globalThis.String(object.recordingjobsourcetoken)
        : "",
      recordingjobsourcetracktoken: isSet(object.recordingjobsourcetracktoken)
        ? globalThis.String(object.recordingjobsourcetracktoken)
        : "",
      time: isSet(object.time) ? globalThis.String(object.time) : "0",
      state: isSet(object.state) ? recordingJobStateFromJSON(object.state) : 0,
      error: isSet(object.error) ? globalThis.String(object.error) : "",
    };
  },

  toJSON(message: RecordingJobSourceTrackState): unknown {
    const obj: any = {};
    if (message.recordingtoken !== "") {
      obj.recordingtoken = message.recordingtoken;
    }
    if (message.recordingjobtoken !== "") {
      obj.recordingjobtoken = message.recordingjobtoken;
    }
    if (message.recordingjobsourcetoken !== "") {
      obj.recordingjobsourcetoken = message.recordingjobsourcetoken;
    }
    if (message.recordingjobsourcetracktoken !== "") {
      obj.recordingjobsourcetracktoken = message.recordingjobsourcetracktoken;
    }
    if (message.time !== "0") {
      obj.time = message.time;
    }
    if (message.state !== 0) {
      obj.state = recordingJobStateToJSON(message.state);
    }
    if (message.error !== "") {
      obj.error = message.error;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RecordingJobSourceTrackState>, I>>(base?: I): RecordingJobSourceTrackState {
    return RecordingJobSourceTrackState.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RecordingJobSourceTrackState>, I>>(object: I): RecordingJobSourceTrackState {
    const message = createBaseRecordingJobSourceTrackState();
    message.recordingtoken = object.recordingtoken ?? "";
    message.recordingjobtoken = object.recordingjobtoken ?? "";
    message.recordingjobsourcetoken = object.recordingjobsourcetoken ?? "";
    message.recordingjobsourcetracktoken = object.recordingjobsourcetracktoken ?? "";
    message.time = object.time ?? "0";
    message.state = object.state ?? 0;
    message.error = object.error ?? "";
    return message;
  },
};

function createBaseRecordingTrackCodecAdded(): RecordingTrackCodecAdded {
  return { recordingtoken: "", recordingtrackid: 0, codecid: "0", codec: 0, parameters: "", timestamp: "0" };
}

export const RecordingTrackCodecAdded = {
  encode(message: RecordingTrackCodecAdded, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): RecordingTrackCodecAdded {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecordingTrackCodecAdded();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.recordingtoken = reader.string();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.recordingtrackid = reader.fixed32();
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.codecid = longToString(reader.fixed64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.codec = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.parameters = reader.string();
          continue;
        case 6:
          if (tag !== 49) {
            break;
          }

          message.timestamp = longToString(reader.fixed64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RecordingTrackCodecAdded {
    return {
      recordingtoken: isSet(object.recordingtoken) ? globalThis.String(object.recordingtoken) : "",
      recordingtrackid: isSet(object.recordingtrackid) ? globalThis.Number(object.recordingtrackid) : 0,
      codecid: isSet(object.codecid) ? globalThis.String(object.codecid) : "0",
      codec: isSet(object.codec) ? codecFromJSON(object.codec) : 0,
      parameters: isSet(object.parameters) ? globalThis.String(object.parameters) : "",
      timestamp: isSet(object.timestamp) ? globalThis.String(object.timestamp) : "0",
    };
  },

  toJSON(message: RecordingTrackCodecAdded): unknown {
    const obj: any = {};
    if (message.recordingtoken !== "") {
      obj.recordingtoken = message.recordingtoken;
    }
    if (message.recordingtrackid !== 0) {
      obj.recordingtrackid = Math.round(message.recordingtrackid);
    }
    if (message.codecid !== "0") {
      obj.codecid = message.codecid;
    }
    if (message.codec !== 0) {
      obj.codec = codecToJSON(message.codec);
    }
    if (message.parameters !== "") {
      obj.parameters = message.parameters;
    }
    if (message.timestamp !== "0") {
      obj.timestamp = message.timestamp;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RecordingTrackCodecAdded>, I>>(base?: I): RecordingTrackCodecAdded {
    return RecordingTrackCodecAdded.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RecordingTrackCodecAdded>, I>>(object: I): RecordingTrackCodecAdded {
    const message = createBaseRecordingTrackCodecAdded();
    message.recordingtoken = object.recordingtoken ?? "";
    message.recordingtrackid = object.recordingtrackid ?? 0;
    message.codecid = object.codecid ?? "0";
    message.codec = object.codec ?? 0;
    message.parameters = object.parameters ?? "";
    message.timestamp = object.timestamp ?? "0";
    return message;
  },
};

function createBaseRecordingTrackCodecRemoved(): RecordingTrackCodecRemoved {
  return { recordingtoken: "", recordingtrackid: 0, codecid: "0" };
}

export const RecordingTrackCodecRemoved = {
  encode(message: RecordingTrackCodecRemoved, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): RecordingTrackCodecRemoved {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecordingTrackCodecRemoved();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.recordingtoken = reader.string();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.recordingtrackid = reader.fixed32();
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.codecid = longToString(reader.fixed64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RecordingTrackCodecRemoved {
    return {
      recordingtoken: isSet(object.recordingtoken) ? globalThis.String(object.recordingtoken) : "",
      recordingtrackid: isSet(object.recordingtrackid) ? globalThis.Number(object.recordingtrackid) : 0,
      codecid: isSet(object.codecid) ? globalThis.String(object.codecid) : "0",
    };
  },

  toJSON(message: RecordingTrackCodecRemoved): unknown {
    const obj: any = {};
    if (message.recordingtoken !== "") {
      obj.recordingtoken = message.recordingtoken;
    }
    if (message.recordingtrackid !== 0) {
      obj.recordingtrackid = Math.round(message.recordingtrackid);
    }
    if (message.codecid !== "0") {
      obj.codecid = message.codecid;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RecordingTrackCodecRemoved>, I>>(base?: I): RecordingTrackCodecRemoved {
    return RecordingTrackCodecRemoved.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RecordingTrackCodecRemoved>, I>>(object: I): RecordingTrackCodecRemoved {
    const message = createBaseRecordingTrackCodecRemoved();
    message.recordingtoken = object.recordingtoken ?? "";
    message.recordingtrackid = object.recordingtrackid ?? 0;
    message.codecid = object.codecid ?? "0";
    return message;
  },
};

function createBaseServerLogMessage(): ServerLogMessage {
  return { logmessage: undefined };
}

export const ServerLogMessage = {
  encode(message: ServerLogMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.logmessage !== undefined) {
      LogMessage.encode(message.logmessage, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServerLogMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServerLogMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.logmessage = LogMessage.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ServerLogMessage {
    return { logmessage: isSet(object.logmessage) ? LogMessage.fromJSON(object.logmessage) : undefined };
  },

  toJSON(message: ServerLogMessage): unknown {
    const obj: any = {};
    if (message.logmessage !== undefined) {
      obj.logmessage = LogMessage.toJSON(message.logmessage);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ServerLogMessage>, I>>(base?: I): ServerLogMessage {
    return ServerLogMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ServerLogMessage>, I>>(object: I): ServerLogMessage {
    const message = createBaseServerLogMessage();
    message.logmessage = (object.logmessage !== undefined && object.logmessage !== null)
      ? LogMessage.fromPartial(object.logmessage)
      : undefined;
    return message;
  },
};

function createBaseRecordingTrackSetData(): RecordingTrackSetData {
  return { recordingtoken: "", recordingtrackid: 0, indices: [] };
}

export const RecordingTrackSetData = {
  encode(message: RecordingTrackSetData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): RecordingTrackSetData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecordingTrackSetData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.recordingtoken = reader.string();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.recordingtrackid = reader.fixed32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.indices.push(Index.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RecordingTrackSetData {
    return {
      recordingtoken: isSet(object.recordingtoken) ? globalThis.String(object.recordingtoken) : "",
      recordingtrackid: isSet(object.recordingtrackid) ? globalThis.Number(object.recordingtrackid) : 0,
      indices: globalThis.Array.isArray(object?.indices) ? object.indices.map((e: any) => Index.fromJSON(e)) : [],
    };
  },

  toJSON(message: RecordingTrackSetData): unknown {
    const obj: any = {};
    if (message.recordingtoken !== "") {
      obj.recordingtoken = message.recordingtoken;
    }
    if (message.recordingtrackid !== 0) {
      obj.recordingtrackid = Math.round(message.recordingtrackid);
    }
    if (message.indices?.length) {
      obj.indices = message.indices.map((e) => Index.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RecordingTrackSetData>, I>>(base?: I): RecordingTrackSetData {
    return RecordingTrackSetData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RecordingTrackSetData>, I>>(object: I): RecordingTrackSetData {
    const message = createBaseRecordingTrackSetData();
    message.recordingtoken = object.recordingtoken ?? "";
    message.recordingtrackid = object.recordingtrackid ?? 0;
    message.indices = object.indices?.map((e) => Index.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRecordingTrackDeleteData(): RecordingTrackDeleteData {
  return { recordingtoken: "", recordingtrackid: 0, start: undefined, end: undefined };
}

export const RecordingTrackDeleteData = {
  encode(message: RecordingTrackDeleteData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.recordingtoken !== "") {
      writer.uint32(10).string(message.recordingtoken);
    }
    if (message.recordingtrackid !== 0) {
      writer.uint32(21).fixed32(message.recordingtrackid);
    }
    if (message.start !== undefined) {
      UInt64Value.encode({ value: message.start! }, writer.uint32(26).fork()).ldelim();
    }
    if (message.end !== undefined) {
      UInt64Value.encode({ value: message.end! }, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecordingTrackDeleteData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecordingTrackDeleteData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.recordingtoken = reader.string();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.recordingtrackid = reader.fixed32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.start = UInt64Value.decode(reader, reader.uint32()).value;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.end = UInt64Value.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RecordingTrackDeleteData {
    return {
      recordingtoken: isSet(object.recordingtoken) ? globalThis.String(object.recordingtoken) : "",
      recordingtrackid: isSet(object.recordingtrackid) ? globalThis.Number(object.recordingtrackid) : 0,
      start: isSet(object.start) ? String(object.start) : undefined,
      end: isSet(object.end) ? String(object.end) : undefined,
    };
  },

  toJSON(message: RecordingTrackDeleteData): unknown {
    const obj: any = {};
    if (message.recordingtoken !== "") {
      obj.recordingtoken = message.recordingtoken;
    }
    if (message.recordingtrackid !== 0) {
      obj.recordingtrackid = Math.round(message.recordingtrackid);
    }
    if (message.start !== undefined) {
      obj.start = message.start;
    }
    if (message.end !== undefined) {
      obj.end = message.end;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RecordingTrackDeleteData>, I>>(base?: I): RecordingTrackDeleteData {
    return RecordingTrackDeleteData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RecordingTrackDeleteData>, I>>(object: I): RecordingTrackDeleteData {
    const message = createBaseRecordingTrackDeleteData();
    message.recordingtoken = object.recordingtoken ?? "";
    message.recordingtrackid = object.recordingtrackid ?? 0;
    message.start = object.start ?? undefined;
    message.end = object.end ?? undefined;
    return message;
  },
};

function createBaseUserAdded(): UserAdded {
  return { user: undefined };
}

export const UserAdded = {
  encode(message: UserAdded, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserAdded {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserAdded();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user = User.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserAdded {
    return { user: isSet(object.user) ? User.fromJSON(object.user) : undefined };
  },

  toJSON(message: UserAdded): unknown {
    const obj: any = {};
    if (message.user !== undefined) {
      obj.user = User.toJSON(message.user);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserAdded>, I>>(base?: I): UserAdded {
    return UserAdded.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserAdded>, I>>(object: I): UserAdded {
    const message = createBaseUserAdded();
    message.user = (object.user !== undefined && object.user !== null) ? User.fromPartial(object.user) : undefined;
    return message;
  },
};

function createBaseUserChanged(): UserChanged {
  return { token: "", grouptoken: "" };
}

export const UserChanged = {
  encode(message: UserChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.grouptoken !== "") {
      writer.uint32(18).string(message.grouptoken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserChanged {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserChanged();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.token = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.grouptoken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserChanged {
    return {
      token: isSet(object.token) ? globalThis.String(object.token) : "",
      grouptoken: isSet(object.grouptoken) ? globalThis.String(object.grouptoken) : "",
    };
  },

  toJSON(message: UserChanged): unknown {
    const obj: any = {};
    if (message.token !== "") {
      obj.token = message.token;
    }
    if (message.grouptoken !== "") {
      obj.grouptoken = message.grouptoken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserChanged>, I>>(base?: I): UserChanged {
    return UserChanged.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserChanged>, I>>(object: I): UserChanged {
    const message = createBaseUserChanged();
    message.token = object.token ?? "";
    message.grouptoken = object.grouptoken ?? "";
    return message;
  },
};

function createBaseUserRemoved(): UserRemoved {
  return { token: "" };
}

export const UserRemoved = {
  encode(message: UserRemoved, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserRemoved {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserRemoved();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.token = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserRemoved {
    return { token: isSet(object.token) ? globalThis.String(object.token) : "" };
  },

  toJSON(message: UserRemoved): unknown {
    const obj: any = {};
    if (message.token !== "") {
      obj.token = message.token;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserRemoved>, I>>(base?: I): UserRemoved {
    return UserRemoved.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserRemoved>, I>>(object: I): UserRemoved {
    const message = createBaseUserRemoved();
    message.token = object.token ?? "";
    return message;
  },
};

function createBaseAddIceCandidateWebRTCRequest(): AddIceCandidateWebRTCRequest {
  return { peerid: "", icecandidiate: "" };
}

export const AddIceCandidateWebRTCRequest = {
  encode(message: AddIceCandidateWebRTCRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.peerid !== "") {
      writer.uint32(10).string(message.peerid);
    }
    if (message.icecandidiate !== "") {
      writer.uint32(18).string(message.icecandidiate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddIceCandidateWebRTCRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddIceCandidateWebRTCRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.peerid = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.icecandidiate = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddIceCandidateWebRTCRequest {
    return {
      peerid: isSet(object.peerid) ? globalThis.String(object.peerid) : "",
      icecandidiate: isSet(object.icecandidiate) ? globalThis.String(object.icecandidiate) : "",
    };
  },

  toJSON(message: AddIceCandidateWebRTCRequest): unknown {
    const obj: any = {};
    if (message.peerid !== "") {
      obj.peerid = message.peerid;
    }
    if (message.icecandidiate !== "") {
      obj.icecandidiate = message.icecandidiate;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddIceCandidateWebRTCRequest>, I>>(base?: I): AddIceCandidateWebRTCRequest {
    return AddIceCandidateWebRTCRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddIceCandidateWebRTCRequest>, I>>(object: I): AddIceCandidateWebRTCRequest {
    const message = createBaseAddIceCandidateWebRTCRequest();
    message.peerid = object.peerid ?? "";
    message.icecandidiate = object.icecandidiate ?? "";
    return message;
  },
};

function createBaseAddIceCandidateWebRTCResponse(): AddIceCandidateWebRTCResponse {
  return {};
}

export const AddIceCandidateWebRTCResponse = {
  encode(_: AddIceCandidateWebRTCResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddIceCandidateWebRTCResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddIceCandidateWebRTCResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): AddIceCandidateWebRTCResponse {
    return {};
  },

  toJSON(_: AddIceCandidateWebRTCResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<AddIceCandidateWebRTCResponse>, I>>(base?: I): AddIceCandidateWebRTCResponse {
    return AddIceCandidateWebRTCResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddIceCandidateWebRTCResponse>, I>>(_: I): AddIceCandidateWebRTCResponse {
    const message = createBaseAddIceCandidateWebRTCResponse();
    return message;
  },
};

function createBaseAuthenticateRequest(): AuthenticateRequest {
  return { username: "", password: "" };
}

export const AuthenticateRequest = {
  encode(message: AuthenticateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.username !== "") {
      writer.uint32(10).string(message.username);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthenticateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthenticateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.username = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.password = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AuthenticateRequest {
    return {
      username: isSet(object.username) ? globalThis.String(object.username) : "",
      password: isSet(object.password) ? globalThis.String(object.password) : "",
    };
  },

  toJSON(message: AuthenticateRequest): unknown {
    const obj: any = {};
    if (message.username !== "") {
      obj.username = message.username;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AuthenticateRequest>, I>>(base?: I): AuthenticateRequest {
    return AuthenticateRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AuthenticateRequest>, I>>(object: I): AuthenticateRequest {
    const message = createBaseAuthenticateRequest();
    message.username = object.username ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

function createBaseAuthenticateResponse(): AuthenticateResponse {
  return { jwttoken: "" };
}

export const AuthenticateResponse = {
  encode(message: AuthenticateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.jwttoken !== "") {
      writer.uint32(10).string(message.jwttoken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthenticateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthenticateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.jwttoken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AuthenticateResponse {
    return { jwttoken: isSet(object.jwttoken) ? globalThis.String(object.jwttoken) : "" };
  },

  toJSON(message: AuthenticateResponse): unknown {
    const obj: any = {};
    if (message.jwttoken !== "") {
      obj.jwttoken = message.jwttoken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AuthenticateResponse>, I>>(base?: I): AuthenticateResponse {
    return AuthenticateResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AuthenticateResponse>, I>>(object: I): AuthenticateResponse {
    const message = createBaseAuthenticateResponse();
    message.jwttoken = object.jwttoken ?? "";
    return message;
  },
};

function createBaseAddUserRequest(): AddUserRequest {
  return { username: "", digest: "", group: "" };
}

export const AddUserRequest = {
  encode(message: AddUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.username = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.digest = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.group = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddUserRequest {
    return {
      username: isSet(object.username) ? globalThis.String(object.username) : "",
      digest: isSet(object.digest) ? globalThis.String(object.digest) : "",
      group: isSet(object.group) ? globalThis.String(object.group) : "",
    };
  },

  toJSON(message: AddUserRequest): unknown {
    const obj: any = {};
    if (message.username !== "") {
      obj.username = message.username;
    }
    if (message.digest !== "") {
      obj.digest = message.digest;
    }
    if (message.group !== "") {
      obj.group = message.group;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddUserRequest>, I>>(base?: I): AddUserRequest {
    return AddUserRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddUserRequest>, I>>(object: I): AddUserRequest {
    const message = createBaseAddUserRequest();
    message.username = object.username ?? "";
    message.digest = object.digest ?? "";
    message.group = object.group ?? "";
    return message;
  },
};

function createBaseAddUserResponse(): AddUserResponse {
  return {};
}

export const AddUserResponse = {
  encode(_: AddUserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddUserResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): AddUserResponse {
    return {};
  },

  toJSON(_: AddUserResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<AddUserResponse>, I>>(base?: I): AddUserResponse {
    return AddUserResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AddUserResponse>, I>>(_: I): AddUserResponse {
    const message = createBaseAddUserResponse();
    return message;
  },
};

function createBaseUpdateUserRequest(): UpdateUserRequest {
  return { token: "", password: "", group: "" };
}

export const UpdateUserRequest = {
  encode(message: UpdateUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    if (message.group !== "") {
      writer.uint32(26).string(message.group);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateUserRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.token = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.password = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.group = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateUserRequest {
    return {
      token: isSet(object.token) ? globalThis.String(object.token) : "",
      password: isSet(object.password) ? globalThis.String(object.password) : "",
      group: isSet(object.group) ? globalThis.String(object.group) : "",
    };
  },

  toJSON(message: UpdateUserRequest): unknown {
    const obj: any = {};
    if (message.token !== "") {
      obj.token = message.token;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    if (message.group !== "") {
      obj.group = message.group;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateUserRequest>, I>>(base?: I): UpdateUserRequest {
    return UpdateUserRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateUserRequest>, I>>(object: I): UpdateUserRequest {
    const message = createBaseUpdateUserRequest();
    message.token = object.token ?? "";
    message.password = object.password ?? "";
    message.group = object.group ?? "";
    return message;
  },
};

function createBaseUpdateUserResponse(): UpdateUserResponse {
  return {};
}

export const UpdateUserResponse = {
  encode(_: UpdateUserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateUserResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): UpdateUserResponse {
    return {};
  },

  toJSON(_: UpdateUserResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateUserResponse>, I>>(base?: I): UpdateUserResponse {
    return UpdateUserResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateUserResponse>, I>>(_: I): UpdateUserResponse {
    const message = createBaseUpdateUserResponse();
    return message;
  },
};

function createBaseDeleteUserRequest(): DeleteUserRequest {
  return { token: "" };
}

export const DeleteUserRequest = {
  encode(message: DeleteUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteUserRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.token = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteUserRequest {
    return { token: isSet(object.token) ? globalThis.String(object.token) : "" };
  },

  toJSON(message: DeleteUserRequest): unknown {
    const obj: any = {};
    if (message.token !== "") {
      obj.token = message.token;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteUserRequest>, I>>(base?: I): DeleteUserRequest {
    return DeleteUserRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteUserRequest>, I>>(object: I): DeleteUserRequest {
    const message = createBaseDeleteUserRequest();
    message.token = object.token ?? "";
    return message;
  },
};

function createBaseDeleteUserResponse(): DeleteUserResponse {
  return {};
}

export const DeleteUserResponse = {
  encode(_: DeleteUserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteUserResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): DeleteUserResponse {
    return {};
  },

  toJSON(_: DeleteUserResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteUserResponse>, I>>(base?: I): DeleteUserResponse {
    return DeleteUserResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteUserResponse>, I>>(_: I): DeleteUserResponse {
    const message = createBaseDeleteUserResponse();
    return message;
  },
};

function createBaseGetUserDataRequest(): GetUserDataRequest {
  return { key: "0" };
}

export const GetUserDataRequest = {
  encode(message: GetUserDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "0") {
      writer.uint32(9).fixed64(message.key);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserDataRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserDataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.key = longToString(reader.fixed64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetUserDataRequest {
    return { key: isSet(object.key) ? globalThis.String(object.key) : "0" };
  },

  toJSON(message: GetUserDataRequest): unknown {
    const obj: any = {};
    if (message.key !== "0") {
      obj.key = message.key;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetUserDataRequest>, I>>(base?: I): GetUserDataRequest {
    return GetUserDataRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetUserDataRequest>, I>>(object: I): GetUserDataRequest {
    const message = createBaseGetUserDataRequest();
    message.key = object.key ?? "0";
    return message;
  },
};

function createBaseGetUserDataResponse(): GetUserDataResponse {
  return { data: "" };
}

export const GetUserDataResponse = {
  encode(message: GetUserDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data !== "") {
      writer.uint32(10).string(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserDataResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetUserDataResponse {
    return { data: isSet(object.data) ? globalThis.String(object.data) : "" };
  },

  toJSON(message: GetUserDataResponse): unknown {
    const obj: any = {};
    if (message.data !== "") {
      obj.data = message.data;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetUserDataResponse>, I>>(base?: I): GetUserDataResponse {
    return GetUserDataResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetUserDataResponse>, I>>(object: I): GetUserDataResponse {
    const message = createBaseGetUserDataResponse();
    message.data = object.data ?? "";
    return message;
  },
};

function createBaseSetUserDataRequest(): SetUserDataRequest {
  return { key: "0", data: "" };
}

export const SetUserDataRequest = {
  encode(message: SetUserDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "0") {
      writer.uint32(9).fixed64(message.key);
    }
    if (message.data !== "") {
      writer.uint32(18).string(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetUserDataRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetUserDataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.key = longToString(reader.fixed64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.data = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetUserDataRequest {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "0",
      data: isSet(object.data) ? globalThis.String(object.data) : "",
    };
  },

  toJSON(message: SetUserDataRequest): unknown {
    const obj: any = {};
    if (message.key !== "0") {
      obj.key = message.key;
    }
    if (message.data !== "") {
      obj.data = message.data;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SetUserDataRequest>, I>>(base?: I): SetUserDataRequest {
    return SetUserDataRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetUserDataRequest>, I>>(object: I): SetUserDataRequest {
    const message = createBaseSetUserDataRequest();
    message.key = object.key ?? "0";
    message.data = object.data ?? "";
    return message;
  },
};

function createBaseSetUserDataResponse(): SetUserDataResponse {
  return {};
}

export const SetUserDataResponse = {
  encode(_: SetUserDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetUserDataResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetUserDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): SetUserDataResponse {
    return {};
  },

  toJSON(_: SetUserDataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<SetUserDataResponse>, I>>(base?: I): SetUserDataResponse {
    return SetUserDataResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetUserDataResponse>, I>>(_: I): SetUserDataResponse {
    const message = createBaseSetUserDataResponse();
    return message;
  },
};

function createBaseCallWebRTCRequest(): CallWebRTCRequest {
  return { peerid: "", recording: "", videotrackid: 0, audiotrackid: undefined, sdp: "" };
}

export const CallWebRTCRequest = {
  encode(message: CallWebRTCRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.peerid !== "") {
      writer.uint32(10).string(message.peerid);
    }
    if (message.recording !== "") {
      writer.uint32(18).string(message.recording);
    }
    if (message.videotrackid !== 0) {
      writer.uint32(29).fixed32(message.videotrackid);
    }
    if (message.audiotrackid !== undefined) {
      writer.uint32(37).fixed32(message.audiotrackid);
    }
    if (message.sdp !== "") {
      writer.uint32(42).string(message.sdp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CallWebRTCRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCallWebRTCRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.peerid = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.recording = reader.string();
          continue;
        case 3:
          if (tag !== 29) {
            break;
          }

          message.videotrackid = reader.fixed32();
          continue;
        case 4:
          if (tag !== 37) {
            break;
          }

          message.audiotrackid = reader.fixed32();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.sdp = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CallWebRTCRequest {
    return {
      peerid: isSet(object.peerid) ? globalThis.String(object.peerid) : "",
      recording: isSet(object.recording) ? globalThis.String(object.recording) : "",
      videotrackid: isSet(object.videotrackid) ? globalThis.Number(object.videotrackid) : 0,
      audiotrackid: isSet(object.audiotrackid) ? globalThis.Number(object.audiotrackid) : undefined,
      sdp: isSet(object.sdp) ? globalThis.String(object.sdp) : "",
    };
  },

  toJSON(message: CallWebRTCRequest): unknown {
    const obj: any = {};
    if (message.peerid !== "") {
      obj.peerid = message.peerid;
    }
    if (message.recording !== "") {
      obj.recording = message.recording;
    }
    if (message.videotrackid !== 0) {
      obj.videotrackid = Math.round(message.videotrackid);
    }
    if (message.audiotrackid !== undefined) {
      obj.audiotrackid = Math.round(message.audiotrackid);
    }
    if (message.sdp !== "") {
      obj.sdp = message.sdp;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CallWebRTCRequest>, I>>(base?: I): CallWebRTCRequest {
    return CallWebRTCRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CallWebRTCRequest>, I>>(object: I): CallWebRTCRequest {
    const message = createBaseCallWebRTCRequest();
    message.peerid = object.peerid ?? "";
    message.recording = object.recording ?? "";
    message.videotrackid = object.videotrackid ?? 0;
    message.audiotrackid = object.audiotrackid ?? undefined;
    message.sdp = object.sdp ?? "";
    return message;
  },
};

function createBaseCallWebRTCResponse(): CallWebRTCResponse {
  return { sdp: "" };
}

export const CallWebRTCResponse = {
  encode(message: CallWebRTCResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sdp !== "") {
      writer.uint32(10).string(message.sdp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CallWebRTCResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCallWebRTCResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sdp = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CallWebRTCResponse {
    return { sdp: isSet(object.sdp) ? globalThis.String(object.sdp) : "" };
  },

  toJSON(message: CallWebRTCResponse): unknown {
    const obj: any = {};
    if (message.sdp !== "") {
      obj.sdp = message.sdp;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CallWebRTCResponse>, I>>(base?: I): CallWebRTCResponse {
    return CallWebRTCResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CallWebRTCResponse>, I>>(object: I): CallWebRTCResponse {
    const message = createBaseCallWebRTCResponse();
    message.sdp = object.sdp ?? "";
    return message;
  },
};

function createBaseGetIceCandidatesWebRTCRequest(): GetIceCandidatesWebRTCRequest {
  return { peerid: "" };
}

export const GetIceCandidatesWebRTCRequest = {
  encode(message: GetIceCandidatesWebRTCRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.peerid !== "") {
      writer.uint32(10).string(message.peerid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetIceCandidatesWebRTCRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetIceCandidatesWebRTCRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.peerid = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetIceCandidatesWebRTCRequest {
    return { peerid: isSet(object.peerid) ? globalThis.String(object.peerid) : "" };
  },

  toJSON(message: GetIceCandidatesWebRTCRequest): unknown {
    const obj: any = {};
    if (message.peerid !== "") {
      obj.peerid = message.peerid;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetIceCandidatesWebRTCRequest>, I>>(base?: I): GetIceCandidatesWebRTCRequest {
    return GetIceCandidatesWebRTCRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetIceCandidatesWebRTCRequest>, I>>(
    object: I,
  ): GetIceCandidatesWebRTCRequest {
    const message = createBaseGetIceCandidatesWebRTCRequest();
    message.peerid = object.peerid ?? "";
    return message;
  },
};

function createBaseGetIceCandidatesWebRTCResponse(): GetIceCandidatesWebRTCResponse {
  return { peerlist: "" };
}

export const GetIceCandidatesWebRTCResponse = {
  encode(message: GetIceCandidatesWebRTCResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.peerlist !== "") {
      writer.uint32(10).string(message.peerlist);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetIceCandidatesWebRTCResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetIceCandidatesWebRTCResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.peerlist = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetIceCandidatesWebRTCResponse {
    return { peerlist: isSet(object.peerlist) ? globalThis.String(object.peerlist) : "" };
  },

  toJSON(message: GetIceCandidatesWebRTCResponse): unknown {
    const obj: any = {};
    if (message.peerlist !== "") {
      obj.peerlist = message.peerlist;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetIceCandidatesWebRTCResponse>, I>>(base?: I): GetIceCandidatesWebRTCResponse {
    return GetIceCandidatesWebRTCResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetIceCandidatesWebRTCResponse>, I>>(
    object: I,
  ): GetIceCandidatesWebRTCResponse {
    const message = createBaseGetIceCandidatesWebRTCResponse();
    message.peerlist = object.peerlist ?? "";
    return message;
  },
};

function createBaseHangUpWebRTCRequest(): HangUpWebRTCRequest {
  return { peerid: "" };
}

export const HangUpWebRTCRequest = {
  encode(message: HangUpWebRTCRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.peerid !== "") {
      writer.uint32(10).string(message.peerid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HangUpWebRTCRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHangUpWebRTCRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.peerid = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HangUpWebRTCRequest {
    return { peerid: isSet(object.peerid) ? globalThis.String(object.peerid) : "" };
  },

  toJSON(message: HangUpWebRTCRequest): unknown {
    const obj: any = {};
    if (message.peerid !== "") {
      obj.peerid = message.peerid;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HangUpWebRTCRequest>, I>>(base?: I): HangUpWebRTCRequest {
    return HangUpWebRTCRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HangUpWebRTCRequest>, I>>(object: I): HangUpWebRTCRequest {
    const message = createBaseHangUpWebRTCRequest();
    message.peerid = object.peerid ?? "";
    return message;
  },
};

function createBaseHangUpWebRTCResponse(): HangUpWebRTCResponse {
  return {};
}

export const HangUpWebRTCResponse = {
  encode(_: HangUpWebRTCResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HangUpWebRTCResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHangUpWebRTCResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): HangUpWebRTCResponse {
    return {};
  },

  toJSON(_: HangUpWebRTCResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<HangUpWebRTCResponse>, I>>(base?: I): HangUpWebRTCResponse {
    return HangUpWebRTCResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HangUpWebRTCResponse>, I>>(_: I): HangUpWebRTCResponse {
    const message = createBaseHangUpWebRTCResponse();
    return message;
  },
};

function createBaseRefreshTokenRequest(): RefreshTokenRequest {
  return {};
}

export const RefreshTokenRequest = {
  encode(_: RefreshTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RefreshTokenRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRefreshTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): RefreshTokenRequest {
    return {};
  },

  toJSON(_: RefreshTokenRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<RefreshTokenRequest>, I>>(base?: I): RefreshTokenRequest {
    return RefreshTokenRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RefreshTokenRequest>, I>>(_: I): RefreshTokenRequest {
    const message = createBaseRefreshTokenRequest();
    return message;
  },
};

function createBaseRefreshTokenResponse(): RefreshTokenResponse {
  return { jwttoken: "" };
}

export const RefreshTokenResponse = {
  encode(message: RefreshTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.jwttoken !== "") {
      writer.uint32(10).string(message.jwttoken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RefreshTokenResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRefreshTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.jwttoken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RefreshTokenResponse {
    return { jwttoken: isSet(object.jwttoken) ? globalThis.String(object.jwttoken) : "" };
  },

  toJSON(message: RefreshTokenResponse): unknown {
    const obj: any = {};
    if (message.jwttoken !== "") {
      obj.jwttoken = message.jwttoken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RefreshTokenResponse>, I>>(base?: I): RefreshTokenResponse {
    return RefreshTokenResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RefreshTokenResponse>, I>>(object: I): RefreshTokenResponse {
    const message = createBaseRefreshTokenResponse();
    message.jwttoken = object.jwttoken ?? "";
    return message;
  },
};

function createBaseSubscribeRequest(): SubscribeRequest {
  return {};
}

export const SubscribeRequest = {
  encode(_: SubscribeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): SubscribeRequest {
    return {};
  },

  toJSON(_: SubscribeRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<SubscribeRequest>, I>>(base?: I): SubscribeRequest {
    return SubscribeRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SubscribeRequest>, I>>(_: I): SubscribeRequest {
    const message = createBaseSubscribeRequest();
    return message;
  },
};

function createBaseSubscribeResponse(): SubscribeResponse {
  return { message: undefined };
}

export const SubscribeResponse = {
  encode(message: SubscribeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== undefined) {
      Any.encode(message.message, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.message = Any.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SubscribeResponse {
    return { message: isSet(object.message) ? Any.fromJSON(object.message) : undefined };
  },

  toJSON(message: SubscribeResponse): unknown {
    const obj: any = {};
    if (message.message !== undefined) {
      obj.message = Any.toJSON(message.message);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SubscribeResponse>, I>>(base?: I): SubscribeResponse {
    return SubscribeResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SubscribeResponse>, I>>(object: I): SubscribeResponse {
    const message = createBaseSubscribeResponse();
    message.message = (object.message !== undefined && object.message !== null)
      ? Any.fromPartial(object.message)
      : undefined;
    return message;
  },
};

function createBasePlayRequest(): PlayRequest {
  return { peerid: "", starttime: "0" };
}

export const PlayRequest = {
  encode(message: PlayRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.peerid !== "") {
      writer.uint32(10).string(message.peerid);
    }
    if (message.starttime !== "0") {
      writer.uint32(16).uint64(message.starttime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.peerid = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.starttime = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PlayRequest {
    return {
      peerid: isSet(object.peerid) ? globalThis.String(object.peerid) : "",
      starttime: isSet(object.starttime) ? globalThis.String(object.starttime) : "0",
    };
  },

  toJSON(message: PlayRequest): unknown {
    const obj: any = {};
    if (message.peerid !== "") {
      obj.peerid = message.peerid;
    }
    if (message.starttime !== "0") {
      obj.starttime = message.starttime;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PlayRequest>, I>>(base?: I): PlayRequest {
    return PlayRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PlayRequest>, I>>(object: I): PlayRequest {
    const message = createBasePlayRequest();
    message.peerid = object.peerid ?? "";
    message.starttime = object.starttime ?? "0";
    return message;
  },
};

function createBasePauseRequest(): PauseRequest {
  return { peerid: "" };
}

export const PauseRequest = {
  encode(message: PauseRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.peerid !== "") {
      writer.uint32(10).string(message.peerid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PauseRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePauseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.peerid = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PauseRequest {
    return { peerid: isSet(object.peerid) ? globalThis.String(object.peerid) : "" };
  },

  toJSON(message: PauseRequest): unknown {
    const obj: any = {};
    if (message.peerid !== "") {
      obj.peerid = message.peerid;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PauseRequest>, I>>(base?: I): PauseRequest {
    return PauseRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PauseRequest>, I>>(object: I): PauseRequest {
    const message = createBasePauseRequest();
    message.peerid = object.peerid ?? "";
    return message;
  },
};

function createBasePlayResponse(): PlayResponse {
  return {};
}

export const PlayResponse = {
  encode(_: PlayResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): PlayResponse {
    return {};
  },

  toJSON(_: PlayResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<PlayResponse>, I>>(base?: I): PlayResponse {
    return PlayResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PlayResponse>, I>>(_: I): PlayResponse {
    const message = createBasePlayResponse();
    return message;
  },
};

function createBasePauseResponse(): PauseResponse {
  return {};
}

export const PauseResponse = {
  encode(_: PauseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PauseResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePauseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): PauseResponse {
    return {};
  },

  toJSON(_: PauseResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<PauseResponse>, I>>(base?: I): PauseResponse {
    return PauseResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PauseResponse>, I>>(_: I): PauseResponse {
    const message = createBasePauseResponse();
    return message;
  },
};

export interface AuthService {
  Authenticate(request: DeepPartial<AuthenticateRequest>, metadata?: grpc.Metadata): Observable<AuthenticateResponse>;
  RefreshToken(request: DeepPartial<RefreshTokenRequest>, metadata?: grpc.Metadata): Observable<RefreshTokenResponse>;
}

export class AuthServiceClientImpl implements AuthService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Authenticate = this.Authenticate.bind(this);
    this.RefreshToken = this.RefreshToken.bind(this);
  }

  Authenticate(request: DeepPartial<AuthenticateRequest>, metadata?: grpc.Metadata): Observable<AuthenticateResponse> {
    return this.rpc.unary(AuthServiceAuthenticateDesc, AuthenticateRequest.fromPartial(request), metadata);
  }

  RefreshToken(request: DeepPartial<RefreshTokenRequest>, metadata?: grpc.Metadata): Observable<RefreshTokenResponse> {
    return this.rpc.unary(AuthServiceRefreshTokenDesc, RefreshTokenRequest.fromPartial(request), metadata);
  }
}

export const AuthServiceDesc = { serviceName: "proto.AuthService" };

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
      const value = AuthenticateResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
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
      const value = RefreshTokenResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export interface MonocleService {
  AddIceCandidateWebRTC(
    request: DeepPartial<AddIceCandidateWebRTCRequest>,
    metadata?: grpc.Metadata,
  ): Observable<AddIceCandidateWebRTCResponse>;
  AddUser(request: DeepPartial<AddUserRequest>, metadata?: grpc.Metadata): Observable<AddUserResponse>;
  UpdateUser(request: DeepPartial<UpdateUserRequest>, metadata?: grpc.Metadata): Observable<UpdateUserResponse>;
  DeleteUser(request: DeepPartial<DeleteUserRequest>, metadata?: grpc.Metadata): Observable<DeleteUserResponse>;
  GetUserData(request: DeepPartial<GetUserDataRequest>, metadata?: grpc.Metadata): Observable<GetUserDataResponse>;
  SetUserData(request: DeepPartial<SetUserDataRequest>, metadata?: grpc.Metadata): Observable<SetUserDataResponse>;
  CallWebRTC(request: DeepPartial<CallWebRTCRequest>, metadata?: grpc.Metadata): Observable<CallWebRTCResponse>;
  GetIceCandidatesWebRTC(
    request: DeepPartial<GetIceCandidatesWebRTCRequest>,
    metadata?: grpc.Metadata,
  ): Observable<GetIceCandidatesWebRTCResponse>;
  HangUpWebRTC(request: DeepPartial<HangUpWebRTCRequest>, metadata?: grpc.Metadata): Observable<HangUpWebRTCResponse>;
  Subscribe(request: DeepPartial<SubscribeRequest>, metadata?: grpc.Metadata): Observable<SubscribeResponse>;
  Play(request: DeepPartial<PlayRequest>, metadata?: grpc.Metadata): Observable<PlayResponse>;
  Pause(request: DeepPartial<PauseRequest>, metadata?: grpc.Metadata): Observable<PauseResponse>;
}

export class MonocleServiceClientImpl implements MonocleService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.AddIceCandidateWebRTC = this.AddIceCandidateWebRTC.bind(this);
    this.AddUser = this.AddUser.bind(this);
    this.UpdateUser = this.UpdateUser.bind(this);
    this.DeleteUser = this.DeleteUser.bind(this);
    this.GetUserData = this.GetUserData.bind(this);
    this.SetUserData = this.SetUserData.bind(this);
    this.CallWebRTC = this.CallWebRTC.bind(this);
    this.GetIceCandidatesWebRTC = this.GetIceCandidatesWebRTC.bind(this);
    this.HangUpWebRTC = this.HangUpWebRTC.bind(this);
    this.Subscribe = this.Subscribe.bind(this);
    this.Play = this.Play.bind(this);
    this.Pause = this.Pause.bind(this);
  }

  AddIceCandidateWebRTC(
    request: DeepPartial<AddIceCandidateWebRTCRequest>,
    metadata?: grpc.Metadata,
  ): Observable<AddIceCandidateWebRTCResponse> {
    return this.rpc.unary(
      MonocleServiceAddIceCandidateWebRTCDesc,
      AddIceCandidateWebRTCRequest.fromPartial(request),
      metadata,
    );
  }

  AddUser(request: DeepPartial<AddUserRequest>, metadata?: grpc.Metadata): Observable<AddUserResponse> {
    return this.rpc.unary(MonocleServiceAddUserDesc, AddUserRequest.fromPartial(request), metadata);
  }

  UpdateUser(request: DeepPartial<UpdateUserRequest>, metadata?: grpc.Metadata): Observable<UpdateUserResponse> {
    return this.rpc.unary(MonocleServiceUpdateUserDesc, UpdateUserRequest.fromPartial(request), metadata);
  }

  DeleteUser(request: DeepPartial<DeleteUserRequest>, metadata?: grpc.Metadata): Observable<DeleteUserResponse> {
    return this.rpc.unary(MonocleServiceDeleteUserDesc, DeleteUserRequest.fromPartial(request), metadata);
  }

  GetUserData(request: DeepPartial<GetUserDataRequest>, metadata?: grpc.Metadata): Observable<GetUserDataResponse> {
    return this.rpc.unary(MonocleServiceGetUserDataDesc, GetUserDataRequest.fromPartial(request), metadata);
  }

  SetUserData(request: DeepPartial<SetUserDataRequest>, metadata?: grpc.Metadata): Observable<SetUserDataResponse> {
    return this.rpc.unary(MonocleServiceSetUserDataDesc, SetUserDataRequest.fromPartial(request), metadata);
  }

  CallWebRTC(request: DeepPartial<CallWebRTCRequest>, metadata?: grpc.Metadata): Observable<CallWebRTCResponse> {
    return this.rpc.unary(MonocleServiceCallWebRTCDesc, CallWebRTCRequest.fromPartial(request), metadata);
  }

  GetIceCandidatesWebRTC(
    request: DeepPartial<GetIceCandidatesWebRTCRequest>,
    metadata?: grpc.Metadata,
  ): Observable<GetIceCandidatesWebRTCResponse> {
    return this.rpc.unary(
      MonocleServiceGetIceCandidatesWebRTCDesc,
      GetIceCandidatesWebRTCRequest.fromPartial(request),
      metadata,
    );
  }

  HangUpWebRTC(request: DeepPartial<HangUpWebRTCRequest>, metadata?: grpc.Metadata): Observable<HangUpWebRTCResponse> {
    return this.rpc.unary(MonocleServiceHangUpWebRTCDesc, HangUpWebRTCRequest.fromPartial(request), metadata);
  }

  Subscribe(request: DeepPartial<SubscribeRequest>, metadata?: grpc.Metadata): Observable<SubscribeResponse> {
    return this.rpc.invoke(MonocleServiceSubscribeDesc, SubscribeRequest.fromPartial(request), metadata);
  }

  Play(request: DeepPartial<PlayRequest>, metadata?: grpc.Metadata): Observable<PlayResponse> {
    return this.rpc.unary(MonocleServicePlayDesc, PlayRequest.fromPartial(request), metadata);
  }

  Pause(request: DeepPartial<PauseRequest>, metadata?: grpc.Metadata): Observable<PauseResponse> {
    return this.rpc.unary(MonocleServicePauseDesc, PauseRequest.fromPartial(request), metadata);
  }
}

export const MonocleServiceDesc = { serviceName: "proto.MonocleService" };

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
      const value = AddIceCandidateWebRTCResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
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
      const value = AddUserResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MonocleServiceUpdateUserDesc: UnaryMethodDefinitionish = {
  methodName: "UpdateUser",
  service: MonocleServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return UpdateUserRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = UpdateUserResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MonocleServiceDeleteUserDesc: UnaryMethodDefinitionish = {
  methodName: "DeleteUser",
  service: MonocleServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return DeleteUserRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = DeleteUserResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MonocleServiceGetUserDataDesc: UnaryMethodDefinitionish = {
  methodName: "GetUserData",
  service: MonocleServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return GetUserDataRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = GetUserDataResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MonocleServiceSetUserDataDesc: UnaryMethodDefinitionish = {
  methodName: "SetUserData",
  service: MonocleServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return SetUserDataRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = SetUserDataResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
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
      const value = CallWebRTCResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
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
      const value = GetIceCandidatesWebRTCResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
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
      const value = HangUpWebRTCResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
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
      const value = SubscribeResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MonocleServicePlayDesc: UnaryMethodDefinitionish = {
  methodName: "Play",
  service: MonocleServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return PlayRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = PlayResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MonocleServicePauseDesc: UnaryMethodDefinitionish = {
  methodName: "Pause",
  service: MonocleServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return PauseRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = PauseResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

interface UnaryMethodDefinitionishR extends grpc.UnaryMethodDefinition<any, any> {
  requestStream: any;
  responseStream: any;
}

type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;

interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    request: any,
    metadata: grpc.Metadata | undefined,
  ): Observable<any>;
  invoke<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    request: any,
    metadata: grpc.Metadata | undefined,
  ): Observable<any>;
}

export class GrpcWebImpl {
  private host: string;
  private options: {
    transport?: grpc.TransportFactory;
    streamingTransport?: grpc.TransportFactory;
    debug?: boolean;
    metadata?: grpc.Metadata;
    upStreamRetryCodes?: number[];
  };

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory;
      streamingTransport?: grpc.TransportFactory;
      debug?: boolean;
      metadata?: grpc.Metadata;
      upStreamRetryCodes?: number[];
    },
  ) {
    this.host = host;
    this.options = options;
  }

  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    _request: any,
    metadata: grpc.Metadata | undefined,
  ): Observable<any> {
    const request = { ..._request, ...methodDesc.requestType };
    const maybeCombinedMetadata = metadata && this.options.metadata
      ? new BrowserHeaders({ ...this.options?.metadata.headersMap, ...metadata?.headersMap })
      : metadata ?? this.options.metadata;
    return new Observable((observer) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata ?? {},
        ...(this.options.transport !== undefined ? { transport: this.options.transport } : {}),
        debug: this.options.debug ?? false,
        onEnd: (next) => {
          if (next.status !== 0) {
            const err = new GrpcWebError(next.statusMessage, next.status, next.trailers);
            observer.error(err);
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
    metadata: grpc.Metadata | undefined,
  ): Observable<any> {
    const upStreamCodes = this.options.upStreamRetryCodes ?? [];
    const DEFAULT_TIMEOUT_TIME: number = 3_000;
    const request = { ..._request, ...methodDesc.requestType };
    const transport = this.options.streamingTransport ?? this.options.transport;
    const maybeCombinedMetadata = metadata && this.options.metadata
      ? new BrowserHeaders({ ...this.options?.metadata.headersMap, ...metadata?.headersMap })
      : metadata ?? this.options.metadata;
    return new Observable((observer) => {
      const upStream = () => {
        const client = grpc.invoke(methodDesc, {
          host: this.host,
          request,
          ...(transport !== undefined ? { transport } : {}),
          metadata: maybeCombinedMetadata ?? {},
          debug: this.options.debug ?? false,
          onMessage: (next) => observer.next(next),
          onEnd: (code: grpc.Code, message: string, trailers: grpc.Metadata) => {
            if (code === 0) {
              observer.complete();
            } else if (upStreamCodes.includes(code)) {
              setTimeout(upStream, DEFAULT_TIMEOUT_TIME);
            } else {
              const err = new Error(message) as any;
              err.code = code;
              err.metadata = trailers;
              observer.error(err);
            }
          },
        });
        observer.add(() => {
          return client.close();
        });
      };
      upStream();
    }).pipe(share());
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export class GrpcWebError extends globalThis.Error {
  constructor(message: string, public code: grpc.Code, public metadata: grpc.Metadata) {
    super(message);
  }
}
