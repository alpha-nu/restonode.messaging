import * as amqp from 'amqplib';
import * as dotenv from 'dotenv';

dotenv.config();

export const subscribe = (queueName: string, onMessage: (msg: amqp.Message | null) => void) => {
    amqp.connect(process.env.AMQP_CONNECTION!).then(async conn => {
        const channel = await conn.createChannel();

        const exchange = process.env.EXCHANGE_NAME!;
        const assertion = await channel.assertExchange(exchange, 'fanout', { durable: false });
        console.log(`${assertion.exchange} exchange asserted.`);

        const q = await channel.assertQueue(queueName, { exclusive: true, durable: true });
        console.log('waiting for messages on: ', q.queue);
        await channel.bindQueue(q.queue, exchange, '');

        await channel.consume(q.queue, onMessage, { noAck: true });
    }).error(_ => console.log(_.toString()));
};

export const toJson = (message: amqp.Message) => JSON.parse(message.content.toString('utf-8'));
