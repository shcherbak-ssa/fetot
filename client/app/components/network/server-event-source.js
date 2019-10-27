'use strict';

/*** exports [begin] ***/

async function initServerEventSource(client) {
	return new Promise((success, error) => {
		let serverEventSource = createServerEventSource(`/event-source.${client}`);
		serverEventSource.on('open', () => {
			success( serverEventSource )
		})
	})
}

/*** exports [end] ***/
/*** src [begin] ***/

function createServerEventSource(url) {
	return {
		eventSource: new EventSource(url),
		on(event, handler) {
			this.eventSource.addEventListener(event, handler);
		}
	}
}

/*** src [end] ***/

export default initServerEventSource;