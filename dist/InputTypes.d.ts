type Authentication_input = {
    keyId: string;
    secretKey: string;
    paper: boolean;
};
type AxiosConfig_input = {
    url: string;
    version: string;
    method: string;
    params?: GetAssetsParams_input;
};
type GetAssetsParams_input = {
    status?: string;
    asset_class?: string;
    exchange?: string;
    attributes?: string;
};
export { Authentication_input as Authentication, GetAssetsParams_input as GetAssetsParams, AxiosConfig_input as AxiosConfig, };
