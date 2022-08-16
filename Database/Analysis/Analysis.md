# SnapDeal

## Anonymous User
- Can search a product based on category and sub category,name and brand of the product
- There are multiple filters available color,size,brand,price,rating
- Product Display should have zoom functionality.
- Add to cart feature is available to anonymous user

## Logged in user
- Can place order and track the order placed. 
- Whenever order is placed confirmation code should be sent to its email for verification. 

## Log in User : login field: 
- User Mobile number and password, login with otp

## Admin User: 
- Can do the crud operation for category, subcategory and product. Product contains multiple image. 
- Product details should be visible to the user.  
- Admin user can change the status of the order whether it is inprogress, dispatched, delivered or cancel.


### Tables for use:

1. *Product*
- ProductID (PK)
- ProductName
- Price
- Description
- Availability
- Quantity
- Highlights
- OtherSpecifications -> brand details
- Brandid (FK) - BrandTable

2. *Brand*
- BrandID (PK)
- BrandName
- Description

3. *Category*
- CategoryID (PK)
- CategoryName
- ParentCategory (FK) - Self
- Description 

4. *ProductImages*
- ProductImageID (PK)
- ImageURL
- ProductID (FK)

5. *MasterTable*
- AttributeTypeID (PK)
- Name <!--Size, Color,  Weight, Order Status, Payment Type, PaymentStatus , Address Type-->

6. *Attribute*
- AttributeID (PK)
- TypeID (FK)
- AttributesValue <!--L,M,XL, Red, Blue, Black, in progress, dispatched, delivered or cancel-->

7. *ProductAttributes*
- ProductAttributeID (PK)
- ProductID (FK)
- SizeID (FK) <!-- Attribute TABLE -->
- ColorID (FK)<!-- Attribute TABLE -->

8. *Cart*
- CartID (PK)
- CustomerID (FK)
- SubTotal (COMPUTED COLUMN)

9. *CartItem*
- CartItemID (PK)
- CartID (FK)
- ProductID (FK)
- Quantity
- SubTotal (COMPUTED COLUMN)

10. *Payment*
- PaymentID (PK)
- PaymentType (FK)<!-- Attribute TABLE-->
- PaymentStatus (FK)
- PaymentDate
- Amount

11. *Orders*
- OrderID (PK)
- CustomerID (FK)
- Total
- OrderStatus (FK)
- PaymentID (FK)

12. *OrderItems*
- OrderItemId(pk)
- OrderID(fk)
- ProductID(fk)
- Quantity

13. *Customer*
- CustomerID (PK)
- UserName
- FirstName
- LastName
- EmailAddress
- PhoneNumber
- Password
- DateOfBirth

14. *CustomerAddresses*
- AddressID (PK)
- CustomerID (FK)
- AddressLine
- PinCode
- Landmark
- City
- State
- AddressType (FK)<!-- Attribute TABLE-->

15. *Shortlist*
- ShortListID (PK)
- CustomerID (FK)

16. *ShortListItem* 
- ListID (PK)
- ShortListID (FK)
- ProductID (FK)