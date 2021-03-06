import { Field, Int, ObjectType } from "type-graphql";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
} from "typeorm";
import { Project } from "./Project";

@ObjectType()
@Entity("newcolumns")
export class Columns extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column()
  key: string;

  @Field(() => String)
  @Column()
  value: string;

  @ManyToOne(() => Project, (project) => project.columns)
  project: Project;
}
