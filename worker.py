import redis, os, inspect

connection_pool = redis.ConnectionPool()
client = redis.Redis(connection_pool=connection_pool)
pubsub = client.pubsub()
pubsub.subscribe(os.environ.get('REDIS_CHANNEL'))

while(True):
    print "Listening"
    messages = pubsub.listen()
    if (messages is not None):
        print "WTF"
        for message in messages:
            print(message['data'])