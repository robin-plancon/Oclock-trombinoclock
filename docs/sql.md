SELECT * FROM "promo" ORDER BY "name";

SELECT * FROM "student" ORDER BY "last_name";

SELECT * FROM "student" WHERE "promo_id" = 135;

SELECT * FROM "student" WHERE "first_name" ILIKE 'max%' OR "last_name" ILIKE 'max%';

INSERT INTO "student" ("first_name","last_name","github_username","profile_picture_url", "promo_id") VALUES ('Chuck', 'NORRIS', 'ChuckNorris','', 5);

INSERT INTO "promo" ("id", "name") VALUES  ('669', 'César');

UPDATE "promo" SET  "name" = 'Cleo' WHERE "id" = '5';

<!-- je ne sais pas si il faut supprimer les etudiants de la promo aussi  -->
DELETE FROM "promo" WHERE "id" = '123';