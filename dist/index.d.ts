import { Authentication, GetAssetsParams, GetAnAssetByIDorSymbol, GetOptionContracts, GetOptionContractByIDorSymbol, GetAnnouncements, CreateAnOrder, GetAllOrders, GetOrderById, ReplaceOrderbyID, DeleteOrderbyID } from "./InputTypes";
import { GetAccount } from "./ReturnTypes";
declare class Alpaca {
    #private;
    protected readonly auth: Authentication;
    constructor(auth: Authentication);
    getAccount(): Promise<GetAccount>;
    getAssets(params?: GetAssetsParams): Promise<any>;
    getAnAssetByIDorSymbol(params: GetAnAssetByIDorSymbol): Promise<object>;
    getOptionContracts(param?: GetOptionContracts): Promise<any>;
    getOptionContractByIDorSymbol(param: GetOptionContractByIDorSymbol): Promise<any>;
    getSpecificAnnouncement(id: string): Promise<any>;
    getAnnouncements(param: GetAnnouncements): Promise<any>;
    createAnOrder(param: CreateAnOrder): Promise<any>;
    getAllOrders(param: GetAllOrders): object;
    deleteAllOrders(): Promise<any>;
    getOrderById(param: GetOrderById): Promise<any>;
    replaceOrderbyID(param: ReplaceOrderbyID): Promise<any>;
    deleteOrderbyID(param: DeleteOrderbyID): Promise<any>;
}
export default Alpaca;
