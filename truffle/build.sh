#!/usr/bin/env bash

truffle compile
rm ../src/SignDocument.js
cp build/contracts/SignDocument.json ../src/SignDocument.js
sed -i '1iexport default' ../src/SignDocument.js