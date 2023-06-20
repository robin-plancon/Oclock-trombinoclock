SELECT * FROM "promo" ORDER BY "name";

SELECT * FROM "student" ORDER BY "last_name";

SELECT * FROM "student" WHERE "promo_id" = 135;

SELECT * FROM "student" WHERE "first_name" ILIKE 'max%' OR "last_name" ILIKE 'max%';