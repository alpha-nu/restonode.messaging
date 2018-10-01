import * as amqp from 'amqplib';
import * as dotenv from 'dotenv';

dotenv.config();

amqp.connect(process.env.AMQP_CONNECTION!).then(async conn => {
    const channel = await conn.createChannel();
    const exchange = process.env.EXCHANGE_NAME!;
    const assertion = await channel.assertExchange(exchange, 'fanout', { durable: false });
    console.log(`TEST PUBLISHER: ${assertion.exchange} exchange asserted.`);

    setInterval(async () => {
        const msg = JSON.stringify({ order: `Hey! fake ordered published @ ${new Date().toLocaleTimeString()}` });
        await channel.publish(exchange, '', Buffer.from(msg));
        console.log('published. ', msg);
    }, 2000);
});