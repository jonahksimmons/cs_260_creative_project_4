#!/bin/sh
curl -X POST -d '{"title":"leak", "contents":"all your base are belong to us"}' -H "Content-Type: application/json" localhost:3000/api/new

echo "GET:"
curl -X GET localhost:3000/api/pastes

