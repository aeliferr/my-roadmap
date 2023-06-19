/*
  Warnings:

  - A unique constraint covering the columns `[description]` on the table `roles` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[description,method]` on the table `routes` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "roles_description_key" ON "roles"("description");

-- CreateIndex
CREATE UNIQUE INDEX "routes_description_method_key" ON "routes"("description", "method");
