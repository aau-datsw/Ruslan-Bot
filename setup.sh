#!/bin/bash
if [ ! -f "./.env" ]; then
    cp ./.env.sample ./.env
fi
if [ ! -f "./config.json" ]; then
    cp ./sample.config.json ./config.json
fi 