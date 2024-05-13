import { CreateAnOrder, GetAllOrders, GetOrderById, ReplaceOrderbyID, DeleteOrderbyID } from "../../TypescriptTypes/TradingAPI";
import AlpacaConfig from "../../AlpacaConfig/AlpacaConfig";
export default class Orders extends AlpacaConfig {
    createAnOrder(param: CreateAnOrder): Promise<any>;
    getAllOrders(param: GetAllOrders): Promise<any>;
    deleteAllOrders(): Promise<any>;
    getOrderById(param: GetOrderById): Promise<any>;
    replaceOrderbyID(param: ReplaceOrderbyID): Promise<any>;
    deleteOrderbyID(param: DeleteOrderbyID): Promise<any>;
}
