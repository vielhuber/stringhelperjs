## motivation
tired of writing

```js
if( Object.keys(obj).length === 0 && obj.constructor === Object )
{

}
```

or

```js
if (typeof arr !== 'undefined' && arr.length > 0)
{

}
```

or

```js
for(const [obj__key, obj__value] of Object.entries(obj))
{

}
```

?


## installation

```
yarn init -y && yarn add hlp
```

now embed it directly:
```html
<script src="hlp.min.js"></script> 
```

or use it as a module:
```js
import hlp from 'hlp';
```


## usage

### existence
```js
// check existence
if( hlp.x(vrbl) )
{

}

// check non-existence
if( hlp.nx(vrbl) )
{

}
```

### equality
```js
// js has a lot of pitfalls, when comparing loosely
// TODO: https://www.youtube.com/watch?v=MkbR-C3IaPY
if( 0 == 'true' ) // true
if( 0 == 'str' ) // true
if( 'null' == null ) // false
if( '0' == null ) // false
if( '0' == true ) // false
if( '0' == false ) // true
if( 'false' == true ) // true
if( 'false' == false ) // false
if( new stdClass == true ) // true
if( [] == false ) // true
if( [] == null ) // true
if( [''] == [] ) // false
if( [''] == [0] ) // true
if( 0 == '' ) // true
if( 0 == ' ' ) // true
if( -1 == true ) // true
if( '-1' == true ) // true

// this non-strict equality is symmetric, but not transitive
$a = ''; $b = 0; $c = 'oh';
$a == $b; // true
$b == $c; // true
$c == $a; // false

// to overcome this issue, we...

// ...use strict comparison when possible
if( vrbl === 'foo' )
{

}

// ...use loose comparison when appropriate
if( hlp.getParam('number') == 1337 )
{

}

// ...check for truthness / falsiness with these helper methods
if( hlp.true(vrbl) )
{

}

if( hlp.false(vrbl) )
{

}

// be aware, that hlp.true is not always the logic negation of hlp.false
hlp.true(null) // false
hlp.false(null) // false
```

### value
```js
// get variable if exists, otherwise null
hlp.v( vrbl )

// get variable if exists, otherwise 'default'
hlp.v( vrbl, 'default' )

// get first variable that exists, otherwise null
hlp.v( vrbl1, vrbl2, vrbl3 )
```

### loop
```js
// loop over arrays/objects only if possible
hlp.loop(['foo','bar','baz'], (vrbl__value, vrbl__key) => { });
hlp.loop({bar: 'foo', baz: 'bar', foo: 'baz'}, (vrbl__value, vrbl__key) => { });
hlp.loop([], (vrbl__value, vrbl__key) => { }) // does nothing
hlp.loop({}, (vrbl__value, vrbl__key) => { }) // does nothing
hlp.loop(null, (vrbl__value, vrbl__key) => { }) // does nothing
```


### try

```js
// if you are unsure, if a variable is even set before checking its existence,
// simply put it inside this helper function
if( hlp.x(() => vrbl) )
if( hlp.nx(() => vrbl)  )
if( hlp.true(() => vrbl) )
if( hlp.false(() => vrbl)  )
if( hlp.v(() => vrbl) === 'foo' )
if( hlp.v(() => vrbl) == 1337 )
echo hlp.v(() => vrbl)
foreach( __i(hlp.v(() => vrbl)) as $array__key=>$array__value)

```
That works because JavaScript only evaluates the content of the inner callback (or closure) when it is actually executed.



### helpers

there are also some other neat little helpers available.

