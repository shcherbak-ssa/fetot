'use strict';

/*** exports [begin] ***/

function createConnectionsWorker() {
	const connectionsCollection = new Map();
	let label = 0;
	
	async function connections(connectionLabel) {
		return connectionsCollection.get(+connectionLabel);
	}
	
	connections.size = () => {
		return connectionsCollection.size;
	};
	connections.add = (connection) => {
		connectionsCollection.set(label += 1, connection);
		return label;
	};
	connections.remove = (connectionLabel) => {
		connectionsCollection.delete(connectionLabel);
	};
	
	return connections
}

/*** exports [end] ***/

module.exports = createConnectionsWorker;