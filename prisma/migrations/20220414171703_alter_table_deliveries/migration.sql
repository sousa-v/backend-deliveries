/*
  Warnings:

  - You are about to drop the column `password` on the `deliveries` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "deliveries" DROP COLUMN "password",
ALTER COLUMN "end_at" DROP DEFAULT;
