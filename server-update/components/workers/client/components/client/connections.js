'use strict';

/*** exports [begin] ***/

async function connections(connectionNumber) {
	return connections.map.get(connectionNumber);
}

connections.count = 0;
connections.map = new Map();
connections.size = () => connections.map.size;

connections.append = appendConnection;
connections.remove = removeConnection;

/*** exports [end] ***/
/*** src [begin] ***/

async function appendConnection(connection) {
	connections.map.set(connections.count++, connection);
}
async function removeConnection(connectionNumber) {
	connections.map.delete(connectionNumber);
}

/*** src [end] ***/

module.exports = connections;