#!/bin/bash
if [ ! -f "./.env" ]; then
    cp ./.env.sample ./.env
fi
if [ ! -f "./comfig.json" ]; then
    cp ./sample.config.json ./config.json
fi 