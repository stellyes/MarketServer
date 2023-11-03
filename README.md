# MarketServer

_Video installation and walkthrough can be found [here](https://youtu.be/BhcnfLFVnj8)._

## Description

MarketServer is a Node/Express.js application designed to handle and manage the backend of an example e-commerce website.

## Installation

After running `npm install` in the repository to install the necessary Node dependencies, please refer to [this video](https://youtu.be/BhcnfLFVnj8) for the necessary setup, or follow the instructions below:

1. Run the `schema.sql` file located in the `db/` folder. You can do this by running `mysql -u root -p` to login to your SQL terminal, and then running `source ./db/schema.sql` to create the `ecommerce_db` database. Once this is completed, you can exit the SQL terminal by entering `exit`.

2. Once you've returned to the shell terminal, you can go ahead and run `npm run seed` to seed your database with the example data provided in the `seed/` folder.

3. After this, run `npm start` to initialize your Express.js server. From here, the API endpoints should be live and accessible to your local machine.

## Usage

If you're running this application on your local machine, each endpoint will exist at the URL `http://localhost:3001/` . From here, you can append the following URL strings to test the functionality of the application:

- **GET**

  - `/api/categories/`, gets all of the categories in the database

  - `/api/categories/:id`, gets the specified category associated with the `id` parameter

  - `/api/products/`, gets all of the products in the database

  - `/api/products/:id`, gets the specified product associated with the `id` parameter

  - `/api/tags/`, gets all of the tags in the database

  - `/api/tags/:id`, gets the specified tag associated with the `id` parameter

- **POST**

  - `/api/categories/`, creates a new category with request body including the proper `category_name` parameter.

  - `/api/products/`, creates a new product with request body including the proper parameters:

    - `product_name`, the name of the product

    - `price`, decimal value indicating the price of the product

    - `stock`, how much of the product is in stock

    - `category_id`, the ID of the category associated with this product

    - `tagIDs`, the array of tag IDs you want to associate with your product

  - `/api/tags/`, creates a new tag with the request body including the proper `tag_name` parameter

- **PUT**

  - `/api/categories/:id`, modifies any of the parameters of the category with ID provided by request URL

  - `/api/products/:id`, modifies any of the parameters of the product with ID provided by the request URL
  - `/api/tags/:id `, modifies any of the parameters of the tag with ID provided by the request URL

- **DELETE**

  - `/api/categories/:id`, deletes the category with ID provided by request URL

  - `/api/products/:id`, deletes the product with ID provided by the request URL
  - `/api/tags/:id `, deletes the tag with ID provided by the request URL

## Author

Ryan England ([Github](https://github.com/stellyes), [LinkedIn](https://www.linkedin.com/in/ryandengland))
