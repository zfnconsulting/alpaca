import AlpacaConfig from "../AlpacaConfig/AlpacaConfig";
import { CreateWatchlist, GetWatchlistbyID, UpdateWatchlistById, AddAssettoWatchlist, DeleteWatchlistById, GetWatchlistbyName, UpdateWatchlistByName, AddAssettoWatchlistByName, DeleteWatchlistByName, DeleteSymbolfromWatchlist } from "../../TypescriptTypes/TradingAPI";
declare class Watchlists extends AlpacaConfig {
    getAllWatchlists(): Promise<any>;
    createWatchlist(data: CreateWatchlist): Promise<any>;
    getWatchlistbyID(id: GetWatchlistbyID): Promise<any>;
    updateWatchlistById(id: UpdateWatchlistById): Promise<any>;
    addAssettoWatchlist(id: AddAssettoWatchlist): Promise<any>;
    deleteWatchlistById(id: DeleteWatchlistById): Promise<any>;
    getWatchlistbyName(name: GetWatchlistbyName): Promise<any>;
    updateWatchlistByName(name: UpdateWatchlistByName): Promise<any>;
    addAssettoWatchlistByName(name: AddAssettoWatchlistByName): Promise<any>;
    deleteWatchlistByName(name: DeleteWatchlistByName): Promise<any>;
    deleteSymbolfromWatchlist(id: DeleteSymbolfromWatchlist): Promise<any>;
}
export default Watchlists;
