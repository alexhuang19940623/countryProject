const fetch = require('node-fetch'); // import node-fetch

exports.getCountry = async (req, res) => {
  const { countryText } = req.body;

  if (!countryText) {
    return res.status(400).json({ message: "Country name is required" });
  }

  try {
    const apiRes = await fetch('https://restcountries.com/v3.1/name/' + countryText, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    const data = await apiRes.json();

    if(apiRes.status !== 200) {
      return res.status(apiRes.status).json({
        message: data.message || "Error fetching data from API"
      });
    }

    return res.status(200).json({
      data: data
    });

  } catch (err) {
    console.error(err); // Log the error for debugging
    return res.status(500).json({ message: "Internal server error" });
  }
};