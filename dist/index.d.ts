import { Authentication, GetAssetsParams, GetAnAssetByIDorSymbol, GetOptionContracts, GetOptionContractByIDorSymbol, GetAnnouncements, CreateAnOrder, GetAllOrders, GetOrderById, ReplaceOrderbyID, DeleteOrderbyID, CloseAllPositions, GetOpenPosition, ClosePosition, ExerciseOptionPosition } from "./libs/TypescriptTypes/InputTypes";
declare class Alpaca {
    private readonly auth;
    constructor(auth: Authentication);
    getAccount(): Promise<object>;
    getAssets(params?: GetAssetsParams): Promise<object>;
    getAnAssetByIDorSymbol(params: GetAnAssetByIDorSymbol): Promise<object>;
    getOptionContracts(param?: GetOptionContracts): Promise<object>;
    getOptionContractByIDorSymbol(param: GetOptionContractByIDorSymbol): Promise<object>;
    getSpecificAnnouncement(id: string): Promise<object>;
    getAnnouncements(param: GetAnnouncements): Promise<object>;
    createAnOrder(param: CreateAnOrder): Promise<object>;
    getAllOrders(param: GetAllOrders): Promise<object>;
    deleteAllOrders(): Promise<object>;
    getOrderById(param: GetOrderById): Promise<object>;
    replaceOrderbyID(param: ReplaceOrderbyID): Promise<object>;
    deleteOrderbyID(param: DeleteOrderbyID): Promise<object>;
    getAllOpenPositions(): Promise<object>;
    closeAllPositions(param: CloseAllPositions): Promise<object>;
    getOpenPosition(param: GetOpenPosition): Promise<object>;
    closePosition(param: ClosePosition): Promise<object>;
    exerciseOptionPosition(param: ExerciseOptionPosition): Promise<object>;
}
export default Alpaca;
