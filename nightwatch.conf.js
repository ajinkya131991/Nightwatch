module.exports = {
    "src_folders" : ["tests"],  //when we run nightwatch command it will look into this folder for all tests files
  
    "webdriver" : {    // Its a Engine which connents webdriver to nightwatch
      "start_process": true,
      "server_path": "node_modules/chromedriver/lib/chromedriver/chromedriver.exe",   // Gives location to chrome driver
      "port": 9515
    },
  
    "test_settings" : {
      "default" : {
        "desiredCapabilities": {
          "browserName": "chrome"
        }
      }
    }
  }