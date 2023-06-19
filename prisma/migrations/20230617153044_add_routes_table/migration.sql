-- CreateTable
CREATE TABLE "Routes" (
    "id" UUID NOT NULL,
    "description" VARCHAR(120) NOT NULL,

    CONSTRAINT "Routes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Routes_id_key" ON "Routes"("id");
