CREATE DATABASE servo_app;

CREATE TABLE stations (
    id SERIAL PRIMARY KEY,
    featuretype text,
    description text,
    class text,
    stationid SERIAL,
    name text,
    operational text,
    owner text,
    industryid text,
    address text,
    suburb text,
    state text,
    spatialconfidence integer,
    revised text,
    comment text,
    latitude numeric,
    longtitude numeric
);

\copy stations FROM '/Users/leochu/sei/code-along/project3/db/stations.csv' DELIMITER ',' CSV HEADER;
