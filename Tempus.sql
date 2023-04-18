show databases;
create database Tempus;
use Tempus;
show tables;
create table customerBasic ( cid int unique not null, 
							fname varchar(20),
                            lname varchar(20),
                            sex char(1), -- m or f
                            -- email varchar(40),
                            -- mailingAddress varchar(100),
                            comments text,
                            image blob);
                            
create table customerEmail ( cid int not null,
							 email varchar(40)
                             );
                             
create table customerPhone ( cid int not null,
							 number int 
                             );

                             
create table customerMailingAddresses ( cid int not null,
										locality varchar(30),
                                        pincode int,
                                        city varchar(35),
                                        state varchar(25)
                                        );

-- this table keeps track of the inventory to be sold
create table productsToSell (pid int unique not null,
							 name int unique not null,
                             quantityType varchar(35), -- box bottle case litre etc
                             category varchar(35), -- can add product category , customisable
                             Barcode char(13) unique, -- standard length barcodes are this length
                             Buyingcost int,
                             stockAvailable int, -- units will be from the quantityType
                             sellingPrice int, 
                             notes text);
							
create table productImages ( pid int not null,
							 image blob);
                            

create table productsBought ( sid int unique not null, -- supplier id
							 quantityType varchar(35), -- box bottle case litre etc
                             category varchar(35), -- can add product category , customisable
                             Barcode char(13) unique, -- standard length barcodes are this length
                             Buyingcost int,
                             stockAvailable int, -- units will be from the quantityType
                             sellingPrice int, 
                             DateOfPurchase date,
                             notes text);
                             
							  
create table suppliersBasicInfo ( sid int unique not null, 
						 businessname int not null,
                         contactPersonName varchar(34)
                         );

create table supplierAddress ( sid int not null,
								locality varchar(30),
								pincode int,
								city varchar(35),
								state varchar(25)
								);
								  
create table supplierPhone ( sid int not null,
							 number int 
                             );                         

-- table keeps track of expenses to the business
create table expense ( name varchar(45),
						category varchar(45),
                        DateofExpenditure date,
                        cost int
                        );

create table employeeInfo ( eid int unique not null,
							Fname varchar(20),
                            lname varchar(20),
                            sex char(1),
                            employeePhone char(10),
                            emergencyContact char(10),
                            highestQualification varchar(30),
                            Salary int,
                            startDate date,
                            endDate date,
                            image blob
                            );
                            

create table sale( saleid int unique not null,
					Pid int not null,
					salePrice int,
					discount float, -- float
					tax float, -- float
					timeOfCompletion datetime,
					shippingCost int,
					image blob
                      );
                      
-- this table keeps track of sales made
create table sales( saleid int unique not null,
					pid int unique not null,
					soldPrice int
					); 
                    
                    
-- All the relations henceforth are for freelancers
create table clientInfo ( clid int unique not null,
							nameOrCompanyName varchar(30),
                            
                            
                            contactPersonName varchar(50)
						);

create table clientContact ( clid int not null,
							 number int
                             );
                             
create table clientMail ( clid int not null,
					      email varchar(50)
						);  
					
create table clientAddresses ( clid int not null,
							   Address varchar(70) 
							  ); 

create table projectInfo ( pid int unique not null,
						   clid int
                           );
-- this tracks all task
create table taskList ( tid int unique not null,
						pid int,
                        status varchar(15), -- will add 6 or so options to choose from
                        thisOrThat int, -- 1(task based pay) or 2(hourly pay)
                        price int, -- price per task/ or per hour
                        description text,
                        deadline dateTime
                        );
                        
                            
-- the below relation ought to help in finding money earned
-- from those tasks that are paid per hour								
create table timingTasks( tid int not null,
                          startTime datetime,
                          endtime datetime
                          );


show tables; 
                     
					