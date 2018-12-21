const Wreck = require('wreck');
const wreck = Wreck.defaults({
  baseUrl: 'https://portal.assessor.lacounty.gov/api',
  headers: {
    accept: 'application/json',
  },
});

const fs = require('fs');
const readStream = fs.createReadStream('./Assessor_Parcels_Data_-_2015.csv');

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '127.0.0.1',
  port: 3307,
  user: 'nora',
  password: '3k293cp0tjnMq',
  database: 'sandbox',
});

/**
 * @description
 */
const updateProperty = (id, propertyName, propertyValue) => new Promise((resolve, reject) => {
  const tableName = 'sm_assessor_2015';
  const pk = 'AIN';
  const sql = `UPDATE ${tableName} SET ${propertyName} = ? where ${pk} = ?;`;
  const params = [propertyValue, id];
  connection.query(sql, params, (error, result) => error ? reject(error) : resolve(result));
});

const parse = require('csv-parse');
const parser = parse({ columns: true }, async (err, data) => {
  const start = new Date();
  await Promise.all(data.map(async parcel => {
    const { AIN } = parcel;
    try {
      const { SqftLot } = await getParcelDetails(AIN);
      await updateProperty(AIN, 'SqftLot', SqftLot);
    }
    catch (err) {
      console.log({ AIN, err });
    }
  }));
  console.log('Finished!', Date.now() - start);
  connection.end();
});

connection.connect(error => {
  if (error) return console.log(error);
  readStream.pipe(parser);
});

/**
 * @description Gets the area of a parcel
 * @param {Number} ain - Parcel's AIN
 * @return {Number} Parcel's area in square feet
 */
const getParcelDetails = async ain => {
  const { payload } = await wreck.get(`/parceldetail?ain=${ain}`);
  return JSON.parse(payload.toString()).Parcel;
};
