'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getOwnPropertyNames = require('babel-runtime/core-js/object/get-own-property-names');

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _create = require('babel-runtime/core-js/object/create');

var _create2 = _interopRequireDefault(_create);

var _weakMap = require('babel-runtime/core-js/weak-map');

var _weakMap2 = _interopRequireDefault(_weakMap);

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = require('babel-runtime/core-js/object/entries');

var _entries2 = _interopRequireDefault(_entries);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hlp = function () {
    function hlp() {
        (0, _classCallCheck3.default)(this, hlp);
    }

    (0, _createClass3.default)(hlp, null, [{
        key: 'x',
        value: function x(input) {
            if (typeof input === 'function') {
                try {
                    input = input();
                    return this.x(input);
                } catch (e) {
                    return false;
                }
            }
            if (input === null || input === false || typeof input === 'string' && input.trim() == '' || (typeof input === 'undefined' ? 'undefined' : (0, _typeof3.default)(input)) === 'object' && (0, _keys2.default)(input).length === 0 && input.constructor === Object || typeof input === 'undefined' || Array.isArray(input) && input.length === 0 || Array.isArray(input) && input.length === 1 && input[0] === '') {
                return false;
            }
            return true;
        }
    }, {
        key: 'nx',
        value: function nx(input) {
            return !this.x(input);
        }
    }, {
        key: 'true',
        value: function _true(input) {
            if (typeof input === 'function') {
                try {
                    input = input();
                    return this.true(input);
                } catch (e) {
                    return false;
                }
            }
            if (input === null) {
                return false;
            }
            if (input === false) {
                return false;
            }
            if (Array.isArray(input) && input.length === 0) {
                return false;
            }
            if (Array.isArray(input) && hlp.first(input) === '') {
                return false;
            }
            if ((typeof input === 'undefined' ? 'undefined' : (0, _typeof3.default)(input)) === 'object' && (0, _keys2.default)(input).length === 0 && input.constructor === Object) {
                return false;
            }
            if (input === 0) {
                return false;
            }
            if (input === '0') {
                return false;
            }
            if (input === '') {
                return false;
            }
            if (input === ' ') {
                return false;
            }
            if (input === 'null') {
                return false;
            }
            if (input === 'false') {
                return false;
            }
            return true;
        }
    }, {
        key: 'false',
        value: function _false(input) {
            if (typeof input === 'function') {
                try {
                    input = input();
                    return this.false(input);
                } catch (e) {
                    return false;
                }
            }
            if (input === null) {
                return false;
            }
            if (input === false) {
                return true;
            }
            if (Array.isArray(input) && input.length === 0) {
                return false;
            }
            if (Array.isArray(input) && hlp.first(input) === '') {
                return false;
            }
            if ((typeof input === 'undefined' ? 'undefined' : (0, _typeof3.default)(input)) === 'object' && (0, _keys2.default)(input).length === 0 && input.constructor === Object) {
                return false;
            }
            if (input === 0) {
                return true;
            }
            if (input === '0') {
                return true;
            }
            if (input === '') {
                return false;
            }
            if (input === ' ') {
                return false;
            }
            if (input === 'null') {
                return false;
            }
            if (input === 'false') {
                return true;
            }
            return false;
        }
    }, {
        key: 'v',
        value: function v() {
            if (this.nx(arguments)) {
                return null;
            }
            for (var i = 0; i < arguments.length; i++) {
                if (this.x(arguments[i])) {
                    return arguments[i];
                }
            }
            return null;
        }
    }, {
        key: 'loop',
        value: function loop(input, fun) {
            if (this.nx(input)) {
                return null;
            }
            if (Array.isArray(input)) {
                input.forEach(function (input__value, input__key) {
                    fun(input__value, input__key);
                });
            } else if ((typeof input === 'undefined' ? 'undefined' : (0, _typeof3.default)(input)) === 'object') {
                (0, _entries2.default)(input).forEach(function (_ref) {
                    var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
                        input__key = _ref2[0],
                        input__value = _ref2[1];

                    fun(input__value, input__key);
                });
            }
        }
    }, {
        key: 'first',
        value: function first(input) {
            if (Array.isArray(input)) {
                var ret = null;
                input.forEach(function (input__value, input__key) {
                    if (ret === null) {
                        ret = input__value;
                    }
                });
                return ret;
            }
            if ((typeof input === 'undefined' ? 'undefined' : (0, _typeof3.default)(input)) === 'object') {
                var ret = null;
                (0, _entries2.default)(input).forEach(function (_ref3) {
                    var _ref4 = (0, _slicedToArray3.default)(_ref3, 2),
                        input__key = _ref4[0],
                        input__value = _ref4[1];

                    if (ret === null) {
                        ret = input__value;
                    }
                });
                return ret;
            }
            return null;
        }
    }, {
        key: 'last',
        value: function last(input) {
            if (Array.isArray(input)) {
                var ret = null;
                input.forEach(function (input__value, input__key) {
                    ret = input__value;
                });
                return ret;
            }
            if ((typeof input === 'undefined' ? 'undefined' : (0, _typeof3.default)(input)) === 'object') {
                var _ret = null;
                (0, _entries2.default)(input).forEach(function (_ref5) {
                    var _ref6 = (0, _slicedToArray3.default)(_ref5, 2),
                        input__key = _ref6[0],
                        input__value = _ref6[1];

                    _ret = input__value;
                });
                return _ret;
            }
            return null;
        }
    }, {
        key: 'rand',
        value: function rand(input) {
            if (Array.isArray(input)) {
                return input[Math.floor(Math.random() * input.length)];
            }
            if ((typeof input === 'undefined' ? 'undefined' : (0, _typeof3.default)(input)) === 'object') {
                var input = (0, _values2.default)(input);
                return input[Math.floor(Math.random() * input.length)];
            }
            return null;
        }
    }, {
        key: 'capitalize',
        value: function capitalize() {
            var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            if (string === null) {
                return string;
            }
            if (string === '') {
                return string;
            }
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    }, {
        key: 'cookieExists',
        value: function cookieExists(cookie_name) {
            if (document.cookie !== undefined && this.cookieGet(cookie_name) !== null) {
                return true;
            }
            return false;
        }
    }, {
        key: 'cookieGet',
        value: function cookieGet(cookie_name) {
            var cookie_match = document.cookie.match(new RegExp(cookie_name + '=([^;]+)'));
            if (cookie_match) {
                return decodeURIComponent(cookie_match[1]);
            }
            return null;
        }
    }, {
        key: 'cookieSet',
        value: function cookieSet(cookie_name, cookie_value, days) {
            document.cookie = cookie_name + '=' + encodeURIComponent(cookie_value) + '; ' + 'expires=' + new Date(new Date().getTime() + days * 24 * 60 * 60 * 1000).toUTCString() + '; path=/';
        }
    }, {
        key: 'cookieDelete',
        value: function cookieDelete(cookie_name) {
            document.cookie = cookie_name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
        }
    }, {
        key: 'getParam',
        value: function getParam(variable) {
            var url = window.location.search;
            if (this.nx(url)) {
                return null;
            }
            var query = url.substring(1),
                vars = query.split('&');
            for (var i = 0; i < vars.length; i++) {
                var pair = vars[i].split('=');
                if (pair[0] == variable && this.x(pair[1])) {
                    return pair[1];
                }
            }
            return null;
        }
    }, {
        key: 'getDevice',
        value: function getDevice() {
            if (this.isPhone()) {
                return 'phone';
            }
            if (this.isTablet()) {
                return 'tablet';
            }
            return 'desktop';
        }
    }, {
        key: 'isPhone',
        value: function isPhone() {
            // based on detectmobilebrowsers.com
            var a = navigator.userAgent || navigator.vendor || window.opera;
            return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
            );
        }
    }, {
        key: 'isTablet',
        value: function isTablet() {
            // based on detectmobilebrowsers.com
            var a = navigator.userAgent || navigator.vendor || window.opera;
            return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
            );
        }
    }, {
        key: 'isDesktop',
        value: function isDesktop() {
            return !this.isPhone() && !this.isTablet();
        }
    }, {
        key: 'isMobile',
        value: function isMobile() {
            // viewport width based OR phone based
            if (window.innerWidth < 750 || this.isPhone()) {
                return true;
            }
            return false;
        }
    }, {
        key: 'isTouch',
        value: function isTouch() {
            return 'ontouchstart' in window || navigator.maxTouchPoints || false;
        }
    }, {
        key: 'isMac',
        value: function isMac() {
            return hlp.getOs() === 'mac';
        }
    }, {
        key: 'isLinux',
        value: function isLinux() {
            return hlp.getOs() === 'linux';
        }
    }, {
        key: 'isWindows',
        value: function isWindows() {
            return hlp.getOs() === 'windows';
        }
    }, {
        key: 'getOs',
        value: function getOs() {
            var userAgent = window.navigator.userAgent,
                platform = window.navigator.platform,
                macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
                windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
                iosPlatforms = ['iPhone', 'iPad', 'iPod'],
                os = 'unknown';

            if (macosPlatforms.indexOf(platform) !== -1) {
                os = 'mac';
            } else if (iosPlatforms.indexOf(platform) !== -1) {
                os = 'mac';
            } else if (windowsPlatforms.indexOf(platform) !== -1) {
                os = 'windows';
            } else if (/Android/.test(userAgent)) {
                os = 'linux';
            } else if (!os && /Linux/.test(platform)) {
                os = 'linux';
            }

            return os;
        }
    }, {
        key: 'getBrowser',
        value: function getBrowser() {
            var browser_name = '',
                isIE = /*@cc_on!@*/false || !!document.documentMode,
                isEdge = !isIE && !!window.StyleMedia;

            if (navigator.userAgent.indexOf('Opera') != -1 || navigator.userAgent.indexOf('OPR') != -1) {
                browser_name = 'opera';
            } else if (navigator.userAgent.indexOf('Chrome') != -1 && !isEdge) {
                browser_name = 'chrome';
            } else if (navigator.userAgent.indexOf('Safari') != -1 && !isEdge) {
                browser_name = 'safari';
            } else if (navigator.userAgent.indexOf('Firefox') != -1) {
                browser_name = 'firefox';
            } else if (navigator.userAgent.indexOf('MSIE') != -1 || !!document.documentMode == true) //IF IE > 10
                {
                    browser_name = 'ie';
                } else if (isEdge) {
                browser_name = 'edge';
            } else {
                browser_name = 'unknown';
            }

            return browser_name;
        }
    }, {
        key: 'isObject',
        value: function isObject(a) {
            return !!a && a.constructor === Object;
        }
    }, {
        key: 'isArray',
        value: function isArray(a) {
            return !!a && a.constructor === Array;
        }
    }, {
        key: 'isString',
        value: function isString(string) {
            return typeof string === 'string' || string instanceof String;
        }
    }, {
        key: 'isDate',
        value: function isDate(string) {
            if (this.nx(string)) {
                return false;
            }
            // if string is of object date
            if (Object.prototype.toString.call(string) === '[object Date]') {
                return true;
            }
            // if this is not a string
            if (!this.isString(string)) {
                return false;
            }
            // strong check
            if (string.split('-').length !== 3) {
                return false;
            }
            var day = parseInt(string.split('-')[2]),
                month = parseInt(string.split('-')[1]),
                year = parseInt(string.split('-')[0]),
                date = new Date();
            date.setFullYear(year, month - 1, day);
            if (date.getFullYear() == year && date.getMonth() + 1 == month && date.getDate() == day) {
                return true;
            }
            return false;
        }
    }, {
        key: 'deepCopy',
        value: function deepCopy(obj) {
            var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _weakMap2.default();

            if (Object(obj) !== obj) return obj; // primitives
            if (hash.has(obj)) return hash.get(obj); // cyclic reference
            var result = obj instanceof Date ? new Date(obj) : obj instanceof RegExp ? new RegExp(obj.source, obj.flags) : obj.constructor ? new obj.constructor() : (0, _create2.default)(null);
            hash.set(obj, result);
            if (obj instanceof _map2.default) (0, _from2.default)(obj, function (_ref7) {
                var _ref8 = (0, _slicedToArray3.default)(_ref7, 2),
                    key = _ref8[0],
                    val = _ref8[1];

                return result.set(key, hlp.deepCopy(val, hash));
            });
            return _assign2.default.apply(Object, [result].concat((0, _toConsumableArray3.default)((0, _keys2.default)(obj).map(function (key) {
                return (0, _defineProperty3.default)({}, key, hlp.deepCopy(obj[key], hash));
            }))));
        }
    }, {
        key: 'jsonStringToObject',
        value: function jsonStringToObject(string) {
            if (this.nx(string) || !this.isString(string)) {
                return null;
            }
            try {
                return JSON.parse(string);
            } catch (error) {
                return null;
            }
        }
    }, {
        key: 'isJsonString',
        value: function isJsonString(string) {
            if (this.nx(string) || !this.isString(string)) {
                return false;
            }
            try {
                var json = JSON.parse(string);
                return true;
            } catch (error) {
                return false;
            }
        }
    }, {
        key: 'jsonObjectToString',
        value: function jsonObjectToString(object) {
            try {
                return (0, _stringify2.default)(object);
            } catch (error) {
                return null;
            }
        }
    }, {
        key: 'guid',
        value: function guid() {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
            }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
        }
    }, {
        key: 'replaceAll',
        value: function replaceAll(string, search, replace) {
            return string.split(search).join(replace);
        }
    }, {
        key: 'get',
        value: function get(url, success, error) {
            var _this2 = this;

            var throttle = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

            setTimeout(function () {
                var xhr = new XMLHttpRequest();
                xhr.open('GET', url, true);
                xhr.onload = function () {
                    if (xhr.readyState != 4 || xhr.status != 200 && xhr.status != 304) {
                        error([xhr.readyState, xhr.status, xhr.statusText]);
                    }

                    if (_this2.isJsonString(xhr.responseText)) {
                        success(_this2.jsonStringToObject(xhr.responseText));
                    } else {
                        success(xhr.responseText);
                    }
                };
                xhr.onerror = function () {
                    error([xhr.readyState, xhr.status, xhr.statusText]);
                };
                xhr.send(null);
            }, throttle);
        }
    }, {
        key: 'post',
        value: function post(url) {
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var success = arguments[2];
            var error = arguments[3];

            var _this3 = this;

            var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
            var throttle = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

            setTimeout(function () {
                var xhr = new XMLHttpRequest();
                xhr.open('POST', url, true);
                xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
                xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
                if (_this3.x(headers)) {
                    (0, _entries2.default)(headers).forEach(function (_ref10) {
                        var _ref11 = (0, _slicedToArray3.default)(_ref10, 2),
                            headers__key = _ref11[0],
                            headers__value = _ref11[1];

                        xhr.setRequestHeader(headers__key, headers__value);
                    });
                }
                xhr.onload = function () {
                    if (xhr.readyState != 4 || xhr.status != 200 && xhr.status != 304) {
                        if (_this3.isJsonString(xhr.statusText)) {
                            error(_this3.jsonStringToObject(xhr.statusText));
                        } else {
                            error(xhr.statusText);
                        }
                    }
                    if (_this3.isJsonString(xhr.responseText)) {
                        success(_this3.jsonStringToObject(xhr.responseText));
                    } else {
                        success(xhr.responseText);
                    }
                };
                xhr.onerror = function () {
                    error([xhr.readyState, xhr.status, xhr.statusText]);
                };
                xhr.send((0, _stringify2.default)(data));
            }, throttle);
        }
    }, {
        key: 'getWithPromise',
        value: function getWithPromise(url) {
            var _this4 = this;

            var throttle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            return new _promise2.default(function (resolve, reject) {
                _this4.get(url, function (v) {
                    resolve(v);
                }, function (v) {
                    reject(v);
                }, throttle);
            });
        }
    }, {
        key: 'postWithPromise',
        value: function postWithPromise(url) {
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            var _this5 = this;

            var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var throttle = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

            return new _promise2.default(function (resolve, reject) {
                _this5.post(url, data, function (v) {
                    resolve(v);
                }, function (v) {
                    reject(v);
                }, headers, throttle);
            });
        }
    }, {
        key: 'onResizeHorizontal',
        value: function onResizeHorizontal(fun) {
            var windowWidth = window.innerWidth,
                windowWidthNew = void 0,
                timeout = void 0;
            window.addEventListener('resize', function () {
                windowWidthNew = window.innerWidth;
                if (windowWidthNew != windowWidth) {
                    windowWidth = windowWidthNew;
                    if (timeout) {
                        clearTimeout(timeout);
                    }
                    timeout = window.setTimeout(function () {
                        fun();
                    }, 250);
                }
            });
            fun();
        }
    }, {
        key: 'onResizeVertical',
        value: function onResizeVertical(fun) {
            var windowHeight = window.innerHeight,
                windowHeightNew,
                timeout;
            window.addEventListener('resize', function () {
                windowHeightNew = window.innerHeight;
                if (windowHeightNew != windowHeight) {
                    windowHeight = windowHeightNew;
                    if (timeout) {
                        clearTimeout(timeout);
                    }
                    timeout = window.setTimeout(function () {
                        fun();
                    }, 250);
                }
            });
            fun();
        }
    }, {
        key: 'uniqueArray',
        value: function uniqueArray(array) {
            var seen = {},
                ret_arr = [];
            for (var i = 0; i < array.length; i++) {
                if (!(array[i] in seen)) {
                    ret_arr.push(array[i]);
                    seen[array[i]] = true;
                }
            }
            return ret_arr;
        }
    }, {
        key: 'charToInt',
        value: function charToInt(val) {
            val = val.toUpperCase();
            var base = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
                i = void 0,
                j = void 0,
                result = 0;
            for (i = 0, j = val.length - 1; i < val.length; i += 1, j -= 1) {
                result += Math.pow(base.length, j) * (base.indexOf(val[i]) + 1);
            }
            return result;
        }
    }, {
        key: 'intToChar',
        value: function intToChar(num) {
            for (var ret = '', a = 1, b = 26; (num -= a) >= 0; a = b, b *= 26) {
                ret = String.fromCharCode(parseInt(num % b / a) + 65) + ret;
            }
            return ret;
        }
    }, {
        key: 'incChar',
        value: function incChar(char) {
            var shift = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

            return this.intToChar(this.charToInt(char) + shift);
        }
    }, {
        key: 'decChar',
        value: function decChar(char) {
            var shift = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

            return this.intToChar(this.charToInt(char) - shift);
        }
    }, {
        key: 'range',
        value: function range(start, end) {
            var range = [],
                typeofStart = typeof start === 'undefined' ? 'undefined' : (0, _typeof3.default)(start),
                typeofEnd = typeof end === 'undefined' ? 'undefined' : (0, _typeof3.default)(end),
                step = 1;
            if (typeofStart == 'undefined' || typeofEnd == 'undefined' || typeofStart != typeofEnd) {
                return null;
            }
            if (end < start) {
                step = -step;
            }
            if (typeofStart == 'number') {
                while (step > 0 ? end >= start : end <= start) {
                    range.push(start);
                    start += step;
                }
            } else if (typeofStart == 'string') {
                if (start.length != 1 || end.length != 1) {
                    return null;
                }
                start = start.charCodeAt(0);
                end = end.charCodeAt(0);
                while (step > 0 ? end >= start : end <= start) {
                    range.push(String.fromCharCode(start));
                    start += step;
                }
            } else {
                return null;
            }
            return range;
        }
    }, {
        key: 'dateToWeek',
        value: function dateToWeek() {
            var d = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            if (d === null) {
                d = new Date();
            }
            d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
            d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
            var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1)),
                weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
            return weekNo;
        }
    }, {
        key: 'weekToDate',
        value: function weekToDate(w, y) {
            var simple = new Date(y, 0, 1 + (w - 1) * 7),
                dow = simple.getDay(),
                ISOweekStart = simple;
            if (dow <= 4) {
                ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
            } else {
                ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
            }
            ISOweekStart.setUTCHours(0, 0, 0, 0);
            return ISOweekStart;
        }
    }, {
        key: 'addDays',
        value: function addDays(date, days) {
            var result = new Date(date);
            result.setDate(result.getDate() + days);
            return result;
        }
    }, {
        key: 'objectsAreEqual',
        value: function objectsAreEqual(x, y) {
            var _this = this;
            if (x === null || x === undefined || y === null || y === undefined) {
                return x === y;
            }
            if (x.constructor !== y.constructor) {
                return false;
            }
            if (x instanceof Function) {
                return x === y;
            }
            if (x instanceof RegExp) {
                return x === y;
            }
            if (x === y || x.valueOf() === y.valueOf()) {
                return true;
            }
            if (Array.isArray(x) && x.length !== y.length) {
                return false;
            }
            if (x instanceof Date) {
                return false;
            }
            if (!(x instanceof Object)) {
                return false;
            }
            if (!(y instanceof Object)) {
                return false;
            }
            var p = (0, _keys2.default)(x);
            return (0, _keys2.default)(y).every(function (i) {
                return p.indexOf(i) !== -1;
            }) && p.every(function (i) {
                return _this.objectsAreEqual(x[i], y[i]);
            });
        }
    }, {
        key: 'containsObject',
        value: function containsObject(obj, list) {
            var x;
            for (x in list) {
                if (list.hasOwnProperty(x) && this.objectsAreEqual(list[x], obj)) {
                    return true;
                }
            }
            return false;
        }
    }, {
        key: 'fadeOut',
        value: function fadeOut(el) {
            var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;

            if (speed <= 25) {
                speed = 25;
            }
            return new _promise2.default(function (resolve) {
                el.style.opacity = 1;
                (function fade() {
                    if ((el.style.opacity -= 25 / speed) < 0) {
                        el.style.display = 'none';
                        resolve();
                    } else {
                        requestAnimationFrame(fade);
                    }
                })();
            });
        }
    }, {
        key: 'fadeIn',
        value: function fadeIn(el) {
            var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;

            if (speed <= 25) {
                speed = 25;
            }
            return new _promise2.default(function (resolve) {
                el.style.opacity = 0;
                el.style.display = 'block';
                (function fade() {
                    var val = parseFloat(el.style.opacity);
                    if (!((val += 25 / speed) > 1)) {
                        el.style.opacity = val;
                        requestAnimationFrame(fade);
                    } else {
                        resolve();
                    }
                })();
            });
        }
    }, {
        key: 'scrollTop',
        value: function scrollTop() {
            var doc = document.documentElement;
            return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        }
    }, {
        key: 'scrollLeft',
        value: function scrollLeft() {
            var doc = document.documentElement;
            return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
        }
    }, {
        key: 'offsetTop',
        value: function offsetTop(el) {
            return el.getBoundingClientRect().top + window.pageYOffset - document.documentElement.clientTop;
        }
    }, {
        key: 'offsetLeft',
        value: function offsetLeft(el) {
            return el.getBoundingClientRect().left + window.pageXOffset - document.documentElement.clientLeft;
        }
    }, {
        key: 'scrollTo',
        value: function scrollTo(to) {
            var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;

            return new _promise2.default(function (resolve) {
                if (!hlp.isNumeric(to)) {
                    to = to.getBoundingClientRect().top + window.pageYOffset - document.documentElement.clientTop;
                }

                var element = document.documentElement,
                    start = element.scrollTop,
                    change = to - start,
                    startDate = +new Date(),

                // t = current time
                // b = start value
                // c = change in value
                // d = duration
                easeInOutQuad = function easeInOutQuad(t, b, c, d) {
                    t /= d / 2;
                    if (t < 1) return c / 2 * t * t + b;
                    t--;
                    return -c / 2 * (t * (t - 2) - 1) + b;
                },
                    easeInOutCirc = function easeInOutCirc(t, b, c, d) {
                    t /= d / 2;
                    if (t < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
                    t -= 2;
                    return c / 2 * (Math.sqrt(1 - t * t) + 1) + b;
                },
                    animateScroll = function animateScroll() {
                    var currentDate = +new Date();
                    var currentTime = currentDate - startDate;
                    element.scrollTop = parseInt(easeInOutCirc(currentTime, start, change, duration));
                    if (currentTime < duration) {
                        requestAnimationFrame(animateScroll);
                    } else {
                        element.scrollTop = to;
                        resolve();
                    }
                };
                animateScroll();
            });
        }
    }, {
        key: 'loadJs',
        value: function loadJs(urls) {
            if (!hlp.isArray(urls)) {
                urls = [urls];
            }
            var promises = [];
            hlp.loop(urls, function (urls__value, urls__key) {
                promises.push(new _promise2.default(function (resolve, reject) {
                    var script = document.createElement('script');
                    script.src = urls__value;
                    script.onload = function () {
                        resolve();
                    };
                    document.head.appendChild(script);
                }));
            });
            return _promise2.default.all(promises);
        }
    }, {
        key: 'loadJsSequentially',
        value: function () {
            var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(urls) {
                var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, urls__value;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (!hlp.isArray(urls)) {
                                    urls = [urls];
                                }
                                _iteratorNormalCompletion = true;
                                _didIteratorError = false;
                                _iteratorError = undefined;
                                _context.prev = 4;
                                _iterator = (0, _getIterator3.default)(urls);

                            case 6:
                                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                    _context.next = 13;
                                    break;
                                }

                                urls__value = _step.value;
                                _context.next = 10;
                                return hlp.loadJs(urls__value);

                            case 10:
                                _iteratorNormalCompletion = true;
                                _context.next = 6;
                                break;

                            case 13:
                                _context.next = 19;
                                break;

                            case 15:
                                _context.prev = 15;
                                _context.t0 = _context['catch'](4);
                                _didIteratorError = true;
                                _iteratorError = _context.t0;

                            case 19:
                                _context.prev = 19;
                                _context.prev = 20;

                                if (!_iteratorNormalCompletion && _iterator.return) {
                                    _iterator.return();
                                }

                            case 22:
                                _context.prev = 22;

                                if (!_didIteratorError) {
                                    _context.next = 25;
                                    break;
                                }

                                throw _iteratorError;

                            case 25:
                                return _context.finish(22);

                            case 26:
                                return _context.finish(19);

                            case 27:
                                return _context.abrupt('return');

                            case 28:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[4, 15, 19, 27], [20,, 22, 26]]);
            }));

            function loadJsSequentially(_x17) {
                return _ref12.apply(this, arguments);
            }

            return loadJsSequentially;
        }()
    }, {
        key: 'isVisible',
        value: function isVisible(el) {
            return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
        }
    }, {
        key: 'textareaAutoHeight',
        value: function textareaAutoHeight() {
            var _this6 = this;

            var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'textarea';


            this.textareaSetHeights(selector);

            this.onResizeHorizontal(function () {
                _this6.textareaSetHeights(selector);
            });

            [].forEach.call(document.querySelectorAll(selector), function (el) {
                el.addEventListener('keyup', function (e) {
                    _this6.textareaSetHeight(e.target);
                });
            });
        }
    }, {
        key: 'textareaSetHeights',
        value: function textareaSetHeights() {
            var _this7 = this;

            var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'textarea';

            [].forEach.call(document.querySelectorAll(selector), function (el) {
                if (_this7.isVisible(el)) {
                    _this7.textareaSetHeight(el);
                }
            });
        }
    }, {
        key: 'textareaSetHeight',
        value: function textareaSetHeight(el) {
            el.style.height = '5px';
            el.style.height = el.scrollHeight + 'px';
        }
    }, {
        key: 'real100vh',
        value: function real100vh(selector) {
            document.querySelector(selector).style.height = window.innerHeight + 'px';
            // onResizeHorizontal does not work, we really have to trigger on every resize
            window.addEventListener('resize', function () {
                document.querySelector(selector).style.height = window.innerHeight + 'px';
            });
        }
    }, {
        key: 'isNumeric',
        value: function isNumeric(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        }
    }, {
        key: 'animate',
        value: function animate(el, animation) {
            return new _promise2.default(function (resolve) {
                if (el.classList.contains(animation)) {
                    resolve();
                }
                var remove = [];
                el.classList.forEach(function (class__value) {
                    if (class__value.indexOf('animation--') > -1) {
                        remove.push(class__value);
                    }
                });
                remove.forEach(function (class__value) {
                    el.classList.remove(class__value);
                });

                el.classList.add('animation--' + animation);
                hlp.addEventListenerOnce(el, 'animationend', function (event) {
                    if (event.animationName === animation) {
                        resolve();
                    }
                });
            });
        }
    }, {
        key: 'addEventListenerOnce',
        value: function addEventListenerOnce(target, type, listener, addOptions, removeOptions) {
            target.addEventListener(type, function fn(event) {
                target.removeEventListener(type, fn, removeOptions);
                listener.apply(this, arguments, addOptions);
            });
        }
    }, {
        key: 'htmlDecode',
        value: function htmlDecode(value) {
            var tmp = document.createElement('textarea');
            tmp.innerHTML = value;
            return tmp.value;
        }
    }, {
        key: 'htmlEncode',
        value: function htmlEncode(value) {
            return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/`/g, '&#96;');
        }
    }, {
        key: 'closest',
        value: function closest(el, selector) {
            if (!document.documentElement.contains(el)) {
                return null;
            }
            do {
                if (this.matches(el, selector)) {
                    return el;
                }
                el = el.parentElement || el.parentNode;
            } while (el !== null && el.nodeType === 1);
            return null;
        }
    }, {
        key: 'matches',
        value: function matches(el, selector) {
            var node = el,
                nodes = (node.parentNode || node.document).querySelectorAll(selector),
                i = -1;
            while (nodes[++i] && nodes[i] != node) {}
            return !!nodes[i];
        }
    }]);
    return hlp;
}();

/* expose all functions to window */


exports.default = hlp;
window.hlp = {};
(0, _getOwnPropertyNames2.default)(hlp).forEach(function (value, key) {
    if (value === 'length' || value === 'name' || value === 'prototype' || value === 'caller' || value === 'arguments') {
        return;
    }
    window.hlp[value] = hlp[value];
});