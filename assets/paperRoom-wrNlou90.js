import{c as og,e as lg,r as cg,j as fe,l as $g}from"./index-Dm4UEXgw.js";import{l as em}from"./instagramMedia-BfuQph1p.js";const Sd="186",tm=0,tp=1,nm=2,hf=1,im=2,Xc=3,Xo=0,ir=1,Ur=2,ms=0,Zc=1,np=2,ip=3,rp=4,rm=5,jl=100,am=101,sm=102,om=103,lm=104,cm=200,um=201,fm=202,hm=203,ug=204,fg=205,dm=206,pm=207,gm=208,mm=209,vm=210,_m=211,xm=212,Mm=213,ym=214,Nh=0,Uh=1,Fh=2,jc=3,Oh=4,Bh=5,zh=6,kh=7,bd=0,Sm=1,bm=2,Da=0,hg=1,dg=2,pg=3,gg=4,mg=5,vg=6,_g=7,xg=300,Yo=301,ic=302,$f=303,eh=304,Af=306,Hh=1e3,gs=1001,Gh=1002,_i=1003,Em=1004,Vu=1005,Li=1006,th=1007,Go=1008,dr=1009,Mg=1010,yg=1011,$c=1012,Ed=1013,Na=1014,La=1015,Ua=1016,Td=1017,wd=1018,eu=1020,Sg=35902,bg=35899,Eg=1021,Tg=1022,ra=1023,xs=1026,Vo=1027,wg=1028,Ad=1029,Zo=1030,Rd=1031,Cd=1033,df=33776,pf=33777,gf=33778,mf=33779,Vh=35840,Wh=35841,Xh=35842,Yh=35843,Zh=36196,Jh=37492,Kh=37496,Qh=37488,qh=37489,_f=37490,jh=37491,$h=37808,ed=37809,td=37810,nd=37811,id=37812,rd=37813,ad=37814,sd=37815,od=37816,ld=37817,cd=37818,ud=37819,fd=37820,hd=37821,dd=36492,pd=36494,gd=36495,md=36283,vd=36284,xf=36285,_d=36286,Tm=3200,Mf=0,wm=1,Ys="",Xi="srgb",yf="srgb-linear",Sf="linear",xn="srgb",nh=7680,Am=519,Rm=512,Cm=513,Pm=514,Pd=515,Lm=516,Im=517,Ld=518,Dm=519,Nm=35044,ap="300 es",Ia=2e3,tu=2001;function Um(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function bf(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Fm(){const i=bf("canvas");return i.style.display="block",i}const sp={};function op(...i){const e="THREE."+i.shift();console.log(e,...i)}function Ag(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Mt(...i){i=Ag(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function an(...i){i=Ag(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function tc(...i){const e=i.join(" ");e in sp||(sp[e]=!0,Mt(...i))}function Om(i,e,t){return new Promise(function(n,o){function c(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:o();break;case i.TIMEOUT_EXPIRED:setTimeout(c,t);break;default:n()}}setTimeout(c,t)})}const Bm={[Nh]:Uh,[Fh]:zh,[Oh]:kh,[jc]:Bh,[Uh]:Nh,[zh]:Fh,[kh]:Oh,[Bh]:jc};class Jo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const o=n[e];if(o!==void 0){const c=o.indexOf(t);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const o=n.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const Ci=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let lp=1234567;const Jc=Math.PI/180,nu=180/Math.PI;function sc(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ci[i&255]+Ci[i>>8&255]+Ci[i>>16&255]+Ci[i>>24&255]+"-"+Ci[e&255]+Ci[e>>8&255]+"-"+Ci[e>>16&15|64]+Ci[e>>24&255]+"-"+Ci[t&63|128]+Ci[t>>8&255]+"-"+Ci[t>>16&255]+Ci[t>>24&255]+Ci[n&255]+Ci[n>>8&255]+Ci[n>>16&255]+Ci[n>>24&255]).toLowerCase()}function Gt(i,e,t){return Math.max(e,Math.min(t,i))}function Id(i,e){return(i%e+e)%e}function zm(i,e,t,n,o){return n+(i-e)*(o-n)/(t-e)}function km(i,e,t){return i!==e?(t-i)/(e-i):0}function Kc(i,e,t){return(1-t)*i+t*e}function Hm(i,e,t,n){return Kc(i,e,1-Math.exp(-t*n))}function Gm(i,e=1){return e-Math.abs(Id(i,e*2)-e)}function Vm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Wm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Xm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ym(i,e){return i+Math.random()*(e-i)}function Zm(i){return i*(.5-Math.random())}function Jm(i){i!==void 0&&(lp=i);let e=lp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Km(i){return i*Jc}function Qm(i){return i*nu}function qm(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function jm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function $m(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function e0(i,e,t,n,o){const c=Math.cos,u=Math.sin,d=c(t/2),p=u(t/2),g=c((e+n)/2),S=u((e+n)/2),E=c((e-n)/2),_=u((e-n)/2),x=c((n-e)/2),R=u((n-e)/2);switch(o){case"XYX":i.set(d*S,p*E,p*_,d*g);break;case"YZY":i.set(p*_,d*S,p*E,d*g);break;case"ZXZ":i.set(p*E,p*_,d*S,d*g);break;case"XZX":i.set(d*S,p*R,p*x,d*g);break;case"YXY":i.set(p*x,d*S,p*R,d*g);break;case"ZYZ":i.set(p*R,p*x,d*S,d*g);break;default:Mt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function $l(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Vi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ps={DEG2RAD:Jc,RAD2DEG:nu,generateUUID:sc,clamp:Gt,euclideanModulo:Id,mapLinear:zm,inverseLerp:km,lerp:Kc,damp:Hm,pingpong:Gm,smoothstep:Vm,smootherstep:Wm,randInt:Xm,randFloat:Ym,randFloatSpread:Zm,seededRandom:Jm,degToRad:Km,radToDeg:Qm,isPowerOfTwo:qm,ceilPowerOfTwo:jm,floorPowerOfTwo:$m,setQuaternionFromProperEuler:e0,normalize:Vi,denormalize:$l},Gd=class Gd{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6],this.y=o[1]*t+o[4]*n+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Gt(this.x,e.x,t.x),this.y=Gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Gt(this.x,e,t),this.y=Gt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),o=Math.sin(t),c=this.x-e.x,u=this.y-e.y;return this.x=c*n-u*o+e.x,this.y=c*o+u*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Gd.prototype.isVector2=!0;let ut=Gd;class oc{constructor(e=0,t=0,n=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=o}static slerpFlat(e,t,n,o,c,u,d){let p=n[o+0],g=n[o+1],S=n[o+2],E=n[o+3],_=c[u+0],x=c[u+1],R=c[u+2],N=c[u+3];if(E!==N||p!==_||g!==x||S!==R){let w=p*_+g*x+S*R+E*N;w<0&&(_=-_,x=-x,R=-R,N=-N,w=-w);let M=1-d;if(w<.9995){const O=Math.acos(w),k=Math.sin(O);M=Math.sin(M*O)/k,d=Math.sin(d*O)/k,p=p*M+_*d,g=g*M+x*d,S=S*M+R*d,E=E*M+N*d}else{p=p*M+_*d,g=g*M+x*d,S=S*M+R*d,E=E*M+N*d;const O=1/Math.sqrt(p*p+g*g+S*S+E*E);p*=O,g*=O,S*=O,E*=O}}e[t]=p,e[t+1]=g,e[t+2]=S,e[t+3]=E}static multiplyQuaternionsFlat(e,t,n,o,c,u){const d=n[o],p=n[o+1],g=n[o+2],S=n[o+3],E=c[u],_=c[u+1],x=c[u+2],R=c[u+3];return e[t]=d*R+S*E+p*x-g*_,e[t+1]=p*R+S*_+g*E-d*x,e[t+2]=g*R+S*x+d*_-p*E,e[t+3]=S*R-d*E-p*_-g*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,o){return this._x=e,this._y=t,this._z=n,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,o=e._y,c=e._z,u=e._order,d=Math.cos,p=Math.sin,g=d(n/2),S=d(o/2),E=d(c/2),_=p(n/2),x=p(o/2),R=p(c/2);switch(u){case"XYZ":this._x=_*S*E+g*x*R,this._y=g*x*E-_*S*R,this._z=g*S*R+_*x*E,this._w=g*S*E-_*x*R;break;case"YXZ":this._x=_*S*E+g*x*R,this._y=g*x*E-_*S*R,this._z=g*S*R-_*x*E,this._w=g*S*E+_*x*R;break;case"ZXY":this._x=_*S*E-g*x*R,this._y=g*x*E+_*S*R,this._z=g*S*R+_*x*E,this._w=g*S*E-_*x*R;break;case"ZYX":this._x=_*S*E-g*x*R,this._y=g*x*E+_*S*R,this._z=g*S*R-_*x*E,this._w=g*S*E+_*x*R;break;case"YZX":this._x=_*S*E+g*x*R,this._y=g*x*E+_*S*R,this._z=g*S*R-_*x*E,this._w=g*S*E-_*x*R;break;case"XZY":this._x=_*S*E-g*x*R,this._y=g*x*E-_*S*R,this._z=g*S*R+_*x*E,this._w=g*S*E+_*x*R;break;default:Mt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,o=Math.sin(n);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],o=t[4],c=t[8],u=t[1],d=t[5],p=t[9],g=t[2],S=t[6],E=t[10],_=n+d+E;if(_>0){const x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(S-p)*x,this._y=(c-g)*x,this._z=(u-o)*x}else if(n>d&&n>E){const x=2*Math.sqrt(1+n-d-E);this._w=(S-p)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(c+g)/x}else if(d>E){const x=2*Math.sqrt(1+d-n-E);this._w=(c-g)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(p+S)/x}else{const x=2*Math.sqrt(1+E-n-d);this._w=(u-o)/x,this._x=(c+g)/x,this._y=(p+S)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const o=Math.min(1,t/n);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,o=e._y,c=e._z,u=e._w,d=t._x,p=t._y,g=t._z,S=t._w;return this._x=n*S+u*d+o*g-c*p,this._y=o*S+u*p+c*d-n*g,this._z=c*S+u*g+n*p-o*d,this._w=u*S-n*d-o*p-c*g,this._onChangeCallback(),this}slerp(e,t){let n=e._x,o=e._y,c=e._z,u=e._w,d=this.dot(e);d<0&&(n=-n,o=-o,c=-c,u=-u,d=-d);let p=1-t;if(d<.9995){const g=Math.acos(d),S=Math.sin(g);p=Math.sin(p*g)/S,t=Math.sin(t*g)/S,this._x=this._x*p+n*t,this._y=this._y*p+o*t,this._z=this._z*p+c*t,this._w=this._w*p+u*t,this._onChangeCallback()}else this._x=this._x*p+n*t,this._y=this._y*p+o*t,this._z=this._z*p+c*t,this._w=this._w*p+u*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),o=Math.sqrt(1-n),c=Math.sqrt(n);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(t),c*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Vd=class Vd{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,o=this.z,c=e.elements;return this.x=c[0]*t+c[3]*n+c[6]*o,this.y=c[1]*t+c[4]*n+c[7]*o,this.z=c[2]*t+c[5]*n+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,o=this.z,c=e.elements,u=1/(c[3]*t+c[7]*n+c[11]*o+c[15]);return this.x=(c[0]*t+c[4]*n+c[8]*o+c[12])*u,this.y=(c[1]*t+c[5]*n+c[9]*o+c[13])*u,this.z=(c[2]*t+c[6]*n+c[10]*o+c[14])*u,this}applyQuaternion(e){const t=this.x,n=this.y,o=this.z,c=e.x,u=e.y,d=e.z,p=e.w,g=2*(u*o-d*n),S=2*(d*t-c*o),E=2*(c*n-u*t);return this.x=t+p*g+u*E-d*S,this.y=n+p*S+d*g-c*E,this.z=o+p*E+c*S-u*g,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,o=this.z,c=e.elements;return this.x=c[0]*t+c[4]*n+c[8]*o,this.y=c[1]*t+c[5]*n+c[9]*o,this.z=c[2]*t+c[6]*n+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Gt(this.x,e.x,t.x),this.y=Gt(this.y,e.y,t.y),this.z=Gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Gt(this.x,e,t),this.y=Gt(this.y,e,t),this.z=Gt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,o=e.y,c=e.z,u=t.x,d=t.y,p=t.z;return this.x=o*p-c*d,this.y=c*u-n*p,this.z=n*d-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ih.copy(this).projectOnVector(e),this.sub(ih)}reflect(e){return this.sub(ih.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,o=this.z-e.z;return t*t+n*n+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const o=Math.sin(t)*e;return this.x=o*Math.sin(n),this.y=Math.cos(t)*e,this.z=o*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Vd.prototype.isVector3=!0;let K=Vd;const ih=new K,cp=new oc,Wd=class Wd{constructor(e,t,n,o,c,u,d,p,g){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,o,c,u,d,p,g)}set(e,t,n,o,c,u,d,p,g){const S=this.elements;return S[0]=e,S[1]=o,S[2]=d,S[3]=t,S[4]=c,S[5]=p,S[6]=n,S[7]=u,S[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,o=t.elements,c=this.elements,u=n[0],d=n[3],p=n[6],g=n[1],S=n[4],E=n[7],_=n[2],x=n[5],R=n[8],N=o[0],w=o[3],M=o[6],O=o[1],k=o[4],C=o[7],F=o[2],D=o[5],H=o[8];return c[0]=u*N+d*O+p*F,c[3]=u*w+d*k+p*D,c[6]=u*M+d*C+p*H,c[1]=g*N+S*O+E*F,c[4]=g*w+S*k+E*D,c[7]=g*M+S*C+E*H,c[2]=_*N+x*O+R*F,c[5]=_*w+x*k+R*D,c[8]=_*M+x*C+R*H,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],o=e[2],c=e[3],u=e[4],d=e[5],p=e[6],g=e[7],S=e[8];return t*u*S-t*d*g-n*c*S+n*d*p+o*c*g-o*u*p}invert(){const e=this.elements,t=e[0],n=e[1],o=e[2],c=e[3],u=e[4],d=e[5],p=e[6],g=e[7],S=e[8],E=S*u-d*g,_=d*p-S*c,x=g*c-u*p,R=t*E+n*_+o*x;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const N=1/R;return e[0]=E*N,e[1]=(o*g-S*n)*N,e[2]=(d*n-o*u)*N,e[3]=_*N,e[4]=(S*t-o*p)*N,e[5]=(o*c-d*t)*N,e[6]=x*N,e[7]=(n*p-g*t)*N,e[8]=(u*t-n*c)*N,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,o,c,u,d){const p=Math.cos(c),g=Math.sin(c);return this.set(n*p,n*g,-n*(p*u+g*d)+u+e,-o*g,o*p,-o*(-g*u+p*d)+d+t,0,0,1),this}scale(e,t){return tc("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(rh.makeScale(e,t)),this}rotate(e){return tc("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(rh.makeRotation(-e)),this}translate(e,t){return tc("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(rh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let o=0;o<9;o++)if(t[o]!==n[o])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Wd.prototype.isMatrix3=!0;let Ct=Wd;const rh=new Ct,up=new Ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fp=new Ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function t0(){const i={enabled:!0,workingColorSpace:yf,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===xn&&(o.r=vs(o.r),o.g=vs(o.g),o.b=vs(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===xn&&(o.r=nc(o.r),o.g=nc(o.g),o.b=nc(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ys?Sf:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return tc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return tc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[yf]:{primaries:e,whitePoint:n,transfer:Sf,toXYZ:up,fromXYZ:fp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xi},outputColorSpaceConfig:{drawingBufferColorSpace:Xi}},[Xi]:{primaries:e,whitePoint:n,transfer:xn,toXYZ:up,fromXYZ:fp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xi}}}),i}const jt=t0();function vs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function nc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let zl;class n0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{zl===void 0&&(zl=bf("canvas")),zl.width=e.width,zl.height=e.height;const o=zl.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),n=zl}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=bf("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const o=n.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=vs(c[u]/255)*255;return n.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vs(t[n]/255)*255):t[n]=vs(t[n]);return{data:t,width:e.width,height:e.height}}else return Mt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let i0=0;class Dd{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=sc(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?c.push(ah(o[u].image)):c.push(ah(o[u]))}else c=ah(o);n.url=c}return t||(e.images[this.uuid]=n),n}}function ah(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?n0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Mt("Texture: Unable to serialize Texture."),{})}let r0=0;const sh=new K;class Ii extends Jo{constructor(e=Ii.DEFAULT_IMAGE,t=Ii.DEFAULT_MAPPING,n=gs,o=gs,c=Li,u=Go,d=ra,p=dr,g=Ii.DEFAULT_ANISOTROPY,S=Ys){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=sc(),this.name="",this.source=new Dd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=g,this.format=d,this.internalFormat=null,this.type=p,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(sh).x}get height(){return this.source.getSize(sh).y}get depth(){return this.source.getSize(sh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Mt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){Mt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&n&&o.isVector2&&n.isVector2||o&&n&&o.isVector3&&n.isVector3||o&&n&&o.isMatrix3&&n.isMatrix3?o.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hh:e.x=e.x-Math.floor(e.x);break;case gs:e.x=e.x<0?0:1;break;case Gh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hh:e.y=e.y-Math.floor(e.y);break;case gs:e.y=e.y<0?0:1;break;case Gh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ii.DEFAULT_IMAGE=null;Ii.DEFAULT_MAPPING=xg;Ii.DEFAULT_ANISOTROPY=1;const Xd=class Xd{constructor(e=0,t=0,n=0,o=1){this.x=e,this.y=t,this.z=n,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,o){return this.x=e,this.y=t,this.z=n,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*t+u[4]*n+u[8]*o+u[12]*c,this.y=u[1]*t+u[5]*n+u[9]*o+u[13]*c,this.z=u[2]*t+u[6]*n+u[10]*o+u[14]*c,this.w=u[3]*t+u[7]*n+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,o,c;const p=e.elements,g=p[0],S=p[4],E=p[8],_=p[1],x=p[5],R=p[9],N=p[2],w=p[6],M=p[10];if(Math.abs(S-_)<.01&&Math.abs(E-N)<.01&&Math.abs(R-w)<.01){if(Math.abs(S+_)<.1&&Math.abs(E+N)<.1&&Math.abs(R+w)<.1&&Math.abs(g+x+M-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const k=(g+1)/2,C=(x+1)/2,F=(M+1)/2,D=(S+_)/4,H=(E+N)/4,y=(R+w)/4;return k>C&&k>F?k<.01?(n=0,o=.707106781,c=.707106781):(n=Math.sqrt(k),o=D/n,c=H/n):C>F?C<.01?(n=.707106781,o=0,c=.707106781):(o=Math.sqrt(C),n=D/o,c=y/o):F<.01?(n=.707106781,o=.707106781,c=0):(c=Math.sqrt(F),n=H/c,o=y/c),this.set(n,o,c,t),this}let O=Math.sqrt((w-R)*(w-R)+(E-N)*(E-N)+(_-S)*(_-S));return Math.abs(O)<.001&&(O=1),this.x=(w-R)/O,this.y=(E-N)/O,this.z=(_-S)/O,this.w=Math.acos((g+x+M-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Gt(this.x,e.x,t.x),this.y=Gt(this.y,e.y,t.y),this.z=Gt(this.z,e.z,t.z),this.w=Gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Gt(this.x,e,t),this.y=Gt(this.y,e,t),this.z=Gt(this.z,e,t),this.w=Gt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Xd.prototype.isVector4=!0;let Hn=Xd;class a0 extends Jo{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Li,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Hn(0,0,e,t),this.scissorTest=!1,this.viewport=new Hn(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:n.depth},c=new Ii(o),u=n.count;for(let d=0;d<u;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Li,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=n,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Dd(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class aa extends a0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Rg extends Ii{constructor(e=null,t=1,n=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:o},this.magFilter=_i,this.minFilter=_i,this.wrapR=gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class s0 extends Ii{constructor(e=null,t=1,n=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:o},this.magFilter=_i,this.minFilter=_i,this.wrapR=gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const wf=class wf{constructor(e,t,n,o,c,u,d,p,g,S,E,_,x,R,N,w){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,o,c,u,d,p,g,S,E,_,x,R,N,w)}set(e,t,n,o,c,u,d,p,g,S,E,_,x,R,N,w){const M=this.elements;return M[0]=e,M[4]=t,M[8]=n,M[12]=o,M[1]=c,M[5]=u,M[9]=d,M[13]=p,M[2]=g,M[6]=S,M[10]=E,M[14]=_,M[3]=x,M[7]=R,M[11]=N,M[15]=w,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wf().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,o=1/kl.setFromMatrixColumn(e,0).length(),c=1/kl.setFromMatrixColumn(e,1).length(),u=1/kl.setFromMatrixColumn(e,2).length();return t[0]=n[0]*o,t[1]=n[1]*o,t[2]=n[2]*o,t[3]=0,t[4]=n[4]*c,t[5]=n[5]*c,t[6]=n[6]*c,t[7]=0,t[8]=n[8]*u,t[9]=n[9]*u,t[10]=n[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,o=e.y,c=e.z,u=Math.cos(n),d=Math.sin(n),p=Math.cos(o),g=Math.sin(o),S=Math.cos(c),E=Math.sin(c);if(e.order==="XYZ"){const _=u*S,x=u*E,R=d*S,N=d*E;t[0]=p*S,t[4]=-p*E,t[8]=g,t[1]=x+R*g,t[5]=_-N*g,t[9]=-d*p,t[2]=N-_*g,t[6]=R+x*g,t[10]=u*p}else if(e.order==="YXZ"){const _=p*S,x=p*E,R=g*S,N=g*E;t[0]=_+N*d,t[4]=R*d-x,t[8]=u*g,t[1]=u*E,t[5]=u*S,t[9]=-d,t[2]=x*d-R,t[6]=N+_*d,t[10]=u*p}else if(e.order==="ZXY"){const _=p*S,x=p*E,R=g*S,N=g*E;t[0]=_-N*d,t[4]=-u*E,t[8]=R+x*d,t[1]=x+R*d,t[5]=u*S,t[9]=N-_*d,t[2]=-u*g,t[6]=d,t[10]=u*p}else if(e.order==="ZYX"){const _=u*S,x=u*E,R=d*S,N=d*E;t[0]=p*S,t[4]=R*g-x,t[8]=_*g+N,t[1]=p*E,t[5]=N*g+_,t[9]=x*g-R,t[2]=-g,t[6]=d*p,t[10]=u*p}else if(e.order==="YZX"){const _=u*p,x=u*g,R=d*p,N=d*g;t[0]=p*S,t[4]=N-_*E,t[8]=R*E+x,t[1]=E,t[5]=u*S,t[9]=-d*S,t[2]=-g*S,t[6]=x*E+R,t[10]=_-N*E}else if(e.order==="XZY"){const _=u*p,x=u*g,R=d*p,N=d*g;t[0]=p*S,t[4]=-E,t[8]=g*S,t[1]=_*E+N,t[5]=u*S,t[9]=x*E-R,t[2]=R*E-x,t[6]=d*S,t[10]=N*E+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(o0,e,l0)}lookAt(e,t,n){const o=this.elements;return ur.subVectors(e,t),ur.lengthSq()===0&&(ur.z=1),ur.normalize(),zs.crossVectors(n,ur),zs.lengthSq()===0&&(Math.abs(n.z)===1?ur.x+=1e-4:ur.z+=1e-4,ur.normalize(),zs.crossVectors(n,ur)),zs.normalize(),Wu.crossVectors(ur,zs),o[0]=zs.x,o[4]=Wu.x,o[8]=ur.x,o[1]=zs.y,o[5]=Wu.y,o[9]=ur.y,o[2]=zs.z,o[6]=Wu.z,o[10]=ur.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,o=t.elements,c=this.elements,u=n[0],d=n[4],p=n[8],g=n[12],S=n[1],E=n[5],_=n[9],x=n[13],R=n[2],N=n[6],w=n[10],M=n[14],O=n[3],k=n[7],C=n[11],F=n[15],D=o[0],H=o[4],y=o[8],P=o[12],z=o[1],G=o[5],q=o[9],ae=o[13],W=o[2],ue=o[6],Me=o[10],_e=o[14],Te=o[3],ie=o[7],V=o[11],xe=o[15];return c[0]=u*D+d*z+p*W+g*Te,c[4]=u*H+d*G+p*ue+g*ie,c[8]=u*y+d*q+p*Me+g*V,c[12]=u*P+d*ae+p*_e+g*xe,c[1]=S*D+E*z+_*W+x*Te,c[5]=S*H+E*G+_*ue+x*ie,c[9]=S*y+E*q+_*Me+x*V,c[13]=S*P+E*ae+_*_e+x*xe,c[2]=R*D+N*z+w*W+M*Te,c[6]=R*H+N*G+w*ue+M*ie,c[10]=R*y+N*q+w*Me+M*V,c[14]=R*P+N*ae+w*_e+M*xe,c[3]=O*D+k*z+C*W+F*Te,c[7]=O*H+k*G+C*ue+F*ie,c[11]=O*y+k*q+C*Me+F*V,c[15]=O*P+k*ae+C*_e+F*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],o=e[8],c=e[12],u=e[1],d=e[5],p=e[9],g=e[13],S=e[2],E=e[6],_=e[10],x=e[14],R=e[3],N=e[7],w=e[11],M=e[15],O=p*x-g*_,k=d*x-g*E,C=d*_-p*E,F=u*x-g*S,D=u*_-p*S,H=u*E-d*S;return t*(N*O-w*k+M*C)-n*(R*O-w*F+M*D)+o*(R*k-N*F+M*H)-c*(R*C-N*D+w*H)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],o=e[8],c=e[1],u=e[5],d=e[9],p=e[2],g=e[6],S=e[10];return t*(u*S-d*g)-n*(c*S-d*p)+o*(c*g-u*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],o=e[2],c=e[3],u=e[4],d=e[5],p=e[6],g=e[7],S=e[8],E=e[9],_=e[10],x=e[11],R=e[12],N=e[13],w=e[14],M=e[15],O=t*d-n*u,k=t*p-o*u,C=t*g-c*u,F=n*p-o*d,D=n*g-c*d,H=o*g-c*p,y=S*N-E*R,P=S*w-_*R,z=S*M-x*R,G=E*w-_*N,q=E*M-x*N,ae=_*M-x*w,W=O*ae-k*q+C*G+F*z-D*P+H*y;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ue=1/W;return e[0]=(d*ae-p*q+g*G)*ue,e[1]=(o*q-n*ae-c*G)*ue,e[2]=(N*H-w*D+M*F)*ue,e[3]=(_*D-E*H-x*F)*ue,e[4]=(p*z-u*ae-g*P)*ue,e[5]=(t*ae-o*z+c*P)*ue,e[6]=(w*C-R*H-M*k)*ue,e[7]=(S*H-_*C+x*k)*ue,e[8]=(u*q-d*z+g*y)*ue,e[9]=(n*z-t*q-c*y)*ue,e[10]=(R*D-N*C+M*O)*ue,e[11]=(E*C-S*D-x*O)*ue,e[12]=(d*P-u*G-p*y)*ue,e[13]=(t*G-n*P+o*y)*ue,e[14]=(N*k-R*F-w*O)*ue,e[15]=(S*F-E*k+_*O)*ue,this}scale(e){const t=this.elements,n=e.x,o=e.y,c=e.z;return t[0]*=n,t[4]*=o,t[8]*=c,t[1]*=n,t[5]*=o,t[9]*=c,t[2]*=n,t[6]*=o,t[10]*=c,t[3]*=n,t[7]*=o,t[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,o))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),o=Math.sin(t),c=1-n,u=e.x,d=e.y,p=e.z,g=c*u,S=c*d;return this.set(g*u+n,g*d-o*p,g*p+o*d,0,g*d+o*p,S*d+n,S*p-o*u,0,g*p-o*d,S*p+o*u,c*p*p+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,o,c,u){return this.set(1,n,c,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,n){const o=this.elements,c=t._x,u=t._y,d=t._z,p=t._w,g=c+c,S=u+u,E=d+d,_=c*g,x=c*S,R=c*E,N=u*S,w=u*E,M=d*E,O=p*g,k=p*S,C=p*E,F=n.x,D=n.y,H=n.z;return o[0]=(1-(N+M))*F,o[1]=(x+C)*F,o[2]=(R-k)*F,o[3]=0,o[4]=(x-C)*D,o[5]=(1-(_+M))*D,o[6]=(w+O)*D,o[7]=0,o[8]=(R+k)*H,o[9]=(w-O)*H,o[10]=(1-(_+N))*H,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,n){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinantAffine();if(c===0)return n.set(1,1,1),t.identity(),this;let u=kl.set(o[0],o[1],o[2]).length();const d=kl.set(o[4],o[5],o[6]).length(),p=kl.set(o[8],o[9],o[10]).length();c<0&&(u=-u),ea.copy(this);const g=1/u,S=1/d,E=1/p;return ea.elements[0]*=g,ea.elements[1]*=g,ea.elements[2]*=g,ea.elements[4]*=S,ea.elements[5]*=S,ea.elements[6]*=S,ea.elements[8]*=E,ea.elements[9]*=E,ea.elements[10]*=E,t.setFromRotationMatrix(ea),n.x=u,n.y=d,n.z=p,this}makePerspective(e,t,n,o,c,u,d=Ia,p=!1){const g=this.elements,S=2*c/(t-e),E=2*c/(n-o),_=(t+e)/(t-e),x=(n+o)/(n-o);let R,N;if(p)R=c/(u-c),N=u*c/(u-c);else if(d===Ia)R=-(u+c)/(u-c),N=-2*u*c/(u-c);else if(d===tu)R=-u/(u-c),N=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return g[0]=S,g[4]=0,g[8]=_,g[12]=0,g[1]=0,g[5]=E,g[9]=x,g[13]=0,g[2]=0,g[6]=0,g[10]=R,g[14]=N,g[3]=0,g[7]=0,g[11]=-1,g[15]=0,this}makeOrthographic(e,t,n,o,c,u,d=Ia,p=!1){const g=this.elements,S=2/(t-e),E=2/(n-o),_=-(t+e)/(t-e),x=-(n+o)/(n-o);let R,N;if(p)R=1/(u-c),N=u/(u-c);else if(d===Ia)R=-2/(u-c),N=-(u+c)/(u-c);else if(d===tu)R=-1/(u-c),N=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return g[0]=S,g[4]=0,g[8]=0,g[12]=_,g[1]=0,g[5]=E,g[9]=0,g[13]=x,g[2]=0,g[6]=0,g[10]=R,g[14]=N,g[3]=0,g[7]=0,g[11]=0,g[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let o=0;o<16;o++)if(t[o]!==n[o])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};wf.prototype.isMatrix4=!0;let Fn=wf;const kl=new K,ea=new Fn,o0=new K(0,0,0),l0=new K(1,1,1),zs=new K,Wu=new K,ur=new K,hp=new Fn,dp=new oc;class Ms{constructor(e=0,t=0,n=0,o=Ms.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,o=this._order){return this._x=e,this._y=t,this._z=n,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const o=e.elements,c=o[0],u=o[4],d=o[8],p=o[1],g=o[5],S=o[9],E=o[2],_=o[6],x=o[10];switch(t){case"XYZ":this._y=Math.asin(Gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-S,x),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(_,g),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(d,x),this._z=Math.atan2(p,g)):(this._y=Math.atan2(-E,c),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-E,x),this._z=Math.atan2(-u,g)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Gt(E,-1,1)),Math.abs(E)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,g));break;case"YZX":this._z=Math.asin(Gt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-S,g),this._y=Math.atan2(-E,c)):(this._x=0,this._y=Math.atan2(d,x));break;case"XZY":this._z=Math.asin(-Gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,g),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-S,x),this._y=0);break;default:Mt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return hp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dp.setFromEuler(this),this.setFromQuaternion(dp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ms.DEFAULT_ORDER="XYZ";class Nd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let c0=0;const pp=new K,Hl=new oc,cs=new Fn,Xu=new K,Bc=new K,u0=new K,f0=new oc,gp=new K(1,0,0),mp=new K(0,1,0),vp=new K(0,0,1),_p={type:"added"},h0={type:"removed"},Gl={type:"childadded",child:null},oh={type:"childremoved",child:null};class xi extends Jo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=sc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xi.DEFAULT_UP.clone();const e=new K,t=new Ms,n=new oc,o=new K(1,1,1);function c(){n.setFromEuler(t,!1)}function u(){t.setFromQuaternion(n,void 0,!1)}t._onChange(c),n._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Fn},normalMatrix:{value:new Ct}}),this.matrix=new Fn,this.matrixWorld=new Fn,this.matrixAutoUpdate=xi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hl.setFromAxisAngle(e,t),this.quaternion.multiply(Hl),this}rotateOnWorldAxis(e,t){return Hl.setFromAxisAngle(e,t),this.quaternion.premultiply(Hl),this}rotateX(e){return this.rotateOnAxis(gp,e)}rotateY(e){return this.rotateOnAxis(mp,e)}rotateZ(e){return this.rotateOnAxis(vp,e)}translateOnAxis(e,t){return pp.copy(e).applyQuaternion(this.quaternion),this.position.add(pp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gp,e)}translateY(e){return this.translateOnAxis(mp,e)}translateZ(e){return this.translateOnAxis(vp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cs.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xu.copy(e):Xu.set(e,t,n);const o=this.parent;this.updateWorldMatrix(!0,!1),Bc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cs.lookAt(Bc,Xu,this.up):cs.lookAt(Xu,Bc,this.up),this.quaternion.setFromRotationMatrix(cs),o&&(cs.extractRotation(o.matrixWorld),Hl.setFromRotationMatrix(cs),this.quaternion.premultiply(Hl.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(an("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_p),Gl.child=e,this.dispatchEvent(Gl),Gl.child=null):an("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(h0),oh.child=e,this.dispatchEvent(oh),oh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),cs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cs.multiply(e.parent.matrixWorld)),e.applyMatrix4(cs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_p),Gl.child=e,this.dispatchEvent(Gl),Gl.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,o=this.children.length;n<o;n++){const u=this.children[n].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bc,e,u0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bc,f0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,o=t.length;n<o;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,o=t.length;n<o;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,o=e.z,c=this.matrix.elements;c[12]+=t-c[0]*t-c[4]*n-c[8]*o,c[13]+=n-c[1]*t-c[5]*n-c[9]*o,c[14]+=o-c[2]*t-c[6]*n-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,o=t.length;n<o;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const c=this.children;for(let u=0,d=c.length;u<d;u++)c[u].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let g=0,S=p.length;g<S;g++){const E=p[g];c(e.shapes,E)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,g=this.material.length;p<g;p++)d.push(c(e.materials,this.material[p]));o.material=d}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];o.animations.push(c(e.animations,p))}}if(t){const d=u(e.geometries),p=u(e.materials),g=u(e.textures),S=u(e.images),E=u(e.shapes),_=u(e.skeletons),x=u(e.animations),R=u(e.nodes);d.length>0&&(n.geometries=d),p.length>0&&(n.materials=p),g.length>0&&(n.textures=g),S.length>0&&(n.images=S),E.length>0&&(n.shapes=E),_.length>0&&(n.skeletons=_),x.length>0&&(n.animations=x),R.length>0&&(n.nodes=R)}return n.object=o,n;function u(d){const p=[];for(const g in d){const S=d[g];delete S.metadata,p.push(S)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const o=e.children[n];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}xi.DEFAULT_UP=new K(0,1,0);xi.DEFAULT_MATRIX_AUTO_UPDATE=!0;xi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class pr extends xi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const d0={type:"move"};class lh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let o=null,c=null,u=null;const d=this._targetRay,p=this._grip,g=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(g&&e.hand){u=!0;for(const N of e.hand.values()){const w=t.getJointPose(N,n),M=this._getHandJoint(g,N);w!==null&&(M.matrix.fromArray(w.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=w.radius),M.visible=w!==null}const S=g.joints["index-finger-tip"],E=g.joints["thumb-tip"],_=S.position.distanceTo(E.position),x=.02,R=.005;g.inputState.pinching&&_>x+R?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!g.inputState.pinching&&_<=x-R&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=t.getPose(e.gripSpace,n),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(o=t.getPose(e.targetRaySpace,n),o===null&&c!==null&&(o=c),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(d0)))}return d!==null&&(d.visible=o!==null),p!==null&&(p.visible=c!==null),g!==null&&(g.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new pr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Cg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ks={h:0,s:0,l:0},Yu={h:0,s:0,l:0};function ch(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Pt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,jt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,o=jt.workingColorSpace){return this.r=e,this.g=t,this.b=n,jt.colorSpaceToWorking(this,o),this}setHSL(e,t,n,o=jt.workingColorSpace){if(e=Id(e,1),t=Gt(t,0,1),n=Gt(n,0,1),t===0)this.r=this.g=this.b=n;else{const c=n<=.5?n*(1+t):n+t-n*t,u=2*n-c;this.r=ch(u,c,e+1/3),this.g=ch(u,c,e),this.b=ch(u,c,e-1/3)}return jt.colorSpaceToWorking(this,o),this}setStyle(e,t=Xi){function n(c){c!==void 0&&parseFloat(c)<1&&Mt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return n(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,t);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return n(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,t);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return n(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,t);break;default:Mt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(c,16),t);Mt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xi){const n=Cg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Mt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vs(e.r),this.g=vs(e.g),this.b=vs(e.b),this}copyLinearToSRGB(e){return this.r=nc(e.r),this.g=nc(e.g),this.b=nc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xi){return jt.workingToColorSpace(Pi.copy(this),e),Math.round(Gt(Pi.r*255,0,255))*65536+Math.round(Gt(Pi.g*255,0,255))*256+Math.round(Gt(Pi.b*255,0,255))}getHexString(e=Xi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=jt.workingColorSpace){jt.workingToColorSpace(Pi.copy(this),t);const n=Pi.r,o=Pi.g,c=Pi.b,u=Math.max(n,o,c),d=Math.min(n,o,c);let p,g;const S=(d+u)/2;if(d===u)p=0,g=0;else{const E=u-d;switch(g=S<=.5?E/(u+d):E/(2-u-d),u){case n:p=(o-c)/E+(o<c?6:0);break;case o:p=(c-n)/E+2;break;case c:p=(n-o)/E+4;break}p/=6}return e.h=p,e.s=g,e.l=S,e}getRGB(e,t=jt.workingColorSpace){return jt.workingToColorSpace(Pi.copy(this),t),e.r=Pi.r,e.g=Pi.g,e.b=Pi.b,e}getStyle(e=Xi){jt.workingToColorSpace(Pi.copy(this),e);const t=Pi.r,n=Pi.g,o=Pi.b;return e!==Xi?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(o*255)})`}offsetHSL(e,t,n){return this.getHSL(ks),this.setHSL(ks.h+e,ks.s+t,ks.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ks),e.getHSL(Yu);const n=Kc(ks.h,Yu.h,t),o=Kc(ks.s,Yu.s,t),c=Kc(ks.l,Yu.l,t);return this.setHSL(n,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,o=this.b,c=e.elements;return this.r=c[0]*t+c[3]*n+c[6]*o,this.g=c[1]*t+c[4]*n+c[7]*o,this.b=c[2]*t+c[5]*n+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pi=new Pt;Pt.NAMES=Cg;class p0 extends xi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ms,this.environmentIntensity=1,this.environmentRotation=new Ms,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ta=new K,us=new K,uh=new K,fs=new K,Vl=new K,Wl=new K,xp=new K,fh=new K,hh=new K,dh=new K,ph=new Hn,gh=new Hn,mh=new Hn;class ia{constructor(e=new K,t=new K,n=new K){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,o){o.subVectors(n,t),ta.subVectors(e,t),o.cross(ta);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,t,n,o,c){ta.subVectors(o,t),us.subVectors(n,t),uh.subVectors(e,t);const u=ta.dot(ta),d=ta.dot(us),p=ta.dot(uh),g=us.dot(us),S=us.dot(uh),E=u*g-d*d;if(E===0)return c.set(0,0,0),null;const _=1/E,x=(g*p-d*S)*_,R=(u*S-d*p)*_;return c.set(1-x-R,R,x)}static containsPoint(e,t,n,o){return this.getBarycoord(e,t,n,o,fs)===null?!1:fs.x>=0&&fs.y>=0&&fs.x+fs.y<=1}static getInterpolation(e,t,n,o,c,u,d,p){return this.getBarycoord(e,t,n,o,fs)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,fs.x),p.addScaledVector(u,fs.y),p.addScaledVector(d,fs.z),p)}static getInterpolatedAttribute(e,t,n,o,c,u){return ph.setScalar(0),gh.setScalar(0),mh.setScalar(0),ph.fromBufferAttribute(e,t),gh.fromBufferAttribute(e,n),mh.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(ph,c.x),u.addScaledVector(gh,c.y),u.addScaledVector(mh,c.z),u}static isFrontFacing(e,t,n,o){return ta.subVectors(n,t),us.subVectors(e,t),ta.cross(us).dot(o)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,o){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,n,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ta.subVectors(this.c,this.b),us.subVectors(this.a,this.b),ta.cross(us).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ia.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ia.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,o,c){return ia.getInterpolation(e,this.a,this.b,this.c,t,n,o,c)}containsPoint(e){return ia.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ia.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,o=this.b,c=this.c;let u,d;Vl.subVectors(o,n),Wl.subVectors(c,n),fh.subVectors(e,n);const p=Vl.dot(fh),g=Wl.dot(fh);if(p<=0&&g<=0)return t.copy(n);hh.subVectors(e,o);const S=Vl.dot(hh),E=Wl.dot(hh);if(S>=0&&E<=S)return t.copy(o);const _=p*E-S*g;if(_<=0&&p>=0&&S<=0)return u=p/(p-S),t.copy(n).addScaledVector(Vl,u);dh.subVectors(e,c);const x=Vl.dot(dh),R=Wl.dot(dh);if(R>=0&&x<=R)return t.copy(c);const N=x*g-p*R;if(N<=0&&g>=0&&R<=0)return d=g/(g-R),t.copy(n).addScaledVector(Wl,d);const w=S*R-x*E;if(w<=0&&E-S>=0&&x-R>=0)return xp.subVectors(c,o),d=(E-S)/(E-S+(x-R)),t.copy(o).addScaledVector(xp,d);const M=1/(w+N+_);return u=N*M,d=_*M,t.copy(n).addScaledVector(Vl,u).addScaledVector(Wl,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class au{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(na.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(na.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=na.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const c=n.getAttribute("position");if(t===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=c.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,na):na.fromBufferAttribute(c,u),na.applyMatrix4(e.matrixWorld),this.expandByPoint(na);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zu.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zu.copy(n.boundingBox)),Zu.applyMatrix4(e.matrixWorld),this.union(Zu)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,na),na.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zc),Ju.subVectors(this.max,zc),Xl.subVectors(e.a,zc),Yl.subVectors(e.b,zc),Zl.subVectors(e.c,zc),Hs.subVectors(Yl,Xl),Gs.subVectors(Zl,Yl),No.subVectors(Xl,Zl);let t=[0,-Hs.z,Hs.y,0,-Gs.z,Gs.y,0,-No.z,No.y,Hs.z,0,-Hs.x,Gs.z,0,-Gs.x,No.z,0,-No.x,-Hs.y,Hs.x,0,-Gs.y,Gs.x,0,-No.y,No.x,0];return!vh(t,Xl,Yl,Zl,Ju)||(t=[1,0,0,0,1,0,0,0,1],!vh(t,Xl,Yl,Zl,Ju))?!1:(Ku.crossVectors(Hs,Gs),t=[Ku.x,Ku.y,Ku.z],vh(t,Xl,Yl,Zl,Ju))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,na).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(na).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const hs=[new K,new K,new K,new K,new K,new K,new K,new K],na=new K,Zu=new au,Xl=new K,Yl=new K,Zl=new K,Hs=new K,Gs=new K,No=new K,zc=new K,Ju=new K,Ku=new K,Uo=new K;function vh(i,e,t,n,o){for(let c=0,u=i.length-3;c<=u;c+=3){Uo.fromArray(i,c);const d=o.x*Math.abs(Uo.x)+o.y*Math.abs(Uo.y)+o.z*Math.abs(Uo.z),p=e.dot(Uo),g=t.dot(Uo),S=n.dot(Uo);if(Math.max(-Math.max(p,g,S),Math.min(p,g,S))>d)return!1}return!0}const ei=new K,Qu=new ut;let g0=0;class _s extends Jo{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:g0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Nm,this.updateRanges=[],this.gpuType=La,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=t.array[n+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qu.fromBufferAttribute(this,t),Qu.applyMatrix3(e),this.setXY(t,Qu.x,Qu.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ei.fromBufferAttribute(this,t),ei.applyMatrix3(e),this.setXYZ(t,ei.x,ei.y,ei.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ei.fromBufferAttribute(this,t),ei.applyMatrix4(e),this.setXYZ(t,ei.x,ei.y,ei.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ei.fromBufferAttribute(this,t),ei.applyNormalMatrix(e),this.setXYZ(t,ei.x,ei.y,ei.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ei.fromBufferAttribute(this,t),ei.transformDirection(e),this.setXYZ(t,ei.x,ei.y,ei.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=$l(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Vi(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$l(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$l(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$l(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$l(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Vi(t,this.array),n=Vi(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,o){return e*=this.itemSize,this.normalized&&(t=Vi(t,this.array),n=Vi(n,this.array),o=Vi(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=o,this}setXYZW(e,t,n,o,c){return e*=this.itemSize,this.normalized&&(t=Vi(t,this.array),n=Vi(n,this.array),o=Vi(o,this.array),c=Vi(c,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Pg extends _s{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Lg extends _s{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class On extends _s{constructor(e,t,n){super(new Float32Array(e),t,n)}}const m0=new au,kc=new K,_h=new K;class Ud{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):m0.setFromPoints(e).getCenter(n);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,n.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;kc.subVectors(e,this.center);const t=kc.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),o=(n-this.radius)*.5;this.center.addScaledVector(kc,o/n),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_h.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(kc.copy(e.center).add(_h)),this.expandByPoint(kc.copy(e.center).sub(_h))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let v0=0;const Nr=new Fn,xh=new xi,Jl=new K,fr=new au,Hc=new au,fi=new K;class rr extends Jo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=sc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Um(e)?Lg:Pg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const c=new Ct().getNormalMatrix(e);n.applyNormalMatrix(c),n.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Nr.makeRotationFromQuaternion(e),this.applyMatrix4(Nr),this}rotateX(e){return Nr.makeRotationX(e),this.applyMatrix4(Nr),this}rotateY(e){return Nr.makeRotationY(e),this.applyMatrix4(Nr),this}rotateZ(e){return Nr.makeRotationZ(e),this.applyMatrix4(Nr),this}translate(e,t,n){return Nr.makeTranslation(e,t,n),this.applyMatrix4(Nr),this}scale(e,t,n){return Nr.makeScale(e,t,n),this.applyMatrix4(Nr),this}lookAt(e){return xh.lookAt(e),xh.updateMatrix(),this.applyMatrix4(xh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jl).negate(),this.translate(Jl.x,Jl.y,Jl.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];n.push(u.x,u.y,u.z||0)}this.setAttribute("position",new On(n,3))}else{const n=Math.min(e.length,t.count);for(let o=0;o<n;o++){const c=e[o];t.setXYZ(o,c.x,c.y,c.z||0)}e.length>t.count&&Mt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new au);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){an("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,o=t.length;n<o;n++){const c=t[n];fr.setFromBufferAttribute(c),this.morphTargetsRelative?(fi.addVectors(this.boundingBox.min,fr.min),this.boundingBox.expandByPoint(fi),fi.addVectors(this.boundingBox.max,fr.max),this.boundingBox.expandByPoint(fi)):(this.boundingBox.expandByPoint(fr.min),this.boundingBox.expandByPoint(fr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&an('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ud);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){an("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const n=this.boundingSphere.center;if(fr.setFromBufferAttribute(e),t)for(let c=0,u=t.length;c<u;c++){const d=t[c];Hc.setFromBufferAttribute(d),this.morphTargetsRelative?(fi.addVectors(fr.min,Hc.min),fr.expandByPoint(fi),fi.addVectors(fr.max,Hc.max),fr.expandByPoint(fi)):(fr.expandByPoint(Hc.min),fr.expandByPoint(Hc.max))}fr.getCenter(n);let o=0;for(let c=0,u=e.count;c<u;c++)fi.fromBufferAttribute(e,c),o=Math.max(o,n.distanceToSquared(fi));if(t)for(let c=0,u=t.length;c<u;c++){const d=t[c],p=this.morphTargetsRelative;for(let g=0,S=d.count;g<S;g++)fi.fromBufferAttribute(d,g),p&&(Jl.fromBufferAttribute(e,g),fi.add(Jl)),o=Math.max(o,n.distanceToSquared(fi))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&an('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){an("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,o=t.normal,c=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==n.count)&&(u=new _s(new Float32Array(4*n.count),4),this.setAttribute("tangent",u));const d=[],p=[];for(let y=0;y<n.count;y++)d[y]=new K,p[y]=new K;const g=new K,S=new K,E=new K,_=new ut,x=new ut,R=new ut,N=new K,w=new K;function M(y,P,z){g.fromBufferAttribute(n,y),S.fromBufferAttribute(n,P),E.fromBufferAttribute(n,z),_.fromBufferAttribute(c,y),x.fromBufferAttribute(c,P),R.fromBufferAttribute(c,z),S.sub(g),E.sub(g),x.sub(_),R.sub(_);const G=1/(x.x*R.y-R.x*x.y);isFinite(G)&&(N.copy(S).multiplyScalar(R.y).addScaledVector(E,-x.y).multiplyScalar(G),w.copy(E).multiplyScalar(x.x).addScaledVector(S,-R.x).multiplyScalar(G),d[y].add(N),d[P].add(N),d[z].add(N),p[y].add(w),p[P].add(w),p[z].add(w))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let y=0,P=O.length;y<P;++y){const z=O[y],G=z.start,q=z.count;for(let ae=G,W=G+q;ae<W;ae+=3)M(e.getX(ae+0),e.getX(ae+1),e.getX(ae+2))}const k=new K,C=new K,F=new K,D=new K;function H(y){F.fromBufferAttribute(o,y),D.copy(F);const P=d[y];k.copy(P),k.sub(F.multiplyScalar(F.dot(P))).normalize(),C.crossVectors(D,P);const G=C.dot(p[y])<0?-1:1;u.setXYZW(y,k.x,k.y,k.z,G)}for(let y=0,P=O.length;y<P;++y){const z=O[y],G=z.start,q=z.count;for(let ae=G,W=G+q;ae<W;ae+=3)H(e.getX(ae+0)),H(e.getX(ae+1)),H(e.getX(ae+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new _s(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let _=0,x=n.count;_<x;_++)n.setXYZ(_,0,0,0);const o=new K,c=new K,u=new K,d=new K,p=new K,g=new K,S=new K,E=new K;if(e)for(let _=0,x=e.count;_<x;_+=3){const R=e.getX(_+0),N=e.getX(_+1),w=e.getX(_+2);o.fromBufferAttribute(t,R),c.fromBufferAttribute(t,N),u.fromBufferAttribute(t,w),S.subVectors(u,c),E.subVectors(o,c),S.cross(E),d.fromBufferAttribute(n,R),p.fromBufferAttribute(n,N),g.fromBufferAttribute(n,w),d.add(S),p.add(S),g.add(S),n.setXYZ(R,d.x,d.y,d.z),n.setXYZ(N,p.x,p.y,p.z),n.setXYZ(w,g.x,g.y,g.z)}else for(let _=0,x=t.count;_<x;_+=3)o.fromBufferAttribute(t,_+0),c.fromBufferAttribute(t,_+1),u.fromBufferAttribute(t,_+2),S.subVectors(u,c),E.subVectors(o,c),S.cross(E),n.setXYZ(_+0,S.x,S.y,S.z),n.setXYZ(_+1,S.x,S.y,S.z),n.setXYZ(_+2,S.x,S.y,S.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)fi.fromBufferAttribute(e,t),fi.normalize(),e.setXYZ(t,fi.x,fi.y,fi.z)}toNonIndexed(){function e(d,p){const g=d.array,S=d.itemSize,E=d.normalized,_=new g.constructor(p.length*S);let x=0,R=0;for(let N=0,w=p.length;N<w;N++){d.isInterleavedBufferAttribute?x=p[N]*d.data.stride+d.offset:x=p[N]*S;for(let M=0;M<S;M++)_[R++]=g[x++]}return new _s(_,S,E)}if(this.index===null)return Mt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new rr,n=this.index.array,o=this.attributes;for(const d in o){const p=o[d],g=e(p,n);t.setAttribute(d,g)}const c=this.morphAttributes;for(const d in c){const p=[],g=c[d];for(let S=0,E=g.length;S<E;S++){const _=g[S],x=e(_,n);p.push(x)}t.morphAttributes[d]=p}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,p=u.length;d<p;d++){const g=u[d];t.addGroup(g.start,g.count,g.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const g in p)p[g]!==void 0&&(e[g]=p[g]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const p in n){const g=n[p];e.data.attributes[p]=g.toJSON(e.data)}const o={};let c=!1;for(const p in this.morphAttributes){const g=this.morphAttributes[p],S=[];for(let E=0,_=g.length;E<_;E++){const x=g[E];S.push(x.toJSON(e.data))}S.length>0&&(o[p]=S,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const o=e.attributes;for(const g in o){const S=o[g];this.setAttribute(g,S.clone(t))}const c=e.morphAttributes;for(const g in c){const S=[],E=c[g];for(let _=0,x=E.length;_<x;_++)S.push(E[_].clone(t));this.morphAttributes[g]=S}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let g=0,S=u.length;g<S;g++){const E=u[g];this.addGroup(E.start,E.count,E.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mh=new K,_0=new K,x0=new Ct;class Xs{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,o){return this.normal.set(e,t,n),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const o=Mh.subVectors(n,t).cross(_0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const o=e.delta(Mh),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/c;return n===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||x0.getNormalMatrix(e),o=this.coplanarPoint(Mh).applyMatrix4(e),c=this.normal.applyMatrix3(n).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let M0=0;class lc extends Jo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:M0++}),this.uuid=sc(),this.name="",this.type="Material",this.blending=Zc,this.side=Xo,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ug,this.blendDst=fg,this.blendEquation=jl,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=jc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Am,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nh,this.stencilZFail=nh,this.stencilZPass=nh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Mt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){Mt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(n):o&&o.isVector2&&n&&n.isVector2||o&&o.isEuler&&n&&n.isEuler||o&&o.isVector3&&n&&n.isVector3?o.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(c=>c.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function o(c){const u=[];for(const d in c){const p=c[d];delete p.metadata,u.push(p)}return u}if(t){const c=o(e.textures),u=o(e.images);c.length>0&&(n.textures=c),u.length>0&&(n.images=u)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Pt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Xs().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ut().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ut().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const o=t.length;n=new Array(o);for(let c=0;c!==o;++c)n[c]=t[c].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ds=new K,yh=new K,qu=new K,ju=new K;class Ig{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ds)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ds.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ds.copy(this.origin).addScaledVector(this.direction,t),ds.distanceToSquared(e))}distanceSqToSegment(e,t,n,o){yh.copy(e).add(t).multiplyScalar(.5),qu.copy(t).sub(e).normalize(),ju.copy(this.origin).sub(yh);const c=e.distanceTo(t)*.5,u=-this.direction.dot(qu),d=ju.dot(this.direction),p=-ju.dot(qu),g=ju.lengthSq(),S=Math.abs(1-u*u);let E,_,x,R;if(S>0)if(E=u*p-d,_=u*d-p,R=c*S,E>=0)if(_>=-R)if(_<=R){const N=1/S;E*=N,_*=N,x=E*(E+u*_+2*d)+_*(u*E+_+2*p)+g}else _=c,E=Math.max(0,-(u*_+d)),x=-E*E+_*(_+2*p)+g;else _=-c,E=Math.max(0,-(u*_+d)),x=-E*E+_*(_+2*p)+g;else _<=-R?(E=Math.max(0,-(-u*c+d)),_=E>0?-c:Math.min(Math.max(-c,-p),c),x=-E*E+_*(_+2*p)+g):_<=R?(E=0,_=Math.min(Math.max(-c,-p),c),x=_*(_+2*p)+g):(E=Math.max(0,-(u*c+d)),_=E>0?c:Math.min(Math.max(-c,-p),c),x=-E*E+_*(_+2*p)+g);else _=u>0?-c:c,E=Math.max(0,-(u*_+d)),x=-E*E+_*(_+2*p)+g;return n&&n.copy(this.origin).addScaledVector(this.direction,E),o&&o.copy(yh).addScaledVector(qu,_),x}intersectSphere(e,t){if(e.radius<0)return null;ds.subVectors(e.center,this.origin);const n=ds.dot(this.direction),o=ds.dot(ds)-n*n,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),d=n-u,p=n+u;return p<0?null:d<0?this.at(p,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,o,c,u,d,p;const g=1/this.direction.x,S=1/this.direction.y,E=1/this.direction.z,_=this.origin;return g>=0?(n=(e.min.x-_.x)*g,o=(e.max.x-_.x)*g):(n=(e.max.x-_.x)*g,o=(e.min.x-_.x)*g),S>=0?(c=(e.min.y-_.y)*S,u=(e.max.y-_.y)*S):(c=(e.max.y-_.y)*S,u=(e.min.y-_.y)*S),n>u||c>o||((c>n||isNaN(n))&&(n=c),(u<o||isNaN(o))&&(o=u),E>=0?(d=(e.min.z-_.z)*E,p=(e.max.z-_.z)*E):(d=(e.max.z-_.z)*E,p=(e.min.z-_.z)*E),n>p||d>o)||((d>n||n!==n)&&(n=d),(p<o||o!==o)&&(o=p),o<0)?null:this.at(n>=0?n:o,t)}intersectsBox(e){return this.intersectBox(e,ds)!==null}intersectTriangle(e,t,n,o,c){const u=this.origin,d=this.direction,p=d.x,g=d.y,S=d.z,E=e.x-u.x,_=e.y-u.y,x=e.z-u.z,R=t.x-u.x,N=t.y-u.y,w=t.z-u.z,M=n.x-u.x,O=n.y-u.y,k=n.z-u.z,C=Math.abs(p),F=Math.abs(g),D=Math.abs(S);let H,y,P,z,G,q,ae,W,ue,Me,_e,Te;if(C>=F&&C>=D?(P=p,q=E,ue=R,Te=M,p>=0?(H=g,y=S,z=_,G=x,ae=N,W=w,Me=O,_e=k):(H=S,y=g,z=x,G=_,ae=w,W=N,Me=k,_e=O)):F>=D?(P=g,q=_,ue=N,Te=O,g>=0?(H=S,y=p,z=x,G=E,ae=w,W=R,Me=k,_e=M):(H=p,y=S,z=E,G=x,ae=R,W=w,Me=M,_e=k)):(P=S,q=x,ue=w,Te=k,S>=0?(H=p,y=g,z=E,G=_,ae=R,W=N,Me=M,_e=O):(H=g,y=p,z=_,G=E,ae=N,W=R,Me=O,_e=M)),P===0)return null;const ie=H/P,V=y/P,xe=1/P,at=z-ie*q,tt=G-V*q,we=ae-ie*ue,oe=W-V*ue,Qt=Me-ie*Te,ve=_e-V*Te,me=Qt*oe-ve*we,ke=at*ve-tt*Qt,ft=we*tt-oe*at;if(o){if(me<0||ke<0||ft<0)return null}else if((me<0||ke<0||ft<0)&&(me>0||ke>0||ft>0))return null;const Xe=me+ke+ft;if(Xe===0)return null;const St=xe*(me*q+ke*ue+ft*Te);return(Xe>0?St<0:St>0)?null:this.at(St/Xe,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ef extends lc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ms,this.combine=bd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mp=new Fn,Fo=new Ig,$u=new Ud,yp=new K,ef=new K,tf=new K,nf=new K,Sh=new K,rf=new K,Sp=new K,af=new K;class Di extends xi{constructor(e=new rr,t=new Ef){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const o=t[n[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,t){const n=this.geometry,o=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(c&&d){rf.set(0,0,0);for(let p=0,g=c.length;p<g;p++){const S=d[p],E=c[p];S!==0&&(Sh.fromBufferAttribute(E,e),u?rf.addScaledVector(Sh,S):rf.addScaledVector(Sh.sub(t),S))}t.add(rf)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$u.copy(n.boundingSphere),$u.applyMatrix4(c),Fo.copy(e.ray).recast(e.near),!($u.containsPoint(Fo.origin)===!1&&(Fo.intersectSphere($u,yp)===null||Fo.origin.distanceToSquared(yp)>(e.far-e.near)**2))&&(Mp.copy(c).invert(),Fo.copy(e.ray).applyMatrix4(Mp),!(n.boundingBox!==null&&Fo.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Fo)))}_computeIntersections(e,t,n){let o;const c=this.geometry,u=this.material,d=c.index,p=c.attributes.position,g=c.attributes.uv,S=c.attributes.uv1,E=c.attributes.normal,_=c.groups,x=c.drawRange;if(d!==null)if(Array.isArray(u))for(let R=0,N=_.length;R<N;R++){const w=_[R],M=u[w.materialIndex],O=Math.max(w.start,x.start),k=Math.min(d.count,Math.min(w.start+w.count,x.start+x.count));for(let C=O,F=k;C<F;C+=3){const D=d.getX(C),H=d.getX(C+1),y=d.getX(C+2);o=sf(this,M,e,n,g,S,E,D,H,y),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=w.materialIndex,t.push(o))}}else{const R=Math.max(0,x.start),N=Math.min(d.count,x.start+x.count);for(let w=R,M=N;w<M;w+=3){const O=d.getX(w),k=d.getX(w+1),C=d.getX(w+2);o=sf(this,u,e,n,g,S,E,O,k,C),o&&(o.faceIndex=Math.floor(w/3),t.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let R=0,N=_.length;R<N;R++){const w=_[R],M=u[w.materialIndex],O=Math.max(w.start,x.start),k=Math.min(p.count,Math.min(w.start+w.count,x.start+x.count));for(let C=O,F=k;C<F;C+=3){const D=C,H=C+1,y=C+2;o=sf(this,M,e,n,g,S,E,D,H,y),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=w.materialIndex,t.push(o))}}else{const R=Math.max(0,x.start),N=Math.min(p.count,x.start+x.count);for(let w=R,M=N;w<M;w+=3){const O=w,k=w+1,C=w+2;o=sf(this,u,e,n,g,S,E,O,k,C),o&&(o.faceIndex=Math.floor(w/3),t.push(o))}}}}function y0(i,e,t,n,o,c,u,d){let p;if(e.side===ir?p=n.intersectTriangle(u,c,o,!0,d):p=n.intersectTriangle(o,c,u,e.side===Xo,d),p===null)return null;af.copy(d),af.applyMatrix4(i.matrixWorld);const g=t.ray.origin.distanceTo(af);return g<t.near||g>t.far?null:{distance:g,point:af.clone(),object:i}}function sf(i,e,t,n,o,c,u,d,p,g){i.getVertexPosition(d,ef),i.getVertexPosition(p,tf),i.getVertexPosition(g,nf);const S=y0(i,e,t,n,ef,tf,nf,Sp);if(S){const E=new K;ia.getBarycoord(Sp,ef,tf,nf,E),o&&(S.uv=ia.getInterpolatedAttribute(o,d,p,g,E,new ut)),c&&(S.uv1=ia.getInterpolatedAttribute(c,d,p,g,E,new ut)),u&&(S.normal=ia.getInterpolatedAttribute(u,d,p,g,E,new K),S.normal.dot(n.direction)>0&&S.normal.multiplyScalar(-1));const _={a:d,b:p,c:g,normal:new K,materialIndex:0};ia.getNormal(ef,tf,nf,_.normal),S.face=_,S.barycoord=E}return S}class S0 extends Ii{constructor(e=null,t=1,n=1,o,c,u,d,p,g=_i,S=_i,E,_){super(null,u,d,p,g,S,o,c,E,_),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Oo=new Ud,b0=new ut(.5,.5),of=new K;class Fd{constructor(e=new Xs,t=new Xs,n=new Xs,o=new Xs,c=new Xs,u=new Xs){this.planes=[e,t,n,o,c,u]}set(e,t,n,o,c,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(n),d[3].copy(o),d[4].copy(c),d[5].copy(u),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ia,n=!1){const o=this.planes,c=e.elements,u=c[0],d=c[1],p=c[2],g=c[3],S=c[4],E=c[5],_=c[6],x=c[7],R=c[8],N=c[9],w=c[10],M=c[11],O=c[12],k=c[13],C=c[14],F=c[15];if(o[0].setComponents(g-u,x-S,M-R,F-O).normalize(),o[1].setComponents(g+u,x+S,M+R,F+O).normalize(),o[2].setComponents(g+d,x+E,M+N,F+k).normalize(),o[3].setComponents(g-d,x-E,M-N,F-k).normalize(),n)o[4].setComponents(p,_,w,C).normalize(),o[5].setComponents(g-p,x-_,M-w,F-C).normalize();else if(o[4].setComponents(g-p,x-_,M-w,F-C).normalize(),t===Ia)o[5].setComponents(g+p,x+_,M+w,F+C).normalize();else if(t===tu)o[5].setComponents(p,_,w,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Oo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Oo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Oo)}intersectsSprite(e){Oo.center.set(0,0,0);const t=b0.distanceTo(e.center);return Oo.radius=.7071067811865476+t,Oo.applyMatrix4(e.matrixWorld),this.intersectsSphere(Oo)}intersectsSphere(e){const t=this.planes,n=e.center,o=-e.radius;for(let c=0;c<6;c++)if(t[c].distanceToPoint(n)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const o=t[n];if(of.x=o.normal.x>0?e.max.x:e.min.x,of.y=o.normal.y>0?e.max.y:e.min.y,of.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(of)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Dg extends Ii{constructor(e=[],t=Yo,n,o,c,u,d,p,g,S){super(e,t,n,o,c,u,d,p,g,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bp extends Ii{constructor(e,t,n,o,c,u,d,p,g){super(e,t,n,o,c,u,d,p,g),this.isCanvasTexture=!0,this.needsUpdate=!0}}class iu extends Ii{constructor(e,t,n=Na,o,c,u,d=_i,p=_i,g,S=xs,E=1){if(S!==xs&&S!==Vo)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:E};super(_,o,c,u,d,p,S,n,g),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Dd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class E0 extends iu{constructor(e,t=Na,n=Yo,o,c,u=_i,d=_i,p,g=xs){const S={width:e,height:e,depth:1},E=[S,S,S,S,S,S];super(e,e,t,n,o,c,u,d,p,g),this.image=E,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ng extends Ii{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Zs extends rr{constructor(e=1,t=1,n=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:o,heightSegments:c,depthSegments:u};const d=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const p=[],g=[],S=[],E=[];let _=0,x=0;R("z","y","x",-1,-1,n,t,e,u,c,0),R("z","y","x",1,-1,n,t,-e,u,c,1),R("x","z","y",1,1,e,n,t,o,u,2),R("x","z","y",1,-1,e,n,-t,o,u,3),R("x","y","z",1,-1,e,t,n,o,c,4),R("x","y","z",-1,-1,e,t,-n,o,c,5),this.setIndex(p),this.setAttribute("position",new On(g,3)),this.setAttribute("normal",new On(S,3)),this.setAttribute("uv",new On(E,2));function R(N,w,M,O,k,C,F,D,H,y,P){const z=C/H,G=F/y,q=C/2,ae=F/2,W=D/2,ue=H+1,Me=y+1;let _e=0,Te=0;const ie=new K;for(let V=0;V<Me;V++){const xe=V*G-ae;for(let at=0;at<ue;at++){const tt=at*z-q;ie[N]=tt*O,ie[w]=xe*k,ie[M]=W,g.push(ie.x,ie.y,ie.z),ie[N]=0,ie[w]=0,ie[M]=D>0?1:-1,S.push(ie.x,ie.y,ie.z),E.push(at/H),E.push(1-V/y),_e+=1}}for(let V=0;V<y;V++)for(let xe=0;xe<H;xe++){const at=_+xe+ue*V,tt=_+xe+ue*(V+1),we=_+(xe+1)+ue*(V+1),oe=_+(xe+1)+ue*V;p.push(at,tt,oe),p.push(tt,we,oe),Te+=6}d.addGroup(x,Te,P),x+=Te,_+=_e}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Wo extends rr{constructor(e=1,t=1,n=1,o=32,c=1,u=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:o,heightSegments:c,openEnded:u,thetaStart:d,thetaLength:p};const g=this;o=Math.floor(o),c=Math.floor(c);const S=[],E=[],_=[],x=[];let R=0;const N=[],w=n/2;let M=0;O(),u===!1&&(e>0&&k(!0),t>0&&k(!1)),this.setIndex(S),this.setAttribute("position",new On(E,3)),this.setAttribute("normal",new On(_,3)),this.setAttribute("uv",new On(x,2));function O(){const C=new K,F=new K;let D=0;const H=(t-e)/n;for(let y=0;y<=c;y++){const P=[],z=y/c,G=z*(t-e)+e;for(let q=0;q<=o;q++){const ae=q/o,W=ae*p+d,ue=Math.sin(W),Me=Math.cos(W);F.x=G*ue,F.y=-z*n+w,F.z=G*Me,E.push(F.x,F.y,F.z),C.set(ue,H,Me).normalize(),_.push(C.x,C.y,C.z),x.push(ae,1-z),P.push(R++)}N.push(P)}for(let y=0;y<o;y++)for(let P=0;P<c;P++){const z=N[P][y],G=N[P+1][y],q=N[P+1][y+1],ae=N[P][y+1];(e>0||P!==0)&&(S.push(z,G,ae),D+=3),(t>0||P!==c-1)&&(S.push(G,q,ae),D+=3)}g.addGroup(M,D,0),M+=D}function k(C){const F=R,D=new ut,H=new K;let y=0;const P=C===!0?e:t,z=C===!0?1:-1;for(let q=1;q<=o;q++)E.push(0,w*z,0),_.push(0,z,0),x.push(.5,.5),R++;const G=R;for(let q=0;q<=o;q++){const W=q/o*p+d,ue=Math.cos(W),Me=Math.sin(W);H.x=P*Me,H.y=w*z,H.z=P*ue,E.push(H.x,H.y,H.z),_.push(0,z,0),D.x=ue*.5+.5,D.y=Me*.5*z+.5,x.push(D.x,D.y),R++}for(let q=0;q<o;q++){const ae=F+q,W=G+q;C===!0?S.push(W,W+1,ae):S.push(W+1,W,ae),y+=3}g.addGroup(M,y,C===!0?1:2),M+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Od extends rr{constructor(e=[],t=[],n=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:o};const c=[],u=[];d(o),g(n),S(),this.setAttribute("position",new On(c,3)),this.setAttribute("normal",new On(c.slice(),3)),this.setAttribute("uv",new On(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function d(O){const k=new K,C=new K,F=new K;for(let D=0;D<t.length;D+=3)x(t[D+0],k),x(t[D+1],C),x(t[D+2],F),p(k,C,F,O)}function p(O,k,C,F){const D=F+1,H=[];for(let y=0;y<=D;y++){H[y]=[];const P=O.clone().lerp(C,y/D),z=k.clone().lerp(C,y/D),G=D-y;for(let q=0;q<=G;q++)q===0&&y===D?H[y][q]=P:H[y][q]=P.clone().lerp(z,q/G)}for(let y=0;y<D;y++)for(let P=0;P<2*(D-y)-1;P++){const z=Math.floor(P/2);P%2===0?(_(H[y][z+1]),_(H[y+1][z]),_(H[y][z])):(_(H[y][z+1]),_(H[y+1][z+1]),_(H[y+1][z]))}}function g(O){const k=new K;for(let C=0;C<c.length;C+=3)k.x=c[C+0],k.y=c[C+1],k.z=c[C+2],k.normalize().multiplyScalar(O),c[C+0]=k.x,c[C+1]=k.y,c[C+2]=k.z}function S(){const O=new K;for(let k=0;k<c.length;k+=3){O.x=c[k+0],O.y=c[k+1],O.z=c[k+2];const C=w(O)/2/Math.PI+.5,F=M(O)/Math.PI+.5;u.push(C,1-F)}R(),E()}function E(){for(let O=0;O<u.length;O+=6){const k=u[O+0],C=u[O+2],F=u[O+4],D=Math.max(k,C,F),H=Math.min(k,C,F);D>.9&&H<.1&&(k<.2&&(u[O+0]+=1),C<.2&&(u[O+2]+=1),F<.2&&(u[O+4]+=1))}}function _(O){c.push(O.x,O.y,O.z)}function x(O,k){const C=O*3;k.x=e[C+0],k.y=e[C+1],k.z=e[C+2]}function R(){const O=new K,k=new K,C=new K,F=new K,D=new ut,H=new ut,y=new ut;for(let P=0,z=0;P<c.length;P+=9,z+=6){O.set(c[P+0],c[P+1],c[P+2]),k.set(c[P+3],c[P+4],c[P+5]),C.set(c[P+6],c[P+7],c[P+8]),D.set(u[z+0],u[z+1]),H.set(u[z+2],u[z+3]),y.set(u[z+4],u[z+5]),F.copy(O).add(k).add(C).divideScalar(3);const G=w(F);N(D,z+0,O,G),N(H,z+2,k,G),N(y,z+4,C,G)}}function N(O,k,C,F){F<0&&O.x===1&&(u[k]=O.x-1),C.x===0&&C.z===0&&(u[k]=F/2/Math.PI+.5)}function w(O){return Math.atan2(O.z,-O.x)}function M(O){return Math.atan2(-O.y,Math.sqrt(O.x*O.x+O.z*O.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Od(e.vertices,e.indices,e.radius,e.detail)}}class ys{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Mt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,o=this.getPoint(0),c=0;t.push(0);for(let u=1;u<=e;u++)n=this.getPoint(u/e),c+=n.distanceTo(o),t.push(c),o=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let o=0;const c=n.length;let u;t?u=t:u=e*n[c-1];let d=0,p=c-1,g;for(;d<=p;)if(o=Math.floor(d+(p-d)/2),g=n[o]-u,g<0)d=o+1;else if(g>0)p=o-1;else{p=o;break}if(o=p,n[o]===u)return o/(c-1);const S=n[o],_=n[o+1]-S,x=(u-S)/_;return(o+x)/(c-1)}getTangent(e,t){let o=e-1e-4,c=e+1e-4;o<0&&(o=0),c>1&&(c=1);const u=this.getPoint(o),d=this.getPoint(c),p=t||(u.isVector2?new ut:new K);return p.copy(d).sub(u).normalize(),p}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new K,o=[],c=[],u=[],d=new K,p=new Fn;for(let x=0;x<=e;x++){const R=x/e;o[x]=this.getTangentAt(R,new K)}c[0]=new K,u[0]=new K;let g=Number.MAX_VALUE;const S=Math.abs(o[0].x),E=Math.abs(o[0].y),_=Math.abs(o[0].z);S<=g&&(g=S,n.set(1,0,0)),E<=g&&(g=E,n.set(0,1,0)),_<=g&&n.set(0,0,1),d.crossVectors(o[0],n).normalize(),c[0].crossVectors(o[0],d),u[0].crossVectors(o[0],c[0]);for(let x=1;x<=e;x++){if(c[x]=c[x-1].clone(),u[x]=u[x-1].clone(),d.crossVectors(o[x-1],o[x]),d.length()>Number.EPSILON){d.normalize();const R=Math.acos(Gt(o[x-1].dot(o[x]),-1,1));c[x].applyMatrix4(p.makeRotationAxis(d,R))}u[x].crossVectors(o[x],c[x])}if(t===!0){let x=Math.acos(Gt(c[0].dot(c[e]),-1,1));x/=e,o[0].dot(d.crossVectors(c[0],c[e]))>0&&(x=-x);for(let R=1;R<=e;R++)c[R].applyMatrix4(p.makeRotationAxis(o[R],x*R)),u[R].crossVectors(o[R],c[R])}return{tangents:o,normals:c,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ug extends ys{constructor(e=0,t=0,n=1,o=1,c=0,u=Math.PI*2,d=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=o,this.aStartAngle=c,this.aEndAngle=u,this.aClockwise=d,this.aRotation=p}getPoint(e,t=new ut){const n=t,o=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const u=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=o;for(;c>o;)c-=o;c<Number.EPSILON&&(u?c=0:c=o),this.aClockwise===!0&&!u&&(c===o?c=-o:c=c-o);const d=this.aStartAngle+e*c;let p=this.aX+this.xRadius*Math.cos(d),g=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const S=Math.cos(this.aRotation),E=Math.sin(this.aRotation),_=p-this.aX,x=g-this.aY;p=_*S-x*E+this.aX,g=_*E+x*S+this.aY}return n.set(p,g)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class T0 extends Ug{constructor(e,t,n,o,c,u){super(e,t,n,n,o,c,u),this.isArcCurve=!0,this.type="ArcCurve"}}function Bd(){let i=0,e=0,t=0,n=0;function o(c,u,d,p){i=c,e=d,t=-3*c+3*u-2*d-p,n=2*c-2*u+d+p}return{initCatmullRom:function(c,u,d,p,g){o(u,d,g*(d-c),g*(p-u))},initNonuniformCatmullRom:function(c,u,d,p,g,S,E){let _=(u-c)/g-(d-c)/(g+S)+(d-u)/S,x=(d-u)/S-(p-u)/(S+E)+(p-d)/E;_*=S,x*=S,o(u,d,_,x)},calc:function(c){const u=c*c,d=u*c;return i+e*c+t*u+n*d}}}const Ep=new K,Tp=new K,bh=new Bd,Eh=new Bd,Th=new Bd;class Fg extends ys{constructor(e=[],t=!1,n="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=o}getPoint(e,t=new K){const n=t,o=this.points,c=o.length,u=(c-(this.closed?0:1))*e;let d=Math.floor(u),p=u-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:p===0&&d===c-1&&(d=c-2,p=1);let g,S;this.closed||d>0?g=o[(d-1)%c]:(Tp.subVectors(o[0],o[1]).add(o[0]),g=Tp);const E=o[d%c],_=o[(d+1)%c];if(this.closed||d+2<c?S=o[(d+2)%c]:(Ep.subVectors(o[c-1],o[c-2]).add(o[c-1]),S=Ep),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let R=Math.pow(g.distanceToSquared(E),x),N=Math.pow(E.distanceToSquared(_),x),w=Math.pow(_.distanceToSquared(S),x);N<1e-4&&(N=1),R<1e-4&&(R=N),w<1e-4&&(w=N),bh.initNonuniformCatmullRom(g.x,E.x,_.x,S.x,R,N,w),Eh.initNonuniformCatmullRom(g.y,E.y,_.y,S.y,R,N,w),Th.initNonuniformCatmullRom(g.z,E.z,_.z,S.z,R,N,w)}else this.curveType==="catmullrom"&&(bh.initCatmullRom(g.x,E.x,_.x,S.x,this.tension),Eh.initCatmullRom(g.y,E.y,_.y,S.y,this.tension),Th.initCatmullRom(g.z,E.z,_.z,S.z,this.tension));return n.set(bh.calc(p),Eh.calc(p),Th.calc(p)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const o=e.points[t];this.points.push(new K().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function wp(i,e,t,n,o){const c=(n-e)*.5,u=(o-t)*.5,d=i*i,p=i*d;return(2*t-2*n+c+u)*p+(-3*t+3*n-2*c-u)*d+c*i+t}function w0(i,e){const t=1-i;return t*t*e}function A0(i,e){return 2*(1-i)*i*e}function R0(i,e){return i*i*e}function Qc(i,e,t,n){return w0(i,e)+A0(i,t)+R0(i,n)}function C0(i,e){const t=1-i;return t*t*t*e}function P0(i,e){const t=1-i;return 3*t*t*i*e}function L0(i,e){return 3*(1-i)*i*i*e}function I0(i,e){return i*i*i*e}function qc(i,e,t,n,o){return C0(i,e)+P0(i,t)+L0(i,n)+I0(i,o)}class D0 extends ys{constructor(e=new ut,t=new ut,n=new ut,o=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=o}getPoint(e,t=new ut){const n=t,o=this.v0,c=this.v1,u=this.v2,d=this.v3;return n.set(qc(e,o.x,c.x,u.x,d.x),qc(e,o.y,c.y,u.y,d.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class N0 extends ys{constructor(e=new K,t=new K,n=new K,o=new K){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=o}getPoint(e,t=new K){const n=t,o=this.v0,c=this.v1,u=this.v2,d=this.v3;return n.set(qc(e,o.x,c.x,u.x,d.x),qc(e,o.y,c.y,u.y,d.y),qc(e,o.z,c.z,u.z,d.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class U0 extends ys{constructor(e=new ut,t=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ut){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ut){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class F0 extends ys{constructor(e=new K,t=new K){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new K){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new K){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class O0 extends ys{constructor(e=new ut,t=new ut,n=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ut){const n=t,o=this.v0,c=this.v1,u=this.v2;return n.set(Qc(e,o.x,c.x,u.x),Qc(e,o.y,c.y,u.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Og extends ys{constructor(e=new K,t=new K,n=new K){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new K){const n=t,o=this.v0,c=this.v1,u=this.v2;return n.set(Qc(e,o.x,c.x,u.x),Qc(e,o.y,c.y,u.y),Qc(e,o.z,c.z,u.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class B0 extends ys{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ut){const n=t,o=this.points,c=(o.length-1)*e,u=Math.floor(c),d=c-u,p=o[u===0?u:u-1],g=o[u],S=o[u>o.length-2?o.length-1:u+1],E=o[u>o.length-3?o.length-1:u+2];return n.set(wp(d,p.x,g.x,S.x,E.x),wp(d,p.y,g.y,S.y,E.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const o=e.points[t];this.points.push(new ut().fromArray(o))}return this}}var z0=Object.freeze({__proto__:null,ArcCurve:T0,CatmullRomCurve3:Fg,CubicBezierCurve:D0,CubicBezierCurve3:N0,EllipseCurve:Ug,LineCurve:U0,LineCurve3:F0,QuadraticBezierCurve:O0,QuadraticBezierCurve3:Og,SplineCurve:B0});class Tf extends Od{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],o=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,o,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Tf(e.radius,e.detail)}}class rc extends rr{constructor(e=1,t=1,n=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:o};const c=e/2,u=t/2,d=Math.floor(n),p=Math.floor(o),g=d+1,S=p+1,E=e/d,_=t/p,x=[],R=[],N=[],w=[];for(let M=0;M<S;M++){const O=M*_-u;for(let k=0;k<g;k++){const C=k*E-c;R.push(C,-O,0),N.push(0,0,1),w.push(k/d),w.push(1-M/p)}}for(let M=0;M<p;M++)for(let O=0;O<d;O++){const k=O+g*M,C=O+g*(M+1),F=O+1+g*(M+1),D=O+1+g*M;x.push(k,C,D),x.push(C,F,D)}this.setIndex(x),this.setAttribute("position",new On(R,3)),this.setAttribute("normal",new On(N,3)),this.setAttribute("uv",new On(w,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Rf extends rr{constructor(e=1,t=32,n=16,o=0,c=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:o,phiLength:c,thetaStart:u,thetaLength:d},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const p=Math.min(u+d,Math.PI);let g=0;const S=[],E=new K,_=new K,x=[],R=[],N=[],w=[];for(let M=0;M<=n;M++){const O=[],k=M/n,C=u+k*d,F=e*Math.cos(C),D=Math.sqrt(e*e-F*F);let H=0;M===0&&u===0?H=.5/t:M===n&&p===Math.PI&&(H=-.5/t);for(let y=0;y<=t;y++){const P=y/t,z=o+P*c;E.x=-D*Math.cos(z),E.y=F,E.z=D*Math.sin(z),R.push(E.x,E.y,E.z),_.copy(E).normalize(),N.push(_.x,_.y,_.z),w.push(P+H,1-k),O.push(g++)}S.push(O)}for(let M=0;M<n;M++)for(let O=0;O<t;O++){const k=S[M][O+1],C=S[M][O],F=S[M+1][O],D=S[M+1][O+1];(M!==0||u>0)&&x.push(k,C,D),(M!==n-1||p<Math.PI)&&x.push(C,F,D)}this.setIndex(x),this.setAttribute("position",new On(R,3)),this.setAttribute("normal",new On(N,3)),this.setAttribute("uv",new On(w,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Cf extends rr{constructor(e=1,t=.4,n=12,o=48,c=Math.PI*2,u=0,d=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:o,arc:c,thetaStart:u,thetaLength:d},n=Math.floor(n),o=Math.floor(o);const p=[],g=[],S=[],E=[],_=new K,x=new K,R=new K;for(let N=0;N<=n;N++){const w=u+N/n*d;for(let M=0;M<=o;M++){const O=M/o*c;x.x=(e+t*Math.cos(w))*Math.cos(O),x.y=(e+t*Math.cos(w))*Math.sin(O),x.z=t*Math.sin(w),g.push(x.x,x.y,x.z),_.x=e*Math.cos(O),_.y=e*Math.sin(O),R.subVectors(x,_).normalize(),S.push(R.x,R.y,R.z),E.push(M/o),E.push(N/n)}}for(let N=1;N<=n;N++)for(let w=1;w<=o;w++){const M=(o+1)*N+w-1,O=(o+1)*(N-1)+w-1,k=(o+1)*(N-1)+w,C=(o+1)*N+w;p.push(M,O,C),p.push(O,k,C)}this.setIndex(p),this.setAttribute("position",new On(g,3)),this.setAttribute("normal",new On(S,3)),this.setAttribute("uv",new On(E,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cf(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class zd extends rr{constructor(e=new Og(new K(-1,-1,0),new K(-1,1,0),new K(1,1,0)),t=64,n=1,o=8,c=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:o,closed:c};const u=e.computeFrenetFrames(t,c);this.tangents=u.tangents,this.normals=u.normals,this.binormals=u.binormals;const d=new K,p=new K,g=new ut;let S=new K;const E=[],_=[],x=[],R=[];N(),this.setIndex(R),this.setAttribute("position",new On(E,3)),this.setAttribute("normal",new On(_,3)),this.setAttribute("uv",new On(x,2));function N(){for(let k=0;k<t;k++)w(k);w(c===!1?t:0),O(),M()}function w(k){S=e.getPointAt(k/t,S);const C=u.normals[k],F=u.binormals[k];for(let D=0;D<=o;D++){const H=D/o*Math.PI*2,y=Math.sin(H),P=-Math.cos(H);p.x=P*C.x+y*F.x,p.y=P*C.y+y*F.y,p.z=P*C.z+y*F.z,p.normalize(),_.push(p.x,p.y,p.z),d.x=S.x+n*p.x,d.y=S.y+n*p.y,d.z=S.z+n*p.z,E.push(d.x,d.y,d.z)}}function M(){for(let k=1;k<=t;k++)for(let C=1;C<=o;C++){const F=(o+1)*(k-1)+(C-1),D=(o+1)*k+(C-1),H=(o+1)*k+C,y=(o+1)*(k-1)+C;R.push(F,D,y),R.push(D,H,y)}}function O(){for(let k=0;k<=t;k++)for(let C=0;C<=o;C++)g.x=k/t,g.y=C/o,x.push(g.x,g.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new zd(new z0[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function ac(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const o=i[t][n];if(Ap(o))o.isRenderTargetTexture?(Mt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=o.clone();else if(Array.isArray(o))if(Ap(o[0])){const c=[];for(let u=0,d=o.length;u<d;u++)c[u]=o[u].clone();e[t][n]=c}else e[t][n]=o.slice();else e[t][n]=o}}return e}function Wi(i){const e={};for(let t=0;t<i.length;t++){const n=ac(i[t]);for(const o in n)e[o]=n[o]}return e}function Ap(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function k0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Bg(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:jt.workingColorSpace}const H0={clone:ac,merge:Wi};var G0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,V0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fa extends lc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=G0,this.fragmentShader=V0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ac(e.uniforms),this.uniformsGroups=k0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const o in this.extensions)this.extensions[o]===!0&&(n[o]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const o=e.uniforms[n];switch(this.uniforms[n]={},o.type){case"t":this.uniforms[n].value=t[o.value]||null;break;case"c":this.uniforms[n].value=new Pt().setHex(o.value);break;case"v2":this.uniforms[n].value=new ut().fromArray(o.value);break;case"v3":this.uniforms[n].value=new K().fromArray(o.value);break;case"v4":this.uniforms[n].value=new Hn().fromArray(o.value);break;case"m3":this.uniforms[n].value=new Ct().fromArray(o.value);break;case"m4":this.uniforms[n].value=new Fn().fromArray(o.value);break;default:this.uniforms[n].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class W0 extends Fa{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ru extends lc{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mf,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ms,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zg extends ru{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ut(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class X0 extends lc{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mf,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ms,this.combine=bd,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Y0 extends lc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Z0 extends lc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class kd extends xi{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class J0 extends kd{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xi.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const wh=new Fn,Rp=new K,Cp=new K;class kg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.mapType=dr,this.map=null,this.mapPass=null,this.matrix=new Fn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fd,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new Hn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Rp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rp),Cp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,o){wh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(wh,e.coordinateSystem,e.reversedDepth);const c=this._frameExtents,u=o?o.z/c.x:1,d=o?o.w/c.y:1,p=o?o.x/c.x:0,g=o?o.y/c.y:0;e.coordinateSystem===tu||e.reversedDepth?t.set(.5*u,0,0,.5*u+p,0,.5*d,0,.5*d+g,0,0,1,0,0,0,0,1):t.set(.5*u,0,0,.5*u+p,0,.5*d,0,.5*d+g,0,0,.5,.5,0,0,0,1),t.multiply(wh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const lf=new K,cf=new oc,Ra=new K;class Hg extends xi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fn,this.projectionMatrix=new Fn,this.projectionMatrixInverse=new Fn,this.coordinateSystem=Ia,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(lf,cf,Ra),Ra.x===1&&Ra.y===1&&Ra.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lf,cf,Ra.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(lf,cf,Ra),Ra.x===1&&Ra.y===1&&Ra.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lf,cf,Ra.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Vs=new K,Pp=new ut,Lp=new ut;class hr extends Hg{constructor(e=50,t=1,n=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=nu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nu*2*Math.atan(Math.tan(Jc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Vs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vs.x,Vs.y).multiplyScalar(-e/Vs.z),Vs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vs.x,Vs.y).multiplyScalar(-e/Vs.z)}getViewSize(e,t){return this.getViewBounds(e,Pp,Lp),t.subVectors(Lp,Pp)}setViewOffset(e,t,n,o,c,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Jc*.5*this.fov)/this.zoom,n=2*t,o=this.aspect*n,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,g=u.fullHeight;c+=u.offsetX*o/p,t-=u.offsetY*n/g,o*=u.width/p,n*=u.height/g}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class K0 extends kg{constructor(){super(new hr(90,1,.5,500)),this.isPointLightShadow=!0}}class Q0 extends kd{constructor(e,t,n=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=o,this.shadow=new K0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Hd extends Hg{constructor(e=-1,t=1,n=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=n-e,u=n+e,d=o+t,p=o-t;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=g*this.view.offsetX,u=c+g*this.view.width,d-=S*this.view.offsetY,p=d-S*this.view.height}this.projectionMatrix.makeOrthographic(c,u,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class q0 extends kg{constructor(){super(new Hd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class j0 extends kd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xi.DEFAULT_UP),this.updateMatrix(),this.target=new xi,this.shadow=new q0}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Kl=-90,Ql=1;class $0 extends xi{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new hr(Kl,Ql,e,t);o.layers=this.layers,this.add(o);const c=new hr(Kl,Ql,e,t);c.layers=this.layers,this.add(c);const u=new hr(Kl,Ql,e,t);u.layers=this.layers,this.add(u);const d=new hr(Kl,Ql,e,t);d.layers=this.layers,this.add(d);const p=new hr(Kl,Ql,e,t);p.layers=this.layers,this.add(p);const g=new hr(Kl,Ql,e,t);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,o,c,u,d,p]=t;for(const g of t)this.remove(g);if(e===Ia)n.up.set(0,1,0),n.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===tu)n.up.set(0,-1,0),n.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const g of t)this.add(g),g.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,d,p,g,S]=this.children,E=e.getRenderTarget(),_=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),R=e.xr.enabled;e.xr.enabled=!1;const N=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let w=!1;e.isWebGLRenderer===!0?w=e.state.buffers.depth.getReversed():w=e.reversedDepthBuffer,e.setRenderTarget(n,0,o),w&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,1,o),w&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(n,2,o),w&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(n,3,o),w&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(n,4,o),w&&e.autoClear===!1&&e.clearDepth(),e.render(t,g),n.texture.generateMipmaps=N,e.setRenderTarget(n,5,o),w&&e.autoClear===!1&&e.clearDepth(),e.render(t,S),e.setRenderTarget(E,_,x),e.xr.enabled=R,n.texture.needsPMREMUpdate=!0}}class ev extends hr{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ip=new Fn;class tv{constructor(e,t,n=0,o=1/0){this.ray=new Ig(e,t),this.near=n,this.far=o,this.camera=null,this.layers=new Nd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):an("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ip.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ip),this}intersectObject(e,t=!0,n=[]){return xd(e,this,n,t),n.sort(Dp),n}intersectObjects(e,t=!0,n=[]){for(let o=0,c=e.length;o<c;o++)xd(e[o],this,n,t);return n.sort(Dp),n}}function Dp(i,e){return i.distance-e.distance}function xd(i,e,t,n){let o=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(o=!1),o===!0&&n===!0){const c=i.children;for(let u=0,d=c.length;u<d;u++)xd(c[u],e,t,!0)}}const Yd=class Yd{constructor(e,t,n,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,o){const c=this.elements;return c[0]=e,c[2]=t,c[1]=n,c[3]=o,this}};Yd.prototype.isMatrix2=!0;let Np=Yd;function Up(i,e,t,n){const o=nv(n);switch(t){case Eg:return i*e;case wg:return i*e/o.components*o.byteLength;case Ad:return i*e/o.components*o.byteLength;case Zo:return i*e*2/o.components*o.byteLength;case Rd:return i*e*2/o.components*o.byteLength;case Tg:return i*e*3/o.components*o.byteLength;case ra:return i*e*4/o.components*o.byteLength;case Cd:return i*e*4/o.components*o.byteLength;case df:case pf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case gf:case mf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wh:case Yh:return Math.max(i,16)*Math.max(e,8)/4;case Vh:case Xh:return Math.max(i,8)*Math.max(e,8)/2;case Zh:case Jh:case Qh:case qh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Kh:case _f:case jh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $h:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ed:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case td:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case nd:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case id:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case rd:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ad:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case sd:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case od:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ld:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case cd:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ud:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case fd:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case hd:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case dd:case pd:case gd:return Math.ceil(i/4)*Math.ceil(e/4)*16;case md:case vd:return Math.ceil(i/4)*Math.ceil(e/4)*8;case xf:case _d:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function nv(i){switch(i){case dr:case Mg:return{byteLength:1,components:1};case $c:case yg:case Ua:return{byteLength:2,components:1};case Td:case wd:return{byteLength:2,components:4};case Na:case Ed:case La:return{byteLength:4,components:1};case Sg:case bg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sd}}));typeof window<"u"&&(window.__THREE__?Mt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sd);function Gg(){let i=null,e=!1,t=null,n=null;function o(c,u){n=i.requestAnimationFrame(o),t(c,u)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(o),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(c){t=c},setContext:function(c){i=c}}}function iv(i){const e=new WeakMap;function t(d,p){const g=d.array,S=d.usage,E=g.byteLength,_=i.createBuffer();i.bindBuffer(p,_),i.bufferData(p,g,S),d.onUploadCallback();let x;if(g instanceof Float32Array)x=i.FLOAT;else if(typeof Float16Array<"u"&&g instanceof Float16Array)x=i.HALF_FLOAT;else if(g instanceof Uint16Array)d.isFloat16BufferAttribute?x=i.HALF_FLOAT:x=i.UNSIGNED_SHORT;else if(g instanceof Int16Array)x=i.SHORT;else if(g instanceof Uint32Array)x=i.UNSIGNED_INT;else if(g instanceof Int32Array)x=i.INT;else if(g instanceof Int8Array)x=i.BYTE;else if(g instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:_,type:x,bytesPerElement:g.BYTES_PER_ELEMENT,version:d.version,size:E}}function n(d,p,g){const S=p.array,E=p.updateRanges;if(i.bindBuffer(g,d),E.length===0)i.bufferSubData(g,0,S);else{E.sort((x,R)=>x.start-R.start);let _=0;for(let x=1;x<E.length;x++){const R=E[_],N=E[x];N.start<=R.start+R.count+1?R.count=Math.max(R.count,N.start+N.count-R.start):(++_,E[_]=N)}E.length=_+1;for(let x=0,R=E.length;x<R;x++){const N=E[x];i.bufferSubData(g,N.start*S.BYTES_PER_ELEMENT,S,N.start,N.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(i.deleteBuffer(p.buffer),e.delete(d))}function u(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const S=e.get(d);(!S||S.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const g=e.get(d);if(g===void 0)e.set(d,t(d,p));else if(g.version<d.version){if(g.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(g.buffer,d,p),g.version=d.version}}return{get:o,remove:c,update:u}}var rv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,av=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ov=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,dv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_v=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Mv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ev=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Tv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,wv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Av=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Rv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Cv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Pv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Iv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Uv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Ov=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Bv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Hv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Yv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Qv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,qv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$v=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,e_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,t_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,n_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,i_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,r_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,a_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,s_=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,o_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,l_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,f_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,h_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,d_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,p_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,g_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,m_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,v_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,__=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,x_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,y_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,S_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,b_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,E_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,A_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,R_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,C_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,P_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,L_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,I_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,D_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,N_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,U_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,F_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,O_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,B_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,z_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,k_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,H_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,G_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,V_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,W_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,X_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Y_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Z_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,J_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,K_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Q_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,q_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,j_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ix=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ax=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ox=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ux=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,dx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_x=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ex=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Tx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ax=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Cx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Px=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ix=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Dx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ux=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ox=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kt={alphahash_fragment:rv,alphahash_pars_fragment:av,alphamap_fragment:sv,alphamap_pars_fragment:ov,alphatest_fragment:lv,alphatest_pars_fragment:cv,aomap_fragment:uv,aomap_pars_fragment:fv,batching_pars_vertex:hv,batching_vertex:dv,begin_vertex:pv,beginnormal_vertex:gv,bsdfs:mv,iridescence_fragment:vv,bumpmap_pars_fragment:_v,clipping_planes_fragment:xv,clipping_planes_pars_fragment:Mv,clipping_planes_pars_vertex:yv,clipping_planes_vertex:Sv,color_fragment:bv,color_pars_fragment:Ev,color_pars_vertex:Tv,color_vertex:wv,common:Av,cube_uv_reflection_fragment:Rv,defaultnormal_vertex:Cv,displacementmap_pars_vertex:Pv,displacementmap_vertex:Lv,emissivemap_fragment:Iv,emissivemap_pars_fragment:Dv,colorspace_fragment:Nv,colorspace_pars_fragment:Uv,envmap_fragment:Fv,envmap_common_pars_fragment:Ov,envmap_pars_fragment:Bv,envmap_pars_vertex:zv,envmap_physical_pars_fragment:Qv,envmap_vertex:kv,fog_vertex:Hv,fog_pars_vertex:Gv,fog_fragment:Vv,fog_pars_fragment:Wv,gradientmap_pars_fragment:Xv,lightmap_pars_fragment:Yv,lights_lambert_fragment:Zv,lights_lambert_pars_fragment:Jv,lights_pars_begin:Kv,lights_toon_fragment:qv,lights_toon_pars_fragment:jv,lights_phong_fragment:$v,lights_phong_pars_fragment:e_,lights_physical_fragment:t_,lights_physical_pars_fragment:n_,lights_fragment_begin:i_,lights_fragment_maps:r_,lights_fragment_end:a_,lightprobes_pars_fragment:s_,logdepthbuf_fragment:o_,logdepthbuf_pars_fragment:l_,logdepthbuf_pars_vertex:c_,logdepthbuf_vertex:u_,map_fragment:f_,map_pars_fragment:h_,map_particle_fragment:d_,map_particle_pars_fragment:p_,metalnessmap_fragment:g_,metalnessmap_pars_fragment:m_,morphinstance_vertex:v_,morphcolor_vertex:__,morphnormal_vertex:x_,morphtarget_pars_vertex:M_,morphtarget_vertex:y_,normal_fragment_begin:S_,normal_fragment_maps:b_,normal_pars_fragment:E_,normal_pars_vertex:T_,normal_vertex:w_,normalmap_pars_fragment:A_,clearcoat_normal_fragment_begin:R_,clearcoat_normal_fragment_maps:C_,clearcoat_pars_fragment:P_,iridescence_pars_fragment:L_,opaque_fragment:I_,packing:D_,premultiplied_alpha_fragment:N_,project_vertex:U_,dithering_fragment:F_,dithering_pars_fragment:O_,roughnessmap_fragment:B_,roughnessmap_pars_fragment:z_,shadowmap_pars_fragment:k_,shadowmap_pars_vertex:H_,shadowmap_vertex:G_,shadowmask_pars_fragment:V_,skinbase_vertex:W_,skinning_pars_vertex:X_,skinning_vertex:Y_,skinnormal_vertex:Z_,specularmap_fragment:J_,specularmap_pars_fragment:K_,tonemapping_fragment:Q_,tonemapping_pars_fragment:q_,transmission_fragment:j_,transmission_pars_fragment:$_,uv_pars_fragment:ex,uv_pars_vertex:tx,uv_vertex:nx,worldpos_vertex:ix,background_vert:rx,background_frag:ax,backgroundCube_vert:sx,backgroundCube_frag:ox,cube_vert:lx,cube_frag:cx,depth_vert:ux,depth_frag:fx,distance_vert:hx,distance_frag:dx,equirect_vert:px,equirect_frag:gx,linedashed_vert:mx,linedashed_frag:vx,meshbasic_vert:_x,meshbasic_frag:xx,meshlambert_vert:Mx,meshlambert_frag:yx,meshmatcap_vert:Sx,meshmatcap_frag:bx,meshnormal_vert:Ex,meshnormal_frag:Tx,meshphong_vert:wx,meshphong_frag:Ax,meshphysical_vert:Rx,meshphysical_frag:Cx,meshtoon_vert:Px,meshtoon_frag:Lx,points_vert:Ix,points_frag:Dx,shadow_vert:Nx,shadow_frag:Ux,sprite_vert:Fx,sprite_frag:Ox},Ke={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ct},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ct}},envmap:{envMap:{value:null},envMapRotation:{value:new Ct},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ct},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new K},probesMax:{value:new K},probesResolution:{value:new K}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0},uvTransform:{value:new Ct}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ct},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0}}},Pa={basic:{uniforms:Wi([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Wi([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new Pt(0)},envMapIntensity:{value:1}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Wi([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Wi([Ke.common,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.roughnessmap,Ke.metalnessmap,Ke.fog,Ke.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Wi([Ke.common,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.gradientmap,Ke.fog,Ke.lights,{emissive:{value:new Pt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Wi([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Wi([Ke.points,Ke.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Wi([Ke.common,Ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Wi([Ke.common,Ke.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Wi([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Wi([Ke.sprite,Ke.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ct}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distance:{uniforms:Wi([Ke.common,Ke.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distance_vert,fragmentShader:kt.distance_frag},shadow:{uniforms:Wi([Ke.lights,Ke.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};Pa.physical={uniforms:Wi([Pa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ct},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ct},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ct},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ct},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ct},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ct},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ct}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};const uf={r:0,b:0,g:0},Bx=new Fn,Vg=new Ct;Vg.set(-1,0,0,0,1,0,0,0,1);function zx(i,e,t,n,o,c){const u=new Pt(0);let d=o===!0?0:1,p,g,S=null,E=0,_=null;function x(O){let k=O.isScene===!0?O.background:null;if(k&&k.isTexture){const C=O.backgroundBlurriness>0;k=e.get(k,C)}return k}function R(O){let k=!1;const C=x(O);C===null?w(u,d):C&&C.isColor&&(w(C,1),k=!0);const F=i.xr.getEnvironmentBlendMode();F==="additive"?t.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,c),(i.autoClear||k)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function N(O,k){const C=x(k);C&&(C.isCubeTexture||C.mapping===Af)?(g===void 0&&(g=new Di(new Zs(1,1,1),new Fa({name:"BackgroundCubeMaterial",uniforms:ac(Pa.backgroundCube.uniforms),vertexShader:Pa.backgroundCube.vertexShader,fragmentShader:Pa.backgroundCube.fragmentShader,side:ir,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(F,D,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(g)),g.material.uniforms.envMap.value=C,g.material.uniforms.backgroundBlurriness.value=k.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(Bx.makeRotationFromEuler(k.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&g.material.uniforms.backgroundRotation.value.premultiply(Vg),g.material.toneMapped=jt.getTransfer(C.colorSpace)!==xn,(S!==C||E!==C.version||_!==i.toneMapping)&&(g.material.needsUpdate=!0,S=C,E=C.version,_=i.toneMapping),g.layers.enableAll(),O.unshift(g,g.geometry,g.material,0,0,null)):C&&C.isTexture&&(p===void 0&&(p=new Di(new rc(2,2),new Fa({name:"BackgroundMaterial",uniforms:ac(Pa.background.uniforms),vertexShader:Pa.background.vertexShader,fragmentShader:Pa.background.fragmentShader,side:Xo,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(p)),p.material.uniforms.t2D.value=C,p.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,p.material.toneMapped=jt.getTransfer(C.colorSpace)!==xn,C.matrixAutoUpdate===!0&&C.updateMatrix(),p.material.uniforms.uvTransform.value.copy(C.matrix),(S!==C||E!==C.version||_!==i.toneMapping)&&(p.material.needsUpdate=!0,S=C,E=C.version,_=i.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function w(O,k){O.getRGB(uf,Bg(i)),t.buffers.color.setClear(uf.r,uf.g,uf.b,k,c)}function M(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return u},setClearColor:function(O,k=1){u.set(O),d=k,w(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(O){d=O,w(u,d)},render:R,addToRenderList:N,dispose:M}}function kx(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},o=_(null);let c=o,u=!1;function d(G,q,ae,W,ue){let Me=!1;const _e=E(G,W,ae,q);c!==_e&&(c=_e,g(c.object)),Me=x(G,W,ae,ue),Me&&R(G,W,ae,ue),ue!==null&&e.update(ue,i.ELEMENT_ARRAY_BUFFER),(Me||u)&&(u=!1,C(G,q,ae,W),ue!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function p(){return i.createVertexArray()}function g(G){return i.bindVertexArray(G)}function S(G){return i.deleteVertexArray(G)}function E(G,q,ae,W){const ue=W.wireframe===!0;let Me=n[q.id];Me===void 0&&(Me={},n[q.id]=Me);const _e=G.isInstancedMesh===!0?G.id:0;let Te=Me[_e];Te===void 0&&(Te={},Me[_e]=Te);let ie=Te[ae.id];ie===void 0&&(ie={},Te[ae.id]=ie);let V=ie[ue];return V===void 0&&(V=_(p()),ie[ue]=V),V}function _(G){const q=[],ae=[],W=[];for(let ue=0;ue<t;ue++)q[ue]=0,ae[ue]=0,W[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:ae,attributeDivisors:W,object:G,attributes:{},index:null}}function x(G,q,ae,W){const ue=c.attributes,Me=q.attributes;let _e=0;const Te=ae.getAttributes();for(const ie in Te)if(Te[ie].location>=0){const xe=ue[ie];let at=Me[ie];if(at===void 0&&(ie==="instanceMatrix"&&G.instanceMatrix&&(at=G.instanceMatrix),ie==="instanceColor"&&G.instanceColor&&(at=G.instanceColor)),xe===void 0||xe.attribute!==at||at&&xe.data!==at.data)return!0;_e++}return c.attributesNum!==_e||c.index!==W}function R(G,q,ae,W){const ue={},Me=q.attributes;let _e=0;const Te=ae.getAttributes();for(const ie in Te)if(Te[ie].location>=0){let xe=Me[ie];xe===void 0&&(ie==="instanceMatrix"&&G.instanceMatrix&&(xe=G.instanceMatrix),ie==="instanceColor"&&G.instanceColor&&(xe=G.instanceColor));const at={};at.attribute=xe,xe&&xe.data&&(at.data=xe.data),ue[ie]=at,_e++}c.attributes=ue,c.attributesNum=_e,c.index=W}function N(){const G=c.newAttributes;for(let q=0,ae=G.length;q<ae;q++)G[q]=0}function w(G){M(G,0)}function M(G,q){const ae=c.newAttributes,W=c.enabledAttributes,ue=c.attributeDivisors;ae[G]=1,W[G]===0&&(i.enableVertexAttribArray(G),W[G]=1),ue[G]!==q&&(i.vertexAttribDivisor(G,q),ue[G]=q)}function O(){const G=c.newAttributes,q=c.enabledAttributes;for(let ae=0,W=q.length;ae<W;ae++)q[ae]!==G[ae]&&(i.disableVertexAttribArray(ae),q[ae]=0)}function k(G,q,ae,W,ue,Me,_e){_e===!0?i.vertexAttribIPointer(G,q,ae,ue,Me):i.vertexAttribPointer(G,q,ae,W,ue,Me)}function C(G,q,ae,W){N();const ue=W.attributes,Me=ae.getAttributes(),_e=q.defaultAttributeValues;for(const Te in Me){const ie=Me[Te];if(ie.location>=0){let V=ue[Te];if(V===void 0&&(Te==="instanceMatrix"&&G.instanceMatrix&&(V=G.instanceMatrix),Te==="instanceColor"&&G.instanceColor&&(V=G.instanceColor)),V!==void 0){const xe=V.normalized,at=V.itemSize,tt=e.get(V);if(tt===void 0)continue;const we=tt.buffer,oe=tt.type,Qt=tt.bytesPerElement,ve=oe===i.INT||oe===i.UNSIGNED_INT||V.gpuType===Ed;if(V.isInterleavedBufferAttribute){const me=V.data,ke=me.stride,ft=V.offset;if(me.isInstancedInterleavedBuffer){for(let Xe=0;Xe<ie.locationSize;Xe++)M(ie.location+Xe,me.meshPerAttribute);G.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Xe=0;Xe<ie.locationSize;Xe++)w(ie.location+Xe);i.bindBuffer(i.ARRAY_BUFFER,we);for(let Xe=0;Xe<ie.locationSize;Xe++)k(ie.location+Xe,at/ie.locationSize,oe,xe,ke*Qt,(ft+at/ie.locationSize*Xe)*Qt,ve)}else{if(V.isInstancedBufferAttribute){for(let me=0;me<ie.locationSize;me++)M(ie.location+me,V.meshPerAttribute);G.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let me=0;me<ie.locationSize;me++)w(ie.location+me);i.bindBuffer(i.ARRAY_BUFFER,we);for(let me=0;me<ie.locationSize;me++)k(ie.location+me,at/ie.locationSize,oe,xe,at*Qt,at/ie.locationSize*me*Qt,ve)}}else if(_e!==void 0){const xe=_e[Te];if(xe!==void 0)switch(xe.length){case 2:i.vertexAttrib2fv(ie.location,xe);break;case 3:i.vertexAttrib3fv(ie.location,xe);break;case 4:i.vertexAttrib4fv(ie.location,xe);break;default:i.vertexAttrib1fv(ie.location,xe)}}}}O()}function F(){P();for(const G in n){const q=n[G];for(const ae in q){const W=q[ae];for(const ue in W){const Me=W[ue];for(const _e in Me)S(Me[_e].object),delete Me[_e];delete W[ue]}}delete n[G]}}function D(G){if(n[G.id]===void 0)return;const q=n[G.id];for(const ae in q){const W=q[ae];for(const ue in W){const Me=W[ue];for(const _e in Me)S(Me[_e].object),delete Me[_e];delete W[ue]}}delete n[G.id]}function H(G){for(const q in n){const ae=n[q];for(const W in ae){const ue=ae[W];if(ue[G.id]===void 0)continue;const Me=ue[G.id];for(const _e in Me)S(Me[_e].object),delete Me[_e];delete ue[G.id]}}}function y(G){for(const q in n){const ae=n[q],W=G.isInstancedMesh===!0?G.id:0,ue=ae[W];if(ue!==void 0){for(const Me in ue){const _e=ue[Me];for(const Te in _e)S(_e[Te].object),delete _e[Te];delete ue[Me]}delete ae[W],Object.keys(ae).length===0&&delete n[q]}}}function P(){z(),u=!0,c!==o&&(c=o,g(c.object))}function z(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:P,resetDefaultState:z,dispose:F,releaseStatesOfGeometry:D,releaseStatesOfObject:y,releaseStatesOfProgram:H,initAttributes:N,enableAttribute:w,disableUnusedAttributes:O}}function Hx(i,e,t){let n;function o(p){n=p}function c(p,g){i.drawArrays(n,p,g),t.update(g,n,1)}function u(p,g,S){S!==0&&(i.drawArraysInstanced(n,p,g,S),t.update(g,n,S))}function d(p,g,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,p,0,g,0,S);let _=0;for(let x=0;x<S;x++)_+=g[x];t.update(_,n,1)}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=d}function Gx(i,e,t,n){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const H=e.get("EXT_texture_filter_anisotropic");o=i.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(H){return!(H!==ra&&n.convert(H)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(H){const y=H===Ua&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(H!==dr&&H!==La&&!y&&n.convert(H)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function p(H){if(H==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=t.precision!==void 0?t.precision:"highp";const S=p(g);S!==g&&(Mt("WebGLRenderer:",g,"not supported, using",S,"instead."),g=S);const E=t.logarithmicDepthBuffer===!0,_=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&_===!1&&Mt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),R=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),N=i.getParameter(i.MAX_TEXTURE_SIZE),w=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),M=i.getParameter(i.MAX_VERTEX_ATTRIBS),O=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),k=i.getParameter(i.MAX_VARYING_VECTORS),C=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),F=i.getParameter(i.MAX_SAMPLES),D=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:d,precision:g,logarithmicDepthBuffer:E,reversedDepthBuffer:_,maxTextures:x,maxVertexTextures:R,maxTextureSize:N,maxCubemapSize:w,maxAttributes:M,maxVertexUniforms:O,maxVaryings:k,maxFragmentUniforms:C,maxSamples:F,samples:D}}function Vx(i){const e=this;let t=null,n=0,o=!1,c=!1;const u=new Xs,d=new Ct,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(E,_){const x=E.length!==0||_||n!==0||o;return o=_,n=E.length,x},this.beginShadows=function(){c=!0,S(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(E,_){t=S(E,_,0)},this.setState=function(E,_,x){const R=E.clippingPlanes,N=E.clipIntersection,w=E.clipShadows,M=i.get(E);if(!o||R===null||R.length===0||c&&!w)c?S(null):g();else{const O=c?0:n,k=O*4;let C=M.clippingState||null;p.value=C,C=S(R,_,k,x);for(let F=0;F!==k;++F)C[F]=t[F];M.clippingState=C,this.numIntersection=N?this.numPlanes:0,this.numPlanes+=O}};function g(){p.value!==t&&(p.value=t,p.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function S(E,_,x,R){const N=E!==null?E.length:0;let w=null;if(N!==0){if(w=p.value,R!==!0||w===null){const M=x+N*4,O=_.matrixWorldInverse;d.getNormalMatrix(O),(w===null||w.length<M)&&(w=new Float32Array(M));for(let k=0,C=x;k!==N;++k,C+=4)u.copy(E[k]).applyMatrix4(O,d),u.normal.toArray(w,C),w[C+3]=u.constant}p.value=w,p.needsUpdate=!0}return e.numPlanes=N,e.numIntersection=0,w}}const ec=4,Wx=6,Xx=20,Yx=256,Gc=new Hd,Fp=new Pt;let Ah=null,Rh=0,Ch=0,Ph=!1;const Zx=new K,Bo=new K;class Op{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,o=100,c={}){const{size:u=256,position:d=Zx}=c;Ah=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel(),Ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,n,o,p,d),t>0&&this._blur(p,0,0,t),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ah,Rh,Ch),this._renderer.xr.enabled=Ph,e.scissorTest=!1,ql(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Yo||e.mapping===ic?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ah=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel(),Ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Li,minFilter:Li,generateMipmaps:!1,type:Ua,format:ra,colorSpace:yf,depthBuffer:!1},o=Bp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bp(e,t,n);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Jx(c)),this._blurMaterial=Qx(c,e,t),this._ggxMaterial=Kx(c,e,t)}return o}_compileMaterial(e){const t=new Di(new rr,e);this._renderer.compile(t,Gc)}_sceneToCubeUV(e,t,n,o,c){const p=new hr(90,1,t,n),g=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],E=this._renderer,_=E.autoClear,x=E.toneMapping;E.getClearColor(Fp),E.toneMapping=Da,E.autoClear=!1,E.state.buffers.depth.getReversed()&&(E.setRenderTarget(o),E.clearDepth(),E.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Di(new Zs,new Ef({name:"PMREM.Background",side:ir,depthWrite:!1,depthTest:!1})));const N=this._backgroundBox,w=N.material;let M=!1;const O=e.background;O?O.isColor&&(w.color.copy(O),e.background=null,M=!0):(w.color.copy(Fp),M=!0);for(let k=0;k<6;k++){const C=k%3;C===0?(p.up.set(0,g[k],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+S[k],c.y,c.z)):C===1?(p.up.set(0,0,g[k]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+S[k],c.z)):(p.up.set(0,g[k],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+S[k]));const F=this._cubeSize;ql(o,C*F,k>2?F:0,F,F),E.setRenderTarget(o),M&&E.render(N,p),E.render(e,p)}E.toneMapping=x,E.autoClear=_,e.background=O}_textureToCubeUV(e,t){const n=this._renderer,o=e.mapping===Yo||e.mapping===ic;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=kp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zp());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const d=c.uniforms;d.envMap.value=e;const p=this._cubeSize;ql(t,0,0,3*p,2*p),n.setRenderTarget(t),n.render(u,Gc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);t.autoClear=n}_applyGGXFilter(e,t,n){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[n];d.material=u;const p=u.uniforms,g=n/(this._lodMeshes.length-1),S=t/(this._lodMeshes.length-1),E=Math.sqrt(g*g-S*S),_=g*1.25,x=E*_,{_lodMax:R}=this,N=this._sizeLods[n],w=3*N*(n>R-ec?n-R+ec:0),M=4*(this._cubeSize-N);p.envMap.value=e.texture,p.roughness.value=x,p.mipInt.value=R-t,ql(c,w,M,3*N,2*N),o.setRenderTarget(c),o.render(d,Gc),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=R-n,ql(e,w,M,3*N,2*N),o.setRenderTarget(e),o.render(d,Gc)}_blur(e,t,n,o){const c=this._pingPongRenderTarget,u=Math.min(o,Math.PI)/Math.SQRT2;this._blurPass(e,c,t,n,u),this._blurPass(c,e,n,n,u)}_blurPass(e,t,n,o,c){const u=this._renderer,d=this._blurMaterial,p=this._lodMeshes[o];p.material=d;const g=d.uniforms;g.envMap.value=e.texture,g.sigma.value=c,g.mipInt.value=this._lodMax-n;const S=this._sizeLods[o],E=3*S*(o>this._lodMax-ec?o-this._lodMax+ec:0),_=4*(this._cubeSize-S);ql(t,E,_,3*S,2*S),u.setRenderTarget(t),u.render(p,Gc)}}function Jx(i){const e=[],t=[];let n=i;const o=i-ec+1+Wx;for(let c=0;c<o;c++){const u=Math.pow(2,n);e.push(u);const d=1/(u-2),p=-d,g=1+d,S=[p,p,g,p,g,g,p,p,g,g,p,g],E=6,_=6,x=3,R=new Float32Array(x*_*E),N=new Float32Array(x*_*E);for(let M=0;M<E;M++){const O=M%3*2/3-1,k=M>2?0:-1,C=[O,k,0,O+2/3,k,0,O+2/3,k+1,0,O,k,0,O+2/3,k+1,0,O,k+1,0];R.set(C,x*_*M);for(let F=0;F<_;F++){const D=S[F*2]*2-1,H=S[F*2+1]*2-1;M===0?Bo.set(1,H,D):M===1?Bo.set(-D,1,-H):M===2?Bo.set(-D,H,1):M===3?Bo.set(-1,H,-D):M===4?Bo.set(-D,-1,H):Bo.set(D,H,-1),Bo.toArray(N,(M*_+F)*x)}}const w=new rr;w.setAttribute("position",new _s(R,x)),w.setAttribute("outputDirection",new _s(N,x)),t.push(new Di(w,null)),n>ec&&n--}return{lodMeshes:t,sizeLods:e}}function Bp(i,e,t){const n=new aa(i,e,t);return n.texture.mapping=Af,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ql(i,e,t,n,o){i.viewport.set(e,t,n,o),i.scissor.set(e,t,n,o)}function Kx(i,e,t){return new Fa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Yx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ms,depthTest:!1,depthWrite:!1})}function Qx(i,e,t){return new Fa({name:"SphericalGaussianBlur",defines:{SAMPLES:Xx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Pf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ms,depthTest:!1,depthWrite:!1})}function zp(){return new Fa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ms,depthTest:!1,depthWrite:!1})}function kp(){return new Fa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ms,depthTest:!1,depthWrite:!1})}function Pf(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Wg extends aa{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},o=[n,n,n,n,n,n];this.texture=new Dg(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Zs(5,5,5),c=new Fa({name:"CubemapFromEquirect",uniforms:ac(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ir,blending:ms});c.uniforms.tEquirect.value=t;const u=new Di(o,c),d=t.minFilter;return t.minFilter===Go&&(t.minFilter=Li),new $0(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,n=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,n,o);e.setRenderTarget(c)}}function qx(i){let e=new WeakMap,t=new WeakMap,n=null;function o(_,x=!1){return _==null?null:x?u(_):c(_)}function c(_){if(_&&_.isTexture){const x=_.mapping;if(x===$f||x===eh)if(e.has(_)){const R=e.get(_).texture;return d(R,_.mapping)}else{const R=_.image;if(R&&R.height>0){const N=new Wg(R.height);return N.fromEquirectangularTexture(i,_),e.set(_,N),_.addEventListener("dispose",g),d(N.texture,_.mapping)}else return null}}return _}function u(_){if(_&&_.isTexture){const x=_.mapping,R=x===$f||x===eh,N=x===Yo||x===ic;if(R||N){let w=t.get(_);const M=w!==void 0?w.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==M)return n===null&&(n=new Op(i)),w=R?n.fromEquirectangular(_,w):n.fromCubemap(_,w),w.texture.pmremVersion=_.pmremVersion,t.set(_,w),w.texture;if(w!==void 0)return w.texture;{const O=_.image;return R&&O&&O.height>0||N&&O&&p(O)?(n===null&&(n=new Op(i)),w=R?n.fromEquirectangular(_):n.fromCubemap(_),w.texture.pmremVersion=_.pmremVersion,t.set(_,w),_.addEventListener("dispose",S),w.texture):null}}}return _}function d(_,x){return x===$f?_.mapping=Yo:x===eh&&(_.mapping=ic),_}function p(_){let x=0;const R=6;for(let N=0;N<R;N++)_[N]!==void 0&&x++;return x===R}function g(_){const x=_.target;x.removeEventListener("dispose",g);const R=e.get(x);R!==void 0&&(e.delete(x),R.dispose())}function S(_){const x=_.target;x.removeEventListener("dispose",S);const R=t.get(x);R!==void 0&&(t.delete(x),R.dispose())}function E(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:o,dispose:E}}function jx(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const o=i.getExtension(n);return e[n]=o,o}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const o=t(n);return o===null&&tc("WebGLRenderer: "+n+" extension not supported."),o}}}function $x(i,e,t,n){const o={},c=new WeakMap;function u(E){const _=E.target;_.index!==null&&e.remove(_.index);for(const R in _.attributes)e.remove(_.attributes[R]);_.removeEventListener("dispose",u),delete o[_.id];const x=c.get(_);x&&(e.remove(x),c.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function d(E,_){return o[_.id]===!0||(_.addEventListener("dispose",u),o[_.id]=!0,t.memory.geometries++),_}function p(E){const _=E.attributes;for(const x in _)e.update(_[x],i.ARRAY_BUFFER)}function g(E){const _=[],x=E.index,R=E.attributes.position;let N=0;if(R===void 0)return;if(x!==null){const O=x.array;N=x.version;for(let k=0,C=O.length;k<C;k+=3){const F=O[k+0],D=O[k+1],H=O[k+2];_.push(F,D,D,H,H,F)}}else{const O=R.array;N=R.version;for(let k=0,C=O.length/3-1;k<C;k+=3){const F=k+0,D=k+1,H=k+2;_.push(F,D,D,H,H,F)}}const w=new(R.count>=65535?Lg:Pg)(_,1);w.version=N;const M=c.get(E);M&&e.remove(M),c.set(E,w)}function S(E){const _=c.get(E);if(_){const x=E.index;x!==null&&_.version<x.version&&g(E)}else g(E);return c.get(E)}return{get:d,update:p,getWireframeAttribute:S}}function eM(i,e,t){let n;function o(E){n=E}let c,u;function d(E){c=E.type,u=E.bytesPerElement}function p(E,_){i.drawElements(n,_,c,E*u),t.update(_,n,1)}function g(E,_,x){x!==0&&(i.drawElementsInstanced(n,_,c,E*u,x),t.update(_,n,x))}function S(E,_,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,_,0,c,E,0,x);let N=0;for(let w=0;w<x;w++)N+=_[w];t.update(N,n,1)}this.setMode=o,this.setIndex=d,this.render=p,this.renderInstances=g,this.renderMultiDraw=S}function tM(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(c,u,d){switch(t.calls++,u){case i.TRIANGLES:t.triangles+=d*(c/3);break;case i.LINES:t.lines+=d*(c/2);break;case i.LINE_STRIP:t.lines+=d*(c-1);break;case i.LINE_LOOP:t.lines+=d*c;break;case i.POINTS:t.points+=d*c;break;default:an("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:n}}function nM(i,e,t){const n=new WeakMap,o=new Hn;function c(u,d,p){const g=u.morphTargetInfluences,S=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,E=S!==void 0?S.length:0;let _=n.get(d);if(_===void 0||_.count!==E){let P=function(){H.dispose(),n.delete(d),d.removeEventListener("dispose",P)};_!==void 0&&_.texture.dispose();const x=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,N=d.morphAttributes.color!==void 0,w=d.morphAttributes.position||[],M=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let k=0;x===!0&&(k=1),R===!0&&(k=2),N===!0&&(k=3);let C=d.attributes.position.count*k,F=1;C>e.maxTextureSize&&(F=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const D=new Float32Array(C*F*4*E),H=new Rg(D,C,F,E);H.type=La,H.needsUpdate=!0;const y=k*4;for(let z=0;z<E;z++){const G=w[z],q=M[z],ae=O[z],W=C*F*4*z;for(let ue=0;ue<G.count;ue++){const Me=ue*y;x===!0&&(o.fromBufferAttribute(G,ue),D[W+Me+0]=o.x,D[W+Me+1]=o.y,D[W+Me+2]=o.z,D[W+Me+3]=0),R===!0&&(o.fromBufferAttribute(q,ue),D[W+Me+4]=o.x,D[W+Me+5]=o.y,D[W+Me+6]=o.z,D[W+Me+7]=0),N===!0&&(o.fromBufferAttribute(ae,ue),D[W+Me+8]=o.x,D[W+Me+9]=o.y,D[W+Me+10]=o.z,D[W+Me+11]=ae.itemSize===4?o.w:1)}}_={count:E,texture:H,size:new ut(C,F)},n.set(d,_),d.addEventListener("dispose",P)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(i,"morphTexture",u.morphTexture,t);else{let x=0;for(let N=0;N<g.length;N++)x+=g[N];const R=d.morphTargetsRelative?1:1-x;p.getUniforms().setValue(i,"morphTargetBaseInfluence",R),p.getUniforms().setValue(i,"morphTargetInfluences",g)}p.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),p.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}return{update:c}}function iM(i,e,t,n,o){let c=new WeakMap;function u(g){const S=o.render.frame,E=g.geometry,_=e.get(g,E);if(c.get(_)!==S&&(e.update(_),c.set(_,S)),g.isInstancedMesh&&(g.hasEventListener("dispose",p)===!1&&g.addEventListener("dispose",p),c.get(g)!==S&&(t.update(g.instanceMatrix,i.ARRAY_BUFFER),g.instanceColor!==null&&t.update(g.instanceColor,i.ARRAY_BUFFER),c.set(g,S))),g.isSkinnedMesh){const x=g.skeleton;c.get(x)!==S&&(x.update(),c.set(x,S))}return _}function d(){c=new WeakMap}function p(g){const S=g.target;S.removeEventListener("dispose",p),n.releaseStatesOfObject(S),t.remove(S.instanceMatrix),S.instanceColor!==null&&t.remove(S.instanceColor)}return{update:u,dispose:d}}const rM={[hg]:"LINEAR_TONE_MAPPING",[dg]:"REINHARD_TONE_MAPPING",[pg]:"CINEON_TONE_MAPPING",[gg]:"ACES_FILMIC_TONE_MAPPING",[vg]:"AGX_TONE_MAPPING",[_g]:"NEUTRAL_TONE_MAPPING",[mg]:"CUSTOM_TONE_MAPPING"};function aM(i,e,t,n,o,c){const u=new aa(e,t,{type:i,depthBuffer:o,stencilBuffer:c,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let d=null,p=null;const g=new rr;g.setAttribute("position",new On([-1,3,0,-1,-1,0,3,-1,0],3)),g.setAttribute("uv",new On([0,2,0,0,2,0],2));const S=new W0({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),E=new Di(g,S),_=new Hd(-1,1,1,-1,0,1);let x=null,R=null,N=!1,w,M=null,O=[],k=!1;this.setSize=function(C,F){u.setSize(C,F),d!==null&&d.setSize(C,F),p!==null&&p.setSize(C,F);for(let D=0;D<O.length;D++){const H=O[D];H.setSize&&H.setSize(C,F)}},this.setEffects=function(C){O=C,k=O.length>0&&O[0].isRenderPass===!0;const F=u.width,D=u.height;O.length>0&&d===null&&(d=new aa(F,D,{type:Ua,depthBuffer:!1,stencilBuffer:!1}),p=new aa(F,D,{type:Ua,depthBuffer:!1,stencilBuffer:!1}));for(let H=0;H<O.length;H++){const y=O[H];y.setSize&&y.setSize(F,D)}},this.begin=function(C,F){if(N||C.toneMapping===Da&&O.length===0)return!1;if(M=F,F!==null){const D=F.width,H=F.height;(u.width!==D||u.height!==H)&&this.setSize(D,H)}return k===!1&&C.setRenderTarget(u),w=C.toneMapping,C.toneMapping=Da,!0},this.hasRenderPass=function(){return k},this.end=function(C,F){C.toneMapping=w,N=!0;let D=u,H=d;for(let y=0;y<O.length;y++){const P=O[y];P.enabled!==!1&&(P.render(C,H,D,F),P.needsSwap!==!1&&(D=H,H=H===d?p:d))}if(x!==C.outputColorSpace||R!==C.toneMapping){x=C.outputColorSpace,R=C.toneMapping,S.defines={},jt.getTransfer(x)===xn&&(S.defines.SRGB_TRANSFER="");const y=rM[R];y&&(S.defines[y]=""),S.needsUpdate=!0}S.uniforms.tDiffuse.value=D.texture,C.setRenderTarget(M),C.render(E,_),M=null,N=!1},this.isCompositing=function(){return N},this.dispose=function(){u.dispose(),d!==null&&d.dispose(),p!==null&&p.dispose(),g.dispose(),S.dispose()}}const Xg=new Ii,Md=new iu(1,1),Yg=new Rg,Zg=new s0,Jg=new Dg,Hp=[],Gp=[],Vp=new Float32Array(16),Wp=new Float32Array(9),Xp=new Float32Array(4);function cc(i,e,t){const n=i[0];if(n<=0||n>0)return i;const o=e*t;let c=Hp[o];if(c===void 0&&(c=new Float32Array(o),Hp[o]=c),e!==0){n.toArray(c,0);for(let u=1,d=0;u!==e;++u)d+=t,i[u].toArray(c,d)}return c}function oi(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function li(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Lf(i,e){let t=Gp[e];t===void 0&&(t=new Int32Array(e),Gp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function sM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function oM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(oi(t,e))return;i.uniform2fv(this.addr,e),li(t,e)}}function lM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(oi(t,e))return;i.uniform3fv(this.addr,e),li(t,e)}}function cM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(oi(t,e))return;i.uniform4fv(this.addr,e),li(t,e)}}function uM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(oi(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),li(t,e)}else{if(oi(t,n))return;Xp.set(n),i.uniformMatrix2fv(this.addr,!1,Xp),li(t,n)}}function fM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(oi(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),li(t,e)}else{if(oi(t,n))return;Wp.set(n),i.uniformMatrix3fv(this.addr,!1,Wp),li(t,n)}}function hM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(oi(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),li(t,e)}else{if(oi(t,n))return;Vp.set(n),i.uniformMatrix4fv(this.addr,!1,Vp),li(t,n)}}function dM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function pM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(oi(t,e))return;i.uniform2iv(this.addr,e),li(t,e)}}function gM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(oi(t,e))return;i.uniform3iv(this.addr,e),li(t,e)}}function mM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(oi(t,e))return;i.uniform4iv(this.addr,e),li(t,e)}}function vM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function _M(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(oi(t,e))return;i.uniform2uiv(this.addr,e),li(t,e)}}function xM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(oi(t,e))return;i.uniform3uiv(this.addr,e),li(t,e)}}function MM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(oi(t,e))return;i.uniform4uiv(this.addr,e),li(t,e)}}function yM(i,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o);let c;this.type===i.SAMPLER_2D_SHADOW?(Md.compareFunction=t.isReversedDepthBuffer()?Ld:Pd,c=Md):c=Xg,t.setTexture2D(e||c,o)}function SM(i,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),t.setTexture3D(e||Zg,o)}function bM(i,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),t.setTextureCube(e||Jg,o)}function EM(i,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),t.setTexture2DArray(e||Yg,o)}function TM(i){switch(i){case 5126:return sM;case 35664:return oM;case 35665:return lM;case 35666:return cM;case 35674:return uM;case 35675:return fM;case 35676:return hM;case 5124:case 35670:return dM;case 35667:case 35671:return pM;case 35668:case 35672:return gM;case 35669:case 35673:return mM;case 5125:return vM;case 36294:return _M;case 36295:return xM;case 36296:return MM;case 35678:case 36198:case 36298:case 36306:case 35682:return yM;case 35679:case 36299:case 36307:return SM;case 35680:case 36300:case 36308:case 36293:return bM;case 36289:case 36303:case 36311:case 36292:return EM}}function wM(i,e){i.uniform1fv(this.addr,e)}function AM(i,e){const t=cc(e,this.size,2);i.uniform2fv(this.addr,t)}function RM(i,e){const t=cc(e,this.size,3);i.uniform3fv(this.addr,t)}function CM(i,e){const t=cc(e,this.size,4);i.uniform4fv(this.addr,t)}function PM(i,e){const t=cc(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function LM(i,e){const t=cc(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function IM(i,e){const t=cc(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function DM(i,e){i.uniform1iv(this.addr,e)}function NM(i,e){i.uniform2iv(this.addr,e)}function UM(i,e){i.uniform3iv(this.addr,e)}function FM(i,e){i.uniform4iv(this.addr,e)}function OM(i,e){i.uniform1uiv(this.addr,e)}function BM(i,e){i.uniform2uiv(this.addr,e)}function zM(i,e){i.uniform3uiv(this.addr,e)}function kM(i,e){i.uniform4uiv(this.addr,e)}function HM(i,e,t){const n=this.cache,o=e.length,c=Lf(t,o);oi(n,c)||(i.uniform1iv(this.addr,c),li(n,c));let u;this.type===i.SAMPLER_2D_SHADOW?u=Md:u=Xg;for(let d=0;d!==o;++d)t.setTexture2D(e[d]||u,c[d])}function GM(i,e,t){const n=this.cache,o=e.length,c=Lf(t,o);oi(n,c)||(i.uniform1iv(this.addr,c),li(n,c));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||Zg,c[u])}function VM(i,e,t){const n=this.cache,o=e.length,c=Lf(t,o);oi(n,c)||(i.uniform1iv(this.addr,c),li(n,c));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||Jg,c[u])}function WM(i,e,t){const n=this.cache,o=e.length,c=Lf(t,o);oi(n,c)||(i.uniform1iv(this.addr,c),li(n,c));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||Yg,c[u])}function XM(i){switch(i){case 5126:return wM;case 35664:return AM;case 35665:return RM;case 35666:return CM;case 35674:return PM;case 35675:return LM;case 35676:return IM;case 5124:case 35670:return DM;case 35667:case 35671:return NM;case 35668:case 35672:return UM;case 35669:case 35673:return FM;case 5125:return OM;case 36294:return BM;case 36295:return zM;case 36296:return kM;case 35678:case 36198:case 36298:case 36306:case 35682:return HM;case 35679:case 36299:case 36307:return GM;case 35680:case 36300:case 36308:case 36293:return VM;case 36289:case 36303:case 36311:case 36292:return WM}}class YM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=TM(t.type)}}class ZM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=XM(t.type)}}class JM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const d=o[c];d.setValue(e,t[d.id],n)}}}const Lh=/(\w+)(\])?(\[|\.)?/g;function Yp(i,e){i.seq.push(e),i.map[e.id]=e}function KM(i,e,t){const n=i.name,o=n.length;for(Lh.lastIndex=0;;){const c=Lh.exec(n),u=Lh.lastIndex;let d=c[1];const p=c[2]==="]",g=c[3];if(p&&(d=d|0),g===void 0||g==="["&&u+2===o){Yp(t,g===void 0?new YM(d,i,e):new ZM(d,i,e));break}else{let E=t.map[d];E===void 0&&(E=new JM(d),Yp(t,E)),t=E}}}class vf{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<n;++u){const d=e.getActiveUniform(t,u),p=e.getUniformLocation(t,d.name);KM(d,p,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,t,n,o){const c=this.map[t];c!==void 0&&c.setValue(e,n,o)}setOptional(e,t,n){const o=t[n];o!==void 0&&this.setValue(e,n,o)}static upload(e,t,n,o){for(let c=0,u=t.length;c!==u;++c){const d=t[c],p=n[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,o)}}static seqWithValue(e,t){const n=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in t&&n.push(u)}return n}}function Zp(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const QM=37297;let qM=0;function jM(i,e){const t=i.split(`
`),n=[],o=Math.max(e-6,0),c=Math.min(e+6,t.length);for(let u=o;u<c;u++){const d=u+1;n.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return n.join(`
`)}const Jp=new Ct;function $M(i){jt._getMatrix(Jp,jt.workingColorSpace,i);const e=`mat3( ${Jp.elements.map(t=>t.toFixed(4))} )`;switch(jt.getTransfer(i)){case Sf:return[e,"LinearTransferOETF"];case xn:return[e,"sRGBTransferOETF"];default:return Mt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Kp(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),c=(i.getShaderInfoLog(e)||"").trim();if(n&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const d=parseInt(u[1]);return t.toUpperCase()+`

`+c+`

`+jM(i.getShaderSource(e),d)}else return c}function ey(i,e){const t=$M(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const ty={[hg]:"Linear",[dg]:"Reinhard",[pg]:"Cineon",[gg]:"ACESFilmic",[vg]:"AgX",[_g]:"Neutral",[mg]:"Custom"};function ny(i,e){const t=ty[e];return t===void 0?(Mt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ff=new K;function iy(){jt.getLuminanceCoefficients(ff);const i=ff.x.toFixed(4),e=ff.y.toFixed(4),t=ff.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ry(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yc).join(`
`)}function ay(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function sy(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let o=0;o<n;o++){const c=i.getActiveAttrib(e,o),u=c.name;let d=1;c.type===i.FLOAT_MAT2&&(d=2),c.type===i.FLOAT_MAT3&&(d=3),c.type===i.FLOAT_MAT4&&(d=4),t[u]={type:c.type,location:i.getAttribLocation(e,u),locationSize:d}}return t}function Yc(i){return i!==""}function Qp(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const oy=/^[ \t]*#include +<([\w\d./]+)>/gm;function yd(i){return i.replace(oy,cy)}const ly=new Map;function cy(i,e){let t=kt[e];if(t===void 0){const n=ly.get(e);if(n!==void 0)t=kt[n],Mt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return yd(t)}const uy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jp(i){return i.replace(uy,fy)}function fy(i,e,t,n){let o="";for(let c=parseInt(e);c<parseInt(t);c++)o+=n.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function $p(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const hy={[hf]:"SHADOWMAP_TYPE_PCF",[Xc]:"SHADOWMAP_TYPE_VSM"};function dy(i){return hy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const py={[Yo]:"ENVMAP_TYPE_CUBE",[ic]:"ENVMAP_TYPE_CUBE",[Af]:"ENVMAP_TYPE_CUBE_UV"};function gy(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":py[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const my={[ic]:"ENVMAP_MODE_REFRACTION"};function vy(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":my[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const _y={[bd]:"ENVMAP_BLENDING_MULTIPLY",[Sm]:"ENVMAP_BLENDING_MIX",[bm]:"ENVMAP_BLENDING_ADD"};function xy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":_y[i.combine]||"ENVMAP_BLENDING_NONE"}function My(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function yy(i,e,t,n){const o=i.getContext(),c=t.defines;let u=t.vertexShader,d=t.fragmentShader;const p=dy(t),g=gy(t),S=vy(t),E=xy(t),_=My(t),x=ry(t),R=ay(c),N=o.createProgram();let w,M,O=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(w=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,R].filter(Yc).join(`
`),w.length>0&&(w+=`
`),M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,R].filter(Yc).join(`
`),M.length>0&&(M+=`
`)):(w=[$p(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,R,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+S:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yc).join(`
`),M=[$p(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,R,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.envMap?"#define "+S:"",t.envMap?"#define "+E:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Da?"#define TONE_MAPPING":"",t.toneMapping!==Da?kt.tonemapping_pars_fragment:"",t.toneMapping!==Da?ny("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,ey("linearToOutputTexel",t.outputColorSpace),iy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yc).join(`
`)),u=yd(u),u=Qp(u,t),u=qp(u,t),d=yd(d),d=Qp(d,t),d=qp(d,t),u=jp(u),d=jp(d),t.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,w=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+w,M=["#define varying in",t.glslVersion===ap?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ap?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const k=O+w+u,C=O+M+d,F=Zp(o,o.VERTEX_SHADER,k),D=Zp(o,o.FRAGMENT_SHADER,C);o.attachShader(N,F),o.attachShader(N,D),t.index0AttributeName!==void 0?o.bindAttribLocation(N,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(N,0,"position"),o.linkProgram(N);function H(G){if(i.debug.checkShaderErrors){const q=o.getProgramInfoLog(N)||"",ae=o.getShaderInfoLog(F)||"",W=o.getShaderInfoLog(D)||"",ue=q.trim(),Me=ae.trim(),_e=W.trim();let Te=!0,ie=!0;if(o.getProgramParameter(N,o.LINK_STATUS)===!1)if(Te=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,N,F,D);else{const V=Kp(o,F,"vertex"),xe=Kp(o,D,"fragment");an("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(N,o.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ue+`
`+V+`
`+xe)}else ue!==""?Mt("WebGLProgram: Program Info Log:",ue):(Me===""||_e==="")&&(ie=!1);ie&&(G.diagnostics={runnable:Te,programLog:ue,vertexShader:{log:Me,prefix:w},fragmentShader:{log:_e,prefix:M}})}o.deleteShader(F),o.deleteShader(D),y=new vf(o,N),P=sy(o,N)}let y;this.getUniforms=function(){return y===void 0&&H(this),y};let P;this.getAttributes=function(){return P===void 0&&H(this),P};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=o.getProgramParameter(N,QM)),z},this.destroy=function(){n.releaseStatesOfProgram(this),o.deleteProgram(N),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qM++,this.cacheKey=e,this.usedTimes=1,this.program=N,this.vertexShader=F,this.fragmentShader=D,this}let Sy=0;class by{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(n)===!1&&(o.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ey(e),t.set(e,n)),n}}class Ey{constructor(e){this.id=Sy++,this.code=e,this.usedTimes=0}}function Ty(i){return i===Zo||i===_f||i===xf}function wy(i,e,t,n,o,c){const u=new Nd,d=new by,p=new Set,g=[],S=new Map,E=n.logarithmicDepthBuffer;let _=n.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(y){return p.add(y),y===0?"uv":`uv${y}`}function N(y,P,z,G,q,ae){const W=G.fog,ue=q.geometry,Me=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?G.environment:null,_e=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,Te=e.get(y.envMap||Me,_e),ie=Te&&Te.mapping===Af?Te.image.height:null,V=x[y.type];y.precision!==null&&(_=n.getMaxPrecision(y.precision),_!==y.precision&&Mt("WebGLProgram.getParameters:",y.precision,"not supported, using",_,"instead."));const xe=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,at=xe!==void 0?xe.length:0;let tt=0;ue.morphAttributes.position!==void 0&&(tt=1),ue.morphAttributes.normal!==void 0&&(tt=2),ue.morphAttributes.color!==void 0&&(tt=3);let we,oe,Qt,ve;if(V){const Lt=Pa[V];we=Lt.vertexShader,oe=Lt.fragmentShader}else{we=y.vertexShader,oe=y.fragmentShader;const Lt=d.getVertexShaderStage(y),Xt=d.getFragmentShaderStage(y);d.update(y,Lt,Xt),Qt=Lt.id,ve=Xt.id}const me=i.getRenderTarget(),ke=i.state.buffers.depth.getReversed(),ft=q.isInstancedMesh===!0,Xe=q.isBatchedMesh===!0,St=!!y.map,Nt=!!y.matcap,wt=!!Te,Ut=!!y.aoMap,Ye=!!y.lightMap,bt=!!y.bumpMap&&y.wireframe===!1,Jt=!!y.normalMap,Vt=!!y.displacementMap,Sn=!!y.emissiveMap,Wt=!!y.metalnessMap,fn=!!y.roughnessMap,Y=y.anisotropy>0,en=y.clearcoat>0,dt=y.dispersion>0,B=y.retroreflectivity>0,A=y.iridescence>0,te=y.sheen>0,ne=y.transmission>0,de=Y&&!!y.anisotropyMap,De=en&&!!y.clearcoatMap,Ue=en&&!!y.clearcoatNormalMap,pe=en&&!!y.clearcoatRoughnessMap,be=A&&!!y.iridescenceMap,Be=A&&!!y.iridescenceThicknessMap,nt=te&&!!y.sheenColorMap,ze=te&&!!y.sheenRoughnessMap,Ne=!!y.specularMap,lt=!!y.specularColorMap,st=!!y.specularIntensityMap,vt=ne&&!!y.transmissionMap,J=ne&&!!y.thicknessMap,Ee=!!y.gradientMap,ye=!!y.alphaMap,Fe=y.alphaTest>0,Oe=!!y.alphaHash,Ae=!!y.extensions;let rt=Da;y.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(rt=i.toneMapping);const it={shaderID:V,shaderType:y.type,shaderName:y.name,vertexShader:we,fragmentShader:oe,defines:y.defines,customVertexShaderID:Qt,customFragmentShaderID:ve,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:_,batching:Xe,batchingColor:Xe&&q._colorsTexture!==null,instancing:ft,instancingColor:ft&&q.instanceColor!==null,instancingMorph:ft&&q.morphTexture!==null,outputColorSpace:me===null?i.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:jt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:St,matcap:Nt,envMap:wt,envMapMode:wt&&Te.mapping,envMapCubeUVHeight:ie,aoMap:Ut,lightMap:Ye,bumpMap:bt,normalMap:Jt,displacementMap:Vt,emissiveMap:Sn,normalMapObjectSpace:Jt&&y.normalMapType===wm,normalMapTangentSpace:Jt&&y.normalMapType===Mf,packedNormalMap:Jt&&y.normalMapType===Mf&&Ty(y.normalMap.format),metalnessMap:Wt,roughnessMap:fn,anisotropy:Y,anisotropyMap:de,clearcoat:en,clearcoatMap:De,clearcoatNormalMap:Ue,clearcoatRoughnessMap:pe,dispersion:dt,retroreflection:B,iridescence:A,iridescenceMap:be,iridescenceThicknessMap:Be,sheen:te,sheenColorMap:nt,sheenRoughnessMap:ze,specularMap:Ne,specularColorMap:lt,specularIntensityMap:st,transmission:ne,transmissionMap:vt,thicknessMap:J,gradientMap:Ee,opaque:y.transparent===!1&&y.blending===Zc&&y.alphaToCoverage===!1,alphaMap:ye,alphaTest:Fe,alphaHash:Oe,combine:y.combine,mapUv:St&&R(y.map.channel),aoMapUv:Ut&&R(y.aoMap.channel),lightMapUv:Ye&&R(y.lightMap.channel),bumpMapUv:bt&&R(y.bumpMap.channel),normalMapUv:Jt&&R(y.normalMap.channel),displacementMapUv:Vt&&R(y.displacementMap.channel),emissiveMapUv:Sn&&R(y.emissiveMap.channel),metalnessMapUv:Wt&&R(y.metalnessMap.channel),roughnessMapUv:fn&&R(y.roughnessMap.channel),anisotropyMapUv:de&&R(y.anisotropyMap.channel),clearcoatMapUv:De&&R(y.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&R(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&R(y.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&R(y.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&R(y.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&R(y.sheenColorMap.channel),sheenRoughnessMapUv:ze&&R(y.sheenRoughnessMap.channel),specularMapUv:Ne&&R(y.specularMap.channel),specularColorMapUv:lt&&R(y.specularColorMap.channel),specularIntensityMapUv:st&&R(y.specularIntensityMap.channel),transmissionMapUv:vt&&R(y.transmissionMap.channel),thicknessMapUv:J&&R(y.thicknessMap.channel),alphaMapUv:ye&&R(y.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(Jt||Y),vertexNormals:!!ue.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!ue.attributes.uv&&(St||ye),fog:!!W,useFog:y.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||ue.attributes.normal===void 0&&Jt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:E,reversedDepthBuffer:ke,skinning:q.isSkinnedMesh===!0,hasPositionAttribute:ue.attributes.position!==void 0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:tt,numSunLights:P.sun.length,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numSunLightShadows:P.sunShadowMap.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:ae.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:rt,decodeVideoTexture:St&&y.map.isVideoTexture===!0&&jt.getTransfer(y.map.colorSpace)===xn,decodeVideoTextureEmissive:Sn&&y.emissiveMap.isVideoTexture===!0&&jt.getTransfer(y.emissiveMap.colorSpace)===xn,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ur,flipSided:y.side===ir,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ae&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&y.extensions.multiDraw===!0||Xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return it.vertexUv1s=p.has(1),it.vertexUv2s=p.has(2),it.vertexUv3s=p.has(3),p.clear(),it}function w(y){const P=[];if(y.shaderID?P.push(y.shaderID):(P.push(y.customVertexShaderID),P.push(y.customFragmentShaderID)),y.defines!==void 0)for(const z in y.defines)P.push(z),P.push(y.defines[z]);return y.isRawShaderMaterial===!1&&(M(P,y),O(P,y),P.push(i.outputColorSpace)),P.push(y.customProgramCacheKey),P.join()}function M(y,P){y.push(P.precision),y.push(P.outputColorSpace),y.push(P.envMapMode),y.push(P.envMapCubeUVHeight),y.push(P.mapUv),y.push(P.alphaMapUv),y.push(P.lightMapUv),y.push(P.aoMapUv),y.push(P.bumpMapUv),y.push(P.normalMapUv),y.push(P.displacementMapUv),y.push(P.emissiveMapUv),y.push(P.metalnessMapUv),y.push(P.roughnessMapUv),y.push(P.anisotropyMapUv),y.push(P.clearcoatMapUv),y.push(P.clearcoatNormalMapUv),y.push(P.clearcoatRoughnessMapUv),y.push(P.iridescenceMapUv),y.push(P.iridescenceThicknessMapUv),y.push(P.sheenColorMapUv),y.push(P.sheenRoughnessMapUv),y.push(P.specularMapUv),y.push(P.specularColorMapUv),y.push(P.specularIntensityMapUv),y.push(P.transmissionMapUv),y.push(P.thicknessMapUv),y.push(P.combine),y.push(P.fogExp2),y.push(P.sizeAttenuation),y.push(P.morphTargetsCount),y.push(P.morphAttributeCount),y.push(P.numSunLights),y.push(P.numDirLights),y.push(P.numPointLights),y.push(P.numSpotLights),y.push(P.numSpotLightMaps),y.push(P.numHemiLights),y.push(P.numRectAreaLights),y.push(P.numSunLightShadows),y.push(P.numDirLightShadows),y.push(P.numPointLightShadows),y.push(P.numSpotLightShadows),y.push(P.numSpotLightShadowsWithMaps),y.push(P.numLightProbes),y.push(P.shadowMapType),y.push(P.toneMapping),y.push(P.numClippingPlanes),y.push(P.numClipIntersection),y.push(P.depthPacking)}function O(y,P){u.disableAll(),P.instancing&&u.enable(0),P.instancingColor&&u.enable(1),P.instancingMorph&&u.enable(2),P.matcap&&u.enable(3),P.envMap&&u.enable(4),P.normalMapObjectSpace&&u.enable(5),P.normalMapTangentSpace&&u.enable(6),P.clearcoat&&u.enable(7),P.iridescence&&u.enable(8),P.alphaTest&&u.enable(9),P.vertexColors&&u.enable(10),P.vertexAlphas&&u.enable(11),P.vertexUv1s&&u.enable(12),P.vertexUv2s&&u.enable(13),P.vertexUv3s&&u.enable(14),P.vertexTangents&&u.enable(15),P.anisotropy&&u.enable(16),P.alphaHash&&u.enable(17),P.batching&&u.enable(18),P.dispersion&&u.enable(19),P.retroreflection&&u.enable(24),P.batchingColor&&u.enable(20),P.gradientMap&&u.enable(21),P.packedNormalMap&&u.enable(22),P.vertexNormals&&u.enable(23),y.push(u.mask),u.disableAll(),P.fog&&u.enable(0),P.useFog&&u.enable(1),P.flatShading&&u.enable(2),P.logarithmicDepthBuffer&&u.enable(3),P.reversedDepthBuffer&&u.enable(4),P.skinning&&u.enable(5),P.morphTargets&&u.enable(6),P.morphNormals&&u.enable(7),P.morphColors&&u.enable(8),P.premultipliedAlpha&&u.enable(9),P.shadowMapEnabled&&u.enable(10),P.doubleSided&&u.enable(11),P.flipSided&&u.enable(12),P.useDepthPacking&&u.enable(13),P.dithering&&u.enable(14),P.transmission&&u.enable(15),P.sheen&&u.enable(16),P.opaque&&u.enable(17),P.pointsUvs&&u.enable(18),P.decodeVideoTexture&&u.enable(19),P.decodeVideoTextureEmissive&&u.enable(20),P.alphaToCoverage&&u.enable(21),P.numLightProbeGrids>0&&u.enable(22),P.hasPositionAttribute&&u.enable(23),y.push(u.mask)}function k(y){const P=x[y.type];let z;if(P){const G=Pa[P];z=H0.clone(G.uniforms)}else z=y.uniforms;return z}function C(y,P){let z=S.get(P);return z!==void 0?++z.usedTimes:(z=new yy(i,P,y,o),g.push(z),S.set(P,z)),z}function F(y){if(--y.usedTimes===0){const P=g.indexOf(y);g[P]=g[g.length-1],g.pop(),S.delete(y.cacheKey),y.destroy()}}function D(y){d.remove(y)}function H(){d.dispose()}return{getParameters:N,getProgramCacheKey:w,getUniforms:k,acquireProgram:C,releaseProgram:F,releaseShaderCache:D,programs:g,dispose:H}}function Ay(){let i=new WeakMap;function e(u){return i.has(u)}function t(u){let d=i.get(u);return d===void 0&&(d={},i.set(u,d)),d}function n(u){i.delete(u)}function o(u,d,p){i.get(u)[d]=p}function c(){i=new WeakMap}return{has:e,get:t,remove:n,update:o,dispose:c}}function Ry(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function eg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function tg(){const i=[];let e=0;const t=[],n=[],o=[];function c(){e=0,t.length=0,n.length=0,o.length=0}function u(_){let x=0;return _.isInstancedMesh&&(x+=2),_.isSkinnedMesh&&(x+=1),x}function d(_,x,R,N,w,M){let O=i[e];return O===void 0?(O={id:_.id,object:_,geometry:x,material:R,materialVariant:u(_),groupOrder:N,renderOrder:_.renderOrder,z:w,group:M},i[e]=O):(O.id=_.id,O.object=_,O.geometry=x,O.material=R,O.materialVariant=u(_),O.groupOrder=N,O.renderOrder=_.renderOrder,O.z=w,O.group=M),e++,O}function p(_,x,R,N,w,M,O){O.reversedDepth===!0&&(w=-w);const k=d(_,x,R,N,w,M);R.transmission>0?n.push(k):R.transparent===!0?o.push(k):t.push(k)}function g(_,x,R,N,w,M){const O=d(_,x,R,N,w,M);R.transmission>0?n.unshift(O):R.transparent===!0?o.unshift(O):t.unshift(O)}function S(_,x){t.length>1&&t.sort(_||Ry),n.length>1&&n.sort(x||eg),o.length>1&&o.sort(x||eg)}function E(){for(let _=e,x=i.length;_<x;_++){const R=i[_];if(R.id===null)break;R.id=null,R.object=null,R.geometry=null,R.material=null,R.group=null}}return{opaque:t,transmissive:n,transparent:o,init:c,push:p,unshift:g,finish:E,sort:S}}function Cy(){let i=new WeakMap;function e(n,o){const c=i.get(n);let u;return c===void 0?(u=new tg,i.set(n,[u])):o>=c.length?(u=new tg,c.push(u)):u=c[o],u}function t(){i=new WeakMap}return{get:e,dispose:t}}function Py(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new K,color:new Pt};break;case"SpotLight":t={position:new K,direction:new K,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":t={color:new Pt,position:new K,halfWidth:new K,halfHeight:new K};break}return i[e.id]=t,t}}}function Ly(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Iy=0;function Dy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ny(i){const e=new Py,t=Ly(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)n.probe.push(new K);const o=new K,c=new Fn,u=new Fn;function d(g){let S=0,E=0,_=0;for(let q=0;q<9;q++)n.probe[q].set(0,0,0);let x=0,R=0,N=0,w=0,M=0,O=0,k=0,C=0,F=0,D=0,H=0,y=0,P=0,z=0;g.sort(Dy);for(let q=0,ae=g.length;q<ae;q++){const W=g[q],ue=W.color,Me=W.intensity,_e=W.distance;let Te=null;if(W.shadow&&W.shadow.map&&(W.shadow.map.texture.format===Zo?Te=W.shadow.map.texture:Te=W.shadow.map.depthTexture||W.shadow.map.texture),W.isAmbientLight)S+=ue.r*Me,E+=ue.g*Me,_+=ue.b*Me;else if(W.isLightProbe){for(let ie=0;ie<9;ie++)n.probe[ie].addScaledVector(W.sh.coefficients[ie],Me);z++}else if(W.isSunLight){const ie=e.get(W);if(ie.color.copy(W.color).multiplyScalar(W.intensity),W.castShadow){const V=W.shadow,xe=t.get(W);xe.shadowIntensity=V.intensity,xe.shadowBias=V.bias,xe.shadowNormalBias=V.normalBias,xe.shadowRadius=V.radius,xe.shadowMapSize.copy(V.mapSize).multiply(V.getFrameExtents()),n.sunShadow[R]=xe,n.sunShadowMap[R]=Te;const at=V.getViewportCount();for(let tt=0;tt<at;tt++)n.sunShadowMatrix[N+tt]=V.getMatrix(tt),n.sunShadowCascade[N+tt]=V._cascadeData[tt];N+=at,R++}n.sun[x]=ie,x++}else if(W.isDirectionalLight){const ie=e.get(W);if(ie.color.copy(W.color).multiplyScalar(W.intensity),W.castShadow){const V=W.shadow,xe=t.get(W);xe.shadowIntensity=V.intensity,xe.shadowBias=V.bias,xe.shadowNormalBias=V.normalBias,xe.shadowRadius=V.radius,xe.shadowMapSize=V.mapSize,n.directionalShadow[w]=xe,n.directionalShadowMap[w]=Te,n.directionalShadowMatrix[w]=W.shadow.matrix,F++}n.directional[w]=ie,w++}else if(W.isSpotLight){const ie=e.get(W);ie.position.setFromMatrixPosition(W.matrixWorld),ie.color.copy(ue).multiplyScalar(Me),ie.distance=_e,ie.coneCos=Math.cos(W.angle),ie.penumbraCos=Math.cos(W.angle*(1-W.penumbra)),ie.decay=W.decay,n.spot[O]=ie;const V=W.shadow;if(W.map&&(n.spotLightMap[y]=W.map,y++,V.updateMatrices(W),W.castShadow&&P++),n.spotLightMatrix[O]=V.matrix,W.castShadow){const xe=t.get(W);xe.shadowIntensity=V.intensity,xe.shadowBias=V.bias,xe.shadowNormalBias=V.normalBias,xe.shadowRadius=V.radius,xe.shadowMapSize=V.mapSize,n.spotShadow[O]=xe,n.spotShadowMap[O]=Te,H++}O++}else if(W.isRectAreaLight){const ie=e.get(W);ie.color.copy(ue).multiplyScalar(Me),ie.halfWidth.set(W.width*.5,0,0),ie.halfHeight.set(0,W.height*.5,0),n.rectArea[k]=ie,k++}else if(W.isPointLight){const ie=e.get(W);if(ie.color.copy(W.color).multiplyScalar(W.intensity),ie.distance=W.distance,ie.decay=W.decay,W.castShadow){const V=W.shadow,xe=t.get(W);xe.shadowIntensity=V.intensity,xe.shadowBias=V.bias,xe.shadowNormalBias=V.normalBias,xe.shadowRadius=V.radius,xe.shadowMapSize=V.mapSize,xe.shadowCameraNear=V.camera.near,xe.shadowCameraFar=V.camera.far,n.pointShadow[M]=xe,n.pointShadowMap[M]=Te,n.pointShadowMatrix[M]=W.shadow.matrix,D++}n.point[M]=ie,M++}else if(W.isHemisphereLight){const ie=e.get(W);ie.skyColor.copy(W.color).multiplyScalar(Me),ie.groundColor.copy(W.groundColor).multiplyScalar(Me),n.hemi[C]=ie,C++}}k>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ke.LTC_FLOAT_1,n.rectAreaLTC2=Ke.LTC_FLOAT_2):(n.rectAreaLTC1=Ke.LTC_HALF_1,n.rectAreaLTC2=Ke.LTC_HALF_2)),n.ambient[0]=S,n.ambient[1]=E,n.ambient[2]=_;const G=n.hash;(G.sunLength!==x||G.directionalLength!==w||G.pointLength!==M||G.spotLength!==O||G.rectAreaLength!==k||G.hemiLength!==C||G.numSunShadows!==R||G.numDirectionalShadows!==F||G.numPointShadows!==D||G.numSpotShadows!==H||G.numSpotMaps!==y||G.numLightProbes!==z)&&(n.sun.length=x,n.directional.length=w,n.spot.length=O,n.rectArea.length=k,n.point.length=M,n.hemi.length=C,n.sunShadow.length=R,n.sunShadowMap.length=R,n.sunShadowMatrix.length=N,n.sunShadowCascade.length=N,n.directionalShadow.length=F,n.directionalShadowMap.length=F,n.directionalShadowMatrix.length=F,n.pointShadow.length=D,n.pointShadowMap.length=D,n.pointShadowMatrix.length=D,n.spotShadow.length=H,n.spotShadowMap.length=H,n.spotLightMatrix.length=H+y-P,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=z,G.sunLength=x,G.directionalLength=w,G.pointLength=M,G.spotLength=O,G.rectAreaLength=k,G.hemiLength=C,G.numSunShadows=R,G.numDirectionalShadows=F,G.numPointShadows=D,G.numSpotShadows=H,G.numSpotMaps=y,G.numLightProbes=z,n.version=Iy++)}function p(g,S){let E=0,_=0,x=0,R=0,N=0,w=0;const M=S.matrixWorldInverse;for(let O=0,k=g.length;O<k;O++){const C=g[O];if(C.isSunLight){const F=n.sun[E];F.direction.setFromMatrixPosition(C.matrixWorld),F.direction.transformDirection(M),E++}else if(C.isDirectionalLight){const F=n.directional[_];F.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),F.direction.sub(o),F.direction.transformDirection(M),_++}else if(C.isSpotLight){const F=n.spot[R];F.position.setFromMatrixPosition(C.matrixWorld),F.position.applyMatrix4(M),F.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),F.direction.sub(o),F.direction.transformDirection(M),R++}else if(C.isRectAreaLight){const F=n.rectArea[N];F.position.setFromMatrixPosition(C.matrixWorld),F.position.applyMatrix4(M),u.identity(),c.copy(C.matrixWorld),c.premultiply(M),u.extractRotation(c),F.halfWidth.set(C.width*.5,0,0),F.halfHeight.set(0,C.height*.5,0),F.halfWidth.applyMatrix4(u),F.halfHeight.applyMatrix4(u),N++}else if(C.isPointLight){const F=n.point[x];F.position.setFromMatrixPosition(C.matrixWorld),F.position.applyMatrix4(M),x++}else if(C.isHemisphereLight){const F=n.hemi[w];F.direction.setFromMatrixPosition(C.matrixWorld),F.direction.transformDirection(M),w++}}}return{setup:d,setupView:p,state:n}}function ng(i){const e=new Ny(i),t=[],n=[],o=[];function c(_){E.camera=_,t.length=0,n.length=0,o.length=0}function u(_){t.push(_)}function d(_){n.push(_)}function p(_){o.push(_)}function g(){e.setup(t)}function S(_){e.setupView(t,_)}const E={lightsArray:t,shadowsArray:n,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:E,setupLights:g,setupLightsView:S,pushLight:u,pushShadow:d,pushLightProbeGrid:p}}function Uy(i){let e=new WeakMap;function t(o,c=0){const u=e.get(o);let d;return u===void 0?(d=new ng(i),e.set(o,[d])):c>=u.length?(d=new ng(i),u.push(d)):d=u[c],d}function n(){e=new WeakMap}return{get:t,dispose:n}}const Fy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Oy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,By=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],zy=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],ig=new Fn,Vc=new K,Ih=new K;function ky(i,e,t){let n=new Fd;const o=new ut,c=new ut,u=new Hn,d=new Y0,p=new Z0,g={},S=t.maxTextureSize,E={[Xo]:ir,[ir]:Xo,[Ur]:Ur},_=new Fa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:Fy,fragmentShader:Oy}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const R=new rr;R.setAttribute("position",new _s(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const N=new Di(R,_),w=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hf;let M=this.type;this.render=function(D,H,y){if(w.enabled===!1||w.autoUpdate===!1&&w.needsUpdate===!1||D.length===0)return;this.type===im&&(Mt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=hf);const P=i.getRenderTarget(),z=i.getActiveCubeFace(),G=i.getActiveMipmapLevel(),q=i.state;q.setBlending(ms),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const ae=M!==this.type;ae&&H.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(ue=>ue.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,ue=D.length;W<ue;W++){const Me=D[W],_e=Me.shadow;if(_e===void 0){Mt("WebGLShadowMap:",Me,"has no shadow.");continue}if(_e.autoUpdate===!1&&_e.needsUpdate===!1)continue;o.copy(_e.mapSize);const Te=_e.getFrameExtents();o.multiply(Te),c.copy(_e.mapSize),(o.x>S||o.y>S)&&(o.x>S&&(c.x=Math.floor(S/Te.x),o.x=c.x*Te.x,_e.mapSize.x=c.x),o.y>S&&(c.y=Math.floor(S/Te.y),o.y=c.y*Te.y,_e.mapSize.y=c.y));const ie=i.state.buffers.depth.getReversed();if(_e.camera._reversedDepth=ie,_e.map===null||ae===!0){if(_e.map!==null&&(_e.map.depthTexture!==null&&(_e.map.depthTexture.dispose(),_e.map.depthTexture=null),_e.map.dispose()),this.type===Xc){if(Me.isPointLight){Mt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}_e.map=new aa(o.x,o.y,{format:Zo,type:Ua,minFilter:Li,magFilter:Li,generateMipmaps:!1}),_e.map.texture.name=Me.name+".shadowMap",_e.map.depthTexture=new iu(o.x,o.y,La),_e.map.depthTexture.name=Me.name+".shadowMapDepth",_e.map.depthTexture.format=xs,_e.map.depthTexture.compareFunction=null,_e.map.depthTexture.minFilter=_i,_e.map.depthTexture.magFilter=_i}else Me.isPointLight?(_e.map=new Wg(o.x),_e.map.depthTexture=new E0(o.x,Na)):(_e.map=new aa(o.x,o.y),_e.map.depthTexture=new iu(o.x,o.y,Na)),_e.map.depthTexture.name=Me.name+".shadowMap",_e.map.depthTexture.format=xs,this.type===hf?(_e.map.depthTexture.compareFunction=ie?Ld:Pd,_e.map.depthTexture.minFilter=Li,_e.map.depthTexture.magFilter=Li):(_e.map.depthTexture.compareFunction=null,_e.map.depthTexture.minFilter=_i,_e.map.depthTexture.magFilter=_i);_e.camera.updateProjectionMatrix()}_e.map.isWebGLCubeRenderTarget!==!0&&(_e.map.width!==o.x||_e.map.height!==o.y)&&_e.map.setSize(o.x,o.y);const V=_e.map.isWebGLCubeRenderTarget?6:_e.getViewportCount();Me.isPointLight!==!0&&_e.updateMatrices(Me,y);for(let xe=0;xe<V;xe++){const at=_e.getCamera(xe);if(Me.isPointLight){const tt=_e.camera,we=_e.matrix,oe=Me.distance||tt.far;oe!==tt.far&&(tt.far=oe,tt.updateProjectionMatrix()),Vc.setFromMatrixPosition(Me.matrixWorld),tt.position.copy(Vc),Ih.copy(tt.position),Ih.add(By[xe]),tt.up.copy(zy[xe]),tt.lookAt(Ih),tt.updateMatrixWorld(),we.makeTranslation(-Vc.x,-Vc.y,-Vc.z),ig.multiplyMatrices(tt.projectionMatrix,tt.matrixWorldInverse),_e._frustum.setFromProjectionMatrix(ig,tt.coordinateSystem,tt.reversedDepth)}if(_e.map.isWebGLCubeRenderTarget)i.setRenderTarget(_e.map,xe),i.clear();else{xe===0&&(i.setRenderTarget(_e.map),i.clear());const tt=_e.getViewport(xe);u.set(c.x*tt.x,c.y*tt.y,c.x*tt.z,c.y*tt.w),q.viewport(u)}n=_e.getFrustum(xe),C(H,y,at,Me,this.type)}_e.isPointLightShadow!==!0&&this.type===Xc&&O(_e,y),_e.needsUpdate=!1}M=this.type,w.needsUpdate=!1,i.setRenderTarget(P,z,G)};function O(D,H){const y=e.update(N);_.defines.VSM_SAMPLES!==D.blurSamples&&(_.defines.VSM_SAMPLES=D.blurSamples,x.defines.VSM_SAMPLES=D.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),D.mapPass===null?D.mapPass=new aa(o.x,o.y,{format:Zo,type:Ua}):(D.mapPass.width!==D.map.width||D.mapPass.height!==D.map.height)&&D.mapPass.setSize(D.map.width,D.map.height),_.uniforms.shadow_pass.value=D.map.depthTexture,_.uniforms.resolution.value.set(D.map.width,D.map.height),_.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(H,null,y,_,N,null),x.uniforms.shadow_pass.value=D.mapPass.texture,x.uniforms.resolution.value.set(D.map.width,D.map.height),x.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(H,null,y,x,N,null)}function k(D,H,y,P){let z=null;const G=y.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(G!==void 0)z=G;else if(z=y.isPointLight===!0?p:d,i.localClippingEnabled&&H.clipShadows===!0&&Array.isArray(H.clippingPlanes)&&H.clippingPlanes.length!==0||H.displacementMap&&H.displacementScale!==0||H.alphaMap&&H.alphaTest>0||H.map&&H.alphaTest>0||H.alphaToCoverage===!0){const q=z.uuid,ae=H.uuid;let W=g[q];W===void 0&&(W={},g[q]=W);let ue=W[ae];ue===void 0&&(ue=z.clone(),W[ae]=ue,H.addEventListener("dispose",F)),z=ue}if(z.visible=H.visible,z.wireframe=H.wireframe,P===Xc?z.side=H.shadowSide!==null?H.shadowSide:H.side:z.side=H.shadowSide!==null?H.shadowSide:E[H.side],z.alphaMap=H.alphaMap,z.alphaTest=H.alphaToCoverage===!0?.5:H.alphaTest,z.map=H.map,z.clipShadows=H.clipShadows,z.clippingPlanes=H.clippingPlanes,z.clipIntersection=H.clipIntersection,z.displacementMap=H.displacementMap,z.displacementScale=H.displacementScale,z.displacementBias=H.displacementBias,z.wireframeLinewidth=H.wireframeLinewidth,z.linewidth=H.linewidth,y.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const q=i.properties.get(z);q.light=y}return z}function C(D,H,y,P,z){if(D.visible===!1)return;if(D.layers.test(H.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&z===Xc)&&(!D.frustumCulled||D.intersectsFrustum(n))){D.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,D.matrixWorld);const ae=e.update(D),W=D.material;if(Array.isArray(W)){const ue=ae.groups;for(let Me=0,_e=ue.length;Me<_e;Me++){const Te=ue[Me],ie=W[Te.materialIndex];if(ie&&ie.visible){const V=k(D,ie,P,z);D.onBeforeShadow(i,D,H,y,ae,V,Te),i.renderBufferDirect(y,null,ae,V,D,Te),D.onAfterShadow(i,D,H,y,ae,V,Te)}}}else if(W.visible){const ue=k(D,W,P,z);D.onBeforeShadow(i,D,H,y,ae,ue,null),i.renderBufferDirect(y,null,ae,ue,D,null),D.onAfterShadow(i,D,H,y,ae,ue,null)}}const q=D.children;for(let ae=0,W=q.length;ae<W;ae++)C(q[ae],H,y,P,z)}function F(D){D.target.removeEventListener("dispose",F);for(const y in g){const P=g[y],z=D.target.uuid;z in P&&(P[z].dispose(),delete P[z])}}}function Hy(i,e){function t(){let J=!1;const Ee=new Hn;let ye=null;const Fe=new Hn(0,0,0,0);return{setMask:function(Oe){ye!==Oe&&!J&&(i.colorMask(Oe,Oe,Oe,Oe),ye=Oe)},setLocked:function(Oe){J=Oe},setClear:function(Oe,Ae,rt,it,Lt){Lt===!0&&(Oe*=it,Ae*=it,rt*=it),Ee.set(Oe,Ae,rt,it),Fe.equals(Ee)===!1&&(i.clearColor(Oe,Ae,rt,it),Fe.copy(Ee))},reset:function(){J=!1,ye=null,Fe.set(-1,0,0,0)}}}function n(){let J=!1,Ee=!1,ye=null,Fe=null,Oe=null;return{setReversed:function(Ae){if(Ee!==Ae){const rt=e.get("EXT_clip_control");Ae?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT),Ee=Ae;const it=Oe;Oe=null,this.setClear(it)}},getReversed:function(){return Ee},setTest:function(Ae){Ae?me(i.DEPTH_TEST):ke(i.DEPTH_TEST)},setMask:function(Ae){ye!==Ae&&!J&&(i.depthMask(Ae),ye=Ae)},setFunc:function(Ae){if(Ee&&(Ae=Bm[Ae]),Fe!==Ae){switch(Ae){case Nh:i.depthFunc(i.NEVER);break;case Uh:i.depthFunc(i.ALWAYS);break;case Fh:i.depthFunc(i.LESS);break;case jc:i.depthFunc(i.LEQUAL);break;case Oh:i.depthFunc(i.EQUAL);break;case Bh:i.depthFunc(i.GEQUAL);break;case zh:i.depthFunc(i.GREATER);break;case kh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Fe=Ae}},setLocked:function(Ae){J=Ae},setClear:function(Ae){Oe!==Ae&&(Oe=Ae,Ee&&(Ae=1-Ae),i.clearDepth(Ae))},reset:function(){J=!1,ye=null,Fe=null,Oe=null,Ee=!1}}}function o(){let J=!1,Ee=null,ye=null,Fe=null,Oe=null,Ae=null,rt=null,it=null,Lt=null;return{setTest:function(Xt){J||(Xt?me(i.STENCIL_TEST):ke(i.STENCIL_TEST))},setMask:function(Xt){Ee!==Xt&&!J&&(i.stencilMask(Xt),Ee=Xt)},setFunc:function(Xt,hn,ci){(ye!==Xt||Fe!==hn||Oe!==ci)&&(i.stencilFunc(Xt,hn,ci),ye=Xt,Fe=hn,Oe=ci)},setOp:function(Xt,hn,ci){(Ae!==Xt||rt!==hn||it!==ci)&&(i.stencilOp(Xt,hn,ci),Ae=Xt,rt=hn,it=ci)},setLocked:function(Xt){J=Xt},setClear:function(Xt){Lt!==Xt&&(i.clearStencil(Xt),Lt=Xt)},reset:function(){J=!1,Ee=null,ye=null,Fe=null,Oe=null,Ae=null,rt=null,it=null,Lt=null}}}const c=new t,u=new n,d=new o,p=new WeakMap,g=new WeakMap;let S={},E={},_={},x=new WeakMap,R=[],N=null,w=!1,M=null,O=null,k=null,C=null,F=null,D=null,H=null,y=new Pt(0,0,0),P=0,z=!1,G=null,q=null,ae=null,W=null,ue=null;const Me=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let _e=!1,Te=0;const ie=i.getParameter(i.VERSION);ie.indexOf("WebGL")!==-1?(Te=parseFloat(/^WebGL (\d)/.exec(ie)[1]),_e=Te>=1):ie.indexOf("OpenGL ES")!==-1&&(Te=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),_e=Te>=2);let V=null,xe={};const at=i.getParameter(i.SCISSOR_BOX),tt=i.getParameter(i.VIEWPORT),we=new Hn().fromArray(at),oe=new Hn().fromArray(tt);function Qt(J,Ee,ye,Fe){const Oe=new Uint8Array(4),Ae=i.createTexture();i.bindTexture(J,Ae),i.texParameteri(J,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(J,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let rt=0;rt<ye;rt++)J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?i.texImage3D(Ee,0,i.RGBA,1,1,Fe,0,i.RGBA,i.UNSIGNED_BYTE,Oe):i.texImage2D(Ee+rt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Oe);return Ae}const ve={};ve[i.TEXTURE_2D]=Qt(i.TEXTURE_2D,i.TEXTURE_2D,1),ve[i.TEXTURE_CUBE_MAP]=Qt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[i.TEXTURE_2D_ARRAY]=Qt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ve[i.TEXTURE_3D]=Qt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),d.setClear(0),me(i.DEPTH_TEST),u.setFunc(jc),bt(!1),Jt(tp),me(i.CULL_FACE),Ut(ms);function me(J){S[J]!==!0&&(i.enable(J),S[J]=!0)}function ke(J){S[J]!==!1&&(i.disable(J),S[J]=!1)}function ft(J,Ee){return _[J]!==Ee?(i.bindFramebuffer(J,Ee),_[J]=Ee,J===i.DRAW_FRAMEBUFFER&&(_[i.FRAMEBUFFER]=Ee),J===i.FRAMEBUFFER&&(_[i.DRAW_FRAMEBUFFER]=Ee),!0):!1}function Xe(J,Ee){let ye=R,Fe=!1;if(J){ye=x.get(Ee),ye===void 0&&(ye=[],x.set(Ee,ye));const Oe=J.textures;if(ye.length!==Oe.length||ye[0]!==i.COLOR_ATTACHMENT0){for(let Ae=0,rt=Oe.length;Ae<rt;Ae++)ye[Ae]=i.COLOR_ATTACHMENT0+Ae;ye.length=Oe.length,Fe=!0}}else ye[0]!==i.BACK&&(ye[0]=i.BACK,Fe=!0);Fe&&i.drawBuffers(ye)}function St(J){return N!==J?(i.useProgram(J),N=J,!0):!1}const Nt={[jl]:i.FUNC_ADD,[am]:i.FUNC_SUBTRACT,[sm]:i.FUNC_REVERSE_SUBTRACT};Nt[om]=i.MIN,Nt[lm]=i.MAX;const wt={[cm]:i.ZERO,[um]:i.ONE,[fm]:i.SRC_COLOR,[ug]:i.SRC_ALPHA,[vm]:i.SRC_ALPHA_SATURATE,[gm]:i.DST_COLOR,[dm]:i.DST_ALPHA,[hm]:i.ONE_MINUS_SRC_COLOR,[fg]:i.ONE_MINUS_SRC_ALPHA,[mm]:i.ONE_MINUS_DST_COLOR,[pm]:i.ONE_MINUS_DST_ALPHA,[_m]:i.CONSTANT_COLOR,[xm]:i.ONE_MINUS_CONSTANT_COLOR,[Mm]:i.CONSTANT_ALPHA,[ym]:i.ONE_MINUS_CONSTANT_ALPHA};function Ut(J,Ee,ye,Fe,Oe,Ae,rt,it,Lt,Xt){if(J===ms){w===!0&&(ke(i.BLEND),w=!1);return}if(w===!1&&(me(i.BLEND),w=!0),J!==rm){if(J!==M||Xt!==z){if((O!==jl||F!==jl)&&(i.blendEquation(i.FUNC_ADD),O=jl,F=jl),Xt)switch(J){case Zc:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case np:i.blendFunc(i.ONE,i.ONE);break;case ip:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rp:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:an("WebGLState: Invalid blending: ",J);break}else switch(J){case Zc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case np:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ip:an("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rp:an("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:an("WebGLState: Invalid blending: ",J);break}k=null,C=null,D=null,H=null,y.set(0,0,0),P=0,M=J,z=Xt}return}Oe=Oe||Ee,Ae=Ae||ye,rt=rt||Fe,(Ee!==O||Oe!==F)&&(i.blendEquationSeparate(Nt[Ee],Nt[Oe]),O=Ee,F=Oe),(ye!==k||Fe!==C||Ae!==D||rt!==H)&&(i.blendFuncSeparate(wt[ye],wt[Fe],wt[Ae],wt[rt]),k=ye,C=Fe,D=Ae,H=rt),(it.equals(y)===!1||Lt!==P)&&(i.blendColor(it.r,it.g,it.b,Lt),y.copy(it),P=Lt),M=J,z=!1}function Ye(J,Ee){J.side===Ur?ke(i.CULL_FACE):me(i.CULL_FACE);let ye=J.side===ir;Ee&&(ye=!ye),bt(ye),J.blending===Zc&&J.transparent===!1?Ut(ms):Ut(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),u.setFunc(J.depthFunc),u.setTest(J.depthTest),u.setMask(J.depthWrite),c.setMask(J.colorWrite);const Fe=J.stencilWrite;d.setTest(Fe),Fe&&(d.setMask(J.stencilWriteMask),d.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),d.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),Sn(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?me(i.SAMPLE_ALPHA_TO_COVERAGE):ke(i.SAMPLE_ALPHA_TO_COVERAGE)}function bt(J){G!==J&&(J?i.frontFace(i.CW):i.frontFace(i.CCW),G=J)}function Jt(J){J!==tm?(me(i.CULL_FACE),J!==q&&(J===tp?i.cullFace(i.BACK):J===nm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ke(i.CULL_FACE),q=J}function Vt(J){J!==ae&&(_e&&i.lineWidth(J),ae=J)}function Sn(J,Ee,ye){J?(me(i.POLYGON_OFFSET_FILL),(W!==Ee||ue!==ye)&&(W=Ee,ue=ye,u.getReversed()&&(Ee=-Ee),i.polygonOffset(Ee,ye))):ke(i.POLYGON_OFFSET_FILL)}function Wt(J){J?me(i.SCISSOR_TEST):ke(i.SCISSOR_TEST)}function fn(J){J===void 0&&(J=i.TEXTURE0+Me-1),V!==J&&(i.activeTexture(J),V=J)}function Y(J,Ee,ye){ye===void 0&&(V===null?ye=i.TEXTURE0+Me-1:ye=V);let Fe=xe[ye];Fe===void 0&&(Fe={type:void 0,texture:void 0},xe[ye]=Fe),(Fe.type!==J||Fe.texture!==Ee)&&(V!==ye&&(i.activeTexture(ye),V=ye),i.bindTexture(J,Ee||ve[J]),Fe.type=J,Fe.texture=Ee)}function en(){const J=xe[V];J!==void 0&&J.type!==void 0&&(i.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function dt(){try{i.compressedTexImage2D(...arguments)}catch(J){an("WebGLState:",J)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(J){an("WebGLState:",J)}}function A(){try{i.texSubImage2D(...arguments)}catch(J){an("WebGLState:",J)}}function te(){try{i.texSubImage3D(...arguments)}catch(J){an("WebGLState:",J)}}function ne(){try{i.compressedTexSubImage2D(...arguments)}catch(J){an("WebGLState:",J)}}function de(){try{i.compressedTexSubImage3D(...arguments)}catch(J){an("WebGLState:",J)}}function De(){try{i.texStorage2D(...arguments)}catch(J){an("WebGLState:",J)}}function Ue(){try{i.texStorage3D(...arguments)}catch(J){an("WebGLState:",J)}}function pe(){try{i.texImage2D(...arguments)}catch(J){an("WebGLState:",J)}}function be(){try{i.texImage3D(...arguments)}catch(J){an("WebGLState:",J)}}function Be(J){return E[J]!==void 0?E[J]:i.getParameter(J)}function nt(J,Ee){E[J]!==Ee&&(i.pixelStorei(J,Ee),E[J]=Ee)}function ze(J){we.equals(J)===!1&&(i.scissor(J.x,J.y,J.z,J.w),we.copy(J))}function Ne(J){oe.equals(J)===!1&&(i.viewport(J.x,J.y,J.z,J.w),oe.copy(J))}function lt(J,Ee){let ye=g.get(Ee);ye===void 0&&(ye=new WeakMap,g.set(Ee,ye));let Fe=ye.get(J);Fe===void 0&&(Fe=i.getUniformBlockIndex(Ee,J.name),ye.set(J,Fe))}function st(J,Ee){const Fe=g.get(Ee).get(J);p.get(Ee)!==Fe&&(i.uniformBlockBinding(Ee,Fe,J.__bindingPointIndex),p.set(Ee,Fe))}function vt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),u.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),S={},E={},V=null,xe={},_={},x=new WeakMap,R=[],N=null,w=!1,M=null,O=null,k=null,C=null,F=null,D=null,H=null,y=new Pt(0,0,0),P=0,z=!1,G=null,q=null,ae=null,W=null,ue=null,we.set(0,0,i.canvas.width,i.canvas.height),oe.set(0,0,i.canvas.width,i.canvas.height),c.reset(),u.reset(),d.reset()}return{buffers:{color:c,depth:u,stencil:d},enable:me,disable:ke,bindFramebuffer:ft,drawBuffers:Xe,useProgram:St,setBlending:Ut,setMaterial:Ye,setFlipSided:bt,setCullFace:Jt,setLineWidth:Vt,setPolygonOffset:Sn,setScissorTest:Wt,activeTexture:fn,bindTexture:Y,unbindTexture:en,compressedTexImage2D:dt,compressedTexImage3D:B,texImage2D:pe,texImage3D:be,pixelStorei:nt,getParameter:Be,updateUBOMapping:lt,uniformBlockBinding:st,texStorage2D:De,texStorage3D:Ue,texSubImage2D:A,texSubImage3D:te,compressedTexSubImage2D:ne,compressedTexSubImage3D:de,scissor:ze,viewport:Ne,reset:vt}}function Gy(i,e,t,n,o,c,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new ut,S=new WeakMap,E=new Set;let _;const x=new WeakMap;let R=!1;try{R=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function N(B,A){return R?new OffscreenCanvas(B,A):bf("canvas")}function w(B,A,te){let ne=1;const de=dt(B);if((de.width>te||de.height>te)&&(ne=te/Math.max(de.width,de.height)),ne<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const De=Math.floor(ne*de.width),Ue=Math.floor(ne*de.height);_===void 0&&(_=N(De,Ue));const pe=A?N(De,Ue):_;return pe.width=De,pe.height=Ue,pe.getContext("2d").drawImage(B,0,0,De,Ue),Mt("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+De+"x"+Ue+")."),pe}else return"data"in B&&Mt("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),B;return B}function M(B){return B.generateMipmaps}function O(B){i.generateMipmap(B)}function k(B){return B.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?i.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function C(B,A,te,ne,de,De=!1){if(B!==null){if(i[B]!==void 0)return i[B];Mt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let Ue;ne&&(Ue=e.get("EXT_texture_norm16"),Ue||Mt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=A;if(A===i.RED&&(te===i.FLOAT&&(pe=i.R32F),te===i.HALF_FLOAT&&(pe=i.R16F),te===i.UNSIGNED_BYTE&&(pe=i.R8),te===i.UNSIGNED_SHORT&&Ue&&(pe=Ue.R16_EXT),te===i.SHORT&&Ue&&(pe=Ue.R16_SNORM_EXT)),A===i.RED_INTEGER&&(te===i.UNSIGNED_BYTE&&(pe=i.R8UI),te===i.UNSIGNED_SHORT&&(pe=i.R16UI),te===i.UNSIGNED_INT&&(pe=i.R32UI),te===i.BYTE&&(pe=i.R8I),te===i.SHORT&&(pe=i.R16I),te===i.INT&&(pe=i.R32I)),A===i.RG&&(te===i.FLOAT&&(pe=i.RG32F),te===i.HALF_FLOAT&&(pe=i.RG16F),te===i.UNSIGNED_BYTE&&(pe=i.RG8),te===i.UNSIGNED_SHORT&&Ue&&(pe=Ue.RG16_EXT),te===i.SHORT&&Ue&&(pe=Ue.RG16_SNORM_EXT)),A===i.RG_INTEGER&&(te===i.UNSIGNED_BYTE&&(pe=i.RG8UI),te===i.UNSIGNED_SHORT&&(pe=i.RG16UI),te===i.UNSIGNED_INT&&(pe=i.RG32UI),te===i.BYTE&&(pe=i.RG8I),te===i.SHORT&&(pe=i.RG16I),te===i.INT&&(pe=i.RG32I)),A===i.RGB_INTEGER&&(te===i.UNSIGNED_BYTE&&(pe=i.RGB8UI),te===i.UNSIGNED_SHORT&&(pe=i.RGB16UI),te===i.UNSIGNED_INT&&(pe=i.RGB32UI),te===i.BYTE&&(pe=i.RGB8I),te===i.SHORT&&(pe=i.RGB16I),te===i.INT&&(pe=i.RGB32I)),A===i.RGBA_INTEGER&&(te===i.UNSIGNED_BYTE&&(pe=i.RGBA8UI),te===i.UNSIGNED_SHORT&&(pe=i.RGBA16UI),te===i.UNSIGNED_INT&&(pe=i.RGBA32UI),te===i.BYTE&&(pe=i.RGBA8I),te===i.SHORT&&(pe=i.RGBA16I),te===i.INT&&(pe=i.RGBA32I)),A===i.RGB&&(te===i.UNSIGNED_SHORT&&Ue&&(pe=Ue.RGB16_EXT),te===i.SHORT&&Ue&&(pe=Ue.RGB16_SNORM_EXT),te===i.UNSIGNED_INT_5_9_9_9_REV&&(pe=i.RGB9_E5),te===i.UNSIGNED_INT_10F_11F_11F_REV&&(pe=i.R11F_G11F_B10F)),A===i.RGBA){const be=De?Sf:jt.getTransfer(de);te===i.FLOAT&&(pe=i.RGBA32F),te===i.HALF_FLOAT&&(pe=i.RGBA16F),te===i.UNSIGNED_BYTE&&(pe=be===xn?i.SRGB8_ALPHA8:i.RGBA8),te===i.UNSIGNED_SHORT&&Ue&&(pe=Ue.RGBA16_EXT),te===i.SHORT&&Ue&&(pe=Ue.RGBA16_SNORM_EXT),te===i.UNSIGNED_SHORT_4_4_4_4&&(pe=i.RGBA4),te===i.UNSIGNED_SHORT_5_5_5_1&&(pe=i.RGB5_A1)}return(pe===i.R16F||pe===i.R32F||pe===i.RG16F||pe===i.RG32F||pe===i.RGBA16F||pe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function F(B,A){let te;return B?A===null||A===Na||A===eu?te=i.DEPTH24_STENCIL8:A===La?te=i.DEPTH32F_STENCIL8:A===$c&&(te=i.DEPTH24_STENCIL8,Mt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Na||A===eu?te=i.DEPTH_COMPONENT24:A===La?te=i.DEPTH_COMPONENT32F:A===$c&&(te=i.DEPTH_COMPONENT16),te}function D(B,A){return M(B)===!0||B.isFramebufferTexture&&B.minFilter!==_i&&B.minFilter!==Li?Math.log2(Math.max(A.width,A.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?A.mipmaps.length:1}function H(B){const A=B.target;A.removeEventListener("dispose",H),P(A),A.isVideoTexture&&S.delete(A),A.isHTMLTexture&&E.delete(A)}function y(B){const A=B.target;A.removeEventListener("dispose",y),G(A)}function P(B){const A=n.get(B);if(A.__webglInit===void 0)return;const te=B.source,ne=x.get(te);if(ne){const de=ne[A.__cacheKey];de.usedTimes--,de.usedTimes===0&&z(B),Object.keys(ne).length===0&&x.delete(te)}n.remove(B)}function z(B){const A=n.get(B);i.deleteTexture(A.__webglTexture);const te=B.source,ne=x.get(te);delete ne[A.__cacheKey],u.memory.textures--}function G(B){const A=n.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),n.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(A.__webglFramebuffer[ne]))for(let de=0;de<A.__webglFramebuffer[ne].length;de++)i.deleteFramebuffer(A.__webglFramebuffer[ne][de]);else i.deleteFramebuffer(A.__webglFramebuffer[ne]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[ne])}else{if(Array.isArray(A.__webglFramebuffer))for(let ne=0;ne<A.__webglFramebuffer.length;ne++)i.deleteFramebuffer(A.__webglFramebuffer[ne]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ne=0;ne<A.__webglColorRenderbuffer.length;ne++)A.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[ne]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const te=B.textures;for(let ne=0,de=te.length;ne<de;ne++){const De=n.get(te[ne]);De.__webglTexture&&(i.deleteTexture(De.__webglTexture),u.memory.textures--),n.remove(te[ne])}n.remove(B)}let q=0;function ae(){q=0}function W(){return q}function ue(B){q=B}function Me(){const B=q;return B>=o.maxTextures&&Mt("WebGLTextures: Trying to use "+(B+1)+" texture units while this GPU supports only "+o.maxTextures),q+=1,B}function _e(B){const A=[];return A.push(B.wrapS),A.push(B.wrapT),A.push(B.wrapR||0),A.push(B.magFilter),A.push(B.minFilter),A.push(B.anisotropy),A.push(B.internalFormat),A.push(B.format),A.push(B.type),A.push(B.generateMipmaps),A.push(B.premultiplyAlpha),A.push(B.flipY),A.push(B.unpackAlignment),A.push(B.colorSpace),A.join()}function Te(B,A){const te=n.get(B);if(B.isVideoTexture&&Y(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&te.__version!==B.version){const ne=B.image;if(ne===null)Mt("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)Mt("WebGLRenderer: Texture marked for update but image is incomplete");else{ke(te,B,A);return}}else B.isExternalTexture&&(te.__webglTexture=B.sourceTexture?B.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,te.__webglTexture,i.TEXTURE0+A)}function ie(B,A){const te=n.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&te.__version!==B.version){ke(te,B,A);return}else B.isExternalTexture&&(te.__webglTexture=B.sourceTexture?B.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,te.__webglTexture,i.TEXTURE0+A)}function V(B,A){const te=n.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&te.__version!==B.version){ke(te,B,A);return}t.bindTexture(i.TEXTURE_3D,te.__webglTexture,i.TEXTURE0+A)}function xe(B,A){const te=n.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&te.__version!==B.version){ft(te,B,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture,i.TEXTURE0+A)}const at={[Hh]:i.REPEAT,[gs]:i.CLAMP_TO_EDGE,[Gh]:i.MIRRORED_REPEAT},tt={[_i]:i.NEAREST,[Em]:i.NEAREST_MIPMAP_NEAREST,[Vu]:i.NEAREST_MIPMAP_LINEAR,[Li]:i.LINEAR,[th]:i.LINEAR_MIPMAP_NEAREST,[Go]:i.LINEAR_MIPMAP_LINEAR},we={[Rm]:i.NEVER,[Dm]:i.ALWAYS,[Cm]:i.LESS,[Pd]:i.LEQUAL,[Pm]:i.EQUAL,[Ld]:i.GEQUAL,[Lm]:i.GREATER,[Im]:i.NOTEQUAL};function oe(B,A){if(A.type===La&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Li||A.magFilter===th||A.magFilter===Vu||A.magFilter===Go||A.minFilter===Li||A.minFilter===th||A.minFilter===Vu||A.minFilter===Go)&&Mt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(B,i.TEXTURE_WRAP_S,at[A.wrapS]),i.texParameteri(B,i.TEXTURE_WRAP_T,at[A.wrapT]),(B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY)&&i.texParameteri(B,i.TEXTURE_WRAP_R,at[A.wrapR]),i.texParameteri(B,i.TEXTURE_MAG_FILTER,tt[A.magFilter]),i.texParameteri(B,i.TEXTURE_MIN_FILTER,tt[A.minFilter]),A.compareFunction&&(i.texParameteri(B,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(B,i.TEXTURE_COMPARE_FUNC,we[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===_i||A.minFilter!==Vu&&A.minFilter!==Go||A.type===La&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");i.texParameterf(B,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,o.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Qt(B,A){let te=!1;B.__webglInit===void 0&&(B.__webglInit=!0,A.addEventListener("dispose",H));const ne=A.source;let de=x.get(ne);de===void 0&&(de={},x.set(ne,de));const De=_e(A);if(De!==B.__cacheKey){de[De]===void 0&&(de[De]={texture:i.createTexture(),usedTimes:0},u.memory.textures++,te=!0),de[De].usedTimes++;const Ue=de[B.__cacheKey];Ue!==void 0&&(de[B.__cacheKey].usedTimes--,Ue.usedTimes===0&&z(A)),B.__cacheKey=De,B.__webglTexture=de[De].texture}return te}function ve(B,A,te){return Math.floor(Math.floor(B/te)/A)}function me(B,A,te,ne){const De=B.updateRanges;if(De.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,te,ne,A.data);else{De.sort((nt,ze)=>nt.start-ze.start);let Ue=0;for(let nt=1;nt<De.length;nt++){const ze=De[Ue],Ne=De[nt],lt=ze.start+ze.count,st=ve(Ne.start,A.width,4),vt=ve(ze.start,A.width,4);Ne.start<=lt+1&&st===vt&&ve(Ne.start+Ne.count-1,A.width,4)===st?ze.count=Math.max(ze.count,Ne.start+Ne.count-ze.start):(++Ue,De[Ue]=Ne)}De.length=Ue+1;const pe=t.getParameter(i.UNPACK_ROW_LENGTH),be=t.getParameter(i.UNPACK_SKIP_PIXELS),Be=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,A.width);for(let nt=0,ze=De.length;nt<ze;nt++){const Ne=De[nt],lt=Math.floor(Ne.start/4),st=Math.ceil(Ne.count/4),vt=lt%A.width,J=Math.floor(lt/A.width),Ee=st,ye=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,vt),t.pixelStorei(i.UNPACK_SKIP_ROWS,J),t.texSubImage2D(i.TEXTURE_2D,0,vt,J,Ee,ye,te,ne,A.data)}B.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,pe),t.pixelStorei(i.UNPACK_SKIP_PIXELS,be),t.pixelStorei(i.UNPACK_SKIP_ROWS,Be)}}function ke(B,A,te){let ne=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ne=i.TEXTURE_3D);const de=Qt(B,A),De=A.source;t.bindTexture(ne,B.__webglTexture,i.TEXTURE0+te);const Ue=n.get(De);if(De.version!==Ue.__version||de===!0){if(t.activeTexture(i.TEXTURE0+te),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const ye=jt.getPrimaries(jt.workingColorSpace),Fe=A.colorSpace===Ys?null:jt.getPrimaries(A.colorSpace),Oe=A.colorSpace===Ys||ye===Fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe)}t.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment);let be=w(A.image,!1,o.maxTextureSize);be=en(A,be);const Be=c.convert(A.format,A.colorSpace),nt=c.convert(A.type);let ze=C(A.internalFormat,Be,nt,A.normalized,A.colorSpace,A.isVideoTexture);oe(ne,A);let Ne;const lt=A.mipmaps,st=A.isVideoTexture!==!0,vt=Ue.__version===void 0||de===!0,J=De.dataReady,Ee=D(A,be);if(A.isDepthTexture)ze=F(A.format===Vo,A.type),vt&&(st?t.texStorage2D(i.TEXTURE_2D,1,ze,be.width,be.height):t.texImage2D(i.TEXTURE_2D,0,ze,be.width,be.height,0,Be,nt,null));else if(A.isDataTexture)if(lt.length>0){st&&vt&&t.texStorage2D(i.TEXTURE_2D,Ee,ze,lt[0].width,lt[0].height);for(let ye=0,Fe=lt.length;ye<Fe;ye++)Ne=lt[ye],st?J&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,Ne.width,Ne.height,Be,nt,Ne.data):t.texImage2D(i.TEXTURE_2D,ye,ze,Ne.width,Ne.height,0,Be,nt,Ne.data);A.generateMipmaps=!1}else st?(vt&&t.texStorage2D(i.TEXTURE_2D,Ee,ze,be.width,be.height),J&&me(A,be,Be,nt)):t.texImage2D(i.TEXTURE_2D,0,ze,be.width,be.height,0,Be,nt,be.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){st&&vt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,ze,lt[0].width,lt[0].height,be.depth);for(let ye=0,Fe=lt.length;ye<Fe;ye++)if(Ne=lt[ye],A.format!==ra)if(Be!==null)if(st){if(J)if(A.layerUpdates.size>0){const Oe=Up(Ne.width,Ne.height,A.format,A.type);for(const Ae of A.layerUpdates){const rt=Ne.data.subarray(Ae*Oe/Ne.data.BYTES_PER_ELEMENT,(Ae+1)*Oe/Ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,Ae,Ne.width,Ne.height,1,Be,rt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,0,Ne.width,Ne.height,be.depth,Be,Ne.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ye,ze,Ne.width,Ne.height,be.depth,0,Ne.data,0,0);else Mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?J&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,0,Ne.width,Ne.height,be.depth,Be,nt,Ne.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ye,ze,Ne.width,Ne.height,be.depth,0,Be,nt,Ne.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{st&&vt&&t.texStorage2D(i.TEXTURE_2D,Ee,ze,lt[0].width,lt[0].height);for(let ye=0,Fe=lt.length;ye<Fe;ye++)Ne=lt[ye],A.format!==ra?Be!==null?st?J&&t.compressedTexSubImage2D(i.TEXTURE_2D,ye,0,0,Ne.width,Ne.height,Be,Ne.data):t.compressedTexImage2D(i.TEXTURE_2D,ye,ze,Ne.width,Ne.height,0,Ne.data):Mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?J&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,Ne.width,Ne.height,Be,nt,Ne.data):t.texImage2D(i.TEXTURE_2D,ye,ze,Ne.width,Ne.height,0,Be,nt,Ne.data)}else if(A.isDataArrayTexture)if(st){if(vt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,ze,be.width,be.height,be.depth),J)if(A.layerUpdates.size>0){const ye=Up(be.width,be.height,A.format,A.type);for(const Fe of A.layerUpdates){const Oe=be.data.subarray(Fe*ye/be.data.BYTES_PER_ELEMENT,(Fe+1)*ye/be.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Fe,be.width,be.height,1,Be,nt,Oe)}A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,Be,nt,be.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ze,be.width,be.height,be.depth,0,Be,nt,be.data);else if(A.isData3DTexture)st?(vt&&t.texStorage3D(i.TEXTURE_3D,Ee,ze,be.width,be.height,be.depth),J&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,Be,nt,be.data)):t.texImage3D(i.TEXTURE_3D,0,ze,be.width,be.height,be.depth,0,Be,nt,be.data);else if(A.isFramebufferTexture){if(vt)if(st)t.texStorage2D(i.TEXTURE_2D,Ee,ze,be.width,be.height);else{let ye=be.width,Fe=be.height;for(let Oe=0;Oe<Ee;Oe++)t.texImage2D(i.TEXTURE_2D,Oe,ze,ye,Fe,0,Be,nt,null),ye>>=1,Fe>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in i){const ye=i.canvas;if(ye.hasAttribute("layoutsubtree")||ye.setAttribute("layoutsubtree","true"),be.parentNode!==ye){ye.appendChild(be),E.add(A),ye.onpaint=Fe=>{const Oe=Fe.changedElements;for(const Ae of E)Oe.includes(Ae.image)&&(Ae.needsUpdate=!0)},ye.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,be);else{const Oe=i.RGBA,Ae=i.RGBA,rt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Oe,Ae,rt,be)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(lt.length>0){if(st&&vt){const ye=dt(lt[0]);t.texStorage2D(i.TEXTURE_2D,Ee,ze,ye.width,ye.height)}for(let ye=0,Fe=lt.length;ye<Fe;ye++)Ne=lt[ye],st?J&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,Be,nt,Ne):t.texImage2D(i.TEXTURE_2D,ye,ze,Be,nt,Ne);A.generateMipmaps=!1}else if(st){if(vt){const ye=dt(be);t.texStorage2D(i.TEXTURE_2D,Ee,ze,ye.width,ye.height)}J&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Be,nt,be)}else t.texImage2D(i.TEXTURE_2D,0,ze,Be,nt,be);M(A)&&O(ne),Ue.__version=De.version,A.onUpdate&&A.onUpdate(A)}B.__version=A.version}function ft(B,A,te){if(A.image.length!==6)return;const ne=Qt(B,A),de=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+te);const De=n.get(de);if(de.version!==De.__version||ne===!0){t.activeTexture(i.TEXTURE0+te);const Ue=jt.getPrimaries(jt.workingColorSpace),pe=A.colorSpace===Ys?null:jt.getPrimaries(A.colorSpace),be=A.colorSpace===Ys||Ue===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Be=A.isCompressedTexture||A.image[0].isCompressedTexture,nt=A.image[0]&&A.image[0].isDataTexture,ze=[];for(let Ae=0;Ae<6;Ae++)!Be&&!nt?ze[Ae]=w(A.image[Ae],!0,o.maxCubemapSize):ze[Ae]=nt?A.image[Ae].image:A.image[Ae],ze[Ae]=en(A,ze[Ae]);const Ne=ze[0],lt=c.convert(A.format,A.colorSpace),st=c.convert(A.type),vt=C(A.internalFormat,lt,st,A.normalized,A.colorSpace),J=A.isVideoTexture!==!0,Ee=De.__version===void 0||ne===!0,ye=de.dataReady;let Fe=D(A,Ne);oe(i.TEXTURE_CUBE_MAP,A);let Oe;if(Be){J&&Ee&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Fe,vt,Ne.width,Ne.height);for(let Ae=0;Ae<6;Ae++){Oe=ze[Ae].mipmaps;for(let rt=0;rt<Oe.length;rt++){const it=Oe[rt];A.format!==ra?lt!==null?J?ye&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,rt,0,0,it.width,it.height,lt,it.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,rt,vt,it.width,it.height,0,it.data):Mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,rt,0,0,it.width,it.height,lt,st,it.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,rt,vt,it.width,it.height,0,lt,st,it.data)}}}else{if(Oe=A.mipmaps,J&&Ee){Oe.length>0&&Fe++;const Ae=dt(ze[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Fe,vt,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(nt){J?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,ze[Ae].width,ze[Ae].height,lt,st,ze[Ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,vt,ze[Ae].width,ze[Ae].height,0,lt,st,ze[Ae].data);for(let rt=0;rt<Oe.length;rt++){const Lt=Oe[rt].image[Ae].image;J?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,rt+1,0,0,Lt.width,Lt.height,lt,st,Lt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,rt+1,vt,Lt.width,Lt.height,0,lt,st,Lt.data)}}else{J?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,lt,st,ze[Ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,vt,lt,st,ze[Ae]);for(let rt=0;rt<Oe.length;rt++){const it=Oe[rt];J?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,rt+1,0,0,lt,st,it.image[Ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,rt+1,vt,lt,st,it.image[Ae])}}}M(A)&&O(i.TEXTURE_CUBE_MAP),De.__version=de.version,A.onUpdate&&A.onUpdate(A)}B.__version=A.version}function Xe(B,A,te,ne,de,De){const Ue=c.convert(te.format,te.colorSpace),pe=c.convert(te.type),be=C(te.internalFormat,Ue,pe,te.normalized,te.colorSpace),Be=n.get(A),nt=n.get(te);if(nt.__renderTarget=A,!Be.__hasExternalTextures){const ze=Math.max(1,A.width>>De),Ne=Math.max(1,A.height>>De);de===i.TEXTURE_3D||de===i.TEXTURE_2D_ARRAY?t.texImage3D(de,De,be,ze,Ne,A.depth,0,Ue,pe,null):t.texImage2D(de,De,be,ze,Ne,0,Ue,pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,B),fn(A)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,de,nt.__webglTexture,0,Wt(A)):(de===i.TEXTURE_2D||de>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,de,nt.__webglTexture,De),t.bindFramebuffer(i.FRAMEBUFFER,null)}function St(B,A,te){if(i.bindRenderbuffer(i.RENDERBUFFER,B),A.depthBuffer){const ne=A.depthTexture,de=ne&&ne.isDepthTexture?ne.type:null,De=F(A.stencilBuffer,de),Ue=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;fn(A)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt(A),De,A.width,A.height):te?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt(A),De,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,De,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ue,i.RENDERBUFFER,B)}else{const ne=A.textures;for(let de=0;de<ne.length;de++){const De=ne[de],Ue=c.convert(De.format,De.colorSpace),pe=c.convert(De.type),be=C(De.internalFormat,Ue,pe,De.normalized,De.colorSpace);fn(A)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt(A),be,A.width,A.height):te?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt(A),be,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,be,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Nt(B,A,te){const ne=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,B),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const de=n.get(A.depthTexture);if(de.__renderTarget=A,(!de.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ne){if(de.__webglInit===void 0&&(de.__webglInit=!0,A.depthTexture.addEventListener("dispose",H)),de.__webglTexture===void 0){de.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,de.__webglTexture),oe(i.TEXTURE_CUBE_MAP,A.depthTexture);const Be=c.convert(A.depthTexture.format),nt=c.convert(A.depthTexture.type);let ze;A.depthTexture.format===xs?ze=i.DEPTH_COMPONENT24:A.depthTexture.format===Vo&&(ze=i.DEPTH24_STENCIL8);for(let Ne=0;Ne<6;Ne++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,ze,A.width,A.height,0,Be,nt,null)}}else Te(A.depthTexture,0);const De=de.__webglTexture,Ue=Wt(A),pe=ne?i.TEXTURE_CUBE_MAP_POSITIVE_X+te:i.TEXTURE_2D,be=A.depthTexture.format===Vo?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(A.depthTexture.format===xs)fn(A)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,be,pe,De,0,Ue):i.framebufferTexture2D(i.FRAMEBUFFER,be,pe,De,0);else if(A.depthTexture.format===Vo)fn(A)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,be,pe,De,0,Ue):i.framebufferTexture2D(i.FRAMEBUFFER,be,pe,De,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function wt(B){const A=n.get(B),te=B.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==B.depthTexture){const ne=B.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ne){const de=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ne.removeEventListener("dispose",de)};ne.addEventListener("dispose",de),A.__depthDisposeCallback=de}A.__boundDepthTexture=ne}if(B.depthTexture&&!A.__autoAllocateDepthBuffer)if(te)for(let ne=0;ne<6;ne++)Nt(A.__webglFramebuffer[ne],B,ne);else{const ne=B.texture.mipmaps;ne&&ne.length>0?Nt(A.__webglFramebuffer[0],B,0):Nt(A.__webglFramebuffer,B,0)}else if(te){A.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[ne]),A.__webglDepthbuffer[ne]===void 0)A.__webglDepthbuffer[ne]=i.createRenderbuffer(),St(A.__webglDepthbuffer[ne],B,!1);else{const de=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,De=A.__webglDepthbuffer[ne];i.bindRenderbuffer(i.RENDERBUFFER,De),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,De)}}else{const ne=B.texture.mipmaps;if(ne&&ne.length>0?t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),St(A.__webglDepthbuffer,B,!1);else{const de=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,De=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,De),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,De)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(B,A,te){const ne=n.get(B);A!==void 0&&Xe(ne.__webglFramebuffer,B,B.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),te!==void 0&&wt(B)}function Ye(B){const A=B.texture,te=n.get(B),ne=n.get(A);B.addEventListener("dispose",y);const de=B.textures,De=B.isWebGLCubeRenderTarget===!0,Ue=de.length>1;if(Ue||(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=A.version,u.memory.textures++),De){te.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(A.mipmaps&&A.mipmaps.length>0){te.__webglFramebuffer[pe]=[];for(let be=0;be<A.mipmaps.length;be++)te.__webglFramebuffer[pe][be]=i.createFramebuffer()}else te.__webglFramebuffer[pe]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){te.__webglFramebuffer=[];for(let pe=0;pe<A.mipmaps.length;pe++)te.__webglFramebuffer[pe]=i.createFramebuffer()}else te.__webglFramebuffer=i.createFramebuffer();if(Ue)for(let pe=0,be=de.length;pe<be;pe++){const Be=n.get(de[pe]);Be.__webglTexture===void 0&&(Be.__webglTexture=i.createTexture(),u.memory.textures++)}if(B.samples>0&&fn(B)===!1){te.__webglMultisampledFramebuffer=i.createFramebuffer(),te.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let pe=0;pe<de.length;pe++){const be=de[pe];te.__webglColorRenderbuffer[pe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,te.__webglColorRenderbuffer[pe]);const Be=c.convert(be.format,be.colorSpace),nt=c.convert(be.type),ze=C(be.internalFormat,Be,nt,be.normalized,be.colorSpace,B.isXRRenderTarget===!0),Ne=Wt(B);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,ze,B.width,B.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,te.__webglColorRenderbuffer[pe])}i.bindRenderbuffer(i.RENDERBUFFER,null),B.depthBuffer&&(te.__webglDepthRenderbuffer=i.createRenderbuffer(),St(te.__webglDepthRenderbuffer,B,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(De){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),oe(i.TEXTURE_CUBE_MAP,A);for(let pe=0;pe<6;pe++)if(A.mipmaps&&A.mipmaps.length>0)for(let be=0;be<A.mipmaps.length;be++)Xe(te.__webglFramebuffer[pe][be],B,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be);else Xe(te.__webglFramebuffer[pe],B,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);M(A)&&O(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let pe=0,be=de.length;pe<be;pe++){const Be=de[pe],nt=n.get(Be);let ze=i.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(ze=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ze,nt.__webglTexture),oe(ze,Be),Xe(te.__webglFramebuffer,B,Be,i.COLOR_ATTACHMENT0+pe,ze,0),M(Be)&&O(ze)}t.unbindTexture()}else{let pe=i.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(pe=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,ne.__webglTexture),oe(pe,A),A.mipmaps&&A.mipmaps.length>0)for(let be=0;be<A.mipmaps.length;be++)Xe(te.__webglFramebuffer[be],B,A,i.COLOR_ATTACHMENT0,pe,be);else Xe(te.__webglFramebuffer,B,A,i.COLOR_ATTACHMENT0,pe,0);M(A)&&O(pe),t.unbindTexture()}B.depthBuffer&&wt(B)}function bt(B){const A=B.textures;for(let te=0,ne=A.length;te<ne;te++){const de=A[te];if(M(de)){const De=k(B),Ue=n.get(de).__webglTexture;t.bindTexture(De,Ue),O(De),t.unbindTexture()}}}const Jt=[],Vt=[];function Sn(B){if(B.samples>0){if(fn(B)===!1){const A=B.textures,te=B.width,ne=B.height;let de=i.COLOR_BUFFER_BIT;const De=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ue=n.get(B),pe=A.length>1;if(pe)for(let Be=0;Be<A.length;Be++)t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const be=B.texture.mipmaps;be&&be.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Be=0;Be<A.length;Be++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(de|=i.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(de|=i.STENCIL_BUFFER_BIT)),pe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[Be]);const nt=n.get(A[Be]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,nt,0)}i.blitFramebuffer(0,0,te,ne,0,0,te,ne,de,i.NEAREST),p===!0&&(Jt.length=0,Vt.length=0,Jt.push(i.COLOR_ATTACHMENT0+Be),B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&(Jt.push(De),Vt.push(De),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Vt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Jt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pe)for(let Be=0;Be<A.length;Be++){t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[Be]);const nt=n.get(A[Be]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.TEXTURE_2D,nt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&p){const A=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function Wt(B){return Math.min(o.maxSamples,B.samples)}function fn(B){const A=n.get(B);return B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Y(B){const A=u.render.frame;S.get(B)!==A&&(S.set(B,A),B.update())}function en(B,A){const te=B.colorSpace,ne=B.format,de=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||te!==yf&&te!==Ys&&(jt.getTransfer(te)===xn?(ne!==ra||de!==dr)&&Mt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):an("WebGLTextures: Unsupported texture color space:",te)),A}function dt(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(g.width=B.naturalWidth||B.width,g.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(g.width=B.displayWidth,g.height=B.displayHeight):(g.width=B.width,g.height=B.height),g}this.allocateTextureUnit=Me,this.resetTextureUnits=ae,this.getTextureUnits=W,this.setTextureUnits=ue,this.setTexture2D=Te,this.setTexture2DArray=ie,this.setTexture3D=V,this.setTextureCube=xe,this.rebindTextures=Ut,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=Sn,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=Xe,this.useMultisampledRTT=fn,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Vy(i,e){function t(n,o=Ys){let c;const u=jt.getTransfer(o);if(n===dr)return i.UNSIGNED_BYTE;if(n===Td)return i.UNSIGNED_SHORT_4_4_4_4;if(n===wd)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Sg)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===bg)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Mg)return i.BYTE;if(n===yg)return i.SHORT;if(n===$c)return i.UNSIGNED_SHORT;if(n===Ed)return i.INT;if(n===Na)return i.UNSIGNED_INT;if(n===La)return i.FLOAT;if(n===Ua)return i.HALF_FLOAT;if(n===Eg)return i.ALPHA;if(n===Tg)return i.RGB;if(n===ra)return i.RGBA;if(n===xs)return i.DEPTH_COMPONENT;if(n===Vo)return i.DEPTH_STENCIL;if(n===wg)return i.RED;if(n===Ad)return i.RED_INTEGER;if(n===Zo)return i.RG;if(n===Rd)return i.RG_INTEGER;if(n===Cd)return i.RGBA_INTEGER;if(n===df||n===pf||n===gf||n===mf)if(u===xn)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(n===df)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===gf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===mf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(n===df)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pf)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===gf)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===mf)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vh||n===Wh||n===Xh||n===Yh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(n===Vh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Yh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zh||n===Jh||n===Kh||n===Qh||n===qh||n===_f||n===jh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(n===Zh||n===Jh)return u===xn?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(n===Kh)return u===xn?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(n===Qh)return c.COMPRESSED_R11_EAC;if(n===qh)return c.COMPRESSED_SIGNED_R11_EAC;if(n===_f)return c.COMPRESSED_RG11_EAC;if(n===jh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===$h||n===ed||n===td||n===nd||n===id||n===rd||n===ad||n===sd||n===od||n===ld||n===cd||n===ud||n===fd||n===hd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(n===$h)return u===xn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ed)return u===xn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===td)return u===xn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===nd)return u===xn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===id)return u===xn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===rd)return u===xn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ad)return u===xn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sd)return u===xn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===od)return u===xn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ld)return u===xn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===cd)return u===xn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ud)return u===xn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fd)return u===xn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===hd)return u===xn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===dd||n===pd||n===gd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(n===dd)return u===xn?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===md||n===vd||n===xf||n===_d)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(n===md)return c.COMPRESSED_RED_RGTC1_EXT;if(n===vd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xf)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_d)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===eu?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Wy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Yy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ng(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Fa({vertexShader:Wy,fragmentShader:Xy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Di(new rc(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Zy extends Jo{constructor(e,t){super();const n=this;let o=null,c=1,u=null,d="local-floor",p=1,g=null,S=null,E=null,_=null,x=null,R=null;const N=typeof XRWebGLBinding<"u",w=new Yy,M={},O=t.getContextAttributes();let k=null,C=null;const F=[],D=[],H=new ut;let y=null,P=null;const z=new hr;z.viewport=new Hn;const G=new hr;G.viewport=new Hn;const q=[z,G],ae=new ev;let W=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ve){let me=F[ve];return me===void 0&&(me=new lh,F[ve]=me),me.getTargetRaySpace()},this.getControllerGrip=function(ve){let me=F[ve];return me===void 0&&(me=new lh,F[ve]=me),me.getGripSpace()},this.getHand=function(ve){let me=F[ve];return me===void 0&&(me=new lh,F[ve]=me),me.getHandSpace()};function Me(ve){const me=D.indexOf(ve.inputSource);if(me===-1)return;const ke=F[me];ke!==void 0&&(ke.update(ve.inputSource,ve.frame,g||u),ke.dispatchEvent({type:ve.type,data:ve.inputSource}))}function _e(){o.removeEventListener("select",Me),o.removeEventListener("selectstart",Me),o.removeEventListener("selectend",Me),o.removeEventListener("squeeze",Me),o.removeEventListener("squeezestart",Me),o.removeEventListener("squeezeend",Me),o.removeEventListener("end",_e),o.removeEventListener("inputsourceschange",Te);for(let ve=0;ve<F.length;ve++){const me=D[ve];me!==null&&(D[ve]=null,F[ve].disconnect(me))}W=null,ue=null,w.reset();for(const ve in M)delete M[ve];if(e.setRenderTarget(k),x=null,_=null,E=null,o=null,C=null,Qt.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(H.width,H.height,!1),P!==null){const ve=P.camera;ve.fov=P.fov,ve.zoom=P.zoom,ve.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ve){c=ve,n.isPresenting===!0&&Mt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ve){d=ve,n.isPresenting===!0&&Mt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||u},this.setReferenceSpace=function(ve){g=ve},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return E===null&&N&&(E=new XRWebGLBinding(o,t)),E},this.getFrame=function(){return R},this.getSession=function(){return o},this.setSession=async function(ve){if(o=ve,o!==null){if(k=e.getRenderTarget(),o.addEventListener("select",Me),o.addEventListener("selectstart",Me),o.addEventListener("selectend",Me),o.addEventListener("squeeze",Me),o.addEventListener("squeezestart",Me),o.addEventListener("squeezeend",Me),o.addEventListener("end",_e),o.addEventListener("inputsourceschange",Te),O.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(H),N&&"createProjectionLayer"in XRWebGLBinding.prototype){let ke=null,ft=null,Xe=null;O.depth&&(Xe=O.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ke=O.stencil?Vo:xs,ft=O.stencil?eu:Na);const St={colorFormat:t.RGBA8,depthFormat:Xe,scaleFactor:c};E=this.getBinding(),_=E.createProjectionLayer(St),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),C=new aa(_.textureWidth,_.textureHeight,{format:ra,type:dr,depthTexture:new iu(_.textureWidth,_.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,ke),stencilBuffer:O.stencil,colorSpace:e.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}else{const ke={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(o,t,ke),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),C=new aa(x.framebufferWidth,x.framebufferHeight,{format:ra,type:dr,colorSpace:e.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(p),g=null,u=await o.requestReferenceSpace(d),Qt.setContext(o),Qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function Te(ve){for(let me=0;me<ve.removed.length;me++){const ke=ve.removed[me],ft=D.indexOf(ke);ft>=0&&(D[ft]=null,F[ft].disconnect(ke))}for(let me=0;me<ve.added.length;me++){const ke=ve.added[me];let ft=D.indexOf(ke);if(ft===-1){for(let St=0;St<F.length;St++)if(St>=D.length){D.push(ke),ft=St;break}else if(D[St]===null){D[St]=ke,ft=St;break}if(ft===-1)break}const Xe=F[ft];Xe&&Xe.connect(ke)}}const ie=new K,V=new K;function xe(ve,me,ke){ie.setFromMatrixPosition(me.matrixWorld),V.setFromMatrixPosition(ke.matrixWorld);const ft=ie.distanceTo(V),Xe=me.projectionMatrix.elements,St=ke.projectionMatrix.elements,Nt=Xe[14]/(Xe[10]-1),wt=Xe[14]/(Xe[10]+1),Ut=(Xe[9]+1)/Xe[5],Ye=(Xe[9]-1)/Xe[5],bt=(Xe[8]-1)/Xe[0],Jt=(St[8]+1)/St[0],Vt=Nt*bt,Sn=Nt*Jt,Wt=ft/(-bt+Jt),fn=Wt*-bt;if(me.matrixWorld.decompose(ve.position,ve.quaternion,ve.scale),ve.translateX(fn),ve.translateZ(Wt),ve.matrixWorld.compose(ve.position,ve.quaternion,ve.scale),ve.matrixWorldInverse.copy(ve.matrixWorld).invert(),Xe[10]===-1)ve.projectionMatrix.copy(me.projectionMatrix),ve.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const Y=Nt+Wt,en=wt+Wt,dt=Vt-fn,B=Sn+(ft-fn),A=Ut*wt/en*Y,te=Ye*wt/en*Y;ve.projectionMatrix.makePerspective(dt,B,A,te,Y,en),ve.projectionMatrixInverse.copy(ve.projectionMatrix).invert()}}function at(ve,me){me===null?ve.matrixWorld.copy(ve.matrix):ve.matrixWorld.multiplyMatrices(me.matrixWorld,ve.matrix),ve.matrixWorldInverse.copy(ve.matrixWorld).invert()}this.updateCamera=function(ve){if(o===null)return;let me=ve.near,ke=ve.far;w.texture!==null&&(w.depthNear>0&&(me=w.depthNear),w.depthFar>0&&(ke=w.depthFar)),ae.near=G.near=z.near=me,ae.far=G.far=z.far=ke,(W!==ae.near||ue!==ae.far)&&(o.updateRenderState({depthNear:ae.near,depthFar:ae.far}),W=ae.near,ue=ae.far),ae.layers.mask=ve.layers.mask|6,z.layers.mask=ae.layers.mask&-5,G.layers.mask=ae.layers.mask&-3;const ft=ve.parent,Xe=ae.cameras;at(ae,ft);for(let St=0;St<Xe.length;St++)at(Xe[St],ft);Xe.length===2?xe(ae,z,G):ae.projectionMatrix.copy(z.projectionMatrix),P===null&&ve.isPerspectiveCamera&&(P={camera:ve,fov:ve.fov,zoom:ve.zoom}),tt(ve,ae,ft)};function tt(ve,me,ke){ke===null?ve.matrix.copy(me.matrixWorld):(ve.matrix.copy(ke.matrixWorld),ve.matrix.invert(),ve.matrix.multiply(me.matrixWorld)),ve.matrix.decompose(ve.position,ve.quaternion,ve.scale),ve.updateMatrixWorld(!0),ve.projectionMatrix.copy(me.projectionMatrix),ve.projectionMatrixInverse.copy(me.projectionMatrixInverse),ve.isPerspectiveCamera&&(ve.fov=nu*2*Math.atan(1/ve.projectionMatrix.elements[5]),ve.zoom=1)}this.getCamera=function(){return ae},this.getFoveation=function(){if(!(_===null&&x===null))return p},this.setFoveation=function(ve){p=ve,_!==null&&(_.fixedFoveation=ve),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=ve)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(ae)},this.getCameraTexture=function(ve){return M[ve]};let we=null;function oe(ve,me){if(S=me.getViewerPose(g||u),R=me,S!==null){const ke=S.views;x!==null&&(e.setRenderTargetFramebuffer(C,x.framebuffer),e.setRenderTarget(C));let ft=!1;ke.length!==ae.cameras.length&&(ae.cameras.length=0,ft=!0);for(let wt=0;wt<ke.length;wt++){const Ut=ke[wt];let Ye=null;if(x!==null)Ye=x.getViewport(Ut);else{const Jt=E.getViewSubImage(_,Ut);Ye=Jt.viewport,wt===0&&(e.setRenderTargetTextures(C,Jt.colorTexture,Jt.depthStencilTexture),e.setRenderTarget(C))}let bt=q[wt];bt===void 0&&(bt=new hr,bt.layers.enable(wt),bt.viewport=new Hn,q[wt]=bt),bt.matrix.fromArray(Ut.transform.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale),bt.projectionMatrix.fromArray(Ut.projectionMatrix),bt.projectionMatrixInverse.copy(bt.projectionMatrix).invert(),bt.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),wt===0&&(ae.matrix.copy(bt.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale)),ft===!0&&ae.cameras.push(bt)}const Xe=o.enabledFeatures;if(Xe&&Xe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&N){E=n.getBinding();const wt=E.getDepthInformation(ke[0]);wt&&wt.isValid&&wt.texture&&w.init(wt,o.renderState)}if(Xe&&Xe.includes("camera-access")&&N){e.state.unbindTexture(),E=n.getBinding();for(let wt=0;wt<ke.length;wt++){const Ut=ke[wt].camera;if(Ut){let Ye=M[Ut];Ye||(Ye=new Ng,M[Ut]=Ye);const bt=E.getCameraImage(Ut);Ye.sourceTexture=bt}}}}for(let ke=0;ke<F.length;ke++){const ft=D[ke],Xe=F[ke];ft!==null&&Xe!==void 0&&Xe.update(ft,me,g||u)}we&&we(ve,me),me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:me}),R=null}const Qt=new Gg;Qt.setAnimationLoop(oe),this.setAnimationLoop=function(ve){we=ve},this.dispose=function(){}}}const Jy=new Fn,Kg=new Ct;Kg.set(-1,0,0,0,1,0,0,0,1);function Ky(i,e){function t(w,M){w.matrixAutoUpdate===!0&&w.updateMatrix(),M.value.copy(w.matrix)}function n(w,M){M.color.getRGB(w.fogColor.value,Bg(i)),M.isFog?(w.fogNear.value=M.near,w.fogFar.value=M.far):M.isFogExp2&&(w.fogDensity.value=M.density)}function o(w,M,O,k,C){M.isNodeMaterial?M.uniformsNeedUpdate=!1:M.isMeshBasicMaterial?c(w,M):M.isMeshLambertMaterial?(c(w,M),M.envMap&&(w.envMapIntensity.value=M.envMapIntensity)):M.isMeshToonMaterial?(c(w,M),E(w,M)):M.isMeshPhongMaterial?(c(w,M),S(w,M),M.envMap&&(w.envMapIntensity.value=M.envMapIntensity)):M.isMeshStandardMaterial?(c(w,M),_(w,M),M.isMeshPhysicalMaterial&&x(w,M,C)):M.isMeshMatcapMaterial?(c(w,M),R(w,M)):M.isMeshDepthMaterial?c(w,M):M.isMeshDistanceMaterial?(c(w,M),N(w,M)):M.isMeshNormalMaterial?c(w,M):M.isLineBasicMaterial?(u(w,M),M.isLineDashedMaterial&&d(w,M)):M.isPointsMaterial?p(w,M,O,k):M.isSpriteMaterial?g(w,M):M.isShadowMaterial?(w.color.value.copy(M.color),w.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function c(w,M){w.opacity.value=M.opacity,M.color&&w.diffuse.value.copy(M.color),M.emissive&&w.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(w.map.value=M.map,t(M.map,w.mapTransform)),M.alphaMap&&(w.alphaMap.value=M.alphaMap,t(M.alphaMap,w.alphaMapTransform)),M.bumpMap&&(w.bumpMap.value=M.bumpMap,t(M.bumpMap,w.bumpMapTransform),w.bumpScale.value=M.bumpScale,M.side===ir&&(w.bumpScale.value*=-1)),M.normalMap&&(w.normalMap.value=M.normalMap,t(M.normalMap,w.normalMapTransform),w.normalScale.value.copy(M.normalScale),M.side===ir&&w.normalScale.value.negate()),M.displacementMap&&(w.displacementMap.value=M.displacementMap,t(M.displacementMap,w.displacementMapTransform),w.displacementScale.value=M.displacementScale,w.displacementBias.value=M.displacementBias),M.emissiveMap&&(w.emissiveMap.value=M.emissiveMap,t(M.emissiveMap,w.emissiveMapTransform)),M.specularMap&&(w.specularMap.value=M.specularMap,t(M.specularMap,w.specularMapTransform)),M.alphaTest>0&&(w.alphaTest.value=M.alphaTest);const O=e.get(M),k=O.envMap,C=O.envMapRotation;k&&(w.envMap.value=k,w.envMapRotation.value.setFromMatrix4(Jy.makeRotationFromEuler(C)).transpose(),k.isCubeTexture&&k.isRenderTargetTexture===!1&&w.envMapRotation.value.premultiply(Kg),w.reflectivity.value=M.reflectivity,w.ior.value=M.ior,w.refractionRatio.value=M.refractionRatio),M.lightMap&&(w.lightMap.value=M.lightMap,w.lightMapIntensity.value=M.lightMapIntensity,t(M.lightMap,w.lightMapTransform)),M.aoMap&&(w.aoMap.value=M.aoMap,w.aoMapIntensity.value=M.aoMapIntensity,t(M.aoMap,w.aoMapTransform))}function u(w,M){w.diffuse.value.copy(M.color),w.opacity.value=M.opacity,M.map&&(w.map.value=M.map,t(M.map,w.mapTransform))}function d(w,M){w.dashSize.value=M.dashSize,w.totalSize.value=M.dashSize+M.gapSize,w.scale.value=M.scale}function p(w,M,O,k){w.diffuse.value.copy(M.color),w.opacity.value=M.opacity,w.size.value=M.size*O,w.scale.value=k*.5,M.map&&(w.map.value=M.map,t(M.map,w.uvTransform)),M.alphaMap&&(w.alphaMap.value=M.alphaMap,t(M.alphaMap,w.alphaMapTransform)),M.alphaTest>0&&(w.alphaTest.value=M.alphaTest)}function g(w,M){w.diffuse.value.copy(M.color),w.opacity.value=M.opacity,w.rotation.value=M.rotation,M.map&&(w.map.value=M.map,t(M.map,w.mapTransform)),M.alphaMap&&(w.alphaMap.value=M.alphaMap,t(M.alphaMap,w.alphaMapTransform)),M.alphaTest>0&&(w.alphaTest.value=M.alphaTest)}function S(w,M){w.specular.value.copy(M.specular),w.shininess.value=Math.max(M.shininess,1e-4)}function E(w,M){M.gradientMap&&(w.gradientMap.value=M.gradientMap)}function _(w,M){w.metalness.value=M.metalness,M.metalnessMap&&(w.metalnessMap.value=M.metalnessMap,t(M.metalnessMap,w.metalnessMapTransform)),w.roughness.value=M.roughness,M.roughnessMap&&(w.roughnessMap.value=M.roughnessMap,t(M.roughnessMap,w.roughnessMapTransform)),M.envMap&&(w.envMapIntensity.value=M.envMapIntensity)}function x(w,M,O){w.ior.value=M.ior,M.sheen>0&&(w.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),w.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(w.sheenColorMap.value=M.sheenColorMap,t(M.sheenColorMap,w.sheenColorMapTransform)),M.sheenRoughnessMap&&(w.sheenRoughnessMap.value=M.sheenRoughnessMap,t(M.sheenRoughnessMap,w.sheenRoughnessMapTransform))),M.clearcoat>0&&(w.clearcoat.value=M.clearcoat,w.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(w.clearcoatMap.value=M.clearcoatMap,t(M.clearcoatMap,w.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(w.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,t(M.clearcoatRoughnessMap,w.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(w.clearcoatNormalMap.value=M.clearcoatNormalMap,t(M.clearcoatNormalMap,w.clearcoatNormalMapTransform),w.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===ir&&w.clearcoatNormalScale.value.negate())),M.dispersion>0&&(w.dispersion.value=M.dispersion),M.retroreflectivity>0&&(w.retroreflectivity.value=M.retroreflectivity),M.iridescence>0&&(w.iridescence.value=M.iridescence,w.iridescenceIOR.value=M.iridescenceIOR,w.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],w.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(w.iridescenceMap.value=M.iridescenceMap,t(M.iridescenceMap,w.iridescenceMapTransform)),M.iridescenceThicknessMap&&(w.iridescenceThicknessMap.value=M.iridescenceThicknessMap,t(M.iridescenceThicknessMap,w.iridescenceThicknessMapTransform))),M.transmission>0&&(w.transmission.value=M.transmission,w.transmissionSamplerMap.value=O.texture,w.transmissionSamplerSize.value.set(O.width,O.height),M.transmissionMap&&(w.transmissionMap.value=M.transmissionMap,t(M.transmissionMap,w.transmissionMapTransform)),w.thickness.value=M.thickness,M.thicknessMap&&(w.thicknessMap.value=M.thicknessMap,t(M.thicknessMap,w.thicknessMapTransform)),w.attenuationDistance.value=M.attenuationDistance,w.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(w.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(w.anisotropyMap.value=M.anisotropyMap,t(M.anisotropyMap,w.anisotropyMapTransform))),w.specularIntensity.value=M.specularIntensity,w.specularColor.value.copy(M.specularColor),M.specularColorMap&&(w.specularColorMap.value=M.specularColorMap,t(M.specularColorMap,w.specularColorMapTransform)),M.specularIntensityMap&&(w.specularIntensityMap.value=M.specularIntensityMap,t(M.specularIntensityMap,w.specularIntensityMapTransform))}function R(w,M){M.matcap&&(w.matcap.value=M.matcap)}function N(w,M){const O=e.get(M).light;w.referencePosition.value.setFromMatrixPosition(O.matrixWorld),w.nearDistance.value=O.shadow.camera.near,w.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:o}}function Qy(i,e,t,n){let o={},c={},u=[];const d=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function p(C,F){const D=F.program;n.uniformBlockBinding(C,D)}function g(C,F){let D=o[C.id];D===void 0&&(w(C),D=S(C),o[C.id]=D,C.addEventListener("dispose",O));const H=F.program;n.updateUBOMapping(C,H);const y=e.render.frame;c[C.id]!==y&&(_(C),c[C.id]=y)}function S(C){const F=E();C.__bindingPointIndex=F;const D=i.createBuffer(),H=C.__size,y=C.usage;return i.bindBuffer(i.UNIFORM_BUFFER,D),i.bufferData(i.UNIFORM_BUFFER,H,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,F,D),D}function E(){for(let C=0;C<d;C++)if(u.indexOf(C)===-1)return u.push(C),C;return an("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(C){const F=o[C.id],D=C.uniforms,H=C.__cache;i.bindBuffer(i.UNIFORM_BUFFER,F);for(let y=0,P=D.length;y<P;y++){const z=D[y];if(Array.isArray(z))for(let G=0,q=z.length;G<q;G++)x(z[G],y,G,H);else x(z,y,0,H)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function x(C,F,D,H){if(N(C,F,D,H)===!0){const y=C.__offset,P=C.value;if(Array.isArray(P)){let z=0;for(let G=0;G<P.length;G++){const q=P[G],ae=M(q);R(q,C.__data,z),typeof q!="number"&&typeof q!="boolean"&&!q.isMatrix3&&!ArrayBuffer.isView(q)&&(z+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}}else R(P,C.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,C.__data)}}function R(C,F,D){typeof C=="number"||typeof C=="boolean"?F[0]=C:C.isMatrix3?(F[0]=C.elements[0],F[1]=C.elements[1],F[2]=C.elements[2],F[3]=0,F[4]=C.elements[3],F[5]=C.elements[4],F[6]=C.elements[5],F[7]=0,F[8]=C.elements[6],F[9]=C.elements[7],F[10]=C.elements[8],F[11]=0):ArrayBuffer.isView(C)?F.set(new C.constructor(C.buffer,C.byteOffset,F.length)):C.toArray(F,D)}function N(C,F,D,H){const y=C.value,P=F+"_"+D;if(H[P]===void 0)return typeof y=="number"||typeof y=="boolean"?H[P]=y:ArrayBuffer.isView(y)?H[P]=y.slice():H[P]=y.clone(),!0;{const z=H[P];if(typeof y=="number"||typeof y=="boolean"){if(z!==y)return H[P]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(z.equals(y)===!1)return z.copy(y),!0}}return!1}function w(C){const F=C.uniforms;let D=0;const H=16;for(let P=0,z=F.length;P<z;P++){const G=Array.isArray(F[P])?F[P]:[F[P]];for(let q=0,ae=G.length;q<ae;q++){const W=G[q],ue=Array.isArray(W.value)?W.value:[W.value];for(let Me=0,_e=ue.length;Me<_e;Me++){const Te=ue[Me],ie=M(Te),V=D%H,xe=V%ie.boundary,at=V+xe;D+=xe,at!==0&&H-at<ie.storage&&(D+=H-at),W.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=D,D+=ie.storage}}}const y=D%H;return y>0&&(D+=H-y),C.__size=D,C.__cache={},this}function M(C){const F={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(F.boundary=4,F.storage=4):C.isVector2?(F.boundary=8,F.storage=8):C.isVector3||C.isColor?(F.boundary=16,F.storage=12):C.isVector4?(F.boundary=16,F.storage=16):C.isMatrix3?(F.boundary=48,F.storage=48):C.isMatrix4?(F.boundary=64,F.storage=64):C.isTexture?Mt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(F.boundary=16,F.storage=C.byteLength):Mt("WebGLRenderer: Unsupported uniform value type.",C),F}function O(C){const F=C.target;F.removeEventListener("dispose",O);const D=u.indexOf(F.__bindingPointIndex);u.splice(D,1),i.deleteBuffer(o[F.id]),delete o[F.id],delete c[F.id]}function k(){for(const C in o)i.deleteBuffer(o[C]);u=[],o={},c={}}return{bind:p,update:g,dispose:k}}const qy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ca=null;function jy(){return Ca===null&&(Ca=new S0(qy,16,16,Zo,Ua),Ca.name="DFG_LUT",Ca.minFilter=Li,Ca.magFilter=Li,Ca.wrapS=gs,Ca.wrapT=gs,Ca.generateMipmaps=!1,Ca.needsUpdate=!0),Ca}class $y{constructor(e={}){const{canvas:t=Fm(),context:n=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:g=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:E=!1,reversedDepthBuffer:_=!1,outputBufferType:x=dr}=e;this.isWebGLRenderer=!0;let R;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");R=n.getContextAttributes().alpha}else R=u;const N=x,w=new Set([Cd,Rd,Ad]),M=new Set([dr,Na,$c,eu,Td,wd]),O=new Uint32Array(4),k=new Int32Array(4),C=new K;let F=null,D=null;const H=[],y=[];let P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Da,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const z=this;let G=!1,q=null,ae=null,W=null,ue=null;this._outputColorSpace=Xi;let Me=0,_e=0,Te=null,ie=-1,V=null;const xe=new Hn,at=new Hn;let tt=null;const we=new Pt(0);let oe=0,Qt=t.width,ve=t.height,me=1,ke=null,ft=null;const Xe=new Hn(0,0,Qt,ve),St=new Hn(0,0,Qt,ve);let Nt=!1;const wt=new Fd;let Ut=!1,Ye=!1;const bt=new Fn,Jt=new K,Vt=new Hn,Sn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function fn(){return Te===null?me:1}let Y=n;function en(L,Q){return t.getContext(L,Q)}let dt,B,A,te,ne,de,De,Ue,pe,be,Be,nt,ze,Ne,lt,st,vt,J,Ee,ye,Fe,Oe,Ae;try{const L={alpha:!0,depth:o,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:g,powerPreference:S,failIfMajorPerformanceCaveat:E};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Sd}`),t.addEventListener("webglcontextlost",Lt,!1),t.addEventListener("webglcontextrestored",Xt,!1),t.addEventListener("webglcontextcreationerror",hn,!1),Y===null){const Q="webgl2";if(Y=en(Q,L),Y===null)throw en(Q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}rt()}catch(L){throw t.removeEventListener("webglcontextlost",Lt,!1),t.removeEventListener("webglcontextrestored",Xt,!1),t.removeEventListener("webglcontextcreationerror",hn,!1),an("WebGLRenderer: "+L.message),L}function rt(){dt=new jx(Y),dt.init(),Fe=new Vy(Y,dt),B=new Gx(Y,dt,e,Fe),A=new Hy(Y,dt),B.reversedDepthBuffer&&_&&A.buffers.depth.setReversed(!0),ae=Y.createFramebuffer(),W=Y.createFramebuffer(),ue=Y.createFramebuffer(),te=new tM(Y),ne=new Ay,de=new Gy(Y,dt,A,ne,B,Fe,te),De=new qx(z),Ue=new iv(Y),Oe=new kx(Y,Ue),pe=new $x(Y,Ue,te,Oe),be=new iM(Y,pe,Ue,Oe,te),J=new nM(Y,B,de),lt=new Vx(ne),Be=new wy(z,De,dt,B,Oe,lt),nt=new Ky(z,ne),ze=new Cy,Ne=new Uy(dt),vt=new zx(z,De,A,be,R,p),st=new ky(z,be,B),Ae=new Qy(Y,te,B,A),Ee=new Hx(Y,dt,te),ye=new eM(Y,dt,te),te.programs=Be.programs,z.capabilities=B,z.extensions=dt,z.properties=ne,z.renderLists=ze,z.shadowMap=st,z.state=A,z.info=te}N!==dr&&(P=new aM(N,t.width,t.height,d,o,c));const it=new Zy(z,Y);this.xr=it,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const L=dt.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=dt.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(L){L!==void 0&&(me=L,this.setSize(Qt,ve,!1))},this.getSize=function(L){return L.set(Qt,ve)},this.setSize=function(L,Q,ge=!0){if(it.isPresenting){Mt("WebGLRenderer: Can't change size while VR device is presenting.");return}Qt=L,ve=Q,t.width=Math.floor(L*me),t.height=Math.floor(Q*me),ge===!0&&(t.style.width=L+"px",t.style.height=Q+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,L,Q)},this.getDrawingBufferSize=function(L){return L.set(Qt*me,ve*me).floor()},this.setDrawingBufferSize=function(L,Q,ge){Qt=L,ve=Q,me=ge,t.width=Math.floor(L*ge),t.height=Math.floor(Q*ge),this.setViewport(0,0,L,Q)},this.setEffects=function(L){if(N===dr){an("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let Q=0;Q<L.length;Q++)if(L[Q].isOutputPass===!0){Mt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(xe)},this.getViewport=function(L){return L.copy(Xe)},this.setViewport=function(L,Q,ge,le){L.isVector4?Xe.set(L.x,L.y,L.z,L.w):Xe.set(L,Q,ge,le),A.viewport(xe.copy(Xe).multiplyScalar(me).round())},this.getScissor=function(L){return L.copy(St)},this.setScissor=function(L,Q,ge,le){L.isVector4?St.set(L.x,L.y,L.z,L.w):St.set(L,Q,ge,le),A.scissor(at.copy(St).multiplyScalar(me).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(L){A.setScissorTest(Nt=L)},this.setOpaqueSort=function(L){ke=L},this.setTransparentSort=function(L){ft=L},this.getClearColor=function(L){return L.copy(vt.getClearColor())},this.setClearColor=function(){vt.setClearColor(...arguments)},this.getClearAlpha=function(){return vt.getClearAlpha()},this.setClearAlpha=function(){vt.setClearAlpha(...arguments)},this.clear=function(L=!0,Q=!0,ge=!0){let le=0;if(L){let ce=!1;if(Te!==null){const Le=Te.texture.format;ce=w.has(Le)}if(ce){const Le=Te.texture.type,Qe=M.has(Le),Ve=vt.getClearColor(),qe=vt.getClearAlpha(),ct=Ve.r,Rt=Ve.g,Et=Ve.b;Qe?(O[0]=ct,O[1]=Rt,O[2]=Et,O[3]=qe,Y.clearBufferuiv(Y.COLOR,0,O)):(k[0]=ct,k[1]=Rt,k[2]=Et,k[3]=qe,Y.clearBufferiv(Y.COLOR,0,k))}else le|=Y.COLOR_BUFFER_BIT}Q&&(le|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ge&&(le|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),le!==0&&Y.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),q=L},this.dispose=function(){t.removeEventListener("webglcontextlost",Lt,!1),t.removeEventListener("webglcontextrestored",Xt,!1),t.removeEventListener("webglcontextcreationerror",hn,!1),vt.dispose(),ze.dispose(),Ne.dispose(),ne.dispose(),De.dispose(),be.dispose(),Oe.dispose(),Ae.dispose(),Be.dispose(),it.dispose(),it.removeEventListener("sessionstart",Ft),it.removeEventListener("sessionend",mt),pt.stop()};function Lt(L){L.preventDefault(),op("WebGLRenderer: Context Lost."),G=!0}function Xt(){op("WebGLRenderer: Context Restored."),G=!1;const L=te.autoReset,Q=st.enabled,ge=st.autoUpdate,le=st.needsUpdate,ce=st.type;rt(),te.autoReset=L,st.enabled=Q,st.autoUpdate=ge,st.needsUpdate=le,st.type=ce}function hn(L){an("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function ci(L){const Q=L.target;Q.removeEventListener("dispose",ci),Ce(Q)}function Ce(L){Ge(L),ne.remove(L)}function Ge(L){const Q=ne.get(L).programs;Q!==void 0&&(Q.forEach(function(ge){Be.releaseProgram(ge)}),L.isShaderMaterial&&Be.releaseShaderCache(L))}this.renderBufferDirect=function(L,Q,ge,le,ce,Le){Q===null&&(Q=Sn);const Qe=ce.isMesh&&ce.matrixWorld.determinantAffine()<0,Ve=bn(L,Q,ge,le,ce);A.setMaterial(le,Qe);let qe=ge.index,ct=1;if(le.wireframe===!0){if(qe=pe.getWireframeAttribute(ge),qe===void 0)return;ct=2}const Rt=ge.drawRange,Et=ge.attributes.position;let ot=Rt.start*ct,Zt=(Rt.start+Rt.count)*ct;Le!==null&&(ot=Math.max(ot,Le.start*ct),Zt=Math.min(Zt,(Le.start+Le.count)*ct)),qe!==null?(ot=Math.max(ot,0),Zt=Math.min(Zt,qe.count)):Et!=null&&(ot=Math.max(ot,0),Zt=Math.min(Zt,Et.count));const dn=Zt-ot;if(dn<0||dn===1/0)return;Oe.setup(ce,le,Ve,ge,qe);let sn,nn=Ee;if(qe!==null&&(sn=Ue.get(qe),nn=ye,nn.setIndex(sn)),ce.isMesh)le.wireframe===!0?(A.setLineWidth(le.wireframeLinewidth*fn()),nn.setMode(Y.LINES)):nn.setMode(Y.TRIANGLES);else if(ce.isLine){let Bn=le.linewidth;Bn===void 0&&(Bn=1),A.setLineWidth(Bn*fn()),ce.isLineSegments?nn.setMode(Y.LINES):ce.isLineLoop?nn.setMode(Y.LINE_LOOP):nn.setMode(Y.LINE_STRIP)}else ce.isPoints?nn.setMode(Y.POINTS):ce.isSprite&&nn.setMode(Y.TRIANGLES);if(ce.isBatchedMesh)if(dt.get("WEBGL_multi_draw"))nn.renderMultiDraw(ce._multiDrawStarts,ce._multiDrawCounts,ce._multiDrawCount);else{const Bn=ce._multiDrawStarts,je=ce._multiDrawCounts,It=ce._multiDrawCount,Ot=qe?Ue.get(qe).bytesPerElement:1,di=ne.get(le).currentProgram.getUniforms();for(let Mi=0;Mi<It;Mi++)di.setValue(Y,"_gl_DrawID",Mi),nn.render(Bn[Mi]/Ot,je[Mi])}else if(ce.isInstancedMesh)nn.renderInstances(ot,dn,ce.count);else if(ge.isInstancedBufferGeometry){const Bn=ge._maxInstanceCount!==void 0?ge._maxInstanceCount:1/0,je=Math.min(ge.instanceCount,Bn);nn.renderInstances(ot,dn,je)}else nn.render(ot,dn)};function ht(L,Q,ge,le){q!==null&&L.isNodeMaterial&&q.setObject(le,L),Ut===!0&&lt.setState(L,ge,!1),L.transparent===!0&&L.side===Ur&&L.forceSinglePass===!1?(L.side=ir,L.needsUpdate=!0,Kn(L,Q,le),L.side=Xo,L.needsUpdate=!0,Kn(L,Q,le),L.side=Ur):Kn(L,Q,le)}this.compile=function(L,Q,ge=null){ge===null&&(ge=L),q!==null&&q.renderStart(L,Q,ge),D=Ne.get(ge),D.init(Q),y.push(D),ge.traverseVisible(function(ce){ce.isLight&&ce.layers.test(Q.layers)&&(D.pushLight(ce),ce.castShadow&&D.pushShadow(ce))}),L!==ge&&L.traverseVisible(function(ce){ce.isLight&&ce.layers.test(Q.layers)&&(D.pushLight(ce),ce.castShadow&&D.pushShadow(ce))}),D.setupLights(),q!==null&&q.updateLights(D.state.lightsArray),Ye=this.localClippingEnabled,Ut=lt.init(this.clippingPlanes,Ye),Ut===!0&&lt.setGlobalState(this.clippingPlanes,Q),q!==null&&st.render(D.state.shadowsArray,ge,Q);const le=new Set;return L.traverse(function(ce){if(!(ce.isMesh||ce.isPoints||ce.isLine||ce.isSprite))return;const Le=ce.material;if(Le)if(Array.isArray(Le))for(let Qe=0;Qe<Le.length;Qe++){const Ve=Le[Qe];ht(Ve,ge,Q,ce),le.add(Ve)}else ht(Le,ge,Q,ce),le.add(Le)}),D=y.pop(),q!==null&&q.renderEnd(),le},this.compileAsync=function(L,Q,ge=null){const le=this.compile(L,Q,ge);return new Promise(ce=>{function Le(){if(le.forEach(function(Qe){const qe=ne.get(Qe).currentProgram;(qe===void 0||qe.isReady())&&le.delete(Qe)}),le.size===0){ce(L);return}setTimeout(Le,10)}dt.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let At=null;function yt(L){At&&At(L)}function Ft(){pt.stop()}function mt(){pt.start()}const pt=new Gg;pt.setAnimationLoop(yt),typeof self<"u"&&pt.setContext(self),this.setAnimationLoop=function(L){At=L,it.setAnimationLoop(L),L===null?pt.stop():pt.start()},it.addEventListener("sessionstart",Ft),it.addEventListener("sessionend",mt),this.render=function(L,Q){if(Q!==void 0&&Q.isCamera!==!0){an("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;q!==null&&q.renderStart(L,Q);const ge=it.enabled===!0&&it.isPresenting===!0,le=P!==null&&(Te===null||ge)&&P.begin(z,Te);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(Q),Q=it.getCamera()),L.isScene===!0&&L.onBeforeRender(z,L,Q,Te),D=Ne.get(L,y.length),D.init(Q),D.state.textureUnits=de.getTextureUnits(),y.push(D),bt.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),wt.setFromProjectionMatrix(bt,Ia,Q.reversedDepth),Ye=this.localClippingEnabled,Ut=lt.init(this.clippingPlanes,Ye),F=ze.get(L,H.length),F.init(),H.push(F),it.enabled===!0&&it.isPresenting===!0){const Qe=z.xr.getDepthSensingMesh();Qe!==null&&tn(Qe,Q,-1/0,z.sortObjects)}tn(L,Q,0,z.sortObjects),F.finish(),q!==null&&q.updateLights(D.state.lightsArray),z.sortObjects===!0&&F.sort(ke,ft),Wt=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,Wt&&vt.addToRenderList(F,L),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ut===!0&&lt.beginShadows();const ce=D.state.shadowsArray;if(st.render(ce,L,Q),Ut===!0&&lt.endShadows(),(le&&P.hasRenderPass())===!1){const Qe=F.opaque,Ve=F.transmissive;if(D.setupLights(),Q.isArrayCamera){const qe=Q.cameras;if(Ve.length>0)for(let ct=0,Rt=qe.length;ct<Rt;ct++){const Et=qe[ct];gr(Qe,Ve,L,Et)}Wt&&vt.render(L);for(let ct=0,Rt=qe.length;ct<Rt;ct++){const Et=qe[ct];Ht(F,L,Et,Et.viewport)}}else Ve.length>0&&gr(Qe,Ve,L,Q),Wt&&vt.render(L),Ht(F,L,Q)}Te!==null&&_e===0&&(de.updateMultisampleRenderTarget(Te),de.updateRenderTargetMipmap(Te)),le&&P.end(z),L.isScene===!0&&L.onAfterRender(z,L,Q),Oe.resetDefaultState(),ie=-1,V=null,y.pop(),y.length>0?(D=y[y.length-1],de.setTextureUnits(D.state.textureUnits),Ut===!0&&lt.setGlobalState(z.clippingPlanes,D.state.camera)):D=null,H.pop(),H.length>0?F=H[H.length-1]:F=null,q!==null&&q.renderEnd()};function tn(L,Q,ge,le){if(L.visible===!1)return;if(L.layers.test(Q.layers)){if(L.isGroup)ge=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(Q);else if(L.isLightProbeGrid)D.pushLightProbeGrid(L);else if(L.isLight)D.pushLight(L),L.castShadow&&D.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||L.intersectsFrustum(wt)){le&&Vt.setFromMatrixPosition(L.matrixWorld).applyMatrix4(bt);const Qe=be.update(L),Ve=L.material;Ve.visible&&F.push(L,Qe,Ve,ge,Vt.z,null,Q)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||L.intersectsFrustum(wt))){const Qe=be.update(L),Ve=L.material;if(le&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Vt.copy(L.boundingSphere.center)):(Qe.boundingSphere===null&&Qe.computeBoundingSphere(),Vt.copy(Qe.boundingSphere.center)),Vt.applyMatrix4(L.matrixWorld).applyMatrix4(bt)),Array.isArray(Ve)){const qe=Qe.groups;for(let ct=0,Rt=qe.length;ct<Rt;ct++){const Et=qe[ct],ot=Ve[Et.materialIndex];ot&&ot.visible&&F.push(L,Qe,ot,ge,Vt.z,Et,Q)}}else Ve.visible&&F.push(L,Qe,Ve,ge,Vt.z,null,Q)}}const Le=L.children;for(let Qe=0,Ve=Le.length;Qe<Ve;Qe++)tn(Le[Qe],Q,ge,le)}function Ht(L,Q,ge,le){const{opaque:ce,transmissive:Le,transparent:Qe}=L;D.setupLightsView(ge),Ut===!0&&lt.setGlobalState(z.clippingPlanes,ge),le&&A.viewport(xe.copy(le)),ce.length>0&&mr(ce,Q,ge),Le.length>0&&mr(Le,Q,ge),Qe.length>0&&mr(Qe,Q,ge),A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),A.setPolygonOffset(!1)}function gr(L,Q,ge,le){if((ge.isScene===!0?ge.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[le.id]===void 0){const ot=dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[le.id]=new aa(1,1,{generateMipmaps:!0,type:ot?Ua:dr,minFilter:Go,samples:Math.max(4,B.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:jt.workingColorSpace})}const Le=D.state.transmissionRenderTarget[le.id],Qe=le.viewport||xe;Le.setSize(Qe.z*z.transmissionResolutionScale,Qe.w*z.transmissionResolutionScale);const Ve=z.getRenderTarget(),qe=z.getActiveCubeFace(),ct=z.getActiveMipmapLevel();z.setRenderTarget(Le),z.getClearColor(we),oe=z.getClearAlpha(),oe<1&&z.setClearColor(16777215,.5),z.clear(),Wt&&vt.render(ge);const Rt=z.toneMapping;z.toneMapping=Da;const Et=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),D.setupLightsView(le),Ut===!0&&lt.setGlobalState(z.clippingPlanes,le),mr(L,ge,le),de.updateMultisampleRenderTarget(Le),de.updateRenderTargetMipmap(Le),dt.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let Zt=0,dn=Q.length;Zt<dn;Zt++){const sn=Q[Zt],{object:nn,geometry:Bn,material:je,group:It}=sn;if(je.side===Ur&&nn.layers.test(le.layers)){const Ot=je.side;je.side=ir,je.needsUpdate=!0,vr(nn,ge,le,Bn,je,It),je.side=Ot,je.needsUpdate=!0,ot=!0}}ot===!0&&(de.updateMultisampleRenderTarget(Le),de.updateRenderTargetMipmap(Le))}z.setRenderTarget(Ve,qe,ct),z.setClearColor(we,oe),Et!==void 0&&(le.viewport=Et),z.toneMapping=Rt}function mr(L,Q,ge){const le=Q.isScene===!0?Q.overrideMaterial:null;for(let ce=0,Le=L.length;ce<Le;ce++){const Qe=L[ce],{object:Ve,geometry:qe,group:ct}=Qe;let Rt=Qe.material;Rt.allowOverride===!0&&le!==null&&(Rt=le),Ve.layers.test(ge.layers)&&vr(Ve,Q,ge,qe,Rt,ct)}}function vr(L,Q,ge,le,ce,Le){q!==null&&ce.isNodeMaterial&&q.setObject(L,ce),L.onBeforeRender(z,Q,ge,le,ce,Le),L.modelViewMatrix.multiplyMatrices(ge.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),ce.onBeforeRender(z,Q,ge,le,L,Le),ce.transparent===!0&&ce.side===Ur&&ce.forceSinglePass===!1?(ce.side=ir,ce.needsUpdate=!0,z.renderBufferDirect(ge,Q,le,ce,L,Le),ce.side=Xo,ce.needsUpdate=!0,z.renderBufferDirect(ge,Q,le,ce,L,Le),ce.side=Ur):z.renderBufferDirect(ge,Q,le,ce,L,Le),L.onAfterRender(z,Q,ge,le,ce,Le)}function Kn(L,Q,ge){Q.isScene!==!0&&(Q=Sn);const le=ne.get(L),ce=D.state.lights,Le=D.state.shadowsArray,Qe=ce.state.version,Ve=Be.getParameters(L,ce.state,Le,Q,ge,D.state.lightProbeGridArray),qe=Be.getProgramCacheKey(Ve);let ct=le.programs;le.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?Q.environment:null,le.fog=Q.fog;const Rt=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;le.envMap=De.get(L.envMap||le.environment,Rt),le.envMapRotation=le.environment!==null&&L.envMap===null?Q.environmentRotation:L.envMapRotation,ct===void 0&&(L.addEventListener("dispose",ci),ct=new Map,le.programs=ct);let Et=ct.get(qe);if(Et!==void 0){if(le.currentProgram===Et&&le.lightsStateVersion===Qe)return oa(L,Ve),Et}else Ve.uniforms=Be.getUniforms(L),q!==null&&L.isNodeMaterial&&q.build(L,ge,Ve),L.onBeforeCompile(Ve,z),Et=Be.acquireProgram(Ve,qe),ct.set(qe,Et),le.uniforms=Ve.uniforms;const ot=le.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(ot.clippingPlanes=lt.uniform),oa(L,Ve),le.needsLights=hi(L),le.lightsStateVersion=Qe,le.needsLights&&(ot.ambientLightColor.value=ce.state.ambient,ot.lightProbe.value=ce.state.probe,ot.sunLights.value=ce.state.sun,ot.sunLightShadows.value=ce.state.sunShadow,ot.directionalLights.value=ce.state.directional,ot.directionalLightShadows.value=ce.state.directionalShadow,ot.spotLights.value=ce.state.spot,ot.spotLightShadows.value=ce.state.spotShadow,ot.rectAreaLights.value=ce.state.rectArea,ot.ltc_1.value=ce.state.rectAreaLTC1,ot.ltc_2.value=ce.state.rectAreaLTC2,ot.pointLights.value=ce.state.point,ot.pointLightShadows.value=ce.state.pointShadow,ot.hemisphereLights.value=ce.state.hemi,ot.sunShadowMatrix.value=ce.state.sunShadowMatrix,ot.sunShadowCascade.value=ce.state.sunShadowCascade,ot.directionalShadowMatrix.value=ce.state.directionalShadowMatrix,ot.spotLightMatrix.value=ce.state.spotLightMatrix,ot.spotLightMap.value=ce.state.spotLightMap,ot.pointShadowMatrix.value=ce.state.pointShadowMatrix),le.lightProbeGrid=D.state.lightProbeGridArray.length>0,le.currentProgram=Et,le.uniformsList=null,Et}function sa(L){if(L.uniformsList===null){const Q=L.currentProgram.getUniforms();L.uniformsList=vf.seqWithValue(Q.seq,L.uniforms)}return L.uniformsList}function oa(L,Q){const ge=ne.get(L);ge.outputColorSpace=Q.outputColorSpace,ge.batching=Q.batching,ge.batchingColor=Q.batchingColor,ge.instancing=Q.instancing,ge.instancingColor=Q.instancingColor,ge.instancingMorph=Q.instancingMorph,ge.skinning=Q.skinning,ge.morphTargets=Q.morphTargets,ge.morphNormals=Q.morphNormals,ge.morphColors=Q.morphColors,ge.morphTargetsCount=Q.morphTargetsCount,ge.numClippingPlanes=Q.numClippingPlanes,ge.numIntersection=Q.numClipIntersection,ge.vertexAlphas=Q.vertexAlphas,ge.vertexTangents=Q.vertexTangents,ge.toneMapping=Q.toneMapping}function Yt(L,Q){if(L.length===0)return null;if(L.length===1)return L[0].texture!==null?L[0]:null;C.setFromMatrixPosition(Q.matrixWorld);for(let ge=0,le=L.length;ge<le;ge++){const ce=L[ge];if(ce.texture!==null&&ce.boundingBox.containsPoint(C))return ce}return null}function bn(L,Q,ge,le,ce){Q.isScene!==!0&&(Q=Sn),de.resetTextureUnits();const Le=Q.fog,Qe=le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial?Q.environment:null,Ve=Te===null?z.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:jt.workingColorSpace,qe=le.isMeshStandardMaterial||le.isMeshLambertMaterial&&!le.envMap||le.isMeshPhongMaterial&&!le.envMap,ct=De.get(le.envMap||Qe,qe),Rt=le.vertexColors===!0&&!!ge.attributes.color&&ge.attributes.color.itemSize===4,Et=!!ge.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),ot=!!ge.morphAttributes.position,Zt=!!ge.morphAttributes.normal,dn=!!ge.morphAttributes.color;let sn=Da;le.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(sn=z.toneMapping);const nn=ge.morphAttributes.position||ge.morphAttributes.normal||ge.morphAttributes.color,Bn=nn!==void 0?nn.length:0,je=ne.get(le),It=D.state.lights;if(Ut===!0&&(Ye===!0||L!==V)){const ln=L===V&&le.id===ie;lt.setState(le,L,ln)}let Ot=!1;le.version===je.__version?(je.needsLights&&je.lightsStateVersion!==It.state.version||je.outputColorSpace!==Ve||ce.isBatchedMesh&&je.batching===!1||!ce.isBatchedMesh&&je.batching===!0||ce.isBatchedMesh&&je.batchingColor===!0&&ce._colorsTexture===null||ce.isBatchedMesh&&je.batchingColor===!1&&ce._colorsTexture!==null||ce.isInstancedMesh&&je.instancing===!1||!ce.isInstancedMesh&&je.instancing===!0||ce.isSkinnedMesh&&je.skinning===!1||!ce.isSkinnedMesh&&je.skinning===!0||ce.isInstancedMesh&&je.instancingColor===!0&&ce.instanceColor===null||ce.isInstancedMesh&&je.instancingColor===!1&&ce.instanceColor!==null||ce.isInstancedMesh&&je.instancingMorph===!0&&ce.morphTexture===null||ce.isInstancedMesh&&je.instancingMorph===!1&&ce.morphTexture!==null||je.envMap!==ct||le.fog===!0&&je.fog!==Le||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==lt.numPlanes||je.numIntersection!==lt.numIntersection)||je.vertexAlphas!==Rt||je.vertexTangents!==Et||je.morphTargets!==ot||je.morphNormals!==Zt||je.morphColors!==dn||je.toneMapping!==sn||je.morphTargetsCount!==Bn||!!je.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(Ot=!0):(Ot=!0,je.__version=le.version);let di=je.currentProgram;Ot===!0&&(di=Kn(le,Q,ce),q&&le.isNodeMaterial&&q.onUpdateProgram(le,di,je));let Mi=!1,ti=!1,_r=!1;const Bt=di.getUniforms(),An=je.uniforms;if(A.useProgram(di.program)&&(Mi=!0,ti=!0,_r=!0),le.id!==ie&&(ie=le.id,ti=!0),je.needsLights){const ln=Yt(D.state.lightProbeGridArray,ce);je.lightProbeGrid!==ln&&(je.lightProbeGrid=ln,ti=!0)}if(Mi||V!==L){A.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),Bt.setValue(Y,"projectionMatrix",L.projectionMatrix),Bt.setValue(Y,"viewMatrix",L.matrixWorldInverse);const ni=Bt.map.cameraPosition;ni!==void 0&&ni.setValue(Y,Jt.setFromMatrixPosition(L.matrixWorld)),B.logarithmicDepthBuffer&&Bt.setValue(Y,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Bt.setValue(Y,"isOrthographic",L.isOrthographicCamera===!0),V!==L&&(V=L,ti=!0,_r=!0)}if(je.needsLights&&(It.state.sunShadowMap.length>0&&Bt.setValue(Y,"sunShadowMap",It.state.sunShadowMap,de),It.state.directionalShadowMap.length>0&&Bt.setValue(Y,"directionalShadowMap",It.state.directionalShadowMap,de),It.state.spotShadowMap.length>0&&Bt.setValue(Y,"spotShadowMap",It.state.spotShadowMap,de),It.state.pointShadowMap.length>0&&Bt.setValue(Y,"pointShadowMap",It.state.pointShadowMap,de)),ce.isSkinnedMesh){Bt.setOptional(Y,ce,"bindMatrix"),Bt.setOptional(Y,ce,"bindMatrixInverse");const ln=ce.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),Bt.setValue(Y,"boneTexture",ln.boneTexture,de))}ce.isBatchedMesh&&(Bt.setOptional(Y,ce,"batchingTexture"),Bt.setValue(Y,"batchingTexture",ce._matricesTexture,de),Bt.setOptional(Y,ce,"batchingIdTexture"),Bt.setValue(Y,"batchingIdTexture",ce._indirectTexture,de),Bt.setOptional(Y,ce,"batchingColorTexture"),ce._colorsTexture!==null&&Bt.setValue(Y,"batchingColorTexture",ce._colorsTexture,de));const xr=ge.morphAttributes;if((xr.position!==void 0||xr.normal!==void 0||xr.color!==void 0)&&J.update(ce,ge,di),(ti||je.receiveShadow!==ce.receiveShadow)&&(je.receiveShadow=ce.receiveShadow,Bt.setValue(Y,"receiveShadow",ce.receiveShadow)),(le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial)&&le.envMap===null&&Q.environment!==null&&(An.envMapIntensity.value=Q.environmentIntensity),An.dfgLUT!==void 0&&(An.dfgLUT.value=jy()),ti){if(Bt.setValue(Y,"toneMappingExposure",z.toneMappingExposure),je.needsLights&&Oa(An,_r),Le&&le.fog===!0&&nt.refreshFogUniforms(An,Le),nt.refreshMaterialUniforms(An,le,me,ve,D.state.transmissionRenderTarget[L.id]),je.needsLights&&je.lightProbeGrid){const ln=je.lightProbeGrid;An.probesSH.value=ln.texture,An.probesMin.value.copy(ln.boundingBox.min),An.probesMax.value.copy(ln.boundingBox.max),An.probesResolution.value.copy(ln.resolution)}vf.upload(Y,sa(je),An,de)}if(le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(vf.upload(Y,sa(je),An,de),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Bt.setValue(Y,"center",ce.center),Bt.setValue(Y,"modelViewMatrix",ce.modelViewMatrix),Bt.setValue(Y,"normalMatrix",ce.normalMatrix),Bt.setValue(Y,"modelMatrix",ce.matrixWorld),le.uniformsGroups!==void 0){const ln=le.uniformsGroups;for(let ni=0,ar=ln.length;ni<ar;ni++){const Qo=ln[ni];Ae.update(Qo,di),Ae.bind(Qo,di)}}return di}function Oa(L,Q){L.ambientLightColor.needsUpdate=Q,L.lightProbe.needsUpdate=Q,L.sunLights.needsUpdate=Q,L.sunLightShadows.needsUpdate=Q,L.directionalLights.needsUpdate=Q,L.directionalLightShadows.needsUpdate=Q,L.pointLights.needsUpdate=Q,L.pointLightShadows.needsUpdate=Q,L.spotLights.needsUpdate=Q,L.spotLightShadows.needsUpdate=Q,L.rectAreaLights.needsUpdate=Q,L.hemisphereLights.needsUpdate=Q}function hi(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return Me},this.getActiveMipmapLevel=function(){return _e},this.getRenderTarget=function(){return Te},this.setRenderTargetTextures=function(L,Q,ge){const le=ne.get(L);le.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),ne.get(L.texture).__webglTexture=Q,ne.get(L.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:ge,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,Q){const ge=ne.get(L);ge.__webglFramebuffer=Q,ge.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(L,Q=0,ge=0){Te=L,Me=Q,_e=ge;let le=null,ce=!1,Le=!1;if(L){const Ve=ne.get(L);if(Ve.__useDefaultFramebuffer!==void 0){A.bindFramebuffer(Y.FRAMEBUFFER,Ve.__webglFramebuffer),xe.copy(L.viewport),at.copy(L.scissor),tt=L.scissorTest,A.viewport(xe),A.scissor(at),A.setScissorTest(tt),ie=-1;return}else if(Ve.__webglFramebuffer===void 0)de.setupRenderTarget(L);else if(Ve.__hasExternalTextures)de.rebindTextures(L,ne.get(L.texture).__webglTexture,ne.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const Rt=L.depthTexture;if(Ve.__boundDepthTexture!==Rt){if(Rt!==null&&ne.has(Rt)&&(L.width!==Rt.image.width||L.height!==Rt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(L)}}const qe=L.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Le=!0);const ct=ne.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(ct[Q])?le=ct[Q][ge]:le=ct[Q],ce=!0):L.samples>0&&de.useMultisampledRTT(L)===!1?le=ne.get(L).__webglMultisampledFramebuffer:Array.isArray(ct)?le=ct[ge]:le=ct,xe.copy(L.viewport),at.copy(L.scissor),tt=L.scissorTest}else xe.copy(Xe).multiplyScalar(me).floor(),at.copy(St).multiplyScalar(me).floor(),tt=Nt;if(ge!==0&&(le=ae),A.bindFramebuffer(Y.FRAMEBUFFER,le)&&A.drawBuffers(L,le),A.viewport(xe),A.scissor(at),A.setScissorTest(tt),ce){const Ve=ne.get(L.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ve.__webglTexture,ge)}else if(Le){const Ve=Q;for(let qe=0;qe<L.textures.length;qe++){const ct=ne.get(L.textures[qe]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+qe,ct.__webglTexture,ge,Ve)}}else if(L!==null&&ge!==0){const Ve=ne.get(L.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Ve.__webglTexture,ge)}ie=-1};function Ko(L){const Q=ne.get(L);return(Q.__readFormat!==L.format||Q.__readType!==L.type)&&(Q.__readFormat=L.format,Q.__readType=L.type,Q.__formatReadable=B.textureFormatReadable(L.format),Q.__typeReadable=B.textureTypeReadable(L.type)),Q}this.readRenderTargetPixels=function(L,Q,ge,le,ce,Le,Qe,Ve=0){if(!(L&&L.isWebGLRenderTarget)){an("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=ne.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Qe!==void 0&&(qe=qe[Qe]),qe){A.bindFramebuffer(Y.FRAMEBUFFER,qe);try{const ct=L.textures[Ve],Rt=ct.format,Et=ct.type;L.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ve);const ot=Ko(ct);if(ot.__formatReadable===!1){an("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ot.__typeReadable===!1){an("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=L.width-le&&ge>=0&&ge<=L.height-ce&&Y.readPixels(Q,ge,le,ce,Fe.convert(Rt),Fe.convert(Et),Le)}finally{const ct=Te!==null?ne.get(Te).__webglFramebuffer:null;A.bindFramebuffer(Y.FRAMEBUFFER,ct)}}},this.readRenderTargetPixelsAsync=async function(L,Q,ge,le,ce,Le,Qe,Ve=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=ne.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Qe!==void 0&&(qe=qe[Qe]),qe)if(Q>=0&&Q<=L.width-le&&ge>=0&&ge<=L.height-ce){A.bindFramebuffer(Y.FRAMEBUFFER,qe);const ct=L.textures[Ve],Rt=ct.format,Et=ct.type;L.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ve);const ot=Ko(ct);if(ot.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ot.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Zt=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Zt),Y.bufferData(Y.PIXEL_PACK_BUFFER,Le.byteLength,Y.STREAM_READ),Y.readPixels(Q,ge,le,ce,Fe.convert(Rt),Fe.convert(Et),0),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null);const dn=Te!==null?ne.get(Te).__webglFramebuffer:null;A.bindFramebuffer(Y.FRAMEBUFFER,dn);const sn=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await Om(Y,sn,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Zt),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Le),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null),Y.deleteBuffer(Zt),Y.deleteSync(sn),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,Q=null,ge=0){const le=Math.pow(2,-ge),ce=Math.floor(L.image.width*le),Le=Math.floor(L.image.height*le),Qe=Q!==null?Q.x:0,Ve=Q!==null?Q.y:0;de.setTexture2D(L,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,ge,0,0,Qe,Ve,ce,Le),A.unbindTexture()},this.copyTextureToTexture=function(L,Q,ge=null,le=null,ce=0,Le=0){let Qe,Ve,qe,ct,Rt,Et,ot,Zt,dn;const sn=L.isCompressedTexture?L.mipmaps[Le]:L.image;if(ge!==null)Qe=ge.max.x-ge.min.x,Ve=ge.max.y-ge.min.y,qe=ge.isBox3?ge.max.z-ge.min.z:1,ct=ge.min.x,Rt=ge.min.y,Et=ge.isBox3?ge.min.z:0;else{const An=Math.pow(2,-ce);Qe=Math.floor(sn.width*An),Ve=Math.floor(sn.height*An),L.isDataArrayTexture?qe=sn.depth:L.isData3DTexture?qe=Math.floor(sn.depth*An):qe=1,ct=0,Rt=0,Et=0}le!==null?(ot=le.x,Zt=le.y,dn=le.z):(ot=0,Zt=0,dn=0);const nn=Fe.convert(Q.format),Bn=Fe.convert(Q.type);let je;Q.isData3DTexture?(de.setTexture3D(Q,0),je=Y.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(de.setTexture2DArray(Q,0),je=Y.TEXTURE_2D_ARRAY):(de.setTexture2D(Q,0),je=Y.TEXTURE_2D),A.activeTexture(Y.TEXTURE0),A.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,Q.flipY),A.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),A.pixelStorei(Y.UNPACK_ALIGNMENT,Q.unpackAlignment);const It=A.getParameter(Y.UNPACK_ROW_LENGTH),Ot=A.getParameter(Y.UNPACK_IMAGE_HEIGHT),di=A.getParameter(Y.UNPACK_SKIP_PIXELS),Mi=A.getParameter(Y.UNPACK_SKIP_ROWS),ti=A.getParameter(Y.UNPACK_SKIP_IMAGES);A.pixelStorei(Y.UNPACK_ROW_LENGTH,sn.width),A.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,sn.height),A.pixelStorei(Y.UNPACK_SKIP_PIXELS,ct),A.pixelStorei(Y.UNPACK_SKIP_ROWS,Rt),A.pixelStorei(Y.UNPACK_SKIP_IMAGES,Et);const _r=L.isDataArrayTexture||L.isData3DTexture,Bt=Q.isDataArrayTexture||Q.isData3DTexture;if(L.isDepthTexture){const An=ne.get(L),xr=ne.get(Q),ln=ne.get(An.__renderTarget),ni=ne.get(xr.__renderTarget);A.bindFramebuffer(Y.READ_FRAMEBUFFER,ln.__webglFramebuffer),A.bindFramebuffer(Y.DRAW_FRAMEBUFFER,ni.__webglFramebuffer);for(let ar=0;ar<qe;ar++)_r&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,ne.get(L).__webglTexture,ce,Et+ar),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,ne.get(Q).__webglTexture,Le,dn+ar)),Y.blitFramebuffer(ct,Rt,Qe,Ve,ot,Zt,Qe,Ve,Y.DEPTH_BUFFER_BIT,Y.NEAREST);A.bindFramebuffer(Y.READ_FRAMEBUFFER,null),A.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(ce!==0||L.isRenderTargetTexture||ne.has(L)){const An=ne.get(L),xr=ne.get(Q);A.bindFramebuffer(Y.READ_FRAMEBUFFER,W),A.bindFramebuffer(Y.DRAW_FRAMEBUFFER,ue);for(let ln=0;ln<qe;ln++)_r?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,An.__webglTexture,ce,Et+ln):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,An.__webglTexture,ce),Bt?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,xr.__webglTexture,Le,dn+ln):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,xr.__webglTexture,Le),ce!==0?Y.blitFramebuffer(ct,Rt,Qe,Ve,ot,Zt,Qe,Ve,Y.COLOR_BUFFER_BIT,Y.NEAREST):Bt?Y.copyTexSubImage3D(je,Le,ot,Zt,dn+ln,ct,Rt,Qe,Ve):Y.copyTexSubImage2D(je,Le,ot,Zt,ct,Rt,Qe,Ve);A.bindFramebuffer(Y.READ_FRAMEBUFFER,null),A.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Bt?L.isDataTexture||L.isData3DTexture?Y.texSubImage3D(je,Le,ot,Zt,dn,Qe,Ve,qe,nn,Bn,sn.data):Q.isCompressedArrayTexture?Y.compressedTexSubImage3D(je,Le,ot,Zt,dn,Qe,Ve,qe,nn,sn.data):Y.texSubImage3D(je,Le,ot,Zt,dn,Qe,Ve,qe,nn,Bn,sn):L.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Le,ot,Zt,Qe,Ve,nn,Bn,sn.data):L.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Le,ot,Zt,sn.width,sn.height,nn,sn.data):Y.texSubImage2D(Y.TEXTURE_2D,Le,ot,Zt,Qe,Ve,nn,Bn,sn);A.pixelStorei(Y.UNPACK_ROW_LENGTH,It),A.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Ot),A.pixelStorei(Y.UNPACK_SKIP_PIXELS,di),A.pixelStorei(Y.UNPACK_SKIP_ROWS,Mi),A.pixelStorei(Y.UNPACK_SKIP_IMAGES,ti),Le===0&&Q.generateMipmaps&&Y.generateMipmap(je),A.unbindTexture()},this.initRenderTarget=function(L){ne.get(L).__webglFramebuffer===void 0&&de.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?de.setTextureCube(L,0):L.isData3DTexture?de.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?de.setTexture2DArray(L,0):de.setTexture2D(L,0),A.unbindTexture()},this.resetState=function(){Me=0,_e=0,Te=null,A.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ia}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(e),t.unpackColorSpace=jt._getUnpackColorSpace()}}var zo={},Wc={};var rg;function eS(){if(rg)return Wc;rg=1;var i=og(),e=lg();function t(a){var l="https://react.dev/errors/"+a;if(1<arguments.length){l+="?args[]="+encodeURIComponent(arguments[1]);for(var h=2;h<arguments.length;h++)l+="&args[]="+encodeURIComponent(arguments[h])}return"Minified React error #"+a+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),g=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),E=Symbol.for("react.suspense"),_=Symbol.for("react.suspense_list"),x=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),N=Symbol.for("react.scope"),w=Symbol.for("react.activity"),M=Symbol.for("react.legacy_hidden"),O=Symbol.for("react.memo_cache_sentinel"),k=Symbol.for("react.view_transition"),C=Symbol.for("react.recoverable"),F=Symbol.iterator;function D(a){return a===null||typeof a!="object"?null:(a=F&&a[F]||a["@@iterator"],typeof a=="function"?a:null)}var H=Symbol.for("react.optimistic_key"),y=Array.isArray;function P(a,l){var h=a.length&3,v=a.length-h,T=l;for(l=0;l<v;){var U=a.charCodeAt(l)&255|(a.charCodeAt(++l)&255)<<8|(a.charCodeAt(++l)&255)<<16|(a.charCodeAt(++l)&255)<<24;++l,U=3432918353*(U&65535)+((3432918353*(U>>>16)&65535)<<16)&4294967295,U=U<<15|U>>>17,U=461845907*(U&65535)+((461845907*(U>>>16)&65535)<<16)&4294967295,T^=U,T=T<<13|T>>>19,T=5*(T&65535)+((5*(T>>>16)&65535)<<16)&4294967295,T=(T&65535)+27492+(((T>>>16)+58964&65535)<<16)}switch(U=0,h){case 3:U^=(a.charCodeAt(l+2)&255)<<16;case 2:U^=(a.charCodeAt(l+1)&255)<<8;case 1:U^=a.charCodeAt(l)&255,U=3432918353*(U&65535)+((3432918353*(U>>>16)&65535)<<16)&4294967295,U=U<<15|U>>>17,T^=461845907*(U&65535)+((461845907*(U>>>16)&65535)<<16)&4294967295}return T^=a.length,T^=T>>>16,T=2246822507*(T&65535)+((2246822507*(T>>>16)&65535)<<16)&4294967295,T^=T>>>13,T=3266489909*(T&65535)+((3266489909*(T>>>16)&65535)<<16)&4294967295,(T^T>>>16)>>>0}var z=Object.assign,G=Object.prototype.hasOwnProperty,q=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ae={},W={};function ue(a){return G.call(W,a)?!0:G.call(ae,a)?!1:q.test(a)?W[a]=!0:(ae[a]=!0,!1)}var Me=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")),_e=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Te=/["'&<>]/;function ie(a){if(typeof a=="boolean"||typeof a=="number"||typeof a=="bigint")return""+a;a=""+a;var l=Te.exec(a);if(l){var h="",v,T=0;for(v=l.index;v<a.length;v++){switch(a.charCodeAt(v)){case 34:l="&quot;";break;case 38:l="&amp;";break;case 39:l="&#x27;";break;case 60:l="&lt;";break;case 62:l="&gt;";break;default:continue}T!==v&&(h+=a.slice(T,v)),T=v+1,h+=l}a=T!==v?h+a.slice(T,v):h}return a}var V=/([A-Z])/g,xe=/^ms-/,at=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function tt(a){return at.test(""+a)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":a}var we=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe=e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Qt={pending:!1,data:null,method:null,action:null},ve=oe.d;oe.d={f:ve.f,r:ve.r,D:bn,C:Oa,L:hi,m:Ko,X:Q,S:L,M:ge};var me=[],ke=null,ft=/(<\/|<)(s)(cript)/gi;function Xe(a,l,h,v){return""+l+(h==="s"?"\\u0073":"\\u0053")+v}function St(a,l,h,v,T){return{idPrefix:a===void 0?"":a,nextFormID:0,streamingFormat:0,bootstrapScriptContent:h,bootstrapScripts:v,bootstrapModules:T,instructions:0,hasBody:!1,hasHtml:!1,unknownResources:{},dnsResources:{},connectResources:{default:{},anonymous:{},credentials:{}},imageResources:{},styleResources:{},scriptResources:{},moduleUnknownResources:{},moduleScriptResources:{}}}function Nt(a,l,h,v){return{insertionMode:a,selectedValue:l,tagScope:h,viewTransition:v}}function wt(a,l,h){var v=a.tagScope&-25;switch(l){case"noscript":return Nt(2,null,v|1,null);case"select":return Nt(2,h.value!=null?h.value:h.defaultValue,v,null);case"svg":return Nt(4,null,v,null);case"picture":return Nt(2,null,v|2,null);case"math":return Nt(5,null,v,null);case"foreignObject":return Nt(2,null,v,null);case"table":return Nt(6,null,v,null);case"thead":case"tbody":case"tfoot":return Nt(7,null,v,null);case"colgroup":return Nt(9,null,v,null);case"tr":return Nt(8,null,v,null);case"head":if(2>a.insertionMode)return Nt(3,null,v,null);break;case"html":if(a.insertionMode===0)return Nt(1,null,v,null)}return 6<=a.insertionMode||2>a.insertionMode?Nt(2,null,v,null):a.viewTransition!==null||a.tagScope!==v?Nt(a.insertionMode,a.selectedValue,v,null):a}function Ut(a){return a===null?null:{update:a.update,enter:"none",exit:"none",share:a.update,parentEnter:"none",parentExit:"none",name:a.autoName,autoName:a.autoName,nameIdx:0}}function Ye(a,l){return l.tagScope&32&&(a.instructions|=128),Nt(l.insertionMode,l.selectedValue,l.tagScope|12,Ut(l.viewTransition))}function bt(a,l){a=Ut(l.viewTransition);var h=l.tagScope|16;return a!==null&&a.share!=="none"&&(h|=64),Nt(l.insertionMode,l.selectedValue,h,a)}function Jt(a,l,h){return a="_"+a.idPrefix+"R_"+l,0<h&&(a+="H"+h.toString(32)),a+"_"}function Vt(a,l){l=l.viewTransition,l!==null&&(l.name!=="auto"&&(Y(a,"vt-name",l.nameIdx===0?l.name:l.name+"_"+l.nameIdx),l.nameIdx++),Y(a,"vt-update",l.update),l.enter!=="none"&&Y(a,"vt-enter",l.enter),l.exit!=="none"&&Y(a,"vt-exit",l.exit),l.share!=="none"&&Y(a,"vt-share",l.share))}var Sn=new Map;function Wt(a,l){if(typeof l!="object")throw Error(t(62));var h=!0,v;for(v in l)if(G.call(l,v)){var T=l[v];if(T!=null&&typeof T!="boolean"&&T!==""){if(v.indexOf("--")===0){var U=ie(v);T=ie((""+T).trim())}else U=Sn.get(v),U===void 0&&(U=ie(v.replace(V,"-$1").toLowerCase().replace(xe,"-ms-")),Sn.set(v,U)),T=typeof T=="number"?T===0||Me.has(v)?""+T:T+"px":ie((""+T).trim());h?(h=!1,a.push(' style="',U,":",T)):a.push(";",U,":",T)}}h||a.push('"')}function fn(a,l,h){h&&typeof h!="function"&&typeof h!="symbol"&&a.push(" ",l,'=""')}function Y(a,l,h){typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&a.push(" ",l,'="',ie(h),'"')}var en=ie("javascript:throw new Error('React form unexpectedly submitted.')");function dt(a,l){this.push('<input type="hidden"'),B(a),Y(this,"name",l),Y(this,"value",a),this.push("/>")}function B(a){if(typeof a!="string")throw Error(t(480))}function A(a,l){if(typeof l.$$FORM_ACTION=="function"){var h=a.nextFormID++;a=a.idPrefix+h;try{var v=l.$$FORM_ACTION(a);if(v){var T=v.data;T?.forEach(B)}return v}catch(U){if(typeof U=="object"&&U!==null&&typeof U.then=="function")throw U}}return null}function te(a,l,h,v,T,U,$,he){var re=null;if(typeof v=="function"){var se=A(l,v);se!==null?(he=se.name,v=se.action||"",T=se.encType,U=se.method,$=se.target,re=se.data):(a.push(" ","formAction",'="',en,'"'),$=U=T=v=he=null,Ue(l,h))}return he!=null&&ne(a,"name",he),v!=null&&ne(a,"formAction",v),T!=null&&ne(a,"formEncType",T),U!=null&&ne(a,"formMethod",U),$!=null&&ne(a,"formTarget",$),re}function ne(a,l,h){switch(l){case"className":Y(a,"class",h);break;case"tabIndex":Y(a,"tabindex",h);break;case"dir":case"role":case"viewBox":case"width":case"height":Y(a,l,h);break;case"style":Wt(a,h);break;case"src":case"href":if(h==="")break;case"action":case"formAction":if(h==null||typeof h=="function"||typeof h=="symbol"||typeof h=="boolean")break;h=tt(""+h),a.push(" ",l,'="',ie(h),'"');break;case"defaultValue":case"defaultChecked":case"innerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":case"ref":break;case"autoFocus":case"multiple":case"muted":fn(a,l.toLowerCase(),h);break;case"xlinkHref":if(typeof h=="function"||typeof h=="symbol"||typeof h=="boolean")break;h=tt(""+h),a.push(" ","xlink:href",'="',ie(h),'"');break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":typeof h!="function"&&typeof h!="symbol"&&a.push(" ",l,'="',ie(h),'"');break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":h&&typeof h!="function"&&typeof h!="symbol"&&a.push(" ",l,'=""');break;case"capture":case"download":h===!0?a.push(" ",l,'=""'):h!==!1&&typeof h!="function"&&typeof h!="symbol"&&a.push(" ",l,'="',ie(h),'"');break;case"cols":case"rows":case"size":case"span":typeof h!="function"&&typeof h!="symbol"&&!isNaN(h)&&1<=h&&a.push(" ",l,'="',ie(h),'"');break;case"rowSpan":case"start":typeof h=="function"||typeof h=="symbol"||isNaN(h)||a.push(" ",l,'="',ie(h),'"');break;case"xlinkActuate":Y(a,"xlink:actuate",h);break;case"xlinkArcrole":Y(a,"xlink:arcrole",h);break;case"xlinkRole":Y(a,"xlink:role",h);break;case"xlinkShow":Y(a,"xlink:show",h);break;case"xlinkTitle":Y(a,"xlink:title",h);break;case"xlinkType":Y(a,"xlink:type",h);break;case"xmlBase":Y(a,"xml:base",h);break;case"xmlLang":Y(a,"xml:lang",h);break;case"xmlSpace":Y(a,"xml:space",h);break;default:if((!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=_e.get(l)||l,ue(l))){switch(typeof h){case"function":case"symbol":return;case"boolean":var v=l.toLowerCase().slice(0,5);if(v!=="data-"&&v!=="aria-")return}a.push(" ",l,'="',ie(h),'"')}}}function de(a,l,h){if(l!=null){if(h!=null)throw Error(t(60));if(typeof l!="object"||!("__html"in l))throw Error(t(61));l=l.__html,l!=null&&a.push(""+l)}}function De(a){var l="";return i.Children.forEach(a,function(h){h!=null&&(l+=h)}),l}function Ue(a,l){if((a.instructions&16)===0){a.instructions|=16;var h=l.preamble,v=l.bootstrapChunks;(h.htmlChunks||h.headChunks)&&v.length===0?(v.push(l.startInlineScript),Kn(v,a),v.push(">",`addEventListener("submit",function(a){if(!a.defaultPrevented){var b=a.target,d=a.submitter,c=b.action,e=d;if(d){var f=d.getAttribute("formAction");null!=f&&(c=f,e=null)}"javascript:throw new Error('React form unexpectedly submitted.')"===c&&(a.preventDefault(),a=new FormData(b,e),c=b.ownerDocument||b,(c.$$reactFormReplay=c.$$reactFormReplay||[]).push(b,d,a))}});`,"<\/script>")):v.unshift(l.startInlineScript,">",`addEventListener("submit",function(a){if(!a.defaultPrevented){var b=a.target,d=a.submitter,c=b.action,e=d;if(d){var f=d.getAttribute("formAction");null!=f&&(c=f,e=null)}"javascript:throw new Error('React form unexpectedly submitted.')"===c&&(a.preventDefault(),a=new FormData(b,e),c=b.ownerDocument||b,(c.$$reactFormReplay=c.$$reactFormReplay||[]).push(b,d,a))}});`,"<\/script>")}}function pe(a,l){a.push(Ee("link"));for(var h in l)if(G.call(l,h)){var v=l[h];if(v!=null)switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(t(399,"link"));default:ne(a,h,v)}}return a.push("/>"),null}var be=/(<\/|<)(s)(tyle)/gi;function Be(a,l,h,v){return""+l+(h==="s"?"\\73 ":"\\53 ")+v}function nt(a,l,h,v){a.push(Ee(h));for(var T in l)if(G.call(l,T)){var U=l[T];if(U!=null)switch(T){case"children":case"dangerouslySetInnerHTML":throw Error(t(399,h));default:ne(a,T,U)}}return Vt(a,v),a.push("/>"),null}function ze(a,l){a.push(Ee("title"));var h=null,v=null,T;for(T in l)if(G.call(l,T)){var U=l[T];if(U!=null)switch(T){case"children":h=U;break;case"dangerouslySetInnerHTML":v=U;break;default:ne(a,T,U)}}return a.push(">"),l=Array.isArray(h)?2>h.length?h[0]:null:h,typeof l!="function"&&typeof l!="symbol"&&l!==null&&l!==void 0&&a.push(ie(""+l)),de(a,v,h),a.push(Oe("title")),null}function Ne(a,l){a.push(Ee("script"));var h=null,v=null,T;for(T in l)if(G.call(l,T)){var U=l[T];if(U!=null)switch(T){case"children":h=U;break;case"dangerouslySetInnerHTML":v=U;break;default:ne(a,T,U)}}return a.push(">"),de(a,v,h),typeof h=="string"&&a.push((""+h).replace(ft,Xe)),a.push(Oe("script")),null}function lt(a,l,h,v){a.push(Ee(h));var T=h=null,U;for(U in l)if(G.call(l,U)){var $=l[U];if($!=null)switch(U){case"children":h=$;break;case"dangerouslySetInnerHTML":T=$;break;default:ne(a,U,$)}}return Vt(a,v),a.push(">"),de(a,T,h),h}function st(a,l,h,v){a.push(Ee(h));var T=h=null,U;for(U in l)if(G.call(l,U)){var $=l[U];if($!=null)switch(U){case"children":h=$;break;case"dangerouslySetInnerHTML":T=$;break;default:ne(a,U,$)}}return Vt(a,v),a.push(">"),de(a,T,h),typeof h=="string"?(a.push(ie(h)),null):h}var vt=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,J=new Map;function Ee(a){var l=J.get(a);if(l===void 0){if(!vt.test(a))throw Error(t(65,a));l="<"+a,J.set(a,l)}return l}function ye(a,l,h,v,T,U,$,he,re){switch(l){case"div":case"span":case"svg":case"path":break;case"a":a.push(Ee("a"));var se=null,Pe=null,Ie;for(Ie in h)if(G.call(h,Ie)){var Je=h[Ie];if(Je!=null)switch(Ie){case"children":se=Je;break;case"dangerouslySetInnerHTML":Pe=Je;break;case"href":Je===""?Y(a,"href",""):ne(a,Ie,Je);break;default:ne(a,Ie,Je)}}if(Vt(a,he),a.push(">"),de(a,Pe,se),typeof se=="string"){a.push(ie(se));var Ze=null}else Ze=se;return Ze;case"g":case"p":case"li":break;case"select":a.push(Ee("select"));var $e=null,gt=null,on;for(on in h)if(G.call(h,on)){var Kt=h[on];if(Kt!=null)switch(on){case"children":$e=Kt;break;case"dangerouslySetInnerHTML":gt=Kt;break;case"defaultValue":case"value":break;default:ne(a,on,Kt)}}return Vt(a,he),a.push(">"),de(a,gt,$e),$e;case"option":var pn=he.selectedValue;a.push(Ee("option"));var In=null,_t=null,Dt=null,qt=null,cn;for(cn in h)if(G.call(h,cn)){var ri=h[cn];if(ri!=null)switch(cn){case"children":In=ri;break;case"selected":Dt=ri;break;case"dangerouslySetInnerHTML":qt=ri;break;case"value":_t=ri;default:ne(a,cn,ri)}}if(pn!=null){var zt=_t!==null?""+_t:De(In);if(y(pn)){for(var En=0;En<pn.length;En++)if(""+pn[En]===zt){a.push(' selected=""');break}}else""+pn===zt&&a.push(' selected=""')}else Dt&&a.push(' selected=""');return a.push(">"),de(a,qt,In),In;case"textarea":a.push(Ee("textarea"));var yn=null,Zn=null,gn=null,ui;for(ui in h)if(G.call(h,ui)){var vn=h[ui];if(vn!=null)switch(ui){case"children":gn=vn;break;case"value":yn=vn;break;case"defaultValue":Zn=vn;break;case"dangerouslySetInnerHTML":throw Error(t(91));default:ne(a,ui,vn)}}if(yn===null&&Zn!==null&&(yn=Zn),Vt(a,he),a.push(">"),gn!=null){if(yn!=null)throw Error(t(92));if(y(gn)){if(1<gn.length)throw Error(t(93));yn=""+gn[0]}yn=""+gn}return typeof yn=="string"&&yn[0]===`
`&&a.push(`
`),yn!==null&&a.push(ie(""+yn)),null;case"input":a.push(Ee("input"));var or=null,kn=null,Gn=null,zr=null,Rn=null,Si=null,Qn=null,Ui=null,Yi=null,yr;for(yr in h)if(G.call(h,yr)){var Cn=h[yr];if(Cn!=null)switch(yr){case"children":case"dangerouslySetInnerHTML":throw Error(t(399,"input"));case"name":or=Cn;break;case"formAction":kn=Cn;break;case"formEncType":Gn=Cn;break;case"formMethod":zr=Cn;break;case"formTarget":Rn=Cn;break;case"defaultChecked":Yi=Cn;break;case"defaultValue":Qn=Cn;break;case"checked":Ui=Cn;break;case"value":Si=Cn;break;default:ne(a,yr,Cn)}}var kr=te(a,v,T,kn,Gn,zr,Rn,or);return Ui!==null?fn(a,"checked",Ui):Yi!==null&&fn(a,"checked",Yi),Si!==null?ne(a,"value",Si):Qn!==null&&ne(a,"value",Qn),Vt(a,he),a.push("/>"),kr?.forEach(dt,a),null;case"button":a.push(Ee("button"));var Xa=null,lr=null,Hr=null,lo=null,Ya=null,Gr=null,_l=null,Zi;for(Zi in h)if(G.call(h,Zi)){var ai=h[Zi];if(ai!=null)switch(Zi){case"children":Xa=ai;break;case"dangerouslySetInnerHTML":lr=ai;break;case"name":Hr=ai;break;case"formAction":lo=ai;break;case"formEncType":Ya=ai;break;case"formMethod":Gr=ai;break;case"formTarget":_l=ai;break;default:ne(a,Zi,ai)}}var Sr=te(a,v,T,lo,Ya,Gr,_l,Hr);if(Vt(a,he),a.push(">"),Sr?.forEach(dt,a),de(a,lr,Xa),typeof Xa=="string"){a.push(ie(Xa));var Za=null}else Za=Xa;return Za;case"form":a.push(Ee("form"));var br=null,co=null,Ji=null,Fi=null,Ja=null,Vr=null,ha;for(ha in h)if(G.call(h,ha)){var Er=h[ha];if(Er!=null)switch(ha){case"children":br=Er;break;case"dangerouslySetInnerHTML":co=Er;break;case"action":Ji=Er;break;case"encType":Fi=Er;break;case"method":Ja=Er;break;case"target":Vr=Er;break;default:ne(a,ha,Er)}}var Ka=null,da=null;if(typeof Ji=="function"){var rn=A(v,Ji);rn!==null?(Ji=rn.action||"",Fi=rn.encType,Ja=rn.method,Vr=rn.target,Ka=rn.data,da=rn.name):(a.push(" ","action",'="',en,'"'),Vr=Ja=Fi=Ji=null,Ue(v,T))}if(Ji!=null&&ne(a,"action",Ji),Fi!=null&&ne(a,"encType",Fi),Ja!=null&&ne(a,"method",Ja),Vr!=null&&ne(a,"target",Vr),Vt(a,he),a.push(">"),da!==null&&(a.push('<input type="hidden"'),Y(a,"name",da),a.push("/>"),Ka?.forEach(dt,a)),de(a,co,br),typeof br=="string"){a.push(ie(br));var pa=null}else pa=br;return pa;case"menuitem":a.push(Ee("menuitem"));for(var Wr in h)if(G.call(h,Wr)){var ga=h[Wr];if(ga!=null)switch(Wr){case"children":case"dangerouslySetInnerHTML":throw Error(t(400));default:ne(a,Wr,ga)}}return Vt(a,he),a.push(">"),null;case"object":a.push(Ee("object"));var Oi=null,Ki=null,bi;for(bi in h)if(G.call(h,bi)){var Tr=h[bi];if(Tr!=null)switch(bi){case"children":Oi=Tr;break;case"dangerouslySetInnerHTML":Ki=Tr;break;case"data":var $t=tt(""+Tr);if($t==="")break;a.push(" ","data",'="',ie($t),'"');break;default:ne(a,bi,Tr)}}if(Vt(a,he),a.push(">"),de(a,Ki,Oi),typeof Oi=="string"){a.push(ie(Oi));var mn=null}else mn=Oi;return mn;case"title":var qn=he.tagScope&1,Vn=he.tagScope&4;if(he.insertionMode===4||qn||h.itemProp!=null)var ma=ze(a,h);else Vn?ma=null:(ze(T.hoistableChunks,h),ma=void 0);return ma;case"link":var va=he.tagScope&1,_a=he.tagScope&4,uo=h.rel,Qi=h.href,Qa=h.precedence;if(he.insertionMode===4||va||h.itemProp!=null||typeof uo!="string"||typeof Qi!="string"||Qi===""){pe(a,h);var wr=null}else if(h.rel==="stylesheet")if(typeof Qa!="string"||h.disabled!=null||h.onLoad||h.onError)wr=pe(a,h);else{var qi=T.styles.get(Qa),Wn=v.styleResources.hasOwnProperty(Qi)?v.styleResources[Qi]:void 0;if(Wn!==null){v.styleResources[Qi]=null,qi||(qi={precedence:ie(Qa),rules:[],hrefs:[],sheets:new Map},T.styles.set(Qa,qi));var Ar={state:0,props:z({},h,{"data-precedence":h.precedence,precedence:null})};if(Wn){Wn.length===2&&le(Ar.props,Wn);var qa=T.preloads.stylesheets.get(Qi);qa&&0<qa.length?qa.length=0:Ar.state=1}qi.sheets.set(Qi,Ar),$&&$.stylesheets.add(Ar)}else if(qi){var fo=qi.sheets.get(Qi);fo&&$&&$.stylesheets.add(fo)}re&&a.push("<!-- -->"),wr=null}else h.onLoad||h.onError?wr=pe(a,h):(re&&a.push("<!-- -->"),wr=_a?null:pe(T.hoistableChunks,h));return wr;case"script":var xl=he.tagScope&1,xa=h.async;if(typeof h.src!="string"||!h.src||!xa||typeof xa=="function"||typeof xa=="symbol"||h.onLoad||h.onError||he.insertionMode===4||xl||h.itemProp!=null)var ho=Ne(a,h);else{var Xr=h.src;if(h.type==="module")var Tn=v.moduleScriptResources,ja=T.preloads.moduleScripts;else Tn=v.scriptResources,ja=T.preloads.scripts;var Rr=Tn.hasOwnProperty(Xr)?Tn[Xr]:void 0;if(Rr!==null){Tn[Xr]=null;var Ma=h;if(Rr){Rr.length===2&&(Ma=z({},h),le(Ma,Rr));var Cr=ja.get(Xr);Cr&&(Cr.length=0)}var ws=[];T.scripts.add(ws),Ne(ws,Ma)}re&&a.push("<!-- -->"),ho=null}return ho;case"style":var po=he.tagScope&1,Yr=h.precedence,Ei=h.href,As=h.nonce;if(he.insertionMode===4||po||h.itemProp!=null||typeof Yr!="string"||typeof Ei!="string"||Ei===""){a.push(Ee("style"));var ji=null,Ml=null,$a;for($a in h)if(G.call(h,$a)){var go=h[$a];if(go!=null)switch($a){case"children":ji=go;break;case"dangerouslySetInnerHTML":Ml=go;break;default:ne(a,$a,go)}}a.push(">");var Zr=Array.isArray(ji)?2>ji.length?ji[0]:null:ji;typeof Zr!="function"&&typeof Zr!="symbol"&&Zr!==null&&Zr!==void 0&&a.push((""+Zr).replace(be,Be)),de(a,Ml,ji),a.push(Oe("style"));var mo=null}else{var cr=T.styles.get(Yr);if((v.styleResources.hasOwnProperty(Ei)?v.styleResources[Ei]:void 0)!==null){v.styleResources[Ei]=null,cr||(cr={precedence:ie(Yr),rules:[],hrefs:[],sheets:new Map},T.styles.set(Yr,cr));var Rs=T.nonce.style;if(!Rs||Rs===As){cr.hrefs.push(ie(Ei));var yl=cr.rules,es=null,Rc=null,ts;for(ts in h)if(G.call(h,ts)){var vo=h[ts];if(vo!=null)switch(ts){case"children":es=vo;break;case"dangerouslySetInnerHTML":Rc=vo}}var ya=Array.isArray(es)?2>es.length?es[0]:null:es;typeof ya!="function"&&typeof ya!="symbol"&&ya!==null&&ya!==void 0&&yl.push((""+ya).replace(be,Be)),de(yl,Rc,es)}}cr&&$&&$.styles.add(cr),re&&a.push("<!-- -->"),mo=void 0}return mo;case"meta":var Sl=he.tagScope&1,ns=he.tagScope&4;if(he.insertionMode===4||Sl||h.itemProp!=null)var _o=nt(a,h,"meta",he);else re&&a.push("<!-- -->"),_o=ns?null:typeof h.charSet=="string"?nt(T.charsetChunks,h,"meta",he):h.name==="viewport"?nt(T.viewportChunks,h,"meta",he):nt(T.hoistableChunks,h,"meta",he);return _o;case"listing":case"pre":a.push(Ee(l));var xo=null,is=null,Sa;for(Sa in h)if(G.call(h,Sa)){var Jr=h[Sa];if(Jr!=null)switch(Sa){case"children":xo=Jr;break;case"dangerouslySetInnerHTML":is=Jr;break;default:ne(a,Sa,Jr)}}if(Vt(a,he),a.push(">"),is!=null){if(xo!=null)throw Error(t(60));if(typeof is!="object"||!("__html"in is))throw Error(t(61));var Pr=is.__html;Pr!=null&&(typeof Pr=="string"&&0<Pr.length&&Pr[0]===`
`?a.push(`
`,Pr):a.push(""+Pr))}return typeof xo=="string"&&xo[0]===`
`&&a.push(`
`),xo;case"img":var wu=he.tagScope&3,si=h.src,r=h.srcSet;if(!(h.loading==="lazy"||!si&&!r||typeof si!="string"&&si!=null||typeof r!="string"&&r!=null||h.fetchPriority==="low"||wu)&&(typeof si!="string"||si[4]!==":"||si[0]!=="d"&&si[0]!=="D"||si[1]!=="a"&&si[1]!=="A"||si[2]!=="t"&&si[2]!=="T"||si[3]!=="a"&&si[3]!=="A")&&(typeof r!="string"||r[4]!==":"||r[0]!=="d"&&r[0]!=="D"||r[1]!=="a"&&r[1]!=="A"||r[2]!=="t"&&r[2]!=="T"||r[3]!=="a"&&r[3]!=="A")){$!==null&&he.tagScope&64&&($.suspenseyImages=!0);var s=typeof h.sizes=="string"?h.sizes:void 0,f=r?r+`
`+(s||""):si,m=T.preloads.images,b=m.get(f);if(b)(h.fetchPriority==="high"||10>T.highImagePreloads.size)&&(m.delete(f),T.highImagePreloads.add(b));else if(!v.imageResources.hasOwnProperty(f)){v.imageResources[f]=me;var I=h.crossOrigin,X=typeof I=="string"?I==="use-credentials"?I:"":void 0,Z=T.headers,j;Z&&0<Z.remainingCapacity&&typeof h.srcSet!="string"&&(h.fetchPriority==="high"||500>Z.highImagePreloads.length)&&(j=ce(si,"image",{imageSrcSet:h.srcSet,imageSizes:h.sizes,crossOrigin:X,integrity:h.integrity,nonce:h.nonce,type:h.type,fetchPriority:h.fetchPriority,referrerPolicy:h.referrerPolicy}),0<=(Z.remainingCapacity-=j.length+2))?(T.resets.image[f]=me,Z.highImagePreloads&&(Z.highImagePreloads+=", "),Z.highImagePreloads+=j):(b=[],pe(b,{rel:"preload",as:"image",href:r?void 0:si,imageSrcSet:r,imageSizes:s,crossOrigin:X,integrity:h.integrity,type:h.type,fetchPriority:h.fetchPriority,referrerPolicy:h.referrerPolicy}),h.fetchPriority==="high"||10>T.highImagePreloads.size?T.highImagePreloads.add(b):(T.bulkPreloads.add(b),m.set(f,b)))}}return nt(a,h,"img",he);case"base":case"area":case"br":case"col":case"embed":case"hr":case"keygen":case"param":case"source":case"track":case"wbr":return nt(a,h,l,he);case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":break;case"head":if(2>he.insertionMode){var ee=U||T.preamble;if(ee.headChunks)throw Error(t(545,"`<head>`"));U!==null&&a.push("<!--head-->"),ee.headChunks=[];var Se=lt(ee.headChunks,h,"head",he)}else Se=st(a,h,"head",he);return Se;case"body":if(2>he.insertionMode){var Re=U||T.preamble;if(Re.bodyChunks)throw Error(t(545,"`<body>`"));U!==null&&a.push("<!--body-->"),Re.bodyChunks=[];var He=lt(Re.bodyChunks,h,"body",he)}else He=st(a,h,"body",he);return He;case"html":if(he.insertionMode===0){var We=U||T.preamble;if(We.htmlChunks)throw Error(t(545,"`<html>`"));U!==null&&a.push("<!--html-->"),We.htmlChunks=[""];var et=lt(We.htmlChunks,h,"html",he)}else et=st(a,h,"html",he);return et;default:if(l.indexOf("-")!==-1){a.push(Ee(l));var Tt=null,Dn=null,jn;for(jn in h)if(G.call(h,jn)){var un=h[jn];if(un!=null){var Ti=jn;switch(jn){case"children":Tt=un;break;case"dangerouslySetInnerHTML":Dn=un;break;case"style":Wt(a,un);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"ref":break;case"className":Ti="class";default:if(ue(jn)&&typeof un!="function"&&typeof un!="symbol"&&un!==!1){if(un===!0)un="";else if(typeof un=="object")continue;a.push(" ",Ti,'="',ie(un),'"')}}}}return Vt(a,he),a.push(">"),de(a,Dn,Tt),Tt}}return st(a,h,l,he)}var Fe=new Map;function Oe(a){var l=Fe.get(a);return l===void 0&&(l="</"+a+">",Fe.set(a,l)),l}function Ae(a,l){a=a.preamble,a.htmlChunks===null&&l.htmlChunks&&(a.htmlChunks=l.htmlChunks),a.headChunks===null&&l.headChunks&&(a.headChunks=l.headChunks),a.bodyChunks===null&&l.bodyChunks&&(a.bodyChunks=l.bodyChunks)}function rt(a,l){l=l.bootstrapChunks;for(var h=0;h<l.length-1;h++)a.push(l[h]);return h<l.length?(h=l[h],l.length=0,a.push(h)):!0}function it(a,l,h){if(a.push('<!--$?--><template id="'),h===null)throw Error(t(395));return a.push(l.boundaryPrefix),l=h.toString(16),a.push(l),a.push('"></template>')}function Lt(a,l,h,v){switch(h.insertionMode){case 0:case 1:case 3:case 2:return a.push('<div hidden id="'),a.push(l.segmentPrefix),l=v.toString(16),a.push(l),a.push('">');case 4:return a.push('<svg aria-hidden="true" style="display:none" id="'),a.push(l.segmentPrefix),l=v.toString(16),a.push(l),a.push('">');case 5:return a.push('<math aria-hidden="true" style="display:none" id="'),a.push(l.segmentPrefix),l=v.toString(16),a.push(l),a.push('">');case 6:return a.push('<table hidden id="'),a.push(l.segmentPrefix),l=v.toString(16),a.push(l),a.push('">');case 7:return a.push('<table hidden><tbody id="'),a.push(l.segmentPrefix),l=v.toString(16),a.push(l),a.push('">');case 8:return a.push('<table hidden><tr id="'),a.push(l.segmentPrefix),l=v.toString(16),a.push(l),a.push('">');case 9:return a.push('<table hidden><colgroup id="'),a.push(l.segmentPrefix),l=v.toString(16),a.push(l),a.push('">');default:throw Error(t(397))}}function Xt(a,l){switch(l.insertionMode){case 0:case 1:case 3:case 2:return a.push("</div>");case 4:return a.push("</svg>");case 5:return a.push("</math>");case 6:return a.push("</table>");case 7:return a.push("</tbody></table>");case 8:return a.push("</tr></table>");case 9:return a.push("</colgroup></table>");default:throw Error(t(397))}}var hn=/[<\u2028\u2029]/g;function ci(a){return JSON.stringify(a).replace(hn,function(l){switch(l){case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}var Ce=/[&><\u2028\u2029]/g;function Ge(a){return JSON.stringify(a).replace(Ce,function(l){switch(l){case"&":return"\\u0026";case">":return"\\u003e";case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}var ht=!1,At=!0;function yt(a){var l=a.rules,h=a.hrefs,v=0;if(h.length){for(this.push(ke.startInlineStyle),this.push(' media="not all" data-precedence="'),this.push(a.precedence),this.push('" data-href="');v<h.length-1;v++)this.push(h[v]),this.push(" ");for(this.push(h[v]),this.push('">'),v=0;v<l.length;v++)this.push(l[v]);At=this.push("</style>"),ht=!0,l.length=0,h.length=0}}function Ft(a){return a.state!==2?ht=!0:!1}function mt(a,l,h){return ht=!1,At=!0,ke=h,l.styles.forEach(yt,a),ke=null,l.stylesheets.forEach(Ft),ht&&(h.stylesToHoist=!0),At}function pt(a){for(var l=0;l<a.length;l++)this.push(a[l]);a.length=0}var tn=[];function Ht(a){pe(tn,a.props);for(var l=0;l<tn.length;l++)this.push(tn[l]);tn.length=0,a.state=2}function gr(a){var l=0<a.sheets.size;a.sheets.forEach(Ht,this),a.sheets.clear();var h=a.rules,v=a.hrefs;if(!l||v.length){if(this.push(ke.startInlineStyle),this.push(' data-precedence="'),this.push(a.precedence),a=0,v.length){for(this.push('" data-href="');a<v.length-1;a++)this.push(v[a]),this.push(" ");this.push(v[a])}for(this.push('">'),a=0;a<h.length;a++)this.push(h[a]);this.push("</style>"),h.length=0,v.length=0}}function mr(a){if(a.state===0){a.state=1;var l=a.props;for(pe(tn,{rel:"preload",as:"style",href:a.props.href,crossOrigin:l.crossOrigin,fetchPriority:l.fetchPriority,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy}),a=0;a<tn.length;a++)this.push(tn[a]);tn.length=0}}function vr(a){a.sheets.forEach(mr,this),a.sheets.clear()}function Kn(a,l){(l.instructions&32)===0&&(l.instructions|=32,a.push(' id="',ie("_"+l.idPrefix+"R_"),'"'))}function sa(a,l){a.push("[");var h="[";l.stylesheets.forEach(function(v){if(v.state!==2)if(v.state===3)a.push(h),v=Ge(""+v.props.href),a.push(v),a.push("]"),h=",[";else{a.push(h);var T=v.props["data-precedence"],U=v.props,$=tt(""+v.props.href);$=Ge($),a.push($),T=""+T,a.push(","),T=Ge(T),a.push(T);for(var he in U)if(G.call(U,he)&&(T=U[he],T!=null))switch(he){case"href":case"rel":case"precedence":case"data-precedence":break;case"children":case"dangerouslySetInnerHTML":throw Error(t(399,"link"));default:oa(a,he,T)}a.push("]"),h=",[",v.state=3}}),a.push("]")}function oa(a,l,h){var v=l.toLowerCase();switch(typeof h){case"function":case"symbol":return}switch(l){case"innerHTML":case"dangerouslySetInnerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":case"style":case"ref":return;case"className":v="class",l=""+h;break;case"hidden":if(h===!1)return;l="";break;case"src":case"href":h=tt(h),l=""+h;break;default:if(2<l.length&&(l[0]==="o"||l[0]==="O")&&(l[1]==="n"||l[1]==="N")||!ue(l))return;l=""+h}a.push(","),v=Ge(v),a.push(v),a.push(","),v=Ge(l),a.push(v)}function Yt(){return{styles:new Set,stylesheets:new Set,suspenseyImages:!1}}function bn(a){var l=zn||null;if(l){var h=l.resumableState,v=l.renderState;if(typeof a=="string"&&a){if(!h.dnsResources.hasOwnProperty(a)){h.dnsResources[a]=null,h=v.headers;var T,U;(U=h&&0<h.remainingCapacity)&&(U=(T="<"+(""+a).replace(Le,Qe)+">; rel=dns-prefetch",0<=(h.remainingCapacity-=T.length+2))),U?(v.resets.dns[a]=null,h.preconnects&&(h.preconnects+=", "),h.preconnects+=T):(T=[],pe(T,{href:a,rel:"dns-prefetch"}),v.preconnects.add(T))}fa(l)}}else ve.D(a)}function Oa(a,l){var h=zn||null;if(h){var v=h.resumableState,T=h.renderState;if(typeof a=="string"&&a){var U=l==="use-credentials"?"credentials":typeof l=="string"?"anonymous":"default";if(!v.connectResources[U].hasOwnProperty(a)){v.connectResources[U][a]=null,v=T.headers;var $,he;if(he=v&&0<v.remainingCapacity){if(he="<"+(""+a).replace(Le,Qe)+">; rel=preconnect",typeof l=="string"){var re=(""+l).replace(Ve,qe);he+='; crossorigin="'+re+'"'}he=($=he,0<=(v.remainingCapacity-=$.length+2))}he?(T.resets.connect[U][a]=null,v.preconnects&&(v.preconnects+=", "),v.preconnects+=$):(U=[],pe(U,{rel:"preconnect",href:a,crossOrigin:l}),T.preconnects.add(U))}fa(h)}}else ve.C(a,l)}function hi(a,l,h){var v=zn||null;if(v){var T=v.resumableState,U=v.renderState;if(l&&a){switch(l){case"image":if(h)var $=h.imageSrcSet,he=h.imageSizes,re=h.fetchPriority;var se=$?$+`
`+(he||""):a;if(T.imageResources.hasOwnProperty(se))return;T.imageResources[se]=me,T=U.headers;var Pe;T&&0<T.remainingCapacity&&typeof $!="string"&&re==="high"&&(Pe=ce(a,l,h),0<=(T.remainingCapacity-=Pe.length+2))?(U.resets.image[se]=me,T.highImagePreloads&&(T.highImagePreloads+=", "),T.highImagePreloads+=Pe):(T=[],pe(T,z({rel:"preload",href:$?void 0:a,as:l},h)),re==="high"?U.highImagePreloads.add(T):(U.bulkPreloads.add(T),U.preloads.images.set(se,T)));break;case"style":if(T.styleResources.hasOwnProperty(a))return;$=[],pe($,z({rel:"preload",href:a,as:l},h)),T.styleResources[a]=!h||typeof h.crossOrigin!="string"&&typeof h.integrity!="string"?me:[h.crossOrigin,h.integrity],U.preloads.stylesheets.set(a,$),U.bulkPreloads.add($);break;case"script":if(T.scriptResources.hasOwnProperty(a))return;$=[],U.preloads.scripts.set(a,$),U.bulkPreloads.add($),pe($,z({rel:"preload",href:a,as:l},h)),T.scriptResources[a]=!h||typeof h.crossOrigin!="string"&&typeof h.integrity!="string"?me:[h.crossOrigin,h.integrity];break;default:if(T.unknownResources.hasOwnProperty(l)){if($=T.unknownResources[l],$.hasOwnProperty(a))return}else $={},T.unknownResources[l]=$;$[a]=me,(T=U.headers)&&0<T.remainingCapacity&&l==="font"&&(se=ce(a,l,h),0<=(T.remainingCapacity-=se.length+2))?(U.resets.font[a]=me,T.fontPreloads&&(T.fontPreloads+=", "),T.fontPreloads+=se):(T=[],a=z({rel:"preload",href:a,as:l},h),pe(T,a),l)==="font"?U.fontPreloads.add(T):U.bulkPreloads.add(T)}fa(v)}}else ve.L(a,l,h)}function Ko(a,l){var h=zn||null;if(h){var v=h.resumableState,T=h.renderState;if(a){var U=l&&typeof l.as=="string"?l.as:"script";switch(U){case"script":if(v.moduleScriptResources.hasOwnProperty(a))return;U=[],v.moduleScriptResources[a]=!l||typeof l.crossOrigin!="string"&&typeof l.integrity!="string"?me:[l.crossOrigin,l.integrity],T.preloads.moduleScripts.set(a,U);break;default:if(v.moduleUnknownResources.hasOwnProperty(U)){var $=v.moduleUnknownResources[U];if($.hasOwnProperty(a))return}else $={},v.moduleUnknownResources[U]=$;U=[],$[a]=me}pe(U,z({rel:"modulepreload",href:a},l)),T.bulkPreloads.add(U),fa(h)}}else ve.m(a,l)}function L(a,l,h){var v=zn||null;if(v){var T=v.resumableState,U=v.renderState;if(a){l=l||"default";var $=U.styles.get(l),he=T.styleResources.hasOwnProperty(a)?T.styleResources[a]:void 0;he!==null&&(T.styleResources[a]=null,$||($={precedence:ie(l),rules:[],hrefs:[],sheets:new Map},U.styles.set(l,$)),l={state:0,props:z({rel:"stylesheet",href:a,"data-precedence":l},h)},he&&(he.length===2&&le(l.props,he),(U=U.preloads.stylesheets.get(a))&&0<U.length?U.length=0:l.state=1),$.sheets.set(a,l),fa(v))}}else ve.S(a,l,h)}function Q(a,l){var h=zn||null;if(h){var v=h.resumableState,T=h.renderState;if(a){var U=v.scriptResources.hasOwnProperty(a)?v.scriptResources[a]:void 0;U!==null&&(v.scriptResources[a]=null,l=z({src:a,async:!0},l),U&&(U.length===2&&le(l,U),a=T.preloads.scripts.get(a))&&(a.length=0),a=[],T.scripts.add(a),Ne(a,l),fa(h))}}else ve.X(a,l)}function ge(a,l){var h=zn||null;if(h){var v=h.resumableState,T=h.renderState;if(a){var U=v.moduleScriptResources.hasOwnProperty(a)?v.moduleScriptResources[a]:void 0;U!==null&&(v.moduleScriptResources[a]=null,l=z({src:a,type:"module",async:!0},l),U&&(U.length===2&&le(l,U),a=T.preloads.moduleScripts.get(a))&&(a.length=0),a=[],T.scripts.add(a),Ne(a,l),fa(h))}}else ve.M(a,l)}function le(a,l){a.crossOrigin==null&&(a.crossOrigin=l[0]),a.integrity==null&&(a.integrity=l[1])}function ce(a,l,h){a=(""+a).replace(Le,Qe),l=(""+l).replace(Ve,qe),l="<"+a+'>; rel=preload; as="'+l+'"';for(var v in h)G.call(h,v)&&(a=h[v],typeof a=="string"&&(l+="; "+v.toLowerCase()+'="'+(""+a).replace(Ve,qe)+'"'));return l}var Le=/[<>\r\n]/g;function Qe(a){switch(a){case"<":return"%3C";case">":return"%3E";case`
`:return"%0A";case"\r":return"%0D";default:throw Error("escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}}var Ve=/["';,\r\n]/g;function qe(a){switch(a){case'"':return"%22";case"'":return"%27";case";":return"%3B";case",":return"%2C";case`
`:return"%0A";case"\r":return"%0D";default:throw Error("escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}}function ct(a){this.styles.add(a)}function Rt(a){this.stylesheets.add(a)}function Et(a,l){l.styles.forEach(ct,a),l.stylesheets.forEach(Rt,a),l.suspenseyImages&&(a.suspenseyImages=!0)}function ot(a,l){var h=a.idPrefix,v=[],T=a.bootstrapScriptContent,U=a.bootstrapScripts,$=a.bootstrapModules;T!==void 0&&(v.push("<script"),Kn(v,a),v.push(">",(""+T).replace(ft,Xe),"<\/script>")),T=h+"P:";var he=h+"S:";h+="B:";var re=new Set,se=new Set,Pe=new Set,Ie=new Map,Je=new Set,Ze=new Set,$e=new Set,gt={images:new Map,stylesheets:new Map,scripts:new Map,moduleScripts:new Map};if(U!==void 0)for(var on=0;on<U.length;on++){var Kt=U[on],pn,In=void 0,_t=void 0,Dt={rel:"preload",as:"script",fetchPriority:"low",nonce:void 0};typeof Kt=="string"?Dt.href=pn=Kt:(Dt.href=pn=Kt.src,Dt.integrity=_t=typeof Kt.integrity=="string"?Kt.integrity:void 0,Dt.crossOrigin=In=typeof Kt=="string"||Kt.crossOrigin==null?void 0:Kt.crossOrigin==="use-credentials"?"use-credentials":""),Kt=a;var qt=pn;Kt.scriptResources[qt]=null,Kt.moduleScriptResources[qt]=null,Kt=[],pe(Kt,Dt),Je.add(Kt),v.push('<script src="',ie(pn),'"'),typeof _t=="string"&&v.push(' integrity="',ie(_t),'"'),typeof In=="string"&&v.push(' crossorigin="',ie(In),'"'),Kn(v,a),v.push(' async=""><\/script>')}if($!==void 0)for(U=0;U<$.length;U++)Dt=$[U],In=pn=void 0,_t={rel:"modulepreload",fetchPriority:"low",nonce:void 0},typeof Dt=="string"?_t.href=on=Dt:(_t.href=on=Dt.src,_t.integrity=In=typeof Dt.integrity=="string"?Dt.integrity:void 0,_t.crossOrigin=pn=typeof Dt=="string"||Dt.crossOrigin==null?void 0:Dt.crossOrigin==="use-credentials"?"use-credentials":""),Dt=a,Kt=on,Dt.scriptResources[Kt]=null,Dt.moduleScriptResources[Kt]=null,Dt=[],pe(Dt,_t),Je.add(Dt),v.push('<script type="module" src="',ie(on),'"'),typeof In=="string"&&v.push(' integrity="',ie(In),'"'),typeof pn=="string"&&v.push(' crossorigin="',ie(pn),'"'),Kn(v,a),v.push(' async=""><\/script>');return{placeholderPrefix:T,segmentPrefix:he,boundaryPrefix:h,startInlineScript:"<script",startInlineStyle:"<style",preamble:{htmlChunks:null,headChunks:null,bodyChunks:null},externalRuntimeScript:null,bootstrapChunks:v,importMapChunks:[],onHeaders:void 0,headers:null,resets:{font:{},dns:{},connect:{default:{},anonymous:{},credentials:{}},image:{},style:{}},charsetChunks:[],viewportChunks:[],hoistableChunks:[],preconnects:re,fontPreloads:se,highImagePreloads:Pe,styles:Ie,bootstrapScripts:Je,scripts:Ze,bulkPreloads:$e,preloads:gt,nonce:{script:void 0,style:void 0},stylesToHoist:!1,generateStaticMarkup:l}}function Zt(a,l,h,v){return h.generateStaticMarkup?(a.push(ie(l)),!1):(l===""?a=v:(v&&a.push("<!-- -->"),a.push(ie(l)),a=!0),a)}function dn(a,l,h,v){l.generateStaticMarkup||h&&v&&a.push("<!-- -->")}var sn=Function.prototype.bind,nn=Symbol.for("react.client.reference");function Bn(a){if(a==null)return null;if(typeof a=="function")return a.$$typeof===nn?null:a.displayName||a.name||null;if(typeof a=="string")return a;switch(a){case c:return"Fragment";case d:return"Profiler";case u:return"StrictMode";case E:return"Suspense";case _:return"SuspenseList";case w:return"Activity";case k:return"ViewTransition"}if(typeof a=="object")switch(a.$$typeof){case o:return"Portal";case g:return a.displayName||"Context";case p:return(a._context.displayName||"Context")+".Consumer";case S:var l=a.render;return a=a.displayName,a||(a=l.displayName||l.name||"",a=a!==""?"ForwardRef("+a+")":"ForwardRef"),a;case x:return l=a.displayName||null,l!==null?l:Bn(a.type)||"Memo";case R:l=a._payload,a=a._init;try{return Bn(a(l))}catch{}}return null}var je={},It=null;function Ot(a,l){if(a!==l){a.context._currentValue2=a.parentValue,a=a.parent;var h=l.parent;if(a===null){if(h!==null)throw Error(t(401))}else{if(h===null)throw Error(t(401));Ot(a,h)}l.context._currentValue2=l.value}}function di(a){a.context._currentValue2=a.parentValue,a=a.parent,a!==null&&di(a)}function Mi(a){var l=a.parent;l!==null&&Mi(l),a.context._currentValue2=a.value}function ti(a,l){if(a.context._currentValue2=a.parentValue,a=a.parent,a===null)throw Error(t(402));a.depth===l.depth?Ot(a,l):ti(a,l)}function _r(a,l){var h=l.parent;if(h===null)throw Error(t(402));a.depth===h.depth?Ot(a,h):_r(a,h),l.context._currentValue2=l.value}function Bt(a){var l=It;l!==a&&(l===null?Mi(a):a===null?di(l):l.depth===a.depth?Ot(l,a):l.depth>a.depth?ti(l,a):_r(l,a),It=a)}var An={enqueueSetState:function(a,l){a=a._reactInternals,a.queue!==null&&a.queue.push(l)},enqueueReplaceState:function(a,l){a=a._reactInternals,a.replace=!0,a.queue=[l]},enqueueForceUpdate:function(){}},xr={id:1,overflow:""};function ln(a){var l=a.overflow;return a=a.id,(a&~(1<<32-ar(a)-1)).toString(32)+l}function ni(a,l,h){var v=a.id;a=a.overflow;var T=32-ar(v)-1;v&=~(1<<T),h+=1;var U=32-ar(l)+T;if(30<U){var $=T-T%5;return U=(v&(1<<$)-1).toString(32),v>>=$,T-=$,{id:1<<32-ar(l)+T|h<<T|v,overflow:U+a}}return{id:1<<U|h<<T|v,overflow:a}}var ar=Math.clz32?Math.clz32:Df,Qo=Math.log,If=Math.LN2;function Df(a){return a>>>=0,a===0?32:31-(Qo(a)/If|0)|0}function yi(){}var pi=Error(t(460));function Nf(a,l,h){switch(h=a[h],h===void 0?a.push(l):h!==l&&(l.then(yi,yi),l=h),l.status){case"fulfilled":return l.value;case"rejected":throw a=l.reason,a===void 0&&!("reason"in l)?Error(t(600)):a;default:switch(typeof l.status=="string"?l.then(yi,yi):(a=l,a.status="pending",a.then(function(v){if(l.status==="pending"){var T=l;T.status="fulfilled",T.value=v}},function(v){if(l.status==="pending"){var T=l;T.status="rejected",T.reason=v}})),l.status){case"fulfilled":return l.value;case"rejected":throw l.reason}throw qo=l,pi}}var qo=null;function jo(){if(qo===null)throw Error(t(459));var a=qo;return qo=null,a}function Uf(a,l){return a===l&&(a!==0||1/a===1/l)||a!==a&&l!==l}var su=typeof Object.is=="function"?Object.is:Uf,Fr=null,uc=null,fc=null,hc=null,$o=null,Mn=null,Js=!1,el=!1,Ks=0,Qs=0,qs=-1,tl=0,Ss=null;function ou(a){if(a=a._reason,typeof a=="function")try{var l=a()}catch{l="The reason for browser-only rendering could not be determined because its initializer threw."}else l=a;return l=Error(t(603),a===void 0?void 0:{cause:l}),Object.defineProperty(l,C,{value:!0}),l}function nl(a){return typeof a!="object"||a===null?!1:a[C]===!0}function dc(a){var l=Error(t(604),G.call(a,"cause")?{cause:a.cause}:void 0);if(a=a.stack,a!==void 0){var h=a.indexOf(`
`);l.stack=l.name+": "+l.message+(h===-1?"":a.slice(h))}else l.stack=void 0;return l}var la=null,il=0;function Or(){if(Fr===null)throw Error(t(321));return Fr}function lu(){if(0<il)throw Error(t(312));return{memoizedState:null,queue:null,next:null}}function pc(){return Mn===null?$o===null?(Js=!1,$o=Mn=lu()):(Js=!0,Mn=$o):Mn.next===null?(Js=!1,Mn=Mn.next=lu()):(Js=!0,Mn=Mn.next),Mn}function ca(){var a=Ss;return Ss=null,a}function js(){hc=fc=uc=Fr=null,el=!1,$o=null,il=0,Mn=la=null}function cu(a,l){return typeof l=="function"?l(a):l}function uu(a,l,h){if(Fr=Or(),Mn=pc(),Js){var v=Mn.queue;if(l=v.dispatch,la!==null&&(h=la.get(v),h!==void 0)){la.delete(v),v=Mn.memoizedState;do v=a(v,h.action),h=h.next;while(h!==null);return Mn.memoizedState=v,[v,l]}return[Mn.memoizedState,l]}return a=a===cu?typeof l=="function"?l():l:h!==void 0?h(l):l,Mn.memoizedState=a,a=Mn.queue={last:null,dispatch:null},a=a.dispatch=Ff.bind(null,Fr,a),[Mn.memoizedState,a]}function fu(a,l){if(Fr=Or(),Mn=pc(),l=l===void 0?null:l,Mn!==null){var h=Mn.memoizedState;if(h!==null&&l!==null){var v=h[1];e:if(v===null)v=!1;else{for(var T=0;T<v.length&&T<l.length;T++)if(!su(l[T],v[T])){v=!1;break e}v=!0}if(v)return h[0]}}return a=a(),Mn.memoizedState=[a,l],a}function Ff(a,l,h){if(25<=il)throw Error(t(301));if(a===Fr)if(el=!0,a={action:h,next:null},la===null&&(la=new Map),h=la.get(l),h===void 0)la.set(l,a);else{for(l=h;l.next!==null;)l=l.next;l.next=a}}function hu(){throw Error(t(440))}function du(){throw Error(t(394))}function Of(){throw Error(t(479))}function pu(a,l,h){Or();var v=Qs++,T=fc;if(typeof a.$$FORM_ACTION=="function"){var U=null,$=hc;T=T.formState;var he=a.$$IS_SIGNATURE_EQUAL;if(T!==null&&typeof he=="function"){var re=T[1];he.call(a,T[2],T[3])&&(U=h!==void 0?"p"+h:"k"+P(JSON.stringify([$,null,v]),0),re===U&&(qs=v,l=T[0]))}var se=a.bind(null,l);return a=function(Ie){se(Ie)},typeof se.$$FORM_ACTION=="function"&&(a.$$FORM_ACTION=function(Ie){Ie=se.$$FORM_ACTION(Ie),h!==void 0&&(h+="",Ie.action=h);var Je=Ie.data;return Je&&(U===null&&(U=h!==void 0?"p"+h:"k"+P(JSON.stringify([$,null,v]),0)),Je.append("$ACTION_KEY",U)),Ie}),[l,a,!1]}var Pe=a.bind(null,l);return[l,function(Ie){Pe(Ie)},!1]}function gu(a){var l=tl;return tl+=1,Ss===null&&(Ss=[]),Nf(Ss,a,l)}function Bf(){throw Error(t(393))}var mu={readContext:function(a){return a._currentValue2},use:function(a){if(a!==null&&typeof a=="object"){if(typeof a.then=="function")return gu(a);if(a.$$typeof===C)throw ou(a);if(a.$$typeof===g)return a._currentValue2}throw Error(t(438,String(a)))},useContext:function(a){return Or(),a._currentValue2},useMemo:fu,useReducer:uu,useRef:function(a){Fr=Or(),Mn=pc();var l=Mn.memoizedState;return l===null?(a={current:a},Mn.memoizedState=a):l},useState:function(a){return uu(cu,a)},useInsertionEffect:yi,useLayoutEffect:yi,useCallback:function(a,l){return fu(function(){return a},l)},useImperativeHandle:yi,useEffect:yi,useDebugValue:yi,useDeferredValue:function(a,l){return Or(),l!==void 0?l:a},useTransition:function(){return Or(),[!1,du]},useId:function(){var a=ln(uc.treeContext),l=rl;if(l===null)throw Error(t(404));var h=Ks++;return Jt(l,a,h)},useSyncExternalStore:function(a,l,h){if(h===void 0)throw Error(t(407));return h()},useOptimistic:function(a){return Or(),[a,Of]},useActionState:pu,useFormState:pu,useHostTransitionStatus:function(){return Or(),Qt},useMemoCache:function(a){for(var l=Array(a),h=0;h<a;h++)l[h]=O;return l},useCacheRefresh:function(){return Bf},useEffectEvent:function(){return hu}},rl=null,zf={getCacheForType:function(){throw Error(t(248))},cacheSignal:function(){throw Error(t(248))}},gc,vu;function Ba(a){if(gc===void 0)try{throw Error()}catch(h){var l=h.stack.trim().match(/\n( *(at )?)/);gc=l&&l[1]||"",vu=-1<h.stack.indexOf(`
    at`)?" (<anonymous>)":-1<h.stack.indexOf("@")?"@unknown:0:0":""}return`
`+gc+a+vu}var mc=!1;function al(a,l){if(!a||mc)return"";mc=!0;var h=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var v={DetermineComponentFrameRoot:function(){try{if(l){var Ie=function(){throw Error()};if(Object.defineProperty(Ie.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ie,[])}catch($e){var Je=$e}Reflect.construct(a,[],Ie)}else{try{Ie.call()}catch($e){Je=$e}Ie=!1;try{var Ze=Object.getOwnPropertyDescriptor(a.prototype,"props");Object.defineProperty(a.prototype,"props",{configurable:!0,set:function(){throw Error()}}),Ie=!0,new a}finally{Ie&&(Ze!==void 0?Object.defineProperty(a.prototype,"props",Ze):delete a.prototype.props)}}}else{try{throw Error()}catch($e){Je=$e}(Ie=a())&&typeof Ie.catch=="function"&&Ie.catch(function(){})}}catch($e){if($e&&Je&&typeof $e.stack=="string")return[$e.stack,Je.stack]}return[null,null]}};v.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var T=Object.getOwnPropertyDescriptor(v.DetermineComponentFrameRoot,"name");T&&T.configurable&&Object.defineProperty(v.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var U=v.DetermineComponentFrameRoot(),$=U[0],he=U[1];if($&&he){var re=$.split(`
`),se=he.split(`
`);for(T=v=0;v<re.length&&!re[v].includes("DetermineComponentFrameRoot");)v++;for(;T<se.length&&!se[T].includes("DetermineComponentFrameRoot");)T++;if(v===re.length||T===se.length)for(v=re.length-1,T=se.length-1;1<=v&&0<=T&&re[v]!==se[T];)T--;for(;1<=v&&0<=T;v--,T--)if(re[v]!==se[T]){if(v!==1||T!==1)do if(v--,T--,0>T||re[v]!==se[T]){var Pe=`
`+re[v].replace(" at new "," at ");return a.displayName&&Pe.includes("<anonymous>")&&(Pe=Pe.replace("<anonymous>",a.displayName)),Pe}while(1<=v&&0<=T);break}}}finally{mc=!1,Error.prepareStackTrace=h}return(h=a?a.displayName||a.name:"")?Ba(h):""}function _u(a){if(typeof a=="string")return Ba(a);if(typeof a=="function")return a.prototype&&a.prototype.isReactComponent?al(a,!0):al(a,!1);if(typeof a=="object"&&a!==null){switch(a.$$typeof){case S:return al(a.render,!1);case x:return al(a.type,!1);case R:var l=a,h=l._payload;l=l._init;try{a=l(h)}catch{return Ba("Lazy")}return _u(a)}if(typeof a.name=="string"){e:{h=a.name,l=a.env;var v=a.debugLocation;if(v!=null&&(a=Error.prepareStackTrace,Error.prepareStackTrace=void 0,v=v.stack,Error.prepareStackTrace=a,v.startsWith(`Error: react-stack-top-frame
`)&&(v=v.slice(29)),a=v.indexOf(`
`),a!==-1&&(v=v.slice(a+1)),a=v.indexOf("react_stack_bottom_frame"),a!==-1&&(a=v.lastIndexOf(`
`,a)),a=a!==-1?v=v.slice(0,a):"",v=a.lastIndexOf(`
`),a=v===-1?a:a.slice(v+1),a.indexOf(h)!==-1)){h=`
`+a;break e}h=Ba(h+(l?" ["+l+"]":""))}return h}}switch(a){case _:return Ba("SuspenseList");case E:return Ba("Suspense");case k:return Ba("ViewTransition")}return""}function bs(a,l){return(500<l.byteSize||l.defer)&&l.preamble===null}function kf(a){if(typeof a=="object"&&a!==null&&typeof a.environmentName=="string"){var l=a.environmentName;a=[a].slice(0),typeof a[0]=="string"?a.splice(0,1,"[%s] "+a[0]," "+l+" "):a.splice(0,0,"[%s]"," "+l+" "),a.unshift(console),l=sn.apply(console.error,a),l()}else console.error(a);return null}function Hf(a,l,h,v,T,U,$,he,re,se,Pe){var Ie=new Set;this.destination=null,this.flushScheduled=!1,this.resumableState=a,this.renderState=l,this.rootFormatContext=h,this.progressiveChunkSize=v===void 0?12800:v,this.status=10,this.fatalError=null,this.aborted=!1,this.pendingRootTasks=this.allPendingTasks=this.nextSegmentId=0,this.completedPreambleSegments=this.completedRootSegment=null,this.byteSize=0,this.abortableTasks=Ie,this.pingedTasks=[],this.currentTask=null,this.clientRenderedBoundaries=[],this.completedBoundaries=[],this.partialBoundaries=[],this.postponedState=this.trackedPostpones=null,this.onError=T===void 0?kf:T,this.onBrowserBailout=U===void 0?yi:U,this.onAllReady=$===void 0?yi:$,this.onShellReady=he===void 0?yi:he,this.onShellError=re===void 0?yi:re,this.onFatalError=se===void 0?yi:se,this.renderLifetimeController=null,this.formState=Pe===void 0?null:Pe}function Gf(a,l,h,v,T,U,$,he,re,se,Pe,Ie){return l=new Hf(l,h,v,T,U,$,he,re,se,Pe,Ie),h=Mr(l,0,null,v,!1,!1),h.parentFlushed=!0,a=ol(l,null,a,-1,null,h,null,null,l.abortableTasks,null,v,null,xr,null,null),za(a),l.pingedTasks.push(a),l}var zn=null;function sl(a,l){a.pingedTasks.push(l),a.pingedTasks.length===1&&(a.flushScheduled=a.destination!==null,io(a))}function vc(a,l,h,v,T){return h={status:0,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,row:l,completedSegments:[],byteSize:0,defer:T,fallbackAbortableTasks:h,errorDigest:null,contentState:Yt(),fallbackState:Yt(),preamble:v,tracked:null},l!==null&&(l.pendingTasks++,v=l.boundaries,v!==null&&(a.allPendingTasks++,h.pendingTasks++,v.push(h)),a=l.inheritedHoistables,a!==null&&Et(h.contentState,a)),h}function ol(a,l,h,v,T,U,$,he,re,se,Pe,Ie,Je,Ze,$e){a.allPendingTasks++,T===null?a.pendingRootTasks++:T.pendingTasks++,Ze!==null&&Ze.pendingTasks++;var gt={replay:null,node:h,childIndex:v,ping:{resolve:function(){return sl(a,gt)},reject:function(on){a.aborted?gt.abortSet.delete(gt)&&Ha(gt,a,on):sl(a,gt)}},blockedBoundary:T,blockedSegment:U,blockedPreamble:$,hoistableState:he,abortSet:re,keyPath:se,formatContext:Pe,context:Ie,treeContext:Je,row:Ze,componentStack:$e,thenableState:l};return re.add(gt),gt}function xu(a,l,h,v,T,U,$,he,re,se,Pe,Ie,Je,Ze){a.allPendingTasks++,U===null?a.pendingRootTasks++:U.pendingTasks++,Je!==null&&Je.pendingTasks++,h.pendingTasks++;var $e={replay:h,node:v,childIndex:T,ping:{resolve:function(){return sl(a,$e)},reject:function(gt){a.aborted?$e.abortSet.delete($e)&&Ha($e,a,gt):sl(a,$e)}},blockedBoundary:U,blockedSegment:null,blockedPreamble:null,hoistableState:$,abortSet:he,keyPath:re,formatContext:se,context:Pe,treeContext:Ie,row:Je,componentStack:Ze,thenableState:l};return he.add($e),$e}function Mr(a,l,h,v,T,U){return{status:0,parentFlushed:!1,id:-1,index:l,chunks:[],children:[],preambleChildren:[],parentFormatContext:v,boundary:h,lastPushedText:T,textEmbedded:U}}function za(a){var l=a.node;typeof l=="object"&&l!==null&&l.$$typeof===n&&(a.componentStack={parent:a.componentStack,type:l.type})}function _c(a){return a===null?null:{parent:a.parent,type:"Suspense Fallback"}}function ka(a){var l={};return a&&Object.defineProperty(l,"componentStack",{configurable:!0,enumerable:!0,get:function(){try{var h="",v=a;do h+=_u(v.type),v=v.parent;while(v);var T=h}catch(U){T=`
Error generating stack: `+U.message+`
`+U.stack}return Object.defineProperty(l,"componentStack",{value:T}),T}}),l}function Xn(a,l,h){if(nl(l))return a=a.onBrowserBailout,a(l,h),"";if(a=a.onError,l=a(l,h),l==null||typeof l=="string")return l===""?void 0:l}function ii(a,l){var h=a.onShellError,v=a.onFatalError;a.pendingRootTasks!==0&&h(l),v(l),vl(a),a.destination!==null?(a.status=13,a.destination.destroy(l)):(a.status=12,a.aborted||(a.fatalError=l))}function Ln(a,l){xc(a,l.next,l.hoistables)}function xc(a,l,h){for(;l!==null;){h!==null&&(Et(l.hoistables,h),l.inheritedHoistables=h);var v=l.boundaries;if(v!==null){l.boundaries=null;for(var T=0;T<v.length;T++){var U=v[T];h!==null&&Et(U.contentState,h),sr(a,U,null,null)}}if(l.pendingTasks--,0<l.pendingTasks)break;h=l.hoistables,l=l.next}}function Mc(a,l){var h=l.boundaries;if(h!==null&&l.pendingTasks===h.length){for(var v=!0,T=0;T<h.length;T++){var U=h[T];if(U.pendingTasks!==1||U.parentFlushed||bs(a,U)){v=!1;break}}v&&xc(a,l,l.hoistables)}}function $s(a){var l={pendingTasks:1,boundaries:null,hoistables:Yt(),inheritedHoistables:null,together:!1,next:null};return a!==null&&0<a.pendingTasks&&(l.pendingTasks++,l.boundaries=[],a.next=l),l}function yc(a,l,h,v,T){var U=l.keyPath,$=l.treeContext,he=l.row;l.keyPath=h,h=v.length;var re=null;if(l.replay!==null){var se=l.replay.slots;if(se!==null&&typeof se=="object")for(var Pe=0;Pe<h;Pe++){var Ie=T!=="backwards"&&T!=="unstable_legacy-backwards"?Pe:h-1-Pe,Je=v[Ie];l.row=re=$s(re),l.treeContext=ni($,h,Ie);var Ze=se[Ie];typeof Ze=="number"?(cl(a,l,Ze,Je,Ie),delete se[Ie]):Yn(a,l,Je,Ie),--re.pendingTasks===0&&Ln(a,re)}else for(se=0;se<h;se++)Pe=T!=="backwards"&&T!=="unstable_legacy-backwards"?se:h-1-se,Ie=v[Pe],l.row=re=$s(re),l.treeContext=ni($,h,Pe),Yn(a,l,Ie,Pe),--re.pendingTasks===0&&Ln(a,re)}else if(T!=="backwards"&&T!=="unstable_legacy-backwards")for(T=0;T<h;T++)se=v[T],l.row=re=$s(re),l.treeContext=ni($,h,T),Yn(a,l,se,T),--re.pendingTasks===0&&Ln(a,re);else{for(se=l.blockedSegment,Pe=se.children.length,Ie=se.chunks.length,Je=0;Je<h;Je++){Ze=T==="unstable_legacy-backwards"?h-1-Je:Je;var $e=v[Ze];l.row=re=$s(re),l.treeContext=ni($,h,Ze);var gt=Mr(a,Ie,null,l.formatContext,Ze===0?se.lastPushedText:!0,!0);se.children.splice(Pe,0,gt),l.blockedSegment=gt;try{Yn(a,l,$e,Ze),dn(gt.chunks,a.renderState,gt.lastPushedText,gt.textEmbedded),gt.status=1,--re.pendingTasks===0&&Ln(a,re)}catch(on){throw gt.status=a.aborted?3:4,on}}l.blockedSegment=se,se.lastPushedText=!1}he!==null&&re!==null&&0<re.pendingTasks&&(he.pendingTasks++,re.next=he),l.treeContext=$,l.row=he,l.keyPath=U}function Mu(a,l,h,v,T,U){var $=l.thenableState;for(l.thenableState=null,Fr={},uc=l,fc=a,hc=h,Qs=Ks=0,qs=-1,tl=0,Ss=$,a=v(T,U);el;)el=!1,Qs=Ks=0,qs=-1,tl=0,il+=1,Mn=null,a=v(T,U);return js(),a}function yu(a,l,h,v,T,U,$){var he=!1;if(U!==0&&a.formState!==null){var re=l.blockedSegment;if(re!==null){he=!0,re=re.chunks;for(var se=0;se<U;se++)se===$?re.push("<!--F!-->"):re.push("<!--F-->")}}U=l.keyPath,l.keyPath=h,T?(h=l.treeContext,l.treeContext=ni(h,1,0),Yn(a,l,v,-1),l.treeContext=h):he?Yn(a,l,v,-1):Ni(a,l,v,-1),l.keyPath=U}function ll(a,l,h,v,T,U){if(typeof v=="function")if(v.prototype&&v.prototype.isReactComponent){var $=T;if("ref"in T){$={};for(var he in T)he!=="ref"&&($[he]=T[he])}var re=v.defaultProps;if(re){$===T&&($=z({},$,T));for(var se in re)$[se]===void 0&&($[se]=re[se])}var Pe=$,Ie=je,Je=v.contextType;typeof Je=="object"&&Je!==null&&(Ie=Je._currentValue2);var Ze=new v(Pe,Ie),$e=Ze.state!==void 0?Ze.state:null;Ze.updater=An,Ze.props=Pe,Ze.state=$e;var gt={queue:[],replace:!1};Ze._reactInternals=gt;var on=v.contextType;Ze.context=typeof on=="object"&&on!==null?on._currentValue2:je;var Kt=v.getDerivedStateFromProps;if(typeof Kt=="function"){var pn=Kt(Pe,$e),In=pn==null?$e:z({},$e,pn);Ze.state=In}if(typeof v.getDerivedStateFromProps!="function"&&typeof Ze.getSnapshotBeforeUpdate!="function"&&(typeof Ze.UNSAFE_componentWillMount=="function"||typeof Ze.componentWillMount=="function")){var _t=Ze.state;if(typeof Ze.componentWillMount=="function"&&Ze.componentWillMount(),typeof Ze.UNSAFE_componentWillMount=="function"&&Ze.UNSAFE_componentWillMount(),_t!==Ze.state&&An.enqueueReplaceState(Ze,Ze.state,null),gt.queue!==null&&0<gt.queue.length){var Dt=gt.queue,qt=gt.replace;if(gt.queue=null,gt.replace=!1,qt&&Dt.length===1)Ze.state=Dt[0];else{for(var cn=qt?Dt[0]:Ze.state,ri=!0,zt=qt?1:0;zt<Dt.length;zt++){var En=Dt[zt],yn=typeof En=="function"?En.call(Ze,cn,Pe,void 0):En;yn!=null&&(ri?(ri=!1,cn=z({},cn,yn)):z(cn,yn))}Ze.state=cn}}else gt.queue=null}var Zn=Ze.render();if(a.aborted)throw null;var gn=l.keyPath;l.keyPath=h,Ni(a,l,Zn,-1),l.keyPath=gn}else{var ui=Mu(a,l,h,v,T,void 0);if(a.aborted)throw null;yu(a,l,h,ui,Ks!==0,Qs,qs)}else if(typeof v=="string"){var vn=l.blockedSegment;if(vn===null){var or=T.children,kn=l.formatContext,Gn=l.keyPath;l.formatContext=wt(kn,v,T),l.keyPath=h,Yn(a,l,or,-1),l.formatContext=kn,l.keyPath=Gn}else{var zr=ye(vn.chunks,v,T,a.resumableState,a.renderState,l.blockedPreamble,l.hoistableState,l.formatContext,vn.lastPushedText);vn.lastPushedText=!1;var Rn=l.formatContext,Si=l.keyPath;if(l.keyPath=h,(l.formatContext=wt(Rn,v,T)).insertionMode===3){var Qn=Mr(a,0,null,l.formatContext,!1,!1);vn.preambleChildren.push(Qn),l.blockedSegment=Qn;try{Yn(a,l,zr,-1),dn(Qn.chunks,a.renderState,Qn.lastPushedText,Qn.textEmbedded),Qn.status=1}finally{l.blockedSegment=vn}}else Yn(a,l,zr,-1);l.formatContext=Rn,l.keyPath=Si;e:{var Ui=vn.chunks,Yi=a.resumableState;switch(v){case"title":case"style":case"script":case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"input":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":break e;case"body":if(1>=Rn.insertionMode){Yi.hasBody=!0;break e}break;case"html":if(Rn.insertionMode===0){Yi.hasHtml=!0;break e}break;case"head":if(1>=Rn.insertionMode)break e}Ui.push(Oe(v))}vn.lastPushedText=!1}}else{switch(v){case M:case u:case d:case c:var yr=l.keyPath;l.keyPath=h,Ni(a,l,T.children,-1),l.keyPath=yr;return;case w:var Cn=l.blockedSegment;if(Cn===null){if(T.mode!=="hidden"){var kr=l.keyPath;l.keyPath=h,Yn(a,l,T.children,-1),l.keyPath=kr}}else if(T.mode!=="hidden"){a.renderState.generateStaticMarkup||Cn.chunks.push("<!--&-->"),Cn.lastPushedText=!1;var Xa=l.keyPath;l.keyPath=h,Yn(a,l,T.children,-1),l.keyPath=Xa,a.renderState.generateStaticMarkup||Cn.chunks.push("<!--/&-->"),Cn.lastPushedText=!1}return;case _:e:{var lr=T.children,Hr=T.revealOrder;if(Hr!=="independent"&&Hr!=="together"){if(y(lr)){yc(a,l,h,lr,Hr);break e}var lo=D(lr);if(lo){var Ya=lo.call(lr);if(Ya){var Gr=Ya.next();if(!Gr.done){do Gr=Ya.next();while(!Gr.done);yc(a,l,h,lr,Hr)}break e}}}if(Hr==="together"){var _l=l.keyPath,Zi=l.row,ai=l.row=$s(null);ai.boundaries=[],ai.together=!0,l.keyPath=h,Ni(a,l,lr,-1),--ai.pendingTasks===0&&Ln(a,ai),l.keyPath=_l,l.row=Zi,Zi!==null&&0<ai.pendingTasks&&(Zi.pendingTasks++,ai.next=Zi)}else{var Sr=l.keyPath;l.keyPath=h,Ni(a,l,lr,-1),l.keyPath=Sr}}return;case k:var Za=l.formatContext,br=l.keyPath,co=a.resumableState;if(T.name==null||T.name==="auto"){var Ji=ln(l.treeContext);Jt(co,Ji,0)}if(l.formatContext=Za,l.keyPath=h,T.name!=null&&T.name!=="auto")Ni(a,l,T.children,-1);else{var Fi=l.treeContext;l.treeContext=ni(Fi,1,0),Yn(a,l,T.children,-1),l.treeContext=Fi}l.formatContext=Za,l.keyPath=br;return;case N:throw Error(t(343));case E:e:if(l.replay!==null){var Ja=l.keyPath,Vr=l.formatContext,ha=l.row;l.keyPath=h,l.formatContext=bt(a.resumableState,Vr),l.row=null;var Er=T.children;try{Yn(a,l,Er,-1)}finally{l.keyPath=Ja,l.formatContext=Vr,l.row=ha}}else{var Ka=l.keyPath,da=l.formatContext,rn=l.row,pa=l.blockedBoundary,Wr=l.blockedPreamble,ga=l.hoistableState,Oi=l.blockedSegment,Ki=T.fallback,bi=T.children,Tr=new Set,$t=vc(a,l.row,Tr,null,!1),mn=Mr(a,Oi.chunks.length,$t,l.formatContext,!1,!1);Oi.children.push(mn),Oi.lastPushedText=!1;var qn=Mr(a,0,null,l.formatContext,!1,!1);qn.parentFlushed=!0;var Vn=a.trackedPostpones;if(Vn!==null){var ma=l.componentStack,va=[h[0],"Suspense Fallback",h[2]];if(Vn!==null){var _a=[va[1],va[2],[],null];Vn.workingMap.set(va,_a),$t.tracked={contentKeyPath:h,fallbackNode:_a}}l.blockedSegment=mn,l.blockedPreamble=$t.preamble===null?null:$t.preamble.fallback,l.keyPath=va,l.formatContext=Ye(a.resumableState,da),l.componentStack=_c(ma);try{Yn(a,l,Ki,-1),dn(mn.chunks,a.renderState,mn.lastPushedText,mn.textEmbedded),mn.status=1}catch(Ei){throw mn.status=a.aborted?3:4,Ei}finally{l.blockedSegment=Oi,l.blockedPreamble=Wr,l.keyPath=Ka,l.formatContext=da}var uo=ol(a,null,bi,-1,$t,qn,$t.preamble===null?null:$t.preamble.content,$t.contentState,l.abortSet,h,bt(a.resumableState,l.formatContext),l.context,l.treeContext,null,ma);za(uo),a.pingedTasks.push(uo)}else{l.blockedBoundary=$t,l.blockedPreamble=$t.preamble===null?null:$t.preamble.content,l.hoistableState=$t.contentState,l.blockedSegment=qn,l.keyPath=h,l.formatContext=bt(a.resumableState,da),l.row=null;try{if(Yn(a,l,bi,-1),dn(qn.chunks,a.renderState,qn.lastPushedText,qn.textEmbedded),qn.status=1,no($t,qn),$t.pendingTasks===0&&$t.status===0){if($t.status=1,!bs(a,$t)){rn!==null&&--rn.pendingTasks===0&&Ln(a,rn),a.pendingRootTasks===0&&l.blockedPreamble&&Ga(a);break e}}else rn!==null&&rn.together&&Mc(a,rn)}catch(Ei){if($t.status=4,a.aborted){qn.status=3;var Qi=a.fatalError}else qn.status=4,Qi=Ei;var Qa=ka(l.componentStack),wr=Xn(a,Qi,Qa);$t.errorDigest=wr,eo(a,$t)}finally{l.blockedBoundary=pa,l.blockedPreamble=Wr,l.hoistableState=ga,l.blockedSegment=Oi,l.keyPath=Ka,l.formatContext=da,l.row=rn}var qi=ol(a,null,Ki,-1,pa,mn,$t.preamble===null?null:$t.preamble.fallback,$t.fallbackState,Tr,[h[0],"Suspense Fallback",h[2]],Ye(a.resumableState,l.formatContext),l.context,l.treeContext,l.row,_c(l.componentStack));za(qi),a.pingedTasks.push(qi)}}return}if(typeof v=="object"&&v!==null)switch(v.$$typeof){case S:if("ref"in T){var Wn={};for(var Ar in T)Ar!=="ref"&&(Wn[Ar]=T[Ar])}else Wn=T;var qa=Mu(a,l,h,v.render,Wn,U);yu(a,l,h,qa,Ks!==0,Qs,qs);return;case x:ll(a,l,h,v.type,T,U);return;case g:var fo=T.children,xl=l.keyPath,xa=T.value,ho=v._currentValue2;v._currentValue2=xa;var Xr=It,Tn={parent:Xr,depth:Xr===null?0:Xr.depth+1,context:v,parentValue:ho,value:xa};It=Tn,l.context=Tn,l.keyPath=h,Ni(a,l,fo,-1);var ja=It;if(ja===null)throw Error(t(403));ja.context._currentValue2=ja.parentValue;var Rr=It=ja.parent;l.context=Rr,l.keyPath=xl;return;case p:var Ma=T.children,Cr=Ma(v._context._currentValue2),ws=l.keyPath;l.keyPath=h,Ni(a,l,Cr,-1),l.keyPath=ws;return;case R:var po=v._init,Yr=po(v._payload);if(a.aborted)throw null;ll(a,l,h,Yr,T,U);return}throw Error(t(130,v==null?v:typeof v,""))}}function cl(a,l,h,v,T){var U=l.replay,$=l.blockedBoundary,he=Mr(a,0,null,l.formatContext,!1,!1);he.id=h,he.parentFlushed=!0;try{l.replay=null,l.blockedSegment=he,Yn(a,l,v,T),he.status=1,$===null?a.completedRootSegment=he:(no($,he),$.parentFlushed&&a.partialBoundaries.push($))}finally{l.replay=U,l.blockedSegment=null}}function Ni(a,l,h,v){l.replay!==null&&typeof l.replay.slots=="number"?cl(a,l,l.replay.slots,h,v):(l.node=h,l.childIndex=v,h=l.componentStack,za(l),ul(a,l),l.componentStack=h)}function ul(a,l){var h=l.node,v=l.childIndex;if(h!==null){if(typeof h=="object"){switch(h.$$typeof){case n:var T=h.type,U=h.key,$=h.props;h=$.ref;var he=h!==void 0?h:null,re=Bn(T),se=U==null||U===H?v===-1?0:v:U;if(U=[l.keyPath,re,se],l.replay!==null)e:{var Pe=l.replay;for(v=Pe.nodes,h=0;h<v.length;h++){var Ie=v[h];if(se===Ie[1]){if(Ie.length===4){if(re!==null&&re!==Ie[0])throw Error(t(490,Ie[0],re));var Je=Ie[2],Ze=Ie[3],$e=l.node;l.replay={nodes:Je,slots:Ze,pendingTasks:1};try{if(ll(a,l,U,T,$,he),l.replay.pendingTasks===1&&0<l.replay.nodes.length)throw Error(t(488));l.replay.pendingTasks--}catch(cn){if(typeof cn=="object"&&cn!==null&&(cn===pi||typeof cn.then=="function"||cn.message==="Maximum call stack size exceeded"))throw l.node===$e?l.replay=Pe:v.splice(h,1),cn;l.replay.pendingTasks--,U=ka(l.componentStack),$e=a,$=l.blockedBoundary,a=a.aborted?a.fatalError:cn,U=Xn($e,a,U),to($e,$,Je,Ze,a,U)}l.replay=Pe}else{if(T!==E)throw Error(t(490,"Suspense",Bn(T)||"Unknown"));t:{Pe=Ie[5],T=Ie[2],he=Ie[3],re=Ie[4]===null?[]:Ie[4][2],Ie=Ie[4]===null?null:Ie[4][3],se=l.keyPath;var gt=l.formatContext,on=l.row,Kt=l.replay,pn=l.blockedBoundary,In=l.hoistableState,_t=$.children;$=$.fallback;var Dt=new Set,qt=vc(a,l.row,Dt,null,!1);qt.parentFlushed=!0,qt.rootSegmentID=Pe,l.blockedBoundary=qt,l.hoistableState=qt.contentState,l.keyPath=U,l.formatContext=bt(a.resumableState,gt),l.row=null,l.replay={nodes:T,slots:he,pendingTasks:1};try{if(Yn(a,l,_t,-1),l.replay.pendingTasks===1&&0<l.replay.nodes.length)throw Error(t(488));if(l.replay.pendingTasks--,qt.pendingTasks===0&&qt.status===0){qt.status=1,a.completedBoundaries.push(qt);break t}}catch(cn){qt.status=4,Je=a.aborted?a.fatalError:cn,Ze=ka(l.componentStack),$e=Xn(a,Je,Ze),qt.errorDigest=$e,l.replay.pendingTasks--,a.clientRenderedBoundaries.push(qt)}finally{l.blockedBoundary=pn,l.hoistableState=In,l.replay=Kt,l.keyPath=se,l.formatContext=gt,l.row=on}Je=xu(a,null,{nodes:re,slots:Ie,pendingTasks:0},$,-1,pn,qt.fallbackState,Dt,[U[0],"Suspense Fallback",U[2]],Ye(a.resumableState,l.formatContext),l.context,l.treeContext,l.row,_c(l.componentStack)),za(Je),a.pingedTasks.push(Je)}}v.splice(h,1);break e}}}else ll(a,l,U,T,$,he);return;case o:throw Error(t(257));case R:if(Je=h._init,h=Je(h._payload),a.aborted)throw null;Ni(a,l,h,v);return}if(y(h)){Es(a,l,h,v);return}if((Je=D(h))&&(Je=Je.call(h))){if(h=Je.next(),!h.done){Ze=[];do Ze.push(h.value),h=Je.next();while(!h.done);Es(a,l,Ze,v)}return}if(typeof h.then=="function")return l.thenableState=null,Ni(a,l,gu(h),v);if(h.$$typeof===g)return Ni(a,l,h._currentValue2,v);throw v=Object.prototype.toString.call(h),Error(t(31,v==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":v))}typeof h=="string"?(v=l.blockedSegment,v!==null&&(v.lastPushedText=Zt(v.chunks,h,a.renderState,v.lastPushedText))):(typeof h=="number"||typeof h=="bigint")&&(v=l.blockedSegment,v!==null&&(v.lastPushedText=Zt(v.chunks,""+h,a.renderState,v.lastPushedText)))}}function Es(a,l,h,v){var T=l.keyPath;if(v!==-1&&(l.keyPath=[l.keyPath,"Fragment",v],l.replay!==null)){for(var U=l.replay,$=U.nodes,he=0;he<$.length;he++){var re=$[he];if(re[1]===v){v=re[2],re=re[3],l.replay={nodes:v,slots:re,pendingTasks:1};try{if(Es(a,l,h,-1),l.replay.pendingTasks===1&&0<l.replay.nodes.length)throw Error(t(488));l.replay.pendingTasks--}catch(Ie){if(typeof Ie=="object"&&Ie!==null&&(Ie===pi||typeof Ie.then=="function"))throw Ie;l.replay.pendingTasks--;var se=ka(l.componentStack);h=a;var Pe=l.blockedBoundary;a=a.aborted?a.fatalError:Ie,se=Xn(h,a,se),to(h,Pe,v,re,a,se)}l.replay=U,$.splice(he,1);break}}l.keyPath=T;return}if(U=l.treeContext,$=h.length,l.replay!==null&&(he=l.replay.slots,he!==null&&typeof he=="object")){for(v=0;v<$;v++)re=h[v],l.treeContext=ni(U,$,v),Pe=he[v],typeof Pe=="number"?(cl(a,l,Pe,re,v),delete he[v]):Yn(a,l,re,v);l.treeContext=U,l.keyPath=T;return}for(he=0;he<$;he++)v=h[he],l.treeContext=ni(U,$,he),Yn(a,l,v,he);l.treeContext=U,l.keyPath=T}function Sc(a,l,h){h.status=5,h.rootSegmentID=a.nextSegmentId++;var v=h.tracked;if(v===null||(a=v.contentKeyPath,a===null))throw Error(t(486));v=v.fallbackNode;var T=[],U=l.workingMap.get(a);return U===void 0?(h=[a[1],a[2],T,null,v,h.rootSegmentID],l.workingMap.set(a,h),oo(h,a[0],l),h):(U[4]=v,U[5]=h.rootSegmentID,U)}function bc(a,l,h,v){v.status=5;var T=h.keyPath,U=h.blockedBoundary;if(U===null)v.id=a.nextSegmentId++,l.rootSlots=v.id,a.completedRootSegment!==null&&(a.completedRootSegment.status=5);else{if(U!==null&&U.status===0){var $=Sc(a,l,U);if(U.tracked!==null&&U.tracked.contentKeyPath===T&&h.childIndex===-1){v.id===-1&&(v.id=v.parentFlushed?U.rootSegmentID:a.nextSegmentId++),$[3]=v.id;return}}if(v.id===-1&&(v.id=v.parentFlushed&&U!==null?U.rootSegmentID:a.nextSegmentId++),h.childIndex===-1)T===null?l.rootSlots=v.id:(h=l.workingMap.get(T),h===void 0?(h=[T[1],T[2],[],v.id],oo(h,T[0],l)):h[3]=v.id);else{if(T===null){if(a=l.rootSlots,a===null)a=l.rootSlots={};else if(typeof a=="number")throw Error(t(491))}else if(U=l.workingMap,$=U.get(T),$===void 0)a={},$=[T[1],T[2],[],a],U.set(T,$),oo($,T[0],l);else if(a=$[3],a===null)a=$[3]={};else if(typeof a=="number")throw Error(t(491));a[h.childIndex]=v.id}}}function eo(a,l){a=a.trackedPostpones,a!==null&&(l=l.tracked,l!==null&&(l=l.contentKeyPath,l!==null&&(a=a.workingMap.get(l),a!==void 0&&(a.length=4,a[2]=[],a[3]=null))))}function fl(a,l,h){return xu(a,h,l.replay,l.node,l.childIndex,l.blockedBoundary,l.hoistableState,l.abortSet,l.keyPath,l.formatContext,l.context,l.treeContext,l.row,l.componentStack)}function Su(a,l,h){var v=l.blockedSegment,T=Mr(a,v.chunks.length,null,l.formatContext,v.lastPushedText,!0);return v.children.push(T),v.lastPushedText=!1,ol(a,h,l.node,l.childIndex,l.blockedBoundary,T,l.blockedPreamble,l.hoistableState,l.abortSet,l.keyPath,l.formatContext,l.context,l.treeContext,l.row,l.componentStack)}function Yn(a,l,h,v){var T=l.formatContext,U=l.context,$=l.keyPath,he=l.treeContext,re=l.componentStack,se=l.blockedSegment;if(se===null){se=l.replay;try{return Ni(a,l,h,v)}catch(Je){if(js(),h=Je===pi?jo():Je,!a.aborted&&typeof h=="object"&&h!==null){if(typeof h.then=="function"){v=Je===pi?ca():null,a=fl(a,l,v).ping,h.then(a.resolve,a.reject),l.formatContext=T,l.context=U,l.keyPath=$,l.treeContext=he,l.componentStack=re,l.replay=se,Bt(U);return}if(h.message==="Maximum call stack size exceeded"){h=Je===pi?ca():null,h=fl(a,l,h),a.pingedTasks.push(h),l.formatContext=T,l.context=U,l.keyPath=$,l.treeContext=he,l.componentStack=re,l.replay=se,Bt(U);return}}}}else{var Pe=se.children.length,Ie=se.chunks.length;try{return Ni(a,l,h,v)}catch(Je){if(js(),se.children.length=Pe,se.chunks.length=Ie,h=Je===pi?jo():Je,!a.aborted&&typeof h=="object"&&h!==null){if(typeof h.then=="function"){se=h,h=Je===pi?ca():null,a=Su(a,l,h).ping,se.then(a.resolve,a.reject),l.formatContext=T,l.context=U,l.keyPath=$,l.treeContext=he,l.componentStack=re,Bt(U);return}if(h.message==="Maximum call stack size exceeded"){se=Je===pi?ca():null,se=Su(a,l,se),a.pingedTasks.push(se),l.formatContext=T,l.context=U,l.keyPath=$,l.treeContext=he,l.componentStack=re,Bt(U);return}}}}throw l.formatContext=T,l.context=U,l.keyPath=$,l.treeContext=he,Bt(U),h}function Ec(a){var l=a.blockedBoundary,h=a.blockedSegment;h!==null&&(h.status=3,sr(this,l,a.row,h))}function to(a,l,h,v,T,U){for(var $=0;$<h.length;$++){var he=h[$];if(he.length===4)to(a,l,he[2],he[3],T,U);else{he=he[5];var re=a,se=U,Pe=vc(re,null,new Set,null,!1);Pe.parentFlushed=!0,Pe.rootSegmentID=he,Pe.status=4,Pe.errorDigest=se,Pe.parentFlushed&&re.clientRenderedBoundaries.push(Pe)}}if(h.length=0,v!==null){if(l===null)throw Error(t(487));if(l.status!==4&&(l.status=4,l.errorDigest=U,l.parentFlushed&&a.clientRenderedBoundaries.push(l)),typeof v=="object")for(var Ie in v)delete v[Ie]}}function hl(a,l){if(a!==l.currentTask){var h=a.blockedBoundary;a=a.blockedSegment,a!==null&&(a.status=3),h!==null&&h.fallbackAbortableTasks.forEach(function(v){return hl(v,l)})}}function Ha(a,l,h){if(a!==l.currentTask){var v=a.blockedBoundary,T=a.blockedSegment;if(T===null||T.status===3){var U=ka(a.componentStack),$=nl(h);if(v===null){if(v=a.replay,v===null){$||l.trackedPostpones===null||T===null?$?(a=dc(h),Xn(l,a,U),l.status!==12&&l.status!==13&&ii(l,a)):(Xn(l,h,U),l.status!==12&&l.status!==13&&ii(l,h)):(v=l.trackedPostpones,Xn(l,h,U),bc(l,v,a,T),sr(l,null,a.row,T));return}l.status!==12&&l.status!==13&&(v.pendingTasks--,v.pendingTasks===0&&0<v.nodes.length&&(U=Xn(l,h,U),to(l,null,v.nodes,v.slots,h,U)),l.pendingRootTasks--,l.pendingRootTasks===0&&wc(l))}else{var he=l.trackedPostpones;if(v.status!==4){if(!$&&he!==null&&T!==null)return Xn(l,h,U),bc(l,he,a,T),v.fallbackAbortableTasks.forEach(function(re){return Ha(re,l,h)}),v.fallbackAbortableTasks.clear(),sr(l,v,a.row,T);v.status=4,U=Xn(l,h,U),v.errorDigest=U,eo(l,v),v.parentFlushed&&l.clientRenderedBoundaries.push(v)}v.pendingTasks--,U=v.row,U!==null&&--U.pendingTasks===0&&Ln(l,U),v.fallbackAbortableTasks.forEach(function(re){return Ha(re,l,h)}),v.fallbackAbortableTasks.clear()}a=a.row,a!==null&&--a.pendingTasks===0&&Ln(l,a),l.allPendingTasks--,l.allPendingTasks===0&&dl(l)}}}function Tc(a,l){try{var h=a.renderState,v=h.onHeaders;if(v){var T=h.headers;if(T){h.headers=null;var U=T.preconnects;if(T.fontPreloads&&(U&&(U+=", "),U+=T.fontPreloads),T.highImagePreloads&&(U&&(U+=", "),U+=T.highImagePreloads),!l){var $=h.styles.values(),he=$.next();e:for(;0<T.remainingCapacity&&!he.done;he=$.next())for(var re=he.value.sheets.values(),se=re.next();0<T.remainingCapacity&&!se.done;se=re.next()){var Pe=se.value,Ie=Pe.props,Je=Ie.href,Ze=Pe.props,$e=ce(Ze.href,"style",{crossOrigin:Ze.crossOrigin,integrity:Ze.integrity,nonce:Ze.nonce,type:Ze.type,fetchPriority:Ze.fetchPriority,referrerPolicy:Ze.referrerPolicy,media:Ze.media});if(0<=(T.remainingCapacity-=$e.length+2))h.resets.style[Je]=me,U&&(U+=", "),U+=$e,h.resets.style[Je]=typeof Ie.crossOrigin=="string"||typeof Ie.integrity=="string"?[Ie.crossOrigin,Ie.integrity]:me;else break e}}v(U?{Link:U}:{})}}}catch(gt){Xn(a,gt,{})}}function wc(a){a.trackedPostpones===null&&Tc(a,!0),a.trackedPostpones===null&&Ga(a),a=a.onShellReady,a()}function dl(a){Tc(a,a.trackedPostpones===null?!0:a.completedRootSegment===null||a.completedRootSegment.status!==5),Ga(a),a=a.onAllReady,a()}function no(a,l){if(l.chunks.length===0&&l.children.length===1&&l.children[0].boundary===null&&l.children[0].id===-1){var h=l.children[0];h.id=l.id,h.parentFlushed=!0,h.status!==1&&h.status!==3&&h.status!==4||no(a,h)}else a.completedSegments.push(l)}function sr(a,l,h,v){if(h!==null&&(--h.pendingTasks===0?Ln(a,h):h.together&&Mc(a,h)),a.allPendingTasks--,l===null){if(v!==null&&v.parentFlushed){if(a.completedRootSegment!==null)throw Error(t(389));a.completedRootSegment=v}a.pendingRootTasks--,a.pendingRootTasks===0&&wc(a)}else if(l.pendingTasks--,l.status!==4)if(l.pendingTasks===0){if(l.status===0&&(l.status=1),v!==null&&v.parentFlushed&&(v.status===1||v.status===3)&&no(l,v),l.parentFlushed&&a.completedBoundaries.push(l),l.status===1)h=l.row,h!==null&&Et(h.hoistables,l.contentState),bs(a,l)||(a.allPendingTasks++,l.fallbackAbortableTasks.forEach(Ec,a),l.fallbackAbortableTasks.clear(),h!==null&&--h.pendingTasks===0&&Ln(a,h),a.allPendingTasks--),a.pendingRootTasks===0&&a.trackedPostpones===null&&l.preamble!==null&&Ga(a);else if(l.status===5&&(l=l.row,l!==null)){if(a.trackedPostpones!==null){h=a.trackedPostpones;var T=l.next;if(T!==null&&(v=T.boundaries,v!==null))for(T.boundaries=null,T=0;T<v.length;T++){var U=v[T];Sc(a,h,U),sr(a,U,null,null)}}a.allPendingTasks++,--l.pendingTasks===0&&Ln(a,l),a.allPendingTasks--}}else v===null||!v.parentFlushed||v.status!==1&&v.status!==3||(no(l,v),l.completedSegments.length===1&&l.parentFlushed&&a.partialBoundaries.push(l)),l=l.row,l!==null&&l.together&&Mc(a,l);a.allPendingTasks===0&&dl(a)}function io(a){if(!(a.aborted||11<a.status)){var l=It,h=we.H;we.H=mu;var v=we.A;we.A=zf;var T=zn;zn=a;var U=rl;rl=a.resumableState;try{var $=a.pingedTasks,he;for(he=0;he<$.length;he++){var re=$[he],se=a,Pe=re.blockedSegment;if(Pe===null){e:if(re.replay.pendingTasks!==0){var Ie=se.currentTask;se.currentTask=re,Bt(re.context);var Je=re.node;try{if(typeof re.replay.slots=="number"?cl(se,re,re.replay.slots,re.node,re.childIndex):ul(se,re),re.replay.pendingTasks===1&&0<re.replay.nodes.length)throw Error(t(488));re.replay.pendingTasks--,re.abortSet.delete(re),sr(se,re.blockedBoundary,re.row,null)}catch(Gn){js();var Ze=Gn===pi?jo():Gn;if(se.aborted){Gn===pi&&(re.thenableState=ca()),se.currentTask=Ie;var $e=se;hl(re,$e),re.abortSet.delete(re),Ha(re,$e,$e.fatalError)}else{if(typeof Ze=="object"&&Ze!==null){if(typeof Ze.then=="function"){var gt=re.ping;Ze.then(gt.resolve,gt.reject),re.thenableState=Gn===pi?ca():null;break e}if(Ze.message==="Maximum call stack size exceeded"&&re.node!==Je){re.thenableState=null,se.pingedTasks.push(re);break e}}re.replay.pendingTasks--,re.abortSet.delete(re);var on=ka(re.componentStack);$e=se;var Kt=re.blockedBoundary,pn=se.aborted?se.fatalError:Ze,In=re.replay.nodes,_t=re.replay.slots,Dt=Xn($e,pn,on);to($e,Kt,In,_t,pn,Dt),se.pendingRootTasks--,se.pendingRootTasks===0&&wc(se),se.allPendingTasks--,se.allPendingTasks===0&&dl(se)}}finally{se.currentTask=Ie}}}else e:if($e=Pe,$e.status===0){var qt=se.currentTask;se.currentTask=re,Bt(re.context);var cn=$e.children.length,ri=$e.chunks.length,zt=re.node;try{ul(se,re),dn($e.chunks,se.renderState,$e.lastPushedText,$e.textEmbedded),re.abortSet.delete(re),$e.status=1,sr(se,re.blockedBoundary,re.row,$e)}catch(Gn){js(),$e.children.length=cn,$e.chunks.length=ri;var En=Gn===pi?jo():Gn;if(se.aborted)Gn===pi&&(re.thenableState=ca()),se.currentTask=qt,$e=se,hl(re,$e),re.abortSet.delete(re),Ha(re,$e,$e.fatalError);else{if(typeof En=="object"&&En!==null){if(typeof En.then=="function"){$e.status=0,re.thenableState=Gn===pi?ca():null;var yn=re.ping;En.then(yn.resolve,yn.reject);break e}if(En.message==="Maximum call stack size exceeded"&&re.node!==zt){$e.status=0,re.thenableState=null,se.pingedTasks.push(re);break e}}var Zn=ka(re.componentStack);re.abortSet.delete(re),$e.status=4;var gn=re.blockedBoundary,ui=re.row;if(ui!==null&&--ui.pendingTasks===0&&Ln(se,ui),se.allPendingTasks--,gn===null)if(nl(En)){var vn=dc(En);Xn(se,vn,Zn),ii(se,vn)}else Xn(se,En,Zn),ii(se,En);else{var or=Xn(se,En,Zn);if(gn.pendingTasks--,gn.status!==4){gn.status=4,gn.errorDigest=or,eo(se,gn);var kn=gn.row;kn!==null&&(se.allPendingTasks++,--kn.pendingTasks===0&&Ln(se,kn),se.allPendingTasks--),gn.parentFlushed&&se.clientRenderedBoundaries.push(gn),se.pendingRootTasks===0&&se.trackedPostpones===null&&gn.preamble!==null&&Ga(se)}se.allPendingTasks===0&&dl(se)}}}finally{se.currentTask=qt}}}$.splice(0,he),a.destination!==null&&Va(a,a.destination)}catch(Gn){Xn(a,Gn,{}),ii(a,Gn)}finally{rl=U,we.H=h,we.A=v,h===mu&&Bt(l),zn=T}}}function ro(a,l,h){l.preambleChildren.length&&h.push(l.preambleChildren);for(var v=!1,T=0;T<l.children.length;T++)v=pl(a,l.children[T],h)||v;return v}function pl(a,l,h){var v=l.boundary;if(v===null)return ro(a,l,h);var T=v.preamble;if(T===null)return!1;switch(v.status){case 1:if(Ae(a.renderState,T.content),a.byteSize+=v.byteSize,l=v.completedSegments[0],!l)throw Error(t(391));return ro(a,l,h);case 5:if(a.trackedPostpones!==null)return!0;case 4:if(l.status===1)return Ae(a.renderState,T.fallback),ro(a,l,h);default:return!0}}function Ga(a){if(a.completedRootSegment&&a.completedPreambleSegments===null){var l=[],h=a.byteSize,v=pl(a,a.completedRootSegment,l),T=a.renderState.preamble;v===!1||T.headChunks&&T.bodyChunks?a.completedPreambleSegments=l:a.byteSize=h}}function Ts(a,l,h,v){switch(h.parentFlushed=!0,h.status){case 0:h.id=a.nextSegmentId++;case 5:return v=h.id,h.lastPushedText=!1,h.textEmbedded=!1,a=a.renderState,l.push('<template id="'),l.push(a.placeholderPrefix),a=v.toString(16),l.push(a),l.push('"></template>');case 1:h.status=2;var T=!0,U=h.chunks,$=0;h=h.children;for(var he=0;he<h.length;he++){for(T=h[he];$<T.index;$++)l.push(U[$]);T=so(a,l,T,v)}for(;$<U.length-1;$++)l.push(U[$]);return $<U.length&&(T=l.push(U[$])),T;case 3:return!0;default:throw Error(t(390))}}var ao=0;function so(a,l,h,v){var T=h.boundary;if(T===null)return Ts(a,l,h,v);if(h.boundary=null,T.parentFlushed=!0,T.status===4){var U=T.row;return U!==null&&--U.pendingTasks===0&&Ln(a,U),a.renderState.generateStaticMarkup||(T=T.errorDigest,l.push("<!--$!-->"),l.push("<template"),T!=null&&(l.push(' data-dgst="'),T=ie(T),l.push(T),l.push('"')),l.push("></template>")),Ts(a,l,h,v),a=a.renderState.generateStaticMarkup?!0:l.push("<!--/$-->"),a}if(T.status!==1)return T.status===0&&(T.rootSegmentID=a.nextSegmentId++),0<T.completedSegments.length&&a.partialBoundaries.push(T),it(l,a.renderState,T.rootSegmentID),v&&Et(v,T.fallbackState),Ts(a,l,h,v),l.push("<!--/$-->");if(!gl&&bs(a,T)&&(ao+T.byteSize>a.progressiveChunkSize||T.defer))return T.rootSegmentID=a.nextSegmentId++,a.completedBoundaries.push(T),it(l,a.renderState,T.rootSegmentID),Ts(a,l,h,v),l.push("<!--/$-->");if(ao+=T.byteSize,v&&Et(v,T.contentState),h=T.row,h!==null&&bs(a,T)&&--h.pendingTasks===0&&Ln(a,h),a.renderState.generateStaticMarkup||l.push("<!--$-->"),h=T.completedSegments,h.length!==1)throw Error(t(391));return so(a,l,h[0],v),a=a.renderState.generateStaticMarkup?!0:l.push("<!--/$-->"),a}function ua(a,l,h,v){return Lt(l,a.renderState,h.parentFormatContext,h.id),so(a,l,h,v),Xt(l,h.parentFormatContext)}function Ac(a,l,h){ao=h.byteSize;for(var v=h.completedSegments,T=0;T<v.length;T++)bu(a,l,h,v[T]);v.length=0,v=h.row,v!==null&&bs(a,h)&&--v.pendingTasks===0&&Ln(a,v),mt(l,h.contentState,a.renderState),v=a.resumableState,a=a.renderState,T=h.rootSegmentID,h=h.contentState;var U=a.stylesToHoist,$=(v.instructions&128)!==0;return a.stylesToHoist=!1,l.push(a.startInlineScript),l.push(">"),U?((v.instructions&4)===0&&(v.instructions|=4,l.push('$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,null!=c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};')),(v.instructions&2)===0&&(v.instructions|=2,l.push(`$RB=[];$RV=function(a){$RT=performance.now();for(var b=0;b<a.length;b+=2){var c=a[b],e=a[b+1];null!==e.parentNode&&e.parentNode.removeChild(e);var f=c.parentNode;if(f){var g=c.previousSibling,h=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d||"/&"===d)if(0===h)break;else h--;else"$"!==d&&"$?"!==d&&"$~"!==d&&"$!"!==d&&"&"!==d||h++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;e.firstChild;)f.insertBefore(e.firstChild,c);g.data="$";g._reactRetry&&requestAnimationFrame(g._reactRetry)}}a.length=0};
$RC=function(a,b){if(b=document.getElementById(b))(a=document.getElementById(a))?(a.previousSibling.data="$~",$RB.push(a,b),2===$RB.length&&("number"!==typeof $RT?requestAnimationFrame($RV.bind(null,$RB)):(a=performance.now(),setTimeout($RV.bind(null,$RB),2300>a&&2E3<a?2300-a:$RT+300-a)))):b.parentNode.removeChild(b)};`)),$&&(v.instructions&256)===0&&(v.instructions|=256,l.push(`$RV=function(B,g){function h(a,c){var e=a.getAttribute(c);e&&(c=a.style,l.push(a,c.viewTransitionName,c.viewTransitionClass),"auto"!==e&&(c.viewTransitionClass=e),(a=a.getAttribute("vt-name"))||(a="_T_"+N++ +"_"),a=CSS.escape(a)!==a?"r-"+btoa(a).replace(/=/g,""):a,c.viewTransitionName=a,C=!0)}var C=!1,N=0,l=[];try{var f=document.__reactViewTransition;if(f){f.finished.finally($RV.bind(null,g));return}var m=new Map;for(f=1;f<g.length;f+=2)for(var k=g[f].querySelectorAll("[vt-share]"),d=0;d<k.length;d++){var b=k[d];m.set(b.getAttribute("vt-name"),b)}var u=[];for(k=0;k<g.length;k+=2){var D=g[k],x=D.parentNode;if(x){var v=x.getBoundingClientRect();if(v.left||v.top||v.width||v.height){b=D;for(f=0;b;){if(8===b.nodeType){var t=b.data;if("/$"===t)if(0===f)break;else f--;else"$"!==t&&"$?"!==t&&"$~"!==t&&"$!"!==t||f++}else if(1===b.nodeType){d=b;var E=d.getAttribute("vt-name"),y=m.get(E);h(d,y?"vt-share":"vt-exit");y&&(h(y,"vt-share"),m.set(E,null));for(var F=d.querySelectorAll("[vt-share]"),
z=0;z<F.length;z++){var G=F[z],H=G.getAttribute("vt-name"),I=m.get(H);I&&(h(G,"vt-share"),h(I,"vt-share"),m.set(H,null))}var J=d.querySelectorAll("[vt-parent-exit]");for(d=0;d<J.length;d++)h(J[d],"vt-parent-exit")}b=b.nextSibling}for(var K=g[k+1],n=K.firstElementChild;n;){null!==m.get(n.getAttribute("vt-name"))&&h(n,"vt-enter");var L=n.querySelectorAll("[vt-parent-enter]");for(b=0;b<L.length;b++)h(L[b],"vt-parent-enter");n=n.nextElementSibling}b=x;do for(var p=b.firstElementChild;p;){var M=p.getAttribute("vt-update");
M&&"none"!==M&&!l.includes(p)&&h(p,"vt-update");p=p.nextElementSibling}while((b=b.parentNode)&&1===b.nodeType&&"none"!==b.getAttribute("vt-update"));u.push.apply(u,K.querySelectorAll('img[src]:not([loading="lazy"])'))}}}if(C){var A=document.__reactViewTransition=document.startViewTransition({update:function(){B(g);for(var a=[document.documentElement.clientHeight,document.fonts.ready],c={},e=0;e<u.length;c={g:c.g},e++)if(c.g=u[e],!c.g.complete){var q=c.g.getBoundingClientRect();0<q.bottom&&0<q.right&&
q.top<window.innerHeight&&q.left<window.innerWidth&&(q=new Promise(function(w){return function(r){w.g.addEventListener("load",r);w.g.addEventListener("error",r)}}(c)),a.push(q))}return Promise.race([Promise.all(a),new Promise(function(w){var r=performance.now();setTimeout(w,2300>r&&2E3<r?2300-r:500)})])},types:[]});A.ready.finally(function(){for(var a=l.length-3;0<=a;a-=3){var c=l[a],e=c.style;e.viewTransitionName=l[a+1];e.viewTransitionClass=l[a+1];""===c.getAttribute("style")&&c.removeAttribute("style")}});
A.finished.finally(function(){document.__reactViewTransition===A&&(document.__reactViewTransition=null)});$RB=[];return}}catch(a){}B(g)}.bind(null,$RV);`)),(v.instructions&8)===0?(v.instructions|=8,l.push(`$RM=new Map;$RR=function(n,w,p){function u(q){this._p=null;q()}for(var r=new Map,t=document,h,b,e=t.querySelectorAll("link[data-precedence],style[data-precedence]"),v=[],k=0;b=e[k++];)"not all"===b.getAttribute("media")?v.push(b):("LINK"===b.tagName&&$RM.set(b.getAttribute("href"),b),r.set(b.dataset.precedence,h=b));e=0;b=[];var l,a;for(k=!0;;){if(k){var f=p[e++];if(!f){k=!1;e=0;continue}var c=!1,m=0;var d=f[m++];if(a=$RM.get(d)){var g=a._p;c=!0}else{a=t.createElement("link");a.href=d;a.rel=
"stylesheet";for(a.dataset.precedence=l=f[m++];g=f[m++];)a.setAttribute(g,f[m++]);g=a._p=new Promise(function(q,x){a.onload=u.bind(a,q);a.onerror=u.bind(a,x)});$RM.set(d,a)}d=a.getAttribute("media");!g||d&&!matchMedia(d).matches||b.push(g);if(c)continue}else{a=v[e++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=r.get(l)||h;c===h&&(h=a);r.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=t.head,c.insertBefore(a,c.firstChild))}if(p=document.getElementById(n))p.previousSibling.data=
"$~";Promise.all(b).then($RC.bind(null,n,w),$RX.bind(null,n,"CSS failed to load"))};$RR("`)):l.push('$RR("')):((v.instructions&2)===0&&(v.instructions|=2,l.push(`$RB=[];$RV=function(a){$RT=performance.now();for(var b=0;b<a.length;b+=2){var c=a[b],e=a[b+1];null!==e.parentNode&&e.parentNode.removeChild(e);var f=c.parentNode;if(f){var g=c.previousSibling,h=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d||"/&"===d)if(0===h)break;else h--;else"$"!==d&&"$?"!==d&&"$~"!==d&&"$!"!==d&&"&"!==d||h++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;e.firstChild;)f.insertBefore(e.firstChild,c);g.data="$";g._reactRetry&&requestAnimationFrame(g._reactRetry)}}a.length=0};
$RC=function(a,b){if(b=document.getElementById(b))(a=document.getElementById(a))?(a.previousSibling.data="$~",$RB.push(a,b),2===$RB.length&&("number"!==typeof $RT?requestAnimationFrame($RV.bind(null,$RB)):(a=performance.now(),setTimeout($RV.bind(null,$RB),2300>a&&2E3<a?2300-a:$RT+300-a)))):b.parentNode.removeChild(b)};`)),$&&(v.instructions&256)===0&&(v.instructions|=256,l.push(`$RV=function(B,g){function h(a,c){var e=a.getAttribute(c);e&&(c=a.style,l.push(a,c.viewTransitionName,c.viewTransitionClass),"auto"!==e&&(c.viewTransitionClass=e),(a=a.getAttribute("vt-name"))||(a="_T_"+N++ +"_"),a=CSS.escape(a)!==a?"r-"+btoa(a).replace(/=/g,""):a,c.viewTransitionName=a,C=!0)}var C=!1,N=0,l=[];try{var f=document.__reactViewTransition;if(f){f.finished.finally($RV.bind(null,g));return}var m=new Map;for(f=1;f<g.length;f+=2)for(var k=g[f].querySelectorAll("[vt-share]"),d=0;d<k.length;d++){var b=k[d];m.set(b.getAttribute("vt-name"),b)}var u=[];for(k=0;k<g.length;k+=2){var D=g[k],x=D.parentNode;if(x){var v=x.getBoundingClientRect();if(v.left||v.top||v.width||v.height){b=D;for(f=0;b;){if(8===b.nodeType){var t=b.data;if("/$"===t)if(0===f)break;else f--;else"$"!==t&&"$?"!==t&&"$~"!==t&&"$!"!==t||f++}else if(1===b.nodeType){d=b;var E=d.getAttribute("vt-name"),y=m.get(E);h(d,y?"vt-share":"vt-exit");y&&(h(y,"vt-share"),m.set(E,null));for(var F=d.querySelectorAll("[vt-share]"),
z=0;z<F.length;z++){var G=F[z],H=G.getAttribute("vt-name"),I=m.get(H);I&&(h(G,"vt-share"),h(I,"vt-share"),m.set(H,null))}var J=d.querySelectorAll("[vt-parent-exit]");for(d=0;d<J.length;d++)h(J[d],"vt-parent-exit")}b=b.nextSibling}for(var K=g[k+1],n=K.firstElementChild;n;){null!==m.get(n.getAttribute("vt-name"))&&h(n,"vt-enter");var L=n.querySelectorAll("[vt-parent-enter]");for(b=0;b<L.length;b++)h(L[b],"vt-parent-enter");n=n.nextElementSibling}b=x;do for(var p=b.firstElementChild;p;){var M=p.getAttribute("vt-update");
M&&"none"!==M&&!l.includes(p)&&h(p,"vt-update");p=p.nextElementSibling}while((b=b.parentNode)&&1===b.nodeType&&"none"!==b.getAttribute("vt-update"));u.push.apply(u,K.querySelectorAll('img[src]:not([loading="lazy"])'))}}}if(C){var A=document.__reactViewTransition=document.startViewTransition({update:function(){B(g);for(var a=[document.documentElement.clientHeight,document.fonts.ready],c={},e=0;e<u.length;c={g:c.g},e++)if(c.g=u[e],!c.g.complete){var q=c.g.getBoundingClientRect();0<q.bottom&&0<q.right&&
q.top<window.innerHeight&&q.left<window.innerWidth&&(q=new Promise(function(w){return function(r){w.g.addEventListener("load",r);w.g.addEventListener("error",r)}}(c)),a.push(q))}return Promise.race([Promise.all(a),new Promise(function(w){var r=performance.now();setTimeout(w,2300>r&&2E3<r?2300-r:500)})])},types:[]});A.ready.finally(function(){for(var a=l.length-3;0<=a;a-=3){var c=l[a],e=c.style;e.viewTransitionName=l[a+1];e.viewTransitionClass=l[a+1];""===c.getAttribute("style")&&c.removeAttribute("style")}});
A.finished.finally(function(){document.__reactViewTransition===A&&(document.__reactViewTransition=null)});$RB=[];return}}catch(a){}B(g)}.bind(null,$RV);`)),l.push('$RC("')),v=T.toString(16),l.push(a.boundaryPrefix),l.push(v),l.push('","'),l.push(a.segmentPrefix),l.push(v),U?(l.push('",'),sa(l,h)):l.push('"'),h=l.push(")<\/script>"),rt(l,a)&&h}function bu(a,l,h,v){if(v.status===2)return!0;var T=h.contentState,U=v.id;if(U===-1){if((v.id=h.rootSegmentID)===-1)throw Error(t(392));return ua(a,l,v,T)}return U===h.rootSegmentID?ua(a,l,v,T):(ua(a,l,v,T),h=a.resumableState,a=a.renderState,l.push(a.startInlineScript),l.push(">"),(h.instructions&1)===0?(h.instructions|=1,l.push('$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')):l.push('$RS("'),l.push(a.segmentPrefix),U=U.toString(16),l.push(U),l.push('","'),l.push(a.placeholderPrefix),l.push(U),l=l.push('")<\/script>'),l)}var gl=!1;function Va(a,l){try{if(!(0<a.pendingRootTasks)){var h,v=a.completedRootSegment;if(v!==null){if(v.status===5)return;var T=a.completedPreambleSegments;if(T===null)return;ao=a.byteSize;var U=a.resumableState,$=a.renderState,he=$.preamble,re=he.htmlChunks,se=he.headChunks,Pe;if(re){for(Pe=0;Pe<re.length;Pe++)l.push(re[Pe]);if(se)for(Pe=0;Pe<se.length;Pe++)l.push(se[Pe]);else{var Ie=Ee("head");l.push(Ie),l.push(">")}}else if(se)for(Pe=0;Pe<se.length;Pe++)l.push(se[Pe]);var Je=$.charsetChunks;for(Pe=0;Pe<Je.length;Pe++)l.push(Je[Pe]);Je.length=0,$.preconnects.forEach(pt,l),$.preconnects.clear();var Ze=$.viewportChunks;for(Pe=0;Pe<Ze.length;Pe++)l.push(Ze[Pe]);Ze.length=0,$.fontPreloads.forEach(pt,l),$.fontPreloads.clear(),$.highImagePreloads.forEach(pt,l),$.highImagePreloads.clear(),ke=$,$.styles.forEach(gr,l),ke=null;var $e=$.importMapChunks;for(Pe=0;Pe<$e.length;Pe++)l.push($e[Pe]);$e.length=0,$.bootstrapScripts.forEach(pt,l),$.scripts.forEach(pt,l),$.scripts.clear(),$.bulkPreloads.forEach(pt,l),$.bulkPreloads.clear(),U.instructions|=32;var gt=$.hoistableChunks;for(Pe=0;Pe<gt.length;Pe++)l.push(gt[Pe]);for(U=gt.length=0;U<T.length;U++){var on=T[U];for($=0;$<on.length;$++)so(a,l,on[$],null)}var Kt=a.renderState.preamble,pn=Kt.headChunks;if(Kt.htmlChunks||pn){var In=Oe("head");l.push(In)}var _t=Kt.bodyChunks;if(_t)for(T=0;T<_t.length;T++)l.push(_t[T]);so(a,l,v,null),a.completedRootSegment=null;var Dt=a.renderState;if(a.allPendingTasks!==0||a.clientRenderedBoundaries.length!==0||a.completedBoundaries.length!==0||a.trackedPostpones!==null&&(a.trackedPostpones.rootNodes.length!==0||a.trackedPostpones.rootSlots!==null)){var qt=a.resumableState;if((qt.instructions&64)===0){if(qt.instructions|=64,l.push(Dt.startInlineScript),(qt.instructions&32)===0){qt.instructions|=32;var cn="_"+qt.idPrefix+"R_";l.push(' id="');var ri=ie(cn);l.push(ri),l.push('"')}l.push(">"),l.push("requestAnimationFrame(function(){$RT=performance.now()});"),l.push("<\/script>")}}rt(l,Dt)}var zt=a.renderState;v=0;var En=zt.viewportChunks;for(v=0;v<En.length;v++)l.push(En[v]);En.length=0,zt.preconnects.forEach(pt,l),zt.preconnects.clear(),zt.fontPreloads.forEach(pt,l),zt.fontPreloads.clear(),zt.highImagePreloads.forEach(pt,l),zt.highImagePreloads.clear(),zt.styles.forEach(vr,l),zt.scripts.forEach(pt,l),zt.scripts.clear(),zt.bulkPreloads.forEach(pt,l),zt.bulkPreloads.clear();var yn=zt.hoistableChunks;for(v=0;v<yn.length;v++)l.push(yn[v]);yn.length=0;var Zn=a.clientRenderedBoundaries;for(h=0;h<Zn.length;h++){var gn=Zn[h];zt=l;var ui=a.resumableState,vn=a.renderState,or=gn.rootSegmentID,kn=gn.errorDigest;zt.push(vn.startInlineScript),zt.push(">"),(ui.instructions&4)===0?(ui.instructions|=4,zt.push('$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,null!=c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX("')):zt.push('$RX("'),zt.push(vn.boundaryPrefix);var Gn=or.toString(16);if(zt.push(Gn),zt.push('"'),kn!=null)if(zt.push(","),kn==null)zt.push("null");else{var zr=ci(kn);zt.push(zr)}var Rn=zt.push(")<\/script>");if(!Rn){a.destination=null,h++,Zn.splice(0,h);return}}Zn.splice(0,h);var Si=a.completedBoundaries;for(h=0;h<Si.length;h++)if(!Ac(a,l,Si[h])){a.destination=null,h++,Si.splice(0,h);return}Si.splice(0,h),gl=!0;var Qn=a.partialBoundaries;for(h=0;h<Qn.length;h++){var Ui=Qn[h];e:{Zn=a,gn=l,ao=Ui.byteSize;var Yi=Ui.completedSegments;for(Rn=0;Rn<Yi.length;Rn++)if(!bu(Zn,gn,Ui,Yi[Rn])){Rn++,Yi.splice(0,Rn);var yr=!1;break e}Yi.splice(0,Rn);var Cn=Ui.row;Cn!==null&&Cn.together&&Ui.pendingTasks===1&&(Cn.pendingTasks===1?xc(Zn,Cn,Cn.hoistables):Cn.pendingTasks--),yr=mt(gn,Ui.contentState,Zn.renderState)}if(!yr){a.destination=null,h++,Qn.splice(0,h);return}}Qn.splice(0,h),gl=!1;var kr=a.completedBoundaries;for(h=0;h<kr.length;h++)if(!Ac(a,l,kr[h])){a.destination=null,h++,kr.splice(0,h);return}kr.splice(0,h)}}finally{gl=!1,h=a.postponedState,h!==null&&(h.nextSegmentId=a.nextSegmentId),a.allPendingTasks===0&&a.clientRenderedBoundaries.length===0&&a.completedBoundaries.length===0&&(a.flushScheduled=!1,h=a.resumableState,h.hasBody&&(Qn=Oe("body"),l.push(Qn)),h.hasHtml&&(h=Oe("html"),l.push(h)),vl(a),a.status=13,l.push(null),a.destination=null)}}function fa(a){if(a.flushScheduled===!1&&a.pingedTasks.length===0&&a.destination!==null){a.flushScheduled=!0;var l=a.destination;l?Va(a,l):a.flushScheduled=!1}}function Wa(a,l){if(a.status===12)a.status=13,a=a.fatalError,nl(a)&&(a=dc(a)),l.destroy(a);else if(a.status!==13&&a.destination===null){a.destination=l;try{Va(a,l)}catch(h){Xn(a,h,{}),ii(a,h)}}}function ml(a,l){try{if(0<l.size){var h=a.fatalError;l.forEach(function(v){return Ha(v,a,h)}),l.clear()}a.destination!==null&&Va(a,a.destination)}catch(v){Xn(a,v,{}),ii(a,v)}}function vl(a){a=a.renderLifetimeController,a!==null&&a.abort("The render ended.")}function Eu(a,l){if(!(a.aborted||a.status!==11&&a.status!==10)){vl(a);var h=typeof l=="object"&&l!==null&&l.$$typeof===C;a.aborted=!0,l=h?ou(l):l===void 0?Error(t(432)):typeof l=="object"&&l!==null&&typeof l.then=="function"?Error(t(530)):l,a.fatalError=l,l=a.abortableTasks,l.forEach(function(v){return hl(v,a)}),ml(a,l)}}function oo(a,l,h){if(l===null)h.rootNodes.push(a);else{var v=h.workingMap,T=v.get(l);T===void 0&&(T=[l[1],l[2],[],null],v.set(l,T),oo(T,l[0],h)),T[2].push(a)}}function Tu(){}function Br(a,l,h,v){var T=!1,U=null,$="",he=!1;if(l=St(l?l.identifierPrefix:void 0),a=Gf(a,l,ot(l,h),Nt(0,null,0,null),1/0,Tu,void 0,void 0,function(){he=!0},void 0,void 0,void 0),a.flushScheduled=a.destination!==null,io(a),a.status===10&&(a.status=11),a.trackedPostpones===null&&Tc(a,a.pendingRootTasks===0),Eu(a,v),Wa(a,{push:function(re){return re!==null&&($+=re),!0},destroy:function(re){T=!0,U=re}}),T&&U!==v)throw U;if(!he)throw Error(t(426));return $}return Wc.renderToStaticMarkup=function(a,l){return Br(a,l,!0,'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')},Wc.renderToString=function(a,l){return Br(a,l,!1,'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')},Wc.version="19.3.1",Wc}var ko={};var ag;function tS(){if(ag)return ko;ag=1;var i=og(),e=lg();function t(r){var s="https://react.dev/errors/"+r;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var f=2;f<arguments.length;f++)s+="&args[]="+encodeURIComponent(arguments[f])}return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),g=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),E=Symbol.for("react.suspense"),_=Symbol.for("react.suspense_list"),x=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),N=Symbol.for("react.scope"),w=Symbol.for("react.activity"),M=Symbol.for("react.legacy_hidden"),O=Symbol.for("react.memo_cache_sentinel"),k=Symbol.for("react.view_transition"),C=Symbol.for("react.recoverable"),F=Symbol.iterator;function D(r){return r===null||typeof r!="object"?null:(r=F&&r[F]||r["@@iterator"],typeof r=="function"?r:null)}var H=Symbol.for("react.optimistic_key"),y=Array.isArray,P=Object.prototype.hasOwnProperty;function z(r,s){var f=r.length&3,m=r.length-f,b=s;for(s=0;s<m;){var I=r.charCodeAt(s)&255|(r.charCodeAt(++s)&255)<<8|(r.charCodeAt(++s)&255)<<16|(r.charCodeAt(++s)&255)<<24;++s,I=3432918353*(I&65535)+((3432918353*(I>>>16)&65535)<<16)&4294967295,I=I<<15|I>>>17,I=461845907*(I&65535)+((461845907*(I>>>16)&65535)<<16)&4294967295,b^=I,b=b<<13|b>>>19,b=5*(b&65535)+((5*(b>>>16)&65535)<<16)&4294967295,b=(b&65535)+27492+(((b>>>16)+58964&65535)<<16)}switch(I=0,f){case 3:I^=(r.charCodeAt(s+2)&255)<<16;case 2:I^=(r.charCodeAt(s+1)&255)<<8;case 1:I^=r.charCodeAt(s)&255,I=3432918353*(I&65535)+((3432918353*(I>>>16)&65535)<<16)&4294967295,I=I<<15|I>>>17,b^=461845907*(I&65535)+((461845907*(I>>>16)&65535)<<16)&4294967295}return b^=r.length,b^=b>>>16,b=2246822507*(b&65535)+((2246822507*(b>>>16)&65535)<<16)&4294967295,b^=b>>>13,b=3266489909*(b&65535)+((3266489909*(b>>>16)&65535)<<16)&4294967295,(b^b>>>16)>>>0}var G=new MessageChannel,q=[];G.port1.onmessage=function(){var r=q.shift();r&&r()};var ae=P.call(ArrayBuffer.prototype,"detached");function W(r){q.push(r),G.port2.postMessage(null)}function ue(r){setTimeout(function(){throw r})}var Me=Promise,_e=typeof queueMicrotask=="function"?queueMicrotask:function(r){Me.resolve(null).then(r).catch(ue)},Te=null,ie=0;function V(r,s){if(s.byteLength===0){if(ae&&s.buffer.detached)throw Error(t(612))}else if(2048<s.byteLength)0<ie&&(r.enqueue(new Uint8Array(Te.buffer,0,ie)),Te=new Uint8Array(2048),ie=0),r.enqueue(s);else{var f=Te.length-ie;f<s.byteLength&&(f===0?r.enqueue(Te):(Te.set(s.subarray(0,f),ie),r.enqueue(Te),s=s.subarray(f)),Te=new Uint8Array(2048),ie=0),Te.set(s,ie),ie+=s.byteLength}}function xe(r,s){return V(r,s),!0}function at(r){Te&&0<ie&&(r.enqueue(new Uint8Array(Te.buffer,0,ie)),Te=null,ie=0)}var tt=new TextEncoder;function we(r){return tt.encode(r)}function oe(r){return tt.encode(r)}function Qt(r){return r.byteLength}function ve(r,s){typeof r.error=="function"?r.error(s):r.close()}var me=Object.assign,ke=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ft={},Xe={};function St(r){return P.call(Xe,r)?!0:P.call(ft,r)?!1:ke.test(r)?Xe[r]=!0:(ft[r]=!0,!1)}var Nt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")),wt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ut=/["'&<>]/;function Ye(r){if(typeof r=="boolean"||typeof r=="number"||typeof r=="bigint")return""+r;r=""+r;var s=Ut.exec(r);if(s){var f="",m,b=0;for(m=s.index;m<r.length;m++){switch(r.charCodeAt(m)){case 34:s="&quot;";break;case 38:s="&amp;";break;case 39:s="&#x27;";break;case 60:s="&lt;";break;case 62:s="&gt;";break;default:continue}b!==m&&(f+=r.slice(b,m)),b=m+1,f+=s}r=b!==m?f+r.slice(b,m):f}return r}var bt=/([A-Z])/g,Jt=/^ms-/,Vt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Sn(r){return Vt.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}var Wt=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fn=e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},en=fn.d;fn.d={f:en.f,r:en.r,D:to,C:hl,L:Ha,m:Tc,X:dl,S:wc,M:no};var dt=[],B=null;oe('"></template>');var A=oe("<script"),te=oe("<\/script>"),ne=oe('<script src="'),de=oe('<script type="module" src="'),De=oe(' nonce="'),Ue=oe(' integrity="'),pe=oe(' crossorigin="'),be=oe(' async=""><\/script>'),Be=oe("<style"),nt=/(<\/|<)(s)(cript)/gi;function ze(r,s,f,m){return""+s+(f==="s"?"\\u0073":"\\u0053")+m}var Ne=oe('<script type="importmap">'),lt=oe("<\/script>");function st(r,s,f,m,b,I){f=typeof s=="string"?s:s&&s.script;var X=f===void 0?A:oe('<script nonce="'+Ye(f)+'"'),Z=typeof s=="string"?void 0:s&&s.style,j=Z===void 0?Be:oe('<style nonce="'+Ye(Z)+'"'),ee=r.idPrefix,Se=[],Re=r.bootstrapScriptContent,He=r.bootstrapScripts,We=r.bootstrapModules;if(Re!==void 0&&(Se.push(X),Es(Se,r),Se.push(bn,we((""+Re).replace(nt,ze)),te)),Re=[],m!==void 0&&(Re.push(f===void 0?Ne:oe('<script type="importmap" nonce="'+Ye(f)+'">')),Re.push(we((""+JSON.stringify(m)).replace(nt,ze))),Re.push(lt)),m=b?{preconnects:"",fontPreloads:"",highImagePreloads:"",remainingCapacity:2+(typeof I=="number"?I:2e3)}:null,b={placeholderPrefix:oe(ee+"P:"),segmentPrefix:oe(ee+"S:"),boundaryPrefix:oe(ee+"B:"),startInlineScript:X,startInlineStyle:j,preamble:J(),externalRuntimeScript:null,bootstrapChunks:Se,importMapChunks:Re,onHeaders:b,headers:m,resets:{font:{},dns:{},connect:{default:{},anonymous:{},credentials:{}},image:{},style:{}},charsetChunks:[],viewportChunks:[],hoistableChunks:[],preconnects:new Set,fontPreloads:new Set,highImagePreloads:new Set,styles:new Map,bootstrapScripts:new Set,scripts:new Set,bulkPreloads:new Set,preloads:{images:new Map,stylesheets:new Map,scripts:new Map,moduleScripts:new Map},nonce:{script:f,style:Z},hoistableState:null,stylesToHoist:!1},He!==void 0)for(m=0;m<He.length;m++)ee=He[m],Z=X=void 0,j={rel:"preload",as:"script",fetchPriority:"low",nonce:s},typeof ee=="string"?j.href=I=ee:(j.href=I=ee.src,j.integrity=Z=typeof ee.integrity=="string"?ee.integrity:void 0,j.crossOrigin=X=typeof ee=="string"||ee.crossOrigin==null?void 0:ee.crossOrigin==="use-credentials"?"use-credentials":""),ee=r,Re=I,ee.scriptResources[Re]=null,ee.moduleScriptResources[Re]=null,ee=[],Le(ee,j),b.bootstrapScripts.add(ee),Se.push(ne,we(Ye(I)),mt),f&&Se.push(De,we(Ye(f)),mt),typeof Z=="string"&&Se.push(Ue,we(Ye(Z)),mt),typeof X=="string"&&Se.push(pe,we(Ye(X)),mt),Es(Se,r),Se.push(be);if(We!==void 0)for(s=0;s<We.length;s++)Z=We[s],I=m=void 0,X={rel:"modulepreload",fetchPriority:"low",nonce:f},typeof Z=="string"?X.href=He=Z:(X.href=He=Z.src,X.integrity=I=typeof Z.integrity=="string"?Z.integrity:void 0,X.crossOrigin=m=typeof Z=="string"||Z.crossOrigin==null?void 0:Z.crossOrigin==="use-credentials"?"use-credentials":""),Z=r,j=He,Z.scriptResources[j]=null,Z.moduleScriptResources[j]=null,Z=[],Le(Z,X),b.bootstrapScripts.add(Z),Se.push(de,we(Ye(He)),mt),f&&Se.push(De,we(Ye(f)),mt),typeof I=="string"&&Se.push(Ue,we(Ye(I)),mt),typeof m=="string"&&Se.push(pe,we(Ye(m)),mt),Es(Se,r),Se.push(be);return b}function vt(r,s,f,m,b){return{idPrefix:r===void 0?"":r,nextFormID:0,streamingFormat:0,bootstrapScriptContent:f,bootstrapScripts:m,bootstrapModules:b,instructions:0,hasBody:!1,hasHtml:!1,unknownResources:{},dnsResources:{},connectResources:{default:{},anonymous:{},credentials:{}},imageResources:{},styleResources:{},scriptResources:{},moduleUnknownResources:{},moduleScriptResources:{}}}function J(){return{htmlChunks:null,headChunks:null,bodyChunks:null}}function Ee(r,s,f,m){return{insertionMode:r,selectedValue:s,tagScope:f,viewTransition:m}}function ye(r){return Ee(r==="http://www.w3.org/2000/svg"?4:r==="http://www.w3.org/1998/Math/MathML"?5:0,null,0,null)}function Fe(r,s,f){var m=r.tagScope&-25;switch(s){case"noscript":return Ee(2,null,m|1,null);case"select":return Ee(2,f.value!=null?f.value:f.defaultValue,m,null);case"svg":return Ee(4,null,m,null);case"picture":return Ee(2,null,m|2,null);case"math":return Ee(5,null,m,null);case"foreignObject":return Ee(2,null,m,null);case"table":return Ee(6,null,m,null);case"thead":case"tbody":case"tfoot":return Ee(7,null,m,null);case"colgroup":return Ee(9,null,m,null);case"tr":return Ee(8,null,m,null);case"head":if(2>r.insertionMode)return Ee(3,null,m,null);break;case"html":if(r.insertionMode===0)return Ee(1,null,m,null)}return 6<=r.insertionMode||2>r.insertionMode?Ee(2,null,m,null):r.viewTransition!==null||r.tagScope!==m?Ee(r.insertionMode,r.selectedValue,m,null):r}function Oe(r){return r===null?null:{update:r.update,enter:"none",exit:"none",share:r.update,parentEnter:"none",parentExit:"none",name:r.autoName,autoName:r.autoName,nameIdx:0}}function Ae(r,s){return s.tagScope&32&&(r.instructions|=128),Ee(s.insertionMode,s.selectedValue,s.tagScope|12,Oe(s.viewTransition))}function rt(r,s){r=Oe(s.viewTransition);var f=s.tagScope|16;return r!==null&&r.share!=="none"&&(f|=64),Ee(s.insertionMode,s.selectedValue,f,r)}function it(r,s,f){return r="_"+r.idPrefix+"R_"+s,0<f&&(r+="H"+f.toString(32)),r+"_"}var Lt=oe("<!-- -->");function Xt(r,s,f,m){return s===""?m:(m&&r.push(Lt),r.push(we(Ye(s))),!0)}function hn(r,s){s=s.viewTransition,s!==null&&(s.name!=="auto"&&(Ht(r,"vt-name",s.nameIdx===0?s.name:s.name+"_"+s.nameIdx),s.nameIdx++),Ht(r,"vt-update",s.update),s.enter!=="none"&&Ht(r,"vt-enter",s.enter),s.exit!=="none"&&Ht(r,"vt-exit",s.exit),s.share!=="none"&&Ht(r,"vt-share",s.share))}var ci=new Map,Ce=oe(' style="'),Ge=oe(":"),ht=oe(";");function At(r,s){if(typeof s!="object")throw Error(t(62));var f=!0,m;for(m in s)if(P.call(s,m)){var b=s[m];if(b!=null&&typeof b!="boolean"&&b!==""){if(m.indexOf("--")===0){var I=we(Ye(m));b=we(Ye((""+b).trim()))}else I=ci.get(m),I===void 0&&(I=oe(Ye(m.replace(bt,"-$1").toLowerCase().replace(Jt,"-ms-"))),ci.set(m,I)),b=typeof b=="number"?b===0||Nt.has(m)?we(""+b):we(b+"px"):we(Ye((""+b).trim()));f?(f=!1,r.push(Ce,I,Ge,b)):r.push(ht,I,Ge,b)}}f||r.push(mt)}var yt=oe(" "),Ft=oe('="'),mt=oe('"'),pt=oe('=""');function tn(r,s,f){f&&typeof f!="function"&&typeof f!="symbol"&&r.push(yt,we(s),pt)}function Ht(r,s,f){typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&r.push(yt,we(s),Ft,we(Ye(f)),mt)}var gr=oe(Ye("javascript:throw new Error('React form unexpectedly submitted.')")),mr=oe('<input type="hidden"');function vr(r,s){this.push(mr),Kn(r),Ht(this,"name",s),Ht(this,"value",r),this.push(Oa)}function Kn(r){if(typeof r!="string")throw Error(t(480))}function sa(r,s){if(typeof s.$$FORM_ACTION=="function"){var f=r.nextFormID++;r=r.idPrefix+f;try{var m=s.$$FORM_ACTION(r);if(m){var b=m.data;b?.forEach(Kn)}return m}catch(I){if(typeof I=="object"&&I!==null&&typeof I.then=="function")throw I}}return null}function oa(r,s,f,m,b,I,X,Z){var j=null;if(typeof m=="function"){var ee=sa(s,m);ee!==null?(Z=ee.name,m=ee.action||"",b=ee.encType,I=ee.method,X=ee.target,j=ee.data):(r.push(yt,we("formAction"),Ft,gr,mt),X=I=b=m=Z=null,ge(s,f))}return Z!=null&&Yt(r,"name",Z),m!=null&&Yt(r,"formAction",m),b!=null&&Yt(r,"formEncType",b),I!=null&&Yt(r,"formMethod",I),X!=null&&Yt(r,"formTarget",X),j}function Yt(r,s,f){switch(s){case"className":Ht(r,"class",f);break;case"tabIndex":Ht(r,"tabindex",f);break;case"dir":case"role":case"viewBox":case"width":case"height":Ht(r,s,f);break;case"style":At(r,f);break;case"src":case"href":if(f==="")break;case"action":case"formAction":if(f==null||typeof f=="function"||typeof f=="symbol"||typeof f=="boolean")break;f=Sn(""+f),r.push(yt,we(s),Ft,we(Ye(f)),mt);break;case"defaultValue":case"defaultChecked":case"innerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":case"ref":break;case"autoFocus":case"multiple":case"muted":tn(r,s.toLowerCase(),f);break;case"xlinkHref":if(typeof f=="function"||typeof f=="symbol"||typeof f=="boolean")break;f=Sn(""+f),r.push(yt,we("xlink:href"),Ft,we(Ye(f)),mt);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":typeof f!="function"&&typeof f!="symbol"&&r.push(yt,we(s),Ft,we(Ye(f)),mt);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":f&&typeof f!="function"&&typeof f!="symbol"&&r.push(yt,we(s),pt);break;case"capture":case"download":f===!0?r.push(yt,we(s),pt):f!==!1&&typeof f!="function"&&typeof f!="symbol"&&r.push(yt,we(s),Ft,we(Ye(f)),mt);break;case"cols":case"rows":case"size":case"span":typeof f!="function"&&typeof f!="symbol"&&!isNaN(f)&&1<=f&&r.push(yt,we(s),Ft,we(Ye(f)),mt);break;case"rowSpan":case"start":typeof f=="function"||typeof f=="symbol"||isNaN(f)||r.push(yt,we(s),Ft,we(Ye(f)),mt);break;case"xlinkActuate":Ht(r,"xlink:actuate",f);break;case"xlinkArcrole":Ht(r,"xlink:arcrole",f);break;case"xlinkRole":Ht(r,"xlink:role",f);break;case"xlinkShow":Ht(r,"xlink:show",f);break;case"xlinkTitle":Ht(r,"xlink:title",f);break;case"xlinkType":Ht(r,"xlink:type",f);break;case"xmlBase":Ht(r,"xml:base",f);break;case"xmlLang":Ht(r,"xml:lang",f);break;case"xmlSpace":Ht(r,"xml:space",f);break;default:if((!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=wt.get(s)||s,St(s))){switch(typeof f){case"function":case"symbol":return;case"boolean":var m=s.toLowerCase().slice(0,5);if(m!=="data-"&&m!=="aria-")return}r.push(yt,we(s),Ft,we(Ye(f)),mt)}}}var bn=oe(">"),Oa=oe("/>");function hi(r,s,f){if(s!=null){if(f!=null)throw Error(t(60));if(typeof s!="object"||!("__html"in s))throw Error(t(61));s=s.__html,s!=null&&r.push(we(""+s))}}function Ko(r){var s="";return i.Children.forEach(r,function(f){f!=null&&(s+=f)}),s}var L=oe(' selected=""'),Q=oe(`addEventListener("submit",function(a){if(!a.defaultPrevented){var b=a.target,d=a.submitter,c=b.action,e=d;if(d){var f=d.getAttribute("formAction");null!=f&&(c=f,e=null)}"javascript:throw new Error('React form unexpectedly submitted.')"===c&&(a.preventDefault(),a=new FormData(b,e),c=b.ownerDocument||b,(c.$$reactFormReplay=c.$$reactFormReplay||[]).push(b,d,a))}});`);function ge(r,s){if((r.instructions&16)===0){r.instructions|=16;var f=s.preamble,m=s.bootstrapChunks;(f.htmlChunks||f.headChunks)&&m.length===0?(m.push(s.startInlineScript),Es(m,r),m.push(bn,Q,te)):m.unshift(s.startInlineScript,bn,Q,te)}}var le=oe("<!--F!-->"),ce=oe("<!--F-->");function Le(r,s){r.push(It("link"));for(var f in s)if(P.call(s,f)){var m=s[f];if(m!=null)switch(f){case"children":case"dangerouslySetInnerHTML":throw Error(t(399,"link"));default:Yt(r,f,m)}}return r.push(Oa),null}var Qe=/(<\/|<)(s)(tyle)/gi;function Ve(r,s,f,m){return""+s+(f==="s"?"\\73 ":"\\53 ")+m}function qe(r,s,f,m){r.push(It(f));for(var b in s)if(P.call(s,b)){var I=s[b];if(I!=null)switch(b){case"children":case"dangerouslySetInnerHTML":throw Error(t(399,f));default:Yt(r,b,I)}}return hn(r,m),r.push(Oa),null}function ct(r,s){r.push(It("title"));var f=null,m=null,b;for(b in s)if(P.call(s,b)){var I=s[b];if(I!=null)switch(b){case"children":f=I;break;case"dangerouslySetInnerHTML":m=I;break;default:Yt(r,b,I)}}return r.push(bn),s=Array.isArray(f)?2>f.length?f[0]:null:f,typeof s!="function"&&typeof s!="symbol"&&s!==null&&s!==void 0&&r.push(we(Ye(""+s))),hi(r,m,f),r.push(ti("title")),null}var Rt=oe("<!--head-->"),Et=oe("<!--body-->"),ot=oe("<!--html-->");function Zt(r,s){r.push(It("script"));var f=null,m=null,b;for(b in s)if(P.call(s,b)){var I=s[b];if(I!=null)switch(b){case"children":f=I;break;case"dangerouslySetInnerHTML":m=I;break;default:Yt(r,b,I)}}return r.push(bn),hi(r,m,f),typeof f=="string"&&r.push(we((""+f).replace(nt,ze))),r.push(ti("script")),null}function dn(r,s,f,m){r.push(It(f));var b=f=null,I;for(I in s)if(P.call(s,I)){var X=s[I];if(X!=null)switch(I){case"children":f=X;break;case"dangerouslySetInnerHTML":b=X;break;default:Yt(r,I,X)}}return hn(r,m),r.push(bn),hi(r,b,f),f}function sn(r,s,f,m){r.push(It(f));var b=f=null,I;for(I in s)if(P.call(s,I)){var X=s[I];if(X!=null)switch(I){case"children":f=X;break;case"dangerouslySetInnerHTML":b=X;break;default:Yt(r,I,X)}}return hn(r,m),r.push(bn),hi(r,b,f),typeof f=="string"?(r.push(we(Ye(f))),null):f}var nn=oe(`
`),Bn=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,je=new Map;function It(r){var s=je.get(r);if(s===void 0){if(!Bn.test(r))throw Error(t(65,r));s=oe("<"+r),je.set(r,s)}return s}var Ot=oe("<!DOCTYPE html>");function di(r,s,f,m,b,I,X,Z,j){switch(s){case"div":case"span":case"svg":case"path":break;case"a":r.push(It("a"));var ee=null,Se=null,Re;for(Re in f)if(P.call(f,Re)){var He=f[Re];if(He!=null)switch(Re){case"children":ee=He;break;case"dangerouslySetInnerHTML":Se=He;break;case"href":He===""?Ht(r,"href",""):Yt(r,Re,He);break;default:Yt(r,Re,He)}}if(hn(r,Z),r.push(bn),hi(r,Se,ee),typeof ee=="string"){r.push(we(Ye(ee)));var We=null}else We=ee;return We;case"g":case"p":case"li":break;case"select":r.push(It("select"));var et=null,Tt=null,Dn;for(Dn in f)if(P.call(f,Dn)){var jn=f[Dn];if(jn!=null)switch(Dn){case"children":et=jn;break;case"dangerouslySetInnerHTML":Tt=jn;break;case"defaultValue":case"value":break;default:Yt(r,Dn,jn)}}return hn(r,Z),r.push(bn),hi(r,Tt,et),et;case"option":var un=Z.selectedValue;r.push(It("option"));var Ti=null,Bi=null,zi=null,xt=null,wn;for(wn in f)if(P.call(f,wn)){var ki=f[wn];if(ki!=null)switch(wn){case"children":Ti=ki;break;case"selected":zi=ki;break;case"dangerouslySetInnerHTML":xt=ki;break;case"value":Bi=ki;default:Yt(r,wn,ki)}}if(un!=null){var gi=Bi!==null?""+Bi:Ko(Ti);if(y(un)){for(var Nn=0;Nn<un.length;Nn++)if(""+un[Nn]===gi){r.push(L);break}}else""+un===gi&&r.push(L)}else zi&&r.push(L);return r.push(bn),hi(r,xt,Ti),Ti;case"textarea":r.push(It("textarea"));var $n=null,Lr=null,Jn=null,Hi;for(Hi in f)if(P.call(f,Hi)){var Pn=f[Hi];if(Pn!=null)switch(Hi){case"children":Jn=Pn;break;case"value":$n=Pn;break;case"defaultValue":Lr=Pn;break;case"dangerouslySetInnerHTML":throw Error(t(91));default:Yt(r,Hi,Pn)}}if($n===null&&Lr!==null&&($n=Lr),hn(r,Z),r.push(bn),Jn!=null){if($n!=null)throw Error(t(92));if(y(Jn)){if(1<Jn.length)throw Error(t(93));$n=""+Jn[0]}$n=""+Jn}return typeof $n=="string"&&$n[0]===`
`&&r.push(nn),$n!==null&&r.push(we(Ye(""+$n))),null;case"input":r.push(It("input"));var Kr=null,$i=null,Un=null,ba=null,Qr=null,Ir=null,wi=null,Cc=null,bl=null,Mo;for(Mo in f)if(P.call(f,Mo)){var mi=f[Mo];if(mi!=null)switch(Mo){case"children":case"dangerouslySetInnerHTML":throw Error(t(399,"input"));case"name":Kr=mi;break;case"formAction":$i=mi;break;case"formEncType":Un=mi;break;case"formMethod":ba=mi;break;case"formTarget":Qr=mi;break;case"defaultChecked":bl=mi;break;case"defaultValue":wi=mi;break;case"checked":Cc=mi;break;case"value":Ir=mi;break;default:Yt(r,Mo,mi)}}var Au=oa(r,m,b,$i,Un,ba,Qr,Kr);return Cc!==null?tn(r,"checked",Cc):bl!==null&&tn(r,"checked",bl),Ir!==null?Yt(r,"value",Ir):wi!==null&&Yt(r,"value",wi),hn(r,Z),r.push(Oa),Au?.forEach(vr,r),null;case"button":r.push(It("button"));var yo=null,Ea=null,Cs=null,Pc=null,El=null,Tl=null,Ru=null,Ta;for(Ta in f)if(P.call(f,Ta)){var Ai=f[Ta];if(Ai!=null)switch(Ta){case"children":yo=Ai;break;case"dangerouslySetInnerHTML":Ea=Ai;break;case"name":Cs=Ai;break;case"formAction":Pc=Ai;break;case"formEncType":El=Ai;break;case"formMethod":Tl=Ai;break;case"formTarget":Ru=Ai;break;default:Yt(r,Ta,Ai)}}var Cu=oa(r,m,b,Pc,El,Tl,Ru,Cs);if(hn(r,Z),r.push(bn),Cu?.forEach(vr,r),hi(r,Ea,yo),typeof yo=="string"){r.push(we(Ye(yo)));var qr=null}else qr=yo;return qr;case"form":r.push(It("form"));var So=null,Pu=null,wa=null,bo=null,Eo=null,rs=null,Aa;for(Aa in f)if(P.call(f,Aa)){var er=f[Aa];if(er!=null)switch(Aa){case"children":So=er;break;case"dangerouslySetInnerHTML":Pu=er;break;case"action":wa=er;break;case"encType":bo=er;break;case"method":Eo=er;break;case"target":rs=er;break;default:Yt(r,Aa,er)}}var Ps=null,as=null;if(typeof wa=="function"){var Dr=sa(m,wa);Dr!==null?(wa=Dr.action||"",bo=Dr.encType,Eo=Dr.method,rs=Dr.target,Ps=Dr.data,as=Dr.name):(r.push(yt,we("action"),Ft,gr,mt),rs=Eo=bo=wa=null,ge(m,b))}if(wa!=null&&Yt(r,"action",wa),bo!=null&&Yt(r,"encType",bo),Eo!=null&&Yt(r,"method",Eo),rs!=null&&Yt(r,"target",rs),hn(r,Z),r.push(bn),as!==null&&(r.push(mr),Ht(r,"name",as),r.push(Oa),Ps?.forEach(vr,r)),hi(r,Pu,So),typeof So=="string"){r.push(we(Ye(So)));var wl=null}else wl=So;return wl;case"menuitem":r.push(It("menuitem"));for(var Al in f)if(P.call(f,Al)){var Ls=f[Al];if(Ls!=null)switch(Al){case"children":case"dangerouslySetInnerHTML":throw Error(t(400));default:Yt(r,Al,Ls)}}return hn(r,Z),r.push(bn),null;case"object":r.push(It("object"));var To=null,Lc=null,wo;for(wo in f)if(P.call(f,wo)){var Is=f[wo];if(Is!=null)switch(wo){case"children":To=Is;break;case"dangerouslySetInnerHTML":Lc=Is;break;case"data":var Lu=Sn(""+Is);if(Lu==="")break;r.push(yt,we("data"),Ft,we(Ye(Lu)),mt);break;default:Yt(r,wo,Is)}}if(hn(r,Z),r.push(bn),hi(r,Lc,To),typeof To=="string"){r.push(we(Ye(To)));var Iu=null}else Iu=To;return Iu;case"title":var Du=Z.tagScope&1,Rl=Z.tagScope&4;if(Z.insertionMode===4||Du||f.itemProp!=null)var jr=ct(r,f);else Rl?jr=null:(ct(b.hoistableChunks,f),jr=void 0);return jr;case"link":var Ic=Z.tagScope&1,Nu=Z.tagScope&4,Vf=f.rel,tr=f.href,Ao=f.precedence;if(Z.insertionMode===4||Ic||f.itemProp!=null||typeof Vf!="string"||typeof tr!="string"||tr===""){Le(r,f);var Ds=null}else if(f.rel==="stylesheet")if(typeof Ao!="string"||f.disabled!=null||f.onLoad||f.onError)Ds=Le(r,f);else{var ss=b.styles.get(Ao),_n=m.styleResources.hasOwnProperty(tr)?m.styleResources[tr]:void 0;if(_n!==null){m.styleResources[tr]=null,ss||(ss={precedence:we(Ye(Ao)),rules:[],hrefs:[],sheets:new Map},b.styles.set(Ao,ss));var nr={state:0,props:me({},f,{"data-precedence":f.precedence,precedence:null})};if(_n){_n.length===2&&sr(nr.props,_n);var Gi=b.preloads.stylesheets.get(tr);Gi&&0<Gi.length?Gi.length=0:nr.state=1}ss.sheets.set(tr,nr),X&&X.stylesheets.add(nr)}else if(ss){var Cl=ss.sheets.get(tr);Cl&&X&&X.stylesheets.add(Cl)}j&&r.push(Lt),Ds=null}else f.onLoad||f.onError?Ds=Le(r,f):(j&&r.push(Lt),Ds=Nu?null:Le(b.hoistableChunks,f));return Ds;case"script":var Uu=Z.tagScope&1,Ns=f.async;if(typeof f.src!="string"||!f.src||!Ns||typeof Ns=="function"||typeof Ns=="symbol"||f.onLoad||f.onError||Z.insertionMode===4||Uu||f.itemProp!=null)var Dc=Zt(r,f);else{var Ro=f.src;if(f.type==="module")var Co=m.moduleScriptResources,Fu=b.preloads.moduleScripts;else Co=m.scriptResources,Fu=b.preloads.scripts;var Pl=Co.hasOwnProperty(Ro)?Co[Ro]:void 0;if(Pl!==null){Co[Ro]=null;var Ll=f;if(Pl){Pl.length===2&&(Ll=me({},f),sr(Ll,Pl));var Il=Fu.get(Ro);Il&&(Il.length=0)}var Dl=[];b.scripts.add(Dl),Zt(Dl,Ll)}j&&r.push(Lt),Dc=null}return Dc;case"style":var Wf=Z.tagScope&1,Nl=f.precedence,Us=f.href,Ou=f.nonce;if(Z.insertionMode===4||Wf||f.itemProp!=null||typeof Nl!="string"||typeof Us!="string"||Us===""){r.push(It("style"));var Fs=null,Ul=null,Os;for(Os in f)if(P.call(f,Os)){var os=f[Os];if(os!=null)switch(Os){case"children":Fs=os;break;case"dangerouslySetInnerHTML":Ul=os;break;default:Yt(r,Os,os)}}r.push(bn);var Po=Array.isArray(Fs)?2>Fs.length?Fs[0]:null:Fs;typeof Po!="function"&&typeof Po!="symbol"&&Po!==null&&Po!==void 0&&r.push(we((""+Po).replace(Qe,Ve))),hi(r,Ul,Fs),r.push(ti("style"));var Bu=null}else{var ls=b.styles.get(Nl);if((m.styleResources.hasOwnProperty(Us)?m.styleResources[Us]:void 0)!==null){m.styleResources[Us]=null,ls||(ls={precedence:we(Ye(Nl)),rules:[],hrefs:[],sheets:new Map},b.styles.set(Nl,ls));var zu=b.nonce.style;if(!zu||zu===Ou){ls.hrefs.push(we(Ye(Us)));var ku=ls.rules,Bs=null,Fl=null,Hu;for(Hu in f)if(P.call(f,Hu)){var Xf=f[Hu];if(Xf!=null)switch(Hu){case"children":Bs=Xf;break;case"dangerouslySetInnerHTML":Fl=Xf}}var Nc=Array.isArray(Bs)?2>Bs.length?Bs[0]:null:Bs;typeof Nc!="function"&&typeof Nc!="symbol"&&Nc!==null&&Nc!==void 0&&ku.push(we((""+Nc).replace(Qe,Ve))),hi(ku,Fl,Bs)}}ls&&X&&X.styles.add(ls),j&&r.push(Lt),Bu=void 0}return Bu;case"meta":var Qg=Z.tagScope&1,qg=Z.tagScope&4;if(Z.insertionMode===4||Qg||f.itemProp!=null)var Zd=qe(r,f,"meta",Z);else j&&r.push(Lt),Zd=qg?null:typeof f.charSet=="string"?qe(b.charsetChunks,f,"meta",Z):f.name==="viewport"?qe(b.viewportChunks,f,"meta",Z):qe(b.hoistableChunks,f,"meta",Z);return Zd;case"listing":case"pre":r.push(It(s));var Uc=null,Fc=null,Oc;for(Oc in f)if(P.call(f,Oc)){var Gu=f[Oc];if(Gu!=null)switch(Oc){case"children":Uc=Gu;break;case"dangerouslySetInnerHTML":Fc=Gu;break;default:Yt(r,Oc,Gu)}}if(hn(r,Z),r.push(bn),Fc!=null){if(Uc!=null)throw Error(t(60));if(typeof Fc!="object"||!("__html"in Fc))throw Error(t(61));var Lo=Fc.__html;Lo!=null&&(typeof Lo=="string"&&0<Lo.length&&Lo[0]===`
`?r.push(nn,we(Lo)):r.push(we(""+Lo)))}return typeof Uc=="string"&&Uc[0]===`
`&&r.push(nn),Uc;case"img":var jg=Z.tagScope&3,Ri=f.src,vi=f.srcSet;if(!(f.loading==="lazy"||!Ri&&!vi||typeof Ri!="string"&&Ri!=null||typeof vi!="string"&&vi!=null||f.fetchPriority==="low"||jg)&&(typeof Ri!="string"||Ri[4]!==":"||Ri[0]!=="d"&&Ri[0]!=="D"||Ri[1]!=="a"&&Ri[1]!=="A"||Ri[2]!=="t"&&Ri[2]!=="T"||Ri[3]!=="a"&&Ri[3]!=="A")&&(typeof vi!="string"||vi[4]!==":"||vi[0]!=="d"&&vi[0]!=="D"||vi[1]!=="a"&&vi[1]!=="A"||vi[2]!=="t"&&vi[2]!=="T"||vi[3]!=="a"&&vi[3]!=="A")){X!==null&&Z.tagScope&64&&(X.suspenseyImages=!0);var Jd=typeof f.sizes=="string"?f.sizes:void 0,Ol=vi?vi+`
`+(Jd||""):Ri,Yf=b.preloads.images,Io=Yf.get(Ol);if(Io)(f.fetchPriority==="high"||10>b.highImagePreloads.size)&&(Yf.delete(Ol),b.highImagePreloads.add(Io));else if(!m.imageResources.hasOwnProperty(Ol)){m.imageResources[Ol]=dt;var Zf=f.crossOrigin,Kd=typeof Zf=="string"?Zf==="use-credentials"?Zf:"":void 0,Do=b.headers,Jf;Do&&0<Do.remainingCapacity&&typeof f.srcSet!="string"&&(f.fetchPriority==="high"||500>Do.highImagePreloads.length)&&(Jf=io(Ri,"image",{imageSrcSet:f.srcSet,imageSizes:f.sizes,crossOrigin:Kd,integrity:f.integrity,nonce:f.nonce,type:f.type,fetchPriority:f.fetchPriority,referrerPolicy:f.referrerPolicy}),0<=(Do.remainingCapacity-=Jf.length+2))?(b.resets.image[Ol]=dt,Do.highImagePreloads&&(Do.highImagePreloads+=", "),Do.highImagePreloads+=Jf):(Io=[],Le(Io,{rel:"preload",as:"image",href:vi?void 0:Ri,imageSrcSet:vi,imageSizes:Jd,crossOrigin:Kd,integrity:f.integrity,type:f.type,fetchPriority:f.fetchPriority,referrerPolicy:f.referrerPolicy}),f.fetchPriority==="high"||10>b.highImagePreloads.size?b.highImagePreloads.add(Io):(b.bulkPreloads.add(Io),Yf.set(Ol,Io)))}}return qe(r,f,"img",Z);case"base":case"area":case"br":case"col":case"embed":case"hr":case"keygen":case"param":case"source":case"track":case"wbr":return qe(r,f,s,Z);case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":break;case"head":if(2>Z.insertionMode){var Kf=I||b.preamble;if(Kf.headChunks)throw Error(t(545,"`<head>`"));I!==null&&r.push(Rt),Kf.headChunks=[];var Qd=dn(Kf.headChunks,f,"head",Z)}else Qd=sn(r,f,"head",Z);return Qd;case"body":if(2>Z.insertionMode){var Qf=I||b.preamble;if(Qf.bodyChunks)throw Error(t(545,"`<body>`"));I!==null&&r.push(Et),Qf.bodyChunks=[];var qd=dn(Qf.bodyChunks,f,"body",Z)}else qd=sn(r,f,"body",Z);return qd;case"html":if(Z.insertionMode===0){var qf=I||b.preamble;if(qf.htmlChunks)throw Error(t(545,"`<html>`"));I!==null&&r.push(ot),qf.htmlChunks=[Ot];var jd=dn(qf.htmlChunks,f,"html",Z)}else jd=sn(r,f,"html",Z);return jd;default:if(s.indexOf("-")!==-1){r.push(It(s));var jf=null,$d=null,Bl;for(Bl in f)if(P.call(f,Bl)){var $r=f[Bl];if($r!=null){var ep=Bl;switch(Bl){case"children":jf=$r;break;case"dangerouslySetInnerHTML":$d=$r;break;case"style":At(r,$r);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"ref":break;case"className":ep="class";default:if(St(Bl)&&typeof $r!="function"&&typeof $r!="symbol"&&$r!==!1){if($r===!0)$r="";else if(typeof $r=="object")continue;r.push(yt,we(ep),Ft,we(Ye($r)),mt)}}}}return hn(r,Z),r.push(bn),hi(r,$d,jf),jf}}return sn(r,f,s,Z)}var Mi=new Map;function ti(r){var s=Mi.get(r);return s===void 0&&(s=oe("</"+r+">"),Mi.set(r,s)),s}function _r(r,s){r=r.preamble,r.htmlChunks===null&&s.htmlChunks&&(r.htmlChunks=s.htmlChunks),r.headChunks===null&&s.headChunks&&(r.headChunks=s.headChunks),r.bodyChunks===null&&s.bodyChunks&&(r.bodyChunks=s.bodyChunks)}function Bt(r,s){s=s.bootstrapChunks;for(var f=0;f<s.length-1;f++)V(r,s[f]);return f<s.length?(f=s[f],s.length=0,xe(r,f)):!0}var An=oe("requestAnimationFrame(function(){$RT=performance.now()});"),xr=oe('<template id="'),ln=oe('"></template>'),ni=oe("<!--&-->"),ar=oe("<!--/&-->"),Qo=oe("<!--$-->"),If=oe('<!--$?--><template id="'),Df=oe('"></template>'),yi=oe("<!--$!-->"),pi=oe("<!--/$-->"),Nf=oe("<template"),qo=oe('"'),jo=oe(' data-dgst="');oe(' data-msg="'),oe(' data-stck="'),oe(' data-cstck="');var Uf=oe("></template>");function su(r,s,f){if(V(r,If),f===null)throw Error(t(395));return V(r,s.boundaryPrefix),V(r,we(f.toString(16))),xe(r,Df)}var Fr=oe('<div hidden id="'),uc=oe('">'),fc=oe("</div>"),hc=oe('<svg aria-hidden="true" style="display:none" id="'),$o=oe('">'),Mn=oe("</svg>"),Js=oe('<math aria-hidden="true" style="display:none" id="'),el=oe('">'),Ks=oe("</math>"),Qs=oe('<table hidden id="'),qs=oe('">'),tl=oe("</table>"),Ss=oe('<table hidden><tbody id="'),ou=oe('">'),nl=oe("</tbody></table>"),dc=oe('<table hidden><tr id="'),la=oe('">'),il=oe("</tr></table>"),Or=oe('<table hidden><colgroup id="'),lu=oe('">'),pc=oe("</colgroup></table>");function ca(r,s,f,m){switch(f.insertionMode){case 0:case 1:case 3:case 2:return V(r,Fr),V(r,s.segmentPrefix),V(r,we(m.toString(16))),xe(r,uc);case 4:return V(r,hc),V(r,s.segmentPrefix),V(r,we(m.toString(16))),xe(r,$o);case 5:return V(r,Js),V(r,s.segmentPrefix),V(r,we(m.toString(16))),xe(r,el);case 6:return V(r,Qs),V(r,s.segmentPrefix),V(r,we(m.toString(16))),xe(r,qs);case 7:return V(r,Ss),V(r,s.segmentPrefix),V(r,we(m.toString(16))),xe(r,ou);case 8:return V(r,dc),V(r,s.segmentPrefix),V(r,we(m.toString(16))),xe(r,la);case 9:return V(r,Or),V(r,s.segmentPrefix),V(r,we(m.toString(16))),xe(r,lu);default:throw Error(t(397))}}function js(r,s){switch(s.insertionMode){case 0:case 1:case 3:case 2:return xe(r,fc);case 4:return xe(r,Mn);case 5:return xe(r,Ks);case 6:return xe(r,tl);case 7:return xe(r,nl);case 8:return xe(r,il);case 9:return xe(r,pc);default:throw Error(t(397))}}var cu=oe('$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'),uu=oe('$RS("'),fu=oe('","'),Ff=oe('")<\/script>');oe('<template data-rsi="" data-sid="'),oe('" data-pid="');var hu=oe(`$RB=[];$RV=function(a){$RT=performance.now();for(var b=0;b<a.length;b+=2){var c=a[b],e=a[b+1];null!==e.parentNode&&e.parentNode.removeChild(e);var f=c.parentNode;if(f){var g=c.previousSibling,h=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d||"/&"===d)if(0===h)break;else h--;else"$"!==d&&"$?"!==d&&"$~"!==d&&"$!"!==d&&"&"!==d||h++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;e.firstChild;)f.insertBefore(e.firstChild,c);g.data="$";g._reactRetry&&requestAnimationFrame(g._reactRetry)}}a.length=0};
$RC=function(a,b){if(b=document.getElementById(b))(a=document.getElementById(a))?(a.previousSibling.data="$~",$RB.push(a,b),2===$RB.length&&("number"!==typeof $RT?requestAnimationFrame($RV.bind(null,$RB)):(a=performance.now(),setTimeout($RV.bind(null,$RB),2300>a&&2E3<a?2300-a:$RT+300-a)))):b.parentNode.removeChild(b)};`),du=we(`$RV=function(B,g){function h(a,c){var e=a.getAttribute(c);e&&(c=a.style,l.push(a,c.viewTransitionName,c.viewTransitionClass),"auto"!==e&&(c.viewTransitionClass=e),(a=a.getAttribute("vt-name"))||(a="_T_"+N++ +"_"),a=CSS.escape(a)!==a?"r-"+btoa(a).replace(/=/g,""):a,c.viewTransitionName=a,C=!0)}var C=!1,N=0,l=[];try{var f=document.__reactViewTransition;if(f){f.finished.finally($RV.bind(null,g));return}var m=new Map;for(f=1;f<g.length;f+=2)for(var k=g[f].querySelectorAll("[vt-share]"),d=0;d<k.length;d++){var b=k[d];m.set(b.getAttribute("vt-name"),b)}var u=[];for(k=0;k<g.length;k+=2){var D=g[k],x=D.parentNode;if(x){var v=x.getBoundingClientRect();if(v.left||v.top||v.width||v.height){b=D;for(f=0;b;){if(8===b.nodeType){var t=b.data;if("/$"===t)if(0===f)break;else f--;else"$"!==t&&"$?"!==t&&"$~"!==t&&"$!"!==t||f++}else if(1===b.nodeType){d=b;var E=d.getAttribute("vt-name"),y=m.get(E);h(d,y?"vt-share":"vt-exit");y&&(h(y,"vt-share"),m.set(E,null));for(var F=d.querySelectorAll("[vt-share]"),
z=0;z<F.length;z++){var G=F[z],H=G.getAttribute("vt-name"),I=m.get(H);I&&(h(G,"vt-share"),h(I,"vt-share"),m.set(H,null))}var J=d.querySelectorAll("[vt-parent-exit]");for(d=0;d<J.length;d++)h(J[d],"vt-parent-exit")}b=b.nextSibling}for(var K=g[k+1],n=K.firstElementChild;n;){null!==m.get(n.getAttribute("vt-name"))&&h(n,"vt-enter");var L=n.querySelectorAll("[vt-parent-enter]");for(b=0;b<L.length;b++)h(L[b],"vt-parent-enter");n=n.nextElementSibling}b=x;do for(var p=b.firstElementChild;p;){var M=p.getAttribute("vt-update");
M&&"none"!==M&&!l.includes(p)&&h(p,"vt-update");p=p.nextElementSibling}while((b=b.parentNode)&&1===b.nodeType&&"none"!==b.getAttribute("vt-update"));u.push.apply(u,K.querySelectorAll('img[src]:not([loading="lazy"])'))}}}if(C){var A=document.__reactViewTransition=document.startViewTransition({update:function(){B(g);for(var a=[document.documentElement.clientHeight,document.fonts.ready],c={},e=0;e<u.length;c={g:c.g},e++)if(c.g=u[e],!c.g.complete){var q=c.g.getBoundingClientRect();0<q.bottom&&0<q.right&&
q.top<window.innerHeight&&q.left<window.innerWidth&&(q=new Promise(function(w){return function(r){w.g.addEventListener("load",r);w.g.addEventListener("error",r)}}(c)),a.push(q))}return Promise.race([Promise.all(a),new Promise(function(w){var r=performance.now();setTimeout(w,2300>r&&2E3<r?2300-r:500)})])},types:[]});A.ready.finally(function(){for(var a=l.length-3;0<=a;a-=3){var c=l[a],e=c.style;e.viewTransitionName=l[a+1];e.viewTransitionClass=l[a+1];""===c.getAttribute("style")&&c.removeAttribute("style")}});
A.finished.finally(function(){document.__reactViewTransition===A&&(document.__reactViewTransition=null)});$RB=[];return}}catch(a){}B(g)}.bind(null,$RV);`),Of=oe('$RC("'),pu=oe(`$RM=new Map;$RR=function(n,w,p){function u(q){this._p=null;q()}for(var r=new Map,t=document,h,b,e=t.querySelectorAll("link[data-precedence],style[data-precedence]"),v=[],k=0;b=e[k++];)"not all"===b.getAttribute("media")?v.push(b):("LINK"===b.tagName&&$RM.set(b.getAttribute("href"),b),r.set(b.dataset.precedence,h=b));e=0;b=[];var l,a;for(k=!0;;){if(k){var f=p[e++];if(!f){k=!1;e=0;continue}var c=!1,m=0;var d=f[m++];if(a=$RM.get(d)){var g=a._p;c=!0}else{a=t.createElement("link");a.href=d;a.rel=
"stylesheet";for(a.dataset.precedence=l=f[m++];g=f[m++];)a.setAttribute(g,f[m++]);g=a._p=new Promise(function(q,x){a.onload=u.bind(a,q);a.onerror=u.bind(a,x)});$RM.set(d,a)}d=a.getAttribute("media");!g||d&&!matchMedia(d).matches||b.push(g);if(c)continue}else{a=v[e++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=r.get(l)||h;c===h&&(h=a);r.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=t.head,c.insertBefore(a,c.firstChild))}if(p=document.getElementById(n))p.previousSibling.data=
"$~";Promise.all(b).then($RC.bind(null,n,w),$RX.bind(null,n,"CSS failed to load"))};$RR("`),gu=oe('$RR("'),Bf=oe('","'),mu=oe('",'),rl=oe('"'),zf=oe(")<\/script>");oe('<template data-rci="" data-bid="'),oe('<template data-rri="" data-bid="'),oe('" data-sid="'),oe('" data-sty="');var gc=oe('$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,null!=c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};'),vu=oe('$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,null!=c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX("'),Ba=oe('$RX("'),mc=oe('"'),al=oe(","),_u=oe("null"),bs=oe(")<\/script>");oe('<template data-rxi="" data-bid="'),oe('" data-dgst="'),oe('" data-msg="'),oe('" data-stck="'),oe('" data-cstck="');var kf=/[<\u2028\u2029]/g;function Hf(r){return JSON.stringify(r).replace(kf,function(s){switch(s){case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}var Gf=/[&><\u2028\u2029]/g;function zn(r){return JSON.stringify(r).replace(Gf,function(s){switch(s){case"&":return"\\u0026";case">":return"\\u003e";case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}var sl=oe(' media="not all" data-precedence="'),vc=oe('" data-href="'),ol=oe('">'),xu=oe("</style>"),Mr=!1,za=!0;function _c(r){var s=r.rules,f=r.hrefs,m=0;if(f.length){for(V(this,B.startInlineStyle),V(this,sl),V(this,r.precedence),V(this,vc);m<f.length-1;m++)V(this,f[m]),V(this,yc);for(V(this,f[m]),V(this,ol),m=0;m<s.length;m++)V(this,s[m]);za=xe(this,xu),Mr=!0,s.length=0,f.length=0}}function ka(r){return r.state!==2?Mr=!0:!1}function Xn(r,s,f){return Mr=!1,za=!0,B=f,s.styles.forEach(_c,r),B=null,s.stylesheets.forEach(ka),Mr&&(f.stylesToHoist=!0),za}function ii(r){for(var s=0;s<r.length;s++)V(this,r[s]);r.length=0}var Ln=[];function xc(r){Le(Ln,r.props);for(var s=0;s<Ln.length;s++)V(this,Ln[s]);Ln.length=0,r.state=2}var Mc=oe(' data-precedence="'),$s=oe('" data-href="'),yc=oe(" "),Mu=oe('">'),yu=oe("</style>");function ll(r){var s=0<r.sheets.size;r.sheets.forEach(xc,this),r.sheets.clear();var f=r.rules,m=r.hrefs;if(!s||m.length){if(V(this,B.startInlineStyle),V(this,Mc),V(this,r.precedence),r=0,m.length){for(V(this,$s);r<m.length-1;r++)V(this,m[r]),V(this,yc);V(this,m[r])}for(V(this,Mu),r=0;r<f.length;r++)V(this,f[r]);V(this,yu),f.length=0,m.length=0}}function cl(r){if(r.state===0){r.state=1;var s=r.props;for(Le(Ln,{rel:"preload",as:"style",href:r.props.href,crossOrigin:s.crossOrigin,fetchPriority:s.fetchPriority,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy}),r=0;r<Ln.length;r++)V(this,Ln[r]);Ln.length=0}}function Ni(r){r.sheets.forEach(cl,this),r.sheets.clear()}oe('<link rel="expect" href="#'),oe('" blocking="render"/>');var ul=oe(' id="');function Es(r,s){(s.instructions&32)===0&&(s.instructions|=32,r.push(ul,we(Ye("_"+s.idPrefix+"R_")),mt))}var Sc=oe("["),bc=oe(",["),eo=oe(","),fl=oe("]");function Su(r,s){V(r,Sc);var f=Sc;s.stylesheets.forEach(function(m){if(m.state!==2)if(m.state===3)V(r,f),V(r,we(zn(""+m.props.href))),V(r,fl),f=bc;else{V(r,f);var b=m.props["data-precedence"],I=m.props,X=Sn(""+m.props.href);V(r,we(zn(X))),b=""+b,V(r,eo),V(r,we(zn(b)));for(var Z in I)if(P.call(I,Z)&&(b=I[Z],b!=null))switch(Z){case"href":case"rel":case"precedence":case"data-precedence":break;case"children":case"dangerouslySetInnerHTML":throw Error(t(399,"link"));default:Yn(r,Z,b)}V(r,fl),f=bc,m.state=3}}),V(r,fl)}function Yn(r,s,f){var m=s.toLowerCase();switch(typeof f){case"function":case"symbol":return}switch(s){case"innerHTML":case"dangerouslySetInnerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":case"style":case"ref":return;case"className":m="class",s=""+f;break;case"hidden":if(f===!1)return;s="";break;case"src":case"href":f=Sn(f),s=""+f;break;default:if(2<s.length&&(s[0]==="o"||s[0]==="O")&&(s[1]==="n"||s[1]==="N")||!St(s))return;s=""+f}V(r,eo),V(r,we(zn(m))),V(r,eo),V(r,we(zn(s)))}function Ec(){return{styles:new Set,stylesheets:new Set,suspenseyImages:!1}}function to(r){var s=rn||null;if(s){var f=s.resumableState,m=s.renderState;if(typeof r=="string"&&r){if(!f.dnsResources.hasOwnProperty(r)){f.dnsResources[r]=null,f=m.headers;var b,I;(I=f&&0<f.remainingCapacity)&&(I=(b="<"+(""+r).replace(ro,pl)+">; rel=dns-prefetch",0<=(f.remainingCapacity-=b.length+2))),I?(m.resets.dns[r]=null,f.preconnects&&(f.preconnects+=", "),f.preconnects+=b):(b=[],Le(b,{href:r,rel:"dns-prefetch"}),m.preconnects.add(b))}ns(s)}}else en.D(r)}function hl(r,s){var f=rn||null;if(f){var m=f.resumableState,b=f.renderState;if(typeof r=="string"&&r){var I=s==="use-credentials"?"credentials":typeof s=="string"?"anonymous":"default";if(!m.connectResources[I].hasOwnProperty(r)){m.connectResources[I][r]=null,m=b.headers;var X,Z;if(Z=m&&0<m.remainingCapacity){if(Z="<"+(""+r).replace(ro,pl)+">; rel=preconnect",typeof s=="string"){var j=(""+s).replace(Ga,Ts);Z+='; crossorigin="'+j+'"'}Z=(X=Z,0<=(m.remainingCapacity-=X.length+2))}Z?(b.resets.connect[I][r]=null,m.preconnects&&(m.preconnects+=", "),m.preconnects+=X):(I=[],Le(I,{rel:"preconnect",href:r,crossOrigin:s}),b.preconnects.add(I))}ns(f)}}else en.C(r,s)}function Ha(r,s,f){var m=rn||null;if(m){var b=m.resumableState,I=m.renderState;if(s&&r){switch(s){case"image":if(f)var X=f.imageSrcSet,Z=f.imageSizes,j=f.fetchPriority;var ee=X?X+`
`+(Z||""):r;if(b.imageResources.hasOwnProperty(ee))return;b.imageResources[ee]=dt,b=I.headers;var Se;b&&0<b.remainingCapacity&&typeof X!="string"&&j==="high"&&(Se=io(r,s,f),0<=(b.remainingCapacity-=Se.length+2))?(I.resets.image[ee]=dt,b.highImagePreloads&&(b.highImagePreloads+=", "),b.highImagePreloads+=Se):(b=[],Le(b,me({rel:"preload",href:X?void 0:r,as:s},f)),j==="high"?I.highImagePreloads.add(b):(I.bulkPreloads.add(b),I.preloads.images.set(ee,b)));break;case"style":if(b.styleResources.hasOwnProperty(r))return;X=[],Le(X,me({rel:"preload",href:r,as:s},f)),b.styleResources[r]=!f||typeof f.crossOrigin!="string"&&typeof f.integrity!="string"?dt:[f.crossOrigin,f.integrity],I.preloads.stylesheets.set(r,X),I.bulkPreloads.add(X);break;case"script":if(b.scriptResources.hasOwnProperty(r))return;X=[],I.preloads.scripts.set(r,X),I.bulkPreloads.add(X),Le(X,me({rel:"preload",href:r,as:s},f)),b.scriptResources[r]=!f||typeof f.crossOrigin!="string"&&typeof f.integrity!="string"?dt:[f.crossOrigin,f.integrity];break;default:if(b.unknownResources.hasOwnProperty(s)){if(X=b.unknownResources[s],X.hasOwnProperty(r))return}else X={},b.unknownResources[s]=X;X[r]=dt,(b=I.headers)&&0<b.remainingCapacity&&s==="font"&&(ee=io(r,s,f),0<=(b.remainingCapacity-=ee.length+2))?(I.resets.font[r]=dt,b.fontPreloads&&(b.fontPreloads+=", "),b.fontPreloads+=ee):(b=[],r=me({rel:"preload",href:r,as:s},f),Le(b,r),s)==="font"?I.fontPreloads.add(b):I.bulkPreloads.add(b)}ns(m)}}else en.L(r,s,f)}function Tc(r,s){var f=rn||null;if(f){var m=f.resumableState,b=f.renderState;if(r){var I=s&&typeof s.as=="string"?s.as:"script";switch(I){case"script":if(m.moduleScriptResources.hasOwnProperty(r))return;I=[],m.moduleScriptResources[r]=!s||typeof s.crossOrigin!="string"&&typeof s.integrity!="string"?dt:[s.crossOrigin,s.integrity],b.preloads.moduleScripts.set(r,I);break;default:if(m.moduleUnknownResources.hasOwnProperty(I)){var X=m.moduleUnknownResources[I];if(X.hasOwnProperty(r))return}else X={},m.moduleUnknownResources[I]=X;I=[],X[r]=dt}Le(I,me({rel:"modulepreload",href:r},s)),b.bulkPreloads.add(I),ns(f)}}else en.m(r,s)}function wc(r,s,f){var m=rn||null;if(m){var b=m.resumableState,I=m.renderState;if(r){s=s||"default";var X=I.styles.get(s),Z=b.styleResources.hasOwnProperty(r)?b.styleResources[r]:void 0;Z!==null&&(b.styleResources[r]=null,X||(X={precedence:we(Ye(s)),rules:[],hrefs:[],sheets:new Map},I.styles.set(s,X)),s={state:0,props:me({rel:"stylesheet",href:r,"data-precedence":s},f)},Z&&(Z.length===2&&sr(s.props,Z),(I=I.preloads.stylesheets.get(r))&&0<I.length?I.length=0:s.state=1),X.sheets.set(r,s),ns(m))}}else en.S(r,s,f)}function dl(r,s){var f=rn||null;if(f){var m=f.resumableState,b=f.renderState;if(r){var I=m.scriptResources.hasOwnProperty(r)?m.scriptResources[r]:void 0;I!==null&&(m.scriptResources[r]=null,s=me({src:r,async:!0},s),I&&(I.length===2&&sr(s,I),r=b.preloads.scripts.get(r))&&(r.length=0),r=[],b.scripts.add(r),Zt(r,s),ns(f))}}else en.X(r,s)}function no(r,s){var f=rn||null;if(f){var m=f.resumableState,b=f.renderState;if(r){var I=m.moduleScriptResources.hasOwnProperty(r)?m.moduleScriptResources[r]:void 0;I!==null&&(m.moduleScriptResources[r]=null,s=me({src:r,type:"module",async:!0},s),I&&(I.length===2&&sr(s,I),r=b.preloads.moduleScripts.get(r))&&(r.length=0),r=[],b.scripts.add(r),Zt(r,s),ns(f))}}else en.M(r,s)}function sr(r,s){r.crossOrigin==null&&(r.crossOrigin=s[0]),r.integrity==null&&(r.integrity=s[1])}function io(r,s,f){r=(""+r).replace(ro,pl),s=(""+s).replace(Ga,Ts),s="<"+r+'>; rel=preload; as="'+s+'"';for(var m in f)P.call(f,m)&&(r=f[m],typeof r=="string"&&(s+="; "+m.toLowerCase()+'="'+(""+r).replace(Ga,Ts)+'"'));return s}var ro=/[<>\r\n]/g;function pl(r){switch(r){case"<":return"%3C";case">":return"%3E";case`
`:return"%0A";case"\r":return"%0D";default:throw Error("escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}}var Ga=/["';,\r\n]/g;function Ts(r){switch(r){case'"':return"%22";case"'":return"%27";case";":return"%3B";case",":return"%2C";case`
`:return"%0A";case"\r":return"%0D";default:throw Error("escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}}function ao(r){this.styles.add(r)}function so(r){this.stylesheets.add(r)}function ua(r,s){s.styles.forEach(ao,r),s.stylesheets.forEach(so,r),s.suspenseyImages&&(r.suspenseyImages=!0)}function Ac(r,s){return s?r.suspenseyImages:0<r.stylesheets.size||r.suspenseyImages}var bu=Function.prototype.bind,gl=Symbol.for("react.client.reference");function Va(r){if(r==null)return null;if(typeof r=="function")return r.$$typeof===gl?null:r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case c:return"Fragment";case d:return"Profiler";case u:return"StrictMode";case E:return"Suspense";case _:return"SuspenseList";case w:return"Activity";case k:return"ViewTransition"}if(typeof r=="object")switch(r.$$typeof){case o:return"Portal";case g:return r.displayName||"Context";case p:return(r._context.displayName||"Context")+".Consumer";case S:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case x:return s=r.displayName||null,s!==null?s:Va(r.type)||"Memo";case R:s=r._payload,r=r._init;try{return Va(r(s))}catch{}}return null}var fa={},Wa=null;function ml(r,s){if(r!==s){r.context._currentValue=r.parentValue,r=r.parent;var f=s.parent;if(r===null){if(f!==null)throw Error(t(401))}else{if(f===null)throw Error(t(401));ml(r,f)}s.context._currentValue=s.value}}function vl(r){r.context._currentValue=r.parentValue,r=r.parent,r!==null&&vl(r)}function Eu(r){var s=r.parent;s!==null&&Eu(s),r.context._currentValue=r.value}function oo(r,s){if(r.context._currentValue=r.parentValue,r=r.parent,r===null)throw Error(t(402));r.depth===s.depth?ml(r,s):oo(r,s)}function Tu(r,s){var f=s.parent;if(f===null)throw Error(t(402));r.depth===f.depth?ml(r,f):Tu(r,f),s.context._currentValue=s.value}function Br(r){var s=Wa;s!==r&&(s===null?Eu(r):r===null?vl(s):s.depth===r.depth?ml(s,r):s.depth>r.depth?oo(s,r):Tu(s,r),Wa=r)}var a={enqueueSetState:function(r,s){r=r._reactInternals,r.queue!==null&&r.queue.push(s)},enqueueReplaceState:function(r,s){r=r._reactInternals,r.replace=!0,r.queue=[s]},enqueueForceUpdate:function(){}},l={id:1,overflow:""};function h(r){var s=r.overflow;return r=r.id,(r&~(1<<32-T(r)-1)).toString(32)+s}function v(r,s,f){var m=r.id;r=r.overflow;var b=32-T(m)-1;m&=~(1<<b),f+=1;var I=32-T(s)+b;if(30<I){var X=b-b%5;return I=(m&(1<<X)-1).toString(32),m>>=X,b-=X,{id:1<<32-T(s)+b|f<<b|m,overflow:I+r}}return{id:1<<I|f<<b|m,overflow:r}}var T=Math.clz32?Math.clz32:he,U=Math.log,$=Math.LN2;function he(r){return r>>>=0,r===0?32:31-(U(r)/$|0)|0}function re(){}var se=Error(t(460));function Pe(r,s,f){switch(f=r[f],f===void 0?r.push(s):f!==s&&(s.then(re,re),s=f),s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,r===void 0&&!("reason"in s)?Error(t(600)):r;default:switch(typeof s.status=="string"?s.then(re,re):(r=s,r.status="pending",r.then(function(m){if(s.status==="pending"){var b=s;b.status="fulfilled",b.value=m}},function(m){if(s.status==="pending"){var b=s;b.status="rejected",b.reason=m}})),s.status){case"fulfilled":return s.value;case"rejected":throw s.reason}throw Ie=s,se}}var Ie=null;function Je(){if(Ie===null)throw Error(t(459));var r=Ie;return Ie=null,r}function Ze(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var $e=typeof Object.is=="function"?Object.is:Ze,gt=null,on=null,Kt=null,pn=null,In=null,_t=null,Dt=!1,qt=!1,cn=0,ri=0,zt=-1,En=0,yn=null;function Zn(r){if(r=r._reason,typeof r=="function")try{var s=r()}catch{s="The reason for browser-only rendering could not be determined because its initializer threw."}else s=r;return s=Error(t(603),r===void 0?void 0:{cause:s}),Object.defineProperty(s,C,{value:!0}),s}function gn(r){return typeof r!="object"||r===null?!1:r[C]===!0}function ui(r){var s=Error(t(604),P.call(r,"cause")?{cause:r.cause}:void 0);if(r=r.stack,r!==void 0){var f=r.indexOf(`
`);s.stack=s.name+": "+s.message+(f===-1?"":r.slice(f))}else s.stack=void 0;return s}var vn=null,or=0;function kn(){if(gt===null)throw Error(t(321));return gt}function Gn(){if(0<or)throw Error(t(312));return{memoizedState:null,queue:null,next:null}}function zr(){return _t===null?In===null?(Dt=!1,In=_t=Gn()):(Dt=!0,_t=In):_t.next===null?(Dt=!1,_t=_t.next=Gn()):(Dt=!0,_t=_t.next),_t}function Rn(){var r=yn;return yn=null,r}function Si(){pn=Kt=on=gt=null,qt=!1,In=null,or=0,_t=vn=null}function Qn(r,s){return typeof s=="function"?s(r):s}function Ui(r,s,f){if(gt=kn(),_t=zr(),Dt){var m=_t.queue;if(s=m.dispatch,vn!==null&&(f=vn.get(m),f!==void 0)){vn.delete(m),m=_t.memoizedState;do m=r(m,f.action),f=f.next;while(f!==null);return _t.memoizedState=m,[m,s]}return[_t.memoizedState,s]}return r=r===Qn?typeof s=="function"?s():s:f!==void 0?f(s):s,_t.memoizedState=r,r=_t.queue={last:null,dispatch:null},r=r.dispatch=yr.bind(null,gt,r),[_t.memoizedState,r]}function Yi(r,s){if(gt=kn(),_t=zr(),s=s===void 0?null:s,_t!==null){var f=_t.memoizedState;if(f!==null&&s!==null){var m=f[1];e:if(m===null)m=!1;else{for(var b=0;b<m.length&&b<s.length;b++)if(!$e(s[b],m[b])){m=!1;break e}m=!0}if(m)return f[0]}}return r=r(),_t.memoizedState=[r,s],r}function yr(r,s,f){if(25<=or)throw Error(t(301));if(r===gt)if(qt=!0,r={action:f,next:null},vn===null&&(vn=new Map),f=vn.get(s),f===void 0)vn.set(s,r);else{for(s=f;s.next!==null;)s=s.next;s.next=r}}function Cn(){throw Error(t(440))}function kr(){throw Error(t(394))}function Xa(){throw Error(t(479))}function lr(r,s,f){kn();var m=ri++,b=Kt;if(typeof r.$$FORM_ACTION=="function"){var I=null,X=pn;b=b.formState;var Z=r.$$IS_SIGNATURE_EQUAL;if(b!==null&&typeof Z=="function"){var j=b[1];Z.call(r,b[2],b[3])&&(I=f!==void 0?"p"+f:"k"+z(JSON.stringify([X,null,m]),0),j===I&&(zt=m,s=b[0]))}var ee=r.bind(null,s);return r=function(Re){ee(Re)},typeof ee.$$FORM_ACTION=="function"&&(r.$$FORM_ACTION=function(Re){Re=ee.$$FORM_ACTION(Re),f!==void 0&&(f+="",Re.action=f);var He=Re.data;return He&&(I===null&&(I=f!==void 0?"p"+f:"k"+z(JSON.stringify([X,null,m]),0)),He.append("$ACTION_KEY",I)),Re}),[s,r,!1]}var Se=r.bind(null,s);return[s,function(Re){Se(Re)},!1]}function Hr(r){var s=En;return En+=1,yn===null&&(yn=[]),Pe(yn,r,s)}function lo(){throw Error(t(393))}var Ya={readContext:function(r){return r._currentValue},use:function(r){if(r!==null&&typeof r=="object"){if(typeof r.then=="function")return Hr(r);if(r.$$typeof===C)throw Zn(r);if(r.$$typeof===g)return r._currentValue}throw Error(t(438,String(r)))},useContext:function(r){return kn(),r._currentValue},useMemo:Yi,useReducer:Ui,useRef:function(r){gt=kn(),_t=zr();var s=_t.memoizedState;return s===null?(r={current:r},_t.memoizedState=r):s},useState:function(r){return Ui(Qn,r)},useInsertionEffect:re,useLayoutEffect:re,useCallback:function(r,s){return Yi(function(){return r},s)},useImperativeHandle:re,useEffect:re,useDebugValue:re,useDeferredValue:function(r,s){return kn(),s!==void 0?s:r},useTransition:function(){return kn(),[!1,kr]},useId:function(){var r=h(on.treeContext),s=Gr;if(s===null)throw Error(t(404));var f=cn++;return it(s,r,f)},useSyncExternalStore:function(r,s,f){if(f===void 0)throw Error(t(407));return f()},useOptimistic:function(r){return kn(),[r,Xa]},useActionState:lr,useFormState:lr,useHostTransitionStatus:function(){return kn(),Y},useMemoCache:function(r){for(var s=Array(r),f=0;f<r;f++)s[f]=O;return s},useCacheRefresh:function(){return lo},useEffectEvent:function(){return Cn}},Gr=null,_l={getCacheForType:function(){throw Error(t(248))},cacheSignal:function(){throw Error(t(248))}},Zi,ai;function Sr(r){if(Zi===void 0)try{throw Error()}catch(f){var s=f.stack.trim().match(/\n( *(at )?)/);Zi=s&&s[1]||"",ai=-1<f.stack.indexOf(`
    at`)?" (<anonymous>)":-1<f.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Zi+r+ai}var Za=!1;function br(r,s){if(!r||Za)return"";Za=!0;var f=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var m={DetermineComponentFrameRoot:function(){try{if(s){var Re=function(){throw Error()};if(Object.defineProperty(Re.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Re,[])}catch(et){var He=et}Reflect.construct(r,[],Re)}else{try{Re.call()}catch(et){He=et}Re=!1;try{var We=Object.getOwnPropertyDescriptor(r.prototype,"props");Object.defineProperty(r.prototype,"props",{configurable:!0,set:function(){throw Error()}}),Re=!0,new r}finally{Re&&(We!==void 0?Object.defineProperty(r.prototype,"props",We):delete r.prototype.props)}}}else{try{throw Error()}catch(et){He=et}(Re=r())&&typeof Re.catch=="function"&&Re.catch(function(){})}}catch(et){if(et&&He&&typeof et.stack=="string")return[et.stack,He.stack]}return[null,null]}};m.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var b=Object.getOwnPropertyDescriptor(m.DetermineComponentFrameRoot,"name");b&&b.configurable&&Object.defineProperty(m.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var I=m.DetermineComponentFrameRoot(),X=I[0],Z=I[1];if(X&&Z){var j=X.split(`
`),ee=Z.split(`
`);for(b=m=0;m<j.length&&!j[m].includes("DetermineComponentFrameRoot");)m++;for(;b<ee.length&&!ee[b].includes("DetermineComponentFrameRoot");)b++;if(m===j.length||b===ee.length)for(m=j.length-1,b=ee.length-1;1<=m&&0<=b&&j[m]!==ee[b];)b--;for(;1<=m&&0<=b;m--,b--)if(j[m]!==ee[b]){if(m!==1||b!==1)do if(m--,b--,0>b||j[m]!==ee[b]){var Se=`
`+j[m].replace(" at new "," at ");return r.displayName&&Se.includes("<anonymous>")&&(Se=Se.replace("<anonymous>",r.displayName)),Se}while(1<=m&&0<=b);break}}}finally{Za=!1,Error.prepareStackTrace=f}return(f=r?r.displayName||r.name:"")?Sr(f):""}function co(r){if(typeof r=="string")return Sr(r);if(typeof r=="function")return r.prototype&&r.prototype.isReactComponent?br(r,!0):br(r,!1);if(typeof r=="object"&&r!==null){switch(r.$$typeof){case S:return br(r.render,!1);case x:return br(r.type,!1);case R:var s=r,f=s._payload;s=s._init;try{r=s(f)}catch{return Sr("Lazy")}return co(r)}if(typeof r.name=="string"){e:{f=r.name,s=r.env;var m=r.debugLocation;if(m!=null&&(r=Error.prepareStackTrace,Error.prepareStackTrace=void 0,m=m.stack,Error.prepareStackTrace=r,m.startsWith(`Error: react-stack-top-frame
`)&&(m=m.slice(29)),r=m.indexOf(`
`),r!==-1&&(m=m.slice(r+1)),r=m.indexOf("react_stack_bottom_frame"),r!==-1&&(r=m.lastIndexOf(`
`,r)),r=r!==-1?m=m.slice(0,r):"",m=r.lastIndexOf(`
`),r=m===-1?r:r.slice(m+1),r.indexOf(f)!==-1)){f=`
`+r;break e}f=Sr(f+(s?" ["+s+"]":""))}return f}}switch(r){case _:return Sr("SuspenseList");case E:return Sr("Suspense");case k:return Sr("ViewTransition")}return""}function Ji(r,s){return r=r==null||typeof r=="string"?r:r.default,s=s==null||typeof s=="string"?s:s.default,s==null?r==="auto"?null:r:s==="auto"?null:s}function Fi(r,s){return(500<s.byteSize||Ac(s.contentState,!1)||s.defer)&&s.preamble===null}function Ja(r){if(typeof r=="object"&&r!==null&&typeof r.environmentName=="string"){var s=r.environmentName;r=[r].slice(0),typeof r[0]=="string"?r.splice(0,1,"%c%s%c "+r[0],"background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px"," "+s+" ",""):r.splice(0,0,"%c%s%c","background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px"," "+s+" ",""),r.unshift(console),s=bu.apply(console.error,r),s()}else console.error(r);return null}function Vr(r,s,f,m,b,I,X,Z,j,ee,Se){var Re=new Set;this.destination=null,this.flushScheduled=!1,this.resumableState=r,this.renderState=s,this.rootFormatContext=f,this.progressiveChunkSize=m===void 0?12800:m,this.status=10,this.fatalError=null,this.aborted=!1,this.pendingRootTasks=this.allPendingTasks=this.nextSegmentId=0,this.completedPreambleSegments=this.completedRootSegment=null,this.byteSize=0,this.abortableTasks=Re,this.pingedTasks=[],this.currentTask=null,this.clientRenderedBoundaries=[],this.completedBoundaries=[],this.partialBoundaries=[],this.postponedState=this.trackedPostpones=null,this.onError=b===void 0?Ja:b,this.onBrowserBailout=I===void 0?re:I,this.onAllReady=X===void 0?re:X,this.onShellReady=Z===void 0?re:Z,this.onShellError=j===void 0?re:j,this.onFatalError=ee===void 0?re:ee,this.renderLifetimeController=null,this.formState=Se===void 0?null:Se}function ha(r,s,f,m,b,I,X,Z,j,ee,Se,Re){return s=new Vr(s,f,m,b,I,X,Z,j,ee,Se,Re),f=Ki(s,0,null,m,!1,!1),f.parentFlushed=!0,r=ga(s,null,r,-1,null,f,null,null,s.abortableTasks,null,m,null,l,null,null),bi(r),s.pingedTasks.push(r),s}function Er(r,s,f,m,b,I,X,Z,j,ee,Se){return r=ha(r,s,f,m,b,I,X,Z,j,ee,Se,void 0),r.trackedPostpones={workingMap:new Map,rootNodes:[],rootSlots:null},r}function Ka(r,s,f,m,b,I,X,Z,j){return f=new Vr(s.resumableState,f,s.rootFormatContext,s.progressiveChunkSize,m,b,I,X,Z,j,null),f.nextSegmentId=s.nextSegmentId,typeof s.replaySlots=="number"?(m=Ki(f,0,null,s.rootFormatContext,!1,!1),m.parentFlushed=!0,r=ga(f,null,r,-1,null,m,null,null,f.abortableTasks,null,s.rootFormatContext,null,l,null,null),bi(r),f.pingedTasks.push(r),f):(r=Oi(f,null,{nodes:s.replayNodes,slots:s.replaySlots,pendingTasks:0},r,-1,null,null,f.abortableTasks,null,s.rootFormatContext,null,l,null,null),bi(r),f.pingedTasks.push(r),f)}function da(r,s,f,m,b,I,X,Z,j){return r=Ka(r,s,f,m,b,I,X,Z,j),r.trackedPostpones={workingMap:new Map,rootNodes:[],rootSlots:null},r}var rn=null;function pa(r,s){r.pingedTasks.push(s),r.pingedTasks.length===1&&(r.flushScheduled=r.destination!==null,r.trackedPostpones!==null||r.status===10?_e(function(){return Ml(r)}):W(function(){return Ml(r)}))}function Wr(r,s,f,m,b){return f={status:0,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,row:s,completedSegments:[],byteSize:0,defer:b,fallbackAbortableTasks:f,errorDigest:null,contentState:Ec(),fallbackState:Ec(),preamble:m,tracked:null},s!==null&&(s.pendingTasks++,m=s.boundaries,m!==null&&(r.allPendingTasks++,f.pendingTasks++,m.push(f)),r=s.inheritedHoistables,r!==null&&ua(f.contentState,r)),f}function ga(r,s,f,m,b,I,X,Z,j,ee,Se,Re,He,We,et){r.allPendingTasks++,b===null?r.pendingRootTasks++:b.pendingTasks++,We!==null&&We.pendingTasks++;var Tt={replay:null,node:f,childIndex:m,ping:{resolve:function(){return pa(r,Tt)},reject:function(Dn){r.aborted?Tt.abortSet.delete(Tt)&&Cr(Tt,r,Dn):pa(r,Tt)}},blockedBoundary:b,blockedSegment:I,blockedPreamble:X,hoistableState:Z,abortSet:j,keyPath:ee,formatContext:Se,context:Re,treeContext:He,row:We,componentStack:et,thenableState:s};return j.add(Tt),Tt}function Oi(r,s,f,m,b,I,X,Z,j,ee,Se,Re,He,We){r.allPendingTasks++,I===null?r.pendingRootTasks++:I.pendingTasks++,He!==null&&He.pendingTasks++,f.pendingTasks++;var et={replay:f,node:m,childIndex:b,ping:{resolve:function(){return pa(r,et)},reject:function(Tt){r.aborted?et.abortSet.delete(et)&&Cr(et,r,Tt):pa(r,et)}},blockedBoundary:I,blockedSegment:null,blockedPreamble:null,hoistableState:X,abortSet:Z,keyPath:j,formatContext:ee,context:Se,treeContext:Re,row:He,componentStack:We,thenableState:s};return Z.add(et),et}function Ki(r,s,f,m,b,I){return{status:0,parentFlushed:!1,id:-1,index:s,chunks:[],children:[],preambleChildren:[],parentFormatContext:m,boundary:f,lastPushedText:b,textEmbedded:I}}function bi(r){var s=r.node;typeof s=="object"&&s!==null&&s.$$typeof===n&&(r.componentStack={parent:r.componentStack,type:s.type})}function Tr(r){return r===null?null:{parent:r.parent,type:"Suspense Fallback"}}function $t(r){var s={};return r&&Object.defineProperty(s,"componentStack",{configurable:!0,enumerable:!0,get:function(){try{var f="",m=r;do f+=co(m.type),m=m.parent;while(m);var b=f}catch(I){b=`
Error generating stack: `+I.message+`
`+I.stack}return Object.defineProperty(s,"componentStack",{value:b}),b}}),s}function mn(r,s,f){if(gn(s))return r=r.onBrowserBailout,r(s,f),"";if(r=r.onError,s=r(s,f),s==null||typeof s=="string")return s===""?void 0:s}function qn(r,s){var f=r.onShellError,m=r.onFatalError;r.pendingRootTasks!==0&&f(s),m(s),is(r),r.destination!==null?(r.status=13,ve(r.destination,s)):(r.status=12,r.aborted||(r.fatalError=s))}function Vn(r,s){ma(r,s.next,s.hoistables)}function ma(r,s,f){for(;s!==null;){f!==null&&(ua(s.hoistables,f),s.inheritedHoistables=f);var m=s.boundaries;if(m!==null){s.boundaries=null;for(var b=0;b<m.length;b++){var I=m[b];f!==null&&ua(I.contentState,f),ji(r,I,null,null)}}if(s.pendingTasks--,0<s.pendingTasks)break;f=s.hoistables,s=s.next}}function va(r,s){var f=s.boundaries;if(f!==null&&s.pendingTasks===f.length){for(var m=!0,b=0;b<f.length;b++){var I=f[b];if(I.pendingTasks!==1||I.parentFlushed||Fi(r,I)){m=!1;break}}m&&ma(r,s,s.hoistables)}}function _a(r){var s={pendingTasks:1,boundaries:null,hoistables:Ec(),inheritedHoistables:null,together:!1,next:null};return r!==null&&0<r.pendingTasks&&(s.pendingTasks++,s.boundaries=[],r.next=s),s}function uo(r,s,f,m,b){var I=s.keyPath,X=s.treeContext,Z=s.row;s.keyPath=f,f=m.length;var j=null;if(s.replay!==null){var ee=s.replay.slots;if(ee!==null&&typeof ee=="object")for(var Se=0;Se<f;Se++){var Re=b!=="backwards"&&b!=="unstable_legacy-backwards"?Se:f-1-Se,He=m[Re];s.row=j=_a(j),s.treeContext=v(X,f,Re);var We=ee[Re];typeof We=="number"?(qi(r,s,We,He,Re),delete ee[Re]):Tn(r,s,He,Re),--j.pendingTasks===0&&Vn(r,j)}else for(ee=0;ee<f;ee++)Se=b!=="backwards"&&b!=="unstable_legacy-backwards"?ee:f-1-ee,Re=m[Se],s.row=j=_a(j),s.treeContext=v(X,f,Se),Tn(r,s,Re,Se),--j.pendingTasks===0&&Vn(r,j)}else if(b!=="backwards"&&b!=="unstable_legacy-backwards")for(b=0;b<f;b++)ee=m[b],s.row=j=_a(j),s.treeContext=v(X,f,b),Tn(r,s,ee,b),--j.pendingTasks===0&&Vn(r,j);else{for(ee=s.blockedSegment,Se=ee.children.length,Re=ee.chunks.length,He=0;He<f;He++){We=b==="unstable_legacy-backwards"?f-1-He:He;var et=m[We];s.row=j=_a(j),s.treeContext=v(X,f,We);var Tt=Ki(r,Re,null,s.formatContext,We===0?ee.lastPushedText:!0,!0);ee.children.splice(Se,0,Tt),s.blockedSegment=Tt;try{Tn(r,s,et,We),Tt.lastPushedText&&Tt.textEmbedded&&Tt.chunks.push(Lt),Tt.status=1,As(r,s.blockedBoundary,Tt),--j.pendingTasks===0&&Vn(r,j)}catch(Dn){throw Tt.status=r.aborted?3:4,Dn}}s.blockedSegment=ee,ee.lastPushedText=!1}Z!==null&&j!==null&&0<j.pendingTasks&&(Z.pendingTasks++,j.next=Z),s.treeContext=X,s.row=Z,s.keyPath=I}function Qi(r,s,f,m,b,I){var X=s.thenableState;for(s.thenableState=null,gt={},on=s,Kt=r,pn=f,ri=cn=0,zt=-1,En=0,yn=X,r=m(b,I);qt;)qt=!1,ri=cn=0,zt=-1,En=0,or+=1,_t=null,r=m(b,I);return Si(),r}function Qa(r,s,f,m,b,I,X){var Z=!1;if(I!==0&&r.formState!==null){var j=s.blockedSegment;if(j!==null){Z=!0,j=j.chunks;for(var ee=0;ee<I;ee++)ee===X?j.push(le):j.push(ce)}}I=s.keyPath,s.keyPath=f,b?(f=s.treeContext,s.treeContext=v(f,1,0),Tn(r,s,m,-1),s.treeContext=f):Z?Tn(r,s,m,-1):Wn(r,s,m,-1),s.keyPath=I}function wr(r,s,f,m,b,I){if(typeof m=="function")if(m.prototype&&m.prototype.isReactComponent){var X=b;if("ref"in b){X={};for(var Z in b)Z!=="ref"&&(X[Z]=b[Z])}var j=m.defaultProps;if(j){X===b&&(X=me({},X,b));for(var ee in j)X[ee]===void 0&&(X[ee]=j[ee])}var Se=X,Re=fa,He=m.contextType;typeof He=="object"&&He!==null&&(Re=He._currentValue);var We=new m(Se,Re),et=We.state!==void 0?We.state:null;We.updater=a,We.props=Se,We.state=et;var Tt={queue:[],replace:!1};We._reactInternals=Tt;var Dn=m.contextType;We.context=typeof Dn=="object"&&Dn!==null?Dn._currentValue:fa;var jn=m.getDerivedStateFromProps;if(typeof jn=="function"){var un=jn(Se,et),Ti=un==null?et:me({},et,un);We.state=Ti}if(typeof m.getDerivedStateFromProps!="function"&&typeof We.getSnapshotBeforeUpdate!="function"&&(typeof We.UNSAFE_componentWillMount=="function"||typeof We.componentWillMount=="function")){var Bi=We.state;if(typeof We.componentWillMount=="function"&&We.componentWillMount(),typeof We.UNSAFE_componentWillMount=="function"&&We.UNSAFE_componentWillMount(),Bi!==We.state&&a.enqueueReplaceState(We,We.state,null),Tt.queue!==null&&0<Tt.queue.length){var zi=Tt.queue,xt=Tt.replace;if(Tt.queue=null,Tt.replace=!1,xt&&zi.length===1)We.state=zi[0];else{for(var wn=xt?zi[0]:We.state,ki=!0,gi=xt?1:0;gi<zi.length;gi++){var Nn=zi[gi],$n=typeof Nn=="function"?Nn.call(We,wn,Se,void 0):Nn;$n!=null&&(ki?(ki=!1,wn=me({},wn,$n)):me(wn,$n))}We.state=wn}}else Tt.queue=null}var Lr=We.render();if(r.aborted)throw null;var Jn=s.keyPath;s.keyPath=f,Wn(r,s,Lr,-1),s.keyPath=Jn}else{var Hi=Qi(r,s,f,m,b,void 0);if(r.aborted)throw null;Qa(r,s,f,Hi,cn!==0,ri,zt)}else if(typeof m=="string"){var Pn=s.blockedSegment;if(Pn===null){var Kr=b.children,$i=s.formatContext,Un=s.keyPath;s.formatContext=Fe($i,m,b),s.keyPath=f,Tn(r,s,Kr,-1),s.formatContext=$i,s.keyPath=Un}else{var ba=di(Pn.chunks,m,b,r.resumableState,r.renderState,s.blockedPreamble,s.hoistableState,s.formatContext,Pn.lastPushedText);Pn.lastPushedText=!1;var Qr=s.formatContext,Ir=s.keyPath;if(s.keyPath=f,(s.formatContext=Fe(Qr,m,b)).insertionMode===3){var wi=Ki(r,0,null,s.formatContext,!1,!1);Pn.preambleChildren.push(wi),s.blockedSegment=wi;try{Tn(r,s,ba,-1),wi.lastPushedText&&wi.textEmbedded&&wi.chunks.push(Lt),wi.status=1,As(r,s.blockedBoundary,wi)}finally{s.blockedSegment=Pn}}else Tn(r,s,ba,-1);s.formatContext=Qr,s.keyPath=Ir;e:{var Cc=Pn.chunks,bl=r.resumableState;switch(m){case"title":case"style":case"script":case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"input":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":break e;case"body":if(1>=Qr.insertionMode){bl.hasBody=!0;break e}break;case"html":if(Qr.insertionMode===0){bl.hasHtml=!0;break e}break;case"head":if(1>=Qr.insertionMode)break e}Cc.push(ti(m))}Pn.lastPushedText=!1}}else{switch(m){case M:case u:case d:case c:var Mo=s.keyPath;s.keyPath=f,Wn(r,s,b.children,-1),s.keyPath=Mo;return;case w:var mi=s.blockedSegment;if(mi===null){if(b.mode!=="hidden"){var Au=s.keyPath;s.keyPath=f,Tn(r,s,b.children,-1),s.keyPath=Au}}else if(b.mode!=="hidden"){mi.chunks.push(ni),mi.lastPushedText=!1;var yo=s.keyPath;s.keyPath=f,Tn(r,s,b.children,-1),s.keyPath=yo,mi.chunks.push(ar),mi.lastPushedText=!1}return;case _:e:{var Ea=b.children,Cs=b.revealOrder;if(Cs!=="independent"&&Cs!=="together"){if(y(Ea)){uo(r,s,f,Ea,Cs);break e}var Pc=D(Ea);if(Pc){var El=Pc.call(Ea);if(El){var Tl=El.next();if(!Tl.done){do Tl=El.next();while(!Tl.done);uo(r,s,f,Ea,Cs)}break e}}}if(Cs==="together"){var Ru=s.keyPath,Ta=s.row,Ai=s.row=_a(null);Ai.boundaries=[],Ai.together=!0,s.keyPath=f,Wn(r,s,Ea,-1),--Ai.pendingTasks===0&&Vn(r,Ai),s.keyPath=Ru,s.row=Ta,Ta!==null&&0<Ai.pendingTasks&&(Ta.pendingTasks++,Ai.next=Ta)}else{var Cu=s.keyPath;s.keyPath=f,Wn(r,s,Ea,-1),s.keyPath=Cu}}return;case k:var qr=s.formatContext,So=s.keyPath,Pu=r.resumableState;if(b.name!=null&&b.name!=="auto")var wa=b.name;else{var bo=h(s.treeContext);wa=it(Pu,bo,0)}var Eo=wa,rs=r.resumableState,Aa=Ji(b.default,b.update),er=Ji(b.default,b.enter),Ps=Ji(b.default,b.exit),as=Ji(b.default,b.share),Dr=b.name;if(Aa==null&&(Aa="auto"),er==null&&(er="auto"),Ps==null&&(Ps="auto"),Dr==null){var wl=qr.viewTransition;wl!==null?(Dr=wl.name,as=wl.share):(Dr="auto",as="none")}else as==null&&(as="auto"),qr.tagScope&4&&(rs.instructions|=128);qr.tagScope&8?rs.instructions|=128:Ps="none",qr.tagScope&16?rs.instructions|=128:er="none";var Al={update:Aa,enter:er,exit:Ps,share:as,parentEnter:"none",parentExit:"none",name:Dr,autoName:Eo,nameIdx:0},Ls=qr.tagScope&-25;Ls=Aa!=="none"?Ls|32:Ls&-33,er!=="none"&&(Ls|=64);var To=Ee(qr.insertionMode,qr.selectedValue,Ls,Al);if(s.formatContext=To,s.keyPath=f,b.name!=null&&b.name!=="auto")Wn(r,s,b.children,-1);else{var Lc=s.treeContext;s.treeContext=v(Lc,1,0),Tn(r,s,b.children,-1),s.treeContext=Lc}s.formatContext=qr,s.keyPath=So;return;case N:throw Error(t(343));case E:e:if(s.replay!==null){var wo=s.keyPath,Is=s.formatContext,Lu=s.row;s.keyPath=f,s.formatContext=rt(r.resumableState,Is),s.row=null;var Iu=b.children;try{Tn(r,s,Iu,-1)}finally{s.keyPath=wo,s.formatContext=Is,s.row=Lu}}else{var Du=s.keyPath,Rl=s.formatContext,jr=s.row,Ic=s.blockedBoundary,Nu=s.blockedPreamble,Vf=s.hoistableState,tr=s.blockedSegment,Ao=b.fallback,Ds=b.children,ss=new Set,_n=Wr(r,s.row,ss,2>s.formatContext.insertionMode?{content:J(),fallback:J()}:null,!1),nr=Ki(r,tr.chunks.length,_n,s.formatContext,!1,!1);tr.children.push(nr),tr.lastPushedText=!1;var Gi=Ki(r,0,null,s.formatContext,!1,!1);Gi.parentFlushed=!0;var Cl=r.trackedPostpones;if(Cl!==null){var Uu=s.componentStack,Ns=[f[0],"Suspense Fallback",f[2]];if(Cl!==null){var Dc=[Ns[1],Ns[2],[],null];Cl.workingMap.set(Ns,Dc),_n.tracked={contentKeyPath:f,fallbackNode:Dc}}s.blockedSegment=nr,s.blockedPreamble=_n.preamble===null?null:_n.preamble.fallback,s.keyPath=Ns,s.formatContext=Ae(r.resumableState,Rl),s.componentStack=Tr(Uu);try{Tn(r,s,Ao,-1),nr.lastPushedText&&nr.textEmbedded&&nr.chunks.push(Lt),nr.status=1,As(r,Ic,nr)}catch(Fl){throw nr.status=r.aborted?3:4,Fl}finally{s.blockedSegment=tr,s.blockedPreamble=Nu,s.keyPath=Du,s.formatContext=Rl}var Ro=ga(r,null,Ds,-1,_n,Gi,_n.preamble===null?null:_n.preamble.content,_n.contentState,s.abortSet,f,rt(r.resumableState,s.formatContext),s.context,s.treeContext,null,Uu);bi(Ro),r.pingedTasks.push(Ro)}else{s.blockedBoundary=_n,s.blockedPreamble=_n.preamble===null?null:_n.preamble.content,s.hoistableState=_n.contentState,s.blockedSegment=Gi,s.keyPath=f,s.formatContext=rt(r.resumableState,Rl),s.row=null;try{if(Tn(r,s,Ds,-1),Gi.lastPushedText&&Gi.textEmbedded&&Gi.chunks.push(Lt),Gi.status=1,As(r,_n,Gi),Ei(_n,Gi),_n.pendingTasks===0&&_n.status===0){if(_n.status=1,!Fi(r,_n)){jr!==null&&--jr.pendingTasks===0&&Vn(r,jr),r.pendingRootTasks===0&&s.blockedPreamble&&Zr(r);break e}}else jr!==null&&jr.together&&va(r,jr)}catch(Fl){if(_n.status=4,r.aborted){Gi.status=3;var Co=r.fatalError}else Gi.status=4,Co=Fl;var Fu=$t(s.componentStack),Pl=mn(r,Co,Fu);_n.errorDigest=Pl,xa(r,_n)}finally{s.blockedBoundary=Ic,s.blockedPreamble=Nu,s.hoistableState=Vf,s.blockedSegment=tr,s.keyPath=Du,s.formatContext=Rl,s.row=jr}var Ll=ga(r,null,Ao,-1,Ic,nr,_n.preamble===null?null:_n.preamble.fallback,_n.fallbackState,ss,[f[0],"Suspense Fallback",f[2]],Ae(r.resumableState,s.formatContext),s.context,s.treeContext,s.row,Tr(s.componentStack));bi(Ll),r.pingedTasks.push(Ll)}}return}if(typeof m=="object"&&m!==null)switch(m.$$typeof){case S:if("ref"in b){var Il={};for(var Dl in b)Dl!=="ref"&&(Il[Dl]=b[Dl])}else Il=b;var Wf=Qi(r,s,f,m.render,Il,I);Qa(r,s,f,Wf,cn!==0,ri,zt);return;case x:wr(r,s,f,m.type,b,I);return;case g:var Nl=b.children,Us=s.keyPath,Ou=b.value,Fs=m._currentValue;m._currentValue=Ou;var Ul=Wa,Os={parent:Ul,depth:Ul===null?0:Ul.depth+1,context:m,parentValue:Fs,value:Ou};Wa=Os,s.context=Os,s.keyPath=f,Wn(r,s,Nl,-1);var os=Wa;if(os===null)throw Error(t(403));os.context._currentValue=os.parentValue;var Po=Wa=os.parent;s.context=Po,s.keyPath=Us;return;case p:var Bu=b.children,ls=Bu(m._context._currentValue),zu=s.keyPath;s.keyPath=f,Wn(r,s,ls,-1),s.keyPath=zu;return;case R:var ku=m._init,Bs=ku(m._payload);if(r.aborted)throw null;wr(r,s,f,Bs,b,I);return}throw Error(t(130,m==null?m:typeof m,""))}}function qi(r,s,f,m,b){var I=s.replay,X=s.blockedBoundary,Z=Ki(r,0,null,s.formatContext,!1,!1);Z.id=f,Z.parentFlushed=!0;try{s.replay=null,s.blockedSegment=Z,Tn(r,s,m,b),Z.status=1,As(r,X,Z),X===null?r.completedRootSegment=Z:(Ei(X,Z),X.parentFlushed&&r.partialBoundaries.push(X))}finally{s.replay=I,s.blockedSegment=null}}function Wn(r,s,f,m){s.replay!==null&&typeof s.replay.slots=="number"?qi(r,s,s.replay.slots,f,m):(s.node=f,s.childIndex=m,f=s.componentStack,bi(s),Ar(r,s),s.componentStack=f)}function Ar(r,s){var f=s.node,m=s.childIndex;if(f!==null){if(typeof f=="object"){switch(f.$$typeof){case n:var b=f.type,I=f.key,X=f.props;f=X.ref;var Z=f!==void 0?f:null,j=Va(b),ee=I==null||I===H?m===-1?0:m:I;if(I=[s.keyPath,j,ee],s.replay!==null)e:{var Se=s.replay;for(m=Se.nodes,f=0;f<m.length;f++){var Re=m[f];if(ee===Re[1]){if(Re.length===4){if(j!==null&&j!==Re[0])throw Error(t(490,Re[0],j));var He=Re[2],We=Re[3],et=s.node;s.replay={nodes:He,slots:We,pendingTasks:1};try{if(wr(r,s,I,b,X,Z),s.replay.pendingTasks===1&&0<s.replay.nodes.length)throw Error(t(488));s.replay.pendingTasks--}catch(wn){if(typeof wn=="object"&&wn!==null&&(wn===se||typeof wn.then=="function"||wn.message==="Maximum call stack size exceeded"))throw s.node===et?s.replay=Se:m.splice(f,1),wn;s.replay.pendingTasks--,I=$t(s.componentStack),et=r,X=s.blockedBoundary,r=r.aborted?r.fatalError:wn,I=mn(et,r,I),Rr(et,X,He,We,r,I)}s.replay=Se}else{if(b!==E)throw Error(t(490,"Suspense",Va(b)||"Unknown"));t:{Se=Re[5],b=Re[2],Z=Re[3],j=Re[4]===null?[]:Re[4][2],Re=Re[4]===null?null:Re[4][3],ee=s.keyPath;var Tt=s.formatContext,Dn=s.row,jn=s.replay,un=s.blockedBoundary,Ti=s.hoistableState,Bi=X.children;X=X.fallback;var zi=new Set,xt=Wr(r,s.row,zi,2>s.formatContext.insertionMode?{content:J(),fallback:J()}:null,!1);xt.parentFlushed=!0,xt.rootSegmentID=Se,s.blockedBoundary=xt,s.hoistableState=xt.contentState,s.keyPath=I,s.formatContext=rt(r.resumableState,Tt),s.row=null,s.replay={nodes:b,slots:Z,pendingTasks:1};try{if(Tn(r,s,Bi,-1),s.replay.pendingTasks===1&&0<s.replay.nodes.length)throw Error(t(488));if(s.replay.pendingTasks--,xt.pendingTasks===0&&xt.status===0){xt.status=1,r.completedBoundaries.push(xt);break t}}catch(wn){xt.status=4,He=r.aborted?r.fatalError:wn,We=$t(s.componentStack),et=mn(r,He,We),xt.errorDigest=et,s.replay.pendingTasks--,r.clientRenderedBoundaries.push(xt)}finally{s.blockedBoundary=un,s.hoistableState=Ti,s.replay=jn,s.keyPath=ee,s.formatContext=Tt,s.row=Dn}He=Oi(r,null,{nodes:j,slots:Re,pendingTasks:0},X,-1,un,xt.fallbackState,zi,[I[0],"Suspense Fallback",I[2]],Ae(r.resumableState,s.formatContext),s.context,s.treeContext,s.row,Tr(s.componentStack)),bi(He),r.pingedTasks.push(He)}}m.splice(f,1);break e}}}else wr(r,s,I,b,X,Z);return;case o:throw Error(t(257));case R:if(He=f._init,f=He(f._payload),r.aborted)throw null;Wn(r,s,f,m);return}if(y(f)){qa(r,s,f,m);return}if((He=D(f))&&(He=He.call(f))){if(f=He.next(),!f.done){We=[];do We.push(f.value),f=He.next();while(!f.done);qa(r,s,We,m)}return}if(typeof f.then=="function")return s.thenableState=null,Wn(r,s,Hr(f),m);if(f.$$typeof===g)return Wn(r,s,f._currentValue,m);throw m=Object.prototype.toString.call(f),Error(t(31,m==="[object Object]"?"object with keys {"+Object.keys(f).join(", ")+"}":m))}typeof f=="string"?(m=s.blockedSegment,m!==null&&(m.lastPushedText=Xt(m.chunks,f,r.renderState,m.lastPushedText))):(typeof f=="number"||typeof f=="bigint")&&(m=s.blockedSegment,m!==null&&(m.lastPushedText=Xt(m.chunks,""+f,r.renderState,m.lastPushedText)))}}function qa(r,s,f,m){var b=s.keyPath;if(m!==-1&&(s.keyPath=[s.keyPath,"Fragment",m],s.replay!==null)){for(var I=s.replay,X=I.nodes,Z=0;Z<X.length;Z++){var j=X[Z];if(j[1]===m){m=j[2],j=j[3],s.replay={nodes:m,slots:j,pendingTasks:1};try{if(qa(r,s,f,-1),s.replay.pendingTasks===1&&0<s.replay.nodes.length)throw Error(t(488));s.replay.pendingTasks--}catch(Re){if(typeof Re=="object"&&Re!==null&&(Re===se||typeof Re.then=="function"))throw Re;s.replay.pendingTasks--;var ee=$t(s.componentStack);f=r;var Se=s.blockedBoundary;r=r.aborted?r.fatalError:Re,ee=mn(f,r,ee),Rr(f,Se,m,j,r,ee)}s.replay=I,X.splice(Z,1);break}}s.keyPath=b;return}if(I=s.treeContext,X=f.length,s.replay!==null&&(Z=s.replay.slots,Z!==null&&typeof Z=="object")){for(m=0;m<X;m++)j=f[m],s.treeContext=v(I,X,m),Se=Z[m],typeof Se=="number"?(qi(r,s,Se,j,m),delete Z[m]):Tn(r,s,j,m);s.treeContext=I,s.keyPath=b;return}for(Z=0;Z<X;Z++)m=f[Z],s.treeContext=v(I,X,Z),Tn(r,s,m,Z);s.treeContext=I,s.keyPath=b}function fo(r,s,f){f.status=5,f.rootSegmentID=r.nextSegmentId++;var m=f.tracked;if(m===null||(r=m.contentKeyPath,r===null))throw Error(t(486));m=m.fallbackNode;var b=[],I=s.workingMap.get(r);return I===void 0?(f=[r[1],r[2],b,null,m,f.rootSegmentID],s.workingMap.set(r,f),Pr(f,r[0],s),f):(I[4]=m,I[5]=f.rootSegmentID,I)}function xl(r,s,f,m){m.status=5;var b=f.keyPath,I=f.blockedBoundary;if(I===null)m.id=r.nextSegmentId++,s.rootSlots=m.id,r.completedRootSegment!==null&&(r.completedRootSegment.status=5);else{if(I!==null&&I.status===0){var X=fo(r,s,I);if(I.tracked!==null&&I.tracked.contentKeyPath===b&&f.childIndex===-1){m.id===-1&&(m.id=m.parentFlushed?I.rootSegmentID:r.nextSegmentId++),X[3]=m.id;return}}if(m.id===-1&&(m.id=m.parentFlushed&&I!==null?I.rootSegmentID:r.nextSegmentId++),f.childIndex===-1)b===null?s.rootSlots=m.id:(f=s.workingMap.get(b),f===void 0?(f=[b[1],b[2],[],m.id],Pr(f,b[0],s)):f[3]=m.id);else{if(b===null){if(r=s.rootSlots,r===null)r=s.rootSlots={};else if(typeof r=="number")throw Error(t(491))}else if(I=s.workingMap,X=I.get(b),X===void 0)r={},X=[b[1],b[2],[],r],I.set(b,X),Pr(X,b[0],s);else if(r=X[3],r===null)r=X[3]={};else if(typeof r=="number")throw Error(t(491));r[f.childIndex]=m.id}}}function xa(r,s){r=r.trackedPostpones,r!==null&&(s=s.tracked,s!==null&&(s=s.contentKeyPath,s!==null&&(r=r.workingMap.get(s),r!==void 0&&(r.length=4,r[2]=[],r[3]=null))))}function ho(r,s,f){return Oi(r,f,s.replay,s.node,s.childIndex,s.blockedBoundary,s.hoistableState,s.abortSet,s.keyPath,s.formatContext,s.context,s.treeContext,s.row,s.componentStack)}function Xr(r,s,f){var m=s.blockedSegment,b=Ki(r,m.chunks.length,null,s.formatContext,m.lastPushedText,!0);return m.children.push(b),m.lastPushedText=!1,ga(r,f,s.node,s.childIndex,s.blockedBoundary,b,s.blockedPreamble,s.hoistableState,s.abortSet,s.keyPath,s.formatContext,s.context,s.treeContext,s.row,s.componentStack)}function Tn(r,s,f,m){var b=s.formatContext,I=s.context,X=s.keyPath,Z=s.treeContext,j=s.componentStack,ee=s.blockedSegment;if(ee===null){ee=s.replay;try{return Wn(r,s,f,m)}catch(He){if(Si(),f=He===se?Je():He,!r.aborted&&typeof f=="object"&&f!==null){if(typeof f.then=="function"){m=He===se?Rn():null,r=ho(r,s,m).ping,f.then(r.resolve,r.reject),s.formatContext=b,s.context=I,s.keyPath=X,s.treeContext=Z,s.componentStack=j,s.replay=ee,Br(I);return}if(f.message==="Maximum call stack size exceeded"){f=He===se?Rn():null,f=ho(r,s,f),r.pingedTasks.push(f),s.formatContext=b,s.context=I,s.keyPath=X,s.treeContext=Z,s.componentStack=j,s.replay=ee,Br(I);return}}}}else{var Se=ee.children.length,Re=ee.chunks.length;try{return Wn(r,s,f,m)}catch(He){if(Si(),ee.children.length=Se,ee.chunks.length=Re,f=He===se?Je():He,!r.aborted&&typeof f=="object"&&f!==null){if(typeof f.then=="function"){ee=f,f=He===se?Rn():null,r=Xr(r,s,f).ping,ee.then(r.resolve,r.reject),s.formatContext=b,s.context=I,s.keyPath=X,s.treeContext=Z,s.componentStack=j,Br(I);return}if(f.message==="Maximum call stack size exceeded"){ee=He===se?Rn():null,ee=Xr(r,s,ee),r.pingedTasks.push(ee),s.formatContext=b,s.context=I,s.keyPath=X,s.treeContext=Z,s.componentStack=j,Br(I);return}}}}throw s.formatContext=b,s.context=I,s.keyPath=X,s.treeContext=Z,Br(I),f}function ja(r){var s=r.blockedBoundary,f=r.blockedSegment;f!==null&&(f.status=3,ji(this,s,r.row,f))}function Rr(r,s,f,m,b,I){for(var X=0;X<f.length;X++){var Z=f[X];if(Z.length===4)Rr(r,s,Z[2],Z[3],b,I);else{Z=Z[5];var j=r,ee=I,Se=Wr(j,null,new Set,null,!1);Se.parentFlushed=!0,Se.rootSegmentID=Z,Se.status=4,Se.errorDigest=ee,Se.parentFlushed&&j.clientRenderedBoundaries.push(Se)}}if(f.length=0,m!==null){if(s===null)throw Error(t(487));if(s.status!==4&&(s.status=4,s.errorDigest=I,s.parentFlushed&&r.clientRenderedBoundaries.push(s)),typeof m=="object")for(var Re in m)delete m[Re]}}function Ma(r,s){if(r!==s.currentTask){var f=r.blockedBoundary;r=r.blockedSegment,r!==null&&(r.status=3),f!==null&&f.fallbackAbortableTasks.forEach(function(m){return Ma(m,s)})}}function Cr(r,s,f){if(r!==s.currentTask){var m=r.blockedBoundary,b=r.blockedSegment;if(b===null||b.status===3){var I=$t(r.componentStack),X=gn(f);if(m===null){if(m=r.replay,m===null){X||s.trackedPostpones===null||b===null?X?(r=ui(f),mn(s,r,I),s.status!==12&&s.status!==13&&qn(s,r)):(mn(s,f,I),s.status!==12&&s.status!==13&&qn(s,f)):(m=s.trackedPostpones,mn(s,f,I),xl(s,m,r,b),ji(s,null,r.row,b));return}s.status!==12&&s.status!==13&&(m.pendingTasks--,m.pendingTasks===0&&0<m.nodes.length&&(I=mn(s,f,I),Rr(s,null,m.nodes,m.slots,f,I)),s.pendingRootTasks--,s.pendingRootTasks===0&&po(s))}else{var Z=s.trackedPostpones;if(m.status!==4){if(!X&&Z!==null&&b!==null)return mn(s,f,I),xl(s,Z,r,b),m.fallbackAbortableTasks.forEach(function(j){return Cr(j,s,f)}),m.fallbackAbortableTasks.clear(),ji(s,m,r.row,b);m.status=4,I=mn(s,f,I),m.errorDigest=I,xa(s,m),m.parentFlushed&&s.clientRenderedBoundaries.push(m)}m.pendingTasks--,I=m.row,I!==null&&--I.pendingTasks===0&&Vn(s,I),m.fallbackAbortableTasks.forEach(function(j){return Cr(j,s,f)}),m.fallbackAbortableTasks.clear()}r=r.row,r!==null&&--r.pendingTasks===0&&Vn(s,r),s.allPendingTasks--,s.allPendingTasks===0&&Yr(s)}}}function ws(r,s){try{var f=r.renderState,m=f.onHeaders;if(m){var b=f.headers;if(b){f.headers=null;var I=b.preconnects;if(b.fontPreloads&&(I&&(I+=", "),I+=b.fontPreloads),b.highImagePreloads&&(I&&(I+=", "),I+=b.highImagePreloads),!s){var X=f.styles.values(),Z=X.next();e:for(;0<b.remainingCapacity&&!Z.done;Z=X.next())for(var j=Z.value.sheets.values(),ee=j.next();0<b.remainingCapacity&&!ee.done;ee=j.next()){var Se=ee.value,Re=Se.props,He=Re.href,We=Se.props,et=io(We.href,"style",{crossOrigin:We.crossOrigin,integrity:We.integrity,nonce:We.nonce,type:We.type,fetchPriority:We.fetchPriority,referrerPolicy:We.referrerPolicy,media:We.media});if(0<=(b.remainingCapacity-=et.length+2))f.resets.style[He]=dt,I&&(I+=", "),I+=et,f.resets.style[He]=typeof Re.crossOrigin=="string"||typeof Re.integrity=="string"?[Re.crossOrigin,Re.integrity]:dt;else break e}}m(I?{Link:I}:{})}}}catch(Tt){mn(r,Tt,{})}}function po(r){r.trackedPostpones===null&&ws(r,!0),r.trackedPostpones===null&&Zr(r),r=r.onShellReady,r()}function Yr(r){ws(r,r.trackedPostpones===null?!0:r.completedRootSegment===null||r.completedRootSegment.status!==5),Zr(r),r=r.onAllReady,r()}function Ei(r,s){if(s.chunks.length===0&&s.children.length===1&&s.children[0].boundary===null&&s.children[0].id===-1){var f=s.children[0];f.id=s.id,f.parentFlushed=!0,f.status!==1&&f.status!==3&&f.status!==4||Ei(r,f)}else r.completedSegments.push(s)}function As(r,s,f){if(Qt!==null){f=f.chunks;for(var m=0,b=0;b<f.length;b++)m+=f[b].byteLength;s===null?r.byteSize+=m:s.byteSize+=m}}function ji(r,s,f,m){if(f!==null&&(--f.pendingTasks===0?Vn(r,f):f.together&&va(r,f)),r.allPendingTasks--,s===null){if(m!==null&&m.parentFlushed){if(r.completedRootSegment!==null)throw Error(t(389));r.completedRootSegment=m}r.pendingRootTasks--,r.pendingRootTasks===0&&po(r)}else if(s.pendingTasks--,s.status!==4)if(s.pendingTasks===0){if(s.status===0&&(s.status=1),m!==null&&m.parentFlushed&&(m.status===1||m.status===3)&&Ei(s,m),s.parentFlushed&&r.completedBoundaries.push(s),s.status===1)f=s.row,f!==null&&ua(f.hoistables,s.contentState),Fi(r,s)||(r.allPendingTasks++,s.fallbackAbortableTasks.forEach(ja,r),s.fallbackAbortableTasks.clear(),f!==null&&--f.pendingTasks===0&&Vn(r,f),r.allPendingTasks--),r.pendingRootTasks===0&&r.trackedPostpones===null&&s.preamble!==null&&Zr(r);else if(s.status===5&&(s=s.row,s!==null)){if(r.trackedPostpones!==null){f=r.trackedPostpones;var b=s.next;if(b!==null&&(m=b.boundaries,m!==null))for(b.boundaries=null,b=0;b<m.length;b++){var I=m[b];fo(r,f,I),ji(r,I,null,null)}}r.allPendingTasks++,--s.pendingTasks===0&&Vn(r,s),r.allPendingTasks--}}else m===null||!m.parentFlushed||m.status!==1&&m.status!==3||(Ei(s,m),s.completedSegments.length===1&&s.parentFlushed&&r.partialBoundaries.push(s)),s=s.row,s!==null&&s.together&&va(r,s);r.allPendingTasks===0&&Yr(r)}function Ml(r){if(!(r.aborted||11<r.status)){var s=Wa,f=Wt.H;Wt.H=Ya;var m=Wt.A;Wt.A=_l;var b=rn;rn=r;var I=Gr;Gr=r.resumableState;try{var X=r.pingedTasks,Z;for(Z=0;Z<X.length;Z++){var j=X[Z],ee=r,Se=j.blockedSegment;if(Se===null){e:if(j.replay.pendingTasks!==0){var Re=ee.currentTask;ee.currentTask=j,Br(j.context);var He=j.node;try{if(typeof j.replay.slots=="number"?qi(ee,j,j.replay.slots,j.node,j.childIndex):Ar(ee,j),j.replay.pendingTasks===1&&0<j.replay.nodes.length)throw Error(t(488));j.replay.pendingTasks--,j.abortSet.delete(j),ji(ee,j.blockedBoundary,j.row,null)}catch(Un){Si();var We=Un===se?Je():Un;if(ee.aborted){Un===se&&(j.thenableState=Rn()),ee.currentTask=Re;var et=ee;Ma(j,et),j.abortSet.delete(j),Cr(j,et,et.fatalError)}else{if(typeof We=="object"&&We!==null){if(typeof We.then=="function"){var Tt=j.ping;We.then(Tt.resolve,Tt.reject),j.thenableState=Un===se?Rn():null;break e}if(We.message==="Maximum call stack size exceeded"&&j.node!==He){j.thenableState=null,ee.pingedTasks.push(j);break e}}j.replay.pendingTasks--,j.abortSet.delete(j);var Dn=$t(j.componentStack);et=ee;var jn=j.blockedBoundary,un=ee.aborted?ee.fatalError:We,Ti=j.replay.nodes,Bi=j.replay.slots,zi=mn(et,un,Dn);Rr(et,jn,Ti,Bi,un,zi),ee.pendingRootTasks--,ee.pendingRootTasks===0&&po(ee),ee.allPendingTasks--,ee.allPendingTasks===0&&Yr(ee)}}finally{ee.currentTask=Re}}}else e:if(et=Se,et.status===0){var xt=ee.currentTask;ee.currentTask=j,Br(j.context);var wn=et.children.length,ki=et.chunks.length,gi=j.node;try{Ar(ee,j),et.lastPushedText&&et.textEmbedded&&et.chunks.push(Lt),j.abortSet.delete(j),et.status=1,As(ee,j.blockedBoundary,et),ji(ee,j.blockedBoundary,j.row,et)}catch(Un){Si(),et.children.length=wn,et.chunks.length=ki;var Nn=Un===se?Je():Un;if(ee.aborted)Un===se&&(j.thenableState=Rn()),ee.currentTask=xt,et=ee,Ma(j,et),j.abortSet.delete(j),Cr(j,et,et.fatalError);else{if(typeof Nn=="object"&&Nn!==null){if(typeof Nn.then=="function"){et.status=0,j.thenableState=Un===se?Rn():null;var $n=j.ping;Nn.then($n.resolve,$n.reject);break e}if(Nn.message==="Maximum call stack size exceeded"&&j.node!==gi){et.status=0,j.thenableState=null,ee.pingedTasks.push(j);break e}}var Lr=$t(j.componentStack);j.abortSet.delete(j),et.status=4;var Jn=j.blockedBoundary,Hi=j.row;if(Hi!==null&&--Hi.pendingTasks===0&&Vn(ee,Hi),ee.allPendingTasks--,Jn===null)if(gn(Nn)){var Pn=ui(Nn);mn(ee,Pn,Lr),qn(ee,Pn)}else mn(ee,Nn,Lr),qn(ee,Nn);else{var Kr=mn(ee,Nn,Lr);if(Jn.pendingTasks--,Jn.status!==4){Jn.status=4,Jn.errorDigest=Kr,xa(ee,Jn);var $i=Jn.row;$i!==null&&(ee.allPendingTasks++,--$i.pendingTasks===0&&Vn(ee,$i),ee.allPendingTasks--),Jn.parentFlushed&&ee.clientRenderedBoundaries.push(Jn),ee.pendingRootTasks===0&&ee.trackedPostpones===null&&Jn.preamble!==null&&Zr(ee)}ee.allPendingTasks===0&&Yr(ee)}}}finally{ee.currentTask=xt}}}X.splice(0,Z),r.destination!==null&&ya(r,r.destination)}catch(Un){mn(r,Un,{}),qn(r,Un)}finally{Gr=I,Wt.H=f,Wt.A=m,f===Ya&&Br(s),rn=b}}}function $a(r,s,f){s.preambleChildren.length&&f.push(s.preambleChildren);for(var m=!1,b=0;b<s.children.length;b++)m=go(r,s.children[b],f)||m;return m}function go(r,s,f){var m=s.boundary;if(m===null)return $a(r,s,f);var b=m.preamble;if(b===null)return!1;switch(m.status){case 1:if(_r(r.renderState,b.content),r.byteSize+=m.byteSize,s=m.completedSegments[0],!s)throw Error(t(391));return $a(r,s,f);case 5:if(r.trackedPostpones!==null)return!0;case 4:if(s.status===1)return _r(r.renderState,b.fallback),$a(r,s,f);default:return!0}}function Zr(r){if(r.completedRootSegment&&r.completedPreambleSegments===null){var s=[],f=r.byteSize,m=go(r,r.completedRootSegment,s),b=r.renderState.preamble;m===!1||b.headChunks&&b.bodyChunks?r.completedPreambleSegments=s:r.byteSize=f}}function mo(r,s,f,m){switch(f.parentFlushed=!0,f.status){case 0:f.id=r.nextSegmentId++;case 5:return m=f.id,f.lastPushedText=!1,f.textEmbedded=!1,r=r.renderState,V(s,xr),V(s,r.placeholderPrefix),r=we(m.toString(16)),V(s,r),xe(s,ln);case 1:f.status=2;var b=!0,I=f.chunks,X=0;f=f.children;for(var Z=0;Z<f.length;Z++){for(b=f[Z];X<b.index;X++)V(s,I[X]);b=Rs(r,s,b,m)}for(;X<I.length-1;X++)V(s,I[X]);return X<I.length&&(b=xe(s,I[X])),b;case 3:return!0;default:throw Error(t(390))}}var cr=0;function Rs(r,s,f,m){var b=f.boundary;if(b===null)return mo(r,s,f,m);if(f.boundary=null,b.parentFlushed=!0,b.status===4){var I=b.row;I!==null&&--I.pendingTasks===0&&Vn(r,I),b=b.errorDigest,xe(s,yi),V(s,Nf),b!=null&&(V(s,jo),V(s,we(Ye(b))),V(s,qo)),xe(s,Uf),mo(r,s,f,m)}else if(b.status!==1)b.status===0&&(b.rootSegmentID=r.nextSegmentId++),0<b.completedSegments.length&&r.partialBoundaries.push(b),su(s,r.renderState,b.rootSegmentID),m&&ua(m,b.fallbackState),mo(r,s,f,m);else if(!ts&&Fi(r,b)&&(cr+b.byteSize>r.progressiveChunkSize||Ac(b.contentState,vo)||b.defer))b.rootSegmentID=r.nextSegmentId++,r.completedBoundaries.push(b),su(s,r.renderState,b.rootSegmentID),mo(r,s,f,m);else{if(cr+=b.byteSize,m&&ua(m,b.contentState),f=b.row,f!==null&&Fi(r,b)&&--f.pendingTasks===0&&Vn(r,f),xe(s,Qo),f=b.completedSegments,f.length!==1)throw Error(t(391));Rs(r,s,f[0],m)}return xe(s,pi)}function yl(r,s,f,m){return ca(s,r.renderState,f.parentFormatContext,f.id),Rs(r,s,f,m),js(s,f.parentFormatContext)}function es(r,s,f){cr=f.byteSize;for(var m=f.completedSegments,b=0;b<m.length;b++)Rc(r,s,f,m[b]);m.length=0,m=f.row,m!==null&&Fi(r,f)&&--m.pendingTasks===0&&Vn(r,m),Xn(s,f.contentState,r.renderState),m=r.resumableState,r=r.renderState,b=f.rootSegmentID,f=f.contentState;var I=r.stylesToHoist,X=(m.instructions&128)!==0;return r.stylesToHoist=!1,V(s,r.startInlineScript),V(s,bn),I?((m.instructions&4)===0&&(m.instructions|=4,V(s,gc)),(m.instructions&2)===0&&(m.instructions|=2,V(s,hu)),X&&(m.instructions&256)===0&&(m.instructions|=256,V(s,du)),(m.instructions&8)===0?(m.instructions|=8,V(s,pu)):V(s,gu)):((m.instructions&2)===0&&(m.instructions|=2,V(s,hu)),X&&(m.instructions&256)===0&&(m.instructions|=256,V(s,du)),V(s,Of)),m=we(b.toString(16)),V(s,r.boundaryPrefix),V(s,m),V(s,Bf),V(s,r.segmentPrefix),V(s,m),I?(V(s,mu),Su(s,f)):V(s,rl),f=xe(s,zf),Bt(s,r)&&f}function Rc(r,s,f,m){if(m.status===2)return!0;var b=f.contentState,I=m.id;if(I===-1){if((m.id=f.rootSegmentID)===-1)throw Error(t(392));return yl(r,s,m,b)}return I===f.rootSegmentID?yl(r,s,m,b):(yl(r,s,m,b),f=r.resumableState,r=r.renderState,V(s,r.startInlineScript),V(s,bn),(f.instructions&1)===0?(f.instructions|=1,V(s,cu)):V(s,uu),V(s,r.segmentPrefix),I=we(I.toString(16)),V(s,I),V(s,fu),V(s,r.placeholderPrefix),V(s,I),s=xe(s,Ff),s)}var ts=!1,vo=!1;function ya(r,s){Te=new Uint8Array(2048),ie=0;try{if(!(0<r.pendingRootTasks)){var f,m=r.completedRootSegment;if(m!==null){if(m.status===5)return;var b=r.completedPreambleSegments;if(b===null)return;cr=r.byteSize;var I=r.resumableState,X=r.renderState,Z=X.preamble,j=Z.htmlChunks,ee=Z.headChunks,Se;if(j){for(Se=0;Se<j.length;Se++)V(s,j[Se]);if(ee)for(Se=0;Se<ee.length;Se++)V(s,ee[Se]);else V(s,It("head")),V(s,bn)}else if(ee)for(Se=0;Se<ee.length;Se++)V(s,ee[Se]);var Re=X.charsetChunks;for(Se=0;Se<Re.length;Se++)V(s,Re[Se]);Re.length=0,X.preconnects.forEach(ii,s),X.preconnects.clear();var He=X.viewportChunks;for(Se=0;Se<He.length;Se++)V(s,He[Se]);He.length=0,X.fontPreloads.forEach(ii,s),X.fontPreloads.clear(),X.highImagePreloads.forEach(ii,s),X.highImagePreloads.clear(),B=X,X.styles.forEach(ll,s),B=null;var We=X.importMapChunks;for(Se=0;Se<We.length;Se++)V(s,We[Se]);We.length=0,X.bootstrapScripts.forEach(ii,s),X.scripts.forEach(ii,s),X.scripts.clear(),X.bulkPreloads.forEach(ii,s),X.bulkPreloads.clear(),j||ee||(I.instructions|=32);var et=X.hoistableChunks;for(Se=0;Se<et.length;Se++)V(s,et[Se]);for(I=et.length=0;I<b.length;I++){var Tt=b[I];for(X=0;X<Tt.length;X++)Rs(r,s,Tt[X],null)}var Dn=r.renderState.preamble,jn=Dn.headChunks;(Dn.htmlChunks||jn)&&V(s,ti("head"));var un=Dn.bodyChunks;if(un)for(b=0;b<un.length;b++)V(s,un[b]);vo=!0,Rs(r,s,m,null),vo=!1,r.completedRootSegment=null;var Ti=r.renderState;if(r.allPendingTasks!==0||r.clientRenderedBoundaries.length!==0||r.completedBoundaries.length!==0||r.trackedPostpones!==null&&(r.trackedPostpones.rootNodes.length!==0||r.trackedPostpones.rootSlots!==null)){var Bi=r.resumableState;if((Bi.instructions&64)===0){if(Bi.instructions|=64,V(s,Ti.startInlineScript),(Bi.instructions&32)===0){Bi.instructions|=32;var zi="_"+Bi.idPrefix+"R_";V(s,ul),V(s,we(Ye(zi))),V(s,mt)}V(s,bn),V(s,An),xe(s,te)}}Bt(s,Ti)}var xt=r.renderState;m=0;var wn=xt.viewportChunks;for(m=0;m<wn.length;m++)V(s,wn[m]);wn.length=0,xt.preconnects.forEach(ii,s),xt.preconnects.clear(),xt.fontPreloads.forEach(ii,s),xt.fontPreloads.clear(),xt.highImagePreloads.forEach(ii,s),xt.highImagePreloads.clear(),xt.styles.forEach(Ni,s),xt.scripts.forEach(ii,s),xt.scripts.clear(),xt.bulkPreloads.forEach(ii,s),xt.bulkPreloads.clear();var ki=xt.hoistableChunks;for(m=0;m<ki.length;m++)V(s,ki[m]);ki.length=0;var gi=r.clientRenderedBoundaries;for(f=0;f<gi.length;f++){var Nn=gi[f];xt=s;var $n=r.resumableState,Lr=r.renderState,Jn=Nn.rootSegmentID,Hi=Nn.errorDigest;V(xt,Lr.startInlineScript),V(xt,bn),($n.instructions&4)===0?($n.instructions|=4,V(xt,vu)):V(xt,Ba),V(xt,Lr.boundaryPrefix),V(xt,we(Jn.toString(16))),V(xt,mc),Hi!=null&&(V(xt,al),Hi==null?V(xt,_u):V(xt,we(Hf(Hi))));var Pn=xe(xt,bs);if(!Pn){r.destination=null,f++,gi.splice(0,f);return}}gi.splice(0,f);var Kr=r.completedBoundaries;for(f=0;f<Kr.length;f++)if(!es(r,s,Kr[f])){r.destination=null,f++,Kr.splice(0,f);return}Kr.splice(0,f),at(s),Te=new Uint8Array(2048),ie=0,ts=!0;var $i=r.partialBoundaries;for(f=0;f<$i.length;f++){var Un=$i[f];e:{gi=r,Nn=s,cr=Un.byteSize;var ba=Un.completedSegments;for(Pn=0;Pn<ba.length;Pn++)if(!Rc(gi,Nn,Un,ba[Pn])){Pn++,ba.splice(0,Pn);var Qr=!1;break e}ba.splice(0,Pn);var Ir=Un.row;Ir!==null&&Ir.together&&Un.pendingTasks===1&&(Ir.pendingTasks===1?ma(gi,Ir,Ir.hoistables):Ir.pendingTasks--),Qr=Xn(Nn,Un.contentState,gi.renderState)}if(!Qr){r.destination=null,f++,$i.splice(0,f);return}}$i.splice(0,f),ts=!1;var wi=r.completedBoundaries;for(f=0;f<wi.length;f++)if(!es(r,s,wi[f])){r.destination=null,f++,wi.splice(0,f);return}wi.splice(0,f)}}finally{ts=!1,f=r.postponedState,f!==null&&(f.nextSegmentId=r.nextSegmentId),r.allPendingTasks===0&&r.clientRenderedBoundaries.length===0&&r.completedBoundaries.length===0?(r.flushScheduled=!1,f=r.resumableState,f.hasBody&&V(s,ti("body")),f.hasHtml&&V(s,ti("html")),at(s),is(r),r.status=13,s.close(),r.destination=null):at(s)}}function Sl(r){r.flushScheduled=r.destination!==null,_e(function(){return Ml(r)}),W(function(){r.status===10&&(r.status=11),r.trackedPostpones===null&&ws(r,r.pendingRootTasks===0)})}function ns(r){r.flushScheduled===!1&&r.pingedTasks.length===0&&r.destination!==null&&(r.flushScheduled=!0,W(function(){var s=r.destination;s?ya(r,s):r.flushScheduled=!1}))}function _o(r,s){if(r.status===12)r.status=13,r=r.fatalError,gn(r)&&(r=ui(r)),ve(s,r);else if(r.status!==13&&r.destination===null){r.destination=s;try{ya(r,s)}catch(f){mn(r,f,{}),qn(r,f)}}}function xo(r,s){try{if(0<s.size){var f=r.fatalError;s.forEach(function(m){return Cr(m,r,f)}),s.clear()}r.destination!==null&&ya(r,r.destination)}catch(m){mn(r,m,{}),qn(r,m)}}function is(r){r=r.renderLifetimeController,r!==null&&r.abort("The render ended.")}function Sa(r,s){if(s.aborted)Jr(r,s.reason);else{var f=new AbortController;r.renderLifetimeController=f,s.addEventListener("abort",function(){Jr(r,s.reason)},{signal:f.signal})}}function Jr(r,s){if(!(r.aborted||r.status!==11&&r.status!==10)){is(r);var f=typeof s=="object"&&s!==null&&s.$$typeof===C;r.aborted=!0,s=f?Zn(s):s===void 0?Error(t(432)):typeof s=="object"&&s!==null&&typeof s.then=="function"?Error(t(530)):s,r.fatalError=s;var m=r.abortableTasks;m.forEach(function(b){return Ma(b,r)}),W(function(){return xo(r,m)})}}function Pr(r,s,f){if(s===null)f.rootNodes.push(r);else{var m=f.workingMap,b=m.get(s);b===void 0&&(b=[s[1],s[2],[],null],m.set(s,b),Pr(b,s[0],f)),b[2].push(r)}}function wu(r){var s=r.trackedPostpones;if(s===null||s.rootNodes.length===0&&s.rootSlots===null)return r.trackedPostpones=null;var f=r.completedRootSegment===null||r.completedRootSegment.status!==5&&r.completedPreambleSegments!==null;if(f){var m=r.nextSegmentId,b=s.rootSlots,I=r.resumableState;I.bootstrapScriptContent=void 0,I.bootstrapScripts=void 0,I.bootstrapModules=void 0}else{m=0,b=-1,I=r.resumableState;var X=r.renderState;I.nextFormID=0,I.hasBody=!1,I.hasHtml=!1,I.unknownResources={font:X.resets.font},I.dnsResources=X.resets.dns,I.connectResources=X.resets.connect,I.imageResources=X.resets.image,I.styleResources=X.resets.style,I.scriptResources={},I.moduleUnknownResources={},I.moduleScriptResources={},I.instructions=0}return s={nextSegmentId:m,rootFormatContext:r.rootFormatContext,progressiveChunkSize:r.progressiveChunkSize,resumableState:r.resumableState,replayNodes:s.rootNodes,replaySlots:b},f&&(r.postponedState=s),s}function si(){var r=i.version;if(r!=="19.3.1")throw Error(t(527,r,"19.3.1"))}return si(),si(),ko.prerender=function(r,s){return new Promise(function(f,m){var b=s?s.onHeaders:void 0,I;b&&(I=function(j){b(new Headers(j))});var X=vt(s?s.identifierPrefix:void 0,s?s.unstable_externalRuntimeSrc:void 0,s?s.bootstrapScriptContent:void 0,s?s.bootstrapScripts:void 0,s?s.bootstrapModules:void 0),Z=Er(r,X,st(X,void 0,s?s.unstable_externalRuntimeSrc:void 0,s?s.importMap:void 0,I,s?s.maxHeadersLength:void 0),ye(s?s.namespaceURI:void 0),s?s.progressiveChunkSize:void 0,s?s.onError:void 0,s?s.onBrowserBailout:void 0,function(){var j=new ReadableStream({type:"bytes",pull:function(ee){_o(Z,ee)},cancel:function(ee){Z.destination=null,Jr(Z,ee)}},{highWaterMark:0});j={postponed:wu(Z),prelude:j},f(j)},void 0,void 0,m);s&&s.signal&&Sa(Z,s.signal),Sl(Z)})},ko.renderToReadableStream=function(r,s){return new Promise(function(f,m){var b,I,X=new Promise(function(Re,He){I=Re,b=He}),Z=s?s.onHeaders:void 0,j;Z&&(j=function(Re){Z(new Headers(Re))});var ee=vt(s?s.identifierPrefix:void 0,s?s.unstable_externalRuntimeSrc:void 0,s?s.bootstrapScriptContent:void 0,s?s.bootstrapScripts:void 0,s?s.bootstrapModules:void 0),Se=ha(r,ee,st(ee,s?s.nonce:void 0,s?s.unstable_externalRuntimeSrc:void 0,s?s.importMap:void 0,j,s?s.maxHeadersLength:void 0),ye(s?s.namespaceURI:void 0),s?s.progressiveChunkSize:void 0,s?s.onError:void 0,s?s.onBrowserBailout:void 0,I,function(){var Re=new ReadableStream({type:"bytes",pull:function(He){_o(Se,He)},cancel:function(He){Se.destination=null,Jr(Se,He)}},{highWaterMark:0});Re.allReady=X,f(Re)},function(Re){X.catch(function(){}),m(Re)},b,s?s.formState:void 0);s&&s.signal&&Sa(Se,s.signal),Sl(Se)})},ko.resume=function(r,s,f){return new Promise(function(m,b){var I,X,Z=new Promise(function(ee,Se){X=ee,I=Se}),j=Ka(r,s,st(s.resumableState,f?f.nonce:void 0,void 0,void 0,void 0,void 0),f?f.onError:void 0,f?f.onBrowserBailout:void 0,X,function(){var ee=new ReadableStream({type:"bytes",pull:function(Se){_o(j,Se)},cancel:function(Se){j.destination=null,Jr(j,Se)}},{highWaterMark:0});ee.allReady=Z,m(ee)},function(ee){Z.catch(function(){}),b(ee)},I);f&&f.signal&&Sa(j,f.signal),Sl(j)})},ko.resumeAndPrerender=function(r,s,f){return new Promise(function(m,b){var I=da(r,s,st(s.resumableState,void 0,void 0,void 0,void 0,void 0),f?f.onError:void 0,f?f.onBrowserBailout:void 0,function(){var X=new ReadableStream({type:"bytes",pull:function(Z){_o(I,Z)},cancel:function(Z){I.destination=null,Jr(I,Z)}},{highWaterMark:0});X={postponed:wu(I),prelude:X},m(X)},void 0,void 0,b);f&&f.signal&&Sa(I,f.signal),Sl(I)})},ko.version="19.3.1",ko}var sg;function nS(){if(sg)return zo;sg=1;var i,e;return i=eS(),e=tS(),zo.version=i.version,zo.renderToString=i.renderToString,zo.renderToStaticMarkup=i.renderToStaticMarkup,zo.renderToReadableStream=e.renderToReadableStream,zo.resume=e.resume,zo}var iS=nS();function rS({kind:i,playing:e=!1}){const t=cg.useId().replace(/:/g,""),n=o=>`url(#${t}-${o})`;return fe.jsxs("svg",{className:`object-art art-${i}`,viewBox:"0 0 320 240","aria-hidden":"true",children:[fe.jsxs("defs",{children:[fe.jsxs("linearGradient",{id:`${t}-metal`,x2:".25",y2:"1",children:[fe.jsx("stop",{stopColor:"#e5d4a5"}),fe.jsx("stop",{offset:".25",stopColor:"#a58a55"}),fe.jsx("stop",{offset:".5",stopColor:"#ddc58b"}),fe.jsx("stop",{offset:"1",stopColor:"#6a5430"})]}),fe.jsxs("linearGradient",{id:`${t}-black`,x2:".5",y2:"1",children:[fe.jsx("stop",{stopColor:"#575955"}),fe.jsx("stop",{offset:".15",stopColor:"#282d2a"}),fe.jsx("stop",{offset:"1",stopColor:"#111513"})]}),fe.jsxs("linearGradient",{id:`${t}-wood`,x2:"0",y2:"1",children:[fe.jsx("stop",{stopColor:"#92684c"}),fe.jsx("stop",{offset:".16",stopColor:"#73533b"}),fe.jsx("stop",{offset:"1",stopColor:"#3f2c21"})]}),fe.jsxs("linearGradient",{id:`${t}-paper`,x2:".8",y2:"1",children:[fe.jsx("stop",{stopColor:"#f1e7cf"}),fe.jsx("stop",{offset:"1",stopColor:"#b9aa8c"})]}),fe.jsxs("radialGradient",{id:`${t}-lens`,cx:".35",cy:".3",children:[fe.jsx("stop",{stopColor:"#76978e"}),fe.jsx("stop",{offset:".28",stopColor:"#253f3e"}),fe.jsx("stop",{offset:".55",stopColor:"#121f22"}),fe.jsx("stop",{offset:".8",stopColor:"#29383c"}),fe.jsx("stop",{offset:"1",stopColor:"#080d0f"})]}),fe.jsxs("pattern",{id:`${t}-leather`,width:"4",height:"4",patternUnits:"userSpaceOnUse",children:[fe.jsx("rect",{width:"4",height:"4",fill:"#242724"}),fe.jsx("path",{d:"M0 1h2m1 2h1",stroke:"#383b34",strokeWidth:".6"})]})]}),i==="camera"&&fe.jsxs("g",{children:[fe.jsx("path",{d:"M60 131C1 157 20 228 81 215M258 136c60 29 43 88-4 77",fill:"none",stroke:"#3a2920",strokeWidth:"8"}),fe.jsx("path",{d:"M60 131C1 157 20 228 81 215",fill:"none",stroke:"#8c6744",strokeWidth:"1"}),fe.jsx("ellipse",{cx:"161",cy:"221",rx:"114",ry:"9",fill:"#080a08",opacity:".45"}),fe.jsx("rect",{x:"47",y:"103",width:"225",height:"113",rx:"11",fill:n("black"),stroke:"#72766a",strokeWidth:"1"}),fe.jsx("rect",{x:"51",y:"124",width:"217",height:"71",rx:"3",fill:n("leather")}),fe.jsx("path",{d:"M115 105l14-25h49l17 25",fill:n("black"),stroke:"#74766a"}),fe.jsx("path",{d:"M132 85h43l9 16h-62z",fill:"#51554c"}),fe.jsx("rect",{x:"61",y:"92",width:"35",height:"11",rx:"3",fill:n("metal")}),fe.jsx("rect",{x:"227",y:"94",width:"24",height:"9",rx:"3",fill:"#55594f"}),fe.jsx("path",{d:"M55 110h44m114 0h50",stroke:"#aaa990",strokeWidth:"2"}),fe.jsx("rect",{x:"67",y:"133",width:"27",height:"9",rx:"2",fill:"#c4b997"}),fe.jsx("circle",{cx:"165",cy:"162",r:"66",fill:"#111513",stroke:"#555950",strokeWidth:"2"}),fe.jsx("circle",{cx:"165",cy:"162",r:"59",fill:n("black"),stroke:"#93917c"}),Array.from({length:40},(o,c)=>fe.jsx("path",{d:"M165 102v5",stroke:"#898977",strokeWidth:"1",transform:`rotate(${c*9} 165 162)`},c)),fe.jsx("circle",{cx:"165",cy:"162",r:"48",fill:"#0c100f",stroke:"#70664f",strokeWidth:"3"}),fe.jsx("circle",{cx:"165",cy:"162",r:"41",fill:n("lens"),stroke:"#334542",strokeWidth:"2"}),fe.jsx("circle",{cx:"165",cy:"162",r:"24",fill:"#080f12",stroke:"#485b55"}),fe.jsx("path",{d:"M141 141q13-12 32-7",stroke:"#abc5af",strokeWidth:"3",opacity:".28",fill:"none"}),fe.jsx("ellipse",{cx:"181",cy:"181",rx:"12",ry:"4",fill:"#caa0b7",opacity:".12",transform:"rotate(-40 181 181)"}),fe.jsx("circle",{cx:"245",cy:"116",r:"4",fill:"#a09b80"})]}),i==="books"&&fe.jsxs("g",{children:[fe.jsx("ellipse",{cx:"153",cy:"223",rx:"132",ry:"8",fill:"#080a08",opacity:".35"}),fe.jsxs("g",{transform:"rotate(-8 94 217)",children:[fe.jsx("rect",{x:"37",y:"48",width:"48",height:"170",rx:"3",fill:"#625b40"}),fe.jsx("path",{d:"M42 49v168m38-166v166",stroke:"#aaa077",opacity:".5"}),fe.jsx("path",{d:"M43 68h35m-35 4h35m-35 123h35m-35 4h35",stroke:"#c8af73"})]}),fe.jsx("rect",{x:"91",y:"32",width:"48",height:"187",rx:"3",fill:"#623c3a"}),fe.jsx("path",{d:"M96 34v181m37-181v181M98 52h33m-33 142h33",stroke:"#ad8d68"}),fe.jsx("rect",{x:"143",y:"58",width:"31",height:"161",rx:"2",fill:"#b0a48a"}),fe.jsx("path",{d:"M148 62v152m20-152v152",stroke:"#d8c9a7"}),fe.jsxs("g",{transform:"rotate(8 215 217)",children:[fe.jsx("rect",{x:"180",y:"88",width:"83",height:"132",rx:"2",fill:n("wood")}),fe.jsx("rect",{x:"186",y:"94",width:"71",height:"120",fill:n("metal")}),fe.jsx("rect",{x:"189",y:"97",width:"65",height:"114",fill:n("paper")}),fe.jsx("rect",{x:"198",y:"109",width:"47",height:"78",fill:"#a49980"}),fe.jsx("path",{d:"M207 148h29m-14-14v28",stroke:"#c7bb9f",opacity:".6"})]})]}),i==="frames"&&fe.jsxs("g",{children:[fe.jsx("ellipse",{cx:"168",cy:"222",rx:"135",ry:"7",fill:"#080a08",opacity:".3"}),fe.jsxs("g",{transform:"rotate(-4 111 218)",children:[fe.jsx("rect",{x:"23",y:"34",width:"154",height:"183",fill:"#262a23",stroke:"#8f7148",strokeWidth:"4"}),fe.jsx("rect",{x:"31",y:"42",width:"138",height:"167",fill:n("paper")}),fe.jsx("rect",{x:"48",y:"60",width:"104",height:"120",fill:"#6b6e5d"}),fe.jsx("path",{d:"M48 180L152 60",stroke:"#c9c7a3",opacity:".12",strokeWidth:"30"}),fe.jsx("path",{d:"M48 60h104v120H48z",fill:"none",stroke:"#444b40"})]}),fe.jsxs("g",{transform:"rotate(4 222 218)",children:[fe.jsx("rect",{x:"157",y:"87",width:"135",height:"132",fill:n("wood"),stroke:"#b7a16f",strokeWidth:"2"}),fe.jsx("rect",{x:"165",y:"95",width:"119",height:"116",fill:n("paper")}),fe.jsx("rect",{x:"178",y:"108",width:"93",height:"84",fill:"#7a6558"}),fe.jsx("path",{d:"M178 192l93-84",stroke:"#ead9b1",strokeWidth:"26",opacity:".08"})]})]}),i==="paper"&&fe.jsxs("g",{transform:"rotate(-7 160 180)",children:[fe.jsx("path",{d:"M28 108l244 18 18 87-246 10z",fill:"#090b08",opacity:".3"}),fe.jsx("path",{d:"M30 102l239 14 18 90-244 8z",fill:"#9c9075"}),fe.jsx("path",{d:"M30 98l238 15 19 88-244 9z",fill:n("paper"),stroke:"#a99e81"}),fe.jsx("path",{d:"M44 198l240-8m-240 12l241-8",stroke:"#b2a78d"}),fe.jsx("path",{d:"M39 117l231 13M43 145l233 11",stroke:"#4a4b3e",strokeWidth:"1"}),fe.jsx("rect",{x:"52",y:"159",width:"64",height:"33",fill:"#8b8c74",transform:"rotate(3 52 159)"}),Array.from({length:7},(o,c)=>fe.jsx("path",{d:`M126 ${160+c*5}l140 8`,stroke:"#797b65",strokeWidth:"1",opacity:".65"},c)),fe.jsx("path",{d:"M156 108l10 96",stroke:"#998c6f",opacity:".4"})]}),i==="rocket"&&fe.jsxs("g",{children:[fe.jsx("ellipse",{cx:"157",cy:"224",rx:"91",ry:"7",fill:"#090b08",opacity:".4"}),fe.jsx("path",{d:"M103 224h112l-17-9h-80z",fill:n("wood")}),fe.jsx("path",{d:"M157 216V125",stroke:"#ac955e",strokeWidth:"4"}),fe.jsx("path",{d:"M156 213V128",stroke:"#e4cd94",strokeWidth:"1"}),fe.jsxs("g",{transform:"rotate(18 155 123)",children:[fe.jsx("path",{d:"M135 169l-23 24 3-56 20-24m40 56l23 24-3-56-20-24",fill:"#814e40",stroke:"#b78360"}),fe.jsx("path",{d:"M135 77q20-27 40 0v92h-40z",fill:n("paper"),stroke:"#8f8e78"}),fe.jsx("path",{d:"M135 77q4-36 20-59 16 23 20 59z",fill:n("metal")}),fe.jsx("path",{d:"M135 140h40v14h-40",fill:"#485447"}),fe.jsx("circle",{cx:"155",cy:"101",r:"10",fill:n("black"),stroke:n("metal"),strokeWidth:"3"}),fe.jsx("circle",{cx:"155",cy:"101",r:"5",fill:"#506b6b"}),fe.jsx("path",{d:"M138 171h34l-6 10h-21z",fill:n("black")}),fe.jsx("path",{d:"M142 80v51",stroke:"#fff3d9",opacity:".6"})]}),fe.jsx("rect",{x:"202",y:"181",width:"72",height:"36",rx:"3",fill:"#4a5145",stroke:"#86907a"}),fe.jsx("rect",{x:"210",y:"188",width:"28",height:"19",fill:"#24382f",stroke:"#b0a377"}),fe.jsx("path",{d:"M213 198h6l3-5 4 8 4-5h5",stroke:"#b8bb82",fill:"none"}),fe.jsx("circle",{cx:"252",cy:"196",r:"6",fill:n("metal")}),fe.jsx("circle",{cx:"265",cy:"205",r:"2",fill:"#b8b28b"})]}),i==="letter"&&fe.jsxs("g",{transform:"rotate(-5 150 180)",children:[fe.jsx("ellipse",{cx:"158",cy:"220",rx:"128",ry:"7",fill:"#080a08",opacity:".3"}),fe.jsx("path",{d:"M51 89l204 12-3 112-204-13z",fill:"#89806b"}),fe.jsx("path",{d:"M47 82l204 13-2 111-204-13z",fill:n("paper")}),fe.jsx("path",{d:"M46 85l98 78 106-66m-204 95l76-48m127 60l-74-52",fill:"none",stroke:"#a99a7a",strokeWidth:"1.4"}),fe.jsx("circle",{cx:"147",cy:"159",r:"17",fill:"#85483c",stroke:"#633c30",strokeWidth:"2"}),fe.jsx("circle",{cx:"147",cy:"159",r:"12",fill:"none",stroke:"#b57a58"}),fe.jsx("path",{d:"M232 203l31-112 6 2-31 112z",fill:n("metal")}),fe.jsx("path",{d:"M232 203l-1 11 7-9",fill:"#1c2725"})]}),i==="phone"&&fe.jsxs("g",{className:"phone-drawing",stroke:"#30352f",strokeWidth:"3",strokeLinejoin:"round",children:[fe.jsx("ellipse",{cx:"163",cy:"223",rx:"112",ry:"7",fill:"#19211d",opacity:".2",stroke:"none"}),fe.jsx("path",{d:"M86 143Q90 129 111 128h96q20 0 26 17l27 64q-89 23-191 0z",fill:"#92adb0"}),fe.jsx("path",{d:"M73 204q96 17 181-1l6 11q-91 22-191 0z",fill:"#607f84"}),fe.jsx("path",{d:"M105 132v-22m102 22v-22",fill:"none",strokeWidth:"8"}),fe.jsx("path",{className:"phone-cord",d:"M231 105q48 5 37 36c-20 13 22 7 5 22s19 9 1 22 18 8 0 20q-6 9-25 7",fill:"none",stroke:"#d9c5a4",strokeWidth:"4"}),fe.jsxs("g",{className:"phone-dial",children:[fe.jsx("ellipse",{cx:"162",cy:"171",rx:"45",ry:"34",fill:"#e0cfaa"}),fe.jsx("ellipse",{cx:"162",cy:"171",rx:"22",ry:"16",fill:"#8ca2a0"}),Array.from({length:10},(o,c)=>fe.jsx("ellipse",{cx:162+33*Math.cos(c*Math.PI/5),cy:171+25*Math.sin(c*Math.PI/5),rx:"5",ry:"4",fill:"#3d514e",stroke:"none"},c))]}),fe.jsxs("g",{className:"phone-receiver",children:[fe.jsx("path",{d:"M72 108Q66 67 103 62q58-21 116 0 37 5 29 46l-37 6-10-34q-40-10-78 0l-11 34z",fill:"#a9c5c5"}),fe.jsx("path",{d:"M77 101l30 5m109 0 27-5",fill:"none",stroke:"#647f80",strokeWidth:"6"}),fe.jsx("path",{d:"M104 68q59-19 111 0",fill:"none",stroke:"#dfebe0",opacity:".6"})]}),fe.jsx("g",{className:"phone-ring",fill:"none",stroke:"#e8cc8b",strokeWidth:"4",children:fe.jsx("path",{d:"M55 68l-15-7m20-7-9-15m208 29 16-7m-23-8 10-15"})})]}),i==="lamp"&&fe.jsxs("g",{children:[fe.jsx("ellipse",{cx:"178",cy:"224",rx:"75",ry:"8",fill:"#0a0c08",opacity:".4"}),fe.jsx("ellipse",{cx:"169",cy:"216",rx:"57",ry:"10",fill:n("metal")}),fe.jsx("path",{d:"M127 213q3-14 42-14 39 0 43 14",fill:n("black")}),fe.jsx("path",{d:"M169 202V113l-53-51",fill:"none",stroke:"#554a2f",strokeWidth:"9"}),fe.jsx("path",{d:"M167 199V114l-52-51",fill:"none",stroke:n("metal"),strokeWidth:"5"}),fe.jsx("circle",{cx:"168",cy:"116",r:"7",fill:n("metal")}),fe.jsx("path",{d:"M100 51q32-13 47 13l29 44q-41 8-73 32l-21-47q-10-27 18-42",fill:"#374d40",stroke:"#79806a"}),fe.jsx("path",{d:"M84 90q24-29 62-26",stroke:"#a9b094",opacity:".4",fill:"none",strokeWidth:"2"}),fe.jsx("ellipse",{cx:"139",cy:"123",rx:"43",ry:"10",transform:"rotate(-24 139 123)",fill:"#d1c28e",stroke:"#848067"}),fe.jsx("ellipse",{className:"lamp-bulb",cx:"139",cy:"123",rx:"26",ry:"6",transform:"rotate(-24 139 123)",fill:"#fff0b1"}),fe.jsx("path",{d:"M163 138v31",stroke:"#d7bc7c"}),fe.jsx("circle",{cx:"163",cy:"171",r:"3",fill:n("metal")})]}),i==="record"&&fe.jsxs("g",{children:[fe.jsx("ellipse",{cx:"161",cy:"223",rx:"125",ry:"8",fill:"#080a08",opacity:".4"}),fe.jsx("path",{d:"M32 126l221-10 39 64-234 16z",fill:"#716144",stroke:"#b39966"}),fe.jsx("path",{d:"M58 196l234-16v32L58 225 32 158v-32z",fill:n("wood")}),fe.jsx("path",{d:"M58 196v29m0-21l234-15",stroke:"#39281e"}),fe.jsx("g",{transform:"translate(145 157) scale(1 .39)",children:fe.jsxs("g",{className:e?"record-disc playing":"record-disc",children:[fe.jsx("circle",{r:"82",fill:"#161b17",stroke:"#787560"}),[72,64,56,48].map(o=>fe.jsx("circle",{r:o,fill:"none",stroke:"#414738",strokeWidth:".8"},o)),fe.jsx("circle",{r:"26",fill:"#875345"}),fe.jsx("path",{d:"M-17-5l34 10",stroke:"#c5a57d",strokeWidth:"2"}),fe.jsx("path",{d:"M-60-35q14-16 39-26",stroke:"#a3a28a",strokeWidth:"8",opacity:".08"}),fe.jsx("circle",{r:"3",fill:"#d3c69e"})]})}),fe.jsx("path",{d:"M243 135l-19 34-29 5",fill:"none",stroke:"#1d211a",strokeWidth:"7"}),fe.jsx("path",{d:"M243 131l-19 34-29 5",fill:"none",stroke:n("metal"),strokeWidth:"4"}),fe.jsx("ellipse",{cx:"243",cy:"132",rx:"9",ry:"4",fill:n("black")}),fe.jsx("rect",{x:"187",y:"167",width:"19",height:"8",rx:"1",fill:"#b4b199"}),fe.jsx("rect",{x:"74",y:"205",width:"35",height:"8",rx:"1",fill:n("metal")}),fe.jsx("circle",{cx:"261",cy:"199",r:"4",fill:n("metal")}),fe.jsx("circle",{cx:"277",cy:"198",r:"2",fill:e?"#bfcc8d":"#433b26"})]})]})}const Dh=i=>({daylight:i==="daylight"?1:0,lamplight:i!=="daylight"&&i!=="darkroom"?1:0,darkroom:i==="darkroom"?1:0});function aS(i,e=800){let t=i,n=Dh(t),o=Dh(t),c=0;const u=d=>{const p=Math.max(0,Math.min(1,(d-c)/e)),g=p*p*(3-2*p);return{daylight:n.daylight+(o.daylight-n.daylight)*g,lamplight:n.lamplight+(o.lamplight-n.lamplight)*g,darkroom:n.darkroom+(o.darkroom-n.darkroom)*g}};return{update(d,p,g){return d!==t&&(n=u(p),t=d,o=Dh(t),c=p),g||(n={...o}),u(p)}}}const Ho=(i,e,t,n)=>i.daylight*e+i.lamplight*t+i.darkroom*n;function sS(i,e){const{geometries:t,materials:n}=e;function o(y,P=0,z=.65){const G=new ru({color:y,metalness:P,roughness:z});return n.push(G),G}const c=o("#a9905e",0,.98),u=o("#b99a58",.7,.28),d=o("#d8cfb4"),p=o("#bfb79f"),g=o("#39291f"),S=o("#243a32"),E=o("#92a29b",.2,.2);function _(y,P,z,G,q,ae=i){t.push(y);const W=new Di(y,P);return W.position.set(z,G,q),ae.add(W),W}function x(y,P,z,G,q,ae,W){return _(new Zs(G,q,ae),W,y,P,z)}function R(y,P,z,G,q,ae,W=i){const ue=_(new Cf(G,q,6,64),ae,y,P,z,W);return ue.rotation.x=Math.PI/2,ue}function N(y,P,z,G,q=i){const ae=P.clone().sub(y),W=_(new Wo(z,z,ae.length(),8),G,0,0,0,q);return W.position.copy(y).add(P).multiplyScalar(.5),W.quaternion.setFromUnitVectors(new K(0,1,0),ae.normalize()),W}x(0,6.04,4,14,.16,18,d);for(const y of[5.64,5.78,5.91]){const P=(y-5.5)*.52;x(0,y,-4.88+P,14,.09,.12+P,p),x(-6.9+P,y,4,.12+P,.09,18,p),x(6.9-P,y,4,.12+P,.09,18,p)}x(0,5.61,-4.66,14,.025,.035,u);for(const y of[-5,-2,1,4])x(y,5.91,4,.12,.16,17.5,p);for(const y of[-3,0,3,6,9,12])x(0,5.91,y,13.5,.16,.12,p);for(const y of[-5,-2,1,4])for(const P of[-3,0,3,6,9])x(y+1.43,5.94,P+1.44,2.65,.025,.025,u),x(y+.1,5.94,P+1.4,.025,.025,2.65,u);for(const y of[.18,.35,1.65,1.78])x(0,y,-4.84,13.8,.07,.1,y===1.78?u:g);for(let y=1.4;y<6.9;y+=1.05)x(y,.98,-4.82,.035,1.2,.06,u),x(y+.5,.42,-4.81,.86,.025,.05,u),x(y+.5,1.54,-4.81,.86,.025,.05,u);for(const y of[-6.85,6.85]){x(y,.25,4,.12,.22,18,g),x(y,1.78,4,.08,.035,18,u);for(let P=-4;P<13;P+=1.4)x(y,.96,P,.065,1.35,.035,u)}x(-6.86,3.65,.5,.06,2.8,2.6,g),x(-6.8,3.65,.5,.04,2.57,2.35,E);for(const y of[-.7,.5,1.7])x(-6.75,3.65,y,.06,2.65,.055,u);x(-6.74,3.65,.5,.055,.06,2.4,u);for(const y of[-1,2])for(let P=0;P<4;P++)_(new Wo(.11,.15,3.25,10),S,-6.6+P*.07,3.45,y+P*.12);for(const y of[-3.15,3.15])x(y,.035,1,.04,.006,4.5,c);for(const y of[-1.15,3.15])x(0,.035,y,6.3,.006,.04,c);for(let y=0;y<19;y++)for(const P of[-1,3]){const z=x(-2.9+y*.32,.039,P,.075,.005,.075,c);z.rotation.y=Math.PI/4}R(0,.033,1,1,.018,c).scale.set(1,1.4,.08);for(let y=0;y<12;y++){const P=y*Math.PI/6;R(Math.cos(P)*.5,.034,1+Math.sin(P)*.7,.18,.01,c).scale.set(.8,1.3,.08)}const M=new pr;M.position.set(.75,0,-1.4),i.add(M);const O=.75,k=-1.4;R(O,5.92,k,.65,.055,p),R(O,5.9,k,.43,.02,u),N(new K(0,5.92,0),new K(0,5.08,0),.025,u,M),R(0,4.78,0,.78,.035,u,M),R(0,4.49,0,.45,.027,u,M);const C=new ru({color:"#fff1c7",emissive:"#ffd691",emissiveIntensity:2.3,roughness:.4});n.push(C);const F=new zg({color:"#e6e8d8",metalness:.12,roughness:.12,transparent:!0,opacity:.65});n.push(F);for(let y=0;y<8;y++){const P=y*Math.PI/4,z=Math.cos(P),G=Math.sin(P),q=[new K(0,5.05,0),new K(z*.4,4.7,G*.4),new K(z*.94,4.74,G*.94),new K(z*1.05,5,G*1.05)];_(new zd(new Fg(q),16,.026,6,!1),u,0,0,0,M),_(new Wo(.12,.075,.04,16),u,z*1.05,5,G*1.05,M),_(new Wo(.034,.041,.2,10),d,z*1.05,5.12,G*1.05,M);const ae=_(new Rf(.06,10,8),C,z*1.05,5.26,G*1.05,M);ae.scale.y=1.7,N(new K(z*.76,4.78,G*.76),new K(z*.76,4.5,G*.76),.008,u,M);const W=_(new Tf(.09),F,z*.76,4.45,G*.76,M);W.scale.y=1.8}const D=_(new Tf(.16),F,0,4.28,0,M);D.scale.y=1.8;const H=new Q0("#ffdb9a",14,15,2);return H.position.set(O,4.9,k),i.add(H),{update:y=>{H.intensity=Ho(y,7,14,2),C.emissiveIntensity=Ho(y,1.2,2.3,.35)}}}function oS(i,e){const{geometries:t,materials:n}=e,o=new pr;o.position.set(-4.4,1,.2),o.userData.id="record",i.add(o);function c(y,P=0,z=.5){const G=new ru({color:y,metalness:P,roughness:z});return n.push(G),G}const u=c("#62432d"),d=c("#bba779",.75,.24),p=c("#161c19"),g=c("#242925"),S=c("#8c493e"),E=c("#d0c4a5");function _(y,P,z,G,q,ae=o){t.push(y);const W=new Di(y,P);return W.position.set(z,G,q),ae.add(W),W}function x(y,P,z,G,q,ae,W,ue=o){return _(new Zs(G,q,ae),W,y,P,z,ue)}function R(y,P,z,G,q,ae,W=o){return _(new Wo(G,G,q,48),ae,y,P,z,W)}x(0,0,0,1.85,.21,1.35,u),x(0,.112,0,1.78,.025,1.28,p);for(const y of[-.72,.72])for(const P of[-.48,.48])R(y,-.14,P,.085,.09,g);R(-.25,.14,0,.56,.04,d);const N=new pr;N.name="record-platter",N.position.set(-.25,.171,0),o.add(N),R(0,0,0,.525,.022,p,N);for(let y=.18;y<.5;y+=.026){const P=_(new Cf(y,.0019,3,64),g,0,.013,0,N);P.rotation.x=Math.PI/2}R(0,.015,0,.145,.005,S,N),x(.035,.019,0,.035,.002,.16,E,N),R(0,.033,0,.015,.04,d,N);const w=new pr;w.name="record-tonearm",w.position.set(.62,.2,-.4),o.add(w),R(0,0,0,.075,.08,d,w),x(0,.07,.19,.025,.025,.38,d,w);const M=x(-.105,.07,.44,.025,.025,.29,d,w);M.rotation.y=-.8,x(-.21,.052,.54,.075,.035,.13,p,w),R(-.21,.015,.57,.005,.06,d,w),x(.015,.07,-.1,.1,.1,.13,p,w),R(.64,.153,.43,.065,.025,d),x(.32,.151,.46,.17,.01,.1,E);const O=new ru({color:"#779775",emissive:"#91ba6c",emissiveIntensity:0});n.push(O),_(new Rf(.018,8,6),O,.7,.025,.684);const k=new pr;k.position.set(0,.13,-.67),k.rotation.x=-1.22,o.add(k);const C=new zg({color:"#b7c1b4",transparent:!0,opacity:.13,roughness:.15,metalness:.05,side:Ur,depthWrite:!1});n.push(C),x(0,0,.67,1.88,.025,1.36,C,k);for(const y of[-.94,.94])x(y,0,.67,.018,.022,1.36,d,k);x(0,0,1.35,1.88,.02,.018,d,k);let F=0,D=0,H=0;return{body:o,update:(y,P,z)=>{const G=Math.min((y-H)/1e3,.05);H=y,F=z?ps.damp(F,P?1:0,3,G):P?1:0,D=z?ps.damp(D,P?1:0,4,G):P?1:0,z&&(N.rotation.y-=G*F*Math.PI*2*33.333/60),w.rotation.y=.2-D*.98,w.position.y=.2+(1-D)*.07,O.emissiveIntensity=P?1.5:0}}}class lS{constructor(e){this.arrive=e}arrive;x=-6.02;target=-6.02;trip=null;move(e,t,n,o){if(this.target=t,!o){this.trip=null,this.x=t,e&&this.arrive(e);return}this.trip={from:this.x,start:n,duration:Math.min(1400,Math.max(650,Math.abs(t-this.x)*170)),destination:e}}update(e,t){if(!this.trip)return;const n=this.trip,o=t?Math.min(1,(e-n.start)/n.duration):1,c=o===1?1:Math.floor(o*24)/24,u=c*c*(3-2*c);this.x=n.from+(this.target-n.from)*u,o===1&&(this.trip=null,this.x=this.target,n.destination&&this.arrive(n.destination))}get moving(){return this.trip!==null}}function cS(i){const e=[],t=[];for(const[n,o]of i)n!=="notes"&&o.traverse(c=>{if(!(c instanceof Di))return;const u=c.material;if(u.transparent&&u.opacity<.2)return;const d=new Di(c.geometry,c.material);d.matrixAutoUpdate=!1,d.matrixWorld.copy(c.matrixWorld),d.userData.id=n,e.push(d),n==="ladder"&&t.push({source:c,target:d})});return{targets:e,updateMoving:()=>t.forEach(({source:n,target:o})=>o.matrixWorld.copy(n.matrixWorld))}}function uS(i,e){if(!i||!e)return!0;const t=i.image;if(!(t instanceof HTMLCanvasElement))return!0;const n=i.userData.hitPixels;if(!n)return!1;const o=ps.clamp(Math.floor(e.x*t.width),0,t.width-1),c=ps.clamp(Math.floor((1-e.y)*t.height),0,t.height-1);return n[(c*t.width+o)*4+3]>=30}const Ws=(i,e=320,t=240)=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${e} ${t}">${i}</svg>`;function dS(i,e,t,n,o=()=>{}){const c=new $y({antialias:!0});c.setPixelRatio(Math.min(devicePixelRatio,1.6)),c.outputColorSpace=Xi,c.setClearColor("#252d28"),i.appendChild(c.domElement);const u=new p0,d=new hr(57,1,.1,60);d.position.set(0,1.65,6.8);const p=[],g=[],S=[],E=[],_=Ce=>{const Ge=document.createElement("canvas");Ge.width=640,Ge.height=480;const ht=new bp(Ge);ht.colorSpace=Xi,p.push(ht);const At=new Image;return At.onload=()=>{de||(Ge.getContext("2d").drawImage(At,0,0,640,480),ht.userData.hitPixels=Ge.getContext("2d").getImageData(0,0,Ge.width,Ge.height).data,ht.needsUpdate=!0)},At.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(Ce)}`,ht},x=Ce=>{const Ge=new X0({color:Ce});return g.push(Ge),Ge},R=x("#68452f"),N=x("#30251f"),w=x("#354b40"),M=x("#c9ba95"),O=x("#303e36"),k=x("#77534d");function C(Ce,Ge,ht,At,yt,Ft,mt,pt=u){const tn=new Zs(At,yt,Ft);S.push(tn);const Ht=new Di(tn,mt);return Ht.position.set(Ce,Ge,ht),pt.add(Ht),Ht}const F=new Map,D=new Map;function H(Ce,Ge,ht,At,yt,Ft,mt){const pt=new pr;pt.position.set(ht,At,yt),pt.userData.id=Ce,pt.userData.paper=!0;const tn=new Ef({map:_(Ge),transparent:!0,side:Ur,depthWrite:!1});g.push(tn),Ce!=="exit"&&E.push(tn);const Ht=new rc(Ft,mt);S.push(Ht);const gr=new Di(Ht,tn);return pt.add(gr),u.add(pt),F.set(Ce,pt),D.set(Ce,pt.position.clone()),pt}function y(Ce){return iS.renderToStaticMarkup(cg.createElement(rS,{kind:Ce})).replace("<svg ",'<svg xmlns="http://www.w3.org/2000/svg" ').replace("<defs>",'<filter id="paint-edge"><feTurbulence type="fractalNoise" baseFrequency=".06" numOctaves="2" seed="6"/><feDisplacementMap in="SourceGraphic" scale="1.3"/></filter><style>.phone-ring{opacity:0}svg>g{filter:url(#paint-edge)}linearGradient stop{stop-color:#b4a17e}linearGradient[id$="black"] stop{stop-color:#34443e}linearGradient[id$="wood"] stop{stop-color:#8c674b}linearGradient[id$="paper"] stop{stop-color:#ded1b1}radialGradient stop{stop-color:#537d7b}</style><defs>')}C(0,-.12,0,14,.2,28,R),C(0,3,-5,14,6,.18,w),C(-7,3,4,.18,6,18,w),C(7,3,4,.18,6,18,w);for(let Ce=-7;Ce<7;Ce+=.7)C(Ce,.001,0,.018,.008,27,N);C(0,.012,1,7,.018,5,k);for(const Ce of[-3.3,3.3])C(Ce,.025,1,.045,.012,4.6,M);const P=sS(u,{geometries:S,materials:g}),z=-2.6,G=-4.55;C(z,2.65,G-.2,7.2,5.1,.2,N);for(const Ce of[-6.25,-3.8,-1.4,1.05])C(Ce,2.65,G+.15,.13,5.2,.75,R);const ae=[.35,1.95,3.55,5.15];for(const Ce of ae)C(z,Ce,G+.1,7.4,.14,.85,R),C(z,Ce+.055,G+.54,7.4,.035,.035,M);const W=(Ce,Ge,ht,At)=>H(Ce,y(Ge),ht,At+.07+.7-.11,-3.98,1.85,1.4);W("photography","camera",-5.02,3.55),W("about","books",-2.6,3.55),W("favorites","frames",-.17,3.55),W("published","paper",-5.02,1.95);const ue=W("engineering","rocket",-3.12,1.95);ue.scale.x=.78;const Me=H("device",Ws('<g stroke="#34443e" stroke-width="5" stroke-linejoin="round"><path d="M92 16h138v177q0 29-31 29H92z" fill="#c7bca3"/><path d="M108 35h105v85H108z" fill="#536055"/><path d="M122 48h76v57h-76z" fill="#9da77a"/><path d="M116 157h37m-19-18v37" stroke-width="12"/><circle cx="191" cy="154" r="10" fill="#875345"/><circle cx="211" cy="177" r="10" fill="#875345"/><path d="M157 201h19m9 0h19"/></g>'),-2.13,2.61,-3.97,1.65,1.35),_e=new pr;_e.position.set(-2.6,2.61,-3.98),_e.userData.id="engineering",_e.userData.paper=!0,u.add(_e),u.updateMatrixWorld(!0),_e.attach(ue),_e.attach(Me),F.set("engineering",_e),D.set("engineering",_e.position.clone()),F.delete("device"),D.delete("device");const ie=H("stats",Ws('<rect x="8" y="8" width="304" height="224" fill="#ded3b5" stroke="#8b6945" stroke-width="12"/><text x="27" y="60" fill="#34443e" font-size="20">THE SOCIAL LEDGER</text><text x="27" y="110" fill="#34443e" font-size="15">Statistics unavailable</text>'),-.17,2.72,-3.94,2.08,1.42).children[0].material,V=async()=>{try{const Ce=await $g();if(de)return;const Ge=Math.max(1,...Ce.growth.map(yt=>yt.count??0)),ht=Ce.growth.map((yt,Ft)=>`<rect x="${28+Ft*8.8}" y="${188-(yt.count??0)/Ge*65}" width="6" height="${(yt.count??0)/Ge*65}" fill="#8b6945"/>`).join(""),At=ie.map;if(ie.map=_(Ws(`<rect x="8" y="8" width="304" height="224" fill="#ded3b5" stroke="#8b6945" stroke-width="12"/><text x="27" y="42" fill="#34443e" font-family="serif" font-size="17">THE SOCIAL LEDGER</text><text x="27" y="77" fill="#34443e" font-size="27">${Ce.followers.toLocaleString()} followers</text><text x="27" y="102" fill="#34443e" font-size="14">${Ce.posts} posts · collabs unavailable</text>${ht}<text x="27" y="213" fill="#34443e" font-size="12">Daily new follows · click to explore</text>`)),At){At.dispose();const yt=p.indexOf(At);yt>=0&&p.splice(yt,1)}ie.needsUpdate=!0}catch{}};queueMicrotask(()=>{V()});const xe=setInterval(()=>{V()},3e5),at=new pr;at.userData.id="shelf-books",u.add(at),F.set("shelf-books",at),D.set("shelf-books",at.position.clone());for(let Ce=0;Ce<3;Ce++)for(let Ge=0;Ge<7;Ge++){const ht=-5.93+Ce*2.43+Ge*.28,At=.7+Ge%3*.15;C(ht,.43+At/2,-4.36,.21,At,.4,[O,k,M][Ge%3],at),C(ht,.63,-4.145,.17,.025,.015,M,at)}const tt=1.16;C(3.8,tt,-2.2,3.7,.16,1.5,R),C(3.8,.85,-2.2,3.4,.5,1.3,N);for(const Ce of[2.2,5.4])for(const Ge of[-2.8,-1.6])C(Ce,.55,Ge,.13,1.1,.13,R);const we=Ws('<g stroke="#273b36" stroke-width="3" stroke-linejoin="round"><path d="M77 310l15-131q45-24 90 0l22 131" fill="#33433e"/><path d="M116 173l22 62 26-62" fill="#d9d4b6"/><path d="M134 185l-17-9v20l20-8 19 8v-20z" fill="#7d5148"/><path d="M96 191l-19 88 30 7m73-95 21 88-29 7" fill="#33433e"/><ellipse cx="137" cy="117" rx="37" ry="49" fill="#caa58a"/><path d="M102 122q-20-68 38-66 52 0 30 69l-8-31q-25 13-51-1z" fill="#c5cebe"/><circle cx="124" cy="117" r="4" fill="#263931"/><circle cx="150" cy="117" r="4" fill="#263931"/><path d="M129 144q10 6 19-1m-11-27-5 17h9" fill="none"/><ellipse cx="94" cy="286" rx="18" ry="12" fill="#e4dfc7"/><ellipse cx="182" cy="286" rx="18" ry="12" fill="#e4dfc7"/></g>',280,320);H("butler",we,3.85,2.03,-2.95,1.65,2.6);let oe=y("phone");const ve=oe.match(/<g class="phone-receiver">[\s\S]*?<\/g>/)?.[0]||"";oe=oe.replace(ve,""),H("contact",oe,3.05,tt+.08+.46-.065,-1.93,1.22,.92);const me=H("receiver",Ws(ve),3.05,tt+.08+.46-.065,-1.91,1.22,.92);H("letter",y("letter"),4.02,tt+.38,-1.38,.85,.64),H("lamp",y("lamp"),4.95,tt+.08+.64,-2.17,1.65,1.28);const ke=new pr;ke.position.set(-5.7,0,-1.8),ke.scale.setScalar(.8),u.add(ke),C(0,.77,0,2,.14,1.3,R,ke);for(const Ce of[-.8,.8])C(Ce,.38,0,.12,.76,1,N,ke);const ft=oS(u,{geometries:S,materials:g});ke.add(ft.body),ft.body.position.set(0,1,0),F.set("record",ft.body),D.set("record",ft.body.position.clone());const Xe=H("notes",Ws('<g fill="#e4d3a4" font-family="Georgia" font-size="66"><text x="55" y="110">♪</text><text x="180" y="65">♫</text></g>'),0,2.02,.04,1.6,1.2);ke.add(Xe),Xe.visible=!1,C(3.8,3.9,-4.85,2.5,.06,.08,M);const St=H("exit",Ws('<path d="M25 65l270-4 2 110-271 4z" fill="#416453" stroke="#c5cfac" stroke-width="5"/><text x="52" y="141" fill="#e2e9c0" font-family="sans-serif" font-size="58" letter-spacing="8">EXIT ↗</text>'),3.8,4.3,-4.65,1.85,1.38);C(-2.6,4.95,-3.5,7.5,.055,.06,M);const Nt=Ws(`<g stroke-linecap="round"><path d="M55 12L20 370M94 12l14 358" stroke="#382e28" stroke-width="14"/><path d="M55 12L20 370M94 12l14 358" stroke="#bc9269" stroke-width="8"/>${Array.from({length:9},(Ce,Ge)=>`<path d="M${52-Ge*3} ${42+Ge*36}h${44+Ge*4}" stroke="#cdb486" stroke-width="8"/>`).join("")}<circle cx="23" cy="375" r="8" fill="#303c34"/><circle cx="108" cy="375" r="8" fill="#303c34"/></g>`,130,390),wt=H("ladder",Nt,-6.02,2.48,-3.28,.85,4.95);let Ut=!1,Ye=0,bt=!1;const Jt=new lS(Ce=>{i.removeAttribute("aria-busy"),o("Opening the selected collection."),n(Ce)});function Vt(Ce,Ge,ht,At,yt,Ft,mt){const pt=document.createElement("canvas");pt.width=512,pt.height=Math.round(512*Ft/yt);const tn=pt.getContext("2d");tn.fillStyle="#d8cead",tn.fillRect(0,0,pt.width,pt.height);const Ht=new bp(pt);Ht.colorSpace=Xi,p.push(Ht);const gr=new Ef({map:Ht,side:Ur});g.push(gr);const mr=new rc(yt,Ft);S.push(mr);const vr=new Di(mr,gr);vr.position.set(ht,At,.015),vr.rotation.z=mt,F.get(Ce)?.add(vr);const Kn=new Image;Kn.onload=()=>{if(de)return;const sa=Math.min(pt.width/Kn.width,pt.height/Kn.height),oa=Kn.width*sa,Yt=Kn.height*sa;tn.drawImage(Kn,(pt.width-oa)/2,(pt.height-Yt)/2,oa,Yt),Ht.userData.hitPixels=tn.getImageData(0,0,pt.width,pt.height).data,Ht.needsUpdate=!0},Kn.src=Ge}em().then(Ce=>{if(de)return;const Ge=Ft=>Ce.posts.find(mt=>mt.id===Ft)?.image.src,ht=Ge("18151133245558753"),At=Ge("18117687656072162"),yt=Ge("18119889931954458");ht&&Vt("favorites",ht,-.386,-.006,.601,.7,Math.PI/45),At&&Vt("favorites",At,.4,-.177,.538,.49,-Math.PI/45),yt&&Vt("about",yt,.367,-.133,.272,.455,-Math.PI/22.5)}).catch(()=>{});const Sn=new J0("#eee3c8","#3b2920",2.4);u.add(Sn);const Wt=new j0("#ffe0ad",1.4);Wt.position.set(-4,7,5),u.add(Wt);const fn=new tv,Y=new ut;let en=null,dt=null,B=0,A=.055,te=null,ne=!1,de=!1;const De=matchMedia("(prefers-reduced-motion: reduce)"),Ue=aS(e().lighting),pe=(Ce,Ge,ht)=>[new Pt(Ce),new Pt(Ge),new Pt(ht)],be=pe("#eee3c8","#eee3c8","#ff3730"),Be=pe("#ffe0ad","#ffe0ad","#ff241c"),nt=pe("#ffffff","#ffe8c5","#e56e63"),ze=pe("#889381","#394238","#292329"),Ne=new Pt,lt=new Pt,st=(Ce,Ge,ht)=>Ce.setRGB(Ho(ht,Ge[0].r,Ge[1].r,Ge[2].r),Ho(ht,Ge[0].g,Ge[1].g,Ge[2].g),Ho(ht,Ge[0].b,Ge[1].b,Ge[2].b)),vt=Ce=>Ce==="receiver"||Ce==="butler"||Ce==="letter"?"contact":Ce==="device"?"engineering":Ce==="vinyl"?"record":Ce==="shelf-books"?"about":Ce;u.updateMatrixWorld(!0);const J=cS(F);function Ee(Ce){const Ge=c.domElement.getBoundingClientRect();Y.set((Ce.clientX-Ge.left)/Ge.width*2-1,-(Ce.clientY-Ge.top)/Ge.height*2+1),fn.setFromCamera(Y,d),u.updateMatrixWorld(!0),J.updateMoving();for(const ht of fn.intersectObjects(J.targets,!1)){const At=ht.object,yt=At.material;if(uS(yt.map||void 0,ht.uv))return{id:At.userData.id,x:ht.point.x}}return null}const ye=Ce=>{Ce!==dt&&(dt=Ce,t(dt?vt(dt):null),c.domElement.style.cursor=dt?"pointer":"grab")},Fe=new Set(["photography","about","favorites","published","engineering","stats","shelf-books"]);function Oe(Ce,Ge){const ht=vt(Ce),At=e().motion&&!De.matches;if(Ce==="ladder"){Ut=!Ut,Jt.move(null,Ut?.72:-6.02,performance.now(),At);return}if(Fe.has(Ce)){const yt=Ce==="shelf-books"?Ge??-2.6:D.get(Ce)?.x??-2.6;let Ft=ps.clamp(yt-.85,-6.02,.72);Math.abs(Ft-Jt.x)<.2&&(Ft=ps.clamp(yt+.65,-6.02,.72)),i.setAttribute("aria-busy","true"),o("The ladder is moving to your selection."),Jt.move(ht,Ft,performance.now(),At);return}if(ht==="contact"&&At){Ye||(Ye=performance.now());return}n(ht)}const Ae=Ce=>{Ce.button===0&&(te={x:Ce.clientX,y:Ce.clientY,yaw:B,pitch:A},ne=!1,c.domElement.setPointerCapture(Ce.pointerId))},rt=Ce=>{if(te){const Ge=Ce.clientX-te.x,ht=Ce.clientY-te.y;Math.abs(Ge)+Math.abs(ht)>6&&(ne=!0,ye(null),c.domElement.style.cursor="grabbing"),B=ps.clamp(te.yaw-Ge*.0018,-.46,.46),A=ps.clamp(te.pitch+ht*.0015,-.18,.3)}else en=null,ye(Ee(Ce)?.id||null)},it=Ce=>{if(te&&!ne){const Ge=Ee(Ce);Ge&&Oe(Ge.id,Ge.x)}te=null},Lt=()=>{ye(null)},Xt=()=>{te=null};c.domElement.addEventListener("pointerdown",Ae),c.domElement.addEventListener("pointermove",rt),c.domElement.addEventListener("pointerup",it),c.domElement.addEventListener("pointerleave",Lt),c.domElement.addEventListener("pointercancel",Xt);const hn=()=>{const Ce=i.clientWidth,Ge=i.clientHeight;c.setSize(Ce,Ge),d.aspect=Ce/Ge,d.fov=Ce<700?80:57,d.position.z=Ce<700?12:6.8,ke.position.x=Ce<700?-4.7:-5.7,ke.scale.setScalar(Ce<700?.65:.8),d.updateProjectionMatrix()},ci=new ResizeObserver(hn);return ci.observe(i),hn(),c.setAnimationLoop(Ce=>{if(de||document.hidden)return;const Ge=e(),ht=Ge.motion&&!De.matches,At=Ce/1e3;d.lookAt(d.position.x+Math.sin(B)*10,d.position.y+Math.sin(A)*10,d.position.z-Math.cos(B)*10);const yt=dt||en;if(F.forEach((mt,pt)=>{if(mt.position.copy(D.get(pt)),mt.rotation.set(0,0,0),ht&&yt===pt&&!["ladder","receiver","contact","record","shelf-books"].includes(pt)){const tn=Math.floor(At*10)/10;mt.rotation.z=Math.sin(tn*7)*.025,mt.position.y+=.035,pt==="about"&&(mt.rotation.z=Math.sin(tn*5)*.045),pt==="published"?mt.rotation.x=Math.sin(tn*8)*.07:mt.rotation.x=0,pt==="engineering"&&(mt.position.y+=Math.max(0,Math.sin(tn*5))*.1)}}),Jt.update(performance.now(),ht),wt.position.x=Jt.x,i.dataset.ladderState=Jt.moving?"moving":"idle",i.dataset.ladderX=Jt.x.toFixed(3),ht&&(St.rotation.z=Math.sin(Math.floor(At*8)/8)*.025),ft.update(Ce,Ge.playing,ht),Xe.visible=Ge.playing,Xe.position.y=2.02+(ht?At%2*.15:0),Ye){const mt=Math.min((performance.now()-Ye)/650,1);me.position.y+=mt*.4,me.rotation.z=mt*.28,mt===1&&!bt&&(bt=!0,n("contact"))}else ht&&(yt==="contact"||yt==="butler"||yt==="receiver")&&(me.rotation.z=Math.sin(At*22)*.025);const Ft=Ue.update(Ge.lighting,Ce,ht);st(Sn.color,be,Ft),st(Wt.color,Be,Ft),Sn.intensity=Ho(Ft,2.8,1.8,.7),Wt.intensity=Ho(Ft,1.6,1,.3),st(Ne,nt,Ft),E.forEach(mt=>mt.color.copy(Ne)),c.setClearColor(st(lt,ze,Ft)),P.update(Ft),c.render(u,d)}),{activate:Oe,focus:Ce=>{en=Ce,Ce&&(dt=null,t(Ce))},look:Ce=>{B=ps.clamp(B+Ce,-.46,.46)},reset:()=>{B=0,A=.055},dispose:()=>{de=!0,clearInterval(xe),c.setAnimationLoop(null),ci.disconnect(),c.domElement.removeEventListener("pointerdown",Ae),c.domElement.removeEventListener("pointermove",rt),c.domElement.removeEventListener("pointerup",it),c.domElement.removeEventListener("pointerleave",Lt),c.domElement.removeEventListener("pointercancel",Xt),p.forEach(Ce=>Ce.dispose()),g.forEach(Ce=>Ce.dispose()),S.forEach(Ce=>Ce.dispose()),c.dispose(),c.domElement.remove()}}}export{dS as createPaperRoom};
