'use strict';

/*** exports [begin] ***/

async function connections(connectionLabel) {
	return connections.map.get(connectionLabel);
}

connections.label = 0;
connections.map = new Map();
connections.size = () => connections.map.size;

connections.add = addConnection;
connections.remove = removeConnection;

/*** exports [end] ***/
/*** src [begin] ***/

async function addConnection(connection) {
	connections.map.set(connections.label, connection);
	return connections.label += 1;
}
async function removeConnection(connectionLabel) {
	connections.map.delete(connectionLabel);
}

/*** src [end] ***/

module.exports = connections;