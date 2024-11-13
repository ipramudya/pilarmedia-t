CREATE TABLE
  IF NOT EXISTS products (
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    product_price DECIMAL(10, 2) NOT NULL,
    product_description TEXT
  );

CREATE TABLE
  IF NOT EXISTS salespersons (
    sales_person_id SERIAL PRIMARY KEY,
    sales_person_name VARCHAR(255) NOT NULL,
    sales_person_email VARCHAR(255) NOT NULL,
    sales_person_phone VARCHAR(20),
    sales_person_address VARCHAR(255)
  );

CREATE TABLE
  IF NOT EXISTS sales (
    sales_id SERIAL PRIMARY KEY,
    sales_date DATE NOT NULL,
    product_id INTEGER NOT NULL,
    sales_amount DECIMAL(10, 2) NOT NULL,
    sales_person_id INTEGER NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products (product_id),
    FOREIGN KEY (sales_person_id) REFERENCES salespersons (sales_person_id)
  );