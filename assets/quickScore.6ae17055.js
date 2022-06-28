class k{constructor(t=-1,n=0){this.location=t,this.length=n}max(t){return typeof t=="number"&&(this.length=t-this.location),this.location+this.length}isValid(){return this.location>-1}toArray(){return[this.location,this.max()]}toString(){return this.location==-1?"invalid range":"["+this.location+","+this.max()+")"}}const Q={wordSeparators:`-/\\:()<>%._=&[]+ 	
\r`,uppercaseLetters:(()=>{const r="A".charCodeAt(0),t=[];for(let n=0;n<26;n++)t.push(String.fromCharCode(r+n));return t.join("")})(),ignoredScore:.9,skippedScore:.15,emptyQueryScore:0,maxIterations:Math.pow(2,16)},V={longStringLength:150,maxMatchStartPct:.15,minMatchDensityPct:.75,maxMatchDensityPct:.95,beginningOfStringPct:.1};class K{constructor(t){Object.assign(this,Q,t)}useSkipReduction(){return!0}adjustRemainingScore(t,n,o,s,e,c,m,h){return o*c.length}}class _ extends K{constructor(t){super(Object.assign({},V,t))}useSkipReduction(t,n,o,s,e,c,m){const h=t.length,a=h<=this.longStringLength,f=m.location/h;return a||f<this.maxMatchStartPct}adjustRemainingScore(t,n,o,s,e,c,m,h){const a=t.length<=this.longStringLength,f=h.location/t.length;let i=1,g=1-f;return s||(i=n.length/h.length,i=a&&f<=this.beginningOfStringPct&&i>=this.minMatchDensityPct?1:i,g=i>=this.maxMatchDensityPct?1:g),o*Math.min(c.length,this.longStringLength)*i*g}}function P(r){return r instanceof K?r:new _(r)}const M=P();new K;new K({emptyQueryScore:.9,adjustRemainingScore:function(r,t,n,o,s,e,c,m){let h=n*e.length;return o||(h+=(c.location-s.location)/2),h}});function b(r="",t="",n,o=r.toLocaleLowerCase(),s=t.toLocaleLowerCase(),e=M,c=new k(0,r.length)){let m=0;if(t)return h(c,new k(0,t.length),new k);return e.emptyQueryScore;function h(a,f,i){if(f.length){if(f.length>a.length)return 0}else return e.ignoredScore;const g=n&&n.length;for(let u=f.length;u>0;u--){if(m>e.maxIterations)return 0;m++;const S=s.substring(f.location,f.location+u),l=B(o,S,new k(a.location,a.length-f.length+u));if(!l.isValid())continue;i.isValid()?i.location=Math.min(i.location,l.location):i.location=l.location,i.max(l.max()),n&&n.push([l.location,l.max()]);const y=new k(l.max(),a.max()-l.max()),x=new k(f.location+u,f.length-u),C=h(y,x,i);if(C){let p=y.location-a.location,w=!0;const L=e.useSkipReduction(r,t,C,y,a,y,l,i);if(l.location>a.location)if(L&&e.wordSeparators.indexOf(r[l.location-1])>-1)for(let d=l.location-2;d>=a.location;d--)e.wordSeparators.indexOf(r[d])>-1?p--:p-=e.skippedScore;else if(L&&e.uppercaseLetters.indexOf(r[l.location])>-1)for(let d=l.location-1;d>=a.location;d--)e.uppercaseLetters.indexOf(r[d])>-1?p--:p-=e.skippedScore;else p-=l.location-a.location,w=!1;return p+=e.adjustRemainingScore(r,t,C,w,a,y,l,i),p/=a.length,p}else n&&(n.length=g)}return 0}}b.createConfig=P;function B(r,t,n){const o=r.indexOf(t,n.location),s=new k;return o>-1&&o<n.max()&&(s.location=o,s.length=t.length),s}class z{constructor(t=[],n={}){const{scorer:o=b,transformString:s=F,keys:e=[],sortKey:c="",minimumScore:m=0,config:h}=Array.isArray(n)?{keys:n}:n;this.scorer=o,this.minimumScore=m,this.config=h,this.transformStringFunc=s,typeof o.createConfig=="function"&&(this.config=o.createConfig(h)),this.setKeys(e,c),this.setItems(t),this.compareScoredStrings=this.compareScoredStrings.bind(this)}search(t){const n=[],{items:o,transformedItems:s,keys:e,config:c}=this,m=t?this.minimumScore:-1,h=this.transformString(t),a=o.length,f=e.length;if(typeof o[0]=="string")for(let i=0;i<a;i++){const g=o[i],u=s[i],S=[],l=this.scorer(g,t,S,u,h,c);l>m&&n.push({item:g,score:l,matches:S,_:u})}else for(let i=0;i<a;i++){const g=o[i],u=s[i],S={item:g,score:0,scoreKey:"",scoreValue:"",scores:{},matches:{},_:u},l=f?e:Object.keys(u),y=l.length;let x=0,C="",p="";for(let w=0;w<y;w++){const L=l[w],{name:d=L,scorer:D=this.scorer}=L,O=u[d];if(O){const A=this.getItemString(g,L),I=[],j=D(A,t,I,O,h,c);S.scores[d]=j,S.matches[d]=I,j>x&&(x=j,C=d,p=A)}}x>m&&(S.score=x,S.scoreKey=C,S.scoreValue=p,n.push(S))}return n.sort(this.compareScoredStrings),n}setKeys(t,n=""){if(this.keys=[].concat(t),this.sortKey=n,this.keys.length){const{scorer:o}=this;this.keys=this.keys.map(s=>{const e=s.length?{name:s,scorer:o}:s;return Array.isArray(e.name)?e.name.length>1?(e.path=e.name,e.name=e.path.join(".")):[e.name]=e.name:e.name.indexOf(".")>-1&&(e.path=e.name.split(".")),e}),this.sortKey=this.sortKey||this.keys[0].name}}setItems(t){const n=[].concat(t),o=n.length,s=[],e=this.keys,c=e.length;if(typeof n[0]=="string")for(let m=0;m<o;m++)s.push(this.transformString(n[m]));else for(let m=0;m<o;m++){const h=n[m],a={},f=c?e:Object.keys(h),i=f.length;for(let g=0;g<i;g++){const u=f[g],S=this.getItemString(h,u);S&&typeof S=="string"&&(a[u.name||u]=this.transformString(S))}s.push(a)}this.items=n,this.transformedItems=s}getItemString(t,n){const{name:o,path:s}=n;return s?s.reduce((e,c)=>e&&e[c],t):t[o||n]}transformString(t){return this.transformStringFunc(t)}compareScoredStrings(t,n){const o=t._,s=n._,e=typeof o=="string"?o:o[this.sortKey],c=typeof s=="string"?s:s[this.sortKey];return t.score===n.score?e===void 0||c===void 0?e===void 0&&c===void 0?0:e===void 0?1:-1:e===c?0:e<c?-1:1:n.score-t.score}}function F(r){return r.toLocaleLowerCase()}export{z as QuickScore};