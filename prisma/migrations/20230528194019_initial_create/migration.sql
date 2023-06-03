-- CreateTable
CREATE TABLE "Trails" (
    "id" UUID NOT NULL,
    "description" VARCHAR(80) NOT NULL,

    CONSTRAINT "Trails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Trails_id_key" ON "Trails"("id");
