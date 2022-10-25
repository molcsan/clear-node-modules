const fs = require('fs');
const path = require('path');

const currentDir = __dirname;
const nodeModulesDir = path.resolve(currentDir, 'node_modules');

//Delete the node_modules folder
if (fs.existsSync(nodeModulesDir)) {
    fs.rm(nodeModulesDir, { recursive: true, force: true }, err => {
        if (err) {
            throw err
        }

        console.log(`${nodeModulesDir} is deleted!`)
    })
}