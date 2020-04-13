export interface IAppConfig {
  web: {
    HOST_FRONTEND: string
  };
  api: {
    HOST_BACKEND_API: string;
  };
  auth: {
    SSO_SERVER: string;
    SSO_REALM: string;
    SSO_CLIENT: string;
  };
}
