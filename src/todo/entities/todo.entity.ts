import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum TodoStatus {
  pending = "pending",
  done = "done",
  default = "todo",
}
export enum TodoPriorities {
  High = "High",
  medium = "medium",
  default = "low",
}
console.log("ma todo ici");


@Entity()
export class Todo {
  @PrimaryGeneratedColumn({type:"int"})
  id: number;
  
  @Column("varchar", { name: "title", length: 255 ,unique: true})
  title: string;

  @Column({
    type: "enum",
    enum: TodoStatus,
    default: TodoStatus.default,
})
  status:TodoStatus;

  @Column({
    type: "enum",
    enum: TodoPriorities,
    default: TodoPriorities.default,
})
  property:TodoPriorities;

  @CreateDateColumn({type:'datetime',  name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({type:'datetime', name: 'updated_at'})
  updatedAt: Date;

  @DeleteDateColumn({type:'datetime', name: 'delected_at'})
  delectedAt:Date;
}
