import{r as T,j as d,s as O,e as H,_,d as pe,z as it,w as ge,G as xt,T as me,x as ye}from"./index-CTEygqs1.js";import{E as Ae}from"./table-D-gEDFhI.js";import{w as At,c as C,a as $t,t as rt,s as z,p as gt,b as Dt,d as st,e as Tt,u as ke,i as Pe,D as ve,f as V,g as kt,h as J,j as mt,k as Q,l as at,m as Rt,n as Z,o as tt,q as Pt,r as Gt,v as lt,x as W,y as ct,I as ut,z as Ft,A as bt,B as vt,C as zt,E as Ut,F as Xt,G as Ce,H as Ie,J as Te,R as be,K as we,L as je,M as Ee,N as Me,O as Se}from"./ChartsOverlay-CsvX9fbg.js";import"./TableRow-BX1xVvUO.js";import"./Checkbox-CYH_Ig7U.js";import"./MenuItem-DvTaKpXT.js";import"./Tooltip-B515WghB.js";function Kt(t){this._context=t}Kt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;default:this._context.lineTo(t,e);break}}};function Ct(t){return new Kt(t)}function Yt(t){return t[0]}function Ot(t){return t[1]}function Wt(t,e){var n=C(!0),s=null,o=Ct,i=null,a=At(r);t=typeof t=="function"?t:t===void 0?Yt:C(t),e=typeof e=="function"?e:e===void 0?Ot:C(e);function r(l){var u,f=(l=$t(l)).length,c,h=!1,p;for(s==null&&(i=o(p=a())),u=0;u<=f;++u)!(u<f&&n(c=l[u],u,l))===h&&((h=!h)?i.lineStart():i.lineEnd()),h&&i.point(+t(c,u,l),+e(c,u,l));if(p)return i=null,p+""||null}return r.x=function(l){return arguments.length?(t=typeof l=="function"?l:C(+l),r):t},r.y=function(l){return arguments.length?(e=typeof l=="function"?l:C(+l),r):e},r.defined=function(l){return arguments.length?(n=typeof l=="function"?l:C(!!l),r):n},r.curve=function(l){return arguments.length?(o=l,s!=null&&(i=o(s)),r):o},r.context=function(l){return arguments.length?(l==null?s=i=null:i=o(s=l),r):s},r}function Le(t,e,n){var s=null,o=C(!0),i=null,a=Ct,r=null,l=At(u);t=typeof t=="function"?t:t===void 0?Yt:C(+t),e=typeof e=="function"?e:e===void 0?C(0):C(+e),n=typeof n=="function"?n:n===void 0?Ot:C(+n);function u(c){var h,p,g,x=(c=$t(c)).length,A,v=!1,m,P=new Array(x),y=new Array(x);for(i==null&&(r=a(m=l())),h=0;h<=x;++h){if(!(h<x&&o(A=c[h],h,c))===v)if(v=!v)p=h,r.areaStart(),r.lineStart();else{for(r.lineEnd(),r.lineStart(),g=h-1;g>=p;--g)r.point(P[g],y[g]);r.lineEnd(),r.areaEnd()}v&&(P[h]=+t(A,h,c),y[h]=+e(A,h,c),r.point(s?+s(A,h,c):P[h],n?+n(A,h,c):y[h]))}if(m)return r=null,m+""||null}function f(){return Wt().defined(o).curve(a).context(i)}return u.x=function(c){return arguments.length?(t=typeof c=="function"?c:C(+c),s=null,u):t},u.x0=function(c){return arguments.length?(t=typeof c=="function"?c:C(+c),u):t},u.x1=function(c){return arguments.length?(s=c==null?null:typeof c=="function"?c:C(+c),u):s},u.y=function(c){return arguments.length?(e=typeof c=="function"?c:C(+c),n=null,u):e},u.y0=function(c){return arguments.length?(e=typeof c=="function"?c:C(+c),u):e},u.y1=function(c){return arguments.length?(n=c==null?null:typeof c=="function"?c:C(+c),u):n},u.lineX0=u.lineY0=function(){return f().x(t).y(e)},u.lineY1=function(){return f().x(t).y(n)},u.lineX1=function(){return f().x(s).y(e)},u.defined=function(c){return arguments.length?(o=typeof c=="function"?c:C(!!c),u):o},u.curve=function(c){return arguments.length?(a=c,i!=null&&(r=a(i)),u):a},u.context=function(c){return arguments.length?(c==null?i=r=null:r=a(i=c),u):i},u}const qt={draw(t,e){const n=z(e/gt);t.moveTo(n,0),t.arc(0,0,n,0,rt)}},Ne={draw(t,e){const n=z(e/5)/2;t.moveTo(-3*n,-n),t.lineTo(-n,-n),t.lineTo(-n,-3*n),t.lineTo(n,-3*n),t.lineTo(n,-n),t.lineTo(3*n,-n),t.lineTo(3*n,n),t.lineTo(n,n),t.lineTo(n,3*n),t.lineTo(-n,3*n),t.lineTo(-n,n),t.lineTo(-3*n,n),t.closePath()}},Bt=z(1/3),He=Bt*2,$e={draw(t,e){const n=z(e/He),s=n*Bt;t.moveTo(0,-n),t.lineTo(s,0),t.lineTo(0,n),t.lineTo(-s,0),t.closePath()}},De={draw(t,e){const n=z(e),s=-n/2;t.rect(s,s,n,n)}},Re=.8908130915292852,Vt=st(gt/10)/st(7*gt/10),Ge=st(rt/10)*Vt,Fe=-Dt(rt/10)*Vt,ze={draw(t,e){const n=z(e*Re),s=Ge*n,o=Fe*n;t.moveTo(0,-n),t.lineTo(s,o);for(let i=1;i<5;++i){const a=rt*i/5,r=Dt(a),l=st(a);t.lineTo(l*n,-r*n),t.lineTo(r*s-l*o,l*s+r*o)}t.closePath()}},_t=z(3),Ue={draw(t,e){const n=-z(e/(_t*3));t.moveTo(0,n*2),t.lineTo(-_t*n,-n),t.lineTo(_t*n,-n),t.closePath()}},D=-.5,R=z(3)/2,yt=1/z(12),Xe=(yt/2+1)*3,Ke={draw(t,e){const n=z(e/Xe),s=n/2,o=n*yt,i=s,a=n*yt+n,r=-i,l=a;t.moveTo(s,o),t.lineTo(i,a),t.lineTo(r,l),t.lineTo(D*s-R*o,R*s+D*o),t.lineTo(D*i-R*a,R*i+D*a),t.lineTo(D*r-R*l,R*r+D*l),t.lineTo(D*s+R*o,D*o-R*s),t.lineTo(D*i+R*a,D*a-R*i),t.lineTo(D*r+R*l,D*l-R*r),t.closePath()}},Ye=[qt,Ne,$e,De,ze,Ue,Ke];function Oe(t,e){let n=null,s=At(o);t=typeof t=="function"?t:C(t||qt),e=typeof e=="function"?e:C(e===void 0?64:+e);function o(){let i;if(n||(n=i=s()),t.apply(this,arguments).draw(n,+e.apply(this,arguments)),i)return n=null,i+""||null}return o.type=function(i){return arguments.length?(t=typeof i=="function"?i:C(i),o):t},o.size=function(i){return arguments.length?(e=typeof i=="function"?i:C(+i),o):e},o.context=function(i){return arguments.length?(n=i??null,o):n},o}function wt(t,e,n){t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-e),t._y2+t._k*(t._y1-n),t._x2,t._y2)}function It(t,e){this._context=t,this._k=(1-e)/6}It.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:wt(this,this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2,this._x1=t,this._y1=e;break;case 2:this._point=3;default:wt(this,t,e);break}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=e}};(function t(e){function n(s){return new It(s,e)}return n.tension=function(s){return t(+s)},n})(0);function We(t,e,n){var s=t._x1,o=t._y1,i=t._x2,a=t._y2;if(t._l01_a>Tt){var r=2*t._l01_2a+3*t._l01_a*t._l12_a+t._l12_2a,l=3*t._l01_a*(t._l01_a+t._l12_a);s=(s*r-t._x0*t._l12_2a+t._x2*t._l01_2a)/l,o=(o*r-t._y0*t._l12_2a+t._y2*t._l01_2a)/l}if(t._l23_a>Tt){var u=2*t._l23_2a+3*t._l23_a*t._l12_a+t._l12_2a,f=3*t._l23_a*(t._l23_a+t._l12_a);i=(i*u+t._x1*t._l23_2a-e*t._l12_2a)/f,a=(a*u+t._y1*t._l23_2a-n*t._l12_2a)/f}t._context.bezierCurveTo(s,o,i,a,t._x2,t._y2)}function Jt(t,e){this._context=t,this._alpha=e}Jt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:this.point(this._x2,this._y2);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){if(t=+t,e=+e,this._point){var n=this._x2-t,s=this._y2-e;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(n*n+s*s,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;break;case 2:this._point=3;default:We(this,t,e);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=e}};const qe=function t(e){function n(s){return e?new Jt(s,e):new It(s,0)}return n.alpha=function(s){return t(+s)},n}(.5);function jt(t){return t<0?-1:1}function Et(t,e,n){var s=t._x1-t._x0,o=e-t._x1,i=(t._y1-t._y0)/(s||o<0&&-0),a=(n-t._y1)/(o||s<0&&-0),r=(i*o+a*s)/(s+o);return(jt(i)+jt(a))*Math.min(Math.abs(i),Math.abs(a),.5*Math.abs(r))||0}function Mt(t,e){var n=t._x1-t._x0;return n?(3*(t._y1-t._y0)/n-e)/2:e}function pt(t,e,n){var s=t._x0,o=t._y0,i=t._x1,a=t._y1,r=(i-s)/3;t._context.bezierCurveTo(s+r,o+r*e,i-r,a-r*n,i,a)}function ot(t){this._context=t}ot.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:pt(this,this._t0,Mt(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){var n=NaN;if(t=+t,e=+e,!(t===this._x1&&e===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;break;case 2:this._point=3,pt(this,Mt(this,n=Et(this,t,e)),n);break;default:pt(this,this._t0,n=Et(this,t,e));break}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=e,this._t0=n}}};function Qt(t){this._context=new Zt(t)}(Qt.prototype=Object.create(ot.prototype)).point=function(t,e){ot.prototype.point.call(this,e,t)};function Zt(t){this._context=t}Zt.prototype={moveTo:function(t,e){this._context.moveTo(e,t)},closePath:function(){this._context.closePath()},lineTo:function(t,e){this._context.lineTo(e,t)},bezierCurveTo:function(t,e,n,s,o,i){this._context.bezierCurveTo(e,t,s,n,i,o)}};function St(t){return new ot(t)}function Be(t){return new Qt(t)}function te(t){this._context=t}te.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var t=this._x,e=this._y,n=t.length;if(n)if(this._line?this._context.lineTo(t[0],e[0]):this._context.moveTo(t[0],e[0]),n===2)this._context.lineTo(t[1],e[1]);else for(var s=Lt(t),o=Lt(e),i=0,a=1;a<n;++i,++a)this._context.bezierCurveTo(s[0][i],o[0][i],s[1][i],o[1][i],t[a],e[a]);(this._line||this._line!==0&&n===1)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(t,e){this._x.push(+t),this._y.push(+e)}};function Lt(t){var e,n=t.length-1,s,o=new Array(n),i=new Array(n),a=new Array(n);for(o[0]=0,i[0]=2,a[0]=t[0]+2*t[1],e=1;e<n-1;++e)o[e]=1,i[e]=4,a[e]=4*t[e]+2*t[e+1];for(o[n-1]=2,i[n-1]=7,a[n-1]=8*t[n-1]+t[n],e=1;e<n;++e)s=o[e]/i[e-1],i[e]-=s,a[e]-=s*a[e-1];for(o[n-1]=a[n-1]/i[n-1],e=n-2;e>=0;--e)o[e]=(a[e]-o[e+1])/i[e];for(i[n-1]=(t[n]+o[n-1])/2,e=0;e<n-1;++e)i[e]=2*t[e+1]-o[e+1];return[o,i]}function Ve(t){return new te(t)}function ht(t,e){this._context=t,this._t=e}ht.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&this._point===2&&this._context.lineTo(this._x,this._y),(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;default:{if(this._t<=0)this._context.lineTo(this._x,e),this._context.lineTo(t,e);else{var n=this._x*(1-this._t)+t*this._t;this._context.lineTo(n,this._y),this._context.lineTo(n,e)}break}}this._x=t,this._y=e}};function Je(t){return new ht(t,.5)}function Qe(t){return new ht(t,0)}function Ze(t){return new ht(t,1)}function dt(t){const e=ke();if(!t)return{isHighlighted:!1,isFaded:!1};const n=e.isHighlighted(t),s=!n&&e.isFaded(t);return{isHighlighted:n,isFaded:s}}function tn(t){const e=T.useRef({currentPath:t,previousPath:void 0});return e.current.currentPath!==t&&(e.current={currentPath:t,previousPath:e.current.currentPath}),e.current}const ee=t=>{const e=tn(t);return T.useMemo(()=>e.previousPath?Pe(e.previousPath,e.currentPath):()=>e.currentPath,[e.currentPath,e.previousPath])};function ne(t){return t.replace(" ","_")}function ie(){const{chartId:t}=T.useContext(ve);return T.useMemo(()=>t,[t])}function se(t){const e=V(),n=ie(),s=kt([e],{from:i=>({animatedWidth:i.left}),enter:i=>({animatedWidth:i.width+i.left+i.right}),leave:i=>({animatedWidth:i.width+i.left+i.right}),reset:!1,immediate:t.skipAnimation}),o=ne(`${n}-${t.id}`);return d.jsxs(T.Fragment,{children:[d.jsx("clipPath",{id:o,children:s(i=>d.jsx(J.rect,{x:0,y:0,width:i.animatedWidth,height:e.top+e.height+e.bottom}))}),d.jsx("g",{clipPath:`url(#${o})`,children:t.children})]})}const en=["d","skipAnimation","ownerState"],nn=O(J.path,{name:"MuiAreaElement",slot:"Root",overridesResolver:(t,e)=>e.root})(({ownerState:t})=>({stroke:"none",fill:t.gradientId&&`url(#${t.gradientId})`||t.isHighlighted&&mt(t.color).brighter(1).formatHex()||mt(t.color).brighter(.5).formatHex(),transition:"opacity 0.2s ease-in, fill 0.2s ease-in",opacity:t.isFaded?.3:1}));function sn(t){const{d:e,skipAnimation:n,ownerState:s}=t,o=H(t,en),i=ee(e),a=kt([i],{from:{value:0},to:{value:1},enter:{value:1},reset:!1,immediate:n});return d.jsx(se,{skipAnimation:n,id:`${s.id}-area-clip`,children:a((r,l)=>d.jsx(nn,_({},o,{ownerState:s,d:r.value.to(l)})))})}const on=["id","classes","color","gradientId","slots","slotProps","onClick"];function rn(t){return tt("MuiAreaElement",t)}Q("MuiAreaElement",["root","highlighted","faded"]);const an=t=>{const{classes:e,id:n,isFaded:s,isHighlighted:o}=t,i={root:["root",`series-${n}`,o&&"highlighted",s&&"faded"]};return Z(i,rn,e)};function ln(t){const{id:e,classes:n,color:s,gradientId:o,slots:i,slotProps:a,onClick:r}=t,l=H(t,on),u=at(),{isFaded:f,isHighlighted:c}=dt({seriesId:e}),h={id:e,classes:n,color:s,gradientId:o,isFaded:f,isHighlighted:c},p=an(h),g=(i==null?void 0:i.area)??sn,x=Rt({elementType:g,externalSlotProps:a==null?void 0:a.area,additionalProps:_({},u({type:"line",seriesId:e}),{onClick:r,cursor:r?"pointer":"unset"}),className:p.root,ownerState:h});return d.jsx(g,_({},l,x))}function oe(t){switch(t){case"catmullRom":return qe.alpha(.5);case"linear":return Ct;case"monotoneX":return St;case"monotoneY":return Be;case"natural":return Ve;case"step":return Je;case"stepBefore":return Qe;case"stepAfter":return Ze;default:return St}}const cn=["slots","slotProps","onItemClick","skipAnimation"],un=()=>{const t=lt(),e=W();return T.useMemo(()=>{if(t===void 0)return[];const{series:s,stackingGroups:o}=t,{xAxis:i,yAxis:a,xAxisIds:r,yAxisIds:l}=e,u=r[0],f=l[0];return o.flatMap(({ids:c})=>[...c].reverse().map(h=>{const{xAxisId:p,yAxisId:g,xAxisKey:x=u,yAxisKey:A=f,stackedData:v,data:m,connectNulls:P,baseline:y}=s[h],I=p??x,b=g??A,G=ct(i[I].scale),k=a[b].scale,j=i[I].data,U=a[b].colorScale&&[b,"y"]||i[I].colorScale&&[I,"x"]||void 0,X=Le().x(E=>G(E.x)).defined((E,S)=>P||m[S]!=null).y0(E=>{if(typeof y=="number")return k(y);if(y==="max")return k.range()[1];if(y==="min")return k.range()[0];const S=E.y&&k(E.y[0]);return Number.isNaN(S)?k.range()[0]:S}).y1(E=>E.y&&k(E.y[1])),L=oe(s[h].curve),N=(j==null?void 0:j.map((E,S)=>({x:E,y:v[S]})))??[],w=P?N.filter((E,S)=>m[S]!=null):N,M=X.curve(L)(w)||"";return _({},s[h],{gradientUsed:U,d:M,seriesId:h})}))},[t,e])};function hn(t){const{slots:e,slotProps:n,onItemClick:s,skipAnimation:o}=t,i=H(t,cn),a=Pt(o),r=Gt(),l=un();return d.jsx("g",_({},i,{children:l.map(({d:u,seriesId:f,color:c,area:h,gradientUsed:p})=>!!h&&d.jsx(ln,{id:f,d:u,color:c,gradientId:p&&r(...p),slots:e,slotProps:n,onClick:s&&(g=>s(g,{type:"line",seriesId:f})),skipAnimation:a},f))}))}const dn=["d","skipAnimation","ownerState"],fn=O(J.path,{name:"MuiLineElement",slot:"Root",overridesResolver:(t,e)=>e.root})(({ownerState:t})=>({strokeWidth:2,strokeLinejoin:"round",fill:"none",stroke:t.gradientId&&`url(#${t.gradientId})`||t.isHighlighted&&mt(t.color).brighter(.5).formatHex()||t.color,transition:"opacity 0.2s ease-in, stroke 0.2s ease-in",opacity:t.isFaded?.3:1}));function xn(t){const{d:e,skipAnimation:n,ownerState:s}=t,o=H(t,dn),i=ee(e),a=kt([i],{from:{value:0},to:{value:1},enter:{value:1},reset:!1,immediate:n});return d.jsx(se,{skipAnimation:n,id:`${s.id}-line-clip`,children:a((r,l)=>d.jsx(fn,_({},o,{ownerState:s,d:r.value.to(l)})))})}const _n=["id","classes","color","gradientId","slots","slotProps","onClick"];function pn(t){return tt("MuiLineElement",t)}Q("MuiLineElement",["root","highlighted","faded"]);const gn=t=>{const{classes:e,id:n,isFaded:s,isHighlighted:o}=t,i={root:["root",`series-${n}`,o&&"highlighted",s&&"faded"]};return Z(i,pn,e)};function mn(t){const{id:e,classes:n,color:s,gradientId:o,slots:i,slotProps:a,onClick:r}=t,l=H(t,_n),u=at(),{isFaded:f,isHighlighted:c}=dt({seriesId:e}),h={id:e,classes:n,color:s,gradientId:o,isFaded:f,isHighlighted:c},p=gn(h),g=(i==null?void 0:i.line)??xn,x=Rt({elementType:g,externalSlotProps:a==null?void 0:a.line,additionalProps:_({},u({type:"line",seriesId:e}),{onClick:r,cursor:r?"pointer":"unset"}),className:p.root,ownerState:h});return d.jsx(g,_({},l,x))}const yn=["slots","slotProps","skipAnimation","onItemClick"],An=()=>{const t=lt(),e=W();return T.useMemo(()=>{if(t===void 0)return[];const{series:s,stackingGroups:o}=t,{xAxis:i,yAxis:a,xAxisIds:r,yAxisIds:l}=e,u=r[0],f=l[0];return o.flatMap(({ids:c})=>c.flatMap(h=>{const{xAxisId:p,yAxisId:g,xAxisKey:x=u,yAxisKey:A=f,stackedData:v,data:m,connectNulls:P}=s[h],y=p??x,I=g??A,b=ct(i[y].scale),G=a[I].scale,k=i[y].data,j=a[I].colorScale&&[I,"y"]||i[y].colorScale&&[y,"x"]||void 0,U=Wt().x(w=>b(w.x)).defined((w,M)=>P||m[M]!=null).y(w=>G(w.y[1])),X=(k==null?void 0:k.map((w,M)=>({x:w,y:v[M]})))??[],L=P?X.filter((w,M)=>m[M]!=null):X,N=U.curve(oe(s[h].curve))(L)||"";return _({},s[h],{gradientUsed:j,d:N,seriesId:h})}))},[t,e])};function kn(t){const{slots:e,slotProps:n,skipAnimation:s,onItemClick:o}=t,i=H(t,yn),a=Pt(s),r=Gt(),l=An();return d.jsx("g",_({},i,{children:l.map(({d:u,seriesId:f,color:c,gradientUsed:h})=>d.jsx(mn,{id:f,d:u,color:c,gradientId:h&&r(...h),skipAnimation:a,slots:e,slotProps:n,onClick:o&&(p=>o(p,{type:"line",seriesId:f}))},f))}))}function Pn(t){return tt("MuiMarkElement",t)}Q("MuiMarkElement",["root","highlighted","faded"]);const re=t=>{const{classes:e,id:n,isFaded:s,isHighlighted:o}=t,i={root:["root",`series-${n}`,o&&"highlighted",s&&"faded"]};return Z(i,Pn,e)},vn=["x","y","id","classes","color","dataIndex","onClick","skipAnimation","shape"];function Cn(t){var P;const{x:e,y:n,id:s,classes:o,color:i,dataIndex:a,onClick:r,skipAnimation:l,shape:u}=t,f=H(t,vn),c=pe(),h=at(),{isFaded:p,isHighlighted:g}=dt({seriesId:s}),{axis:x}=T.useContext(ut),A=Ft({to:{x:e,y:n},immediate:l}),v={id:s,classes:o,isHighlighted:((P=x.x)==null?void 0:P.index)===a||g,isFaded:p,color:i},m=re(v);return d.jsx(J.circle,_({},f,{cx:A.x,cy:A.y,r:5,fill:(c.vars||c).palette.background.paper,stroke:i,strokeWidth:2,className:m.root,onClick:r,cursor:r?"pointer":"unset"},h({type:"line",seriesId:s,dataIndex:a})))}function In(t){return"circle cross diamond square star triangle wye".split(/ /).indexOf(t)||0}const Tn=["x","y","id","classes","color","shape","dataIndex","onClick","skipAnimation"],bn=O(J.path,{name:"MuiMarkElement",slot:"Root",overridesResolver:(t,e)=>e.root})(({ownerState:t,theme:e})=>({fill:(e.vars||e).palette.background.paper,stroke:t.color,strokeWidth:2}));function wn(t){var m;const{x:e,y:n,id:s,classes:o,color:i,shape:a,dataIndex:r,onClick:l,skipAnimation:u}=t,f=H(t,Tn),c=at(),{isFaded:h,isHighlighted:p}=dt({seriesId:s}),{axis:g}=T.useContext(ut),x=Ft({to:{x:e,y:n},immediate:u}),A={id:s,classes:o,isHighlighted:((m=g.x)==null?void 0:m.index)===r||p,isFaded:h,color:i},v=re(A);return d.jsx(bn,_({},f,{style:{transform:bt([x.x,x.y],(P,y)=>`translate(${P}px, ${y}px)`),transformOrigin:bt([x.x,x.y],(P,y)=>`${P}px ${y}px`)},ownerState:A,className:v.root,d:Oe(Ye[In(a)])(),onClick:l,cursor:l?"pointer":"unset"},c({type:"line",seriesId:s,dataIndex:r})))}const jn=["slots","slotProps","skipAnimation","onItemClick","experimentalRendering"];function En(t){const{slots:e,slotProps:n,skipAnimation:s,onItemClick:o,experimentalRendering:i}=t,a=H(t,jn),r=Pt(s),l=lt(),u=W(),f=ie(),c=V(),h=(e==null?void 0:e.mark)??(i?Cn:wn);if(l===void 0)return null;const{series:p,stackingGroups:g}=l,{xAxis:x,yAxis:A,xAxisIds:v,yAxisIds:m}=u,P=v[0],y=m[0];return d.jsx("g",_({},a,{children:g.flatMap(({ids:I})=>I.map(b=>{const{xAxisId:G,yAxisId:k,xAxisKey:j=P,yAxisKey:U=y,stackedData:X,data:L,showMark:N=!0}=p[b];if(N===!1)return null;const w=G??j,M=k??U,E=ct(x[w].scale),S=A[M].scale,K=x[w].data;if(K===void 0)throw new Error(`MUI X: ${w===vt?"The first `xAxis`":`The x-axis with id "${w}"`} should have data property to be able to display a line plot.`);const q=ne(`${f}-${b}-line-clip`),ft=zt(p[b],x[w],A[M]);return d.jsx("g",{clipPath:`url(#${q})`,children:K==null?void 0:K.map((Y,F)=>{const $=L[F]==null?null:X[F][1];return{x:E(Y),y:$===null?null:S($),position:Y,value:$,index:F}}).filter(({x:Y,y:F,index:$,position:B,value:et})=>et===null||F===null||!c.isPointInside({x:Y,y:F})?!1:N===!0?!0:N({x:Y,y:F,index:$,position:B,value:et})).map(({x:Y,y:F,index:$})=>d.jsx(h,_({id:b,dataIndex:$,shape:"circle",color:ft($),x:Y,y:F,skipAnimation:r,onClick:o&&(B=>o(B,{type:"line",seriesId:b,dataIndex:$}))},n==null?void 0:n.mark),`${b}-${$}`))},b)}))}))}function Mn(t){const{id:e,offset:n}=t,{left:s,top:o,width:i,height:a}=V(),r=_({top:0,right:0,bottom:0,left:0},n);return d.jsx("clipPath",{id:e,children:d.jsx("rect",{x:s-r.left,y:o-r.top,width:i+r.left+r.right,height:a+r.top+r.bottom})})}const Sn=["x","y","id","classes","color"];function Ln(t){return tt("MuiHighlightElement",t)}Q("MuiHighlightElement",["root"]);const Nn=t=>{const{classes:e,id:n}=t,s={root:["root",`series-${n}`]};return Z(s,Ln,e)},Hn=O("circle",{name:"MuiHighlightElement",slot:"Root",overridesResolver:(t,e)=>e.root})(({ownerState:t})=>({transform:`translate(${t.x}px, ${t.y}px)`,transformOrigin:`${t.x}px ${t.y}px`,fill:t.color}));function $n(t){const{x:e,y:n,id:s,classes:o,color:i}=t,a=H(t,Sn),r={id:s,classes:o,color:i,x:e,y:n},l=Nn(r);return d.jsx(Hn,_({pointerEvents:"none",ownerState:r,className:l.root,cx:0,cy:0,r:a.r===void 0?5:a.r},a))}const Dn=["slots","slotProps"];function Rn(t){var m;const{slots:e,slotProps:n}=t,s=H(t,Dn),o=lt(),i=W(),a=V(),{axis:r}=T.useContext(ut),l=(m=r.x)==null?void 0:m.index;if(l===void 0||o===void 0)return null;const{series:u,stackingGroups:f}=o,{xAxis:c,yAxis:h,xAxisIds:p,yAxisIds:g}=i,x=p[0],A=g[0],v=(e==null?void 0:e.lineHighlight)??$n;return d.jsx("g",_({},s,{children:f.flatMap(({ids:P})=>P.flatMap(y=>{const{xAxisId:I,yAxisId:b,xAxisKey:G=x,yAxisKey:k=A,stackedData:j,data:U,disableHighlight:X}=u[y],L=I??G,N=b??k;if(X||U[l]==null)return null;const w=ct(c[L].scale),M=h[N].scale,E=c[L].data;if(E===void 0)throw new Error(`MUI X: ${L===vt?"The first `xAxis`":`The x-axis with id "${L}"`} should have data property to be able to display a line plot.`);const S=w(E[l]),K=M(j[l][1]);if(!a.isPointInside({x:S,y:K}))return null;const q=zt(u[y],c[L],h[N]);return d.jsx(v,_({id:y,color:q(l),x:S,y:K},n==null?void 0:n.lineHighlight),`${y}`)}))}))}function Gn(t){return tt("MuiChartsGrid",t)}const Nt=Q("MuiChartsGrid",["root","line","horizontalLine","verticalLine"]),Fn=O("g",{name:"MuiChartsGrid",slot:"Root",overridesResolver:(t,e)=>[{[`&.${Nt.verticalLine}`]:e.verticalLine},{[`&.${Nt.horizontalLine}`]:e.horizontalLine},e.root]})({}),ae=O("line",{name:"MuiChartsGrid",slot:"Line",overridesResolver:(t,e)=>e.line})(({theme:t})=>({stroke:(t.vars||t).palette.divider,shapeRendering:"crispEdges",strokeWidth:1}));function zn(t){const{axis:e,drawingArea:n,classes:s}=t,{scale:o,tickNumber:i,tickInterval:a}=e,r=Ut({scale:o,tickNumber:i,tickInterval:a});return d.jsx(T.Fragment,{children:r.map(({formattedValue:l,offset:u})=>d.jsx(ae,{y1:n.top,y2:n.top+n.height,x1:u,x2:u,className:s.verticalLine},`vertical-${l}`))})}function Un(t){const{axis:e,drawingArea:n,classes:s}=t,{scale:o,tickNumber:i,tickInterval:a}=e,r=Ut({scale:o,tickNumber:i,tickInterval:a});return d.jsx(T.Fragment,{children:r.map(({formattedValue:l,offset:u})=>d.jsx(ae,{y1:u,y2:u,x1:n.left,x2:n.left+n.width,className:s.horizontalLine},`horizontal-${l}`))})}const Xn=["vertical","horizontal"],Kn=({classes:t})=>Z({root:["root"],verticalLine:["line","verticalLine"],horizontalLine:["line","horizontalLine"]},Gn,t);function Yn(t){const e=Xt({props:t,name:"MuiChartsGrid"}),n=V(),{vertical:s,horizontal:o}=e,i=H(e,Xn),{xAxis:a,xAxisIds:r,yAxis:l,yAxisIds:u}=W(),f=Kn(e),c=l[u[0]],h=a[r[0]];return d.jsxs(Fn,_({},i,{className:f.root,children:[s&&d.jsx(zn,{axis:h,drawingArea:n,classes:f}),o&&d.jsx(Un,{axis:c,drawingArea:n,classes:f})]}))}function On(t){const{onAxisClick:e}=t,n=Ce(),s=Ie(),{axis:o}=T.useContext(ut),{xAxisIds:i,xAxis:a,yAxisIds:r,yAxis:l}=W();return T.useEffect(()=>{const u=n.current;if(u===null||!e)return()=>{};const f=c=>{var v;c.preventDefault();const h=o.x&&o.x.index!==-1,p=h?i[0]:r[0],g=h?o.x&&o.x.index:o.y&&o.y.index;if(g==null)return;const x={};Object.keys(s).filter(m=>["bar","line"].includes(m)).forEach(m=>{var P;(P=s[m])==null||P.seriesOrder.forEach(y=>{const I=s[m].series[y],b=I.xAxisId??I.xAxisKey,G=I.yAxisId??I.yAxisKey,k=h?b:G;(k===void 0||k===p)&&(x[y]=I.data[g])})});const A=(v=(h?a:l)[p].data)==null?void 0:v[g];e(c,{dataIndex:g,axisValue:A,seriesValues:x})};return u.addEventListener("click",f),()=>{u.removeEventListener("click",f)}},[o.x,o.y,e,s,n,a,i,l,r]),d.jsx(T.Fragment,{})}const Wn=["xAxis","yAxis","series","width","height","margin","colors","dataset","sx","tooltip","onAxisClick","onAreaClick","onLineClick","onMarkClick","axisHighlight","disableLineItemHighlight","legend","grid","topAxis","leftAxis","rightAxis","bottomAxis","children","slots","slotProps","skipAnimation","loading","highlightedItem","onHighlightChange","className","experimentalMarkRendering"],qn=t=>{const{xAxis:e,yAxis:n,series:s,width:o,height:i,margin:a,colors:r,dataset:l,sx:u,tooltip:f,onAxisClick:c,onAreaClick:h,onLineClick:p,onMarkClick:g,axisHighlight:x,disableLineItemHighlight:A,legend:v,grid:m,topAxis:P,leftAxis:y,rightAxis:I,bottomAxis:b,children:G,slots:k,slotProps:j,skipAnimation:U,loading:X,highlightedItem:L,onHighlightChange:N,className:w,experimentalMarkRendering:M}=t,E=H(t,Wn),K=`${Te()}-clip-path`,q=_({},E,{series:s.map(nt=>_({disableHighlight:!!A,type:"line"},nt)),width:o,height:i,margin:a,colors:r,dataset:l,xAxis:e??[{id:vt,scaleType:"point",data:Array.from({length:Math.max(...s.map(nt=>(nt.data??l??[]).length))},(nt,_e)=>_e)}],yAxis:n,sx:u,highlightedItem:L,onHighlightChange:N,disableAxisListener:(f==null?void 0:f.trigger)!=="axis"&&(x==null?void 0:x.x)==="none"&&(x==null?void 0:x.y)==="none"&&!c,className:w,skipAnimation:U}),ft={onAxisClick:c},Y={vertical:m==null?void 0:m.vertical,horizontal:m==null?void 0:m.horizontal},F={clipPath:`url(#${K})`},$={id:K},B={slots:k,slotProps:j,onItemClick:h},et={slots:k,slotProps:j,onItemClick:p},le={slots:k,slotProps:j,onItemClick:g,skipAnimation:U,experimentalRendering:M},ce={slots:k,slotProps:j,loading:X},ue={topAxis:P,leftAxis:y,rightAxis:I,bottomAxis:b,slots:k,slotProps:j},he=_({x:"line"},x),de={slots:k,slotProps:j},fe=_({},v,{slots:k,slotProps:j}),xe=_({},f,{slots:k,slotProps:j});return{chartContainerProps:q,axisClickHandlerProps:ft,gridProps:Y,clipPathProps:$,clipPathGroupProps:F,areaPlotProps:B,linePlotProps:et,markPlotProps:le,overlayProps:ce,chartsAxisProps:ue,axisHighlightProps:he,lineHighlightPlotProps:de,legendProps:fe,tooltipProps:xe,children:G}},Bn=T.forwardRef(function(e,n){const s=Xt({props:e,name:"MuiLineChart"}),{chartContainerProps:o,axisClickHandlerProps:i,gridProps:a,clipPathProps:r,clipPathGroupProps:l,areaPlotProps:u,linePlotProps:f,markPlotProps:c,overlayProps:h,chartsAxisProps:p,axisHighlightProps:g,lineHighlightPlotProps:x,legendProps:A,tooltipProps:v,children:m}=qn(s);return d.jsxs(be,_({ref:n},o,{children:[s.onAxisClick&&d.jsx(On,_({},i)),d.jsx(Yn,_({},a)),d.jsxs("g",_({},l,{children:[d.jsx(hn,_({},u)),d.jsx(kn,_({},f)),d.jsx(we,_({},h)),d.jsx(je,_({},g))]})),d.jsx(Ee,_({},p)),d.jsx("g",{"data-drawing-container":!0,children:d.jsx(En,_({},c))}),d.jsx(Rn,_({},x)),d.jsx(Me,_({},A)),!s.loading&&d.jsx(Se,_({},v)),d.jsx(Mn,_({},r)),m]}))}),Ht=[{year:2022,total:0},{year:2023,total:0},{year:2024,total:0}];function Vn(){const[t,e]=T.useState(Ht),n=async()=>{const{data:{user:s}}=await it.auth.getUser(),o=s==null?void 0:s.id,{data:i,error:a}=await it.from("sales").select("sale_date, amount").eq("user_id",o);if(a){console.error("Error fetching sales data:",a);return}const r=Ht.map(l=>({...l}));i.forEach(l=>{const u=new Date(l.sale_date).getFullYear(),f=r.find(c=>c.year===u);f&&(f.total+=parseFloat(l.amount))}),e(r)};return T.useEffect(()=>{n()},[]),d.jsx(Bn,{xAxis:[{dataKey:"year",valueFormatter:s=>s.toString(),min:2022,max:2024}],series:[{dataKey:"total",label:"Sales Total",showMark:!0,stack:"total",area:!1}],dataset:t,height:300,margin:{top:5},legend:{hidden:!0},grid:{vertical:!0,horizontal:!0}})}function si(){const[t,e]=T.useState([]),n=[{id:"id",numeric:!0,disablePadding:!1,label:"Sale ID"},{id:"product_name",numeric:!1,disablePadding:!1,label:"Product Name"},{id:"price",numeric:!0,disablePadding:!1,label:"Price"},{id:"amount",numeric:!0,disablePadding:!1,label:"Amount"},{id:"sale_date",numeric:!1,disablePadding:!1,label:"Sale Date"}],s=async()=>{const{data:{user:o}}=await it.auth.getUser(),i=o==null?void 0:o.id,{data:a,error:r}=await it.from("sales").select("*").eq("user_id",i);r?console.error("Error fetching sales data:",r):e(a)};return T.useEffect(()=>{s()},[]),d.jsx(ge,{title:"Sales Data",children:d.jsxs(xt,{container:!0,spacing:2,children:[d.jsx(xt,{item:!0,xs:12,md:6,children:t.length>0?d.jsx(Ae,{rows:t,headCells:n,title:"Sales"}):d.jsx(me,{variant:"body2",children:"No data available"})}),d.jsx(xt,{item:!0,xs:12,md:6,children:d.jsx(ye,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",children:d.jsx(Vn,{})})})]})})}export{si as default};
