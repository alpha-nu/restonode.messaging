import * as amqp from 'amqplib';
import * as dotenv from 'dotenv';
import sampleOrder from './sampleOrder';

dotenv.config();

amqp.connect(process.env.AMQP_CONNECTION!).then(async conn => {
    const channel = await conn.createChannel();
    const exchange = process.env.EXCHANGE_NAME!;
    const assertion = await channel.assertExchange(exchange, 'fanout', { durable: false });
    console.log(`TEST PUBLISHER: ${assertion.exchange} exchange asserted.`);

    setInterval(async () => {
        const msg = JSON.stringify(sampleOrder);
        await channel.publish(exchange, '', Buffer.from(msg));
        console.log(`@${new Date().toLocaleString()} `, msg);
    }, 5000);
}).error(_ => console.log(_.toString()));
