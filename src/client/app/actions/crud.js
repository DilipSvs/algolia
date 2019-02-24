//http://stackoverflow.com/questions/41751235/how-to-log-all-axios-calls-from-one-place-in-code
import axios from "axios";

export function crud(config){
  return new Promise((resolve, reject) => {
    axios.request(config)
    .then((res) => {
      // log success, config, res here
      console.log("success",res)
      resolve(res);      
    })
    .catch(err => {
      // same, log whatever you want here
      console.log("err",err)
      reject(err);
    })
  })
}