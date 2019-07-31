# Restaurant-app-api-BE

As a foodie, I want to be able to always have ideas of where I can eat when the opportunity arises (date night, a rare free night, girls night, bachelor party, etc.). I’m tired of defaulting to McDonalds because of decision fatigue every week!  I’m a goal setter, so I want to see visual progress of restaurants I’ve tried. I also want to brag to my friends about all the cool places I’ve been.

## API DOCUMENTATION

The restaurant app api is hosted on Heroku [here](https://restaurant-app-appi.herokuapp.com/api/v1/)

### API Endpoints

The following endpoints are available for use.

| Methods | Endpoint                | Description             |
| ------- | ----------------------- | ----------------------- |
| POST    | /api/v1/auth/register   | Register a user         |
| POST    | /api/v1/auth/login      | Login user              |
| GET     | /api/v1/restaurants     | show all restaurants    |
| GET     | /api/v1/restaurants/:id | Get restaurant by id    |
| PUT     | /api/v1/restaurants/:id | Update restaurant by id |

#### Register User Schema

|  Fields   | Data type |     Metadata     |
| :-------: | :-------: | :--------------: |
| firstName |  string   |     required     |
| lastName  |  string   |     required     |
|   email   |  string   | required, unique |
| password  |  string   |     required     |
|   city    |  string   |     required     |
|  cityId   |  string   |     required     |

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
|   cityId    |  string   |               required               |

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
    "city": "NYC",
    "cityId": "00039-27733-999"
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
            "email": "janeDoe2@doe.com",
            "cityId": "00039-27733-999"
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
            "email": "john@gmail.com",
            "cityId": "00039-27733-999"
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZljdbcdbcbcbcdjcjdbc"
    }
}
```

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
            "cityId": "00039-27733-999",
            "type": "italian",
            "description": "This is the most mouth watering Ny Pizza in the neighborhood. Delicious hot, cheesy, crusty and flavorful. A crowd pleaser pizza for sure."
        },
        {
            "id": 2,
            "name": "Le Coucou",
            "country": "US",
            "city": "New York City",
            "cityId": "00039-27733-999",
            "type": "Mexican",
            "description": "You'll see chefs in tall hats the color of cream, chandeliers sparkling along the length of the ceiling, and a gorgeous bar you can lean against as if you were in Paris. The air here smells of butter, onion, and seared steak. It’s a French restaurant of the old school, which might entail Lyon’s famous quenelle de brochet (ethereally light pike in a creamy lobster bisque) or rabbit cooked three ways. Look for the halibut in beurre blanc, sweetbreads with tarragon, or the divine filet de boeuf with bone marrow."
        },
        {
            "id": 3,
            "name": "De place",
            "country": "Nigeria",
            "city": "Lagos, island",
            "cityId": "00039-27733-999",
            "type": "African",
            "description": "This is the most mouth watering Ny Pizza in the neighborhood. Delicious hot, cheesy, crusty and flavorful. A crowd pleaser pizza for sure."
        },
        {
            "id": 4,
            "name": "Mercado Little Spain",
            "country": "Ghana",
            "city": "Ghana",
            "type": "African",
            "cityId": "00039-27733-999",
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
        "cityId": "00039-27733-999",
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
        "cityId": "00039-27733-999",
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
        "cityId": "00039-27733-999",
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