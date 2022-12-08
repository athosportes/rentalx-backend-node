import { MigrationInterface, QueryRunner } from "typeorm";

export class default1670469620503 implements MigrationInterface {
    name = 'default1670469620503'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cateroies" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, "createdAt" date NOT NULL, CONSTRAINT "PK_3ff8c1c3f517ee8abac27cbf210" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "cateroies"`);
    }

}
