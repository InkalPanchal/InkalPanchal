USE snapdeal-2442-inkalben;

-- CUSTOMER TABLE
CREATE TABLE Customer
(
	CustomerID INT PRIMARY KEY IDENTITY(1,1),
	UserName VARCHAR(25) NOT NULL,
	FirstName VARCHAR(20) NOT NULL,
	LastName VARCHAR(20) NOT NULL,
	EmailAddress VARCHAR(50) NOT NULL,
	Password VARCHAR(10),
	PhoneNumber BIGINT,
	DateOfBirth DATE
)

CREATE TABLE User
(
	UserID INT PRIMARY KEY IDENTITY(1,1),
	UserName VARCHAR(25),
	EmailAddress NVARCHAR(50),
	PhoneNumber BIGINT,
	DateOfBirth DATE,
	Role VARCHAR(10)
)

-- Shortlist table
CREATE TABLE ShortList (
	ShortListID INT PRIMARY KEY IDENTITY(1,1),
	CustomerId INT FOREIGN KEY REFERENCES Customer(CustomerID)
)

-- SHOTLISTED(FAVOURITE PRODUCTS)
CREATE TABLE ShortListItems (
	ListID INT PRIMARY KEY IDENTITY(1,1),
	ShortListId INT FOREIGN KEY REFERENCES ShortList(ShortListID),
	ProductId INT FOREIGN KEY REFERENCES Product(ProductID)
)

-- Customer Addresses table
CREATE TABLE CustomerAddresses
(
	AddressID INT PRIMARY KEY IDENTITY(1,1),
	CustomerId INT FOREIGN KEY REFERENCES Customer(CustomerID) NOT NULL,
	CustomerName VARCHAR(25) NOT NULL,
	AddressLine VARCHAR(MAX) NOT NULL,
	Pincode INT CHECK(LEN(Pincode) = 6) NOT NULL,
	Landmark VARCHAR(30),
	City VARCHAR(20) NOT NULL,
	State VARCHAR(20) NOT NULL,
	MobileNumber BIGINT NOT NULL,
	AddressType INT FOREIGN KEY REFERENCES Attribute(AttributeID)
)

-- Category table
CREATE TABLE Category (
	CategoryID INT PRIMARY KEY IDENTITY(1,1),
	CategoryName VARCHAR(30) NOT NULL,
	ParentCategory INT FOREIGN KEY REFERENCES Category(CategoryID),
	Description VARCHAR(100),
	BrandLogo nvarchar(max)
)

--BRAND TABLE
CREATE TABLE Brand (
	BrandID INT PRIMARY KEY IDENTITY(1,1),
	BrandName VARCHAR(20) NOT NULL,
	Description VARCHAR(200)
)

--PRODUCT TABLE
CREATE TABLE Product
(
	ProductID INT PRIMARY KEY IDENTITY(1,1),
	ProductName VARCHAR(255) NOT NULL,
	ProductPrice MONEY NOT NULL,
	Description VARCHAR(MAX),
	Availability VARCHAR(20) CHECK(Availability = 'InStock' or Availability = 'OutOfStock'),
	Quantity INT NOT NULL,
	Highlights VARCHAR(MAX),
	OtherSpecifications VARCHAR(MAX),
	BrandID INT FOREIGN KEY REFERENCES Brand(BrandID),
	ProductCategoryID INT FOREIGN KEY REFERENCES Category(CategoryID)
)


--PRODUCT IMAGE TABLE
CREATE TABLE ProductImages(
	ProductImageID INT PRIMARY KEY IDENTITY(1,1),
	ImageUrl NVARCHAR(MAX),
	ProductId INT FOREIGN KEY REFERENCES Product(ProductID)
)

--Master Table
CREATE TABLE MasterTable (
	AttributeTypeID INT PRIMARY KEY IDENTITY(1,1),
	Name VARCHAR(15) -- Size, Color, OrderStatus, PaymentStatus, PaymentType
)

-- TypeAttributes table
CREATE TABLE Attribute (
	AttributeID INT PRIMARY KEY IDENTITY(1,1),
	TypeID INT FOREIGN KEY REFERENCES MasterTable(AttributeTypeID),
	AttributesValue VARCHAR(15)
)

--PRODUCTATTRIBUTE TABLE
CREATE TABLE ProductAttributes (
	ProductAttributeID INT PRIMARY KEY,
	ProductId INT FOREIGN KEY REFERENCES Product(ProductID),
	SizeID INT FOREIGN KEY REFERENCES Attribute(AttributeID),
	ColorID INT FOREIGN KEY REFERENCES Attribute(AttributeID),
)

