create TABLE person(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  surname VARCHAR(225),
);

create TABLE psot(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  content VARCHAR(225),
  user_id INTEGER,
  FOREIGN KEY (user_id) REFERENCES person (id),
);