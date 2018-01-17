var configValues = require('./config');

module.exports = {
    
    getDbConnectionString: function() {
        return 'mongodb://'+ configValues.uname + ':' + configValues.pwd + '@ds157097.mlab.com:57097/node-dj';
       // in case fo using @ symbol in tyhe bash use %40 
      // return 'mongodb://shubh:Shubhanshuvats%403@ds157097.mlab.com:57097/node-dj';
    
    }
    
}