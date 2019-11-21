# tinyparser
Tiny alternative for the popular [body-parser](https://www.npmjs.com/package/body-parser) package. Zero dependencies vs [21.](http://npm.broofa.com/?q=body-parser) Just handles JSON for now.
## Install
`npm i tinyparser`
## Example
```javascript
const bodyParser = require('tinyparser')
require('polka')()
	.use(bodyParser()) // you can also use bodyParser.json()
	.get('/', (req, res) => {
		console.log(req.body)
		res.end()
	})
```

If the JSON body is misformatted or unable to be parsed, an empty JSON object will be returned (`{}`)