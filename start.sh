#!/bin/bash
rm ./log/ -rf
mkdir ./log/
cd ./pub/ && nodemon -w '.' -e 'html, js' server.js dev > ../log/nodemon.log &
