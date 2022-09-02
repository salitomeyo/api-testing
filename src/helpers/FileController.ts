const fs = require('fs');

export class FileController {
    async createFile( path: string, data: string ) {
        await fs.writeFileSync( path, data );
    }

    async writeInFile( path: string ) {
    }

    async deleteFile() {

    }

    readFile( path: string ) {
        const data = fs.readFileSync( path, {encoding:'utf8', flag:'r'} );

        return data;
    }
}