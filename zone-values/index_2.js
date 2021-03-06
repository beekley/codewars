const Wreck = require('wreck');
const wreck = Wreck.defaults({
  baseUrl: 'https://portal.assessor.lacounty.gov/api',
  headers: {
    accept: 'application/json',
  },
});

const mysql = require('mysql');
const pool = mysql.createPool({
  host: '127.0.0.1',
  port: 3307,
  user: 'nora',
  password: '3k293cp0tjnMq',
  database: 'sandbox',
  connectionLimit: 10,
});

const TABLE = 'sm_assessor_2015';
const DELAY = 2000;
const BATCH_SIZE = 5;

/**
 * @description
 */
const getBatch = limit => new Promise((resolve, reject) => {
  const sql = `
    SELECT AIN FROM ${TABLE}
    WHERE
      (CHAR_LENGTH(SitusZipCode) < 9 OR SitusZipCode IS NULL OR SqftLot IS NULL)
      AND GeneralUseType = 'Residential'
      AND PropertyType != 'CND'
    LIMIT ?;
  `;
  const params = [ limit ];
  pool.query(sql, params, (error, results) =>
    setTimeout(() => error ? reject(error) : resolve(results), DELAY)
  );
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

/**
 * @description
 */
const updateParcel = parcel => new Promise((resolve, reject) => {
  const sql = `
    UPDATE ${TABLE}
    SET
      ZoningPDB = '${parcel.ZoningPDB}',
      SqftLot = ${parcel.SqftLot},
      SitusZipCode = '${parcel.SitusZipCode}',
      CurrentRoll_LandValue = ${parcel.CurrentRoll_LandValue},
      CurrentRoll_ImpValue = ${parcel.CurrentRoll_ImpValue},
      CurrentRoll_BaseYear = ${parcel.CurrentRoll_BaseYear}
    WHERE AIN = ${parcel.AIN};
  `;
  pool.query(sql, (error, result) => error ? reject(error) : resolve(result));
});

/**
 * @description
 */
const getAndUpdateParcels = async () => {
  const parcels = await getBatch(BATCH_SIZE);
  if (parcels.length === 0) return;
  console.log(`${(new Date()).toISOString()} - Processing batch of ${parcels.length} parcels`);
  await Promise.all(parcels.map(async parcel => {
    Object.assign(parcel, await getParcelDetails(parcel.AIN));
  }));
  await Promise.all(parcels.map(async parcel => await updateParcel(parcel)));
  return getAndUpdateParcels();
};

setTimeout(async error => {
  if (error) return console.log(error);
  try {
    await getAndUpdateParcels();
  }
  catch (error) {
    console.log('error!', error);
  }
  pool.end();
  console.log(`${(new Date()).toISOString()} - Done`);
}, 500);
