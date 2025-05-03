// src/mocks/handlers.js
import { http, HttpResponse } from 'msw'
 
export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get('/api/customers', () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json([
        {
            "CustomerID": 1,
            "FirstName": "John",
            "LastName": "Doe",
            "Email": "john.doe@example.com",
            "Phone": "+1-202-555-0101",
            "Bookings": "3",
            "CreatedAt": "2023-01-01 08:00:00",
            "UpdatedAt": "2023-01-01 08:00:00"
        },
        {
            "CustomerID": 2,
            "FirstName": "Jane",
            "LastName": "Smith",
            "Email": "jane.smith@example.com",
            "Phone": "+1-202-555-0102",
            "Bookings": "12",
            "CreatedAt": "2023-01-02 09:00:00",
            "UpdatedAt": "2023-01-02 09:00:00"
        },
        {
            "CustomerID": 3,
            "FirstName": "Alice",
            "LastName": "Johnson",
            "Email": "alice.johnson@example.com",
            "Phone": "+1-202-555-0103",
            "Bookings": "8",
            "CreatedAt": "2023-01-03 10:00:00",
            "UpdatedAt": "2023-01-03 10:00:00"
        },
        {
            "CustomerID": 4,
            "FirstName": "Bob",
            "LastName": "Brown",
            "Email": "bob.brown@example.com",
            "Phone": "+1-202-555-0104",
            "Bookings": "1",
            "CreatedAt": "2023-01-04 11:00:00",
            "UpdatedAt": "2023-01-04 11:00:00"
        },
        {
            "CustomerID": 5,
            "FirstName": "Charlie",
            "LastName": "Garcia",
            "Email": "charlie.garcia@example.com",
            "Phone": "+1-202-555-0105",
            "Bookings": "1",
            "CreatedAt": "2023-01-05 12:00:00",
            "UpdatedAt": "2023-01-05 12:00:00"
        },
        {
            "CustomerID": 6,
            "FirstName": "David",
            "LastName": "Martinez",
            "Email": "david.martinez@example.com",
            "Phone": "+1-202-555-0106",
            "Bookings": "7",
            "CreatedAt": "2023-01-06 13:00:00",
            "UpdatedAt": "2023-01-06 13:00:00"
        },
        {
            "CustomerID": 7,
            "FirstName": "Emma",
            "LastName": "Wilson",
            "Email": "emma.wilson@example.com",
            "Phone": "+1-202-555-0107",
            "Bookings": "11",
            "CreatedAt": "2023-01-07 14:00:00",
            "UpdatedAt": "2023-01-07 14:00:00"
        },
        {
            "CustomerID": 8,
            "FirstName": "Frank",
            "LastName": "Taylor",
            "Email": "frank.taylor@example.com",
            "Phone": "+1-202-555-0108",
            "Bookings": "6",
            "CreatedAt": "2023-01-08 15:00:00",
            "UpdatedAt": "2023-01-08 15:00:00"
        },
        {
            "CustomerID": 9,
            "FirstName": "Grace",
            "LastName": "Anderson",
            "Email": "grace.anderson@example.com",
            "Phone": "+1-202-555-0109",
            "Bookings": "4",
            "CreatedAt": "2023-01-09 16:00:00",
            "UpdatedAt": "2023-01-09 16:00:00"
        },
        {
            "CustomerID": 10,
            "FirstName": "Henry",
            "LastName": "Thomas",
            "Email": "henry.thomas@example.com",
            "Phone": "+1-202-555-0110",
            "Bookings": "0",
            "CreatedAt": "2023-01-10 17:00:00",
            "UpdatedAt": "2023-01-10 17:00:00"
        },
        {
            "CustomerID": 11,
            "FirstName": "Isabella",
            "LastName": "Jackson",
            "Email": "isabella.jackson@example.com",
            "Phone": "+1-202-555-0111",
            "Bookings": "2",
            "CreatedAt": "2023-01-11 18:00:00",
            "UpdatedAt": "2023-01-11 18:00:00"
        },
        {
            "CustomerID": 12,
            "FirstName": "Jack",
            "LastName": "White",
            "Email": "jack.white@example.com",
            "Phone": "+1-202-555-0112",
            "Bookings": "7",
            "CreatedAt": "2023-01-12 19:00:00",
            "UpdatedAt": "2023-01-12 19:00:00"
        },
        {
            "CustomerID": 13,
            "FirstName": "Katherine",
            "LastName": "Harris",
            "Email": "katherine.harris@example.com",
            "Phone": "+1-202-555-0113",
            "Bookings": "5",
            "CreatedAt": "2023-01-13 20:00:00",
            "UpdatedAt": "2023-01-13 20:00:00"
        },
        {
            "CustomerID": 14,
            "FirstName": "Liam",
            "LastName": "Martin",
            "Email": "liam.martin@example.com",
            "Phone": "+1-202-555-0114",
            "Bookings": "1",
            "CreatedAt": "2023-01-14 21:00:00",
            "UpdatedAt": "2023-01-14 21:00:00"
        },
        {
            "CustomerID": 15,
            "FirstName": "Mia",
            "LastName": "Thompson",
            "Email": "mia.thompson@example.com",
            "Phone": "+1-202-555-0115",
            "Bookings": "9",
            "CreatedAt": "2023-01-15 22:00:00",
            "UpdatedAt": "2023-01-15 22:00:00"
        },
        {
            "CustomerID": 16,
            "FirstName": "Noah",
            "LastName": "Garcia",
            "Email": "noah.garcia@example.com",
            "Phone": "+1-202-555-0116",
            "Bookings": "21",
            "CreatedAt": "2023-01-16 23:00:00",
            "UpdatedAt": "2023-01-16 23:00:00"
        },
        {
            "CustomerID": 17,
            "FirstName": "Olivia",
            "LastName": "Martinez",
            "Email": "olivia.martinez@example.com",
            "Phone": "+1-202-555-0117",
            "Bookings": "4",
            "CreatedAt": "2023-01-17 08:00:00",
            "UpdatedAt": "2023-01-17 08:00:00"
        },
        {
            "CustomerID": 18,
            "FirstName": "Paul",
            "LastName": "Robinson",
            "Email": "paul.robinson@example.com",
            "Phone": "+1-202-555-0118",
            "Bookings": "1",
            "CreatedAt": "2023-01-18 09:00:00",
            "UpdatedAt": "2023-01-18 09:00:00"
        },
        {
            "CustomerID": 19,
            "FirstName": "Quinn",
            "LastName": "Clark",
            "Email": "quinn.clark@example.com",
            "Phone": "+1-202-555-0119",
            "Bookings": "1",
            "CreatedAt": "2023-01-19 10:00:00",
            "UpdatedAt": "2023-01-19 10:00:00"
        },
        {
            "CustomerID": 20,
            "FirstName": "Rachel",
            "LastName": "Lewis",
            "Email": "rachel.lewis@example.com",
            "Phone": "+1-202-555-0120",
            "Bookings": "2",
            "CreatedAt": "2023-01-20 11:00:00",
            "UpdatedAt": "2023-01-20 11:00:00"
        }
    ])
  })
]