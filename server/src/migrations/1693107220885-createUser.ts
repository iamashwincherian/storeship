import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Migrate11693071798151 implements MigrationInterface {
  table = new Table({
    name: "users",
    columns: [
      {
        name: "id",
        type: "integer",
        isPrimary: true,
        isGenerated: true,
        generationStrategy: "increment",
      },
      {
        name: "name",
        type: "varchar",
        length: "256",
        isNullable: false,
      },
      {
        name: "email",
        type: "varchar",
        length: "256",
        isNullable: false,
        isUnique: true,
      },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table);
  }
}
