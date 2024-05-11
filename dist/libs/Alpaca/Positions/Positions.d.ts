import { CloseAllPositions, GetOpenPosition, ClosePosition, ExerciseOptionPosition } from "../../TypescriptTypes/InputTypes";
import AlpacaConfig from "../AlpacaConfig/AlpacaConfig";
export default class Positions extends AlpacaConfig {
    getAllOpenPositions(): Promise<any>;
    closeAllPositions(param: CloseAllPositions): Promise<any>;
    getOpenPosition(param: GetOpenPosition): Promise<any>;
    closePosition(param: ClosePosition): Promise<any>;
    exerciseOptionPosition(param: ExerciseOptionPosition): Promise<any>;
}
