UPDATE products
SET img = $2
WHERE id = $1;

SELECT *
FROM products;