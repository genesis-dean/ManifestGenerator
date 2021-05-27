const { getAllFilesInfo } = require( './getAllFilesInfo' );

function readFilesInFolder ( dir ) {
	let result = [];
	getAllFilesInfo( dir + '/HTML5', result );
	return result;
}

module.exports = {
	readFilesInFolder
};
