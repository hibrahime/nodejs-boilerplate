-- initial table and data scripts 
CREATE TABLE IF NOT EXISTS public.test (
	id serial NOT NULL,
    name varchar(250) NOT null,
	CONSTRAINT pkey_test PRIMARY KEY (id)
);

INSERT INTO public.test ("name")
VALUES('Test Record 1'),
    ('Test Record 2');