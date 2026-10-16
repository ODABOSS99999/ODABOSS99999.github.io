import{c as og,e as lg,r as cg,j as fe}from"./index-DlknGIn9.js";import{l as $g}from"./instagramMedia-Dl-f4QLB.js";const Sd="186",em=0,tp=1,tm=2,hf=1,nm=2,Xc=3,Wo=0,nr=1,Dr=2,ps=0,Zc=1,np=2,ip=3,rp=4,im=5,jl=100,rm=101,am=102,sm=103,om=104,lm=200,cm=201,um=202,fm=203,ug=204,fg=205,hm=206,dm=207,pm=208,gm=209,mm=210,vm=211,_m=212,xm=213,Mm=214,Nh=0,Uh=1,Fh=2,jc=3,Oh=4,Bh=5,zh=6,kh=7,bd=0,ym=1,Sm=2,La=0,hg=1,dg=2,pg=3,gg=4,mg=5,vg=6,_g=7,xg=300,Xo=301,ic=302,$f=303,eh=304,Af=306,Hh=1e3,ds=1001,Gh=1002,vi=1003,bm=1004,Vu=1005,Pi=1006,th=1007,Ho=1008,hr=1009,Mg=1010,yg=1011,$c=1012,Ed=1013,Ia=1014,Ca=1015,Da=1016,Td=1017,wd=1018,eu=1020,Sg=35902,bg=35899,Eg=1021,Tg=1022,ia=1023,vs=1026,Go=1027,wg=1028,Ad=1029,Yo=1030,Rd=1031,Cd=1033,df=33776,pf=33777,gf=33778,mf=33779,Vh=35840,Wh=35841,Xh=35842,Yh=35843,Zh=36196,Jh=37492,Kh=37496,Qh=37488,qh=37489,_f=37490,jh=37491,$h=37808,ed=37809,td=37810,nd=37811,id=37812,rd=37813,ad=37814,sd=37815,od=37816,ld=37817,cd=37818,ud=37819,fd=37820,hd=37821,dd=36492,pd=36494,gd=36495,md=36283,vd=36284,xf=36285,_d=36286,Em=3200,Mf=0,Tm=1,Vs="",Wi="srgb",yf="srgb-linear",Sf="linear",vn="srgb",nh=7680,wm=519,Am=512,Rm=513,Cm=514,Pd=515,Pm=516,Lm=517,Ld=518,Im=519,Dm=35044,ap="300 es",Pa=2e3,tu=2001;function Nm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function bf(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Um(){const i=bf("canvas");return i.style.display="block",i}const sp={};function op(...i){const e="THREE."+i.shift();console.log(e,...i)}function Ag(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function yt(...i){i=Ag(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function en(...i){i=Ag(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function tc(...i){const e=i.join(" ");e in sp||(sp[e]=!0,yt(...i))}function Fm(i,e,t){return new Promise(function(n,o){function c(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:o();break;case i.TIMEOUT_EXPIRED:setTimeout(c,t);break;default:n()}}setTimeout(c,t)})}const Om={[Nh]:Uh,[Fh]:zh,[Oh]:kh,[jc]:Bh,[Uh]:Nh,[zh]:Fh,[kh]:Oh,[Bh]:jc};class Zo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const o=n[e];if(o!==void 0){const c=o.indexOf(t);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const o=n.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const Ri=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let lp=1234567;const Jc=Math.PI/180,nu=180/Math.PI;function sc(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ri[i&255]+Ri[i>>8&255]+Ri[i>>16&255]+Ri[i>>24&255]+"-"+Ri[e&255]+Ri[e>>8&255]+"-"+Ri[e>>16&15|64]+Ri[e>>24&255]+"-"+Ri[t&63|128]+Ri[t>>8&255]+"-"+Ri[t>>16&255]+Ri[t>>24&255]+Ri[n&255]+Ri[n>>8&255]+Ri[n>>16&255]+Ri[n>>24&255]).toLowerCase()}function kt(i,e,t){return Math.max(e,Math.min(t,i))}function Id(i,e){return(i%e+e)%e}function Bm(i,e,t,n,o){return n+(i-e)*(o-n)/(t-e)}function zm(i,e,t){return i!==e?(t-i)/(e-i):0}function Kc(i,e,t){return(1-t)*i+t*e}function km(i,e,t,n){return Kc(i,e,1-Math.exp(-t*n))}function Hm(i,e=1){return e-Math.abs(Id(i,e*2)-e)}function Gm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Vm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Wm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Xm(i,e){return i+Math.random()*(e-i)}function Ym(i){return i*(.5-Math.random())}function Zm(i){i!==void 0&&(lp=i);let e=lp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Jm(i){return i*Jc}function Km(i){return i*nu}function Qm(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function qm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function jm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function $m(i,e,t,n,o){const c=Math.cos,u=Math.sin,d=c(t/2),p=u(t/2),g=c((e+n)/2),S=u((e+n)/2),E=c((e-n)/2),_=u((e-n)/2),x=c((n-e)/2),R=u((n-e)/2);switch(o){case"XYX":i.set(d*S,p*E,p*_,d*g);break;case"YZY":i.set(p*_,d*S,p*E,d*g);break;case"ZXZ":i.set(p*E,p*_,d*S,d*g);break;case"XZX":i.set(d*S,p*R,p*x,d*g);break;case"YXY":i.set(p*x,d*S,p*R,d*g);break;case"ZYZ":i.set(p*R,p*x,d*S,d*g);break;default:yt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function $l(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Gi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const hs={DEG2RAD:Jc,RAD2DEG:nu,generateUUID:sc,clamp:kt,euclideanModulo:Id,mapLinear:Bm,inverseLerp:zm,lerp:Kc,damp:km,pingpong:Hm,smoothstep:Gm,smootherstep:Vm,randInt:Wm,randFloat:Xm,randFloatSpread:Ym,seededRandom:Zm,degToRad:Jm,radToDeg:Km,isPowerOfTwo:Qm,ceilPowerOfTwo:qm,floorPowerOfTwo:jm,setQuaternionFromProperEuler:$m,normalize:Gi,denormalize:$l},Gd=class Gd{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6],this.y=o[1]*t+o[4]*n+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=kt(this.x,e.x,t.x),this.y=kt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=kt(this.x,e,t),this.y=kt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),o=Math.sin(t),c=this.x-e.x,u=this.y-e.y;return this.x=c*n-u*o+e.x,this.y=c*o+u*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Gd.prototype.isVector2=!0;let ft=Gd;class oc{constructor(e=0,t=0,n=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=o}static slerpFlat(e,t,n,o,c,u,d){let p=n[o+0],g=n[o+1],S=n[o+2],E=n[o+3],_=c[u+0],x=c[u+1],R=c[u+2],N=c[u+3];if(E!==N||p!==_||g!==x||S!==R){let w=p*_+g*x+S*R+E*N;w<0&&(_=-_,x=-x,R=-R,N=-N,w=-w);let M=1-d;if(w<.9995){const O=Math.acos(w),k=Math.sin(O);M=Math.sin(M*O)/k,d=Math.sin(d*O)/k,p=p*M+_*d,g=g*M+x*d,S=S*M+R*d,E=E*M+N*d}else{p=p*M+_*d,g=g*M+x*d,S=S*M+R*d,E=E*M+N*d;const O=1/Math.sqrt(p*p+g*g+S*S+E*E);p*=O,g*=O,S*=O,E*=O}}e[t]=p,e[t+1]=g,e[t+2]=S,e[t+3]=E}static multiplyQuaternionsFlat(e,t,n,o,c,u){const d=n[o],p=n[o+1],g=n[o+2],S=n[o+3],E=c[u],_=c[u+1],x=c[u+2],R=c[u+3];return e[t]=d*R+S*E+p*x-g*_,e[t+1]=p*R+S*_+g*E-d*x,e[t+2]=g*R+S*x+d*_-p*E,e[t+3]=S*R-d*E-p*_-g*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,o){return this._x=e,this._y=t,this._z=n,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,o=e._y,c=e._z,u=e._order,d=Math.cos,p=Math.sin,g=d(n/2),S=d(o/2),E=d(c/2),_=p(n/2),x=p(o/2),R=p(c/2);switch(u){case"XYZ":this._x=_*S*E+g*x*R,this._y=g*x*E-_*S*R,this._z=g*S*R+_*x*E,this._w=g*S*E-_*x*R;break;case"YXZ":this._x=_*S*E+g*x*R,this._y=g*x*E-_*S*R,this._z=g*S*R-_*x*E,this._w=g*S*E+_*x*R;break;case"ZXY":this._x=_*S*E-g*x*R,this._y=g*x*E+_*S*R,this._z=g*S*R+_*x*E,this._w=g*S*E-_*x*R;break;case"ZYX":this._x=_*S*E-g*x*R,this._y=g*x*E+_*S*R,this._z=g*S*R-_*x*E,this._w=g*S*E+_*x*R;break;case"YZX":this._x=_*S*E+g*x*R,this._y=g*x*E+_*S*R,this._z=g*S*R-_*x*E,this._w=g*S*E-_*x*R;break;case"XZY":this._x=_*S*E-g*x*R,this._y=g*x*E-_*S*R,this._z=g*S*R+_*x*E,this._w=g*S*E+_*x*R;break;default:yt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,o=Math.sin(n);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],o=t[4],c=t[8],u=t[1],d=t[5],p=t[9],g=t[2],S=t[6],E=t[10],_=n+d+E;if(_>0){const x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(S-p)*x,this._y=(c-g)*x,this._z=(u-o)*x}else if(n>d&&n>E){const x=2*Math.sqrt(1+n-d-E);this._w=(S-p)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(c+g)/x}else if(d>E){const x=2*Math.sqrt(1+d-n-E);this._w=(c-g)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(p+S)/x}else{const x=2*Math.sqrt(1+E-n-d);this._w=(u-o)/x,this._x=(c+g)/x,this._y=(p+S)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const o=Math.min(1,t/n);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,o=e._y,c=e._z,u=e._w,d=t._x,p=t._y,g=t._z,S=t._w;return this._x=n*S+u*d+o*g-c*p,this._y=o*S+u*p+c*d-n*g,this._z=c*S+u*g+n*p-o*d,this._w=u*S-n*d-o*p-c*g,this._onChangeCallback(),this}slerp(e,t){let n=e._x,o=e._y,c=e._z,u=e._w,d=this.dot(e);d<0&&(n=-n,o=-o,c=-c,u=-u,d=-d);let p=1-t;if(d<.9995){const g=Math.acos(d),S=Math.sin(g);p=Math.sin(p*g)/S,t=Math.sin(t*g)/S,this._x=this._x*p+n*t,this._y=this._y*p+o*t,this._z=this._z*p+c*t,this._w=this._w*p+u*t,this._onChangeCallback()}else this._x=this._x*p+n*t,this._y=this._y*p+o*t,this._z=this._z*p+c*t,this._w=this._w*p+u*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),o=Math.sqrt(1-n),c=Math.sqrt(n);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(t),c*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Vd=class Vd{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,o=this.z,c=e.elements;return this.x=c[0]*t+c[3]*n+c[6]*o,this.y=c[1]*t+c[4]*n+c[7]*o,this.z=c[2]*t+c[5]*n+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,o=this.z,c=e.elements,u=1/(c[3]*t+c[7]*n+c[11]*o+c[15]);return this.x=(c[0]*t+c[4]*n+c[8]*o+c[12])*u,this.y=(c[1]*t+c[5]*n+c[9]*o+c[13])*u,this.z=(c[2]*t+c[6]*n+c[10]*o+c[14])*u,this}applyQuaternion(e){const t=this.x,n=this.y,o=this.z,c=e.x,u=e.y,d=e.z,p=e.w,g=2*(u*o-d*n),S=2*(d*t-c*o),E=2*(c*n-u*t);return this.x=t+p*g+u*E-d*S,this.y=n+p*S+d*g-c*E,this.z=o+p*E+c*S-u*g,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,o=this.z,c=e.elements;return this.x=c[0]*t+c[4]*n+c[8]*o,this.y=c[1]*t+c[5]*n+c[9]*o,this.z=c[2]*t+c[6]*n+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=kt(this.x,e.x,t.x),this.y=kt(this.y,e.y,t.y),this.z=kt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=kt(this.x,e,t),this.y=kt(this.y,e,t),this.z=kt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,o=e.y,c=e.z,u=t.x,d=t.y,p=t.z;return this.x=o*p-c*d,this.y=c*u-n*p,this.z=n*d-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ih.copy(this).projectOnVector(e),this.sub(ih)}reflect(e){return this.sub(ih.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,o=this.z-e.z;return t*t+n*n+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const o=Math.sin(t)*e;return this.x=o*Math.sin(n),this.y=Math.cos(t)*e,this.z=o*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Vd.prototype.isVector3=!0;let K=Vd;const ih=new K,cp=new oc,Wd=class Wd{constructor(e,t,n,o,c,u,d,p,g){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,o,c,u,d,p,g)}set(e,t,n,o,c,u,d,p,g){const S=this.elements;return S[0]=e,S[1]=o,S[2]=d,S[3]=t,S[4]=c,S[5]=p,S[6]=n,S[7]=u,S[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,o=t.elements,c=this.elements,u=n[0],d=n[3],p=n[6],g=n[1],S=n[4],E=n[7],_=n[2],x=n[5],R=n[8],N=o[0],w=o[3],M=o[6],O=o[1],k=o[4],C=o[7],F=o[2],D=o[5],H=o[8];return c[0]=u*N+d*O+p*F,c[3]=u*w+d*k+p*D,c[6]=u*M+d*C+p*H,c[1]=g*N+S*O+E*F,c[4]=g*w+S*k+E*D,c[7]=g*M+S*C+E*H,c[2]=_*N+x*O+R*F,c[5]=_*w+x*k+R*D,c[8]=_*M+x*C+R*H,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],o=e[2],c=e[3],u=e[4],d=e[5],p=e[6],g=e[7],S=e[8];return t*u*S-t*d*g-n*c*S+n*d*p+o*c*g-o*u*p}invert(){const e=this.elements,t=e[0],n=e[1],o=e[2],c=e[3],u=e[4],d=e[5],p=e[6],g=e[7],S=e[8],E=S*u-d*g,_=d*p-S*c,x=g*c-u*p,R=t*E+n*_+o*x;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const N=1/R;return e[0]=E*N,e[1]=(o*g-S*n)*N,e[2]=(d*n-o*u)*N,e[3]=_*N,e[4]=(S*t-o*p)*N,e[5]=(o*c-d*t)*N,e[6]=x*N,e[7]=(n*p-g*t)*N,e[8]=(u*t-n*c)*N,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,o,c,u,d){const p=Math.cos(c),g=Math.sin(c);return this.set(n*p,n*g,-n*(p*u+g*d)+u+e,-o*g,o*p,-o*(-g*u+p*d)+d+t,0,0,1),this}scale(e,t){return tc("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(rh.makeScale(e,t)),this}rotate(e){return tc("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(rh.makeRotation(-e)),this}translate(e,t){return tc("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(rh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let o=0;o<9;o++)if(t[o]!==n[o])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Wd.prototype.isMatrix3=!0;let wt=Wd;const rh=new wt,up=new wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fp=new wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function e0(){const i={enabled:!0,workingColorSpace:yf,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===vn&&(o.r=gs(o.r),o.g=gs(o.g),o.b=gs(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===vn&&(o.r=nc(o.r),o.g=nc(o.g),o.b=nc(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Vs?Sf:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return tc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return tc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[yf]:{primaries:e,whitePoint:n,transfer:Sf,toXYZ:up,fromXYZ:fp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Wi},outputColorSpaceConfig:{drawingBufferColorSpace:Wi}},[Wi]:{primaries:e,whitePoint:n,transfer:vn,toXYZ:up,fromXYZ:fp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Wi}}}),i}const Jt=e0();function gs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function nc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Bl;class t0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Bl===void 0&&(Bl=bf("canvas")),Bl.width=e.width,Bl.height=e.height;const o=Bl.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),n=Bl}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=bf("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const o=n.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=gs(c[u]/255)*255;return n.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(gs(t[n]/255)*255):t[n]=gs(t[n]);return{data:t,width:e.width,height:e.height}}else return yt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let n0=0;class Dd{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=sc(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?c.push(ah(o[u].image)):c.push(ah(o[u]))}else c=ah(o);n.url=c}return t||(e.images[this.uuid]=n),n}}function ah(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?t0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(yt("Texture: Unable to serialize Texture."),{})}let i0=0;const sh=new K;class Li extends Zo{constructor(e=Li.DEFAULT_IMAGE,t=Li.DEFAULT_MAPPING,n=ds,o=ds,c=Pi,u=Ho,d=ia,p=hr,g=Li.DEFAULT_ANISOTROPY,S=Vs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=sc(),this.name="",this.source=new Dd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=g,this.format=d,this.internalFormat=null,this.type=p,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(sh).x}get height(){return this.source.getSize(sh).y}get depth(){return this.source.getSize(sh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){yt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){yt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&n&&o.isVector2&&n.isVector2||o&&n&&o.isVector3&&n.isVector3||o&&n&&o.isMatrix3&&n.isMatrix3?o.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hh:e.x=e.x-Math.floor(e.x);break;case ds:e.x=e.x<0?0:1;break;case Gh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hh:e.y=e.y-Math.floor(e.y);break;case ds:e.y=e.y<0?0:1;break;case Gh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Li.DEFAULT_IMAGE=null;Li.DEFAULT_MAPPING=xg;Li.DEFAULT_ANISOTROPY=1;const Xd=class Xd{constructor(e=0,t=0,n=0,o=1){this.x=e,this.y=t,this.z=n,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,o){return this.x=e,this.y=t,this.z=n,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*t+u[4]*n+u[8]*o+u[12]*c,this.y=u[1]*t+u[5]*n+u[9]*o+u[13]*c,this.z=u[2]*t+u[6]*n+u[10]*o+u[14]*c,this.w=u[3]*t+u[7]*n+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,o,c;const p=e.elements,g=p[0],S=p[4],E=p[8],_=p[1],x=p[5],R=p[9],N=p[2],w=p[6],M=p[10];if(Math.abs(S-_)<.01&&Math.abs(E-N)<.01&&Math.abs(R-w)<.01){if(Math.abs(S+_)<.1&&Math.abs(E+N)<.1&&Math.abs(R+w)<.1&&Math.abs(g+x+M-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const k=(g+1)/2,C=(x+1)/2,F=(M+1)/2,D=(S+_)/4,H=(E+N)/4,y=(R+w)/4;return k>C&&k>F?k<.01?(n=0,o=.707106781,c=.707106781):(n=Math.sqrt(k),o=D/n,c=H/n):C>F?C<.01?(n=.707106781,o=0,c=.707106781):(o=Math.sqrt(C),n=D/o,c=y/o):F<.01?(n=.707106781,o=.707106781,c=0):(c=Math.sqrt(F),n=H/c,o=y/c),this.set(n,o,c,t),this}let O=Math.sqrt((w-R)*(w-R)+(E-N)*(E-N)+(_-S)*(_-S));return Math.abs(O)<.001&&(O=1),this.x=(w-R)/O,this.y=(E-N)/O,this.z=(_-S)/O,this.w=Math.acos((g+x+M-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=kt(this.x,e.x,t.x),this.y=kt(this.y,e.y,t.y),this.z=kt(this.z,e.z,t.z),this.w=kt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=kt(this.x,e,t),this.y=kt(this.y,e,t),this.z=kt(this.z,e,t),this.w=kt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Xd.prototype.isVector4=!0;let Hn=Xd;class r0 extends Zo{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pi,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Hn(0,0,e,t),this.scissorTest=!1,this.viewport=new Hn(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:n.depth},c=new Li(o),u=n.count;for(let d=0;d<u;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Pi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=n,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Dd(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ra extends r0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Rg extends Li{constructor(e=null,t=1,n=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:o},this.magFilter=vi,this.minFilter=vi,this.wrapR=ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class a0 extends Li{constructor(e=null,t=1,n=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:o},this.magFilter=vi,this.minFilter=vi,this.wrapR=ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const wf=class wf{constructor(e,t,n,o,c,u,d,p,g,S,E,_,x,R,N,w){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,o,c,u,d,p,g,S,E,_,x,R,N,w)}set(e,t,n,o,c,u,d,p,g,S,E,_,x,R,N,w){const M=this.elements;return M[0]=e,M[4]=t,M[8]=n,M[12]=o,M[1]=c,M[5]=u,M[9]=d,M[13]=p,M[2]=g,M[6]=S,M[10]=E,M[14]=_,M[3]=x,M[7]=R,M[11]=N,M[15]=w,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wf().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,o=1/zl.setFromMatrixColumn(e,0).length(),c=1/zl.setFromMatrixColumn(e,1).length(),u=1/zl.setFromMatrixColumn(e,2).length();return t[0]=n[0]*o,t[1]=n[1]*o,t[2]=n[2]*o,t[3]=0,t[4]=n[4]*c,t[5]=n[5]*c,t[6]=n[6]*c,t[7]=0,t[8]=n[8]*u,t[9]=n[9]*u,t[10]=n[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,o=e.y,c=e.z,u=Math.cos(n),d=Math.sin(n),p=Math.cos(o),g=Math.sin(o),S=Math.cos(c),E=Math.sin(c);if(e.order==="XYZ"){const _=u*S,x=u*E,R=d*S,N=d*E;t[0]=p*S,t[4]=-p*E,t[8]=g,t[1]=x+R*g,t[5]=_-N*g,t[9]=-d*p,t[2]=N-_*g,t[6]=R+x*g,t[10]=u*p}else if(e.order==="YXZ"){const _=p*S,x=p*E,R=g*S,N=g*E;t[0]=_+N*d,t[4]=R*d-x,t[8]=u*g,t[1]=u*E,t[5]=u*S,t[9]=-d,t[2]=x*d-R,t[6]=N+_*d,t[10]=u*p}else if(e.order==="ZXY"){const _=p*S,x=p*E,R=g*S,N=g*E;t[0]=_-N*d,t[4]=-u*E,t[8]=R+x*d,t[1]=x+R*d,t[5]=u*S,t[9]=N-_*d,t[2]=-u*g,t[6]=d,t[10]=u*p}else if(e.order==="ZYX"){const _=u*S,x=u*E,R=d*S,N=d*E;t[0]=p*S,t[4]=R*g-x,t[8]=_*g+N,t[1]=p*E,t[5]=N*g+_,t[9]=x*g-R,t[2]=-g,t[6]=d*p,t[10]=u*p}else if(e.order==="YZX"){const _=u*p,x=u*g,R=d*p,N=d*g;t[0]=p*S,t[4]=N-_*E,t[8]=R*E+x,t[1]=E,t[5]=u*S,t[9]=-d*S,t[2]=-g*S,t[6]=x*E+R,t[10]=_-N*E}else if(e.order==="XZY"){const _=u*p,x=u*g,R=d*p,N=d*g;t[0]=p*S,t[4]=-E,t[8]=g*S,t[1]=_*E+N,t[5]=u*S,t[9]=x*E-R,t[2]=R*E-x,t[6]=d*S,t[10]=N*E+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(s0,e,o0)}lookAt(e,t,n){const o=this.elements;return cr.subVectors(e,t),cr.lengthSq()===0&&(cr.z=1),cr.normalize(),Os.crossVectors(n,cr),Os.lengthSq()===0&&(Math.abs(n.z)===1?cr.x+=1e-4:cr.z+=1e-4,cr.normalize(),Os.crossVectors(n,cr)),Os.normalize(),Wu.crossVectors(cr,Os),o[0]=Os.x,o[4]=Wu.x,o[8]=cr.x,o[1]=Os.y,o[5]=Wu.y,o[9]=cr.y,o[2]=Os.z,o[6]=Wu.z,o[10]=cr.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,o=t.elements,c=this.elements,u=n[0],d=n[4],p=n[8],g=n[12],S=n[1],E=n[5],_=n[9],x=n[13],R=n[2],N=n[6],w=n[10],M=n[14],O=n[3],k=n[7],C=n[11],F=n[15],D=o[0],H=o[4],y=o[8],P=o[12],z=o[1],G=o[5],q=o[9],ae=o[13],W=o[2],ue=o[6],ye=o[10],_e=o[14],Te=o[3],ne=o[7],V=o[11],xe=o[15];return c[0]=u*D+d*z+p*W+g*Te,c[4]=u*H+d*G+p*ue+g*ne,c[8]=u*y+d*q+p*ye+g*V,c[12]=u*P+d*ae+p*_e+g*xe,c[1]=S*D+E*z+_*W+x*Te,c[5]=S*H+E*G+_*ue+x*ne,c[9]=S*y+E*q+_*ye+x*V,c[13]=S*P+E*ae+_*_e+x*xe,c[2]=R*D+N*z+w*W+M*Te,c[6]=R*H+N*G+w*ue+M*ne,c[10]=R*y+N*q+w*ye+M*V,c[14]=R*P+N*ae+w*_e+M*xe,c[3]=O*D+k*z+C*W+F*Te,c[7]=O*H+k*G+C*ue+F*ne,c[11]=O*y+k*q+C*ye+F*V,c[15]=O*P+k*ae+C*_e+F*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],o=e[8],c=e[12],u=e[1],d=e[5],p=e[9],g=e[13],S=e[2],E=e[6],_=e[10],x=e[14],R=e[3],N=e[7],w=e[11],M=e[15],O=p*x-g*_,k=d*x-g*E,C=d*_-p*E,F=u*x-g*S,D=u*_-p*S,H=u*E-d*S;return t*(N*O-w*k+M*C)-n*(R*O-w*F+M*D)+o*(R*k-N*F+M*H)-c*(R*C-N*D+w*H)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],o=e[8],c=e[1],u=e[5],d=e[9],p=e[2],g=e[6],S=e[10];return t*(u*S-d*g)-n*(c*S-d*p)+o*(c*g-u*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],o=e[2],c=e[3],u=e[4],d=e[5],p=e[6],g=e[7],S=e[8],E=e[9],_=e[10],x=e[11],R=e[12],N=e[13],w=e[14],M=e[15],O=t*d-n*u,k=t*p-o*u,C=t*g-c*u,F=n*p-o*d,D=n*g-c*d,H=o*g-c*p,y=S*N-E*R,P=S*w-_*R,z=S*M-x*R,G=E*w-_*N,q=E*M-x*N,ae=_*M-x*w,W=O*ae-k*q+C*G+F*z-D*P+H*y;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ue=1/W;return e[0]=(d*ae-p*q+g*G)*ue,e[1]=(o*q-n*ae-c*G)*ue,e[2]=(N*H-w*D+M*F)*ue,e[3]=(_*D-E*H-x*F)*ue,e[4]=(p*z-u*ae-g*P)*ue,e[5]=(t*ae-o*z+c*P)*ue,e[6]=(w*C-R*H-M*k)*ue,e[7]=(S*H-_*C+x*k)*ue,e[8]=(u*q-d*z+g*y)*ue,e[9]=(n*z-t*q-c*y)*ue,e[10]=(R*D-N*C+M*O)*ue,e[11]=(E*C-S*D-x*O)*ue,e[12]=(d*P-u*G-p*y)*ue,e[13]=(t*G-n*P+o*y)*ue,e[14]=(N*k-R*F-w*O)*ue,e[15]=(S*F-E*k+_*O)*ue,this}scale(e){const t=this.elements,n=e.x,o=e.y,c=e.z;return t[0]*=n,t[4]*=o,t[8]*=c,t[1]*=n,t[5]*=o,t[9]*=c,t[2]*=n,t[6]*=o,t[10]*=c,t[3]*=n,t[7]*=o,t[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,o))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),o=Math.sin(t),c=1-n,u=e.x,d=e.y,p=e.z,g=c*u,S=c*d;return this.set(g*u+n,g*d-o*p,g*p+o*d,0,g*d+o*p,S*d+n,S*p-o*u,0,g*p-o*d,S*p+o*u,c*p*p+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,o,c,u){return this.set(1,n,c,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,n){const o=this.elements,c=t._x,u=t._y,d=t._z,p=t._w,g=c+c,S=u+u,E=d+d,_=c*g,x=c*S,R=c*E,N=u*S,w=u*E,M=d*E,O=p*g,k=p*S,C=p*E,F=n.x,D=n.y,H=n.z;return o[0]=(1-(N+M))*F,o[1]=(x+C)*F,o[2]=(R-k)*F,o[3]=0,o[4]=(x-C)*D,o[5]=(1-(_+M))*D,o[6]=(w+O)*D,o[7]=0,o[8]=(R+k)*H,o[9]=(w-O)*H,o[10]=(1-(_+N))*H,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,n){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinantAffine();if(c===0)return n.set(1,1,1),t.identity(),this;let u=zl.set(o[0],o[1],o[2]).length();const d=zl.set(o[4],o[5],o[6]).length(),p=zl.set(o[8],o[9],o[10]).length();c<0&&(u=-u),$r.copy(this);const g=1/u,S=1/d,E=1/p;return $r.elements[0]*=g,$r.elements[1]*=g,$r.elements[2]*=g,$r.elements[4]*=S,$r.elements[5]*=S,$r.elements[6]*=S,$r.elements[8]*=E,$r.elements[9]*=E,$r.elements[10]*=E,t.setFromRotationMatrix($r),n.x=u,n.y=d,n.z=p,this}makePerspective(e,t,n,o,c,u,d=Pa,p=!1){const g=this.elements,S=2*c/(t-e),E=2*c/(n-o),_=(t+e)/(t-e),x=(n+o)/(n-o);let R,N;if(p)R=c/(u-c),N=u*c/(u-c);else if(d===Pa)R=-(u+c)/(u-c),N=-2*u*c/(u-c);else if(d===tu)R=-u/(u-c),N=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return g[0]=S,g[4]=0,g[8]=_,g[12]=0,g[1]=0,g[5]=E,g[9]=x,g[13]=0,g[2]=0,g[6]=0,g[10]=R,g[14]=N,g[3]=0,g[7]=0,g[11]=-1,g[15]=0,this}makeOrthographic(e,t,n,o,c,u,d=Pa,p=!1){const g=this.elements,S=2/(t-e),E=2/(n-o),_=-(t+e)/(t-e),x=-(n+o)/(n-o);let R,N;if(p)R=1/(u-c),N=u/(u-c);else if(d===Pa)R=-2/(u-c),N=-(u+c)/(u-c);else if(d===tu)R=-1/(u-c),N=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return g[0]=S,g[4]=0,g[8]=0,g[12]=_,g[1]=0,g[5]=E,g[9]=0,g[13]=x,g[2]=0,g[6]=0,g[10]=R,g[14]=N,g[3]=0,g[7]=0,g[11]=0,g[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let o=0;o<16;o++)if(t[o]!==n[o])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};wf.prototype.isMatrix4=!0;let Fn=wf;const zl=new K,$r=new Fn,s0=new K(0,0,0),o0=new K(1,1,1),Os=new K,Wu=new K,cr=new K,hp=new Fn,dp=new oc;class _s{constructor(e=0,t=0,n=0,o=_s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,o=this._order){return this._x=e,this._y=t,this._z=n,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const o=e.elements,c=o[0],u=o[4],d=o[8],p=o[1],g=o[5],S=o[9],E=o[2],_=o[6],x=o[10];switch(t){case"XYZ":this._y=Math.asin(kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-S,x),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(_,g),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(d,x),this._z=Math.atan2(p,g)):(this._y=Math.atan2(-E,c),this._z=0);break;case"ZXY":this._x=Math.asin(kt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-E,x),this._z=Math.atan2(-u,g)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-kt(E,-1,1)),Math.abs(E)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,g));break;case"YZX":this._z=Math.asin(kt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-S,g),this._y=Math.atan2(-E,c)):(this._x=0,this._y=Math.atan2(d,x));break;case"XZY":this._z=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,g),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-S,x),this._y=0);break;default:yt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return hp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dp.setFromEuler(this),this.setFromQuaternion(dp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_s.DEFAULT_ORDER="XYZ";class Nd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let l0=0;const pp=new K,kl=new oc,os=new Fn,Xu=new K,Bc=new K,c0=new K,u0=new oc,gp=new K(1,0,0),mp=new K(0,1,0),vp=new K(0,0,1),_p={type:"added"},f0={type:"removed"},Hl={type:"childadded",child:null},oh={type:"childremoved",child:null};class _i extends Zo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=sc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_i.DEFAULT_UP.clone();const e=new K,t=new _s,n=new oc,o=new K(1,1,1);function c(){n.setFromEuler(t,!1)}function u(){t.setFromQuaternion(n,void 0,!1)}t._onChange(c),n._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Fn},normalMatrix:{value:new wt}}),this.matrix=new Fn,this.matrixWorld=new Fn,this.matrixAutoUpdate=_i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return kl.setFromAxisAngle(e,t),this.quaternion.multiply(kl),this}rotateOnWorldAxis(e,t){return kl.setFromAxisAngle(e,t),this.quaternion.premultiply(kl),this}rotateX(e){return this.rotateOnAxis(gp,e)}rotateY(e){return this.rotateOnAxis(mp,e)}rotateZ(e){return this.rotateOnAxis(vp,e)}translateOnAxis(e,t){return pp.copy(e).applyQuaternion(this.quaternion),this.position.add(pp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gp,e)}translateY(e){return this.translateOnAxis(mp,e)}translateZ(e){return this.translateOnAxis(vp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(os.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xu.copy(e):Xu.set(e,t,n);const o=this.parent;this.updateWorldMatrix(!0,!1),Bc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?os.lookAt(Bc,Xu,this.up):os.lookAt(Xu,Bc,this.up),this.quaternion.setFromRotationMatrix(os),o&&(os.extractRotation(o.matrixWorld),kl.setFromRotationMatrix(os),this.quaternion.premultiply(kl.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(en("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_p),Hl.child=e,this.dispatchEvent(Hl),Hl.child=null):en("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(f0),oh.child=e,this.dispatchEvent(oh),oh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),os.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),os.multiply(e.parent.matrixWorld)),e.applyMatrix4(os),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_p),Hl.child=e,this.dispatchEvent(Hl),Hl.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,o=this.children.length;n<o;n++){const u=this.children[n].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bc,e,c0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bc,u0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,o=t.length;n<o;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,o=t.length;n<o;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,o=e.z,c=this.matrix.elements;c[12]+=t-c[0]*t-c[4]*n-c[8]*o,c[13]+=n-c[1]*t-c[5]*n-c[9]*o,c[14]+=o-c[2]*t-c[6]*n-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,o=t.length;n<o;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const c=this.children;for(let u=0,d=c.length;u<d;u++)c[u].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let g=0,S=p.length;g<S;g++){const E=p[g];c(e.shapes,E)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,g=this.material.length;p<g;p++)d.push(c(e.materials,this.material[p]));o.material=d}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];o.animations.push(c(e.animations,p))}}if(t){const d=u(e.geometries),p=u(e.materials),g=u(e.textures),S=u(e.images),E=u(e.shapes),_=u(e.skeletons),x=u(e.animations),R=u(e.nodes);d.length>0&&(n.geometries=d),p.length>0&&(n.materials=p),g.length>0&&(n.textures=g),S.length>0&&(n.images=S),E.length>0&&(n.shapes=E),_.length>0&&(n.skeletons=_),x.length>0&&(n.animations=x),R.length>0&&(n.nodes=R)}return n.object=o,n;function u(d){const p=[];for(const g in d){const S=d[g];delete S.metadata,p.push(S)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const o=e.children[n];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}_i.DEFAULT_UP=new K(0,1,0);_i.DEFAULT_MATRIX_AUTO_UPDATE=!0;_i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class dr extends _i{constructor(){super(),this.isGroup=!0,this.type="Group"}}const h0={type:"move"};class lh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let o=null,c=null,u=null;const d=this._targetRay,p=this._grip,g=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(g&&e.hand){u=!0;for(const N of e.hand.values()){const w=t.getJointPose(N,n),M=this._getHandJoint(g,N);w!==null&&(M.matrix.fromArray(w.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=w.radius),M.visible=w!==null}const S=g.joints["index-finger-tip"],E=g.joints["thumb-tip"],_=S.position.distanceTo(E.position),x=.02,R=.005;g.inputState.pinching&&_>x+R?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!g.inputState.pinching&&_<=x-R&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=t.getPose(e.gripSpace,n),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(o=t.getPose(e.targetRaySpace,n),o===null&&c!==null&&(o=c),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(h0)))}return d!==null&&(d.visible=o!==null),p!==null&&(p.visible=c!==null),g!==null&&(g.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new dr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Cg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bs={h:0,s:0,l:0},Yu={h:0,s:0,l:0};function ch(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class At{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Jt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,o=Jt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Jt.colorSpaceToWorking(this,o),this}setHSL(e,t,n,o=Jt.workingColorSpace){if(e=Id(e,1),t=kt(t,0,1),n=kt(n,0,1),t===0)this.r=this.g=this.b=n;else{const c=n<=.5?n*(1+t):n+t-n*t,u=2*n-c;this.r=ch(u,c,e+1/3),this.g=ch(u,c,e),this.b=ch(u,c,e-1/3)}return Jt.colorSpaceToWorking(this,o),this}setStyle(e,t=Wi){function n(c){c!==void 0&&parseFloat(c)<1&&yt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return n(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,t);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return n(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,t);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return n(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,t);break;default:yt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(c,16),t);yt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wi){const n=Cg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):yt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gs(e.r),this.g=gs(e.g),this.b=gs(e.b),this}copyLinearToSRGB(e){return this.r=nc(e.r),this.g=nc(e.g),this.b=nc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wi){return Jt.workingToColorSpace(Ci.copy(this),e),Math.round(kt(Ci.r*255,0,255))*65536+Math.round(kt(Ci.g*255,0,255))*256+Math.round(kt(Ci.b*255,0,255))}getHexString(e=Wi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Jt.workingColorSpace){Jt.workingToColorSpace(Ci.copy(this),t);const n=Ci.r,o=Ci.g,c=Ci.b,u=Math.max(n,o,c),d=Math.min(n,o,c);let p,g;const S=(d+u)/2;if(d===u)p=0,g=0;else{const E=u-d;switch(g=S<=.5?E/(u+d):E/(2-u-d),u){case n:p=(o-c)/E+(o<c?6:0);break;case o:p=(c-n)/E+2;break;case c:p=(n-o)/E+4;break}p/=6}return e.h=p,e.s=g,e.l=S,e}getRGB(e,t=Jt.workingColorSpace){return Jt.workingToColorSpace(Ci.copy(this),t),e.r=Ci.r,e.g=Ci.g,e.b=Ci.b,e}getStyle(e=Wi){Jt.workingToColorSpace(Ci.copy(this),e);const t=Ci.r,n=Ci.g,o=Ci.b;return e!==Wi?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(o*255)})`}offsetHSL(e,t,n){return this.getHSL(Bs),this.setHSL(Bs.h+e,Bs.s+t,Bs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Bs),e.getHSL(Yu);const n=Kc(Bs.h,Yu.h,t),o=Kc(Bs.s,Yu.s,t),c=Kc(Bs.l,Yu.l,t);return this.setHSL(n,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,o=this.b,c=e.elements;return this.r=c[0]*t+c[3]*n+c[6]*o,this.g=c[1]*t+c[4]*n+c[7]*o,this.b=c[2]*t+c[5]*n+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ci=new At;At.NAMES=Cg;class d0 extends _i{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _s,this.environmentIntensity=1,this.environmentRotation=new _s,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ea=new K,ls=new K,uh=new K,cs=new K,Gl=new K,Vl=new K,xp=new K,fh=new K,hh=new K,dh=new K,ph=new Hn,gh=new Hn,mh=new Hn;class na{constructor(e=new K,t=new K,n=new K){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,o){o.subVectors(n,t),ea.subVectors(e,t),o.cross(ea);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,t,n,o,c){ea.subVectors(o,t),ls.subVectors(n,t),uh.subVectors(e,t);const u=ea.dot(ea),d=ea.dot(ls),p=ea.dot(uh),g=ls.dot(ls),S=ls.dot(uh),E=u*g-d*d;if(E===0)return c.set(0,0,0),null;const _=1/E,x=(g*p-d*S)*_,R=(u*S-d*p)*_;return c.set(1-x-R,R,x)}static containsPoint(e,t,n,o){return this.getBarycoord(e,t,n,o,cs)===null?!1:cs.x>=0&&cs.y>=0&&cs.x+cs.y<=1}static getInterpolation(e,t,n,o,c,u,d,p){return this.getBarycoord(e,t,n,o,cs)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,cs.x),p.addScaledVector(u,cs.y),p.addScaledVector(d,cs.z),p)}static getInterpolatedAttribute(e,t,n,o,c,u){return ph.setScalar(0),gh.setScalar(0),mh.setScalar(0),ph.fromBufferAttribute(e,t),gh.fromBufferAttribute(e,n),mh.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(ph,c.x),u.addScaledVector(gh,c.y),u.addScaledVector(mh,c.z),u}static isFrontFacing(e,t,n,o){return ea.subVectors(n,t),ls.subVectors(e,t),ea.cross(ls).dot(o)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,o){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,n,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ea.subVectors(this.c,this.b),ls.subVectors(this.a,this.b),ea.cross(ls).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return na.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return na.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,o,c){return na.getInterpolation(e,this.a,this.b,this.c,t,n,o,c)}containsPoint(e){return na.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return na.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,o=this.b,c=this.c;let u,d;Gl.subVectors(o,n),Vl.subVectors(c,n),fh.subVectors(e,n);const p=Gl.dot(fh),g=Vl.dot(fh);if(p<=0&&g<=0)return t.copy(n);hh.subVectors(e,o);const S=Gl.dot(hh),E=Vl.dot(hh);if(S>=0&&E<=S)return t.copy(o);const _=p*E-S*g;if(_<=0&&p>=0&&S<=0)return u=p/(p-S),t.copy(n).addScaledVector(Gl,u);dh.subVectors(e,c);const x=Gl.dot(dh),R=Vl.dot(dh);if(R>=0&&x<=R)return t.copy(c);const N=x*g-p*R;if(N<=0&&g>=0&&R<=0)return d=g/(g-R),t.copy(n).addScaledVector(Vl,d);const w=S*R-x*E;if(w<=0&&E-S>=0&&x-R>=0)return xp.subVectors(c,o),d=(E-S)/(E-S+(x-R)),t.copy(o).addScaledVector(xp,d);const M=1/(w+N+_);return u=N*M,d=_*M,t.copy(n).addScaledVector(Gl,u).addScaledVector(Vl,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class au{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ta.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ta.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ta.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const c=n.getAttribute("position");if(t===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=c.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,ta):ta.fromBufferAttribute(c,u),ta.applyMatrix4(e.matrixWorld),this.expandByPoint(ta);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zu.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zu.copy(n.boundingBox)),Zu.applyMatrix4(e.matrixWorld),this.union(Zu)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ta),ta.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zc),Ju.subVectors(this.max,zc),Wl.subVectors(e.a,zc),Xl.subVectors(e.b,zc),Yl.subVectors(e.c,zc),zs.subVectors(Xl,Wl),ks.subVectors(Yl,Xl),Do.subVectors(Wl,Yl);let t=[0,-zs.z,zs.y,0,-ks.z,ks.y,0,-Do.z,Do.y,zs.z,0,-zs.x,ks.z,0,-ks.x,Do.z,0,-Do.x,-zs.y,zs.x,0,-ks.y,ks.x,0,-Do.y,Do.x,0];return!vh(t,Wl,Xl,Yl,Ju)||(t=[1,0,0,0,1,0,0,0,1],!vh(t,Wl,Xl,Yl,Ju))?!1:(Ku.crossVectors(zs,ks),t=[Ku.x,Ku.y,Ku.z],vh(t,Wl,Xl,Yl,Ju))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ta).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ta).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(us[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),us[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),us[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),us[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),us[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),us[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),us[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),us[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(us),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const us=[new K,new K,new K,new K,new K,new K,new K,new K],ta=new K,Zu=new au,Wl=new K,Xl=new K,Yl=new K,zs=new K,ks=new K,Do=new K,zc=new K,Ju=new K,Ku=new K,No=new K;function vh(i,e,t,n,o){for(let c=0,u=i.length-3;c<=u;c+=3){No.fromArray(i,c);const d=o.x*Math.abs(No.x)+o.y*Math.abs(No.y)+o.z*Math.abs(No.z),p=e.dot(No),g=t.dot(No),S=n.dot(No);if(Math.max(-Math.max(p,g,S),Math.min(p,g,S))>d)return!1}return!0}const ei=new K,Qu=new ft;let p0=0;class ms extends Zo{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:p0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Dm,this.updateRanges=[],this.gpuType=Ca,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=t.array[n+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qu.fromBufferAttribute(this,t),Qu.applyMatrix3(e),this.setXY(t,Qu.x,Qu.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ei.fromBufferAttribute(this,t),ei.applyMatrix3(e),this.setXYZ(t,ei.x,ei.y,ei.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ei.fromBufferAttribute(this,t),ei.applyMatrix4(e),this.setXYZ(t,ei.x,ei.y,ei.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ei.fromBufferAttribute(this,t),ei.applyNormalMatrix(e),this.setXYZ(t,ei.x,ei.y,ei.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ei.fromBufferAttribute(this,t),ei.transformDirection(e),this.setXYZ(t,ei.x,ei.y,ei.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=$l(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Gi(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$l(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$l(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$l(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$l(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Gi(t,this.array),n=Gi(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,o){return e*=this.itemSize,this.normalized&&(t=Gi(t,this.array),n=Gi(n,this.array),o=Gi(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=o,this}setXYZW(e,t,n,o,c){return e*=this.itemSize,this.normalized&&(t=Gi(t,this.array),n=Gi(n,this.array),o=Gi(o,this.array),c=Gi(c,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Pg extends ms{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Lg extends ms{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class On extends ms{constructor(e,t,n){super(new Float32Array(e),t,n)}}const g0=new au,kc=new K,_h=new K;class Ud{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):g0.setFromPoints(e).getCenter(n);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,n.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;kc.subVectors(e,this.center);const t=kc.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),o=(n-this.radius)*.5;this.center.addScaledVector(kc,o/n),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_h.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(kc.copy(e.center).add(_h)),this.expandByPoint(kc.copy(e.center).sub(_h))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let m0=0;const Ir=new Fn,xh=new _i,Zl=new K,ur=new au,Hc=new au,ui=new K;class ir extends Zo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=sc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nm(e)?Lg:Pg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const c=new wt().getNormalMatrix(e);n.applyNormalMatrix(c),n.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ir.makeRotationFromQuaternion(e),this.applyMatrix4(Ir),this}rotateX(e){return Ir.makeRotationX(e),this.applyMatrix4(Ir),this}rotateY(e){return Ir.makeRotationY(e),this.applyMatrix4(Ir),this}rotateZ(e){return Ir.makeRotationZ(e),this.applyMatrix4(Ir),this}translate(e,t,n){return Ir.makeTranslation(e,t,n),this.applyMatrix4(Ir),this}scale(e,t,n){return Ir.makeScale(e,t,n),this.applyMatrix4(Ir),this}lookAt(e){return xh.lookAt(e),xh.updateMatrix(),this.applyMatrix4(xh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zl).negate(),this.translate(Zl.x,Zl.y,Zl.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];n.push(u.x,u.y,u.z||0)}this.setAttribute("position",new On(n,3))}else{const n=Math.min(e.length,t.count);for(let o=0;o<n;o++){const c=e[o];t.setXYZ(o,c.x,c.y,c.z||0)}e.length>t.count&&yt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new au);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){en("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,o=t.length;n<o;n++){const c=t[n];ur.setFromBufferAttribute(c),this.morphTargetsRelative?(ui.addVectors(this.boundingBox.min,ur.min),this.boundingBox.expandByPoint(ui),ui.addVectors(this.boundingBox.max,ur.max),this.boundingBox.expandByPoint(ui)):(this.boundingBox.expandByPoint(ur.min),this.boundingBox.expandByPoint(ur.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&en('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ud);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){en("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const n=this.boundingSphere.center;if(ur.setFromBufferAttribute(e),t)for(let c=0,u=t.length;c<u;c++){const d=t[c];Hc.setFromBufferAttribute(d),this.morphTargetsRelative?(ui.addVectors(ur.min,Hc.min),ur.expandByPoint(ui),ui.addVectors(ur.max,Hc.max),ur.expandByPoint(ui)):(ur.expandByPoint(Hc.min),ur.expandByPoint(Hc.max))}ur.getCenter(n);let o=0;for(let c=0,u=e.count;c<u;c++)ui.fromBufferAttribute(e,c),o=Math.max(o,n.distanceToSquared(ui));if(t)for(let c=0,u=t.length;c<u;c++){const d=t[c],p=this.morphTargetsRelative;for(let g=0,S=d.count;g<S;g++)ui.fromBufferAttribute(d,g),p&&(Zl.fromBufferAttribute(e,g),ui.add(Zl)),o=Math.max(o,n.distanceToSquared(ui))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&en('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){en("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,o=t.normal,c=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==n.count)&&(u=new ms(new Float32Array(4*n.count),4),this.setAttribute("tangent",u));const d=[],p=[];for(let y=0;y<n.count;y++)d[y]=new K,p[y]=new K;const g=new K,S=new K,E=new K,_=new ft,x=new ft,R=new ft,N=new K,w=new K;function M(y,P,z){g.fromBufferAttribute(n,y),S.fromBufferAttribute(n,P),E.fromBufferAttribute(n,z),_.fromBufferAttribute(c,y),x.fromBufferAttribute(c,P),R.fromBufferAttribute(c,z),S.sub(g),E.sub(g),x.sub(_),R.sub(_);const G=1/(x.x*R.y-R.x*x.y);isFinite(G)&&(N.copy(S).multiplyScalar(R.y).addScaledVector(E,-x.y).multiplyScalar(G),w.copy(E).multiplyScalar(x.x).addScaledVector(S,-R.x).multiplyScalar(G),d[y].add(N),d[P].add(N),d[z].add(N),p[y].add(w),p[P].add(w),p[z].add(w))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let y=0,P=O.length;y<P;++y){const z=O[y],G=z.start,q=z.count;for(let ae=G,W=G+q;ae<W;ae+=3)M(e.getX(ae+0),e.getX(ae+1),e.getX(ae+2))}const k=new K,C=new K,F=new K,D=new K;function H(y){F.fromBufferAttribute(o,y),D.copy(F);const P=d[y];k.copy(P),k.sub(F.multiplyScalar(F.dot(P))).normalize(),C.crossVectors(D,P);const G=C.dot(p[y])<0?-1:1;u.setXYZW(y,k.x,k.y,k.z,G)}for(let y=0,P=O.length;y<P;++y){const z=O[y],G=z.start,q=z.count;for(let ae=G,W=G+q;ae<W;ae+=3)H(e.getX(ae+0)),H(e.getX(ae+1)),H(e.getX(ae+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new ms(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let _=0,x=n.count;_<x;_++)n.setXYZ(_,0,0,0);const o=new K,c=new K,u=new K,d=new K,p=new K,g=new K,S=new K,E=new K;if(e)for(let _=0,x=e.count;_<x;_+=3){const R=e.getX(_+0),N=e.getX(_+1),w=e.getX(_+2);o.fromBufferAttribute(t,R),c.fromBufferAttribute(t,N),u.fromBufferAttribute(t,w),S.subVectors(u,c),E.subVectors(o,c),S.cross(E),d.fromBufferAttribute(n,R),p.fromBufferAttribute(n,N),g.fromBufferAttribute(n,w),d.add(S),p.add(S),g.add(S),n.setXYZ(R,d.x,d.y,d.z),n.setXYZ(N,p.x,p.y,p.z),n.setXYZ(w,g.x,g.y,g.z)}else for(let _=0,x=t.count;_<x;_+=3)o.fromBufferAttribute(t,_+0),c.fromBufferAttribute(t,_+1),u.fromBufferAttribute(t,_+2),S.subVectors(u,c),E.subVectors(o,c),S.cross(E),n.setXYZ(_+0,S.x,S.y,S.z),n.setXYZ(_+1,S.x,S.y,S.z),n.setXYZ(_+2,S.x,S.y,S.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ui.fromBufferAttribute(e,t),ui.normalize(),e.setXYZ(t,ui.x,ui.y,ui.z)}toNonIndexed(){function e(d,p){const g=d.array,S=d.itemSize,E=d.normalized,_=new g.constructor(p.length*S);let x=0,R=0;for(let N=0,w=p.length;N<w;N++){d.isInterleavedBufferAttribute?x=p[N]*d.data.stride+d.offset:x=p[N]*S;for(let M=0;M<S;M++)_[R++]=g[x++]}return new ms(_,S,E)}if(this.index===null)return yt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ir,n=this.index.array,o=this.attributes;for(const d in o){const p=o[d],g=e(p,n);t.setAttribute(d,g)}const c=this.morphAttributes;for(const d in c){const p=[],g=c[d];for(let S=0,E=g.length;S<E;S++){const _=g[S],x=e(_,n);p.push(x)}t.morphAttributes[d]=p}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,p=u.length;d<p;d++){const g=u[d];t.addGroup(g.start,g.count,g.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const g in p)p[g]!==void 0&&(e[g]=p[g]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const p in n){const g=n[p];e.data.attributes[p]=g.toJSON(e.data)}const o={};let c=!1;for(const p in this.morphAttributes){const g=this.morphAttributes[p],S=[];for(let E=0,_=g.length;E<_;E++){const x=g[E];S.push(x.toJSON(e.data))}S.length>0&&(o[p]=S,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const o=e.attributes;for(const g in o){const S=o[g];this.setAttribute(g,S.clone(t))}const c=e.morphAttributes;for(const g in c){const S=[],E=c[g];for(let _=0,x=E.length;_<x;_++)S.push(E[_].clone(t));this.morphAttributes[g]=S}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let g=0,S=u.length;g<S;g++){const E=u[g];this.addGroup(E.start,E.count,E.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mh=new K,v0=new K,_0=new wt;class Gs{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,o){return this.normal.set(e,t,n),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const o=Mh.subVectors(n,t).cross(v0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const o=e.delta(Mh),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/c;return n===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||_0.getNormalMatrix(e),o=this.coplanarPoint(Mh).applyMatrix4(e),c=this.normal.applyMatrix3(n).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let x0=0;class lc extends Zo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=sc(),this.name="",this.type="Material",this.blending=Zc,this.side=Wo,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ug,this.blendDst=fg,this.blendEquation=jl,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=jc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nh,this.stencilZFail=nh,this.stencilZPass=nh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){yt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){yt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(n):o&&o.isVector2&&n&&n.isVector2||o&&o.isEuler&&n&&n.isEuler||o&&o.isVector3&&n&&n.isVector3?o.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(c=>c.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function o(c){const u=[];for(const d in c){const p=c[d];delete p.metadata,u.push(p)}return u}if(t){const c=o(e.textures),u=o(e.images);c.length>0&&(n.textures=c),u.length>0&&(n.images=u)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new At().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Gs().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ft().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ft().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const o=t.length;n=new Array(o);for(let c=0;c!==o;++c)n[c]=t[c].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const fs=new K,yh=new K,qu=new K,ju=new K;class Ig{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fs.copy(this.origin).addScaledVector(this.direction,t),fs.distanceToSquared(e))}distanceSqToSegment(e,t,n,o){yh.copy(e).add(t).multiplyScalar(.5),qu.copy(t).sub(e).normalize(),ju.copy(this.origin).sub(yh);const c=e.distanceTo(t)*.5,u=-this.direction.dot(qu),d=ju.dot(this.direction),p=-ju.dot(qu),g=ju.lengthSq(),S=Math.abs(1-u*u);let E,_,x,R;if(S>0)if(E=u*p-d,_=u*d-p,R=c*S,E>=0)if(_>=-R)if(_<=R){const N=1/S;E*=N,_*=N,x=E*(E+u*_+2*d)+_*(u*E+_+2*p)+g}else _=c,E=Math.max(0,-(u*_+d)),x=-E*E+_*(_+2*p)+g;else _=-c,E=Math.max(0,-(u*_+d)),x=-E*E+_*(_+2*p)+g;else _<=-R?(E=Math.max(0,-(-u*c+d)),_=E>0?-c:Math.min(Math.max(-c,-p),c),x=-E*E+_*(_+2*p)+g):_<=R?(E=0,_=Math.min(Math.max(-c,-p),c),x=_*(_+2*p)+g):(E=Math.max(0,-(u*c+d)),_=E>0?c:Math.min(Math.max(-c,-p),c),x=-E*E+_*(_+2*p)+g);else _=u>0?-c:c,E=Math.max(0,-(u*_+d)),x=-E*E+_*(_+2*p)+g;return n&&n.copy(this.origin).addScaledVector(this.direction,E),o&&o.copy(yh).addScaledVector(qu,_),x}intersectSphere(e,t){if(e.radius<0)return null;fs.subVectors(e.center,this.origin);const n=fs.dot(this.direction),o=fs.dot(fs)-n*n,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),d=n-u,p=n+u;return p<0?null:d<0?this.at(p,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,o,c,u,d,p;const g=1/this.direction.x,S=1/this.direction.y,E=1/this.direction.z,_=this.origin;return g>=0?(n=(e.min.x-_.x)*g,o=(e.max.x-_.x)*g):(n=(e.max.x-_.x)*g,o=(e.min.x-_.x)*g),S>=0?(c=(e.min.y-_.y)*S,u=(e.max.y-_.y)*S):(c=(e.max.y-_.y)*S,u=(e.min.y-_.y)*S),n>u||c>o||((c>n||isNaN(n))&&(n=c),(u<o||isNaN(o))&&(o=u),E>=0?(d=(e.min.z-_.z)*E,p=(e.max.z-_.z)*E):(d=(e.max.z-_.z)*E,p=(e.min.z-_.z)*E),n>p||d>o)||((d>n||n!==n)&&(n=d),(p<o||o!==o)&&(o=p),o<0)?null:this.at(n>=0?n:o,t)}intersectsBox(e){return this.intersectBox(e,fs)!==null}intersectTriangle(e,t,n,o,c){const u=this.origin,d=this.direction,p=d.x,g=d.y,S=d.z,E=e.x-u.x,_=e.y-u.y,x=e.z-u.z,R=t.x-u.x,N=t.y-u.y,w=t.z-u.z,M=n.x-u.x,O=n.y-u.y,k=n.z-u.z,C=Math.abs(p),F=Math.abs(g),D=Math.abs(S);let H,y,P,z,G,q,ae,W,ue,ye,_e,Te;if(C>=F&&C>=D?(P=p,q=E,ue=R,Te=M,p>=0?(H=g,y=S,z=_,G=x,ae=N,W=w,ye=O,_e=k):(H=S,y=g,z=x,G=_,ae=w,W=N,ye=k,_e=O)):F>=D?(P=g,q=_,ue=N,Te=O,g>=0?(H=S,y=p,z=x,G=E,ae=w,W=R,ye=k,_e=M):(H=p,y=S,z=E,G=x,ae=R,W=w,ye=M,_e=k)):(P=S,q=x,ue=w,Te=k,S>=0?(H=p,y=g,z=E,G=_,ae=R,W=N,ye=M,_e=O):(H=g,y=p,z=_,G=E,ae=N,W=R,ye=O,_e=M)),P===0)return null;const ne=H/P,V=y/P,xe=1/P,ut=z-ne*q,rt=G-V*q,Ae=ae-ne*ue,se=W-V*ue,Lt=ye-ne*Te,me=_e-V*Te,ve=Lt*se-me*Ae,Ze=ut*me-rt*Lt,dt=Ae*rt-se*ut;if(o){if(ve<0||Ze<0||dt<0)return null}else if((ve<0||Ze<0||dt<0)&&(ve>0||Ze>0||dt>0))return null;const We=ve+Ze+dt;if(We===0)return null;const vt=xe*(ve*q+Ze*ue+dt*Te);return(We>0?vt<0:vt>0)?null:this.at(vt/We,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ef extends lc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _s,this.combine=bd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mp=new Fn,Uo=new Ig,$u=new Ud,yp=new K,ef=new K,tf=new K,nf=new K,Sh=new K,rf=new K,Sp=new K,af=new K;class Ii extends _i{constructor(e=new ir,t=new Ef){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const o=t[n[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,t){const n=this.geometry,o=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(c&&d){rf.set(0,0,0);for(let p=0,g=c.length;p<g;p++){const S=d[p],E=c[p];S!==0&&(Sh.fromBufferAttribute(E,e),u?rf.addScaledVector(Sh,S):rf.addScaledVector(Sh.sub(t),S))}t.add(rf)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$u.copy(n.boundingSphere),$u.applyMatrix4(c),Uo.copy(e.ray).recast(e.near),!($u.containsPoint(Uo.origin)===!1&&(Uo.intersectSphere($u,yp)===null||Uo.origin.distanceToSquared(yp)>(e.far-e.near)**2))&&(Mp.copy(c).invert(),Uo.copy(e.ray).applyMatrix4(Mp),!(n.boundingBox!==null&&Uo.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Uo)))}_computeIntersections(e,t,n){let o;const c=this.geometry,u=this.material,d=c.index,p=c.attributes.position,g=c.attributes.uv,S=c.attributes.uv1,E=c.attributes.normal,_=c.groups,x=c.drawRange;if(d!==null)if(Array.isArray(u))for(let R=0,N=_.length;R<N;R++){const w=_[R],M=u[w.materialIndex],O=Math.max(w.start,x.start),k=Math.min(d.count,Math.min(w.start+w.count,x.start+x.count));for(let C=O,F=k;C<F;C+=3){const D=d.getX(C),H=d.getX(C+1),y=d.getX(C+2);o=sf(this,M,e,n,g,S,E,D,H,y),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=w.materialIndex,t.push(o))}}else{const R=Math.max(0,x.start),N=Math.min(d.count,x.start+x.count);for(let w=R,M=N;w<M;w+=3){const O=d.getX(w),k=d.getX(w+1),C=d.getX(w+2);o=sf(this,u,e,n,g,S,E,O,k,C),o&&(o.faceIndex=Math.floor(w/3),t.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let R=0,N=_.length;R<N;R++){const w=_[R],M=u[w.materialIndex],O=Math.max(w.start,x.start),k=Math.min(p.count,Math.min(w.start+w.count,x.start+x.count));for(let C=O,F=k;C<F;C+=3){const D=C,H=C+1,y=C+2;o=sf(this,M,e,n,g,S,E,D,H,y),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=w.materialIndex,t.push(o))}}else{const R=Math.max(0,x.start),N=Math.min(p.count,x.start+x.count);for(let w=R,M=N;w<M;w+=3){const O=w,k=w+1,C=w+2;o=sf(this,u,e,n,g,S,E,O,k,C),o&&(o.faceIndex=Math.floor(w/3),t.push(o))}}}}function M0(i,e,t,n,o,c,u,d){let p;if(e.side===nr?p=n.intersectTriangle(u,c,o,!0,d):p=n.intersectTriangle(o,c,u,e.side===Wo,d),p===null)return null;af.copy(d),af.applyMatrix4(i.matrixWorld);const g=t.ray.origin.distanceTo(af);return g<t.near||g>t.far?null:{distance:g,point:af.clone(),object:i}}function sf(i,e,t,n,o,c,u,d,p,g){i.getVertexPosition(d,ef),i.getVertexPosition(p,tf),i.getVertexPosition(g,nf);const S=M0(i,e,t,n,ef,tf,nf,Sp);if(S){const E=new K;na.getBarycoord(Sp,ef,tf,nf,E),o&&(S.uv=na.getInterpolatedAttribute(o,d,p,g,E,new ft)),c&&(S.uv1=na.getInterpolatedAttribute(c,d,p,g,E,new ft)),u&&(S.normal=na.getInterpolatedAttribute(u,d,p,g,E,new K),S.normal.dot(n.direction)>0&&S.normal.multiplyScalar(-1));const _={a:d,b:p,c:g,normal:new K,materialIndex:0};na.getNormal(ef,tf,nf,_.normal),S.face=_,S.barycoord=E}return S}class y0 extends Li{constructor(e=null,t=1,n=1,o,c,u,d,p,g=vi,S=vi,E,_){super(null,u,d,p,g,S,o,c,E,_),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Fo=new Ud,S0=new ft(.5,.5),of=new K;class Fd{constructor(e=new Gs,t=new Gs,n=new Gs,o=new Gs,c=new Gs,u=new Gs){this.planes=[e,t,n,o,c,u]}set(e,t,n,o,c,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(n),d[3].copy(o),d[4].copy(c),d[5].copy(u),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Pa,n=!1){const o=this.planes,c=e.elements,u=c[0],d=c[1],p=c[2],g=c[3],S=c[4],E=c[5],_=c[6],x=c[7],R=c[8],N=c[9],w=c[10],M=c[11],O=c[12],k=c[13],C=c[14],F=c[15];if(o[0].setComponents(g-u,x-S,M-R,F-O).normalize(),o[1].setComponents(g+u,x+S,M+R,F+O).normalize(),o[2].setComponents(g+d,x+E,M+N,F+k).normalize(),o[3].setComponents(g-d,x-E,M-N,F-k).normalize(),n)o[4].setComponents(p,_,w,C).normalize(),o[5].setComponents(g-p,x-_,M-w,F-C).normalize();else if(o[4].setComponents(g-p,x-_,M-w,F-C).normalize(),t===Pa)o[5].setComponents(g+p,x+_,M+w,F+C).normalize();else if(t===tu)o[5].setComponents(p,_,w,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fo)}intersectsSprite(e){Fo.center.set(0,0,0);const t=S0.distanceTo(e.center);return Fo.radius=.7071067811865476+t,Fo.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fo)}intersectsSphere(e){const t=this.planes,n=e.center,o=-e.radius;for(let c=0;c<6;c++)if(t[c].distanceToPoint(n)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const o=t[n];if(of.x=o.normal.x>0?e.max.x:e.min.x,of.y=o.normal.y>0?e.max.y:e.min.y,of.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(of)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Dg extends Li{constructor(e=[],t=Xo,n,o,c,u,d,p,g,S){super(e,t,n,o,c,u,d,p,g,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bp extends Li{constructor(e,t,n,o,c,u,d,p,g){super(e,t,n,o,c,u,d,p,g),this.isCanvasTexture=!0,this.needsUpdate=!0}}class iu extends Li{constructor(e,t,n=Ia,o,c,u,d=vi,p=vi,g,S=vs,E=1){if(S!==vs&&S!==Go)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:E};super(_,o,c,u,d,p,S,n,g),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Dd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class b0 extends iu{constructor(e,t=Ia,n=Xo,o,c,u=vi,d=vi,p,g=vs){const S={width:e,height:e,depth:1},E=[S,S,S,S,S,S];super(e,e,t,n,o,c,u,d,p,g),this.image=E,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ng extends Li{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ws extends ir{constructor(e=1,t=1,n=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:o,heightSegments:c,depthSegments:u};const d=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const p=[],g=[],S=[],E=[];let _=0,x=0;R("z","y","x",-1,-1,n,t,e,u,c,0),R("z","y","x",1,-1,n,t,-e,u,c,1),R("x","z","y",1,1,e,n,t,o,u,2),R("x","z","y",1,-1,e,n,-t,o,u,3),R("x","y","z",1,-1,e,t,n,o,c,4),R("x","y","z",-1,-1,e,t,-n,o,c,5),this.setIndex(p),this.setAttribute("position",new On(g,3)),this.setAttribute("normal",new On(S,3)),this.setAttribute("uv",new On(E,2));function R(N,w,M,O,k,C,F,D,H,y,P){const z=C/H,G=F/y,q=C/2,ae=F/2,W=D/2,ue=H+1,ye=y+1;let _e=0,Te=0;const ne=new K;for(let V=0;V<ye;V++){const xe=V*G-ae;for(let ut=0;ut<ue;ut++){const rt=ut*z-q;ne[N]=rt*O,ne[w]=xe*k,ne[M]=W,g.push(ne.x,ne.y,ne.z),ne[N]=0,ne[w]=0,ne[M]=D>0?1:-1,S.push(ne.x,ne.y,ne.z),E.push(ut/H),E.push(1-V/y),_e+=1}}for(let V=0;V<y;V++)for(let xe=0;xe<H;xe++){const ut=_+xe+ue*V,rt=_+xe+ue*(V+1),Ae=_+(xe+1)+ue*(V+1),se=_+(xe+1)+ue*V;p.push(ut,rt,se),p.push(rt,Ae,se),Te+=6}d.addGroup(x,Te,P),x+=Te,_+=_e}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ws(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Vo extends ir{constructor(e=1,t=1,n=1,o=32,c=1,u=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:o,heightSegments:c,openEnded:u,thetaStart:d,thetaLength:p};const g=this;o=Math.floor(o),c=Math.floor(c);const S=[],E=[],_=[],x=[];let R=0;const N=[],w=n/2;let M=0;O(),u===!1&&(e>0&&k(!0),t>0&&k(!1)),this.setIndex(S),this.setAttribute("position",new On(E,3)),this.setAttribute("normal",new On(_,3)),this.setAttribute("uv",new On(x,2));function O(){const C=new K,F=new K;let D=0;const H=(t-e)/n;for(let y=0;y<=c;y++){const P=[],z=y/c,G=z*(t-e)+e;for(let q=0;q<=o;q++){const ae=q/o,W=ae*p+d,ue=Math.sin(W),ye=Math.cos(W);F.x=G*ue,F.y=-z*n+w,F.z=G*ye,E.push(F.x,F.y,F.z),C.set(ue,H,ye).normalize(),_.push(C.x,C.y,C.z),x.push(ae,1-z),P.push(R++)}N.push(P)}for(let y=0;y<o;y++)for(let P=0;P<c;P++){const z=N[P][y],G=N[P+1][y],q=N[P+1][y+1],ae=N[P][y+1];(e>0||P!==0)&&(S.push(z,G,ae),D+=3),(t>0||P!==c-1)&&(S.push(G,q,ae),D+=3)}g.addGroup(M,D,0),M+=D}function k(C){const F=R,D=new ft,H=new K;let y=0;const P=C===!0?e:t,z=C===!0?1:-1;for(let q=1;q<=o;q++)E.push(0,w*z,0),_.push(0,z,0),x.push(.5,.5),R++;const G=R;for(let q=0;q<=o;q++){const W=q/o*p+d,ue=Math.cos(W),ye=Math.sin(W);H.x=P*ye,H.y=w*z,H.z=P*ue,E.push(H.x,H.y,H.z),_.push(0,z,0),D.x=ue*.5+.5,D.y=ye*.5*z+.5,x.push(D.x,D.y),R++}for(let q=0;q<o;q++){const ae=F+q,W=G+q;C===!0?S.push(W,W+1,ae):S.push(W+1,W,ae),y+=3}g.addGroup(M,y,C===!0?1:2),M+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Od extends ir{constructor(e=[],t=[],n=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:o};const c=[],u=[];d(o),g(n),S(),this.setAttribute("position",new On(c,3)),this.setAttribute("normal",new On(c.slice(),3)),this.setAttribute("uv",new On(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function d(O){const k=new K,C=new K,F=new K;for(let D=0;D<t.length;D+=3)x(t[D+0],k),x(t[D+1],C),x(t[D+2],F),p(k,C,F,O)}function p(O,k,C,F){const D=F+1,H=[];for(let y=0;y<=D;y++){H[y]=[];const P=O.clone().lerp(C,y/D),z=k.clone().lerp(C,y/D),G=D-y;for(let q=0;q<=G;q++)q===0&&y===D?H[y][q]=P:H[y][q]=P.clone().lerp(z,q/G)}for(let y=0;y<D;y++)for(let P=0;P<2*(D-y)-1;P++){const z=Math.floor(P/2);P%2===0?(_(H[y][z+1]),_(H[y+1][z]),_(H[y][z])):(_(H[y][z+1]),_(H[y+1][z+1]),_(H[y+1][z]))}}function g(O){const k=new K;for(let C=0;C<c.length;C+=3)k.x=c[C+0],k.y=c[C+1],k.z=c[C+2],k.normalize().multiplyScalar(O),c[C+0]=k.x,c[C+1]=k.y,c[C+2]=k.z}function S(){const O=new K;for(let k=0;k<c.length;k+=3){O.x=c[k+0],O.y=c[k+1],O.z=c[k+2];const C=w(O)/2/Math.PI+.5,F=M(O)/Math.PI+.5;u.push(C,1-F)}R(),E()}function E(){for(let O=0;O<u.length;O+=6){const k=u[O+0],C=u[O+2],F=u[O+4],D=Math.max(k,C,F),H=Math.min(k,C,F);D>.9&&H<.1&&(k<.2&&(u[O+0]+=1),C<.2&&(u[O+2]+=1),F<.2&&(u[O+4]+=1))}}function _(O){c.push(O.x,O.y,O.z)}function x(O,k){const C=O*3;k.x=e[C+0],k.y=e[C+1],k.z=e[C+2]}function R(){const O=new K,k=new K,C=new K,F=new K,D=new ft,H=new ft,y=new ft;for(let P=0,z=0;P<c.length;P+=9,z+=6){O.set(c[P+0],c[P+1],c[P+2]),k.set(c[P+3],c[P+4],c[P+5]),C.set(c[P+6],c[P+7],c[P+8]),D.set(u[z+0],u[z+1]),H.set(u[z+2],u[z+3]),y.set(u[z+4],u[z+5]),F.copy(O).add(k).add(C).divideScalar(3);const G=w(F);N(D,z+0,O,G),N(H,z+2,k,G),N(y,z+4,C,G)}}function N(O,k,C,F){F<0&&O.x===1&&(u[k]=O.x-1),C.x===0&&C.z===0&&(u[k]=F/2/Math.PI+.5)}function w(O){return Math.atan2(O.z,-O.x)}function M(O){return Math.atan2(-O.y,Math.sqrt(O.x*O.x+O.z*O.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Od(e.vertices,e.indices,e.radius,e.detail)}}class xs{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){yt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,o=this.getPoint(0),c=0;t.push(0);for(let u=1;u<=e;u++)n=this.getPoint(u/e),c+=n.distanceTo(o),t.push(c),o=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let o=0;const c=n.length;let u;t?u=t:u=e*n[c-1];let d=0,p=c-1,g;for(;d<=p;)if(o=Math.floor(d+(p-d)/2),g=n[o]-u,g<0)d=o+1;else if(g>0)p=o-1;else{p=o;break}if(o=p,n[o]===u)return o/(c-1);const S=n[o],_=n[o+1]-S,x=(u-S)/_;return(o+x)/(c-1)}getTangent(e,t){let o=e-1e-4,c=e+1e-4;o<0&&(o=0),c>1&&(c=1);const u=this.getPoint(o),d=this.getPoint(c),p=t||(u.isVector2?new ft:new K);return p.copy(d).sub(u).normalize(),p}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new K,o=[],c=[],u=[],d=new K,p=new Fn;for(let x=0;x<=e;x++){const R=x/e;o[x]=this.getTangentAt(R,new K)}c[0]=new K,u[0]=new K;let g=Number.MAX_VALUE;const S=Math.abs(o[0].x),E=Math.abs(o[0].y),_=Math.abs(o[0].z);S<=g&&(g=S,n.set(1,0,0)),E<=g&&(g=E,n.set(0,1,0)),_<=g&&n.set(0,0,1),d.crossVectors(o[0],n).normalize(),c[0].crossVectors(o[0],d),u[0].crossVectors(o[0],c[0]);for(let x=1;x<=e;x++){if(c[x]=c[x-1].clone(),u[x]=u[x-1].clone(),d.crossVectors(o[x-1],o[x]),d.length()>Number.EPSILON){d.normalize();const R=Math.acos(kt(o[x-1].dot(o[x]),-1,1));c[x].applyMatrix4(p.makeRotationAxis(d,R))}u[x].crossVectors(o[x],c[x])}if(t===!0){let x=Math.acos(kt(c[0].dot(c[e]),-1,1));x/=e,o[0].dot(d.crossVectors(c[0],c[e]))>0&&(x=-x);for(let R=1;R<=e;R++)c[R].applyMatrix4(p.makeRotationAxis(o[R],x*R)),u[R].crossVectors(o[R],c[R])}return{tangents:o,normals:c,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ug extends xs{constructor(e=0,t=0,n=1,o=1,c=0,u=Math.PI*2,d=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=o,this.aStartAngle=c,this.aEndAngle=u,this.aClockwise=d,this.aRotation=p}getPoint(e,t=new ft){const n=t,o=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const u=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=o;for(;c>o;)c-=o;c<Number.EPSILON&&(u?c=0:c=o),this.aClockwise===!0&&!u&&(c===o?c=-o:c=c-o);const d=this.aStartAngle+e*c;let p=this.aX+this.xRadius*Math.cos(d),g=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const S=Math.cos(this.aRotation),E=Math.sin(this.aRotation),_=p-this.aX,x=g-this.aY;p=_*S-x*E+this.aX,g=_*E+x*S+this.aY}return n.set(p,g)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class E0 extends Ug{constructor(e,t,n,o,c,u){super(e,t,n,n,o,c,u),this.isArcCurve=!0,this.type="ArcCurve"}}function Bd(){let i=0,e=0,t=0,n=0;function o(c,u,d,p){i=c,e=d,t=-3*c+3*u-2*d-p,n=2*c-2*u+d+p}return{initCatmullRom:function(c,u,d,p,g){o(u,d,g*(d-c),g*(p-u))},initNonuniformCatmullRom:function(c,u,d,p,g,S,E){let _=(u-c)/g-(d-c)/(g+S)+(d-u)/S,x=(d-u)/S-(p-u)/(S+E)+(p-d)/E;_*=S,x*=S,o(u,d,_,x)},calc:function(c){const u=c*c,d=u*c;return i+e*c+t*u+n*d}}}const Ep=new K,Tp=new K,bh=new Bd,Eh=new Bd,Th=new Bd;class Fg extends xs{constructor(e=[],t=!1,n="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=o}getPoint(e,t=new K){const n=t,o=this.points,c=o.length,u=(c-(this.closed?0:1))*e;let d=Math.floor(u),p=u-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:p===0&&d===c-1&&(d=c-2,p=1);let g,S;this.closed||d>0?g=o[(d-1)%c]:(Tp.subVectors(o[0],o[1]).add(o[0]),g=Tp);const E=o[d%c],_=o[(d+1)%c];if(this.closed||d+2<c?S=o[(d+2)%c]:(Ep.subVectors(o[c-1],o[c-2]).add(o[c-1]),S=Ep),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let R=Math.pow(g.distanceToSquared(E),x),N=Math.pow(E.distanceToSquared(_),x),w=Math.pow(_.distanceToSquared(S),x);N<1e-4&&(N=1),R<1e-4&&(R=N),w<1e-4&&(w=N),bh.initNonuniformCatmullRom(g.x,E.x,_.x,S.x,R,N,w),Eh.initNonuniformCatmullRom(g.y,E.y,_.y,S.y,R,N,w),Th.initNonuniformCatmullRom(g.z,E.z,_.z,S.z,R,N,w)}else this.curveType==="catmullrom"&&(bh.initCatmullRom(g.x,E.x,_.x,S.x,this.tension),Eh.initCatmullRom(g.y,E.y,_.y,S.y,this.tension),Th.initCatmullRom(g.z,E.z,_.z,S.z,this.tension));return n.set(bh.calc(p),Eh.calc(p),Th.calc(p)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const o=e.points[t];this.points.push(new K().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function wp(i,e,t,n,o){const c=(n-e)*.5,u=(o-t)*.5,d=i*i,p=i*d;return(2*t-2*n+c+u)*p+(-3*t+3*n-2*c-u)*d+c*i+t}function T0(i,e){const t=1-i;return t*t*e}function w0(i,e){return 2*(1-i)*i*e}function A0(i,e){return i*i*e}function Qc(i,e,t,n){return T0(i,e)+w0(i,t)+A0(i,n)}function R0(i,e){const t=1-i;return t*t*t*e}function C0(i,e){const t=1-i;return 3*t*t*i*e}function P0(i,e){return 3*(1-i)*i*i*e}function L0(i,e){return i*i*i*e}function qc(i,e,t,n,o){return R0(i,e)+C0(i,t)+P0(i,n)+L0(i,o)}class I0 extends xs{constructor(e=new ft,t=new ft,n=new ft,o=new ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=o}getPoint(e,t=new ft){const n=t,o=this.v0,c=this.v1,u=this.v2,d=this.v3;return n.set(qc(e,o.x,c.x,u.x,d.x),qc(e,o.y,c.y,u.y,d.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class D0 extends xs{constructor(e=new K,t=new K,n=new K,o=new K){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=o}getPoint(e,t=new K){const n=t,o=this.v0,c=this.v1,u=this.v2,d=this.v3;return n.set(qc(e,o.x,c.x,u.x,d.x),qc(e,o.y,c.y,u.y,d.y),qc(e,o.z,c.z,u.z,d.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class N0 extends xs{constructor(e=new ft,t=new ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ft){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ft){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class U0 extends xs{constructor(e=new K,t=new K){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new K){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new K){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class F0 extends xs{constructor(e=new ft,t=new ft,n=new ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ft){const n=t,o=this.v0,c=this.v1,u=this.v2;return n.set(Qc(e,o.x,c.x,u.x),Qc(e,o.y,c.y,u.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Og extends xs{constructor(e=new K,t=new K,n=new K){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new K){const n=t,o=this.v0,c=this.v1,u=this.v2;return n.set(Qc(e,o.x,c.x,u.x),Qc(e,o.y,c.y,u.y),Qc(e,o.z,c.z,u.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class O0 extends xs{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ft){const n=t,o=this.points,c=(o.length-1)*e,u=Math.floor(c),d=c-u,p=o[u===0?u:u-1],g=o[u],S=o[u>o.length-2?o.length-1:u+1],E=o[u>o.length-3?o.length-1:u+2];return n.set(wp(d,p.x,g.x,S.x,E.x),wp(d,p.y,g.y,S.y,E.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const o=e.points[t];this.points.push(new ft().fromArray(o))}return this}}var B0=Object.freeze({__proto__:null,ArcCurve:E0,CatmullRomCurve3:Fg,CubicBezierCurve:I0,CubicBezierCurve3:D0,EllipseCurve:Ug,LineCurve:N0,LineCurve3:U0,QuadraticBezierCurve:F0,QuadraticBezierCurve3:Og,SplineCurve:O0});class Tf extends Od{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],o=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,o,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Tf(e.radius,e.detail)}}class rc extends ir{constructor(e=1,t=1,n=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:o};const c=e/2,u=t/2,d=Math.floor(n),p=Math.floor(o),g=d+1,S=p+1,E=e/d,_=t/p,x=[],R=[],N=[],w=[];for(let M=0;M<S;M++){const O=M*_-u;for(let k=0;k<g;k++){const C=k*E-c;R.push(C,-O,0),N.push(0,0,1),w.push(k/d),w.push(1-M/p)}}for(let M=0;M<p;M++)for(let O=0;O<d;O++){const k=O+g*M,C=O+g*(M+1),F=O+1+g*(M+1),D=O+1+g*M;x.push(k,C,D),x.push(C,F,D)}this.setIndex(x),this.setAttribute("position",new On(R,3)),this.setAttribute("normal",new On(N,3)),this.setAttribute("uv",new On(w,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Rf extends ir{constructor(e=1,t=32,n=16,o=0,c=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:o,phiLength:c,thetaStart:u,thetaLength:d},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const p=Math.min(u+d,Math.PI);let g=0;const S=[],E=new K,_=new K,x=[],R=[],N=[],w=[];for(let M=0;M<=n;M++){const O=[],k=M/n,C=u+k*d,F=e*Math.cos(C),D=Math.sqrt(e*e-F*F);let H=0;M===0&&u===0?H=.5/t:M===n&&p===Math.PI&&(H=-.5/t);for(let y=0;y<=t;y++){const P=y/t,z=o+P*c;E.x=-D*Math.cos(z),E.y=F,E.z=D*Math.sin(z),R.push(E.x,E.y,E.z),_.copy(E).normalize(),N.push(_.x,_.y,_.z),w.push(P+H,1-k),O.push(g++)}S.push(O)}for(let M=0;M<n;M++)for(let O=0;O<t;O++){const k=S[M][O+1],C=S[M][O],F=S[M+1][O],D=S[M+1][O+1];(M!==0||u>0)&&x.push(k,C,D),(M!==n-1||p<Math.PI)&&x.push(C,F,D)}this.setIndex(x),this.setAttribute("position",new On(R,3)),this.setAttribute("normal",new On(N,3)),this.setAttribute("uv",new On(w,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Cf extends ir{constructor(e=1,t=.4,n=12,o=48,c=Math.PI*2,u=0,d=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:o,arc:c,thetaStart:u,thetaLength:d},n=Math.floor(n),o=Math.floor(o);const p=[],g=[],S=[],E=[],_=new K,x=new K,R=new K;for(let N=0;N<=n;N++){const w=u+N/n*d;for(let M=0;M<=o;M++){const O=M/o*c;x.x=(e+t*Math.cos(w))*Math.cos(O),x.y=(e+t*Math.cos(w))*Math.sin(O),x.z=t*Math.sin(w),g.push(x.x,x.y,x.z),_.x=e*Math.cos(O),_.y=e*Math.sin(O),R.subVectors(x,_).normalize(),S.push(R.x,R.y,R.z),E.push(M/o),E.push(N/n)}}for(let N=1;N<=n;N++)for(let w=1;w<=o;w++){const M=(o+1)*N+w-1,O=(o+1)*(N-1)+w-1,k=(o+1)*(N-1)+w,C=(o+1)*N+w;p.push(M,O,C),p.push(O,k,C)}this.setIndex(p),this.setAttribute("position",new On(g,3)),this.setAttribute("normal",new On(S,3)),this.setAttribute("uv",new On(E,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cf(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class zd extends ir{constructor(e=new Og(new K(-1,-1,0),new K(-1,1,0),new K(1,1,0)),t=64,n=1,o=8,c=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:o,closed:c};const u=e.computeFrenetFrames(t,c);this.tangents=u.tangents,this.normals=u.normals,this.binormals=u.binormals;const d=new K,p=new K,g=new ft;let S=new K;const E=[],_=[],x=[],R=[];N(),this.setIndex(R),this.setAttribute("position",new On(E,3)),this.setAttribute("normal",new On(_,3)),this.setAttribute("uv",new On(x,2));function N(){for(let k=0;k<t;k++)w(k);w(c===!1?t:0),O(),M()}function w(k){S=e.getPointAt(k/t,S);const C=u.normals[k],F=u.binormals[k];for(let D=0;D<=o;D++){const H=D/o*Math.PI*2,y=Math.sin(H),P=-Math.cos(H);p.x=P*C.x+y*F.x,p.y=P*C.y+y*F.y,p.z=P*C.z+y*F.z,p.normalize(),_.push(p.x,p.y,p.z),d.x=S.x+n*p.x,d.y=S.y+n*p.y,d.z=S.z+n*p.z,E.push(d.x,d.y,d.z)}}function M(){for(let k=1;k<=t;k++)for(let C=1;C<=o;C++){const F=(o+1)*(k-1)+(C-1),D=(o+1)*k+(C-1),H=(o+1)*k+C,y=(o+1)*(k-1)+C;R.push(F,D,y),R.push(D,H,y)}}function O(){for(let k=0;k<=t;k++)for(let C=0;C<=o;C++)g.x=k/t,g.y=C/o,x.push(g.x,g.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new zd(new B0[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function ac(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const o=i[t][n];if(Ap(o))o.isRenderTargetTexture?(yt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=o.clone();else if(Array.isArray(o))if(Ap(o[0])){const c=[];for(let u=0,d=o.length;u<d;u++)c[u]=o[u].clone();e[t][n]=c}else e[t][n]=o.slice();else e[t][n]=o}}return e}function Vi(i){const e={};for(let t=0;t<i.length;t++){const n=ac(i[t]);for(const o in n)e[o]=n[o]}return e}function Ap(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function z0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Bg(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Jt.workingColorSpace}const k0={clone:ac,merge:Vi};var H0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,G0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Na extends lc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=H0,this.fragmentShader=G0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ac(e.uniforms),this.uniformsGroups=z0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const o in this.extensions)this.extensions[o]===!0&&(n[o]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const o=e.uniforms[n];switch(this.uniforms[n]={},o.type){case"t":this.uniforms[n].value=t[o.value]||null;break;case"c":this.uniforms[n].value=new At().setHex(o.value);break;case"v2":this.uniforms[n].value=new ft().fromArray(o.value);break;case"v3":this.uniforms[n].value=new K().fromArray(o.value);break;case"v4":this.uniforms[n].value=new Hn().fromArray(o.value);break;case"m3":this.uniforms[n].value=new wt().fromArray(o.value);break;case"m4":this.uniforms[n].value=new Fn().fromArray(o.value);break;default:this.uniforms[n].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class V0 extends Na{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ru extends lc{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mf,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _s,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zg extends ru{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ft(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new At(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new At(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new At(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class W0 extends lc{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mf,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _s,this.combine=bd,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class X0 extends lc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Em,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Y0 extends lc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class kd extends _i{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new At(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Z0 extends kd{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_i.DEFAULT_UP),this.updateMatrix(),this.groundColor=new At(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const wh=new Fn,Rp=new K,Cp=new K;class kg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.mapType=hr,this.map=null,this.mapPass=null,this.matrix=new Fn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fd,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new Hn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Rp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rp),Cp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,o){wh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(wh,e.coordinateSystem,e.reversedDepth);const c=this._frameExtents,u=o?o.z/c.x:1,d=o?o.w/c.y:1,p=o?o.x/c.x:0,g=o?o.y/c.y:0;e.coordinateSystem===tu||e.reversedDepth?t.set(.5*u,0,0,.5*u+p,0,.5*d,0,.5*d+g,0,0,1,0,0,0,0,1):t.set(.5*u,0,0,.5*u+p,0,.5*d,0,.5*d+g,0,0,.5,.5,0,0,0,1),t.multiply(wh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const lf=new K,cf=new oc,wa=new K;class Hg extends _i{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fn,this.projectionMatrix=new Fn,this.projectionMatrixInverse=new Fn,this.coordinateSystem=Pa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(lf,cf,wa),wa.x===1&&wa.y===1&&wa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lf,cf,wa.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(lf,cf,wa),wa.x===1&&wa.y===1&&wa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lf,cf,wa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Hs=new K,Pp=new ft,Lp=new ft;class fr extends Hg{constructor(e=50,t=1,n=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=nu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nu*2*Math.atan(Math.tan(Jc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Hs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hs.x,Hs.y).multiplyScalar(-e/Hs.z),Hs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hs.x,Hs.y).multiplyScalar(-e/Hs.z)}getViewSize(e,t){return this.getViewBounds(e,Pp,Lp),t.subVectors(Lp,Pp)}setViewOffset(e,t,n,o,c,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Jc*.5*this.fov)/this.zoom,n=2*t,o=this.aspect*n,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,g=u.fullHeight;c+=u.offsetX*o/p,t-=u.offsetY*n/g,o*=u.width/p,n*=u.height/g}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class J0 extends kg{constructor(){super(new fr(90,1,.5,500)),this.isPointLightShadow=!0}}class K0 extends kd{constructor(e,t,n=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=o,this.shadow=new J0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Hd extends Hg{constructor(e=-1,t=1,n=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=n-e,u=n+e,d=o+t,p=o-t;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=g*this.view.offsetX,u=c+g*this.view.width,d-=S*this.view.offsetY,p=d-S*this.view.height}this.projectionMatrix.makeOrthographic(c,u,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Q0 extends kg{constructor(){super(new Hd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class q0 extends kd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_i.DEFAULT_UP),this.updateMatrix(),this.target=new _i,this.shadow=new Q0}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Jl=-90,Kl=1;class j0 extends _i{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new fr(Jl,Kl,e,t);o.layers=this.layers,this.add(o);const c=new fr(Jl,Kl,e,t);c.layers=this.layers,this.add(c);const u=new fr(Jl,Kl,e,t);u.layers=this.layers,this.add(u);const d=new fr(Jl,Kl,e,t);d.layers=this.layers,this.add(d);const p=new fr(Jl,Kl,e,t);p.layers=this.layers,this.add(p);const g=new fr(Jl,Kl,e,t);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,o,c,u,d,p]=t;for(const g of t)this.remove(g);if(e===Pa)n.up.set(0,1,0),n.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===tu)n.up.set(0,-1,0),n.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const g of t)this.add(g),g.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,d,p,g,S]=this.children,E=e.getRenderTarget(),_=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),R=e.xr.enabled;e.xr.enabled=!1;const N=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let w=!1;e.isWebGLRenderer===!0?w=e.state.buffers.depth.getReversed():w=e.reversedDepthBuffer,e.setRenderTarget(n,0,o),w&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,1,o),w&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(n,2,o),w&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(n,3,o),w&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(n,4,o),w&&e.autoClear===!1&&e.clearDepth(),e.render(t,g),n.texture.generateMipmaps=N,e.setRenderTarget(n,5,o),w&&e.autoClear===!1&&e.clearDepth(),e.render(t,S),e.setRenderTarget(E,_,x),e.xr.enabled=R,n.texture.needsPMREMUpdate=!0}}class $0 extends fr{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ip=new Fn;class ev{constructor(e,t,n=0,o=1/0){this.ray=new Ig(e,t),this.near=n,this.far=o,this.camera=null,this.layers=new Nd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):en("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ip.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ip),this}intersectObject(e,t=!0,n=[]){return xd(e,this,n,t),n.sort(Dp),n}intersectObjects(e,t=!0,n=[]){for(let o=0,c=e.length;o<c;o++)xd(e[o],this,n,t);return n.sort(Dp),n}}function Dp(i,e){return i.distance-e.distance}function xd(i,e,t,n){let o=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(o=!1),o===!0&&n===!0){const c=i.children;for(let u=0,d=c.length;u<d;u++)xd(c[u],e,t,!0)}}const Yd=class Yd{constructor(e,t,n,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,o){const c=this.elements;return c[0]=e,c[2]=t,c[1]=n,c[3]=o,this}};Yd.prototype.isMatrix2=!0;let Np=Yd;function Up(i,e,t,n){const o=tv(n);switch(t){case Eg:return i*e;case wg:return i*e/o.components*o.byteLength;case Ad:return i*e/o.components*o.byteLength;case Yo:return i*e*2/o.components*o.byteLength;case Rd:return i*e*2/o.components*o.byteLength;case Tg:return i*e*3/o.components*o.byteLength;case ia:return i*e*4/o.components*o.byteLength;case Cd:return i*e*4/o.components*o.byteLength;case df:case pf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case gf:case mf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wh:case Yh:return Math.max(i,16)*Math.max(e,8)/4;case Vh:case Xh:return Math.max(i,8)*Math.max(e,8)/2;case Zh:case Jh:case Qh:case qh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Kh:case _f:case jh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $h:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ed:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case td:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case nd:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case id:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case rd:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ad:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case sd:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case od:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ld:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case cd:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ud:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case fd:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case hd:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case dd:case pd:case gd:return Math.ceil(i/4)*Math.ceil(e/4)*16;case md:case vd:return Math.ceil(i/4)*Math.ceil(e/4)*8;case xf:case _d:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function tv(i){switch(i){case hr:case Mg:return{byteLength:1,components:1};case $c:case yg:case Da:return{byteLength:2,components:1};case Td:case wd:return{byteLength:2,components:4};case Ia:case Ed:case Ca:return{byteLength:4,components:1};case Sg:case bg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sd}}));typeof window<"u"&&(window.__THREE__?yt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sd);function Gg(){let i=null,e=!1,t=null,n=null;function o(c,u){n=i.requestAnimationFrame(o),t(c,u)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(o),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(c){t=c},setContext:function(c){i=c}}}function nv(i){const e=new WeakMap;function t(d,p){const g=d.array,S=d.usage,E=g.byteLength,_=i.createBuffer();i.bindBuffer(p,_),i.bufferData(p,g,S),d.onUploadCallback();let x;if(g instanceof Float32Array)x=i.FLOAT;else if(typeof Float16Array<"u"&&g instanceof Float16Array)x=i.HALF_FLOAT;else if(g instanceof Uint16Array)d.isFloat16BufferAttribute?x=i.HALF_FLOAT:x=i.UNSIGNED_SHORT;else if(g instanceof Int16Array)x=i.SHORT;else if(g instanceof Uint32Array)x=i.UNSIGNED_INT;else if(g instanceof Int32Array)x=i.INT;else if(g instanceof Int8Array)x=i.BYTE;else if(g instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:_,type:x,bytesPerElement:g.BYTES_PER_ELEMENT,version:d.version,size:E}}function n(d,p,g){const S=p.array,E=p.updateRanges;if(i.bindBuffer(g,d),E.length===0)i.bufferSubData(g,0,S);else{E.sort((x,R)=>x.start-R.start);let _=0;for(let x=1;x<E.length;x++){const R=E[_],N=E[x];N.start<=R.start+R.count+1?R.count=Math.max(R.count,N.start+N.count-R.start):(++_,E[_]=N)}E.length=_+1;for(let x=0,R=E.length;x<R;x++){const N=E[x];i.bufferSubData(g,N.start*S.BYTES_PER_ELEMENT,S,N.start,N.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(i.deleteBuffer(p.buffer),e.delete(d))}function u(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const S=e.get(d);(!S||S.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const g=e.get(d);if(g===void 0)e.set(d,t(d,p));else if(g.version<d.version){if(g.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(g.buffer,d,p),g.version=d.version}}return{get:o,remove:c,update:u}}var iv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rv=`#ifdef USE_ALPHAHASH
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
#endif`,av=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ov=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cv=`#ifdef USE_AOMAP
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
#endif`,uv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fv=`#ifdef USE_BATCHING
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
#endif`,hv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mv=`#ifdef USE_IRIDESCENCE
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
#endif`,vv=`#ifdef USE_BUMPMAP
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
#endif`,_v=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,bv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ev=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Tv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,wv=`#define PI 3.141592653589793
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
} // validated`,Av=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Rv=`vec3 transformedNormal = objectNormal;
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
#endif`,Cv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Iv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Uv=`#ifdef USE_ENVMAP
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
#endif`,Fv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ov=`#ifdef USE_ENVMAP
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
#endif`,Bv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zv=`#ifdef USE_ENVMAP
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
#endif`,kv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wv=`#ifdef USE_GRADIENTMAP
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
}`,Xv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Kv=`#ifdef USE_ENVMAP
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
#endif`,Qv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$v=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,e_=`PhysicalMaterial material;
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
#endif`,t_=`uniform sampler2D dfgLUT;
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
}`,n_=`
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
#endif`,i_=`#if defined( RE_IndirectDiffuse )
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
#endif`,r_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,a_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,s_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,o_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,u_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,f_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,h_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,d_=`#if defined( USE_POINTS_UV )
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
#endif`,p_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,g_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,m_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,v_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,__=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x_=`#ifdef USE_MORPHTARGETS
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
#endif`,M_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,S_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,b_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,w_=`#ifdef USE_NORMALMAP
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
#endif`,A_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,R_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,C_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,P_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,L_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,I_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,D_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,N_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,U_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,F_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,O_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,B_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,z_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,k_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,H_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,G_=`float getShadowMask() {
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
}`,V_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,W_=`#ifdef USE_SKINNING
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
#endif`,X_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Y_=`#ifdef USE_SKINNING
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
#endif`,Z_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,J_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,K_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Q_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,q_=`#ifdef USE_TRANSMISSION
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
#endif`,j_=`#ifdef USE_TRANSMISSION
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
#endif`,$_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ix=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rx=`uniform sampler2D t2D;
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
}`,ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cx=`#include <common>
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
}`,ux=`#if DEPTH_PACKING == 3200
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
}`,fx=`#define DISTANCE
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
}`,hx=`#define DISTANCE
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
}`,dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,px=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gx=`uniform float scale;
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
}`,mx=`uniform vec3 diffuse;
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
}`,vx=`#include <common>
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
}`,_x=`uniform vec3 diffuse;
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
}`,xx=`#define LAMBERT
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
}`,Mx=`#define LAMBERT
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
}`,yx=`#define MATCAP
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
}`,Sx=`#define MATCAP
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
}`,bx=`#define NORMAL
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
}`,Ex=`#define NORMAL
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
}`,Tx=`#define PHONG
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
}`,wx=`#define PHONG
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
}`,Ax=`#define STANDARD
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
}`,Rx=`#define STANDARD
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
}`,Cx=`#define TOON
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
}`,Px=`#define TOON
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
}`,Lx=`uniform float size;
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
}`,Ix=`uniform vec3 diffuse;
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
}`,Dx=`#include <common>
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
}`,Nx=`uniform vec3 color;
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
}`,Ux=`uniform float rotation;
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
}`,Fx=`uniform vec3 diffuse;
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
}`,Bt={alphahash_fragment:iv,alphahash_pars_fragment:rv,alphamap_fragment:av,alphamap_pars_fragment:sv,alphatest_fragment:ov,alphatest_pars_fragment:lv,aomap_fragment:cv,aomap_pars_fragment:uv,batching_pars_vertex:fv,batching_vertex:hv,begin_vertex:dv,beginnormal_vertex:pv,bsdfs:gv,iridescence_fragment:mv,bumpmap_pars_fragment:vv,clipping_planes_fragment:_v,clipping_planes_pars_fragment:xv,clipping_planes_pars_vertex:Mv,clipping_planes_vertex:yv,color_fragment:Sv,color_pars_fragment:bv,color_pars_vertex:Ev,color_vertex:Tv,common:wv,cube_uv_reflection_fragment:Av,defaultnormal_vertex:Rv,displacementmap_pars_vertex:Cv,displacementmap_vertex:Pv,emissivemap_fragment:Lv,emissivemap_pars_fragment:Iv,colorspace_fragment:Dv,colorspace_pars_fragment:Nv,envmap_fragment:Uv,envmap_common_pars_fragment:Fv,envmap_pars_fragment:Ov,envmap_pars_vertex:Bv,envmap_physical_pars_fragment:Kv,envmap_vertex:zv,fog_vertex:kv,fog_pars_vertex:Hv,fog_fragment:Gv,fog_pars_fragment:Vv,gradientmap_pars_fragment:Wv,lightmap_pars_fragment:Xv,lights_lambert_fragment:Yv,lights_lambert_pars_fragment:Zv,lights_pars_begin:Jv,lights_toon_fragment:Qv,lights_toon_pars_fragment:qv,lights_phong_fragment:jv,lights_phong_pars_fragment:$v,lights_physical_fragment:e_,lights_physical_pars_fragment:t_,lights_fragment_begin:n_,lights_fragment_maps:i_,lights_fragment_end:r_,lightprobes_pars_fragment:a_,logdepthbuf_fragment:s_,logdepthbuf_pars_fragment:o_,logdepthbuf_pars_vertex:l_,logdepthbuf_vertex:c_,map_fragment:u_,map_pars_fragment:f_,map_particle_fragment:h_,map_particle_pars_fragment:d_,metalnessmap_fragment:p_,metalnessmap_pars_fragment:g_,morphinstance_vertex:m_,morphcolor_vertex:v_,morphnormal_vertex:__,morphtarget_pars_vertex:x_,morphtarget_vertex:M_,normal_fragment_begin:y_,normal_fragment_maps:S_,normal_pars_fragment:b_,normal_pars_vertex:E_,normal_vertex:T_,normalmap_pars_fragment:w_,clearcoat_normal_fragment_begin:A_,clearcoat_normal_fragment_maps:R_,clearcoat_pars_fragment:C_,iridescence_pars_fragment:P_,opaque_fragment:L_,packing:I_,premultiplied_alpha_fragment:D_,project_vertex:N_,dithering_fragment:U_,dithering_pars_fragment:F_,roughnessmap_fragment:O_,roughnessmap_pars_fragment:B_,shadowmap_pars_fragment:z_,shadowmap_pars_vertex:k_,shadowmap_vertex:H_,shadowmask_pars_fragment:G_,skinbase_vertex:V_,skinning_pars_vertex:W_,skinning_vertex:X_,skinnormal_vertex:Y_,specularmap_fragment:Z_,specularmap_pars_fragment:J_,tonemapping_fragment:K_,tonemapping_pars_fragment:Q_,transmission_fragment:q_,transmission_pars_fragment:j_,uv_pars_fragment:$_,uv_pars_vertex:ex,uv_vertex:tx,worldpos_vertex:nx,background_vert:ix,background_frag:rx,backgroundCube_vert:ax,backgroundCube_frag:sx,cube_vert:ox,cube_frag:lx,depth_vert:cx,depth_frag:ux,distance_vert:fx,distance_frag:hx,equirect_vert:dx,equirect_frag:px,linedashed_vert:gx,linedashed_frag:mx,meshbasic_vert:vx,meshbasic_frag:_x,meshlambert_vert:xx,meshlambert_frag:Mx,meshmatcap_vert:yx,meshmatcap_frag:Sx,meshnormal_vert:bx,meshnormal_frag:Ex,meshphong_vert:Tx,meshphong_frag:wx,meshphysical_vert:Ax,meshphysical_frag:Rx,meshtoon_vert:Cx,meshtoon_frag:Px,points_vert:Lx,points_frag:Ix,shadow_vert:Dx,shadow_frag:Nx,sprite_vert:Ux,sprite_frag:Fx},Ke={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new wt}},envmap:{envMap:{value:null},envMapRotation:{value:new wt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new wt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new K},probesMax:{value:new K},probesResolution:{value:new K}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0},uvTransform:{value:new wt}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}}},Ra={basic:{uniforms:Vi([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Vi([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new At(0)},envMapIntensity:{value:1}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Vi([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Vi([Ke.common,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.roughnessmap,Ke.metalnessmap,Ke.fog,Ke.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Vi([Ke.common,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.gradientmap,Ke.fog,Ke.lights,{emissive:{value:new At(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Vi([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Vi([Ke.points,Ke.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Vi([Ke.common,Ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Vi([Ke.common,Ke.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Vi([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Vi([Ke.sprite,Ke.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new wt}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distance:{uniforms:Vi([Ke.common,Ke.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distance_vert,fragmentShader:Bt.distance_frag},shadow:{uniforms:Vi([Ke.lights,Ke.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};Ra.physical={uniforms:Vi([Ra.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new wt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new wt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new wt},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new wt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new wt},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new wt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new wt}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const uf={r:0,b:0,g:0},Ox=new Fn,Vg=new wt;Vg.set(-1,0,0,0,1,0,0,0,1);function Bx(i,e,t,n,o,c){const u=new At(0);let d=o===!0?0:1,p,g,S=null,E=0,_=null;function x(O){let k=O.isScene===!0?O.background:null;if(k&&k.isTexture){const C=O.backgroundBlurriness>0;k=e.get(k,C)}return k}function R(O){let k=!1;const C=x(O);C===null?w(u,d):C&&C.isColor&&(w(C,1),k=!0);const F=i.xr.getEnvironmentBlendMode();F==="additive"?t.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,c),(i.autoClear||k)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function N(O,k){const C=x(k);C&&(C.isCubeTexture||C.mapping===Af)?(g===void 0&&(g=new Ii(new Ws(1,1,1),new Na({name:"BackgroundCubeMaterial",uniforms:ac(Ra.backgroundCube.uniforms),vertexShader:Ra.backgroundCube.vertexShader,fragmentShader:Ra.backgroundCube.fragmentShader,side:nr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(F,D,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(g)),g.material.uniforms.envMap.value=C,g.material.uniforms.backgroundBlurriness.value=k.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(Ox.makeRotationFromEuler(k.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&g.material.uniforms.backgroundRotation.value.premultiply(Vg),g.material.toneMapped=Jt.getTransfer(C.colorSpace)!==vn,(S!==C||E!==C.version||_!==i.toneMapping)&&(g.material.needsUpdate=!0,S=C,E=C.version,_=i.toneMapping),g.layers.enableAll(),O.unshift(g,g.geometry,g.material,0,0,null)):C&&C.isTexture&&(p===void 0&&(p=new Ii(new rc(2,2),new Na({name:"BackgroundMaterial",uniforms:ac(Ra.background.uniforms),vertexShader:Ra.background.vertexShader,fragmentShader:Ra.background.fragmentShader,side:Wo,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(p)),p.material.uniforms.t2D.value=C,p.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,p.material.toneMapped=Jt.getTransfer(C.colorSpace)!==vn,C.matrixAutoUpdate===!0&&C.updateMatrix(),p.material.uniforms.uvTransform.value.copy(C.matrix),(S!==C||E!==C.version||_!==i.toneMapping)&&(p.material.needsUpdate=!0,S=C,E=C.version,_=i.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function w(O,k){O.getRGB(uf,Bg(i)),t.buffers.color.setClear(uf.r,uf.g,uf.b,k,c)}function M(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return u},setClearColor:function(O,k=1){u.set(O),d=k,w(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(O){d=O,w(u,d)},render:R,addToRenderList:N,dispose:M}}function zx(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},o=_(null);let c=o,u=!1;function d(G,q,ae,W,ue){let ye=!1;const _e=E(G,W,ae,q);c!==_e&&(c=_e,g(c.object)),ye=x(G,W,ae,ue),ye&&R(G,W,ae,ue),ue!==null&&e.update(ue,i.ELEMENT_ARRAY_BUFFER),(ye||u)&&(u=!1,C(G,q,ae,W),ue!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function p(){return i.createVertexArray()}function g(G){return i.bindVertexArray(G)}function S(G){return i.deleteVertexArray(G)}function E(G,q,ae,W){const ue=W.wireframe===!0;let ye=n[q.id];ye===void 0&&(ye={},n[q.id]=ye);const _e=G.isInstancedMesh===!0?G.id:0;let Te=ye[_e];Te===void 0&&(Te={},ye[_e]=Te);let ne=Te[ae.id];ne===void 0&&(ne={},Te[ae.id]=ne);let V=ne[ue];return V===void 0&&(V=_(p()),ne[ue]=V),V}function _(G){const q=[],ae=[],W=[];for(let ue=0;ue<t;ue++)q[ue]=0,ae[ue]=0,W[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:ae,attributeDivisors:W,object:G,attributes:{},index:null}}function x(G,q,ae,W){const ue=c.attributes,ye=q.attributes;let _e=0;const Te=ae.getAttributes();for(const ne in Te)if(Te[ne].location>=0){const xe=ue[ne];let ut=ye[ne];if(ut===void 0&&(ne==="instanceMatrix"&&G.instanceMatrix&&(ut=G.instanceMatrix),ne==="instanceColor"&&G.instanceColor&&(ut=G.instanceColor)),xe===void 0||xe.attribute!==ut||ut&&xe.data!==ut.data)return!0;_e++}return c.attributesNum!==_e||c.index!==W}function R(G,q,ae,W){const ue={},ye=q.attributes;let _e=0;const Te=ae.getAttributes();for(const ne in Te)if(Te[ne].location>=0){let xe=ye[ne];xe===void 0&&(ne==="instanceMatrix"&&G.instanceMatrix&&(xe=G.instanceMatrix),ne==="instanceColor"&&G.instanceColor&&(xe=G.instanceColor));const ut={};ut.attribute=xe,xe&&xe.data&&(ut.data=xe.data),ue[ne]=ut,_e++}c.attributes=ue,c.attributesNum=_e,c.index=W}function N(){const G=c.newAttributes;for(let q=0,ae=G.length;q<ae;q++)G[q]=0}function w(G){M(G,0)}function M(G,q){const ae=c.newAttributes,W=c.enabledAttributes,ue=c.attributeDivisors;ae[G]=1,W[G]===0&&(i.enableVertexAttribArray(G),W[G]=1),ue[G]!==q&&(i.vertexAttribDivisor(G,q),ue[G]=q)}function O(){const G=c.newAttributes,q=c.enabledAttributes;for(let ae=0,W=q.length;ae<W;ae++)q[ae]!==G[ae]&&(i.disableVertexAttribArray(ae),q[ae]=0)}function k(G,q,ae,W,ue,ye,_e){_e===!0?i.vertexAttribIPointer(G,q,ae,ue,ye):i.vertexAttribPointer(G,q,ae,W,ue,ye)}function C(G,q,ae,W){N();const ue=W.attributes,ye=ae.getAttributes(),_e=q.defaultAttributeValues;for(const Te in ye){const ne=ye[Te];if(ne.location>=0){let V=ue[Te];if(V===void 0&&(Te==="instanceMatrix"&&G.instanceMatrix&&(V=G.instanceMatrix),Te==="instanceColor"&&G.instanceColor&&(V=G.instanceColor)),V!==void 0){const xe=V.normalized,ut=V.itemSize,rt=e.get(V);if(rt===void 0)continue;const Ae=rt.buffer,se=rt.type,Lt=rt.bytesPerElement,me=se===i.INT||se===i.UNSIGNED_INT||V.gpuType===Ed;if(V.isInterleavedBufferAttribute){const ve=V.data,Ze=ve.stride,dt=V.offset;if(ve.isInstancedInterleavedBuffer){for(let We=0;We<ne.locationSize;We++)M(ne.location+We,ve.meshPerAttribute);G.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let We=0;We<ne.locationSize;We++)w(ne.location+We);i.bindBuffer(i.ARRAY_BUFFER,Ae);for(let We=0;We<ne.locationSize;We++)k(ne.location+We,ut/ne.locationSize,se,xe,Ze*Lt,(dt+ut/ne.locationSize*We)*Lt,me)}else{if(V.isInstancedBufferAttribute){for(let ve=0;ve<ne.locationSize;ve++)M(ne.location+ve,V.meshPerAttribute);G.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let ve=0;ve<ne.locationSize;ve++)w(ne.location+ve);i.bindBuffer(i.ARRAY_BUFFER,Ae);for(let ve=0;ve<ne.locationSize;ve++)k(ne.location+ve,ut/ne.locationSize,se,xe,ut*Lt,ut/ne.locationSize*ve*Lt,me)}}else if(_e!==void 0){const xe=_e[Te];if(xe!==void 0)switch(xe.length){case 2:i.vertexAttrib2fv(ne.location,xe);break;case 3:i.vertexAttrib3fv(ne.location,xe);break;case 4:i.vertexAttrib4fv(ne.location,xe);break;default:i.vertexAttrib1fv(ne.location,xe)}}}}O()}function F(){P();for(const G in n){const q=n[G];for(const ae in q){const W=q[ae];for(const ue in W){const ye=W[ue];for(const _e in ye)S(ye[_e].object),delete ye[_e];delete W[ue]}}delete n[G]}}function D(G){if(n[G.id]===void 0)return;const q=n[G.id];for(const ae in q){const W=q[ae];for(const ue in W){const ye=W[ue];for(const _e in ye)S(ye[_e].object),delete ye[_e];delete W[ue]}}delete n[G.id]}function H(G){for(const q in n){const ae=n[q];for(const W in ae){const ue=ae[W];if(ue[G.id]===void 0)continue;const ye=ue[G.id];for(const _e in ye)S(ye[_e].object),delete ye[_e];delete ue[G.id]}}}function y(G){for(const q in n){const ae=n[q],W=G.isInstancedMesh===!0?G.id:0,ue=ae[W];if(ue!==void 0){for(const ye in ue){const _e=ue[ye];for(const Te in _e)S(_e[Te].object),delete _e[Te];delete ue[ye]}delete ae[W],Object.keys(ae).length===0&&delete n[q]}}}function P(){z(),u=!0,c!==o&&(c=o,g(c.object))}function z(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:P,resetDefaultState:z,dispose:F,releaseStatesOfGeometry:D,releaseStatesOfObject:y,releaseStatesOfProgram:H,initAttributes:N,enableAttribute:w,disableUnusedAttributes:O}}function kx(i,e,t){let n;function o(p){n=p}function c(p,g){i.drawArrays(n,p,g),t.update(g,n,1)}function u(p,g,S){S!==0&&(i.drawArraysInstanced(n,p,g,S),t.update(g,n,S))}function d(p,g,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,p,0,g,0,S);let _=0;for(let x=0;x<S;x++)_+=g[x];t.update(_,n,1)}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=d}function Hx(i,e,t,n){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const H=e.get("EXT_texture_filter_anisotropic");o=i.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(H){return!(H!==ia&&n.convert(H)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(H){const y=H===Da&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(H!==hr&&H!==Ca&&!y&&n.convert(H)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function p(H){if(H==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=t.precision!==void 0?t.precision:"highp";const S=p(g);S!==g&&(yt("WebGLRenderer:",g,"not supported, using",S,"instead."),g=S);const E=t.logarithmicDepthBuffer===!0,_=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&_===!1&&yt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),R=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),N=i.getParameter(i.MAX_TEXTURE_SIZE),w=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),M=i.getParameter(i.MAX_VERTEX_ATTRIBS),O=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),k=i.getParameter(i.MAX_VARYING_VECTORS),C=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),F=i.getParameter(i.MAX_SAMPLES),D=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:d,precision:g,logarithmicDepthBuffer:E,reversedDepthBuffer:_,maxTextures:x,maxVertexTextures:R,maxTextureSize:N,maxCubemapSize:w,maxAttributes:M,maxVertexUniforms:O,maxVaryings:k,maxFragmentUniforms:C,maxSamples:F,samples:D}}function Gx(i){const e=this;let t=null,n=0,o=!1,c=!1;const u=new Gs,d=new wt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(E,_){const x=E.length!==0||_||n!==0||o;return o=_,n=E.length,x},this.beginShadows=function(){c=!0,S(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(E,_){t=S(E,_,0)},this.setState=function(E,_,x){const R=E.clippingPlanes,N=E.clipIntersection,w=E.clipShadows,M=i.get(E);if(!o||R===null||R.length===0||c&&!w)c?S(null):g();else{const O=c?0:n,k=O*4;let C=M.clippingState||null;p.value=C,C=S(R,_,k,x);for(let F=0;F!==k;++F)C[F]=t[F];M.clippingState=C,this.numIntersection=N?this.numPlanes:0,this.numPlanes+=O}};function g(){p.value!==t&&(p.value=t,p.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function S(E,_,x,R){const N=E!==null?E.length:0;let w=null;if(N!==0){if(w=p.value,R!==!0||w===null){const M=x+N*4,O=_.matrixWorldInverse;d.getNormalMatrix(O),(w===null||w.length<M)&&(w=new Float32Array(M));for(let k=0,C=x;k!==N;++k,C+=4)u.copy(E[k]).applyMatrix4(O,d),u.normal.toArray(w,C),w[C+3]=u.constant}p.value=w,p.needsUpdate=!0}return e.numPlanes=N,e.numIntersection=0,w}}const ec=4,Vx=6,Wx=20,Xx=256,Gc=new Hd,Fp=new At;let Ah=null,Rh=0,Ch=0,Ph=!1;const Yx=new K,Oo=new K;class Op{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,o=100,c={}){const{size:u=256,position:d=Yx}=c;Ah=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel(),Ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,n,o,p,d),t>0&&this._blur(p,0,0,t),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ah,Rh,Ch),this._renderer.xr.enabled=Ph,e.scissorTest=!1,Ql(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xo||e.mapping===ic?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ah=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel(),Ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pi,minFilter:Pi,generateMipmaps:!1,type:Da,format:ia,colorSpace:yf,depthBuffer:!1},o=Bp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bp(e,t,n);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Zx(c)),this._blurMaterial=Kx(c,e,t),this._ggxMaterial=Jx(c,e,t)}return o}_compileMaterial(e){const t=new Ii(new ir,e);this._renderer.compile(t,Gc)}_sceneToCubeUV(e,t,n,o,c){const p=new fr(90,1,t,n),g=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],E=this._renderer,_=E.autoClear,x=E.toneMapping;E.getClearColor(Fp),E.toneMapping=La,E.autoClear=!1,E.state.buffers.depth.getReversed()&&(E.setRenderTarget(o),E.clearDepth(),E.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ii(new Ws,new Ef({name:"PMREM.Background",side:nr,depthWrite:!1,depthTest:!1})));const N=this._backgroundBox,w=N.material;let M=!1;const O=e.background;O?O.isColor&&(w.color.copy(O),e.background=null,M=!0):(w.color.copy(Fp),M=!0);for(let k=0;k<6;k++){const C=k%3;C===0?(p.up.set(0,g[k],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+S[k],c.y,c.z)):C===1?(p.up.set(0,0,g[k]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+S[k],c.z)):(p.up.set(0,g[k],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+S[k]));const F=this._cubeSize;Ql(o,C*F,k>2?F:0,F,F),E.setRenderTarget(o),M&&E.render(N,p),E.render(e,p)}E.toneMapping=x,E.autoClear=_,e.background=O}_textureToCubeUV(e,t){const n=this._renderer,o=e.mapping===Xo||e.mapping===ic;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=kp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zp());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const d=c.uniforms;d.envMap.value=e;const p=this._cubeSize;Ql(t,0,0,3*p,2*p),n.setRenderTarget(t),n.render(u,Gc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);t.autoClear=n}_applyGGXFilter(e,t,n){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[n];d.material=u;const p=u.uniforms,g=n/(this._lodMeshes.length-1),S=t/(this._lodMeshes.length-1),E=Math.sqrt(g*g-S*S),_=g*1.25,x=E*_,{_lodMax:R}=this,N=this._sizeLods[n],w=3*N*(n>R-ec?n-R+ec:0),M=4*(this._cubeSize-N);p.envMap.value=e.texture,p.roughness.value=x,p.mipInt.value=R-t,Ql(c,w,M,3*N,2*N),o.setRenderTarget(c),o.render(d,Gc),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=R-n,Ql(e,w,M,3*N,2*N),o.setRenderTarget(e),o.render(d,Gc)}_blur(e,t,n,o){const c=this._pingPongRenderTarget,u=Math.min(o,Math.PI)/Math.SQRT2;this._blurPass(e,c,t,n,u),this._blurPass(c,e,n,n,u)}_blurPass(e,t,n,o,c){const u=this._renderer,d=this._blurMaterial,p=this._lodMeshes[o];p.material=d;const g=d.uniforms;g.envMap.value=e.texture,g.sigma.value=c,g.mipInt.value=this._lodMax-n;const S=this._sizeLods[o],E=3*S*(o>this._lodMax-ec?o-this._lodMax+ec:0),_=4*(this._cubeSize-S);Ql(t,E,_,3*S,2*S),u.setRenderTarget(t),u.render(p,Gc)}}function Zx(i){const e=[],t=[];let n=i;const o=i-ec+1+Vx;for(let c=0;c<o;c++){const u=Math.pow(2,n);e.push(u);const d=1/(u-2),p=-d,g=1+d,S=[p,p,g,p,g,g,p,p,g,g,p,g],E=6,_=6,x=3,R=new Float32Array(x*_*E),N=new Float32Array(x*_*E);for(let M=0;M<E;M++){const O=M%3*2/3-1,k=M>2?0:-1,C=[O,k,0,O+2/3,k,0,O+2/3,k+1,0,O,k,0,O+2/3,k+1,0,O,k+1,0];R.set(C,x*_*M);for(let F=0;F<_;F++){const D=S[F*2]*2-1,H=S[F*2+1]*2-1;M===0?Oo.set(1,H,D):M===1?Oo.set(-D,1,-H):M===2?Oo.set(-D,H,1):M===3?Oo.set(-1,H,-D):M===4?Oo.set(-D,-1,H):Oo.set(D,H,-1),Oo.toArray(N,(M*_+F)*x)}}const w=new ir;w.setAttribute("position",new ms(R,x)),w.setAttribute("outputDirection",new ms(N,x)),t.push(new Ii(w,null)),n>ec&&n--}return{lodMeshes:t,sizeLods:e}}function Bp(i,e,t){const n=new ra(i,e,t);return n.texture.mapping=Af,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ql(i,e,t,n,o){i.viewport.set(e,t,n,o),i.scissor.set(e,t,n,o)}function Jx(i,e,t){return new Na({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Xx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pf(),fragmentShader:`

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
		`,blending:ps,depthTest:!1,depthWrite:!1})}function Kx(i,e,t){return new Na({name:"SphericalGaussianBlur",defines:{SAMPLES:Wx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Pf(),fragmentShader:`

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
		`,blending:ps,depthTest:!1,depthWrite:!1})}function zp(){return new Na({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pf(),fragmentShader:`

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
		`,blending:ps,depthTest:!1,depthWrite:!1})}function kp(){return new Na({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ps,depthTest:!1,depthWrite:!1})}function Pf(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Wg extends ra{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},o=[n,n,n,n,n,n];this.texture=new Dg(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Ws(5,5,5),c=new Na({name:"CubemapFromEquirect",uniforms:ac(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nr,blending:ps});c.uniforms.tEquirect.value=t;const u=new Ii(o,c),d=t.minFilter;return t.minFilter===Ho&&(t.minFilter=Pi),new j0(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,n=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,n,o);e.setRenderTarget(c)}}function Qx(i){let e=new WeakMap,t=new WeakMap,n=null;function o(_,x=!1){return _==null?null:x?u(_):c(_)}function c(_){if(_&&_.isTexture){const x=_.mapping;if(x===$f||x===eh)if(e.has(_)){const R=e.get(_).texture;return d(R,_.mapping)}else{const R=_.image;if(R&&R.height>0){const N=new Wg(R.height);return N.fromEquirectangularTexture(i,_),e.set(_,N),_.addEventListener("dispose",g),d(N.texture,_.mapping)}else return null}}return _}function u(_){if(_&&_.isTexture){const x=_.mapping,R=x===$f||x===eh,N=x===Xo||x===ic;if(R||N){let w=t.get(_);const M=w!==void 0?w.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==M)return n===null&&(n=new Op(i)),w=R?n.fromEquirectangular(_,w):n.fromCubemap(_,w),w.texture.pmremVersion=_.pmremVersion,t.set(_,w),w.texture;if(w!==void 0)return w.texture;{const O=_.image;return R&&O&&O.height>0||N&&O&&p(O)?(n===null&&(n=new Op(i)),w=R?n.fromEquirectangular(_):n.fromCubemap(_),w.texture.pmremVersion=_.pmremVersion,t.set(_,w),_.addEventListener("dispose",S),w.texture):null}}}return _}function d(_,x){return x===$f?_.mapping=Xo:x===eh&&(_.mapping=ic),_}function p(_){let x=0;const R=6;for(let N=0;N<R;N++)_[N]!==void 0&&x++;return x===R}function g(_){const x=_.target;x.removeEventListener("dispose",g);const R=e.get(x);R!==void 0&&(e.delete(x),R.dispose())}function S(_){const x=_.target;x.removeEventListener("dispose",S);const R=t.get(x);R!==void 0&&(t.delete(x),R.dispose())}function E(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:o,dispose:E}}function qx(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const o=i.getExtension(n);return e[n]=o,o}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const o=t(n);return o===null&&tc("WebGLRenderer: "+n+" extension not supported."),o}}}function jx(i,e,t,n){const o={},c=new WeakMap;function u(E){const _=E.target;_.index!==null&&e.remove(_.index);for(const R in _.attributes)e.remove(_.attributes[R]);_.removeEventListener("dispose",u),delete o[_.id];const x=c.get(_);x&&(e.remove(x),c.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function d(E,_){return o[_.id]===!0||(_.addEventListener("dispose",u),o[_.id]=!0,t.memory.geometries++),_}function p(E){const _=E.attributes;for(const x in _)e.update(_[x],i.ARRAY_BUFFER)}function g(E){const _=[],x=E.index,R=E.attributes.position;let N=0;if(R===void 0)return;if(x!==null){const O=x.array;N=x.version;for(let k=0,C=O.length;k<C;k+=3){const F=O[k+0],D=O[k+1],H=O[k+2];_.push(F,D,D,H,H,F)}}else{const O=R.array;N=R.version;for(let k=0,C=O.length/3-1;k<C;k+=3){const F=k+0,D=k+1,H=k+2;_.push(F,D,D,H,H,F)}}const w=new(R.count>=65535?Lg:Pg)(_,1);w.version=N;const M=c.get(E);M&&e.remove(M),c.set(E,w)}function S(E){const _=c.get(E);if(_){const x=E.index;x!==null&&_.version<x.version&&g(E)}else g(E);return c.get(E)}return{get:d,update:p,getWireframeAttribute:S}}function $x(i,e,t){let n;function o(E){n=E}let c,u;function d(E){c=E.type,u=E.bytesPerElement}function p(E,_){i.drawElements(n,_,c,E*u),t.update(_,n,1)}function g(E,_,x){x!==0&&(i.drawElementsInstanced(n,_,c,E*u,x),t.update(_,n,x))}function S(E,_,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,_,0,c,E,0,x);let N=0;for(let w=0;w<x;w++)N+=_[w];t.update(N,n,1)}this.setMode=o,this.setIndex=d,this.render=p,this.renderInstances=g,this.renderMultiDraw=S}function eM(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(c,u,d){switch(t.calls++,u){case i.TRIANGLES:t.triangles+=d*(c/3);break;case i.LINES:t.lines+=d*(c/2);break;case i.LINE_STRIP:t.lines+=d*(c-1);break;case i.LINE_LOOP:t.lines+=d*c;break;case i.POINTS:t.points+=d*c;break;default:en("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:n}}function tM(i,e,t){const n=new WeakMap,o=new Hn;function c(u,d,p){const g=u.morphTargetInfluences,S=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,E=S!==void 0?S.length:0;let _=n.get(d);if(_===void 0||_.count!==E){let P=function(){H.dispose(),n.delete(d),d.removeEventListener("dispose",P)};_!==void 0&&_.texture.dispose();const x=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,N=d.morphAttributes.color!==void 0,w=d.morphAttributes.position||[],M=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let k=0;x===!0&&(k=1),R===!0&&(k=2),N===!0&&(k=3);let C=d.attributes.position.count*k,F=1;C>e.maxTextureSize&&(F=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const D=new Float32Array(C*F*4*E),H=new Rg(D,C,F,E);H.type=Ca,H.needsUpdate=!0;const y=k*4;for(let z=0;z<E;z++){const G=w[z],q=M[z],ae=O[z],W=C*F*4*z;for(let ue=0;ue<G.count;ue++){const ye=ue*y;x===!0&&(o.fromBufferAttribute(G,ue),D[W+ye+0]=o.x,D[W+ye+1]=o.y,D[W+ye+2]=o.z,D[W+ye+3]=0),R===!0&&(o.fromBufferAttribute(q,ue),D[W+ye+4]=o.x,D[W+ye+5]=o.y,D[W+ye+6]=o.z,D[W+ye+7]=0),N===!0&&(o.fromBufferAttribute(ae,ue),D[W+ye+8]=o.x,D[W+ye+9]=o.y,D[W+ye+10]=o.z,D[W+ye+11]=ae.itemSize===4?o.w:1)}}_={count:E,texture:H,size:new ft(C,F)},n.set(d,_),d.addEventListener("dispose",P)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(i,"morphTexture",u.morphTexture,t);else{let x=0;for(let N=0;N<g.length;N++)x+=g[N];const R=d.morphTargetsRelative?1:1-x;p.getUniforms().setValue(i,"morphTargetBaseInfluence",R),p.getUniforms().setValue(i,"morphTargetInfluences",g)}p.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),p.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}return{update:c}}function nM(i,e,t,n,o){let c=new WeakMap;function u(g){const S=o.render.frame,E=g.geometry,_=e.get(g,E);if(c.get(_)!==S&&(e.update(_),c.set(_,S)),g.isInstancedMesh&&(g.hasEventListener("dispose",p)===!1&&g.addEventListener("dispose",p),c.get(g)!==S&&(t.update(g.instanceMatrix,i.ARRAY_BUFFER),g.instanceColor!==null&&t.update(g.instanceColor,i.ARRAY_BUFFER),c.set(g,S))),g.isSkinnedMesh){const x=g.skeleton;c.get(x)!==S&&(x.update(),c.set(x,S))}return _}function d(){c=new WeakMap}function p(g){const S=g.target;S.removeEventListener("dispose",p),n.releaseStatesOfObject(S),t.remove(S.instanceMatrix),S.instanceColor!==null&&t.remove(S.instanceColor)}return{update:u,dispose:d}}const iM={[hg]:"LINEAR_TONE_MAPPING",[dg]:"REINHARD_TONE_MAPPING",[pg]:"CINEON_TONE_MAPPING",[gg]:"ACES_FILMIC_TONE_MAPPING",[vg]:"AGX_TONE_MAPPING",[_g]:"NEUTRAL_TONE_MAPPING",[mg]:"CUSTOM_TONE_MAPPING"};function rM(i,e,t,n,o,c){const u=new ra(e,t,{type:i,depthBuffer:o,stencilBuffer:c,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let d=null,p=null;const g=new ir;g.setAttribute("position",new On([-1,3,0,-1,-1,0,3,-1,0],3)),g.setAttribute("uv",new On([0,2,0,0,2,0],2));const S=new V0({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),E=new Ii(g,S),_=new Hd(-1,1,1,-1,0,1);let x=null,R=null,N=!1,w,M=null,O=[],k=!1;this.setSize=function(C,F){u.setSize(C,F),d!==null&&d.setSize(C,F),p!==null&&p.setSize(C,F);for(let D=0;D<O.length;D++){const H=O[D];H.setSize&&H.setSize(C,F)}},this.setEffects=function(C){O=C,k=O.length>0&&O[0].isRenderPass===!0;const F=u.width,D=u.height;O.length>0&&d===null&&(d=new ra(F,D,{type:Da,depthBuffer:!1,stencilBuffer:!1}),p=new ra(F,D,{type:Da,depthBuffer:!1,stencilBuffer:!1}));for(let H=0;H<O.length;H++){const y=O[H];y.setSize&&y.setSize(F,D)}},this.begin=function(C,F){if(N||C.toneMapping===La&&O.length===0)return!1;if(M=F,F!==null){const D=F.width,H=F.height;(u.width!==D||u.height!==H)&&this.setSize(D,H)}return k===!1&&C.setRenderTarget(u),w=C.toneMapping,C.toneMapping=La,!0},this.hasRenderPass=function(){return k},this.end=function(C,F){C.toneMapping=w,N=!0;let D=u,H=d;for(let y=0;y<O.length;y++){const P=O[y];P.enabled!==!1&&(P.render(C,H,D,F),P.needsSwap!==!1&&(D=H,H=H===d?p:d))}if(x!==C.outputColorSpace||R!==C.toneMapping){x=C.outputColorSpace,R=C.toneMapping,S.defines={},Jt.getTransfer(x)===vn&&(S.defines.SRGB_TRANSFER="");const y=iM[R];y&&(S.defines[y]=""),S.needsUpdate=!0}S.uniforms.tDiffuse.value=D.texture,C.setRenderTarget(M),C.render(E,_),M=null,N=!1},this.isCompositing=function(){return N},this.dispose=function(){u.dispose(),d!==null&&d.dispose(),p!==null&&p.dispose(),g.dispose(),S.dispose()}}const Xg=new Li,Md=new iu(1,1),Yg=new Rg,Zg=new a0,Jg=new Dg,Hp=[],Gp=[],Vp=new Float32Array(16),Wp=new Float32Array(9),Xp=new Float32Array(4);function cc(i,e,t){const n=i[0];if(n<=0||n>0)return i;const o=e*t;let c=Hp[o];if(c===void 0&&(c=new Float32Array(o),Hp[o]=c),e!==0){n.toArray(c,0);for(let u=1,d=0;u!==e;++u)d+=t,i[u].toArray(c,d)}return c}function oi(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function li(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Lf(i,e){let t=Gp[e];t===void 0&&(t=new Int32Array(e),Gp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function aM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function sM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(oi(t,e))return;i.uniform2fv(this.addr,e),li(t,e)}}function oM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(oi(t,e))return;i.uniform3fv(this.addr,e),li(t,e)}}function lM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(oi(t,e))return;i.uniform4fv(this.addr,e),li(t,e)}}function cM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(oi(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),li(t,e)}else{if(oi(t,n))return;Xp.set(n),i.uniformMatrix2fv(this.addr,!1,Xp),li(t,n)}}function uM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(oi(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),li(t,e)}else{if(oi(t,n))return;Wp.set(n),i.uniformMatrix3fv(this.addr,!1,Wp),li(t,n)}}function fM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(oi(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),li(t,e)}else{if(oi(t,n))return;Vp.set(n),i.uniformMatrix4fv(this.addr,!1,Vp),li(t,n)}}function hM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function dM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(oi(t,e))return;i.uniform2iv(this.addr,e),li(t,e)}}function pM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(oi(t,e))return;i.uniform3iv(this.addr,e),li(t,e)}}function gM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(oi(t,e))return;i.uniform4iv(this.addr,e),li(t,e)}}function mM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function vM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(oi(t,e))return;i.uniform2uiv(this.addr,e),li(t,e)}}function _M(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(oi(t,e))return;i.uniform3uiv(this.addr,e),li(t,e)}}function xM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(oi(t,e))return;i.uniform4uiv(this.addr,e),li(t,e)}}function MM(i,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o);let c;this.type===i.SAMPLER_2D_SHADOW?(Md.compareFunction=t.isReversedDepthBuffer()?Ld:Pd,c=Md):c=Xg,t.setTexture2D(e||c,o)}function yM(i,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),t.setTexture3D(e||Zg,o)}function SM(i,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),t.setTextureCube(e||Jg,o)}function bM(i,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),t.setTexture2DArray(e||Yg,o)}function EM(i){switch(i){case 5126:return aM;case 35664:return sM;case 35665:return oM;case 35666:return lM;case 35674:return cM;case 35675:return uM;case 35676:return fM;case 5124:case 35670:return hM;case 35667:case 35671:return dM;case 35668:case 35672:return pM;case 35669:case 35673:return gM;case 5125:return mM;case 36294:return vM;case 36295:return _M;case 36296:return xM;case 35678:case 36198:case 36298:case 36306:case 35682:return MM;case 35679:case 36299:case 36307:return yM;case 35680:case 36300:case 36308:case 36293:return SM;case 36289:case 36303:case 36311:case 36292:return bM}}function TM(i,e){i.uniform1fv(this.addr,e)}function wM(i,e){const t=cc(e,this.size,2);i.uniform2fv(this.addr,t)}function AM(i,e){const t=cc(e,this.size,3);i.uniform3fv(this.addr,t)}function RM(i,e){const t=cc(e,this.size,4);i.uniform4fv(this.addr,t)}function CM(i,e){const t=cc(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function PM(i,e){const t=cc(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function LM(i,e){const t=cc(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function IM(i,e){i.uniform1iv(this.addr,e)}function DM(i,e){i.uniform2iv(this.addr,e)}function NM(i,e){i.uniform3iv(this.addr,e)}function UM(i,e){i.uniform4iv(this.addr,e)}function FM(i,e){i.uniform1uiv(this.addr,e)}function OM(i,e){i.uniform2uiv(this.addr,e)}function BM(i,e){i.uniform3uiv(this.addr,e)}function zM(i,e){i.uniform4uiv(this.addr,e)}function kM(i,e,t){const n=this.cache,o=e.length,c=Lf(t,o);oi(n,c)||(i.uniform1iv(this.addr,c),li(n,c));let u;this.type===i.SAMPLER_2D_SHADOW?u=Md:u=Xg;for(let d=0;d!==o;++d)t.setTexture2D(e[d]||u,c[d])}function HM(i,e,t){const n=this.cache,o=e.length,c=Lf(t,o);oi(n,c)||(i.uniform1iv(this.addr,c),li(n,c));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||Zg,c[u])}function GM(i,e,t){const n=this.cache,o=e.length,c=Lf(t,o);oi(n,c)||(i.uniform1iv(this.addr,c),li(n,c));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||Jg,c[u])}function VM(i,e,t){const n=this.cache,o=e.length,c=Lf(t,o);oi(n,c)||(i.uniform1iv(this.addr,c),li(n,c));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||Yg,c[u])}function WM(i){switch(i){case 5126:return TM;case 35664:return wM;case 35665:return AM;case 35666:return RM;case 35674:return CM;case 35675:return PM;case 35676:return LM;case 5124:case 35670:return IM;case 35667:case 35671:return DM;case 35668:case 35672:return NM;case 35669:case 35673:return UM;case 5125:return FM;case 36294:return OM;case 36295:return BM;case 36296:return zM;case 35678:case 36198:case 36298:case 36306:case 35682:return kM;case 35679:case 36299:case 36307:return HM;case 35680:case 36300:case 36308:case 36293:return GM;case 36289:case 36303:case 36311:case 36292:return VM}}class XM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=EM(t.type)}}class YM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=WM(t.type)}}class ZM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const d=o[c];d.setValue(e,t[d.id],n)}}}const Lh=/(\w+)(\])?(\[|\.)?/g;function Yp(i,e){i.seq.push(e),i.map[e.id]=e}function JM(i,e,t){const n=i.name,o=n.length;for(Lh.lastIndex=0;;){const c=Lh.exec(n),u=Lh.lastIndex;let d=c[1];const p=c[2]==="]",g=c[3];if(p&&(d=d|0),g===void 0||g==="["&&u+2===o){Yp(t,g===void 0?new XM(d,i,e):new YM(d,i,e));break}else{let E=t.map[d];E===void 0&&(E=new ZM(d),Yp(t,E)),t=E}}}class vf{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<n;++u){const d=e.getActiveUniform(t,u),p=e.getUniformLocation(t,d.name);JM(d,p,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,t,n,o){const c=this.map[t];c!==void 0&&c.setValue(e,n,o)}setOptional(e,t,n){const o=t[n];o!==void 0&&this.setValue(e,n,o)}static upload(e,t,n,o){for(let c=0,u=t.length;c!==u;++c){const d=t[c],p=n[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,o)}}static seqWithValue(e,t){const n=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in t&&n.push(u)}return n}}function Zp(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const KM=37297;let QM=0;function qM(i,e){const t=i.split(`
`),n=[],o=Math.max(e-6,0),c=Math.min(e+6,t.length);for(let u=o;u<c;u++){const d=u+1;n.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return n.join(`
`)}const Jp=new wt;function jM(i){Jt._getMatrix(Jp,Jt.workingColorSpace,i);const e=`mat3( ${Jp.elements.map(t=>t.toFixed(4))} )`;switch(Jt.getTransfer(i)){case Sf:return[e,"LinearTransferOETF"];case vn:return[e,"sRGBTransferOETF"];default:return yt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Kp(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),c=(i.getShaderInfoLog(e)||"").trim();if(n&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const d=parseInt(u[1]);return t.toUpperCase()+`

`+c+`

`+qM(i.getShaderSource(e),d)}else return c}function $M(i,e){const t=jM(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const ey={[hg]:"Linear",[dg]:"Reinhard",[pg]:"Cineon",[gg]:"ACESFilmic",[vg]:"AgX",[_g]:"Neutral",[mg]:"Custom"};function ty(i,e){const t=ey[e];return t===void 0?(yt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ff=new K;function ny(){Jt.getLuminanceCoefficients(ff);const i=ff.x.toFixed(4),e=ff.y.toFixed(4),t=ff.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yc).join(`
`)}function ry(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ay(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let o=0;o<n;o++){const c=i.getActiveAttrib(e,o),u=c.name;let d=1;c.type===i.FLOAT_MAT2&&(d=2),c.type===i.FLOAT_MAT3&&(d=3),c.type===i.FLOAT_MAT4&&(d=4),t[u]={type:c.type,location:i.getAttribLocation(e,u),locationSize:d}}return t}function Yc(i){return i!==""}function Qp(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sy=/^[ \t]*#include +<([\w\d./]+)>/gm;function yd(i){return i.replace(sy,ly)}const oy=new Map;function ly(i,e){let t=Bt[e];if(t===void 0){const n=oy.get(e);if(n!==void 0)t=Bt[n],yt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return yd(t)}const cy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jp(i){return i.replace(cy,uy)}function uy(i,e,t,n){let o="";for(let c=parseInt(e);c<parseInt(t);c++)o+=n.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function $p(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const fy={[hf]:"SHADOWMAP_TYPE_PCF",[Xc]:"SHADOWMAP_TYPE_VSM"};function hy(i){return fy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const dy={[Xo]:"ENVMAP_TYPE_CUBE",[ic]:"ENVMAP_TYPE_CUBE",[Af]:"ENVMAP_TYPE_CUBE_UV"};function py(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":dy[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const gy={[ic]:"ENVMAP_MODE_REFRACTION"};function my(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":gy[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const vy={[bd]:"ENVMAP_BLENDING_MULTIPLY",[ym]:"ENVMAP_BLENDING_MIX",[Sm]:"ENVMAP_BLENDING_ADD"};function _y(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":vy[i.combine]||"ENVMAP_BLENDING_NONE"}function xy(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function My(i,e,t,n){const o=i.getContext(),c=t.defines;let u=t.vertexShader,d=t.fragmentShader;const p=hy(t),g=py(t),S=my(t),E=_y(t),_=xy(t),x=iy(t),R=ry(c),N=o.createProgram();let w,M,O=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(w=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,R].filter(Yc).join(`
`),w.length>0&&(w+=`
`),M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,R].filter(Yc).join(`
`),M.length>0&&(M+=`
`)):(w=[$p(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,R,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+S:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yc).join(`
`),M=[$p(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,R,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.envMap?"#define "+S:"",t.envMap?"#define "+E:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==La?"#define TONE_MAPPING":"",t.toneMapping!==La?Bt.tonemapping_pars_fragment:"",t.toneMapping!==La?ty("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,$M("linearToOutputTexel",t.outputColorSpace),ny(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yc).join(`
`)),u=yd(u),u=Qp(u,t),u=qp(u,t),d=yd(d),d=Qp(d,t),d=qp(d,t),u=jp(u),d=jp(d),t.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,w=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+w,M=["#define varying in",t.glslVersion===ap?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ap?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const k=O+w+u,C=O+M+d,F=Zp(o,o.VERTEX_SHADER,k),D=Zp(o,o.FRAGMENT_SHADER,C);o.attachShader(N,F),o.attachShader(N,D),t.index0AttributeName!==void 0?o.bindAttribLocation(N,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(N,0,"position"),o.linkProgram(N);function H(G){if(i.debug.checkShaderErrors){const q=o.getProgramInfoLog(N)||"",ae=o.getShaderInfoLog(F)||"",W=o.getShaderInfoLog(D)||"",ue=q.trim(),ye=ae.trim(),_e=W.trim();let Te=!0,ne=!0;if(o.getProgramParameter(N,o.LINK_STATUS)===!1)if(Te=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,N,F,D);else{const V=Kp(o,F,"vertex"),xe=Kp(o,D,"fragment");en("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(N,o.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ue+`
`+V+`
`+xe)}else ue!==""?yt("WebGLProgram: Program Info Log:",ue):(ye===""||_e==="")&&(ne=!1);ne&&(G.diagnostics={runnable:Te,programLog:ue,vertexShader:{log:ye,prefix:w},fragmentShader:{log:_e,prefix:M}})}o.deleteShader(F),o.deleteShader(D),y=new vf(o,N),P=ay(o,N)}let y;this.getUniforms=function(){return y===void 0&&H(this),y};let P;this.getAttributes=function(){return P===void 0&&H(this),P};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=o.getProgramParameter(N,KM)),z},this.destroy=function(){n.releaseStatesOfProgram(this),o.deleteProgram(N),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=QM++,this.cacheKey=e,this.usedTimes=1,this.program=N,this.vertexShader=F,this.fragmentShader=D,this}let yy=0;class Sy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(n)===!1&&(o.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new by(e),t.set(e,n)),n}}class by{constructor(e){this.id=yy++,this.code=e,this.usedTimes=0}}function Ey(i){return i===Yo||i===_f||i===xf}function Ty(i,e,t,n,o,c){const u=new Nd,d=new Sy,p=new Set,g=[],S=new Map,E=n.logarithmicDepthBuffer;let _=n.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(y){return p.add(y),y===0?"uv":`uv${y}`}function N(y,P,z,G,q,ae){const W=G.fog,ue=q.geometry,ye=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?G.environment:null,_e=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,Te=e.get(y.envMap||ye,_e),ne=Te&&Te.mapping===Af?Te.image.height:null,V=x[y.type];y.precision!==null&&(_=n.getMaxPrecision(y.precision),_!==y.precision&&yt("WebGLProgram.getParameters:",y.precision,"not supported, using",_,"instead."));const xe=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,ut=xe!==void 0?xe.length:0;let rt=0;ue.morphAttributes.position!==void 0&&(rt=1),ue.morphAttributes.normal!==void 0&&(rt=2),ue.morphAttributes.color!==void 0&&(rt=3);let Ae,se,Lt,me;if(V){const Me=Ra[V];Ae=Me.vertexShader,se=Me.fragmentShader}else{Ae=y.vertexShader,se=y.fragmentShader;const Me=d.getVertexShaderStage(y),Pe=d.getFragmentShaderStage(y);d.update(y,Me,Pe),Lt=Me.id,me=Pe.id}const ve=i.getRenderTarget(),Ze=i.state.buffers.depth.getReversed(),dt=q.isInstancedMesh===!0,We=q.isBatchedMesh===!0,vt=!!y.map,Pt=!!y.matcap,pt=!!Te,It=!!y.aoMap,Xe=!!y.lightMap,xt=!!y.bumpMap&&y.wireframe===!1,tn=!!y.normalMap,Gt=!!y.displacementMap,Mn=!!y.emissiveMap,Dt=!!y.metalnessMap,Yt=!!y.roughnessMap,Y=y.anisotropy>0,zt=y.clearcoat>0,gt=y.dispersion>0,B=y.retroreflectivity>0,A=y.iridescence>0,ie=y.sheen>0,te=y.transmission>0,ge=Y&&!!y.anisotropyMap,Ne=zt&&!!y.clearcoatMap,Fe=zt&&!!y.clearcoatNormalMap,pe=zt&&!!y.clearcoatRoughnessMap,Ee=A&&!!y.iridescenceMap,ke=A&&!!y.iridescenceThicknessMap,Qe=ie&&!!y.sheenColorMap,Be=ie&&!!y.sheenRoughnessMap,Ue=!!y.specularMap,st=!!y.specularColorMap,lt=!!y.specularIntensityMap,_t=te&&!!y.transmissionMap,J=te&&!!y.thicknessMap,we=!!y.gradientMap,Se=!!y.alphaMap,Oe=y.alphaTest>0,ze=!!y.alphaHash,Re=!!y.extensions;let at=La;y.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(at=i.toneMapping);const it={shaderID:V,shaderType:y.type,shaderName:y.name,vertexShader:Ae,fragmentShader:se,defines:y.defines,customVertexShaderID:Lt,customFragmentShaderID:me,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:_,batching:We,batchingColor:We&&q._colorsTexture!==null,instancing:dt,instancingColor:dt&&q.instanceColor!==null,instancingMorph:dt&&q.morphTexture!==null,outputColorSpace:ve===null?i.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Jt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:vt,matcap:Pt,envMap:pt,envMapMode:pt&&Te.mapping,envMapCubeUVHeight:ne,aoMap:It,lightMap:Xe,bumpMap:xt,normalMap:tn,displacementMap:Gt,emissiveMap:Mn,normalMapObjectSpace:tn&&y.normalMapType===Tm,normalMapTangentSpace:tn&&y.normalMapType===Mf,packedNormalMap:tn&&y.normalMapType===Mf&&Ey(y.normalMap.format),metalnessMap:Dt,roughnessMap:Yt,anisotropy:Y,anisotropyMap:ge,clearcoat:zt,clearcoatMap:Ne,clearcoatNormalMap:Fe,clearcoatRoughnessMap:pe,dispersion:gt,retroreflection:B,iridescence:A,iridescenceMap:Ee,iridescenceThicknessMap:ke,sheen:ie,sheenColorMap:Qe,sheenRoughnessMap:Be,specularMap:Ue,specularColorMap:st,specularIntensityMap:lt,transmission:te,transmissionMap:_t,thicknessMap:J,gradientMap:we,opaque:y.transparent===!1&&y.blending===Zc&&y.alphaToCoverage===!1,alphaMap:Se,alphaTest:Oe,alphaHash:ze,combine:y.combine,mapUv:vt&&R(y.map.channel),aoMapUv:It&&R(y.aoMap.channel),lightMapUv:Xe&&R(y.lightMap.channel),bumpMapUv:xt&&R(y.bumpMap.channel),normalMapUv:tn&&R(y.normalMap.channel),displacementMapUv:Gt&&R(y.displacementMap.channel),emissiveMapUv:Mn&&R(y.emissiveMap.channel),metalnessMapUv:Dt&&R(y.metalnessMap.channel),roughnessMapUv:Yt&&R(y.roughnessMap.channel),anisotropyMapUv:ge&&R(y.anisotropyMap.channel),clearcoatMapUv:Ne&&R(y.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&R(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&R(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&R(y.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&R(y.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&R(y.sheenColorMap.channel),sheenRoughnessMapUv:Be&&R(y.sheenRoughnessMap.channel),specularMapUv:Ue&&R(y.specularMap.channel),specularColorMapUv:st&&R(y.specularColorMap.channel),specularIntensityMapUv:lt&&R(y.specularIntensityMap.channel),transmissionMapUv:_t&&R(y.transmissionMap.channel),thicknessMapUv:J&&R(y.thicknessMap.channel),alphaMapUv:Se&&R(y.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(tn||Y),vertexNormals:!!ue.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!ue.attributes.uv&&(vt||Se),fog:!!W,useFog:y.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||ue.attributes.normal===void 0&&tn===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:E,reversedDepthBuffer:Ze,skinning:q.isSkinnedMesh===!0,hasPositionAttribute:ue.attributes.position!==void 0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:rt,numSunLights:P.sun.length,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numSunLightShadows:P.sunShadowMap.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:ae.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:at,decodeVideoTexture:vt&&y.map.isVideoTexture===!0&&Jt.getTransfer(y.map.colorSpace)===vn,decodeVideoTextureEmissive:Mn&&y.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(y.emissiveMap.colorSpace)===vn,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Dr,flipSided:y.side===nr,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Re&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&y.extensions.multiDraw===!0||We)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return it.vertexUv1s=p.has(1),it.vertexUv2s=p.has(2),it.vertexUv3s=p.has(3),p.clear(),it}function w(y){const P=[];if(y.shaderID?P.push(y.shaderID):(P.push(y.customVertexShaderID),P.push(y.customFragmentShaderID)),y.defines!==void 0)for(const z in y.defines)P.push(z),P.push(y.defines[z]);return y.isRawShaderMaterial===!1&&(M(P,y),O(P,y),P.push(i.outputColorSpace)),P.push(y.customProgramCacheKey),P.join()}function M(y,P){y.push(P.precision),y.push(P.outputColorSpace),y.push(P.envMapMode),y.push(P.envMapCubeUVHeight),y.push(P.mapUv),y.push(P.alphaMapUv),y.push(P.lightMapUv),y.push(P.aoMapUv),y.push(P.bumpMapUv),y.push(P.normalMapUv),y.push(P.displacementMapUv),y.push(P.emissiveMapUv),y.push(P.metalnessMapUv),y.push(P.roughnessMapUv),y.push(P.anisotropyMapUv),y.push(P.clearcoatMapUv),y.push(P.clearcoatNormalMapUv),y.push(P.clearcoatRoughnessMapUv),y.push(P.iridescenceMapUv),y.push(P.iridescenceThicknessMapUv),y.push(P.sheenColorMapUv),y.push(P.sheenRoughnessMapUv),y.push(P.specularMapUv),y.push(P.specularColorMapUv),y.push(P.specularIntensityMapUv),y.push(P.transmissionMapUv),y.push(P.thicknessMapUv),y.push(P.combine),y.push(P.fogExp2),y.push(P.sizeAttenuation),y.push(P.morphTargetsCount),y.push(P.morphAttributeCount),y.push(P.numSunLights),y.push(P.numDirLights),y.push(P.numPointLights),y.push(P.numSpotLights),y.push(P.numSpotLightMaps),y.push(P.numHemiLights),y.push(P.numRectAreaLights),y.push(P.numSunLightShadows),y.push(P.numDirLightShadows),y.push(P.numPointLightShadows),y.push(P.numSpotLightShadows),y.push(P.numSpotLightShadowsWithMaps),y.push(P.numLightProbes),y.push(P.shadowMapType),y.push(P.toneMapping),y.push(P.numClippingPlanes),y.push(P.numClipIntersection),y.push(P.depthPacking)}function O(y,P){u.disableAll(),P.instancing&&u.enable(0),P.instancingColor&&u.enable(1),P.instancingMorph&&u.enable(2),P.matcap&&u.enable(3),P.envMap&&u.enable(4),P.normalMapObjectSpace&&u.enable(5),P.normalMapTangentSpace&&u.enable(6),P.clearcoat&&u.enable(7),P.iridescence&&u.enable(8),P.alphaTest&&u.enable(9),P.vertexColors&&u.enable(10),P.vertexAlphas&&u.enable(11),P.vertexUv1s&&u.enable(12),P.vertexUv2s&&u.enable(13),P.vertexUv3s&&u.enable(14),P.vertexTangents&&u.enable(15),P.anisotropy&&u.enable(16),P.alphaHash&&u.enable(17),P.batching&&u.enable(18),P.dispersion&&u.enable(19),P.retroreflection&&u.enable(24),P.batchingColor&&u.enable(20),P.gradientMap&&u.enable(21),P.packedNormalMap&&u.enable(22),P.vertexNormals&&u.enable(23),y.push(u.mask),u.disableAll(),P.fog&&u.enable(0),P.useFog&&u.enable(1),P.flatShading&&u.enable(2),P.logarithmicDepthBuffer&&u.enable(3),P.reversedDepthBuffer&&u.enable(4),P.skinning&&u.enable(5),P.morphTargets&&u.enable(6),P.morphNormals&&u.enable(7),P.morphColors&&u.enable(8),P.premultipliedAlpha&&u.enable(9),P.shadowMapEnabled&&u.enable(10),P.doubleSided&&u.enable(11),P.flipSided&&u.enable(12),P.useDepthPacking&&u.enable(13),P.dithering&&u.enable(14),P.transmission&&u.enable(15),P.sheen&&u.enable(16),P.opaque&&u.enable(17),P.pointsUvs&&u.enable(18),P.decodeVideoTexture&&u.enable(19),P.decodeVideoTextureEmissive&&u.enable(20),P.alphaToCoverage&&u.enable(21),P.numLightProbeGrids>0&&u.enable(22),P.hasPositionAttribute&&u.enable(23),y.push(u.mask)}function k(y){const P=x[y.type];let z;if(P){const G=Ra[P];z=k0.clone(G.uniforms)}else z=y.uniforms;return z}function C(y,P){let z=S.get(P);return z!==void 0?++z.usedTimes:(z=new My(i,P,y,o),g.push(z),S.set(P,z)),z}function F(y){if(--y.usedTimes===0){const P=g.indexOf(y);g[P]=g[g.length-1],g.pop(),S.delete(y.cacheKey),y.destroy()}}function D(y){d.remove(y)}function H(){d.dispose()}return{getParameters:N,getProgramCacheKey:w,getUniforms:k,acquireProgram:C,releaseProgram:F,releaseShaderCache:D,programs:g,dispose:H}}function wy(){let i=new WeakMap;function e(u){return i.has(u)}function t(u){let d=i.get(u);return d===void 0&&(d={},i.set(u,d)),d}function n(u){i.delete(u)}function o(u,d,p){i.get(u)[d]=p}function c(){i=new WeakMap}return{has:e,get:t,remove:n,update:o,dispose:c}}function Ay(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function eg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function tg(){const i=[];let e=0;const t=[],n=[],o=[];function c(){e=0,t.length=0,n.length=0,o.length=0}function u(_){let x=0;return _.isInstancedMesh&&(x+=2),_.isSkinnedMesh&&(x+=1),x}function d(_,x,R,N,w,M){let O=i[e];return O===void 0?(O={id:_.id,object:_,geometry:x,material:R,materialVariant:u(_),groupOrder:N,renderOrder:_.renderOrder,z:w,group:M},i[e]=O):(O.id=_.id,O.object=_,O.geometry=x,O.material=R,O.materialVariant=u(_),O.groupOrder=N,O.renderOrder=_.renderOrder,O.z=w,O.group=M),e++,O}function p(_,x,R,N,w,M,O){O.reversedDepth===!0&&(w=-w);const k=d(_,x,R,N,w,M);R.transmission>0?n.push(k):R.transparent===!0?o.push(k):t.push(k)}function g(_,x,R,N,w,M){const O=d(_,x,R,N,w,M);R.transmission>0?n.unshift(O):R.transparent===!0?o.unshift(O):t.unshift(O)}function S(_,x){t.length>1&&t.sort(_||Ay),n.length>1&&n.sort(x||eg),o.length>1&&o.sort(x||eg)}function E(){for(let _=e,x=i.length;_<x;_++){const R=i[_];if(R.id===null)break;R.id=null,R.object=null,R.geometry=null,R.material=null,R.group=null}}return{opaque:t,transmissive:n,transparent:o,init:c,push:p,unshift:g,finish:E,sort:S}}function Ry(){let i=new WeakMap;function e(n,o){const c=i.get(n);let u;return c===void 0?(u=new tg,i.set(n,[u])):o>=c.length?(u=new tg,c.push(u)):u=c[o],u}function t(){i=new WeakMap}return{get:e,dispose:t}}function Cy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new K,color:new At};break;case"SpotLight":t={position:new K,direction:new K,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new At,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new At,groundColor:new At};break;case"RectAreaLight":t={color:new At,position:new K,halfWidth:new K,halfHeight:new K};break}return i[e.id]=t,t}}}function Py(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Ly=0;function Iy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Dy(i){const e=new Cy,t=Py(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)n.probe.push(new K);const o=new K,c=new Fn,u=new Fn;function d(g){let S=0,E=0,_=0;for(let q=0;q<9;q++)n.probe[q].set(0,0,0);let x=0,R=0,N=0,w=0,M=0,O=0,k=0,C=0,F=0,D=0,H=0,y=0,P=0,z=0;g.sort(Iy);for(let q=0,ae=g.length;q<ae;q++){const W=g[q],ue=W.color,ye=W.intensity,_e=W.distance;let Te=null;if(W.shadow&&W.shadow.map&&(W.shadow.map.texture.format===Yo?Te=W.shadow.map.texture:Te=W.shadow.map.depthTexture||W.shadow.map.texture),W.isAmbientLight)S+=ue.r*ye,E+=ue.g*ye,_+=ue.b*ye;else if(W.isLightProbe){for(let ne=0;ne<9;ne++)n.probe[ne].addScaledVector(W.sh.coefficients[ne],ye);z++}else if(W.isSunLight){const ne=e.get(W);if(ne.color.copy(W.color).multiplyScalar(W.intensity),W.castShadow){const V=W.shadow,xe=t.get(W);xe.shadowIntensity=V.intensity,xe.shadowBias=V.bias,xe.shadowNormalBias=V.normalBias,xe.shadowRadius=V.radius,xe.shadowMapSize.copy(V.mapSize).multiply(V.getFrameExtents()),n.sunShadow[R]=xe,n.sunShadowMap[R]=Te;const ut=V.getViewportCount();for(let rt=0;rt<ut;rt++)n.sunShadowMatrix[N+rt]=V.getMatrix(rt),n.sunShadowCascade[N+rt]=V._cascadeData[rt];N+=ut,R++}n.sun[x]=ne,x++}else if(W.isDirectionalLight){const ne=e.get(W);if(ne.color.copy(W.color).multiplyScalar(W.intensity),W.castShadow){const V=W.shadow,xe=t.get(W);xe.shadowIntensity=V.intensity,xe.shadowBias=V.bias,xe.shadowNormalBias=V.normalBias,xe.shadowRadius=V.radius,xe.shadowMapSize=V.mapSize,n.directionalShadow[w]=xe,n.directionalShadowMap[w]=Te,n.directionalShadowMatrix[w]=W.shadow.matrix,F++}n.directional[w]=ne,w++}else if(W.isSpotLight){const ne=e.get(W);ne.position.setFromMatrixPosition(W.matrixWorld),ne.color.copy(ue).multiplyScalar(ye),ne.distance=_e,ne.coneCos=Math.cos(W.angle),ne.penumbraCos=Math.cos(W.angle*(1-W.penumbra)),ne.decay=W.decay,n.spot[O]=ne;const V=W.shadow;if(W.map&&(n.spotLightMap[y]=W.map,y++,V.updateMatrices(W),W.castShadow&&P++),n.spotLightMatrix[O]=V.matrix,W.castShadow){const xe=t.get(W);xe.shadowIntensity=V.intensity,xe.shadowBias=V.bias,xe.shadowNormalBias=V.normalBias,xe.shadowRadius=V.radius,xe.shadowMapSize=V.mapSize,n.spotShadow[O]=xe,n.spotShadowMap[O]=Te,H++}O++}else if(W.isRectAreaLight){const ne=e.get(W);ne.color.copy(ue).multiplyScalar(ye),ne.halfWidth.set(W.width*.5,0,0),ne.halfHeight.set(0,W.height*.5,0),n.rectArea[k]=ne,k++}else if(W.isPointLight){const ne=e.get(W);if(ne.color.copy(W.color).multiplyScalar(W.intensity),ne.distance=W.distance,ne.decay=W.decay,W.castShadow){const V=W.shadow,xe=t.get(W);xe.shadowIntensity=V.intensity,xe.shadowBias=V.bias,xe.shadowNormalBias=V.normalBias,xe.shadowRadius=V.radius,xe.shadowMapSize=V.mapSize,xe.shadowCameraNear=V.camera.near,xe.shadowCameraFar=V.camera.far,n.pointShadow[M]=xe,n.pointShadowMap[M]=Te,n.pointShadowMatrix[M]=W.shadow.matrix,D++}n.point[M]=ne,M++}else if(W.isHemisphereLight){const ne=e.get(W);ne.skyColor.copy(W.color).multiplyScalar(ye),ne.groundColor.copy(W.groundColor).multiplyScalar(ye),n.hemi[C]=ne,C++}}k>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ke.LTC_FLOAT_1,n.rectAreaLTC2=Ke.LTC_FLOAT_2):(n.rectAreaLTC1=Ke.LTC_HALF_1,n.rectAreaLTC2=Ke.LTC_HALF_2)),n.ambient[0]=S,n.ambient[1]=E,n.ambient[2]=_;const G=n.hash;(G.sunLength!==x||G.directionalLength!==w||G.pointLength!==M||G.spotLength!==O||G.rectAreaLength!==k||G.hemiLength!==C||G.numSunShadows!==R||G.numDirectionalShadows!==F||G.numPointShadows!==D||G.numSpotShadows!==H||G.numSpotMaps!==y||G.numLightProbes!==z)&&(n.sun.length=x,n.directional.length=w,n.spot.length=O,n.rectArea.length=k,n.point.length=M,n.hemi.length=C,n.sunShadow.length=R,n.sunShadowMap.length=R,n.sunShadowMatrix.length=N,n.sunShadowCascade.length=N,n.directionalShadow.length=F,n.directionalShadowMap.length=F,n.directionalShadowMatrix.length=F,n.pointShadow.length=D,n.pointShadowMap.length=D,n.pointShadowMatrix.length=D,n.spotShadow.length=H,n.spotShadowMap.length=H,n.spotLightMatrix.length=H+y-P,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=z,G.sunLength=x,G.directionalLength=w,G.pointLength=M,G.spotLength=O,G.rectAreaLength=k,G.hemiLength=C,G.numSunShadows=R,G.numDirectionalShadows=F,G.numPointShadows=D,G.numSpotShadows=H,G.numSpotMaps=y,G.numLightProbes=z,n.version=Ly++)}function p(g,S){let E=0,_=0,x=0,R=0,N=0,w=0;const M=S.matrixWorldInverse;for(let O=0,k=g.length;O<k;O++){const C=g[O];if(C.isSunLight){const F=n.sun[E];F.direction.setFromMatrixPosition(C.matrixWorld),F.direction.transformDirection(M),E++}else if(C.isDirectionalLight){const F=n.directional[_];F.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),F.direction.sub(o),F.direction.transformDirection(M),_++}else if(C.isSpotLight){const F=n.spot[R];F.position.setFromMatrixPosition(C.matrixWorld),F.position.applyMatrix4(M),F.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),F.direction.sub(o),F.direction.transformDirection(M),R++}else if(C.isRectAreaLight){const F=n.rectArea[N];F.position.setFromMatrixPosition(C.matrixWorld),F.position.applyMatrix4(M),u.identity(),c.copy(C.matrixWorld),c.premultiply(M),u.extractRotation(c),F.halfWidth.set(C.width*.5,0,0),F.halfHeight.set(0,C.height*.5,0),F.halfWidth.applyMatrix4(u),F.halfHeight.applyMatrix4(u),N++}else if(C.isPointLight){const F=n.point[x];F.position.setFromMatrixPosition(C.matrixWorld),F.position.applyMatrix4(M),x++}else if(C.isHemisphereLight){const F=n.hemi[w];F.direction.setFromMatrixPosition(C.matrixWorld),F.direction.transformDirection(M),w++}}}return{setup:d,setupView:p,state:n}}function ng(i){const e=new Dy(i),t=[],n=[],o=[];function c(_){E.camera=_,t.length=0,n.length=0,o.length=0}function u(_){t.push(_)}function d(_){n.push(_)}function p(_){o.push(_)}function g(){e.setup(t)}function S(_){e.setupView(t,_)}const E={lightsArray:t,shadowsArray:n,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:E,setupLights:g,setupLightsView:S,pushLight:u,pushShadow:d,pushLightProbeGrid:p}}function Ny(i){let e=new WeakMap;function t(o,c=0){const u=e.get(o);let d;return u===void 0?(d=new ng(i),e.set(o,[d])):c>=u.length?(d=new ng(i),u.push(d)):d=u[c],d}function n(){e=new WeakMap}return{get:t,dispose:n}}const Uy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fy=`uniform sampler2D shadow_pass;
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
}`,Oy=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],By=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],ig=new Fn,Vc=new K,Ih=new K;function zy(i,e,t){let n=new Fd;const o=new ft,c=new ft,u=new Hn,d=new X0,p=new Y0,g={},S=t.maxTextureSize,E={[Wo]:nr,[nr]:Wo,[Dr]:Dr},_=new Na({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:Uy,fragmentShader:Fy}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const R=new ir;R.setAttribute("position",new ms(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const N=new Ii(R,_),w=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hf;let M=this.type;this.render=function(D,H,y){if(w.enabled===!1||w.autoUpdate===!1&&w.needsUpdate===!1||D.length===0)return;this.type===nm&&(yt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=hf);const P=i.getRenderTarget(),z=i.getActiveCubeFace(),G=i.getActiveMipmapLevel(),q=i.state;q.setBlending(ps),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const ae=M!==this.type;ae&&H.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(ue=>ue.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,ue=D.length;W<ue;W++){const ye=D[W],_e=ye.shadow;if(_e===void 0){yt("WebGLShadowMap:",ye,"has no shadow.");continue}if(_e.autoUpdate===!1&&_e.needsUpdate===!1)continue;o.copy(_e.mapSize);const Te=_e.getFrameExtents();o.multiply(Te),c.copy(_e.mapSize),(o.x>S||o.y>S)&&(o.x>S&&(c.x=Math.floor(S/Te.x),o.x=c.x*Te.x,_e.mapSize.x=c.x),o.y>S&&(c.y=Math.floor(S/Te.y),o.y=c.y*Te.y,_e.mapSize.y=c.y));const ne=i.state.buffers.depth.getReversed();if(_e.camera._reversedDepth=ne,_e.map===null||ae===!0){if(_e.map!==null&&(_e.map.depthTexture!==null&&(_e.map.depthTexture.dispose(),_e.map.depthTexture=null),_e.map.dispose()),this.type===Xc){if(ye.isPointLight){yt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}_e.map=new ra(o.x,o.y,{format:Yo,type:Da,minFilter:Pi,magFilter:Pi,generateMipmaps:!1}),_e.map.texture.name=ye.name+".shadowMap",_e.map.depthTexture=new iu(o.x,o.y,Ca),_e.map.depthTexture.name=ye.name+".shadowMapDepth",_e.map.depthTexture.format=vs,_e.map.depthTexture.compareFunction=null,_e.map.depthTexture.minFilter=vi,_e.map.depthTexture.magFilter=vi}else ye.isPointLight?(_e.map=new Wg(o.x),_e.map.depthTexture=new b0(o.x,Ia)):(_e.map=new ra(o.x,o.y),_e.map.depthTexture=new iu(o.x,o.y,Ia)),_e.map.depthTexture.name=ye.name+".shadowMap",_e.map.depthTexture.format=vs,this.type===hf?(_e.map.depthTexture.compareFunction=ne?Ld:Pd,_e.map.depthTexture.minFilter=Pi,_e.map.depthTexture.magFilter=Pi):(_e.map.depthTexture.compareFunction=null,_e.map.depthTexture.minFilter=vi,_e.map.depthTexture.magFilter=vi);_e.camera.updateProjectionMatrix()}_e.map.isWebGLCubeRenderTarget!==!0&&(_e.map.width!==o.x||_e.map.height!==o.y)&&_e.map.setSize(o.x,o.y);const V=_e.map.isWebGLCubeRenderTarget?6:_e.getViewportCount();ye.isPointLight!==!0&&_e.updateMatrices(ye,y);for(let xe=0;xe<V;xe++){const ut=_e.getCamera(xe);if(ye.isPointLight){const rt=_e.camera,Ae=_e.matrix,se=ye.distance||rt.far;se!==rt.far&&(rt.far=se,rt.updateProjectionMatrix()),Vc.setFromMatrixPosition(ye.matrixWorld),rt.position.copy(Vc),Ih.copy(rt.position),Ih.add(Oy[xe]),rt.up.copy(By[xe]),rt.lookAt(Ih),rt.updateMatrixWorld(),Ae.makeTranslation(-Vc.x,-Vc.y,-Vc.z),ig.multiplyMatrices(rt.projectionMatrix,rt.matrixWorldInverse),_e._frustum.setFromProjectionMatrix(ig,rt.coordinateSystem,rt.reversedDepth)}if(_e.map.isWebGLCubeRenderTarget)i.setRenderTarget(_e.map,xe),i.clear();else{xe===0&&(i.setRenderTarget(_e.map),i.clear());const rt=_e.getViewport(xe);u.set(c.x*rt.x,c.y*rt.y,c.x*rt.z,c.y*rt.w),q.viewport(u)}n=_e.getFrustum(xe),C(H,y,ut,ye,this.type)}_e.isPointLightShadow!==!0&&this.type===Xc&&O(_e,y),_e.needsUpdate=!1}M=this.type,w.needsUpdate=!1,i.setRenderTarget(P,z,G)};function O(D,H){const y=e.update(N);_.defines.VSM_SAMPLES!==D.blurSamples&&(_.defines.VSM_SAMPLES=D.blurSamples,x.defines.VSM_SAMPLES=D.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),D.mapPass===null?D.mapPass=new ra(o.x,o.y,{format:Yo,type:Da}):(D.mapPass.width!==D.map.width||D.mapPass.height!==D.map.height)&&D.mapPass.setSize(D.map.width,D.map.height),_.uniforms.shadow_pass.value=D.map.depthTexture,_.uniforms.resolution.value.set(D.map.width,D.map.height),_.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(H,null,y,_,N,null),x.uniforms.shadow_pass.value=D.mapPass.texture,x.uniforms.resolution.value.set(D.map.width,D.map.height),x.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(H,null,y,x,N,null)}function k(D,H,y,P){let z=null;const G=y.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(G!==void 0)z=G;else if(z=y.isPointLight===!0?p:d,i.localClippingEnabled&&H.clipShadows===!0&&Array.isArray(H.clippingPlanes)&&H.clippingPlanes.length!==0||H.displacementMap&&H.displacementScale!==0||H.alphaMap&&H.alphaTest>0||H.map&&H.alphaTest>0||H.alphaToCoverage===!0){const q=z.uuid,ae=H.uuid;let W=g[q];W===void 0&&(W={},g[q]=W);let ue=W[ae];ue===void 0&&(ue=z.clone(),W[ae]=ue,H.addEventListener("dispose",F)),z=ue}if(z.visible=H.visible,z.wireframe=H.wireframe,P===Xc?z.side=H.shadowSide!==null?H.shadowSide:H.side:z.side=H.shadowSide!==null?H.shadowSide:E[H.side],z.alphaMap=H.alphaMap,z.alphaTest=H.alphaToCoverage===!0?.5:H.alphaTest,z.map=H.map,z.clipShadows=H.clipShadows,z.clippingPlanes=H.clippingPlanes,z.clipIntersection=H.clipIntersection,z.displacementMap=H.displacementMap,z.displacementScale=H.displacementScale,z.displacementBias=H.displacementBias,z.wireframeLinewidth=H.wireframeLinewidth,z.linewidth=H.linewidth,y.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const q=i.properties.get(z);q.light=y}return z}function C(D,H,y,P,z){if(D.visible===!1)return;if(D.layers.test(H.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&z===Xc)&&(!D.frustumCulled||D.intersectsFrustum(n))){D.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,D.matrixWorld);const ae=e.update(D),W=D.material;if(Array.isArray(W)){const ue=ae.groups;for(let ye=0,_e=ue.length;ye<_e;ye++){const Te=ue[ye],ne=W[Te.materialIndex];if(ne&&ne.visible){const V=k(D,ne,P,z);D.onBeforeShadow(i,D,H,y,ae,V,Te),i.renderBufferDirect(y,null,ae,V,D,Te),D.onAfterShadow(i,D,H,y,ae,V,Te)}}}else if(W.visible){const ue=k(D,W,P,z);D.onBeforeShadow(i,D,H,y,ae,ue,null),i.renderBufferDirect(y,null,ae,ue,D,null),D.onAfterShadow(i,D,H,y,ae,ue,null)}}const q=D.children;for(let ae=0,W=q.length;ae<W;ae++)C(q[ae],H,y,P,z)}function F(D){D.target.removeEventListener("dispose",F);for(const y in g){const P=g[y],z=D.target.uuid;z in P&&(P[z].dispose(),delete P[z])}}}function ky(i,e){function t(){let J=!1;const we=new Hn;let Se=null;const Oe=new Hn(0,0,0,0);return{setMask:function(ze){Se!==ze&&!J&&(i.colorMask(ze,ze,ze,ze),Se=ze)},setLocked:function(ze){J=ze},setClear:function(ze,Re,at,it,Me){Me===!0&&(ze*=it,Re*=it,at*=it),we.set(ze,Re,at,it),Oe.equals(we)===!1&&(i.clearColor(ze,Re,at,it),Oe.copy(we))},reset:function(){J=!1,Se=null,Oe.set(-1,0,0,0)}}}function n(){let J=!1,we=!1,Se=null,Oe=null,ze=null;return{setReversed:function(Re){if(we!==Re){const at=e.get("EXT_clip_control");Re?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT),we=Re;const it=ze;ze=null,this.setClear(it)}},getReversed:function(){return we},setTest:function(Re){Re?ve(i.DEPTH_TEST):Ze(i.DEPTH_TEST)},setMask:function(Re){Se!==Re&&!J&&(i.depthMask(Re),Se=Re)},setFunc:function(Re){if(we&&(Re=Om[Re]),Oe!==Re){switch(Re){case Nh:i.depthFunc(i.NEVER);break;case Uh:i.depthFunc(i.ALWAYS);break;case Fh:i.depthFunc(i.LESS);break;case jc:i.depthFunc(i.LEQUAL);break;case Oh:i.depthFunc(i.EQUAL);break;case Bh:i.depthFunc(i.GEQUAL);break;case zh:i.depthFunc(i.GREATER);break;case kh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Oe=Re}},setLocked:function(Re){J=Re},setClear:function(Re){ze!==Re&&(ze=Re,we&&(Re=1-Re),i.clearDepth(Re))},reset:function(){J=!1,Se=null,Oe=null,ze=null,we=!1}}}function o(){let J=!1,we=null,Se=null,Oe=null,ze=null,Re=null,at=null,it=null,Me=null;return{setTest:function(Pe){J||(Pe?ve(i.STENCIL_TEST):Ze(i.STENCIL_TEST))},setMask:function(Pe){we!==Pe&&!J&&(i.stencilMask(Pe),we=Pe)},setFunc:function(Pe,nt,bt){(Se!==Pe||Oe!==nt||ze!==bt)&&(i.stencilFunc(Pe,nt,bt),Se=Pe,Oe=nt,ze=bt)},setOp:function(Pe,nt,bt){(Re!==Pe||at!==nt||it!==bt)&&(i.stencilOp(Pe,nt,bt),Re=Pe,at=nt,it=bt)},setLocked:function(Pe){J=Pe},setClear:function(Pe){Me!==Pe&&(i.clearStencil(Pe),Me=Pe)},reset:function(){J=!1,we=null,Se=null,Oe=null,ze=null,Re=null,at=null,it=null,Me=null}}}const c=new t,u=new n,d=new o,p=new WeakMap,g=new WeakMap;let S={},E={},_={},x=new WeakMap,R=[],N=null,w=!1,M=null,O=null,k=null,C=null,F=null,D=null,H=null,y=new At(0,0,0),P=0,z=!1,G=null,q=null,ae=null,W=null,ue=null;const ye=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let _e=!1,Te=0;const ne=i.getParameter(i.VERSION);ne.indexOf("WebGL")!==-1?(Te=parseFloat(/^WebGL (\d)/.exec(ne)[1]),_e=Te>=1):ne.indexOf("OpenGL ES")!==-1&&(Te=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),_e=Te>=2);let V=null,xe={};const ut=i.getParameter(i.SCISSOR_BOX),rt=i.getParameter(i.VIEWPORT),Ae=new Hn().fromArray(ut),se=new Hn().fromArray(rt);function Lt(J,we,Se,Oe){const ze=new Uint8Array(4),Re=i.createTexture();i.bindTexture(J,Re),i.texParameteri(J,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(J,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let at=0;at<Se;at++)J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?i.texImage3D(we,0,i.RGBA,1,1,Oe,0,i.RGBA,i.UNSIGNED_BYTE,ze):i.texImage2D(we+at,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ze);return Re}const me={};me[i.TEXTURE_2D]=Lt(i.TEXTURE_2D,i.TEXTURE_2D,1),me[i.TEXTURE_CUBE_MAP]=Lt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[i.TEXTURE_2D_ARRAY]=Lt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),me[i.TEXTURE_3D]=Lt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),d.setClear(0),ve(i.DEPTH_TEST),u.setFunc(jc),xt(!1),tn(tp),ve(i.CULL_FACE),It(ps);function ve(J){S[J]!==!0&&(i.enable(J),S[J]=!0)}function Ze(J){S[J]!==!1&&(i.disable(J),S[J]=!1)}function dt(J,we){return _[J]!==we?(i.bindFramebuffer(J,we),_[J]=we,J===i.DRAW_FRAMEBUFFER&&(_[i.FRAMEBUFFER]=we),J===i.FRAMEBUFFER&&(_[i.DRAW_FRAMEBUFFER]=we),!0):!1}function We(J,we){let Se=R,Oe=!1;if(J){Se=x.get(we),Se===void 0&&(Se=[],x.set(we,Se));const ze=J.textures;if(Se.length!==ze.length||Se[0]!==i.COLOR_ATTACHMENT0){for(let Re=0,at=ze.length;Re<at;Re++)Se[Re]=i.COLOR_ATTACHMENT0+Re;Se.length=ze.length,Oe=!0}}else Se[0]!==i.BACK&&(Se[0]=i.BACK,Oe=!0);Oe&&i.drawBuffers(Se)}function vt(J){return N!==J?(i.useProgram(J),N=J,!0):!1}const Pt={[jl]:i.FUNC_ADD,[rm]:i.FUNC_SUBTRACT,[am]:i.FUNC_REVERSE_SUBTRACT};Pt[sm]=i.MIN,Pt[om]=i.MAX;const pt={[lm]:i.ZERO,[cm]:i.ONE,[um]:i.SRC_COLOR,[ug]:i.SRC_ALPHA,[mm]:i.SRC_ALPHA_SATURATE,[pm]:i.DST_COLOR,[hm]:i.DST_ALPHA,[fm]:i.ONE_MINUS_SRC_COLOR,[fg]:i.ONE_MINUS_SRC_ALPHA,[gm]:i.ONE_MINUS_DST_COLOR,[dm]:i.ONE_MINUS_DST_ALPHA,[vm]:i.CONSTANT_COLOR,[_m]:i.ONE_MINUS_CONSTANT_COLOR,[xm]:i.CONSTANT_ALPHA,[Mm]:i.ONE_MINUS_CONSTANT_ALPHA};function It(J,we,Se,Oe,ze,Re,at,it,Me,Pe){if(J===ps){w===!0&&(Ze(i.BLEND),w=!1);return}if(w===!1&&(ve(i.BLEND),w=!0),J!==im){if(J!==M||Pe!==z){if((O!==jl||F!==jl)&&(i.blendEquation(i.FUNC_ADD),O=jl,F=jl),Pe)switch(J){case Zc:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case np:i.blendFunc(i.ONE,i.ONE);break;case ip:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rp:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:en("WebGLState: Invalid blending: ",J);break}else switch(J){case Zc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case np:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ip:en("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rp:en("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:en("WebGLState: Invalid blending: ",J);break}k=null,C=null,D=null,H=null,y.set(0,0,0),P=0,M=J,z=Pe}return}ze=ze||we,Re=Re||Se,at=at||Oe,(we!==O||ze!==F)&&(i.blendEquationSeparate(Pt[we],Pt[ze]),O=we,F=ze),(Se!==k||Oe!==C||Re!==D||at!==H)&&(i.blendFuncSeparate(pt[Se],pt[Oe],pt[Re],pt[at]),k=Se,C=Oe,D=Re,H=at),(it.equals(y)===!1||Me!==P)&&(i.blendColor(it.r,it.g,it.b,Me),y.copy(it),P=Me),M=J,z=!1}function Xe(J,we){J.side===Dr?Ze(i.CULL_FACE):ve(i.CULL_FACE);let Se=J.side===nr;we&&(Se=!Se),xt(Se),J.blending===Zc&&J.transparent===!1?It(ps):It(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),u.setFunc(J.depthFunc),u.setTest(J.depthTest),u.setMask(J.depthWrite),c.setMask(J.colorWrite);const Oe=J.stencilWrite;d.setTest(Oe),Oe&&(d.setMask(J.stencilWriteMask),d.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),d.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),Mn(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?ve(i.SAMPLE_ALPHA_TO_COVERAGE):Ze(i.SAMPLE_ALPHA_TO_COVERAGE)}function xt(J){G!==J&&(J?i.frontFace(i.CW):i.frontFace(i.CCW),G=J)}function tn(J){J!==em?(ve(i.CULL_FACE),J!==q&&(J===tp?i.cullFace(i.BACK):J===tm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ze(i.CULL_FACE),q=J}function Gt(J){J!==ae&&(_e&&i.lineWidth(J),ae=J)}function Mn(J,we,Se){J?(ve(i.POLYGON_OFFSET_FILL),(W!==we||ue!==Se)&&(W=we,ue=Se,u.getReversed()&&(we=-we),i.polygonOffset(we,Se))):Ze(i.POLYGON_OFFSET_FILL)}function Dt(J){J?ve(i.SCISSOR_TEST):Ze(i.SCISSOR_TEST)}function Yt(J){J===void 0&&(J=i.TEXTURE0+ye-1),V!==J&&(i.activeTexture(J),V=J)}function Y(J,we,Se){Se===void 0&&(V===null?Se=i.TEXTURE0+ye-1:Se=V);let Oe=xe[Se];Oe===void 0&&(Oe={type:void 0,texture:void 0},xe[Se]=Oe),(Oe.type!==J||Oe.texture!==we)&&(V!==Se&&(i.activeTexture(Se),V=Se),i.bindTexture(J,we||me[J]),Oe.type=J,Oe.texture=we)}function zt(){const J=xe[V];J!==void 0&&J.type!==void 0&&(i.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function gt(){try{i.compressedTexImage2D(...arguments)}catch(J){en("WebGLState:",J)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(J){en("WebGLState:",J)}}function A(){try{i.texSubImage2D(...arguments)}catch(J){en("WebGLState:",J)}}function ie(){try{i.texSubImage3D(...arguments)}catch(J){en("WebGLState:",J)}}function te(){try{i.compressedTexSubImage2D(...arguments)}catch(J){en("WebGLState:",J)}}function ge(){try{i.compressedTexSubImage3D(...arguments)}catch(J){en("WebGLState:",J)}}function Ne(){try{i.texStorage2D(...arguments)}catch(J){en("WebGLState:",J)}}function Fe(){try{i.texStorage3D(...arguments)}catch(J){en("WebGLState:",J)}}function pe(){try{i.texImage2D(...arguments)}catch(J){en("WebGLState:",J)}}function Ee(){try{i.texImage3D(...arguments)}catch(J){en("WebGLState:",J)}}function ke(J){return E[J]!==void 0?E[J]:i.getParameter(J)}function Qe(J,we){E[J]!==we&&(i.pixelStorei(J,we),E[J]=we)}function Be(J){Ae.equals(J)===!1&&(i.scissor(J.x,J.y,J.z,J.w),Ae.copy(J))}function Ue(J){se.equals(J)===!1&&(i.viewport(J.x,J.y,J.z,J.w),se.copy(J))}function st(J,we){let Se=g.get(we);Se===void 0&&(Se=new WeakMap,g.set(we,Se));let Oe=Se.get(J);Oe===void 0&&(Oe=i.getUniformBlockIndex(we,J.name),Se.set(J,Oe))}function lt(J,we){const Oe=g.get(we).get(J);p.get(we)!==Oe&&(i.uniformBlockBinding(we,Oe,J.__bindingPointIndex),p.set(we,Oe))}function _t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),u.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),S={},E={},V=null,xe={},_={},x=new WeakMap,R=[],N=null,w=!1,M=null,O=null,k=null,C=null,F=null,D=null,H=null,y=new At(0,0,0),P=0,z=!1,G=null,q=null,ae=null,W=null,ue=null,Ae.set(0,0,i.canvas.width,i.canvas.height),se.set(0,0,i.canvas.width,i.canvas.height),c.reset(),u.reset(),d.reset()}return{buffers:{color:c,depth:u,stencil:d},enable:ve,disable:Ze,bindFramebuffer:dt,drawBuffers:We,useProgram:vt,setBlending:It,setMaterial:Xe,setFlipSided:xt,setCullFace:tn,setLineWidth:Gt,setPolygonOffset:Mn,setScissorTest:Dt,activeTexture:Yt,bindTexture:Y,unbindTexture:zt,compressedTexImage2D:gt,compressedTexImage3D:B,texImage2D:pe,texImage3D:Ee,pixelStorei:Qe,getParameter:ke,updateUBOMapping:st,uniformBlockBinding:lt,texStorage2D:Ne,texStorage3D:Fe,texSubImage2D:A,texSubImage3D:ie,compressedTexSubImage2D:te,compressedTexSubImage3D:ge,scissor:Be,viewport:Ue,reset:_t}}function Hy(i,e,t,n,o,c,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new ft,S=new WeakMap,E=new Set;let _;const x=new WeakMap;let R=!1;try{R=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function N(B,A){return R?new OffscreenCanvas(B,A):bf("canvas")}function w(B,A,ie){let te=1;const ge=gt(B);if((ge.width>ie||ge.height>ie)&&(te=ie/Math.max(ge.width,ge.height)),te<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const Ne=Math.floor(te*ge.width),Fe=Math.floor(te*ge.height);_===void 0&&(_=N(Ne,Fe));const pe=A?N(Ne,Fe):_;return pe.width=Ne,pe.height=Fe,pe.getContext("2d").drawImage(B,0,0,Ne,Fe),yt("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+Ne+"x"+Fe+")."),pe}else return"data"in B&&yt("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),B;return B}function M(B){return B.generateMipmaps}function O(B){i.generateMipmap(B)}function k(B){return B.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?i.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function C(B,A,ie,te,ge,Ne=!1){if(B!==null){if(i[B]!==void 0)return i[B];yt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let Fe;te&&(Fe=e.get("EXT_texture_norm16"),Fe||yt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=A;if(A===i.RED&&(ie===i.FLOAT&&(pe=i.R32F),ie===i.HALF_FLOAT&&(pe=i.R16F),ie===i.UNSIGNED_BYTE&&(pe=i.R8),ie===i.UNSIGNED_SHORT&&Fe&&(pe=Fe.R16_EXT),ie===i.SHORT&&Fe&&(pe=Fe.R16_SNORM_EXT)),A===i.RED_INTEGER&&(ie===i.UNSIGNED_BYTE&&(pe=i.R8UI),ie===i.UNSIGNED_SHORT&&(pe=i.R16UI),ie===i.UNSIGNED_INT&&(pe=i.R32UI),ie===i.BYTE&&(pe=i.R8I),ie===i.SHORT&&(pe=i.R16I),ie===i.INT&&(pe=i.R32I)),A===i.RG&&(ie===i.FLOAT&&(pe=i.RG32F),ie===i.HALF_FLOAT&&(pe=i.RG16F),ie===i.UNSIGNED_BYTE&&(pe=i.RG8),ie===i.UNSIGNED_SHORT&&Fe&&(pe=Fe.RG16_EXT),ie===i.SHORT&&Fe&&(pe=Fe.RG16_SNORM_EXT)),A===i.RG_INTEGER&&(ie===i.UNSIGNED_BYTE&&(pe=i.RG8UI),ie===i.UNSIGNED_SHORT&&(pe=i.RG16UI),ie===i.UNSIGNED_INT&&(pe=i.RG32UI),ie===i.BYTE&&(pe=i.RG8I),ie===i.SHORT&&(pe=i.RG16I),ie===i.INT&&(pe=i.RG32I)),A===i.RGB_INTEGER&&(ie===i.UNSIGNED_BYTE&&(pe=i.RGB8UI),ie===i.UNSIGNED_SHORT&&(pe=i.RGB16UI),ie===i.UNSIGNED_INT&&(pe=i.RGB32UI),ie===i.BYTE&&(pe=i.RGB8I),ie===i.SHORT&&(pe=i.RGB16I),ie===i.INT&&(pe=i.RGB32I)),A===i.RGBA_INTEGER&&(ie===i.UNSIGNED_BYTE&&(pe=i.RGBA8UI),ie===i.UNSIGNED_SHORT&&(pe=i.RGBA16UI),ie===i.UNSIGNED_INT&&(pe=i.RGBA32UI),ie===i.BYTE&&(pe=i.RGBA8I),ie===i.SHORT&&(pe=i.RGBA16I),ie===i.INT&&(pe=i.RGBA32I)),A===i.RGB&&(ie===i.UNSIGNED_SHORT&&Fe&&(pe=Fe.RGB16_EXT),ie===i.SHORT&&Fe&&(pe=Fe.RGB16_SNORM_EXT),ie===i.UNSIGNED_INT_5_9_9_9_REV&&(pe=i.RGB9_E5),ie===i.UNSIGNED_INT_10F_11F_11F_REV&&(pe=i.R11F_G11F_B10F)),A===i.RGBA){const Ee=Ne?Sf:Jt.getTransfer(ge);ie===i.FLOAT&&(pe=i.RGBA32F),ie===i.HALF_FLOAT&&(pe=i.RGBA16F),ie===i.UNSIGNED_BYTE&&(pe=Ee===vn?i.SRGB8_ALPHA8:i.RGBA8),ie===i.UNSIGNED_SHORT&&Fe&&(pe=Fe.RGBA16_EXT),ie===i.SHORT&&Fe&&(pe=Fe.RGBA16_SNORM_EXT),ie===i.UNSIGNED_SHORT_4_4_4_4&&(pe=i.RGBA4),ie===i.UNSIGNED_SHORT_5_5_5_1&&(pe=i.RGB5_A1)}return(pe===i.R16F||pe===i.R32F||pe===i.RG16F||pe===i.RG32F||pe===i.RGBA16F||pe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function F(B,A){let ie;return B?A===null||A===Ia||A===eu?ie=i.DEPTH24_STENCIL8:A===Ca?ie=i.DEPTH32F_STENCIL8:A===$c&&(ie=i.DEPTH24_STENCIL8,yt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Ia||A===eu?ie=i.DEPTH_COMPONENT24:A===Ca?ie=i.DEPTH_COMPONENT32F:A===$c&&(ie=i.DEPTH_COMPONENT16),ie}function D(B,A){return M(B)===!0||B.isFramebufferTexture&&B.minFilter!==vi&&B.minFilter!==Pi?Math.log2(Math.max(A.width,A.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?A.mipmaps.length:1}function H(B){const A=B.target;A.removeEventListener("dispose",H),P(A),A.isVideoTexture&&S.delete(A),A.isHTMLTexture&&E.delete(A)}function y(B){const A=B.target;A.removeEventListener("dispose",y),G(A)}function P(B){const A=n.get(B);if(A.__webglInit===void 0)return;const ie=B.source,te=x.get(ie);if(te){const ge=te[A.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&z(B),Object.keys(te).length===0&&x.delete(ie)}n.remove(B)}function z(B){const A=n.get(B);i.deleteTexture(A.__webglTexture);const ie=B.source,te=x.get(ie);delete te[A.__cacheKey],u.memory.textures--}function G(B){const A=n.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),n.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(A.__webglFramebuffer[te]))for(let ge=0;ge<A.__webglFramebuffer[te].length;ge++)i.deleteFramebuffer(A.__webglFramebuffer[te][ge]);else i.deleteFramebuffer(A.__webglFramebuffer[te]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[te])}else{if(Array.isArray(A.__webglFramebuffer))for(let te=0;te<A.__webglFramebuffer.length;te++)i.deleteFramebuffer(A.__webglFramebuffer[te]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let te=0;te<A.__webglColorRenderbuffer.length;te++)A.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[te]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const ie=B.textures;for(let te=0,ge=ie.length;te<ge;te++){const Ne=n.get(ie[te]);Ne.__webglTexture&&(i.deleteTexture(Ne.__webglTexture),u.memory.textures--),n.remove(ie[te])}n.remove(B)}let q=0;function ae(){q=0}function W(){return q}function ue(B){q=B}function ye(){const B=q;return B>=o.maxTextures&&yt("WebGLTextures: Trying to use "+(B+1)+" texture units while this GPU supports only "+o.maxTextures),q+=1,B}function _e(B){const A=[];return A.push(B.wrapS),A.push(B.wrapT),A.push(B.wrapR||0),A.push(B.magFilter),A.push(B.minFilter),A.push(B.anisotropy),A.push(B.internalFormat),A.push(B.format),A.push(B.type),A.push(B.generateMipmaps),A.push(B.premultiplyAlpha),A.push(B.flipY),A.push(B.unpackAlignment),A.push(B.colorSpace),A.join()}function Te(B,A){const ie=n.get(B);if(B.isVideoTexture&&Y(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&ie.__version!==B.version){const te=B.image;if(te===null)yt("WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)yt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ze(ie,B,A);return}}else B.isExternalTexture&&(ie.__webglTexture=B.sourceTexture?B.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,ie.__webglTexture,i.TEXTURE0+A)}function ne(B,A){const ie=n.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&ie.__version!==B.version){Ze(ie,B,A);return}else B.isExternalTexture&&(ie.__webglTexture=B.sourceTexture?B.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,ie.__webglTexture,i.TEXTURE0+A)}function V(B,A){const ie=n.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&ie.__version!==B.version){Ze(ie,B,A);return}t.bindTexture(i.TEXTURE_3D,ie.__webglTexture,i.TEXTURE0+A)}function xe(B,A){const ie=n.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&ie.__version!==B.version){dt(ie,B,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture,i.TEXTURE0+A)}const ut={[Hh]:i.REPEAT,[ds]:i.CLAMP_TO_EDGE,[Gh]:i.MIRRORED_REPEAT},rt={[vi]:i.NEAREST,[bm]:i.NEAREST_MIPMAP_NEAREST,[Vu]:i.NEAREST_MIPMAP_LINEAR,[Pi]:i.LINEAR,[th]:i.LINEAR_MIPMAP_NEAREST,[Ho]:i.LINEAR_MIPMAP_LINEAR},Ae={[Am]:i.NEVER,[Im]:i.ALWAYS,[Rm]:i.LESS,[Pd]:i.LEQUAL,[Cm]:i.EQUAL,[Ld]:i.GEQUAL,[Pm]:i.GREATER,[Lm]:i.NOTEQUAL};function se(B,A){if(A.type===Ca&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Pi||A.magFilter===th||A.magFilter===Vu||A.magFilter===Ho||A.minFilter===Pi||A.minFilter===th||A.minFilter===Vu||A.minFilter===Ho)&&yt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(B,i.TEXTURE_WRAP_S,ut[A.wrapS]),i.texParameteri(B,i.TEXTURE_WRAP_T,ut[A.wrapT]),(B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY)&&i.texParameteri(B,i.TEXTURE_WRAP_R,ut[A.wrapR]),i.texParameteri(B,i.TEXTURE_MAG_FILTER,rt[A.magFilter]),i.texParameteri(B,i.TEXTURE_MIN_FILTER,rt[A.minFilter]),A.compareFunction&&(i.texParameteri(B,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(B,i.TEXTURE_COMPARE_FUNC,Ae[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===vi||A.minFilter!==Vu&&A.minFilter!==Ho||A.type===Ca&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const ie=e.get("EXT_texture_filter_anisotropic");i.texParameterf(B,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,o.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Lt(B,A){let ie=!1;B.__webglInit===void 0&&(B.__webglInit=!0,A.addEventListener("dispose",H));const te=A.source;let ge=x.get(te);ge===void 0&&(ge={},x.set(te,ge));const Ne=_e(A);if(Ne!==B.__cacheKey){ge[Ne]===void 0&&(ge[Ne]={texture:i.createTexture(),usedTimes:0},u.memory.textures++,ie=!0),ge[Ne].usedTimes++;const Fe=ge[B.__cacheKey];Fe!==void 0&&(ge[B.__cacheKey].usedTimes--,Fe.usedTimes===0&&z(A)),B.__cacheKey=Ne,B.__webglTexture=ge[Ne].texture}return ie}function me(B,A,ie){return Math.floor(Math.floor(B/ie)/A)}function ve(B,A,ie,te){const Ne=B.updateRanges;if(Ne.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,ie,te,A.data);else{Ne.sort((Qe,Be)=>Qe.start-Be.start);let Fe=0;for(let Qe=1;Qe<Ne.length;Qe++){const Be=Ne[Fe],Ue=Ne[Qe],st=Be.start+Be.count,lt=me(Ue.start,A.width,4),_t=me(Be.start,A.width,4);Ue.start<=st+1&&lt===_t&&me(Ue.start+Ue.count-1,A.width,4)===lt?Be.count=Math.max(Be.count,Ue.start+Ue.count-Be.start):(++Fe,Ne[Fe]=Ue)}Ne.length=Fe+1;const pe=t.getParameter(i.UNPACK_ROW_LENGTH),Ee=t.getParameter(i.UNPACK_SKIP_PIXELS),ke=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,A.width);for(let Qe=0,Be=Ne.length;Qe<Be;Qe++){const Ue=Ne[Qe],st=Math.floor(Ue.start/4),lt=Math.ceil(Ue.count/4),_t=st%A.width,J=Math.floor(st/A.width),we=lt,Se=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,_t),t.pixelStorei(i.UNPACK_SKIP_ROWS,J),t.texSubImage2D(i.TEXTURE_2D,0,_t,J,we,Se,ie,te,A.data)}B.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,pe),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ee),t.pixelStorei(i.UNPACK_SKIP_ROWS,ke)}}function Ze(B,A,ie){let te=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(te=i.TEXTURE_3D);const ge=Lt(B,A),Ne=A.source;t.bindTexture(te,B.__webglTexture,i.TEXTURE0+ie);const Fe=n.get(Ne);if(Ne.version!==Fe.__version||ge===!0){if(t.activeTexture(i.TEXTURE0+ie),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const Se=Jt.getPrimaries(Jt.workingColorSpace),Oe=A.colorSpace===Vs?null:Jt.getPrimaries(A.colorSpace),ze=A.colorSpace===Vs||Se===Oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}t.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment);let Ee=w(A.image,!1,o.maxTextureSize);Ee=zt(A,Ee);const ke=c.convert(A.format,A.colorSpace),Qe=c.convert(A.type);let Be=C(A.internalFormat,ke,Qe,A.normalized,A.colorSpace,A.isVideoTexture);se(te,A);let Ue;const st=A.mipmaps,lt=A.isVideoTexture!==!0,_t=Fe.__version===void 0||ge===!0,J=Ne.dataReady,we=D(A,Ee);if(A.isDepthTexture)Be=F(A.format===Go,A.type),_t&&(lt?t.texStorage2D(i.TEXTURE_2D,1,Be,Ee.width,Ee.height):t.texImage2D(i.TEXTURE_2D,0,Be,Ee.width,Ee.height,0,ke,Qe,null));else if(A.isDataTexture)if(st.length>0){lt&&_t&&t.texStorage2D(i.TEXTURE_2D,we,Be,st[0].width,st[0].height);for(let Se=0,Oe=st.length;Se<Oe;Se++)Ue=st[Se],lt?J&&t.texSubImage2D(i.TEXTURE_2D,Se,0,0,Ue.width,Ue.height,ke,Qe,Ue.data):t.texImage2D(i.TEXTURE_2D,Se,Be,Ue.width,Ue.height,0,ke,Qe,Ue.data);A.generateMipmaps=!1}else lt?(_t&&t.texStorage2D(i.TEXTURE_2D,we,Be,Ee.width,Ee.height),J&&ve(A,Ee,ke,Qe)):t.texImage2D(i.TEXTURE_2D,0,Be,Ee.width,Ee.height,0,ke,Qe,Ee.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){lt&&_t&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,Be,st[0].width,st[0].height,Ee.depth);for(let Se=0,Oe=st.length;Se<Oe;Se++)if(Ue=st[Se],A.format!==ia)if(ke!==null)if(lt){if(J)if(A.layerUpdates.size>0){const ze=Up(Ue.width,Ue.height,A.format,A.type);for(const Re of A.layerUpdates){const at=Ue.data.subarray(Re*ze/Ue.data.BYTES_PER_ELEMENT,(Re+1)*ze/Ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Se,0,0,Re,Ue.width,Ue.height,1,ke,at)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Se,0,0,0,Ue.width,Ue.height,Ee.depth,ke,Ue.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Se,Be,Ue.width,Ue.height,Ee.depth,0,Ue.data,0,0);else yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?J&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Se,0,0,0,Ue.width,Ue.height,Ee.depth,ke,Qe,Ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Se,Be,Ue.width,Ue.height,Ee.depth,0,ke,Qe,Ue.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{lt&&_t&&t.texStorage2D(i.TEXTURE_2D,we,Be,st[0].width,st[0].height);for(let Se=0,Oe=st.length;Se<Oe;Se++)Ue=st[Se],A.format!==ia?ke!==null?lt?J&&t.compressedTexSubImage2D(i.TEXTURE_2D,Se,0,0,Ue.width,Ue.height,ke,Ue.data):t.compressedTexImage2D(i.TEXTURE_2D,Se,Be,Ue.width,Ue.height,0,Ue.data):yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?J&&t.texSubImage2D(i.TEXTURE_2D,Se,0,0,Ue.width,Ue.height,ke,Qe,Ue.data):t.texImage2D(i.TEXTURE_2D,Se,Be,Ue.width,Ue.height,0,ke,Qe,Ue.data)}else if(A.isDataArrayTexture)if(lt){if(_t&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,Be,Ee.width,Ee.height,Ee.depth),J)if(A.layerUpdates.size>0){const Se=Up(Ee.width,Ee.height,A.format,A.type);for(const Oe of A.layerUpdates){const ze=Ee.data.subarray(Oe*Se/Ee.data.BYTES_PER_ELEMENT,(Oe+1)*Se/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Oe,Ee.width,Ee.height,1,ke,Qe,ze)}A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,ke,Qe,Ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Be,Ee.width,Ee.height,Ee.depth,0,ke,Qe,Ee.data);else if(A.isData3DTexture)lt?(_t&&t.texStorage3D(i.TEXTURE_3D,we,Be,Ee.width,Ee.height,Ee.depth),J&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,ke,Qe,Ee.data)):t.texImage3D(i.TEXTURE_3D,0,Be,Ee.width,Ee.height,Ee.depth,0,ke,Qe,Ee.data);else if(A.isFramebufferTexture){if(_t)if(lt)t.texStorage2D(i.TEXTURE_2D,we,Be,Ee.width,Ee.height);else{let Se=Ee.width,Oe=Ee.height;for(let ze=0;ze<we;ze++)t.texImage2D(i.TEXTURE_2D,ze,Be,Se,Oe,0,ke,Qe,null),Se>>=1,Oe>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in i){const Se=i.canvas;if(Se.hasAttribute("layoutsubtree")||Se.setAttribute("layoutsubtree","true"),Ee.parentNode!==Se){Se.appendChild(Ee),E.add(A),Se.onpaint=Oe=>{const ze=Oe.changedElements;for(const Re of E)ze.includes(Re.image)&&(Re.needsUpdate=!0)},Se.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Ee);else{const ze=i.RGBA,Re=i.RGBA,at=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ze,Re,at,Ee)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(st.length>0){if(lt&&_t){const Se=gt(st[0]);t.texStorage2D(i.TEXTURE_2D,we,Be,Se.width,Se.height)}for(let Se=0,Oe=st.length;Se<Oe;Se++)Ue=st[Se],lt?J&&t.texSubImage2D(i.TEXTURE_2D,Se,0,0,ke,Qe,Ue):t.texImage2D(i.TEXTURE_2D,Se,Be,ke,Qe,Ue);A.generateMipmaps=!1}else if(lt){if(_t){const Se=gt(Ee);t.texStorage2D(i.TEXTURE_2D,we,Be,Se.width,Se.height)}J&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ke,Qe,Ee)}else t.texImage2D(i.TEXTURE_2D,0,Be,ke,Qe,Ee);M(A)&&O(te),Fe.__version=Ne.version,A.onUpdate&&A.onUpdate(A)}B.__version=A.version}function dt(B,A,ie){if(A.image.length!==6)return;const te=Lt(B,A),ge=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+ie);const Ne=n.get(ge);if(ge.version!==Ne.__version||te===!0){t.activeTexture(i.TEXTURE0+ie);const Fe=Jt.getPrimaries(Jt.workingColorSpace),pe=A.colorSpace===Vs?null:Jt.getPrimaries(A.colorSpace),Ee=A.colorSpace===Vs||Fe===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const ke=A.isCompressedTexture||A.image[0].isCompressedTexture,Qe=A.image[0]&&A.image[0].isDataTexture,Be=[];for(let Re=0;Re<6;Re++)!ke&&!Qe?Be[Re]=w(A.image[Re],!0,o.maxCubemapSize):Be[Re]=Qe?A.image[Re].image:A.image[Re],Be[Re]=zt(A,Be[Re]);const Ue=Be[0],st=c.convert(A.format,A.colorSpace),lt=c.convert(A.type),_t=C(A.internalFormat,st,lt,A.normalized,A.colorSpace),J=A.isVideoTexture!==!0,we=Ne.__version===void 0||te===!0,Se=ge.dataReady;let Oe=D(A,Ue);se(i.TEXTURE_CUBE_MAP,A);let ze;if(ke){J&&we&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Oe,_t,Ue.width,Ue.height);for(let Re=0;Re<6;Re++){ze=Be[Re].mipmaps;for(let at=0;at<ze.length;at++){const it=ze[at];A.format!==ia?st!==null?J?Se&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,at,0,0,it.width,it.height,st,it.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,at,_t,it.width,it.height,0,it.data):yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?Se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,at,0,0,it.width,it.height,st,lt,it.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,at,_t,it.width,it.height,0,st,lt,it.data)}}}else{if(ze=A.mipmaps,J&&we){ze.length>0&&Oe++;const Re=gt(Be[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Oe,_t,Re.width,Re.height)}for(let Re=0;Re<6;Re++)if(Qe){J?Se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,Be[Re].width,Be[Re].height,st,lt,Be[Re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,_t,Be[Re].width,Be[Re].height,0,st,lt,Be[Re].data);for(let at=0;at<ze.length;at++){const Me=ze[at].image[Re].image;J?Se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,at+1,0,0,Me.width,Me.height,st,lt,Me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,at+1,_t,Me.width,Me.height,0,st,lt,Me.data)}}else{J?Se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,st,lt,Be[Re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,_t,st,lt,Be[Re]);for(let at=0;at<ze.length;at++){const it=ze[at];J?Se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,at+1,0,0,st,lt,it.image[Re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,at+1,_t,st,lt,it.image[Re])}}}M(A)&&O(i.TEXTURE_CUBE_MAP),Ne.__version=ge.version,A.onUpdate&&A.onUpdate(A)}B.__version=A.version}function We(B,A,ie,te,ge,Ne){const Fe=c.convert(ie.format,ie.colorSpace),pe=c.convert(ie.type),Ee=C(ie.internalFormat,Fe,pe,ie.normalized,ie.colorSpace),ke=n.get(A),Qe=n.get(ie);if(Qe.__renderTarget=A,!ke.__hasExternalTextures){const Be=Math.max(1,A.width>>Ne),Ue=Math.max(1,A.height>>Ne);ge===i.TEXTURE_3D||ge===i.TEXTURE_2D_ARRAY?t.texImage3D(ge,Ne,Ee,Be,Ue,A.depth,0,Fe,pe,null):t.texImage2D(ge,Ne,Ee,Be,Ue,0,Fe,pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,B),Yt(A)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,ge,Qe.__webglTexture,0,Dt(A)):(ge===i.TEXTURE_2D||ge>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,ge,Qe.__webglTexture,Ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function vt(B,A,ie){if(i.bindRenderbuffer(i.RENDERBUFFER,B),A.depthBuffer){const te=A.depthTexture,ge=te&&te.isDepthTexture?te.type:null,Ne=F(A.stencilBuffer,ge),Fe=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Yt(A)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Dt(A),Ne,A.width,A.height):ie?i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt(A),Ne,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Ne,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Fe,i.RENDERBUFFER,B)}else{const te=A.textures;for(let ge=0;ge<te.length;ge++){const Ne=te[ge],Fe=c.convert(Ne.format,Ne.colorSpace),pe=c.convert(Ne.type),Ee=C(Ne.internalFormat,Fe,pe,Ne.normalized,Ne.colorSpace);Yt(A)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Dt(A),Ee,A.width,A.height):ie?i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt(A),Ee,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Ee,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pt(B,A,ie){const te=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,B),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ge=n.get(A.depthTexture);if(ge.__renderTarget=A,(!ge.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),te){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,A.depthTexture.addEventListener("dispose",H)),ge.__webglTexture===void 0){ge.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ge.__webglTexture),se(i.TEXTURE_CUBE_MAP,A.depthTexture);const ke=c.convert(A.depthTexture.format),Qe=c.convert(A.depthTexture.type);let Be;A.depthTexture.format===vs?Be=i.DEPTH_COMPONENT24:A.depthTexture.format===Go&&(Be=i.DEPTH24_STENCIL8);for(let Ue=0;Ue<6;Ue++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Be,A.width,A.height,0,ke,Qe,null)}}else Te(A.depthTexture,0);const Ne=ge.__webglTexture,Fe=Dt(A),pe=te?i.TEXTURE_CUBE_MAP_POSITIVE_X+ie:i.TEXTURE_2D,Ee=A.depthTexture.format===Go?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(A.depthTexture.format===vs)Yt(A)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ee,pe,Ne,0,Fe):i.framebufferTexture2D(i.FRAMEBUFFER,Ee,pe,Ne,0);else if(A.depthTexture.format===Go)Yt(A)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ee,pe,Ne,0,Fe):i.framebufferTexture2D(i.FRAMEBUFFER,Ee,pe,Ne,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function pt(B){const A=n.get(B),ie=B.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==B.depthTexture){const te=B.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),te){const ge=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,te.removeEventListener("dispose",ge)};te.addEventListener("dispose",ge),A.__depthDisposeCallback=ge}A.__boundDepthTexture=te}if(B.depthTexture&&!A.__autoAllocateDepthBuffer)if(ie)for(let te=0;te<6;te++)Pt(A.__webglFramebuffer[te],B,te);else{const te=B.texture.mipmaps;te&&te.length>0?Pt(A.__webglFramebuffer[0],B,0):Pt(A.__webglFramebuffer,B,0)}else if(ie){A.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[te]),A.__webglDepthbuffer[te]===void 0)A.__webglDepthbuffer[te]=i.createRenderbuffer(),vt(A.__webglDepthbuffer[te],B,!1);else{const ge=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ne=A.__webglDepthbuffer[te];i.bindRenderbuffer(i.RENDERBUFFER,Ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,Ne)}}else{const te=B.texture.mipmaps;if(te&&te.length>0?t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),vt(A.__webglDepthbuffer,B,!1);else{const ge=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ne=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,Ne)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function It(B,A,ie){const te=n.get(B);A!==void 0&&We(te.__webglFramebuffer,B,B.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ie!==void 0&&pt(B)}function Xe(B){const A=B.texture,ie=n.get(B),te=n.get(A);B.addEventListener("dispose",y);const ge=B.textures,Ne=B.isWebGLCubeRenderTarget===!0,Fe=ge.length>1;if(Fe||(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=A.version,u.memory.textures++),Ne){ie.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(A.mipmaps&&A.mipmaps.length>0){ie.__webglFramebuffer[pe]=[];for(let Ee=0;Ee<A.mipmaps.length;Ee++)ie.__webglFramebuffer[pe][Ee]=i.createFramebuffer()}else ie.__webglFramebuffer[pe]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){ie.__webglFramebuffer=[];for(let pe=0;pe<A.mipmaps.length;pe++)ie.__webglFramebuffer[pe]=i.createFramebuffer()}else ie.__webglFramebuffer=i.createFramebuffer();if(Fe)for(let pe=0,Ee=ge.length;pe<Ee;pe++){const ke=n.get(ge[pe]);ke.__webglTexture===void 0&&(ke.__webglTexture=i.createTexture(),u.memory.textures++)}if(B.samples>0&&Yt(B)===!1){ie.__webglMultisampledFramebuffer=i.createFramebuffer(),ie.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let pe=0;pe<ge.length;pe++){const Ee=ge[pe];ie.__webglColorRenderbuffer[pe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ie.__webglColorRenderbuffer[pe]);const ke=c.convert(Ee.format,Ee.colorSpace),Qe=c.convert(Ee.type),Be=C(Ee.internalFormat,ke,Qe,Ee.normalized,Ee.colorSpace,B.isXRRenderTarget===!0),Ue=Dt(B);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue,Be,B.width,B.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,ie.__webglColorRenderbuffer[pe])}i.bindRenderbuffer(i.RENDERBUFFER,null),B.depthBuffer&&(ie.__webglDepthRenderbuffer=i.createRenderbuffer(),vt(ie.__webglDepthRenderbuffer,B,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Ne){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),se(i.TEXTURE_CUBE_MAP,A);for(let pe=0;pe<6;pe++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ee=0;Ee<A.mipmaps.length;Ee++)We(ie.__webglFramebuffer[pe][Ee],B,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ee);else We(ie.__webglFramebuffer[pe],B,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);M(A)&&O(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Fe){for(let pe=0,Ee=ge.length;pe<Ee;pe++){const ke=ge[pe],Qe=n.get(ke);let Be=i.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Be=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Be,Qe.__webglTexture),se(Be,ke),We(ie.__webglFramebuffer,B,ke,i.COLOR_ATTACHMENT0+pe,Be,0),M(ke)&&O(Be)}t.unbindTexture()}else{let pe=i.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(pe=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,te.__webglTexture),se(pe,A),A.mipmaps&&A.mipmaps.length>0)for(let Ee=0;Ee<A.mipmaps.length;Ee++)We(ie.__webglFramebuffer[Ee],B,A,i.COLOR_ATTACHMENT0,pe,Ee);else We(ie.__webglFramebuffer,B,A,i.COLOR_ATTACHMENT0,pe,0);M(A)&&O(pe),t.unbindTexture()}B.depthBuffer&&pt(B)}function xt(B){const A=B.textures;for(let ie=0,te=A.length;ie<te;ie++){const ge=A[ie];if(M(ge)){const Ne=k(B),Fe=n.get(ge).__webglTexture;t.bindTexture(Ne,Fe),O(Ne),t.unbindTexture()}}}const tn=[],Gt=[];function Mn(B){if(B.samples>0){if(Yt(B)===!1){const A=B.textures,ie=B.width,te=B.height;let ge=i.COLOR_BUFFER_BIT;const Ne=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Fe=n.get(B),pe=A.length>1;if(pe)for(let ke=0;ke<A.length;ke++)t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer);const Ee=B.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let ke=0;ke<A.length;ke++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(ge|=i.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(ge|=i.STENCIL_BUFFER_BIT)),pe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Fe.__webglColorRenderbuffer[ke]);const Qe=n.get(A[ke]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Qe,0)}i.blitFramebuffer(0,0,ie,te,0,0,ie,te,ge,i.NEAREST),p===!0&&(tn.length=0,Gt.length=0,tn.push(i.COLOR_ATTACHMENT0+ke),B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&(tn.push(Ne),Gt.push(Ne),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Gt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,tn))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pe)for(let ke=0;ke<A.length;ke++){t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.RENDERBUFFER,Fe.__webglColorRenderbuffer[ke]);const Qe=n.get(A[ke]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.TEXTURE_2D,Qe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&p){const A=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function Dt(B){return Math.min(o.maxSamples,B.samples)}function Yt(B){const A=n.get(B);return B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Y(B){const A=u.render.frame;S.get(B)!==A&&(S.set(B,A),B.update())}function zt(B,A){const ie=B.colorSpace,te=B.format,ge=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||ie!==yf&&ie!==Vs&&(Jt.getTransfer(ie)===vn?(te!==ia||ge!==hr)&&yt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):en("WebGLTextures: Unsupported texture color space:",ie)),A}function gt(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(g.width=B.naturalWidth||B.width,g.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(g.width=B.displayWidth,g.height=B.displayHeight):(g.width=B.width,g.height=B.height),g}this.allocateTextureUnit=ye,this.resetTextureUnits=ae,this.getTextureUnits=W,this.setTextureUnits=ue,this.setTexture2D=Te,this.setTexture2DArray=ne,this.setTexture3D=V,this.setTextureCube=xe,this.rebindTextures=It,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=Mn,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=We,this.useMultisampledRTT=Yt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Gy(i,e){function t(n,o=Vs){let c;const u=Jt.getTransfer(o);if(n===hr)return i.UNSIGNED_BYTE;if(n===Td)return i.UNSIGNED_SHORT_4_4_4_4;if(n===wd)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Sg)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===bg)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Mg)return i.BYTE;if(n===yg)return i.SHORT;if(n===$c)return i.UNSIGNED_SHORT;if(n===Ed)return i.INT;if(n===Ia)return i.UNSIGNED_INT;if(n===Ca)return i.FLOAT;if(n===Da)return i.HALF_FLOAT;if(n===Eg)return i.ALPHA;if(n===Tg)return i.RGB;if(n===ia)return i.RGBA;if(n===vs)return i.DEPTH_COMPONENT;if(n===Go)return i.DEPTH_STENCIL;if(n===wg)return i.RED;if(n===Ad)return i.RED_INTEGER;if(n===Yo)return i.RG;if(n===Rd)return i.RG_INTEGER;if(n===Cd)return i.RGBA_INTEGER;if(n===df||n===pf||n===gf||n===mf)if(u===vn)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(n===df)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===gf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===mf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(n===df)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pf)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===gf)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===mf)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vh||n===Wh||n===Xh||n===Yh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(n===Vh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Yh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zh||n===Jh||n===Kh||n===Qh||n===qh||n===_f||n===jh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(n===Zh||n===Jh)return u===vn?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(n===Kh)return u===vn?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(n===Qh)return c.COMPRESSED_R11_EAC;if(n===qh)return c.COMPRESSED_SIGNED_R11_EAC;if(n===_f)return c.COMPRESSED_RG11_EAC;if(n===jh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===$h||n===ed||n===td||n===nd||n===id||n===rd||n===ad||n===sd||n===od||n===ld||n===cd||n===ud||n===fd||n===hd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(n===$h)return u===vn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ed)return u===vn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===td)return u===vn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===nd)return u===vn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===id)return u===vn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===rd)return u===vn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ad)return u===vn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sd)return u===vn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===od)return u===vn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ld)return u===vn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===cd)return u===vn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ud)return u===vn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fd)return u===vn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===hd)return u===vn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===dd||n===pd||n===gd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(n===dd)return u===vn?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===md||n===vd||n===xf||n===_d)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(n===md)return c.COMPRESSED_RED_RGTC1_EXT;if(n===vd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xf)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_d)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===eu?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Vy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wy=`
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

}`;class Xy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ng(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Na({vertexShader:Vy,fragmentShader:Wy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ii(new rc(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Yy extends Zo{constructor(e,t){super();const n=this;let o=null,c=1,u=null,d="local-floor",p=1,g=null,S=null,E=null,_=null,x=null,R=null;const N=typeof XRWebGLBinding<"u",w=new Xy,M={},O=t.getContextAttributes();let k=null,C=null;const F=[],D=[],H=new ft;let y=null,P=null;const z=new fr;z.viewport=new Hn;const G=new fr;G.viewport=new Hn;const q=[z,G],ae=new $0;let W=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(me){let ve=F[me];return ve===void 0&&(ve=new lh,F[me]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(me){let ve=F[me];return ve===void 0&&(ve=new lh,F[me]=ve),ve.getGripSpace()},this.getHand=function(me){let ve=F[me];return ve===void 0&&(ve=new lh,F[me]=ve),ve.getHandSpace()};function ye(me){const ve=D.indexOf(me.inputSource);if(ve===-1)return;const Ze=F[ve];Ze!==void 0&&(Ze.update(me.inputSource,me.frame,g||u),Ze.dispatchEvent({type:me.type,data:me.inputSource}))}function _e(){o.removeEventListener("select",ye),o.removeEventListener("selectstart",ye),o.removeEventListener("selectend",ye),o.removeEventListener("squeeze",ye),o.removeEventListener("squeezestart",ye),o.removeEventListener("squeezeend",ye),o.removeEventListener("end",_e),o.removeEventListener("inputsourceschange",Te);for(let me=0;me<F.length;me++){const ve=D[me];ve!==null&&(D[me]=null,F[me].disconnect(ve))}W=null,ue=null,w.reset();for(const me in M)delete M[me];if(e.setRenderTarget(k),x=null,_=null,E=null,o=null,C=null,Lt.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(H.width,H.height,!1),P!==null){const me=P.camera;me.fov=P.fov,me.zoom=P.zoom,me.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(me){c=me,n.isPresenting===!0&&yt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(me){d=me,n.isPresenting===!0&&yt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||u},this.setReferenceSpace=function(me){g=me},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return E===null&&N&&(E=new XRWebGLBinding(o,t)),E},this.getFrame=function(){return R},this.getSession=function(){return o},this.setSession=async function(me){if(o=me,o!==null){if(k=e.getRenderTarget(),o.addEventListener("select",ye),o.addEventListener("selectstart",ye),o.addEventListener("selectend",ye),o.addEventListener("squeeze",ye),o.addEventListener("squeezestart",ye),o.addEventListener("squeezeend",ye),o.addEventListener("end",_e),o.addEventListener("inputsourceschange",Te),O.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(H),N&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ze=null,dt=null,We=null;O.depth&&(We=O.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ze=O.stencil?Go:vs,dt=O.stencil?eu:Ia);const vt={colorFormat:t.RGBA8,depthFormat:We,scaleFactor:c};E=this.getBinding(),_=E.createProjectionLayer(vt),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),C=new ra(_.textureWidth,_.textureHeight,{format:ia,type:hr,depthTexture:new iu(_.textureWidth,_.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,Ze),stencilBuffer:O.stencil,colorSpace:e.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}else{const Ze={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(o,t,Ze),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),C=new ra(x.framebufferWidth,x.framebufferHeight,{format:ia,type:hr,colorSpace:e.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(p),g=null,u=await o.requestReferenceSpace(d),Lt.setContext(o),Lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function Te(me){for(let ve=0;ve<me.removed.length;ve++){const Ze=me.removed[ve],dt=D.indexOf(Ze);dt>=0&&(D[dt]=null,F[dt].disconnect(Ze))}for(let ve=0;ve<me.added.length;ve++){const Ze=me.added[ve];let dt=D.indexOf(Ze);if(dt===-1){for(let vt=0;vt<F.length;vt++)if(vt>=D.length){D.push(Ze),dt=vt;break}else if(D[vt]===null){D[vt]=Ze,dt=vt;break}if(dt===-1)break}const We=F[dt];We&&We.connect(Ze)}}const ne=new K,V=new K;function xe(me,ve,Ze){ne.setFromMatrixPosition(ve.matrixWorld),V.setFromMatrixPosition(Ze.matrixWorld);const dt=ne.distanceTo(V),We=ve.projectionMatrix.elements,vt=Ze.projectionMatrix.elements,Pt=We[14]/(We[10]-1),pt=We[14]/(We[10]+1),It=(We[9]+1)/We[5],Xe=(We[9]-1)/We[5],xt=(We[8]-1)/We[0],tn=(vt[8]+1)/vt[0],Gt=Pt*xt,Mn=Pt*tn,Dt=dt/(-xt+tn),Yt=Dt*-xt;if(ve.matrixWorld.decompose(me.position,me.quaternion,me.scale),me.translateX(Yt),me.translateZ(Dt),me.matrixWorld.compose(me.position,me.quaternion,me.scale),me.matrixWorldInverse.copy(me.matrixWorld).invert(),We[10]===-1)me.projectionMatrix.copy(ve.projectionMatrix),me.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const Y=Pt+Dt,zt=pt+Dt,gt=Gt-Yt,B=Mn+(dt-Yt),A=It*pt/zt*Y,ie=Xe*pt/zt*Y;me.projectionMatrix.makePerspective(gt,B,A,ie,Y,zt),me.projectionMatrixInverse.copy(me.projectionMatrix).invert()}}function ut(me,ve){ve===null?me.matrixWorld.copy(me.matrix):me.matrixWorld.multiplyMatrices(ve.matrixWorld,me.matrix),me.matrixWorldInverse.copy(me.matrixWorld).invert()}this.updateCamera=function(me){if(o===null)return;let ve=me.near,Ze=me.far;w.texture!==null&&(w.depthNear>0&&(ve=w.depthNear),w.depthFar>0&&(Ze=w.depthFar)),ae.near=G.near=z.near=ve,ae.far=G.far=z.far=Ze,(W!==ae.near||ue!==ae.far)&&(o.updateRenderState({depthNear:ae.near,depthFar:ae.far}),W=ae.near,ue=ae.far),ae.layers.mask=me.layers.mask|6,z.layers.mask=ae.layers.mask&-5,G.layers.mask=ae.layers.mask&-3;const dt=me.parent,We=ae.cameras;ut(ae,dt);for(let vt=0;vt<We.length;vt++)ut(We[vt],dt);We.length===2?xe(ae,z,G):ae.projectionMatrix.copy(z.projectionMatrix),P===null&&me.isPerspectiveCamera&&(P={camera:me,fov:me.fov,zoom:me.zoom}),rt(me,ae,dt)};function rt(me,ve,Ze){Ze===null?me.matrix.copy(ve.matrixWorld):(me.matrix.copy(Ze.matrixWorld),me.matrix.invert(),me.matrix.multiply(ve.matrixWorld)),me.matrix.decompose(me.position,me.quaternion,me.scale),me.updateMatrixWorld(!0),me.projectionMatrix.copy(ve.projectionMatrix),me.projectionMatrixInverse.copy(ve.projectionMatrixInverse),me.isPerspectiveCamera&&(me.fov=nu*2*Math.atan(1/me.projectionMatrix.elements[5]),me.zoom=1)}this.getCamera=function(){return ae},this.getFoveation=function(){if(!(_===null&&x===null))return p},this.setFoveation=function(me){p=me,_!==null&&(_.fixedFoveation=me),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=me)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(ae)},this.getCameraTexture=function(me){return M[me]};let Ae=null;function se(me,ve){if(S=ve.getViewerPose(g||u),R=ve,S!==null){const Ze=S.views;x!==null&&(e.setRenderTargetFramebuffer(C,x.framebuffer),e.setRenderTarget(C));let dt=!1;Ze.length!==ae.cameras.length&&(ae.cameras.length=0,dt=!0);for(let pt=0;pt<Ze.length;pt++){const It=Ze[pt];let Xe=null;if(x!==null)Xe=x.getViewport(It);else{const tn=E.getViewSubImage(_,It);Xe=tn.viewport,pt===0&&(e.setRenderTargetTextures(C,tn.colorTexture,tn.depthStencilTexture),e.setRenderTarget(C))}let xt=q[pt];xt===void 0&&(xt=new fr,xt.layers.enable(pt),xt.viewport=new Hn,q[pt]=xt),xt.matrix.fromArray(It.transform.matrix),xt.matrix.decompose(xt.position,xt.quaternion,xt.scale),xt.projectionMatrix.fromArray(It.projectionMatrix),xt.projectionMatrixInverse.copy(xt.projectionMatrix).invert(),xt.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),pt===0&&(ae.matrix.copy(xt.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale)),dt===!0&&ae.cameras.push(xt)}const We=o.enabledFeatures;if(We&&We.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&N){E=n.getBinding();const pt=E.getDepthInformation(Ze[0]);pt&&pt.isValid&&pt.texture&&w.init(pt,o.renderState)}if(We&&We.includes("camera-access")&&N){e.state.unbindTexture(),E=n.getBinding();for(let pt=0;pt<Ze.length;pt++){const It=Ze[pt].camera;if(It){let Xe=M[It];Xe||(Xe=new Ng,M[It]=Xe);const xt=E.getCameraImage(It);Xe.sourceTexture=xt}}}}for(let Ze=0;Ze<F.length;Ze++){const dt=D[Ze],We=F[Ze];dt!==null&&We!==void 0&&We.update(dt,ve,g||u)}Ae&&Ae(me,ve),ve.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ve}),R=null}const Lt=new Gg;Lt.setAnimationLoop(se),this.setAnimationLoop=function(me){Ae=me},this.dispose=function(){}}}const Zy=new Fn,Kg=new wt;Kg.set(-1,0,0,0,1,0,0,0,1);function Jy(i,e){function t(w,M){w.matrixAutoUpdate===!0&&w.updateMatrix(),M.value.copy(w.matrix)}function n(w,M){M.color.getRGB(w.fogColor.value,Bg(i)),M.isFog?(w.fogNear.value=M.near,w.fogFar.value=M.far):M.isFogExp2&&(w.fogDensity.value=M.density)}function o(w,M,O,k,C){M.isNodeMaterial?M.uniformsNeedUpdate=!1:M.isMeshBasicMaterial?c(w,M):M.isMeshLambertMaterial?(c(w,M),M.envMap&&(w.envMapIntensity.value=M.envMapIntensity)):M.isMeshToonMaterial?(c(w,M),E(w,M)):M.isMeshPhongMaterial?(c(w,M),S(w,M),M.envMap&&(w.envMapIntensity.value=M.envMapIntensity)):M.isMeshStandardMaterial?(c(w,M),_(w,M),M.isMeshPhysicalMaterial&&x(w,M,C)):M.isMeshMatcapMaterial?(c(w,M),R(w,M)):M.isMeshDepthMaterial?c(w,M):M.isMeshDistanceMaterial?(c(w,M),N(w,M)):M.isMeshNormalMaterial?c(w,M):M.isLineBasicMaterial?(u(w,M),M.isLineDashedMaterial&&d(w,M)):M.isPointsMaterial?p(w,M,O,k):M.isSpriteMaterial?g(w,M):M.isShadowMaterial?(w.color.value.copy(M.color),w.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function c(w,M){w.opacity.value=M.opacity,M.color&&w.diffuse.value.copy(M.color),M.emissive&&w.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(w.map.value=M.map,t(M.map,w.mapTransform)),M.alphaMap&&(w.alphaMap.value=M.alphaMap,t(M.alphaMap,w.alphaMapTransform)),M.bumpMap&&(w.bumpMap.value=M.bumpMap,t(M.bumpMap,w.bumpMapTransform),w.bumpScale.value=M.bumpScale,M.side===nr&&(w.bumpScale.value*=-1)),M.normalMap&&(w.normalMap.value=M.normalMap,t(M.normalMap,w.normalMapTransform),w.normalScale.value.copy(M.normalScale),M.side===nr&&w.normalScale.value.negate()),M.displacementMap&&(w.displacementMap.value=M.displacementMap,t(M.displacementMap,w.displacementMapTransform),w.displacementScale.value=M.displacementScale,w.displacementBias.value=M.displacementBias),M.emissiveMap&&(w.emissiveMap.value=M.emissiveMap,t(M.emissiveMap,w.emissiveMapTransform)),M.specularMap&&(w.specularMap.value=M.specularMap,t(M.specularMap,w.specularMapTransform)),M.alphaTest>0&&(w.alphaTest.value=M.alphaTest);const O=e.get(M),k=O.envMap,C=O.envMapRotation;k&&(w.envMap.value=k,w.envMapRotation.value.setFromMatrix4(Zy.makeRotationFromEuler(C)).transpose(),k.isCubeTexture&&k.isRenderTargetTexture===!1&&w.envMapRotation.value.premultiply(Kg),w.reflectivity.value=M.reflectivity,w.ior.value=M.ior,w.refractionRatio.value=M.refractionRatio),M.lightMap&&(w.lightMap.value=M.lightMap,w.lightMapIntensity.value=M.lightMapIntensity,t(M.lightMap,w.lightMapTransform)),M.aoMap&&(w.aoMap.value=M.aoMap,w.aoMapIntensity.value=M.aoMapIntensity,t(M.aoMap,w.aoMapTransform))}function u(w,M){w.diffuse.value.copy(M.color),w.opacity.value=M.opacity,M.map&&(w.map.value=M.map,t(M.map,w.mapTransform))}function d(w,M){w.dashSize.value=M.dashSize,w.totalSize.value=M.dashSize+M.gapSize,w.scale.value=M.scale}function p(w,M,O,k){w.diffuse.value.copy(M.color),w.opacity.value=M.opacity,w.size.value=M.size*O,w.scale.value=k*.5,M.map&&(w.map.value=M.map,t(M.map,w.uvTransform)),M.alphaMap&&(w.alphaMap.value=M.alphaMap,t(M.alphaMap,w.alphaMapTransform)),M.alphaTest>0&&(w.alphaTest.value=M.alphaTest)}function g(w,M){w.diffuse.value.copy(M.color),w.opacity.value=M.opacity,w.rotation.value=M.rotation,M.map&&(w.map.value=M.map,t(M.map,w.mapTransform)),M.alphaMap&&(w.alphaMap.value=M.alphaMap,t(M.alphaMap,w.alphaMapTransform)),M.alphaTest>0&&(w.alphaTest.value=M.alphaTest)}function S(w,M){w.specular.value.copy(M.specular),w.shininess.value=Math.max(M.shininess,1e-4)}function E(w,M){M.gradientMap&&(w.gradientMap.value=M.gradientMap)}function _(w,M){w.metalness.value=M.metalness,M.metalnessMap&&(w.metalnessMap.value=M.metalnessMap,t(M.metalnessMap,w.metalnessMapTransform)),w.roughness.value=M.roughness,M.roughnessMap&&(w.roughnessMap.value=M.roughnessMap,t(M.roughnessMap,w.roughnessMapTransform)),M.envMap&&(w.envMapIntensity.value=M.envMapIntensity)}function x(w,M,O){w.ior.value=M.ior,M.sheen>0&&(w.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),w.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(w.sheenColorMap.value=M.sheenColorMap,t(M.sheenColorMap,w.sheenColorMapTransform)),M.sheenRoughnessMap&&(w.sheenRoughnessMap.value=M.sheenRoughnessMap,t(M.sheenRoughnessMap,w.sheenRoughnessMapTransform))),M.clearcoat>0&&(w.clearcoat.value=M.clearcoat,w.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(w.clearcoatMap.value=M.clearcoatMap,t(M.clearcoatMap,w.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(w.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,t(M.clearcoatRoughnessMap,w.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(w.clearcoatNormalMap.value=M.clearcoatNormalMap,t(M.clearcoatNormalMap,w.clearcoatNormalMapTransform),w.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===nr&&w.clearcoatNormalScale.value.negate())),M.dispersion>0&&(w.dispersion.value=M.dispersion),M.retroreflectivity>0&&(w.retroreflectivity.value=M.retroreflectivity),M.iridescence>0&&(w.iridescence.value=M.iridescence,w.iridescenceIOR.value=M.iridescenceIOR,w.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],w.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(w.iridescenceMap.value=M.iridescenceMap,t(M.iridescenceMap,w.iridescenceMapTransform)),M.iridescenceThicknessMap&&(w.iridescenceThicknessMap.value=M.iridescenceThicknessMap,t(M.iridescenceThicknessMap,w.iridescenceThicknessMapTransform))),M.transmission>0&&(w.transmission.value=M.transmission,w.transmissionSamplerMap.value=O.texture,w.transmissionSamplerSize.value.set(O.width,O.height),M.transmissionMap&&(w.transmissionMap.value=M.transmissionMap,t(M.transmissionMap,w.transmissionMapTransform)),w.thickness.value=M.thickness,M.thicknessMap&&(w.thicknessMap.value=M.thicknessMap,t(M.thicknessMap,w.thicknessMapTransform)),w.attenuationDistance.value=M.attenuationDistance,w.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(w.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(w.anisotropyMap.value=M.anisotropyMap,t(M.anisotropyMap,w.anisotropyMapTransform))),w.specularIntensity.value=M.specularIntensity,w.specularColor.value.copy(M.specularColor),M.specularColorMap&&(w.specularColorMap.value=M.specularColorMap,t(M.specularColorMap,w.specularColorMapTransform)),M.specularIntensityMap&&(w.specularIntensityMap.value=M.specularIntensityMap,t(M.specularIntensityMap,w.specularIntensityMapTransform))}function R(w,M){M.matcap&&(w.matcap.value=M.matcap)}function N(w,M){const O=e.get(M).light;w.referencePosition.value.setFromMatrixPosition(O.matrixWorld),w.nearDistance.value=O.shadow.camera.near,w.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:o}}function Ky(i,e,t,n){let o={},c={},u=[];const d=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function p(C,F){const D=F.program;n.uniformBlockBinding(C,D)}function g(C,F){let D=o[C.id];D===void 0&&(w(C),D=S(C),o[C.id]=D,C.addEventListener("dispose",O));const H=F.program;n.updateUBOMapping(C,H);const y=e.render.frame;c[C.id]!==y&&(_(C),c[C.id]=y)}function S(C){const F=E();C.__bindingPointIndex=F;const D=i.createBuffer(),H=C.__size,y=C.usage;return i.bindBuffer(i.UNIFORM_BUFFER,D),i.bufferData(i.UNIFORM_BUFFER,H,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,F,D),D}function E(){for(let C=0;C<d;C++)if(u.indexOf(C)===-1)return u.push(C),C;return en("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(C){const F=o[C.id],D=C.uniforms,H=C.__cache;i.bindBuffer(i.UNIFORM_BUFFER,F);for(let y=0,P=D.length;y<P;y++){const z=D[y];if(Array.isArray(z))for(let G=0,q=z.length;G<q;G++)x(z[G],y,G,H);else x(z,y,0,H)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function x(C,F,D,H){if(N(C,F,D,H)===!0){const y=C.__offset,P=C.value;if(Array.isArray(P)){let z=0;for(let G=0;G<P.length;G++){const q=P[G],ae=M(q);R(q,C.__data,z),typeof q!="number"&&typeof q!="boolean"&&!q.isMatrix3&&!ArrayBuffer.isView(q)&&(z+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}}else R(P,C.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,C.__data)}}function R(C,F,D){typeof C=="number"||typeof C=="boolean"?F[0]=C:C.isMatrix3?(F[0]=C.elements[0],F[1]=C.elements[1],F[2]=C.elements[2],F[3]=0,F[4]=C.elements[3],F[5]=C.elements[4],F[6]=C.elements[5],F[7]=0,F[8]=C.elements[6],F[9]=C.elements[7],F[10]=C.elements[8],F[11]=0):ArrayBuffer.isView(C)?F.set(new C.constructor(C.buffer,C.byteOffset,F.length)):C.toArray(F,D)}function N(C,F,D,H){const y=C.value,P=F+"_"+D;if(H[P]===void 0)return typeof y=="number"||typeof y=="boolean"?H[P]=y:ArrayBuffer.isView(y)?H[P]=y.slice():H[P]=y.clone(),!0;{const z=H[P];if(typeof y=="number"||typeof y=="boolean"){if(z!==y)return H[P]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(z.equals(y)===!1)return z.copy(y),!0}}return!1}function w(C){const F=C.uniforms;let D=0;const H=16;for(let P=0,z=F.length;P<z;P++){const G=Array.isArray(F[P])?F[P]:[F[P]];for(let q=0,ae=G.length;q<ae;q++){const W=G[q],ue=Array.isArray(W.value)?W.value:[W.value];for(let ye=0,_e=ue.length;ye<_e;ye++){const Te=ue[ye],ne=M(Te),V=D%H,xe=V%ne.boundary,ut=V+xe;D+=xe,ut!==0&&H-ut<ne.storage&&(D+=H-ut),W.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=D,D+=ne.storage}}}const y=D%H;return y>0&&(D+=H-y),C.__size=D,C.__cache={},this}function M(C){const F={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(F.boundary=4,F.storage=4):C.isVector2?(F.boundary=8,F.storage=8):C.isVector3||C.isColor?(F.boundary=16,F.storage=12):C.isVector4?(F.boundary=16,F.storage=16):C.isMatrix3?(F.boundary=48,F.storage=48):C.isMatrix4?(F.boundary=64,F.storage=64):C.isTexture?yt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(F.boundary=16,F.storage=C.byteLength):yt("WebGLRenderer: Unsupported uniform value type.",C),F}function O(C){const F=C.target;F.removeEventListener("dispose",O);const D=u.indexOf(F.__bindingPointIndex);u.splice(D,1),i.deleteBuffer(o[F.id]),delete o[F.id],delete c[F.id]}function k(){for(const C in o)i.deleteBuffer(o[C]);u=[],o={},c={}}return{bind:p,update:g,dispose:k}}const Qy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Aa=null;function qy(){return Aa===null&&(Aa=new y0(Qy,16,16,Yo,Da),Aa.name="DFG_LUT",Aa.minFilter=Pi,Aa.magFilter=Pi,Aa.wrapS=ds,Aa.wrapT=ds,Aa.generateMipmaps=!1,Aa.needsUpdate=!0),Aa}class jy{constructor(e={}){const{canvas:t=Um(),context:n=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:g=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:E=!1,reversedDepthBuffer:_=!1,outputBufferType:x=hr}=e;this.isWebGLRenderer=!0;let R;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");R=n.getContextAttributes().alpha}else R=u;const N=x,w=new Set([Cd,Rd,Ad]),M=new Set([hr,Ia,$c,eu,Td,wd]),O=new Uint32Array(4),k=new Int32Array(4),C=new K;let F=null,D=null;const H=[],y=[];let P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=La,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const z=this;let G=!1,q=null,ae=null,W=null,ue=null;this._outputColorSpace=Wi;let ye=0,_e=0,Te=null,ne=-1,V=null;const xe=new Hn,ut=new Hn;let rt=null;const Ae=new At(0);let se=0,Lt=t.width,me=t.height,ve=1,Ze=null,dt=null;const We=new Hn(0,0,Lt,me),vt=new Hn(0,0,Lt,me);let Pt=!1;const pt=new Fd;let It=!1,Xe=!1;const xt=new Fn,tn=new K,Gt=new Hn,Mn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Dt=!1;function Yt(){return Te===null?ve:1}let Y=n;function zt(L,Q){return t.getContext(L,Q)}let gt,B,A,ie,te,ge,Ne,Fe,pe,Ee,ke,Qe,Be,Ue,st,lt,_t,J,we,Se,Oe,ze,Re;try{const L={alpha:!0,depth:o,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:g,powerPreference:S,failIfMajorPerformanceCaveat:E};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Sd}`),t.addEventListener("webglcontextlost",Me,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",nt,!1),Y===null){const Q="webgl2";if(Y=zt(Q,L),Y===null)throw zt(Q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}at()}catch(L){throw t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",nt,!1),en("WebGLRenderer: "+L.message),L}function at(){gt=new qx(Y),gt.init(),Oe=new Gy(Y,gt),B=new Hx(Y,gt,e,Oe),A=new ky(Y,gt),B.reversedDepthBuffer&&_&&A.buffers.depth.setReversed(!0),ae=Y.createFramebuffer(),W=Y.createFramebuffer(),ue=Y.createFramebuffer(),ie=new eM(Y),te=new wy,ge=new Hy(Y,gt,A,te,B,Oe,ie),Ne=new Qx(z),Fe=new nv(Y),ze=new zx(Y,Fe),pe=new jx(Y,Fe,ie,ze),Ee=new nM(Y,pe,Fe,ze,ie),J=new tM(Y,B,ge),st=new Gx(te),ke=new Ty(z,Ne,gt,B,ze,st),Qe=new Jy(z,te),Be=new Ry,Ue=new Ny(gt),_t=new Bx(z,Ne,A,Ee,R,p),lt=new zy(z,Ee,B),Re=new Ky(Y,ie,B,A),we=new kx(Y,gt,ie),Se=new $x(Y,gt,ie),ie.programs=ke.programs,z.capabilities=B,z.extensions=gt,z.properties=te,z.renderLists=Be,z.shadowMap=lt,z.state=A,z.info=ie}N!==hr&&(P=new rM(N,t.width,t.height,d,o,c));const it=new Yy(z,Y);this.xr=it,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const L=gt.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=gt.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(L){L!==void 0&&(ve=L,this.setSize(Lt,me,!1))},this.getSize=function(L){return L.set(Lt,me)},this.setSize=function(L,Q,de=!0){if(it.isPresenting){yt("WebGLRenderer: Can't change size while VR device is presenting.");return}Lt=L,me=Q,t.width=Math.floor(L*ve),t.height=Math.floor(Q*ve),de===!0&&(t.style.width=L+"px",t.style.height=Q+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,L,Q)},this.getDrawingBufferSize=function(L){return L.set(Lt*ve,me*ve).floor()},this.setDrawingBufferSize=function(L,Q,de){Lt=L,me=Q,ve=de,t.width=Math.floor(L*de),t.height=Math.floor(Q*de),this.setViewport(0,0,L,Q)},this.setEffects=function(L){if(N===hr){en("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let Q=0;Q<L.length;Q++)if(L[Q].isOutputPass===!0){yt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(xe)},this.getViewport=function(L){return L.copy(We)},this.setViewport=function(L,Q,de,le){L.isVector4?We.set(L.x,L.y,L.z,L.w):We.set(L,Q,de,le),A.viewport(xe.copy(We).multiplyScalar(ve).round())},this.getScissor=function(L){return L.copy(vt)},this.setScissor=function(L,Q,de,le){L.isVector4?vt.set(L.x,L.y,L.z,L.w):vt.set(L,Q,de,le),A.scissor(ut.copy(vt).multiplyScalar(ve).round())},this.getScissorTest=function(){return Pt},this.setScissorTest=function(L){A.setScissorTest(Pt=L)},this.setOpaqueSort=function(L){Ze=L},this.setTransparentSort=function(L){dt=L},this.getClearColor=function(L){return L.copy(_t.getClearColor())},this.setClearColor=function(){_t.setClearColor(...arguments)},this.getClearAlpha=function(){return _t.getClearAlpha()},this.setClearAlpha=function(){_t.setClearAlpha(...arguments)},this.clear=function(L=!0,Q=!0,de=!0){let le=0;if(L){let ce=!1;if(Te!==null){const Ie=Te.texture.format;ce=w.has(Ie)}if(ce){const Ie=Te.texture.type,qe=M.has(Ie),Ge=_t.getClearColor(),je=_t.getClearAlpha(),ct=Ge.r,Tt=Ge.g,St=Ge.b;qe?(O[0]=ct,O[1]=Tt,O[2]=St,O[3]=je,Y.clearBufferuiv(Y.COLOR,0,O)):(k[0]=ct,k[1]=Tt,k[2]=St,k[3]=je,Y.clearBufferiv(Y.COLOR,0,k))}else le|=Y.COLOR_BUFFER_BIT}Q&&(le|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),de&&(le|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),le!==0&&Y.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),q=L},this.dispose=function(){t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",nt,!1),_t.dispose(),Be.dispose(),Ue.dispose(),te.dispose(),Ne.dispose(),Ee.dispose(),ze.dispose(),Re.dispose(),ke.dispose(),it.dispose(),it.removeEventListener("sessionstart",un),it.removeEventListener("sessionend",Kt),Tn.stop()};function Me(L){L.preventDefault(),op("WebGLRenderer: Context Lost."),G=!0}function Pe(){op("WebGLRenderer: Context Restored."),G=!1;const L=ie.autoReset,Q=lt.enabled,de=lt.autoUpdate,le=lt.needsUpdate,ce=lt.type;at(),ie.autoReset=L,lt.enabled=Q,lt.autoUpdate=de,lt.needsUpdate=le,lt.type=ce}function nt(L){en("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function bt(L){const Q=L.target;Q.removeEventListener("dispose",bt),Pn(Q)}function Pn(L){sn(L),te.remove(L)}function sn(L){const Q=te.get(L).programs;Q!==void 0&&(Q.forEach(function(de){ke.releaseProgram(de)}),L.isShaderMaterial&&ke.releaseShaderCache(L))}this.renderBufferDirect=function(L,Q,de,le,ce,Ie){Q===null&&(Q=Mn);const qe=ce.isMesh&&ce.matrixWorld.determinantAffine()<0,Ge=yn(L,Q,de,le,ce);A.setMaterial(le,qe);let je=de.index,ct=1;if(le.wireframe===!0){if(je=pe.getWireframeAttribute(de),je===void 0)return;ct=2}const Tt=de.drawRange,St=de.attributes.position;let ot=Tt.start*ct,Ht=(Tt.start+Tt.count)*ct;Ie!==null&&(ot=Math.max(ot,Ie.start*ct),Ht=Math.min(Ht,(Ie.start+Ie.count)*ct)),je!==null?(ot=Math.max(ot,0),Ht=Math.min(Ht,je.count)):St!=null&&(ot=Math.max(ot,0),Ht=Math.min(Ht,St.count));const fn=Ht-ot;if(fn<0||fn===1/0)return;ze.setup(ce,le,Ge,de,je);let rn,jt=we;if(je!==null&&(rn=Fe.get(je),jt=Se,jt.setIndex(rn)),ce.isMesh)le.wireframe===!0?(A.setLineWidth(le.wireframeLinewidth*Yt()),jt.setMode(Y.LINES)):jt.setMode(Y.TRIANGLES);else if(ce.isLine){let Bn=le.linewidth;Bn===void 0&&(Bn=1),A.setLineWidth(Bn*Yt()),ce.isLineSegments?jt.setMode(Y.LINES):ce.isLineLoop?jt.setMode(Y.LINE_LOOP):jt.setMode(Y.LINE_STRIP)}else ce.isPoints?jt.setMode(Y.POINTS):ce.isSprite&&jt.setMode(Y.TRIANGLES);if(ce.isBatchedMesh)if(gt.get("WEBGL_multi_draw"))jt.renderMultiDraw(ce._multiDrawStarts,ce._multiDrawCounts,ce._multiDrawCount);else{const Bn=ce._multiDrawStarts,$e=ce._multiDrawCounts,Rt=ce._multiDrawCount,Ut=je?Fe.get(je).bytesPerElement:1,hi=te.get(le).currentProgram.getUniforms();for(let xi=0;xi<Rt;xi++)hi.setValue(Y,"_gl_DrawID",xi),jt.render(Bn[xi]/Ut,$e[xi])}else if(ce.isInstancedMesh)jt.renderInstances(ot,fn,ce.count);else if(de.isInstancedBufferGeometry){const Bn=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,$e=Math.min(de.instanceCount,Bn);jt.renderInstances(ot,fn,$e)}else jt.render(ot,fn)};function nn(L,Q,de,le){q!==null&&L.isNodeMaterial&&q.setObject(le,L),It===!0&&st.setState(L,de,!1),L.transparent===!0&&L.side===Dr&&L.forceSinglePass===!1?(L.side=nr,L.needsUpdate=!0,gr(L,Q,le),L.side=Wo,L.needsUpdate=!0,gr(L,Q,le),L.side=Dr):gr(L,Q,le)}this.compile=function(L,Q,de=null){de===null&&(de=L),q!==null&&q.renderStart(L,Q,de),D=Ue.get(de),D.init(Q),y.push(D),de.traverseVisible(function(ce){ce.isLight&&ce.layers.test(Q.layers)&&(D.pushLight(ce),ce.castShadow&&D.pushShadow(ce))}),L!==de&&L.traverseVisible(function(ce){ce.isLight&&ce.layers.test(Q.layers)&&(D.pushLight(ce),ce.castShadow&&D.pushShadow(ce))}),D.setupLights(),q!==null&&q.updateLights(D.state.lightsArray),Xe=this.localClippingEnabled,It=st.init(this.clippingPlanes,Xe),It===!0&&st.setGlobalState(this.clippingPlanes,Q),q!==null&&lt.render(D.state.shadowsArray,de,Q);const le=new Set;return L.traverse(function(ce){if(!(ce.isMesh||ce.isPoints||ce.isLine||ce.isSprite))return;const Ie=ce.material;if(Ie)if(Array.isArray(Ie))for(let qe=0;qe<Ie.length;qe++){const Ge=Ie[qe];nn(Ge,de,Q,ce),le.add(Ge)}else nn(Ie,de,Q,ce),le.add(Ie)}),D=y.pop(),q!==null&&q.renderEnd(),le},this.compileAsync=function(L,Q,de=null){const le=this.compile(L,Q,de);return new Promise(ce=>{function Ie(){if(le.forEach(function(qe){const je=te.get(qe).currentProgram;(je===void 0||je.isReady())&&le.delete(qe)}),le.size===0){ce(L);return}setTimeout(Ie,10)}gt.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let Nt=null;function Wt(L){Nt&&Nt(L)}function un(){Tn.stop()}function Kt(){Tn.start()}const Tn=new Gg;Tn.setAnimationLoop(Wt),typeof self<"u"&&Tn.setContext(self),this.setAnimationLoop=function(L){Nt=L,it.setAnimationLoop(L),L===null?Tn.stop():Tn.start()},it.addEventListener("sessionstart",un),it.addEventListener("sessionend",Kt),this.render=function(L,Q){if(Q!==void 0&&Q.isCamera!==!0){en("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;q!==null&&q.renderStart(L,Q);const de=it.enabled===!0&&it.isPresenting===!0,le=P!==null&&(Te===null||de)&&P.begin(z,Te);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(Q),Q=it.getCamera()),L.isScene===!0&&L.onBeforeRender(z,L,Q,Te),D=Ue.get(L,y.length),D.init(Q),D.state.textureUnits=ge.getTextureUnits(),y.push(D),xt.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),pt.setFromProjectionMatrix(xt,Pa,Q.reversedDepth),Xe=this.localClippingEnabled,It=st.init(this.clippingPlanes,Xe),F=Be.get(L,H.length),F.init(),H.push(F),it.enabled===!0&&it.isPresenting===!0){const qe=z.xr.getDepthSensingMesh();qe!==null&&Kn(qe,Q,-1/0,z.sortObjects)}Kn(L,Q,0,z.sortObjects),F.finish(),q!==null&&q.updateLights(D.state.lightsArray),z.sortObjects===!0&&F.sort(Ze,dt),Dt=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,Dt&&_t.addToRenderList(F,L),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),It===!0&&st.beginShadows();const ce=D.state.shadowsArray;if(lt.render(ce,L,Q),It===!0&&st.endShadows(),(le&&P.hasRenderPass())===!1){const qe=F.opaque,Ge=F.transmissive;if(D.setupLights(),Q.isArrayCamera){const je=Q.cameras;if(Ge.length>0)for(let ct=0,Tt=je.length;ct<Tt;ct++){const St=je[ct];aa(qe,Ge,L,St)}Dt&&_t.render(L);for(let ct=0,Tt=je.length;ct<Tt;ct++){const St=je[ct];Qt(F,L,St,St.viewport)}}else Ge.length>0&&aa(qe,Ge,L,Q),Dt&&_t.render(L),Qt(F,L,Q)}Te!==null&&_e===0&&(ge.updateMultisampleRenderTarget(Te),ge.updateRenderTargetMipmap(Te)),le&&P.end(z),L.isScene===!0&&L.onAfterRender(z,L,Q),ze.resetDefaultState(),ne=-1,V=null,y.pop(),y.length>0?(D=y[y.length-1],ge.setTextureUnits(D.state.textureUnits),It===!0&&st.setGlobalState(z.clippingPlanes,D.state.camera)):D=null,H.pop(),H.length>0?F=H[H.length-1]:F=null,q!==null&&q.renderEnd()};function Kn(L,Q,de,le){if(L.visible===!1)return;if(L.layers.test(Q.layers)){if(L.isGroup)de=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(Q);else if(L.isLightProbeGrid)D.pushLightProbeGrid(L);else if(L.isLight)D.pushLight(L),L.castShadow&&D.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||L.intersectsFrustum(pt)){le&&Gt.setFromMatrixPosition(L.matrixWorld).applyMatrix4(xt);const qe=Ee.update(L),Ge=L.material;Ge.visible&&F.push(L,qe,Ge,de,Gt.z,null,Q)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||L.intersectsFrustum(pt))){const qe=Ee.update(L),Ge=L.material;if(le&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Gt.copy(L.boundingSphere.center)):(qe.boundingSphere===null&&qe.computeBoundingSphere(),Gt.copy(qe.boundingSphere.center)),Gt.applyMatrix4(L.matrixWorld).applyMatrix4(xt)),Array.isArray(Ge)){const je=qe.groups;for(let ct=0,Tt=je.length;ct<Tt;ct++){const St=je[ct],ot=Ge[St.materialIndex];ot&&ot.visible&&F.push(L,qe,ot,de,Gt.z,St,Q)}}else Ge.visible&&F.push(L,qe,Ge,de,Gt.z,null,Q)}}const Ie=L.children;for(let qe=0,Ge=Ie.length;qe<Ge;qe++)Kn(Ie[qe],Q,de,le)}function Qt(L,Q,de,le){const{opaque:ce,transmissive:Ie,transparent:qe}=L;D.setupLightsView(de),It===!0&&st.setGlobalState(z.clippingPlanes,de),le&&A.viewport(xe.copy(le)),ce.length>0&&pr(ce,Q,de),Ie.length>0&&pr(Ie,Q,de),qe.length>0&&pr(qe,Q,de),A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),A.setPolygonOffset(!1)}function aa(L,Q,de,le){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[le.id]===void 0){const ot=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[le.id]=new ra(1,1,{generateMipmaps:!0,type:ot?Da:hr,minFilter:Ho,samples:Math.max(4,B.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Jt.workingColorSpace})}const Ie=D.state.transmissionRenderTarget[le.id],qe=le.viewport||xe;Ie.setSize(qe.z*z.transmissionResolutionScale,qe.w*z.transmissionResolutionScale);const Ge=z.getRenderTarget(),je=z.getActiveCubeFace(),ct=z.getActiveMipmapLevel();z.setRenderTarget(Ie),z.getClearColor(Ae),se=z.getClearAlpha(),se<1&&z.setClearColor(16777215,.5),z.clear(),Dt&&_t.render(de);const Tt=z.toneMapping;z.toneMapping=La;const St=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),D.setupLightsView(le),It===!0&&st.setGlobalState(z.clippingPlanes,le),pr(L,de,le),ge.updateMultisampleRenderTarget(Ie),ge.updateRenderTargetMipmap(Ie),gt.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let Ht=0,fn=Q.length;Ht<fn;Ht++){const rn=Q[Ht],{object:jt,geometry:Bn,material:$e,group:Rt}=rn;if($e.side===Dr&&jt.layers.test(le.layers)){const Ut=$e.side;$e.side=nr,$e.needsUpdate=!0,Nr(jt,de,le,Bn,$e,Rt),$e.side=Ut,$e.needsUpdate=!0,ot=!0}}ot===!0&&(ge.updateMultisampleRenderTarget(Ie),ge.updateRenderTargetMipmap(Ie))}z.setRenderTarget(Ge,je,ct),z.setClearColor(Ae,se),St!==void 0&&(le.viewport=St),z.toneMapping=Tt}function pr(L,Q,de){const le=Q.isScene===!0?Q.overrideMaterial:null;for(let ce=0,Ie=L.length;ce<Ie;ce++){const qe=L[ce],{object:Ge,geometry:je,group:ct}=qe;let Tt=qe.material;Tt.allowOverride===!0&&le!==null&&(Tt=le),Ge.layers.test(de.layers)&&Nr(Ge,Q,de,je,Tt,ct)}}function Nr(L,Q,de,le,ce,Ie){q!==null&&ce.isNodeMaterial&&q.setObject(L,ce),L.onBeforeRender(z,Q,de,le,ce,Ie),L.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),ce.onBeforeRender(z,Q,de,le,L,Ie),ce.transparent===!0&&ce.side===Dr&&ce.forceSinglePass===!1?(ce.side=nr,ce.needsUpdate=!0,z.renderBufferDirect(de,Q,le,ce,L,Ie),ce.side=Wo,ce.needsUpdate=!0,z.renderBufferDirect(de,Q,le,ce,L,Ie),ce.side=Dr):z.renderBufferDirect(de,Q,le,ce,L,Ie),L.onAfterRender(z,Q,de,le,ce,Ie)}function gr(L,Q,de){Q.isScene!==!0&&(Q=Mn);const le=te.get(L),ce=D.state.lights,Ie=D.state.shadowsArray,qe=ce.state.version,Ge=ke.getParameters(L,ce.state,Ie,Q,de,D.state.lightProbeGridArray),je=ke.getProgramCacheKey(Ge);let ct=le.programs;le.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?Q.environment:null,le.fog=Q.fog;const Tt=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;le.envMap=Ne.get(L.envMap||le.environment,Tt),le.envMapRotation=le.environment!==null&&L.envMap===null?Q.environmentRotation:L.envMapRotation,ct===void 0&&(L.addEventListener("dispose",bt),ct=new Map,le.programs=ct);let St=ct.get(je);if(St!==void 0){if(le.currentProgram===St&&le.lightsStateVersion===qe)return Ys(L,Ge),St}else Ge.uniforms=ke.getUniforms(L),q!==null&&L.isNodeMaterial&&q.build(L,de,Ge),L.onBeforeCompile(Ge,z),St=ke.acquireProgram(Ge,je),ct.set(je,St),le.uniforms=Ge.uniforms;const ot=le.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(ot.clippingPlanes=st.uniform),Ys(L,Ge),le.needsLights=fi(L),le.lightsStateVersion=qe,le.needsLights&&(ot.ambientLightColor.value=ce.state.ambient,ot.lightProbe.value=ce.state.probe,ot.sunLights.value=ce.state.sun,ot.sunLightShadows.value=ce.state.sunShadow,ot.directionalLights.value=ce.state.directional,ot.directionalLightShadows.value=ce.state.directionalShadow,ot.spotLights.value=ce.state.spot,ot.spotLightShadows.value=ce.state.spotShadow,ot.rectAreaLights.value=ce.state.rectArea,ot.ltc_1.value=ce.state.rectAreaLTC1,ot.ltc_2.value=ce.state.rectAreaLTC2,ot.pointLights.value=ce.state.point,ot.pointLightShadows.value=ce.state.pointShadow,ot.hemisphereLights.value=ce.state.hemi,ot.sunShadowMatrix.value=ce.state.sunShadowMatrix,ot.sunShadowCascade.value=ce.state.sunShadowCascade,ot.directionalShadowMatrix.value=ce.state.directionalShadowMatrix,ot.spotLightMatrix.value=ce.state.spotLightMatrix,ot.spotLightMap.value=ce.state.spotLightMap,ot.pointShadowMatrix.value=ce.state.pointShadowMatrix),le.lightProbeGrid=D.state.lightProbeGridArray.length>0,le.currentProgram=St,le.uniformsList=null,St}function Xs(L){if(L.uniformsList===null){const Q=L.currentProgram.getUniforms();L.uniformsList=vf.seqWithValue(Q.seq,L.uniforms)}return L.uniformsList}function Ys(L,Q){const de=te.get(L);de.outputColorSpace=Q.outputColorSpace,de.batching=Q.batching,de.batchingColor=Q.batchingColor,de.instancing=Q.instancing,de.instancingColor=Q.instancingColor,de.instancingMorph=Q.instancingMorph,de.skinning=Q.skinning,de.morphTargets=Q.morphTargets,de.morphNormals=Q.morphNormals,de.morphColors=Q.morphColors,de.morphTargetsCount=Q.morphTargetsCount,de.numClippingPlanes=Q.numClippingPlanes,de.numIntersection=Q.numClipIntersection,de.vertexAlphas=Q.vertexAlphas,de.vertexTangents=Q.vertexTangents,de.toneMapping=Q.toneMapping}function Zt(L,Q){if(L.length===0)return null;if(L.length===1)return L[0].texture!==null?L[0]:null;C.setFromMatrixPosition(Q.matrixWorld);for(let de=0,le=L.length;de<le;de++){const ce=L[de];if(ce.texture!==null&&ce.boundingBox.containsPoint(C))return ce}return null}function yn(L,Q,de,le,ce){Q.isScene!==!0&&(Q=Mn),ge.resetTextureUnits();const Ie=Q.fog,qe=le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial?Q.environment:null,Ge=Te===null?z.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:Jt.workingColorSpace,je=le.isMeshStandardMaterial||le.isMeshLambertMaterial&&!le.envMap||le.isMeshPhongMaterial&&!le.envMap,ct=Ne.get(le.envMap||qe,je),Tt=le.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,St=!!de.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),ot=!!de.morphAttributes.position,Ht=!!de.morphAttributes.normal,fn=!!de.morphAttributes.color;let rn=La;le.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(rn=z.toneMapping);const jt=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,Bn=jt!==void 0?jt.length:0,$e=te.get(le),Rt=D.state.lights;if(It===!0&&(Xe===!0||L!==V)){const on=L===V&&le.id===ne;st.setState(le,L,on)}let Ut=!1;le.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Rt.state.version||$e.outputColorSpace!==Ge||ce.isBatchedMesh&&$e.batching===!1||!ce.isBatchedMesh&&$e.batching===!0||ce.isBatchedMesh&&$e.batchingColor===!0&&ce._colorsTexture===null||ce.isBatchedMesh&&$e.batchingColor===!1&&ce._colorsTexture!==null||ce.isInstancedMesh&&$e.instancing===!1||!ce.isInstancedMesh&&$e.instancing===!0||ce.isSkinnedMesh&&$e.skinning===!1||!ce.isSkinnedMesh&&$e.skinning===!0||ce.isInstancedMesh&&$e.instancingColor===!0&&ce.instanceColor===null||ce.isInstancedMesh&&$e.instancingColor===!1&&ce.instanceColor!==null||ce.isInstancedMesh&&$e.instancingMorph===!0&&ce.morphTexture===null||ce.isInstancedMesh&&$e.instancingMorph===!1&&ce.morphTexture!==null||$e.envMap!==ct||le.fog===!0&&$e.fog!==Ie||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==st.numPlanes||$e.numIntersection!==st.numIntersection)||$e.vertexAlphas!==Tt||$e.vertexTangents!==St||$e.morphTargets!==ot||$e.morphNormals!==Ht||$e.morphColors!==fn||$e.toneMapping!==rn||$e.morphTargetsCount!==Bn||!!$e.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(Ut=!0):(Ut=!0,$e.__version=le.version);let hi=$e.currentProgram;Ut===!0&&(hi=gr(le,Q,ce),q&&le.isNodeMaterial&&q.onUpdateProgram(le,hi,$e));let xi=!1,ti=!1,mr=!1;const Ft=hi.getUniforms(),wn=$e.uniforms;if(A.useProgram(hi.program)&&(xi=!0,ti=!0,mr=!0),le.id!==ne&&(ne=le.id,ti=!0),$e.needsLights){const on=Zt(D.state.lightProbeGridArray,ce);$e.lightProbeGrid!==on&&($e.lightProbeGrid=on,ti=!0)}if(xi||V!==L){A.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),Ft.setValue(Y,"projectionMatrix",L.projectionMatrix),Ft.setValue(Y,"viewMatrix",L.matrixWorldInverse);const ni=Ft.map.cameraPosition;ni!==void 0&&ni.setValue(Y,tn.setFromMatrixPosition(L.matrixWorld)),B.logarithmicDepthBuffer&&Ft.setValue(Y,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Ft.setValue(Y,"isOrthographic",L.isOrthographicCamera===!0),V!==L&&(V=L,ti=!0,mr=!0)}if($e.needsLights&&(Rt.state.sunShadowMap.length>0&&Ft.setValue(Y,"sunShadowMap",Rt.state.sunShadowMap,ge),Rt.state.directionalShadowMap.length>0&&Ft.setValue(Y,"directionalShadowMap",Rt.state.directionalShadowMap,ge),Rt.state.spotShadowMap.length>0&&Ft.setValue(Y,"spotShadowMap",Rt.state.spotShadowMap,ge),Rt.state.pointShadowMap.length>0&&Ft.setValue(Y,"pointShadowMap",Rt.state.pointShadowMap,ge)),ce.isSkinnedMesh){Ft.setOptional(Y,ce,"bindMatrix"),Ft.setOptional(Y,ce,"bindMatrixInverse");const on=ce.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),Ft.setValue(Y,"boneTexture",on.boneTexture,ge))}ce.isBatchedMesh&&(Ft.setOptional(Y,ce,"batchingTexture"),Ft.setValue(Y,"batchingTexture",ce._matricesTexture,ge),Ft.setOptional(Y,ce,"batchingIdTexture"),Ft.setValue(Y,"batchingIdTexture",ce._indirectTexture,ge),Ft.setOptional(Y,ce,"batchingColorTexture"),ce._colorsTexture!==null&&Ft.setValue(Y,"batchingColorTexture",ce._colorsTexture,ge));const vr=de.morphAttributes;if((vr.position!==void 0||vr.normal!==void 0||vr.color!==void 0)&&J.update(ce,de,hi),(ti||$e.receiveShadow!==ce.receiveShadow)&&($e.receiveShadow=ce.receiveShadow,Ft.setValue(Y,"receiveShadow",ce.receiveShadow)),(le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial)&&le.envMap===null&&Q.environment!==null&&(wn.envMapIntensity.value=Q.environmentIntensity),wn.dfgLUT!==void 0&&(wn.dfgLUT.value=qy()),ti){if(Ft.setValue(Y,"toneMappingExposure",z.toneMappingExposure),$e.needsLights&&Ua(wn,mr),Ie&&le.fog===!0&&Qe.refreshFogUniforms(wn,Ie),Qe.refreshMaterialUniforms(wn,le,ve,me,D.state.transmissionRenderTarget[L.id]),$e.needsLights&&$e.lightProbeGrid){const on=$e.lightProbeGrid;wn.probesSH.value=on.texture,wn.probesMin.value.copy(on.boundingBox.min),wn.probesMax.value.copy(on.boundingBox.max),wn.probesResolution.value.copy(on.resolution)}vf.upload(Y,Xs($e),wn,ge)}if(le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(vf.upload(Y,Xs($e),wn,ge),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Ft.setValue(Y,"center",ce.center),Ft.setValue(Y,"modelViewMatrix",ce.modelViewMatrix),Ft.setValue(Y,"normalMatrix",ce.normalMatrix),Ft.setValue(Y,"modelMatrix",ce.matrixWorld),le.uniformsGroups!==void 0){const on=le.uniformsGroups;for(let ni=0,rr=on.length;ni<rr;ni++){const Ko=on[ni];Re.update(Ko,hi),Re.bind(Ko,hi)}}return hi}function Ua(L,Q){L.ambientLightColor.needsUpdate=Q,L.lightProbe.needsUpdate=Q,L.sunLights.needsUpdate=Q,L.sunLightShadows.needsUpdate=Q,L.directionalLights.needsUpdate=Q,L.directionalLightShadows.needsUpdate=Q,L.pointLights.needsUpdate=Q,L.pointLightShadows.needsUpdate=Q,L.spotLights.needsUpdate=Q,L.spotLightShadows.needsUpdate=Q,L.rectAreaLights.needsUpdate=Q,L.hemisphereLights.needsUpdate=Q}function fi(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return ye},this.getActiveMipmapLevel=function(){return _e},this.getRenderTarget=function(){return Te},this.setRenderTargetTextures=function(L,Q,de){const le=te.get(L);le.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),te.get(L.texture).__webglTexture=Q,te.get(L.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:de,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,Q){const de=te.get(L);de.__webglFramebuffer=Q,de.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(L,Q=0,de=0){Te=L,ye=Q,_e=de;let le=null,ce=!1,Ie=!1;if(L){const Ge=te.get(L);if(Ge.__useDefaultFramebuffer!==void 0){A.bindFramebuffer(Y.FRAMEBUFFER,Ge.__webglFramebuffer),xe.copy(L.viewport),ut.copy(L.scissor),rt=L.scissorTest,A.viewport(xe),A.scissor(ut),A.setScissorTest(rt),ne=-1;return}else if(Ge.__webglFramebuffer===void 0)ge.setupRenderTarget(L);else if(Ge.__hasExternalTextures)ge.rebindTextures(L,te.get(L.texture).__webglTexture,te.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const Tt=L.depthTexture;if(Ge.__boundDepthTexture!==Tt){if(Tt!==null&&te.has(Tt)&&(L.width!==Tt.image.width||L.height!==Tt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ge.setupDepthRenderbuffer(L)}}const je=L.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Ie=!0);const ct=te.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(ct[Q])?le=ct[Q][de]:le=ct[Q],ce=!0):L.samples>0&&ge.useMultisampledRTT(L)===!1?le=te.get(L).__webglMultisampledFramebuffer:Array.isArray(ct)?le=ct[de]:le=ct,xe.copy(L.viewport),ut.copy(L.scissor),rt=L.scissorTest}else xe.copy(We).multiplyScalar(ve).floor(),ut.copy(vt).multiplyScalar(ve).floor(),rt=Pt;if(de!==0&&(le=ae),A.bindFramebuffer(Y.FRAMEBUFFER,le)&&A.drawBuffers(L,le),A.viewport(xe),A.scissor(ut),A.setScissorTest(rt),ce){const Ge=te.get(L.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ge.__webglTexture,de)}else if(Ie){const Ge=Q;for(let je=0;je<L.textures.length;je++){const ct=te.get(L.textures[je]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+je,ct.__webglTexture,de,Ge)}}else if(L!==null&&de!==0){const Ge=te.get(L.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Ge.__webglTexture,de)}ne=-1};function Jo(L){const Q=te.get(L);return(Q.__readFormat!==L.format||Q.__readType!==L.type)&&(Q.__readFormat=L.format,Q.__readType=L.type,Q.__formatReadable=B.textureFormatReadable(L.format),Q.__typeReadable=B.textureTypeReadable(L.type)),Q}this.readRenderTargetPixels=function(L,Q,de,le,ce,Ie,qe,Ge=0){if(!(L&&L.isWebGLRenderTarget)){en("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=te.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&qe!==void 0&&(je=je[qe]),je){A.bindFramebuffer(Y.FRAMEBUFFER,je);try{const ct=L.textures[Ge],Tt=ct.format,St=ct.type;L.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ge);const ot=Jo(ct);if(ot.__formatReadable===!1){en("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ot.__typeReadable===!1){en("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=L.width-le&&de>=0&&de<=L.height-ce&&Y.readPixels(Q,de,le,ce,Oe.convert(Tt),Oe.convert(St),Ie)}finally{const ct=Te!==null?te.get(Te).__webglFramebuffer:null;A.bindFramebuffer(Y.FRAMEBUFFER,ct)}}},this.readRenderTargetPixelsAsync=async function(L,Q,de,le,ce,Ie,qe,Ge=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=te.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&qe!==void 0&&(je=je[qe]),je)if(Q>=0&&Q<=L.width-le&&de>=0&&de<=L.height-ce){A.bindFramebuffer(Y.FRAMEBUFFER,je);const ct=L.textures[Ge],Tt=ct.format,St=ct.type;L.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ge);const ot=Jo(ct);if(ot.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ot.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ht=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Ht),Y.bufferData(Y.PIXEL_PACK_BUFFER,Ie.byteLength,Y.STREAM_READ),Y.readPixels(Q,de,le,ce,Oe.convert(Tt),Oe.convert(St),0),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null);const fn=Te!==null?te.get(Te).__webglFramebuffer:null;A.bindFramebuffer(Y.FRAMEBUFFER,fn);const rn=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await Fm(Y,rn,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Ht),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Ie),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null),Y.deleteBuffer(Ht),Y.deleteSync(rn),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,Q=null,de=0){const le=Math.pow(2,-de),ce=Math.floor(L.image.width*le),Ie=Math.floor(L.image.height*le),qe=Q!==null?Q.x:0,Ge=Q!==null?Q.y:0;ge.setTexture2D(L,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,de,0,0,qe,Ge,ce,Ie),A.unbindTexture()},this.copyTextureToTexture=function(L,Q,de=null,le=null,ce=0,Ie=0){let qe,Ge,je,ct,Tt,St,ot,Ht,fn;const rn=L.isCompressedTexture?L.mipmaps[Ie]:L.image;if(de!==null)qe=de.max.x-de.min.x,Ge=de.max.y-de.min.y,je=de.isBox3?de.max.z-de.min.z:1,ct=de.min.x,Tt=de.min.y,St=de.isBox3?de.min.z:0;else{const wn=Math.pow(2,-ce);qe=Math.floor(rn.width*wn),Ge=Math.floor(rn.height*wn),L.isDataArrayTexture?je=rn.depth:L.isData3DTexture?je=Math.floor(rn.depth*wn):je=1,ct=0,Tt=0,St=0}le!==null?(ot=le.x,Ht=le.y,fn=le.z):(ot=0,Ht=0,fn=0);const jt=Oe.convert(Q.format),Bn=Oe.convert(Q.type);let $e;Q.isData3DTexture?(ge.setTexture3D(Q,0),$e=Y.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(ge.setTexture2DArray(Q,0),$e=Y.TEXTURE_2D_ARRAY):(ge.setTexture2D(Q,0),$e=Y.TEXTURE_2D),A.activeTexture(Y.TEXTURE0),A.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,Q.flipY),A.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),A.pixelStorei(Y.UNPACK_ALIGNMENT,Q.unpackAlignment);const Rt=A.getParameter(Y.UNPACK_ROW_LENGTH),Ut=A.getParameter(Y.UNPACK_IMAGE_HEIGHT),hi=A.getParameter(Y.UNPACK_SKIP_PIXELS),xi=A.getParameter(Y.UNPACK_SKIP_ROWS),ti=A.getParameter(Y.UNPACK_SKIP_IMAGES);A.pixelStorei(Y.UNPACK_ROW_LENGTH,rn.width),A.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,rn.height),A.pixelStorei(Y.UNPACK_SKIP_PIXELS,ct),A.pixelStorei(Y.UNPACK_SKIP_ROWS,Tt),A.pixelStorei(Y.UNPACK_SKIP_IMAGES,St);const mr=L.isDataArrayTexture||L.isData3DTexture,Ft=Q.isDataArrayTexture||Q.isData3DTexture;if(L.isDepthTexture){const wn=te.get(L),vr=te.get(Q),on=te.get(wn.__renderTarget),ni=te.get(vr.__renderTarget);A.bindFramebuffer(Y.READ_FRAMEBUFFER,on.__webglFramebuffer),A.bindFramebuffer(Y.DRAW_FRAMEBUFFER,ni.__webglFramebuffer);for(let rr=0;rr<je;rr++)mr&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,te.get(L).__webglTexture,ce,St+rr),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,te.get(Q).__webglTexture,Ie,fn+rr)),Y.blitFramebuffer(ct,Tt,qe,Ge,ot,Ht,qe,Ge,Y.DEPTH_BUFFER_BIT,Y.NEAREST);A.bindFramebuffer(Y.READ_FRAMEBUFFER,null),A.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(ce!==0||L.isRenderTargetTexture||te.has(L)){const wn=te.get(L),vr=te.get(Q);A.bindFramebuffer(Y.READ_FRAMEBUFFER,W),A.bindFramebuffer(Y.DRAW_FRAMEBUFFER,ue);for(let on=0;on<je;on++)mr?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,wn.__webglTexture,ce,St+on):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,wn.__webglTexture,ce),Ft?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,vr.__webglTexture,Ie,fn+on):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,vr.__webglTexture,Ie),ce!==0?Y.blitFramebuffer(ct,Tt,qe,Ge,ot,Ht,qe,Ge,Y.COLOR_BUFFER_BIT,Y.NEAREST):Ft?Y.copyTexSubImage3D($e,Ie,ot,Ht,fn+on,ct,Tt,qe,Ge):Y.copyTexSubImage2D($e,Ie,ot,Ht,ct,Tt,qe,Ge);A.bindFramebuffer(Y.READ_FRAMEBUFFER,null),A.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Ft?L.isDataTexture||L.isData3DTexture?Y.texSubImage3D($e,Ie,ot,Ht,fn,qe,Ge,je,jt,Bn,rn.data):Q.isCompressedArrayTexture?Y.compressedTexSubImage3D($e,Ie,ot,Ht,fn,qe,Ge,je,jt,rn.data):Y.texSubImage3D($e,Ie,ot,Ht,fn,qe,Ge,je,jt,Bn,rn):L.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Ie,ot,Ht,qe,Ge,jt,Bn,rn.data):L.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Ie,ot,Ht,rn.width,rn.height,jt,rn.data):Y.texSubImage2D(Y.TEXTURE_2D,Ie,ot,Ht,qe,Ge,jt,Bn,rn);A.pixelStorei(Y.UNPACK_ROW_LENGTH,Rt),A.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Ut),A.pixelStorei(Y.UNPACK_SKIP_PIXELS,hi),A.pixelStorei(Y.UNPACK_SKIP_ROWS,xi),A.pixelStorei(Y.UNPACK_SKIP_IMAGES,ti),Ie===0&&Q.generateMipmaps&&Y.generateMipmap($e),A.unbindTexture()},this.initRenderTarget=function(L){te.get(L).__webglFramebuffer===void 0&&ge.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?ge.setTextureCube(L,0):L.isData3DTexture?ge.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?ge.setTexture2DArray(L,0):ge.setTexture2D(L,0),A.unbindTexture()},this.resetState=function(){ye=0,_e=0,Te=null,A.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Jt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Jt._getUnpackColorSpace()}}var Bo={},Wc={};var rg;function $y(){if(rg)return Wc;rg=1;var i=og(),e=lg();function t(a){var l="https://react.dev/errors/"+a;if(1<arguments.length){l+="?args[]="+encodeURIComponent(arguments[1]);for(var h=2;h<arguments.length;h++)l+="&args[]="+encodeURIComponent(arguments[h])}return"Minified React error #"+a+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),g=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),E=Symbol.for("react.suspense"),_=Symbol.for("react.suspense_list"),x=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),N=Symbol.for("react.scope"),w=Symbol.for("react.activity"),M=Symbol.for("react.legacy_hidden"),O=Symbol.for("react.memo_cache_sentinel"),k=Symbol.for("react.view_transition"),C=Symbol.for("react.recoverable"),F=Symbol.iterator;function D(a){return a===null||typeof a!="object"?null:(a=F&&a[F]||a["@@iterator"],typeof a=="function"?a:null)}var H=Symbol.for("react.optimistic_key"),y=Array.isArray;function P(a,l){var h=a.length&3,v=a.length-h,T=l;for(l=0;l<v;){var U=a.charCodeAt(l)&255|(a.charCodeAt(++l)&255)<<8|(a.charCodeAt(++l)&255)<<16|(a.charCodeAt(++l)&255)<<24;++l,U=3432918353*(U&65535)+((3432918353*(U>>>16)&65535)<<16)&4294967295,U=U<<15|U>>>17,U=461845907*(U&65535)+((461845907*(U>>>16)&65535)<<16)&4294967295,T^=U,T=T<<13|T>>>19,T=5*(T&65535)+((5*(T>>>16)&65535)<<16)&4294967295,T=(T&65535)+27492+(((T>>>16)+58964&65535)<<16)}switch(U=0,h){case 3:U^=(a.charCodeAt(l+2)&255)<<16;case 2:U^=(a.charCodeAt(l+1)&255)<<8;case 1:U^=a.charCodeAt(l)&255,U=3432918353*(U&65535)+((3432918353*(U>>>16)&65535)<<16)&4294967295,U=U<<15|U>>>17,T^=461845907*(U&65535)+((461845907*(U>>>16)&65535)<<16)&4294967295}return T^=a.length,T^=T>>>16,T=2246822507*(T&65535)+((2246822507*(T>>>16)&65535)<<16)&4294967295,T^=T>>>13,T=3266489909*(T&65535)+((3266489909*(T>>>16)&65535)<<16)&4294967295,(T^T>>>16)>>>0}var z=Object.assign,G=Object.prototype.hasOwnProperty,q=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ae={},W={};function ue(a){return G.call(W,a)?!0:G.call(ae,a)?!1:q.test(a)?W[a]=!0:(ae[a]=!0,!1)}var ye=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")),_e=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Te=/["'&<>]/;function ne(a){if(typeof a=="boolean"||typeof a=="number"||typeof a=="bigint")return""+a;a=""+a;var l=Te.exec(a);if(l){var h="",v,T=0;for(v=l.index;v<a.length;v++){switch(a.charCodeAt(v)){case 34:l="&quot;";break;case 38:l="&amp;";break;case 39:l="&#x27;";break;case 60:l="&lt;";break;case 62:l="&gt;";break;default:continue}T!==v&&(h+=a.slice(T,v)),T=v+1,h+=l}a=T!==v?h+a.slice(T,v):h}return a}var V=/([A-Z])/g,xe=/^ms-/,ut=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function rt(a){return ut.test(""+a)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":a}var Ae=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se=e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Lt={pending:!1,data:null,method:null,action:null},me=se.d;se.d={f:me.f,r:me.r,D:yn,C:Ua,L:fi,m:Jo,X:Q,S:L,M:de};var ve=[],Ze=null,dt=/(<\/|<)(s)(cript)/gi;function We(a,l,h,v){return""+l+(h==="s"?"\\u0073":"\\u0053")+v}function vt(a,l,h,v,T){return{idPrefix:a===void 0?"":a,nextFormID:0,streamingFormat:0,bootstrapScriptContent:h,bootstrapScripts:v,bootstrapModules:T,instructions:0,hasBody:!1,hasHtml:!1,unknownResources:{},dnsResources:{},connectResources:{default:{},anonymous:{},credentials:{}},imageResources:{},styleResources:{},scriptResources:{},moduleUnknownResources:{},moduleScriptResources:{}}}function Pt(a,l,h,v){return{insertionMode:a,selectedValue:l,tagScope:h,viewTransition:v}}function pt(a,l,h){var v=a.tagScope&-25;switch(l){case"noscript":return Pt(2,null,v|1,null);case"select":return Pt(2,h.value!=null?h.value:h.defaultValue,v,null);case"svg":return Pt(4,null,v,null);case"picture":return Pt(2,null,v|2,null);case"math":return Pt(5,null,v,null);case"foreignObject":return Pt(2,null,v,null);case"table":return Pt(6,null,v,null);case"thead":case"tbody":case"tfoot":return Pt(7,null,v,null);case"colgroup":return Pt(9,null,v,null);case"tr":return Pt(8,null,v,null);case"head":if(2>a.insertionMode)return Pt(3,null,v,null);break;case"html":if(a.insertionMode===0)return Pt(1,null,v,null)}return 6<=a.insertionMode||2>a.insertionMode?Pt(2,null,v,null):a.viewTransition!==null||a.tagScope!==v?Pt(a.insertionMode,a.selectedValue,v,null):a}function It(a){return a===null?null:{update:a.update,enter:"none",exit:"none",share:a.update,parentEnter:"none",parentExit:"none",name:a.autoName,autoName:a.autoName,nameIdx:0}}function Xe(a,l){return l.tagScope&32&&(a.instructions|=128),Pt(l.insertionMode,l.selectedValue,l.tagScope|12,It(l.viewTransition))}function xt(a,l){a=It(l.viewTransition);var h=l.tagScope|16;return a!==null&&a.share!=="none"&&(h|=64),Pt(l.insertionMode,l.selectedValue,h,a)}function tn(a,l,h){return a="_"+a.idPrefix+"R_"+l,0<h&&(a+="H"+h.toString(32)),a+"_"}function Gt(a,l){l=l.viewTransition,l!==null&&(l.name!=="auto"&&(Y(a,"vt-name",l.nameIdx===0?l.name:l.name+"_"+l.nameIdx),l.nameIdx++),Y(a,"vt-update",l.update),l.enter!=="none"&&Y(a,"vt-enter",l.enter),l.exit!=="none"&&Y(a,"vt-exit",l.exit),l.share!=="none"&&Y(a,"vt-share",l.share))}var Mn=new Map;function Dt(a,l){if(typeof l!="object")throw Error(t(62));var h=!0,v;for(v in l)if(G.call(l,v)){var T=l[v];if(T!=null&&typeof T!="boolean"&&T!==""){if(v.indexOf("--")===0){var U=ne(v);T=ne((""+T).trim())}else U=Mn.get(v),U===void 0&&(U=ne(v.replace(V,"-$1").toLowerCase().replace(xe,"-ms-")),Mn.set(v,U)),T=typeof T=="number"?T===0||ye.has(v)?""+T:T+"px":ne((""+T).trim());h?(h=!1,a.push(' style="',U,":",T)):a.push(";",U,":",T)}}h||a.push('"')}function Yt(a,l,h){h&&typeof h!="function"&&typeof h!="symbol"&&a.push(" ",l,'=""')}function Y(a,l,h){typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&a.push(" ",l,'="',ne(h),'"')}var zt=ne("javascript:throw new Error('React form unexpectedly submitted.')");function gt(a,l){this.push('<input type="hidden"'),B(a),Y(this,"name",l),Y(this,"value",a),this.push("/>")}function B(a){if(typeof a!="string")throw Error(t(480))}function A(a,l){if(typeof l.$$FORM_ACTION=="function"){var h=a.nextFormID++;a=a.idPrefix+h;try{var v=l.$$FORM_ACTION(a);if(v){var T=v.data;T?.forEach(B)}return v}catch(U){if(typeof U=="object"&&U!==null&&typeof U.then=="function")throw U}}return null}function ie(a,l,h,v,T,U,$,he){var re=null;if(typeof v=="function"){var oe=A(l,v);oe!==null?(he=oe.name,v=oe.action||"",T=oe.encType,U=oe.method,$=oe.target,re=oe.data):(a.push(" ","formAction",'="',zt,'"'),$=U=T=v=he=null,Fe(l,h))}return he!=null&&te(a,"name",he),v!=null&&te(a,"formAction",v),T!=null&&te(a,"formEncType",T),U!=null&&te(a,"formMethod",U),$!=null&&te(a,"formTarget",$),re}function te(a,l,h){switch(l){case"className":Y(a,"class",h);break;case"tabIndex":Y(a,"tabindex",h);break;case"dir":case"role":case"viewBox":case"width":case"height":Y(a,l,h);break;case"style":Dt(a,h);break;case"src":case"href":if(h==="")break;case"action":case"formAction":if(h==null||typeof h=="function"||typeof h=="symbol"||typeof h=="boolean")break;h=rt(""+h),a.push(" ",l,'="',ne(h),'"');break;case"defaultValue":case"defaultChecked":case"innerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":case"ref":break;case"autoFocus":case"multiple":case"muted":Yt(a,l.toLowerCase(),h);break;case"xlinkHref":if(typeof h=="function"||typeof h=="symbol"||typeof h=="boolean")break;h=rt(""+h),a.push(" ","xlink:href",'="',ne(h),'"');break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":typeof h!="function"&&typeof h!="symbol"&&a.push(" ",l,'="',ne(h),'"');break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":h&&typeof h!="function"&&typeof h!="symbol"&&a.push(" ",l,'=""');break;case"capture":case"download":h===!0?a.push(" ",l,'=""'):h!==!1&&typeof h!="function"&&typeof h!="symbol"&&a.push(" ",l,'="',ne(h),'"');break;case"cols":case"rows":case"size":case"span":typeof h!="function"&&typeof h!="symbol"&&!isNaN(h)&&1<=h&&a.push(" ",l,'="',ne(h),'"');break;case"rowSpan":case"start":typeof h=="function"||typeof h=="symbol"||isNaN(h)||a.push(" ",l,'="',ne(h),'"');break;case"xlinkActuate":Y(a,"xlink:actuate",h);break;case"xlinkArcrole":Y(a,"xlink:arcrole",h);break;case"xlinkRole":Y(a,"xlink:role",h);break;case"xlinkShow":Y(a,"xlink:show",h);break;case"xlinkTitle":Y(a,"xlink:title",h);break;case"xlinkType":Y(a,"xlink:type",h);break;case"xmlBase":Y(a,"xml:base",h);break;case"xmlLang":Y(a,"xml:lang",h);break;case"xmlSpace":Y(a,"xml:space",h);break;default:if((!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=_e.get(l)||l,ue(l))){switch(typeof h){case"function":case"symbol":return;case"boolean":var v=l.toLowerCase().slice(0,5);if(v!=="data-"&&v!=="aria-")return}a.push(" ",l,'="',ne(h),'"')}}}function ge(a,l,h){if(l!=null){if(h!=null)throw Error(t(60));if(typeof l!="object"||!("__html"in l))throw Error(t(61));l=l.__html,l!=null&&a.push(""+l)}}function Ne(a){var l="";return i.Children.forEach(a,function(h){h!=null&&(l+=h)}),l}function Fe(a,l){if((a.instructions&16)===0){a.instructions|=16;var h=l.preamble,v=l.bootstrapChunks;(h.htmlChunks||h.headChunks)&&v.length===0?(v.push(l.startInlineScript),gr(v,a),v.push(">",`addEventListener("submit",function(a){if(!a.defaultPrevented){var b=a.target,d=a.submitter,c=b.action,e=d;if(d){var f=d.getAttribute("formAction");null!=f&&(c=f,e=null)}"javascript:throw new Error('React form unexpectedly submitted.')"===c&&(a.preventDefault(),a=new FormData(b,e),c=b.ownerDocument||b,(c.$$reactFormReplay=c.$$reactFormReplay||[]).push(b,d,a))}});`,"<\/script>")):v.unshift(l.startInlineScript,">",`addEventListener("submit",function(a){if(!a.defaultPrevented){var b=a.target,d=a.submitter,c=b.action,e=d;if(d){var f=d.getAttribute("formAction");null!=f&&(c=f,e=null)}"javascript:throw new Error('React form unexpectedly submitted.')"===c&&(a.preventDefault(),a=new FormData(b,e),c=b.ownerDocument||b,(c.$$reactFormReplay=c.$$reactFormReplay||[]).push(b,d,a))}});`,"<\/script>")}}function pe(a,l){a.push(we("link"));for(var h in l)if(G.call(l,h)){var v=l[h];if(v!=null)switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(t(399,"link"));default:te(a,h,v)}}return a.push("/>"),null}var Ee=/(<\/|<)(s)(tyle)/gi;function ke(a,l,h,v){return""+l+(h==="s"?"\\73 ":"\\53 ")+v}function Qe(a,l,h,v){a.push(we(h));for(var T in l)if(G.call(l,T)){var U=l[T];if(U!=null)switch(T){case"children":case"dangerouslySetInnerHTML":throw Error(t(399,h));default:te(a,T,U)}}return Gt(a,v),a.push("/>"),null}function Be(a,l){a.push(we("title"));var h=null,v=null,T;for(T in l)if(G.call(l,T)){var U=l[T];if(U!=null)switch(T){case"children":h=U;break;case"dangerouslySetInnerHTML":v=U;break;default:te(a,T,U)}}return a.push(">"),l=Array.isArray(h)?2>h.length?h[0]:null:h,typeof l!="function"&&typeof l!="symbol"&&l!==null&&l!==void 0&&a.push(ne(""+l)),ge(a,v,h),a.push(ze("title")),null}function Ue(a,l){a.push(we("script"));var h=null,v=null,T;for(T in l)if(G.call(l,T)){var U=l[T];if(U!=null)switch(T){case"children":h=U;break;case"dangerouslySetInnerHTML":v=U;break;default:te(a,T,U)}}return a.push(">"),ge(a,v,h),typeof h=="string"&&a.push((""+h).replace(dt,We)),a.push(ze("script")),null}function st(a,l,h,v){a.push(we(h));var T=h=null,U;for(U in l)if(G.call(l,U)){var $=l[U];if($!=null)switch(U){case"children":h=$;break;case"dangerouslySetInnerHTML":T=$;break;default:te(a,U,$)}}return Gt(a,v),a.push(">"),ge(a,T,h),h}function lt(a,l,h,v){a.push(we(h));var T=h=null,U;for(U in l)if(G.call(l,U)){var $=l[U];if($!=null)switch(U){case"children":h=$;break;case"dangerouslySetInnerHTML":T=$;break;default:te(a,U,$)}}return Gt(a,v),a.push(">"),ge(a,T,h),typeof h=="string"?(a.push(ne(h)),null):h}var _t=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,J=new Map;function we(a){var l=J.get(a);if(l===void 0){if(!_t.test(a))throw Error(t(65,a));l="<"+a,J.set(a,l)}return l}function Se(a,l,h,v,T,U,$,he,re){switch(l){case"div":case"span":case"svg":case"path":break;case"a":a.push(we("a"));var oe=null,Le=null,De;for(De in h)if(G.call(h,De)){var Je=h[De];if(Je!=null)switch(De){case"children":oe=Je;break;case"dangerouslySetInnerHTML":Le=Je;break;case"href":Je===""?Y(a,"href",""):te(a,De,Je);break;default:te(a,De,Je)}}if(Gt(a,he),a.push(">"),ge(a,Le,oe),typeof oe=="string"){a.push(ne(oe));var Ye=null}else Ye=oe;return Ye;case"g":case"p":case"li":break;case"select":a.push(we("select"));var et=null,ht=null,an;for(an in h)if(G.call(h,an)){var Vt=h[an];if(Vt!=null)switch(an){case"children":et=Vt;break;case"dangerouslySetInnerHTML":ht=Vt;break;case"defaultValue":case"value":break;default:te(a,an,Vt)}}return Gt(a,he),a.push(">"),ge(a,ht,et),et;case"option":var hn=he.selectedValue;a.push(we("option"));var In=null,mt=null,Ct=null,Xt=null,ln;for(ln in h)if(G.call(h,ln)){var ri=h[ln];if(ri!=null)switch(ln){case"children":In=ri;break;case"selected":Ct=ri;break;case"dangerouslySetInnerHTML":Xt=ri;break;case"value":mt=ri;default:te(a,ln,ri)}}if(hn!=null){var Ot=mt!==null?""+mt:Ne(In);if(y(hn)){for(var Sn=0;Sn<hn.length;Sn++)if(""+hn[Sn]===Ot){a.push(' selected=""');break}}else""+hn===Ot&&a.push(' selected=""')}else Ct&&a.push(' selected=""');return a.push(">"),ge(a,Xt,In),In;case"textarea":a.push(we("textarea"));var xn=null,Zn=null,dn=null,ci;for(ci in h)if(G.call(h,ci)){var gn=h[ci];if(gn!=null)switch(ci){case"children":dn=gn;break;case"value":xn=gn;break;case"defaultValue":Zn=gn;break;case"dangerouslySetInnerHTML":throw Error(t(91));default:te(a,ci,gn)}}if(xn===null&&Zn!==null&&(xn=Zn),Gt(a,he),a.push(">"),dn!=null){if(xn!=null)throw Error(t(92));if(y(dn)){if(1<dn.length)throw Error(t(93));xn=""+dn[0]}xn=""+dn}return typeof xn=="string"&&xn[0]===`
`&&a.push(`
`),xn!==null&&a.push(ne(""+xn)),null;case"input":a.push(we("input"));var sr=null,kn=null,Gn=null,Br=null,An=null,yi=null,Qn=null,Ni=null,Xi=null,xr;for(xr in h)if(G.call(h,xr)){var Rn=h[xr];if(Rn!=null)switch(xr){case"children":case"dangerouslySetInnerHTML":throw Error(t(399,"input"));case"name":sr=Rn;break;case"formAction":kn=Rn;break;case"formEncType":Gn=Rn;break;case"formMethod":Br=Rn;break;case"formTarget":An=Rn;break;case"defaultChecked":Xi=Rn;break;case"defaultValue":Qn=Rn;break;case"checked":Ni=Rn;break;case"value":yi=Rn;break;default:te(a,xr,Rn)}}var zr=ie(a,v,T,kn,Gn,Br,An,sr);return Ni!==null?Yt(a,"checked",Ni):Xi!==null&&Yt(a,"checked",Xi),yi!==null?te(a,"value",yi):Qn!==null&&te(a,"value",Qn),Gt(a,he),a.push("/>"),zr?.forEach(gt,a),null;case"button":a.push(we("button"));var Va=null,or=null,kr=null,oo=null,Wa=null,Hr=null,vl=null,Yi;for(Yi in h)if(G.call(h,Yi)){var ai=h[Yi];if(ai!=null)switch(Yi){case"children":Va=ai;break;case"dangerouslySetInnerHTML":or=ai;break;case"name":kr=ai;break;case"formAction":oo=ai;break;case"formEncType":Wa=ai;break;case"formMethod":Hr=ai;break;case"formTarget":vl=ai;break;default:te(a,Yi,ai)}}var Mr=ie(a,v,T,oo,Wa,Hr,vl,kr);if(Gt(a,he),a.push(">"),Mr?.forEach(gt,a),ge(a,or,Va),typeof Va=="string"){a.push(ne(Va));var Xa=null}else Xa=Va;return Xa;case"form":a.push(we("form"));var yr=null,lo=null,Zi=null,Ui=null,Ya=null,Gr=null,ua;for(ua in h)if(G.call(h,ua)){var Sr=h[ua];if(Sr!=null)switch(ua){case"children":yr=Sr;break;case"dangerouslySetInnerHTML":lo=Sr;break;case"action":Zi=Sr;break;case"encType":Ui=Sr;break;case"method":Ya=Sr;break;case"target":Gr=Sr;break;default:te(a,ua,Sr)}}var Za=null,fa=null;if(typeof Zi=="function"){var $t=A(v,Zi);$t!==null?(Zi=$t.action||"",Ui=$t.encType,Ya=$t.method,Gr=$t.target,Za=$t.data,fa=$t.name):(a.push(" ","action",'="',zt,'"'),Gr=Ya=Ui=Zi=null,Fe(v,T))}if(Zi!=null&&te(a,"action",Zi),Ui!=null&&te(a,"encType",Ui),Ya!=null&&te(a,"method",Ya),Gr!=null&&te(a,"target",Gr),Gt(a,he),a.push(">"),fa!==null&&(a.push('<input type="hidden"'),Y(a,"name",fa),a.push("/>"),Za?.forEach(gt,a)),ge(a,lo,yr),typeof yr=="string"){a.push(ne(yr));var ha=null}else ha=yr;return ha;case"menuitem":a.push(we("menuitem"));for(var Vr in h)if(G.call(h,Vr)){var da=h[Vr];if(da!=null)switch(Vr){case"children":case"dangerouslySetInnerHTML":throw Error(t(400));default:te(a,Vr,da)}}return Gt(a,he),a.push(">"),null;case"object":a.push(we("object"));var Fi=null,Ji=null,Si;for(Si in h)if(G.call(h,Si)){var br=h[Si];if(br!=null)switch(Si){case"children":Fi=br;break;case"dangerouslySetInnerHTML":Ji=br;break;case"data":var qt=rt(""+br);if(qt==="")break;a.push(" ","data",'="',ne(qt),'"');break;default:te(a,Si,br)}}if(Gt(a,he),a.push(">"),ge(a,Ji,Fi),typeof Fi=="string"){a.push(ne(Fi));var pn=null}else pn=Fi;return pn;case"title":var qn=he.tagScope&1,Vn=he.tagScope&4;if(he.insertionMode===4||qn||h.itemProp!=null)var pa=Be(a,h);else Vn?pa=null:(Be(T.hoistableChunks,h),pa=void 0);return pa;case"link":var ga=he.tagScope&1,ma=he.tagScope&4,co=h.rel,Ki=h.href,Ja=h.precedence;if(he.insertionMode===4||ga||h.itemProp!=null||typeof co!="string"||typeof Ki!="string"||Ki===""){pe(a,h);var Er=null}else if(h.rel==="stylesheet")if(typeof Ja!="string"||h.disabled!=null||h.onLoad||h.onError)Er=pe(a,h);else{var Qi=T.styles.get(Ja),Wn=v.styleResources.hasOwnProperty(Ki)?v.styleResources[Ki]:void 0;if(Wn!==null){v.styleResources[Ki]=null,Qi||(Qi={precedence:ne(Ja),rules:[],hrefs:[],sheets:new Map},T.styles.set(Ja,Qi));var Tr={state:0,props:z({},h,{"data-precedence":h.precedence,precedence:null})};if(Wn){Wn.length===2&&le(Tr.props,Wn);var Ka=T.preloads.stylesheets.get(Ki);Ka&&0<Ka.length?Ka.length=0:Tr.state=1}Qi.sheets.set(Ki,Tr),$&&$.stylesheets.add(Tr)}else if(Qi){var uo=Qi.sheets.get(Ki);uo&&$&&$.stylesheets.add(uo)}re&&a.push("<!-- -->"),Er=null}else h.onLoad||h.onError?Er=pe(a,h):(re&&a.push("<!-- -->"),Er=ma?null:pe(T.hoistableChunks,h));return Er;case"script":var _l=he.tagScope&1,va=h.async;if(typeof h.src!="string"||!h.src||!va||typeof va=="function"||typeof va=="symbol"||h.onLoad||h.onError||he.insertionMode===4||_l||h.itemProp!=null)var fo=Ue(a,h);else{var Wr=h.src;if(h.type==="module")var bn=v.moduleScriptResources,Qa=T.preloads.moduleScripts;else bn=v.scriptResources,Qa=T.preloads.scripts;var wr=bn.hasOwnProperty(Wr)?bn[Wr]:void 0;if(wr!==null){bn[Wr]=null;var _a=h;if(wr){wr.length===2&&(_a=z({},h),le(_a,wr));var Ar=Qa.get(Wr);Ar&&(Ar.length=0)}var Es=[];T.scripts.add(Es),Ue(Es,_a)}re&&a.push("<!-- -->"),fo=null}return fo;case"style":var ho=he.tagScope&1,Xr=h.precedence,bi=h.href,Ts=h.nonce;if(he.insertionMode===4||ho||h.itemProp!=null||typeof Xr!="string"||typeof bi!="string"||bi===""){a.push(we("style"));var qi=null,xl=null,qa;for(qa in h)if(G.call(h,qa)){var po=h[qa];if(po!=null)switch(qa){case"children":qi=po;break;case"dangerouslySetInnerHTML":xl=po;break;default:te(a,qa,po)}}a.push(">");var Yr=Array.isArray(qi)?2>qi.length?qi[0]:null:qi;typeof Yr!="function"&&typeof Yr!="symbol"&&Yr!==null&&Yr!==void 0&&a.push((""+Yr).replace(Ee,ke)),ge(a,xl,qi),a.push(ze("style"));var go=null}else{var lr=T.styles.get(Xr);if((v.styleResources.hasOwnProperty(bi)?v.styleResources[bi]:void 0)!==null){v.styleResources[bi]=null,lr||(lr={precedence:ne(Xr),rules:[],hrefs:[],sheets:new Map},T.styles.set(Xr,lr));var ws=T.nonce.style;if(!ws||ws===Ts){lr.hrefs.push(ne(bi));var Ml=lr.rules,ja=null,Rc=null,$a;for($a in h)if(G.call(h,$a)){var mo=h[$a];if(mo!=null)switch($a){case"children":ja=mo;break;case"dangerouslySetInnerHTML":Rc=mo}}var xa=Array.isArray(ja)?2>ja.length?ja[0]:null:ja;typeof xa!="function"&&typeof xa!="symbol"&&xa!==null&&xa!==void 0&&Ml.push((""+xa).replace(Ee,ke)),ge(Ml,Rc,ja)}}lr&&$&&$.styles.add(lr),re&&a.push("<!-- -->"),go=void 0}return go;case"meta":var yl=he.tagScope&1,es=he.tagScope&4;if(he.insertionMode===4||yl||h.itemProp!=null)var vo=Qe(a,h,"meta",he);else re&&a.push("<!-- -->"),vo=es?null:typeof h.charSet=="string"?Qe(T.charsetChunks,h,"meta",he):h.name==="viewport"?Qe(T.viewportChunks,h,"meta",he):Qe(T.hoistableChunks,h,"meta",he);return vo;case"listing":case"pre":a.push(we(l));var _o=null,ts=null,Ma;for(Ma in h)if(G.call(h,Ma)){var Zr=h[Ma];if(Zr!=null)switch(Ma){case"children":_o=Zr;break;case"dangerouslySetInnerHTML":ts=Zr;break;default:te(a,Ma,Zr)}}if(Gt(a,he),a.push(">"),ts!=null){if(_o!=null)throw Error(t(60));if(typeof ts!="object"||!("__html"in ts))throw Error(t(61));var Rr=ts.__html;Rr!=null&&(typeof Rr=="string"&&0<Rr.length&&Rr[0]===`
`?a.push(`
`,Rr):a.push(""+Rr))}return typeof _o=="string"&&_o[0]===`
`&&a.push(`
`),_o;case"img":var wu=he.tagScope&3,si=h.src,r=h.srcSet;if(!(h.loading==="lazy"||!si&&!r||typeof si!="string"&&si!=null||typeof r!="string"&&r!=null||h.fetchPriority==="low"||wu)&&(typeof si!="string"||si[4]!==":"||si[0]!=="d"&&si[0]!=="D"||si[1]!=="a"&&si[1]!=="A"||si[2]!=="t"&&si[2]!=="T"||si[3]!=="a"&&si[3]!=="A")&&(typeof r!="string"||r[4]!==":"||r[0]!=="d"&&r[0]!=="D"||r[1]!=="a"&&r[1]!=="A"||r[2]!=="t"&&r[2]!=="T"||r[3]!=="a"&&r[3]!=="A")){$!==null&&he.tagScope&64&&($.suspenseyImages=!0);var s=typeof h.sizes=="string"?h.sizes:void 0,f=r?r+`
`+(s||""):si,m=T.preloads.images,b=m.get(f);if(b)(h.fetchPriority==="high"||10>T.highImagePreloads.size)&&(m.delete(f),T.highImagePreloads.add(b));else if(!v.imageResources.hasOwnProperty(f)){v.imageResources[f]=ve;var I=h.crossOrigin,X=typeof I=="string"?I==="use-credentials"?I:"":void 0,Z=T.headers,j;Z&&0<Z.remainingCapacity&&typeof h.srcSet!="string"&&(h.fetchPriority==="high"||500>Z.highImagePreloads.length)&&(j=ce(si,"image",{imageSrcSet:h.srcSet,imageSizes:h.sizes,crossOrigin:X,integrity:h.integrity,nonce:h.nonce,type:h.type,fetchPriority:h.fetchPriority,referrerPolicy:h.referrerPolicy}),0<=(Z.remainingCapacity-=j.length+2))?(T.resets.image[f]=ve,Z.highImagePreloads&&(Z.highImagePreloads+=", "),Z.highImagePreloads+=j):(b=[],pe(b,{rel:"preload",as:"image",href:r?void 0:si,imageSrcSet:r,imageSizes:s,crossOrigin:X,integrity:h.integrity,type:h.type,fetchPriority:h.fetchPriority,referrerPolicy:h.referrerPolicy}),h.fetchPriority==="high"||10>T.highImagePreloads.size?T.highImagePreloads.add(b):(T.bulkPreloads.add(b),m.set(f,b)))}}return Qe(a,h,"img",he);case"base":case"area":case"br":case"col":case"embed":case"hr":case"keygen":case"param":case"source":case"track":case"wbr":return Qe(a,h,l,he);case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":break;case"head":if(2>he.insertionMode){var ee=U||T.preamble;if(ee.headChunks)throw Error(t(545,"`<head>`"));U!==null&&a.push("<!--head-->"),ee.headChunks=[];var be=st(ee.headChunks,h,"head",he)}else be=lt(a,h,"head",he);return be;case"body":if(2>he.insertionMode){var Ce=U||T.preamble;if(Ce.bodyChunks)throw Error(t(545,"`<body>`"));U!==null&&a.push("<!--body-->"),Ce.bodyChunks=[];var He=st(Ce.bodyChunks,h,"body",he)}else He=lt(a,h,"body",he);return He;case"html":if(he.insertionMode===0){var Ve=U||T.preamble;if(Ve.htmlChunks)throw Error(t(545,"`<html>`"));U!==null&&a.push("<!--html-->"),Ve.htmlChunks=[""];var tt=st(Ve.htmlChunks,h,"html",he)}else tt=lt(a,h,"html",he);return tt;default:if(l.indexOf("-")!==-1){a.push(we(l));var Et=null,Dn=null,jn;for(jn in h)if(G.call(h,jn)){var cn=h[jn];if(cn!=null){var Ei=jn;switch(jn){case"children":Et=cn;break;case"dangerouslySetInnerHTML":Dn=cn;break;case"style":Dt(a,cn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"ref":break;case"className":Ei="class";default:if(ue(jn)&&typeof cn!="function"&&typeof cn!="symbol"&&cn!==!1){if(cn===!0)cn="";else if(typeof cn=="object")continue;a.push(" ",Ei,'="',ne(cn),'"')}}}}return Gt(a,he),a.push(">"),ge(a,Dn,Et),Et}}return lt(a,h,l,he)}var Oe=new Map;function ze(a){var l=Oe.get(a);return l===void 0&&(l="</"+a+">",Oe.set(a,l)),l}function Re(a,l){a=a.preamble,a.htmlChunks===null&&l.htmlChunks&&(a.htmlChunks=l.htmlChunks),a.headChunks===null&&l.headChunks&&(a.headChunks=l.headChunks),a.bodyChunks===null&&l.bodyChunks&&(a.bodyChunks=l.bodyChunks)}function at(a,l){l=l.bootstrapChunks;for(var h=0;h<l.length-1;h++)a.push(l[h]);return h<l.length?(h=l[h],l.length=0,a.push(h)):!0}function it(a,l,h){if(a.push('<!--$?--><template id="'),h===null)throw Error(t(395));return a.push(l.boundaryPrefix),l=h.toString(16),a.push(l),a.push('"></template>')}function Me(a,l,h,v){switch(h.insertionMode){case 0:case 1:case 3:case 2:return a.push('<div hidden id="'),a.push(l.segmentPrefix),l=v.toString(16),a.push(l),a.push('">');case 4:return a.push('<svg aria-hidden="true" style="display:none" id="'),a.push(l.segmentPrefix),l=v.toString(16),a.push(l),a.push('">');case 5:return a.push('<math aria-hidden="true" style="display:none" id="'),a.push(l.segmentPrefix),l=v.toString(16),a.push(l),a.push('">');case 6:return a.push('<table hidden id="'),a.push(l.segmentPrefix),l=v.toString(16),a.push(l),a.push('">');case 7:return a.push('<table hidden><tbody id="'),a.push(l.segmentPrefix),l=v.toString(16),a.push(l),a.push('">');case 8:return a.push('<table hidden><tr id="'),a.push(l.segmentPrefix),l=v.toString(16),a.push(l),a.push('">');case 9:return a.push('<table hidden><colgroup id="'),a.push(l.segmentPrefix),l=v.toString(16),a.push(l),a.push('">');default:throw Error(t(397))}}function Pe(a,l){switch(l.insertionMode){case 0:case 1:case 3:case 2:return a.push("</div>");case 4:return a.push("</svg>");case 5:return a.push("</math>");case 6:return a.push("</table>");case 7:return a.push("</tbody></table>");case 8:return a.push("</tr></table>");case 9:return a.push("</colgroup></table>");default:throw Error(t(397))}}var nt=/[<\u2028\u2029]/g;function bt(a){return JSON.stringify(a).replace(nt,function(l){switch(l){case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}var Pn=/[&><\u2028\u2029]/g;function sn(a){return JSON.stringify(a).replace(Pn,function(l){switch(l){case"&":return"\\u0026";case">":return"\\u003e";case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}var nn=!1,Nt=!0;function Wt(a){var l=a.rules,h=a.hrefs,v=0;if(h.length){for(this.push(Ze.startInlineStyle),this.push(' media="not all" data-precedence="'),this.push(a.precedence),this.push('" data-href="');v<h.length-1;v++)this.push(h[v]),this.push(" ");for(this.push(h[v]),this.push('">'),v=0;v<l.length;v++)this.push(l[v]);Nt=this.push("</style>"),nn=!0,l.length=0,h.length=0}}function un(a){return a.state!==2?nn=!0:!1}function Kt(a,l,h){return nn=!1,Nt=!0,Ze=h,l.styles.forEach(Wt,a),Ze=null,l.stylesheets.forEach(un),nn&&(h.stylesToHoist=!0),Nt}function Tn(a){for(var l=0;l<a.length;l++)this.push(a[l]);a.length=0}var Kn=[];function Qt(a){pe(Kn,a.props);for(var l=0;l<Kn.length;l++)this.push(Kn[l]);Kn.length=0,a.state=2}function aa(a){var l=0<a.sheets.size;a.sheets.forEach(Qt,this),a.sheets.clear();var h=a.rules,v=a.hrefs;if(!l||v.length){if(this.push(Ze.startInlineStyle),this.push(' data-precedence="'),this.push(a.precedence),a=0,v.length){for(this.push('" data-href="');a<v.length-1;a++)this.push(v[a]),this.push(" ");this.push(v[a])}for(this.push('">'),a=0;a<h.length;a++)this.push(h[a]);this.push("</style>"),h.length=0,v.length=0}}function pr(a){if(a.state===0){a.state=1;var l=a.props;for(pe(Kn,{rel:"preload",as:"style",href:a.props.href,crossOrigin:l.crossOrigin,fetchPriority:l.fetchPriority,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy}),a=0;a<Kn.length;a++)this.push(Kn[a]);Kn.length=0}}function Nr(a){a.sheets.forEach(pr,this),a.sheets.clear()}function gr(a,l){(l.instructions&32)===0&&(l.instructions|=32,a.push(' id="',ne("_"+l.idPrefix+"R_"),'"'))}function Xs(a,l){a.push("[");var h="[";l.stylesheets.forEach(function(v){if(v.state!==2)if(v.state===3)a.push(h),v=sn(""+v.props.href),a.push(v),a.push("]"),h=",[";else{a.push(h);var T=v.props["data-precedence"],U=v.props,$=rt(""+v.props.href);$=sn($),a.push($),T=""+T,a.push(","),T=sn(T),a.push(T);for(var he in U)if(G.call(U,he)&&(T=U[he],T!=null))switch(he){case"href":case"rel":case"precedence":case"data-precedence":break;case"children":case"dangerouslySetInnerHTML":throw Error(t(399,"link"));default:Ys(a,he,T)}a.push("]"),h=",[",v.state=3}}),a.push("]")}function Ys(a,l,h){var v=l.toLowerCase();switch(typeof h){case"function":case"symbol":return}switch(l){case"innerHTML":case"dangerouslySetInnerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":case"style":case"ref":return;case"className":v="class",l=""+h;break;case"hidden":if(h===!1)return;l="";break;case"src":case"href":h=rt(h),l=""+h;break;default:if(2<l.length&&(l[0]==="o"||l[0]==="O")&&(l[1]==="n"||l[1]==="N")||!ue(l))return;l=""+h}a.push(","),v=sn(v),a.push(v),a.push(","),v=sn(l),a.push(v)}function Zt(){return{styles:new Set,stylesheets:new Set,suspenseyImages:!1}}function yn(a){var l=zn||null;if(l){var h=l.resumableState,v=l.renderState;if(typeof a=="string"&&a){if(!h.dnsResources.hasOwnProperty(a)){h.dnsResources[a]=null,h=v.headers;var T,U;(U=h&&0<h.remainingCapacity)&&(U=(T="<"+(""+a).replace(Ie,qe)+">; rel=dns-prefetch",0<=(h.remainingCapacity-=T.length+2))),U?(v.resets.dns[a]=null,h.preconnects&&(h.preconnects+=", "),h.preconnects+=T):(T=[],pe(T,{href:a,rel:"dns-prefetch"}),v.preconnects.add(T))}ca(l)}}else me.D(a)}function Ua(a,l){var h=zn||null;if(h){var v=h.resumableState,T=h.renderState;if(typeof a=="string"&&a){var U=l==="use-credentials"?"credentials":typeof l=="string"?"anonymous":"default";if(!v.connectResources[U].hasOwnProperty(a)){v.connectResources[U][a]=null,v=T.headers;var $,he;if(he=v&&0<v.remainingCapacity){if(he="<"+(""+a).replace(Ie,qe)+">; rel=preconnect",typeof l=="string"){var re=(""+l).replace(Ge,je);he+='; crossorigin="'+re+'"'}he=($=he,0<=(v.remainingCapacity-=$.length+2))}he?(T.resets.connect[U][a]=null,v.preconnects&&(v.preconnects+=", "),v.preconnects+=$):(U=[],pe(U,{rel:"preconnect",href:a,crossOrigin:l}),T.preconnects.add(U))}ca(h)}}else me.C(a,l)}function fi(a,l,h){var v=zn||null;if(v){var T=v.resumableState,U=v.renderState;if(l&&a){switch(l){case"image":if(h)var $=h.imageSrcSet,he=h.imageSizes,re=h.fetchPriority;var oe=$?$+`
`+(he||""):a;if(T.imageResources.hasOwnProperty(oe))return;T.imageResources[oe]=ve,T=U.headers;var Le;T&&0<T.remainingCapacity&&typeof $!="string"&&re==="high"&&(Le=ce(a,l,h),0<=(T.remainingCapacity-=Le.length+2))?(U.resets.image[oe]=ve,T.highImagePreloads&&(T.highImagePreloads+=", "),T.highImagePreloads+=Le):(T=[],pe(T,z({rel:"preload",href:$?void 0:a,as:l},h)),re==="high"?U.highImagePreloads.add(T):(U.bulkPreloads.add(T),U.preloads.images.set(oe,T)));break;case"style":if(T.styleResources.hasOwnProperty(a))return;$=[],pe($,z({rel:"preload",href:a,as:l},h)),T.styleResources[a]=!h||typeof h.crossOrigin!="string"&&typeof h.integrity!="string"?ve:[h.crossOrigin,h.integrity],U.preloads.stylesheets.set(a,$),U.bulkPreloads.add($);break;case"script":if(T.scriptResources.hasOwnProperty(a))return;$=[],U.preloads.scripts.set(a,$),U.bulkPreloads.add($),pe($,z({rel:"preload",href:a,as:l},h)),T.scriptResources[a]=!h||typeof h.crossOrigin!="string"&&typeof h.integrity!="string"?ve:[h.crossOrigin,h.integrity];break;default:if(T.unknownResources.hasOwnProperty(l)){if($=T.unknownResources[l],$.hasOwnProperty(a))return}else $={},T.unknownResources[l]=$;$[a]=ve,(T=U.headers)&&0<T.remainingCapacity&&l==="font"&&(oe=ce(a,l,h),0<=(T.remainingCapacity-=oe.length+2))?(U.resets.font[a]=ve,T.fontPreloads&&(T.fontPreloads+=", "),T.fontPreloads+=oe):(T=[],a=z({rel:"preload",href:a,as:l},h),pe(T,a),l)==="font"?U.fontPreloads.add(T):U.bulkPreloads.add(T)}ca(v)}}else me.L(a,l,h)}function Jo(a,l){var h=zn||null;if(h){var v=h.resumableState,T=h.renderState;if(a){var U=l&&typeof l.as=="string"?l.as:"script";switch(U){case"script":if(v.moduleScriptResources.hasOwnProperty(a))return;U=[],v.moduleScriptResources[a]=!l||typeof l.crossOrigin!="string"&&typeof l.integrity!="string"?ve:[l.crossOrigin,l.integrity],T.preloads.moduleScripts.set(a,U);break;default:if(v.moduleUnknownResources.hasOwnProperty(U)){var $=v.moduleUnknownResources[U];if($.hasOwnProperty(a))return}else $={},v.moduleUnknownResources[U]=$;U=[],$[a]=ve}pe(U,z({rel:"modulepreload",href:a},l)),T.bulkPreloads.add(U),ca(h)}}else me.m(a,l)}function L(a,l,h){var v=zn||null;if(v){var T=v.resumableState,U=v.renderState;if(a){l=l||"default";var $=U.styles.get(l),he=T.styleResources.hasOwnProperty(a)?T.styleResources[a]:void 0;he!==null&&(T.styleResources[a]=null,$||($={precedence:ne(l),rules:[],hrefs:[],sheets:new Map},U.styles.set(l,$)),l={state:0,props:z({rel:"stylesheet",href:a,"data-precedence":l},h)},he&&(he.length===2&&le(l.props,he),(U=U.preloads.stylesheets.get(a))&&0<U.length?U.length=0:l.state=1),$.sheets.set(a,l),ca(v))}}else me.S(a,l,h)}function Q(a,l){var h=zn||null;if(h){var v=h.resumableState,T=h.renderState;if(a){var U=v.scriptResources.hasOwnProperty(a)?v.scriptResources[a]:void 0;U!==null&&(v.scriptResources[a]=null,l=z({src:a,async:!0},l),U&&(U.length===2&&le(l,U),a=T.preloads.scripts.get(a))&&(a.length=0),a=[],T.scripts.add(a),Ue(a,l),ca(h))}}else me.X(a,l)}function de(a,l){var h=zn||null;if(h){var v=h.resumableState,T=h.renderState;if(a){var U=v.moduleScriptResources.hasOwnProperty(a)?v.moduleScriptResources[a]:void 0;U!==null&&(v.moduleScriptResources[a]=null,l=z({src:a,type:"module",async:!0},l),U&&(U.length===2&&le(l,U),a=T.preloads.moduleScripts.get(a))&&(a.length=0),a=[],T.scripts.add(a),Ue(a,l),ca(h))}}else me.M(a,l)}function le(a,l){a.crossOrigin==null&&(a.crossOrigin=l[0]),a.integrity==null&&(a.integrity=l[1])}function ce(a,l,h){a=(""+a).replace(Ie,qe),l=(""+l).replace(Ge,je),l="<"+a+'>; rel=preload; as="'+l+'"';for(var v in h)G.call(h,v)&&(a=h[v],typeof a=="string"&&(l+="; "+v.toLowerCase()+'="'+(""+a).replace(Ge,je)+'"'));return l}var Ie=/[<>\r\n]/g;function qe(a){switch(a){case"<":return"%3C";case">":return"%3E";case`
`:return"%0A";case"\r":return"%0D";default:throw Error("escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}}var Ge=/["';,\r\n]/g;function je(a){switch(a){case'"':return"%22";case"'":return"%27";case";":return"%3B";case",":return"%2C";case`
`:return"%0A";case"\r":return"%0D";default:throw Error("escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}}function ct(a){this.styles.add(a)}function Tt(a){this.stylesheets.add(a)}function St(a,l){l.styles.forEach(ct,a),l.stylesheets.forEach(Tt,a),l.suspenseyImages&&(a.suspenseyImages=!0)}function ot(a,l){var h=a.idPrefix,v=[],T=a.bootstrapScriptContent,U=a.bootstrapScripts,$=a.bootstrapModules;T!==void 0&&(v.push("<script"),gr(v,a),v.push(">",(""+T).replace(dt,We),"<\/script>")),T=h+"P:";var he=h+"S:";h+="B:";var re=new Set,oe=new Set,Le=new Set,De=new Map,Je=new Set,Ye=new Set,et=new Set,ht={images:new Map,stylesheets:new Map,scripts:new Map,moduleScripts:new Map};if(U!==void 0)for(var an=0;an<U.length;an++){var Vt=U[an],hn,In=void 0,mt=void 0,Ct={rel:"preload",as:"script",fetchPriority:"low",nonce:void 0};typeof Vt=="string"?Ct.href=hn=Vt:(Ct.href=hn=Vt.src,Ct.integrity=mt=typeof Vt.integrity=="string"?Vt.integrity:void 0,Ct.crossOrigin=In=typeof Vt=="string"||Vt.crossOrigin==null?void 0:Vt.crossOrigin==="use-credentials"?"use-credentials":""),Vt=a;var Xt=hn;Vt.scriptResources[Xt]=null,Vt.moduleScriptResources[Xt]=null,Vt=[],pe(Vt,Ct),Je.add(Vt),v.push('<script src="',ne(hn),'"'),typeof mt=="string"&&v.push(' integrity="',ne(mt),'"'),typeof In=="string"&&v.push(' crossorigin="',ne(In),'"'),gr(v,a),v.push(' async=""><\/script>')}if($!==void 0)for(U=0;U<$.length;U++)Ct=$[U],In=hn=void 0,mt={rel:"modulepreload",fetchPriority:"low",nonce:void 0},typeof Ct=="string"?mt.href=an=Ct:(mt.href=an=Ct.src,mt.integrity=In=typeof Ct.integrity=="string"?Ct.integrity:void 0,mt.crossOrigin=hn=typeof Ct=="string"||Ct.crossOrigin==null?void 0:Ct.crossOrigin==="use-credentials"?"use-credentials":""),Ct=a,Vt=an,Ct.scriptResources[Vt]=null,Ct.moduleScriptResources[Vt]=null,Ct=[],pe(Ct,mt),Je.add(Ct),v.push('<script type="module" src="',ne(an),'"'),typeof In=="string"&&v.push(' integrity="',ne(In),'"'),typeof hn=="string"&&v.push(' crossorigin="',ne(hn),'"'),gr(v,a),v.push(' async=""><\/script>');return{placeholderPrefix:T,segmentPrefix:he,boundaryPrefix:h,startInlineScript:"<script",startInlineStyle:"<style",preamble:{htmlChunks:null,headChunks:null,bodyChunks:null},externalRuntimeScript:null,bootstrapChunks:v,importMapChunks:[],onHeaders:void 0,headers:null,resets:{font:{},dns:{},connect:{default:{},anonymous:{},credentials:{}},image:{},style:{}},charsetChunks:[],viewportChunks:[],hoistableChunks:[],preconnects:re,fontPreloads:oe,highImagePreloads:Le,styles:De,bootstrapScripts:Je,scripts:Ye,bulkPreloads:et,preloads:ht,nonce:{script:void 0,style:void 0},stylesToHoist:!1,generateStaticMarkup:l}}function Ht(a,l,h,v){return h.generateStaticMarkup?(a.push(ne(l)),!1):(l===""?a=v:(v&&a.push("<!-- -->"),a.push(ne(l)),a=!0),a)}function fn(a,l,h,v){l.generateStaticMarkup||h&&v&&a.push("<!-- -->")}var rn=Function.prototype.bind,jt=Symbol.for("react.client.reference");function Bn(a){if(a==null)return null;if(typeof a=="function")return a.$$typeof===jt?null:a.displayName||a.name||null;if(typeof a=="string")return a;switch(a){case c:return"Fragment";case d:return"Profiler";case u:return"StrictMode";case E:return"Suspense";case _:return"SuspenseList";case w:return"Activity";case k:return"ViewTransition"}if(typeof a=="object")switch(a.$$typeof){case o:return"Portal";case g:return a.displayName||"Context";case p:return(a._context.displayName||"Context")+".Consumer";case S:var l=a.render;return a=a.displayName,a||(a=l.displayName||l.name||"",a=a!==""?"ForwardRef("+a+")":"ForwardRef"),a;case x:return l=a.displayName||null,l!==null?l:Bn(a.type)||"Memo";case R:l=a._payload,a=a._init;try{return Bn(a(l))}catch{}}return null}var $e={},Rt=null;function Ut(a,l){if(a!==l){a.context._currentValue2=a.parentValue,a=a.parent;var h=l.parent;if(a===null){if(h!==null)throw Error(t(401))}else{if(h===null)throw Error(t(401));Ut(a,h)}l.context._currentValue2=l.value}}function hi(a){a.context._currentValue2=a.parentValue,a=a.parent,a!==null&&hi(a)}function xi(a){var l=a.parent;l!==null&&xi(l),a.context._currentValue2=a.value}function ti(a,l){if(a.context._currentValue2=a.parentValue,a=a.parent,a===null)throw Error(t(402));a.depth===l.depth?Ut(a,l):ti(a,l)}function mr(a,l){var h=l.parent;if(h===null)throw Error(t(402));a.depth===h.depth?Ut(a,h):mr(a,h),l.context._currentValue2=l.value}function Ft(a){var l=Rt;l!==a&&(l===null?xi(a):a===null?hi(l):l.depth===a.depth?Ut(l,a):l.depth>a.depth?ti(l,a):mr(l,a),Rt=a)}var wn={enqueueSetState:function(a,l){a=a._reactInternals,a.queue!==null&&a.queue.push(l)},enqueueReplaceState:function(a,l){a=a._reactInternals,a.replace=!0,a.queue=[l]},enqueueForceUpdate:function(){}},vr={id:1,overflow:""};function on(a){var l=a.overflow;return a=a.id,(a&~(1<<32-rr(a)-1)).toString(32)+l}function ni(a,l,h){var v=a.id;a=a.overflow;var T=32-rr(v)-1;v&=~(1<<T),h+=1;var U=32-rr(l)+T;if(30<U){var $=T-T%5;return U=(v&(1<<$)-1).toString(32),v>>=$,T-=$,{id:1<<32-rr(l)+T|h<<T|v,overflow:U+a}}return{id:1<<U|h<<T|v,overflow:a}}var rr=Math.clz32?Math.clz32:Df,Ko=Math.log,If=Math.LN2;function Df(a){return a>>>=0,a===0?32:31-(Ko(a)/If|0)|0}function Mi(){}var di=Error(t(460));function Nf(a,l,h){switch(h=a[h],h===void 0?a.push(l):h!==l&&(l.then(Mi,Mi),l=h),l.status){case"fulfilled":return l.value;case"rejected":throw a=l.reason,a===void 0&&!("reason"in l)?Error(t(600)):a;default:switch(typeof l.status=="string"?l.then(Mi,Mi):(a=l,a.status="pending",a.then(function(v){if(l.status==="pending"){var T=l;T.status="fulfilled",T.value=v}},function(v){if(l.status==="pending"){var T=l;T.status="rejected",T.reason=v}})),l.status){case"fulfilled":return l.value;case"rejected":throw l.reason}throw Qo=l,di}}var Qo=null;function qo(){if(Qo===null)throw Error(t(459));var a=Qo;return Qo=null,a}function Uf(a,l){return a===l&&(a!==0||1/a===1/l)||a!==a&&l!==l}var su=typeof Object.is=="function"?Object.is:Uf,Ur=null,uc=null,fc=null,hc=null,jo=null,_n=null,Zs=!1,$o=!1,Js=0,Ks=0,Qs=-1,el=0,Ms=null;function ou(a){if(a=a._reason,typeof a=="function")try{var l=a()}catch{l="The reason for browser-only rendering could not be determined because its initializer threw."}else l=a;return l=Error(t(603),a===void 0?void 0:{cause:l}),Object.defineProperty(l,C,{value:!0}),l}function tl(a){return typeof a!="object"||a===null?!1:a[C]===!0}function dc(a){var l=Error(t(604),G.call(a,"cause")?{cause:a.cause}:void 0);if(a=a.stack,a!==void 0){var h=a.indexOf(`
`);l.stack=l.name+": "+l.message+(h===-1?"":a.slice(h))}else l.stack=void 0;return l}var sa=null,nl=0;function Fr(){if(Ur===null)throw Error(t(321));return Ur}function lu(){if(0<nl)throw Error(t(312));return{memoizedState:null,queue:null,next:null}}function pc(){return _n===null?jo===null?(Zs=!1,jo=_n=lu()):(Zs=!0,_n=jo):_n.next===null?(Zs=!1,_n=_n.next=lu()):(Zs=!0,_n=_n.next),_n}function oa(){var a=Ms;return Ms=null,a}function qs(){hc=fc=uc=Ur=null,$o=!1,jo=null,nl=0,_n=sa=null}function cu(a,l){return typeof l=="function"?l(a):l}function uu(a,l,h){if(Ur=Fr(),_n=pc(),Zs){var v=_n.queue;if(l=v.dispatch,sa!==null&&(h=sa.get(v),h!==void 0)){sa.delete(v),v=_n.memoizedState;do v=a(v,h.action),h=h.next;while(h!==null);return _n.memoizedState=v,[v,l]}return[_n.memoizedState,l]}return a=a===cu?typeof l=="function"?l():l:h!==void 0?h(l):l,_n.memoizedState=a,a=_n.queue={last:null,dispatch:null},a=a.dispatch=Ff.bind(null,Ur,a),[_n.memoizedState,a]}function fu(a,l){if(Ur=Fr(),_n=pc(),l=l===void 0?null:l,_n!==null){var h=_n.memoizedState;if(h!==null&&l!==null){var v=h[1];e:if(v===null)v=!1;else{for(var T=0;T<v.length&&T<l.length;T++)if(!su(l[T],v[T])){v=!1;break e}v=!0}if(v)return h[0]}}return a=a(),_n.memoizedState=[a,l],a}function Ff(a,l,h){if(25<=nl)throw Error(t(301));if(a===Ur)if($o=!0,a={action:h,next:null},sa===null&&(sa=new Map),h=sa.get(l),h===void 0)sa.set(l,a);else{for(l=h;l.next!==null;)l=l.next;l.next=a}}function hu(){throw Error(t(440))}function du(){throw Error(t(394))}function Of(){throw Error(t(479))}function pu(a,l,h){Fr();var v=Ks++,T=fc;if(typeof a.$$FORM_ACTION=="function"){var U=null,$=hc;T=T.formState;var he=a.$$IS_SIGNATURE_EQUAL;if(T!==null&&typeof he=="function"){var re=T[1];he.call(a,T[2],T[3])&&(U=h!==void 0?"p"+h:"k"+P(JSON.stringify([$,null,v]),0),re===U&&(Qs=v,l=T[0]))}var oe=a.bind(null,l);return a=function(De){oe(De)},typeof oe.$$FORM_ACTION=="function"&&(a.$$FORM_ACTION=function(De){De=oe.$$FORM_ACTION(De),h!==void 0&&(h+="",De.action=h);var Je=De.data;return Je&&(U===null&&(U=h!==void 0?"p"+h:"k"+P(JSON.stringify([$,null,v]),0)),Je.append("$ACTION_KEY",U)),De}),[l,a,!1]}var Le=a.bind(null,l);return[l,function(De){Le(De)},!1]}function gu(a){var l=el;return el+=1,Ms===null&&(Ms=[]),Nf(Ms,a,l)}function Bf(){throw Error(t(393))}var mu={readContext:function(a){return a._currentValue2},use:function(a){if(a!==null&&typeof a=="object"){if(typeof a.then=="function")return gu(a);if(a.$$typeof===C)throw ou(a);if(a.$$typeof===g)return a._currentValue2}throw Error(t(438,String(a)))},useContext:function(a){return Fr(),a._currentValue2},useMemo:fu,useReducer:uu,useRef:function(a){Ur=Fr(),_n=pc();var l=_n.memoizedState;return l===null?(a={current:a},_n.memoizedState=a):l},useState:function(a){return uu(cu,a)},useInsertionEffect:Mi,useLayoutEffect:Mi,useCallback:function(a,l){return fu(function(){return a},l)},useImperativeHandle:Mi,useEffect:Mi,useDebugValue:Mi,useDeferredValue:function(a,l){return Fr(),l!==void 0?l:a},useTransition:function(){return Fr(),[!1,du]},useId:function(){var a=on(uc.treeContext),l=il;if(l===null)throw Error(t(404));var h=Js++;return tn(l,a,h)},useSyncExternalStore:function(a,l,h){if(h===void 0)throw Error(t(407));return h()},useOptimistic:function(a){return Fr(),[a,Of]},useActionState:pu,useFormState:pu,useHostTransitionStatus:function(){return Fr(),Lt},useMemoCache:function(a){for(var l=Array(a),h=0;h<a;h++)l[h]=O;return l},useCacheRefresh:function(){return Bf},useEffectEvent:function(){return hu}},il=null,zf={getCacheForType:function(){throw Error(t(248))},cacheSignal:function(){throw Error(t(248))}},gc,vu;function Fa(a){if(gc===void 0)try{throw Error()}catch(h){var l=h.stack.trim().match(/\n( *(at )?)/);gc=l&&l[1]||"",vu=-1<h.stack.indexOf(`
    at`)?" (<anonymous>)":-1<h.stack.indexOf("@")?"@unknown:0:0":""}return`
`+gc+a+vu}var mc=!1;function rl(a,l){if(!a||mc)return"";mc=!0;var h=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var v={DetermineComponentFrameRoot:function(){try{if(l){var De=function(){throw Error()};if(Object.defineProperty(De.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(De,[])}catch(et){var Je=et}Reflect.construct(a,[],De)}else{try{De.call()}catch(et){Je=et}De=!1;try{var Ye=Object.getOwnPropertyDescriptor(a.prototype,"props");Object.defineProperty(a.prototype,"props",{configurable:!0,set:function(){throw Error()}}),De=!0,new a}finally{De&&(Ye!==void 0?Object.defineProperty(a.prototype,"props",Ye):delete a.prototype.props)}}}else{try{throw Error()}catch(et){Je=et}(De=a())&&typeof De.catch=="function"&&De.catch(function(){})}}catch(et){if(et&&Je&&typeof et.stack=="string")return[et.stack,Je.stack]}return[null,null]}};v.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var T=Object.getOwnPropertyDescriptor(v.DetermineComponentFrameRoot,"name");T&&T.configurable&&Object.defineProperty(v.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var U=v.DetermineComponentFrameRoot(),$=U[0],he=U[1];if($&&he){var re=$.split(`
`),oe=he.split(`
`);for(T=v=0;v<re.length&&!re[v].includes("DetermineComponentFrameRoot");)v++;for(;T<oe.length&&!oe[T].includes("DetermineComponentFrameRoot");)T++;if(v===re.length||T===oe.length)for(v=re.length-1,T=oe.length-1;1<=v&&0<=T&&re[v]!==oe[T];)T--;for(;1<=v&&0<=T;v--,T--)if(re[v]!==oe[T]){if(v!==1||T!==1)do if(v--,T--,0>T||re[v]!==oe[T]){var Le=`
`+re[v].replace(" at new "," at ");return a.displayName&&Le.includes("<anonymous>")&&(Le=Le.replace("<anonymous>",a.displayName)),Le}while(1<=v&&0<=T);break}}}finally{mc=!1,Error.prepareStackTrace=h}return(h=a?a.displayName||a.name:"")?Fa(h):""}function _u(a){if(typeof a=="string")return Fa(a);if(typeof a=="function")return a.prototype&&a.prototype.isReactComponent?rl(a,!0):rl(a,!1);if(typeof a=="object"&&a!==null){switch(a.$$typeof){case S:return rl(a.render,!1);case x:return rl(a.type,!1);case R:var l=a,h=l._payload;l=l._init;try{a=l(h)}catch{return Fa("Lazy")}return _u(a)}if(typeof a.name=="string"){e:{h=a.name,l=a.env;var v=a.debugLocation;if(v!=null&&(a=Error.prepareStackTrace,Error.prepareStackTrace=void 0,v=v.stack,Error.prepareStackTrace=a,v.startsWith(`Error: react-stack-top-frame
`)&&(v=v.slice(29)),a=v.indexOf(`
`),a!==-1&&(v=v.slice(a+1)),a=v.indexOf("react_stack_bottom_frame"),a!==-1&&(a=v.lastIndexOf(`
`,a)),a=a!==-1?v=v.slice(0,a):"",v=a.lastIndexOf(`
`),a=v===-1?a:a.slice(v+1),a.indexOf(h)!==-1)){h=`
`+a;break e}h=Fa(h+(l?" ["+l+"]":""))}return h}}switch(a){case _:return Fa("SuspenseList");case E:return Fa("Suspense");case k:return Fa("ViewTransition")}return""}function ys(a,l){return(500<l.byteSize||l.defer)&&l.preamble===null}function kf(a){if(typeof a=="object"&&a!==null&&typeof a.environmentName=="string"){var l=a.environmentName;a=[a].slice(0),typeof a[0]=="string"?a.splice(0,1,"[%s] "+a[0]," "+l+" "):a.splice(0,0,"[%s]"," "+l+" "),a.unshift(console),l=rn.apply(console.error,a),l()}else console.error(a);return null}function Hf(a,l,h,v,T,U,$,he,re,oe,Le){var De=new Set;this.destination=null,this.flushScheduled=!1,this.resumableState=a,this.renderState=l,this.rootFormatContext=h,this.progressiveChunkSize=v===void 0?12800:v,this.status=10,this.fatalError=null,this.aborted=!1,this.pendingRootTasks=this.allPendingTasks=this.nextSegmentId=0,this.completedPreambleSegments=this.completedRootSegment=null,this.byteSize=0,this.abortableTasks=De,this.pingedTasks=[],this.currentTask=null,this.clientRenderedBoundaries=[],this.completedBoundaries=[],this.partialBoundaries=[],this.postponedState=this.trackedPostpones=null,this.onError=T===void 0?kf:T,this.onBrowserBailout=U===void 0?Mi:U,this.onAllReady=$===void 0?Mi:$,this.onShellReady=he===void 0?Mi:he,this.onShellError=re===void 0?Mi:re,this.onFatalError=oe===void 0?Mi:oe,this.renderLifetimeController=null,this.formState=Le===void 0?null:Le}function Gf(a,l,h,v,T,U,$,he,re,oe,Le,De){return l=new Hf(l,h,v,T,U,$,he,re,oe,Le,De),h=_r(l,0,null,v,!1,!1),h.parentFlushed=!0,a=sl(l,null,a,-1,null,h,null,null,l.abortableTasks,null,v,null,vr,null,null),Oa(a),l.pingedTasks.push(a),l}var zn=null;function al(a,l){a.pingedTasks.push(l),a.pingedTasks.length===1&&(a.flushScheduled=a.destination!==null,no(a))}function vc(a,l,h,v,T){return h={status:0,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,row:l,completedSegments:[],byteSize:0,defer:T,fallbackAbortableTasks:h,errorDigest:null,contentState:Zt(),fallbackState:Zt(),preamble:v,tracked:null},l!==null&&(l.pendingTasks++,v=l.boundaries,v!==null&&(a.allPendingTasks++,h.pendingTasks++,v.push(h)),a=l.inheritedHoistables,a!==null&&St(h.contentState,a)),h}function sl(a,l,h,v,T,U,$,he,re,oe,Le,De,Je,Ye,et){a.allPendingTasks++,T===null?a.pendingRootTasks++:T.pendingTasks++,Ye!==null&&Ye.pendingTasks++;var ht={replay:null,node:h,childIndex:v,ping:{resolve:function(){return al(a,ht)},reject:function(an){a.aborted?ht.abortSet.delete(ht)&&za(ht,a,an):al(a,ht)}},blockedBoundary:T,blockedSegment:U,blockedPreamble:$,hoistableState:he,abortSet:re,keyPath:oe,formatContext:Le,context:De,treeContext:Je,row:Ye,componentStack:et,thenableState:l};return re.add(ht),ht}function xu(a,l,h,v,T,U,$,he,re,oe,Le,De,Je,Ye){a.allPendingTasks++,U===null?a.pendingRootTasks++:U.pendingTasks++,Je!==null&&Je.pendingTasks++,h.pendingTasks++;var et={replay:h,node:v,childIndex:T,ping:{resolve:function(){return al(a,et)},reject:function(ht){a.aborted?et.abortSet.delete(et)&&za(et,a,ht):al(a,et)}},blockedBoundary:U,blockedSegment:null,blockedPreamble:null,hoistableState:$,abortSet:he,keyPath:re,formatContext:oe,context:Le,treeContext:De,row:Je,componentStack:Ye,thenableState:l};return he.add(et),et}function _r(a,l,h,v,T,U){return{status:0,parentFlushed:!1,id:-1,index:l,chunks:[],children:[],preambleChildren:[],parentFormatContext:v,boundary:h,lastPushedText:T,textEmbedded:U}}function Oa(a){var l=a.node;typeof l=="object"&&l!==null&&l.$$typeof===n&&(a.componentStack={parent:a.componentStack,type:l.type})}function _c(a){return a===null?null:{parent:a.parent,type:"Suspense Fallback"}}function Ba(a){var l={};return a&&Object.defineProperty(l,"componentStack",{configurable:!0,enumerable:!0,get:function(){try{var h="",v=a;do h+=_u(v.type),v=v.parent;while(v);var T=h}catch(U){T=`
Error generating stack: `+U.message+`
`+U.stack}return Object.defineProperty(l,"componentStack",{value:T}),T}}),l}function Xn(a,l,h){if(tl(l))return a=a.onBrowserBailout,a(l,h),"";if(a=a.onError,l=a(l,h),l==null||typeof l=="string")return l===""?void 0:l}function ii(a,l){var h=a.onShellError,v=a.onFatalError;a.pendingRootTasks!==0&&h(l),v(l),ml(a),a.destination!==null?(a.status=13,a.destination.destroy(l)):(a.status=12,a.aborted||(a.fatalError=l))}function Ln(a,l){xc(a,l.next,l.hoistables)}function xc(a,l,h){for(;l!==null;){h!==null&&(St(l.hoistables,h),l.inheritedHoistables=h);var v=l.boundaries;if(v!==null){l.boundaries=null;for(var T=0;T<v.length;T++){var U=v[T];h!==null&&St(U.contentState,h),ar(a,U,null,null)}}if(l.pendingTasks--,0<l.pendingTasks)break;h=l.hoistables,l=l.next}}function Mc(a,l){var h=l.boundaries;if(h!==null&&l.pendingTasks===h.length){for(var v=!0,T=0;T<h.length;T++){var U=h[T];if(U.pendingTasks!==1||U.parentFlushed||ys(a,U)){v=!1;break}}v&&xc(a,l,l.hoistables)}}function js(a){var l={pendingTasks:1,boundaries:null,hoistables:Zt(),inheritedHoistables:null,together:!1,next:null};return a!==null&&0<a.pendingTasks&&(l.pendingTasks++,l.boundaries=[],a.next=l),l}function yc(a,l,h,v,T){var U=l.keyPath,$=l.treeContext,he=l.row;l.keyPath=h,h=v.length;var re=null;if(l.replay!==null){var oe=l.replay.slots;if(oe!==null&&typeof oe=="object")for(var Le=0;Le<h;Le++){var De=T!=="backwards"&&T!=="unstable_legacy-backwards"?Le:h-1-Le,Je=v[De];l.row=re=js(re),l.treeContext=ni($,h,De);var Ye=oe[De];typeof Ye=="number"?(ll(a,l,Ye,Je,De),delete oe[De]):Yn(a,l,Je,De),--re.pendingTasks===0&&Ln(a,re)}else for(oe=0;oe<h;oe++)Le=T!=="backwards"&&T!=="unstable_legacy-backwards"?oe:h-1-oe,De=v[Le],l.row=re=js(re),l.treeContext=ni($,h,Le),Yn(a,l,De,Le),--re.pendingTasks===0&&Ln(a,re)}else if(T!=="backwards"&&T!=="unstable_legacy-backwards")for(T=0;T<h;T++)oe=v[T],l.row=re=js(re),l.treeContext=ni($,h,T),Yn(a,l,oe,T),--re.pendingTasks===0&&Ln(a,re);else{for(oe=l.blockedSegment,Le=oe.children.length,De=oe.chunks.length,Je=0;Je<h;Je++){Ye=T==="unstable_legacy-backwards"?h-1-Je:Je;var et=v[Ye];l.row=re=js(re),l.treeContext=ni($,h,Ye);var ht=_r(a,De,null,l.formatContext,Ye===0?oe.lastPushedText:!0,!0);oe.children.splice(Le,0,ht),l.blockedSegment=ht;try{Yn(a,l,et,Ye),fn(ht.chunks,a.renderState,ht.lastPushedText,ht.textEmbedded),ht.status=1,--re.pendingTasks===0&&Ln(a,re)}catch(an){throw ht.status=a.aborted?3:4,an}}l.blockedSegment=oe,oe.lastPushedText=!1}he!==null&&re!==null&&0<re.pendingTasks&&(he.pendingTasks++,re.next=he),l.treeContext=$,l.row=he,l.keyPath=U}function Mu(a,l,h,v,T,U){var $=l.thenableState;for(l.thenableState=null,Ur={},uc=l,fc=a,hc=h,Ks=Js=0,Qs=-1,el=0,Ms=$,a=v(T,U);$o;)$o=!1,Ks=Js=0,Qs=-1,el=0,nl+=1,_n=null,a=v(T,U);return qs(),a}function yu(a,l,h,v,T,U,$){var he=!1;if(U!==0&&a.formState!==null){var re=l.blockedSegment;if(re!==null){he=!0,re=re.chunks;for(var oe=0;oe<U;oe++)oe===$?re.push("<!--F!-->"):re.push("<!--F-->")}}U=l.keyPath,l.keyPath=h,T?(h=l.treeContext,l.treeContext=ni(h,1,0),Yn(a,l,v,-1),l.treeContext=h):he?Yn(a,l,v,-1):Di(a,l,v,-1),l.keyPath=U}function ol(a,l,h,v,T,U){if(typeof v=="function")if(v.prototype&&v.prototype.isReactComponent){var $=T;if("ref"in T){$={};for(var he in T)he!=="ref"&&($[he]=T[he])}var re=v.defaultProps;if(re){$===T&&($=z({},$,T));for(var oe in re)$[oe]===void 0&&($[oe]=re[oe])}var Le=$,De=$e,Je=v.contextType;typeof Je=="object"&&Je!==null&&(De=Je._currentValue2);var Ye=new v(Le,De),et=Ye.state!==void 0?Ye.state:null;Ye.updater=wn,Ye.props=Le,Ye.state=et;var ht={queue:[],replace:!1};Ye._reactInternals=ht;var an=v.contextType;Ye.context=typeof an=="object"&&an!==null?an._currentValue2:$e;var Vt=v.getDerivedStateFromProps;if(typeof Vt=="function"){var hn=Vt(Le,et),In=hn==null?et:z({},et,hn);Ye.state=In}if(typeof v.getDerivedStateFromProps!="function"&&typeof Ye.getSnapshotBeforeUpdate!="function"&&(typeof Ye.UNSAFE_componentWillMount=="function"||typeof Ye.componentWillMount=="function")){var mt=Ye.state;if(typeof Ye.componentWillMount=="function"&&Ye.componentWillMount(),typeof Ye.UNSAFE_componentWillMount=="function"&&Ye.UNSAFE_componentWillMount(),mt!==Ye.state&&wn.enqueueReplaceState(Ye,Ye.state,null),ht.queue!==null&&0<ht.queue.length){var Ct=ht.queue,Xt=ht.replace;if(ht.queue=null,ht.replace=!1,Xt&&Ct.length===1)Ye.state=Ct[0];else{for(var ln=Xt?Ct[0]:Ye.state,ri=!0,Ot=Xt?1:0;Ot<Ct.length;Ot++){var Sn=Ct[Ot],xn=typeof Sn=="function"?Sn.call(Ye,ln,Le,void 0):Sn;xn!=null&&(ri?(ri=!1,ln=z({},ln,xn)):z(ln,xn))}Ye.state=ln}}else ht.queue=null}var Zn=Ye.render();if(a.aborted)throw null;var dn=l.keyPath;l.keyPath=h,Di(a,l,Zn,-1),l.keyPath=dn}else{var ci=Mu(a,l,h,v,T,void 0);if(a.aborted)throw null;yu(a,l,h,ci,Js!==0,Ks,Qs)}else if(typeof v=="string"){var gn=l.blockedSegment;if(gn===null){var sr=T.children,kn=l.formatContext,Gn=l.keyPath;l.formatContext=pt(kn,v,T),l.keyPath=h,Yn(a,l,sr,-1),l.formatContext=kn,l.keyPath=Gn}else{var Br=Se(gn.chunks,v,T,a.resumableState,a.renderState,l.blockedPreamble,l.hoistableState,l.formatContext,gn.lastPushedText);gn.lastPushedText=!1;var An=l.formatContext,yi=l.keyPath;if(l.keyPath=h,(l.formatContext=pt(An,v,T)).insertionMode===3){var Qn=_r(a,0,null,l.formatContext,!1,!1);gn.preambleChildren.push(Qn),l.blockedSegment=Qn;try{Yn(a,l,Br,-1),fn(Qn.chunks,a.renderState,Qn.lastPushedText,Qn.textEmbedded),Qn.status=1}finally{l.blockedSegment=gn}}else Yn(a,l,Br,-1);l.formatContext=An,l.keyPath=yi;e:{var Ni=gn.chunks,Xi=a.resumableState;switch(v){case"title":case"style":case"script":case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"input":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":break e;case"body":if(1>=An.insertionMode){Xi.hasBody=!0;break e}break;case"html":if(An.insertionMode===0){Xi.hasHtml=!0;break e}break;case"head":if(1>=An.insertionMode)break e}Ni.push(ze(v))}gn.lastPushedText=!1}}else{switch(v){case M:case u:case d:case c:var xr=l.keyPath;l.keyPath=h,Di(a,l,T.children,-1),l.keyPath=xr;return;case w:var Rn=l.blockedSegment;if(Rn===null){if(T.mode!=="hidden"){var zr=l.keyPath;l.keyPath=h,Yn(a,l,T.children,-1),l.keyPath=zr}}else if(T.mode!=="hidden"){a.renderState.generateStaticMarkup||Rn.chunks.push("<!--&-->"),Rn.lastPushedText=!1;var Va=l.keyPath;l.keyPath=h,Yn(a,l,T.children,-1),l.keyPath=Va,a.renderState.generateStaticMarkup||Rn.chunks.push("<!--/&-->"),Rn.lastPushedText=!1}return;case _:e:{var or=T.children,kr=T.revealOrder;if(kr!=="independent"&&kr!=="together"){if(y(or)){yc(a,l,h,or,kr);break e}var oo=D(or);if(oo){var Wa=oo.call(or);if(Wa){var Hr=Wa.next();if(!Hr.done){do Hr=Wa.next();while(!Hr.done);yc(a,l,h,or,kr)}break e}}}if(kr==="together"){var vl=l.keyPath,Yi=l.row,ai=l.row=js(null);ai.boundaries=[],ai.together=!0,l.keyPath=h,Di(a,l,or,-1),--ai.pendingTasks===0&&Ln(a,ai),l.keyPath=vl,l.row=Yi,Yi!==null&&0<ai.pendingTasks&&(Yi.pendingTasks++,ai.next=Yi)}else{var Mr=l.keyPath;l.keyPath=h,Di(a,l,or,-1),l.keyPath=Mr}}return;case k:var Xa=l.formatContext,yr=l.keyPath,lo=a.resumableState;if(T.name==null||T.name==="auto"){var Zi=on(l.treeContext);tn(lo,Zi,0)}if(l.formatContext=Xa,l.keyPath=h,T.name!=null&&T.name!=="auto")Di(a,l,T.children,-1);else{var Ui=l.treeContext;l.treeContext=ni(Ui,1,0),Yn(a,l,T.children,-1),l.treeContext=Ui}l.formatContext=Xa,l.keyPath=yr;return;case N:throw Error(t(343));case E:e:if(l.replay!==null){var Ya=l.keyPath,Gr=l.formatContext,ua=l.row;l.keyPath=h,l.formatContext=xt(a.resumableState,Gr),l.row=null;var Sr=T.children;try{Yn(a,l,Sr,-1)}finally{l.keyPath=Ya,l.formatContext=Gr,l.row=ua}}else{var Za=l.keyPath,fa=l.formatContext,$t=l.row,ha=l.blockedBoundary,Vr=l.blockedPreamble,da=l.hoistableState,Fi=l.blockedSegment,Ji=T.fallback,Si=T.children,br=new Set,qt=vc(a,l.row,br,null,!1),pn=_r(a,Fi.chunks.length,qt,l.formatContext,!1,!1);Fi.children.push(pn),Fi.lastPushedText=!1;var qn=_r(a,0,null,l.formatContext,!1,!1);qn.parentFlushed=!0;var Vn=a.trackedPostpones;if(Vn!==null){var pa=l.componentStack,ga=[h[0],"Suspense Fallback",h[2]];if(Vn!==null){var ma=[ga[1],ga[2],[],null];Vn.workingMap.set(ga,ma),qt.tracked={contentKeyPath:h,fallbackNode:ma}}l.blockedSegment=pn,l.blockedPreamble=qt.preamble===null?null:qt.preamble.fallback,l.keyPath=ga,l.formatContext=Xe(a.resumableState,fa),l.componentStack=_c(pa);try{Yn(a,l,Ji,-1),fn(pn.chunks,a.renderState,pn.lastPushedText,pn.textEmbedded),pn.status=1}catch(bi){throw pn.status=a.aborted?3:4,bi}finally{l.blockedSegment=Fi,l.blockedPreamble=Vr,l.keyPath=Za,l.formatContext=fa}var co=sl(a,null,Si,-1,qt,qn,qt.preamble===null?null:qt.preamble.content,qt.contentState,l.abortSet,h,xt(a.resumableState,l.formatContext),l.context,l.treeContext,null,pa);Oa(co),a.pingedTasks.push(co)}else{l.blockedBoundary=qt,l.blockedPreamble=qt.preamble===null?null:qt.preamble.content,l.hoistableState=qt.contentState,l.blockedSegment=qn,l.keyPath=h,l.formatContext=xt(a.resumableState,fa),l.row=null;try{if(Yn(a,l,Si,-1),fn(qn.chunks,a.renderState,qn.lastPushedText,qn.textEmbedded),qn.status=1,to(qt,qn),qt.pendingTasks===0&&qt.status===0){if(qt.status=1,!ys(a,qt)){$t!==null&&--$t.pendingTasks===0&&Ln(a,$t),a.pendingRootTasks===0&&l.blockedPreamble&&ka(a);break e}}else $t!==null&&$t.together&&Mc(a,$t)}catch(bi){if(qt.status=4,a.aborted){qn.status=3;var Ki=a.fatalError}else qn.status=4,Ki=bi;var Ja=Ba(l.componentStack),Er=Xn(a,Ki,Ja);qt.errorDigest=Er,$s(a,qt)}finally{l.blockedBoundary=ha,l.blockedPreamble=Vr,l.hoistableState=da,l.blockedSegment=Fi,l.keyPath=Za,l.formatContext=fa,l.row=$t}var Qi=sl(a,null,Ji,-1,ha,pn,qt.preamble===null?null:qt.preamble.fallback,qt.fallbackState,br,[h[0],"Suspense Fallback",h[2]],Xe(a.resumableState,l.formatContext),l.context,l.treeContext,l.row,_c(l.componentStack));Oa(Qi),a.pingedTasks.push(Qi)}}return}if(typeof v=="object"&&v!==null)switch(v.$$typeof){case S:if("ref"in T){var Wn={};for(var Tr in T)Tr!=="ref"&&(Wn[Tr]=T[Tr])}else Wn=T;var Ka=Mu(a,l,h,v.render,Wn,U);yu(a,l,h,Ka,Js!==0,Ks,Qs);return;case x:ol(a,l,h,v.type,T,U);return;case g:var uo=T.children,_l=l.keyPath,va=T.value,fo=v._currentValue2;v._currentValue2=va;var Wr=Rt,bn={parent:Wr,depth:Wr===null?0:Wr.depth+1,context:v,parentValue:fo,value:va};Rt=bn,l.context=bn,l.keyPath=h,Di(a,l,uo,-1);var Qa=Rt;if(Qa===null)throw Error(t(403));Qa.context._currentValue2=Qa.parentValue;var wr=Rt=Qa.parent;l.context=wr,l.keyPath=_l;return;case p:var _a=T.children,Ar=_a(v._context._currentValue2),Es=l.keyPath;l.keyPath=h,Di(a,l,Ar,-1),l.keyPath=Es;return;case R:var ho=v._init,Xr=ho(v._payload);if(a.aborted)throw null;ol(a,l,h,Xr,T,U);return}throw Error(t(130,v==null?v:typeof v,""))}}function ll(a,l,h,v,T){var U=l.replay,$=l.blockedBoundary,he=_r(a,0,null,l.formatContext,!1,!1);he.id=h,he.parentFlushed=!0;try{l.replay=null,l.blockedSegment=he,Yn(a,l,v,T),he.status=1,$===null?a.completedRootSegment=he:(to($,he),$.parentFlushed&&a.partialBoundaries.push($))}finally{l.replay=U,l.blockedSegment=null}}function Di(a,l,h,v){l.replay!==null&&typeof l.replay.slots=="number"?ll(a,l,l.replay.slots,h,v):(l.node=h,l.childIndex=v,h=l.componentStack,Oa(l),cl(a,l),l.componentStack=h)}function cl(a,l){var h=l.node,v=l.childIndex;if(h!==null){if(typeof h=="object"){switch(h.$$typeof){case n:var T=h.type,U=h.key,$=h.props;h=$.ref;var he=h!==void 0?h:null,re=Bn(T),oe=U==null||U===H?v===-1?0:v:U;if(U=[l.keyPath,re,oe],l.replay!==null)e:{var Le=l.replay;for(v=Le.nodes,h=0;h<v.length;h++){var De=v[h];if(oe===De[1]){if(De.length===4){if(re!==null&&re!==De[0])throw Error(t(490,De[0],re));var Je=De[2],Ye=De[3],et=l.node;l.replay={nodes:Je,slots:Ye,pendingTasks:1};try{if(ol(a,l,U,T,$,he),l.replay.pendingTasks===1&&0<l.replay.nodes.length)throw Error(t(488));l.replay.pendingTasks--}catch(ln){if(typeof ln=="object"&&ln!==null&&(ln===di||typeof ln.then=="function"||ln.message==="Maximum call stack size exceeded"))throw l.node===et?l.replay=Le:v.splice(h,1),ln;l.replay.pendingTasks--,U=Ba(l.componentStack),et=a,$=l.blockedBoundary,a=a.aborted?a.fatalError:ln,U=Xn(et,a,U),eo(et,$,Je,Ye,a,U)}l.replay=Le}else{if(T!==E)throw Error(t(490,"Suspense",Bn(T)||"Unknown"));t:{Le=De[5],T=De[2],he=De[3],re=De[4]===null?[]:De[4][2],De=De[4]===null?null:De[4][3],oe=l.keyPath;var ht=l.formatContext,an=l.row,Vt=l.replay,hn=l.blockedBoundary,In=l.hoistableState,mt=$.children;$=$.fallback;var Ct=new Set,Xt=vc(a,l.row,Ct,null,!1);Xt.parentFlushed=!0,Xt.rootSegmentID=Le,l.blockedBoundary=Xt,l.hoistableState=Xt.contentState,l.keyPath=U,l.formatContext=xt(a.resumableState,ht),l.row=null,l.replay={nodes:T,slots:he,pendingTasks:1};try{if(Yn(a,l,mt,-1),l.replay.pendingTasks===1&&0<l.replay.nodes.length)throw Error(t(488));if(l.replay.pendingTasks--,Xt.pendingTasks===0&&Xt.status===0){Xt.status=1,a.completedBoundaries.push(Xt);break t}}catch(ln){Xt.status=4,Je=a.aborted?a.fatalError:ln,Ye=Ba(l.componentStack),et=Xn(a,Je,Ye),Xt.errorDigest=et,l.replay.pendingTasks--,a.clientRenderedBoundaries.push(Xt)}finally{l.blockedBoundary=hn,l.hoistableState=In,l.replay=Vt,l.keyPath=oe,l.formatContext=ht,l.row=an}Je=xu(a,null,{nodes:re,slots:De,pendingTasks:0},$,-1,hn,Xt.fallbackState,Ct,[U[0],"Suspense Fallback",U[2]],Xe(a.resumableState,l.formatContext),l.context,l.treeContext,l.row,_c(l.componentStack)),Oa(Je),a.pingedTasks.push(Je)}}v.splice(h,1);break e}}}else ol(a,l,U,T,$,he);return;case o:throw Error(t(257));case R:if(Je=h._init,h=Je(h._payload),a.aborted)throw null;Di(a,l,h,v);return}if(y(h)){Ss(a,l,h,v);return}if((Je=D(h))&&(Je=Je.call(h))){if(h=Je.next(),!h.done){Ye=[];do Ye.push(h.value),h=Je.next();while(!h.done);Ss(a,l,Ye,v)}return}if(typeof h.then=="function")return l.thenableState=null,Di(a,l,gu(h),v);if(h.$$typeof===g)return Di(a,l,h._currentValue2,v);throw v=Object.prototype.toString.call(h),Error(t(31,v==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":v))}typeof h=="string"?(v=l.blockedSegment,v!==null&&(v.lastPushedText=Ht(v.chunks,h,a.renderState,v.lastPushedText))):(typeof h=="number"||typeof h=="bigint")&&(v=l.blockedSegment,v!==null&&(v.lastPushedText=Ht(v.chunks,""+h,a.renderState,v.lastPushedText)))}}function Ss(a,l,h,v){var T=l.keyPath;if(v!==-1&&(l.keyPath=[l.keyPath,"Fragment",v],l.replay!==null)){for(var U=l.replay,$=U.nodes,he=0;he<$.length;he++){var re=$[he];if(re[1]===v){v=re[2],re=re[3],l.replay={nodes:v,slots:re,pendingTasks:1};try{if(Ss(a,l,h,-1),l.replay.pendingTasks===1&&0<l.replay.nodes.length)throw Error(t(488));l.replay.pendingTasks--}catch(De){if(typeof De=="object"&&De!==null&&(De===di||typeof De.then=="function"))throw De;l.replay.pendingTasks--;var oe=Ba(l.componentStack);h=a;var Le=l.blockedBoundary;a=a.aborted?a.fatalError:De,oe=Xn(h,a,oe),eo(h,Le,v,re,a,oe)}l.replay=U,$.splice(he,1);break}}l.keyPath=T;return}if(U=l.treeContext,$=h.length,l.replay!==null&&(he=l.replay.slots,he!==null&&typeof he=="object")){for(v=0;v<$;v++)re=h[v],l.treeContext=ni(U,$,v),Le=he[v],typeof Le=="number"?(ll(a,l,Le,re,v),delete he[v]):Yn(a,l,re,v);l.treeContext=U,l.keyPath=T;return}for(he=0;he<$;he++)v=h[he],l.treeContext=ni(U,$,he),Yn(a,l,v,he);l.treeContext=U,l.keyPath=T}function Sc(a,l,h){h.status=5,h.rootSegmentID=a.nextSegmentId++;var v=h.tracked;if(v===null||(a=v.contentKeyPath,a===null))throw Error(t(486));v=v.fallbackNode;var T=[],U=l.workingMap.get(a);return U===void 0?(h=[a[1],a[2],T,null,v,h.rootSegmentID],l.workingMap.set(a,h),so(h,a[0],l),h):(U[4]=v,U[5]=h.rootSegmentID,U)}function bc(a,l,h,v){v.status=5;var T=h.keyPath,U=h.blockedBoundary;if(U===null)v.id=a.nextSegmentId++,l.rootSlots=v.id,a.completedRootSegment!==null&&(a.completedRootSegment.status=5);else{if(U!==null&&U.status===0){var $=Sc(a,l,U);if(U.tracked!==null&&U.tracked.contentKeyPath===T&&h.childIndex===-1){v.id===-1&&(v.id=v.parentFlushed?U.rootSegmentID:a.nextSegmentId++),$[3]=v.id;return}}if(v.id===-1&&(v.id=v.parentFlushed&&U!==null?U.rootSegmentID:a.nextSegmentId++),h.childIndex===-1)T===null?l.rootSlots=v.id:(h=l.workingMap.get(T),h===void 0?(h=[T[1],T[2],[],v.id],so(h,T[0],l)):h[3]=v.id);else{if(T===null){if(a=l.rootSlots,a===null)a=l.rootSlots={};else if(typeof a=="number")throw Error(t(491))}else if(U=l.workingMap,$=U.get(T),$===void 0)a={},$=[T[1],T[2],[],a],U.set(T,$),so($,T[0],l);else if(a=$[3],a===null)a=$[3]={};else if(typeof a=="number")throw Error(t(491));a[h.childIndex]=v.id}}}function $s(a,l){a=a.trackedPostpones,a!==null&&(l=l.tracked,l!==null&&(l=l.contentKeyPath,l!==null&&(a=a.workingMap.get(l),a!==void 0&&(a.length=4,a[2]=[],a[3]=null))))}function ul(a,l,h){return xu(a,h,l.replay,l.node,l.childIndex,l.blockedBoundary,l.hoistableState,l.abortSet,l.keyPath,l.formatContext,l.context,l.treeContext,l.row,l.componentStack)}function Su(a,l,h){var v=l.blockedSegment,T=_r(a,v.chunks.length,null,l.formatContext,v.lastPushedText,!0);return v.children.push(T),v.lastPushedText=!1,sl(a,h,l.node,l.childIndex,l.blockedBoundary,T,l.blockedPreamble,l.hoistableState,l.abortSet,l.keyPath,l.formatContext,l.context,l.treeContext,l.row,l.componentStack)}function Yn(a,l,h,v){var T=l.formatContext,U=l.context,$=l.keyPath,he=l.treeContext,re=l.componentStack,oe=l.blockedSegment;if(oe===null){oe=l.replay;try{return Di(a,l,h,v)}catch(Je){if(qs(),h=Je===di?qo():Je,!a.aborted&&typeof h=="object"&&h!==null){if(typeof h.then=="function"){v=Je===di?oa():null,a=ul(a,l,v).ping,h.then(a.resolve,a.reject),l.formatContext=T,l.context=U,l.keyPath=$,l.treeContext=he,l.componentStack=re,l.replay=oe,Ft(U);return}if(h.message==="Maximum call stack size exceeded"){h=Je===di?oa():null,h=ul(a,l,h),a.pingedTasks.push(h),l.formatContext=T,l.context=U,l.keyPath=$,l.treeContext=he,l.componentStack=re,l.replay=oe,Ft(U);return}}}}else{var Le=oe.children.length,De=oe.chunks.length;try{return Di(a,l,h,v)}catch(Je){if(qs(),oe.children.length=Le,oe.chunks.length=De,h=Je===di?qo():Je,!a.aborted&&typeof h=="object"&&h!==null){if(typeof h.then=="function"){oe=h,h=Je===di?oa():null,a=Su(a,l,h).ping,oe.then(a.resolve,a.reject),l.formatContext=T,l.context=U,l.keyPath=$,l.treeContext=he,l.componentStack=re,Ft(U);return}if(h.message==="Maximum call stack size exceeded"){oe=Je===di?oa():null,oe=Su(a,l,oe),a.pingedTasks.push(oe),l.formatContext=T,l.context=U,l.keyPath=$,l.treeContext=he,l.componentStack=re,Ft(U);return}}}}throw l.formatContext=T,l.context=U,l.keyPath=$,l.treeContext=he,Ft(U),h}function Ec(a){var l=a.blockedBoundary,h=a.blockedSegment;h!==null&&(h.status=3,ar(this,l,a.row,h))}function eo(a,l,h,v,T,U){for(var $=0;$<h.length;$++){var he=h[$];if(he.length===4)eo(a,l,he[2],he[3],T,U);else{he=he[5];var re=a,oe=U,Le=vc(re,null,new Set,null,!1);Le.parentFlushed=!0,Le.rootSegmentID=he,Le.status=4,Le.errorDigest=oe,Le.parentFlushed&&re.clientRenderedBoundaries.push(Le)}}if(h.length=0,v!==null){if(l===null)throw Error(t(487));if(l.status!==4&&(l.status=4,l.errorDigest=U,l.parentFlushed&&a.clientRenderedBoundaries.push(l)),typeof v=="object")for(var De in v)delete v[De]}}function fl(a,l){if(a!==l.currentTask){var h=a.blockedBoundary;a=a.blockedSegment,a!==null&&(a.status=3),h!==null&&h.fallbackAbortableTasks.forEach(function(v){return fl(v,l)})}}function za(a,l,h){if(a!==l.currentTask){var v=a.blockedBoundary,T=a.blockedSegment;if(T===null||T.status===3){var U=Ba(a.componentStack),$=tl(h);if(v===null){if(v=a.replay,v===null){$||l.trackedPostpones===null||T===null?$?(a=dc(h),Xn(l,a,U),l.status!==12&&l.status!==13&&ii(l,a)):(Xn(l,h,U),l.status!==12&&l.status!==13&&ii(l,h)):(v=l.trackedPostpones,Xn(l,h,U),bc(l,v,a,T),ar(l,null,a.row,T));return}l.status!==12&&l.status!==13&&(v.pendingTasks--,v.pendingTasks===0&&0<v.nodes.length&&(U=Xn(l,h,U),eo(l,null,v.nodes,v.slots,h,U)),l.pendingRootTasks--,l.pendingRootTasks===0&&wc(l))}else{var he=l.trackedPostpones;if(v.status!==4){if(!$&&he!==null&&T!==null)return Xn(l,h,U),bc(l,he,a,T),v.fallbackAbortableTasks.forEach(function(re){return za(re,l,h)}),v.fallbackAbortableTasks.clear(),ar(l,v,a.row,T);v.status=4,U=Xn(l,h,U),v.errorDigest=U,$s(l,v),v.parentFlushed&&l.clientRenderedBoundaries.push(v)}v.pendingTasks--,U=v.row,U!==null&&--U.pendingTasks===0&&Ln(l,U),v.fallbackAbortableTasks.forEach(function(re){return za(re,l,h)}),v.fallbackAbortableTasks.clear()}a=a.row,a!==null&&--a.pendingTasks===0&&Ln(l,a),l.allPendingTasks--,l.allPendingTasks===0&&hl(l)}}}function Tc(a,l){try{var h=a.renderState,v=h.onHeaders;if(v){var T=h.headers;if(T){h.headers=null;var U=T.preconnects;if(T.fontPreloads&&(U&&(U+=", "),U+=T.fontPreloads),T.highImagePreloads&&(U&&(U+=", "),U+=T.highImagePreloads),!l){var $=h.styles.values(),he=$.next();e:for(;0<T.remainingCapacity&&!he.done;he=$.next())for(var re=he.value.sheets.values(),oe=re.next();0<T.remainingCapacity&&!oe.done;oe=re.next()){var Le=oe.value,De=Le.props,Je=De.href,Ye=Le.props,et=ce(Ye.href,"style",{crossOrigin:Ye.crossOrigin,integrity:Ye.integrity,nonce:Ye.nonce,type:Ye.type,fetchPriority:Ye.fetchPriority,referrerPolicy:Ye.referrerPolicy,media:Ye.media});if(0<=(T.remainingCapacity-=et.length+2))h.resets.style[Je]=ve,U&&(U+=", "),U+=et,h.resets.style[Je]=typeof De.crossOrigin=="string"||typeof De.integrity=="string"?[De.crossOrigin,De.integrity]:ve;else break e}}v(U?{Link:U}:{})}}}catch(ht){Xn(a,ht,{})}}function wc(a){a.trackedPostpones===null&&Tc(a,!0),a.trackedPostpones===null&&ka(a),a=a.onShellReady,a()}function hl(a){Tc(a,a.trackedPostpones===null?!0:a.completedRootSegment===null||a.completedRootSegment.status!==5),ka(a),a=a.onAllReady,a()}function to(a,l){if(l.chunks.length===0&&l.children.length===1&&l.children[0].boundary===null&&l.children[0].id===-1){var h=l.children[0];h.id=l.id,h.parentFlushed=!0,h.status!==1&&h.status!==3&&h.status!==4||to(a,h)}else a.completedSegments.push(l)}function ar(a,l,h,v){if(h!==null&&(--h.pendingTasks===0?Ln(a,h):h.together&&Mc(a,h)),a.allPendingTasks--,l===null){if(v!==null&&v.parentFlushed){if(a.completedRootSegment!==null)throw Error(t(389));a.completedRootSegment=v}a.pendingRootTasks--,a.pendingRootTasks===0&&wc(a)}else if(l.pendingTasks--,l.status!==4)if(l.pendingTasks===0){if(l.status===0&&(l.status=1),v!==null&&v.parentFlushed&&(v.status===1||v.status===3)&&to(l,v),l.parentFlushed&&a.completedBoundaries.push(l),l.status===1)h=l.row,h!==null&&St(h.hoistables,l.contentState),ys(a,l)||(a.allPendingTasks++,l.fallbackAbortableTasks.forEach(Ec,a),l.fallbackAbortableTasks.clear(),h!==null&&--h.pendingTasks===0&&Ln(a,h),a.allPendingTasks--),a.pendingRootTasks===0&&a.trackedPostpones===null&&l.preamble!==null&&ka(a);else if(l.status===5&&(l=l.row,l!==null)){if(a.trackedPostpones!==null){h=a.trackedPostpones;var T=l.next;if(T!==null&&(v=T.boundaries,v!==null))for(T.boundaries=null,T=0;T<v.length;T++){var U=v[T];Sc(a,h,U),ar(a,U,null,null)}}a.allPendingTasks++,--l.pendingTasks===0&&Ln(a,l),a.allPendingTasks--}}else v===null||!v.parentFlushed||v.status!==1&&v.status!==3||(to(l,v),l.completedSegments.length===1&&l.parentFlushed&&a.partialBoundaries.push(l)),l=l.row,l!==null&&l.together&&Mc(a,l);a.allPendingTasks===0&&hl(a)}function no(a){if(!(a.aborted||11<a.status)){var l=Rt,h=Ae.H;Ae.H=mu;var v=Ae.A;Ae.A=zf;var T=zn;zn=a;var U=il;il=a.resumableState;try{var $=a.pingedTasks,he;for(he=0;he<$.length;he++){var re=$[he],oe=a,Le=re.blockedSegment;if(Le===null){e:if(re.replay.pendingTasks!==0){var De=oe.currentTask;oe.currentTask=re,Ft(re.context);var Je=re.node;try{if(typeof re.replay.slots=="number"?ll(oe,re,re.replay.slots,re.node,re.childIndex):cl(oe,re),re.replay.pendingTasks===1&&0<re.replay.nodes.length)throw Error(t(488));re.replay.pendingTasks--,re.abortSet.delete(re),ar(oe,re.blockedBoundary,re.row,null)}catch(Gn){qs();var Ye=Gn===di?qo():Gn;if(oe.aborted){Gn===di&&(re.thenableState=oa()),oe.currentTask=De;var et=oe;fl(re,et),re.abortSet.delete(re),za(re,et,et.fatalError)}else{if(typeof Ye=="object"&&Ye!==null){if(typeof Ye.then=="function"){var ht=re.ping;Ye.then(ht.resolve,ht.reject),re.thenableState=Gn===di?oa():null;break e}if(Ye.message==="Maximum call stack size exceeded"&&re.node!==Je){re.thenableState=null,oe.pingedTasks.push(re);break e}}re.replay.pendingTasks--,re.abortSet.delete(re);var an=Ba(re.componentStack);et=oe;var Vt=re.blockedBoundary,hn=oe.aborted?oe.fatalError:Ye,In=re.replay.nodes,mt=re.replay.slots,Ct=Xn(et,hn,an);eo(et,Vt,In,mt,hn,Ct),oe.pendingRootTasks--,oe.pendingRootTasks===0&&wc(oe),oe.allPendingTasks--,oe.allPendingTasks===0&&hl(oe)}}finally{oe.currentTask=De}}}else e:if(et=Le,et.status===0){var Xt=oe.currentTask;oe.currentTask=re,Ft(re.context);var ln=et.children.length,ri=et.chunks.length,Ot=re.node;try{cl(oe,re),fn(et.chunks,oe.renderState,et.lastPushedText,et.textEmbedded),re.abortSet.delete(re),et.status=1,ar(oe,re.blockedBoundary,re.row,et)}catch(Gn){qs(),et.children.length=ln,et.chunks.length=ri;var Sn=Gn===di?qo():Gn;if(oe.aborted)Gn===di&&(re.thenableState=oa()),oe.currentTask=Xt,et=oe,fl(re,et),re.abortSet.delete(re),za(re,et,et.fatalError);else{if(typeof Sn=="object"&&Sn!==null){if(typeof Sn.then=="function"){et.status=0,re.thenableState=Gn===di?oa():null;var xn=re.ping;Sn.then(xn.resolve,xn.reject);break e}if(Sn.message==="Maximum call stack size exceeded"&&re.node!==Ot){et.status=0,re.thenableState=null,oe.pingedTasks.push(re);break e}}var Zn=Ba(re.componentStack);re.abortSet.delete(re),et.status=4;var dn=re.blockedBoundary,ci=re.row;if(ci!==null&&--ci.pendingTasks===0&&Ln(oe,ci),oe.allPendingTasks--,dn===null)if(tl(Sn)){var gn=dc(Sn);Xn(oe,gn,Zn),ii(oe,gn)}else Xn(oe,Sn,Zn),ii(oe,Sn);else{var sr=Xn(oe,Sn,Zn);if(dn.pendingTasks--,dn.status!==4){dn.status=4,dn.errorDigest=sr,$s(oe,dn);var kn=dn.row;kn!==null&&(oe.allPendingTasks++,--kn.pendingTasks===0&&Ln(oe,kn),oe.allPendingTasks--),dn.parentFlushed&&oe.clientRenderedBoundaries.push(dn),oe.pendingRootTasks===0&&oe.trackedPostpones===null&&dn.preamble!==null&&ka(oe)}oe.allPendingTasks===0&&hl(oe)}}}finally{oe.currentTask=Xt}}}$.splice(0,he),a.destination!==null&&Ha(a,a.destination)}catch(Gn){Xn(a,Gn,{}),ii(a,Gn)}finally{il=U,Ae.H=h,Ae.A=v,h===mu&&Ft(l),zn=T}}}function io(a,l,h){l.preambleChildren.length&&h.push(l.preambleChildren);for(var v=!1,T=0;T<l.children.length;T++)v=dl(a,l.children[T],h)||v;return v}function dl(a,l,h){var v=l.boundary;if(v===null)return io(a,l,h);var T=v.preamble;if(T===null)return!1;switch(v.status){case 1:if(Re(a.renderState,T.content),a.byteSize+=v.byteSize,l=v.completedSegments[0],!l)throw Error(t(391));return io(a,l,h);case 5:if(a.trackedPostpones!==null)return!0;case 4:if(l.status===1)return Re(a.renderState,T.fallback),io(a,l,h);default:return!0}}function ka(a){if(a.completedRootSegment&&a.completedPreambleSegments===null){var l=[],h=a.byteSize,v=dl(a,a.completedRootSegment,l),T=a.renderState.preamble;v===!1||T.headChunks&&T.bodyChunks?a.completedPreambleSegments=l:a.byteSize=h}}function bs(a,l,h,v){switch(h.parentFlushed=!0,h.status){case 0:h.id=a.nextSegmentId++;case 5:return v=h.id,h.lastPushedText=!1,h.textEmbedded=!1,a=a.renderState,l.push('<template id="'),l.push(a.placeholderPrefix),a=v.toString(16),l.push(a),l.push('"></template>');case 1:h.status=2;var T=!0,U=h.chunks,$=0;h=h.children;for(var he=0;he<h.length;he++){for(T=h[he];$<T.index;$++)l.push(U[$]);T=ao(a,l,T,v)}for(;$<U.length-1;$++)l.push(U[$]);return $<U.length&&(T=l.push(U[$])),T;case 3:return!0;default:throw Error(t(390))}}var ro=0;function ao(a,l,h,v){var T=h.boundary;if(T===null)return bs(a,l,h,v);if(h.boundary=null,T.parentFlushed=!0,T.status===4){var U=T.row;return U!==null&&--U.pendingTasks===0&&Ln(a,U),a.renderState.generateStaticMarkup||(T=T.errorDigest,l.push("<!--$!-->"),l.push("<template"),T!=null&&(l.push(' data-dgst="'),T=ne(T),l.push(T),l.push('"')),l.push("></template>")),bs(a,l,h,v),a=a.renderState.generateStaticMarkup?!0:l.push("<!--/$-->"),a}if(T.status!==1)return T.status===0&&(T.rootSegmentID=a.nextSegmentId++),0<T.completedSegments.length&&a.partialBoundaries.push(T),it(l,a.renderState,T.rootSegmentID),v&&St(v,T.fallbackState),bs(a,l,h,v),l.push("<!--/$-->");if(!pl&&ys(a,T)&&(ro+T.byteSize>a.progressiveChunkSize||T.defer))return T.rootSegmentID=a.nextSegmentId++,a.completedBoundaries.push(T),it(l,a.renderState,T.rootSegmentID),bs(a,l,h,v),l.push("<!--/$-->");if(ro+=T.byteSize,v&&St(v,T.contentState),h=T.row,h!==null&&ys(a,T)&&--h.pendingTasks===0&&Ln(a,h),a.renderState.generateStaticMarkup||l.push("<!--$-->"),h=T.completedSegments,h.length!==1)throw Error(t(391));return ao(a,l,h[0],v),a=a.renderState.generateStaticMarkup?!0:l.push("<!--/$-->"),a}function la(a,l,h,v){return Me(l,a.renderState,h.parentFormatContext,h.id),ao(a,l,h,v),Pe(l,h.parentFormatContext)}function Ac(a,l,h){ro=h.byteSize;for(var v=h.completedSegments,T=0;T<v.length;T++)bu(a,l,h,v[T]);v.length=0,v=h.row,v!==null&&ys(a,h)&&--v.pendingTasks===0&&Ln(a,v),Kt(l,h.contentState,a.renderState),v=a.resumableState,a=a.renderState,T=h.rootSegmentID,h=h.contentState;var U=a.stylesToHoist,$=(v.instructions&128)!==0;return a.stylesToHoist=!1,l.push(a.startInlineScript),l.push(">"),U?((v.instructions&4)===0&&(v.instructions|=4,l.push('$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,null!=c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};')),(v.instructions&2)===0&&(v.instructions|=2,l.push(`$RB=[];$RV=function(a){$RT=performance.now();for(var b=0;b<a.length;b+=2){var c=a[b],e=a[b+1];null!==e.parentNode&&e.parentNode.removeChild(e);var f=c.parentNode;if(f){var g=c.previousSibling,h=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d||"/&"===d)if(0===h)break;else h--;else"$"!==d&&"$?"!==d&&"$~"!==d&&"$!"!==d&&"&"!==d||h++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;e.firstChild;)f.insertBefore(e.firstChild,c);g.data="$";g._reactRetry&&requestAnimationFrame(g._reactRetry)}}a.length=0};
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
A.finished.finally(function(){document.__reactViewTransition===A&&(document.__reactViewTransition=null)});$RB=[];return}}catch(a){}B(g)}.bind(null,$RV);`)),l.push('$RC("')),v=T.toString(16),l.push(a.boundaryPrefix),l.push(v),l.push('","'),l.push(a.segmentPrefix),l.push(v),U?(l.push('",'),Xs(l,h)):l.push('"'),h=l.push(")<\/script>"),at(l,a)&&h}function bu(a,l,h,v){if(v.status===2)return!0;var T=h.contentState,U=v.id;if(U===-1){if((v.id=h.rootSegmentID)===-1)throw Error(t(392));return la(a,l,v,T)}return U===h.rootSegmentID?la(a,l,v,T):(la(a,l,v,T),h=a.resumableState,a=a.renderState,l.push(a.startInlineScript),l.push(">"),(h.instructions&1)===0?(h.instructions|=1,l.push('$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')):l.push('$RS("'),l.push(a.segmentPrefix),U=U.toString(16),l.push(U),l.push('","'),l.push(a.placeholderPrefix),l.push(U),l=l.push('")<\/script>'),l)}var pl=!1;function Ha(a,l){try{if(!(0<a.pendingRootTasks)){var h,v=a.completedRootSegment;if(v!==null){if(v.status===5)return;var T=a.completedPreambleSegments;if(T===null)return;ro=a.byteSize;var U=a.resumableState,$=a.renderState,he=$.preamble,re=he.htmlChunks,oe=he.headChunks,Le;if(re){for(Le=0;Le<re.length;Le++)l.push(re[Le]);if(oe)for(Le=0;Le<oe.length;Le++)l.push(oe[Le]);else{var De=we("head");l.push(De),l.push(">")}}else if(oe)for(Le=0;Le<oe.length;Le++)l.push(oe[Le]);var Je=$.charsetChunks;for(Le=0;Le<Je.length;Le++)l.push(Je[Le]);Je.length=0,$.preconnects.forEach(Tn,l),$.preconnects.clear();var Ye=$.viewportChunks;for(Le=0;Le<Ye.length;Le++)l.push(Ye[Le]);Ye.length=0,$.fontPreloads.forEach(Tn,l),$.fontPreloads.clear(),$.highImagePreloads.forEach(Tn,l),$.highImagePreloads.clear(),Ze=$,$.styles.forEach(aa,l),Ze=null;var et=$.importMapChunks;for(Le=0;Le<et.length;Le++)l.push(et[Le]);et.length=0,$.bootstrapScripts.forEach(Tn,l),$.scripts.forEach(Tn,l),$.scripts.clear(),$.bulkPreloads.forEach(Tn,l),$.bulkPreloads.clear(),U.instructions|=32;var ht=$.hoistableChunks;for(Le=0;Le<ht.length;Le++)l.push(ht[Le]);for(U=ht.length=0;U<T.length;U++){var an=T[U];for($=0;$<an.length;$++)ao(a,l,an[$],null)}var Vt=a.renderState.preamble,hn=Vt.headChunks;if(Vt.htmlChunks||hn){var In=ze("head");l.push(In)}var mt=Vt.bodyChunks;if(mt)for(T=0;T<mt.length;T++)l.push(mt[T]);ao(a,l,v,null),a.completedRootSegment=null;var Ct=a.renderState;if(a.allPendingTasks!==0||a.clientRenderedBoundaries.length!==0||a.completedBoundaries.length!==0||a.trackedPostpones!==null&&(a.trackedPostpones.rootNodes.length!==0||a.trackedPostpones.rootSlots!==null)){var Xt=a.resumableState;if((Xt.instructions&64)===0){if(Xt.instructions|=64,l.push(Ct.startInlineScript),(Xt.instructions&32)===0){Xt.instructions|=32;var ln="_"+Xt.idPrefix+"R_";l.push(' id="');var ri=ne(ln);l.push(ri),l.push('"')}l.push(">"),l.push("requestAnimationFrame(function(){$RT=performance.now()});"),l.push("<\/script>")}}at(l,Ct)}var Ot=a.renderState;v=0;var Sn=Ot.viewportChunks;for(v=0;v<Sn.length;v++)l.push(Sn[v]);Sn.length=0,Ot.preconnects.forEach(Tn,l),Ot.preconnects.clear(),Ot.fontPreloads.forEach(Tn,l),Ot.fontPreloads.clear(),Ot.highImagePreloads.forEach(Tn,l),Ot.highImagePreloads.clear(),Ot.styles.forEach(Nr,l),Ot.scripts.forEach(Tn,l),Ot.scripts.clear(),Ot.bulkPreloads.forEach(Tn,l),Ot.bulkPreloads.clear();var xn=Ot.hoistableChunks;for(v=0;v<xn.length;v++)l.push(xn[v]);xn.length=0;var Zn=a.clientRenderedBoundaries;for(h=0;h<Zn.length;h++){var dn=Zn[h];Ot=l;var ci=a.resumableState,gn=a.renderState,sr=dn.rootSegmentID,kn=dn.errorDigest;Ot.push(gn.startInlineScript),Ot.push(">"),(ci.instructions&4)===0?(ci.instructions|=4,Ot.push('$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,null!=c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX("')):Ot.push('$RX("'),Ot.push(gn.boundaryPrefix);var Gn=sr.toString(16);if(Ot.push(Gn),Ot.push('"'),kn!=null)if(Ot.push(","),kn==null)Ot.push("null");else{var Br=bt(kn);Ot.push(Br)}var An=Ot.push(")<\/script>");if(!An){a.destination=null,h++,Zn.splice(0,h);return}}Zn.splice(0,h);var yi=a.completedBoundaries;for(h=0;h<yi.length;h++)if(!Ac(a,l,yi[h])){a.destination=null,h++,yi.splice(0,h);return}yi.splice(0,h),pl=!0;var Qn=a.partialBoundaries;for(h=0;h<Qn.length;h++){var Ni=Qn[h];e:{Zn=a,dn=l,ro=Ni.byteSize;var Xi=Ni.completedSegments;for(An=0;An<Xi.length;An++)if(!bu(Zn,dn,Ni,Xi[An])){An++,Xi.splice(0,An);var xr=!1;break e}Xi.splice(0,An);var Rn=Ni.row;Rn!==null&&Rn.together&&Ni.pendingTasks===1&&(Rn.pendingTasks===1?xc(Zn,Rn,Rn.hoistables):Rn.pendingTasks--),xr=Kt(dn,Ni.contentState,Zn.renderState)}if(!xr){a.destination=null,h++,Qn.splice(0,h);return}}Qn.splice(0,h),pl=!1;var zr=a.completedBoundaries;for(h=0;h<zr.length;h++)if(!Ac(a,l,zr[h])){a.destination=null,h++,zr.splice(0,h);return}zr.splice(0,h)}}finally{pl=!1,h=a.postponedState,h!==null&&(h.nextSegmentId=a.nextSegmentId),a.allPendingTasks===0&&a.clientRenderedBoundaries.length===0&&a.completedBoundaries.length===0&&(a.flushScheduled=!1,h=a.resumableState,h.hasBody&&(Qn=ze("body"),l.push(Qn)),h.hasHtml&&(h=ze("html"),l.push(h)),ml(a),a.status=13,l.push(null),a.destination=null)}}function ca(a){if(a.flushScheduled===!1&&a.pingedTasks.length===0&&a.destination!==null){a.flushScheduled=!0;var l=a.destination;l?Ha(a,l):a.flushScheduled=!1}}function Ga(a,l){if(a.status===12)a.status=13,a=a.fatalError,tl(a)&&(a=dc(a)),l.destroy(a);else if(a.status!==13&&a.destination===null){a.destination=l;try{Ha(a,l)}catch(h){Xn(a,h,{}),ii(a,h)}}}function gl(a,l){try{if(0<l.size){var h=a.fatalError;l.forEach(function(v){return za(v,a,h)}),l.clear()}a.destination!==null&&Ha(a,a.destination)}catch(v){Xn(a,v,{}),ii(a,v)}}function ml(a){a=a.renderLifetimeController,a!==null&&a.abort("The render ended.")}function Eu(a,l){if(!(a.aborted||a.status!==11&&a.status!==10)){ml(a);var h=typeof l=="object"&&l!==null&&l.$$typeof===C;a.aborted=!0,l=h?ou(l):l===void 0?Error(t(432)):typeof l=="object"&&l!==null&&typeof l.then=="function"?Error(t(530)):l,a.fatalError=l,l=a.abortableTasks,l.forEach(function(v){return fl(v,a)}),gl(a,l)}}function so(a,l,h){if(l===null)h.rootNodes.push(a);else{var v=h.workingMap,T=v.get(l);T===void 0&&(T=[l[1],l[2],[],null],v.set(l,T),so(T,l[0],h)),T[2].push(a)}}function Tu(){}function Or(a,l,h,v){var T=!1,U=null,$="",he=!1;if(l=vt(l?l.identifierPrefix:void 0),a=Gf(a,l,ot(l,h),Pt(0,null,0,null),1/0,Tu,void 0,void 0,function(){he=!0},void 0,void 0,void 0),a.flushScheduled=a.destination!==null,no(a),a.status===10&&(a.status=11),a.trackedPostpones===null&&Tc(a,a.pendingRootTasks===0),Eu(a,v),Ga(a,{push:function(re){return re!==null&&($+=re),!0},destroy:function(re){T=!0,U=re}}),T&&U!==v)throw U;if(!he)throw Error(t(426));return $}return Wc.renderToStaticMarkup=function(a,l){return Or(a,l,!0,'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')},Wc.renderToString=function(a,l){return Or(a,l,!1,'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')},Wc.version="19.3.1",Wc}var zo={};var ag;function eS(){if(ag)return zo;ag=1;var i=og(),e=lg();function t(r){var s="https://react.dev/errors/"+r;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var f=2;f<arguments.length;f++)s+="&args[]="+encodeURIComponent(arguments[f])}return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),g=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),E=Symbol.for("react.suspense"),_=Symbol.for("react.suspense_list"),x=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),N=Symbol.for("react.scope"),w=Symbol.for("react.activity"),M=Symbol.for("react.legacy_hidden"),O=Symbol.for("react.memo_cache_sentinel"),k=Symbol.for("react.view_transition"),C=Symbol.for("react.recoverable"),F=Symbol.iterator;function D(r){return r===null||typeof r!="object"?null:(r=F&&r[F]||r["@@iterator"],typeof r=="function"?r:null)}var H=Symbol.for("react.optimistic_key"),y=Array.isArray,P=Object.prototype.hasOwnProperty;function z(r,s){var f=r.length&3,m=r.length-f,b=s;for(s=0;s<m;){var I=r.charCodeAt(s)&255|(r.charCodeAt(++s)&255)<<8|(r.charCodeAt(++s)&255)<<16|(r.charCodeAt(++s)&255)<<24;++s,I=3432918353*(I&65535)+((3432918353*(I>>>16)&65535)<<16)&4294967295,I=I<<15|I>>>17,I=461845907*(I&65535)+((461845907*(I>>>16)&65535)<<16)&4294967295,b^=I,b=b<<13|b>>>19,b=5*(b&65535)+((5*(b>>>16)&65535)<<16)&4294967295,b=(b&65535)+27492+(((b>>>16)+58964&65535)<<16)}switch(I=0,f){case 3:I^=(r.charCodeAt(s+2)&255)<<16;case 2:I^=(r.charCodeAt(s+1)&255)<<8;case 1:I^=r.charCodeAt(s)&255,I=3432918353*(I&65535)+((3432918353*(I>>>16)&65535)<<16)&4294967295,I=I<<15|I>>>17,b^=461845907*(I&65535)+((461845907*(I>>>16)&65535)<<16)&4294967295}return b^=r.length,b^=b>>>16,b=2246822507*(b&65535)+((2246822507*(b>>>16)&65535)<<16)&4294967295,b^=b>>>13,b=3266489909*(b&65535)+((3266489909*(b>>>16)&65535)<<16)&4294967295,(b^b>>>16)>>>0}var G=new MessageChannel,q=[];G.port1.onmessage=function(){var r=q.shift();r&&r()};var ae=P.call(ArrayBuffer.prototype,"detached");function W(r){q.push(r),G.port2.postMessage(null)}function ue(r){setTimeout(function(){throw r})}var ye=Promise,_e=typeof queueMicrotask=="function"?queueMicrotask:function(r){ye.resolve(null).then(r).catch(ue)},Te=null,ne=0;function V(r,s){if(s.byteLength===0){if(ae&&s.buffer.detached)throw Error(t(612))}else if(2048<s.byteLength)0<ne&&(r.enqueue(new Uint8Array(Te.buffer,0,ne)),Te=new Uint8Array(2048),ne=0),r.enqueue(s);else{var f=Te.length-ne;f<s.byteLength&&(f===0?r.enqueue(Te):(Te.set(s.subarray(0,f),ne),r.enqueue(Te),s=s.subarray(f)),Te=new Uint8Array(2048),ne=0),Te.set(s,ne),ne+=s.byteLength}}function xe(r,s){return V(r,s),!0}function ut(r){Te&&0<ne&&(r.enqueue(new Uint8Array(Te.buffer,0,ne)),Te=null,ne=0)}var rt=new TextEncoder;function Ae(r){return rt.encode(r)}function se(r){return rt.encode(r)}function Lt(r){return r.byteLength}function me(r,s){typeof r.error=="function"?r.error(s):r.close()}var ve=Object.assign,Ze=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),dt={},We={};function vt(r){return P.call(We,r)?!0:P.call(dt,r)?!1:Ze.test(r)?We[r]=!0:(dt[r]=!0,!1)}var Pt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")),pt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),It=/["'&<>]/;function Xe(r){if(typeof r=="boolean"||typeof r=="number"||typeof r=="bigint")return""+r;r=""+r;var s=It.exec(r);if(s){var f="",m,b=0;for(m=s.index;m<r.length;m++){switch(r.charCodeAt(m)){case 34:s="&quot;";break;case 38:s="&amp;";break;case 39:s="&#x27;";break;case 60:s="&lt;";break;case 62:s="&gt;";break;default:continue}b!==m&&(f+=r.slice(b,m)),b=m+1,f+=s}r=b!==m?f+r.slice(b,m):f}return r}var xt=/([A-Z])/g,tn=/^ms-/,Gt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Mn(r){return Gt.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}var Dt=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Yt=e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},zt=Yt.d;Yt.d={f:zt.f,r:zt.r,D:eo,C:fl,L:za,m:Tc,X:hl,S:wc,M:to};var gt=[],B=null;se('"></template>');var A=se("<script"),ie=se("<\/script>"),te=se('<script src="'),ge=se('<script type="module" src="'),Ne=se(' nonce="'),Fe=se(' integrity="'),pe=se(' crossorigin="'),Ee=se(' async=""><\/script>'),ke=se("<style"),Qe=/(<\/|<)(s)(cript)/gi;function Be(r,s,f,m){return""+s+(f==="s"?"\\u0073":"\\u0053")+m}var Ue=se('<script type="importmap">'),st=se("<\/script>");function lt(r,s,f,m,b,I){f=typeof s=="string"?s:s&&s.script;var X=f===void 0?A:se('<script nonce="'+Xe(f)+'"'),Z=typeof s=="string"?void 0:s&&s.style,j=Z===void 0?ke:se('<style nonce="'+Xe(Z)+'"'),ee=r.idPrefix,be=[],Ce=r.bootstrapScriptContent,He=r.bootstrapScripts,Ve=r.bootstrapModules;if(Ce!==void 0&&(be.push(X),Ss(be,r),be.push(yn,Ae((""+Ce).replace(Qe,Be)),ie)),Ce=[],m!==void 0&&(Ce.push(f===void 0?Ue:se('<script type="importmap" nonce="'+Xe(f)+'">')),Ce.push(Ae((""+JSON.stringify(m)).replace(Qe,Be))),Ce.push(st)),m=b?{preconnects:"",fontPreloads:"",highImagePreloads:"",remainingCapacity:2+(typeof I=="number"?I:2e3)}:null,b={placeholderPrefix:se(ee+"P:"),segmentPrefix:se(ee+"S:"),boundaryPrefix:se(ee+"B:"),startInlineScript:X,startInlineStyle:j,preamble:J(),externalRuntimeScript:null,bootstrapChunks:be,importMapChunks:Ce,onHeaders:b,headers:m,resets:{font:{},dns:{},connect:{default:{},anonymous:{},credentials:{}},image:{},style:{}},charsetChunks:[],viewportChunks:[],hoistableChunks:[],preconnects:new Set,fontPreloads:new Set,highImagePreloads:new Set,styles:new Map,bootstrapScripts:new Set,scripts:new Set,bulkPreloads:new Set,preloads:{images:new Map,stylesheets:new Map,scripts:new Map,moduleScripts:new Map},nonce:{script:f,style:Z},hoistableState:null,stylesToHoist:!1},He!==void 0)for(m=0;m<He.length;m++)ee=He[m],Z=X=void 0,j={rel:"preload",as:"script",fetchPriority:"low",nonce:s},typeof ee=="string"?j.href=I=ee:(j.href=I=ee.src,j.integrity=Z=typeof ee.integrity=="string"?ee.integrity:void 0,j.crossOrigin=X=typeof ee=="string"||ee.crossOrigin==null?void 0:ee.crossOrigin==="use-credentials"?"use-credentials":""),ee=r,Ce=I,ee.scriptResources[Ce]=null,ee.moduleScriptResources[Ce]=null,ee=[],Ie(ee,j),b.bootstrapScripts.add(ee),be.push(te,Ae(Xe(I)),Kt),f&&be.push(Ne,Ae(Xe(f)),Kt),typeof Z=="string"&&be.push(Fe,Ae(Xe(Z)),Kt),typeof X=="string"&&be.push(pe,Ae(Xe(X)),Kt),Ss(be,r),be.push(Ee);if(Ve!==void 0)for(s=0;s<Ve.length;s++)Z=Ve[s],I=m=void 0,X={rel:"modulepreload",fetchPriority:"low",nonce:f},typeof Z=="string"?X.href=He=Z:(X.href=He=Z.src,X.integrity=I=typeof Z.integrity=="string"?Z.integrity:void 0,X.crossOrigin=m=typeof Z=="string"||Z.crossOrigin==null?void 0:Z.crossOrigin==="use-credentials"?"use-credentials":""),Z=r,j=He,Z.scriptResources[j]=null,Z.moduleScriptResources[j]=null,Z=[],Ie(Z,X),b.bootstrapScripts.add(Z),be.push(ge,Ae(Xe(He)),Kt),f&&be.push(Ne,Ae(Xe(f)),Kt),typeof I=="string"&&be.push(Fe,Ae(Xe(I)),Kt),typeof m=="string"&&be.push(pe,Ae(Xe(m)),Kt),Ss(be,r),be.push(Ee);return b}function _t(r,s,f,m,b){return{idPrefix:r===void 0?"":r,nextFormID:0,streamingFormat:0,bootstrapScriptContent:f,bootstrapScripts:m,bootstrapModules:b,instructions:0,hasBody:!1,hasHtml:!1,unknownResources:{},dnsResources:{},connectResources:{default:{},anonymous:{},credentials:{}},imageResources:{},styleResources:{},scriptResources:{},moduleUnknownResources:{},moduleScriptResources:{}}}function J(){return{htmlChunks:null,headChunks:null,bodyChunks:null}}function we(r,s,f,m){return{insertionMode:r,selectedValue:s,tagScope:f,viewTransition:m}}function Se(r){return we(r==="http://www.w3.org/2000/svg"?4:r==="http://www.w3.org/1998/Math/MathML"?5:0,null,0,null)}function Oe(r,s,f){var m=r.tagScope&-25;switch(s){case"noscript":return we(2,null,m|1,null);case"select":return we(2,f.value!=null?f.value:f.defaultValue,m,null);case"svg":return we(4,null,m,null);case"picture":return we(2,null,m|2,null);case"math":return we(5,null,m,null);case"foreignObject":return we(2,null,m,null);case"table":return we(6,null,m,null);case"thead":case"tbody":case"tfoot":return we(7,null,m,null);case"colgroup":return we(9,null,m,null);case"tr":return we(8,null,m,null);case"head":if(2>r.insertionMode)return we(3,null,m,null);break;case"html":if(r.insertionMode===0)return we(1,null,m,null)}return 6<=r.insertionMode||2>r.insertionMode?we(2,null,m,null):r.viewTransition!==null||r.tagScope!==m?we(r.insertionMode,r.selectedValue,m,null):r}function ze(r){return r===null?null:{update:r.update,enter:"none",exit:"none",share:r.update,parentEnter:"none",parentExit:"none",name:r.autoName,autoName:r.autoName,nameIdx:0}}function Re(r,s){return s.tagScope&32&&(r.instructions|=128),we(s.insertionMode,s.selectedValue,s.tagScope|12,ze(s.viewTransition))}function at(r,s){r=ze(s.viewTransition);var f=s.tagScope|16;return r!==null&&r.share!=="none"&&(f|=64),we(s.insertionMode,s.selectedValue,f,r)}function it(r,s,f){return r="_"+r.idPrefix+"R_"+s,0<f&&(r+="H"+f.toString(32)),r+"_"}var Me=se("<!-- -->");function Pe(r,s,f,m){return s===""?m:(m&&r.push(Me),r.push(Ae(Xe(s))),!0)}function nt(r,s){s=s.viewTransition,s!==null&&(s.name!=="auto"&&(Qt(r,"vt-name",s.nameIdx===0?s.name:s.name+"_"+s.nameIdx),s.nameIdx++),Qt(r,"vt-update",s.update),s.enter!=="none"&&Qt(r,"vt-enter",s.enter),s.exit!=="none"&&Qt(r,"vt-exit",s.exit),s.share!=="none"&&Qt(r,"vt-share",s.share))}var bt=new Map,Pn=se(' style="'),sn=se(":"),nn=se(";");function Nt(r,s){if(typeof s!="object")throw Error(t(62));var f=!0,m;for(m in s)if(P.call(s,m)){var b=s[m];if(b!=null&&typeof b!="boolean"&&b!==""){if(m.indexOf("--")===0){var I=Ae(Xe(m));b=Ae(Xe((""+b).trim()))}else I=bt.get(m),I===void 0&&(I=se(Xe(m.replace(xt,"-$1").toLowerCase().replace(tn,"-ms-"))),bt.set(m,I)),b=typeof b=="number"?b===0||Pt.has(m)?Ae(""+b):Ae(b+"px"):Ae(Xe((""+b).trim()));f?(f=!1,r.push(Pn,I,sn,b)):r.push(nn,I,sn,b)}}f||r.push(Kt)}var Wt=se(" "),un=se('="'),Kt=se('"'),Tn=se('=""');function Kn(r,s,f){f&&typeof f!="function"&&typeof f!="symbol"&&r.push(Wt,Ae(s),Tn)}function Qt(r,s,f){typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&r.push(Wt,Ae(s),un,Ae(Xe(f)),Kt)}var aa=se(Xe("javascript:throw new Error('React form unexpectedly submitted.')")),pr=se('<input type="hidden"');function Nr(r,s){this.push(pr),gr(r),Qt(this,"name",s),Qt(this,"value",r),this.push(Ua)}function gr(r){if(typeof r!="string")throw Error(t(480))}function Xs(r,s){if(typeof s.$$FORM_ACTION=="function"){var f=r.nextFormID++;r=r.idPrefix+f;try{var m=s.$$FORM_ACTION(r);if(m){var b=m.data;b?.forEach(gr)}return m}catch(I){if(typeof I=="object"&&I!==null&&typeof I.then=="function")throw I}}return null}function Ys(r,s,f,m,b,I,X,Z){var j=null;if(typeof m=="function"){var ee=Xs(s,m);ee!==null?(Z=ee.name,m=ee.action||"",b=ee.encType,I=ee.method,X=ee.target,j=ee.data):(r.push(Wt,Ae("formAction"),un,aa,Kt),X=I=b=m=Z=null,de(s,f))}return Z!=null&&Zt(r,"name",Z),m!=null&&Zt(r,"formAction",m),b!=null&&Zt(r,"formEncType",b),I!=null&&Zt(r,"formMethod",I),X!=null&&Zt(r,"formTarget",X),j}function Zt(r,s,f){switch(s){case"className":Qt(r,"class",f);break;case"tabIndex":Qt(r,"tabindex",f);break;case"dir":case"role":case"viewBox":case"width":case"height":Qt(r,s,f);break;case"style":Nt(r,f);break;case"src":case"href":if(f==="")break;case"action":case"formAction":if(f==null||typeof f=="function"||typeof f=="symbol"||typeof f=="boolean")break;f=Mn(""+f),r.push(Wt,Ae(s),un,Ae(Xe(f)),Kt);break;case"defaultValue":case"defaultChecked":case"innerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":case"ref":break;case"autoFocus":case"multiple":case"muted":Kn(r,s.toLowerCase(),f);break;case"xlinkHref":if(typeof f=="function"||typeof f=="symbol"||typeof f=="boolean")break;f=Mn(""+f),r.push(Wt,Ae("xlink:href"),un,Ae(Xe(f)),Kt);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":typeof f!="function"&&typeof f!="symbol"&&r.push(Wt,Ae(s),un,Ae(Xe(f)),Kt);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":f&&typeof f!="function"&&typeof f!="symbol"&&r.push(Wt,Ae(s),Tn);break;case"capture":case"download":f===!0?r.push(Wt,Ae(s),Tn):f!==!1&&typeof f!="function"&&typeof f!="symbol"&&r.push(Wt,Ae(s),un,Ae(Xe(f)),Kt);break;case"cols":case"rows":case"size":case"span":typeof f!="function"&&typeof f!="symbol"&&!isNaN(f)&&1<=f&&r.push(Wt,Ae(s),un,Ae(Xe(f)),Kt);break;case"rowSpan":case"start":typeof f=="function"||typeof f=="symbol"||isNaN(f)||r.push(Wt,Ae(s),un,Ae(Xe(f)),Kt);break;case"xlinkActuate":Qt(r,"xlink:actuate",f);break;case"xlinkArcrole":Qt(r,"xlink:arcrole",f);break;case"xlinkRole":Qt(r,"xlink:role",f);break;case"xlinkShow":Qt(r,"xlink:show",f);break;case"xlinkTitle":Qt(r,"xlink:title",f);break;case"xlinkType":Qt(r,"xlink:type",f);break;case"xmlBase":Qt(r,"xml:base",f);break;case"xmlLang":Qt(r,"xml:lang",f);break;case"xmlSpace":Qt(r,"xml:space",f);break;default:if((!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=pt.get(s)||s,vt(s))){switch(typeof f){case"function":case"symbol":return;case"boolean":var m=s.toLowerCase().slice(0,5);if(m!=="data-"&&m!=="aria-")return}r.push(Wt,Ae(s),un,Ae(Xe(f)),Kt)}}}var yn=se(">"),Ua=se("/>");function fi(r,s,f){if(s!=null){if(f!=null)throw Error(t(60));if(typeof s!="object"||!("__html"in s))throw Error(t(61));s=s.__html,s!=null&&r.push(Ae(""+s))}}function Jo(r){var s="";return i.Children.forEach(r,function(f){f!=null&&(s+=f)}),s}var L=se(' selected=""'),Q=se(`addEventListener("submit",function(a){if(!a.defaultPrevented){var b=a.target,d=a.submitter,c=b.action,e=d;if(d){var f=d.getAttribute("formAction");null!=f&&(c=f,e=null)}"javascript:throw new Error('React form unexpectedly submitted.')"===c&&(a.preventDefault(),a=new FormData(b,e),c=b.ownerDocument||b,(c.$$reactFormReplay=c.$$reactFormReplay||[]).push(b,d,a))}});`);function de(r,s){if((r.instructions&16)===0){r.instructions|=16;var f=s.preamble,m=s.bootstrapChunks;(f.htmlChunks||f.headChunks)&&m.length===0?(m.push(s.startInlineScript),Ss(m,r),m.push(yn,Q,ie)):m.unshift(s.startInlineScript,yn,Q,ie)}}var le=se("<!--F!-->"),ce=se("<!--F-->");function Ie(r,s){r.push(Rt("link"));for(var f in s)if(P.call(s,f)){var m=s[f];if(m!=null)switch(f){case"children":case"dangerouslySetInnerHTML":throw Error(t(399,"link"));default:Zt(r,f,m)}}return r.push(Ua),null}var qe=/(<\/|<)(s)(tyle)/gi;function Ge(r,s,f,m){return""+s+(f==="s"?"\\73 ":"\\53 ")+m}function je(r,s,f,m){r.push(Rt(f));for(var b in s)if(P.call(s,b)){var I=s[b];if(I!=null)switch(b){case"children":case"dangerouslySetInnerHTML":throw Error(t(399,f));default:Zt(r,b,I)}}return nt(r,m),r.push(Ua),null}function ct(r,s){r.push(Rt("title"));var f=null,m=null,b;for(b in s)if(P.call(s,b)){var I=s[b];if(I!=null)switch(b){case"children":f=I;break;case"dangerouslySetInnerHTML":m=I;break;default:Zt(r,b,I)}}return r.push(yn),s=Array.isArray(f)?2>f.length?f[0]:null:f,typeof s!="function"&&typeof s!="symbol"&&s!==null&&s!==void 0&&r.push(Ae(Xe(""+s))),fi(r,m,f),r.push(ti("title")),null}var Tt=se("<!--head-->"),St=se("<!--body-->"),ot=se("<!--html-->");function Ht(r,s){r.push(Rt("script"));var f=null,m=null,b;for(b in s)if(P.call(s,b)){var I=s[b];if(I!=null)switch(b){case"children":f=I;break;case"dangerouslySetInnerHTML":m=I;break;default:Zt(r,b,I)}}return r.push(yn),fi(r,m,f),typeof f=="string"&&r.push(Ae((""+f).replace(Qe,Be))),r.push(ti("script")),null}function fn(r,s,f,m){r.push(Rt(f));var b=f=null,I;for(I in s)if(P.call(s,I)){var X=s[I];if(X!=null)switch(I){case"children":f=X;break;case"dangerouslySetInnerHTML":b=X;break;default:Zt(r,I,X)}}return nt(r,m),r.push(yn),fi(r,b,f),f}function rn(r,s,f,m){r.push(Rt(f));var b=f=null,I;for(I in s)if(P.call(s,I)){var X=s[I];if(X!=null)switch(I){case"children":f=X;break;case"dangerouslySetInnerHTML":b=X;break;default:Zt(r,I,X)}}return nt(r,m),r.push(yn),fi(r,b,f),typeof f=="string"?(r.push(Ae(Xe(f))),null):f}var jt=se(`
`),Bn=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,$e=new Map;function Rt(r){var s=$e.get(r);if(s===void 0){if(!Bn.test(r))throw Error(t(65,r));s=se("<"+r),$e.set(r,s)}return s}var Ut=se("<!DOCTYPE html>");function hi(r,s,f,m,b,I,X,Z,j){switch(s){case"div":case"span":case"svg":case"path":break;case"a":r.push(Rt("a"));var ee=null,be=null,Ce;for(Ce in f)if(P.call(f,Ce)){var He=f[Ce];if(He!=null)switch(Ce){case"children":ee=He;break;case"dangerouslySetInnerHTML":be=He;break;case"href":He===""?Qt(r,"href",""):Zt(r,Ce,He);break;default:Zt(r,Ce,He)}}if(nt(r,Z),r.push(yn),fi(r,be,ee),typeof ee=="string"){r.push(Ae(Xe(ee)));var Ve=null}else Ve=ee;return Ve;case"g":case"p":case"li":break;case"select":r.push(Rt("select"));var tt=null,Et=null,Dn;for(Dn in f)if(P.call(f,Dn)){var jn=f[Dn];if(jn!=null)switch(Dn){case"children":tt=jn;break;case"dangerouslySetInnerHTML":Et=jn;break;case"defaultValue":case"value":break;default:Zt(r,Dn,jn)}}return nt(r,Z),r.push(yn),fi(r,Et,tt),tt;case"option":var cn=Z.selectedValue;r.push(Rt("option"));var Ei=null,Oi=null,Bi=null,Mt=null,En;for(En in f)if(P.call(f,En)){var zi=f[En];if(zi!=null)switch(En){case"children":Ei=zi;break;case"selected":Bi=zi;break;case"dangerouslySetInnerHTML":Mt=zi;break;case"value":Oi=zi;default:Zt(r,En,zi)}}if(cn!=null){var pi=Oi!==null?""+Oi:Jo(Ei);if(y(cn)){for(var Nn=0;Nn<cn.length;Nn++)if(""+cn[Nn]===pi){r.push(L);break}}else""+cn===pi&&r.push(L)}else Bi&&r.push(L);return r.push(yn),fi(r,Mt,Ei),Ei;case"textarea":r.push(Rt("textarea"));var $n=null,Cr=null,Jn=null,ki;for(ki in f)if(P.call(f,ki)){var Cn=f[ki];if(Cn!=null)switch(ki){case"children":Jn=Cn;break;case"value":$n=Cn;break;case"defaultValue":Cr=Cn;break;case"dangerouslySetInnerHTML":throw Error(t(91));default:Zt(r,ki,Cn)}}if($n===null&&Cr!==null&&($n=Cr),nt(r,Z),r.push(yn),Jn!=null){if($n!=null)throw Error(t(92));if(y(Jn)){if(1<Jn.length)throw Error(t(93));$n=""+Jn[0]}$n=""+Jn}return typeof $n=="string"&&$n[0]===`
`&&r.push(jt),$n!==null&&r.push(Ae(Xe(""+$n))),null;case"input":r.push(Rt("input"));var Jr=null,ji=null,Un=null,ya=null,Kr=null,Pr=null,Ti=null,Cc=null,Sl=null,xo;for(xo in f)if(P.call(f,xo)){var gi=f[xo];if(gi!=null)switch(xo){case"children":case"dangerouslySetInnerHTML":throw Error(t(399,"input"));case"name":Jr=gi;break;case"formAction":ji=gi;break;case"formEncType":Un=gi;break;case"formMethod":ya=gi;break;case"formTarget":Kr=gi;break;case"defaultChecked":Sl=gi;break;case"defaultValue":Ti=gi;break;case"checked":Cc=gi;break;case"value":Pr=gi;break;default:Zt(r,xo,gi)}}var Au=Ys(r,m,b,ji,Un,ya,Kr,Jr);return Cc!==null?Kn(r,"checked",Cc):Sl!==null&&Kn(r,"checked",Sl),Pr!==null?Zt(r,"value",Pr):Ti!==null&&Zt(r,"value",Ti),nt(r,Z),r.push(Ua),Au?.forEach(Nr,r),null;case"button":r.push(Rt("button"));var Mo=null,Sa=null,As=null,Pc=null,bl=null,El=null,Ru=null,ba;for(ba in f)if(P.call(f,ba)){var wi=f[ba];if(wi!=null)switch(ba){case"children":Mo=wi;break;case"dangerouslySetInnerHTML":Sa=wi;break;case"name":As=wi;break;case"formAction":Pc=wi;break;case"formEncType":bl=wi;break;case"formMethod":El=wi;break;case"formTarget":Ru=wi;break;default:Zt(r,ba,wi)}}var Cu=Ys(r,m,b,Pc,bl,El,Ru,As);if(nt(r,Z),r.push(yn),Cu?.forEach(Nr,r),fi(r,Sa,Mo),typeof Mo=="string"){r.push(Ae(Xe(Mo)));var Qr=null}else Qr=Mo;return Qr;case"form":r.push(Rt("form"));var yo=null,Pu=null,Ea=null,So=null,bo=null,ns=null,Ta;for(Ta in f)if(P.call(f,Ta)){var $i=f[Ta];if($i!=null)switch(Ta){case"children":yo=$i;break;case"dangerouslySetInnerHTML":Pu=$i;break;case"action":Ea=$i;break;case"encType":So=$i;break;case"method":bo=$i;break;case"target":ns=$i;break;default:Zt(r,Ta,$i)}}var Rs=null,is=null;if(typeof Ea=="function"){var Lr=Xs(m,Ea);Lr!==null?(Ea=Lr.action||"",So=Lr.encType,bo=Lr.method,ns=Lr.target,Rs=Lr.data,is=Lr.name):(r.push(Wt,Ae("action"),un,aa,Kt),ns=bo=So=Ea=null,de(m,b))}if(Ea!=null&&Zt(r,"action",Ea),So!=null&&Zt(r,"encType",So),bo!=null&&Zt(r,"method",bo),ns!=null&&Zt(r,"target",ns),nt(r,Z),r.push(yn),is!==null&&(r.push(pr),Qt(r,"name",is),r.push(Ua),Rs?.forEach(Nr,r)),fi(r,Pu,yo),typeof yo=="string"){r.push(Ae(Xe(yo)));var Tl=null}else Tl=yo;return Tl;case"menuitem":r.push(Rt("menuitem"));for(var wl in f)if(P.call(f,wl)){var Cs=f[wl];if(Cs!=null)switch(wl){case"children":case"dangerouslySetInnerHTML":throw Error(t(400));default:Zt(r,wl,Cs)}}return nt(r,Z),r.push(yn),null;case"object":r.push(Rt("object"));var Eo=null,Lc=null,To;for(To in f)if(P.call(f,To)){var Ps=f[To];if(Ps!=null)switch(To){case"children":Eo=Ps;break;case"dangerouslySetInnerHTML":Lc=Ps;break;case"data":var Lu=Mn(""+Ps);if(Lu==="")break;r.push(Wt,Ae("data"),un,Ae(Xe(Lu)),Kt);break;default:Zt(r,To,Ps)}}if(nt(r,Z),r.push(yn),fi(r,Lc,Eo),typeof Eo=="string"){r.push(Ae(Xe(Eo)));var Iu=null}else Iu=Eo;return Iu;case"title":var Du=Z.tagScope&1,Al=Z.tagScope&4;if(Z.insertionMode===4||Du||f.itemProp!=null)var qr=ct(r,f);else Al?qr=null:(ct(b.hoistableChunks,f),qr=void 0);return qr;case"link":var Ic=Z.tagScope&1,Nu=Z.tagScope&4,Vf=f.rel,er=f.href,wo=f.precedence;if(Z.insertionMode===4||Ic||f.itemProp!=null||typeof Vf!="string"||typeof er!="string"||er===""){Ie(r,f);var Ls=null}else if(f.rel==="stylesheet")if(typeof wo!="string"||f.disabled!=null||f.onLoad||f.onError)Ls=Ie(r,f);else{var rs=b.styles.get(wo),mn=m.styleResources.hasOwnProperty(er)?m.styleResources[er]:void 0;if(mn!==null){m.styleResources[er]=null,rs||(rs={precedence:Ae(Xe(wo)),rules:[],hrefs:[],sheets:new Map},b.styles.set(wo,rs));var tr={state:0,props:ve({},f,{"data-precedence":f.precedence,precedence:null})};if(mn){mn.length===2&&ar(tr.props,mn);var Hi=b.preloads.stylesheets.get(er);Hi&&0<Hi.length?Hi.length=0:tr.state=1}rs.sheets.set(er,tr),X&&X.stylesheets.add(tr)}else if(rs){var Rl=rs.sheets.get(er);Rl&&X&&X.stylesheets.add(Rl)}j&&r.push(Me),Ls=null}else f.onLoad||f.onError?Ls=Ie(r,f):(j&&r.push(Me),Ls=Nu?null:Ie(b.hoistableChunks,f));return Ls;case"script":var Uu=Z.tagScope&1,Is=f.async;if(typeof f.src!="string"||!f.src||!Is||typeof Is=="function"||typeof Is=="symbol"||f.onLoad||f.onError||Z.insertionMode===4||Uu||f.itemProp!=null)var Dc=Ht(r,f);else{var Ao=f.src;if(f.type==="module")var Ro=m.moduleScriptResources,Fu=b.preloads.moduleScripts;else Ro=m.scriptResources,Fu=b.preloads.scripts;var Cl=Ro.hasOwnProperty(Ao)?Ro[Ao]:void 0;if(Cl!==null){Ro[Ao]=null;var Pl=f;if(Cl){Cl.length===2&&(Pl=ve({},f),ar(Pl,Cl));var Ll=Fu.get(Ao);Ll&&(Ll.length=0)}var Il=[];b.scripts.add(Il),Ht(Il,Pl)}j&&r.push(Me),Dc=null}return Dc;case"style":var Wf=Z.tagScope&1,Dl=f.precedence,Ds=f.href,Ou=f.nonce;if(Z.insertionMode===4||Wf||f.itemProp!=null||typeof Dl!="string"||typeof Ds!="string"||Ds===""){r.push(Rt("style"));var Ns=null,Nl=null,Us;for(Us in f)if(P.call(f,Us)){var as=f[Us];if(as!=null)switch(Us){case"children":Ns=as;break;case"dangerouslySetInnerHTML":Nl=as;break;default:Zt(r,Us,as)}}r.push(yn);var Co=Array.isArray(Ns)?2>Ns.length?Ns[0]:null:Ns;typeof Co!="function"&&typeof Co!="symbol"&&Co!==null&&Co!==void 0&&r.push(Ae((""+Co).replace(qe,Ge))),fi(r,Nl,Ns),r.push(ti("style"));var Bu=null}else{var ss=b.styles.get(Dl);if((m.styleResources.hasOwnProperty(Ds)?m.styleResources[Ds]:void 0)!==null){m.styleResources[Ds]=null,ss||(ss={precedence:Ae(Xe(Dl)),rules:[],hrefs:[],sheets:new Map},b.styles.set(Dl,ss));var zu=b.nonce.style;if(!zu||zu===Ou){ss.hrefs.push(Ae(Xe(Ds)));var ku=ss.rules,Fs=null,Ul=null,Hu;for(Hu in f)if(P.call(f,Hu)){var Xf=f[Hu];if(Xf!=null)switch(Hu){case"children":Fs=Xf;break;case"dangerouslySetInnerHTML":Ul=Xf}}var Nc=Array.isArray(Fs)?2>Fs.length?Fs[0]:null:Fs;typeof Nc!="function"&&typeof Nc!="symbol"&&Nc!==null&&Nc!==void 0&&ku.push(Ae((""+Nc).replace(qe,Ge))),fi(ku,Ul,Fs)}}ss&&X&&X.styles.add(ss),j&&r.push(Me),Bu=void 0}return Bu;case"meta":var Qg=Z.tagScope&1,qg=Z.tagScope&4;if(Z.insertionMode===4||Qg||f.itemProp!=null)var Zd=je(r,f,"meta",Z);else j&&r.push(Me),Zd=qg?null:typeof f.charSet=="string"?je(b.charsetChunks,f,"meta",Z):f.name==="viewport"?je(b.viewportChunks,f,"meta",Z):je(b.hoistableChunks,f,"meta",Z);return Zd;case"listing":case"pre":r.push(Rt(s));var Uc=null,Fc=null,Oc;for(Oc in f)if(P.call(f,Oc)){var Gu=f[Oc];if(Gu!=null)switch(Oc){case"children":Uc=Gu;break;case"dangerouslySetInnerHTML":Fc=Gu;break;default:Zt(r,Oc,Gu)}}if(nt(r,Z),r.push(yn),Fc!=null){if(Uc!=null)throw Error(t(60));if(typeof Fc!="object"||!("__html"in Fc))throw Error(t(61));var Po=Fc.__html;Po!=null&&(typeof Po=="string"&&0<Po.length&&Po[0]===`
`?r.push(jt,Ae(Po)):r.push(Ae(""+Po)))}return typeof Uc=="string"&&Uc[0]===`
`&&r.push(jt),Uc;case"img":var jg=Z.tagScope&3,Ai=f.src,mi=f.srcSet;if(!(f.loading==="lazy"||!Ai&&!mi||typeof Ai!="string"&&Ai!=null||typeof mi!="string"&&mi!=null||f.fetchPriority==="low"||jg)&&(typeof Ai!="string"||Ai[4]!==":"||Ai[0]!=="d"&&Ai[0]!=="D"||Ai[1]!=="a"&&Ai[1]!=="A"||Ai[2]!=="t"&&Ai[2]!=="T"||Ai[3]!=="a"&&Ai[3]!=="A")&&(typeof mi!="string"||mi[4]!==":"||mi[0]!=="d"&&mi[0]!=="D"||mi[1]!=="a"&&mi[1]!=="A"||mi[2]!=="t"&&mi[2]!=="T"||mi[3]!=="a"&&mi[3]!=="A")){X!==null&&Z.tagScope&64&&(X.suspenseyImages=!0);var Jd=typeof f.sizes=="string"?f.sizes:void 0,Fl=mi?mi+`
`+(Jd||""):Ai,Yf=b.preloads.images,Lo=Yf.get(Fl);if(Lo)(f.fetchPriority==="high"||10>b.highImagePreloads.size)&&(Yf.delete(Fl),b.highImagePreloads.add(Lo));else if(!m.imageResources.hasOwnProperty(Fl)){m.imageResources[Fl]=gt;var Zf=f.crossOrigin,Kd=typeof Zf=="string"?Zf==="use-credentials"?Zf:"":void 0,Io=b.headers,Jf;Io&&0<Io.remainingCapacity&&typeof f.srcSet!="string"&&(f.fetchPriority==="high"||500>Io.highImagePreloads.length)&&(Jf=no(Ai,"image",{imageSrcSet:f.srcSet,imageSizes:f.sizes,crossOrigin:Kd,integrity:f.integrity,nonce:f.nonce,type:f.type,fetchPriority:f.fetchPriority,referrerPolicy:f.referrerPolicy}),0<=(Io.remainingCapacity-=Jf.length+2))?(b.resets.image[Fl]=gt,Io.highImagePreloads&&(Io.highImagePreloads+=", "),Io.highImagePreloads+=Jf):(Lo=[],Ie(Lo,{rel:"preload",as:"image",href:mi?void 0:Ai,imageSrcSet:mi,imageSizes:Jd,crossOrigin:Kd,integrity:f.integrity,type:f.type,fetchPriority:f.fetchPriority,referrerPolicy:f.referrerPolicy}),f.fetchPriority==="high"||10>b.highImagePreloads.size?b.highImagePreloads.add(Lo):(b.bulkPreloads.add(Lo),Yf.set(Fl,Lo)))}}return je(r,f,"img",Z);case"base":case"area":case"br":case"col":case"embed":case"hr":case"keygen":case"param":case"source":case"track":case"wbr":return je(r,f,s,Z);case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":break;case"head":if(2>Z.insertionMode){var Kf=I||b.preamble;if(Kf.headChunks)throw Error(t(545,"`<head>`"));I!==null&&r.push(Tt),Kf.headChunks=[];var Qd=fn(Kf.headChunks,f,"head",Z)}else Qd=rn(r,f,"head",Z);return Qd;case"body":if(2>Z.insertionMode){var Qf=I||b.preamble;if(Qf.bodyChunks)throw Error(t(545,"`<body>`"));I!==null&&r.push(St),Qf.bodyChunks=[];var qd=fn(Qf.bodyChunks,f,"body",Z)}else qd=rn(r,f,"body",Z);return qd;case"html":if(Z.insertionMode===0){var qf=I||b.preamble;if(qf.htmlChunks)throw Error(t(545,"`<html>`"));I!==null&&r.push(ot),qf.htmlChunks=[Ut];var jd=fn(qf.htmlChunks,f,"html",Z)}else jd=rn(r,f,"html",Z);return jd;default:if(s.indexOf("-")!==-1){r.push(Rt(s));var jf=null,$d=null,Ol;for(Ol in f)if(P.call(f,Ol)){var jr=f[Ol];if(jr!=null){var ep=Ol;switch(Ol){case"children":jf=jr;break;case"dangerouslySetInnerHTML":$d=jr;break;case"style":Nt(r,jr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"ref":break;case"className":ep="class";default:if(vt(Ol)&&typeof jr!="function"&&typeof jr!="symbol"&&jr!==!1){if(jr===!0)jr="";else if(typeof jr=="object")continue;r.push(Wt,Ae(ep),un,Ae(Xe(jr)),Kt)}}}}return nt(r,Z),r.push(yn),fi(r,$d,jf),jf}}return rn(r,f,s,Z)}var xi=new Map;function ti(r){var s=xi.get(r);return s===void 0&&(s=se("</"+r+">"),xi.set(r,s)),s}function mr(r,s){r=r.preamble,r.htmlChunks===null&&s.htmlChunks&&(r.htmlChunks=s.htmlChunks),r.headChunks===null&&s.headChunks&&(r.headChunks=s.headChunks),r.bodyChunks===null&&s.bodyChunks&&(r.bodyChunks=s.bodyChunks)}function Ft(r,s){s=s.bootstrapChunks;for(var f=0;f<s.length-1;f++)V(r,s[f]);return f<s.length?(f=s[f],s.length=0,xe(r,f)):!0}var wn=se("requestAnimationFrame(function(){$RT=performance.now()});"),vr=se('<template id="'),on=se('"></template>'),ni=se("<!--&-->"),rr=se("<!--/&-->"),Ko=se("<!--$-->"),If=se('<!--$?--><template id="'),Df=se('"></template>'),Mi=se("<!--$!-->"),di=se("<!--/$-->"),Nf=se("<template"),Qo=se('"'),qo=se(' data-dgst="');se(' data-msg="'),se(' data-stck="'),se(' data-cstck="');var Uf=se("></template>");function su(r,s,f){if(V(r,If),f===null)throw Error(t(395));return V(r,s.boundaryPrefix),V(r,Ae(f.toString(16))),xe(r,Df)}var Ur=se('<div hidden id="'),uc=se('">'),fc=se("</div>"),hc=se('<svg aria-hidden="true" style="display:none" id="'),jo=se('">'),_n=se("</svg>"),Zs=se('<math aria-hidden="true" style="display:none" id="'),$o=se('">'),Js=se("</math>"),Ks=se('<table hidden id="'),Qs=se('">'),el=se("</table>"),Ms=se('<table hidden><tbody id="'),ou=se('">'),tl=se("</tbody></table>"),dc=se('<table hidden><tr id="'),sa=se('">'),nl=se("</tr></table>"),Fr=se('<table hidden><colgroup id="'),lu=se('">'),pc=se("</colgroup></table>");function oa(r,s,f,m){switch(f.insertionMode){case 0:case 1:case 3:case 2:return V(r,Ur),V(r,s.segmentPrefix),V(r,Ae(m.toString(16))),xe(r,uc);case 4:return V(r,hc),V(r,s.segmentPrefix),V(r,Ae(m.toString(16))),xe(r,jo);case 5:return V(r,Zs),V(r,s.segmentPrefix),V(r,Ae(m.toString(16))),xe(r,$o);case 6:return V(r,Ks),V(r,s.segmentPrefix),V(r,Ae(m.toString(16))),xe(r,Qs);case 7:return V(r,Ms),V(r,s.segmentPrefix),V(r,Ae(m.toString(16))),xe(r,ou);case 8:return V(r,dc),V(r,s.segmentPrefix),V(r,Ae(m.toString(16))),xe(r,sa);case 9:return V(r,Fr),V(r,s.segmentPrefix),V(r,Ae(m.toString(16))),xe(r,lu);default:throw Error(t(397))}}function qs(r,s){switch(s.insertionMode){case 0:case 1:case 3:case 2:return xe(r,fc);case 4:return xe(r,_n);case 5:return xe(r,Js);case 6:return xe(r,el);case 7:return xe(r,tl);case 8:return xe(r,nl);case 9:return xe(r,pc);default:throw Error(t(397))}}var cu=se('$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'),uu=se('$RS("'),fu=se('","'),Ff=se('")<\/script>');se('<template data-rsi="" data-sid="'),se('" data-pid="');var hu=se(`$RB=[];$RV=function(a){$RT=performance.now();for(var b=0;b<a.length;b+=2){var c=a[b],e=a[b+1];null!==e.parentNode&&e.parentNode.removeChild(e);var f=c.parentNode;if(f){var g=c.previousSibling,h=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d||"/&"===d)if(0===h)break;else h--;else"$"!==d&&"$?"!==d&&"$~"!==d&&"$!"!==d&&"&"!==d||h++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;e.firstChild;)f.insertBefore(e.firstChild,c);g.data="$";g._reactRetry&&requestAnimationFrame(g._reactRetry)}}a.length=0};
$RC=function(a,b){if(b=document.getElementById(b))(a=document.getElementById(a))?(a.previousSibling.data="$~",$RB.push(a,b),2===$RB.length&&("number"!==typeof $RT?requestAnimationFrame($RV.bind(null,$RB)):(a=performance.now(),setTimeout($RV.bind(null,$RB),2300>a&&2E3<a?2300-a:$RT+300-a)))):b.parentNode.removeChild(b)};`),du=Ae(`$RV=function(B,g){function h(a,c){var e=a.getAttribute(c);e&&(c=a.style,l.push(a,c.viewTransitionName,c.viewTransitionClass),"auto"!==e&&(c.viewTransitionClass=e),(a=a.getAttribute("vt-name"))||(a="_T_"+N++ +"_"),a=CSS.escape(a)!==a?"r-"+btoa(a).replace(/=/g,""):a,c.viewTransitionName=a,C=!0)}var C=!1,N=0,l=[];try{var f=document.__reactViewTransition;if(f){f.finished.finally($RV.bind(null,g));return}var m=new Map;for(f=1;f<g.length;f+=2)for(var k=g[f].querySelectorAll("[vt-share]"),d=0;d<k.length;d++){var b=k[d];m.set(b.getAttribute("vt-name"),b)}var u=[];for(k=0;k<g.length;k+=2){var D=g[k],x=D.parentNode;if(x){var v=x.getBoundingClientRect();if(v.left||v.top||v.width||v.height){b=D;for(f=0;b;){if(8===b.nodeType){var t=b.data;if("/$"===t)if(0===f)break;else f--;else"$"!==t&&"$?"!==t&&"$~"!==t&&"$!"!==t||f++}else if(1===b.nodeType){d=b;var E=d.getAttribute("vt-name"),y=m.get(E);h(d,y?"vt-share":"vt-exit");y&&(h(y,"vt-share"),m.set(E,null));for(var F=d.querySelectorAll("[vt-share]"),
z=0;z<F.length;z++){var G=F[z],H=G.getAttribute("vt-name"),I=m.get(H);I&&(h(G,"vt-share"),h(I,"vt-share"),m.set(H,null))}var J=d.querySelectorAll("[vt-parent-exit]");for(d=0;d<J.length;d++)h(J[d],"vt-parent-exit")}b=b.nextSibling}for(var K=g[k+1],n=K.firstElementChild;n;){null!==m.get(n.getAttribute("vt-name"))&&h(n,"vt-enter");var L=n.querySelectorAll("[vt-parent-enter]");for(b=0;b<L.length;b++)h(L[b],"vt-parent-enter");n=n.nextElementSibling}b=x;do for(var p=b.firstElementChild;p;){var M=p.getAttribute("vt-update");
M&&"none"!==M&&!l.includes(p)&&h(p,"vt-update");p=p.nextElementSibling}while((b=b.parentNode)&&1===b.nodeType&&"none"!==b.getAttribute("vt-update"));u.push.apply(u,K.querySelectorAll('img[src]:not([loading="lazy"])'))}}}if(C){var A=document.__reactViewTransition=document.startViewTransition({update:function(){B(g);for(var a=[document.documentElement.clientHeight,document.fonts.ready],c={},e=0;e<u.length;c={g:c.g},e++)if(c.g=u[e],!c.g.complete){var q=c.g.getBoundingClientRect();0<q.bottom&&0<q.right&&
q.top<window.innerHeight&&q.left<window.innerWidth&&(q=new Promise(function(w){return function(r){w.g.addEventListener("load",r);w.g.addEventListener("error",r)}}(c)),a.push(q))}return Promise.race([Promise.all(a),new Promise(function(w){var r=performance.now();setTimeout(w,2300>r&&2E3<r?2300-r:500)})])},types:[]});A.ready.finally(function(){for(var a=l.length-3;0<=a;a-=3){var c=l[a],e=c.style;e.viewTransitionName=l[a+1];e.viewTransitionClass=l[a+1];""===c.getAttribute("style")&&c.removeAttribute("style")}});
A.finished.finally(function(){document.__reactViewTransition===A&&(document.__reactViewTransition=null)});$RB=[];return}}catch(a){}B(g)}.bind(null,$RV);`),Of=se('$RC("'),pu=se(`$RM=new Map;$RR=function(n,w,p){function u(q){this._p=null;q()}for(var r=new Map,t=document,h,b,e=t.querySelectorAll("link[data-precedence],style[data-precedence]"),v=[],k=0;b=e[k++];)"not all"===b.getAttribute("media")?v.push(b):("LINK"===b.tagName&&$RM.set(b.getAttribute("href"),b),r.set(b.dataset.precedence,h=b));e=0;b=[];var l,a;for(k=!0;;){if(k){var f=p[e++];if(!f){k=!1;e=0;continue}var c=!1,m=0;var d=f[m++];if(a=$RM.get(d)){var g=a._p;c=!0}else{a=t.createElement("link");a.href=d;a.rel=
"stylesheet";for(a.dataset.precedence=l=f[m++];g=f[m++];)a.setAttribute(g,f[m++]);g=a._p=new Promise(function(q,x){a.onload=u.bind(a,q);a.onerror=u.bind(a,x)});$RM.set(d,a)}d=a.getAttribute("media");!g||d&&!matchMedia(d).matches||b.push(g);if(c)continue}else{a=v[e++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=r.get(l)||h;c===h&&(h=a);r.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=t.head,c.insertBefore(a,c.firstChild))}if(p=document.getElementById(n))p.previousSibling.data=
"$~";Promise.all(b).then($RC.bind(null,n,w),$RX.bind(null,n,"CSS failed to load"))};$RR("`),gu=se('$RR("'),Bf=se('","'),mu=se('",'),il=se('"'),zf=se(")<\/script>");se('<template data-rci="" data-bid="'),se('<template data-rri="" data-bid="'),se('" data-sid="'),se('" data-sty="');var gc=se('$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,null!=c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};'),vu=se('$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,null!=c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX("'),Fa=se('$RX("'),mc=se('"'),rl=se(","),_u=se("null"),ys=se(")<\/script>");se('<template data-rxi="" data-bid="'),se('" data-dgst="'),se('" data-msg="'),se('" data-stck="'),se('" data-cstck="');var kf=/[<\u2028\u2029]/g;function Hf(r){return JSON.stringify(r).replace(kf,function(s){switch(s){case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}var Gf=/[&><\u2028\u2029]/g;function zn(r){return JSON.stringify(r).replace(Gf,function(s){switch(s){case"&":return"\\u0026";case">":return"\\u003e";case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}var al=se(' media="not all" data-precedence="'),vc=se('" data-href="'),sl=se('">'),xu=se("</style>"),_r=!1,Oa=!0;function _c(r){var s=r.rules,f=r.hrefs,m=0;if(f.length){for(V(this,B.startInlineStyle),V(this,al),V(this,r.precedence),V(this,vc);m<f.length-1;m++)V(this,f[m]),V(this,yc);for(V(this,f[m]),V(this,sl),m=0;m<s.length;m++)V(this,s[m]);Oa=xe(this,xu),_r=!0,s.length=0,f.length=0}}function Ba(r){return r.state!==2?_r=!0:!1}function Xn(r,s,f){return _r=!1,Oa=!0,B=f,s.styles.forEach(_c,r),B=null,s.stylesheets.forEach(Ba),_r&&(f.stylesToHoist=!0),Oa}function ii(r){for(var s=0;s<r.length;s++)V(this,r[s]);r.length=0}var Ln=[];function xc(r){Ie(Ln,r.props);for(var s=0;s<Ln.length;s++)V(this,Ln[s]);Ln.length=0,r.state=2}var Mc=se(' data-precedence="'),js=se('" data-href="'),yc=se(" "),Mu=se('">'),yu=se("</style>");function ol(r){var s=0<r.sheets.size;r.sheets.forEach(xc,this),r.sheets.clear();var f=r.rules,m=r.hrefs;if(!s||m.length){if(V(this,B.startInlineStyle),V(this,Mc),V(this,r.precedence),r=0,m.length){for(V(this,js);r<m.length-1;r++)V(this,m[r]),V(this,yc);V(this,m[r])}for(V(this,Mu),r=0;r<f.length;r++)V(this,f[r]);V(this,yu),f.length=0,m.length=0}}function ll(r){if(r.state===0){r.state=1;var s=r.props;for(Ie(Ln,{rel:"preload",as:"style",href:r.props.href,crossOrigin:s.crossOrigin,fetchPriority:s.fetchPriority,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy}),r=0;r<Ln.length;r++)V(this,Ln[r]);Ln.length=0}}function Di(r){r.sheets.forEach(ll,this),r.sheets.clear()}se('<link rel="expect" href="#'),se('" blocking="render"/>');var cl=se(' id="');function Ss(r,s){(s.instructions&32)===0&&(s.instructions|=32,r.push(cl,Ae(Xe("_"+s.idPrefix+"R_")),Kt))}var Sc=se("["),bc=se(",["),$s=se(","),ul=se("]");function Su(r,s){V(r,Sc);var f=Sc;s.stylesheets.forEach(function(m){if(m.state!==2)if(m.state===3)V(r,f),V(r,Ae(zn(""+m.props.href))),V(r,ul),f=bc;else{V(r,f);var b=m.props["data-precedence"],I=m.props,X=Mn(""+m.props.href);V(r,Ae(zn(X))),b=""+b,V(r,$s),V(r,Ae(zn(b)));for(var Z in I)if(P.call(I,Z)&&(b=I[Z],b!=null))switch(Z){case"href":case"rel":case"precedence":case"data-precedence":break;case"children":case"dangerouslySetInnerHTML":throw Error(t(399,"link"));default:Yn(r,Z,b)}V(r,ul),f=bc,m.state=3}}),V(r,ul)}function Yn(r,s,f){var m=s.toLowerCase();switch(typeof f){case"function":case"symbol":return}switch(s){case"innerHTML":case"dangerouslySetInnerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":case"style":case"ref":return;case"className":m="class",s=""+f;break;case"hidden":if(f===!1)return;s="";break;case"src":case"href":f=Mn(f),s=""+f;break;default:if(2<s.length&&(s[0]==="o"||s[0]==="O")&&(s[1]==="n"||s[1]==="N")||!vt(s))return;s=""+f}V(r,$s),V(r,Ae(zn(m))),V(r,$s),V(r,Ae(zn(s)))}function Ec(){return{styles:new Set,stylesheets:new Set,suspenseyImages:!1}}function eo(r){var s=$t||null;if(s){var f=s.resumableState,m=s.renderState;if(typeof r=="string"&&r){if(!f.dnsResources.hasOwnProperty(r)){f.dnsResources[r]=null,f=m.headers;var b,I;(I=f&&0<f.remainingCapacity)&&(I=(b="<"+(""+r).replace(io,dl)+">; rel=dns-prefetch",0<=(f.remainingCapacity-=b.length+2))),I?(m.resets.dns[r]=null,f.preconnects&&(f.preconnects+=", "),f.preconnects+=b):(b=[],Ie(b,{href:r,rel:"dns-prefetch"}),m.preconnects.add(b))}es(s)}}else zt.D(r)}function fl(r,s){var f=$t||null;if(f){var m=f.resumableState,b=f.renderState;if(typeof r=="string"&&r){var I=s==="use-credentials"?"credentials":typeof s=="string"?"anonymous":"default";if(!m.connectResources[I].hasOwnProperty(r)){m.connectResources[I][r]=null,m=b.headers;var X,Z;if(Z=m&&0<m.remainingCapacity){if(Z="<"+(""+r).replace(io,dl)+">; rel=preconnect",typeof s=="string"){var j=(""+s).replace(ka,bs);Z+='; crossorigin="'+j+'"'}Z=(X=Z,0<=(m.remainingCapacity-=X.length+2))}Z?(b.resets.connect[I][r]=null,m.preconnects&&(m.preconnects+=", "),m.preconnects+=X):(I=[],Ie(I,{rel:"preconnect",href:r,crossOrigin:s}),b.preconnects.add(I))}es(f)}}else zt.C(r,s)}function za(r,s,f){var m=$t||null;if(m){var b=m.resumableState,I=m.renderState;if(s&&r){switch(s){case"image":if(f)var X=f.imageSrcSet,Z=f.imageSizes,j=f.fetchPriority;var ee=X?X+`
`+(Z||""):r;if(b.imageResources.hasOwnProperty(ee))return;b.imageResources[ee]=gt,b=I.headers;var be;b&&0<b.remainingCapacity&&typeof X!="string"&&j==="high"&&(be=no(r,s,f),0<=(b.remainingCapacity-=be.length+2))?(I.resets.image[ee]=gt,b.highImagePreloads&&(b.highImagePreloads+=", "),b.highImagePreloads+=be):(b=[],Ie(b,ve({rel:"preload",href:X?void 0:r,as:s},f)),j==="high"?I.highImagePreloads.add(b):(I.bulkPreloads.add(b),I.preloads.images.set(ee,b)));break;case"style":if(b.styleResources.hasOwnProperty(r))return;X=[],Ie(X,ve({rel:"preload",href:r,as:s},f)),b.styleResources[r]=!f||typeof f.crossOrigin!="string"&&typeof f.integrity!="string"?gt:[f.crossOrigin,f.integrity],I.preloads.stylesheets.set(r,X),I.bulkPreloads.add(X);break;case"script":if(b.scriptResources.hasOwnProperty(r))return;X=[],I.preloads.scripts.set(r,X),I.bulkPreloads.add(X),Ie(X,ve({rel:"preload",href:r,as:s},f)),b.scriptResources[r]=!f||typeof f.crossOrigin!="string"&&typeof f.integrity!="string"?gt:[f.crossOrigin,f.integrity];break;default:if(b.unknownResources.hasOwnProperty(s)){if(X=b.unknownResources[s],X.hasOwnProperty(r))return}else X={},b.unknownResources[s]=X;X[r]=gt,(b=I.headers)&&0<b.remainingCapacity&&s==="font"&&(ee=no(r,s,f),0<=(b.remainingCapacity-=ee.length+2))?(I.resets.font[r]=gt,b.fontPreloads&&(b.fontPreloads+=", "),b.fontPreloads+=ee):(b=[],r=ve({rel:"preload",href:r,as:s},f),Ie(b,r),s)==="font"?I.fontPreloads.add(b):I.bulkPreloads.add(b)}es(m)}}else zt.L(r,s,f)}function Tc(r,s){var f=$t||null;if(f){var m=f.resumableState,b=f.renderState;if(r){var I=s&&typeof s.as=="string"?s.as:"script";switch(I){case"script":if(m.moduleScriptResources.hasOwnProperty(r))return;I=[],m.moduleScriptResources[r]=!s||typeof s.crossOrigin!="string"&&typeof s.integrity!="string"?gt:[s.crossOrigin,s.integrity],b.preloads.moduleScripts.set(r,I);break;default:if(m.moduleUnknownResources.hasOwnProperty(I)){var X=m.moduleUnknownResources[I];if(X.hasOwnProperty(r))return}else X={},m.moduleUnknownResources[I]=X;I=[],X[r]=gt}Ie(I,ve({rel:"modulepreload",href:r},s)),b.bulkPreloads.add(I),es(f)}}else zt.m(r,s)}function wc(r,s,f){var m=$t||null;if(m){var b=m.resumableState,I=m.renderState;if(r){s=s||"default";var X=I.styles.get(s),Z=b.styleResources.hasOwnProperty(r)?b.styleResources[r]:void 0;Z!==null&&(b.styleResources[r]=null,X||(X={precedence:Ae(Xe(s)),rules:[],hrefs:[],sheets:new Map},I.styles.set(s,X)),s={state:0,props:ve({rel:"stylesheet",href:r,"data-precedence":s},f)},Z&&(Z.length===2&&ar(s.props,Z),(I=I.preloads.stylesheets.get(r))&&0<I.length?I.length=0:s.state=1),X.sheets.set(r,s),es(m))}}else zt.S(r,s,f)}function hl(r,s){var f=$t||null;if(f){var m=f.resumableState,b=f.renderState;if(r){var I=m.scriptResources.hasOwnProperty(r)?m.scriptResources[r]:void 0;I!==null&&(m.scriptResources[r]=null,s=ve({src:r,async:!0},s),I&&(I.length===2&&ar(s,I),r=b.preloads.scripts.get(r))&&(r.length=0),r=[],b.scripts.add(r),Ht(r,s),es(f))}}else zt.X(r,s)}function to(r,s){var f=$t||null;if(f){var m=f.resumableState,b=f.renderState;if(r){var I=m.moduleScriptResources.hasOwnProperty(r)?m.moduleScriptResources[r]:void 0;I!==null&&(m.moduleScriptResources[r]=null,s=ve({src:r,type:"module",async:!0},s),I&&(I.length===2&&ar(s,I),r=b.preloads.moduleScripts.get(r))&&(r.length=0),r=[],b.scripts.add(r),Ht(r,s),es(f))}}else zt.M(r,s)}function ar(r,s){r.crossOrigin==null&&(r.crossOrigin=s[0]),r.integrity==null&&(r.integrity=s[1])}function no(r,s,f){r=(""+r).replace(io,dl),s=(""+s).replace(ka,bs),s="<"+r+'>; rel=preload; as="'+s+'"';for(var m in f)P.call(f,m)&&(r=f[m],typeof r=="string"&&(s+="; "+m.toLowerCase()+'="'+(""+r).replace(ka,bs)+'"'));return s}var io=/[<>\r\n]/g;function dl(r){switch(r){case"<":return"%3C";case">":return"%3E";case`
`:return"%0A";case"\r":return"%0D";default:throw Error("escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}}var ka=/["';,\r\n]/g;function bs(r){switch(r){case'"':return"%22";case"'":return"%27";case";":return"%3B";case",":return"%2C";case`
`:return"%0A";case"\r":return"%0D";default:throw Error("escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}}function ro(r){this.styles.add(r)}function ao(r){this.stylesheets.add(r)}function la(r,s){s.styles.forEach(ro,r),s.stylesheets.forEach(ao,r),s.suspenseyImages&&(r.suspenseyImages=!0)}function Ac(r,s){return s?r.suspenseyImages:0<r.stylesheets.size||r.suspenseyImages}var bu=Function.prototype.bind,pl=Symbol.for("react.client.reference");function Ha(r){if(r==null)return null;if(typeof r=="function")return r.$$typeof===pl?null:r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case c:return"Fragment";case d:return"Profiler";case u:return"StrictMode";case E:return"Suspense";case _:return"SuspenseList";case w:return"Activity";case k:return"ViewTransition"}if(typeof r=="object")switch(r.$$typeof){case o:return"Portal";case g:return r.displayName||"Context";case p:return(r._context.displayName||"Context")+".Consumer";case S:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case x:return s=r.displayName||null,s!==null?s:Ha(r.type)||"Memo";case R:s=r._payload,r=r._init;try{return Ha(r(s))}catch{}}return null}var ca={},Ga=null;function gl(r,s){if(r!==s){r.context._currentValue=r.parentValue,r=r.parent;var f=s.parent;if(r===null){if(f!==null)throw Error(t(401))}else{if(f===null)throw Error(t(401));gl(r,f)}s.context._currentValue=s.value}}function ml(r){r.context._currentValue=r.parentValue,r=r.parent,r!==null&&ml(r)}function Eu(r){var s=r.parent;s!==null&&Eu(s),r.context._currentValue=r.value}function so(r,s){if(r.context._currentValue=r.parentValue,r=r.parent,r===null)throw Error(t(402));r.depth===s.depth?gl(r,s):so(r,s)}function Tu(r,s){var f=s.parent;if(f===null)throw Error(t(402));r.depth===f.depth?gl(r,f):Tu(r,f),s.context._currentValue=s.value}function Or(r){var s=Ga;s!==r&&(s===null?Eu(r):r===null?ml(s):s.depth===r.depth?gl(s,r):s.depth>r.depth?so(s,r):Tu(s,r),Ga=r)}var a={enqueueSetState:function(r,s){r=r._reactInternals,r.queue!==null&&r.queue.push(s)},enqueueReplaceState:function(r,s){r=r._reactInternals,r.replace=!0,r.queue=[s]},enqueueForceUpdate:function(){}},l={id:1,overflow:""};function h(r){var s=r.overflow;return r=r.id,(r&~(1<<32-T(r)-1)).toString(32)+s}function v(r,s,f){var m=r.id;r=r.overflow;var b=32-T(m)-1;m&=~(1<<b),f+=1;var I=32-T(s)+b;if(30<I){var X=b-b%5;return I=(m&(1<<X)-1).toString(32),m>>=X,b-=X,{id:1<<32-T(s)+b|f<<b|m,overflow:I+r}}return{id:1<<I|f<<b|m,overflow:r}}var T=Math.clz32?Math.clz32:he,U=Math.log,$=Math.LN2;function he(r){return r>>>=0,r===0?32:31-(U(r)/$|0)|0}function re(){}var oe=Error(t(460));function Le(r,s,f){switch(f=r[f],f===void 0?r.push(s):f!==s&&(s.then(re,re),s=f),s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,r===void 0&&!("reason"in s)?Error(t(600)):r;default:switch(typeof s.status=="string"?s.then(re,re):(r=s,r.status="pending",r.then(function(m){if(s.status==="pending"){var b=s;b.status="fulfilled",b.value=m}},function(m){if(s.status==="pending"){var b=s;b.status="rejected",b.reason=m}})),s.status){case"fulfilled":return s.value;case"rejected":throw s.reason}throw De=s,oe}}var De=null;function Je(){if(De===null)throw Error(t(459));var r=De;return De=null,r}function Ye(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var et=typeof Object.is=="function"?Object.is:Ye,ht=null,an=null,Vt=null,hn=null,In=null,mt=null,Ct=!1,Xt=!1,ln=0,ri=0,Ot=-1,Sn=0,xn=null;function Zn(r){if(r=r._reason,typeof r=="function")try{var s=r()}catch{s="The reason for browser-only rendering could not be determined because its initializer threw."}else s=r;return s=Error(t(603),r===void 0?void 0:{cause:s}),Object.defineProperty(s,C,{value:!0}),s}function dn(r){return typeof r!="object"||r===null?!1:r[C]===!0}function ci(r){var s=Error(t(604),P.call(r,"cause")?{cause:r.cause}:void 0);if(r=r.stack,r!==void 0){var f=r.indexOf(`
`);s.stack=s.name+": "+s.message+(f===-1?"":r.slice(f))}else s.stack=void 0;return s}var gn=null,sr=0;function kn(){if(ht===null)throw Error(t(321));return ht}function Gn(){if(0<sr)throw Error(t(312));return{memoizedState:null,queue:null,next:null}}function Br(){return mt===null?In===null?(Ct=!1,In=mt=Gn()):(Ct=!0,mt=In):mt.next===null?(Ct=!1,mt=mt.next=Gn()):(Ct=!0,mt=mt.next),mt}function An(){var r=xn;return xn=null,r}function yi(){hn=Vt=an=ht=null,Xt=!1,In=null,sr=0,mt=gn=null}function Qn(r,s){return typeof s=="function"?s(r):s}function Ni(r,s,f){if(ht=kn(),mt=Br(),Ct){var m=mt.queue;if(s=m.dispatch,gn!==null&&(f=gn.get(m),f!==void 0)){gn.delete(m),m=mt.memoizedState;do m=r(m,f.action),f=f.next;while(f!==null);return mt.memoizedState=m,[m,s]}return[mt.memoizedState,s]}return r=r===Qn?typeof s=="function"?s():s:f!==void 0?f(s):s,mt.memoizedState=r,r=mt.queue={last:null,dispatch:null},r=r.dispatch=xr.bind(null,ht,r),[mt.memoizedState,r]}function Xi(r,s){if(ht=kn(),mt=Br(),s=s===void 0?null:s,mt!==null){var f=mt.memoizedState;if(f!==null&&s!==null){var m=f[1];e:if(m===null)m=!1;else{for(var b=0;b<m.length&&b<s.length;b++)if(!et(s[b],m[b])){m=!1;break e}m=!0}if(m)return f[0]}}return r=r(),mt.memoizedState=[r,s],r}function xr(r,s,f){if(25<=sr)throw Error(t(301));if(r===ht)if(Xt=!0,r={action:f,next:null},gn===null&&(gn=new Map),f=gn.get(s),f===void 0)gn.set(s,r);else{for(s=f;s.next!==null;)s=s.next;s.next=r}}function Rn(){throw Error(t(440))}function zr(){throw Error(t(394))}function Va(){throw Error(t(479))}function or(r,s,f){kn();var m=ri++,b=Vt;if(typeof r.$$FORM_ACTION=="function"){var I=null,X=hn;b=b.formState;var Z=r.$$IS_SIGNATURE_EQUAL;if(b!==null&&typeof Z=="function"){var j=b[1];Z.call(r,b[2],b[3])&&(I=f!==void 0?"p"+f:"k"+z(JSON.stringify([X,null,m]),0),j===I&&(Ot=m,s=b[0]))}var ee=r.bind(null,s);return r=function(Ce){ee(Ce)},typeof ee.$$FORM_ACTION=="function"&&(r.$$FORM_ACTION=function(Ce){Ce=ee.$$FORM_ACTION(Ce),f!==void 0&&(f+="",Ce.action=f);var He=Ce.data;return He&&(I===null&&(I=f!==void 0?"p"+f:"k"+z(JSON.stringify([X,null,m]),0)),He.append("$ACTION_KEY",I)),Ce}),[s,r,!1]}var be=r.bind(null,s);return[s,function(Ce){be(Ce)},!1]}function kr(r){var s=Sn;return Sn+=1,xn===null&&(xn=[]),Le(xn,r,s)}function oo(){throw Error(t(393))}var Wa={readContext:function(r){return r._currentValue},use:function(r){if(r!==null&&typeof r=="object"){if(typeof r.then=="function")return kr(r);if(r.$$typeof===C)throw Zn(r);if(r.$$typeof===g)return r._currentValue}throw Error(t(438,String(r)))},useContext:function(r){return kn(),r._currentValue},useMemo:Xi,useReducer:Ni,useRef:function(r){ht=kn(),mt=Br();var s=mt.memoizedState;return s===null?(r={current:r},mt.memoizedState=r):s},useState:function(r){return Ni(Qn,r)},useInsertionEffect:re,useLayoutEffect:re,useCallback:function(r,s){return Xi(function(){return r},s)},useImperativeHandle:re,useEffect:re,useDebugValue:re,useDeferredValue:function(r,s){return kn(),s!==void 0?s:r},useTransition:function(){return kn(),[!1,zr]},useId:function(){var r=h(an.treeContext),s=Hr;if(s===null)throw Error(t(404));var f=ln++;return it(s,r,f)},useSyncExternalStore:function(r,s,f){if(f===void 0)throw Error(t(407));return f()},useOptimistic:function(r){return kn(),[r,Va]},useActionState:or,useFormState:or,useHostTransitionStatus:function(){return kn(),Y},useMemoCache:function(r){for(var s=Array(r),f=0;f<r;f++)s[f]=O;return s},useCacheRefresh:function(){return oo},useEffectEvent:function(){return Rn}},Hr=null,vl={getCacheForType:function(){throw Error(t(248))},cacheSignal:function(){throw Error(t(248))}},Yi,ai;function Mr(r){if(Yi===void 0)try{throw Error()}catch(f){var s=f.stack.trim().match(/\n( *(at )?)/);Yi=s&&s[1]||"",ai=-1<f.stack.indexOf(`
    at`)?" (<anonymous>)":-1<f.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Yi+r+ai}var Xa=!1;function yr(r,s){if(!r||Xa)return"";Xa=!0;var f=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var m={DetermineComponentFrameRoot:function(){try{if(s){var Ce=function(){throw Error()};if(Object.defineProperty(Ce.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ce,[])}catch(tt){var He=tt}Reflect.construct(r,[],Ce)}else{try{Ce.call()}catch(tt){He=tt}Ce=!1;try{var Ve=Object.getOwnPropertyDescriptor(r.prototype,"props");Object.defineProperty(r.prototype,"props",{configurable:!0,set:function(){throw Error()}}),Ce=!0,new r}finally{Ce&&(Ve!==void 0?Object.defineProperty(r.prototype,"props",Ve):delete r.prototype.props)}}}else{try{throw Error()}catch(tt){He=tt}(Ce=r())&&typeof Ce.catch=="function"&&Ce.catch(function(){})}}catch(tt){if(tt&&He&&typeof tt.stack=="string")return[tt.stack,He.stack]}return[null,null]}};m.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var b=Object.getOwnPropertyDescriptor(m.DetermineComponentFrameRoot,"name");b&&b.configurable&&Object.defineProperty(m.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var I=m.DetermineComponentFrameRoot(),X=I[0],Z=I[1];if(X&&Z){var j=X.split(`
`),ee=Z.split(`
`);for(b=m=0;m<j.length&&!j[m].includes("DetermineComponentFrameRoot");)m++;for(;b<ee.length&&!ee[b].includes("DetermineComponentFrameRoot");)b++;if(m===j.length||b===ee.length)for(m=j.length-1,b=ee.length-1;1<=m&&0<=b&&j[m]!==ee[b];)b--;for(;1<=m&&0<=b;m--,b--)if(j[m]!==ee[b]){if(m!==1||b!==1)do if(m--,b--,0>b||j[m]!==ee[b]){var be=`
`+j[m].replace(" at new "," at ");return r.displayName&&be.includes("<anonymous>")&&(be=be.replace("<anonymous>",r.displayName)),be}while(1<=m&&0<=b);break}}}finally{Xa=!1,Error.prepareStackTrace=f}return(f=r?r.displayName||r.name:"")?Mr(f):""}function lo(r){if(typeof r=="string")return Mr(r);if(typeof r=="function")return r.prototype&&r.prototype.isReactComponent?yr(r,!0):yr(r,!1);if(typeof r=="object"&&r!==null){switch(r.$$typeof){case S:return yr(r.render,!1);case x:return yr(r.type,!1);case R:var s=r,f=s._payload;s=s._init;try{r=s(f)}catch{return Mr("Lazy")}return lo(r)}if(typeof r.name=="string"){e:{f=r.name,s=r.env;var m=r.debugLocation;if(m!=null&&(r=Error.prepareStackTrace,Error.prepareStackTrace=void 0,m=m.stack,Error.prepareStackTrace=r,m.startsWith(`Error: react-stack-top-frame
`)&&(m=m.slice(29)),r=m.indexOf(`
`),r!==-1&&(m=m.slice(r+1)),r=m.indexOf("react_stack_bottom_frame"),r!==-1&&(r=m.lastIndexOf(`
`,r)),r=r!==-1?m=m.slice(0,r):"",m=r.lastIndexOf(`
`),r=m===-1?r:r.slice(m+1),r.indexOf(f)!==-1)){f=`
`+r;break e}f=Mr(f+(s?" ["+s+"]":""))}return f}}switch(r){case _:return Mr("SuspenseList");case E:return Mr("Suspense");case k:return Mr("ViewTransition")}return""}function Zi(r,s){return r=r==null||typeof r=="string"?r:r.default,s=s==null||typeof s=="string"?s:s.default,s==null?r==="auto"?null:r:s==="auto"?null:s}function Ui(r,s){return(500<s.byteSize||Ac(s.contentState,!1)||s.defer)&&s.preamble===null}function Ya(r){if(typeof r=="object"&&r!==null&&typeof r.environmentName=="string"){var s=r.environmentName;r=[r].slice(0),typeof r[0]=="string"?r.splice(0,1,"%c%s%c "+r[0],"background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px"," "+s+" ",""):r.splice(0,0,"%c%s%c","background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px"," "+s+" ",""),r.unshift(console),s=bu.apply(console.error,r),s()}else console.error(r);return null}function Gr(r,s,f,m,b,I,X,Z,j,ee,be){var Ce=new Set;this.destination=null,this.flushScheduled=!1,this.resumableState=r,this.renderState=s,this.rootFormatContext=f,this.progressiveChunkSize=m===void 0?12800:m,this.status=10,this.fatalError=null,this.aborted=!1,this.pendingRootTasks=this.allPendingTasks=this.nextSegmentId=0,this.completedPreambleSegments=this.completedRootSegment=null,this.byteSize=0,this.abortableTasks=Ce,this.pingedTasks=[],this.currentTask=null,this.clientRenderedBoundaries=[],this.completedBoundaries=[],this.partialBoundaries=[],this.postponedState=this.trackedPostpones=null,this.onError=b===void 0?Ya:b,this.onBrowserBailout=I===void 0?re:I,this.onAllReady=X===void 0?re:X,this.onShellReady=Z===void 0?re:Z,this.onShellError=j===void 0?re:j,this.onFatalError=ee===void 0?re:ee,this.renderLifetimeController=null,this.formState=be===void 0?null:be}function ua(r,s,f,m,b,I,X,Z,j,ee,be,Ce){return s=new Gr(s,f,m,b,I,X,Z,j,ee,be,Ce),f=Ji(s,0,null,m,!1,!1),f.parentFlushed=!0,r=da(s,null,r,-1,null,f,null,null,s.abortableTasks,null,m,null,l,null,null),Si(r),s.pingedTasks.push(r),s}function Sr(r,s,f,m,b,I,X,Z,j,ee,be){return r=ua(r,s,f,m,b,I,X,Z,j,ee,be,void 0),r.trackedPostpones={workingMap:new Map,rootNodes:[],rootSlots:null},r}function Za(r,s,f,m,b,I,X,Z,j){return f=new Gr(s.resumableState,f,s.rootFormatContext,s.progressiveChunkSize,m,b,I,X,Z,j,null),f.nextSegmentId=s.nextSegmentId,typeof s.replaySlots=="number"?(m=Ji(f,0,null,s.rootFormatContext,!1,!1),m.parentFlushed=!0,r=da(f,null,r,-1,null,m,null,null,f.abortableTasks,null,s.rootFormatContext,null,l,null,null),Si(r),f.pingedTasks.push(r),f):(r=Fi(f,null,{nodes:s.replayNodes,slots:s.replaySlots,pendingTasks:0},r,-1,null,null,f.abortableTasks,null,s.rootFormatContext,null,l,null,null),Si(r),f.pingedTasks.push(r),f)}function fa(r,s,f,m,b,I,X,Z,j){return r=Za(r,s,f,m,b,I,X,Z,j),r.trackedPostpones={workingMap:new Map,rootNodes:[],rootSlots:null},r}var $t=null;function ha(r,s){r.pingedTasks.push(s),r.pingedTasks.length===1&&(r.flushScheduled=r.destination!==null,r.trackedPostpones!==null||r.status===10?_e(function(){return xl(r)}):W(function(){return xl(r)}))}function Vr(r,s,f,m,b){return f={status:0,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,row:s,completedSegments:[],byteSize:0,defer:b,fallbackAbortableTasks:f,errorDigest:null,contentState:Ec(),fallbackState:Ec(),preamble:m,tracked:null},s!==null&&(s.pendingTasks++,m=s.boundaries,m!==null&&(r.allPendingTasks++,f.pendingTasks++,m.push(f)),r=s.inheritedHoistables,r!==null&&la(f.contentState,r)),f}function da(r,s,f,m,b,I,X,Z,j,ee,be,Ce,He,Ve,tt){r.allPendingTasks++,b===null?r.pendingRootTasks++:b.pendingTasks++,Ve!==null&&Ve.pendingTasks++;var Et={replay:null,node:f,childIndex:m,ping:{resolve:function(){return ha(r,Et)},reject:function(Dn){r.aborted?Et.abortSet.delete(Et)&&Ar(Et,r,Dn):ha(r,Et)}},blockedBoundary:b,blockedSegment:I,blockedPreamble:X,hoistableState:Z,abortSet:j,keyPath:ee,formatContext:be,context:Ce,treeContext:He,row:Ve,componentStack:tt,thenableState:s};return j.add(Et),Et}function Fi(r,s,f,m,b,I,X,Z,j,ee,be,Ce,He,Ve){r.allPendingTasks++,I===null?r.pendingRootTasks++:I.pendingTasks++,He!==null&&He.pendingTasks++,f.pendingTasks++;var tt={replay:f,node:m,childIndex:b,ping:{resolve:function(){return ha(r,tt)},reject:function(Et){r.aborted?tt.abortSet.delete(tt)&&Ar(tt,r,Et):ha(r,tt)}},blockedBoundary:I,blockedSegment:null,blockedPreamble:null,hoistableState:X,abortSet:Z,keyPath:j,formatContext:ee,context:be,treeContext:Ce,row:He,componentStack:Ve,thenableState:s};return Z.add(tt),tt}function Ji(r,s,f,m,b,I){return{status:0,parentFlushed:!1,id:-1,index:s,chunks:[],children:[],preambleChildren:[],parentFormatContext:m,boundary:f,lastPushedText:b,textEmbedded:I}}function Si(r){var s=r.node;typeof s=="object"&&s!==null&&s.$$typeof===n&&(r.componentStack={parent:r.componentStack,type:s.type})}function br(r){return r===null?null:{parent:r.parent,type:"Suspense Fallback"}}function qt(r){var s={};return r&&Object.defineProperty(s,"componentStack",{configurable:!0,enumerable:!0,get:function(){try{var f="",m=r;do f+=lo(m.type),m=m.parent;while(m);var b=f}catch(I){b=`
Error generating stack: `+I.message+`
`+I.stack}return Object.defineProperty(s,"componentStack",{value:b}),b}}),s}function pn(r,s,f){if(dn(s))return r=r.onBrowserBailout,r(s,f),"";if(r=r.onError,s=r(s,f),s==null||typeof s=="string")return s===""?void 0:s}function qn(r,s){var f=r.onShellError,m=r.onFatalError;r.pendingRootTasks!==0&&f(s),m(s),ts(r),r.destination!==null?(r.status=13,me(r.destination,s)):(r.status=12,r.aborted||(r.fatalError=s))}function Vn(r,s){pa(r,s.next,s.hoistables)}function pa(r,s,f){for(;s!==null;){f!==null&&(la(s.hoistables,f),s.inheritedHoistables=f);var m=s.boundaries;if(m!==null){s.boundaries=null;for(var b=0;b<m.length;b++){var I=m[b];f!==null&&la(I.contentState,f),qi(r,I,null,null)}}if(s.pendingTasks--,0<s.pendingTasks)break;f=s.hoistables,s=s.next}}function ga(r,s){var f=s.boundaries;if(f!==null&&s.pendingTasks===f.length){for(var m=!0,b=0;b<f.length;b++){var I=f[b];if(I.pendingTasks!==1||I.parentFlushed||Ui(r,I)){m=!1;break}}m&&pa(r,s,s.hoistables)}}function ma(r){var s={pendingTasks:1,boundaries:null,hoistables:Ec(),inheritedHoistables:null,together:!1,next:null};return r!==null&&0<r.pendingTasks&&(s.pendingTasks++,s.boundaries=[],r.next=s),s}function co(r,s,f,m,b){var I=s.keyPath,X=s.treeContext,Z=s.row;s.keyPath=f,f=m.length;var j=null;if(s.replay!==null){var ee=s.replay.slots;if(ee!==null&&typeof ee=="object")for(var be=0;be<f;be++){var Ce=b!=="backwards"&&b!=="unstable_legacy-backwards"?be:f-1-be,He=m[Ce];s.row=j=ma(j),s.treeContext=v(X,f,Ce);var Ve=ee[Ce];typeof Ve=="number"?(Qi(r,s,Ve,He,Ce),delete ee[Ce]):bn(r,s,He,Ce),--j.pendingTasks===0&&Vn(r,j)}else for(ee=0;ee<f;ee++)be=b!=="backwards"&&b!=="unstable_legacy-backwards"?ee:f-1-ee,Ce=m[be],s.row=j=ma(j),s.treeContext=v(X,f,be),bn(r,s,Ce,be),--j.pendingTasks===0&&Vn(r,j)}else if(b!=="backwards"&&b!=="unstable_legacy-backwards")for(b=0;b<f;b++)ee=m[b],s.row=j=ma(j),s.treeContext=v(X,f,b),bn(r,s,ee,b),--j.pendingTasks===0&&Vn(r,j);else{for(ee=s.blockedSegment,be=ee.children.length,Ce=ee.chunks.length,He=0;He<f;He++){Ve=b==="unstable_legacy-backwards"?f-1-He:He;var tt=m[Ve];s.row=j=ma(j),s.treeContext=v(X,f,Ve);var Et=Ji(r,Ce,null,s.formatContext,Ve===0?ee.lastPushedText:!0,!0);ee.children.splice(be,0,Et),s.blockedSegment=Et;try{bn(r,s,tt,Ve),Et.lastPushedText&&Et.textEmbedded&&Et.chunks.push(Me),Et.status=1,Ts(r,s.blockedBoundary,Et),--j.pendingTasks===0&&Vn(r,j)}catch(Dn){throw Et.status=r.aborted?3:4,Dn}}s.blockedSegment=ee,ee.lastPushedText=!1}Z!==null&&j!==null&&0<j.pendingTasks&&(Z.pendingTasks++,j.next=Z),s.treeContext=X,s.row=Z,s.keyPath=I}function Ki(r,s,f,m,b,I){var X=s.thenableState;for(s.thenableState=null,ht={},an=s,Vt=r,hn=f,ri=ln=0,Ot=-1,Sn=0,xn=X,r=m(b,I);Xt;)Xt=!1,ri=ln=0,Ot=-1,Sn=0,sr+=1,mt=null,r=m(b,I);return yi(),r}function Ja(r,s,f,m,b,I,X){var Z=!1;if(I!==0&&r.formState!==null){var j=s.blockedSegment;if(j!==null){Z=!0,j=j.chunks;for(var ee=0;ee<I;ee++)ee===X?j.push(le):j.push(ce)}}I=s.keyPath,s.keyPath=f,b?(f=s.treeContext,s.treeContext=v(f,1,0),bn(r,s,m,-1),s.treeContext=f):Z?bn(r,s,m,-1):Wn(r,s,m,-1),s.keyPath=I}function Er(r,s,f,m,b,I){if(typeof m=="function")if(m.prototype&&m.prototype.isReactComponent){var X=b;if("ref"in b){X={};for(var Z in b)Z!=="ref"&&(X[Z]=b[Z])}var j=m.defaultProps;if(j){X===b&&(X=ve({},X,b));for(var ee in j)X[ee]===void 0&&(X[ee]=j[ee])}var be=X,Ce=ca,He=m.contextType;typeof He=="object"&&He!==null&&(Ce=He._currentValue);var Ve=new m(be,Ce),tt=Ve.state!==void 0?Ve.state:null;Ve.updater=a,Ve.props=be,Ve.state=tt;var Et={queue:[],replace:!1};Ve._reactInternals=Et;var Dn=m.contextType;Ve.context=typeof Dn=="object"&&Dn!==null?Dn._currentValue:ca;var jn=m.getDerivedStateFromProps;if(typeof jn=="function"){var cn=jn(be,tt),Ei=cn==null?tt:ve({},tt,cn);Ve.state=Ei}if(typeof m.getDerivedStateFromProps!="function"&&typeof Ve.getSnapshotBeforeUpdate!="function"&&(typeof Ve.UNSAFE_componentWillMount=="function"||typeof Ve.componentWillMount=="function")){var Oi=Ve.state;if(typeof Ve.componentWillMount=="function"&&Ve.componentWillMount(),typeof Ve.UNSAFE_componentWillMount=="function"&&Ve.UNSAFE_componentWillMount(),Oi!==Ve.state&&a.enqueueReplaceState(Ve,Ve.state,null),Et.queue!==null&&0<Et.queue.length){var Bi=Et.queue,Mt=Et.replace;if(Et.queue=null,Et.replace=!1,Mt&&Bi.length===1)Ve.state=Bi[0];else{for(var En=Mt?Bi[0]:Ve.state,zi=!0,pi=Mt?1:0;pi<Bi.length;pi++){var Nn=Bi[pi],$n=typeof Nn=="function"?Nn.call(Ve,En,be,void 0):Nn;$n!=null&&(zi?(zi=!1,En=ve({},En,$n)):ve(En,$n))}Ve.state=En}}else Et.queue=null}var Cr=Ve.render();if(r.aborted)throw null;var Jn=s.keyPath;s.keyPath=f,Wn(r,s,Cr,-1),s.keyPath=Jn}else{var ki=Ki(r,s,f,m,b,void 0);if(r.aborted)throw null;Ja(r,s,f,ki,ln!==0,ri,Ot)}else if(typeof m=="string"){var Cn=s.blockedSegment;if(Cn===null){var Jr=b.children,ji=s.formatContext,Un=s.keyPath;s.formatContext=Oe(ji,m,b),s.keyPath=f,bn(r,s,Jr,-1),s.formatContext=ji,s.keyPath=Un}else{var ya=hi(Cn.chunks,m,b,r.resumableState,r.renderState,s.blockedPreamble,s.hoistableState,s.formatContext,Cn.lastPushedText);Cn.lastPushedText=!1;var Kr=s.formatContext,Pr=s.keyPath;if(s.keyPath=f,(s.formatContext=Oe(Kr,m,b)).insertionMode===3){var Ti=Ji(r,0,null,s.formatContext,!1,!1);Cn.preambleChildren.push(Ti),s.blockedSegment=Ti;try{bn(r,s,ya,-1),Ti.lastPushedText&&Ti.textEmbedded&&Ti.chunks.push(Me),Ti.status=1,Ts(r,s.blockedBoundary,Ti)}finally{s.blockedSegment=Cn}}else bn(r,s,ya,-1);s.formatContext=Kr,s.keyPath=Pr;e:{var Cc=Cn.chunks,Sl=r.resumableState;switch(m){case"title":case"style":case"script":case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"input":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":break e;case"body":if(1>=Kr.insertionMode){Sl.hasBody=!0;break e}break;case"html":if(Kr.insertionMode===0){Sl.hasHtml=!0;break e}break;case"head":if(1>=Kr.insertionMode)break e}Cc.push(ti(m))}Cn.lastPushedText=!1}}else{switch(m){case M:case u:case d:case c:var xo=s.keyPath;s.keyPath=f,Wn(r,s,b.children,-1),s.keyPath=xo;return;case w:var gi=s.blockedSegment;if(gi===null){if(b.mode!=="hidden"){var Au=s.keyPath;s.keyPath=f,bn(r,s,b.children,-1),s.keyPath=Au}}else if(b.mode!=="hidden"){gi.chunks.push(ni),gi.lastPushedText=!1;var Mo=s.keyPath;s.keyPath=f,bn(r,s,b.children,-1),s.keyPath=Mo,gi.chunks.push(rr),gi.lastPushedText=!1}return;case _:e:{var Sa=b.children,As=b.revealOrder;if(As!=="independent"&&As!=="together"){if(y(Sa)){co(r,s,f,Sa,As);break e}var Pc=D(Sa);if(Pc){var bl=Pc.call(Sa);if(bl){var El=bl.next();if(!El.done){do El=bl.next();while(!El.done);co(r,s,f,Sa,As)}break e}}}if(As==="together"){var Ru=s.keyPath,ba=s.row,wi=s.row=ma(null);wi.boundaries=[],wi.together=!0,s.keyPath=f,Wn(r,s,Sa,-1),--wi.pendingTasks===0&&Vn(r,wi),s.keyPath=Ru,s.row=ba,ba!==null&&0<wi.pendingTasks&&(ba.pendingTasks++,wi.next=ba)}else{var Cu=s.keyPath;s.keyPath=f,Wn(r,s,Sa,-1),s.keyPath=Cu}}return;case k:var Qr=s.formatContext,yo=s.keyPath,Pu=r.resumableState;if(b.name!=null&&b.name!=="auto")var Ea=b.name;else{var So=h(s.treeContext);Ea=it(Pu,So,0)}var bo=Ea,ns=r.resumableState,Ta=Zi(b.default,b.update),$i=Zi(b.default,b.enter),Rs=Zi(b.default,b.exit),is=Zi(b.default,b.share),Lr=b.name;if(Ta==null&&(Ta="auto"),$i==null&&($i="auto"),Rs==null&&(Rs="auto"),Lr==null){var Tl=Qr.viewTransition;Tl!==null?(Lr=Tl.name,is=Tl.share):(Lr="auto",is="none")}else is==null&&(is="auto"),Qr.tagScope&4&&(ns.instructions|=128);Qr.tagScope&8?ns.instructions|=128:Rs="none",Qr.tagScope&16?ns.instructions|=128:$i="none";var wl={update:Ta,enter:$i,exit:Rs,share:is,parentEnter:"none",parentExit:"none",name:Lr,autoName:bo,nameIdx:0},Cs=Qr.tagScope&-25;Cs=Ta!=="none"?Cs|32:Cs&-33,$i!=="none"&&(Cs|=64);var Eo=we(Qr.insertionMode,Qr.selectedValue,Cs,wl);if(s.formatContext=Eo,s.keyPath=f,b.name!=null&&b.name!=="auto")Wn(r,s,b.children,-1);else{var Lc=s.treeContext;s.treeContext=v(Lc,1,0),bn(r,s,b.children,-1),s.treeContext=Lc}s.formatContext=Qr,s.keyPath=yo;return;case N:throw Error(t(343));case E:e:if(s.replay!==null){var To=s.keyPath,Ps=s.formatContext,Lu=s.row;s.keyPath=f,s.formatContext=at(r.resumableState,Ps),s.row=null;var Iu=b.children;try{bn(r,s,Iu,-1)}finally{s.keyPath=To,s.formatContext=Ps,s.row=Lu}}else{var Du=s.keyPath,Al=s.formatContext,qr=s.row,Ic=s.blockedBoundary,Nu=s.blockedPreamble,Vf=s.hoistableState,er=s.blockedSegment,wo=b.fallback,Ls=b.children,rs=new Set,mn=Vr(r,s.row,rs,2>s.formatContext.insertionMode?{content:J(),fallback:J()}:null,!1),tr=Ji(r,er.chunks.length,mn,s.formatContext,!1,!1);er.children.push(tr),er.lastPushedText=!1;var Hi=Ji(r,0,null,s.formatContext,!1,!1);Hi.parentFlushed=!0;var Rl=r.trackedPostpones;if(Rl!==null){var Uu=s.componentStack,Is=[f[0],"Suspense Fallback",f[2]];if(Rl!==null){var Dc=[Is[1],Is[2],[],null];Rl.workingMap.set(Is,Dc),mn.tracked={contentKeyPath:f,fallbackNode:Dc}}s.blockedSegment=tr,s.blockedPreamble=mn.preamble===null?null:mn.preamble.fallback,s.keyPath=Is,s.formatContext=Re(r.resumableState,Al),s.componentStack=br(Uu);try{bn(r,s,wo,-1),tr.lastPushedText&&tr.textEmbedded&&tr.chunks.push(Me),tr.status=1,Ts(r,Ic,tr)}catch(Ul){throw tr.status=r.aborted?3:4,Ul}finally{s.blockedSegment=er,s.blockedPreamble=Nu,s.keyPath=Du,s.formatContext=Al}var Ao=da(r,null,Ls,-1,mn,Hi,mn.preamble===null?null:mn.preamble.content,mn.contentState,s.abortSet,f,at(r.resumableState,s.formatContext),s.context,s.treeContext,null,Uu);Si(Ao),r.pingedTasks.push(Ao)}else{s.blockedBoundary=mn,s.blockedPreamble=mn.preamble===null?null:mn.preamble.content,s.hoistableState=mn.contentState,s.blockedSegment=Hi,s.keyPath=f,s.formatContext=at(r.resumableState,Al),s.row=null;try{if(bn(r,s,Ls,-1),Hi.lastPushedText&&Hi.textEmbedded&&Hi.chunks.push(Me),Hi.status=1,Ts(r,mn,Hi),bi(mn,Hi),mn.pendingTasks===0&&mn.status===0){if(mn.status=1,!Ui(r,mn)){qr!==null&&--qr.pendingTasks===0&&Vn(r,qr),r.pendingRootTasks===0&&s.blockedPreamble&&Yr(r);break e}}else qr!==null&&qr.together&&ga(r,qr)}catch(Ul){if(mn.status=4,r.aborted){Hi.status=3;var Ro=r.fatalError}else Hi.status=4,Ro=Ul;var Fu=qt(s.componentStack),Cl=pn(r,Ro,Fu);mn.errorDigest=Cl,va(r,mn)}finally{s.blockedBoundary=Ic,s.blockedPreamble=Nu,s.hoistableState=Vf,s.blockedSegment=er,s.keyPath=Du,s.formatContext=Al,s.row=qr}var Pl=da(r,null,wo,-1,Ic,tr,mn.preamble===null?null:mn.preamble.fallback,mn.fallbackState,rs,[f[0],"Suspense Fallback",f[2]],Re(r.resumableState,s.formatContext),s.context,s.treeContext,s.row,br(s.componentStack));Si(Pl),r.pingedTasks.push(Pl)}}return}if(typeof m=="object"&&m!==null)switch(m.$$typeof){case S:if("ref"in b){var Ll={};for(var Il in b)Il!=="ref"&&(Ll[Il]=b[Il])}else Ll=b;var Wf=Ki(r,s,f,m.render,Ll,I);Ja(r,s,f,Wf,ln!==0,ri,Ot);return;case x:Er(r,s,f,m.type,b,I);return;case g:var Dl=b.children,Ds=s.keyPath,Ou=b.value,Ns=m._currentValue;m._currentValue=Ou;var Nl=Ga,Us={parent:Nl,depth:Nl===null?0:Nl.depth+1,context:m,parentValue:Ns,value:Ou};Ga=Us,s.context=Us,s.keyPath=f,Wn(r,s,Dl,-1);var as=Ga;if(as===null)throw Error(t(403));as.context._currentValue=as.parentValue;var Co=Ga=as.parent;s.context=Co,s.keyPath=Ds;return;case p:var Bu=b.children,ss=Bu(m._context._currentValue),zu=s.keyPath;s.keyPath=f,Wn(r,s,ss,-1),s.keyPath=zu;return;case R:var ku=m._init,Fs=ku(m._payload);if(r.aborted)throw null;Er(r,s,f,Fs,b,I);return}throw Error(t(130,m==null?m:typeof m,""))}}function Qi(r,s,f,m,b){var I=s.replay,X=s.blockedBoundary,Z=Ji(r,0,null,s.formatContext,!1,!1);Z.id=f,Z.parentFlushed=!0;try{s.replay=null,s.blockedSegment=Z,bn(r,s,m,b),Z.status=1,Ts(r,X,Z),X===null?r.completedRootSegment=Z:(bi(X,Z),X.parentFlushed&&r.partialBoundaries.push(X))}finally{s.replay=I,s.blockedSegment=null}}function Wn(r,s,f,m){s.replay!==null&&typeof s.replay.slots=="number"?Qi(r,s,s.replay.slots,f,m):(s.node=f,s.childIndex=m,f=s.componentStack,Si(s),Tr(r,s),s.componentStack=f)}function Tr(r,s){var f=s.node,m=s.childIndex;if(f!==null){if(typeof f=="object"){switch(f.$$typeof){case n:var b=f.type,I=f.key,X=f.props;f=X.ref;var Z=f!==void 0?f:null,j=Ha(b),ee=I==null||I===H?m===-1?0:m:I;if(I=[s.keyPath,j,ee],s.replay!==null)e:{var be=s.replay;for(m=be.nodes,f=0;f<m.length;f++){var Ce=m[f];if(ee===Ce[1]){if(Ce.length===4){if(j!==null&&j!==Ce[0])throw Error(t(490,Ce[0],j));var He=Ce[2],Ve=Ce[3],tt=s.node;s.replay={nodes:He,slots:Ve,pendingTasks:1};try{if(Er(r,s,I,b,X,Z),s.replay.pendingTasks===1&&0<s.replay.nodes.length)throw Error(t(488));s.replay.pendingTasks--}catch(En){if(typeof En=="object"&&En!==null&&(En===oe||typeof En.then=="function"||En.message==="Maximum call stack size exceeded"))throw s.node===tt?s.replay=be:m.splice(f,1),En;s.replay.pendingTasks--,I=qt(s.componentStack),tt=r,X=s.blockedBoundary,r=r.aborted?r.fatalError:En,I=pn(tt,r,I),wr(tt,X,He,Ve,r,I)}s.replay=be}else{if(b!==E)throw Error(t(490,"Suspense",Ha(b)||"Unknown"));t:{be=Ce[5],b=Ce[2],Z=Ce[3],j=Ce[4]===null?[]:Ce[4][2],Ce=Ce[4]===null?null:Ce[4][3],ee=s.keyPath;var Et=s.formatContext,Dn=s.row,jn=s.replay,cn=s.blockedBoundary,Ei=s.hoistableState,Oi=X.children;X=X.fallback;var Bi=new Set,Mt=Vr(r,s.row,Bi,2>s.formatContext.insertionMode?{content:J(),fallback:J()}:null,!1);Mt.parentFlushed=!0,Mt.rootSegmentID=be,s.blockedBoundary=Mt,s.hoistableState=Mt.contentState,s.keyPath=I,s.formatContext=at(r.resumableState,Et),s.row=null,s.replay={nodes:b,slots:Z,pendingTasks:1};try{if(bn(r,s,Oi,-1),s.replay.pendingTasks===1&&0<s.replay.nodes.length)throw Error(t(488));if(s.replay.pendingTasks--,Mt.pendingTasks===0&&Mt.status===0){Mt.status=1,r.completedBoundaries.push(Mt);break t}}catch(En){Mt.status=4,He=r.aborted?r.fatalError:En,Ve=qt(s.componentStack),tt=pn(r,He,Ve),Mt.errorDigest=tt,s.replay.pendingTasks--,r.clientRenderedBoundaries.push(Mt)}finally{s.blockedBoundary=cn,s.hoistableState=Ei,s.replay=jn,s.keyPath=ee,s.formatContext=Et,s.row=Dn}He=Fi(r,null,{nodes:j,slots:Ce,pendingTasks:0},X,-1,cn,Mt.fallbackState,Bi,[I[0],"Suspense Fallback",I[2]],Re(r.resumableState,s.formatContext),s.context,s.treeContext,s.row,br(s.componentStack)),Si(He),r.pingedTasks.push(He)}}m.splice(f,1);break e}}}else Er(r,s,I,b,X,Z);return;case o:throw Error(t(257));case R:if(He=f._init,f=He(f._payload),r.aborted)throw null;Wn(r,s,f,m);return}if(y(f)){Ka(r,s,f,m);return}if((He=D(f))&&(He=He.call(f))){if(f=He.next(),!f.done){Ve=[];do Ve.push(f.value),f=He.next();while(!f.done);Ka(r,s,Ve,m)}return}if(typeof f.then=="function")return s.thenableState=null,Wn(r,s,kr(f),m);if(f.$$typeof===g)return Wn(r,s,f._currentValue,m);throw m=Object.prototype.toString.call(f),Error(t(31,m==="[object Object]"?"object with keys {"+Object.keys(f).join(", ")+"}":m))}typeof f=="string"?(m=s.blockedSegment,m!==null&&(m.lastPushedText=Pe(m.chunks,f,r.renderState,m.lastPushedText))):(typeof f=="number"||typeof f=="bigint")&&(m=s.blockedSegment,m!==null&&(m.lastPushedText=Pe(m.chunks,""+f,r.renderState,m.lastPushedText)))}}function Ka(r,s,f,m){var b=s.keyPath;if(m!==-1&&(s.keyPath=[s.keyPath,"Fragment",m],s.replay!==null)){for(var I=s.replay,X=I.nodes,Z=0;Z<X.length;Z++){var j=X[Z];if(j[1]===m){m=j[2],j=j[3],s.replay={nodes:m,slots:j,pendingTasks:1};try{if(Ka(r,s,f,-1),s.replay.pendingTasks===1&&0<s.replay.nodes.length)throw Error(t(488));s.replay.pendingTasks--}catch(Ce){if(typeof Ce=="object"&&Ce!==null&&(Ce===oe||typeof Ce.then=="function"))throw Ce;s.replay.pendingTasks--;var ee=qt(s.componentStack);f=r;var be=s.blockedBoundary;r=r.aborted?r.fatalError:Ce,ee=pn(f,r,ee),wr(f,be,m,j,r,ee)}s.replay=I,X.splice(Z,1);break}}s.keyPath=b;return}if(I=s.treeContext,X=f.length,s.replay!==null&&(Z=s.replay.slots,Z!==null&&typeof Z=="object")){for(m=0;m<X;m++)j=f[m],s.treeContext=v(I,X,m),be=Z[m],typeof be=="number"?(Qi(r,s,be,j,m),delete Z[m]):bn(r,s,j,m);s.treeContext=I,s.keyPath=b;return}for(Z=0;Z<X;Z++)m=f[Z],s.treeContext=v(I,X,Z),bn(r,s,m,Z);s.treeContext=I,s.keyPath=b}function uo(r,s,f){f.status=5,f.rootSegmentID=r.nextSegmentId++;var m=f.tracked;if(m===null||(r=m.contentKeyPath,r===null))throw Error(t(486));m=m.fallbackNode;var b=[],I=s.workingMap.get(r);return I===void 0?(f=[r[1],r[2],b,null,m,f.rootSegmentID],s.workingMap.set(r,f),Rr(f,r[0],s),f):(I[4]=m,I[5]=f.rootSegmentID,I)}function _l(r,s,f,m){m.status=5;var b=f.keyPath,I=f.blockedBoundary;if(I===null)m.id=r.nextSegmentId++,s.rootSlots=m.id,r.completedRootSegment!==null&&(r.completedRootSegment.status=5);else{if(I!==null&&I.status===0){var X=uo(r,s,I);if(I.tracked!==null&&I.tracked.contentKeyPath===b&&f.childIndex===-1){m.id===-1&&(m.id=m.parentFlushed?I.rootSegmentID:r.nextSegmentId++),X[3]=m.id;return}}if(m.id===-1&&(m.id=m.parentFlushed&&I!==null?I.rootSegmentID:r.nextSegmentId++),f.childIndex===-1)b===null?s.rootSlots=m.id:(f=s.workingMap.get(b),f===void 0?(f=[b[1],b[2],[],m.id],Rr(f,b[0],s)):f[3]=m.id);else{if(b===null){if(r=s.rootSlots,r===null)r=s.rootSlots={};else if(typeof r=="number")throw Error(t(491))}else if(I=s.workingMap,X=I.get(b),X===void 0)r={},X=[b[1],b[2],[],r],I.set(b,X),Rr(X,b[0],s);else if(r=X[3],r===null)r=X[3]={};else if(typeof r=="number")throw Error(t(491));r[f.childIndex]=m.id}}}function va(r,s){r=r.trackedPostpones,r!==null&&(s=s.tracked,s!==null&&(s=s.contentKeyPath,s!==null&&(r=r.workingMap.get(s),r!==void 0&&(r.length=4,r[2]=[],r[3]=null))))}function fo(r,s,f){return Fi(r,f,s.replay,s.node,s.childIndex,s.blockedBoundary,s.hoistableState,s.abortSet,s.keyPath,s.formatContext,s.context,s.treeContext,s.row,s.componentStack)}function Wr(r,s,f){var m=s.blockedSegment,b=Ji(r,m.chunks.length,null,s.formatContext,m.lastPushedText,!0);return m.children.push(b),m.lastPushedText=!1,da(r,f,s.node,s.childIndex,s.blockedBoundary,b,s.blockedPreamble,s.hoistableState,s.abortSet,s.keyPath,s.formatContext,s.context,s.treeContext,s.row,s.componentStack)}function bn(r,s,f,m){var b=s.formatContext,I=s.context,X=s.keyPath,Z=s.treeContext,j=s.componentStack,ee=s.blockedSegment;if(ee===null){ee=s.replay;try{return Wn(r,s,f,m)}catch(He){if(yi(),f=He===oe?Je():He,!r.aborted&&typeof f=="object"&&f!==null){if(typeof f.then=="function"){m=He===oe?An():null,r=fo(r,s,m).ping,f.then(r.resolve,r.reject),s.formatContext=b,s.context=I,s.keyPath=X,s.treeContext=Z,s.componentStack=j,s.replay=ee,Or(I);return}if(f.message==="Maximum call stack size exceeded"){f=He===oe?An():null,f=fo(r,s,f),r.pingedTasks.push(f),s.formatContext=b,s.context=I,s.keyPath=X,s.treeContext=Z,s.componentStack=j,s.replay=ee,Or(I);return}}}}else{var be=ee.children.length,Ce=ee.chunks.length;try{return Wn(r,s,f,m)}catch(He){if(yi(),ee.children.length=be,ee.chunks.length=Ce,f=He===oe?Je():He,!r.aborted&&typeof f=="object"&&f!==null){if(typeof f.then=="function"){ee=f,f=He===oe?An():null,r=Wr(r,s,f).ping,ee.then(r.resolve,r.reject),s.formatContext=b,s.context=I,s.keyPath=X,s.treeContext=Z,s.componentStack=j,Or(I);return}if(f.message==="Maximum call stack size exceeded"){ee=He===oe?An():null,ee=Wr(r,s,ee),r.pingedTasks.push(ee),s.formatContext=b,s.context=I,s.keyPath=X,s.treeContext=Z,s.componentStack=j,Or(I);return}}}}throw s.formatContext=b,s.context=I,s.keyPath=X,s.treeContext=Z,Or(I),f}function Qa(r){var s=r.blockedBoundary,f=r.blockedSegment;f!==null&&(f.status=3,qi(this,s,r.row,f))}function wr(r,s,f,m,b,I){for(var X=0;X<f.length;X++){var Z=f[X];if(Z.length===4)wr(r,s,Z[2],Z[3],b,I);else{Z=Z[5];var j=r,ee=I,be=Vr(j,null,new Set,null,!1);be.parentFlushed=!0,be.rootSegmentID=Z,be.status=4,be.errorDigest=ee,be.parentFlushed&&j.clientRenderedBoundaries.push(be)}}if(f.length=0,m!==null){if(s===null)throw Error(t(487));if(s.status!==4&&(s.status=4,s.errorDigest=I,s.parentFlushed&&r.clientRenderedBoundaries.push(s)),typeof m=="object")for(var Ce in m)delete m[Ce]}}function _a(r,s){if(r!==s.currentTask){var f=r.blockedBoundary;r=r.blockedSegment,r!==null&&(r.status=3),f!==null&&f.fallbackAbortableTasks.forEach(function(m){return _a(m,s)})}}function Ar(r,s,f){if(r!==s.currentTask){var m=r.blockedBoundary,b=r.blockedSegment;if(b===null||b.status===3){var I=qt(r.componentStack),X=dn(f);if(m===null){if(m=r.replay,m===null){X||s.trackedPostpones===null||b===null?X?(r=ci(f),pn(s,r,I),s.status!==12&&s.status!==13&&qn(s,r)):(pn(s,f,I),s.status!==12&&s.status!==13&&qn(s,f)):(m=s.trackedPostpones,pn(s,f,I),_l(s,m,r,b),qi(s,null,r.row,b));return}s.status!==12&&s.status!==13&&(m.pendingTasks--,m.pendingTasks===0&&0<m.nodes.length&&(I=pn(s,f,I),wr(s,null,m.nodes,m.slots,f,I)),s.pendingRootTasks--,s.pendingRootTasks===0&&ho(s))}else{var Z=s.trackedPostpones;if(m.status!==4){if(!X&&Z!==null&&b!==null)return pn(s,f,I),_l(s,Z,r,b),m.fallbackAbortableTasks.forEach(function(j){return Ar(j,s,f)}),m.fallbackAbortableTasks.clear(),qi(s,m,r.row,b);m.status=4,I=pn(s,f,I),m.errorDigest=I,va(s,m),m.parentFlushed&&s.clientRenderedBoundaries.push(m)}m.pendingTasks--,I=m.row,I!==null&&--I.pendingTasks===0&&Vn(s,I),m.fallbackAbortableTasks.forEach(function(j){return Ar(j,s,f)}),m.fallbackAbortableTasks.clear()}r=r.row,r!==null&&--r.pendingTasks===0&&Vn(s,r),s.allPendingTasks--,s.allPendingTasks===0&&Xr(s)}}}function Es(r,s){try{var f=r.renderState,m=f.onHeaders;if(m){var b=f.headers;if(b){f.headers=null;var I=b.preconnects;if(b.fontPreloads&&(I&&(I+=", "),I+=b.fontPreloads),b.highImagePreloads&&(I&&(I+=", "),I+=b.highImagePreloads),!s){var X=f.styles.values(),Z=X.next();e:for(;0<b.remainingCapacity&&!Z.done;Z=X.next())for(var j=Z.value.sheets.values(),ee=j.next();0<b.remainingCapacity&&!ee.done;ee=j.next()){var be=ee.value,Ce=be.props,He=Ce.href,Ve=be.props,tt=no(Ve.href,"style",{crossOrigin:Ve.crossOrigin,integrity:Ve.integrity,nonce:Ve.nonce,type:Ve.type,fetchPriority:Ve.fetchPriority,referrerPolicy:Ve.referrerPolicy,media:Ve.media});if(0<=(b.remainingCapacity-=tt.length+2))f.resets.style[He]=gt,I&&(I+=", "),I+=tt,f.resets.style[He]=typeof Ce.crossOrigin=="string"||typeof Ce.integrity=="string"?[Ce.crossOrigin,Ce.integrity]:gt;else break e}}m(I?{Link:I}:{})}}}catch(Et){pn(r,Et,{})}}function ho(r){r.trackedPostpones===null&&Es(r,!0),r.trackedPostpones===null&&Yr(r),r=r.onShellReady,r()}function Xr(r){Es(r,r.trackedPostpones===null?!0:r.completedRootSegment===null||r.completedRootSegment.status!==5),Yr(r),r=r.onAllReady,r()}function bi(r,s){if(s.chunks.length===0&&s.children.length===1&&s.children[0].boundary===null&&s.children[0].id===-1){var f=s.children[0];f.id=s.id,f.parentFlushed=!0,f.status!==1&&f.status!==3&&f.status!==4||bi(r,f)}else r.completedSegments.push(s)}function Ts(r,s,f){if(Lt!==null){f=f.chunks;for(var m=0,b=0;b<f.length;b++)m+=f[b].byteLength;s===null?r.byteSize+=m:s.byteSize+=m}}function qi(r,s,f,m){if(f!==null&&(--f.pendingTasks===0?Vn(r,f):f.together&&ga(r,f)),r.allPendingTasks--,s===null){if(m!==null&&m.parentFlushed){if(r.completedRootSegment!==null)throw Error(t(389));r.completedRootSegment=m}r.pendingRootTasks--,r.pendingRootTasks===0&&ho(r)}else if(s.pendingTasks--,s.status!==4)if(s.pendingTasks===0){if(s.status===0&&(s.status=1),m!==null&&m.parentFlushed&&(m.status===1||m.status===3)&&bi(s,m),s.parentFlushed&&r.completedBoundaries.push(s),s.status===1)f=s.row,f!==null&&la(f.hoistables,s.contentState),Ui(r,s)||(r.allPendingTasks++,s.fallbackAbortableTasks.forEach(Qa,r),s.fallbackAbortableTasks.clear(),f!==null&&--f.pendingTasks===0&&Vn(r,f),r.allPendingTasks--),r.pendingRootTasks===0&&r.trackedPostpones===null&&s.preamble!==null&&Yr(r);else if(s.status===5&&(s=s.row,s!==null)){if(r.trackedPostpones!==null){f=r.trackedPostpones;var b=s.next;if(b!==null&&(m=b.boundaries,m!==null))for(b.boundaries=null,b=0;b<m.length;b++){var I=m[b];uo(r,f,I),qi(r,I,null,null)}}r.allPendingTasks++,--s.pendingTasks===0&&Vn(r,s),r.allPendingTasks--}}else m===null||!m.parentFlushed||m.status!==1&&m.status!==3||(bi(s,m),s.completedSegments.length===1&&s.parentFlushed&&r.partialBoundaries.push(s)),s=s.row,s!==null&&s.together&&ga(r,s);r.allPendingTasks===0&&Xr(r)}function xl(r){if(!(r.aborted||11<r.status)){var s=Ga,f=Dt.H;Dt.H=Wa;var m=Dt.A;Dt.A=vl;var b=$t;$t=r;var I=Hr;Hr=r.resumableState;try{var X=r.pingedTasks,Z;for(Z=0;Z<X.length;Z++){var j=X[Z],ee=r,be=j.blockedSegment;if(be===null){e:if(j.replay.pendingTasks!==0){var Ce=ee.currentTask;ee.currentTask=j,Or(j.context);var He=j.node;try{if(typeof j.replay.slots=="number"?Qi(ee,j,j.replay.slots,j.node,j.childIndex):Tr(ee,j),j.replay.pendingTasks===1&&0<j.replay.nodes.length)throw Error(t(488));j.replay.pendingTasks--,j.abortSet.delete(j),qi(ee,j.blockedBoundary,j.row,null)}catch(Un){yi();var Ve=Un===oe?Je():Un;if(ee.aborted){Un===oe&&(j.thenableState=An()),ee.currentTask=Ce;var tt=ee;_a(j,tt),j.abortSet.delete(j),Ar(j,tt,tt.fatalError)}else{if(typeof Ve=="object"&&Ve!==null){if(typeof Ve.then=="function"){var Et=j.ping;Ve.then(Et.resolve,Et.reject),j.thenableState=Un===oe?An():null;break e}if(Ve.message==="Maximum call stack size exceeded"&&j.node!==He){j.thenableState=null,ee.pingedTasks.push(j);break e}}j.replay.pendingTasks--,j.abortSet.delete(j);var Dn=qt(j.componentStack);tt=ee;var jn=j.blockedBoundary,cn=ee.aborted?ee.fatalError:Ve,Ei=j.replay.nodes,Oi=j.replay.slots,Bi=pn(tt,cn,Dn);wr(tt,jn,Ei,Oi,cn,Bi),ee.pendingRootTasks--,ee.pendingRootTasks===0&&ho(ee),ee.allPendingTasks--,ee.allPendingTasks===0&&Xr(ee)}}finally{ee.currentTask=Ce}}}else e:if(tt=be,tt.status===0){var Mt=ee.currentTask;ee.currentTask=j,Or(j.context);var En=tt.children.length,zi=tt.chunks.length,pi=j.node;try{Tr(ee,j),tt.lastPushedText&&tt.textEmbedded&&tt.chunks.push(Me),j.abortSet.delete(j),tt.status=1,Ts(ee,j.blockedBoundary,tt),qi(ee,j.blockedBoundary,j.row,tt)}catch(Un){yi(),tt.children.length=En,tt.chunks.length=zi;var Nn=Un===oe?Je():Un;if(ee.aborted)Un===oe&&(j.thenableState=An()),ee.currentTask=Mt,tt=ee,_a(j,tt),j.abortSet.delete(j),Ar(j,tt,tt.fatalError);else{if(typeof Nn=="object"&&Nn!==null){if(typeof Nn.then=="function"){tt.status=0,j.thenableState=Un===oe?An():null;var $n=j.ping;Nn.then($n.resolve,$n.reject);break e}if(Nn.message==="Maximum call stack size exceeded"&&j.node!==pi){tt.status=0,j.thenableState=null,ee.pingedTasks.push(j);break e}}var Cr=qt(j.componentStack);j.abortSet.delete(j),tt.status=4;var Jn=j.blockedBoundary,ki=j.row;if(ki!==null&&--ki.pendingTasks===0&&Vn(ee,ki),ee.allPendingTasks--,Jn===null)if(dn(Nn)){var Cn=ci(Nn);pn(ee,Cn,Cr),qn(ee,Cn)}else pn(ee,Nn,Cr),qn(ee,Nn);else{var Jr=pn(ee,Nn,Cr);if(Jn.pendingTasks--,Jn.status!==4){Jn.status=4,Jn.errorDigest=Jr,va(ee,Jn);var ji=Jn.row;ji!==null&&(ee.allPendingTasks++,--ji.pendingTasks===0&&Vn(ee,ji),ee.allPendingTasks--),Jn.parentFlushed&&ee.clientRenderedBoundaries.push(Jn),ee.pendingRootTasks===0&&ee.trackedPostpones===null&&Jn.preamble!==null&&Yr(ee)}ee.allPendingTasks===0&&Xr(ee)}}}finally{ee.currentTask=Mt}}}X.splice(0,Z),r.destination!==null&&xa(r,r.destination)}catch(Un){pn(r,Un,{}),qn(r,Un)}finally{Hr=I,Dt.H=f,Dt.A=m,f===Wa&&Or(s),$t=b}}}function qa(r,s,f){s.preambleChildren.length&&f.push(s.preambleChildren);for(var m=!1,b=0;b<s.children.length;b++)m=po(r,s.children[b],f)||m;return m}function po(r,s,f){var m=s.boundary;if(m===null)return qa(r,s,f);var b=m.preamble;if(b===null)return!1;switch(m.status){case 1:if(mr(r.renderState,b.content),r.byteSize+=m.byteSize,s=m.completedSegments[0],!s)throw Error(t(391));return qa(r,s,f);case 5:if(r.trackedPostpones!==null)return!0;case 4:if(s.status===1)return mr(r.renderState,b.fallback),qa(r,s,f);default:return!0}}function Yr(r){if(r.completedRootSegment&&r.completedPreambleSegments===null){var s=[],f=r.byteSize,m=po(r,r.completedRootSegment,s),b=r.renderState.preamble;m===!1||b.headChunks&&b.bodyChunks?r.completedPreambleSegments=s:r.byteSize=f}}function go(r,s,f,m){switch(f.parentFlushed=!0,f.status){case 0:f.id=r.nextSegmentId++;case 5:return m=f.id,f.lastPushedText=!1,f.textEmbedded=!1,r=r.renderState,V(s,vr),V(s,r.placeholderPrefix),r=Ae(m.toString(16)),V(s,r),xe(s,on);case 1:f.status=2;var b=!0,I=f.chunks,X=0;f=f.children;for(var Z=0;Z<f.length;Z++){for(b=f[Z];X<b.index;X++)V(s,I[X]);b=ws(r,s,b,m)}for(;X<I.length-1;X++)V(s,I[X]);return X<I.length&&(b=xe(s,I[X])),b;case 3:return!0;default:throw Error(t(390))}}var lr=0;function ws(r,s,f,m){var b=f.boundary;if(b===null)return go(r,s,f,m);if(f.boundary=null,b.parentFlushed=!0,b.status===4){var I=b.row;I!==null&&--I.pendingTasks===0&&Vn(r,I),b=b.errorDigest,xe(s,Mi),V(s,Nf),b!=null&&(V(s,qo),V(s,Ae(Xe(b))),V(s,Qo)),xe(s,Uf),go(r,s,f,m)}else if(b.status!==1)b.status===0&&(b.rootSegmentID=r.nextSegmentId++),0<b.completedSegments.length&&r.partialBoundaries.push(b),su(s,r.renderState,b.rootSegmentID),m&&la(m,b.fallbackState),go(r,s,f,m);else if(!$a&&Ui(r,b)&&(lr+b.byteSize>r.progressiveChunkSize||Ac(b.contentState,mo)||b.defer))b.rootSegmentID=r.nextSegmentId++,r.completedBoundaries.push(b),su(s,r.renderState,b.rootSegmentID),go(r,s,f,m);else{if(lr+=b.byteSize,m&&la(m,b.contentState),f=b.row,f!==null&&Ui(r,b)&&--f.pendingTasks===0&&Vn(r,f),xe(s,Ko),f=b.completedSegments,f.length!==1)throw Error(t(391));ws(r,s,f[0],m)}return xe(s,di)}function Ml(r,s,f,m){return oa(s,r.renderState,f.parentFormatContext,f.id),ws(r,s,f,m),qs(s,f.parentFormatContext)}function ja(r,s,f){lr=f.byteSize;for(var m=f.completedSegments,b=0;b<m.length;b++)Rc(r,s,f,m[b]);m.length=0,m=f.row,m!==null&&Ui(r,f)&&--m.pendingTasks===0&&Vn(r,m),Xn(s,f.contentState,r.renderState),m=r.resumableState,r=r.renderState,b=f.rootSegmentID,f=f.contentState;var I=r.stylesToHoist,X=(m.instructions&128)!==0;return r.stylesToHoist=!1,V(s,r.startInlineScript),V(s,yn),I?((m.instructions&4)===0&&(m.instructions|=4,V(s,gc)),(m.instructions&2)===0&&(m.instructions|=2,V(s,hu)),X&&(m.instructions&256)===0&&(m.instructions|=256,V(s,du)),(m.instructions&8)===0?(m.instructions|=8,V(s,pu)):V(s,gu)):((m.instructions&2)===0&&(m.instructions|=2,V(s,hu)),X&&(m.instructions&256)===0&&(m.instructions|=256,V(s,du)),V(s,Of)),m=Ae(b.toString(16)),V(s,r.boundaryPrefix),V(s,m),V(s,Bf),V(s,r.segmentPrefix),V(s,m),I?(V(s,mu),Su(s,f)):V(s,il),f=xe(s,zf),Ft(s,r)&&f}function Rc(r,s,f,m){if(m.status===2)return!0;var b=f.contentState,I=m.id;if(I===-1){if((m.id=f.rootSegmentID)===-1)throw Error(t(392));return Ml(r,s,m,b)}return I===f.rootSegmentID?Ml(r,s,m,b):(Ml(r,s,m,b),f=r.resumableState,r=r.renderState,V(s,r.startInlineScript),V(s,yn),(f.instructions&1)===0?(f.instructions|=1,V(s,cu)):V(s,uu),V(s,r.segmentPrefix),I=Ae(I.toString(16)),V(s,I),V(s,fu),V(s,r.placeholderPrefix),V(s,I),s=xe(s,Ff),s)}var $a=!1,mo=!1;function xa(r,s){Te=new Uint8Array(2048),ne=0;try{if(!(0<r.pendingRootTasks)){var f,m=r.completedRootSegment;if(m!==null){if(m.status===5)return;var b=r.completedPreambleSegments;if(b===null)return;lr=r.byteSize;var I=r.resumableState,X=r.renderState,Z=X.preamble,j=Z.htmlChunks,ee=Z.headChunks,be;if(j){for(be=0;be<j.length;be++)V(s,j[be]);if(ee)for(be=0;be<ee.length;be++)V(s,ee[be]);else V(s,Rt("head")),V(s,yn)}else if(ee)for(be=0;be<ee.length;be++)V(s,ee[be]);var Ce=X.charsetChunks;for(be=0;be<Ce.length;be++)V(s,Ce[be]);Ce.length=0,X.preconnects.forEach(ii,s),X.preconnects.clear();var He=X.viewportChunks;for(be=0;be<He.length;be++)V(s,He[be]);He.length=0,X.fontPreloads.forEach(ii,s),X.fontPreloads.clear(),X.highImagePreloads.forEach(ii,s),X.highImagePreloads.clear(),B=X,X.styles.forEach(ol,s),B=null;var Ve=X.importMapChunks;for(be=0;be<Ve.length;be++)V(s,Ve[be]);Ve.length=0,X.bootstrapScripts.forEach(ii,s),X.scripts.forEach(ii,s),X.scripts.clear(),X.bulkPreloads.forEach(ii,s),X.bulkPreloads.clear(),j||ee||(I.instructions|=32);var tt=X.hoistableChunks;for(be=0;be<tt.length;be++)V(s,tt[be]);for(I=tt.length=0;I<b.length;I++){var Et=b[I];for(X=0;X<Et.length;X++)ws(r,s,Et[X],null)}var Dn=r.renderState.preamble,jn=Dn.headChunks;(Dn.htmlChunks||jn)&&V(s,ti("head"));var cn=Dn.bodyChunks;if(cn)for(b=0;b<cn.length;b++)V(s,cn[b]);mo=!0,ws(r,s,m,null),mo=!1,r.completedRootSegment=null;var Ei=r.renderState;if(r.allPendingTasks!==0||r.clientRenderedBoundaries.length!==0||r.completedBoundaries.length!==0||r.trackedPostpones!==null&&(r.trackedPostpones.rootNodes.length!==0||r.trackedPostpones.rootSlots!==null)){var Oi=r.resumableState;if((Oi.instructions&64)===0){if(Oi.instructions|=64,V(s,Ei.startInlineScript),(Oi.instructions&32)===0){Oi.instructions|=32;var Bi="_"+Oi.idPrefix+"R_";V(s,cl),V(s,Ae(Xe(Bi))),V(s,Kt)}V(s,yn),V(s,wn),xe(s,ie)}}Ft(s,Ei)}var Mt=r.renderState;m=0;var En=Mt.viewportChunks;for(m=0;m<En.length;m++)V(s,En[m]);En.length=0,Mt.preconnects.forEach(ii,s),Mt.preconnects.clear(),Mt.fontPreloads.forEach(ii,s),Mt.fontPreloads.clear(),Mt.highImagePreloads.forEach(ii,s),Mt.highImagePreloads.clear(),Mt.styles.forEach(Di,s),Mt.scripts.forEach(ii,s),Mt.scripts.clear(),Mt.bulkPreloads.forEach(ii,s),Mt.bulkPreloads.clear();var zi=Mt.hoistableChunks;for(m=0;m<zi.length;m++)V(s,zi[m]);zi.length=0;var pi=r.clientRenderedBoundaries;for(f=0;f<pi.length;f++){var Nn=pi[f];Mt=s;var $n=r.resumableState,Cr=r.renderState,Jn=Nn.rootSegmentID,ki=Nn.errorDigest;V(Mt,Cr.startInlineScript),V(Mt,yn),($n.instructions&4)===0?($n.instructions|=4,V(Mt,vu)):V(Mt,Fa),V(Mt,Cr.boundaryPrefix),V(Mt,Ae(Jn.toString(16))),V(Mt,mc),ki!=null&&(V(Mt,rl),ki==null?V(Mt,_u):V(Mt,Ae(Hf(ki))));var Cn=xe(Mt,ys);if(!Cn){r.destination=null,f++,pi.splice(0,f);return}}pi.splice(0,f);var Jr=r.completedBoundaries;for(f=0;f<Jr.length;f++)if(!ja(r,s,Jr[f])){r.destination=null,f++,Jr.splice(0,f);return}Jr.splice(0,f),ut(s),Te=new Uint8Array(2048),ne=0,$a=!0;var ji=r.partialBoundaries;for(f=0;f<ji.length;f++){var Un=ji[f];e:{pi=r,Nn=s,lr=Un.byteSize;var ya=Un.completedSegments;for(Cn=0;Cn<ya.length;Cn++)if(!Rc(pi,Nn,Un,ya[Cn])){Cn++,ya.splice(0,Cn);var Kr=!1;break e}ya.splice(0,Cn);var Pr=Un.row;Pr!==null&&Pr.together&&Un.pendingTasks===1&&(Pr.pendingTasks===1?pa(pi,Pr,Pr.hoistables):Pr.pendingTasks--),Kr=Xn(Nn,Un.contentState,pi.renderState)}if(!Kr){r.destination=null,f++,ji.splice(0,f);return}}ji.splice(0,f),$a=!1;var Ti=r.completedBoundaries;for(f=0;f<Ti.length;f++)if(!ja(r,s,Ti[f])){r.destination=null,f++,Ti.splice(0,f);return}Ti.splice(0,f)}}finally{$a=!1,f=r.postponedState,f!==null&&(f.nextSegmentId=r.nextSegmentId),r.allPendingTasks===0&&r.clientRenderedBoundaries.length===0&&r.completedBoundaries.length===0?(r.flushScheduled=!1,f=r.resumableState,f.hasBody&&V(s,ti("body")),f.hasHtml&&V(s,ti("html")),ut(s),ts(r),r.status=13,s.close(),r.destination=null):ut(s)}}function yl(r){r.flushScheduled=r.destination!==null,_e(function(){return xl(r)}),W(function(){r.status===10&&(r.status=11),r.trackedPostpones===null&&Es(r,r.pendingRootTasks===0)})}function es(r){r.flushScheduled===!1&&r.pingedTasks.length===0&&r.destination!==null&&(r.flushScheduled=!0,W(function(){var s=r.destination;s?xa(r,s):r.flushScheduled=!1}))}function vo(r,s){if(r.status===12)r.status=13,r=r.fatalError,dn(r)&&(r=ci(r)),me(s,r);else if(r.status!==13&&r.destination===null){r.destination=s;try{xa(r,s)}catch(f){pn(r,f,{}),qn(r,f)}}}function _o(r,s){try{if(0<s.size){var f=r.fatalError;s.forEach(function(m){return Ar(m,r,f)}),s.clear()}r.destination!==null&&xa(r,r.destination)}catch(m){pn(r,m,{}),qn(r,m)}}function ts(r){r=r.renderLifetimeController,r!==null&&r.abort("The render ended.")}function Ma(r,s){if(s.aborted)Zr(r,s.reason);else{var f=new AbortController;r.renderLifetimeController=f,s.addEventListener("abort",function(){Zr(r,s.reason)},{signal:f.signal})}}function Zr(r,s){if(!(r.aborted||r.status!==11&&r.status!==10)){ts(r);var f=typeof s=="object"&&s!==null&&s.$$typeof===C;r.aborted=!0,s=f?Zn(s):s===void 0?Error(t(432)):typeof s=="object"&&s!==null&&typeof s.then=="function"?Error(t(530)):s,r.fatalError=s;var m=r.abortableTasks;m.forEach(function(b){return _a(b,r)}),W(function(){return _o(r,m)})}}function Rr(r,s,f){if(s===null)f.rootNodes.push(r);else{var m=f.workingMap,b=m.get(s);b===void 0&&(b=[s[1],s[2],[],null],m.set(s,b),Rr(b,s[0],f)),b[2].push(r)}}function wu(r){var s=r.trackedPostpones;if(s===null||s.rootNodes.length===0&&s.rootSlots===null)return r.trackedPostpones=null;var f=r.completedRootSegment===null||r.completedRootSegment.status!==5&&r.completedPreambleSegments!==null;if(f){var m=r.nextSegmentId,b=s.rootSlots,I=r.resumableState;I.bootstrapScriptContent=void 0,I.bootstrapScripts=void 0,I.bootstrapModules=void 0}else{m=0,b=-1,I=r.resumableState;var X=r.renderState;I.nextFormID=0,I.hasBody=!1,I.hasHtml=!1,I.unknownResources={font:X.resets.font},I.dnsResources=X.resets.dns,I.connectResources=X.resets.connect,I.imageResources=X.resets.image,I.styleResources=X.resets.style,I.scriptResources={},I.moduleUnknownResources={},I.moduleScriptResources={},I.instructions=0}return s={nextSegmentId:m,rootFormatContext:r.rootFormatContext,progressiveChunkSize:r.progressiveChunkSize,resumableState:r.resumableState,replayNodes:s.rootNodes,replaySlots:b},f&&(r.postponedState=s),s}function si(){var r=i.version;if(r!=="19.3.1")throw Error(t(527,r,"19.3.1"))}return si(),si(),zo.prerender=function(r,s){return new Promise(function(f,m){var b=s?s.onHeaders:void 0,I;b&&(I=function(j){b(new Headers(j))});var X=_t(s?s.identifierPrefix:void 0,s?s.unstable_externalRuntimeSrc:void 0,s?s.bootstrapScriptContent:void 0,s?s.bootstrapScripts:void 0,s?s.bootstrapModules:void 0),Z=Sr(r,X,lt(X,void 0,s?s.unstable_externalRuntimeSrc:void 0,s?s.importMap:void 0,I,s?s.maxHeadersLength:void 0),Se(s?s.namespaceURI:void 0),s?s.progressiveChunkSize:void 0,s?s.onError:void 0,s?s.onBrowserBailout:void 0,function(){var j=new ReadableStream({type:"bytes",pull:function(ee){vo(Z,ee)},cancel:function(ee){Z.destination=null,Zr(Z,ee)}},{highWaterMark:0});j={postponed:wu(Z),prelude:j},f(j)},void 0,void 0,m);s&&s.signal&&Ma(Z,s.signal),yl(Z)})},zo.renderToReadableStream=function(r,s){return new Promise(function(f,m){var b,I,X=new Promise(function(Ce,He){I=Ce,b=He}),Z=s?s.onHeaders:void 0,j;Z&&(j=function(Ce){Z(new Headers(Ce))});var ee=_t(s?s.identifierPrefix:void 0,s?s.unstable_externalRuntimeSrc:void 0,s?s.bootstrapScriptContent:void 0,s?s.bootstrapScripts:void 0,s?s.bootstrapModules:void 0),be=ua(r,ee,lt(ee,s?s.nonce:void 0,s?s.unstable_externalRuntimeSrc:void 0,s?s.importMap:void 0,j,s?s.maxHeadersLength:void 0),Se(s?s.namespaceURI:void 0),s?s.progressiveChunkSize:void 0,s?s.onError:void 0,s?s.onBrowserBailout:void 0,I,function(){var Ce=new ReadableStream({type:"bytes",pull:function(He){vo(be,He)},cancel:function(He){be.destination=null,Zr(be,He)}},{highWaterMark:0});Ce.allReady=X,f(Ce)},function(Ce){X.catch(function(){}),m(Ce)},b,s?s.formState:void 0);s&&s.signal&&Ma(be,s.signal),yl(be)})},zo.resume=function(r,s,f){return new Promise(function(m,b){var I,X,Z=new Promise(function(ee,be){X=ee,I=be}),j=Za(r,s,lt(s.resumableState,f?f.nonce:void 0,void 0,void 0,void 0,void 0),f?f.onError:void 0,f?f.onBrowserBailout:void 0,X,function(){var ee=new ReadableStream({type:"bytes",pull:function(be){vo(j,be)},cancel:function(be){j.destination=null,Zr(j,be)}},{highWaterMark:0});ee.allReady=Z,m(ee)},function(ee){Z.catch(function(){}),b(ee)},I);f&&f.signal&&Ma(j,f.signal),yl(j)})},zo.resumeAndPrerender=function(r,s,f){return new Promise(function(m,b){var I=fa(r,s,lt(s.resumableState,void 0,void 0,void 0,void 0,void 0),f?f.onError:void 0,f?f.onBrowserBailout:void 0,function(){var X=new ReadableStream({type:"bytes",pull:function(Z){vo(I,Z)},cancel:function(Z){I.destination=null,Zr(I,Z)}},{highWaterMark:0});X={postponed:wu(I),prelude:X},m(X)},void 0,void 0,b);f&&f.signal&&Ma(I,f.signal),yl(I)})},zo.version="19.3.1",zo}var sg;function tS(){if(sg)return Bo;sg=1;var i,e;return i=$y(),e=eS(),Bo.version=i.version,Bo.renderToString=i.renderToString,Bo.renderToStaticMarkup=i.renderToStaticMarkup,Bo.renderToReadableStream=e.renderToReadableStream,Bo.resume=e.resume,Bo}var nS=tS();function iS({kind:i,playing:e=!1}){const t=cg.useId().replace(/:/g,""),n=o=>`url(#${t}-${o})`;return fe.jsxs("svg",{className:`object-art art-${i}`,viewBox:"0 0 320 240","aria-hidden":"true",children:[fe.jsxs("defs",{children:[fe.jsxs("linearGradient",{id:`${t}-metal`,x2:".25",y2:"1",children:[fe.jsx("stop",{stopColor:"#e5d4a5"}),fe.jsx("stop",{offset:".25",stopColor:"#a58a55"}),fe.jsx("stop",{offset:".5",stopColor:"#ddc58b"}),fe.jsx("stop",{offset:"1",stopColor:"#6a5430"})]}),fe.jsxs("linearGradient",{id:`${t}-black`,x2:".5",y2:"1",children:[fe.jsx("stop",{stopColor:"#575955"}),fe.jsx("stop",{offset:".15",stopColor:"#282d2a"}),fe.jsx("stop",{offset:"1",stopColor:"#111513"})]}),fe.jsxs("linearGradient",{id:`${t}-wood`,x2:"0",y2:"1",children:[fe.jsx("stop",{stopColor:"#92684c"}),fe.jsx("stop",{offset:".16",stopColor:"#73533b"}),fe.jsx("stop",{offset:"1",stopColor:"#3f2c21"})]}),fe.jsxs("linearGradient",{id:`${t}-paper`,x2:".8",y2:"1",children:[fe.jsx("stop",{stopColor:"#f1e7cf"}),fe.jsx("stop",{offset:"1",stopColor:"#b9aa8c"})]}),fe.jsxs("radialGradient",{id:`${t}-lens`,cx:".35",cy:".3",children:[fe.jsx("stop",{stopColor:"#76978e"}),fe.jsx("stop",{offset:".28",stopColor:"#253f3e"}),fe.jsx("stop",{offset:".55",stopColor:"#121f22"}),fe.jsx("stop",{offset:".8",stopColor:"#29383c"}),fe.jsx("stop",{offset:"1",stopColor:"#080d0f"})]}),fe.jsxs("pattern",{id:`${t}-leather`,width:"4",height:"4",patternUnits:"userSpaceOnUse",children:[fe.jsx("rect",{width:"4",height:"4",fill:"#242724"}),fe.jsx("path",{d:"M0 1h2m1 2h1",stroke:"#383b34",strokeWidth:".6"})]})]}),i==="camera"&&fe.jsxs("g",{children:[fe.jsx("path",{d:"M60 131C1 157 20 228 81 215M258 136c60 29 43 88-4 77",fill:"none",stroke:"#3a2920",strokeWidth:"8"}),fe.jsx("path",{d:"M60 131C1 157 20 228 81 215",fill:"none",stroke:"#8c6744",strokeWidth:"1"}),fe.jsx("ellipse",{cx:"161",cy:"221",rx:"114",ry:"9",fill:"#080a08",opacity:".45"}),fe.jsx("rect",{x:"47",y:"103",width:"225",height:"113",rx:"11",fill:n("black"),stroke:"#72766a",strokeWidth:"1"}),fe.jsx("rect",{x:"51",y:"124",width:"217",height:"71",rx:"3",fill:n("leather")}),fe.jsx("path",{d:"M115 105l14-25h49l17 25",fill:n("black"),stroke:"#74766a"}),fe.jsx("path",{d:"M132 85h43l9 16h-62z",fill:"#51554c"}),fe.jsx("rect",{x:"61",y:"92",width:"35",height:"11",rx:"3",fill:n("metal")}),fe.jsx("rect",{x:"227",y:"94",width:"24",height:"9",rx:"3",fill:"#55594f"}),fe.jsx("path",{d:"M55 110h44m114 0h50",stroke:"#aaa990",strokeWidth:"2"}),fe.jsx("rect",{x:"67",y:"133",width:"27",height:"9",rx:"2",fill:"#c4b997"}),fe.jsx("circle",{cx:"165",cy:"162",r:"66",fill:"#111513",stroke:"#555950",strokeWidth:"2"}),fe.jsx("circle",{cx:"165",cy:"162",r:"59",fill:n("black"),stroke:"#93917c"}),Array.from({length:40},(o,c)=>fe.jsx("path",{d:"M165 102v5",stroke:"#898977",strokeWidth:"1",transform:`rotate(${c*9} 165 162)`},c)),fe.jsx("circle",{cx:"165",cy:"162",r:"48",fill:"#0c100f",stroke:"#70664f",strokeWidth:"3"}),fe.jsx("circle",{cx:"165",cy:"162",r:"41",fill:n("lens"),stroke:"#334542",strokeWidth:"2"}),fe.jsx("circle",{cx:"165",cy:"162",r:"24",fill:"#080f12",stroke:"#485b55"}),fe.jsx("path",{d:"M141 141q13-12 32-7",stroke:"#abc5af",strokeWidth:"3",opacity:".28",fill:"none"}),fe.jsx("ellipse",{cx:"181",cy:"181",rx:"12",ry:"4",fill:"#caa0b7",opacity:".12",transform:"rotate(-40 181 181)"}),fe.jsx("circle",{cx:"245",cy:"116",r:"4",fill:"#a09b80"})]}),i==="books"&&fe.jsxs("g",{children:[fe.jsx("ellipse",{cx:"153",cy:"223",rx:"132",ry:"8",fill:"#080a08",opacity:".35"}),fe.jsxs("g",{transform:"rotate(-8 94 217)",children:[fe.jsx("rect",{x:"37",y:"48",width:"48",height:"170",rx:"3",fill:"#625b40"}),fe.jsx("path",{d:"M42 49v168m38-166v166",stroke:"#aaa077",opacity:".5"}),fe.jsx("path",{d:"M43 68h35m-35 4h35m-35 123h35m-35 4h35",stroke:"#c8af73"})]}),fe.jsx("rect",{x:"91",y:"32",width:"48",height:"187",rx:"3",fill:"#623c3a"}),fe.jsx("path",{d:"M96 34v181m37-181v181M98 52h33m-33 142h33",stroke:"#ad8d68"}),fe.jsx("rect",{x:"143",y:"58",width:"31",height:"161",rx:"2",fill:"#b0a48a"}),fe.jsx("path",{d:"M148 62v152m20-152v152",stroke:"#d8c9a7"}),fe.jsxs("g",{transform:"rotate(8 215 217)",children:[fe.jsx("rect",{x:"180",y:"88",width:"83",height:"132",rx:"2",fill:n("wood")}),fe.jsx("rect",{x:"186",y:"94",width:"71",height:"120",fill:n("metal")}),fe.jsx("rect",{x:"189",y:"97",width:"65",height:"114",fill:n("paper")}),fe.jsx("rect",{x:"198",y:"109",width:"47",height:"78",fill:"#a49980"}),fe.jsx("path",{d:"M207 148h29m-14-14v28",stroke:"#c7bb9f",opacity:".6"})]})]}),i==="frames"&&fe.jsxs("g",{children:[fe.jsx("ellipse",{cx:"168",cy:"222",rx:"135",ry:"7",fill:"#080a08",opacity:".3"}),fe.jsxs("g",{transform:"rotate(-4 111 218)",children:[fe.jsx("rect",{x:"23",y:"34",width:"154",height:"183",fill:"#262a23",stroke:"#8f7148",strokeWidth:"4"}),fe.jsx("rect",{x:"31",y:"42",width:"138",height:"167",fill:n("paper")}),fe.jsx("rect",{x:"48",y:"60",width:"104",height:"120",fill:"#6b6e5d"}),fe.jsx("path",{d:"M48 180L152 60",stroke:"#c9c7a3",opacity:".12",strokeWidth:"30"}),fe.jsx("path",{d:"M48 60h104v120H48z",fill:"none",stroke:"#444b40"})]}),fe.jsxs("g",{transform:"rotate(4 222 218)",children:[fe.jsx("rect",{x:"157",y:"87",width:"135",height:"132",fill:n("wood"),stroke:"#b7a16f",strokeWidth:"2"}),fe.jsx("rect",{x:"165",y:"95",width:"119",height:"116",fill:n("paper")}),fe.jsx("rect",{x:"178",y:"108",width:"93",height:"84",fill:"#7a6558"}),fe.jsx("path",{d:"M178 192l93-84",stroke:"#ead9b1",strokeWidth:"26",opacity:".08"})]})]}),i==="paper"&&fe.jsxs("g",{transform:"rotate(-7 160 180)",children:[fe.jsx("path",{d:"M28 108l244 18 18 87-246 10z",fill:"#090b08",opacity:".3"}),fe.jsx("path",{d:"M30 102l239 14 18 90-244 8z",fill:"#9c9075"}),fe.jsx("path",{d:"M30 98l238 15 19 88-244 9z",fill:n("paper"),stroke:"#a99e81"}),fe.jsx("path",{d:"M44 198l240-8m-240 12l241-8",stroke:"#b2a78d"}),fe.jsx("path",{d:"M39 117l231 13M43 145l233 11",stroke:"#4a4b3e",strokeWidth:"1"}),fe.jsx("rect",{x:"52",y:"159",width:"64",height:"33",fill:"#8b8c74",transform:"rotate(3 52 159)"}),Array.from({length:7},(o,c)=>fe.jsx("path",{d:`M126 ${160+c*5}l140 8`,stroke:"#797b65",strokeWidth:"1",opacity:".65"},c)),fe.jsx("path",{d:"M156 108l10 96",stroke:"#998c6f",opacity:".4"})]}),i==="rocket"&&fe.jsxs("g",{children:[fe.jsx("ellipse",{cx:"157",cy:"224",rx:"91",ry:"7",fill:"#090b08",opacity:".4"}),fe.jsx("path",{d:"M103 224h112l-17-9h-80z",fill:n("wood")}),fe.jsx("path",{d:"M157 216V125",stroke:"#ac955e",strokeWidth:"4"}),fe.jsx("path",{d:"M156 213V128",stroke:"#e4cd94",strokeWidth:"1"}),fe.jsxs("g",{transform:"rotate(18 155 123)",children:[fe.jsx("path",{d:"M135 169l-23 24 3-56 20-24m40 56l23 24-3-56-20-24",fill:"#814e40",stroke:"#b78360"}),fe.jsx("path",{d:"M135 77q20-27 40 0v92h-40z",fill:n("paper"),stroke:"#8f8e78"}),fe.jsx("path",{d:"M135 77q4-36 20-59 16 23 20 59z",fill:n("metal")}),fe.jsx("path",{d:"M135 140h40v14h-40",fill:"#485447"}),fe.jsx("circle",{cx:"155",cy:"101",r:"10",fill:n("black"),stroke:n("metal"),strokeWidth:"3"}),fe.jsx("circle",{cx:"155",cy:"101",r:"5",fill:"#506b6b"}),fe.jsx("path",{d:"M138 171h34l-6 10h-21z",fill:n("black")}),fe.jsx("path",{d:"M142 80v51",stroke:"#fff3d9",opacity:".6"})]}),fe.jsx("rect",{x:"202",y:"181",width:"72",height:"36",rx:"3",fill:"#4a5145",stroke:"#86907a"}),fe.jsx("rect",{x:"210",y:"188",width:"28",height:"19",fill:"#24382f",stroke:"#b0a377"}),fe.jsx("path",{d:"M213 198h6l3-5 4 8 4-5h5",stroke:"#b8bb82",fill:"none"}),fe.jsx("circle",{cx:"252",cy:"196",r:"6",fill:n("metal")}),fe.jsx("circle",{cx:"265",cy:"205",r:"2",fill:"#b8b28b"})]}),i==="letter"&&fe.jsxs("g",{transform:"rotate(-5 150 180)",children:[fe.jsx("ellipse",{cx:"158",cy:"220",rx:"128",ry:"7",fill:"#080a08",opacity:".3"}),fe.jsx("path",{d:"M51 89l204 12-3 112-204-13z",fill:"#89806b"}),fe.jsx("path",{d:"M47 82l204 13-2 111-204-13z",fill:n("paper")}),fe.jsx("path",{d:"M46 85l98 78 106-66m-204 95l76-48m127 60l-74-52",fill:"none",stroke:"#a99a7a",strokeWidth:"1.4"}),fe.jsx("circle",{cx:"147",cy:"159",r:"17",fill:"#85483c",stroke:"#633c30",strokeWidth:"2"}),fe.jsx("circle",{cx:"147",cy:"159",r:"12",fill:"none",stroke:"#b57a58"}),fe.jsx("path",{d:"M232 203l31-112 6 2-31 112z",fill:n("metal")}),fe.jsx("path",{d:"M232 203l-1 11 7-9",fill:"#1c2725"})]}),i==="phone"&&fe.jsxs("g",{className:"phone-drawing",stroke:"#30352f",strokeWidth:"3",strokeLinejoin:"round",children:[fe.jsx("ellipse",{cx:"163",cy:"223",rx:"112",ry:"7",fill:"#19211d",opacity:".2",stroke:"none"}),fe.jsx("path",{d:"M86 143Q90 129 111 128h96q20 0 26 17l27 64q-89 23-191 0z",fill:"#92adb0"}),fe.jsx("path",{d:"M73 204q96 17 181-1l6 11q-91 22-191 0z",fill:"#607f84"}),fe.jsx("path",{d:"M105 132v-22m102 22v-22",fill:"none",strokeWidth:"8"}),fe.jsx("path",{className:"phone-cord",d:"M231 105q48 5 37 36c-20 13 22 7 5 22s19 9 1 22 18 8 0 20q-6 9-25 7",fill:"none",stroke:"#d9c5a4",strokeWidth:"4"}),fe.jsxs("g",{className:"phone-dial",children:[fe.jsx("ellipse",{cx:"162",cy:"171",rx:"45",ry:"34",fill:"#e0cfaa"}),fe.jsx("ellipse",{cx:"162",cy:"171",rx:"22",ry:"16",fill:"#8ca2a0"}),Array.from({length:10},(o,c)=>fe.jsx("ellipse",{cx:162+33*Math.cos(c*Math.PI/5),cy:171+25*Math.sin(c*Math.PI/5),rx:"5",ry:"4",fill:"#3d514e",stroke:"none"},c))]}),fe.jsxs("g",{className:"phone-receiver",children:[fe.jsx("path",{d:"M72 108Q66 67 103 62q58-21 116 0 37 5 29 46l-37 6-10-34q-40-10-78 0l-11 34z",fill:"#a9c5c5"}),fe.jsx("path",{d:"M77 101l30 5m109 0 27-5",fill:"none",stroke:"#647f80",strokeWidth:"6"}),fe.jsx("path",{d:"M104 68q59-19 111 0",fill:"none",stroke:"#dfebe0",opacity:".6"})]}),fe.jsx("g",{className:"phone-ring",fill:"none",stroke:"#e8cc8b",strokeWidth:"4",children:fe.jsx("path",{d:"M55 68l-15-7m20-7-9-15m208 29 16-7m-23-8 10-15"})})]}),i==="lamp"&&fe.jsxs("g",{children:[fe.jsx("ellipse",{cx:"178",cy:"224",rx:"75",ry:"8",fill:"#0a0c08",opacity:".4"}),fe.jsx("ellipse",{cx:"169",cy:"216",rx:"57",ry:"10",fill:n("metal")}),fe.jsx("path",{d:"M127 213q3-14 42-14 39 0 43 14",fill:n("black")}),fe.jsx("path",{d:"M169 202V113l-53-51",fill:"none",stroke:"#554a2f",strokeWidth:"9"}),fe.jsx("path",{d:"M167 199V114l-52-51",fill:"none",stroke:n("metal"),strokeWidth:"5"}),fe.jsx("circle",{cx:"168",cy:"116",r:"7",fill:n("metal")}),fe.jsx("path",{d:"M100 51q32-13 47 13l29 44q-41 8-73 32l-21-47q-10-27 18-42",fill:"#374d40",stroke:"#79806a"}),fe.jsx("path",{d:"M84 90q24-29 62-26",stroke:"#a9b094",opacity:".4",fill:"none",strokeWidth:"2"}),fe.jsx("ellipse",{cx:"139",cy:"123",rx:"43",ry:"10",transform:"rotate(-24 139 123)",fill:"#d1c28e",stroke:"#848067"}),fe.jsx("ellipse",{className:"lamp-bulb",cx:"139",cy:"123",rx:"26",ry:"6",transform:"rotate(-24 139 123)",fill:"#fff0b1"}),fe.jsx("path",{d:"M163 138v31",stroke:"#d7bc7c"}),fe.jsx("circle",{cx:"163",cy:"171",r:"3",fill:n("metal")})]}),i==="record"&&fe.jsxs("g",{children:[fe.jsx("ellipse",{cx:"161",cy:"223",rx:"125",ry:"8",fill:"#080a08",opacity:".4"}),fe.jsx("path",{d:"M32 126l221-10 39 64-234 16z",fill:"#716144",stroke:"#b39966"}),fe.jsx("path",{d:"M58 196l234-16v32L58 225 32 158v-32z",fill:n("wood")}),fe.jsx("path",{d:"M58 196v29m0-21l234-15",stroke:"#39281e"}),fe.jsx("g",{transform:"translate(145 157) scale(1 .39)",children:fe.jsxs("g",{className:e?"record-disc playing":"record-disc",children:[fe.jsx("circle",{r:"82",fill:"#161b17",stroke:"#787560"}),[72,64,56,48].map(o=>fe.jsx("circle",{r:o,fill:"none",stroke:"#414738",strokeWidth:".8"},o)),fe.jsx("circle",{r:"26",fill:"#875345"}),fe.jsx("path",{d:"M-17-5l34 10",stroke:"#c5a57d",strokeWidth:"2"}),fe.jsx("path",{d:"M-60-35q14-16 39-26",stroke:"#a3a28a",strokeWidth:"8",opacity:".08"}),fe.jsx("circle",{r:"3",fill:"#d3c69e"})]})}),fe.jsx("path",{d:"M243 135l-19 34-29 5",fill:"none",stroke:"#1d211a",strokeWidth:"7"}),fe.jsx("path",{d:"M243 131l-19 34-29 5",fill:"none",stroke:n("metal"),strokeWidth:"4"}),fe.jsx("ellipse",{cx:"243",cy:"132",rx:"9",ry:"4",fill:n("black")}),fe.jsx("rect",{x:"187",y:"167",width:"19",height:"8",rx:"1",fill:"#b4b199"}),fe.jsx("rect",{x:"74",y:"205",width:"35",height:"8",rx:"1",fill:n("metal")}),fe.jsx("circle",{cx:"261",cy:"199",r:"4",fill:n("metal")}),fe.jsx("circle",{cx:"277",cy:"198",r:"2",fill:e?"#bfcc8d":"#433b26"})]})]})}const Dh=i=>({daylight:i==="daylight"?1:0,lamplight:i!=="daylight"&&i!=="darkroom"?1:0,darkroom:i==="darkroom"?1:0});function rS(i,e=800){let t=i,n=Dh(t),o=Dh(t),c=0;const u=d=>{const p=Math.max(0,Math.min(1,(d-c)/e)),g=p*p*(3-2*p);return{daylight:n.daylight+(o.daylight-n.daylight)*g,lamplight:n.lamplight+(o.lamplight-n.lamplight)*g,darkroom:n.darkroom+(o.darkroom-n.darkroom)*g}};return{update(d,p,g){return d!==t&&(n=u(p),t=d,o=Dh(t),c=p),g||(n={...o}),u(p)}}}const ko=(i,e,t,n)=>i.daylight*e+i.lamplight*t+i.darkroom*n;function aS(i,e){const{geometries:t,materials:n}=e;function o(y,P=0,z=.65){const G=new ru({color:y,metalness:P,roughness:z});return n.push(G),G}const c=o("#a9905e",0,.98),u=o("#b99a58",.7,.28),d=o("#d8cfb4"),p=o("#bfb79f"),g=o("#39291f"),S=o("#243a32"),E=o("#92a29b",.2,.2);function _(y,P,z,G,q,ae=i){t.push(y);const W=new Ii(y,P);return W.position.set(z,G,q),ae.add(W),W}function x(y,P,z,G,q,ae,W){return _(new Ws(G,q,ae),W,y,P,z)}function R(y,P,z,G,q,ae,W=i){const ue=_(new Cf(G,q,6,64),ae,y,P,z,W);return ue.rotation.x=Math.PI/2,ue}function N(y,P,z,G,q=i){const ae=P.clone().sub(y),W=_(new Vo(z,z,ae.length(),8),G,0,0,0,q);return W.position.copy(y).add(P).multiplyScalar(.5),W.quaternion.setFromUnitVectors(new K(0,1,0),ae.normalize()),W}x(0,6.04,4,14,.16,18,d);for(const y of[5.64,5.78,5.91]){const P=(y-5.5)*.52;x(0,y,-4.88+P,14,.09,.12+P,p),x(-6.9+P,y,4,.12+P,.09,18,p),x(6.9-P,y,4,.12+P,.09,18,p)}x(0,5.61,-4.66,14,.025,.035,u);for(const y of[-5,-2,1,4])x(y,5.91,4,.12,.16,17.5,p);for(const y of[-3,0,3,6,9,12])x(0,5.91,y,13.5,.16,.12,p);for(const y of[-5,-2,1,4])for(const P of[-3,0,3,6,9])x(y+1.43,5.94,P+1.44,2.65,.025,.025,u),x(y+.1,5.94,P+1.4,.025,.025,2.65,u);for(const y of[.18,.35,1.65,1.78])x(0,y,-4.84,13.8,.07,.1,y===1.78?u:g);for(let y=1.4;y<6.9;y+=1.05)x(y,.98,-4.82,.035,1.2,.06,u),x(y+.5,.42,-4.81,.86,.025,.05,u),x(y+.5,1.54,-4.81,.86,.025,.05,u);for(const y of[-6.85,6.85]){x(y,.25,4,.12,.22,18,g),x(y,1.78,4,.08,.035,18,u);for(let P=-4;P<13;P+=1.4)x(y,.96,P,.065,1.35,.035,u)}x(-6.86,3.65,.5,.06,2.8,2.6,g),x(-6.8,3.65,.5,.04,2.57,2.35,E);for(const y of[-.7,.5,1.7])x(-6.75,3.65,y,.06,2.65,.055,u);x(-6.74,3.65,.5,.055,.06,2.4,u);for(const y of[-1,2])for(let P=0;P<4;P++)_(new Vo(.11,.15,3.25,10),S,-6.6+P*.07,3.45,y+P*.12);for(const y of[-3.15,3.15])x(y,.035,1,.04,.006,4.5,c);for(const y of[-1.15,3.15])x(0,.035,y,6.3,.006,.04,c);for(let y=0;y<19;y++)for(const P of[-1,3]){const z=x(-2.9+y*.32,.039,P,.075,.005,.075,c);z.rotation.y=Math.PI/4}R(0,.033,1,1,.018,c).scale.set(1,1.4,.08);for(let y=0;y<12;y++){const P=y*Math.PI/6;R(Math.cos(P)*.5,.034,1+Math.sin(P)*.7,.18,.01,c).scale.set(.8,1.3,.08)}const M=new dr;M.position.set(.75,0,-1.4),i.add(M);const O=.75,k=-1.4;R(O,5.92,k,.65,.055,p),R(O,5.9,k,.43,.02,u),N(new K(0,5.92,0),new K(0,5.08,0),.025,u,M),R(0,4.78,0,.78,.035,u,M),R(0,4.49,0,.45,.027,u,M);const C=new ru({color:"#fff1c7",emissive:"#ffd691",emissiveIntensity:2.3,roughness:.4});n.push(C);const F=new zg({color:"#e6e8d8",metalness:.12,roughness:.12,transparent:!0,opacity:.65});n.push(F);for(let y=0;y<8;y++){const P=y*Math.PI/4,z=Math.cos(P),G=Math.sin(P),q=[new K(0,5.05,0),new K(z*.4,4.7,G*.4),new K(z*.94,4.74,G*.94),new K(z*1.05,5,G*1.05)];_(new zd(new Fg(q),16,.026,6,!1),u,0,0,0,M),_(new Vo(.12,.075,.04,16),u,z*1.05,5,G*1.05,M),_(new Vo(.034,.041,.2,10),d,z*1.05,5.12,G*1.05,M);const ae=_(new Rf(.06,10,8),C,z*1.05,5.26,G*1.05,M);ae.scale.y=1.7,N(new K(z*.76,4.78,G*.76),new K(z*.76,4.5,G*.76),.008,u,M);const W=_(new Tf(.09),F,z*.76,4.45,G*.76,M);W.scale.y=1.8}const D=_(new Tf(.16),F,0,4.28,0,M);D.scale.y=1.8;const H=new K0("#ffdb9a",14,15,2);return H.position.set(O,4.9,k),i.add(H),{update:y=>{H.intensity=ko(y,7,14,2),C.emissiveIntensity=ko(y,1.2,2.3,.35)}}}function sS(i,e){const{geometries:t,materials:n}=e,o=new dr;o.position.set(-4.4,1,.2),o.userData.id="record",i.add(o);function c(y,P=0,z=.5){const G=new ru({color:y,metalness:P,roughness:z});return n.push(G),G}const u=c("#62432d"),d=c("#bba779",.75,.24),p=c("#161c19"),g=c("#242925"),S=c("#8c493e"),E=c("#d0c4a5");function _(y,P,z,G,q,ae=o){t.push(y);const W=new Ii(y,P);return W.position.set(z,G,q),ae.add(W),W}function x(y,P,z,G,q,ae,W,ue=o){return _(new Ws(G,q,ae),W,y,P,z,ue)}function R(y,P,z,G,q,ae,W=o){return _(new Vo(G,G,q,48),ae,y,P,z,W)}x(0,0,0,1.85,.21,1.35,u),x(0,.112,0,1.78,.025,1.28,p);for(const y of[-.72,.72])for(const P of[-.48,.48])R(y,-.14,P,.085,.09,g);R(-.25,.14,0,.56,.04,d);const N=new dr;N.name="record-platter",N.position.set(-.25,.171,0),o.add(N),R(0,0,0,.525,.022,p,N);for(let y=.18;y<.5;y+=.026){const P=_(new Cf(y,.0019,3,64),g,0,.013,0,N);P.rotation.x=Math.PI/2}R(0,.015,0,.145,.005,S,N),x(.035,.019,0,.035,.002,.16,E,N),R(0,.033,0,.015,.04,d,N);const w=new dr;w.name="record-tonearm",w.position.set(.62,.2,-.4),o.add(w),R(0,0,0,.075,.08,d,w),x(0,.07,.19,.025,.025,.38,d,w);const M=x(-.105,.07,.44,.025,.025,.29,d,w);M.rotation.y=-.8,x(-.21,.052,.54,.075,.035,.13,p,w),R(-.21,.015,.57,.005,.06,d,w),x(.015,.07,-.1,.1,.1,.13,p,w),R(.64,.153,.43,.065,.025,d),x(.32,.151,.46,.17,.01,.1,E);const O=new ru({color:"#779775",emissive:"#91ba6c",emissiveIntensity:0});n.push(O),_(new Rf(.018,8,6),O,.7,.025,.684);const k=new dr;k.position.set(0,.13,-.67),k.rotation.x=-1.22,o.add(k);const C=new zg({color:"#b7c1b4",transparent:!0,opacity:.13,roughness:.15,metalness:.05,side:Dr,depthWrite:!1});n.push(C),x(0,0,.67,1.88,.025,1.36,C,k);for(const y of[-.94,.94])x(y,0,.67,.018,.022,1.36,d,k);x(0,0,1.35,1.88,.02,.018,d,k);let F=0,D=0,H=0;return{body:o,update:(y,P,z)=>{const G=Math.min((y-H)/1e3,.05);H=y,F=z?hs.damp(F,P?1:0,3,G):P?1:0,D=z?hs.damp(D,P?1:0,4,G):P?1:0,z&&(N.rotation.y-=G*F*Math.PI*2*33.333/60),w.rotation.y=.2-D*.98,w.position.y=.2+(1-D)*.07,O.emissiveIntensity=P?1.5:0}}}class oS{constructor(e){this.arrive=e}arrive;x=-6.02;target=-6.02;trip=null;move(e,t,n,o){if(this.target=t,!o){this.trip=null,this.x=t,e&&this.arrive(e);return}this.trip={from:this.x,start:n,duration:Math.min(1400,Math.max(650,Math.abs(t-this.x)*170)),destination:e}}update(e,t){if(!this.trip)return;const n=this.trip,o=t?Math.min(1,(e-n.start)/n.duration):1,c=o===1?1:Math.floor(o*24)/24,u=c*c*(3-2*c);this.x=n.from+(this.target-n.from)*u,o===1&&(this.trip=null,this.x=this.target,n.destination&&this.arrive(n.destination))}get moving(){return this.trip!==null}}function lS(i){const e=[],t=[];for(const[n,o]of i)n!=="notes"&&o.traverse(c=>{if(!(c instanceof Ii))return;const u=c.material;if(u.transparent&&u.opacity<.2)return;const d=new Ii(c.geometry,c.material);d.matrixAutoUpdate=!1,d.matrixWorld.copy(c.matrixWorld),d.userData.id=n,e.push(d),n==="ladder"&&t.push({source:c,target:d})});return{targets:e,updateMoving:()=>t.forEach(({source:n,target:o})=>o.matrixWorld.copy(n.matrixWorld))}}function cS(i,e){if(!i||!e)return!0;const t=i.image;if(!(t instanceof HTMLCanvasElement))return!0;const n=i.userData.hitPixels;if(!n)return!1;const o=hs.clamp(Math.floor(e.x*t.width),0,t.width-1),c=hs.clamp(Math.floor((1-e.y)*t.height),0,t.height-1);return n[(c*t.width+o)*4+3]>=30}const ql=(i,e=320,t=240)=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${e} ${t}">${i}</svg>`;function hS(i,e,t,n,o=()=>{}){const c=new jy({antialias:!0});c.setPixelRatio(Math.min(devicePixelRatio,1.6)),c.outputColorSpace=Wi,c.setClearColor("#252d28"),i.appendChild(c.domElement);const u=new d0,d=new fr(57,1,.1,60);d.position.set(0,1.65,6.8);const p=[],g=[],S=[],E=[],_=Me=>{const Pe=document.createElement("canvas");Pe.width=640,Pe.height=480;const nt=new bp(Pe);nt.colorSpace=Wi,p.push(nt);const bt=new Image;return bt.onload=()=>{B||(Pe.getContext("2d").drawImage(bt,0,0,640,480),nt.userData.hitPixels=Pe.getContext("2d").getImageData(0,0,Pe.width,Pe.height).data,nt.needsUpdate=!0)},bt.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(Me)}`,nt},x=Me=>{const Pe=new W0({color:Me});return g.push(Pe),Pe},R=x("#68452f"),N=x("#30251f"),w=x("#354b40"),M=x("#c9ba95"),O=x("#303e36"),k=x("#77534d");function C(Me,Pe,nt,bt,Pn,sn,nn,Nt=u){const Wt=new Ws(bt,Pn,sn);S.push(Wt);const un=new Ii(Wt,nn);return un.position.set(Me,Pe,nt),Nt.add(un),un}const F=new Map,D=new Map;function H(Me,Pe,nt,bt,Pn,sn,nn){const Nt=new dr;Nt.position.set(nt,bt,Pn),Nt.userData.id=Me,Nt.userData.paper=!0;const Wt=new Ef({map:_(Pe),transparent:!0,side:Dr,depthWrite:!1});g.push(Wt),Me!=="exit"&&E.push(Wt);const un=new rc(sn,nn);S.push(un);const Kt=new Ii(un,Wt);return Nt.add(Kt),u.add(Nt),F.set(Me,Nt),D.set(Me,Nt.position.clone()),Nt}function y(Me){return nS.renderToStaticMarkup(cg.createElement(iS,{kind:Me})).replace("<svg ",'<svg xmlns="http://www.w3.org/2000/svg" ').replace("<defs>",'<filter id="paint-edge"><feTurbulence type="fractalNoise" baseFrequency=".06" numOctaves="2" seed="6"/><feDisplacementMap in="SourceGraphic" scale="1.3"/></filter><style>.phone-ring{opacity:0}svg>g{filter:url(#paint-edge)}linearGradient stop{stop-color:#b4a17e}linearGradient[id$="black"] stop{stop-color:#34443e}linearGradient[id$="wood"] stop{stop-color:#8c674b}linearGradient[id$="paper"] stop{stop-color:#ded1b1}radialGradient stop{stop-color:#537d7b}</style><defs>')}C(0,-.12,0,14,.2,28,R),C(0,3,-5,14,6,.18,w),C(-7,3,4,.18,6,18,w),C(7,3,4,.18,6,18,w);for(let Me=-7;Me<7;Me+=.7)C(Me,.001,0,.018,.008,27,N);C(0,.012,1,7,.018,5,k);for(const Me of[-3.3,3.3])C(Me,.025,1,.045,.012,4.6,M);const P=aS(u,{geometries:S,materials:g}),z=-2.6,G=-4.55;C(z,2.65,G-.2,7.2,5.1,.2,N);for(const Me of[-6.25,-3.8,-1.4,1.05])C(Me,2.65,G+.15,.13,5.2,.75,R);const ae=[.35,1.95,3.55,5.15];for(const Me of ae)C(z,Me,G+.1,7.4,.14,.85,R),C(z,Me+.055,G+.54,7.4,.035,.035,M);const W=(Me,Pe,nt,bt)=>H(Me,y(Pe),nt,bt+.07+.7-.11,-3.98,1.85,1.4);W("photography","camera",-5.02,3.55),W("about","books",-2.6,3.55),W("favorites","frames",-.17,3.55),W("published","paper",-5.02,1.95);const ue=W("engineering","rocket",-3.12,1.95);ue.scale.x=.78;const ye=H("device",ql('<g stroke="#34443e" stroke-width="5" stroke-linejoin="round"><path d="M92 16h138v177q0 29-31 29H92z" fill="#c7bca3"/><path d="M108 35h105v85H108z" fill="#536055"/><path d="M122 48h76v57h-76z" fill="#9da77a"/><path d="M116 157h37m-19-18v37" stroke-width="12"/><circle cx="191" cy="154" r="10" fill="#875345"/><circle cx="211" cy="177" r="10" fill="#875345"/><path d="M157 201h19m9 0h19"/></g>'),-2.13,2.61,-3.97,1.65,1.35),_e=new dr;_e.position.set(-2.6,2.61,-3.98),_e.userData.id="engineering",_e.userData.paper=!0,u.add(_e),u.updateMatrixWorld(!0),_e.attach(ue),_e.attach(ye),F.set("engineering",_e),D.set("engineering",_e.position.clone()),F.delete("device"),D.delete("device");const Te=new dr;Te.userData.id="shelf-books",u.add(Te),F.set("shelf-books",Te),D.set("shelf-books",Te.position.clone());for(let Me=0;Me<3;Me++)for(let Pe=0;Pe<7;Pe++){const nt=-5.93+Me*2.43+Pe*.28,bt=.7+Pe%3*.15;C(nt,.43+bt/2,-4.36,.21,bt,.4,[O,k,M][Pe%3],Te),C(nt,.63,-4.145,.17,.025,.015,M,Te)}const ne=1.16;C(3.8,ne,-2.2,3.7,.16,1.5,R),C(3.8,.85,-2.2,3.4,.5,1.3,N);for(const Me of[2.2,5.4])for(const Pe of[-2.8,-1.6])C(Me,.55,Pe,.13,1.1,.13,R);const V=ql('<g stroke="#273b36" stroke-width="3" stroke-linejoin="round"><path d="M77 310l15-131q45-24 90 0l22 131" fill="#33433e"/><path d="M116 173l22 62 26-62" fill="#d9d4b6"/><path d="M134 185l-17-9v20l20-8 19 8v-20z" fill="#7d5148"/><path d="M96 191l-19 88 30 7m73-95 21 88-29 7" fill="#33433e"/><ellipse cx="137" cy="117" rx="37" ry="49" fill="#caa58a"/><path d="M102 122q-20-68 38-66 52 0 30 69l-8-31q-25 13-51-1z" fill="#c5cebe"/><circle cx="124" cy="117" r="4" fill="#263931"/><circle cx="150" cy="117" r="4" fill="#263931"/><path d="M129 144q10 6 19-1m-11-27-5 17h9" fill="none"/><ellipse cx="94" cy="286" rx="18" ry="12" fill="#e4dfc7"/><ellipse cx="182" cy="286" rx="18" ry="12" fill="#e4dfc7"/></g>',280,320);H("butler",V,3.85,2.03,-2.95,1.65,2.6);let xe=y("phone");const rt=xe.match(/<g class="phone-receiver">[\s\S]*?<\/g>/)?.[0]||"";xe=xe.replace(rt,""),H("contact",xe,3.05,ne+.08+.46-.065,-1.93,1.22,.92);const Ae=H("receiver",ql(rt),3.05,ne+.08+.46-.065,-1.91,1.22,.92);H("letter",y("letter"),4.02,ne+.38,-1.38,.85,.64),H("lamp",y("lamp"),4.95,ne+.08+.64,-2.17,1.65,1.28);const se=new dr;se.position.set(-5.7,0,-1.8),se.scale.setScalar(.8),u.add(se),C(0,.77,0,2,.14,1.3,R,se);for(const Me of[-.8,.8])C(Me,.38,0,.12,.76,1,N,se);const Lt=sS(u,{geometries:S,materials:g});se.add(Lt.body),Lt.body.position.set(0,1,0),F.set("record",Lt.body),D.set("record",Lt.body.position.clone());const me=H("notes",ql('<g fill="#e4d3a4" font-family="Georgia" font-size="66"><text x="55" y="110">♪</text><text x="180" y="65">♫</text></g>'),0,2.02,.04,1.6,1.2);se.add(me),me.visible=!1,C(3.8,3.9,-4.85,2.5,.06,.08,M);const ve=H("exit",ql('<path d="M25 65l270-4 2 110-271 4z" fill="#416453" stroke="#c5cfac" stroke-width="5"/><text x="52" y="141" fill="#e2e9c0" font-family="sans-serif" font-size="58" letter-spacing="8">EXIT ↗</text>'),3.8,4.3,-4.65,1.85,1.38);C(-2.6,4.95,-3.5,7.5,.055,.06,M);const Ze=ql(`<g stroke-linecap="round"><path d="M55 12L20 370M94 12l14 358" stroke="#382e28" stroke-width="14"/><path d="M55 12L20 370M94 12l14 358" stroke="#bc9269" stroke-width="8"/>${Array.from({length:9},(Me,Pe)=>`<path d="M${52-Pe*3} ${42+Pe*36}h${44+Pe*4}" stroke="#cdb486" stroke-width="8"/>`).join("")}<circle cx="23" cy="375" r="8" fill="#303c34"/><circle cx="108" cy="375" r="8" fill="#303c34"/></g>`,130,390),dt=H("ladder",Ze,-6.02,2.48,-3.28,.85,4.95);let We=!1,vt=0,Pt=!1;const pt=new oS(Me=>{i.removeAttribute("aria-busy"),o("Opening the selected collection."),n(Me)});function It(Me,Pe,nt,bt,Pn,sn,nn){const Nt=document.createElement("canvas");Nt.width=512,Nt.height=Math.round(512*sn/Pn);const Wt=Nt.getContext("2d");Wt.fillStyle="#d8cead",Wt.fillRect(0,0,Nt.width,Nt.height);const un=new bp(Nt);un.colorSpace=Wi,p.push(un);const Kt=new Ef({map:un,side:Dr});g.push(Kt);const Tn=new rc(Pn,sn);S.push(Tn);const Kn=new Ii(Tn,Kt);Kn.position.set(nt,bt,.015),Kn.rotation.z=nn,F.get(Me)?.add(Kn);const Qt=new Image;Qt.onload=()=>{if(B)return;const aa=Math.min(Nt.width/Qt.width,Nt.height/Qt.height),pr=Qt.width*aa,Nr=Qt.height*aa;Wt.drawImage(Qt,(Nt.width-pr)/2,(Nt.height-Nr)/2,pr,Nr),un.userData.hitPixels=Wt.getImageData(0,0,Nt.width,Nt.height).data,un.needsUpdate=!0},Qt.src=Pe}$g().then(Me=>{if(B)return;const Pe=sn=>Me.posts.find(nn=>nn.id===sn)?.image.src,nt=Pe("18151133245558753"),bt=Pe("18117687656072162"),Pn=Pe("18119889931954458");nt&&It("favorites",nt,-.386,-.006,.601,.7,Math.PI/45),bt&&It("favorites",bt,.4,-.177,.538,.49,-Math.PI/45),Pn&&It("about",Pn,.367,-.133,.272,.455,-Math.PI/22.5)}).catch(()=>{});const Xe=new Z0("#eee3c8","#3b2920",2.4);u.add(Xe);const xt=new q0("#ffe0ad",1.4);xt.position.set(-4,7,5),u.add(xt);const tn=new ev,Gt=new ft;let Mn=null,Dt=null,Yt=0,Y=.055,zt=null,gt=!1,B=!1;const A=matchMedia("(prefers-reduced-motion: reduce)"),ie=rS(e().lighting),te=(Me,Pe,nt)=>[new At(Me),new At(Pe),new At(nt)],ge=te("#eee3c8","#eee3c8","#ff3730"),Ne=te("#ffe0ad","#ffe0ad","#ff241c"),Fe=te("#ffffff","#ffe8c5","#e56e63"),pe=te("#889381","#394238","#292329"),Ee=new At,ke=new At,Qe=(Me,Pe,nt)=>Me.setRGB(ko(nt,Pe[0].r,Pe[1].r,Pe[2].r),ko(nt,Pe[0].g,Pe[1].g,Pe[2].g),ko(nt,Pe[0].b,Pe[1].b,Pe[2].b)),Be=Me=>Me==="receiver"||Me==="butler"||Me==="letter"?"contact":Me==="device"?"engineering":Me==="vinyl"?"record":Me==="shelf-books"?"about":Me;u.updateMatrixWorld(!0);const Ue=lS(F);function st(Me){const Pe=c.domElement.getBoundingClientRect();Gt.set((Me.clientX-Pe.left)/Pe.width*2-1,-(Me.clientY-Pe.top)/Pe.height*2+1),tn.setFromCamera(Gt,d),u.updateMatrixWorld(!0),Ue.updateMoving();for(const nt of tn.intersectObjects(Ue.targets,!1)){const bt=nt.object,Pn=bt.material;if(cS(Pn.map||void 0,nt.uv))return{id:bt.userData.id,x:nt.point.x}}return null}const lt=Me=>{Me!==Dt&&(Dt=Me,t(Dt?Be(Dt):null),c.domElement.style.cursor=Dt?"pointer":"grab")},_t=new Set(["photography","about","favorites","published","engineering","shelf-books"]);function J(Me,Pe){const nt=Be(Me),bt=e().motion&&!A.matches;if(Me==="ladder"){We=!We,pt.move(null,We?.72:-6.02,performance.now(),bt);return}if(_t.has(Me)){const Pn=Me==="shelf-books"?Pe??-2.6:D.get(Me)?.x??-2.6;let sn=hs.clamp(Pn-.85,-6.02,.72);Math.abs(sn-pt.x)<.2&&(sn=hs.clamp(Pn+.65,-6.02,.72)),i.setAttribute("aria-busy","true"),o("The ladder is moving to your selection."),pt.move(nt,sn,performance.now(),bt);return}if(nt==="contact"&&bt){vt||(vt=performance.now());return}n(nt)}const we=Me=>{Me.button===0&&(zt={x:Me.clientX,y:Me.clientY,yaw:Yt,pitch:Y},gt=!1,c.domElement.setPointerCapture(Me.pointerId))},Se=Me=>{if(zt){const Pe=Me.clientX-zt.x,nt=Me.clientY-zt.y;Math.abs(Pe)+Math.abs(nt)>6&&(gt=!0,lt(null),c.domElement.style.cursor="grabbing"),Yt=hs.clamp(zt.yaw-Pe*.0018,-.46,.46),Y=hs.clamp(zt.pitch+nt*.0015,-.18,.3)}else Mn=null,lt(st(Me)?.id||null)},Oe=Me=>{if(zt&&!gt){const Pe=st(Me);Pe&&J(Pe.id,Pe.x)}zt=null},ze=()=>{lt(null)},Re=()=>{zt=null};c.domElement.addEventListener("pointerdown",we),c.domElement.addEventListener("pointermove",Se),c.domElement.addEventListener("pointerup",Oe),c.domElement.addEventListener("pointerleave",ze),c.domElement.addEventListener("pointercancel",Re);const at=()=>{const Me=i.clientWidth,Pe=i.clientHeight;c.setSize(Me,Pe),d.aspect=Me/Pe,d.fov=Me<700?80:57,d.position.z=Me<700?12:6.8,se.position.x=Me<700?-4.7:-5.7,se.scale.setScalar(Me<700?.65:.8),d.updateProjectionMatrix()},it=new ResizeObserver(at);return it.observe(i),at(),c.setAnimationLoop(Me=>{if(B||document.hidden)return;const Pe=e(),nt=Pe.motion&&!A.matches,bt=Me/1e3;d.lookAt(d.position.x+Math.sin(Yt)*10,d.position.y+Math.sin(Y)*10,d.position.z-Math.cos(Yt)*10);const Pn=Dt||Mn;if(F.forEach((nn,Nt)=>{if(nn.position.copy(D.get(Nt)),nn.rotation.set(0,0,0),nt&&Pn===Nt&&!["ladder","receiver","contact","record","shelf-books"].includes(Nt)){const Wt=Math.floor(bt*10)/10;nn.rotation.z=Math.sin(Wt*7)*.025,nn.position.y+=.035,Nt==="about"&&(nn.rotation.z=Math.sin(Wt*5)*.045),Nt==="published"?nn.rotation.x=Math.sin(Wt*8)*.07:nn.rotation.x=0,Nt==="engineering"&&(nn.position.y+=Math.max(0,Math.sin(Wt*5))*.1)}}),pt.update(performance.now(),nt),dt.position.x=pt.x,i.dataset.ladderState=pt.moving?"moving":"idle",i.dataset.ladderX=pt.x.toFixed(3),nt&&(ve.rotation.z=Math.sin(Math.floor(bt*8)/8)*.025),Lt.update(Me,Pe.playing,nt),me.visible=Pe.playing,me.position.y=2.02+(nt?bt%2*.15:0),vt){const nn=Math.min((performance.now()-vt)/650,1);Ae.position.y+=nn*.4,Ae.rotation.z=nn*.28,nn===1&&!Pt&&(Pt=!0,n("contact"))}else nt&&(Pn==="contact"||Pn==="butler"||Pn==="receiver")&&(Ae.rotation.z=Math.sin(bt*22)*.025);const sn=ie.update(Pe.lighting,Me,nt);Qe(Xe.color,ge,sn),Qe(xt.color,Ne,sn),Xe.intensity=ko(sn,2.8,1.8,.7),xt.intensity=ko(sn,1.6,1,.3),Qe(Ee,Fe,sn),E.forEach(nn=>nn.color.copy(Ee)),c.setClearColor(Qe(ke,pe,sn)),P.update(sn),c.render(u,d)}),{activate:J,focus:Me=>{Mn=Me,Me&&(Dt=null,t(Me))},look:Me=>{Yt=hs.clamp(Yt+Me,-.46,.46)},reset:()=>{Yt=0,Y=.055},dispose:()=>{B=!0,c.setAnimationLoop(null),it.disconnect(),c.domElement.removeEventListener("pointerdown",we),c.domElement.removeEventListener("pointermove",Se),c.domElement.removeEventListener("pointerup",Oe),c.domElement.removeEventListener("pointerleave",ze),c.domElement.removeEventListener("pointercancel",Re),p.forEach(Me=>Me.dispose()),g.forEach(Me=>Me.dispose()),S.forEach(Me=>Me.dispose()),c.dispose(),c.domElement.remove()}}}export{hS as createPaperRoom};
