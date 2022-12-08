import { MigrationInterface, QueryRunner } from "typeorm";

export class default1670503185634 implements MigrationInterface {
    name = 'default1670503185634'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categories" RENAME COLUMN "createdAt" TO "created_at"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categories" RENAME COLUMN "created_at" TO "createdAt"`);
    }

}