--Cart table
CREATE TABLE Cart
(
	CartID INT PRIMARY KEY IDENTITY(1,1),
	CustomerID INT FOREIGN KEY REFERENCES Customer(CustomerID),
	SubTotal BIGINT
)

-- Cart item table
CREATE TABLE CartItem (
	CartItemID INT PRIMARY KEY IDENTITY(1,1),
	CartId INT FOREIGN KEY REFERENCES  Cart(CartID),
	ProductId INT FOREIGN KEY REFERENCES  Product(ProductID),
	Quantity INT,
	SubTotal INT
)

-- PAYMENT TABLE
CREATE TABLE Payment
(
	PaymentID INT PRIMARY KEY IDENTITY(1,1),
	PaymentType INT FOREIGN KEY REFERENCES Attribute(AttributeID),
	PaymentDate DATE,
	PaymentStatus INT FOREIGN KEY REFERENCES Attribute(AttributeID),
	Amount MONEY
);

-- ORDERS
CREATE TABLE Orders
(
	OrderID INT PRIMARY KEY IDENTITY(1,1),
	CustomerID INT FOREIGN KEY REFERENCES Customer(CustomerID),
	Total INT,
	OrderStatus INT FOREIGN KEY REFERENCES Attribute(AttributeID),
	PaymentId INT FOREIGN KEY REFERENCES Payment(PaymenTID)
)

-- OrderItem table
CREATE TABLE OrderItems (
	OrderItemID INT PRIMARY KEY, 
	OrderID INT FOREIGN KEY REFERENCES Orders(OrderID),
	ProductId INT FOREIGN KEY REFERENCES Product(ProductID),
	Quantity INT
)

-- INSERT DATA INTO MASTER TABLE
INSERT INTO MasterTable VALUES
('Size'),
('Color'),
('OrderStatus'),
('PaymentType'),
('PaymentStatus'),
('AddressType');

-- insert data into Attribute table

INSERT INTO Attribute VALUES
(1, 'XS'),
(1, 'S'),
(1, 'M'),
(1, 'L'),
(1, 'XL'),
(1, '2XL'),
(1, '3XL'),
(1, '4XL'),
(1, '30'),
(1, '32'),
(1, '34'),
(1, '36'),
(1, '38'),
(1, '40'),
(1, '42'),
(1, '44'),
(1, '46'),
(1, '48'),
(1, '50'),
(1, '4'),
(1, '5'),
(1, '6'),
(1, '7'),
(1, '8'),
(1, '9'),
(1, '10'),
(1, '28EU'),
(1, '29EU'),
(1, '30EU'),
(1, '31EU'),
(1, '32EU'),
(1, '33EU'),
(1, '34EU'),
(1, '35EU'),
(1, '36EU'),
(1, '37EU'),
(1, '38EU'),
(1, '24EU'),
(1, '25EU'),
(1, '26EU'),
(1, '27EU'),
(1, '20EU'),
(1, '21EU'),
(1, '22EU'),
(1, '23EU'),
(2, 'Black'),
(2, 'Blue'),
(2, 'Red'),
(2, 'White'),
(2, 'Green'),
(2, 'Pink'),
(2, 'Navy'),
(2, 'Orange'),
(2, 'Peach'),
(2, 'Gray'),
(2, 'Brown'),
(2, 'Yellow'),
(2, 'Olive'),
(3, 'InProgress'),
(3, 'Dispatched'),
(3, 'Delivered'),
(3, 'Cancel'),
(5, 'Success'),
(5, 'Pending'),
(5, 'Failed'),
(4, 'UPI'),
(4, 'Credit'),
(4, 'Debit'),
(4, 'COD'),
(6, 'Home'),
(6, 'Office/Commercial')

