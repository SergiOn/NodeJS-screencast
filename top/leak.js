function Request() {
    this.bigData = new Array(1e6).join('*');

    this.send = (data) => {
        console.log(data);
    };

    this.onError = () => {
        this.send('sorry, we have some problem')
    }
}

setInterval(() => {
    const request = new Request();
    console.log(process.memoryUsage().heapUsed);
}, 200);