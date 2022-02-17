# MomProject

## Description

MomProject is a react frontend that connects to a backend to allow users to purchase items on a storefront, creating orders, and backend for a special user to manage orders.

## MVP

- Homepage with about us and contact information
- Create an account and log in
- A products list with an add to cart button
- A list of your orders and their status
- An admin part to see all orders and edit them
- An admin part to create products

## Backlog


## Data Structure

NavBar component
Shows the user navbar and changes on login
props: the logged in user

Home component
Shows the home page with about us

Login component
Allows user to log in

Register component
Shows the form for user registration

Profile component
Shows user profile, allows editing the profile
props: logged in user

ProductsList component
props: list of products to display

Product component
Shows product row with an add to cart button
props: name, description, price, image url

CreateProduct component
Shows a form to create a new product

EditProduct component
Shows a form to edit a product
props: name, image, description, price

ShoppingCart component
Allows user to see shopping cart items, unit price, subtotals and totals, change quantity, and to submit the order
props: list of all products in shopping cart and how many

AdminOrdersList component
Shows all orders to the admin user and has controls to change its status or delete the order
props: list of all orders

UserOrdersList component
Lists all orders in sequence that all users have made
props: list of all user orders

UserOrder component
Shows a specific order, unit price, quantity, subtotals and totals, and the status.
props: a list of products and how many, status


## Routes

/ Home
/auth/login Login
/auth/signup Signup
/products ProductsList
/cart ShoppingCart
/profile Profile
/profile/orders UserOrdersList
/admin/orders AdminOrdersList
/admin/products ProductsList
/admin/products/:id EditProduct
/admin/products/add CreateProduct

## Links

### Trello
[Link url](https://trello.com/b/CWviY2zv/kraken-brigade-project)

### Git
URls for the project repo and deploy
[Link Repo](https://github.com/jorgeberrizbeitia/kraken-brigade)
[Link Deploy](https://jorgeberrizbeitia.github.io/kraken-brigade/)

### Slides
URls for the project presentation (slides)
[Link Slides.com](https://docs.google.com/presentation/d/138o01hAz-0gXepN78RsDgse12HiiuN7Fz_N_hJnI9_g/edit?usp=sharing)   
