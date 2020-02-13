const spi = require('spi-device');

// This script will read the soil moisture sensor.  It will return a promise
// that will resolve with the soil's moisture content as a percentage.

function readSoilMoisture() {
  return new Promise((resolve, reject) => {
    // The MCP3008 is on bus 0 and it's device 0
    const mcp3008 = spi.open(0, 0, err => {
      // SPI Message array
      const message = [{
        // Sent to read channel 5
        // First byte is a trigger to let the slave know a message is comming.
        // First byte is always set to 1.
        // Second byte is the channel to use.
        //     - To read from channel 0 we pass 8 (1000) but these bits need to
        //     be located in the first four bits of the byte.  So we shift them
        //     to the left by 4 bits (<< 4). Each channel we go above 0 will 
        //     add 1 to 8.  Hence, if we want channel 5 then we add 8 + 5 then
        //     shift the result 4 bits to the left.
        //     8 + 5 === 00001000 + 00000101 === 00001101
        //     13 << 4 === 00001101 << 4 === 11010000 === 208 === channel 5
        // Third byte is junk (needs to be present but is ignored)
        sendBuffer: Buffer.from([0x01, ((8 + 5) << 4), 0x00]),
        // Raw data read from channel 5
        receiveBuffer: Buffer.alloc(3),
        byteLength: 3,
        // Using a lower bus speed (in MHz) to get a better reading.
        // TODO: Will adjust this to see what gets most accurate values
        speedHz: 20000
      }];

      if (err) reject(err);

      mcp3008.transfer(message, (err, message) => {
        if (err) reject(err);

        // Get raw data.
        // Data comes in two meaningful bytes and one junk byte.
        // First byte is MSB or Most Significant byte.  Only the smallest two 
        // bits matter.
        // Second byte is LSB or Least Significant byte. All bits matter.
        // We use bitwise 'and' with 3 on the first byte to keep only the 
        // first two
        // bits if they are 1's. 
        // EX. 11011011 & 00000011 === 00000011
        // We then shift those bits 8 bits to the left 
        // (which fills in with 0's).
        // 00000011 << 8 === 1100000000
        // We fill in those 0's with the 8 bits from LSB to get our 10 bit 
        // meaningful data.
        // EX. LSB = 11010111    1100000000 + 11010111 === 1111010111
        const rawValue = ((message[0].receiveBuffer[1] & 0x03) << 8) +
          message[0].receiveBuffer[2];

        // Sensor reads 280 when completely wet, 575 is completely dry.
        const dry = 575;
        const wet = 280
        const range = dry - wet;
        const adjValue = rawValue - wet;
        const percentDry = (adjValue / range) * 100;
        const moistureContent = 100 - percentDry;
        

        console.log(moistureContent);
        resolve(moistureContent);
      })
    })
  })
}

module.exports = readSoilMoisture;

// It takes a minute or so for the sensor to fullly adjust to being in water.
// adjusts instantly when out of water.