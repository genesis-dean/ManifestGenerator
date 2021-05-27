const { readFilesInFolder } = require( './src/readFilesInFolder' );
const { getAllFolders } = require( './src/getAllFolders' );
const { genManifestFile } = require( './src/genManifestFile' );

const { TARGET_PATH } = require( './src/constant' );

let filesList = {};
const allTargets = getAllFolders( TARGET_PATH );
console.group( 'Process Game List' );
console.log( allTargets );
console.log();
console.groupEnd( 'Process Game List' );

let all = Object.getOwnPropertyNames( allTargets );
all.forEach( target => {
	let oneOfList = readFilesInFolder( allTargets[ target ] );
	filesList[ target ] = oneOfList;
} );

let directory = Object.getOwnPropertyNames( filesList );
directory.forEach( dir => {
	genManifestFile( filesList[ dir ], dir );
} )

console.group( 'Done' );
console.log( 'Please check your output files on dist folder' );
console.groupEnd( 'Done' );
