var express = require('express');
var router = express.Router();

/* GET home page. */

let x;
let y;
router.get('/', function(req, res, next) {
  //res.render('computation', { title: 'Maheshwar Punyam Anand' });
  
if(req.query.x ==undefined ) {
  x=Math.floor(Math.random()*10);
  y=Math.fround(Math.random());
let y1=Math.atan2(x,y);
let y2=Math.atanh(y);
let y3=Math.cbrt(x);
  res.send('Math.atan2() applied to '+x+' and '+y+' is ' +y1+"<br>" +'Math.atanh() applied to '+y+' is '+y2+"<br>"+'Math.cbrt()  applied to '+x+' is'+y3); 

}
else{

  x = req.query.x;
  let y1=Math.atan2(x,x);
  let y2=Math.atanh(x);
  let y3=Math.cbrt(x);

  res.send('Math.atan2() applied to '+x+' and '+y+' is ' +y1+"<br>" +'Math.atanh() applied to '+y+' is '+y2+"<br>"+'Math.cbrt()  applied to '+x+' is'+y3);
}


  //res.send('Math.atanh() applied to '+x+' is'+y2);
  //res.send('Math.cbrt() applied to ${x} is'+y3);
});

module.exports = router;