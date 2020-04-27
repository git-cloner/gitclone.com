$(document).ready(function () {
	$('.dropdown.link').dropdown({
		action: 'hide'
	})

	// Emojify
    emojify.setConfig({
        img_dir: '/img/emoji'
    });
    emojify.run();

    // Highlight JS
    if (typeof hljs != 'undefined') {
        hljs.initHighlightingOnLoad();
    }

    // Set anchor.
    var headers = {};
    var skipped_first = false;
    $('.markdown').find('h1, h2, h3, h4, h5, h6').each(function () {
    	if (!skipped_first) {
    		skipped_first = true;
    		return
    	}
    	
        var node = $(this);
        var val = encodeURIComponent(node.text().toLowerCase().replace(/\s+/g, "-"));
        var name = val;
        if (headers[val] > 0) {
            name = val + '-' + headers[val];
        }
        if (headers[val] == undefined) {
            headers[val] = 1;
        } else {
            headers[val] += 1;
        }
        node = node.wrap('<div id="' + name + '" class="anchor-wrap" ></div>');
        node.append('<a class="anchor" href="#' + name + '"><span class="octicon octicon-link"></span></a>');
    });
})

// ajax封装
function ajax(method,url,params,callback) {
    // method = method.toUpperCase()
    var xhr = new XMLHttpRequest()
    if(method === 'GET' && params!= undefined) {
        if(typeof params === 'string') url += '?' + params
        if(typeof params === 'object') {
            var temp_arr = []
            for(var key in params) {
                var value = params[key]
                temp_arr.push(key + '=' + value)
            }
            params = temp_arr.join('&')
            url+='?'+params
        }
    }
    xhr.open(method,url)
    var data = null
    if(method === 'POST') {
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
        data = params
        xhr.send(data)
    }
    xhr.send('')
    xhr.onreadystatechange = function() {
        if(this.readyState !== 4) return
        callback(xhr.responseText)   // 在这里使用回调
    }
}
// // ajax调用
// ajax('GET','http://127.0.0.1:8887',{name:'taopoppy',age:23,sex:'man'},function(res){
//     console.log(res)
// })