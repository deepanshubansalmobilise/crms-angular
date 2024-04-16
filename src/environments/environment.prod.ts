// ng build --prod --base-href=http://crms.anarish.com/ --output-hashing=all
//for staging
export const environment = {
  production: true,
  routing: 'http://crms.anarish.com',
  routingEnable: true,
  apiUrl: 'http://crms.anarish.com/backend/api',
  base_path: 'http://crms.anarish.com/backend/public',
  app_url: 'http://crms.anarish.com/#/',
  backend_url: 'http://crms.anarish.com/backend/',
  iot_mqtt_server_url: '',
  isLocal: false,
  apiUrlsdx: 'http://crms.anarish.com/backend/api',
  base_path_sdx: 'http://crms.anarish.com/backend/public',
  app_urlsdx: 'http://crms.anarish.com',
  apiUrlfin: 'http://crms.anarish.com/backend/api',
  base_path_fin: 'http://crms.anarish.com/backend/public',
  app_urlfin: 'http://crms.anarish.com',
  ssoUrl: 'http://crms.anarish.com/ssoGates/saml2/index.php?sso',
  ssoLogoutUrl:'http://crms.anarish.com/ssoGates/saml2/index.php?slo',
  cipher:'mobilise',
};