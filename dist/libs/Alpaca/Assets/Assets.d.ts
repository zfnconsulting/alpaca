import { GetAssetsParams, GetAnAssetByIDorSymbol, GetOptionContracts, GetOptionContractByIDorSymbol } from "../../TypescriptTypes/TradingAPI";
import AlpacaConfig from "../AlpacaConfig/AlpacaConfig";
export default class Assets extends AlpacaConfig {
    getAssets(params?: GetAssetsParams): Promise<any>;
    getAnAssetByIDorSymbol(params: GetAnAssetByIDorSymbol): Promise<object>;
    getOptionContracts(param?: GetOptionContracts): Promise<any>;
    getOptionContractByIDorSymbol(param: GetOptionContractByIDorSymbol): Promise<any>;
}
