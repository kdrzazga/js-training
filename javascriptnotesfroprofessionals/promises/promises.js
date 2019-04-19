const promise = new Promise((resolve, reject) => {
    // Perform some work (possibly asynchronous)
    if (true/* Work has successfully finished and produced "value" */) {
        resolve(value);
    } else {
        // Something went wrong because of "reason"
        // The reason is traditionally an Error object, although
        // this is not required or enforced.

        let reason = new Error(message);
        reject(reason);
        // Throwing an error also rejects the promise.
        throw reason;
    }
});