```js
// capitalize
hlp.capitalize('foo') // Foo

// cookies
hlp.cookieSet('foo', 'bar', 7);
hlp.cookieGet('foo') // bar
hlp.cookieDelete('foo')
hlp.cookieExists('foo') // false

// get parameter (example url: https://tld.com/?foo=bar&bar=baz)
hlp.getParam('foo') // foo
hlp.getParam('bar') // baz
hlp.getParam('baz') // null

// device detection helpers
hlp.isPhone()
hlp.isTablet()
hlp.isDesktop()
hlp.isMobile()
hlp.isTouch()

// smooth scroll to element
hlp.scrollTo( document.querySelector('.foo'), 1000 ).then(() => { console.log('done'); });

// get top/left scroll position
hlp.scrollTop()
hlp.scrollLeft()

// set 100vh for dom element (even for ios devices, see https://nicolas-hoizey.com/2015/02/viewport-height-is-taller-than-the-visible-part-of-the-document-in-some-mobile-browsers.html)
hlp.real100vh('.foo')

// fade in/out dom element
hlp.fadeIn( document.querySelector('.foo'), 1000 ).then(() => { console.log('done'); });
hlp.fadeOut( document.querySelector('.foo'), 1000 ).then(() => { console.log('done'); });

// check if dom element is visible
hlp.isVisible( document.querySelector('.foo') )

// automatically change height of all textareas based on content
textareaAutoHeight()
textareaAutoHeight('.special')
textareaSetHeight( document.querySelector('.special') )

// check if object
hlp.isObject({}) // true
hlp.isObject({foo: 'bar'}) // true
hlp.isObject(null) // false

// check if array
hlp.isArray([]) // true
hlp.isArray(['foo','bar']) // true
hlp.isArray(null) // false

// check if string
hlp.isString('foo'); // true
hlp.isString(42); // false
hlp.isString(null); // false

// check if date
hlp.isDate('2018-01-01') // true
hlp.isDate('2018-02-29') // false
hlp.isDate('1700-01-01') // true
hlp.isDate(42) // false

// get week number from date
hlp.dateToWeek(new Date('2021-02-22')) // 8
hlp.dateToWeek() // hlp.dateToWeek(new Date())

// get date (of monday) from week number
hlp.weekToDate(42, 2018) // new Date('2018-10-14')
hlp.weekToDate(17, 2023) // new Date('2023-04-23')

// add days to date
hlp.addDays(new Date('2018-01-01'), 7) // new Date('2018-01-08')
hlp.addDays(new Date('2018-02-22'), 658) // new Date('2019-12-12')

// check if objects are equal
hlp.objectsAreEqual({}, {}) // true
hlp.objectsAreEqual({ foo: 'bar' }, { foo: 'bar'}) // true
hlp.objectsAreEqual({ foo: 'bar' }, { bar: 'baz'}) // false

// check if object is inside an array/object
hlp.containsObject({ foo: 'bar' }, []) // false
hlp.containsObject({ foo: 'bar' }, [{ foo: 'bar' }, { bar: 'baz' }]) // true
hlp.containsObject({ foo: 'bar' }, { foo: { foo: 'bar' } }) // true

// create guid
hlp.guid() // e86e393c-9788-857b-27c2-f80c8ca1a302
hlp.guid() // 8b25a8f8-9525-bd73-4679-3539321db93b

// replace all occurences
hlp.replaceAll('foo bar baz', 'a', 'b') // 'foo bbr bbz'

// load external js file in dom with promise
hlp.loadJs('https://apis.google.com/js/api.js').then(() => { console.log('done'); });

// json parsing
hlp.jsonStringToObject('["foo","bar","baz"]') // ['foo','bar','baz']
hlp.jsonStringToObject('["foo","bar","baz",]') // null
hlp.jsonObjectToString(['foo','bar','baz']) // '["foo","bar","baz"]'

// easy ajax requests
hlp.get('https://httpbin.org/anything', (data) => { }, (error) => { }) // { "method": "GET", ... }
hlp.get('https://httpbin.org/anything', (data) => { }, (error) => { }, 1000) // same but with a throttle of 1 second
hlp.post('https://httpbin.org/anything', ['foo' => 'bar'], (data) => { }, (error) => { }) // { "method": "POST", "data": {"foo": "bar"}, ... }
hlp.post('https://httpbin.org/anything', ['foo' => 'bar'], (data) => { }, (error) => { }, ['Bar' => 'baz']) // { "method": "POST", "headers" = { "Bar": "baz", ... }, ... }
hlp.getWithPromise('https://httpbin.org/anything').then((data) => { }).catch((error) => { }); // same but with promise
hlp.postWithPromise('https://httpbin.org/anything', ['foo' => 'bar']).then((data) => { }) // same but with promise

// on resize vertically/horizontally
window.addEventListener('resize', () => {}) // inaccurate, triggers too often (especially when scrolling on android/iphone)
hlp.onResizeHorizontal(() => {}) // only triggers when viewport width changes
hlp.onResizeVertical(() => {}) // only triggers when viewport height changes

// return unique array (remove duplicate values, order-safe)
hlp.uniqueArray(['foo','bar','foo','baz']) // ['foo','bar','baz']

// char helpers
hlp.charToInt('D') // 4
hlp.intToChar(4) // 'D'
hlp.incChar('D') // 'E'
hlp.incChar('Z') // 'AA'
hlp.incChar('A',2) // 'C'
hlp.decChar('U') // 'T'

// range
hlp.range('A','Z') // ['A','B',...,'Z']
hlp.range(1,42) // [1,2,...,42]
hlp.range('C','A') // ['C','B','A']

// get last item of object/array
hlp.last(['foo', 'bar', 'baz']) // 'baz'
hlp.last({ foo: 'bar', bar: 'baz'}) // 'baz'

// get first item of object/array
hlp.first(['foo', 'bar', 'baz']) // 'foo'
hlp.first({ foo: 'bar', bar: 'baz'}) // 'bar'

// get random element from object/array
hlp.rand(['foo', 'bar', 'baz']) // 'bar'
```


