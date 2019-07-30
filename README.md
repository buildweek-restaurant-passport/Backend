# Restaurant-app-api-BE

As a foodie, I want to be able to always have ideas of where I can eat when the opportunity arises (date night, a rare free night, girls night, bachelor party, etc.). I’m tired of defaulting to McDonalds because of decision fatigue every week!  I’m a goal setter, so I want to see visual progress of restaurants I’ve tried. I also want to brag to my friends about all the cool places I’ve been.

## API DOCUMENTATION

The restaurant app api is hosted on Heroku [here](https://restaurant-app-appi.herokuapp.com/api/v1/)

### API Endpoints

The following endpoints are available for use.

| Methods | Endpoint                              | Description                       |
| ------- | ------------------------------------- | --------------------------------- |
| POST    | /api/v1/auth/register                 | Register a user                   |
| POST    | /api/v1/auth/login                    | Login user                        |
| GET     | /api/v1/locations                     | Get list of cities                |
| GET     | /api/v1/restaurants/:cityId           | Get restaurants by cityId         |
| GET     | /api/v1/:userId/visited               | Get restaurants visited by user   |
| POST    | /api/v1/:userId/visited/:restaurantId | Post restaurant visited by user   |
| DELETE  | /api/v1/:userId/visited/:restaurantId | Delete restaurant visited by user |

#### Register User Schema

|  Fields   | Data type |     Metadata     |
| :-------: | :-------: | :--------------: |
| firstName |  string   |     required     |
| lastName  |  string   |     required     |
|   email   |  string   | required, unique |
| password  |  string   |     required     |
|   city    |  string   |     required     |

#### Login User Schema

|  Fields  | Data type | Metadata |
| :------: | :-------: | :------: |
|  email   |  string   | required |
| password |  string   | required |

#### Create Restaurant Schema

|   Fields    | Data type |               Metadata               |
| :---------: | :-------: | :----------------------------------: |
|    name     |  string   | required, maximum of 250 characters. |
|   country   |  string   | required, maximum of 250 characters. |
|    city     |  string   | required, maximum of 250 characters. |
|    type     |  string   |              required,               |
| description |  string   |               required               |

### Authentication Endpoints

#### Registration [POST]

**URL**: _https://restaurant-app-appi.herokuapp.com/api/v1/auth/register_
**Payload**:

```JSON
{
    "firstName": "John",
    "lastName": "Doe",
    "email": "janeDoe2@doe.com",
    "password": "123456",
    "city": "NYC"
}
```

**Returns**: A message that user has been added successfully.

```JSON
{
    "success": true,
    "message": "New user created",
    "body": {
        "user": {
            "id": 2,
            "firstName": "John",
            "lastName": "Doe",
            "city": "NYC",
            "email": "janeDoe2@doe.com"
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCIougbchshchsckhjbcs"
    }
}
```

#### Login [POST]

**URL**: _https://restaurant-app-appi.herokuapp.com/api/v1/auth/login_
**Payload**:

```JSON
{
    "email": "janeDoe2@doe.com",
    "password": "12345"
}
```

**Returns**: An object with the token

```JSON
{
    "success": true,
    "message": "Log in successful",
    "body": {
        "user": {
            "id": 1,
            "firstName": "John",
            "lastName": "Doe",
            "city": "New York City",
            "email": "john@gmail.com"
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZljdbcdbcbcbcdjcjdbc"
    }
}
```
### What is needed
#### Locations [GET]

**URL**: _https://restaurant-app-appi.herokuapp.com/api/v1/locations
**Payload**:

**Returns**: An object

```JSON
{
    "success": true,
    "message": "All Locations",
    "body": {
        "id": 1,
        "cityState": "New York City, NY",
        "country": "US"
    }
}
```

#### Restaurants By City Id [GET]

**URL**: _https://restaurant-app-appi.herokuapp.com/api/v1/restaurants/:cityId
**Payload**:

**Returns**: An array of objects

```JSON
{
    "success": true,
    "message": "All Restaurants From CityId :cityId",
    "body": [
        {
            "id": 1,
            "cityId": 6,
            "name": "Famous Amadeus Pizza",
            "cuisine": "italian",
            "environment": "casual",
            "address": "123 Abc St.",
            "description": "This is the most mouth watering Ny Pizza in the neighborhood. Delicious hot, cheesy, crusty and flavorful. A crowd pleaser pizza for sure."
        },
        {
            "id": 2,
            "cityId": 6,
            "name": "Le Coucou",
            "cuisine": "Mexican",
            "environment": "casual",
            "address": "456 Def Rd.",
            "description": "You'll see chefs in tall hats the color of cream, chandeliers sparkling along the length of the ceiling, and a gorgeous bar you can lean against as if you were in Paris. The air here smells of butter, onion, and seared steak. It’s a French restaurant of the old school, which might entail Lyon’s famous quenelle de brochet (ethereally light pike in a creamy lobster bisque) or rabbit cooked three ways. Look for the halibut in beurre blanc, sweetbreads with tarragon, or the divine filet de boeuf with bone marrow."
        }
    ]
}
```

#### Restaurants Visited By User [GET]

**URL**: _https://restaurant-app-appi.herokuapp.com/api/v1/:userId/visited
**Payload**:

**Returns**: An array

```JSON
{
    "success": true,
    "message": "All Visited Restaurants For UserId :userId",
    "body": [
        4,
        2,
        90,
        13
    ]
}
```

#### Restaurants Visited By User [POST]

**URL**: _https://restaurant-app-appi.herokuapp.com/api/v1/:userId/visited/:restaurantId
**Payload**:

**Returns**: A message

```JSON
{
    "success": true,
    "message": "restaurantID :restaurantId added to userID :userId"
}
```

#### Restaurants Visited By User [DELETE]

**URL**: _https://restaurant-app-appi.herokuapp.com/api/v1/:userId/visited/:restaurantId
**Payload**:

**Returns**: A message

```JSON
{
    "success": true,
    "message": "restaurantID :restaurantId removed from userID :userId"
}
```

### None of the items below this line are needed
<-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=->

#### Get all restaurants [GET]

**URL**: _https://restaurant-app-appi.herokuapp.com/api/v1/restaurants_

**Returns**: An array of all restaurant object.

```javascript
{
    "success": true,
    "message": "All restaurants",
    "body": [
        {
            "id": 1,
            "name": "Famous Amadeus Pizza",
            "country": "US",
            "city": "New York City",
            "type": "italian",
            "description": "This is the most mouth watering Ny Pizza in the neighborhood. Delicious hot, cheesy, crusty and flavorful. A crowd pleaser pizza for sure."
        },
        {
            "id": 2,
            "name": "Le Coucou",
            "country": "US",
            "city": "New York City",
            "type": "Mexican",
            "description": "You'll see chefs in tall hats the color of cream, chandeliers sparkling along the length of the ceiling, and a gorgeous bar you can lean against as if you were in Paris. The air here smells of butter, onion, and seared steak. It’s a French restaurant of the old school, which might entail Lyon’s famous quenelle de brochet (ethereally light pike in a creamy lobster bisque) or rabbit cooked three ways. Look for the halibut in beurre blanc, sweetbreads with tarragon, or the divine filet de boeuf with bone marrow."
        },
        {
            "id": 3,
            "name": "De place",
            "country": "Nigeria",
            "city": "Lagos, island",
            "type": "African",
            "description": "This is the most mouth watering Ny Pizza in the neighborhood. Delicious hot, cheesy, crusty and flavorful. A crowd pleaser pizza for sure."
        },
        {
            "id": 4,
            "name": "Mercado Little Spain",
            "country": "Ghana",
            "city": "Ghana",
            "type": "African",
            "description": "This is the most mouth watering Ny Pizza in the neighborhood. Delicious hot, cheesy, crusty and flavorful. A crowd pleaser pizza for sure."
        }
    ]
}
```

#### Get restaurant by id [GET]

**URL**: _https://restaurant-app-appi.herokuapp.com/api/v1/restaurants/:id_

**Returns**: get Single restaurant.

```javascript
{
    "success": true,
    "body": {
        "id": 1,
        "name": "Famous Amadeus Pizza",
        "country": "US",
        "city": "New York City",
        "type": "italian",
        "description": "This is the most mouth watering Ny Pizza in the neighborhood. Delicious hot, cheesy, crusty and flavorful. A crowd pleaser pizza for sure."
    }
}
```

### Protected Endpoints

#### Create a restaurant [POST]

**URL**: _https://restaurant-app-appi.herokuapp.com/api/v1/restaurants_

**Returns**: Returns created restaurant

```javascript
{
    "success": true,
    "message": "New restaurant created",
    "body": {
        "id": 5,
        "name": "Judy food",
        "country": "Canada",
        "city": "louis",
        "type": "N/A",
        "description": "Waiting for descrip"
    }
}
```

#### Update restaurant info [PUT]

**URL**: _https://restaurant-app-appi.herokuapp.com/api/v1/restaurants/:id_

**Returns**: Returns a restaurant object.

```JSON
{
    "success": true,
    "message": "New restaurant created",
    "body": {
        "id": 5,
        "name": "Judy foody",
        "country": "London",
        "city": "louis",
        "type": "N/A",
        "description": "Waiting for descrip"
    }
}
```

## TESTING

The server uses the Jest testing framework to run tests.

Check tests with the `npm test` command.
Test coverage is also available with the `npm run coverage` command.

## Author

**Yemi**
