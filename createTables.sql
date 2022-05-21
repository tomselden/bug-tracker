use development;

CREATE TABLE IF NOT EXISTS users (
    email VARCHAR(230) PRIMARY KEY,
    userName VARCHAR(230),
    avatar bytea
);


CREATE TABLE IF NOT EXISTS projects (
    project VARCHAR(230) PRIMARY KEY,
    email VARCHAR(230),
    issue VARCHAR(230), 
    issueStatus VARCHAR(230),
    comment VARCHAR(230),
    FOREIGN KEY(email),
    REFERENCES USERS(email)
    


);


