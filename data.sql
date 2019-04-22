PRAGMA foreign_keys = OFF;

DROP TABLE IF EXISTS "user_roles_role";
DROP TABLE IF EXISTS "role";
DROP TABLE IF EXISTS "user";

PRAGMA foreign_keys = ON;

CREATE TABLE "role" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar UNIQUE NOT NULL);
CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "username" varchar NOT NULL, "email" varchar NOT NULL, "password" varchar NOT NULL, "avatar" varchar);
CREATE TABLE "user_roles_role" ("userId" integer NOT NULL, "roleId" integer NOT NULL, PRIMARY KEY ("userId", "roleId"), FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE NO ACTION,  FOREIGN KEY ("roleId") REFERENCES "role" ("id") ON DELETE CASCADE ON UPDATE NO ACTION);
