#zh-Hans <-> zh-Hant convertor in Javascript
**zh-js** construct 1D **Uint16Array** for single word convertion and Nested Array with Object for phrase correction. It sacrifices space for instant performance. The conversion table is taken from New Tong Wen Tang with GPLv2.

### To use:

Browser:

    <script type="text/javascript" src="zh.js"></script>
    <script type="text/javascript">
    zh.hans($('body')); // jQuery Object
    zh.hant(document.documentElement); // Regular DOM Element
    </script>

Require.js/Node.js:

    var zh = require('zh-js');
    zh.hans('簡體');  // return: 简体
    zh.hant('繁体');  // return: 繁體
	
####The conversion table follows GNU General Public License (GPL) version 2 license from New Tong Wen Tang <http://tongwen.openfoundry.org/>