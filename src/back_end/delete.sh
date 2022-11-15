#!/bin/sh
curl -X GET localhost:3000/api/pastes | awk -F '{' '{print $3}' | awk -F"\"" '{print $8}' | xargs -I {} curl -X DELETE localhost:3000/api/{}

