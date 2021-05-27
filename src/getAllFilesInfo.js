const md5File = require( 'md5-file' );
const fs = require( 'fs' );

const ignoreFiles = [ '.DS_Store' ];

function getAllFilesInfo ( dir, result ) {
	fs.readdirSync( dir ).forEach( file => {
		let fullFilePath = dir + '/' + file;
		let stat = fs.statSync( fullFilePath );
		if ( stat.isFile() ) {
			if ( isIgnoreFiles( file ) ) {
				let fileInfo = {
					path: fullFilePath,
					md5: md5File.sync( fullFilePath ),
					size: stat.size
				}

				result.push( fileInfo );
			}
		} else {
			getAllFilesInfo( fullFilePath, result );
		}
	} );
}

function isIgnoreFiles ( fileName ) {
	return !ignoreFiles.includes( fileName );
}

module.exports = {
	getAllFilesInfo
};
