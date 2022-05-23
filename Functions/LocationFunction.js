export default  Weather= async (Location) =>{

    var configT = {
      method: 'get',
     // url : `https://api.openweathermap.org/data/2.5/forecast?lat=${Location.latitude}&lon=${Location.longitude}&appid=d4a0974ba2f6727042c75c565bca82a6`,
     url : `https://api.openweathermap.org/data/2.5/weather?lat=${Location.latitude}&lon=${Location.longitude}&appid=c5624cf89e15030b85908936f72a6d65&units=metric`
    };
  
   axios(configT)
    .then(function (response) {
     // console.log(JSON.stringify(response.data))
      const country = countries.filter(function (i,n){
        return i.abbreviation==response.data.sys.country;
    })[0];
  if (response.data.name){
    let city = response.data.name+' , '
  }
     // console.log(response.data.snow['1h'])
    
      setWeather(response.data.main.temp)
      if (country){
       let country =  country.country
      }
      if (response.data.snow){
       let snow = response.data.snow['1h']
      }
      else {
       let snow= 0.00
      }
  
      if(!country.country && response.data.name ){
        setCountry('We dont know this location')
       let country =null
      }
     
     
  }) .catch((error) => {
    console.log(error)
  })
  
  }



  