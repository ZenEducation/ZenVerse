import { copyFile } from 'node:fs/promises';

const SOURCE_PATH_1 = './Zen Extras/customBuild/fabric.js'
const SOURCE_PATH_2 = './Zen Extras/customBuild/fabric.min.js'
const DEST_PATH_1 = './node_modules/fabric/dist/fabric.js'
const DEST_PATH_2 = './node_modules/fabric/dist/fabric.min.js'


async function _copyFiles(source, destination) {
    try {
        await copyFile(source, destination);
        console.log('Custom Build files copied successfully');
        console.log(`${source} copied to ${destination}\n`);
    } catch {
        console.error('The file could not be copied');
    }
}

_copyFiles(SOURCE_PATH_1, DEST_PATH_1)
_copyFiles(SOURCE_PATH_2, DEST_PATH_2)
