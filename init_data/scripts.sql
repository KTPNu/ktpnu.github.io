DROP TABLE IF EXISTS members CASCADE;
CREATE TABLE members (
    firstName VARCHAR(100) NOT NULL,
    lastName VARCHAR(100) NOT NULL,
    identikey VARCHAR(100) NOT NULL PRIMARY KEY,
    password CHAR(60) NOT NULL
);

DROP TABLE IF EXISTS events CASCADE;
CREATE TABLE events (
    id BIGINT NOT NULL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    time DATE NOT NULL,
    required BOOLEAN NOT NULL,
    event_type VARCHAR(100) NOT NULL,
    description TEXT,
    pointsWorth BIGINT NOT NULL
);

DROP TABLE IF EXISTS members_to_events CASCADE;
CREATE TABLE members_to_events(
    members_id VARCHAR(100) NOT NULL,
    events_id BIGINT NOT NULL,
    FOREIGN KEY (members_id) REFERENCES members (identikey),
    FOREIGN KEY (events_id)  REFERENCES events (id)
);

DROP TABLE IF EXISTS projects CASCADE;
CREATE TABLE projects(
    id BIGINT NOT NULL PRIMARY KEY,
    numMembers BIGINT NOT NULL,
    deadline DATE NOT NULL,
    description TEXT NOT NULL
);

DROP TABLE IF EXISTS points CASCADE;
CREATE TABLE points(
    id BIGINT NOT NULL PRIMARY KEY,
    coffeechats BIGINT NOT NULL,
    events BIGINT NOT NULL,
    projectGrade BIGINT NOT NULL,
    total BIGINT NOT NULL
);

DROP TABLE IF EXISTS memberdata CASCADE;
CREATE TABLE memberdata(
    picture VARCHAR(100),
    membertype CHAR(1),
    birthday DATE,
    graduationYear VARCHAR(100),
    pledgeclass VARCHAR(100),
    major VARCHAR(100),
    minor VARCHAR(100),
    member_id VARCHAR(100), 
    group_id BIGINT,
    points_id BIGINT,
    firstName VARCHAR(100),
    lastName VARCHAR(100),
    username VARCHAR(100),
    FOREIGN KEY (member_id) REFERENCES members (identikey),
    FOREIGN KEY (group_id) REFERENCES projects (id),
    FOREIGN KEY (points_id) REFERENCES points (id)
);

DROP TABLE IF EXISTS coffeechats CASCADE;
CREATE TABLE coffeechats(
    id BIGINT NOT NULL PRIMARY KEY,
    execName VARCHAR(100) NOT NULL,
    pledgeName VARCHAR(100) NOT NULL,
    pledge_id VARCHAR(100) NOT NULL,
    FOREIGN KEY (pledge_id) REFERENCES members (identikey)
);