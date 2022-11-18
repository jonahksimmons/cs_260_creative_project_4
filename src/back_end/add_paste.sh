#!/bin/sh
curl -X POST -d '{"title":"funny", "contents":"text with stuff"}' -H "Content-Type: application/json" localhost:3000/api/new

echo "GET:"
curl -X GET localhost:3000/api/pastes

