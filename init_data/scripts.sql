DROP TABLE IF EXISTS members CASCADE;

CREATE TABLE members (
    identikey BIGINT NOT NULL PRIMARY KEY,
    firstName VARCHAR(100) NOT NULL,
    lastName VARCHAR(100) NOT NULL,
    nickName VARCHAR(100),
    email VARCHAR (100) NOT NULL,
    phone CHAR(14) NOT NULL
);

DROP TABLE IF EXISTS events CASCADE;

CREATE TABLE events (
    id BIGINT NOT NULL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    pointsWorth BIGINT

);

DROP TABLE IF EXISTS members_to_events CASCADE;

CREATE TABLE members_to_events(
    members_id BIGINT NOT NULL,
    events_id BIGINT NOT NULL,
    FOREIGN KEY (members_id) REFERENCES members (identikey),
    FOREIGN KEY (events_id)  REFERENCES events (id)
);


DROP TABLE IF EXISTS projects CASCADE;

CREATE TABLE projects(
    id BIGINT NOT NULL PRIMARY KEY,
    numMembers BIGINT NOT NULL,
    deadline DATE,
    description TEXT
);

DROP TABLE IF EXISTS points CASCADE;

CREATE TABLE points(

    id BIGINT NOT NULL PRIMARY KEY,
    coffeechats BIGINT NOT NULL,
    events BIGINT NOT NULL,
    projectGrade BIGINT NOT NULL,
    total BIGINT NOT NULL,
    pledge_id BIGINT NOT NULL,
    FOREIGN KEY (pledge_id) REFERENCES members (identikey)

);

DROP TABLE IF EXISTS memberdata CASCADE;

CREATE TABLE memberdata(
    id BIGINT NOT NULL PRIMARY KEY,
    membertype CHAR(1),
    birthday DATE,
    graduationDate DATE,
    pledgeclass DATE,
    major VARCHAR(100),
    member_id BIGINT NOT NULL, 
    group_id BIGINT NOT NULL,
    points_id BIGINT NOT NULL,
    FOREIGN KEY (member_id) REFERENCES members (identikey),
    FOREIGN KEY (group_id) REFERENCES projects (id),
    FOREIGN KEY (points_id) REFERENCES points (id)
);


DROP TABLE IF EXISTS coffeechats CASCADE;

CREATE TABLE cofeechats(

    id BIGINT NOT NULL PRIMARY KEY,
    execName VARCHAR(100) NOT NULL,
    pledgeName VARCHAR(100) NOT NULL,
    pledge_id BIGINT NOT NULL,
    FOREIGN KEY (pledge_id) REFERENCES members (identikey)
);
