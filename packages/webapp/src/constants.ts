export const PROJECT = "Server";
export const GRPC_WEB_PORT = "8080"; // http only
export const HTTP_PORT = "9854"; // getIceServers
const SERVER_IP =
  (window as any).env.NODE_ENV === "production"
    ? window.location.hostname
    : (window as any).env.TEST_SERVER;
export const GRPC_SERVER = `http://${SERVER_IP}:${GRPC_WEB_PORT}`;
export const HTTP_SERVER = `http://${SERVER_IP}:${HTTP_PORT}`;
export const LOCALSTORAGE_AUTH_TOKEN_KEY = "monocle-auth-token";