select * from Category
-- insert data into Category table
INSERT INTO Category VALUES 
--('Men Fashion', null ), -- Men's Fashion
--('Women Fashion', null),
--('Footwear', 1 ),
--('Bags & Luggage', 1 ),
--('Clothing', 1 ),
--('Winter Wear', 1 ),
--('Sportwear', 1 ),
--('Men Grooming', 1 ),
--('Eyewear', 1 ),
--('Accessories', 1 ),
--('Fragrances', 1 ),
--('Watches', 1 ),
--('Jewellery & Cufflinks', 1 ),
--('Ethnic Wear', 2), --Women's Fashion
--('Footwear', 2),
--('Perfume & Fragrances', 2),
--('Western Wear', 2),
--('Winter Wear', 2),
--('Maternity Wear', 2),
--('Handbags & Clutches', 2),
--('Eyewear', 2),
--('Watches', 2),
--('fashion Jewellery', 2),
--('Gold Coins & Bars', 2),
--('Fashion Accessories', 2),
('Shoes', 5), --Men's Fashion -Footwear
('Slippers & Flip Flops', 5),
('Sandals & Floaters', 5),
('Loafers', 5),
('Sneakers', 5),
('Ethnic Footwear', 5),
('Backpacks', 6), --Men's Fashion -Bags & Luggage
('Laptop Bags', 6),
('Hiking Bags', 6),
('Office Bags', 6),
('Luggage & Suitcases', 6),
('T-shirts & Polos', 7), --Men's Fashion -Clothing
('Shirts', 7),
('Jeans', 7),
('Trousers & Chinos', 7),
('Jackets', 8), --Men's Fashion -Winterwear
('Sweatshirts', 8),
('Sweaters', 8),
('Thermals', 8),
('T-shirts & Polos', 9), --Men's Fashion Sports Wear
('Trackpants & Trachsuits', 9), 
('Shaving Cream & Gels', 10), --men's Fashion - Men's Grooming
('Sunglasses', 11),  -- Men's fashion Eyewear
('Wallets', 12), --Men's Fashion Accessories
('Belts', 12),
('Hats & Caps', 12),
('Gift Sets', 12),
('Neckties & Cravats', 12),
('Card Holders', 12),
('Keychains', 12),
('Suspenders', 12),
('Perfumes', 13), --Men's Fashion Frangrances
('Deodorants', 13),
('Attars (Non-Alcoholic)', 13),
('Sarees', 16), --Women's Fashion Ethnic wear
('Kurtas & Kurtis', 16),
('Salwar Suits', 16),
('Lehengas', 16),
('Salwar & Leggins', 16),
('Heels', 17), -- Women's Fashion Footwear
('Flats & Sandals', 17),
('Slippers & Flip Flops', 17),
('Ballerinas', 17),
('Shoes', 17),
('Ethnic Footwear', 17),
('Perfumes', 18), --Women's Fashion Perfumes and fragrances
('Deodorants', 18),
('Dresses', 19), -- Women's Fashion western wear
('T- Shirts', 19),
('Shirts', 19),
('Denims & Trousers', 19),
('Pants & Palazzos', 19),
('Outwear & Jackets', 20),  -- Women's Fashion winterwear
('Sweatshirts', 20),
('Catdigans & Pullovers', 20),
('Shrugs & Waistcoats', 20),
('Handbags', 22), -- Women's Fashion Handbags and cluthches
('Wallets', 22),
('Cluches', 22),
('Utility Bags', 22),
('Sunglasses', 23), -- Women's Fashion Eyewear
('Spectacle Frames', 23),
('Necklaces & Sets', 25), --Women's fasion Fashion Jewellery
('Earrings', 25),
('Bangles & Bracelets', 25),
('Pendants & Sets', 25),
('Hair Accessories', 27), --Women's fasion FashionAccessories
('Stoles & Scarves', 27),
('Socks & Stockings', 27)

INSERT INTO Brand VALUES
('Asian', 'Sports Fashion -Running Shoes/Asian Footwear Pvt Ltd, Asian Retail Ventures/NA/NA', 'https://n4.sdlcdn.com/imgs/a/8/p/Asian_Logo-bd8b0.jpg' ),
('FITMonkey', 'Sports Fashion -Running Shoes/KAPIL POLYMERS ,A-198, DSIDC INDUSTRIAL AREA, NARELA, DELHI - 110040/JusCorp Enterprises Private Limited, 207, D.R. Chamber, 12-56 D.B Gupta Road, Karol Bagh, New Delhi, Central Delhi 110005/NA/KAPIL POLYMERS ,A-198, DSIDC INDUSTRIAL AREA, NARELA, DELHI - 110040', 'https://n4.sdlcdn.com/imgs/k/j/b/FITM-a94d0.jpg'),
('UrbanMark','',''),
('Campus','',''),
('Columbus', '', ''),
('Duke', '', ''),
('Stanfield', '', ''),
('JQR', '', ''),
('Liberty', '', ''),
('YUUKI', '', ''),
('Impakto','',''),
('American Religion','',''),
('Nicholas','',''),
('Ajanta','',''),
('ZAYDN','',''),
('YOU LIkE', '', ''),
('1AAROW', '', ''),
('Aqualite','',''),
('Paragon', '',''),
('Buxton', '', ''),
('Aadi', '', ''),
('John Karsun', '', ''),
('Catbird', '', ''),
('Leeport', '' , ''),
('viv', '', ''),
('Big Fox Brown', '', ''),
('Grow', '', ''),
('Trenduty', '', ''),
('Knoos', '' , ''),
('Style Smith', '' ,''),
('Polestar', '', ''),
('SATELLITE', '', ''),
('PAZZO','',''),
('MIKE', '', '')




