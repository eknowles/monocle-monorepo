export const PROJECT = "Server";
export const GRPC_WEB_PORT = "8080"; // http only
export const HTTP_PORT = "9854"; // getIceServers
const SERVER_IP = import.meta.env.PROD ? window.location.hostname : import.meta.env.VITE_TEST_SERVER;
export const GRPC_SERVER = `http://${SERVER_IP}:${GRPC_WEB_PORT}`;
export const HTTP_SERVER = `http://${SERVER_IP}:${HTTP_PORT}`;
export const LOCALSTORAGE_AUTH_TOKEN_KEY = "monocle-auth-token";
export const TIMELINE_HEIGHT = 130;
