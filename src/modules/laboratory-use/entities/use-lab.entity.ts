
import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';


@Entity({ name: 'uso_lab' })
export class LaboratoryUse {
    @PrimaryGeneratedColumn({ name: 'id', type: 'int4' })
    id?: number;

    @Column({ name: 'className', type: 'varchar', length: 100, nullable: false })
    name: string;

    @Column({ name: 'academyArea', type: 'string', length: 100, nullable: false })
    academyArea: string;

    @Column({ name: 'career', type: 'string', length: 50, nullable: false })
    career: string;

    @Column({ name: 'teacher', type: 'varchar', length: 50, nullable: false })
    teacher: string;

    @Column({ name: 'date', type: 'varchar', nullable: false })
    date: string;

    @Column({ name: 'modality', type: 'varchar', length: 100, nullable: false })
    modality: string;

    @Column({ name: 'shift', type: 'string', length: 50, nullable: false })
    shift: string;

    @Column({ name: 'year', type: 'numeric',length: 10, nullable: false })
    year: number;

    @Column({ name: 'semester', type: 'string', length: 50, nullable: false })
    semester: string;

    @Column({ name: 'female', type: 'string',length: 50, nullable: false })
    female: string;

    @Column({ name: 'male', type: 'string',length: 50, nullable: false })
    male: string;

    @Column({ name: 'total', type: 'numeric', length: 20, nullable: false })
    total: number;

    @Column({ name: 'hours', type: 'numeric', length: 20, nullable: false })
    hours: number;

}