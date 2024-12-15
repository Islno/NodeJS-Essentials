const dns = require('dns');

const url = 'www.google.com';

async function bootstrap(){
    const adress= await dns.promises.resolve4(url)
    console.log(adress)
}
//const ipv4 = dns.resolve4(url, (err,adress)=>{
 //   if(err){
  //      console.log(err);
   //     return;
   // }
   // console.log(adress);
//})
bootstrap()