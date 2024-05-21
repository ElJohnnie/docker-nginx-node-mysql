# Full Cycle Challenge: Nginx, Node.js, and MySQL Integration

This is the challenge proposed by the FullCycle course, where we explore service integration using Docker.

## Challenge Description

The goal of this challenge is to create an application composed of an Nginx server, a Node.js application, and a MySQL database. When a user accesses the Nginx server, it will make a call to the Node.js application, which will in turn add a record to the MySQL database, registering a name in the "people" table. The response from the Node.js application to Nginx should include a `<h1>Full Cycle Rocks!</h1>` header followed by the list of names registered in the database.

## Requirements

1. The entire application must be available on port 8080.

## How to Run

```
docker-compose up -d --build
```