// load custom node methods.
const sendmessage = require('./node_methods/sendmessage')
const makerestapirequest = require('./node_methods/makerestapirequest')
// loaded custom node methods.

// define key static (const) variables.
const financialasset = (process.argv[2]) ? process.argv[2] : 'ethereum' /* set financial asset 'bitcoin', 'ethereum', etc. */
const financialinvestment = (process.argv[3]) ? process.argv[3] : 150 /* set financial asset 'bitcoin', 'ethereum', etc. */
const financialposition = (process.argv[4]) ? process.argv[4] : 'long' /* set financial position to either 'long' or 'short' */
const financialleverage = (process.argv[5]) ? process.argv[5] : 6 /* set financial leverage, for example '6' (6X leverage) */
const equityreturn = (process.argv[6]) ? process.argv[6] : 0.05 /* return on equity required in decimals */
const recipient = (process.argv[7]) ? process.argv[7] :  '+15104594120' /* the percentage of the portfolio that we can afford to lose */
// defined key static (const) variables.

// declare delay function.
const delay = ms => new Promise(r => setTimeout(r, ms));
// declared delay function.

function loop () => { // start loop function to check that the offset price has been reached.

  let assetreturn = ( financialposition === 'long' ) ? equityreturn/financialleverage : -equityreturn/financialleverage /* determine the return on assets required */
  let offsetprice = +financialinvestment * ( 1 + assetreturn ) /* determining the offset price... be careful about returns for shorting */

  let priceinformation = await makerestapirequest ( 'GET', '/v2/assets/' + financialasset ) /* retrieve asset price information from shapeshift's coincap api */
  let dollarprice = priceinformation.priceUsd /* determine the present dollar price of the financial asset */
  if ( dollarprice )  {

    if ( dollarprice >= offsetprice ) {
  
        let message = 'the ' + financialleverage + 'X ' + financialposition + ' on ' + financialasset + ' can be offset for a ' + +equityreturn * 100 + '% return.' /* create message */
        sendmessage ( recipient, message ) /* send message */
  
    }

  }

} // end loop function.

(async () => {
	loop ()
	await delay(25000)
})()
