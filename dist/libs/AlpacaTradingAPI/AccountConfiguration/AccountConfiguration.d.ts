import AlpacaConfig from "../../AlpacaConfig/AlpacaConfig";
import { AccountConfigurations } from "../../TypescriptTypes/TradingAPI";
declare class AccountConfiguration extends AlpacaConfig {
    getAccountConfigurations(): Promise<any>;
    updateAccountConfigurations(data: AccountConfigurations): Promise<any>;
}
export default AccountConfiguration;
