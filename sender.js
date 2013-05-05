var redis = require("redis"),
        client1 = redis.createClient(), client2 = redis.createClient(),
        msg_count = 0;

    client1.on("subscribe", function (channel, count) {
       setInterval(function() {
            client2.publish(process.env.REDIS_CHANNEL, "Ping Message");
        }, Math.floor(Math.random()*101));
    });
    
    client1.subscribe(process.env.REDIS_CHANNEL);