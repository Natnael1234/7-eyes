-- CreateTable
CREATE TABLE "Admin" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Experience" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Service" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "icon" TEXT,
    "imageUrl" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Partner" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "logoUrl" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "SiteConfig" (
    "id" TEXT NOT NULL PRIMARY KEY DEFAULT 'config',
    "heroTitle" TEXT NOT NULL DEFAULT 'Seven Eyes Multimedia',
    "heroSubtitle" TEXT NOT NULL DEFAULT 'Empowering Stories. Empowering Community. Impactful Experiences. Meaningful Change.',
    "heroImage" TEXT,
    "aboutText" TEXT,
    "mission" TEXT,
    "vision" TEXT,
    "aboutImage" TEXT,
    "email" TEXT NOT NULL DEFAULT 'info@seveneyes.com',
    "phone" TEXT NOT NULL DEFAULT '+251 911 234 567',
    "address" TEXT NOT NULL DEFAULT 'Addis Ababa, Ethiopia',
    "facebook" TEXT,
    "instagram" TEXT,
    "linkedin" TEXT,
    "experienceYears" INTEGER NOT NULL DEFAULT 0,
    "partnersCount" INTEGER NOT NULL DEFAULT 0,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");
