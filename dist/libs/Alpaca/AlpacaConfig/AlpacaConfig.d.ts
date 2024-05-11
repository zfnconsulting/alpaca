import HTTPConfig from "../HTTPConfig/HTTPConfig";
import { Authentication } from "../../TypescriptTypes/InputTypes";
export default class AlpacaConfig {
    protected readonly auth: Authentication;
    protected readonly httpConfig: HTTPConfig;
    constructor(auth: Authentication);
}
