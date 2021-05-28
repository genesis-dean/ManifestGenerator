const fs = require( 'fs' );

const { TARGET_PATH, OUTPUT_PATH, OUTPUT_FILE } = require( './constant' );
const config = require( '../config.json' );

function genManifestFile ( fileList, folderName ) {
	let data = '';
	let totalSize = 0;
	fileList.forEach( item => {
		totalSize += item.size;
		data += `${ item.md5 } ${ item.path.slice( TARGET_PATH.length ) }\n`
	} );

	// Concat data
	let output = `# gamedirectory: ${ folderName }\n`;
	output += `# size: ${ totalSize }\n`;
	output += `# releasedir: ${ config.releaseDate }\n`;
	output += `# filecount: ${ fileList.length }\n`;
	output += `# generatedby: manifestGenerator \n`
	output += data;

	outputPath = `${ OUTPUT_PATH }/${ folderName }`;
	// Create folder
	if ( !fs.existsSync( outputPath ) ) {
		fs.mkdirSync( outputPath );
	}

	// Write to file
	fs.writeFile( `${ outputPath }/${ OUTPUT_FILE }`, output, function ( err, data ) {
		if ( err ) {
			return console.log( err );
		}
	} );
}

module.exports = {
	genManifestFile
};
