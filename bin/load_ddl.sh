#!/bin/bash

cat database/init.sql | docker-compose exec -T mysql mysql --user=root --password=rootpassword