## php implementation

there is also a php implemenation [stringhelper](https://github.com/vielhuber/stringhelper) with similiar functions available.


## appendix

### existence matrix

| | <sub>hlp.x()</sub> | <sub>hlp.true()</sub> | <sub>hlp.false()</sub> | <sub>!== null</sub> | <sub>!= null</sub> | <sub>!== false</sub> | <sub>!= false</sub> | <sub>=== true</sub> | <sub>== true</sub> | <sub>typeof !== 'undefined'</sub> | <sub>!= undefined</sub> | <sub>!== undefined</sub> | <sub>if/else</sub> | <sub>ternary</sub> | <sub>length > 0</sub> | <sub>!= ''</sub> | <sub>!== ''</sub> |<br/>| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |<br/>| <sub>0</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> |<br/>| <sub>1</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> |<br/>| <sub>null</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>error</sub> | <sub>true</sub> | <sub>true</sub> |<br/>| <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> |<br/>| <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> |<br/>| <sub>[]</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> |<br/>| <sub>['']</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> |<br/>| <sub>-1</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> |<br/>| <sub>'0'</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> |<br/>| <sub>'1'</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> |<br/>| <sub>'-1'</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> |<br/>| <sub>''</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> |<br/>| <sub>' '</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> |<br/>| <sub>'null'</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> |<br/>| <sub>'false'</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> |<br/>| <sub>'true'</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> |<br/>| <sub>'str'</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> |<br/>| <sub>[0,1]</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> |<br/>| <sub>[0]</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> |<br/>| <sub>{}</sub> | <sub>false</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> |<br/>| <sub>un.known.property</sub> | <sub>error</sub> | <sub>error</sub> | <sub>error</sub> | <sub>error</sub> | <sub>error</sub> | <sub>error</sub> | <sub>error</sub> | <sub>error</sub> | <sub>error</sub> | <sub>error</sub> | <sub>false</sub> | <sub>false</sub> | <sub>error</sub> | <sub>error</sub> | <sub>error</sub> | <sub>error</sub> | <sub>error</sub> |<br/>| <sub>(()=>un.known.property)</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>false</sub> | <sub>false</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> | <sub>true</sub> |

### loose comparison matrix

| <sub>==</sub> | <sub>0</sub> | <sub>1</sub> | <sub>null</sub> | <sub>false</sub> | <sub>true</sub> | <sub>[]</sub> | <sub>['']</sub> | <sub>-1</sub> | <sub>'0'</sub> | <sub>'1'</sub> | <sub>'-1'</sub> | <sub>''</sub> | <sub>' '</sub> | <sub>'null'</sub> | <sub>'false'</sub> | <sub>'true'</sub> | <sub>'str'</sub> | <sub>[0,1]</sub> | <sub>[0]</sub> | <sub>{}</sub> | <sub>un.known.property</sub> | <sub>(()=>un.known.property)</sub> |<br/>| --- |<br/>| <sub>0</sub>| <sub>true</sub>| <sub>false</sub>| <sub>false</sub>| <sub>true</sub>| <sub>false</sub>| <sub>true</sub>| <sub>true</sub>| <sub>false</sub>| <sub>true</sub>| <sub>false</sub>| <sub>false</sub>| <sub>true</sub>| <sub>true</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>true</sub>| <sub>false</sub>| <sub>error</sub>| <sub>false</sub> |<br/>| <sub>1</sub>| <sub>false</sub>| <sub>true</sub>| <sub>false</sub>| <sub>false</sub>| <sub>true</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>true</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>error</sub>| <sub>false</sub> |<br/>| <sub>null</sub>| <sub>false</sub>| <sub>false</sub>| <sub>true</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>error</sub>| <sub>false</sub> |<br/>| <sub>false</sub>| <sub>true</sub>| <sub>false</sub>| <sub>false</sub>| <sub>true</sub>| <sub>false</sub>| <sub>true</sub>| <sub>true</sub>| <sub>false</sub>| <sub>true</sub>| <sub>false</sub>| <sub>false</sub>| <sub>true</sub>| <sub>true</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>true</sub>| <sub>false</sub>| <sub>error</sub>| <sub>false</sub> |<br/>| <sub>true</sub>| <sub>false</sub>| <sub>true</sub>| <sub>false</sub>| <sub>false</sub>| <sub>true</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>true</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>error</sub>| <sub>false</sub> |<br/>| <sub>[]</sub>| <sub>true</sub>| <sub>false</sub>| <sub>false</sub>| <sub>true</sub>| <sub>false</sub>| <sub>true</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>true</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>error</sub>| <sub>false</sub> |<br/>| <sub>['']</sub>| <sub>true</sub>| <sub>false</sub>| <sub>false</sub>| <sub>true</sub>| <sub>false</sub>| <sub>false</sub>| <sub>true</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>true</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>error</sub>| <sub>false</sub> |<br/>| <sub>-1</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>true</sub>| <sub>false</sub>| <sub>false</sub>| <sub>true</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>error</sub>| <sub>false</sub> |<br/>| <sub>'0'</sub>| <sub>true</sub>| <sub>false</sub>| <sub>false</sub>| <sub>true</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>true</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>true</sub>| <sub>false</sub>| <sub>error</sub>| <sub>false</sub> |<br/>| <sub>'1'</sub>| <sub>false</sub>| <sub>true</sub>| <sub>false</sub>| <sub>false</sub>| <sub>true</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>true</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>error</sub>| <sub>false</sub> |<br/>| <sub>'-1'</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>true</sub>| <sub>false</sub>| <sub>false</sub>| <sub>true</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>error</sub>| <sub>false</sub> |<br/>| <sub>''</sub>| <sub>true</sub>| <sub>false</sub>| <sub>false</sub>| <sub>true</sub>| <sub>false</sub>| <sub>true</sub>| <sub>true</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>true</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>error</sub>| <sub>false</sub> |<br/>| <sub>' '</sub>| <sub>true</sub>| <sub>false</sub>| <sub>false</sub>| <sub>true</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>true</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>error</sub>| <sub>false</sub> |<br/>| <sub>'null'</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>true</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>error</sub>| <sub>false</sub> |<br/>| <sub>'false'</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>true</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>error</sub>| <sub>false</sub> |<br/>| <sub>'true'</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>true</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>error</sub>| <sub>false</sub> |<br/>| <sub>'str'</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>true</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>error</sub>| <sub>false</sub> |<br/>| <sub>[0,1]</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>true</sub>| <sub>false</sub>| <sub>false</sub>| <sub>error</sub>| <sub>false</sub> |<br/>| <sub>[0]</sub>| <sub>true</sub>| <sub>false</sub>| <sub>false</sub>| <sub>true</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>true</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>true</sub>| <sub>false</sub>| <sub>error</sub>| <sub>false</sub> |<br/>| <sub>{}</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>true</sub>| <sub>error</sub>| <sub>false</sub> |<br/>| <sub>un.known.property</sub>| <sub>error</sub>| <sub>error</sub>| <sub>error</sub>| <sub>error</sub>| <sub>error</sub>| <sub>error</sub>| <sub>error</sub>| <sub>error</sub>| <sub>error</sub>| <sub>error</sub>| <sub>error</sub>| <sub>error</sub>| <sub>error</sub>| <sub>error</sub>| <sub>error</sub>| <sub>error</sub>| <sub>error</sub>| <sub>error</sub>| <sub>error</sub>| <sub>error</sub>| <sub>error</sub>| <sub>error</sub> |<br/>| <sub>(()=>un.known.property)</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>false</sub>| <sub>error</sub>| <sub>true</sub> |