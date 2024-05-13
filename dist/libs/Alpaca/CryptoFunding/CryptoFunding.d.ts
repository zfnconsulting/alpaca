import AlpacaConfig from "../AlpacaConfig/AlpacaConfig";
import { GetRetrieveCryptoFundingWallets, RequestNewWithdrawal, GetRetrieveCryptoFundingTransfer, RequestNewWhitelistedAddress, DeleteWhitelistedAddress, GetEstimatedGasFee } from "../../TypescriptTypes/TradingAPI";
declare class CryptoFunding extends AlpacaConfig {
    getRetrieveCryptoFundingWallets(queryParams: GetRetrieveCryptoFundingWallets): Promise<any>;
    getRetrieveCryptoFundingTransfer(): Promise<any>;
    requestNewWithdrawal(data: RequestNewWithdrawal): Promise<any>;
    getRetrieveSingleCryptoFundingTransfer(queryParams: GetRetrieveCryptoFundingTransfer): Promise<any>;
    getArrayofWhitelistedAddresses(queryParams: GetRetrieveCryptoFundingWallets): Promise<any>;
    requestNewWhitelistedAddress(queryParams: RequestNewWhitelistedAddress): Promise<any>;
    deleteWhitelistedAddress(queryParams: DeleteWhitelistedAddress): Promise<any>;
    getEstimatedGasFee(queryParams: GetEstimatedGasFee): Promise<any>;
}
export default CryptoFunding;
