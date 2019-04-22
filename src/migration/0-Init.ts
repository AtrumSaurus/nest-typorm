import {MigrationInterface, QueryRunner} from "typeorm";

export class Init1555864762819 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "username" varchar NOT NULL, "email" varchar NOT NULL, "password" varchar NOT NULL, "avatar" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "role" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, CONSTRAINT "UQ_ae4578dcaed5adff96595e61660" UNIQUE ("name"))`);
        await queryRunner.query(`CREATE TABLE "user_roles_role" ("userId" integer NOT NULL, "roleId" integer NOT NULL, PRIMARY KEY ("userId", "roleId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_5f9286e6c25594c6b88c108db7" ON "user_roles_role" ("userId") `);
        await queryRunner.query(`CREATE INDEX "IDX_4be2f7adf862634f5f803d246b" ON "user_roles_role" ("roleId") `);
        await queryRunner.query(`DROP INDEX "IDX_5f9286e6c25594c6b88c108db7"`);
        await queryRunner.query(`DROP INDEX "IDX_4be2f7adf862634f5f803d246b"`);
        await queryRunner.query(`CREATE TABLE "temporary_user_roles_role" ("userId" integer NOT NULL, "roleId" integer NOT NULL, CONSTRAINT "FK_5f9286e6c25594c6b88c108db77" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_4be2f7adf862634f5f803d246b8" FOREIGN KEY ("roleId") REFERENCES "role" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, PRIMARY KEY ("userId", "roleId"))`);
        await queryRunner.query(`INSERT INTO "temporary_user_roles_role"("userId", "roleId") SELECT "userId", "roleId" FROM "user_roles_role"`);
        await queryRunner.query(`DROP TABLE "user_roles_role"`);
        await queryRunner.query(`ALTER TABLE "temporary_user_roles_role" RENAME TO "user_roles_role"`);
        await queryRunner.query(`CREATE INDEX "IDX_5f9286e6c25594c6b88c108db7" ON "user_roles_role" ("userId") `);
        await queryRunner.query(`CREATE INDEX "IDX_4be2f7adf862634f5f803d246b" ON "user_roles_role" ("roleId") `);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP INDEX "IDX_4be2f7adf862634f5f803d246b"`);
        await queryRunner.query(`DROP INDEX "IDX_5f9286e6c25594c6b88c108db7"`);
        await queryRunner.query(`ALTER TABLE "user_roles_role" RENAME TO "temporary_user_roles_role"`);
        await queryRunner.query(`CREATE TABLE "user_roles_role" ("userId" integer NOT NULL, "roleId" integer NOT NULL, PRIMARY KEY ("userId", "roleId"))`);
        await queryRunner.query(`INSERT INTO "user_roles_role"("userId", "roleId") SELECT "userId", "roleId" FROM "temporary_user_roles_role"`);
        await queryRunner.query(`DROP TABLE "temporary_user_roles_role"`);
        await queryRunner.query(`CREATE INDEX "IDX_4be2f7adf862634f5f803d246b" ON "user_roles_role" ("roleId") `);
        await queryRunner.query(`CREATE INDEX "IDX_5f9286e6c25594c6b88c108db7" ON "user_roles_role" ("userId") `);
        await queryRunner.query(`DROP INDEX "IDX_4be2f7adf862634f5f803d246b"`);
        await queryRunner.query(`DROP INDEX "IDX_5f9286e6c25594c6b88c108db7"`);
        await queryRunner.query(`DROP TABLE "user_roles_role"`);
        await queryRunner.query(`DROP TABLE "role"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
