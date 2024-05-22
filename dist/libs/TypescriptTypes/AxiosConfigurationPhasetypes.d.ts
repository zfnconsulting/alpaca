interface query {
    [key: string]: string | number | boolean | string[] | Date | query;
}
type path = string;
interface body {
    [key: string]: string | number | boolean | string[] | Date;
}
type AxiosParmConfig = {
    url: path;
    method: string;
    version: string;
    section: string;
    query?: query;
    data?: body;
};
type AxiosConfigurationObject = {
    method: string;
    url: string;
    data?: object;
    baseURL: string;
    headers: object;
    query?: query;
};
export { AxiosParmConfig, AxiosConfigurationObject };
