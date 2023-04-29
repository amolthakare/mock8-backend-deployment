# Food Delivery App Backend #

## This Food Delivery API provides a platform for users to register, login, order food from different restaurants, and update their orders' status.##

## Base URL ##
``

## Endpoints

## Register User##

**Request**:
- `POST`
- `http://localhost:5500/api/register`
**Response**: `201 Created:` User successfully registered.
<hr>

## Login User##
This endpoint allows registered users to log in by providing their email and password in the request body and the API returns a JWT token.
**Request:** 
- `POST`
- `http://localhost:5500/api/login`
**Response**: `201 Created:` User successfully login.
<hr>

## Reset Password

This endpoint allows registered users to reset their password by providing their current password and the new password in the request body.
**Request**: 
- `PATCH`
- `http://localhost:5500/api/user/:id/reset`
**Response**: `204 Updated:` password successfully updated.
<hr>

## Find Restaurant

This endpoint returns a list of all available restaurants.
**Request**: 
- `GET`
- `http://localhost:5500/api/restaurant/`
**Response**: `200 OK:` List of all available restaurants.
<hr>


## Find Restaurant by id

This endpoint returns a restaurants by its id.
**Request**: 
- `GET`
- `http://localhost:5500/api/restaurant/:id`
**Response**: `200 OK:` restaurant by id.
<hr>


## Add Restaurant

This endpoint returns a restaurants by its id.
**Request**: 
- `POST`
- `http://localhost:5500/api/restaurant/`
**Response**: `201 OK:` restaurant added.
<hr>


## View Restaurant Menu

This endpoint returns the menu of a specific restaurant identified by its ID.

**Request**: 
- `GET`
- `http://localhost:5500/api/restaurant/:id/menu`
**Response**: `200 OK:` restaurant menu.
<hr>


## Add Restaurant Menu

This endpoint allows you to add the menu to a specific restaurant ID.

**Request**: 
- `POST`
- `http://localhost:5500/api/restaurant/:id/menu`
**Response**: `201 OK:` restaurant menu added.
<hr>


## Delete Restaurant Menu by id

This endpoint allows you to delete the menu of a specific restaurant ID.

**Request**: 
- `DELETE`
- `http://localhost:5500/api/restaurant/:id/menu/:mid`
**Response**: `202 OK:` restaurant menu deleted.
<hr>


## get all Orders

This endpoint allows you to get all the orders.

**Request**: 
- `GET`
- `http://localhost:5500/api/order`
**Response**: `200 OK:` all the orders.
<hr>

## add the Orders

This endpoint allows you to add the orders.

**Request**: 
- `POST`
- `http://localhost:5500/api/order`
**Response**: `201 OK:` orders has been added.
<hr>



