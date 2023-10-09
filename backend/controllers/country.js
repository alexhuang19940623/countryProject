

exports.getCountry = async (req, res) => {
  const {countryText}=req.body
  await fetch('https://restcountries.com/v3.1/name/'+countryText, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }
  ).then((res) => res.json())
  .then((data) => {
    if(data.status==404){
     return res.status(404).json({
        "message":data.message
      });
    }
    return res.status(200).json({
      "data":data
    });
  })
  .catch(err => {
    return res.status(400).json({"message":"cause: Error: Client network socket disconnected before secure TLS connection was established"});
  });
 
};

