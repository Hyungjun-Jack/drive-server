import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column
} from "typeorm";

@Entity()
class Place extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: "text" })
  name;
  @Column({ type: "double precision", default: 0 })
  lat;
  @Column({ type: "double precision", default: 0 })
  lng;
  @Column({ type: "text" })
  address;
  @Column({ type: "boolean", default: false })
  isFav;
  @CreateDateColumn()
  createdAt: string;
  @UpdateDateColumn()
  updatedAt: string;
}

export default Place;
