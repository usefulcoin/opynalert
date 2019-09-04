(async () => {
  
  const makerestapirequest = require('../node_methods/makerestapirequest')

  const financialasset = (process.argv[2]) ? process.argv[2] : 'ethereum' /* Financial Asset */

  // make requests.
  let assetpriceinformation = await makerestapirequest ( 'GET', '/v2/assets/'  + financialasset )
  // made requests.

  console.log ( assetpriceinformation )

})()
