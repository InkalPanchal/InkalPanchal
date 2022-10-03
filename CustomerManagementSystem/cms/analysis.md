## Customer Management System

> Software Used
- Front-End -> ReactJs
- Back-End -> NodeJs
- Database -> PostGre

> Database Design
- Tables

1. User
- UserId (PK)
- UserName
- EmailAddress
- Password
- Role

2. Customer
- CustomerId (PK)
- Name
- Gender
- BirthDate
- EmailAddress
- PhoneNumber
- Address
- Country

3. CustomerAddresses
- AddressId (PK)
- CustomerId (FK Customer)
- Address
- AddressType (Home/Office)

> FrontEnd
- Create using React
- Login page -> Admin can logn
- In Login page:
    1. text boxes for EmailAddress and phonenumber
    2. One button to login
    3. Call login api to verify credentials
- Display page -> Customer details will showing, add button to add customer, edit button, delete button
- Using Axios customer api will be called
- Add button will open form for add customer detail
- In customer add form there are following fields:
    1. text box for Name, EmailAddress, Phonenumber
    2. Radio button for Gender
    3. Date picker for Birth date 
    4. Dropdown for country
- Edit button will open edit form to update customer detail
- Delete button will delete customer record
- Complete form with appropriate validations

> Backend 
- System will be created using NodeJs' framework ExpessJs
- Create login api
- Authorization and authentication using JWT on login api
- If user is admin then can add, update, delete customer
- Create api for add, update, delete, get customer
- server side validation


