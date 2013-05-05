Redis Workers

A comparison of different languages running as queue workers off of a Redis Pub/Sub Queue

REDIS_CHANNEL=Some Channel

To Run:
foreman start

To Run with Multiple Workers
foreman start -c sender=10,worker=3,py-worker=4


