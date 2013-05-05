var redis = require("redis"),
        client1 = redis.createClient(),
        msg_count = 0;

    client1.on("message", function (channel, message) {
        console.log( channel + ": " + message);
    });

    client1.incr("did a thing");
    client1.subscribe(process.env.REDIS_CHANNEL);