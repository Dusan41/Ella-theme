!function(){if(window.UploadKit=window.UploadKit||{},!document.querySelector("script[src*='uploadkit-app.js']")&&document.querySelector("div.uploadkit")){window.UploadKit.runImmediately=!0;var t=document.createElement("script");t.async=!0,t.src="https://assets.getuploadkit.com/assets/uploadkit-app.js",document.head.appendChild(t)}window.UploadKit.scanAttributes=function(){function t(){return NodeFilter.FILTER_ACCEPT}function e(t,e,o,a,n){return n?'<a href="https://cdn.getuploadkit.com/'+e+"/"+o+'-/preview/1200x1200" class="uploadkit-preview-link-image" title="'+
atob(a)+'"><img src="https://cdn.getuploadkit.com/'+e+"/"+o+'-/resize/300x/" style="max-width: 50px; max-height: 50px; vertical-align: middle;" /></a>':'<a href="https://cdn.getuploadkit.com/'+e+'/" class="uploadkit-preview-link" target="_blank">'+atob(a)+"</a>"}var o=new RegExp("https:\\/\\/cdn2?\\.shopify\\.com\\/.*\\?.*id=[^&]*&uu=([^&]*)&mo=([^&]*)&fi=([^&]*)(?:(?!&image).)*(&image=true)?","g"),a=t;a.acceptNode=t;for(var n=document.createTreeWalker(document.body,NodeFilter.SHOW_ALL,a,!1),i=[];n.nextNode();){var d=
n.currentNode;if(o.lastIndex=0,3===d.nodeType&&o.exec(d.textContent)&&i.push(d),window.UploadKit.config&&window.UploadKit.config.uploaders&&3===d.nodeType&&d.textContent.indexOf("_")>-1)for(var s=0;s<window.UploadKit.config.uploaders.length;s++)d.textContent=d.textContent.replace("_"+window.UploadKit.config.uploaders[s].name,window.UploadKit.config.uploaders[s].name)}for(var s=0;s<i.length;s++){var d=i[s];o.lastIndex=0;if(o.exec(d.textContent)){var r=document.createElement("span");r.innerHTML=d.textContent.replace(o,
e),d.parentNode.insertBefore(r,d),d.parentNode.removeChild(d)}}if(i.length>0){var c=document.createElement("link");c.type="text/css",c.rel="stylesheet",c.href="https://assets.getuploadkit.com/assets/luminous.css",document.head.appendChild(c);var p=document.createElement("script");p.type="text/javascript",p.async=!0,p.src="https://assets.getuploadkit.com/assets/luminous.js",document.head.appendChild(p),p.onload=function(){new LuminousGallery(document.querySelectorAll("a.uploadkit-preview-link-image"))}}},
window.UploadKit.attributesScanned||(window.UploadKit.attributesScanned=!0),window.UploadKit.skipScanAttributes||window.UploadKit.scanAttributes()}();var isFacebook=navigator.userAgent.match(/instagram|FBAN|FBAV/i);if(isFacebook){var body=document.querySelector("body");body.className=body.className+" facebook-app"}
!function(t){if(!window.UploadKit||!1!==window.UploadKit.EXTEND_XHR){var e=t.prototype.open,o=t.prototype.send;t.prototype.open=function(t,o,a,n,i){this._url=o,e.call(this,t,o,a,n,i)},t.prototype.send=function(t){function e(){4==n.readyState&&this._url&&this._url.indexOf("/cart")>-1&&setTimeout(function(){window.UploadKit&&window.UploadKit.scanAttributes&&window.UploadKit.scanAttributes()},200),a&&a()}var a,n=this;this._url;this.noIntercept||(this.addEventListener?this.addEventListener("readystatechange",
e,!1):(a=this.onreadystatechange,this.onreadystatechange=e)),o.call(this,t)}}}(XMLHttpRequest);
