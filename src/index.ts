import axios from "axios";
import {
  Authentication,
  GetAssetsParams,
  GetAnAssetByIDorSymbol,
  GetOptionContracts,
  GetOptionContractByIDorSymbol,
  GetAnnouncements,
  CreateAnOrder,
  GetAllOrders,
  GetOrderById,
  ReplaceOrderbyID,
  DeleteOrderbyID,
  CloseAllPositions,
  GetOpenPosition,
  ClosePosition,
  ExerciseOptionPosition,
} from "./libs/TypescriptTypes/InputTypes";
import Account from "./libs/Alpaca/Account/Account";
import Assets from "./libs/Alpaca/Assets/Assets";
import CorporateActions from "./libs/Alpaca/CorporateActions/CorporateActions";
import Orders from "./libs/Alpaca/Order/Orders";
import Positions from "./libs/Alpaca/Positions/Positions";

class Alpaca {
  constructor(private readonly auth: Authentication) {
    this.auth = auth;
  }
  getAccount(): Promise<object> {
    return new Account(this.auth).getAccount();
  }
  getAssets(params?: GetAssetsParams): Promise<object> {
    return new Assets(this.auth).getAssets(params);
  }
  getAnAssetByIDorSymbol(params: GetAnAssetByIDorSymbol): Promise<object> {
    return new Assets(this.auth).getAnAssetByIDorSymbol(params);
  }
  getOptionContracts(param?: GetOptionContracts): Promise<object> {
    return new Assets(this.auth).getOptionContracts(param);
  }
  getOptionContractByIDorSymbol(
    param: GetOptionContractByIDorSymbol
  ): Promise<object> {
    return new Assets(this.auth).getOptionContractByIDorSymbol(param);
  }
  getSpecificAnnouncement(id: string): Promise<object> {
    return new CorporateActions(this.auth).getSpecificAnnouncement(id);
  }
  getAnnouncements(param: GetAnnouncements): Promise<object> {
    return new CorporateActions(this.auth).getAnnouncements(param);
  }
  createAnOrder(param: CreateAnOrder): Promise<object> {
    return new Orders(this.auth).createAnOrder(param);
  }
  getAllOrders(param: GetAllOrders): Promise<object> {
    return new Orders(this.auth).getAllOrders(param);
  }
  deleteAllOrders(): Promise<object> {
    return new Orders(this.auth).deleteAllOrders();
  }
  getOrderById(param: GetOrderById): Promise<object> {
    return new Orders(this.auth).getOrderById(param);
  }
  replaceOrderbyID(param: ReplaceOrderbyID): Promise<object> {
    return new Orders(this.auth).replaceOrderbyID(param);
  }
  deleteOrderbyID(param: DeleteOrderbyID): Promise<object> {
    return new Orders(this.auth).deleteOrderbyID(param);
  }
  getAllOpenPositions(): Promise<object> {
    return new Positions(this.auth).getAllOpenPositions();
  }
  closeAllPositions(param: CloseAllPositions): Promise<object> {
    return new Positions(this.auth).closeAllPositions(param);
  }
  getOpenPosition(param: GetOpenPosition): Promise<object> {
    return new Positions(this.auth).getOpenPosition(param);
  }
  closePosition(param: ClosePosition): Promise<object> {
    return new Positions(this.auth).closePosition(param);
  }
  exerciseOptionPosition(param: ExerciseOptionPosition): Promise<object> {
    return new Positions(this.auth).exerciseOptionPosition(param);
  }
}

export default Alpaca;
