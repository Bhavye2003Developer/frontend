import * as fs from 'node:fs';


let isTab = 0
function listFiles(path) {
    const files = fs.readdirSync(path)

    files.forEach(file => {
        let currPath = path + file
        if (fs.lstatSync(currPath).isDirectory()) {
            currPath += "/"
            console.log(`${" ".repeat(isTab)}${file}`)
            ++isTab
            listFiles(currPath)
            --isTab
        }
        else {
            console.log(`${"  ".repeat(isTab)}${file}`)
        }
    })
}


listFiles("./")