(function(){
b=document.body;
h=b.parentNode;
n=b.cloneNode(true);
h.appendChild(n);
h.style.overflow='hidden';
s=n.style;
<<<<<<< HEAD
s.width='100%';
s.position='absolute';
s.top=0;
s.opacity=0.5;
s.filter='alpha(opacity=50)';
setInterval(function(){
=======
s.width=bcs.width;
s.marginLeft=bcs.marginLeft;
s.position='absolute';
s.top=0;
s.opacity=0.7;
w.onresize=_ => {
s.width=bcs.width;
s.marginLeft=bcs.marginLeft;
};
setInterval(_ => {
>>>>>>> 2447975 (fixed ff)
t=s.top;
l=s.left;
nt=t.substring(0,t.length-2)*1+Math.ceil(Math.random()*3)-2;
nl=l.substring(0,l.length-2)*1+Math.ceil(Math.random()*3)-2;
nt=(nt>5)?4:nt;
nt=(nt<-5)?-4:nt;
nl=(nl>5)?4:nl;
nl=(nl<-5)?-4:nl;
s.top=nt+'px';
s.left=nl+'px'
},10);
})();