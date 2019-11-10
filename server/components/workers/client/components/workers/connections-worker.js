'use strict';

/*** exports [begin] ***/

function createConnectionsWorker() {
	async function connections(connectionLabel) {
		return connections.map.get(connectionLabel);
	}
	
	connections.label = 0;
	connections.map = new Map();
	connections.size = () => connections.map.size;
	
	connections.add = (connection) => {
		connections.map.set(connections.label, connection);
		return connections.label += 1;
	};
	connections.remove = (connectionLabel) => {
		connections.map.delete(connectionLabel);
	};
	
	return connections
}

/*** exports [end] ***/

module.exports = createConnectionsWorker;