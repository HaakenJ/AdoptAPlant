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
    // Raw data read from channel 5
    receiveBuffer: Buffer.alloc(3),
    byteLength: 3,
    // Using a lower bus speed to get a better reading.
    speedHz: 20000
  }];
 
  if (err) throw err;
 
  mcp3008.transfer(message, (err, message) => {
    if (err) throw err;
 
    // Get raw data.
    // Date comes in two meaningful bytes and one junk byte.
    // First byte is MSB or Most Significant byte.  Only the right two bits matter.
    // Second byte is LSB or Least Significant byte. All bits matter.
    // We use bitwise 'and' with 3 on the first byte to keep only the first two
    // bits if they are 1's. 
    // We then shift those bits 8 bits to the left (which fills in with 0's).
    // We fill in those 0's with the 8 bits from LSB to get our 10 bit meaningful data.
    const rawValue = ((message[0].receiveBuffer[1] & 0x03) << 8) +
      message[0].receiveBuffer[2];
 
    // TODO: Write code to convert rawData to a percentage.
    // 280 is completely wet, 575 is completely dry.
    console.log(rawValue);
  });
});


// looking like full water is a reading of 280
// full dry is about 575
// It takes a minute or so for the sensor to fullly adjust to being in water.
// adjusts instantly when out of water.