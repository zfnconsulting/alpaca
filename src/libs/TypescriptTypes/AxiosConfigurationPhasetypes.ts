interface query {
  [key: string]: string | number | boolean | string[] | Date | query;
}

type path = string;
interface body {
  [key: string]: string | number | boolean | string[] | Date;
}
// paramter input
type AxiosParmConfig = {
  url: path;
  method: string;
  version: string;
  section: string;
  query?: query;
  data?: body;
};

// axios configuration
type AxiosConfigurationObject = {
  method: string;
  url: string;
  data?: object;
  baseURL: string;
  headers: object;
  query?: query;
};

// AxiosParmConfig:  params > query
// AxiosConfigurationObject: params > query

// [query, path, body]

// query: String, Integer, boolean, Array( String, ), date( YYYY-MM-DD || ), date-time(RFC3339 with timezone )
// path : String
// body AKA data : String, Integer, boolean, Array(String)

// axios configuration

// type AxiosParmConfig = {
//   url: string;
//   version: string;
//   method: string;
//   data?: object;
//   params?: object;
// };
// type AxiosConfigurationObject = {
//   url: string;
//   method: string;
//   data?: object;
//   params?: object;
//   baseURL: string;
//   headers: object;
// };
export { AxiosParmConfig, AxiosConfigurationObject };
