## installation

```
yarn init -y && yarn add hlp
```

now embed it directly:
```html
<script src="hlp.js"></script> 
```

or use it as a module:
```js
const hlp = require('hlp');
```


## usage

```js

// https://tld.com/?foo=bar&bar=baz
__get('foo') // foo
__get('bar') // baz
__get('baz') // null
```


## php implementation

there is also a php implemenation [stringhelper](https://github.com/vielhuber/stringhelper) with similiar functions available.


## overview of __x

| | <sub>!== null</sub> | <sub>!= null</sub> | <sub>!== false</sub> | <sub>!= false</sub> | <sub>=== true</sub> | <sub>== true</sub> | <sub>typeof input !== 'undefined'</sub> | <sub>if/else</sub> | <sub>ternary</sub> | <sub>length > 0</sub> | <sub>!= ''</sub> | <sub>!== ''</sub> | <sub>!!</sub> | <sub>Boolean()</sub> | <sub>__x</sub> |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| <sub>null</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>type error</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> |
| <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> |
| <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> |
| <sub>[]</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> |
| <sub>['']</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> |
| <sub>0</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> |
| <sub>1</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> |
| <sub>-1</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> |
| <sub>''</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> |
| <sub>' '</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> |
| <sub>str</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> |
| <sub>[0,1]</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> |
| <sub>[0]</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> |
| <sub>{}</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> |
| <sub>undefined</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>type error</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> |