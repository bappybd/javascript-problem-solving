class EventEmitter {
    
    events = {};

    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
	subscribe(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = new Set();
        }

        this.events[eventName].add(callback);

		return {
			unsubscribe: () => {
				this.events[eventName].delete(callback);
			}
		};
	}
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
	emit(eventName, args = []) {
        const output = [];
        (this.events[eventName] ?? [])
            .forEach(callback => {
                output.push(callback(...args));
            });
        if (this.events[eventName] && this.events[eventName].length) {
            for(const fn of this.events[eventName]) {
                output.push(fn(...args));
            }
        }

        return output;
	}
}


const emitter = new EventEmitter();

// Subscribe to the onClick event with onClickCallback
function onClickCallback() { return 99 }
const sub = emitter.subscribe('onClick', onClickCallback);

console.log(emitter.emit('onClick')); // [99]
sub.unsubscribe(); // undefined
console.log(emitter.emit('onClick')); // []
