create DATABASE APP

create table patient (
    PatientId int PRIMARY Key IDENTITY(1,1),
    firstName VARCHAR(100),
    lastName VARCHAR(100),
    age int,
    gender VARCHAR(100),
    dob VARCHAR(100),
    phone VARCHAR(1000)
)


SELECT * from patient
