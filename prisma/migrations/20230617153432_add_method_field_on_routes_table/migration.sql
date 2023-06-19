/*
  Warnings:

  - Added the required column `method` to the `Routes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Routes" ADD COLUMN     "method" VARCHAR(10) NOT NULL;
