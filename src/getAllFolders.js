const fs = require( 'fs' );

function getAllFolders ( path ) {
	let folders = {};
	fs.readdirSync( path ).forEach( file => {
		let pathOfCurrentItem = path + file;
		let stat = fs.statSync( pathOfCurrentItem );
		if ( stat.isDirectory() ) {
			folders[ file ] = pathOfCurrentItem;
		}
	} );
	return folders;
}

module.exports = {
	getAllFolders
};
