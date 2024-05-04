import { Authentication, GetAssetsParams } from "./InputTypes";
import { GetAccount } from "./ReturnTypes";
declare class Alpaca {
    #private;
    protected readonly config: Authentication;
    constructor(config: Authentication);
    getAccount(): Promise<GetAccount>;
    getAssets(params: GetAssetsParams): Promise<any>;
}
export default Alpaca;
