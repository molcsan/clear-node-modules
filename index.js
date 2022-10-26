#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const nodeModulesDir = path.resolve(process.cwd(), 'node_modules');

//Delete the node_modules folder
if (fs.existsSync(nodeModulesDir)) {
    fs.rm(nodeModulesDir, { recursive: true, force: true }, err => {
        if (err) {
            throw err
        }

        console.log(`Deleted node modules dir`);
    })
}

// Delete package-lock.json if exists
if (fs.existsSync('package-lock.json')) {
    fs.rm('package-lock.json', err => {
        if (err) {
            throw err
        }

        console.log(`Deleted package-lock.json`);
    })
}