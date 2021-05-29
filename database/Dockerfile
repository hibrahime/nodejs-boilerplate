# Base potgres image postgres:13.3-alpine 
FROM postgres:13.3-alpine

# If you would like to do additional initialization in an image derived from this one, add one or more *.sql, *.sql.gz, or *.sh scripts under /docker-entrypoint-initdb.d (creating the directory if necessary).
COPY ./database/psql_init_table_dump.sql /docker-entrypoint-initdb.d/