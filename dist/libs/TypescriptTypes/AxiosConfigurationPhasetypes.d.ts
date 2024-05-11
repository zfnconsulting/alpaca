type AxiosParmConfig = {
    url: string;
    version: string;
    method: string;
    data?: object;
    params?: object;
};
type AxiosConfigurationObject = {
    url: string;
    method: string;
    data?: object;
    params?: object;
    baseURL: string;
    headers: object;
};
export { AxiosParmConfig, AxiosConfigurationObject };
