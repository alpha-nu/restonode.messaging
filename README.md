# restonode.messaging

The messaging module in restonode architecture is based on the **publish/subscribe** model.

restonode.api is the *producer*
customer notifier and restaurant notifier services are the two *consumers*

In *RabbitMQ* architecture:

* the *publisher* emits an order to a **fanout exchange**
* the exchange is bound to two *durable* and *exclusive* queues, one for customer SMS messages and the other for restaurant email notifications 
* the two consumer services subscribe to their respective queues, receive **exactly** the same order and process it accordingly.

## Customer Notification
Is a queue subscriber that received a json structure representing the order that was submitted via `restonode.api` the service simply logs its received messages to the console.

to run:
```shell
yarn customer-notifier
```
## Setup
I assume that there is a running node on a RabbitMQ server. the **amqp** connection string must be present in the **.env** file which also contains the following environment variables. A sample **.env.example** file is provided as a guide.

```shell
AMQP_CONNECTION=
EXCHANGE_NAME='orders'
CUSTOMER_NOTIFICATION_QUEUE='customers'
RESTAURANT_NOTIFICATION_QUEUE='restaurants'
```
## Restaurant Notification
Is a queue subscriber that received a json structure representing the order that was submitted via `restonode.api` the service simply logs its received messages to the console.

to run:
```shell
yarn customer-notifier
```

## Test Publisher
To test the sanity of the RabbitMQ installation and that the messaging module works correctly and independently of the rest of the solution, a test message *producer* is included.
```shell
yarn test-publisher
```
Once run, it will emit a new order with the same JSON structure as it would be received from the restonode.api.

The two running consumers should log the results or processing that test order to the console.

