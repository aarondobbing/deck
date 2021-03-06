import {IOrchestratedItem} from './IOrchestratedItem';
import {IExecutionTrigger} from './IExecutionTrigger';
import {IExecutionStage} from './IExecutionStage';

export interface IExecution extends IOrchestratedItem {
  trigger: IExecutionTrigger;
  stages: IExecutionStage[];
  user: string;
}
