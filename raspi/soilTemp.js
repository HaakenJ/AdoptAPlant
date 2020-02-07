const spi = require('spi-device');
 
// The MCP3008 is on bus 0 and it's device 0
const mcp3008 = spi.open(0, 0, err => {
  // An SPI message is an array of one or more read+write transfers
  const message = [{
    sendBuffer: Buffer.from([0x01, 0xd0, 0x00]), // Sent to read channel 5
    receiveBuffer: Buffer.alloc(3),              // Raw data read from channel 5
    byteLength: 3,
    speedHz: 50000 // Use a low bus speed to get a good reading from the TMP36
  }];
 
  if (err) throw err;
 
  mcp3008.transfer(message, (err, message) => {
    if (err) throw err;
 
    // Convert raw value from sensor to celcius and log to console
    const rawValue = ((message[0].receiveBuffer[1] & 0x03) << 8) +
      message[0].receiveBuffer[2];
    console.log(rawValue);
//    const voltage = rawValue * 3.3 / 1023;
//    const celcius = (voltage - 0.5) * 100;
// 
//    console.log(celcius);
  });
});





// const rpio = require("rpio");

// rpio.spiBegin();

// // Prepare TX buffer [trigger byte = 0x01] [channel 0 = 0x80 (128)] [dummy data = 0x01]
// const sendBuffer = new Buffer([0x01, (8 + 0 << 4), 0x01]);


// // Send TX buffer to SPI MOSI and receive RX buffer from MISO
// const receiveBuffer = rpio.spiTransfer(sendBuffer, sendBuffer.length);

// // Extract value from output buffer. Ignore fist byte (junk byte)
// const junk = receiveBuffer[0],
//     MSB = receiveBuffer[1],
//     LSB = receiveBuffer[2];

// // Ignore first six bits of MSB, bit shift MSB 8 positions and
// // combine LSB with MSB to get a full 10 bit value
// // MSB & 3 will keep only the last 2 bits if they are 1's
// // << 8 will move the two 1 bits over 8 spaces and fill those spaces with 0's
// // adding the 8 bits from LSB will fill in those eight 0 bits.
// const value = ((MSB & 3) << 8) + LSB;

// console.log(`ch ${(sendBuffer[1] >> 4) - 8} = ${value}`);
