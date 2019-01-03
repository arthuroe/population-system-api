# Population Management Application

This is a simple API for managing locations with their populations, along with their sub-locations ie Districts.

The API is written in TypeScript which transpiles to javaScript.

- It Involves the following functionality :-

  - 1 - Creates a new location containing data on the total number of male and female residents within it.

  - 2 - Creates locations within existing locations ie Districts.

  - 3 - Lists all available locations and their population summaries (total male residents, total female residents, sum total residents).

  - 4 - Updates data for a specific locations and districts.

  - 5 -  Deletes Locations.


#### Prerequisites

What things you need to install the software and how to install them


- `Mongo Database`,  follow this guide to install mongoDB - [Link](https://docs.mongodb.com/manual/installation/).


- `npm or yarn`, npm comes along with the installation of node which can be installed using using `brew install node` on a mac for other platforms follow this  - [Guide](https://www.npmjs.com/get-npm).
- `TypeScript`, with `npm` already installed, globally install typescript using this command  ``` npm install -g typescript```.


## Install

- Clone the API using this command `git clone https://github.com/kisakyegordon/population-system-api`

## Install Required  Libraries

- Enter the cloned directory.

- Run `npm install`, to install any dependant libraries.

## Start the API.

To start the API
- Run `tsc`, to transpile TypeScript code to javaScript.
- Run `yarn start`, to start the API


# API Routes

| No        | End Point        | Method   | Functionality  |
| ------------- |:-------------:| -----:|-----:|
| 1     | /api/v1/location  | POST | Adds a new location |
| 2     | /api/v1/location  | GET | Get all locations |
| 3     | /api/v1/location/:location_id  | PUT | Update a location |
| 4     | /api/v1/location/:location_id | DELETE | Deletes a location |
| 5     | /api/v1/location/district/:location_id  |PUT | Adds a district |
| 6     | /api/v1/location/district/update/:district_id  | PUT | Updates a district |






## Create a Location

Send a `POST` request to the endpoint below, to add a location

```
    /api/v1/location
```
**Request:**

```
    {
        "location-name": "accra",
        "male": 1000
        "female": 2000
    }
```

**Response:**

```
{
    "status": "Success",
    "data": {
        "_id": "5c2e461d2ad2b2c11d85bf2d",
        "location_name": "accra",
        "male": 100,
        "female": 2000,
        "district": [],
        "__v": 0,
        "total": 2100,
        "id": "5c2e461d2ad2b2c11d85bf2d"
    }
}
```


## Get all locations

Send a `GET` request to the endpoint below, to get all existing locations

```
    /api/v1/location
```

**Response:**

```
{
    "status": "Success",
    "locations": [
        {
            "_id": "5c2e1741bfbc92815bcda991",
            "location_name": "egypt",
            "male": 80,
            "female": 20,
            "district": [],
            "__v": 0,
            "total": 100,
            "id": "5c2e1741bfbc92815bcda991"
        },
        {
            "_id": "5c2e461d2ad2b2c11d85bf2d",
            "location_name": "accra",
            "male": 100,
            "female": 2000,
            "district": [],
            "__v": 0,
            "total": 2100,
            "id": "5c2e461d2ad2b2c11d85bf2d"
        }
    ]
}
```

## Update Location

Send a `PUT` request to the endpoint below

```
    /api/v1/location/:location_id
```

**Request:**

```
    {
        "location-name": "accra-modified",
        "male": 10
        "female": 200
    }
```
**Response:**

```
{
    "status": "Successfully Updated Location Data"
}
```


## Delete a Location

Send a `DELETE` request to the endpoint below
- This also deletes all sub-locations.

```
    /api/v1/location/:location_id
```

**Response:**

```
{
    "status": "Successfully Deleted Location"
}
```

## Add a district

Send a `PUT` request to the endpoint below

```
    /api/v1/location/district/:location_id
```

**Request:**

```
    {
        "district-name": "accra-town",
        "male": 10
        "female": 200
    }
```
**Response:**

```
{
    "status": "Successfully Added a District"
}
```
##  Update a District

Send a `PUT` request to the endpoint below

```
    /api/v1/location/district/update/:district_id
```

**Request:**

```
    {
        "district-name": "accra-town-modified",
        "male": 10
        "female": 20
    }
```
**Response:**

```
{
    "district": {
        "n": 1,
        "nModified": 1,
        "ok": 1
    }
}
```
