CREATE TABLE IF NOT EXISTS users (
    email VARCHAR(230) PRIMARY KEY,
    userName VARCHAR(230),
    avatar bytea
);

CREATE TABLE IF NOT EXISTS projects (
    email VARCHAR(230) PRIMARY KEY,
    project VARCHAR(230),
    


)

CREATE TABLE IF NOT EXISTS issues (
    email VARCHAR(230) PRIMARY KEY,
    issues VARCHAR(230), 
    issueStatus VARCHAR(230),
    comment VARCHAR(230),
    FOREIGN KEY(project)


)
