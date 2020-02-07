const spi = require('spi-device');
 
// The MCP3008 is on bus 0 and it's device 0
const mcp3008 = spi.open(0, 0, err => {
  // SPI Message array
  const message = [{
    // Sent to read channel 5
    // First byte is a trigger to let the slave know a message is comming.
    // Second byte is the channel to use.
    // Third byte is junk.
    sendBuffer: Buffer.from([0x01, 0xd0, 0x00]),
    receiveBuffer: Buffer.alloc(3),              // Raw data read from channel 5
    byteLength: 3,
    speedHz: 20000 // Use a low bus speed to get a good reading from the TMP36
  }];
 
  if (err) throw err;
 
  mcp3008.transfer(message, (err, message) => {
    if (err) throw err;
 
    // Convert raw value from sensor to celcius and log to console
    const rawValue = ((message[0].receiveBuffer[1] & 0x03) << 8) +
      message[0].receiveBuffer[2];
    const voltage = rawValue * 3.3 / 1023;
    const celcius = (voltage - 0.5) * 100;
 
    console.log(celcius);
  });
});


// looking like full water is a reading of 280
// full dry is about 575
// It takes a minute or so for the sensor to fullly adjust to being in water.
// adjusts instantly when out of water.