const rpio = require("rpio");

rpio.spiBegin();

// Prepare TX buffer [trigger byte = 0x01] [channel 0 = 0x80 (128)] [dummy data = 0x01]
const sendBuffer = new Buffer([0x01, (8 + 0 << 4), 0x01]);


// Send TX buffer to SPI MOSI and receive RX buffer from MISO
const receiveBuffer = rpio.spiTransfer(sendBuffer, sendBuffer.length);

// Extract value from output buffer. Ignore fist byte (junk byte)
const junk = receiveBuffer[0],
    MSB = receiveBuffer[1],
    LSB = receiveBuffer[2];

// Ignore first six bits of MSB, bit shift MSB 8 positions and
// combine LSB with MSB to get a full 10 bit value
// MSB & 3 will keep only the last 2 bits if they are 1's
// << 8 will move the two 1 bits over 8 spaces and fill those spaces with 0's
// adding the 8 bits from LSB will fill in those eight 0 bits.
const value = ((MSB & 3) << 8) + LSB;

console.log(`ch ${(sendBuffer[1] >> 4) - 8} = ${value}`);