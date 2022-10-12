create table address (
	OID INT,
	StreetAddressOne VARCHAR(50),
	StreetAddressTwo VARCHAR(50),
	State VARCHAR(50),
	Country VARCHAR(50),
	Zip VARCHAR(10)
);
insert into address (OID, StreetAddressOne, StreetAddressTwo, State, Country, Zip) values (1, '0 Fremont Street', null, 'Nevada', 'United States', '60795');
insert into address (OID, StreetAddressOne, StreetAddressTwo, State, Country, Zip) values (2, '247 Stone Corner Street', '123 Grove Road', 'Connecticut', 'United States', '44995');
insert into address (OID, StreetAddressOne, StreetAddressTwo, State, Country, Zip) values (3, '409 Di Loreto Point', null, 'Texas', 'United States', '85471');
insert into address (OID, StreetAddressOne, StreetAddressTwo, State, Country, Zip) values (4, '38 Gulseth Lane', null, 'Texas', 'United States', '78916');
insert into address (OID, StreetAddressOne, StreetAddressTwo, State, Country, Zip) values (5, '35 Golf View Street', null, 'Arizona', 'United States', '70529');