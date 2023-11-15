-- AlterTable
ALTER TABLE "Member" ADD COLUMN     "password" TEXT,
ALTER COLUMN "date_of_birth" SET DATA TYPE TIMESTAMP(3),
ALTER COLUMN "email" DROP NOT NULL;
