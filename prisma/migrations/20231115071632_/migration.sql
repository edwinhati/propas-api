-- CreateTable
CREATE TABLE "Member" (
    "id" SERIAL NOT NULL,
    "nik" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "place_of_birth" TEXT NOT NULL,
    "date_of_birth" TIMESTAMP(3) NOT NULL,
    "gender" TEXT NOT NULL,
    "province" TEXT NOT NULL,
    "regency" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "village" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "marital_status" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Member_nik_key" ON "Member"("nik");

-- CreateIndex
CREATE UNIQUE INDEX "Member_phone_number_key" ON "Member"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "Member_email_key" ON "Member"("email");
