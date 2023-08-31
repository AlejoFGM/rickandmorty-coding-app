export interface ErrorFormat {
  message: string;
  errorType: ErrorType;
}

export enum ErrorType {
  CLIENT_ERROR = "CLIENT_ERROR",
  NETWORK_ERROR = "ERR_NETWORK",
  AUTH_ERROR = "AUTH_ERROR",
}
