const express = require("express");
const db = require("./init_data/postgres");
const app = express();
const pgp = require("pg-promise")();

db.connect()
    .then((obj) => {
        console.log("Database connection successful"); // you can view this message in the docker compose logs
        obj.done(); // success, release the connection;
    })
    .catch((error) => {
        console.log("ERROR:", error.message || error);
    });

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

const port = 3000;
app.listen(port, async () => {
    console.log(`Server is running on port ${port}`);

    try {
        // members insert
        await db.any(
            `INSERT INTO members (identikey, firstname, lastname, nickname, email, phone) 
            VALUES ('maka2202', 'Matayay', 'Karuna', 'Tai', 'maka2202@colorado.edu', '(719)-480-1645');`
        );

        // points insert
        await db.any(
            `INSERT INTO points (id, coffeechats, events, projectGrade, total)
            VALUES (1, 8, 10, 85, 103);`
        );

        // projects insert
        await db.any(
            `INSERT INTO projects (id, numMembers, deadline, description) 
            VALUES (1, 4, '2023-11-27', 'Database for the KTP portal');`
        );

        // member_data insert
        await db.any(
            `INSERT INTO memberdata (id, picture, membertype, birthday, graduationDate, pledgeClass, major, member_id, group_id, points_id)
            VALUES (1, 'example.jpg', 'P', '2003-11-13', '2026-05-10', 'Alpha', 'Computer Science', 'maka2202', 1, 1);`
        );

        // events insert
        await db.any(
            `INSERT INTO events (id, name, time, required, event_type, pointsWorth)
            VALUES (1, 'Pledge Meeting #1', '2023-10-02', 'true', 'technical', 1);`
        );
        await db.any(
            `INSERT INTO events (id, name, time, required, event_type, pointsWorth)
            VALUES (2, 'Pledge Meeting #2', '2023-10-09', 'true', 'technical', 1);`
        );
        await db.any(
            `INSERT INTO events (id, name, time, required, event_type, pointsWorth)
            VALUES (3, 'Pledge Meeting #3', '2023-10-16', 'true', 'technical', 1);`
        );
        await db.any(
            `INSERT INTO events (id, name, time, required, event_type, pointsWorth)
            VALUES (4, 'Pledge Meeting #4', '2023-10-23', 'true', 'technical', 1);`
        );
        await db.any(
            `INSERT INTO events (id, name, time, required, event_type, pointsWorth)
            VALUES (5, 'Pledge Meeting #5', '2023-10-30', 'true', 'technical', 1);`
        );
        await db.any(
            `INSERT INTO events (id, name, time, required, event_type, pointsWorth)
            VALUES (6, 'Pledge Meeting #6', '2023-11-06', 'true', 'technical', 1);`
        );
        await db.any(
            `INSERT INTO events (id, name, time, required, event_type, pointsWorth)
            VALUES (7, 'Pledge Meeting #7', '2023-11-13', 'true', 'technical', 1);`
        );
        await db.any(
            `INSERT INTO events (id, name, time, required, event_type, pointsWorth)
            VALUES (8, 'Pledge Meeting #8', '2023-11-27', 'true', 'technical', 1);`
        );
        await db.any(
            `INSERT INTO events (id, name, time, required, event_type, description, pointsWorth)
            VALUES (9, 'Chautauqua Hike', '2023-10-21', 'false', 'social', 'Hiked the flatiron loop at chautauqua trail', 1);`
        );
        await db.any(
            `INSERT INTO events (id, name, time, required, event_type, pointsWorth)
            VALUES (10, 'KTP Party', '2023-11-10', 'false', 'social', 1);`
        );

        // members_to_events insert
        await db.any(
            `INSERT INTO members_to_events (members_id, events_id)
            VALUES ('maka2202', 1);`
        );
        await db.any(
            `INSERT INTO members_to_events (members_id, events_id)
            VALUES ('maka2202', 2);`
        );
        await db.any(
            `INSERT INTO members_to_events (members_id, events_id)
            VALUES ('maka2202', 3);`
        );
        await db.any(
            `INSERT INTO members_to_events (members_id, events_id)
            VALUES ('maka2202', 4);`
        );
        await db.any(
            `INSERT INTO members_to_events (members_id, events_id)
            VALUES ('maka2202', 5);`
        );
        await db.any(
            `INSERT INTO members_to_events (members_id, events_id)
            VALUES ('maka2202', 6);`
        );
        await db.any(
            `INSERT INTO members_to_events (members_id, events_id)
            VALUES ('maka2202', 7);`
        );
        await db.any(
            `INSERT INTO members_to_events (members_id, events_id)
            VALUES ('maka2202', 8);`
        );
        await db.any(
            `INSERT INTO members_to_events (members_id, events_id)
            VALUES ('maka2202', 9);`
        );
        await db.any(
            `INSERT INTO members_to_events (members_id, events_id)
            VALUES ('maka2202', 10);`
        );

        // coffeechats insert
        await db.any(
            `INSERT INTO coffeechats (id, execName, pledgeName, pledge_id)
            VALUES (1, 'Hannah Yoon', 'Matayay Karuna', 'maka2202');`
        );
        await db.any(
            `INSERT INTO coffeechats (id, execName, pledgeName, pledge_id)
            VALUES (2, 'Jaden Snell', 'Matayay Karuna', 'maka2202');`
        );
        await db.any(
            `INSERT INTO coffeechats (id, execName, pledgeName, pledge_id)
            VALUES (3, 'Ali Haroon', 'Matayay Karuna', 'maka2202');`
        );
        await db.any(
            `INSERT INTO coffeechats (id, execName, pledgeName, pledge_id)
            VALUES (4, 'Will Dravenstott', 'Matayay Karuna', 'maka2202');`
        );
        await db.any(
            `INSERT INTO coffeechats (id, execName, pledgeName, pledge_id)
            VALUES (5, 'Daniil Garusov', 'Matayay Karuna', 'maka2202');`
        );
        await db.any(
            `INSERT INTO coffeechats (id, execName, pledgeName, pledge_id)
            VALUES (6, 'Wes Allen', 'Matayay Karuna', 'maka2202');`
        );
        await db.any(
            `INSERT INTO coffeechats (id, execName, pledgeName, pledge_id)
            VALUES (7, 'Audrey Deck', 'Matayay Karuna', 'maka2202');`
        );
        await db.any(
            `INSERT INTO coffeechats (id, execName, pledgeName, pledge_id)
            VALUES (8, 'Will Van Vuuren', 'Matayay Karuna', 'maka2202');`
        );

        console.log("Insert successful");
    } catch (err) {
        console.log(err);
    }
});