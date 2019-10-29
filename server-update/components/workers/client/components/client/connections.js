'use strict';

/*** exports [begin] ***/

async function connections(connectionLabel) {
	return connections.map.get(connectionLabel);
}

connections.label = 0;
connections.map = new Map();
connections.size = () => connections.map.size;

connections.create = createConnection;
connections.remove = removeConnection;

/*** exports [end] ***/
/*** src [begin] ***/

async function createConnection(connection) {
	connections.map.set(connections.label, connection);
	return connections.label += 1;
}
async function removeConnection(connectionLabel) {
	connections.map.delete(connectionLabel);
}

/*** src [end] ***/

module.exports = connections;