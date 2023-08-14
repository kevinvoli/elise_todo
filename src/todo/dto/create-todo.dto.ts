export enum TodoPriorities {
  High = "High",
  medium = "medium",
  default = "low",
}
export class CreateTodoDto {
  
  title: string;
  priorite:TodoPriorities
 
}
