Assignment Documentation<a name="TOP"></a>
===================

- - - - 
# To Run on System #

    1) Clone repository on the system
    2) Open the terminal and Direct towards root folder
    3) Execute Nodemon
    
    The server will start on port 5000.

# Folder Structure #

* index.js - It is the main file which runs the server.
* routers - This folder contains routers for API end points. It contains <b>translateRouter.js</b> file which has API endpoints for GET /translate/cache (for getting previous translated data) and POST /translate (for translating text).  
* models - This contains <b>translateModel.js</b> file which has schema design for cache data to be stored. Schema design for translated text stored as cache is as follows:
     * <b>fromLang</b> - The language of text that you have to translate. 
     * <b>toLang</b> - The language in which text is to be translated.
     * <b>fromText</b> - The text you have to translate.
     * <b>toText</b> - The translated text.
* keys.js - This file contains database url which is used for connecting server to database. 

# Libraries Used #

   * Express 
   * vitalets/google-translate-api

# Cache Database Schema Design #

   Attribute   |   Type
 ------------- | -------------
  fromLang     | string
  toLang       | string
  fromText     | string
  toText       | string

# Setting up keys #
       
      Paste the given database URL in place of URL_TO_BE_PASTED in keys.js file.
      
 
# API Testing # 

* GET request 
     * <b>URL</b>- http://localhost:5000/translate/cache
     * It fetches all previous translations.
* POST request 
     * <b>url</b> -http://localhost:5000/translate
     * Body Section contains attributes text, fromLang, toLang. 
     For eg: {
             	"text":"Lets eat something",
	            "fromLang":"english",
	            "toLang":"hindi"
              }
     * It returns translated text object.    
     
  # Results and Ideas #
         The GET and POST request fetch cache translations and translate text respectively.
         "vitalets/google-translate-api" library has inbuilt translate function which translates text in the given language.
         This could have been improved if there had been a smart function in the library which also converts text in related languages simultaneously.
              
