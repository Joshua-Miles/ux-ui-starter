#!/usr/bin/env bash
cd frontend
npm start &
FROND_END_PID=$!
cd ../backend
npm start
kill $FROND_END_PID