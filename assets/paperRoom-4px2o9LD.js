import{c as ag,e as sg,r as og,j as fe}from"./index-kKOtG9cl.js";import{l as qg}from"./instagramMedia-BlGFrHkV.js";const Md="186",jg=0,$d=1,$g=2,hf=1,em=2,Wc=3,Vo=0,ji=1,Pr=2,fs=0,Yc=1,ep=2,tp=3,np=4,tm=5,ql=100,nm=101,im=102,rm=103,am=104,sm=200,om=201,lm=202,cm=203,lg=204,cg=205,um=206,fm=207,hm=208,dm=209,pm=210,gm=211,mm=212,vm=213,_m=214,Ih=0,Dh=1,Nh=2,jc=3,Uh=4,Fh=5,Oh=6,Bh=7,yd=0,xm=1,Mm=2,Aa=0,ug=1,fg=2,hg=3,dg=4,pg=5,gg=6,mg=7,vg=300,Wo=301,nc=302,jf=303,$f=304,wf=306,zh=1e3,us=1001,kh=1002,hi=1003,ym=1004,Vu=1005,Ai=1006,eh=1007,ko=1008,cr=1009,_g=1010,xg=1011,$c=1012,Sd=1013,Ra=1014,Ta=1015,Ca=1016,bd=1017,Ed=1018,eu=1020,Mg=35902,yg=35899,Sg=1021,bg=1022,$r=1023,ps=1026,Ho=1027,Eg=1028,Td=1029,Xo=1030,wd=1031,Ad=1033,df=33776,pf=33777,gf=33778,mf=33779,Hh=35840,Gh=35841,Vh=35842,Wh=35843,Xh=36196,Yh=37492,Zh=37496,Jh=37488,Kh=37489,_f=37490,Qh=37491,qh=37808,jh=37809,$h=37810,ed=37811,td=37812,nd=37813,id=37814,rd=37815,ad=37816,sd=37817,od=37818,ld=37819,cd=37820,ud=37821,fd=36492,hd=36494,dd=36495,pd=36283,gd=36284,xf=36285,md=36286,Sm=3200,Mf=0,bm=1,Gs="",ki="srgb",yf="srgb-linear",Sf="linear",fn="srgb",th=7680,Em=519,Tm=512,wm=513,Am=514,Rd=515,Rm=516,Cm=517,Cd=518,Pm=519,Lm=35044,ip="300 es",wa=2e3,tu=2001;function Im(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function bf(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Dm(){const i=bf("canvas");return i.style.display="block",i}const rp={};function ap(...i){const e="THREE."+i.shift();console.log(e,...i)}function Tg(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function gt(...i){i=Tg(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Zt(...i){i=Tg(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ec(...i){const e=i.join(" ");e in rp||(rp[e]=!0,gt(...i))}function Nm(i,e,t){return new Promise(function(n,o){function c(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:o();break;case i.TIMEOUT_EXPIRED:setTimeout(c,t);break;default:n()}}setTimeout(c,t)})}const Um={[Ih]:Dh,[Nh]:Oh,[Uh]:Bh,[jc]:Fh,[Dh]:Ih,[Oh]:Nh,[Bh]:Uh,[Fh]:jc};class Yo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const o=n[e];if(o!==void 0){const c=o.indexOf(t);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const o=n.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const Ti=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let sp=1234567;const Zc=Math.PI/180,nu=180/Math.PI;function ac(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ti[i&255]+Ti[i>>8&255]+Ti[i>>16&255]+Ti[i>>24&255]+"-"+Ti[e&255]+Ti[e>>8&255]+"-"+Ti[e>>16&15|64]+Ti[e>>24&255]+"-"+Ti[t&63|128]+Ti[t>>8&255]+"-"+Ti[t>>16&255]+Ti[t>>24&255]+Ti[n&255]+Ti[n>>8&255]+Ti[n>>16&255]+Ti[n>>24&255]).toLowerCase()}function Nt(i,e,t){return Math.max(e,Math.min(t,i))}function Pd(i,e){return(i%e+e)%e}function Fm(i,e,t,n,o){return n+(i-e)*(o-n)/(t-e)}function Om(i,e,t){return i!==e?(t-i)/(e-i):0}function Jc(i,e,t){return(1-t)*i+t*e}function Bm(i,e,t,n){return Jc(i,e,1-Math.exp(-t*n))}function zm(i,e=1){return e-Math.abs(Pd(i,e*2)-e)}function km(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Hm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Gm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Vm(i,e){return i+Math.random()*(e-i)}function Wm(i){return i*(.5-Math.random())}function Xm(i){i!==void 0&&(sp=i);let e=sp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ym(i){return i*Zc}function Zm(i){return i*nu}function Jm(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Km(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Qm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function qm(i,e,t,n,o){const c=Math.cos,u=Math.sin,d=c(t/2),p=u(t/2),g=c((e+n)/2),M=u((e+n)/2),T=c((e-n)/2),_=u((e-n)/2),x=c((n-e)/2),R=u((n-e)/2);switch(o){case"XYX":i.set(d*M,p*T,p*_,d*g);break;case"YZY":i.set(p*_,d*M,p*T,d*g);break;case"ZXZ":i.set(p*T,p*_,d*M,d*g);break;case"XZX":i.set(d*M,p*R,p*x,d*g);break;case"YXY":i.set(p*x,d*M,p*R,d*g);break;case"ZYZ":i.set(p*R,p*x,d*M,d*g);break;default:gt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function jl(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Bi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const cs={DEG2RAD:Zc,RAD2DEG:nu,generateUUID:ac,clamp:Nt,euclideanModulo:Pd,mapLinear:Fm,inverseLerp:Om,lerp:Jc,damp:Bm,pingpong:zm,smoothstep:km,smootherstep:Hm,randInt:Gm,randFloat:Vm,randFloatSpread:Wm,seededRandom:Xm,degToRad:Ym,radToDeg:Zm,isPowerOfTwo:Jm,ceilPowerOfTwo:Km,floorPowerOfTwo:Qm,setQuaternionFromProperEuler:qm,normalize:Bi,denormalize:jl},kd=class kd{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6],this.y=o[1]*t+o[4]*n+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Nt(this.x,e.x,t.x),this.y=Nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Nt(this.x,e,t),this.y=Nt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),o=Math.sin(t),c=this.x-e.x,u=this.y-e.y;return this.x=c*n-u*o+e.x,this.y=c*o+u*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};kd.prototype.isVector2=!0;let ct=kd;class sc{constructor(e=0,t=0,n=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=o}static slerpFlat(e,t,n,o,c,u,d){let p=n[o+0],g=n[o+1],M=n[o+2],T=n[o+3],_=c[u+0],x=c[u+1],R=c[u+2],U=c[u+3];if(T!==U||p!==_||g!==x||M!==R){let w=p*_+g*x+M*R+T*U;w<0&&(_=-_,x=-x,R=-R,U=-U,w=-w);let y=1-d;if(w<.9995){const O=Math.acos(w),B=Math.sin(O);y=Math.sin(y*O)/B,d=Math.sin(d*O)/B,p=p*y+_*d,g=g*y+x*d,M=M*y+R*d,T=T*y+U*d}else{p=p*y+_*d,g=g*y+x*d,M=M*y+R*d,T=T*y+U*d;const O=1/Math.sqrt(p*p+g*g+M*M+T*T);p*=O,g*=O,M*=O,T*=O}}e[t]=p,e[t+1]=g,e[t+2]=M,e[t+3]=T}static multiplyQuaternionsFlat(e,t,n,o,c,u){const d=n[o],p=n[o+1],g=n[o+2],M=n[o+3],T=c[u],_=c[u+1],x=c[u+2],R=c[u+3];return e[t]=d*R+M*T+p*x-g*_,e[t+1]=p*R+M*_+g*T-d*x,e[t+2]=g*R+M*x+d*_-p*T,e[t+3]=M*R-d*T-p*_-g*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,o){return this._x=e,this._y=t,this._z=n,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,o=e._y,c=e._z,u=e._order,d=Math.cos,p=Math.sin,g=d(n/2),M=d(o/2),T=d(c/2),_=p(n/2),x=p(o/2),R=p(c/2);switch(u){case"XYZ":this._x=_*M*T+g*x*R,this._y=g*x*T-_*M*R,this._z=g*M*R+_*x*T,this._w=g*M*T-_*x*R;break;case"YXZ":this._x=_*M*T+g*x*R,this._y=g*x*T-_*M*R,this._z=g*M*R-_*x*T,this._w=g*M*T+_*x*R;break;case"ZXY":this._x=_*M*T-g*x*R,this._y=g*x*T+_*M*R,this._z=g*M*R+_*x*T,this._w=g*M*T-_*x*R;break;case"ZYX":this._x=_*M*T-g*x*R,this._y=g*x*T+_*M*R,this._z=g*M*R-_*x*T,this._w=g*M*T+_*x*R;break;case"YZX":this._x=_*M*T+g*x*R,this._y=g*x*T+_*M*R,this._z=g*M*R-_*x*T,this._w=g*M*T-_*x*R;break;case"XZY":this._x=_*M*T-g*x*R,this._y=g*x*T-_*M*R,this._z=g*M*R+_*x*T,this._w=g*M*T+_*x*R;break;default:gt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,o=Math.sin(n);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],o=t[4],c=t[8],u=t[1],d=t[5],p=t[9],g=t[2],M=t[6],T=t[10],_=n+d+T;if(_>0){const x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(M-p)*x,this._y=(c-g)*x,this._z=(u-o)*x}else if(n>d&&n>T){const x=2*Math.sqrt(1+n-d-T);this._w=(M-p)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(c+g)/x}else if(d>T){const x=2*Math.sqrt(1+d-n-T);this._w=(c-g)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(p+M)/x}else{const x=2*Math.sqrt(1+T-n-d);this._w=(u-o)/x,this._x=(c+g)/x,this._y=(p+M)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const o=Math.min(1,t/n);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,o=e._y,c=e._z,u=e._w,d=t._x,p=t._y,g=t._z,M=t._w;return this._x=n*M+u*d+o*g-c*p,this._y=o*M+u*p+c*d-n*g,this._z=c*M+u*g+n*p-o*d,this._w=u*M-n*d-o*p-c*g,this._onChangeCallback(),this}slerp(e,t){let n=e._x,o=e._y,c=e._z,u=e._w,d=this.dot(e);d<0&&(n=-n,o=-o,c=-c,u=-u,d=-d);let p=1-t;if(d<.9995){const g=Math.acos(d),M=Math.sin(g);p=Math.sin(p*g)/M,t=Math.sin(t*g)/M,this._x=this._x*p+n*t,this._y=this._y*p+o*t,this._z=this._z*p+c*t,this._w=this._w*p+u*t,this._onChangeCallback()}else this._x=this._x*p+n*t,this._y=this._y*p+o*t,this._z=this._z*p+c*t,this._w=this._w*p+u*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),o=Math.sqrt(1-n),c=Math.sqrt(n);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(t),c*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Hd=class Hd{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(op.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(op.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,o=this.z,c=e.elements;return this.x=c[0]*t+c[3]*n+c[6]*o,this.y=c[1]*t+c[4]*n+c[7]*o,this.z=c[2]*t+c[5]*n+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,o=this.z,c=e.elements,u=1/(c[3]*t+c[7]*n+c[11]*o+c[15]);return this.x=(c[0]*t+c[4]*n+c[8]*o+c[12])*u,this.y=(c[1]*t+c[5]*n+c[9]*o+c[13])*u,this.z=(c[2]*t+c[6]*n+c[10]*o+c[14])*u,this}applyQuaternion(e){const t=this.x,n=this.y,o=this.z,c=e.x,u=e.y,d=e.z,p=e.w,g=2*(u*o-d*n),M=2*(d*t-c*o),T=2*(c*n-u*t);return this.x=t+p*g+u*T-d*M,this.y=n+p*M+d*g-c*T,this.z=o+p*T+c*M-u*g,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,o=this.z,c=e.elements;return this.x=c[0]*t+c[4]*n+c[8]*o,this.y=c[1]*t+c[5]*n+c[9]*o,this.z=c[2]*t+c[6]*n+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Nt(this.x,e.x,t.x),this.y=Nt(this.y,e.y,t.y),this.z=Nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Nt(this.x,e,t),this.y=Nt(this.y,e,t),this.z=Nt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,o=e.y,c=e.z,u=t.x,d=t.y,p=t.z;return this.x=o*p-c*d,this.y=c*u-n*p,this.z=n*d-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return nh.copy(this).projectOnVector(e),this.sub(nh)}reflect(e){return this.sub(nh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,o=this.z-e.z;return t*t+n*n+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const o=Math.sin(t)*e;return this.x=o*Math.sin(n),this.y=Math.cos(t)*e,this.z=o*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Hd.prototype.isVector3=!0;let K=Hd;const nh=new K,op=new sc,Gd=class Gd{constructor(e,t,n,o,c,u,d,p,g){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,o,c,u,d,p,g)}set(e,t,n,o,c,u,d,p,g){const M=this.elements;return M[0]=e,M[1]=o,M[2]=d,M[3]=t,M[4]=c,M[5]=p,M[6]=n,M[7]=u,M[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,o=t.elements,c=this.elements,u=n[0],d=n[3],p=n[6],g=n[1],M=n[4],T=n[7],_=n[2],x=n[5],R=n[8],U=o[0],w=o[3],y=o[6],O=o[1],B=o[4],P=o[7],F=o[2],D=o[5],V=o[8];return c[0]=u*U+d*O+p*F,c[3]=u*w+d*B+p*D,c[6]=u*y+d*P+p*V,c[1]=g*U+M*O+T*F,c[4]=g*w+M*B+T*D,c[7]=g*y+M*P+T*V,c[2]=_*U+x*O+R*F,c[5]=_*w+x*B+R*D,c[8]=_*y+x*P+R*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],o=e[2],c=e[3],u=e[4],d=e[5],p=e[6],g=e[7],M=e[8];return t*u*M-t*d*g-n*c*M+n*d*p+o*c*g-o*u*p}invert(){const e=this.elements,t=e[0],n=e[1],o=e[2],c=e[3],u=e[4],d=e[5],p=e[6],g=e[7],M=e[8],T=M*u-d*g,_=d*p-M*c,x=g*c-u*p,R=t*T+n*_+o*x;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const U=1/R;return e[0]=T*U,e[1]=(o*g-M*n)*U,e[2]=(d*n-o*u)*U,e[3]=_*U,e[4]=(M*t-o*p)*U,e[5]=(o*c-d*t)*U,e[6]=x*U,e[7]=(n*p-g*t)*U,e[8]=(u*t-n*c)*U,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,o,c,u,d){const p=Math.cos(c),g=Math.sin(c);return this.set(n*p,n*g,-n*(p*u+g*d)+u+e,-o*g,o*p,-o*(-g*u+p*d)+d+t,0,0,1),this}scale(e,t){return ec("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ih.makeScale(e,t)),this}rotate(e){return ec("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ih.makeRotation(-e)),this}translate(e,t){return ec("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ih.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let o=0;o<9;o++)if(t[o]!==n[o])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Gd.prototype.isMatrix3=!0;let Et=Gd;const ih=new Et,lp=new Et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cp=new Et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jm(){const i={enabled:!0,workingColorSpace:yf,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===fn&&(o.r=hs(o.r),o.g=hs(o.g),o.b=hs(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===fn&&(o.r=tc(o.r),o.g=tc(o.g),o.b=tc(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Gs?Sf:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return ec("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return ec("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[yf]:{primaries:e,whitePoint:n,transfer:Sf,toXYZ:lp,fromXYZ:cp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ki},outputColorSpaceConfig:{drawingBufferColorSpace:ki}},[ki]:{primaries:e,whitePoint:n,transfer:fn,toXYZ:lp,fromXYZ:cp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ki}}}),i}const Gt=jm();function hs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function tc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ol;class $m{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ol===void 0&&(Ol=bf("canvas")),Ol.width=e.width,Ol.height=e.height;const o=Ol.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),n=Ol}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=bf("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const o=n.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=hs(c[u]/255)*255;return n.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(hs(t[n]/255)*255):t[n]=hs(t[n]);return{data:t,width:e.width,height:e.height}}else return gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let e0=0;class Ld{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=ac(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?c.push(rh(o[u].image)):c.push(rh(o[u]))}else c=rh(o);n.url=c}return t||(e.images[this.uuid]=n),n}}function rh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?$m.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(gt("Texture: Unable to serialize Texture."),{})}let t0=0;const ah=new K;class Ri extends Yo{constructor(e=Ri.DEFAULT_IMAGE,t=Ri.DEFAULT_MAPPING,n=us,o=us,c=Ai,u=ko,d=$r,p=cr,g=Ri.DEFAULT_ANISOTROPY,M=Gs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=ac(),this.name="",this.source=new Ld(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=g,this.format=d,this.internalFormat=null,this.type=p,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=M,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ah).x}get height(){return this.source.getSize(ah).y}get depth(){return this.source.getSize(ah).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){gt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){gt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&n&&o.isVector2&&n.isVector2||o&&n&&o.isVector3&&n.isVector3||o&&n&&o.isMatrix3&&n.isMatrix3?o.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zh:e.x=e.x-Math.floor(e.x);break;case us:e.x=e.x<0?0:1;break;case kh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zh:e.y=e.y-Math.floor(e.y);break;case us:e.y=e.y<0?0:1;break;case kh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ri.DEFAULT_IMAGE=null;Ri.DEFAULT_MAPPING=vg;Ri.DEFAULT_ANISOTROPY=1;const Vd=class Vd{constructor(e=0,t=0,n=0,o=1){this.x=e,this.y=t,this.z=n,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,o){return this.x=e,this.y=t,this.z=n,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*t+u[4]*n+u[8]*o+u[12]*c,this.y=u[1]*t+u[5]*n+u[9]*o+u[13]*c,this.z=u[2]*t+u[6]*n+u[10]*o+u[14]*c,this.w=u[3]*t+u[7]*n+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,o,c;const p=e.elements,g=p[0],M=p[4],T=p[8],_=p[1],x=p[5],R=p[9],U=p[2],w=p[6],y=p[10];if(Math.abs(M-_)<.01&&Math.abs(T-U)<.01&&Math.abs(R-w)<.01){if(Math.abs(M+_)<.1&&Math.abs(T+U)<.1&&Math.abs(R+w)<.1&&Math.abs(g+x+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const B=(g+1)/2,P=(x+1)/2,F=(y+1)/2,D=(M+_)/4,V=(T+U)/4,S=(R+w)/4;return B>P&&B>F?B<.01?(n=0,o=.707106781,c=.707106781):(n=Math.sqrt(B),o=D/n,c=V/n):P>F?P<.01?(n=.707106781,o=0,c=.707106781):(o=Math.sqrt(P),n=D/o,c=S/o):F<.01?(n=.707106781,o=.707106781,c=0):(c=Math.sqrt(F),n=V/c,o=S/c),this.set(n,o,c,t),this}let O=Math.sqrt((w-R)*(w-R)+(T-U)*(T-U)+(_-M)*(_-M));return Math.abs(O)<.001&&(O=1),this.x=(w-R)/O,this.y=(T-U)/O,this.z=(_-M)/O,this.w=Math.acos((g+x+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Nt(this.x,e.x,t.x),this.y=Nt(this.y,e.y,t.y),this.z=Nt(this.z,e.z,t.z),this.w=Nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Nt(this.x,e,t),this.y=Nt(this.y,e,t),this.z=Nt(this.z,e,t),this.w=Nt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Vd.prototype.isVector4=!0;let Un=Vd;class n0 extends Yo{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ai,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Un(0,0,e,t),this.scissorTest=!1,this.viewport=new Un(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:n.depth},c=new Ri(o),u=n.count;for(let d=0;d<u;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ai,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=n,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Ld(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ea extends n0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class wg extends Ri{constructor(e=null,t=1,n=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:o},this.magFilter=hi,this.minFilter=hi,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class i0 extends Ri{constructor(e=null,t=1,n=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:o},this.magFilter=hi,this.minFilter=hi,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Tf=class Tf{constructor(e,t,n,o,c,u,d,p,g,M,T,_,x,R,U,w){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,o,c,u,d,p,g,M,T,_,x,R,U,w)}set(e,t,n,o,c,u,d,p,g,M,T,_,x,R,U,w){const y=this.elements;return y[0]=e,y[4]=t,y[8]=n,y[12]=o,y[1]=c,y[5]=u,y[9]=d,y[13]=p,y[2]=g,y[6]=M,y[10]=T,y[14]=_,y[3]=x,y[7]=R,y[11]=U,y[15]=w,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tf().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,o=1/Bl.setFromMatrixColumn(e,0).length(),c=1/Bl.setFromMatrixColumn(e,1).length(),u=1/Bl.setFromMatrixColumn(e,2).length();return t[0]=n[0]*o,t[1]=n[1]*o,t[2]=n[2]*o,t[3]=0,t[4]=n[4]*c,t[5]=n[5]*c,t[6]=n[6]*c,t[7]=0,t[8]=n[8]*u,t[9]=n[9]*u,t[10]=n[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,o=e.y,c=e.z,u=Math.cos(n),d=Math.sin(n),p=Math.cos(o),g=Math.sin(o),M=Math.cos(c),T=Math.sin(c);if(e.order==="XYZ"){const _=u*M,x=u*T,R=d*M,U=d*T;t[0]=p*M,t[4]=-p*T,t[8]=g,t[1]=x+R*g,t[5]=_-U*g,t[9]=-d*p,t[2]=U-_*g,t[6]=R+x*g,t[10]=u*p}else if(e.order==="YXZ"){const _=p*M,x=p*T,R=g*M,U=g*T;t[0]=_+U*d,t[4]=R*d-x,t[8]=u*g,t[1]=u*T,t[5]=u*M,t[9]=-d,t[2]=x*d-R,t[6]=U+_*d,t[10]=u*p}else if(e.order==="ZXY"){const _=p*M,x=p*T,R=g*M,U=g*T;t[0]=_-U*d,t[4]=-u*T,t[8]=R+x*d,t[1]=x+R*d,t[5]=u*M,t[9]=U-_*d,t[2]=-u*g,t[6]=d,t[10]=u*p}else if(e.order==="ZYX"){const _=u*M,x=u*T,R=d*M,U=d*T;t[0]=p*M,t[4]=R*g-x,t[8]=_*g+U,t[1]=p*T,t[5]=U*g+_,t[9]=x*g-R,t[2]=-g,t[6]=d*p,t[10]=u*p}else if(e.order==="YZX"){const _=u*p,x=u*g,R=d*p,U=d*g;t[0]=p*M,t[4]=U-_*T,t[8]=R*T+x,t[1]=T,t[5]=u*M,t[9]=-d*M,t[2]=-g*M,t[6]=x*T+R,t[10]=_-U*T}else if(e.order==="XZY"){const _=u*p,x=u*g,R=d*p,U=d*g;t[0]=p*M,t[4]=-T,t[8]=g*M,t[1]=_*T+U,t[5]=u*M,t[9]=x*T-R,t[2]=R*T-x,t[6]=d*M,t[10]=U*T+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(r0,e,a0)}lookAt(e,t,n){const o=this.elements;return sr.subVectors(e,t),sr.lengthSq()===0&&(sr.z=1),sr.normalize(),Fs.crossVectors(n,sr),Fs.lengthSq()===0&&(Math.abs(n.z)===1?sr.x+=1e-4:sr.z+=1e-4,sr.normalize(),Fs.crossVectors(n,sr)),Fs.normalize(),Wu.crossVectors(sr,Fs),o[0]=Fs.x,o[4]=Wu.x,o[8]=sr.x,o[1]=Fs.y,o[5]=Wu.y,o[9]=sr.y,o[2]=Fs.z,o[6]=Wu.z,o[10]=sr.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,o=t.elements,c=this.elements,u=n[0],d=n[4],p=n[8],g=n[12],M=n[1],T=n[5],_=n[9],x=n[13],R=n[2],U=n[6],w=n[10],y=n[14],O=n[3],B=n[7],P=n[11],F=n[15],D=o[0],V=o[4],S=o[8],C=o[12],k=o[1],H=o[5],q=o[9],ae=o[13],Y=o[2],ue=o[6],Se=o[10],be=o[14],Re=o[3],ne=o[7],G=o[11],Ee=o[15];return c[0]=u*D+d*k+p*Y+g*Re,c[4]=u*V+d*H+p*ue+g*ne,c[8]=u*S+d*q+p*Se+g*G,c[12]=u*C+d*ae+p*be+g*Ee,c[1]=M*D+T*k+_*Y+x*Re,c[5]=M*V+T*H+_*ue+x*ne,c[9]=M*S+T*q+_*Se+x*G,c[13]=M*C+T*ae+_*be+x*Ee,c[2]=R*D+U*k+w*Y+y*Re,c[6]=R*V+U*H+w*ue+y*ne,c[10]=R*S+U*q+w*Se+y*G,c[14]=R*C+U*ae+w*be+y*Ee,c[3]=O*D+B*k+P*Y+F*Re,c[7]=O*V+B*H+P*ue+F*ne,c[11]=O*S+B*q+P*Se+F*G,c[15]=O*C+B*ae+P*be+F*Ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],o=e[8],c=e[12],u=e[1],d=e[5],p=e[9],g=e[13],M=e[2],T=e[6],_=e[10],x=e[14],R=e[3],U=e[7],w=e[11],y=e[15],O=p*x-g*_,B=d*x-g*T,P=d*_-p*T,F=u*x-g*M,D=u*_-p*M,V=u*T-d*M;return t*(U*O-w*B+y*P)-n*(R*O-w*F+y*D)+o*(R*B-U*F+y*V)-c*(R*P-U*D+w*V)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],o=e[8],c=e[1],u=e[5],d=e[9],p=e[2],g=e[6],M=e[10];return t*(u*M-d*g)-n*(c*M-d*p)+o*(c*g-u*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],o=e[2],c=e[3],u=e[4],d=e[5],p=e[6],g=e[7],M=e[8],T=e[9],_=e[10],x=e[11],R=e[12],U=e[13],w=e[14],y=e[15],O=t*d-n*u,B=t*p-o*u,P=t*g-c*u,F=n*p-o*d,D=n*g-c*d,V=o*g-c*p,S=M*U-T*R,C=M*w-_*R,k=M*y-x*R,H=T*w-_*U,q=T*y-x*U,ae=_*y-x*w,Y=O*ae-B*q+P*H+F*k-D*C+V*S;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ue=1/Y;return e[0]=(d*ae-p*q+g*H)*ue,e[1]=(o*q-n*ae-c*H)*ue,e[2]=(U*V-w*D+y*F)*ue,e[3]=(_*D-T*V-x*F)*ue,e[4]=(p*k-u*ae-g*C)*ue,e[5]=(t*ae-o*k+c*C)*ue,e[6]=(w*P-R*V-y*B)*ue,e[7]=(M*V-_*P+x*B)*ue,e[8]=(u*q-d*k+g*S)*ue,e[9]=(n*k-t*q-c*S)*ue,e[10]=(R*D-U*P+y*O)*ue,e[11]=(T*P-M*D-x*O)*ue,e[12]=(d*C-u*H-p*S)*ue,e[13]=(t*H-n*C+o*S)*ue,e[14]=(U*B-R*F-w*O)*ue,e[15]=(M*F-T*B+_*O)*ue,this}scale(e){const t=this.elements,n=e.x,o=e.y,c=e.z;return t[0]*=n,t[4]*=o,t[8]*=c,t[1]*=n,t[5]*=o,t[9]*=c,t[2]*=n,t[6]*=o,t[10]*=c,t[3]*=n,t[7]*=o,t[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,o))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),o=Math.sin(t),c=1-n,u=e.x,d=e.y,p=e.z,g=c*u,M=c*d;return this.set(g*u+n,g*d-o*p,g*p+o*d,0,g*d+o*p,M*d+n,M*p-o*u,0,g*p-o*d,M*p+o*u,c*p*p+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,o,c,u){return this.set(1,n,c,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,n){const o=this.elements,c=t._x,u=t._y,d=t._z,p=t._w,g=c+c,M=u+u,T=d+d,_=c*g,x=c*M,R=c*T,U=u*M,w=u*T,y=d*T,O=p*g,B=p*M,P=p*T,F=n.x,D=n.y,V=n.z;return o[0]=(1-(U+y))*F,o[1]=(x+P)*F,o[2]=(R-B)*F,o[3]=0,o[4]=(x-P)*D,o[5]=(1-(_+y))*D,o[6]=(w+O)*D,o[7]=0,o[8]=(R+B)*V,o[9]=(w-O)*V,o[10]=(1-(_+U))*V,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,n){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinantAffine();if(c===0)return n.set(1,1,1),t.identity(),this;let u=Bl.set(o[0],o[1],o[2]).length();const d=Bl.set(o[4],o[5],o[6]).length(),p=Bl.set(o[8],o[9],o[10]).length();c<0&&(u=-u),Kr.copy(this);const g=1/u,M=1/d,T=1/p;return Kr.elements[0]*=g,Kr.elements[1]*=g,Kr.elements[2]*=g,Kr.elements[4]*=M,Kr.elements[5]*=M,Kr.elements[6]*=M,Kr.elements[8]*=T,Kr.elements[9]*=T,Kr.elements[10]*=T,t.setFromRotationMatrix(Kr),n.x=u,n.y=d,n.z=p,this}makePerspective(e,t,n,o,c,u,d=wa,p=!1){const g=this.elements,M=2*c/(t-e),T=2*c/(n-o),_=(t+e)/(t-e),x=(n+o)/(n-o);let R,U;if(p)R=c/(u-c),U=u*c/(u-c);else if(d===wa)R=-(u+c)/(u-c),U=-2*u*c/(u-c);else if(d===tu)R=-u/(u-c),U=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return g[0]=M,g[4]=0,g[8]=_,g[12]=0,g[1]=0,g[5]=T,g[9]=x,g[13]=0,g[2]=0,g[6]=0,g[10]=R,g[14]=U,g[3]=0,g[7]=0,g[11]=-1,g[15]=0,this}makeOrthographic(e,t,n,o,c,u,d=wa,p=!1){const g=this.elements,M=2/(t-e),T=2/(n-o),_=-(t+e)/(t-e),x=-(n+o)/(n-o);let R,U;if(p)R=1/(u-c),U=u/(u-c);else if(d===wa)R=-2/(u-c),U=-(u+c)/(u-c);else if(d===tu)R=-1/(u-c),U=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return g[0]=M,g[4]=0,g[8]=0,g[12]=_,g[1]=0,g[5]=T,g[9]=0,g[13]=x,g[2]=0,g[6]=0,g[10]=R,g[14]=U,g[3]=0,g[7]=0,g[11]=0,g[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let o=0;o<16;o++)if(t[o]!==n[o])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Tf.prototype.isMatrix4=!0;let Rn=Tf;const Bl=new K,Kr=new Rn,r0=new K(0,0,0),a0=new K(1,1,1),Fs=new K,Wu=new K,sr=new K,up=new Rn,fp=new sc;class gs{constructor(e=0,t=0,n=0,o=gs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,o=this._order){return this._x=e,this._y=t,this._z=n,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const o=e.elements,c=o[0],u=o[4],d=o[8],p=o[1],g=o[5],M=o[9],T=o[2],_=o[6],x=o[10];switch(t){case"XYZ":this._y=Math.asin(Nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-M,x),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(_,g),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(M,-1,1)),Math.abs(M)<.9999999?(this._y=Math.atan2(d,x),this._z=Math.atan2(p,g)):(this._y=Math.atan2(-T,c),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-T,x),this._z=Math.atan2(-u,g)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Nt(T,-1,1)),Math.abs(T)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,g));break;case"YZX":this._z=Math.asin(Nt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-M,g),this._y=Math.atan2(-T,c)):(this._x=0,this._y=Math.atan2(d,x));break;case"XZY":this._z=Math.asin(-Nt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,g),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-M,x),this._y=0);break;default:gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return up.makeRotationFromQuaternion(e),this.setFromRotationMatrix(up,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fp.setFromEuler(this),this.setFromQuaternion(fp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gs.DEFAULT_ORDER="XYZ";class Id{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let s0=0;const hp=new K,zl=new sc,rs=new Rn,Xu=new K,Oc=new K,o0=new K,l0=new sc,dp=new K(1,0,0),pp=new K(0,1,0),gp=new K(0,0,1),mp={type:"added"},c0={type:"removed"},kl={type:"childadded",child:null},sh={type:"childremoved",child:null};class pi extends Yo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:s0++}),this.uuid=ac(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pi.DEFAULT_UP.clone();const e=new K,t=new gs,n=new sc,o=new K(1,1,1);function c(){n.setFromEuler(t,!1)}function u(){t.setFromQuaternion(n,void 0,!1)}t._onChange(c),n._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Rn},normalMatrix:{value:new Et}}),this.matrix=new Rn,this.matrixWorld=new Rn,this.matrixAutoUpdate=pi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Id,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zl.setFromAxisAngle(e,t),this.quaternion.multiply(zl),this}rotateOnWorldAxis(e,t){return zl.setFromAxisAngle(e,t),this.quaternion.premultiply(zl),this}rotateX(e){return this.rotateOnAxis(dp,e)}rotateY(e){return this.rotateOnAxis(pp,e)}rotateZ(e){return this.rotateOnAxis(gp,e)}translateOnAxis(e,t){return hp.copy(e).applyQuaternion(this.quaternion),this.position.add(hp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(dp,e)}translateY(e){return this.translateOnAxis(pp,e)}translateZ(e){return this.translateOnAxis(gp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rs.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xu.copy(e):Xu.set(e,t,n);const o=this.parent;this.updateWorldMatrix(!0,!1),Oc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rs.lookAt(Oc,Xu,this.up):rs.lookAt(Xu,Oc,this.up),this.quaternion.setFromRotationMatrix(rs),o&&(rs.extractRotation(o.matrixWorld),zl.setFromRotationMatrix(rs),this.quaternion.premultiply(zl.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Zt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(mp),kl.child=e,this.dispatchEvent(kl),kl.child=null):Zt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(c0),sh.child=e,this.dispatchEvent(sh),sh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),rs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rs.multiply(e.parent.matrixWorld)),e.applyMatrix4(rs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(mp),kl.child=e,this.dispatchEvent(kl),kl.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,o=this.children.length;n<o;n++){const u=this.children[n].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oc,e,o0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oc,l0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,o=t.length;n<o;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,o=t.length;n<o;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,o=e.z,c=this.matrix.elements;c[12]+=t-c[0]*t-c[4]*n-c[8]*o,c[13]+=n-c[1]*t-c[5]*n-c[9]*o,c[14]+=o-c[2]*t-c[6]*n-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,o=t.length;n<o;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const c=this.children;for(let u=0,d=c.length;u<d;u++)c[u].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let g=0,M=p.length;g<M;g++){const T=p[g];c(e.shapes,T)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,g=this.material.length;p<g;p++)d.push(c(e.materials,this.material[p]));o.material=d}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];o.animations.push(c(e.animations,p))}}if(t){const d=u(e.geometries),p=u(e.materials),g=u(e.textures),M=u(e.images),T=u(e.shapes),_=u(e.skeletons),x=u(e.animations),R=u(e.nodes);d.length>0&&(n.geometries=d),p.length>0&&(n.materials=p),g.length>0&&(n.textures=g),M.length>0&&(n.images=M),T.length>0&&(n.shapes=T),_.length>0&&(n.skeletons=_),x.length>0&&(n.animations=x),R.length>0&&(n.nodes=R)}return n.object=o,n;function u(d){const p=[];for(const g in d){const M=d[g];delete M.metadata,p.push(M)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const o=e.children[n];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}pi.DEFAULT_UP=new K(0,1,0);pi.DEFAULT_MATRIX_AUTO_UPDATE=!0;pi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ur extends pi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const u0={type:"move"};class oh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ur,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ur,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ur,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let o=null,c=null,u=null;const d=this._targetRay,p=this._grip,g=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(g&&e.hand){u=!0;for(const U of e.hand.values()){const w=t.getJointPose(U,n),y=this._getHandJoint(g,U);w!==null&&(y.matrix.fromArray(w.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=w.radius),y.visible=w!==null}const M=g.joints["index-finger-tip"],T=g.joints["thumb-tip"],_=M.position.distanceTo(T.position),x=.02,R=.005;g.inputState.pinching&&_>x+R?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!g.inputState.pinching&&_<=x-R&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=t.getPose(e.gripSpace,n),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(o=t.getPose(e.targetRaySpace,n),o===null&&c!==null&&(o=c),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(u0)))}return d!==null&&(d.visible=o!==null),p!==null&&(p.visible=c!==null),g!==null&&(g.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ur;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Ag={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Os={h:0,s:0,l:0},Yu={h:0,s:0,l:0};function lh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ut{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ki){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Gt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,o=Gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Gt.colorSpaceToWorking(this,o),this}setHSL(e,t,n,o=Gt.workingColorSpace){if(e=Pd(e,1),t=Nt(t,0,1),n=Nt(n,0,1),t===0)this.r=this.g=this.b=n;else{const c=n<=.5?n*(1+t):n+t-n*t,u=2*n-c;this.r=lh(u,c,e+1/3),this.g=lh(u,c,e),this.b=lh(u,c,e-1/3)}return Gt.colorSpaceToWorking(this,o),this}setStyle(e,t=ki){function n(c){c!==void 0&&parseFloat(c)<1&&gt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return n(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,t);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return n(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,t);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return n(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,t);break;default:gt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(c,16),t);gt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ki){const n=Ag[e.toLowerCase()];return n!==void 0?this.setHex(n,t):gt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}copyLinearToSRGB(e){return this.r=tc(e.r),this.g=tc(e.g),this.b=tc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ki){return Gt.workingToColorSpace(wi.copy(this),e),Math.round(Nt(wi.r*255,0,255))*65536+Math.round(Nt(wi.g*255,0,255))*256+Math.round(Nt(wi.b*255,0,255))}getHexString(e=ki){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Gt.workingColorSpace){Gt.workingToColorSpace(wi.copy(this),t);const n=wi.r,o=wi.g,c=wi.b,u=Math.max(n,o,c),d=Math.min(n,o,c);let p,g;const M=(d+u)/2;if(d===u)p=0,g=0;else{const T=u-d;switch(g=M<=.5?T/(u+d):T/(2-u-d),u){case n:p=(o-c)/T+(o<c?6:0);break;case o:p=(c-n)/T+2;break;case c:p=(n-o)/T+4;break}p/=6}return e.h=p,e.s=g,e.l=M,e}getRGB(e,t=Gt.workingColorSpace){return Gt.workingToColorSpace(wi.copy(this),t),e.r=wi.r,e.g=wi.g,e.b=wi.b,e}getStyle(e=ki){Gt.workingToColorSpace(wi.copy(this),e);const t=wi.r,n=wi.g,o=wi.b;return e!==ki?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(o*255)})`}offsetHSL(e,t,n){return this.getHSL(Os),this.setHSL(Os.h+e,Os.s+t,Os.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Os),e.getHSL(Yu);const n=Jc(Os.h,Yu.h,t),o=Jc(Os.s,Yu.s,t),c=Jc(Os.l,Yu.l,t);return this.setHSL(n,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,o=this.b,c=e.elements;return this.r=c[0]*t+c[3]*n+c[6]*o,this.g=c[1]*t+c[4]*n+c[7]*o,this.b=c[2]*t+c[5]*n+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wi=new Ut;Ut.NAMES=Ag;class f0 extends pi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gs,this.environmentIntensity=1,this.environmentRotation=new gs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Qr=new K,as=new K,ch=new K,ss=new K,Hl=new K,Gl=new K,vp=new K,uh=new K,fh=new K,hh=new K,dh=new Un,ph=new Un,gh=new Un;class jr{constructor(e=new K,t=new K,n=new K){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,o){o.subVectors(n,t),Qr.subVectors(e,t),o.cross(Qr);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,t,n,o,c){Qr.subVectors(o,t),as.subVectors(n,t),ch.subVectors(e,t);const u=Qr.dot(Qr),d=Qr.dot(as),p=Qr.dot(ch),g=as.dot(as),M=as.dot(ch),T=u*g-d*d;if(T===0)return c.set(0,0,0),null;const _=1/T,x=(g*p-d*M)*_,R=(u*M-d*p)*_;return c.set(1-x-R,R,x)}static containsPoint(e,t,n,o){return this.getBarycoord(e,t,n,o,ss)===null?!1:ss.x>=0&&ss.y>=0&&ss.x+ss.y<=1}static getInterpolation(e,t,n,o,c,u,d,p){return this.getBarycoord(e,t,n,o,ss)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,ss.x),p.addScaledVector(u,ss.y),p.addScaledVector(d,ss.z),p)}static getInterpolatedAttribute(e,t,n,o,c,u){return dh.setScalar(0),ph.setScalar(0),gh.setScalar(0),dh.fromBufferAttribute(e,t),ph.fromBufferAttribute(e,n),gh.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(dh,c.x),u.addScaledVector(ph,c.y),u.addScaledVector(gh,c.z),u}static isFrontFacing(e,t,n,o){return Qr.subVectors(n,t),as.subVectors(e,t),Qr.cross(as).dot(o)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,o){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,n,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qr.subVectors(this.c,this.b),as.subVectors(this.a,this.b),Qr.cross(as).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,o,c){return jr.getInterpolation(e,this.a,this.b,this.c,t,n,o,c)}containsPoint(e){return jr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,o=this.b,c=this.c;let u,d;Hl.subVectors(o,n),Gl.subVectors(c,n),uh.subVectors(e,n);const p=Hl.dot(uh),g=Gl.dot(uh);if(p<=0&&g<=0)return t.copy(n);fh.subVectors(e,o);const M=Hl.dot(fh),T=Gl.dot(fh);if(M>=0&&T<=M)return t.copy(o);const _=p*T-M*g;if(_<=0&&p>=0&&M<=0)return u=p/(p-M),t.copy(n).addScaledVector(Hl,u);hh.subVectors(e,c);const x=Hl.dot(hh),R=Gl.dot(hh);if(R>=0&&x<=R)return t.copy(c);const U=x*g-p*R;if(U<=0&&g>=0&&R<=0)return d=g/(g-R),t.copy(n).addScaledVector(Gl,d);const w=M*R-x*T;if(w<=0&&T-M>=0&&x-R>=0)return vp.subVectors(c,o),d=(T-M)/(T-M+(x-R)),t.copy(o).addScaledVector(vp,d);const y=1/(w+U+_);return u=U*y,d=_*y,t.copy(n).addScaledVector(Hl,u).addScaledVector(Gl,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class au{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=qr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const c=n.getAttribute("position");if(t===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=c.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,qr):qr.fromBufferAttribute(c,u),qr.applyMatrix4(e.matrixWorld),this.expandByPoint(qr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zu.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zu.copy(n.boundingBox)),Zu.applyMatrix4(e.matrixWorld),this.union(Zu)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qr),qr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bc),Ju.subVectors(this.max,Bc),Vl.subVectors(e.a,Bc),Wl.subVectors(e.b,Bc),Xl.subVectors(e.c,Bc),Bs.subVectors(Wl,Vl),zs.subVectors(Xl,Wl),Do.subVectors(Vl,Xl);let t=[0,-Bs.z,Bs.y,0,-zs.z,zs.y,0,-Do.z,Do.y,Bs.z,0,-Bs.x,zs.z,0,-zs.x,Do.z,0,-Do.x,-Bs.y,Bs.x,0,-zs.y,zs.x,0,-Do.y,Do.x,0];return!mh(t,Vl,Wl,Xl,Ju)||(t=[1,0,0,0,1,0,0,0,1],!mh(t,Vl,Wl,Xl,Ju))?!1:(Ku.crossVectors(Bs,zs),t=[Ku.x,Ku.y,Ku.z],mh(t,Vl,Wl,Xl,Ju))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(os[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),os[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),os[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),os[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),os[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),os[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),os[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),os[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(os),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const os=[new K,new K,new K,new K,new K,new K,new K,new K],qr=new K,Zu=new au,Vl=new K,Wl=new K,Xl=new K,Bs=new K,zs=new K,Do=new K,Bc=new K,Ju=new K,Ku=new K,No=new K;function mh(i,e,t,n,o){for(let c=0,u=i.length-3;c<=u;c+=3){No.fromArray(i,c);const d=o.x*Math.abs(No.x)+o.y*Math.abs(No.y)+o.z*Math.abs(No.z),p=e.dot(No),g=t.dot(No),M=n.dot(No);if(Math.max(-Math.max(p,g,M),Math.min(p,g,M))>d)return!1}return!0}const Zn=new K,Qu=new ct;let h0=0;class ds extends Yo{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:h0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Lm,this.updateRanges=[],this.gpuType=Ta,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=t.array[n+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qu.fromBufferAttribute(this,t),Qu.applyMatrix3(e),this.setXY(t,Qu.x,Qu.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Zn.fromBufferAttribute(this,t),Zn.applyMatrix3(e),this.setXYZ(t,Zn.x,Zn.y,Zn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Zn.fromBufferAttribute(this,t),Zn.applyMatrix4(e),this.setXYZ(t,Zn.x,Zn.y,Zn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zn.fromBufferAttribute(this,t),Zn.applyNormalMatrix(e),this.setXYZ(t,Zn.x,Zn.y,Zn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zn.fromBufferAttribute(this,t),Zn.transformDirection(e),this.setXYZ(t,Zn.x,Zn.y,Zn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=jl(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Bi(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=jl(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=jl(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=jl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=jl(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Bi(t,this.array),n=Bi(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,o){return e*=this.itemSize,this.normalized&&(t=Bi(t,this.array),n=Bi(n,this.array),o=Bi(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=o,this}setXYZW(e,t,n,o,c){return e*=this.itemSize,this.normalized&&(t=Bi(t,this.array),n=Bi(n,this.array),o=Bi(o,this.array),c=Bi(c,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Rg extends ds{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Cg extends ds{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Cn extends ds{constructor(e,t,n){super(new Float32Array(e),t,n)}}const d0=new au,zc=new K,vh=new K;class Dd{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):d0.setFromPoints(e).getCenter(n);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,n.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zc.subVectors(e,this.center);const t=zc.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),o=(n-this.radius)*.5;this.center.addScaledVector(zc,o/n),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zc.copy(e.center).add(vh)),this.expandByPoint(zc.copy(e.center).sub(vh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let p0=0;const Cr=new Rn,_h=new pi,Yl=new K,or=new au,kc=new au,ri=new K;class $i extends Yo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=ac(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Im(e)?Cg:Rg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const c=new Et().getNormalMatrix(e);n.applyNormalMatrix(c),n.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Cr.makeRotationFromQuaternion(e),this.applyMatrix4(Cr),this}rotateX(e){return Cr.makeRotationX(e),this.applyMatrix4(Cr),this}rotateY(e){return Cr.makeRotationY(e),this.applyMatrix4(Cr),this}rotateZ(e){return Cr.makeRotationZ(e),this.applyMatrix4(Cr),this}translate(e,t,n){return Cr.makeTranslation(e,t,n),this.applyMatrix4(Cr),this}scale(e,t,n){return Cr.makeScale(e,t,n),this.applyMatrix4(Cr),this}lookAt(e){return _h.lookAt(e),_h.updateMatrix(),this.applyMatrix4(_h.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yl).negate(),this.translate(Yl.x,Yl.y,Yl.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];n.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Cn(n,3))}else{const n=Math.min(e.length,t.count);for(let o=0;o<n;o++){const c=e[o];t.setXYZ(o,c.x,c.y,c.z||0)}e.length>t.count&&gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new au);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,o=t.length;n<o;n++){const c=t[n];or.setFromBufferAttribute(c),this.morphTargetsRelative?(ri.addVectors(this.boundingBox.min,or.min),this.boundingBox.expandByPoint(ri),ri.addVectors(this.boundingBox.max,or.max),this.boundingBox.expandByPoint(ri)):(this.boundingBox.expandByPoint(or.min),this.boundingBox.expandByPoint(or.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const n=this.boundingSphere.center;if(or.setFromBufferAttribute(e),t)for(let c=0,u=t.length;c<u;c++){const d=t[c];kc.setFromBufferAttribute(d),this.morphTargetsRelative?(ri.addVectors(or.min,kc.min),or.expandByPoint(ri),ri.addVectors(or.max,kc.max),or.expandByPoint(ri)):(or.expandByPoint(kc.min),or.expandByPoint(kc.max))}or.getCenter(n);let o=0;for(let c=0,u=e.count;c<u;c++)ri.fromBufferAttribute(e,c),o=Math.max(o,n.distanceToSquared(ri));if(t)for(let c=0,u=t.length;c<u;c++){const d=t[c],p=this.morphTargetsRelative;for(let g=0,M=d.count;g<M;g++)ri.fromBufferAttribute(d,g),p&&(Yl.fromBufferAttribute(e,g),ri.add(Yl)),o=Math.max(o,n.distanceToSquared(ri))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,o=t.normal,c=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==n.count)&&(u=new ds(new Float32Array(4*n.count),4),this.setAttribute("tangent",u));const d=[],p=[];for(let S=0;S<n.count;S++)d[S]=new K,p[S]=new K;const g=new K,M=new K,T=new K,_=new ct,x=new ct,R=new ct,U=new K,w=new K;function y(S,C,k){g.fromBufferAttribute(n,S),M.fromBufferAttribute(n,C),T.fromBufferAttribute(n,k),_.fromBufferAttribute(c,S),x.fromBufferAttribute(c,C),R.fromBufferAttribute(c,k),M.sub(g),T.sub(g),x.sub(_),R.sub(_);const H=1/(x.x*R.y-R.x*x.y);isFinite(H)&&(U.copy(M).multiplyScalar(R.y).addScaledVector(T,-x.y).multiplyScalar(H),w.copy(T).multiplyScalar(x.x).addScaledVector(M,-R.x).multiplyScalar(H),d[S].add(U),d[C].add(U),d[k].add(U),p[S].add(w),p[C].add(w),p[k].add(w))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let S=0,C=O.length;S<C;++S){const k=O[S],H=k.start,q=k.count;for(let ae=H,Y=H+q;ae<Y;ae+=3)y(e.getX(ae+0),e.getX(ae+1),e.getX(ae+2))}const B=new K,P=new K,F=new K,D=new K;function V(S){F.fromBufferAttribute(o,S),D.copy(F);const C=d[S];B.copy(C),B.sub(F.multiplyScalar(F.dot(C))).normalize(),P.crossVectors(D,C);const H=P.dot(p[S])<0?-1:1;u.setXYZW(S,B.x,B.y,B.z,H)}for(let S=0,C=O.length;S<C;++S){const k=O[S],H=k.start,q=k.count;for(let ae=H,Y=H+q;ae<Y;ae+=3)V(e.getX(ae+0)),V(e.getX(ae+1)),V(e.getX(ae+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new ds(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let _=0,x=n.count;_<x;_++)n.setXYZ(_,0,0,0);const o=new K,c=new K,u=new K,d=new K,p=new K,g=new K,M=new K,T=new K;if(e)for(let _=0,x=e.count;_<x;_+=3){const R=e.getX(_+0),U=e.getX(_+1),w=e.getX(_+2);o.fromBufferAttribute(t,R),c.fromBufferAttribute(t,U),u.fromBufferAttribute(t,w),M.subVectors(u,c),T.subVectors(o,c),M.cross(T),d.fromBufferAttribute(n,R),p.fromBufferAttribute(n,U),g.fromBufferAttribute(n,w),d.add(M),p.add(M),g.add(M),n.setXYZ(R,d.x,d.y,d.z),n.setXYZ(U,p.x,p.y,p.z),n.setXYZ(w,g.x,g.y,g.z)}else for(let _=0,x=t.count;_<x;_+=3)o.fromBufferAttribute(t,_+0),c.fromBufferAttribute(t,_+1),u.fromBufferAttribute(t,_+2),M.subVectors(u,c),T.subVectors(o,c),M.cross(T),n.setXYZ(_+0,M.x,M.y,M.z),n.setXYZ(_+1,M.x,M.y,M.z),n.setXYZ(_+2,M.x,M.y,M.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ri.fromBufferAttribute(e,t),ri.normalize(),e.setXYZ(t,ri.x,ri.y,ri.z)}toNonIndexed(){function e(d,p){const g=d.array,M=d.itemSize,T=d.normalized,_=new g.constructor(p.length*M);let x=0,R=0;for(let U=0,w=p.length;U<w;U++){d.isInterleavedBufferAttribute?x=p[U]*d.data.stride+d.offset:x=p[U]*M;for(let y=0;y<M;y++)_[R++]=g[x++]}return new ds(_,M,T)}if(this.index===null)return gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $i,n=this.index.array,o=this.attributes;for(const d in o){const p=o[d],g=e(p,n);t.setAttribute(d,g)}const c=this.morphAttributes;for(const d in c){const p=[],g=c[d];for(let M=0,T=g.length;M<T;M++){const _=g[M],x=e(_,n);p.push(x)}t.morphAttributes[d]=p}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,p=u.length;d<p;d++){const g=u[d];t.addGroup(g.start,g.count,g.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const g in p)p[g]!==void 0&&(e[g]=p[g]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const p in n){const g=n[p];e.data.attributes[p]=g.toJSON(e.data)}const o={};let c=!1;for(const p in this.morphAttributes){const g=this.morphAttributes[p],M=[];for(let T=0,_=g.length;T<_;T++){const x=g[T];M.push(x.toJSON(e.data))}M.length>0&&(o[p]=M,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const o=e.attributes;for(const g in o){const M=o[g];this.setAttribute(g,M.clone(t))}const c=e.morphAttributes;for(const g in c){const M=[],T=c[g];for(let _=0,x=T.length;_<x;_++)M.push(T[_].clone(t));this.morphAttributes[g]=M}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let g=0,M=u.length;g<M;g++){const T=u[g];this.addGroup(T.start,T.count,T.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xh=new K,g0=new K,m0=new Et;class Hs{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,o){return this.normal.set(e,t,n),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const o=xh.subVectors(n,t).cross(g0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const o=e.delta(xh),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/c;return n===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||m0.getNormalMatrix(e),o=this.coplanarPoint(xh).applyMatrix4(e),c=this.normal.applyMatrix3(n).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let v0=0;class oc extends Yo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=ac(),this.name="",this.type="Material",this.blending=Yc,this.side=Vo,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lg,this.blendDst=cg,this.blendEquation=ql,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=jc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Em,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=th,this.stencilZFail=th,this.stencilZPass=th,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){gt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){gt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(n):o&&o.isVector2&&n&&n.isVector2||o&&o.isEuler&&n&&n.isEuler||o&&o.isVector3&&n&&n.isVector3?o.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(c=>c.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function o(c){const u=[];for(const d in c){const p=c[d];delete p.metadata,u.push(p)}return u}if(t){const c=o(e.textures),u=o(e.images);c.length>0&&(n.textures=c),u.length>0&&(n.images=u)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ut().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Hs().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ct().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ct().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const o=t.length;n=new Array(o);for(let c=0;c!==o;++c)n[c]=t[c].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ls=new K,Mh=new K,qu=new K,ju=new K;class Pg{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ls)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ls.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ls.copy(this.origin).addScaledVector(this.direction,t),ls.distanceToSquared(e))}distanceSqToSegment(e,t,n,o){Mh.copy(e).add(t).multiplyScalar(.5),qu.copy(t).sub(e).normalize(),ju.copy(this.origin).sub(Mh);const c=e.distanceTo(t)*.5,u=-this.direction.dot(qu),d=ju.dot(this.direction),p=-ju.dot(qu),g=ju.lengthSq(),M=Math.abs(1-u*u);let T,_,x,R;if(M>0)if(T=u*p-d,_=u*d-p,R=c*M,T>=0)if(_>=-R)if(_<=R){const U=1/M;T*=U,_*=U,x=T*(T+u*_+2*d)+_*(u*T+_+2*p)+g}else _=c,T=Math.max(0,-(u*_+d)),x=-T*T+_*(_+2*p)+g;else _=-c,T=Math.max(0,-(u*_+d)),x=-T*T+_*(_+2*p)+g;else _<=-R?(T=Math.max(0,-(-u*c+d)),_=T>0?-c:Math.min(Math.max(-c,-p),c),x=-T*T+_*(_+2*p)+g):_<=R?(T=0,_=Math.min(Math.max(-c,-p),c),x=_*(_+2*p)+g):(T=Math.max(0,-(u*c+d)),_=T>0?c:Math.min(Math.max(-c,-p),c),x=-T*T+_*(_+2*p)+g);else _=u>0?-c:c,T=Math.max(0,-(u*_+d)),x=-T*T+_*(_+2*p)+g;return n&&n.copy(this.origin).addScaledVector(this.direction,T),o&&o.copy(Mh).addScaledVector(qu,_),x}intersectSphere(e,t){if(e.radius<0)return null;ls.subVectors(e.center,this.origin);const n=ls.dot(this.direction),o=ls.dot(ls)-n*n,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),d=n-u,p=n+u;return p<0?null:d<0?this.at(p,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,o,c,u,d,p;const g=1/this.direction.x,M=1/this.direction.y,T=1/this.direction.z,_=this.origin;return g>=0?(n=(e.min.x-_.x)*g,o=(e.max.x-_.x)*g):(n=(e.max.x-_.x)*g,o=(e.min.x-_.x)*g),M>=0?(c=(e.min.y-_.y)*M,u=(e.max.y-_.y)*M):(c=(e.max.y-_.y)*M,u=(e.min.y-_.y)*M),n>u||c>o||((c>n||isNaN(n))&&(n=c),(u<o||isNaN(o))&&(o=u),T>=0?(d=(e.min.z-_.z)*T,p=(e.max.z-_.z)*T):(d=(e.max.z-_.z)*T,p=(e.min.z-_.z)*T),n>p||d>o)||((d>n||n!==n)&&(n=d),(p<o||o!==o)&&(o=p),o<0)?null:this.at(n>=0?n:o,t)}intersectsBox(e){return this.intersectBox(e,ls)!==null}intersectTriangle(e,t,n,o,c){const u=this.origin,d=this.direction,p=d.x,g=d.y,M=d.z,T=e.x-u.x,_=e.y-u.y,x=e.z-u.z,R=t.x-u.x,U=t.y-u.y,w=t.z-u.z,y=n.x-u.x,O=n.y-u.y,B=n.z-u.z,P=Math.abs(p),F=Math.abs(g),D=Math.abs(M);let V,S,C,k,H,q,ae,Y,ue,Se,be,Re;if(P>=F&&P>=D?(C=p,q=T,ue=R,Re=y,p>=0?(V=g,S=M,k=_,H=x,ae=U,Y=w,Se=O,be=B):(V=M,S=g,k=x,H=_,ae=w,Y=U,Se=B,be=O)):F>=D?(C=g,q=_,ue=U,Re=O,g>=0?(V=M,S=p,k=x,H=T,ae=w,Y=R,Se=B,be=y):(V=p,S=M,k=T,H=x,ae=R,Y=w,Se=y,be=B)):(C=M,q=x,ue=w,Re=B,M>=0?(V=p,S=g,k=T,H=_,ae=R,Y=U,Se=y,be=O):(V=g,S=p,k=_,H=T,ae=U,Y=R,Se=O,be=y)),C===0)return null;const ne=V/C,G=S/C,Ee=1/C,lt=k-ne*q,rt=H-G*q,Ae=ae-ne*ue,oe=Y-G*ue,Ct=Se-ne*Re,Me=be-G*Re,ye=Ct*oe-Me*Ae,Ke=lt*Me-rt*Ct,ut=Ae*rt-oe*lt;if(o){if(ye<0||Ke<0||ut<0)return null}else if((ye<0||Ke<0||ut<0)&&(ye>0||Ke>0||ut>0))return null;const Ye=ye+Ke+ut;if(Ye===0)return null;const mt=Ee*(ye*q+Ke*ue+ut*Re);return(Ye>0?mt<0:mt>0)?null:this.at(mt/Ye,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kc extends oc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gs,this.combine=yd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _p=new Rn,Uo=new Pg,$u=new Dd,xp=new K,ef=new K,tf=new K,nf=new K,yh=new K,rf=new K,Mp=new K,af=new K;class di extends pi{constructor(e=new $i,t=new Kc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const o=t[n[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,t){const n=this.geometry,o=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(c&&d){rf.set(0,0,0);for(let p=0,g=c.length;p<g;p++){const M=d[p],T=c[p];M!==0&&(yh.fromBufferAttribute(T,e),u?rf.addScaledVector(yh,M):rf.addScaledVector(yh.sub(t),M))}t.add(rf)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$u.copy(n.boundingSphere),$u.applyMatrix4(c),Uo.copy(e.ray).recast(e.near),!($u.containsPoint(Uo.origin)===!1&&(Uo.intersectSphere($u,xp)===null||Uo.origin.distanceToSquared(xp)>(e.far-e.near)**2))&&(_p.copy(c).invert(),Uo.copy(e.ray).applyMatrix4(_p),!(n.boundingBox!==null&&Uo.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Uo)))}_computeIntersections(e,t,n){let o;const c=this.geometry,u=this.material,d=c.index,p=c.attributes.position,g=c.attributes.uv,M=c.attributes.uv1,T=c.attributes.normal,_=c.groups,x=c.drawRange;if(d!==null)if(Array.isArray(u))for(let R=0,U=_.length;R<U;R++){const w=_[R],y=u[w.materialIndex],O=Math.max(w.start,x.start),B=Math.min(d.count,Math.min(w.start+w.count,x.start+x.count));for(let P=O,F=B;P<F;P+=3){const D=d.getX(P),V=d.getX(P+1),S=d.getX(P+2);o=sf(this,y,e,n,g,M,T,D,V,S),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=w.materialIndex,t.push(o))}}else{const R=Math.max(0,x.start),U=Math.min(d.count,x.start+x.count);for(let w=R,y=U;w<y;w+=3){const O=d.getX(w),B=d.getX(w+1),P=d.getX(w+2);o=sf(this,u,e,n,g,M,T,O,B,P),o&&(o.faceIndex=Math.floor(w/3),t.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let R=0,U=_.length;R<U;R++){const w=_[R],y=u[w.materialIndex],O=Math.max(w.start,x.start),B=Math.min(p.count,Math.min(w.start+w.count,x.start+x.count));for(let P=O,F=B;P<F;P+=3){const D=P,V=P+1,S=P+2;o=sf(this,y,e,n,g,M,T,D,V,S),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=w.materialIndex,t.push(o))}}else{const R=Math.max(0,x.start),U=Math.min(p.count,x.start+x.count);for(let w=R,y=U;w<y;w+=3){const O=w,B=w+1,P=w+2;o=sf(this,u,e,n,g,M,T,O,B,P),o&&(o.faceIndex=Math.floor(w/3),t.push(o))}}}}function _0(i,e,t,n,o,c,u,d){let p;if(e.side===ji?p=n.intersectTriangle(u,c,o,!0,d):p=n.intersectTriangle(o,c,u,e.side===Vo,d),p===null)return null;af.copy(d),af.applyMatrix4(i.matrixWorld);const g=t.ray.origin.distanceTo(af);return g<t.near||g>t.far?null:{distance:g,point:af.clone(),object:i}}function sf(i,e,t,n,o,c,u,d,p,g){i.getVertexPosition(d,ef),i.getVertexPosition(p,tf),i.getVertexPosition(g,nf);const M=_0(i,e,t,n,ef,tf,nf,Mp);if(M){const T=new K;jr.getBarycoord(Mp,ef,tf,nf,T),o&&(M.uv=jr.getInterpolatedAttribute(o,d,p,g,T,new ct)),c&&(M.uv1=jr.getInterpolatedAttribute(c,d,p,g,T,new ct)),u&&(M.normal=jr.getInterpolatedAttribute(u,d,p,g,T,new K),M.normal.dot(n.direction)>0&&M.normal.multiplyScalar(-1));const _={a:d,b:p,c:g,normal:new K,materialIndex:0};jr.getNormal(ef,tf,nf,_.normal),M.face=_,M.barycoord=T}return M}class x0 extends Ri{constructor(e=null,t=1,n=1,o,c,u,d,p,g=hi,M=hi,T,_){super(null,u,d,p,g,M,o,c,T,_),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Fo=new Dd,M0=new ct(.5,.5),of=new K;class Nd{constructor(e=new Hs,t=new Hs,n=new Hs,o=new Hs,c=new Hs,u=new Hs){this.planes=[e,t,n,o,c,u]}set(e,t,n,o,c,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(n),d[3].copy(o),d[4].copy(c),d[5].copy(u),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=wa,n=!1){const o=this.planes,c=e.elements,u=c[0],d=c[1],p=c[2],g=c[3],M=c[4],T=c[5],_=c[6],x=c[7],R=c[8],U=c[9],w=c[10],y=c[11],O=c[12],B=c[13],P=c[14],F=c[15];if(o[0].setComponents(g-u,x-M,y-R,F-O).normalize(),o[1].setComponents(g+u,x+M,y+R,F+O).normalize(),o[2].setComponents(g+d,x+T,y+U,F+B).normalize(),o[3].setComponents(g-d,x-T,y-U,F-B).normalize(),n)o[4].setComponents(p,_,w,P).normalize(),o[5].setComponents(g-p,x-_,y-w,F-P).normalize();else if(o[4].setComponents(g-p,x-_,y-w,F-P).normalize(),t===wa)o[5].setComponents(g+p,x+_,y+w,F+P).normalize();else if(t===tu)o[5].setComponents(p,_,w,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fo)}intersectsSprite(e){Fo.center.set(0,0,0);const t=M0.distanceTo(e.center);return Fo.radius=.7071067811865476+t,Fo.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fo)}intersectsSphere(e){const t=this.planes,n=e.center,o=-e.radius;for(let c=0;c<6;c++)if(t[c].distanceToPoint(n)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const o=t[n];if(of.x=o.normal.x>0?e.max.x:e.min.x,of.y=o.normal.y>0?e.max.y:e.min.y,of.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(of)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Lg extends Ri{constructor(e=[],t=Wo,n,o,c,u,d,p,g,M){super(e,t,n,o,c,u,d,p,g,M),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yp extends Ri{constructor(e,t,n,o,c,u,d,p,g){super(e,t,n,o,c,u,d,p,g),this.isCanvasTexture=!0,this.needsUpdate=!0}}class iu extends Ri{constructor(e,t,n=Ra,o,c,u,d=hi,p=hi,g,M=ps,T=1){if(M!==ps&&M!==Ho)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:T};super(_,o,c,u,d,p,M,n,g),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ld(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class y0 extends iu{constructor(e,t=Ra,n=Wo,o,c,u=hi,d=hi,p,g=ps){const M={width:e,height:e,depth:1},T=[M,M,M,M,M,M];super(e,e,t,n,o,c,u,d,p,g),this.image=T,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ig extends Ri{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Vs extends $i{constructor(e=1,t=1,n=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:o,heightSegments:c,depthSegments:u};const d=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const p=[],g=[],M=[],T=[];let _=0,x=0;R("z","y","x",-1,-1,n,t,e,u,c,0),R("z","y","x",1,-1,n,t,-e,u,c,1),R("x","z","y",1,1,e,n,t,o,u,2),R("x","z","y",1,-1,e,n,-t,o,u,3),R("x","y","z",1,-1,e,t,n,o,c,4),R("x","y","z",-1,-1,e,t,-n,o,c,5),this.setIndex(p),this.setAttribute("position",new Cn(g,3)),this.setAttribute("normal",new Cn(M,3)),this.setAttribute("uv",new Cn(T,2));function R(U,w,y,O,B,P,F,D,V,S,C){const k=P/V,H=F/S,q=P/2,ae=F/2,Y=D/2,ue=V+1,Se=S+1;let be=0,Re=0;const ne=new K;for(let G=0;G<Se;G++){const Ee=G*H-ae;for(let lt=0;lt<ue;lt++){const rt=lt*k-q;ne[U]=rt*O,ne[w]=Ee*B,ne[y]=Y,g.push(ne.x,ne.y,ne.z),ne[U]=0,ne[w]=0,ne[y]=D>0?1:-1,M.push(ne.x,ne.y,ne.z),T.push(lt/V),T.push(1-G/S),be+=1}}for(let G=0;G<S;G++)for(let Ee=0;Ee<V;Ee++){const lt=_+Ee+ue*G,rt=_+Ee+ue*(G+1),Ae=_+(Ee+1)+ue*(G+1),oe=_+(Ee+1)+ue*G;p.push(lt,rt,oe),p.push(rt,Ae,oe),Re+=6}d.addGroup(x,Re,C),x+=Re,_+=be}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Go extends $i{constructor(e=1,t=1,n=1,o=32,c=1,u=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:o,heightSegments:c,openEnded:u,thetaStart:d,thetaLength:p};const g=this;o=Math.floor(o),c=Math.floor(c);const M=[],T=[],_=[],x=[];let R=0;const U=[],w=n/2;let y=0;O(),u===!1&&(e>0&&B(!0),t>0&&B(!1)),this.setIndex(M),this.setAttribute("position",new Cn(T,3)),this.setAttribute("normal",new Cn(_,3)),this.setAttribute("uv",new Cn(x,2));function O(){const P=new K,F=new K;let D=0;const V=(t-e)/n;for(let S=0;S<=c;S++){const C=[],k=S/c,H=k*(t-e)+e;for(let q=0;q<=o;q++){const ae=q/o,Y=ae*p+d,ue=Math.sin(Y),Se=Math.cos(Y);F.x=H*ue,F.y=-k*n+w,F.z=H*Se,T.push(F.x,F.y,F.z),P.set(ue,V,Se).normalize(),_.push(P.x,P.y,P.z),x.push(ae,1-k),C.push(R++)}U.push(C)}for(let S=0;S<o;S++)for(let C=0;C<c;C++){const k=U[C][S],H=U[C+1][S],q=U[C+1][S+1],ae=U[C][S+1];(e>0||C!==0)&&(M.push(k,H,ae),D+=3),(t>0||C!==c-1)&&(M.push(H,q,ae),D+=3)}g.addGroup(y,D,0),y+=D}function B(P){const F=R,D=new ct,V=new K;let S=0;const C=P===!0?e:t,k=P===!0?1:-1;for(let q=1;q<=o;q++)T.push(0,w*k,0),_.push(0,k,0),x.push(.5,.5),R++;const H=R;for(let q=0;q<=o;q++){const Y=q/o*p+d,ue=Math.cos(Y),Se=Math.sin(Y);V.x=C*Se,V.y=w*k,V.z=C*ue,T.push(V.x,V.y,V.z),_.push(0,k,0),D.x=ue*.5+.5,D.y=Se*.5*k+.5,x.push(D.x,D.y),R++}for(let q=0;q<o;q++){const ae=F+q,Y=H+q;P===!0?M.push(Y,Y+1,ae):M.push(Y+1,Y,ae),S+=3}g.addGroup(y,S,P===!0?1:2),y+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Go(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ud extends $i{constructor(e=[],t=[],n=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:o};const c=[],u=[];d(o),g(n),M(),this.setAttribute("position",new Cn(c,3)),this.setAttribute("normal",new Cn(c.slice(),3)),this.setAttribute("uv",new Cn(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function d(O){const B=new K,P=new K,F=new K;for(let D=0;D<t.length;D+=3)x(t[D+0],B),x(t[D+1],P),x(t[D+2],F),p(B,P,F,O)}function p(O,B,P,F){const D=F+1,V=[];for(let S=0;S<=D;S++){V[S]=[];const C=O.clone().lerp(P,S/D),k=B.clone().lerp(P,S/D),H=D-S;for(let q=0;q<=H;q++)q===0&&S===D?V[S][q]=C:V[S][q]=C.clone().lerp(k,q/H)}for(let S=0;S<D;S++)for(let C=0;C<2*(D-S)-1;C++){const k=Math.floor(C/2);C%2===0?(_(V[S][k+1]),_(V[S+1][k]),_(V[S][k])):(_(V[S][k+1]),_(V[S+1][k+1]),_(V[S+1][k]))}}function g(O){const B=new K;for(let P=0;P<c.length;P+=3)B.x=c[P+0],B.y=c[P+1],B.z=c[P+2],B.normalize().multiplyScalar(O),c[P+0]=B.x,c[P+1]=B.y,c[P+2]=B.z}function M(){const O=new K;for(let B=0;B<c.length;B+=3){O.x=c[B+0],O.y=c[B+1],O.z=c[B+2];const P=w(O)/2/Math.PI+.5,F=y(O)/Math.PI+.5;u.push(P,1-F)}R(),T()}function T(){for(let O=0;O<u.length;O+=6){const B=u[O+0],P=u[O+2],F=u[O+4],D=Math.max(B,P,F),V=Math.min(B,P,F);D>.9&&V<.1&&(B<.2&&(u[O+0]+=1),P<.2&&(u[O+2]+=1),F<.2&&(u[O+4]+=1))}}function _(O){c.push(O.x,O.y,O.z)}function x(O,B){const P=O*3;B.x=e[P+0],B.y=e[P+1],B.z=e[P+2]}function R(){const O=new K,B=new K,P=new K,F=new K,D=new ct,V=new ct,S=new ct;for(let C=0,k=0;C<c.length;C+=9,k+=6){O.set(c[C+0],c[C+1],c[C+2]),B.set(c[C+3],c[C+4],c[C+5]),P.set(c[C+6],c[C+7],c[C+8]),D.set(u[k+0],u[k+1]),V.set(u[k+2],u[k+3]),S.set(u[k+4],u[k+5]),F.copy(O).add(B).add(P).divideScalar(3);const H=w(F);U(D,k+0,O,H),U(V,k+2,B,H),U(S,k+4,P,H)}}function U(O,B,P,F){F<0&&O.x===1&&(u[B]=O.x-1),P.x===0&&P.z===0&&(u[B]=F/2/Math.PI+.5)}function w(O){return Math.atan2(O.z,-O.x)}function y(O){return Math.atan2(-O.y,Math.sqrt(O.x*O.x+O.z*O.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ud(e.vertices,e.indices,e.radius,e.detail)}}class ms{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){gt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,o=this.getPoint(0),c=0;t.push(0);for(let u=1;u<=e;u++)n=this.getPoint(u/e),c+=n.distanceTo(o),t.push(c),o=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let o=0;const c=n.length;let u;t?u=t:u=e*n[c-1];let d=0,p=c-1,g;for(;d<=p;)if(o=Math.floor(d+(p-d)/2),g=n[o]-u,g<0)d=o+1;else if(g>0)p=o-1;else{p=o;break}if(o=p,n[o]===u)return o/(c-1);const M=n[o],_=n[o+1]-M,x=(u-M)/_;return(o+x)/(c-1)}getTangent(e,t){let o=e-1e-4,c=e+1e-4;o<0&&(o=0),c>1&&(c=1);const u=this.getPoint(o),d=this.getPoint(c),p=t||(u.isVector2?new ct:new K);return p.copy(d).sub(u).normalize(),p}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new K,o=[],c=[],u=[],d=new K,p=new Rn;for(let x=0;x<=e;x++){const R=x/e;o[x]=this.getTangentAt(R,new K)}c[0]=new K,u[0]=new K;let g=Number.MAX_VALUE;const M=Math.abs(o[0].x),T=Math.abs(o[0].y),_=Math.abs(o[0].z);M<=g&&(g=M,n.set(1,0,0)),T<=g&&(g=T,n.set(0,1,0)),_<=g&&n.set(0,0,1),d.crossVectors(o[0],n).normalize(),c[0].crossVectors(o[0],d),u[0].crossVectors(o[0],c[0]);for(let x=1;x<=e;x++){if(c[x]=c[x-1].clone(),u[x]=u[x-1].clone(),d.crossVectors(o[x-1],o[x]),d.length()>Number.EPSILON){d.normalize();const R=Math.acos(Nt(o[x-1].dot(o[x]),-1,1));c[x].applyMatrix4(p.makeRotationAxis(d,R))}u[x].crossVectors(o[x],c[x])}if(t===!0){let x=Math.acos(Nt(c[0].dot(c[e]),-1,1));x/=e,o[0].dot(d.crossVectors(c[0],c[e]))>0&&(x=-x);for(let R=1;R<=e;R++)c[R].applyMatrix4(p.makeRotationAxis(o[R],x*R)),u[R].crossVectors(o[R],c[R])}return{tangents:o,normals:c,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Dg extends ms{constructor(e=0,t=0,n=1,o=1,c=0,u=Math.PI*2,d=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=o,this.aStartAngle=c,this.aEndAngle=u,this.aClockwise=d,this.aRotation=p}getPoint(e,t=new ct){const n=t,o=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const u=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=o;for(;c>o;)c-=o;c<Number.EPSILON&&(u?c=0:c=o),this.aClockwise===!0&&!u&&(c===o?c=-o:c=c-o);const d=this.aStartAngle+e*c;let p=this.aX+this.xRadius*Math.cos(d),g=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const M=Math.cos(this.aRotation),T=Math.sin(this.aRotation),_=p-this.aX,x=g-this.aY;p=_*M-x*T+this.aX,g=_*T+x*M+this.aY}return n.set(p,g)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class S0 extends Dg{constructor(e,t,n,o,c,u){super(e,t,n,n,o,c,u),this.isArcCurve=!0,this.type="ArcCurve"}}function Fd(){let i=0,e=0,t=0,n=0;function o(c,u,d,p){i=c,e=d,t=-3*c+3*u-2*d-p,n=2*c-2*u+d+p}return{initCatmullRom:function(c,u,d,p,g){o(u,d,g*(d-c),g*(p-u))},initNonuniformCatmullRom:function(c,u,d,p,g,M,T){let _=(u-c)/g-(d-c)/(g+M)+(d-u)/M,x=(d-u)/M-(p-u)/(M+T)+(p-d)/T;_*=M,x*=M,o(u,d,_,x)},calc:function(c){const u=c*c,d=u*c;return i+e*c+t*u+n*d}}}const Sp=new K,bp=new K,Sh=new Fd,bh=new Fd,Eh=new Fd;class Ng extends ms{constructor(e=[],t=!1,n="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=o}getPoint(e,t=new K){const n=t,o=this.points,c=o.length,u=(c-(this.closed?0:1))*e;let d=Math.floor(u),p=u-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:p===0&&d===c-1&&(d=c-2,p=1);let g,M;this.closed||d>0?g=o[(d-1)%c]:(bp.subVectors(o[0],o[1]).add(o[0]),g=bp);const T=o[d%c],_=o[(d+1)%c];if(this.closed||d+2<c?M=o[(d+2)%c]:(Sp.subVectors(o[c-1],o[c-2]).add(o[c-1]),M=Sp),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let R=Math.pow(g.distanceToSquared(T),x),U=Math.pow(T.distanceToSquared(_),x),w=Math.pow(_.distanceToSquared(M),x);U<1e-4&&(U=1),R<1e-4&&(R=U),w<1e-4&&(w=U),Sh.initNonuniformCatmullRom(g.x,T.x,_.x,M.x,R,U,w),bh.initNonuniformCatmullRom(g.y,T.y,_.y,M.y,R,U,w),Eh.initNonuniformCatmullRom(g.z,T.z,_.z,M.z,R,U,w)}else this.curveType==="catmullrom"&&(Sh.initCatmullRom(g.x,T.x,_.x,M.x,this.tension),bh.initCatmullRom(g.y,T.y,_.y,M.y,this.tension),Eh.initCatmullRom(g.z,T.z,_.z,M.z,this.tension));return n.set(Sh.calc(p),bh.calc(p),Eh.calc(p)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const o=e.points[t];this.points.push(new K().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ep(i,e,t,n,o){const c=(n-e)*.5,u=(o-t)*.5,d=i*i,p=i*d;return(2*t-2*n+c+u)*p+(-3*t+3*n-2*c-u)*d+c*i+t}function b0(i,e){const t=1-i;return t*t*e}function E0(i,e){return 2*(1-i)*i*e}function T0(i,e){return i*i*e}function Qc(i,e,t,n){return b0(i,e)+E0(i,t)+T0(i,n)}function w0(i,e){const t=1-i;return t*t*t*e}function A0(i,e){const t=1-i;return 3*t*t*i*e}function R0(i,e){return 3*(1-i)*i*i*e}function C0(i,e){return i*i*i*e}function qc(i,e,t,n,o){return w0(i,e)+A0(i,t)+R0(i,n)+C0(i,o)}class P0 extends ms{constructor(e=new ct,t=new ct,n=new ct,o=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=o}getPoint(e,t=new ct){const n=t,o=this.v0,c=this.v1,u=this.v2,d=this.v3;return n.set(qc(e,o.x,c.x,u.x,d.x),qc(e,o.y,c.y,u.y,d.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class L0 extends ms{constructor(e=new K,t=new K,n=new K,o=new K){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=o}getPoint(e,t=new K){const n=t,o=this.v0,c=this.v1,u=this.v2,d=this.v3;return n.set(qc(e,o.x,c.x,u.x,d.x),qc(e,o.y,c.y,u.y,d.y),qc(e,o.z,c.z,u.z,d.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class I0 extends ms{constructor(e=new ct,t=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ct){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ct){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class D0 extends ms{constructor(e=new K,t=new K){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new K){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new K){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class N0 extends ms{constructor(e=new ct,t=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ct){const n=t,o=this.v0,c=this.v1,u=this.v2;return n.set(Qc(e,o.x,c.x,u.x),Qc(e,o.y,c.y,u.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ug extends ms{constructor(e=new K,t=new K,n=new K){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new K){const n=t,o=this.v0,c=this.v1,u=this.v2;return n.set(Qc(e,o.x,c.x,u.x),Qc(e,o.y,c.y,u.y),Qc(e,o.z,c.z,u.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class U0 extends ms{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ct){const n=t,o=this.points,c=(o.length-1)*e,u=Math.floor(c),d=c-u,p=o[u===0?u:u-1],g=o[u],M=o[u>o.length-2?o.length-1:u+1],T=o[u>o.length-3?o.length-1:u+2];return n.set(Ep(d,p.x,g.x,M.x,T.x),Ep(d,p.y,g.y,M.y,T.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const o=e.points[t];this.points.push(new ct().fromArray(o))}return this}}var F0=Object.freeze({__proto__:null,ArcCurve:S0,CatmullRomCurve3:Ng,CubicBezierCurve:P0,CubicBezierCurve3:L0,EllipseCurve:Dg,LineCurve:I0,LineCurve3:D0,QuadraticBezierCurve:N0,QuadraticBezierCurve3:Ug,SplineCurve:U0});class Ef extends Ud{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],o=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,o,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ef(e.radius,e.detail)}}class ic extends $i{constructor(e=1,t=1,n=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:o};const c=e/2,u=t/2,d=Math.floor(n),p=Math.floor(o),g=d+1,M=p+1,T=e/d,_=t/p,x=[],R=[],U=[],w=[];for(let y=0;y<M;y++){const O=y*_-u;for(let B=0;B<g;B++){const P=B*T-c;R.push(P,-O,0),U.push(0,0,1),w.push(B/d),w.push(1-y/p)}}for(let y=0;y<p;y++)for(let O=0;O<d;O++){const B=O+g*y,P=O+g*(y+1),F=O+1+g*(y+1),D=O+1+g*y;x.push(B,P,D),x.push(P,F,D)}this.setIndex(x),this.setAttribute("position",new Cn(R,3)),this.setAttribute("normal",new Cn(U,3)),this.setAttribute("uv",new Cn(w,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ic(e.width,e.height,e.widthSegments,e.heightSegments)}}class Af extends $i{constructor(e=1,t=32,n=16,o=0,c=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:o,phiLength:c,thetaStart:u,thetaLength:d},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const p=Math.min(u+d,Math.PI);let g=0;const M=[],T=new K,_=new K,x=[],R=[],U=[],w=[];for(let y=0;y<=n;y++){const O=[],B=y/n,P=u+B*d,F=e*Math.cos(P),D=Math.sqrt(e*e-F*F);let V=0;y===0&&u===0?V=.5/t:y===n&&p===Math.PI&&(V=-.5/t);for(let S=0;S<=t;S++){const C=S/t,k=o+C*c;T.x=-D*Math.cos(k),T.y=F,T.z=D*Math.sin(k),R.push(T.x,T.y,T.z),_.copy(T).normalize(),U.push(_.x,_.y,_.z),w.push(C+V,1-B),O.push(g++)}M.push(O)}for(let y=0;y<n;y++)for(let O=0;O<t;O++){const B=M[y][O+1],P=M[y][O],F=M[y+1][O],D=M[y+1][O+1];(y!==0||u>0)&&x.push(B,P,D),(y!==n-1||p<Math.PI)&&x.push(P,F,D)}this.setIndex(x),this.setAttribute("position",new Cn(R,3)),this.setAttribute("normal",new Cn(U,3)),this.setAttribute("uv",new Cn(w,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Af(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Rf extends $i{constructor(e=1,t=.4,n=12,o=48,c=Math.PI*2,u=0,d=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:o,arc:c,thetaStart:u,thetaLength:d},n=Math.floor(n),o=Math.floor(o);const p=[],g=[],M=[],T=[],_=new K,x=new K,R=new K;for(let U=0;U<=n;U++){const w=u+U/n*d;for(let y=0;y<=o;y++){const O=y/o*c;x.x=(e+t*Math.cos(w))*Math.cos(O),x.y=(e+t*Math.cos(w))*Math.sin(O),x.z=t*Math.sin(w),g.push(x.x,x.y,x.z),_.x=e*Math.cos(O),_.y=e*Math.sin(O),R.subVectors(x,_).normalize(),M.push(R.x,R.y,R.z),T.push(y/o),T.push(U/n)}}for(let U=1;U<=n;U++)for(let w=1;w<=o;w++){const y=(o+1)*U+w-1,O=(o+1)*(U-1)+w-1,B=(o+1)*(U-1)+w,P=(o+1)*U+w;p.push(y,O,P),p.push(O,B,P)}this.setIndex(p),this.setAttribute("position",new Cn(g,3)),this.setAttribute("normal",new Cn(M,3)),this.setAttribute("uv",new Cn(T,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rf(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class Od extends $i{constructor(e=new Ug(new K(-1,-1,0),new K(-1,1,0),new K(1,1,0)),t=64,n=1,o=8,c=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:o,closed:c};const u=e.computeFrenetFrames(t,c);this.tangents=u.tangents,this.normals=u.normals,this.binormals=u.binormals;const d=new K,p=new K,g=new ct;let M=new K;const T=[],_=[],x=[],R=[];U(),this.setIndex(R),this.setAttribute("position",new Cn(T,3)),this.setAttribute("normal",new Cn(_,3)),this.setAttribute("uv",new Cn(x,2));function U(){for(let B=0;B<t;B++)w(B);w(c===!1?t:0),O(),y()}function w(B){M=e.getPointAt(B/t,M);const P=u.normals[B],F=u.binormals[B];for(let D=0;D<=o;D++){const V=D/o*Math.PI*2,S=Math.sin(V),C=-Math.cos(V);p.x=C*P.x+S*F.x,p.y=C*P.y+S*F.y,p.z=C*P.z+S*F.z,p.normalize(),_.push(p.x,p.y,p.z),d.x=M.x+n*p.x,d.y=M.y+n*p.y,d.z=M.z+n*p.z,T.push(d.x,d.y,d.z)}}function y(){for(let B=1;B<=t;B++)for(let P=1;P<=o;P++){const F=(o+1)*(B-1)+(P-1),D=(o+1)*B+(P-1),V=(o+1)*B+P,S=(o+1)*(B-1)+P;R.push(F,D,S),R.push(D,V,S)}}function O(){for(let B=0;B<=t;B++)for(let P=0;P<=o;P++)g.x=B/t,g.y=P/o,x.push(g.x,g.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Od(new F0[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function rc(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const o=i[t][n];if(Tp(o))o.isRenderTargetTexture?(gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=o.clone();else if(Array.isArray(o))if(Tp(o[0])){const c=[];for(let u=0,d=o.length;u<d;u++)c[u]=o[u].clone();e[t][n]=c}else e[t][n]=o.slice();else e[t][n]=o}}return e}function zi(i){const e={};for(let t=0;t<i.length;t++){const n=rc(i[t]);for(const o in n)e[o]=n[o]}return e}function Tp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function O0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Fg(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Gt.workingColorSpace}const B0={clone:rc,merge:zi};var z0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,k0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pa extends oc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=z0,this.fragmentShader=k0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rc(e.uniforms),this.uniformsGroups=O0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const o in this.extensions)this.extensions[o]===!0&&(n[o]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const o=e.uniforms[n];switch(this.uniforms[n]={},o.type){case"t":this.uniforms[n].value=t[o.value]||null;break;case"c":this.uniforms[n].value=new Ut().setHex(o.value);break;case"v2":this.uniforms[n].value=new ct().fromArray(o.value);break;case"v3":this.uniforms[n].value=new K().fromArray(o.value);break;case"v4":this.uniforms[n].value=new Un().fromArray(o.value);break;case"m3":this.uniforms[n].value=new Et().fromArray(o.value);break;case"m4":this.uniforms[n].value=new Rn().fromArray(o.value);break;default:this.uniforms[n].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class H0 extends Pa{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ru extends oc{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mf,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gs,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Og extends ru{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ct(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ut(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ut(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ut(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class G0 extends oc{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mf,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gs,this.combine=yd,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class V0 extends oc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class W0 extends oc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Bd extends pi{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class X0 extends Bd{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pi.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Th=new Rn,wp=new K,Ap=new K;class Bg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=cr,this.map=null,this.mapPass=null,this.matrix=new Rn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nd,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new Un(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;wp.setFromMatrixPosition(e.matrixWorld),t.position.copy(wp),Ap.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ap),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,o){Th.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Th,e.coordinateSystem,e.reversedDepth);const c=this._frameExtents,u=o?o.z/c.x:1,d=o?o.w/c.y:1,p=o?o.x/c.x:0,g=o?o.y/c.y:0;e.coordinateSystem===tu||e.reversedDepth?t.set(.5*u,0,0,.5*u+p,0,.5*d,0,.5*d+g,0,0,1,0,0,0,0,1):t.set(.5*u,0,0,.5*u+p,0,.5*d,0,.5*d+g,0,0,.5,.5,0,0,0,1),t.multiply(Th)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const lf=new K,cf=new sc,Sa=new K;class zg extends pi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rn,this.projectionMatrix=new Rn,this.projectionMatrixInverse=new Rn,this.coordinateSystem=wa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(lf,cf,Sa),Sa.x===1&&Sa.y===1&&Sa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lf,cf,Sa.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(lf,cf,Sa),Sa.x===1&&Sa.y===1&&Sa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lf,cf,Sa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ks=new K,Rp=new ct,Cp=new ct;class lr extends zg{constructor(e=50,t=1,n=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=nu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nu*2*Math.atan(Math.tan(Zc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ks.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ks.x,ks.y).multiplyScalar(-e/ks.z),ks.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ks.x,ks.y).multiplyScalar(-e/ks.z)}getViewSize(e,t){return this.getViewBounds(e,Rp,Cp),t.subVectors(Cp,Rp)}setViewOffset(e,t,n,o,c,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zc*.5*this.fov)/this.zoom,n=2*t,o=this.aspect*n,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,g=u.fullHeight;c+=u.offsetX*o/p,t-=u.offsetY*n/g,o*=u.width/p,n*=u.height/g}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Y0 extends Bg{constructor(){super(new lr(90,1,.5,500)),this.isPointLightShadow=!0}}class Z0 extends Bd{constructor(e,t,n=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=o,this.shadow=new Y0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class zd extends zg{constructor(e=-1,t=1,n=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=n-e,u=n+e,d=o+t,p=o-t;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,M=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=g*this.view.offsetX,u=c+g*this.view.width,d-=M*this.view.offsetY,p=d-M*this.view.height}this.projectionMatrix.makeOrthographic(c,u,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class J0 extends Bg{constructor(){super(new zd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class K0 extends Bd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pi.DEFAULT_UP),this.updateMatrix(),this.target=new pi,this.shadow=new J0}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Zl=-90,Jl=1;class Q0 extends pi{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new lr(Zl,Jl,e,t);o.layers=this.layers,this.add(o);const c=new lr(Zl,Jl,e,t);c.layers=this.layers,this.add(c);const u=new lr(Zl,Jl,e,t);u.layers=this.layers,this.add(u);const d=new lr(Zl,Jl,e,t);d.layers=this.layers,this.add(d);const p=new lr(Zl,Jl,e,t);p.layers=this.layers,this.add(p);const g=new lr(Zl,Jl,e,t);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,o,c,u,d,p]=t;for(const g of t)this.remove(g);if(e===wa)n.up.set(0,1,0),n.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===tu)n.up.set(0,-1,0),n.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const g of t)this.add(g),g.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,d,p,g,M]=this.children,T=e.getRenderTarget(),_=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),R=e.xr.enabled;e.xr.enabled=!1;const U=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let w=!1;e.isWebGLRenderer===!0?w=e.state.buffers.depth.getReversed():w=e.reversedDepthBuffer,e.setRenderTarget(n,0,o),w&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,1,o),w&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(n,2,o),w&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(n,3,o),w&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(n,4,o),w&&e.autoClear===!1&&e.clearDepth(),e.render(t,g),n.texture.generateMipmaps=U,e.setRenderTarget(n,5,o),w&&e.autoClear===!1&&e.clearDepth(),e.render(t,M),e.setRenderTarget(T,_,x),e.xr.enabled=R,n.texture.needsPMREMUpdate=!0}}class q0 extends lr{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Pp=new Rn;class j0{constructor(e,t,n=0,o=1/0){this.ray=new Pg(e,t),this.near=n,this.far=o,this.camera=null,this.layers=new Id,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Zt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Pp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Pp),this}intersectObject(e,t=!0,n=[]){return vd(e,this,n,t),n.sort(Lp),n}intersectObjects(e,t=!0,n=[]){for(let o=0,c=e.length;o<c;o++)vd(e[o],this,n,t);return n.sort(Lp),n}}function Lp(i,e){return i.distance-e.distance}function vd(i,e,t,n){let o=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(o=!1),o===!0&&n===!0){const c=i.children;for(let u=0,d=c.length;u<d;u++)vd(c[u],e,t,!0)}}const Wd=class Wd{constructor(e,t,n,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,o){const c=this.elements;return c[0]=e,c[2]=t,c[1]=n,c[3]=o,this}};Wd.prototype.isMatrix2=!0;let Ip=Wd;function Dp(i,e,t,n){const o=$0(n);switch(t){case Sg:return i*e;case Eg:return i*e/o.components*o.byteLength;case Td:return i*e/o.components*o.byteLength;case Xo:return i*e*2/o.components*o.byteLength;case wd:return i*e*2/o.components*o.byteLength;case bg:return i*e*3/o.components*o.byteLength;case $r:return i*e*4/o.components*o.byteLength;case Ad:return i*e*4/o.components*o.byteLength;case df:case pf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case gf:case mf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Gh:case Wh:return Math.max(i,16)*Math.max(e,8)/4;case Hh:case Vh:return Math.max(i,8)*Math.max(e,8)/2;case Xh:case Yh:case Jh:case Kh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Zh:case _f:case Qh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case qh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jh:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case $h:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ed:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case td:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case nd:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case id:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case rd:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ad:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case sd:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case od:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ld:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case cd:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ud:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case fd:case hd:case dd:return Math.ceil(i/4)*Math.ceil(e/4)*16;case pd:case gd:return Math.ceil(i/4)*Math.ceil(e/4)*8;case xf:case md:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $0(i){switch(i){case cr:case _g:return{byteLength:1,components:1};case $c:case xg:case Ca:return{byteLength:2,components:1};case bd:case Ed:return{byteLength:2,components:4};case Ra:case Sd:case Ta:return{byteLength:4,components:1};case Mg:case yg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Md}}));typeof window<"u"&&(window.__THREE__?gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Md);function kg(){let i=null,e=!1,t=null,n=null;function o(c,u){n=i.requestAnimationFrame(o),t(c,u)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(o),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(c){t=c},setContext:function(c){i=c}}}function ev(i){const e=new WeakMap;function t(d,p){const g=d.array,M=d.usage,T=g.byteLength,_=i.createBuffer();i.bindBuffer(p,_),i.bufferData(p,g,M),d.onUploadCallback();let x;if(g instanceof Float32Array)x=i.FLOAT;else if(typeof Float16Array<"u"&&g instanceof Float16Array)x=i.HALF_FLOAT;else if(g instanceof Uint16Array)d.isFloat16BufferAttribute?x=i.HALF_FLOAT:x=i.UNSIGNED_SHORT;else if(g instanceof Int16Array)x=i.SHORT;else if(g instanceof Uint32Array)x=i.UNSIGNED_INT;else if(g instanceof Int32Array)x=i.INT;else if(g instanceof Int8Array)x=i.BYTE;else if(g instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:_,type:x,bytesPerElement:g.BYTES_PER_ELEMENT,version:d.version,size:T}}function n(d,p,g){const M=p.array,T=p.updateRanges;if(i.bindBuffer(g,d),T.length===0)i.bufferSubData(g,0,M);else{T.sort((x,R)=>x.start-R.start);let _=0;for(let x=1;x<T.length;x++){const R=T[_],U=T[x];U.start<=R.start+R.count+1?R.count=Math.max(R.count,U.start+U.count-R.start):(++_,T[_]=U)}T.length=_+1;for(let x=0,R=T.length;x<R;x++){const U=T[x];i.bufferSubData(g,U.start*M.BYTES_PER_ELEMENT,M,U.start,U.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(i.deleteBuffer(p.buffer),e.delete(d))}function u(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const M=e.get(d);(!M||M.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const g=e.get(d);if(g===void 0)e.set(d,t(d,p));else if(g.version<d.version){if(g.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(g.buffer,d,p),g.version=d.version}}return{get:o,remove:c,update:u}}var tv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nv=`#ifdef USE_ALPHAHASH
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
#endif`,iv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,av=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ov=`#ifdef USE_AOMAP
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
#endif`,lv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cv=`#ifdef USE_BATCHING
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
#endif`,uv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pv=`#ifdef USE_IRIDESCENCE
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
#endif`,gv=`#ifdef USE_BUMPMAP
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
#endif`,mv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_v=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,yv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Sv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,bv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ev=`#define PI 3.141592653589793
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
} // validated`,Tv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wv=`vec3 transformedNormal = objectNormal;
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
#endif`,Av=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Iv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dv=`#ifdef USE_ENVMAP
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
#endif`,Nv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Uv=`#ifdef USE_ENVMAP
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
#endif`,Fv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ov=`#ifdef USE_ENVMAP
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
#endif`,Bv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gv=`#ifdef USE_GRADIENTMAP
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
}`,Vv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Zv=`#ifdef USE_ENVMAP
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
#endif`,Jv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jv=`PhysicalMaterial material;
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
#endif`,$v=`uniform sampler2D dfgLUT;
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
}`,e_=`
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
#endif`,t_=`#if defined( RE_IndirectDiffuse )
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
#endif`,n_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,i_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,r_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,a_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,l_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,c_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,u_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,f_=`#if defined( USE_POINTS_UV )
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
#endif`,h_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,d_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,p_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,g_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,m_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v_=`#ifdef USE_MORPHTARGETS
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
#endif`,__=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,M_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,y_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,E_=`#ifdef USE_NORMALMAP
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
#endif`,T_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,w_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,A_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,R_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,C_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,P_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,L_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,I_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,D_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,N_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,U_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,F_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,O_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,B_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,z_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,k_=`float getShadowMask() {
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
}`,H_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,G_=`#ifdef USE_SKINNING
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
#endif`,V_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,W_=`#ifdef USE_SKINNING
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
#endif`,X_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Y_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Z_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,J_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,K_=`#ifdef USE_TRANSMISSION
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
#endif`,Q_=`#ifdef USE_TRANSMISSION
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
#endif`,q_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ex=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nx=`uniform sampler2D t2D;
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
}`,ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ox=`#include <common>
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
}`,lx=`#if DEPTH_PACKING == 3200
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
}`,cx=`#define DISTANCE
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
}`,ux=`#define DISTANCE
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
}`,fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dx=`uniform float scale;
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
}`,px=`uniform vec3 diffuse;
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
}`,gx=`#include <common>
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
}`,mx=`uniform vec3 diffuse;
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
}`,vx=`#define LAMBERT
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
}`,_x=`#define LAMBERT
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
}`,xx=`#define MATCAP
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
}`,Mx=`#define MATCAP
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
}`,yx=`#define NORMAL
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
}`,Sx=`#define NORMAL
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
}`,bx=`#define PHONG
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
}`,Ex=`#define PHONG
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
}`,Tx=`#define STANDARD
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
}`,wx=`#define STANDARD
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
}`,Ax=`#define TOON
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
}`,Rx=`#define TOON
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
}`,Cx=`uniform float size;
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
}`,Px=`uniform vec3 diffuse;
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
}`,Lx=`#include <common>
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
}`,Ix=`uniform vec3 color;
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
}`,Dx=`uniform float rotation;
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
}`,Nx=`uniform vec3 diffuse;
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
}`,Dt={alphahash_fragment:tv,alphahash_pars_fragment:nv,alphamap_fragment:iv,alphamap_pars_fragment:rv,alphatest_fragment:av,alphatest_pars_fragment:sv,aomap_fragment:ov,aomap_pars_fragment:lv,batching_pars_vertex:cv,batching_vertex:uv,begin_vertex:fv,beginnormal_vertex:hv,bsdfs:dv,iridescence_fragment:pv,bumpmap_pars_fragment:gv,clipping_planes_fragment:mv,clipping_planes_pars_fragment:vv,clipping_planes_pars_vertex:_v,clipping_planes_vertex:xv,color_fragment:Mv,color_pars_fragment:yv,color_pars_vertex:Sv,color_vertex:bv,common:Ev,cube_uv_reflection_fragment:Tv,defaultnormal_vertex:wv,displacementmap_pars_vertex:Av,displacementmap_vertex:Rv,emissivemap_fragment:Cv,emissivemap_pars_fragment:Pv,colorspace_fragment:Lv,colorspace_pars_fragment:Iv,envmap_fragment:Dv,envmap_common_pars_fragment:Nv,envmap_pars_fragment:Uv,envmap_pars_vertex:Fv,envmap_physical_pars_fragment:Zv,envmap_vertex:Ov,fog_vertex:Bv,fog_pars_vertex:zv,fog_fragment:kv,fog_pars_fragment:Hv,gradientmap_pars_fragment:Gv,lightmap_pars_fragment:Vv,lights_lambert_fragment:Wv,lights_lambert_pars_fragment:Xv,lights_pars_begin:Yv,lights_toon_fragment:Jv,lights_toon_pars_fragment:Kv,lights_phong_fragment:Qv,lights_phong_pars_fragment:qv,lights_physical_fragment:jv,lights_physical_pars_fragment:$v,lights_fragment_begin:e_,lights_fragment_maps:t_,lights_fragment_end:n_,lightprobes_pars_fragment:i_,logdepthbuf_fragment:r_,logdepthbuf_pars_fragment:a_,logdepthbuf_pars_vertex:s_,logdepthbuf_vertex:o_,map_fragment:l_,map_pars_fragment:c_,map_particle_fragment:u_,map_particle_pars_fragment:f_,metalnessmap_fragment:h_,metalnessmap_pars_fragment:d_,morphinstance_vertex:p_,morphcolor_vertex:g_,morphnormal_vertex:m_,morphtarget_pars_vertex:v_,morphtarget_vertex:__,normal_fragment_begin:x_,normal_fragment_maps:M_,normal_pars_fragment:y_,normal_pars_vertex:S_,normal_vertex:b_,normalmap_pars_fragment:E_,clearcoat_normal_fragment_begin:T_,clearcoat_normal_fragment_maps:w_,clearcoat_pars_fragment:A_,iridescence_pars_fragment:R_,opaque_fragment:C_,packing:P_,premultiplied_alpha_fragment:L_,project_vertex:I_,dithering_fragment:D_,dithering_pars_fragment:N_,roughnessmap_fragment:U_,roughnessmap_pars_fragment:F_,shadowmap_pars_fragment:O_,shadowmap_pars_vertex:B_,shadowmap_vertex:z_,shadowmask_pars_fragment:k_,skinbase_vertex:H_,skinning_pars_vertex:G_,skinning_vertex:V_,skinnormal_vertex:W_,specularmap_fragment:X_,specularmap_pars_fragment:Y_,tonemapping_fragment:Z_,tonemapping_pars_fragment:J_,transmission_fragment:K_,transmission_pars_fragment:Q_,uv_pars_fragment:q_,uv_pars_vertex:j_,uv_vertex:$_,worldpos_vertex:ex,background_vert:tx,background_frag:nx,backgroundCube_vert:ix,backgroundCube_frag:rx,cube_vert:ax,cube_frag:sx,depth_vert:ox,depth_frag:lx,distance_vert:cx,distance_frag:ux,equirect_vert:fx,equirect_frag:hx,linedashed_vert:dx,linedashed_frag:px,meshbasic_vert:gx,meshbasic_frag:mx,meshlambert_vert:vx,meshlambert_frag:_x,meshmatcap_vert:xx,meshmatcap_frag:Mx,meshnormal_vert:yx,meshnormal_frag:Sx,meshphong_vert:bx,meshphong_frag:Ex,meshphysical_vert:Tx,meshphysical_frag:wx,meshtoon_vert:Ax,meshtoon_frag:Rx,points_vert:Cx,points_frag:Px,shadow_vert:Lx,shadow_frag:Ix,sprite_vert:Dx,sprite_frag:Nx},qe={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Et}},envmap:{envMap:{value:null},envMapRotation:{value:new Et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Et},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new K},probesMax:{value:new K},probesResolution:{value:new K}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0},uvTransform:{value:new Et}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}}},Ea={basic:{uniforms:zi([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.fog]),vertexShader:Dt.meshbasic_vert,fragmentShader:Dt.meshbasic_frag},lambert:{uniforms:zi([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new Ut(0)},envMapIntensity:{value:1}}]),vertexShader:Dt.meshlambert_vert,fragmentShader:Dt.meshlambert_frag},phong:{uniforms:zi([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphong_vert,fragmentShader:Dt.meshphong_frag},standard:{uniforms:zi([qe.common,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.roughnessmap,qe.metalnessmap,qe.fog,qe.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},toon:{uniforms:zi([qe.common,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.gradientmap,qe.fog,qe.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Dt.meshtoon_vert,fragmentShader:Dt.meshtoon_frag},matcap:{uniforms:zi([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,{matcap:{value:null}}]),vertexShader:Dt.meshmatcap_vert,fragmentShader:Dt.meshmatcap_frag},points:{uniforms:zi([qe.points,qe.fog]),vertexShader:Dt.points_vert,fragmentShader:Dt.points_frag},dashed:{uniforms:zi([qe.common,qe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dt.linedashed_vert,fragmentShader:Dt.linedashed_frag},depth:{uniforms:zi([qe.common,qe.displacementmap]),vertexShader:Dt.depth_vert,fragmentShader:Dt.depth_frag},normal:{uniforms:zi([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,{opacity:{value:1}}]),vertexShader:Dt.meshnormal_vert,fragmentShader:Dt.meshnormal_frag},sprite:{uniforms:zi([qe.sprite,qe.fog]),vertexShader:Dt.sprite_vert,fragmentShader:Dt.sprite_frag},background:{uniforms:{uvTransform:{value:new Et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dt.background_vert,fragmentShader:Dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Et}},vertexShader:Dt.backgroundCube_vert,fragmentShader:Dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dt.cube_vert,fragmentShader:Dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dt.equirect_vert,fragmentShader:Dt.equirect_frag},distance:{uniforms:zi([qe.common,qe.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Dt.distance_vert,fragmentShader:Dt.distance_frag},shadow:{uniforms:zi([qe.lights,qe.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Dt.shadow_vert,fragmentShader:Dt.shadow_frag}};Ea.physical={uniforms:zi([Ea.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Et},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Et},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Et},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Et},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Et},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Et},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Et}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag};const uf={r:0,b:0,g:0},Ux=new Rn,Hg=new Et;Hg.set(-1,0,0,0,1,0,0,0,1);function Fx(i,e,t,n,o,c){const u=new Ut(0);let d=o===!0?0:1,p,g,M=null,T=0,_=null;function x(O){let B=O.isScene===!0?O.background:null;if(B&&B.isTexture){const P=O.backgroundBlurriness>0;B=e.get(B,P)}return B}function R(O){let B=!1;const P=x(O);P===null?w(u,d):P&&P.isColor&&(w(P,1),B=!0);const F=i.xr.getEnvironmentBlendMode();F==="additive"?t.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,c),(i.autoClear||B)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function U(O,B){const P=x(B);P&&(P.isCubeTexture||P.mapping===wf)?(g===void 0&&(g=new di(new Vs(1,1,1),new Pa({name:"BackgroundCubeMaterial",uniforms:rc(Ea.backgroundCube.uniforms),vertexShader:Ea.backgroundCube.vertexShader,fragmentShader:Ea.backgroundCube.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(F,D,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(g)),g.material.uniforms.envMap.value=P,g.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(Ux.makeRotationFromEuler(B.backgroundRotation)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&g.material.uniforms.backgroundRotation.value.premultiply(Hg),g.material.toneMapped=Gt.getTransfer(P.colorSpace)!==fn,(M!==P||T!==P.version||_!==i.toneMapping)&&(g.material.needsUpdate=!0,M=P,T=P.version,_=i.toneMapping),g.layers.enableAll(),O.unshift(g,g.geometry,g.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new di(new ic(2,2),new Pa({name:"BackgroundMaterial",uniforms:rc(Ea.background.uniforms),vertexShader:Ea.background.vertexShader,fragmentShader:Ea.background.fragmentShader,side:Vo,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,p.material.toneMapped=Gt.getTransfer(P.colorSpace)!==fn,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(M!==P||T!==P.version||_!==i.toneMapping)&&(p.material.needsUpdate=!0,M=P,T=P.version,_=i.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function w(O,B){O.getRGB(uf,Fg(i)),t.buffers.color.setClear(uf.r,uf.g,uf.b,B,c)}function y(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return u},setClearColor:function(O,B=1){u.set(O),d=B,w(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(O){d=O,w(u,d)},render:R,addToRenderList:U,dispose:y}}function Ox(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},o=_(null);let c=o,u=!1;function d(H,q,ae,Y,ue){let Se=!1;const be=T(H,Y,ae,q);c!==be&&(c=be,g(c.object)),Se=x(H,Y,ae,ue),Se&&R(H,Y,ae,ue),ue!==null&&e.update(ue,i.ELEMENT_ARRAY_BUFFER),(Se||u)&&(u=!1,P(H,q,ae,Y),ue!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function p(){return i.createVertexArray()}function g(H){return i.bindVertexArray(H)}function M(H){return i.deleteVertexArray(H)}function T(H,q,ae,Y){const ue=Y.wireframe===!0;let Se=n[q.id];Se===void 0&&(Se={},n[q.id]=Se);const be=H.isInstancedMesh===!0?H.id:0;let Re=Se[be];Re===void 0&&(Re={},Se[be]=Re);let ne=Re[ae.id];ne===void 0&&(ne={},Re[ae.id]=ne);let G=ne[ue];return G===void 0&&(G=_(p()),ne[ue]=G),G}function _(H){const q=[],ae=[],Y=[];for(let ue=0;ue<t;ue++)q[ue]=0,ae[ue]=0,Y[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:ae,attributeDivisors:Y,object:H,attributes:{},index:null}}function x(H,q,ae,Y){const ue=c.attributes,Se=q.attributes;let be=0;const Re=ae.getAttributes();for(const ne in Re)if(Re[ne].location>=0){const Ee=ue[ne];let lt=Se[ne];if(lt===void 0&&(ne==="instanceMatrix"&&H.instanceMatrix&&(lt=H.instanceMatrix),ne==="instanceColor"&&H.instanceColor&&(lt=H.instanceColor)),Ee===void 0||Ee.attribute!==lt||lt&&Ee.data!==lt.data)return!0;be++}return c.attributesNum!==be||c.index!==Y}function R(H,q,ae,Y){const ue={},Se=q.attributes;let be=0;const Re=ae.getAttributes();for(const ne in Re)if(Re[ne].location>=0){let Ee=Se[ne];Ee===void 0&&(ne==="instanceMatrix"&&H.instanceMatrix&&(Ee=H.instanceMatrix),ne==="instanceColor"&&H.instanceColor&&(Ee=H.instanceColor));const lt={};lt.attribute=Ee,Ee&&Ee.data&&(lt.data=Ee.data),ue[ne]=lt,be++}c.attributes=ue,c.attributesNum=be,c.index=Y}function U(){const H=c.newAttributes;for(let q=0,ae=H.length;q<ae;q++)H[q]=0}function w(H){y(H,0)}function y(H,q){const ae=c.newAttributes,Y=c.enabledAttributes,ue=c.attributeDivisors;ae[H]=1,Y[H]===0&&(i.enableVertexAttribArray(H),Y[H]=1),ue[H]!==q&&(i.vertexAttribDivisor(H,q),ue[H]=q)}function O(){const H=c.newAttributes,q=c.enabledAttributes;for(let ae=0,Y=q.length;ae<Y;ae++)q[ae]!==H[ae]&&(i.disableVertexAttribArray(ae),q[ae]=0)}function B(H,q,ae,Y,ue,Se,be){be===!0?i.vertexAttribIPointer(H,q,ae,ue,Se):i.vertexAttribPointer(H,q,ae,Y,ue,Se)}function P(H,q,ae,Y){U();const ue=Y.attributes,Se=ae.getAttributes(),be=q.defaultAttributeValues;for(const Re in Se){const ne=Se[Re];if(ne.location>=0){let G=ue[Re];if(G===void 0&&(Re==="instanceMatrix"&&H.instanceMatrix&&(G=H.instanceMatrix),Re==="instanceColor"&&H.instanceColor&&(G=H.instanceColor)),G!==void 0){const Ee=G.normalized,lt=G.itemSize,rt=e.get(G);if(rt===void 0)continue;const Ae=rt.buffer,oe=rt.type,Ct=rt.bytesPerElement,Me=oe===i.INT||oe===i.UNSIGNED_INT||G.gpuType===Sd;if(G.isInterleavedBufferAttribute){const ye=G.data,Ke=ye.stride,ut=G.offset;if(ye.isInstancedInterleavedBuffer){for(let Ye=0;Ye<ne.locationSize;Ye++)y(ne.location+Ye,ye.meshPerAttribute);H.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Ye=0;Ye<ne.locationSize;Ye++)w(ne.location+Ye);i.bindBuffer(i.ARRAY_BUFFER,Ae);for(let Ye=0;Ye<ne.locationSize;Ye++)B(ne.location+Ye,lt/ne.locationSize,oe,Ee,Ke*Ct,(ut+lt/ne.locationSize*Ye)*Ct,Me)}else{if(G.isInstancedBufferAttribute){for(let ye=0;ye<ne.locationSize;ye++)y(ne.location+ye,G.meshPerAttribute);H.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let ye=0;ye<ne.locationSize;ye++)w(ne.location+ye);i.bindBuffer(i.ARRAY_BUFFER,Ae);for(let ye=0;ye<ne.locationSize;ye++)B(ne.location+ye,lt/ne.locationSize,oe,Ee,lt*Ct,lt/ne.locationSize*ye*Ct,Me)}}else if(be!==void 0){const Ee=be[Re];if(Ee!==void 0)switch(Ee.length){case 2:i.vertexAttrib2fv(ne.location,Ee);break;case 3:i.vertexAttrib3fv(ne.location,Ee);break;case 4:i.vertexAttrib4fv(ne.location,Ee);break;default:i.vertexAttrib1fv(ne.location,Ee)}}}}O()}function F(){C();for(const H in n){const q=n[H];for(const ae in q){const Y=q[ae];for(const ue in Y){const Se=Y[ue];for(const be in Se)M(Se[be].object),delete Se[be];delete Y[ue]}}delete n[H]}}function D(H){if(n[H.id]===void 0)return;const q=n[H.id];for(const ae in q){const Y=q[ae];for(const ue in Y){const Se=Y[ue];for(const be in Se)M(Se[be].object),delete Se[be];delete Y[ue]}}delete n[H.id]}function V(H){for(const q in n){const ae=n[q];for(const Y in ae){const ue=ae[Y];if(ue[H.id]===void 0)continue;const Se=ue[H.id];for(const be in Se)M(Se[be].object),delete Se[be];delete ue[H.id]}}}function S(H){for(const q in n){const ae=n[q],Y=H.isInstancedMesh===!0?H.id:0,ue=ae[Y];if(ue!==void 0){for(const Se in ue){const be=ue[Se];for(const Re in be)M(be[Re].object),delete be[Re];delete ue[Se]}delete ae[Y],Object.keys(ae).length===0&&delete n[q]}}}function C(){k(),u=!0,c!==o&&(c=o,g(c.object))}function k(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:C,resetDefaultState:k,dispose:F,releaseStatesOfGeometry:D,releaseStatesOfObject:S,releaseStatesOfProgram:V,initAttributes:U,enableAttribute:w,disableUnusedAttributes:O}}function Bx(i,e,t){let n;function o(p){n=p}function c(p,g){i.drawArrays(n,p,g),t.update(g,n,1)}function u(p,g,M){M!==0&&(i.drawArraysInstanced(n,p,g,M),t.update(g,n,M))}function d(p,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,p,0,g,0,M);let _=0;for(let x=0;x<M;x++)_+=g[x];t.update(_,n,1)}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=d}function zx(i,e,t,n){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const V=e.get("EXT_texture_filter_anisotropic");o=i.getParameter(V.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(V){return!(V!==$r&&n.convert(V)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(V){const S=V===Ca&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(V!==cr&&V!==Ta&&!S&&n.convert(V)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function p(V){if(V==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";V="mediump"}return V==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=t.precision!==void 0?t.precision:"highp";const M=p(g);M!==g&&(gt("WebGLRenderer:",g,"not supported, using",M,"instead."),g=M);const T=t.logarithmicDepthBuffer===!0,_=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&_===!1&&gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),R=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),U=i.getParameter(i.MAX_TEXTURE_SIZE),w=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),O=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),B=i.getParameter(i.MAX_VARYING_VECTORS),P=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),F=i.getParameter(i.MAX_SAMPLES),D=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:d,precision:g,logarithmicDepthBuffer:T,reversedDepthBuffer:_,maxTextures:x,maxVertexTextures:R,maxTextureSize:U,maxCubemapSize:w,maxAttributes:y,maxVertexUniforms:O,maxVaryings:B,maxFragmentUniforms:P,maxSamples:F,samples:D}}function kx(i){const e=this;let t=null,n=0,o=!1,c=!1;const u=new Hs,d=new Et,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(T,_){const x=T.length!==0||_||n!==0||o;return o=_,n=T.length,x},this.beginShadows=function(){c=!0,M(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(T,_){t=M(T,_,0)},this.setState=function(T,_,x){const R=T.clippingPlanes,U=T.clipIntersection,w=T.clipShadows,y=i.get(T);if(!o||R===null||R.length===0||c&&!w)c?M(null):g();else{const O=c?0:n,B=O*4;let P=y.clippingState||null;p.value=P,P=M(R,_,B,x);for(let F=0;F!==B;++F)P[F]=t[F];y.clippingState=P,this.numIntersection=U?this.numPlanes:0,this.numPlanes+=O}};function g(){p.value!==t&&(p.value=t,p.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function M(T,_,x,R){const U=T!==null?T.length:0;let w=null;if(U!==0){if(w=p.value,R!==!0||w===null){const y=x+U*4,O=_.matrixWorldInverse;d.getNormalMatrix(O),(w===null||w.length<y)&&(w=new Float32Array(y));for(let B=0,P=x;B!==U;++B,P+=4)u.copy(T[B]).applyMatrix4(O,d),u.normal.toArray(w,P),w[P+3]=u.constant}p.value=w,p.needsUpdate=!0}return e.numPlanes=U,e.numIntersection=0,w}}const $l=4,Hx=6,Gx=20,Vx=256,Hc=new zd,Np=new Ut;let wh=null,Ah=0,Rh=0,Ch=!1;const Wx=new K,Oo=new K;class Up{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,o=100,c={}){const{size:u=256,position:d=Wx}=c;wh=this._renderer.getRenderTarget(),Ah=this._renderer.getActiveCubeFace(),Rh=this._renderer.getActiveMipmapLevel(),Ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,n,o,p,d),t>0&&this._blur(p,0,0,t),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Op(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(wh,Ah,Rh),this._renderer.xr.enabled=Ch,e.scissorTest=!1,Kl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wo||e.mapping===nc?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wh=this._renderer.getRenderTarget(),Ah=this._renderer.getActiveCubeFace(),Rh=this._renderer.getActiveMipmapLevel(),Ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ai,minFilter:Ai,generateMipmaps:!1,type:Ca,format:$r,colorSpace:yf,depthBuffer:!1},o=Fp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fp(e,t,n);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Xx(c)),this._blurMaterial=Zx(c,e,t),this._ggxMaterial=Yx(c,e,t)}return o}_compileMaterial(e){const t=new di(new $i,e);this._renderer.compile(t,Hc)}_sceneToCubeUV(e,t,n,o,c){const p=new lr(90,1,t,n),g=[1,-1,1,1,1,1],M=[1,1,1,-1,-1,-1],T=this._renderer,_=T.autoClear,x=T.toneMapping;T.getClearColor(Np),T.toneMapping=Aa,T.autoClear=!1,T.state.buffers.depth.getReversed()&&(T.setRenderTarget(o),T.clearDepth(),T.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new di(new Vs,new Kc({name:"PMREM.Background",side:ji,depthWrite:!1,depthTest:!1})));const U=this._backgroundBox,w=U.material;let y=!1;const O=e.background;O?O.isColor&&(w.color.copy(O),e.background=null,y=!0):(w.color.copy(Np),y=!0);for(let B=0;B<6;B++){const P=B%3;P===0?(p.up.set(0,g[B],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+M[B],c.y,c.z)):P===1?(p.up.set(0,0,g[B]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+M[B],c.z)):(p.up.set(0,g[B],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+M[B]));const F=this._cubeSize;Kl(o,P*F,B>2?F:0,F,F),T.setRenderTarget(o),y&&T.render(U,p),T.render(e,p)}T.toneMapping=x,T.autoClear=_,e.background=O}_textureToCubeUV(e,t){const n=this._renderer,o=e.mapping===Wo||e.mapping===nc;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Op());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const d=c.uniforms;d.envMap.value=e;const p=this._cubeSize;Kl(t,0,0,3*p,2*p),n.setRenderTarget(t),n.render(u,Hc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);t.autoClear=n}_applyGGXFilter(e,t,n){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[n];d.material=u;const p=u.uniforms,g=n/(this._lodMeshes.length-1),M=t/(this._lodMeshes.length-1),T=Math.sqrt(g*g-M*M),_=g*1.25,x=T*_,{_lodMax:R}=this,U=this._sizeLods[n],w=3*U*(n>R-$l?n-R+$l:0),y=4*(this._cubeSize-U);p.envMap.value=e.texture,p.roughness.value=x,p.mipInt.value=R-t,Kl(c,w,y,3*U,2*U),o.setRenderTarget(c),o.render(d,Hc),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=R-n,Kl(e,w,y,3*U,2*U),o.setRenderTarget(e),o.render(d,Hc)}_blur(e,t,n,o){const c=this._pingPongRenderTarget,u=Math.min(o,Math.PI)/Math.SQRT2;this._blurPass(e,c,t,n,u),this._blurPass(c,e,n,n,u)}_blurPass(e,t,n,o,c){const u=this._renderer,d=this._blurMaterial,p=this._lodMeshes[o];p.material=d;const g=d.uniforms;g.envMap.value=e.texture,g.sigma.value=c,g.mipInt.value=this._lodMax-n;const M=this._sizeLods[o],T=3*M*(o>this._lodMax-$l?o-this._lodMax+$l:0),_=4*(this._cubeSize-M);Kl(t,T,_,3*M,2*M),u.setRenderTarget(t),u.render(p,Hc)}}function Xx(i){const e=[],t=[];let n=i;const o=i-$l+1+Hx;for(let c=0;c<o;c++){const u=Math.pow(2,n);e.push(u);const d=1/(u-2),p=-d,g=1+d,M=[p,p,g,p,g,g,p,p,g,g,p,g],T=6,_=6,x=3,R=new Float32Array(x*_*T),U=new Float32Array(x*_*T);for(let y=0;y<T;y++){const O=y%3*2/3-1,B=y>2?0:-1,P=[O,B,0,O+2/3,B,0,O+2/3,B+1,0,O,B,0,O+2/3,B+1,0,O,B+1,0];R.set(P,x*_*y);for(let F=0;F<_;F++){const D=M[F*2]*2-1,V=M[F*2+1]*2-1;y===0?Oo.set(1,V,D):y===1?Oo.set(-D,1,-V):y===2?Oo.set(-D,V,1):y===3?Oo.set(-1,V,-D):y===4?Oo.set(-D,-1,V):Oo.set(D,V,-1),Oo.toArray(U,(y*_+F)*x)}}const w=new $i;w.setAttribute("position",new ds(R,x)),w.setAttribute("outputDirection",new ds(U,x)),t.push(new di(w,null)),n>$l&&n--}return{lodMeshes:t,sizeLods:e}}function Fp(i,e,t){const n=new ea(i,e,t);return n.texture.mapping=wf,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Kl(i,e,t,n,o){i.viewport.set(e,t,n,o),i.scissor.set(e,t,n,o)}function Yx(i,e,t){return new Pa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Vx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Cf(),fragmentShader:`

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
		`,blending:fs,depthTest:!1,depthWrite:!1})}function Zx(i,e,t){return new Pa({name:"SphericalGaussianBlur",defines:{SAMPLES:Gx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Cf(),fragmentShader:`

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
		`,blending:fs,depthTest:!1,depthWrite:!1})}function Op(){return new Pa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cf(),fragmentShader:`

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
		`,blending:fs,depthTest:!1,depthWrite:!1})}function Bp(){return new Pa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fs,depthTest:!1,depthWrite:!1})}function Cf(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Gg extends ea{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},o=[n,n,n,n,n,n];this.texture=new Lg(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Vs(5,5,5),c=new Pa({name:"CubemapFromEquirect",uniforms:rc(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ji,blending:fs});c.uniforms.tEquirect.value=t;const u=new di(o,c),d=t.minFilter;return t.minFilter===ko&&(t.minFilter=Ai),new Q0(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,n=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,n,o);e.setRenderTarget(c)}}function Jx(i){let e=new WeakMap,t=new WeakMap,n=null;function o(_,x=!1){return _==null?null:x?u(_):c(_)}function c(_){if(_&&_.isTexture){const x=_.mapping;if(x===jf||x===$f)if(e.has(_)){const R=e.get(_).texture;return d(R,_.mapping)}else{const R=_.image;if(R&&R.height>0){const U=new Gg(R.height);return U.fromEquirectangularTexture(i,_),e.set(_,U),_.addEventListener("dispose",g),d(U.texture,_.mapping)}else return null}}return _}function u(_){if(_&&_.isTexture){const x=_.mapping,R=x===jf||x===$f,U=x===Wo||x===nc;if(R||U){let w=t.get(_);const y=w!==void 0?w.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==y)return n===null&&(n=new Up(i)),w=R?n.fromEquirectangular(_,w):n.fromCubemap(_,w),w.texture.pmremVersion=_.pmremVersion,t.set(_,w),w.texture;if(w!==void 0)return w.texture;{const O=_.image;return R&&O&&O.height>0||U&&O&&p(O)?(n===null&&(n=new Up(i)),w=R?n.fromEquirectangular(_):n.fromCubemap(_),w.texture.pmremVersion=_.pmremVersion,t.set(_,w),_.addEventListener("dispose",M),w.texture):null}}}return _}function d(_,x){return x===jf?_.mapping=Wo:x===$f&&(_.mapping=nc),_}function p(_){let x=0;const R=6;for(let U=0;U<R;U++)_[U]!==void 0&&x++;return x===R}function g(_){const x=_.target;x.removeEventListener("dispose",g);const R=e.get(x);R!==void 0&&(e.delete(x),R.dispose())}function M(_){const x=_.target;x.removeEventListener("dispose",M);const R=t.get(x);R!==void 0&&(t.delete(x),R.dispose())}function T(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:o,dispose:T}}function Kx(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const o=i.getExtension(n);return e[n]=o,o}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const o=t(n);return o===null&&ec("WebGLRenderer: "+n+" extension not supported."),o}}}function Qx(i,e,t,n){const o={},c=new WeakMap;function u(T){const _=T.target;_.index!==null&&e.remove(_.index);for(const R in _.attributes)e.remove(_.attributes[R]);_.removeEventListener("dispose",u),delete o[_.id];const x=c.get(_);x&&(e.remove(x),c.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function d(T,_){return o[_.id]===!0||(_.addEventListener("dispose",u),o[_.id]=!0,t.memory.geometries++),_}function p(T){const _=T.attributes;for(const x in _)e.update(_[x],i.ARRAY_BUFFER)}function g(T){const _=[],x=T.index,R=T.attributes.position;let U=0;if(R===void 0)return;if(x!==null){const O=x.array;U=x.version;for(let B=0,P=O.length;B<P;B+=3){const F=O[B+0],D=O[B+1],V=O[B+2];_.push(F,D,D,V,V,F)}}else{const O=R.array;U=R.version;for(let B=0,P=O.length/3-1;B<P;B+=3){const F=B+0,D=B+1,V=B+2;_.push(F,D,D,V,V,F)}}const w=new(R.count>=65535?Cg:Rg)(_,1);w.version=U;const y=c.get(T);y&&e.remove(y),c.set(T,w)}function M(T){const _=c.get(T);if(_){const x=T.index;x!==null&&_.version<x.version&&g(T)}else g(T);return c.get(T)}return{get:d,update:p,getWireframeAttribute:M}}function qx(i,e,t){let n;function o(T){n=T}let c,u;function d(T){c=T.type,u=T.bytesPerElement}function p(T,_){i.drawElements(n,_,c,T*u),t.update(_,n,1)}function g(T,_,x){x!==0&&(i.drawElementsInstanced(n,_,c,T*u,x),t.update(_,n,x))}function M(T,_,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,_,0,c,T,0,x);let U=0;for(let w=0;w<x;w++)U+=_[w];t.update(U,n,1)}this.setMode=o,this.setIndex=d,this.render=p,this.renderInstances=g,this.renderMultiDraw=M}function jx(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(c,u,d){switch(t.calls++,u){case i.TRIANGLES:t.triangles+=d*(c/3);break;case i.LINES:t.lines+=d*(c/2);break;case i.LINE_STRIP:t.lines+=d*(c-1);break;case i.LINE_LOOP:t.lines+=d*c;break;case i.POINTS:t.points+=d*c;break;default:Zt("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:n}}function $x(i,e,t){const n=new WeakMap,o=new Un;function c(u,d,p){const g=u.morphTargetInfluences,M=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,T=M!==void 0?M.length:0;let _=n.get(d);if(_===void 0||_.count!==T){let C=function(){V.dispose(),n.delete(d),d.removeEventListener("dispose",C)};_!==void 0&&_.texture.dispose();const x=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,U=d.morphAttributes.color!==void 0,w=d.morphAttributes.position||[],y=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let B=0;x===!0&&(B=1),R===!0&&(B=2),U===!0&&(B=3);let P=d.attributes.position.count*B,F=1;P>e.maxTextureSize&&(F=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const D=new Float32Array(P*F*4*T),V=new wg(D,P,F,T);V.type=Ta,V.needsUpdate=!0;const S=B*4;for(let k=0;k<T;k++){const H=w[k],q=y[k],ae=O[k],Y=P*F*4*k;for(let ue=0;ue<H.count;ue++){const Se=ue*S;x===!0&&(o.fromBufferAttribute(H,ue),D[Y+Se+0]=o.x,D[Y+Se+1]=o.y,D[Y+Se+2]=o.z,D[Y+Se+3]=0),R===!0&&(o.fromBufferAttribute(q,ue),D[Y+Se+4]=o.x,D[Y+Se+5]=o.y,D[Y+Se+6]=o.z,D[Y+Se+7]=0),U===!0&&(o.fromBufferAttribute(ae,ue),D[Y+Se+8]=o.x,D[Y+Se+9]=o.y,D[Y+Se+10]=o.z,D[Y+Se+11]=ae.itemSize===4?o.w:1)}}_={count:T,texture:V,size:new ct(P,F)},n.set(d,_),d.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(i,"morphTexture",u.morphTexture,t);else{let x=0;for(let U=0;U<g.length;U++)x+=g[U];const R=d.morphTargetsRelative?1:1-x;p.getUniforms().setValue(i,"morphTargetBaseInfluence",R),p.getUniforms().setValue(i,"morphTargetInfluences",g)}p.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),p.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}return{update:c}}function eM(i,e,t,n,o){let c=new WeakMap;function u(g){const M=o.render.frame,T=g.geometry,_=e.get(g,T);if(c.get(_)!==M&&(e.update(_),c.set(_,M)),g.isInstancedMesh&&(g.hasEventListener("dispose",p)===!1&&g.addEventListener("dispose",p),c.get(g)!==M&&(t.update(g.instanceMatrix,i.ARRAY_BUFFER),g.instanceColor!==null&&t.update(g.instanceColor,i.ARRAY_BUFFER),c.set(g,M))),g.isSkinnedMesh){const x=g.skeleton;c.get(x)!==M&&(x.update(),c.set(x,M))}return _}function d(){c=new WeakMap}function p(g){const M=g.target;M.removeEventListener("dispose",p),n.releaseStatesOfObject(M),t.remove(M.instanceMatrix),M.instanceColor!==null&&t.remove(M.instanceColor)}return{update:u,dispose:d}}const tM={[ug]:"LINEAR_TONE_MAPPING",[fg]:"REINHARD_TONE_MAPPING",[hg]:"CINEON_TONE_MAPPING",[dg]:"ACES_FILMIC_TONE_MAPPING",[gg]:"AGX_TONE_MAPPING",[mg]:"NEUTRAL_TONE_MAPPING",[pg]:"CUSTOM_TONE_MAPPING"};function nM(i,e,t,n,o,c){const u=new ea(e,t,{type:i,depthBuffer:o,stencilBuffer:c,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let d=null,p=null;const g=new $i;g.setAttribute("position",new Cn([-1,3,0,-1,-1,0,3,-1,0],3)),g.setAttribute("uv",new Cn([0,2,0,0,2,0],2));const M=new H0({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),T=new di(g,M),_=new zd(-1,1,1,-1,0,1);let x=null,R=null,U=!1,w,y=null,O=[],B=!1;this.setSize=function(P,F){u.setSize(P,F),d!==null&&d.setSize(P,F),p!==null&&p.setSize(P,F);for(let D=0;D<O.length;D++){const V=O[D];V.setSize&&V.setSize(P,F)}},this.setEffects=function(P){O=P,B=O.length>0&&O[0].isRenderPass===!0;const F=u.width,D=u.height;O.length>0&&d===null&&(d=new ea(F,D,{type:Ca,depthBuffer:!1,stencilBuffer:!1}),p=new ea(F,D,{type:Ca,depthBuffer:!1,stencilBuffer:!1}));for(let V=0;V<O.length;V++){const S=O[V];S.setSize&&S.setSize(F,D)}},this.begin=function(P,F){if(U||P.toneMapping===Aa&&O.length===0)return!1;if(y=F,F!==null){const D=F.width,V=F.height;(u.width!==D||u.height!==V)&&this.setSize(D,V)}return B===!1&&P.setRenderTarget(u),w=P.toneMapping,P.toneMapping=Aa,!0},this.hasRenderPass=function(){return B},this.end=function(P,F){P.toneMapping=w,U=!0;let D=u,V=d;for(let S=0;S<O.length;S++){const C=O[S];C.enabled!==!1&&(C.render(P,V,D,F),C.needsSwap!==!1&&(D=V,V=V===d?p:d))}if(x!==P.outputColorSpace||R!==P.toneMapping){x=P.outputColorSpace,R=P.toneMapping,M.defines={},Gt.getTransfer(x)===fn&&(M.defines.SRGB_TRANSFER="");const S=tM[R];S&&(M.defines[S]=""),M.needsUpdate=!0}M.uniforms.tDiffuse.value=D.texture,P.setRenderTarget(y),P.render(T,_),y=null,U=!1},this.isCompositing=function(){return U},this.dispose=function(){u.dispose(),d!==null&&d.dispose(),p!==null&&p.dispose(),g.dispose(),M.dispose()}}const Vg=new Ri,_d=new iu(1,1),Wg=new wg,Xg=new i0,Yg=new Lg,zp=[],kp=[],Hp=new Float32Array(16),Gp=new Float32Array(9),Vp=new Float32Array(4);function lc(i,e,t){const n=i[0];if(n<=0||n>0)return i;const o=e*t;let c=zp[o];if(c===void 0&&(c=new Float32Array(o),zp[o]=c),e!==0){n.toArray(c,0);for(let u=1,d=0;u!==e;++u)d+=t,i[u].toArray(c,d)}return c}function ti(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ni(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Pf(i,e){let t=kp[e];t===void 0&&(t=new Int32Array(e),kp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function iM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function rM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ti(t,e))return;i.uniform2fv(this.addr,e),ni(t,e)}}function aM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ti(t,e))return;i.uniform3fv(this.addr,e),ni(t,e)}}function sM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ti(t,e))return;i.uniform4fv(this.addr,e),ni(t,e)}}function oM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ti(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ni(t,e)}else{if(ti(t,n))return;Vp.set(n),i.uniformMatrix2fv(this.addr,!1,Vp),ni(t,n)}}function lM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ti(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ni(t,e)}else{if(ti(t,n))return;Gp.set(n),i.uniformMatrix3fv(this.addr,!1,Gp),ni(t,n)}}function cM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ti(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ni(t,e)}else{if(ti(t,n))return;Hp.set(n),i.uniformMatrix4fv(this.addr,!1,Hp),ni(t,n)}}function uM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function fM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ti(t,e))return;i.uniform2iv(this.addr,e),ni(t,e)}}function hM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ti(t,e))return;i.uniform3iv(this.addr,e),ni(t,e)}}function dM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ti(t,e))return;i.uniform4iv(this.addr,e),ni(t,e)}}function pM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function gM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ti(t,e))return;i.uniform2uiv(this.addr,e),ni(t,e)}}function mM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ti(t,e))return;i.uniform3uiv(this.addr,e),ni(t,e)}}function vM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ti(t,e))return;i.uniform4uiv(this.addr,e),ni(t,e)}}function _M(i,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o);let c;this.type===i.SAMPLER_2D_SHADOW?(_d.compareFunction=t.isReversedDepthBuffer()?Cd:Rd,c=_d):c=Vg,t.setTexture2D(e||c,o)}function xM(i,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),t.setTexture3D(e||Xg,o)}function MM(i,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),t.setTextureCube(e||Yg,o)}function yM(i,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),t.setTexture2DArray(e||Wg,o)}function SM(i){switch(i){case 5126:return iM;case 35664:return rM;case 35665:return aM;case 35666:return sM;case 35674:return oM;case 35675:return lM;case 35676:return cM;case 5124:case 35670:return uM;case 35667:case 35671:return fM;case 35668:case 35672:return hM;case 35669:case 35673:return dM;case 5125:return pM;case 36294:return gM;case 36295:return mM;case 36296:return vM;case 35678:case 36198:case 36298:case 36306:case 35682:return _M;case 35679:case 36299:case 36307:return xM;case 35680:case 36300:case 36308:case 36293:return MM;case 36289:case 36303:case 36311:case 36292:return yM}}function bM(i,e){i.uniform1fv(this.addr,e)}function EM(i,e){const t=lc(e,this.size,2);i.uniform2fv(this.addr,t)}function TM(i,e){const t=lc(e,this.size,3);i.uniform3fv(this.addr,t)}function wM(i,e){const t=lc(e,this.size,4);i.uniform4fv(this.addr,t)}function AM(i,e){const t=lc(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function RM(i,e){const t=lc(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function CM(i,e){const t=lc(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function PM(i,e){i.uniform1iv(this.addr,e)}function LM(i,e){i.uniform2iv(this.addr,e)}function IM(i,e){i.uniform3iv(this.addr,e)}function DM(i,e){i.uniform4iv(this.addr,e)}function NM(i,e){i.uniform1uiv(this.addr,e)}function UM(i,e){i.uniform2uiv(this.addr,e)}function FM(i,e){i.uniform3uiv(this.addr,e)}function OM(i,e){i.uniform4uiv(this.addr,e)}function BM(i,e,t){const n=this.cache,o=e.length,c=Pf(t,o);ti(n,c)||(i.uniform1iv(this.addr,c),ni(n,c));let u;this.type===i.SAMPLER_2D_SHADOW?u=_d:u=Vg;for(let d=0;d!==o;++d)t.setTexture2D(e[d]||u,c[d])}function zM(i,e,t){const n=this.cache,o=e.length,c=Pf(t,o);ti(n,c)||(i.uniform1iv(this.addr,c),ni(n,c));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||Xg,c[u])}function kM(i,e,t){const n=this.cache,o=e.length,c=Pf(t,o);ti(n,c)||(i.uniform1iv(this.addr,c),ni(n,c));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||Yg,c[u])}function HM(i,e,t){const n=this.cache,o=e.length,c=Pf(t,o);ti(n,c)||(i.uniform1iv(this.addr,c),ni(n,c));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||Wg,c[u])}function GM(i){switch(i){case 5126:return bM;case 35664:return EM;case 35665:return TM;case 35666:return wM;case 35674:return AM;case 35675:return RM;case 35676:return CM;case 5124:case 35670:return PM;case 35667:case 35671:return LM;case 35668:case 35672:return IM;case 35669:case 35673:return DM;case 5125:return NM;case 36294:return UM;case 36295:return FM;case 36296:return OM;case 35678:case 36198:case 36298:case 36306:case 35682:return BM;case 35679:case 36299:case 36307:return zM;case 35680:case 36300:case 36308:case 36293:return kM;case 36289:case 36303:case 36311:case 36292:return HM}}class VM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=SM(t.type)}}class WM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=GM(t.type)}}class XM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const d=o[c];d.setValue(e,t[d.id],n)}}}const Ph=/(\w+)(\])?(\[|\.)?/g;function Wp(i,e){i.seq.push(e),i.map[e.id]=e}function YM(i,e,t){const n=i.name,o=n.length;for(Ph.lastIndex=0;;){const c=Ph.exec(n),u=Ph.lastIndex;let d=c[1];const p=c[2]==="]",g=c[3];if(p&&(d=d|0),g===void 0||g==="["&&u+2===o){Wp(t,g===void 0?new VM(d,i,e):new WM(d,i,e));break}else{let T=t.map[d];T===void 0&&(T=new XM(d),Wp(t,T)),t=T}}}class vf{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<n;++u){const d=e.getActiveUniform(t,u),p=e.getUniformLocation(t,d.name);YM(d,p,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,t,n,o){const c=this.map[t];c!==void 0&&c.setValue(e,n,o)}setOptional(e,t,n){const o=t[n];o!==void 0&&this.setValue(e,n,o)}static upload(e,t,n,o){for(let c=0,u=t.length;c!==u;++c){const d=t[c],p=n[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,o)}}static seqWithValue(e,t){const n=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in t&&n.push(u)}return n}}function Xp(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const ZM=37297;let JM=0;function KM(i,e){const t=i.split(`
`),n=[],o=Math.max(e-6,0),c=Math.min(e+6,t.length);for(let u=o;u<c;u++){const d=u+1;n.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return n.join(`
`)}const Yp=new Et;function QM(i){Gt._getMatrix(Yp,Gt.workingColorSpace,i);const e=`mat3( ${Yp.elements.map(t=>t.toFixed(4))} )`;switch(Gt.getTransfer(i)){case Sf:return[e,"LinearTransferOETF"];case fn:return[e,"sRGBTransferOETF"];default:return gt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Zp(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),c=(i.getShaderInfoLog(e)||"").trim();if(n&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const d=parseInt(u[1]);return t.toUpperCase()+`

`+c+`

`+KM(i.getShaderSource(e),d)}else return c}function qM(i,e){const t=QM(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const jM={[ug]:"Linear",[fg]:"Reinhard",[hg]:"Cineon",[dg]:"ACESFilmic",[gg]:"AgX",[mg]:"Neutral",[pg]:"Custom"};function $M(i,e){const t=jM[e];return t===void 0?(gt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ff=new K;function ey(){Gt.getLuminanceCoefficients(ff);const i=ff.x.toFixed(4),e=ff.y.toFixed(4),t=ff.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ty(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xc).join(`
`)}function ny(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function iy(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let o=0;o<n;o++){const c=i.getActiveAttrib(e,o),u=c.name;let d=1;c.type===i.FLOAT_MAT2&&(d=2),c.type===i.FLOAT_MAT3&&(d=3),c.type===i.FLOAT_MAT4&&(d=4),t[u]={type:c.type,location:i.getAttribLocation(e,u),locationSize:d}}return t}function Xc(i){return i!==""}function Jp(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ry=/^[ \t]*#include +<([\w\d./]+)>/gm;function xd(i){return i.replace(ry,sy)}const ay=new Map;function sy(i,e){let t=Dt[e];if(t===void 0){const n=ay.get(e);if(n!==void 0)t=Dt[n],gt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return xd(t)}const oy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qp(i){return i.replace(oy,ly)}function ly(i,e,t,n){let o="";for(let c=parseInt(e);c<parseInt(t);c++)o+=n.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function qp(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const cy={[hf]:"SHADOWMAP_TYPE_PCF",[Wc]:"SHADOWMAP_TYPE_VSM"};function uy(i){return cy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const fy={[Wo]:"ENVMAP_TYPE_CUBE",[nc]:"ENVMAP_TYPE_CUBE",[wf]:"ENVMAP_TYPE_CUBE_UV"};function hy(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":fy[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const dy={[nc]:"ENVMAP_MODE_REFRACTION"};function py(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":dy[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const gy={[yd]:"ENVMAP_BLENDING_MULTIPLY",[xm]:"ENVMAP_BLENDING_MIX",[Mm]:"ENVMAP_BLENDING_ADD"};function my(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":gy[i.combine]||"ENVMAP_BLENDING_NONE"}function vy(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function _y(i,e,t,n){const o=i.getContext(),c=t.defines;let u=t.vertexShader,d=t.fragmentShader;const p=uy(t),g=hy(t),M=py(t),T=my(t),_=vy(t),x=ty(t),R=ny(c),U=o.createProgram();let w,y,O=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(w=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,R].filter(Xc).join(`
`),w.length>0&&(w+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,R].filter(Xc).join(`
`),y.length>0&&(y+=`
`)):(w=[qp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,R,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+M:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xc).join(`
`),y=[qp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,R,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.envMap?"#define "+M:"",t.envMap?"#define "+T:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Aa?"#define TONE_MAPPING":"",t.toneMapping!==Aa?Dt.tonemapping_pars_fragment:"",t.toneMapping!==Aa?$M("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Dt.colorspace_pars_fragment,qM("linearToOutputTexel",t.outputColorSpace),ey(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xc).join(`
`)),u=xd(u),u=Jp(u,t),u=Kp(u,t),d=xd(d),d=Jp(d,t),d=Kp(d,t),u=Qp(u),d=Qp(d),t.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,w=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+w,y=["#define varying in",t.glslVersion===ip?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ip?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const B=O+w+u,P=O+y+d,F=Xp(o,o.VERTEX_SHADER,B),D=Xp(o,o.FRAGMENT_SHADER,P);o.attachShader(U,F),o.attachShader(U,D),t.index0AttributeName!==void 0?o.bindAttribLocation(U,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(U,0,"position"),o.linkProgram(U);function V(H){if(i.debug.checkShaderErrors){const q=o.getProgramInfoLog(U)||"",ae=o.getShaderInfoLog(F)||"",Y=o.getShaderInfoLog(D)||"",ue=q.trim(),Se=ae.trim(),be=Y.trim();let Re=!0,ne=!0;if(o.getProgramParameter(U,o.LINK_STATUS)===!1)if(Re=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,U,F,D);else{const G=Zp(o,F,"vertex"),Ee=Zp(o,D,"fragment");Zt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(U,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ue+`
`+G+`
`+Ee)}else ue!==""?gt("WebGLProgram: Program Info Log:",ue):(Se===""||be==="")&&(ne=!1);ne&&(H.diagnostics={runnable:Re,programLog:ue,vertexShader:{log:Se,prefix:w},fragmentShader:{log:be,prefix:y}})}o.deleteShader(F),o.deleteShader(D),S=new vf(o,U),C=iy(o,U)}let S;this.getUniforms=function(){return S===void 0&&V(this),S};let C;this.getAttributes=function(){return C===void 0&&V(this),C};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=o.getProgramParameter(U,ZM)),k},this.destroy=function(){n.releaseStatesOfProgram(this),o.deleteProgram(U),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=JM++,this.cacheKey=e,this.usedTimes=1,this.program=U,this.vertexShader=F,this.fragmentShader=D,this}let xy=0;class My{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(n)===!1&&(o.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new yy(e),t.set(e,n)),n}}class yy{constructor(e){this.id=xy++,this.code=e,this.usedTimes=0}}function Sy(i){return i===Xo||i===_f||i===xf}function by(i,e,t,n,o,c){const u=new Id,d=new My,p=new Set,g=[],M=new Map,T=n.logarithmicDepthBuffer;let _=n.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(S){return p.add(S),S===0?"uv":`uv${S}`}function U(S,C,k,H,q,ae){const Y=H.fog,ue=q.geometry,Se=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?H.environment:null,be=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,Re=e.get(S.envMap||Se,be),ne=Re&&Re.mapping===wf?Re.image.height:null,G=x[S.type];S.precision!==null&&(_=n.getMaxPrecision(S.precision),_!==S.precision&&gt("WebGLProgram.getParameters:",S.precision,"not supported, using",_,"instead."));const Ee=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,lt=Ee!==void 0?Ee.length:0;let rt=0;ue.morphAttributes.position!==void 0&&(rt=1),ue.morphAttributes.normal!==void 0&&(rt=2),ue.morphAttributes.color!==void 0&&(rt=3);let Ae,oe,Ct,Me;if(G){const yt=Ea[G];Ae=yt.vertexShader,oe=yt.fragmentShader}else{Ae=S.vertexShader,oe=S.fragmentShader;const yt=d.getVertexShaderStage(S),Ot=d.getFragmentShaderStage(S);d.update(S,yt,Ot),Ct=yt.id,Me=Ot.id}const ye=i.getRenderTarget(),Ke=i.state.buffers.depth.getReversed(),ut=q.isInstancedMesh===!0,Ye=q.isBatchedMesh===!0,mt=!!S.map,vt=!!S.matcap,_t=!!Re,At=!!S.aoMap,Ze=!!S.lightMap,xt=!!S.bumpMap&&S.wireframe===!1,Jt=!!S.normalMap,Ft=!!S.displacementMap,jt=!!S.emissiveMap,Rt=!!S.metalnessMap,Kt=!!S.roughnessMap,Z=S.anisotropy>0,Wt=S.clearcoat>0,ht=S.dispersion>0,z=S.retroreflectivity>0,A=S.iridescence>0,ie=S.sheen>0,te=S.transmission>0,ge=Z&&!!S.anisotropyMap,Fe=Wt&&!!S.clearcoatMap,Be=Wt&&!!S.clearcoatNormalMap,me=Wt&&!!S.clearcoatRoughnessMap,we=A&&!!S.iridescenceMap,ke=A&&!!S.iridescenceThicknessMap,it=ie&&!!S.sheenColorMap,He=ie&&!!S.sheenRoughnessMap,ze=!!S.specularMap,at=!!S.specularColorMap,de=!!S.specularIntensityMap,Pe=te&&!!S.transmissionMap,W=te&&!!S.thicknessMap,_e=!!S.gradientMap,xe=!!S.alphaMap,Le=S.alphaTest>0,Ie=!!S.alphaHash,pe=!!S.extensions;let Ge=Aa;S.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(Ge=i.toneMapping);const Oe={shaderID:G,shaderType:S.type,shaderName:S.name,vertexShader:Ae,fragmentShader:oe,defines:S.defines,customVertexShaderID:Ct,customFragmentShaderID:Me,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:_,batching:Ye,batchingColor:Ye&&q._colorsTexture!==null,instancing:ut,instancingColor:ut&&q.instanceColor!==null,instancingMorph:ut&&q.morphTexture!==null,outputColorSpace:ye===null?i.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Gt.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:mt,matcap:vt,envMap:_t,envMapMode:_t&&Re.mapping,envMapCubeUVHeight:ne,aoMap:At,lightMap:Ze,bumpMap:xt,normalMap:Jt,displacementMap:Ft,emissiveMap:jt,normalMapObjectSpace:Jt&&S.normalMapType===bm,normalMapTangentSpace:Jt&&S.normalMapType===Mf,packedNormalMap:Jt&&S.normalMapType===Mf&&Sy(S.normalMap.format),metalnessMap:Rt,roughnessMap:Kt,anisotropy:Z,anisotropyMap:ge,clearcoat:Wt,clearcoatMap:Fe,clearcoatNormalMap:Be,clearcoatRoughnessMap:me,dispersion:ht,retroreflection:z,iridescence:A,iridescenceMap:we,iridescenceThicknessMap:ke,sheen:ie,sheenColorMap:it,sheenRoughnessMap:He,specularMap:ze,specularColorMap:at,specularIntensityMap:de,transmission:te,transmissionMap:Pe,thicknessMap:W,gradientMap:_e,opaque:S.transparent===!1&&S.blending===Yc&&S.alphaToCoverage===!1,alphaMap:xe,alphaTest:Le,alphaHash:Ie,combine:S.combine,mapUv:mt&&R(S.map.channel),aoMapUv:At&&R(S.aoMap.channel),lightMapUv:Ze&&R(S.lightMap.channel),bumpMapUv:xt&&R(S.bumpMap.channel),normalMapUv:Jt&&R(S.normalMap.channel),displacementMapUv:Ft&&R(S.displacementMap.channel),emissiveMapUv:jt&&R(S.emissiveMap.channel),metalnessMapUv:Rt&&R(S.metalnessMap.channel),roughnessMapUv:Kt&&R(S.roughnessMap.channel),anisotropyMapUv:ge&&R(S.anisotropyMap.channel),clearcoatMapUv:Fe&&R(S.clearcoatMap.channel),clearcoatNormalMapUv:Be&&R(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&R(S.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&R(S.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&R(S.iridescenceThicknessMap.channel),sheenColorMapUv:it&&R(S.sheenColorMap.channel),sheenRoughnessMapUv:He&&R(S.sheenRoughnessMap.channel),specularMapUv:ze&&R(S.specularMap.channel),specularColorMapUv:at&&R(S.specularColorMap.channel),specularIntensityMapUv:de&&R(S.specularIntensityMap.channel),transmissionMapUv:Pe&&R(S.transmissionMap.channel),thicknessMapUv:W&&R(S.thicknessMap.channel),alphaMapUv:xe&&R(S.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(Jt||Z),vertexNormals:!!ue.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!ue.attributes.uv&&(mt||xe),fog:!!Y,useFog:S.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||ue.attributes.normal===void 0&&Jt===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:T,reversedDepthBuffer:Ke,skinning:q.isSkinnedMesh===!0,hasPositionAttribute:ue.attributes.position!==void 0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:rt,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:ae.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ge,decodeVideoTexture:mt&&S.map.isVideoTexture===!0&&Gt.getTransfer(S.map.colorSpace)===fn,decodeVideoTextureEmissive:jt&&S.emissiveMap.isVideoTexture===!0&&Gt.getTransfer(S.emissiveMap.colorSpace)===fn,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Pr,flipSided:S.side===ji,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:pe&&S.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&S.extensions.multiDraw===!0||Ye)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Oe.vertexUv1s=p.has(1),Oe.vertexUv2s=p.has(2),Oe.vertexUv3s=p.has(3),p.clear(),Oe}function w(S){const C=[];if(S.shaderID?C.push(S.shaderID):(C.push(S.customVertexShaderID),C.push(S.customFragmentShaderID)),S.defines!==void 0)for(const k in S.defines)C.push(k),C.push(S.defines[k]);return S.isRawShaderMaterial===!1&&(y(C,S),O(C,S),C.push(i.outputColorSpace)),C.push(S.customProgramCacheKey),C.join()}function y(S,C){S.push(C.precision),S.push(C.outputColorSpace),S.push(C.envMapMode),S.push(C.envMapCubeUVHeight),S.push(C.mapUv),S.push(C.alphaMapUv),S.push(C.lightMapUv),S.push(C.aoMapUv),S.push(C.bumpMapUv),S.push(C.normalMapUv),S.push(C.displacementMapUv),S.push(C.emissiveMapUv),S.push(C.metalnessMapUv),S.push(C.roughnessMapUv),S.push(C.anisotropyMapUv),S.push(C.clearcoatMapUv),S.push(C.clearcoatNormalMapUv),S.push(C.clearcoatRoughnessMapUv),S.push(C.iridescenceMapUv),S.push(C.iridescenceThicknessMapUv),S.push(C.sheenColorMapUv),S.push(C.sheenRoughnessMapUv),S.push(C.specularMapUv),S.push(C.specularColorMapUv),S.push(C.specularIntensityMapUv),S.push(C.transmissionMapUv),S.push(C.thicknessMapUv),S.push(C.combine),S.push(C.fogExp2),S.push(C.sizeAttenuation),S.push(C.morphTargetsCount),S.push(C.morphAttributeCount),S.push(C.numSunLights),S.push(C.numDirLights),S.push(C.numPointLights),S.push(C.numSpotLights),S.push(C.numSpotLightMaps),S.push(C.numHemiLights),S.push(C.numRectAreaLights),S.push(C.numSunLightShadows),S.push(C.numDirLightShadows),S.push(C.numPointLightShadows),S.push(C.numSpotLightShadows),S.push(C.numSpotLightShadowsWithMaps),S.push(C.numLightProbes),S.push(C.shadowMapType),S.push(C.toneMapping),S.push(C.numClippingPlanes),S.push(C.numClipIntersection),S.push(C.depthPacking)}function O(S,C){u.disableAll(),C.instancing&&u.enable(0),C.instancingColor&&u.enable(1),C.instancingMorph&&u.enable(2),C.matcap&&u.enable(3),C.envMap&&u.enable(4),C.normalMapObjectSpace&&u.enable(5),C.normalMapTangentSpace&&u.enable(6),C.clearcoat&&u.enable(7),C.iridescence&&u.enable(8),C.alphaTest&&u.enable(9),C.vertexColors&&u.enable(10),C.vertexAlphas&&u.enable(11),C.vertexUv1s&&u.enable(12),C.vertexUv2s&&u.enable(13),C.vertexUv3s&&u.enable(14),C.vertexTangents&&u.enable(15),C.anisotropy&&u.enable(16),C.alphaHash&&u.enable(17),C.batching&&u.enable(18),C.dispersion&&u.enable(19),C.retroreflection&&u.enable(24),C.batchingColor&&u.enable(20),C.gradientMap&&u.enable(21),C.packedNormalMap&&u.enable(22),C.vertexNormals&&u.enable(23),S.push(u.mask),u.disableAll(),C.fog&&u.enable(0),C.useFog&&u.enable(1),C.flatShading&&u.enable(2),C.logarithmicDepthBuffer&&u.enable(3),C.reversedDepthBuffer&&u.enable(4),C.skinning&&u.enable(5),C.morphTargets&&u.enable(6),C.morphNormals&&u.enable(7),C.morphColors&&u.enable(8),C.premultipliedAlpha&&u.enable(9),C.shadowMapEnabled&&u.enable(10),C.doubleSided&&u.enable(11),C.flipSided&&u.enable(12),C.useDepthPacking&&u.enable(13),C.dithering&&u.enable(14),C.transmission&&u.enable(15),C.sheen&&u.enable(16),C.opaque&&u.enable(17),C.pointsUvs&&u.enable(18),C.decodeVideoTexture&&u.enable(19),C.decodeVideoTextureEmissive&&u.enable(20),C.alphaToCoverage&&u.enable(21),C.numLightProbeGrids>0&&u.enable(22),C.hasPositionAttribute&&u.enable(23),S.push(u.mask)}function B(S){const C=x[S.type];let k;if(C){const H=Ea[C];k=B0.clone(H.uniforms)}else k=S.uniforms;return k}function P(S,C){let k=M.get(C);return k!==void 0?++k.usedTimes:(k=new _y(i,C,S,o),g.push(k),M.set(C,k)),k}function F(S){if(--S.usedTimes===0){const C=g.indexOf(S);g[C]=g[g.length-1],g.pop(),M.delete(S.cacheKey),S.destroy()}}function D(S){d.remove(S)}function V(){d.dispose()}return{getParameters:U,getProgramCacheKey:w,getUniforms:B,acquireProgram:P,releaseProgram:F,releaseShaderCache:D,programs:g,dispose:V}}function Ey(){let i=new WeakMap;function e(u){return i.has(u)}function t(u){let d=i.get(u);return d===void 0&&(d={},i.set(u,d)),d}function n(u){i.delete(u)}function o(u,d,p){i.get(u)[d]=p}function c(){i=new WeakMap}return{has:e,get:t,remove:n,update:o,dispose:c}}function Ty(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function jp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function $p(){const i=[];let e=0;const t=[],n=[],o=[];function c(){e=0,t.length=0,n.length=0,o.length=0}function u(_){let x=0;return _.isInstancedMesh&&(x+=2),_.isSkinnedMesh&&(x+=1),x}function d(_,x,R,U,w,y){let O=i[e];return O===void 0?(O={id:_.id,object:_,geometry:x,material:R,materialVariant:u(_),groupOrder:U,renderOrder:_.renderOrder,z:w,group:y},i[e]=O):(O.id=_.id,O.object=_,O.geometry=x,O.material=R,O.materialVariant=u(_),O.groupOrder=U,O.renderOrder=_.renderOrder,O.z=w,O.group=y),e++,O}function p(_,x,R,U,w,y,O){O.reversedDepth===!0&&(w=-w);const B=d(_,x,R,U,w,y);R.transmission>0?n.push(B):R.transparent===!0?o.push(B):t.push(B)}function g(_,x,R,U,w,y){const O=d(_,x,R,U,w,y);R.transmission>0?n.unshift(O):R.transparent===!0?o.unshift(O):t.unshift(O)}function M(_,x){t.length>1&&t.sort(_||Ty),n.length>1&&n.sort(x||jp),o.length>1&&o.sort(x||jp)}function T(){for(let _=e,x=i.length;_<x;_++){const R=i[_];if(R.id===null)break;R.id=null,R.object=null,R.geometry=null,R.material=null,R.group=null}}return{opaque:t,transmissive:n,transparent:o,init:c,push:p,unshift:g,finish:T,sort:M}}function wy(){let i=new WeakMap;function e(n,o){const c=i.get(n);let u;return c===void 0?(u=new $p,i.set(n,[u])):o>=c.length?(u=new $p,c.push(u)):u=c[o],u}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ay(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new K,color:new Ut};break;case"SpotLight":t={position:new K,direction:new K,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":t={color:new Ut,position:new K,halfWidth:new K,halfHeight:new K};break}return i[e.id]=t,t}}}function Ry(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Cy=0;function Py(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ly(i){const e=new Ay,t=Ry(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)n.probe.push(new K);const o=new K,c=new Rn,u=new Rn;function d(g){let M=0,T=0,_=0;for(let q=0;q<9;q++)n.probe[q].set(0,0,0);let x=0,R=0,U=0,w=0,y=0,O=0,B=0,P=0,F=0,D=0,V=0,S=0,C=0,k=0;g.sort(Py);for(let q=0,ae=g.length;q<ae;q++){const Y=g[q],ue=Y.color,Se=Y.intensity,be=Y.distance;let Re=null;if(Y.shadow&&Y.shadow.map&&(Y.shadow.map.texture.format===Xo?Re=Y.shadow.map.texture:Re=Y.shadow.map.depthTexture||Y.shadow.map.texture),Y.isAmbientLight)M+=ue.r*Se,T+=ue.g*Se,_+=ue.b*Se;else if(Y.isLightProbe){for(let ne=0;ne<9;ne++)n.probe[ne].addScaledVector(Y.sh.coefficients[ne],Se);k++}else if(Y.isSunLight){const ne=e.get(Y);if(ne.color.copy(Y.color).multiplyScalar(Y.intensity),Y.castShadow){const G=Y.shadow,Ee=t.get(Y);Ee.shadowIntensity=G.intensity,Ee.shadowBias=G.bias,Ee.shadowNormalBias=G.normalBias,Ee.shadowRadius=G.radius,Ee.shadowMapSize.copy(G.mapSize).multiply(G.getFrameExtents()),n.sunShadow[R]=Ee,n.sunShadowMap[R]=Re;const lt=G.getViewportCount();for(let rt=0;rt<lt;rt++)n.sunShadowMatrix[U+rt]=G.getMatrix(rt),n.sunShadowCascade[U+rt]=G._cascadeData[rt];U+=lt,R++}n.sun[x]=ne,x++}else if(Y.isDirectionalLight){const ne=e.get(Y);if(ne.color.copy(Y.color).multiplyScalar(Y.intensity),Y.castShadow){const G=Y.shadow,Ee=t.get(Y);Ee.shadowIntensity=G.intensity,Ee.shadowBias=G.bias,Ee.shadowNormalBias=G.normalBias,Ee.shadowRadius=G.radius,Ee.shadowMapSize=G.mapSize,n.directionalShadow[w]=Ee,n.directionalShadowMap[w]=Re,n.directionalShadowMatrix[w]=Y.shadow.matrix,F++}n.directional[w]=ne,w++}else if(Y.isSpotLight){const ne=e.get(Y);ne.position.setFromMatrixPosition(Y.matrixWorld),ne.color.copy(ue).multiplyScalar(Se),ne.distance=be,ne.coneCos=Math.cos(Y.angle),ne.penumbraCos=Math.cos(Y.angle*(1-Y.penumbra)),ne.decay=Y.decay,n.spot[O]=ne;const G=Y.shadow;if(Y.map&&(n.spotLightMap[S]=Y.map,S++,G.updateMatrices(Y),Y.castShadow&&C++),n.spotLightMatrix[O]=G.matrix,Y.castShadow){const Ee=t.get(Y);Ee.shadowIntensity=G.intensity,Ee.shadowBias=G.bias,Ee.shadowNormalBias=G.normalBias,Ee.shadowRadius=G.radius,Ee.shadowMapSize=G.mapSize,n.spotShadow[O]=Ee,n.spotShadowMap[O]=Re,V++}O++}else if(Y.isRectAreaLight){const ne=e.get(Y);ne.color.copy(ue).multiplyScalar(Se),ne.halfWidth.set(Y.width*.5,0,0),ne.halfHeight.set(0,Y.height*.5,0),n.rectArea[B]=ne,B++}else if(Y.isPointLight){const ne=e.get(Y);if(ne.color.copy(Y.color).multiplyScalar(Y.intensity),ne.distance=Y.distance,ne.decay=Y.decay,Y.castShadow){const G=Y.shadow,Ee=t.get(Y);Ee.shadowIntensity=G.intensity,Ee.shadowBias=G.bias,Ee.shadowNormalBias=G.normalBias,Ee.shadowRadius=G.radius,Ee.shadowMapSize=G.mapSize,Ee.shadowCameraNear=G.camera.near,Ee.shadowCameraFar=G.camera.far,n.pointShadow[y]=Ee,n.pointShadowMap[y]=Re,n.pointShadowMatrix[y]=Y.shadow.matrix,D++}n.point[y]=ne,y++}else if(Y.isHemisphereLight){const ne=e.get(Y);ne.skyColor.copy(Y.color).multiplyScalar(Se),ne.groundColor.copy(Y.groundColor).multiplyScalar(Se),n.hemi[P]=ne,P++}}B>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=qe.LTC_FLOAT_1,n.rectAreaLTC2=qe.LTC_FLOAT_2):(n.rectAreaLTC1=qe.LTC_HALF_1,n.rectAreaLTC2=qe.LTC_HALF_2)),n.ambient[0]=M,n.ambient[1]=T,n.ambient[2]=_;const H=n.hash;(H.sunLength!==x||H.directionalLength!==w||H.pointLength!==y||H.spotLength!==O||H.rectAreaLength!==B||H.hemiLength!==P||H.numSunShadows!==R||H.numDirectionalShadows!==F||H.numPointShadows!==D||H.numSpotShadows!==V||H.numSpotMaps!==S||H.numLightProbes!==k)&&(n.sun.length=x,n.directional.length=w,n.spot.length=O,n.rectArea.length=B,n.point.length=y,n.hemi.length=P,n.sunShadow.length=R,n.sunShadowMap.length=R,n.sunShadowMatrix.length=U,n.sunShadowCascade.length=U,n.directionalShadow.length=F,n.directionalShadowMap.length=F,n.directionalShadowMatrix.length=F,n.pointShadow.length=D,n.pointShadowMap.length=D,n.pointShadowMatrix.length=D,n.spotShadow.length=V,n.spotShadowMap.length=V,n.spotLightMatrix.length=V+S-C,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=k,H.sunLength=x,H.directionalLength=w,H.pointLength=y,H.spotLength=O,H.rectAreaLength=B,H.hemiLength=P,H.numSunShadows=R,H.numDirectionalShadows=F,H.numPointShadows=D,H.numSpotShadows=V,H.numSpotMaps=S,H.numLightProbes=k,n.version=Cy++)}function p(g,M){let T=0,_=0,x=0,R=0,U=0,w=0;const y=M.matrixWorldInverse;for(let O=0,B=g.length;O<B;O++){const P=g[O];if(P.isSunLight){const F=n.sun[T];F.direction.setFromMatrixPosition(P.matrixWorld),F.direction.transformDirection(y),T++}else if(P.isDirectionalLight){const F=n.directional[_];F.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),F.direction.sub(o),F.direction.transformDirection(y),_++}else if(P.isSpotLight){const F=n.spot[R];F.position.setFromMatrixPosition(P.matrixWorld),F.position.applyMatrix4(y),F.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),F.direction.sub(o),F.direction.transformDirection(y),R++}else if(P.isRectAreaLight){const F=n.rectArea[U];F.position.setFromMatrixPosition(P.matrixWorld),F.position.applyMatrix4(y),u.identity(),c.copy(P.matrixWorld),c.premultiply(y),u.extractRotation(c),F.halfWidth.set(P.width*.5,0,0),F.halfHeight.set(0,P.height*.5,0),F.halfWidth.applyMatrix4(u),F.halfHeight.applyMatrix4(u),U++}else if(P.isPointLight){const F=n.point[x];F.position.setFromMatrixPosition(P.matrixWorld),F.position.applyMatrix4(y),x++}else if(P.isHemisphereLight){const F=n.hemi[w];F.direction.setFromMatrixPosition(P.matrixWorld),F.direction.transformDirection(y),w++}}}return{setup:d,setupView:p,state:n}}function eg(i){const e=new Ly(i),t=[],n=[],o=[];function c(_){T.camera=_,t.length=0,n.length=0,o.length=0}function u(_){t.push(_)}function d(_){n.push(_)}function p(_){o.push(_)}function g(){e.setup(t)}function M(_){e.setupView(t,_)}const T={lightsArray:t,shadowsArray:n,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:T,setupLights:g,setupLightsView:M,pushLight:u,pushShadow:d,pushLightProbeGrid:p}}function Iy(i){let e=new WeakMap;function t(o,c=0){const u=e.get(o);let d;return u===void 0?(d=new eg(i),e.set(o,[d])):c>=u.length?(d=new eg(i),u.push(d)):d=u[c],d}function n(){e=new WeakMap}return{get:t,dispose:n}}const Dy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ny=`uniform sampler2D shadow_pass;
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
}`,Uy=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],Fy=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],tg=new Rn,Gc=new K,Lh=new K;function Oy(i,e,t){let n=new Nd;const o=new ct,c=new ct,u=new Un,d=new V0,p=new W0,g={},M=t.maxTextureSize,T={[Vo]:ji,[ji]:Vo,[Pr]:Pr},_=new Pa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:Dy,fragmentShader:Ny}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const R=new $i;R.setAttribute("position",new ds(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const U=new di(R,_),w=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hf;let y=this.type;this.render=function(D,V,S){if(w.enabled===!1||w.autoUpdate===!1&&w.needsUpdate===!1||D.length===0)return;this.type===em&&(gt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=hf);const C=i.getRenderTarget(),k=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),q=i.state;q.setBlending(fs),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const ae=y!==this.type;ae&&V.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(ue=>ue.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,ue=D.length;Y<ue;Y++){const Se=D[Y],be=Se.shadow;if(be===void 0){gt("WebGLShadowMap:",Se,"has no shadow.");continue}if(be.autoUpdate===!1&&be.needsUpdate===!1)continue;o.copy(be.mapSize);const Re=be.getFrameExtents();o.multiply(Re),c.copy(be.mapSize),(o.x>M||o.y>M)&&(o.x>M&&(c.x=Math.floor(M/Re.x),o.x=c.x*Re.x,be.mapSize.x=c.x),o.y>M&&(c.y=Math.floor(M/Re.y),o.y=c.y*Re.y,be.mapSize.y=c.y));const ne=i.state.buffers.depth.getReversed();if(be.camera._reversedDepth=ne,be.map===null||ae===!0){if(be.map!==null&&(be.map.depthTexture!==null&&(be.map.depthTexture.dispose(),be.map.depthTexture=null),be.map.dispose()),this.type===Wc){if(Se.isPointLight){gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}be.map=new ea(o.x,o.y,{format:Xo,type:Ca,minFilter:Ai,magFilter:Ai,generateMipmaps:!1}),be.map.texture.name=Se.name+".shadowMap",be.map.depthTexture=new iu(o.x,o.y,Ta),be.map.depthTexture.name=Se.name+".shadowMapDepth",be.map.depthTexture.format=ps,be.map.depthTexture.compareFunction=null,be.map.depthTexture.minFilter=hi,be.map.depthTexture.magFilter=hi}else Se.isPointLight?(be.map=new Gg(o.x),be.map.depthTexture=new y0(o.x,Ra)):(be.map=new ea(o.x,o.y),be.map.depthTexture=new iu(o.x,o.y,Ra)),be.map.depthTexture.name=Se.name+".shadowMap",be.map.depthTexture.format=ps,this.type===hf?(be.map.depthTexture.compareFunction=ne?Cd:Rd,be.map.depthTexture.minFilter=Ai,be.map.depthTexture.magFilter=Ai):(be.map.depthTexture.compareFunction=null,be.map.depthTexture.minFilter=hi,be.map.depthTexture.magFilter=hi);be.camera.updateProjectionMatrix()}be.map.isWebGLCubeRenderTarget!==!0&&(be.map.width!==o.x||be.map.height!==o.y)&&be.map.setSize(o.x,o.y);const G=be.map.isWebGLCubeRenderTarget?6:be.getViewportCount();Se.isPointLight!==!0&&be.updateMatrices(Se,S);for(let Ee=0;Ee<G;Ee++){const lt=be.getCamera(Ee);if(Se.isPointLight){const rt=be.camera,Ae=be.matrix,oe=Se.distance||rt.far;oe!==rt.far&&(rt.far=oe,rt.updateProjectionMatrix()),Gc.setFromMatrixPosition(Se.matrixWorld),rt.position.copy(Gc),Lh.copy(rt.position),Lh.add(Uy[Ee]),rt.up.copy(Fy[Ee]),rt.lookAt(Lh),rt.updateMatrixWorld(),Ae.makeTranslation(-Gc.x,-Gc.y,-Gc.z),tg.multiplyMatrices(rt.projectionMatrix,rt.matrixWorldInverse),be._frustum.setFromProjectionMatrix(tg,rt.coordinateSystem,rt.reversedDepth)}if(be.map.isWebGLCubeRenderTarget)i.setRenderTarget(be.map,Ee),i.clear();else{Ee===0&&(i.setRenderTarget(be.map),i.clear());const rt=be.getViewport(Ee);u.set(c.x*rt.x,c.y*rt.y,c.x*rt.z,c.y*rt.w),q.viewport(u)}n=be.getFrustum(Ee),P(V,S,lt,Se,this.type)}be.isPointLightShadow!==!0&&this.type===Wc&&O(be,S),be.needsUpdate=!1}y=this.type,w.needsUpdate=!1,i.setRenderTarget(C,k,H)};function O(D,V){const S=e.update(U);_.defines.VSM_SAMPLES!==D.blurSamples&&(_.defines.VSM_SAMPLES=D.blurSamples,x.defines.VSM_SAMPLES=D.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),D.mapPass===null?D.mapPass=new ea(o.x,o.y,{format:Xo,type:Ca}):(D.mapPass.width!==D.map.width||D.mapPass.height!==D.map.height)&&D.mapPass.setSize(D.map.width,D.map.height),_.uniforms.shadow_pass.value=D.map.depthTexture,_.uniforms.resolution.value.set(D.map.width,D.map.height),_.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(V,null,S,_,U,null),x.uniforms.shadow_pass.value=D.mapPass.texture,x.uniforms.resolution.value.set(D.map.width,D.map.height),x.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(V,null,S,x,U,null)}function B(D,V,S,C){let k=null;const H=S.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(H!==void 0)k=H;else if(k=S.isPointLight===!0?p:d,i.localClippingEnabled&&V.clipShadows===!0&&Array.isArray(V.clippingPlanes)&&V.clippingPlanes.length!==0||V.displacementMap&&V.displacementScale!==0||V.alphaMap&&V.alphaTest>0||V.map&&V.alphaTest>0||V.alphaToCoverage===!0){const q=k.uuid,ae=V.uuid;let Y=g[q];Y===void 0&&(Y={},g[q]=Y);let ue=Y[ae];ue===void 0&&(ue=k.clone(),Y[ae]=ue,V.addEventListener("dispose",F)),k=ue}if(k.visible=V.visible,k.wireframe=V.wireframe,C===Wc?k.side=V.shadowSide!==null?V.shadowSide:V.side:k.side=V.shadowSide!==null?V.shadowSide:T[V.side],k.alphaMap=V.alphaMap,k.alphaTest=V.alphaToCoverage===!0?.5:V.alphaTest,k.map=V.map,k.clipShadows=V.clipShadows,k.clippingPlanes=V.clippingPlanes,k.clipIntersection=V.clipIntersection,k.displacementMap=V.displacementMap,k.displacementScale=V.displacementScale,k.displacementBias=V.displacementBias,k.wireframeLinewidth=V.wireframeLinewidth,k.linewidth=V.linewidth,S.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const q=i.properties.get(k);q.light=S}return k}function P(D,V,S,C,k){if(D.visible===!1)return;if(D.layers.test(V.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&k===Wc)&&(!D.frustumCulled||D.intersectsFrustum(n))){D.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,D.matrixWorld);const ae=e.update(D),Y=D.material;if(Array.isArray(Y)){const ue=ae.groups;for(let Se=0,be=ue.length;Se<be;Se++){const Re=ue[Se],ne=Y[Re.materialIndex];if(ne&&ne.visible){const G=B(D,ne,C,k);D.onBeforeShadow(i,D,V,S,ae,G,Re),i.renderBufferDirect(S,null,ae,G,D,Re),D.onAfterShadow(i,D,V,S,ae,G,Re)}}}else if(Y.visible){const ue=B(D,Y,C,k);D.onBeforeShadow(i,D,V,S,ae,ue,null),i.renderBufferDirect(S,null,ae,ue,D,null),D.onAfterShadow(i,D,V,S,ae,ue,null)}}const q=D.children;for(let ae=0,Y=q.length;ae<Y;ae++)P(q[ae],V,S,C,k)}function F(D){D.target.removeEventListener("dispose",F);for(const S in g){const C=g[S],k=D.target.uuid;k in C&&(C[k].dispose(),delete C[k])}}}function By(i,e){function t(){let W=!1;const _e=new Un;let xe=null;const Le=new Un(0,0,0,0);return{setMask:function(Ie){xe!==Ie&&!W&&(i.colorMask(Ie,Ie,Ie,Ie),xe=Ie)},setLocked:function(Ie){W=Ie},setClear:function(Ie,pe,Ge,Oe,yt){yt===!0&&(Ie*=Oe,pe*=Oe,Ge*=Oe),_e.set(Ie,pe,Ge,Oe),Le.equals(_e)===!1&&(i.clearColor(Ie,pe,Ge,Oe),Le.copy(_e))},reset:function(){W=!1,xe=null,Le.set(-1,0,0,0)}}}function n(){let W=!1,_e=!1,xe=null,Le=null,Ie=null;return{setReversed:function(pe){if(_e!==pe){const Ge=e.get("EXT_clip_control");pe?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),_e=pe;const Oe=Ie;Ie=null,this.setClear(Oe)}},getReversed:function(){return _e},setTest:function(pe){pe?ye(i.DEPTH_TEST):Ke(i.DEPTH_TEST)},setMask:function(pe){xe!==pe&&!W&&(i.depthMask(pe),xe=pe)},setFunc:function(pe){if(_e&&(pe=Um[pe]),Le!==pe){switch(pe){case Ih:i.depthFunc(i.NEVER);break;case Dh:i.depthFunc(i.ALWAYS);break;case Nh:i.depthFunc(i.LESS);break;case jc:i.depthFunc(i.LEQUAL);break;case Uh:i.depthFunc(i.EQUAL);break;case Fh:i.depthFunc(i.GEQUAL);break;case Oh:i.depthFunc(i.GREATER);break;case Bh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Le=pe}},setLocked:function(pe){W=pe},setClear:function(pe){Ie!==pe&&(Ie=pe,_e&&(pe=1-pe),i.clearDepth(pe))},reset:function(){W=!1,xe=null,Le=null,Ie=null,_e=!1}}}function o(){let W=!1,_e=null,xe=null,Le=null,Ie=null,pe=null,Ge=null,Oe=null,yt=null;return{setTest:function(Ot){W||(Ot?ye(i.STENCIL_TEST):Ke(i.STENCIL_TEST))},setMask:function(Ot){_e!==Ot&&!W&&(i.stencilMask(Ot),_e=Ot)},setFunc:function(Ot,$t,Pn){(xe!==Ot||Le!==$t||Ie!==Pn)&&(i.stencilFunc(Ot,$t,Pn),xe=Ot,Le=$t,Ie=Pn)},setOp:function(Ot,$t,Pn){(pe!==Ot||Ge!==$t||Oe!==Pn)&&(i.stencilOp(Ot,$t,Pn),pe=Ot,Ge=$t,Oe=Pn)},setLocked:function(Ot){W=Ot},setClear:function(Ot){yt!==Ot&&(i.clearStencil(Ot),yt=Ot)},reset:function(){W=!1,_e=null,xe=null,Le=null,Ie=null,pe=null,Ge=null,Oe=null,yt=null}}}const c=new t,u=new n,d=new o,p=new WeakMap,g=new WeakMap;let M={},T={},_={},x=new WeakMap,R=[],U=null,w=!1,y=null,O=null,B=null,P=null,F=null,D=null,V=null,S=new Ut(0,0,0),C=0,k=!1,H=null,q=null,ae=null,Y=null,ue=null;const Se=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let be=!1,Re=0;const ne=i.getParameter(i.VERSION);ne.indexOf("WebGL")!==-1?(Re=parseFloat(/^WebGL (\d)/.exec(ne)[1]),be=Re>=1):ne.indexOf("OpenGL ES")!==-1&&(Re=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),be=Re>=2);let G=null,Ee={};const lt=i.getParameter(i.SCISSOR_BOX),rt=i.getParameter(i.VIEWPORT),Ae=new Un().fromArray(lt),oe=new Un().fromArray(rt);function Ct(W,_e,xe,Le){const Ie=new Uint8Array(4),pe=i.createTexture();i.bindTexture(W,pe),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ge=0;Ge<xe;Ge++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(_e,0,i.RGBA,1,1,Le,0,i.RGBA,i.UNSIGNED_BYTE,Ie):i.texImage2D(_e+Ge,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ie);return pe}const Me={};Me[i.TEXTURE_2D]=Ct(i.TEXTURE_2D,i.TEXTURE_2D,1),Me[i.TEXTURE_CUBE_MAP]=Ct(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[i.TEXTURE_2D_ARRAY]=Ct(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Me[i.TEXTURE_3D]=Ct(i.TEXTURE_3D,i.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),d.setClear(0),ye(i.DEPTH_TEST),u.setFunc(jc),xt(!1),Jt($d),ye(i.CULL_FACE),At(fs);function ye(W){M[W]!==!0&&(i.enable(W),M[W]=!0)}function Ke(W){M[W]!==!1&&(i.disable(W),M[W]=!1)}function ut(W,_e){return _[W]!==_e?(i.bindFramebuffer(W,_e),_[W]=_e,W===i.DRAW_FRAMEBUFFER&&(_[i.FRAMEBUFFER]=_e),W===i.FRAMEBUFFER&&(_[i.DRAW_FRAMEBUFFER]=_e),!0):!1}function Ye(W,_e){let xe=R,Le=!1;if(W){xe=x.get(_e),xe===void 0&&(xe=[],x.set(_e,xe));const Ie=W.textures;if(xe.length!==Ie.length||xe[0]!==i.COLOR_ATTACHMENT0){for(let pe=0,Ge=Ie.length;pe<Ge;pe++)xe[pe]=i.COLOR_ATTACHMENT0+pe;xe.length=Ie.length,Le=!0}}else xe[0]!==i.BACK&&(xe[0]=i.BACK,Le=!0);Le&&i.drawBuffers(xe)}function mt(W){return U!==W?(i.useProgram(W),U=W,!0):!1}const vt={[ql]:i.FUNC_ADD,[nm]:i.FUNC_SUBTRACT,[im]:i.FUNC_REVERSE_SUBTRACT};vt[rm]=i.MIN,vt[am]=i.MAX;const _t={[sm]:i.ZERO,[om]:i.ONE,[lm]:i.SRC_COLOR,[lg]:i.SRC_ALPHA,[pm]:i.SRC_ALPHA_SATURATE,[hm]:i.DST_COLOR,[um]:i.DST_ALPHA,[cm]:i.ONE_MINUS_SRC_COLOR,[cg]:i.ONE_MINUS_SRC_ALPHA,[dm]:i.ONE_MINUS_DST_COLOR,[fm]:i.ONE_MINUS_DST_ALPHA,[gm]:i.CONSTANT_COLOR,[mm]:i.ONE_MINUS_CONSTANT_COLOR,[vm]:i.CONSTANT_ALPHA,[_m]:i.ONE_MINUS_CONSTANT_ALPHA};function At(W,_e,xe,Le,Ie,pe,Ge,Oe,yt,Ot){if(W===fs){w===!0&&(Ke(i.BLEND),w=!1);return}if(w===!1&&(ye(i.BLEND),w=!0),W!==tm){if(W!==y||Ot!==k){if((O!==ql||F!==ql)&&(i.blendEquation(i.FUNC_ADD),O=ql,F=ql),Ot)switch(W){case Yc:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ep:i.blendFunc(i.ONE,i.ONE);break;case tp:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case np:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Zt("WebGLState: Invalid blending: ",W);break}else switch(W){case Yc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ep:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case tp:Zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case np:Zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Zt("WebGLState: Invalid blending: ",W);break}B=null,P=null,D=null,V=null,S.set(0,0,0),C=0,y=W,k=Ot}return}Ie=Ie||_e,pe=pe||xe,Ge=Ge||Le,(_e!==O||Ie!==F)&&(i.blendEquationSeparate(vt[_e],vt[Ie]),O=_e,F=Ie),(xe!==B||Le!==P||pe!==D||Ge!==V)&&(i.blendFuncSeparate(_t[xe],_t[Le],_t[pe],_t[Ge]),B=xe,P=Le,D=pe,V=Ge),(Oe.equals(S)===!1||yt!==C)&&(i.blendColor(Oe.r,Oe.g,Oe.b,yt),S.copy(Oe),C=yt),y=W,k=!1}function Ze(W,_e){W.side===Pr?Ke(i.CULL_FACE):ye(i.CULL_FACE);let xe=W.side===ji;_e&&(xe=!xe),xt(xe),W.blending===Yc&&W.transparent===!1?At(fs):At(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),c.setMask(W.colorWrite);const Le=W.stencilWrite;d.setTest(Le),Le&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),jt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ye(i.SAMPLE_ALPHA_TO_COVERAGE):Ke(i.SAMPLE_ALPHA_TO_COVERAGE)}function xt(W){H!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),H=W)}function Jt(W){W!==jg?(ye(i.CULL_FACE),W!==q&&(W===$d?i.cullFace(i.BACK):W===$g?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ke(i.CULL_FACE),q=W}function Ft(W){W!==ae&&(be&&i.lineWidth(W),ae=W)}function jt(W,_e,xe){W?(ye(i.POLYGON_OFFSET_FILL),(Y!==_e||ue!==xe)&&(Y=_e,ue=xe,u.getReversed()&&(_e=-_e),i.polygonOffset(_e,xe))):Ke(i.POLYGON_OFFSET_FILL)}function Rt(W){W?ye(i.SCISSOR_TEST):Ke(i.SCISSOR_TEST)}function Kt(W){W===void 0&&(W=i.TEXTURE0+Se-1),G!==W&&(i.activeTexture(W),G=W)}function Z(W,_e,xe){xe===void 0&&(G===null?xe=i.TEXTURE0+Se-1:xe=G);let Le=Ee[xe];Le===void 0&&(Le={type:void 0,texture:void 0},Ee[xe]=Le),(Le.type!==W||Le.texture!==_e)&&(G!==xe&&(i.activeTexture(xe),G=xe),i.bindTexture(W,_e||Me[W]),Le.type=W,Le.texture=_e)}function Wt(){const W=Ee[G];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function ht(){try{i.compressedTexImage2D(...arguments)}catch(W){Zt("WebGLState:",W)}}function z(){try{i.compressedTexImage3D(...arguments)}catch(W){Zt("WebGLState:",W)}}function A(){try{i.texSubImage2D(...arguments)}catch(W){Zt("WebGLState:",W)}}function ie(){try{i.texSubImage3D(...arguments)}catch(W){Zt("WebGLState:",W)}}function te(){try{i.compressedTexSubImage2D(...arguments)}catch(W){Zt("WebGLState:",W)}}function ge(){try{i.compressedTexSubImage3D(...arguments)}catch(W){Zt("WebGLState:",W)}}function Fe(){try{i.texStorage2D(...arguments)}catch(W){Zt("WebGLState:",W)}}function Be(){try{i.texStorage3D(...arguments)}catch(W){Zt("WebGLState:",W)}}function me(){try{i.texImage2D(...arguments)}catch(W){Zt("WebGLState:",W)}}function we(){try{i.texImage3D(...arguments)}catch(W){Zt("WebGLState:",W)}}function ke(W){return T[W]!==void 0?T[W]:i.getParameter(W)}function it(W,_e){T[W]!==_e&&(i.pixelStorei(W,_e),T[W]=_e)}function He(W){Ae.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),Ae.copy(W))}function ze(W){oe.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),oe.copy(W))}function at(W,_e){let xe=g.get(_e);xe===void 0&&(xe=new WeakMap,g.set(_e,xe));let Le=xe.get(W);Le===void 0&&(Le=i.getUniformBlockIndex(_e,W.name),xe.set(W,Le))}function de(W,_e){const Le=g.get(_e).get(W);p.get(_e)!==Le&&(i.uniformBlockBinding(_e,Le,W.__bindingPointIndex),p.set(_e,Le))}function Pe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),u.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),M={},T={},G=null,Ee={},_={},x=new WeakMap,R=[],U=null,w=!1,y=null,O=null,B=null,P=null,F=null,D=null,V=null,S=new Ut(0,0,0),C=0,k=!1,H=null,q=null,ae=null,Y=null,ue=null,Ae.set(0,0,i.canvas.width,i.canvas.height),oe.set(0,0,i.canvas.width,i.canvas.height),c.reset(),u.reset(),d.reset()}return{buffers:{color:c,depth:u,stencil:d},enable:ye,disable:Ke,bindFramebuffer:ut,drawBuffers:Ye,useProgram:mt,setBlending:At,setMaterial:Ze,setFlipSided:xt,setCullFace:Jt,setLineWidth:Ft,setPolygonOffset:jt,setScissorTest:Rt,activeTexture:Kt,bindTexture:Z,unbindTexture:Wt,compressedTexImage2D:ht,compressedTexImage3D:z,texImage2D:me,texImage3D:we,pixelStorei:it,getParameter:ke,updateUBOMapping:at,uniformBlockBinding:de,texStorage2D:Fe,texStorage3D:Be,texSubImage2D:A,texSubImage3D:ie,compressedTexSubImage2D:te,compressedTexSubImage3D:ge,scissor:He,viewport:ze,reset:Pe}}function zy(i,e,t,n,o,c,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new ct,M=new WeakMap,T=new Set;let _;const x=new WeakMap;let R=!1;try{R=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function U(z,A){return R?new OffscreenCanvas(z,A):bf("canvas")}function w(z,A,ie){let te=1;const ge=ht(z);if((ge.width>ie||ge.height>ie)&&(te=ie/Math.max(ge.width,ge.height)),te<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const Fe=Math.floor(te*ge.width),Be=Math.floor(te*ge.height);_===void 0&&(_=U(Fe,Be));const me=A?U(Fe,Be):_;return me.width=Fe,me.height=Be,me.getContext("2d").drawImage(z,0,0,Fe,Be),gt("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+Fe+"x"+Be+")."),me}else return"data"in z&&gt("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),z;return z}function y(z){return z.generateMipmaps}function O(z){i.generateMipmap(z)}function B(z){return z.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?i.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function P(z,A,ie,te,ge,Fe=!1){if(z!==null){if(i[z]!==void 0)return i[z];gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let Be;te&&(Be=e.get("EXT_texture_norm16"),Be||gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let me=A;if(A===i.RED&&(ie===i.FLOAT&&(me=i.R32F),ie===i.HALF_FLOAT&&(me=i.R16F),ie===i.UNSIGNED_BYTE&&(me=i.R8),ie===i.UNSIGNED_SHORT&&Be&&(me=Be.R16_EXT),ie===i.SHORT&&Be&&(me=Be.R16_SNORM_EXT)),A===i.RED_INTEGER&&(ie===i.UNSIGNED_BYTE&&(me=i.R8UI),ie===i.UNSIGNED_SHORT&&(me=i.R16UI),ie===i.UNSIGNED_INT&&(me=i.R32UI),ie===i.BYTE&&(me=i.R8I),ie===i.SHORT&&(me=i.R16I),ie===i.INT&&(me=i.R32I)),A===i.RG&&(ie===i.FLOAT&&(me=i.RG32F),ie===i.HALF_FLOAT&&(me=i.RG16F),ie===i.UNSIGNED_BYTE&&(me=i.RG8),ie===i.UNSIGNED_SHORT&&Be&&(me=Be.RG16_EXT),ie===i.SHORT&&Be&&(me=Be.RG16_SNORM_EXT)),A===i.RG_INTEGER&&(ie===i.UNSIGNED_BYTE&&(me=i.RG8UI),ie===i.UNSIGNED_SHORT&&(me=i.RG16UI),ie===i.UNSIGNED_INT&&(me=i.RG32UI),ie===i.BYTE&&(me=i.RG8I),ie===i.SHORT&&(me=i.RG16I),ie===i.INT&&(me=i.RG32I)),A===i.RGB_INTEGER&&(ie===i.UNSIGNED_BYTE&&(me=i.RGB8UI),ie===i.UNSIGNED_SHORT&&(me=i.RGB16UI),ie===i.UNSIGNED_INT&&(me=i.RGB32UI),ie===i.BYTE&&(me=i.RGB8I),ie===i.SHORT&&(me=i.RGB16I),ie===i.INT&&(me=i.RGB32I)),A===i.RGBA_INTEGER&&(ie===i.UNSIGNED_BYTE&&(me=i.RGBA8UI),ie===i.UNSIGNED_SHORT&&(me=i.RGBA16UI),ie===i.UNSIGNED_INT&&(me=i.RGBA32UI),ie===i.BYTE&&(me=i.RGBA8I),ie===i.SHORT&&(me=i.RGBA16I),ie===i.INT&&(me=i.RGBA32I)),A===i.RGB&&(ie===i.UNSIGNED_SHORT&&Be&&(me=Be.RGB16_EXT),ie===i.SHORT&&Be&&(me=Be.RGB16_SNORM_EXT),ie===i.UNSIGNED_INT_5_9_9_9_REV&&(me=i.RGB9_E5),ie===i.UNSIGNED_INT_10F_11F_11F_REV&&(me=i.R11F_G11F_B10F)),A===i.RGBA){const we=Fe?Sf:Gt.getTransfer(ge);ie===i.FLOAT&&(me=i.RGBA32F),ie===i.HALF_FLOAT&&(me=i.RGBA16F),ie===i.UNSIGNED_BYTE&&(me=we===fn?i.SRGB8_ALPHA8:i.RGBA8),ie===i.UNSIGNED_SHORT&&Be&&(me=Be.RGBA16_EXT),ie===i.SHORT&&Be&&(me=Be.RGBA16_SNORM_EXT),ie===i.UNSIGNED_SHORT_4_4_4_4&&(me=i.RGBA4),ie===i.UNSIGNED_SHORT_5_5_5_1&&(me=i.RGB5_A1)}return(me===i.R16F||me===i.R32F||me===i.RG16F||me===i.RG32F||me===i.RGBA16F||me===i.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function F(z,A){let ie;return z?A===null||A===Ra||A===eu?ie=i.DEPTH24_STENCIL8:A===Ta?ie=i.DEPTH32F_STENCIL8:A===$c&&(ie=i.DEPTH24_STENCIL8,gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Ra||A===eu?ie=i.DEPTH_COMPONENT24:A===Ta?ie=i.DEPTH_COMPONENT32F:A===$c&&(ie=i.DEPTH_COMPONENT16),ie}function D(z,A){return y(z)===!0||z.isFramebufferTexture&&z.minFilter!==hi&&z.minFilter!==Ai?Math.log2(Math.max(A.width,A.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?A.mipmaps.length:1}function V(z){const A=z.target;A.removeEventListener("dispose",V),C(A),A.isVideoTexture&&M.delete(A),A.isHTMLTexture&&T.delete(A)}function S(z){const A=z.target;A.removeEventListener("dispose",S),H(A)}function C(z){const A=n.get(z);if(A.__webglInit===void 0)return;const ie=z.source,te=x.get(ie);if(te){const ge=te[A.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&k(z),Object.keys(te).length===0&&x.delete(ie)}n.remove(z)}function k(z){const A=n.get(z);i.deleteTexture(A.__webglTexture);const ie=z.source,te=x.get(ie);delete te[A.__cacheKey],u.memory.textures--}function H(z){const A=n.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),n.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(A.__webglFramebuffer[te]))for(let ge=0;ge<A.__webglFramebuffer[te].length;ge++)i.deleteFramebuffer(A.__webglFramebuffer[te][ge]);else i.deleteFramebuffer(A.__webglFramebuffer[te]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[te])}else{if(Array.isArray(A.__webglFramebuffer))for(let te=0;te<A.__webglFramebuffer.length;te++)i.deleteFramebuffer(A.__webglFramebuffer[te]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let te=0;te<A.__webglColorRenderbuffer.length;te++)A.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[te]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const ie=z.textures;for(let te=0,ge=ie.length;te<ge;te++){const Fe=n.get(ie[te]);Fe.__webglTexture&&(i.deleteTexture(Fe.__webglTexture),u.memory.textures--),n.remove(ie[te])}n.remove(z)}let q=0;function ae(){q=0}function Y(){return q}function ue(z){q=z}function Se(){const z=q;return z>=o.maxTextures&&gt("WebGLTextures: Trying to use "+(z+1)+" texture units while this GPU supports only "+o.maxTextures),q+=1,z}function be(z){const A=[];return A.push(z.wrapS),A.push(z.wrapT),A.push(z.wrapR||0),A.push(z.magFilter),A.push(z.minFilter),A.push(z.anisotropy),A.push(z.internalFormat),A.push(z.format),A.push(z.type),A.push(z.generateMipmaps),A.push(z.premultiplyAlpha),A.push(z.flipY),A.push(z.unpackAlignment),A.push(z.colorSpace),A.join()}function Re(z,A){const ie=n.get(z);if(z.isVideoTexture&&Z(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&ie.__version!==z.version){const te=z.image;if(te===null)gt("WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)gt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ke(ie,z,A);return}}else z.isExternalTexture&&(ie.__webglTexture=z.sourceTexture?z.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,ie.__webglTexture,i.TEXTURE0+A)}function ne(z,A){const ie=n.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&ie.__version!==z.version){Ke(ie,z,A);return}else z.isExternalTexture&&(ie.__webglTexture=z.sourceTexture?z.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,ie.__webglTexture,i.TEXTURE0+A)}function G(z,A){const ie=n.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&ie.__version!==z.version){Ke(ie,z,A);return}t.bindTexture(i.TEXTURE_3D,ie.__webglTexture,i.TEXTURE0+A)}function Ee(z,A){const ie=n.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&ie.__version!==z.version){ut(ie,z,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture,i.TEXTURE0+A)}const lt={[zh]:i.REPEAT,[us]:i.CLAMP_TO_EDGE,[kh]:i.MIRRORED_REPEAT},rt={[hi]:i.NEAREST,[ym]:i.NEAREST_MIPMAP_NEAREST,[Vu]:i.NEAREST_MIPMAP_LINEAR,[Ai]:i.LINEAR,[eh]:i.LINEAR_MIPMAP_NEAREST,[ko]:i.LINEAR_MIPMAP_LINEAR},Ae={[Tm]:i.NEVER,[Pm]:i.ALWAYS,[wm]:i.LESS,[Rd]:i.LEQUAL,[Am]:i.EQUAL,[Cd]:i.GEQUAL,[Rm]:i.GREATER,[Cm]:i.NOTEQUAL};function oe(z,A){if(A.type===Ta&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Ai||A.magFilter===eh||A.magFilter===Vu||A.magFilter===ko||A.minFilter===Ai||A.minFilter===eh||A.minFilter===Vu||A.minFilter===ko)&&gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(z,i.TEXTURE_WRAP_S,lt[A.wrapS]),i.texParameteri(z,i.TEXTURE_WRAP_T,lt[A.wrapT]),(z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY)&&i.texParameteri(z,i.TEXTURE_WRAP_R,lt[A.wrapR]),i.texParameteri(z,i.TEXTURE_MAG_FILTER,rt[A.magFilter]),i.texParameteri(z,i.TEXTURE_MIN_FILTER,rt[A.minFilter]),A.compareFunction&&(i.texParameteri(z,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(z,i.TEXTURE_COMPARE_FUNC,Ae[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===hi||A.minFilter!==Vu&&A.minFilter!==ko||A.type===Ta&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const ie=e.get("EXT_texture_filter_anisotropic");i.texParameterf(z,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,o.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Ct(z,A){let ie=!1;z.__webglInit===void 0&&(z.__webglInit=!0,A.addEventListener("dispose",V));const te=A.source;let ge=x.get(te);ge===void 0&&(ge={},x.set(te,ge));const Fe=be(A);if(Fe!==z.__cacheKey){ge[Fe]===void 0&&(ge[Fe]={texture:i.createTexture(),usedTimes:0},u.memory.textures++,ie=!0),ge[Fe].usedTimes++;const Be=ge[z.__cacheKey];Be!==void 0&&(ge[z.__cacheKey].usedTimes--,Be.usedTimes===0&&k(A)),z.__cacheKey=Fe,z.__webglTexture=ge[Fe].texture}return ie}function Me(z,A,ie){return Math.floor(Math.floor(z/ie)/A)}function ye(z,A,ie,te){const Fe=z.updateRanges;if(Fe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,ie,te,A.data);else{Fe.sort((it,He)=>it.start-He.start);let Be=0;for(let it=1;it<Fe.length;it++){const He=Fe[Be],ze=Fe[it],at=He.start+He.count,de=Me(ze.start,A.width,4),Pe=Me(He.start,A.width,4);ze.start<=at+1&&de===Pe&&Me(ze.start+ze.count-1,A.width,4)===de?He.count=Math.max(He.count,ze.start+ze.count-He.start):(++Be,Fe[Be]=ze)}Fe.length=Be+1;const me=t.getParameter(i.UNPACK_ROW_LENGTH),we=t.getParameter(i.UNPACK_SKIP_PIXELS),ke=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,A.width);for(let it=0,He=Fe.length;it<He;it++){const ze=Fe[it],at=Math.floor(ze.start/4),de=Math.ceil(ze.count/4),Pe=at%A.width,W=Math.floor(at/A.width),_e=de,xe=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Pe),t.pixelStorei(i.UNPACK_SKIP_ROWS,W),t.texSubImage2D(i.TEXTURE_2D,0,Pe,W,_e,xe,ie,te,A.data)}z.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,me),t.pixelStorei(i.UNPACK_SKIP_PIXELS,we),t.pixelStorei(i.UNPACK_SKIP_ROWS,ke)}}function Ke(z,A,ie){let te=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(te=i.TEXTURE_3D);const ge=Ct(z,A),Fe=A.source;t.bindTexture(te,z.__webglTexture,i.TEXTURE0+ie);const Be=n.get(Fe);if(Fe.version!==Be.__version||ge===!0){if(t.activeTexture(i.TEXTURE0+ie),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const xe=Gt.getPrimaries(Gt.workingColorSpace),Le=A.colorSpace===Gs?null:Gt.getPrimaries(A.colorSpace),Ie=A.colorSpace===Gs||xe===Le?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie)}t.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment);let we=w(A.image,!1,o.maxTextureSize);we=Wt(A,we);const ke=c.convert(A.format,A.colorSpace),it=c.convert(A.type);let He=P(A.internalFormat,ke,it,A.normalized,A.colorSpace,A.isVideoTexture);oe(te,A);let ze;const at=A.mipmaps,de=A.isVideoTexture!==!0,Pe=Be.__version===void 0||ge===!0,W=Fe.dataReady,_e=D(A,we);if(A.isDepthTexture)He=F(A.format===Ho,A.type),Pe&&(de?t.texStorage2D(i.TEXTURE_2D,1,He,we.width,we.height):t.texImage2D(i.TEXTURE_2D,0,He,we.width,we.height,0,ke,it,null));else if(A.isDataTexture)if(at.length>0){de&&Pe&&t.texStorage2D(i.TEXTURE_2D,_e,He,at[0].width,at[0].height);for(let xe=0,Le=at.length;xe<Le;xe++)ze=at[xe],de?W&&t.texSubImage2D(i.TEXTURE_2D,xe,0,0,ze.width,ze.height,ke,it,ze.data):t.texImage2D(i.TEXTURE_2D,xe,He,ze.width,ze.height,0,ke,it,ze.data);A.generateMipmaps=!1}else de?(Pe&&t.texStorage2D(i.TEXTURE_2D,_e,He,we.width,we.height),W&&ye(A,we,ke,it)):t.texImage2D(i.TEXTURE_2D,0,He,we.width,we.height,0,ke,it,we.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){de&&Pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,He,at[0].width,at[0].height,we.depth);for(let xe=0,Le=at.length;xe<Le;xe++)if(ze=at[xe],A.format!==$r)if(ke!==null)if(de){if(W)if(A.layerUpdates.size>0){const Ie=Dp(ze.width,ze.height,A.format,A.type);for(const pe of A.layerUpdates){const Ge=ze.data.subarray(pe*Ie/ze.data.BYTES_PER_ELEMENT,(pe+1)*Ie/ze.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xe,0,0,pe,ze.width,ze.height,1,ke,Ge)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xe,0,0,0,ze.width,ze.height,we.depth,ke,ze.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,xe,He,ze.width,ze.height,we.depth,0,ze.data,0,0);else gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else de?W&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,xe,0,0,0,ze.width,ze.height,we.depth,ke,it,ze.data):t.texImage3D(i.TEXTURE_2D_ARRAY,xe,He,ze.width,ze.height,we.depth,0,ke,it,ze.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{de&&Pe&&t.texStorage2D(i.TEXTURE_2D,_e,He,at[0].width,at[0].height);for(let xe=0,Le=at.length;xe<Le;xe++)ze=at[xe],A.format!==$r?ke!==null?de?W&&t.compressedTexSubImage2D(i.TEXTURE_2D,xe,0,0,ze.width,ze.height,ke,ze.data):t.compressedTexImage2D(i.TEXTURE_2D,xe,He,ze.width,ze.height,0,ze.data):gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?W&&t.texSubImage2D(i.TEXTURE_2D,xe,0,0,ze.width,ze.height,ke,it,ze.data):t.texImage2D(i.TEXTURE_2D,xe,He,ze.width,ze.height,0,ke,it,ze.data)}else if(A.isDataArrayTexture)if(de){if(Pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,He,we.width,we.height,we.depth),W)if(A.layerUpdates.size>0){const xe=Dp(we.width,we.height,A.format,A.type);for(const Le of A.layerUpdates){const Ie=we.data.subarray(Le*xe/we.data.BYTES_PER_ELEMENT,(Le+1)*xe/we.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Le,we.width,we.height,1,ke,it,Ie)}A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,ke,it,we.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,He,we.width,we.height,we.depth,0,ke,it,we.data);else if(A.isData3DTexture)de?(Pe&&t.texStorage3D(i.TEXTURE_3D,_e,He,we.width,we.height,we.depth),W&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,ke,it,we.data)):t.texImage3D(i.TEXTURE_3D,0,He,we.width,we.height,we.depth,0,ke,it,we.data);else if(A.isFramebufferTexture){if(Pe)if(de)t.texStorage2D(i.TEXTURE_2D,_e,He,we.width,we.height);else{let xe=we.width,Le=we.height;for(let Ie=0;Ie<_e;Ie++)t.texImage2D(i.TEXTURE_2D,Ie,He,xe,Le,0,ke,it,null),xe>>=1,Le>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in i){const xe=i.canvas;if(xe.hasAttribute("layoutsubtree")||xe.setAttribute("layoutsubtree","true"),we.parentNode!==xe){xe.appendChild(we),T.add(A),xe.onpaint=Le=>{const Ie=Le.changedElements;for(const pe of T)Ie.includes(pe.image)&&(pe.needsUpdate=!0)},xe.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,we);else{const Ie=i.RGBA,pe=i.RGBA,Ge=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ie,pe,Ge,we)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(at.length>0){if(de&&Pe){const xe=ht(at[0]);t.texStorage2D(i.TEXTURE_2D,_e,He,xe.width,xe.height)}for(let xe=0,Le=at.length;xe<Le;xe++)ze=at[xe],de?W&&t.texSubImage2D(i.TEXTURE_2D,xe,0,0,ke,it,ze):t.texImage2D(i.TEXTURE_2D,xe,He,ke,it,ze);A.generateMipmaps=!1}else if(de){if(Pe){const xe=ht(we);t.texStorage2D(i.TEXTURE_2D,_e,He,xe.width,xe.height)}W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ke,it,we)}else t.texImage2D(i.TEXTURE_2D,0,He,ke,it,we);y(A)&&O(te),Be.__version=Fe.version,A.onUpdate&&A.onUpdate(A)}z.__version=A.version}function ut(z,A,ie){if(A.image.length!==6)return;const te=Ct(z,A),ge=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+ie);const Fe=n.get(ge);if(ge.version!==Fe.__version||te===!0){t.activeTexture(i.TEXTURE0+ie);const Be=Gt.getPrimaries(Gt.workingColorSpace),me=A.colorSpace===Gs?null:Gt.getPrimaries(A.colorSpace),we=A.colorSpace===Gs||Be===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const ke=A.isCompressedTexture||A.image[0].isCompressedTexture,it=A.image[0]&&A.image[0].isDataTexture,He=[];for(let pe=0;pe<6;pe++)!ke&&!it?He[pe]=w(A.image[pe],!0,o.maxCubemapSize):He[pe]=it?A.image[pe].image:A.image[pe],He[pe]=Wt(A,He[pe]);const ze=He[0],at=c.convert(A.format,A.colorSpace),de=c.convert(A.type),Pe=P(A.internalFormat,at,de,A.normalized,A.colorSpace),W=A.isVideoTexture!==!0,_e=Fe.__version===void 0||te===!0,xe=ge.dataReady;let Le=D(A,ze);oe(i.TEXTURE_CUBE_MAP,A);let Ie;if(ke){W&&_e&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,Pe,ze.width,ze.height);for(let pe=0;pe<6;pe++){Ie=He[pe].mipmaps;for(let Ge=0;Ge<Ie.length;Ge++){const Oe=Ie[Ge];A.format!==$r?at!==null?W?xe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge,0,0,Oe.width,Oe.height,at,Oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge,Pe,Oe.width,Oe.height,0,Oe.data):gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge,0,0,Oe.width,Oe.height,at,de,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge,Pe,Oe.width,Oe.height,0,at,de,Oe.data)}}}else{if(Ie=A.mipmaps,W&&_e){Ie.length>0&&Le++;const pe=ht(He[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,Pe,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(it){W?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,He[pe].width,He[pe].height,at,de,He[pe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Pe,He[pe].width,He[pe].height,0,at,de,He[pe].data);for(let Ge=0;Ge<Ie.length;Ge++){const yt=Ie[Ge].image[pe].image;W?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge+1,0,0,yt.width,yt.height,at,de,yt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge+1,Pe,yt.width,yt.height,0,at,de,yt.data)}}else{W?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,at,de,He[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Pe,at,de,He[pe]);for(let Ge=0;Ge<Ie.length;Ge++){const Oe=Ie[Ge];W?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge+1,0,0,at,de,Oe.image[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge+1,Pe,at,de,Oe.image[pe])}}}y(A)&&O(i.TEXTURE_CUBE_MAP),Fe.__version=ge.version,A.onUpdate&&A.onUpdate(A)}z.__version=A.version}function Ye(z,A,ie,te,ge,Fe){const Be=c.convert(ie.format,ie.colorSpace),me=c.convert(ie.type),we=P(ie.internalFormat,Be,me,ie.normalized,ie.colorSpace),ke=n.get(A),it=n.get(ie);if(it.__renderTarget=A,!ke.__hasExternalTextures){const He=Math.max(1,A.width>>Fe),ze=Math.max(1,A.height>>Fe);ge===i.TEXTURE_3D||ge===i.TEXTURE_2D_ARRAY?t.texImage3D(ge,Fe,we,He,ze,A.depth,0,Be,me,null):t.texImage2D(ge,Fe,we,He,ze,0,Be,me,null)}t.bindFramebuffer(i.FRAMEBUFFER,z),Kt(A)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,ge,it.__webglTexture,0,Rt(A)):(ge===i.TEXTURE_2D||ge>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,ge,it.__webglTexture,Fe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(z,A,ie){if(i.bindRenderbuffer(i.RENDERBUFFER,z),A.depthBuffer){const te=A.depthTexture,ge=te&&te.isDepthTexture?te.type:null,Fe=F(A.stencilBuffer,ge),Be=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Kt(A)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Rt(A),Fe,A.width,A.height):ie?i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt(A),Fe,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Fe,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Be,i.RENDERBUFFER,z)}else{const te=A.textures;for(let ge=0;ge<te.length;ge++){const Fe=te[ge],Be=c.convert(Fe.format,Fe.colorSpace),me=c.convert(Fe.type),we=P(Fe.internalFormat,Be,me,Fe.normalized,Fe.colorSpace);Kt(A)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Rt(A),we,A.width,A.height):ie?i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt(A),we,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,we,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function vt(z,A,ie){const te=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,z),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ge=n.get(A.depthTexture);if(ge.__renderTarget=A,(!ge.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),te){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,A.depthTexture.addEventListener("dispose",V)),ge.__webglTexture===void 0){ge.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ge.__webglTexture),oe(i.TEXTURE_CUBE_MAP,A.depthTexture);const ke=c.convert(A.depthTexture.format),it=c.convert(A.depthTexture.type);let He;A.depthTexture.format===ps?He=i.DEPTH_COMPONENT24:A.depthTexture.format===Ho&&(He=i.DEPTH24_STENCIL8);for(let ze=0;ze<6;ze++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0,He,A.width,A.height,0,ke,it,null)}}else Re(A.depthTexture,0);const Fe=ge.__webglTexture,Be=Rt(A),me=te?i.TEXTURE_CUBE_MAP_POSITIVE_X+ie:i.TEXTURE_2D,we=A.depthTexture.format===Ho?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(A.depthTexture.format===ps)Kt(A)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,we,me,Fe,0,Be):i.framebufferTexture2D(i.FRAMEBUFFER,we,me,Fe,0);else if(A.depthTexture.format===Ho)Kt(A)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,we,me,Fe,0,Be):i.framebufferTexture2D(i.FRAMEBUFFER,we,me,Fe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function _t(z){const A=n.get(z),ie=z.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==z.depthTexture){const te=z.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),te){const ge=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,te.removeEventListener("dispose",ge)};te.addEventListener("dispose",ge),A.__depthDisposeCallback=ge}A.__boundDepthTexture=te}if(z.depthTexture&&!A.__autoAllocateDepthBuffer)if(ie)for(let te=0;te<6;te++)vt(A.__webglFramebuffer[te],z,te);else{const te=z.texture.mipmaps;te&&te.length>0?vt(A.__webglFramebuffer[0],z,0):vt(A.__webglFramebuffer,z,0)}else if(ie){A.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[te]),A.__webglDepthbuffer[te]===void 0)A.__webglDepthbuffer[te]=i.createRenderbuffer(),mt(A.__webglDepthbuffer[te],z,!1);else{const ge=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Fe=A.__webglDepthbuffer[te];i.bindRenderbuffer(i.RENDERBUFFER,Fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,Fe)}}else{const te=z.texture.mipmaps;if(te&&te.length>0?t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),mt(A.__webglDepthbuffer,z,!1);else{const ge=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Fe=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,Fe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function At(z,A,ie){const te=n.get(z);A!==void 0&&Ye(te.__webglFramebuffer,z,z.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ie!==void 0&&_t(z)}function Ze(z){const A=z.texture,ie=n.get(z),te=n.get(A);z.addEventListener("dispose",S);const ge=z.textures,Fe=z.isWebGLCubeRenderTarget===!0,Be=ge.length>1;if(Be||(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=A.version,u.memory.textures++),Fe){ie.__webglFramebuffer=[];for(let me=0;me<6;me++)if(A.mipmaps&&A.mipmaps.length>0){ie.__webglFramebuffer[me]=[];for(let we=0;we<A.mipmaps.length;we++)ie.__webglFramebuffer[me][we]=i.createFramebuffer()}else ie.__webglFramebuffer[me]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){ie.__webglFramebuffer=[];for(let me=0;me<A.mipmaps.length;me++)ie.__webglFramebuffer[me]=i.createFramebuffer()}else ie.__webglFramebuffer=i.createFramebuffer();if(Be)for(let me=0,we=ge.length;me<we;me++){const ke=n.get(ge[me]);ke.__webglTexture===void 0&&(ke.__webglTexture=i.createTexture(),u.memory.textures++)}if(z.samples>0&&Kt(z)===!1){ie.__webglMultisampledFramebuffer=i.createFramebuffer(),ie.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let me=0;me<ge.length;me++){const we=ge[me];ie.__webglColorRenderbuffer[me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ie.__webglColorRenderbuffer[me]);const ke=c.convert(we.format,we.colorSpace),it=c.convert(we.type),He=P(we.internalFormat,ke,it,we.normalized,we.colorSpace,z.isXRRenderTarget===!0),ze=Rt(z);i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,He,z.width,z.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,ie.__webglColorRenderbuffer[me])}i.bindRenderbuffer(i.RENDERBUFFER,null),z.depthBuffer&&(ie.__webglDepthRenderbuffer=i.createRenderbuffer(),mt(ie.__webglDepthRenderbuffer,z,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Fe){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),oe(i.TEXTURE_CUBE_MAP,A);for(let me=0;me<6;me++)if(A.mipmaps&&A.mipmaps.length>0)for(let we=0;we<A.mipmaps.length;we++)Ye(ie.__webglFramebuffer[me][we],z,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,we);else Ye(ie.__webglFramebuffer[me],z,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);y(A)&&O(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Be){for(let me=0,we=ge.length;me<we;me++){const ke=ge[me],it=n.get(ke);let He=i.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(He=z.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(He,it.__webglTexture),oe(He,ke),Ye(ie.__webglFramebuffer,z,ke,i.COLOR_ATTACHMENT0+me,He,0),y(ke)&&O(He)}t.unbindTexture()}else{let me=i.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(me=z.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,te.__webglTexture),oe(me,A),A.mipmaps&&A.mipmaps.length>0)for(let we=0;we<A.mipmaps.length;we++)Ye(ie.__webglFramebuffer[we],z,A,i.COLOR_ATTACHMENT0,me,we);else Ye(ie.__webglFramebuffer,z,A,i.COLOR_ATTACHMENT0,me,0);y(A)&&O(me),t.unbindTexture()}z.depthBuffer&&_t(z)}function xt(z){const A=z.textures;for(let ie=0,te=A.length;ie<te;ie++){const ge=A[ie];if(y(ge)){const Fe=B(z),Be=n.get(ge).__webglTexture;t.bindTexture(Fe,Be),O(Fe),t.unbindTexture()}}}const Jt=[],Ft=[];function jt(z){if(z.samples>0){if(Kt(z)===!1){const A=z.textures,ie=z.width,te=z.height;let ge=i.COLOR_BUFFER_BIT;const Fe=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Be=n.get(z),me=A.length>1;if(me)for(let ke=0;ke<A.length;ke++)t.bindFramebuffer(i.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer);const we=z.texture.mipmaps;we&&we.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Be.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let ke=0;ke<A.length;ke++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(ge|=i.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(ge|=i.STENCIL_BUFFER_BIT)),me){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Be.__webglColorRenderbuffer[ke]);const it=n.get(A[ke]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,it,0)}i.blitFramebuffer(0,0,ie,te,0,0,ie,te,ge,i.NEAREST),p===!0&&(Jt.length=0,Ft.length=0,Jt.push(i.COLOR_ATTACHMENT0+ke),z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&(Jt.push(Fe),Ft.push(Fe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ft)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Jt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),me)for(let ke=0;ke<A.length;ke++){t.bindFramebuffer(i.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.RENDERBUFFER,Be.__webglColorRenderbuffer[ke]);const it=n.get(A[ke]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.TEXTURE_2D,it,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&p){const A=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function Rt(z){return Math.min(o.maxSamples,z.samples)}function Kt(z){const A=n.get(z);return z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Z(z){const A=u.render.frame;M.get(z)!==A&&(M.set(z,A),z.update())}function Wt(z,A){const ie=z.colorSpace,te=z.format,ge=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||ie!==yf&&ie!==Gs&&(Gt.getTransfer(ie)===fn?(te!==$r||ge!==cr)&&gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Zt("WebGLTextures: Unsupported texture color space:",ie)),A}function ht(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(g.width=z.naturalWidth||z.width,g.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(g.width=z.displayWidth,g.height=z.displayHeight):(g.width=z.width,g.height=z.height),g}this.allocateTextureUnit=Se,this.resetTextureUnits=ae,this.getTextureUnits=Y,this.setTextureUnits=ue,this.setTexture2D=Re,this.setTexture2DArray=ne,this.setTexture3D=G,this.setTextureCube=Ee,this.rebindTextures=At,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=Ye,this.useMultisampledRTT=Kt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function ky(i,e){function t(n,o=Gs){let c;const u=Gt.getTransfer(o);if(n===cr)return i.UNSIGNED_BYTE;if(n===bd)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ed)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Mg)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===yg)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===_g)return i.BYTE;if(n===xg)return i.SHORT;if(n===$c)return i.UNSIGNED_SHORT;if(n===Sd)return i.INT;if(n===Ra)return i.UNSIGNED_INT;if(n===Ta)return i.FLOAT;if(n===Ca)return i.HALF_FLOAT;if(n===Sg)return i.ALPHA;if(n===bg)return i.RGB;if(n===$r)return i.RGBA;if(n===ps)return i.DEPTH_COMPONENT;if(n===Ho)return i.DEPTH_STENCIL;if(n===Eg)return i.RED;if(n===Td)return i.RED_INTEGER;if(n===Xo)return i.RG;if(n===wd)return i.RG_INTEGER;if(n===Ad)return i.RGBA_INTEGER;if(n===df||n===pf||n===gf||n===mf)if(u===fn)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(n===df)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===gf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===mf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(n===df)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pf)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===gf)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===mf)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Hh||n===Gh||n===Vh||n===Wh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(n===Hh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Gh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xh||n===Yh||n===Zh||n===Jh||n===Kh||n===_f||n===Qh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(n===Xh||n===Yh)return u===fn?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(n===Zh)return u===fn?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(n===Jh)return c.COMPRESSED_R11_EAC;if(n===Kh)return c.COMPRESSED_SIGNED_R11_EAC;if(n===_f)return c.COMPRESSED_RG11_EAC;if(n===Qh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===qh||n===jh||n===$h||n===ed||n===td||n===nd||n===id||n===rd||n===ad||n===sd||n===od||n===ld||n===cd||n===ud)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(n===qh)return u===fn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jh)return u===fn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$h)return u===fn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ed)return u===fn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===td)return u===fn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nd)return u===fn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===id)return u===fn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===rd)return u===fn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ad)return u===fn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===sd)return u===fn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===od)return u===fn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ld)return u===fn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===cd)return u===fn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ud)return u===fn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fd||n===hd||n===dd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(n===fd)return u===fn?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===hd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===dd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===pd||n===gd||n===xf||n===md)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(n===pd)return c.COMPRESSED_RED_RGTC1_EXT;if(n===gd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xf)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===md)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===eu?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Hy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gy=`
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

}`;class Vy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ig(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Pa({vertexShader:Hy,fragmentShader:Gy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new di(new ic(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Wy extends Yo{constructor(e,t){super();const n=this;let o=null,c=1,u=null,d="local-floor",p=1,g=null,M=null,T=null,_=null,x=null,R=null;const U=typeof XRWebGLBinding<"u",w=new Vy,y={},O=t.getContextAttributes();let B=null,P=null;const F=[],D=[],V=new ct;let S=null,C=null;const k=new lr;k.viewport=new Un;const H=new lr;H.viewport=new Un;const q=[k,H],ae=new q0;let Y=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Me){let ye=F[Me];return ye===void 0&&(ye=new oh,F[Me]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(Me){let ye=F[Me];return ye===void 0&&(ye=new oh,F[Me]=ye),ye.getGripSpace()},this.getHand=function(Me){let ye=F[Me];return ye===void 0&&(ye=new oh,F[Me]=ye),ye.getHandSpace()};function Se(Me){const ye=D.indexOf(Me.inputSource);if(ye===-1)return;const Ke=F[ye];Ke!==void 0&&(Ke.update(Me.inputSource,Me.frame,g||u),Ke.dispatchEvent({type:Me.type,data:Me.inputSource}))}function be(){o.removeEventListener("select",Se),o.removeEventListener("selectstart",Se),o.removeEventListener("selectend",Se),o.removeEventListener("squeeze",Se),o.removeEventListener("squeezestart",Se),o.removeEventListener("squeezeend",Se),o.removeEventListener("end",be),o.removeEventListener("inputsourceschange",Re);for(let Me=0;Me<F.length;Me++){const ye=D[Me];ye!==null&&(D[Me]=null,F[Me].disconnect(ye))}Y=null,ue=null,w.reset();for(const Me in y)delete y[Me];if(e.setRenderTarget(B),x=null,_=null,T=null,o=null,P=null,Ct.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(V.width,V.height,!1),C!==null){const Me=C.camera;Me.fov=C.fov,Me.zoom=C.zoom,Me.updateProjectionMatrix(),C=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Me){c=Me,n.isPresenting===!0&&gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Me){d=Me,n.isPresenting===!0&&gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||u},this.setReferenceSpace=function(Me){g=Me},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return T===null&&U&&(T=new XRWebGLBinding(o,t)),T},this.getFrame=function(){return R},this.getSession=function(){return o},this.setSession=async function(Me){if(o=Me,o!==null){if(B=e.getRenderTarget(),o.addEventListener("select",Se),o.addEventListener("selectstart",Se),o.addEventListener("selectend",Se),o.addEventListener("squeeze",Se),o.addEventListener("squeezestart",Se),o.addEventListener("squeezeend",Se),o.addEventListener("end",be),o.addEventListener("inputsourceschange",Re),O.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(V),U&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ke=null,ut=null,Ye=null;O.depth&&(Ye=O.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ke=O.stencil?Ho:ps,ut=O.stencil?eu:Ra);const mt={colorFormat:t.RGBA8,depthFormat:Ye,scaleFactor:c};T=this.getBinding(),_=T.createProjectionLayer(mt),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),P=new ea(_.textureWidth,_.textureHeight,{format:$r,type:cr,depthTexture:new iu(_.textureWidth,_.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,Ke),stencilBuffer:O.stencil,colorSpace:e.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}else{const Ke={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(o,t,Ke),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),P=new ea(x.framebufferWidth,x.framebufferHeight,{format:$r,type:cr,colorSpace:e.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),g=null,u=await o.requestReferenceSpace(d),Ct.setContext(o),Ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function Re(Me){for(let ye=0;ye<Me.removed.length;ye++){const Ke=Me.removed[ye],ut=D.indexOf(Ke);ut>=0&&(D[ut]=null,F[ut].disconnect(Ke))}for(let ye=0;ye<Me.added.length;ye++){const Ke=Me.added[ye];let ut=D.indexOf(Ke);if(ut===-1){for(let mt=0;mt<F.length;mt++)if(mt>=D.length){D.push(Ke),ut=mt;break}else if(D[mt]===null){D[mt]=Ke,ut=mt;break}if(ut===-1)break}const Ye=F[ut];Ye&&Ye.connect(Ke)}}const ne=new K,G=new K;function Ee(Me,ye,Ke){ne.setFromMatrixPosition(ye.matrixWorld),G.setFromMatrixPosition(Ke.matrixWorld);const ut=ne.distanceTo(G),Ye=ye.projectionMatrix.elements,mt=Ke.projectionMatrix.elements,vt=Ye[14]/(Ye[10]-1),_t=Ye[14]/(Ye[10]+1),At=(Ye[9]+1)/Ye[5],Ze=(Ye[9]-1)/Ye[5],xt=(Ye[8]-1)/Ye[0],Jt=(mt[8]+1)/mt[0],Ft=vt*xt,jt=vt*Jt,Rt=ut/(-xt+Jt),Kt=Rt*-xt;if(ye.matrixWorld.decompose(Me.position,Me.quaternion,Me.scale),Me.translateX(Kt),Me.translateZ(Rt),Me.matrixWorld.compose(Me.position,Me.quaternion,Me.scale),Me.matrixWorldInverse.copy(Me.matrixWorld).invert(),Ye[10]===-1)Me.projectionMatrix.copy(ye.projectionMatrix),Me.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{const Z=vt+Rt,Wt=_t+Rt,ht=Ft-Kt,z=jt+(ut-Kt),A=At*_t/Wt*Z,ie=Ze*_t/Wt*Z;Me.projectionMatrix.makePerspective(ht,z,A,ie,Z,Wt),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert()}}function lt(Me,ye){ye===null?Me.matrixWorld.copy(Me.matrix):Me.matrixWorld.multiplyMatrices(ye.matrixWorld,Me.matrix),Me.matrixWorldInverse.copy(Me.matrixWorld).invert()}this.updateCamera=function(Me){if(o===null)return;let ye=Me.near,Ke=Me.far;w.texture!==null&&(w.depthNear>0&&(ye=w.depthNear),w.depthFar>0&&(Ke=w.depthFar)),ae.near=H.near=k.near=ye,ae.far=H.far=k.far=Ke,(Y!==ae.near||ue!==ae.far)&&(o.updateRenderState({depthNear:ae.near,depthFar:ae.far}),Y=ae.near,ue=ae.far),ae.layers.mask=Me.layers.mask|6,k.layers.mask=ae.layers.mask&-5,H.layers.mask=ae.layers.mask&-3;const ut=Me.parent,Ye=ae.cameras;lt(ae,ut);for(let mt=0;mt<Ye.length;mt++)lt(Ye[mt],ut);Ye.length===2?Ee(ae,k,H):ae.projectionMatrix.copy(k.projectionMatrix),C===null&&Me.isPerspectiveCamera&&(C={camera:Me,fov:Me.fov,zoom:Me.zoom}),rt(Me,ae,ut)};function rt(Me,ye,Ke){Ke===null?Me.matrix.copy(ye.matrixWorld):(Me.matrix.copy(Ke.matrixWorld),Me.matrix.invert(),Me.matrix.multiply(ye.matrixWorld)),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.updateMatrixWorld(!0),Me.projectionMatrix.copy(ye.projectionMatrix),Me.projectionMatrixInverse.copy(ye.projectionMatrixInverse),Me.isPerspectiveCamera&&(Me.fov=nu*2*Math.atan(1/Me.projectionMatrix.elements[5]),Me.zoom=1)}this.getCamera=function(){return ae},this.getFoveation=function(){if(!(_===null&&x===null))return p},this.setFoveation=function(Me){p=Me,_!==null&&(_.fixedFoveation=Me),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=Me)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(ae)},this.getCameraTexture=function(Me){return y[Me]};let Ae=null;function oe(Me,ye){if(M=ye.getViewerPose(g||u),R=ye,M!==null){const Ke=M.views;x!==null&&(e.setRenderTargetFramebuffer(P,x.framebuffer),e.setRenderTarget(P));let ut=!1;Ke.length!==ae.cameras.length&&(ae.cameras.length=0,ut=!0);for(let _t=0;_t<Ke.length;_t++){const At=Ke[_t];let Ze=null;if(x!==null)Ze=x.getViewport(At);else{const Jt=T.getViewSubImage(_,At);Ze=Jt.viewport,_t===0&&(e.setRenderTargetTextures(P,Jt.colorTexture,Jt.depthStencilTexture),e.setRenderTarget(P))}let xt=q[_t];xt===void 0&&(xt=new lr,xt.layers.enable(_t),xt.viewport=new Un,q[_t]=xt),xt.matrix.fromArray(At.transform.matrix),xt.matrix.decompose(xt.position,xt.quaternion,xt.scale),xt.projectionMatrix.fromArray(At.projectionMatrix),xt.projectionMatrixInverse.copy(xt.projectionMatrix).invert(),xt.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),_t===0&&(ae.matrix.copy(xt.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale)),ut===!0&&ae.cameras.push(xt)}const Ye=o.enabledFeatures;if(Ye&&Ye.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&U){T=n.getBinding();const _t=T.getDepthInformation(Ke[0]);_t&&_t.isValid&&_t.texture&&w.init(_t,o.renderState)}if(Ye&&Ye.includes("camera-access")&&U){e.state.unbindTexture(),T=n.getBinding();for(let _t=0;_t<Ke.length;_t++){const At=Ke[_t].camera;if(At){let Ze=y[At];Ze||(Ze=new Ig,y[At]=Ze);const xt=T.getCameraImage(At);Ze.sourceTexture=xt}}}}for(let Ke=0;Ke<F.length;Ke++){const ut=D[Ke],Ye=F[Ke];ut!==null&&Ye!==void 0&&Ye.update(ut,ye,g||u)}Ae&&Ae(Me,ye),ye.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ye}),R=null}const Ct=new kg;Ct.setAnimationLoop(oe),this.setAnimationLoop=function(Me){Ae=Me},this.dispose=function(){}}}const Xy=new Rn,Zg=new Et;Zg.set(-1,0,0,0,1,0,0,0,1);function Yy(i,e){function t(w,y){w.matrixAutoUpdate===!0&&w.updateMatrix(),y.value.copy(w.matrix)}function n(w,y){y.color.getRGB(w.fogColor.value,Fg(i)),y.isFog?(w.fogNear.value=y.near,w.fogFar.value=y.far):y.isFogExp2&&(w.fogDensity.value=y.density)}function o(w,y,O,B,P){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?c(w,y):y.isMeshLambertMaterial?(c(w,y),y.envMap&&(w.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(w,y),T(w,y)):y.isMeshPhongMaterial?(c(w,y),M(w,y),y.envMap&&(w.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(w,y),_(w,y),y.isMeshPhysicalMaterial&&x(w,y,P)):y.isMeshMatcapMaterial?(c(w,y),R(w,y)):y.isMeshDepthMaterial?c(w,y):y.isMeshDistanceMaterial?(c(w,y),U(w,y)):y.isMeshNormalMaterial?c(w,y):y.isLineBasicMaterial?(u(w,y),y.isLineDashedMaterial&&d(w,y)):y.isPointsMaterial?p(w,y,O,B):y.isSpriteMaterial?g(w,y):y.isShadowMaterial?(w.color.value.copy(y.color),w.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(w,y){w.opacity.value=y.opacity,y.color&&w.diffuse.value.copy(y.color),y.emissive&&w.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(w.map.value=y.map,t(y.map,w.mapTransform)),y.alphaMap&&(w.alphaMap.value=y.alphaMap,t(y.alphaMap,w.alphaMapTransform)),y.bumpMap&&(w.bumpMap.value=y.bumpMap,t(y.bumpMap,w.bumpMapTransform),w.bumpScale.value=y.bumpScale,y.side===ji&&(w.bumpScale.value*=-1)),y.normalMap&&(w.normalMap.value=y.normalMap,t(y.normalMap,w.normalMapTransform),w.normalScale.value.copy(y.normalScale),y.side===ji&&w.normalScale.value.negate()),y.displacementMap&&(w.displacementMap.value=y.displacementMap,t(y.displacementMap,w.displacementMapTransform),w.displacementScale.value=y.displacementScale,w.displacementBias.value=y.displacementBias),y.emissiveMap&&(w.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,w.emissiveMapTransform)),y.specularMap&&(w.specularMap.value=y.specularMap,t(y.specularMap,w.specularMapTransform)),y.alphaTest>0&&(w.alphaTest.value=y.alphaTest);const O=e.get(y),B=O.envMap,P=O.envMapRotation;B&&(w.envMap.value=B,w.envMapRotation.value.setFromMatrix4(Xy.makeRotationFromEuler(P)).transpose(),B.isCubeTexture&&B.isRenderTargetTexture===!1&&w.envMapRotation.value.premultiply(Zg),w.reflectivity.value=y.reflectivity,w.ior.value=y.ior,w.refractionRatio.value=y.refractionRatio),y.lightMap&&(w.lightMap.value=y.lightMap,w.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,w.lightMapTransform)),y.aoMap&&(w.aoMap.value=y.aoMap,w.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,w.aoMapTransform))}function u(w,y){w.diffuse.value.copy(y.color),w.opacity.value=y.opacity,y.map&&(w.map.value=y.map,t(y.map,w.mapTransform))}function d(w,y){w.dashSize.value=y.dashSize,w.totalSize.value=y.dashSize+y.gapSize,w.scale.value=y.scale}function p(w,y,O,B){w.diffuse.value.copy(y.color),w.opacity.value=y.opacity,w.size.value=y.size*O,w.scale.value=B*.5,y.map&&(w.map.value=y.map,t(y.map,w.uvTransform)),y.alphaMap&&(w.alphaMap.value=y.alphaMap,t(y.alphaMap,w.alphaMapTransform)),y.alphaTest>0&&(w.alphaTest.value=y.alphaTest)}function g(w,y){w.diffuse.value.copy(y.color),w.opacity.value=y.opacity,w.rotation.value=y.rotation,y.map&&(w.map.value=y.map,t(y.map,w.mapTransform)),y.alphaMap&&(w.alphaMap.value=y.alphaMap,t(y.alphaMap,w.alphaMapTransform)),y.alphaTest>0&&(w.alphaTest.value=y.alphaTest)}function M(w,y){w.specular.value.copy(y.specular),w.shininess.value=Math.max(y.shininess,1e-4)}function T(w,y){y.gradientMap&&(w.gradientMap.value=y.gradientMap)}function _(w,y){w.metalness.value=y.metalness,y.metalnessMap&&(w.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,w.metalnessMapTransform)),w.roughness.value=y.roughness,y.roughnessMap&&(w.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,w.roughnessMapTransform)),y.envMap&&(w.envMapIntensity.value=y.envMapIntensity)}function x(w,y,O){w.ior.value=y.ior,y.sheen>0&&(w.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),w.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(w.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,w.sheenColorMapTransform)),y.sheenRoughnessMap&&(w.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,w.sheenRoughnessMapTransform))),y.clearcoat>0&&(w.clearcoat.value=y.clearcoat,w.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(w.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,w.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(w.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,w.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(w.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,w.clearcoatNormalMapTransform),w.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ji&&w.clearcoatNormalScale.value.negate())),y.dispersion>0&&(w.dispersion.value=y.dispersion),y.retroreflectivity>0&&(w.retroreflectivity.value=y.retroreflectivity),y.iridescence>0&&(w.iridescence.value=y.iridescence,w.iridescenceIOR.value=y.iridescenceIOR,w.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],w.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(w.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,w.iridescenceMapTransform)),y.iridescenceThicknessMap&&(w.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,w.iridescenceThicknessMapTransform))),y.transmission>0&&(w.transmission.value=y.transmission,w.transmissionSamplerMap.value=O.texture,w.transmissionSamplerSize.value.set(O.width,O.height),y.transmissionMap&&(w.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,w.transmissionMapTransform)),w.thickness.value=y.thickness,y.thicknessMap&&(w.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,w.thicknessMapTransform)),w.attenuationDistance.value=y.attenuationDistance,w.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(w.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(w.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,w.anisotropyMapTransform))),w.specularIntensity.value=y.specularIntensity,w.specularColor.value.copy(y.specularColor),y.specularColorMap&&(w.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,w.specularColorMapTransform)),y.specularIntensityMap&&(w.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,w.specularIntensityMapTransform))}function R(w,y){y.matcap&&(w.matcap.value=y.matcap)}function U(w,y){const O=e.get(y).light;w.referencePosition.value.setFromMatrixPosition(O.matrixWorld),w.nearDistance.value=O.shadow.camera.near,w.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:o}}function Zy(i,e,t,n){let o={},c={},u=[];const d=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function p(P,F){const D=F.program;n.uniformBlockBinding(P,D)}function g(P,F){let D=o[P.id];D===void 0&&(w(P),D=M(P),o[P.id]=D,P.addEventListener("dispose",O));const V=F.program;n.updateUBOMapping(P,V);const S=e.render.frame;c[P.id]!==S&&(_(P),c[P.id]=S)}function M(P){const F=T();P.__bindingPointIndex=F;const D=i.createBuffer(),V=P.__size,S=P.usage;return i.bindBuffer(i.UNIFORM_BUFFER,D),i.bufferData(i.UNIFORM_BUFFER,V,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,F,D),D}function T(){for(let P=0;P<d;P++)if(u.indexOf(P)===-1)return u.push(P),P;return Zt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(P){const F=o[P.id],D=P.uniforms,V=P.__cache;i.bindBuffer(i.UNIFORM_BUFFER,F);for(let S=0,C=D.length;S<C;S++){const k=D[S];if(Array.isArray(k))for(let H=0,q=k.length;H<q;H++)x(k[H],S,H,V);else x(k,S,0,V)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function x(P,F,D,V){if(U(P,F,D,V)===!0){const S=P.__offset,C=P.value;if(Array.isArray(C)){let k=0;for(let H=0;H<C.length;H++){const q=C[H],ae=y(q);R(q,P.__data,k),typeof q!="number"&&typeof q!="boolean"&&!q.isMatrix3&&!ArrayBuffer.isView(q)&&(k+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}}else R(C,P.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,S,P.__data)}}function R(P,F,D){typeof P=="number"||typeof P=="boolean"?F[0]=P:P.isMatrix3?(F[0]=P.elements[0],F[1]=P.elements[1],F[2]=P.elements[2],F[3]=0,F[4]=P.elements[3],F[5]=P.elements[4],F[6]=P.elements[5],F[7]=0,F[8]=P.elements[6],F[9]=P.elements[7],F[10]=P.elements[8],F[11]=0):ArrayBuffer.isView(P)?F.set(new P.constructor(P.buffer,P.byteOffset,F.length)):P.toArray(F,D)}function U(P,F,D,V){const S=P.value,C=F+"_"+D;if(V[C]===void 0)return typeof S=="number"||typeof S=="boolean"?V[C]=S:ArrayBuffer.isView(S)?V[C]=S.slice():V[C]=S.clone(),!0;{const k=V[C];if(typeof S=="number"||typeof S=="boolean"){if(k!==S)return V[C]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(k.equals(S)===!1)return k.copy(S),!0}}return!1}function w(P){const F=P.uniforms;let D=0;const V=16;for(let C=0,k=F.length;C<k;C++){const H=Array.isArray(F[C])?F[C]:[F[C]];for(let q=0,ae=H.length;q<ae;q++){const Y=H[q],ue=Array.isArray(Y.value)?Y.value:[Y.value];for(let Se=0,be=ue.length;Se<be;Se++){const Re=ue[Se],ne=y(Re),G=D%V,Ee=G%ne.boundary,lt=G+Ee;D+=Ee,lt!==0&&V-lt<ne.storage&&(D+=V-lt),Y.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=D,D+=ne.storage}}}const S=D%V;return S>0&&(D+=V-S),P.__size=D,P.__cache={},this}function y(P){const F={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(F.boundary=4,F.storage=4):P.isVector2?(F.boundary=8,F.storage=8):P.isVector3||P.isColor?(F.boundary=16,F.storage=12):P.isVector4?(F.boundary=16,F.storage=16):P.isMatrix3?(F.boundary=48,F.storage=48):P.isMatrix4?(F.boundary=64,F.storage=64):P.isTexture?gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(P)?(F.boundary=16,F.storage=P.byteLength):gt("WebGLRenderer: Unsupported uniform value type.",P),F}function O(P){const F=P.target;F.removeEventListener("dispose",O);const D=u.indexOf(F.__bindingPointIndex);u.splice(D,1),i.deleteBuffer(o[F.id]),delete o[F.id],delete c[F.id]}function B(){for(const P in o)i.deleteBuffer(o[P]);u=[],o={},c={}}return{bind:p,update:g,dispose:B}}const Jy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ba=null;function Ky(){return ba===null&&(ba=new x0(Jy,16,16,Xo,Ca),ba.name="DFG_LUT",ba.minFilter=Ai,ba.magFilter=Ai,ba.wrapS=us,ba.wrapT=us,ba.generateMipmaps=!1,ba.needsUpdate=!0),ba}class Qy{constructor(e={}){const{canvas:t=Dm(),context:n=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:g=!1,powerPreference:M="default",failIfMajorPerformanceCaveat:T=!1,reversedDepthBuffer:_=!1,outputBufferType:x=cr}=e;this.isWebGLRenderer=!0;let R;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");R=n.getContextAttributes().alpha}else R=u;const U=x,w=new Set([Ad,wd,Td]),y=new Set([cr,Ra,$c,eu,bd,Ed]),O=new Uint32Array(4),B=new Int32Array(4),P=new K;let F=null,D=null;const V=[],S=[];let C=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Aa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let H=!1,q=null,ae=null,Y=null,ue=null;this._outputColorSpace=ki;let Se=0,be=0,Re=null,ne=-1,G=null;const Ee=new Un,lt=new Un;let rt=null;const Ae=new Ut(0);let oe=0,Ct=t.width,Me=t.height,ye=1,Ke=null,ut=null;const Ye=new Un(0,0,Ct,Me),mt=new Un(0,0,Ct,Me);let vt=!1;const _t=new Nd;let At=!1,Ze=!1;const xt=new Rn,Jt=new K,Ft=new Un,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Rt=!1;function Kt(){return Re===null?ye:1}let Z=n;function Wt(L,Q){return t.getContext(L,Q)}let ht,z,A,ie,te,ge,Fe,Be,me,we,ke,it,He,ze,at,de,Pe,W,_e,xe,Le,Ie,pe;try{const L={alpha:!0,depth:o,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:g,powerPreference:M,failIfMajorPerformanceCaveat:T};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Md}`),t.addEventListener("webglcontextlost",yt,!1),t.addEventListener("webglcontextrestored",Ot,!1),t.addEventListener("webglcontextcreationerror",$t,!1),Z===null){const Q="webgl2";if(Z=Wt(Q,L),Z===null)throw Wt(Q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ge()}catch(L){throw t.removeEventListener("webglcontextlost",yt,!1),t.removeEventListener("webglcontextrestored",Ot,!1),t.removeEventListener("webglcontextcreationerror",$t,!1),Zt("WebGLRenderer: "+L.message),L}function Ge(){ht=new Kx(Z),ht.init(),Le=new ky(Z,ht),z=new zx(Z,ht,e,Le),A=new By(Z,ht),z.reversedDepthBuffer&&_&&A.buffers.depth.setReversed(!0),ae=Z.createFramebuffer(),Y=Z.createFramebuffer(),ue=Z.createFramebuffer(),ie=new jx(Z),te=new Ey,ge=new zy(Z,ht,A,te,z,Le,ie),Fe=new Jx(k),Be=new ev(Z),Ie=new Ox(Z,Be),me=new Qx(Z,Be,ie,Ie),we=new eM(Z,me,Be,Ie,ie),W=new $x(Z,z,ge),at=new kx(te),ke=new by(k,Fe,ht,z,Ie,at),it=new Yy(k,te),He=new wy,ze=new Iy(ht),Pe=new Fx(k,Fe,A,we,R,p),de=new Oy(k,we,z),pe=new Zy(Z,ie,z,A),_e=new Bx(Z,ht,ie),xe=new qx(Z,ht,ie),ie.programs=ke.programs,k.capabilities=z,k.extensions=ht,k.properties=te,k.renderLists=He,k.shadowMap=de,k.state=A,k.info=ie}U!==cr&&(C=new nM(U,t.width,t.height,d,o,c));const Oe=new Wy(k,Z);this.xr=Oe,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const L=ht.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=ht.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(L){L!==void 0&&(ye=L,this.setSize(Ct,Me,!1))},this.getSize=function(L){return L.set(Ct,Me)},this.setSize=function(L,Q,ve=!0){if(Oe.isPresenting){gt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ct=L,Me=Q,t.width=Math.floor(L*ye),t.height=Math.floor(Q*ye),ve===!0&&(t.style.width=L+"px",t.style.height=Q+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,L,Q)},this.getDrawingBufferSize=function(L){return L.set(Ct*ye,Me*ye).floor()},this.setDrawingBufferSize=function(L,Q,ve){Ct=L,Me=Q,ye=ve,t.width=Math.floor(L*ve),t.height=Math.floor(Q*ve),this.setViewport(0,0,L,Q)},this.setEffects=function(L){if(U===cr){Zt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let Q=0;Q<L.length;Q++)if(L[Q].isOutputPass===!0){gt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(Ee)},this.getViewport=function(L){return L.copy(Ye)},this.setViewport=function(L,Q,ve,le){L.isVector4?Ye.set(L.x,L.y,L.z,L.w):Ye.set(L,Q,ve,le),A.viewport(Ee.copy(Ye).multiplyScalar(ye).round())},this.getScissor=function(L){return L.copy(mt)},this.setScissor=function(L,Q,ve,le){L.isVector4?mt.set(L.x,L.y,L.z,L.w):mt.set(L,Q,ve,le),A.scissor(lt.copy(mt).multiplyScalar(ye).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(L){A.setScissorTest(vt=L)},this.setOpaqueSort=function(L){Ke=L},this.setTransparentSort=function(L){ut=L},this.getClearColor=function(L){return L.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(L=!0,Q=!0,ve=!0){let le=0;if(L){let ce=!1;if(Re!==null){const Ne=Re.texture.format;ce=w.has(Ne)}if(ce){const Ne=Re.texture.type,je=y.has(Ne),We=Pe.getClearColor(),$e=Pe.getClearAlpha(),ot=We.r,bt=We.g,Mt=We.b;je?(O[0]=ot,O[1]=bt,O[2]=Mt,O[3]=$e,Z.clearBufferuiv(Z.COLOR,0,O)):(B[0]=ot,B[1]=bt,B[2]=Mt,B[3]=$e,Z.clearBufferiv(Z.COLOR,0,B))}else le|=Z.COLOR_BUFFER_BIT}Q&&(le|=Z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ve&&(le|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),le!==0&&Z.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),q=L},this.dispose=function(){t.removeEventListener("webglcontextlost",yt,!1),t.removeEventListener("webglcontextrestored",Ot,!1),t.removeEventListener("webglcontextcreationerror",$t,!1),Pe.dispose(),He.dispose(),ze.dispose(),te.dispose(),Fe.dispose(),we.dispose(),Ie.dispose(),pe.dispose(),ke.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",ai),Oe.removeEventListener("sessionend",ln),Ln.stop()};function yt(L){L.preventDefault(),ap("WebGLRenderer: Context Lost."),H=!0}function Ot(){ap("WebGLRenderer: Context Restored."),H=!1;const L=ie.autoReset,Q=de.enabled,ve=de.autoUpdate,le=de.needsUpdate,ce=de.type;Ge(),ie.autoReset=L,de.enabled=Q,de.autoUpdate=ve,de.needsUpdate=le,de.type=ce}function $t(L){Zt("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Pn(L){const Q=L.target;Q.removeEventListener("dispose",Pn),vs(Q)}function vs(L){er(L),te.remove(L)}function er(L){const Q=te.get(L).programs;Q!==void 0&&(Q.forEach(function(ve){ke.releaseProgram(ve)}),L.isShaderMaterial&&ke.releaseShaderCache(L))}this.renderBufferDirect=function(L,Q,ve,le,ce,Ne){Q===null&&(Q=jt);const je=ce.isMesh&&ce.matrixWorld.determinantAffine()<0,We=pn(L,Q,ve,le,ce);A.setMaterial(le,je);let $e=ve.index,ot=1;if(le.wireframe===!0){if($e=me.getWireframeAttribute(ve),$e===void 0)return;ot=2}const bt=ve.drawRange,Mt=ve.attributes.position;let st=bt.start*ot,Bt=(bt.start+bt.count)*ot;Ne!==null&&(st=Math.max(st,Ne.start*ot),Bt=Math.min(Bt,(Ne.start+Ne.count)*ot)),$e!==null?(st=Math.max(st,0),Bt=Math.min(Bt,$e.count)):Mt!=null&&(st=Math.max(st,0),Bt=Math.min(Bt,Mt.count));const rn=Bt-st;if(rn<0||rn===1/0)return;Ie.setup(ce,le,We,ve,$e);let Qt,Xt=_e;if($e!==null&&(Qt=Be.get($e),Xt=xe,Xt.setIndex(Qt)),ce.isMesh)le.wireframe===!0?(A.setLineWidth(le.wireframeLinewidth*Kt()),Xt.setMode(Z.LINES)):Xt.setMode(Z.TRIANGLES);else if(ce.isLine){let In=le.linewidth;In===void 0&&(In=1),A.setLineWidth(In*Kt()),ce.isLineSegments?Xt.setMode(Z.LINES):ce.isLineLoop?Xt.setMode(Z.LINE_LOOP):Xt.setMode(Z.LINE_STRIP)}else ce.isPoints?Xt.setMode(Z.POINTS):ce.isSprite&&Xt.setMode(Z.TRIANGLES);if(ce.isBatchedMesh)if(ht.get("WEBGL_multi_draw"))Xt.renderMultiDraw(ce._multiDrawStarts,ce._multiDrawCounts,ce._multiDrawCount);else{const In=ce._multiDrawStarts,et=ce._multiDrawCounts,Tt=ce._multiDrawCount,Pt=$e?Be.get($e).bytesPerElement:1,oi=te.get(le).currentProgram.getUniforms();for(let mi=0;mi<Tt;mi++)oi.setValue(Z,"_gl_DrawID",mi),Xt.render(In[mi]/Pt,et[mi])}else if(ce.isInstancedMesh)Xt.renderInstances(st,rn,ce.count);else if(ve.isInstancedBufferGeometry){const In=ve._maxInstanceCount!==void 0?ve._maxInstanceCount:1/0,et=Math.min(ve.instanceCount,In);Xt.renderInstances(st,rn,et)}else Xt.render(st,rn)};function fr(L,Q,ve,le){q!==null&&L.isNodeMaterial&&q.setObject(le,L),At===!0&&at.setState(L,ve,!1),L.transparent===!0&&L.side===Pr&&L.forceSinglePass===!1?(L.side=ji,L.needsUpdate=!0,hr(L,Q,le),L.side=Vo,L.needsUpdate=!0,hr(L,Q,le),L.side=Pr):hr(L,Q,le)}this.compile=function(L,Q,ve=null){ve===null&&(ve=L),q!==null&&q.renderStart(L,Q,ve),D=ze.get(ve),D.init(Q),S.push(D),ve.traverseVisible(function(ce){ce.isLight&&ce.layers.test(Q.layers)&&(D.pushLight(ce),ce.castShadow&&D.pushShadow(ce))}),L!==ve&&L.traverseVisible(function(ce){ce.isLight&&ce.layers.test(Q.layers)&&(D.pushLight(ce),ce.castShadow&&D.pushShadow(ce))}),D.setupLights(),q!==null&&q.updateLights(D.state.lightsArray),Ze=this.localClippingEnabled,At=at.init(this.clippingPlanes,Ze),At===!0&&at.setGlobalState(this.clippingPlanes,Q),q!==null&&de.render(D.state.shadowsArray,ve,Q);const le=new Set;return L.traverse(function(ce){if(!(ce.isMesh||ce.isPoints||ce.isLine||ce.isSprite))return;const Ne=ce.material;if(Ne)if(Array.isArray(Ne))for(let je=0;je<Ne.length;je++){const We=Ne[je];fr(We,ve,Q,ce),le.add(We)}else fr(Ne,ve,Q,ce),le.add(Ne)}),D=S.pop(),q!==null&&q.renderEnd(),le},this.compileAsync=function(L,Q,ve=null){const le=this.compile(L,Q,ve);return new Promise(ce=>{function Ne(){if(le.forEach(function(je){const $e=te.get(je).currentProgram;($e===void 0||$e.isReady())&&le.delete(je)}),le.size===0){ce(L);return}setTimeout(Ne,10)}ht.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let ta=null;function Jn(L){ta&&ta(L)}function ai(){Ln.stop()}function ln(){Ln.start()}const Ln=new kg;Ln.setAnimationLoop(Jn),typeof self<"u"&&Ln.setContext(self),this.setAnimationLoop=function(L){ta=L,Oe.setAnimationLoop(L),L===null?Ln.stop():Ln.start()},Oe.addEventListener("sessionstart",ai),Oe.addEventListener("sessionend",ln),this.render=function(L,Q){if(Q!==void 0&&Q.isCamera!==!0){Zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;q!==null&&q.renderStart(L,Q);const ve=Oe.enabled===!0&&Oe.isPresenting===!0,le=C!==null&&(Re===null||ve)&&C.begin(k,Re);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(Q),Q=Oe.getCamera()),L.isScene===!0&&L.onBeforeRender(k,L,Q,Re),D=ze.get(L,S.length),D.init(Q),D.state.textureUnits=ge.getTextureUnits(),S.push(D),xt.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),_t.setFromProjectionMatrix(xt,wa,Q.reversedDepth),Ze=this.localClippingEnabled,At=at.init(this.clippingPlanes,Ze),F=He.get(L,V.length),F.init(),V.push(F),Oe.enabled===!0&&Oe.isPresenting===!0){const je=k.xr.getDepthSensingMesh();je!==null&&gi(je,Q,-1/0,k.sortObjects)}gi(L,Q,0,k.sortObjects),F.finish(),q!==null&&q.updateLights(D.state.lightsArray),k.sortObjects===!0&&F.sort(Ke,ut),Rt=Oe.enabled===!1||Oe.isPresenting===!1||Oe.hasDepthSensing()===!1,Rt&&Pe.addToRenderList(F,L),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),At===!0&&at.beginShadows();const ce=D.state.shadowsArray;if(de.render(ce,L,Q),At===!0&&at.endShadows(),(le&&C.hasRenderPass())===!1){const je=F.opaque,We=F.transmissive;if(D.setupLights(),Q.isArrayCamera){const $e=Q.cameras;if(We.length>0)for(let ot=0,bt=$e.length;ot<bt;ot++){const Mt=$e[ot];Ws(je,We,L,Mt)}Rt&&Pe.render(L);for(let ot=0,bt=$e.length;ot<bt;ot++){const Mt=$e[ot];_n(F,L,Mt,Mt.viewport)}}else We.length>0&&Ws(je,We,L,Q),Rt&&Pe.render(L),_n(F,L,Q)}Re!==null&&be===0&&(ge.updateMultisampleRenderTarget(Re),ge.updateRenderTargetMipmap(Re)),le&&C.end(k),L.isScene===!0&&L.onAfterRender(k,L,Q),Ie.resetDefaultState(),ne=-1,G=null,S.pop(),S.length>0?(D=S[S.length-1],ge.setTextureUnits(D.state.textureUnits),At===!0&&at.setGlobalState(k.clippingPlanes,D.state.camera)):D=null,V.pop(),V.length>0?F=V[V.length-1]:F=null,q!==null&&q.renderEnd()};function gi(L,Q,ve,le){if(L.visible===!1)return;if(L.layers.test(Q.layers)){if(L.isGroup)ve=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(Q);else if(L.isLightProbeGrid)D.pushLightProbeGrid(L);else if(L.isLight)D.pushLight(L),L.castShadow&&D.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||L.intersectsFrustum(_t)){le&&Ft.setFromMatrixPosition(L.matrixWorld).applyMatrix4(xt);const je=we.update(L),We=L.material;We.visible&&F.push(L,je,We,ve,Ft.z,null,Q)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||L.intersectsFrustum(_t))){const je=we.update(L),We=L.material;if(le&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Ft.copy(L.boundingSphere.center)):(je.boundingSphere===null&&je.computeBoundingSphere(),Ft.copy(je.boundingSphere.center)),Ft.applyMatrix4(L.matrixWorld).applyMatrix4(xt)),Array.isArray(We)){const $e=je.groups;for(let ot=0,bt=$e.length;ot<bt;ot++){const Mt=$e[ot],st=We[Mt.materialIndex];st&&st.visible&&F.push(L,je,st,ve,Ft.z,Mt,Q)}}else We.visible&&F.push(L,je,We,ve,Ft.z,null,Q)}}const Ne=L.children;for(let je=0,We=Ne.length;je<We;je++)gi(Ne[je],Q,ve,le)}function _n(L,Q,ve,le){const{opaque:ce,transmissive:Ne,transparent:je}=L;D.setupLightsView(ve),At===!0&&at.setGlobalState(k.clippingPlanes,ve),le&&A.viewport(Ee.copy(le)),ce.length>0&&La(ce,Q,ve),Ne.length>0&&La(Ne,Q,ve),je.length>0&&La(je,Q,ve),A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),A.setPolygonOffset(!1)}function Ws(L,Q,ve,le){if((ve.isScene===!0?ve.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[le.id]===void 0){const st=ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[le.id]=new ea(1,1,{generateMipmaps:!0,type:st?Ca:cr,minFilter:ko,samples:Math.max(4,z.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Gt.workingColorSpace})}const Ne=D.state.transmissionRenderTarget[le.id],je=le.viewport||Ee;Ne.setSize(je.z*k.transmissionResolutionScale,je.w*k.transmissionResolutionScale);const We=k.getRenderTarget(),$e=k.getActiveCubeFace(),ot=k.getActiveMipmapLevel();k.setRenderTarget(Ne),k.getClearColor(Ae),oe=k.getClearAlpha(),oe<1&&k.setClearColor(16777215,.5),k.clear(),Rt&&Pe.render(ve);const bt=k.toneMapping;k.toneMapping=Aa;const Mt=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),D.setupLightsView(le),At===!0&&at.setGlobalState(k.clippingPlanes,le),La(L,ve,le),ge.updateMultisampleRenderTarget(Ne),ge.updateRenderTargetMipmap(Ne),ht.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let Bt=0,rn=Q.length;Bt<rn;Bt++){const Qt=Q[Bt],{object:Xt,geometry:In,material:et,group:Tt}=Qt;if(et.side===Pr&&Xt.layers.test(le.layers)){const Pt=et.side;et.side=ji,et.needsUpdate=!0,_s(Xt,ve,le,In,et,Tt),et.side=Pt,et.needsUpdate=!0,st=!0}}st===!0&&(ge.updateMultisampleRenderTarget(Ne),ge.updateRenderTargetMipmap(Ne))}k.setRenderTarget(We,$e,ot),k.setClearColor(Ae,oe),Mt!==void 0&&(le.viewport=Mt),k.toneMapping=bt}function La(L,Q,ve){const le=Q.isScene===!0?Q.overrideMaterial:null;for(let ce=0,Ne=L.length;ce<Ne;ce++){const je=L[ce],{object:We,geometry:$e,group:ot}=je;let bt=je.material;bt.allowOverride===!0&&le!==null&&(bt=le),We.layers.test(ve.layers)&&_s(We,Q,ve,$e,bt,ot)}}function _s(L,Q,ve,le,ce,Ne){q!==null&&ce.isNodeMaterial&&q.setObject(L,ce),L.onBeforeRender(k,Q,ve,le,ce,Ne),L.modelViewMatrix.multiplyMatrices(ve.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),ce.onBeforeRender(k,Q,ve,le,L,Ne),ce.transparent===!0&&ce.side===Pr&&ce.forceSinglePass===!1?(ce.side=ji,ce.needsUpdate=!0,k.renderBufferDirect(ve,Q,le,ce,L,Ne),ce.side=Vo,ce.needsUpdate=!0,k.renderBufferDirect(ve,Q,le,ce,L,Ne),ce.side=Pr):k.renderBufferDirect(ve,Q,le,ce,L,Ne),L.onAfterRender(k,Q,ve,le,ce,Ne)}function hr(L,Q,ve){Q.isScene!==!0&&(Q=jt);const le=te.get(L),ce=D.state.lights,Ne=D.state.shadowsArray,je=ce.state.version,We=ke.getParameters(L,ce.state,Ne,Q,ve,D.state.lightProbeGridArray),$e=ke.getProgramCacheKey(We);let ot=le.programs;le.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?Q.environment:null,le.fog=Q.fog;const bt=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;le.envMap=Fe.get(L.envMap||le.environment,bt),le.envMapRotation=le.environment!==null&&L.envMap===null?Q.environmentRotation:L.envMapRotation,ot===void 0&&(L.addEventListener("dispose",Pn),ot=new Map,le.programs=ot);let Mt=ot.get($e);if(Mt!==void 0){if(le.currentProgram===Mt&&le.lightsStateVersion===je)return Ys(L,We),Mt}else We.uniforms=ke.getUniforms(L),q!==null&&L.isNodeMaterial&&q.build(L,ve,We),L.onBeforeCompile(We,k),Mt=ke.acquireProgram(We,$e),ot.set($e,Mt),le.uniforms=We.uniforms;const st=le.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(st.clippingPlanes=at.uniform),Ys(L,We),le.needsLights=si(L),le.lightsStateVersion=je,le.needsLights&&(st.ambientLightColor.value=ce.state.ambient,st.lightProbe.value=ce.state.probe,st.sunLights.value=ce.state.sun,st.sunLightShadows.value=ce.state.sunShadow,st.directionalLights.value=ce.state.directional,st.directionalLightShadows.value=ce.state.directionalShadow,st.spotLights.value=ce.state.spot,st.spotLightShadows.value=ce.state.spotShadow,st.rectAreaLights.value=ce.state.rectArea,st.ltc_1.value=ce.state.rectAreaLTC1,st.ltc_2.value=ce.state.rectAreaLTC2,st.pointLights.value=ce.state.point,st.pointLightShadows.value=ce.state.pointShadow,st.hemisphereLights.value=ce.state.hemi,st.sunShadowMatrix.value=ce.state.sunShadowMatrix,st.sunShadowCascade.value=ce.state.sunShadowCascade,st.directionalShadowMatrix.value=ce.state.directionalShadowMatrix,st.spotLightMatrix.value=ce.state.spotLightMatrix,st.spotLightMap.value=ce.state.spotLightMap,st.pointShadowMatrix.value=ce.state.pointShadowMatrix),le.lightProbeGrid=D.state.lightProbeGridArray.length>0,le.currentProgram=Mt,le.uniformsList=null,Mt}function Xs(L){if(L.uniformsList===null){const Q=L.currentProgram.getUniforms();L.uniformsList=vf.seqWithValue(Q.seq,L.uniforms)}return L.uniformsList}function Ys(L,Q){const ve=te.get(L);ve.outputColorSpace=Q.outputColorSpace,ve.batching=Q.batching,ve.batchingColor=Q.batchingColor,ve.instancing=Q.instancing,ve.instancingColor=Q.instancingColor,ve.instancingMorph=Q.instancingMorph,ve.skinning=Q.skinning,ve.morphTargets=Q.morphTargets,ve.morphNormals=Q.morphNormals,ve.morphColors=Q.morphColors,ve.morphTargetsCount=Q.morphTargetsCount,ve.numClippingPlanes=Q.numClippingPlanes,ve.numIntersection=Q.numClipIntersection,ve.vertexAlphas=Q.vertexAlphas,ve.vertexTangents=Q.vertexTangents,ve.toneMapping=Q.toneMapping}function Ht(L,Q){if(L.length===0)return null;if(L.length===1)return L[0].texture!==null?L[0]:null;P.setFromMatrixPosition(Q.matrixWorld);for(let ve=0,le=L.length;ve<le;ve++){const ce=L[ve];if(ce.texture!==null&&ce.boundingBox.containsPoint(P))return ce}return null}function pn(L,Q,ve,le,ce){Q.isScene!==!0&&(Q=jt),ge.resetTextureUnits();const Ne=Q.fog,je=le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial?Q.environment:null,We=Re===null?k.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:Gt.workingColorSpace,$e=le.isMeshStandardMaterial||le.isMeshLambertMaterial&&!le.envMap||le.isMeshPhongMaterial&&!le.envMap,ot=Fe.get(le.envMap||je,$e),bt=le.vertexColors===!0&&!!ve.attributes.color&&ve.attributes.color.itemSize===4,Mt=!!ve.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),st=!!ve.morphAttributes.position,Bt=!!ve.morphAttributes.normal,rn=!!ve.morphAttributes.color;let Qt=Aa;le.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(Qt=k.toneMapping);const Xt=ve.morphAttributes.position||ve.morphAttributes.normal||ve.morphAttributes.color,In=Xt!==void 0?Xt.length:0,et=te.get(le),Tt=D.state.lights;if(At===!0&&(Ze===!0||L!==G)){const en=L===G&&le.id===ne;at.setState(le,L,en)}let Pt=!1;le.version===et.__version?(et.needsLights&&et.lightsStateVersion!==Tt.state.version||et.outputColorSpace!==We||ce.isBatchedMesh&&et.batching===!1||!ce.isBatchedMesh&&et.batching===!0||ce.isBatchedMesh&&et.batchingColor===!0&&ce._colorsTexture===null||ce.isBatchedMesh&&et.batchingColor===!1&&ce._colorsTexture!==null||ce.isInstancedMesh&&et.instancing===!1||!ce.isInstancedMesh&&et.instancing===!0||ce.isSkinnedMesh&&et.skinning===!1||!ce.isSkinnedMesh&&et.skinning===!0||ce.isInstancedMesh&&et.instancingColor===!0&&ce.instanceColor===null||ce.isInstancedMesh&&et.instancingColor===!1&&ce.instanceColor!==null||ce.isInstancedMesh&&et.instancingMorph===!0&&ce.morphTexture===null||ce.isInstancedMesh&&et.instancingMorph===!1&&ce.morphTexture!==null||et.envMap!==ot||le.fog===!0&&et.fog!==Ne||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==at.numPlanes||et.numIntersection!==at.numIntersection)||et.vertexAlphas!==bt||et.vertexTangents!==Mt||et.morphTargets!==st||et.morphNormals!==Bt||et.morphColors!==rn||et.toneMapping!==Qt||et.morphTargetsCount!==In||!!et.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(Pt=!0):(Pt=!0,et.__version=le.version);let oi=et.currentProgram;Pt===!0&&(oi=hr(le,Q,ce),q&&le.isNodeMaterial&&q.onUpdateProgram(le,oi,et));let mi=!1,Kn=!1,dr=!1;const Lt=oi.getUniforms(),xn=et.uniforms;if(A.useProgram(oi.program)&&(mi=!0,Kn=!0,dr=!0),le.id!==ne&&(ne=le.id,Kn=!0),et.needsLights){const en=Ht(D.state.lightProbeGridArray,ce);et.lightProbeGrid!==en&&(et.lightProbeGrid=en,Kn=!0)}if(mi||G!==L){A.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),Lt.setValue(Z,"projectionMatrix",L.projectionMatrix),Lt.setValue(Z,"viewMatrix",L.matrixWorldInverse);const Qn=Lt.map.cameraPosition;Qn!==void 0&&Qn.setValue(Z,Jt.setFromMatrixPosition(L.matrixWorld)),z.logarithmicDepthBuffer&&Lt.setValue(Z,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Lt.setValue(Z,"isOrthographic",L.isOrthographicCamera===!0),G!==L&&(G=L,Kn=!0,dr=!0)}if(et.needsLights&&(Tt.state.sunShadowMap.length>0&&Lt.setValue(Z,"sunShadowMap",Tt.state.sunShadowMap,ge),Tt.state.directionalShadowMap.length>0&&Lt.setValue(Z,"directionalShadowMap",Tt.state.directionalShadowMap,ge),Tt.state.spotShadowMap.length>0&&Lt.setValue(Z,"spotShadowMap",Tt.state.spotShadowMap,ge),Tt.state.pointShadowMap.length>0&&Lt.setValue(Z,"pointShadowMap",Tt.state.pointShadowMap,ge)),ce.isSkinnedMesh){Lt.setOptional(Z,ce,"bindMatrix"),Lt.setOptional(Z,ce,"bindMatrixInverse");const en=ce.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),Lt.setValue(Z,"boneTexture",en.boneTexture,ge))}ce.isBatchedMesh&&(Lt.setOptional(Z,ce,"batchingTexture"),Lt.setValue(Z,"batchingTexture",ce._matricesTexture,ge),Lt.setOptional(Z,ce,"batchingIdTexture"),Lt.setValue(Z,"batchingIdTexture",ce._indirectTexture,ge),Lt.setOptional(Z,ce,"batchingColorTexture"),ce._colorsTexture!==null&&Lt.setValue(Z,"batchingColorTexture",ce._colorsTexture,ge));const pr=ve.morphAttributes;if((pr.position!==void 0||pr.normal!==void 0||pr.color!==void 0)&&W.update(ce,ve,oi),(Kn||et.receiveShadow!==ce.receiveShadow)&&(et.receiveShadow=ce.receiveShadow,Lt.setValue(Z,"receiveShadow",ce.receiveShadow)),(le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial)&&le.envMap===null&&Q.environment!==null&&(xn.envMapIntensity.value=Q.environmentIntensity),xn.dfgLUT!==void 0&&(xn.dfgLUT.value=Ky()),Kn){if(Lt.setValue(Z,"toneMappingExposure",k.toneMappingExposure),et.needsLights&&Ia(xn,dr),Ne&&le.fog===!0&&it.refreshFogUniforms(xn,Ne),it.refreshMaterialUniforms(xn,le,ye,Me,D.state.transmissionRenderTarget[L.id]),et.needsLights&&et.lightProbeGrid){const en=et.lightProbeGrid;xn.probesSH.value=en.texture,xn.probesMin.value.copy(en.boundingBox.min),xn.probesMax.value.copy(en.boundingBox.max),xn.probesResolution.value.copy(en.resolution)}vf.upload(Z,Xs(et),xn,ge)}if(le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(vf.upload(Z,Xs(et),xn,ge),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Lt.setValue(Z,"center",ce.center),Lt.setValue(Z,"modelViewMatrix",ce.modelViewMatrix),Lt.setValue(Z,"normalMatrix",ce.normalMatrix),Lt.setValue(Z,"modelMatrix",ce.matrixWorld),le.uniformsGroups!==void 0){const en=le.uniformsGroups;for(let Qn=0,tr=en.length;Qn<tr;Qn++){const Jo=en[Qn];pe.update(Jo,oi),pe.bind(Jo,oi)}}return oi}function Ia(L,Q){L.ambientLightColor.needsUpdate=Q,L.lightProbe.needsUpdate=Q,L.sunLights.needsUpdate=Q,L.sunLightShadows.needsUpdate=Q,L.directionalLights.needsUpdate=Q,L.directionalLightShadows.needsUpdate=Q,L.pointLights.needsUpdate=Q,L.pointLightShadows.needsUpdate=Q,L.spotLights.needsUpdate=Q,L.spotLightShadows.needsUpdate=Q,L.rectAreaLights.needsUpdate=Q,L.hemisphereLights.needsUpdate=Q}function si(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return Se},this.getActiveMipmapLevel=function(){return be},this.getRenderTarget=function(){return Re},this.setRenderTargetTextures=function(L,Q,ve){const le=te.get(L);le.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),te.get(L.texture).__webglTexture=Q,te.get(L.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:ve,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,Q){const ve=te.get(L);ve.__webglFramebuffer=Q,ve.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(L,Q=0,ve=0){Re=L,Se=Q,be=ve;let le=null,ce=!1,Ne=!1;if(L){const We=te.get(L);if(We.__useDefaultFramebuffer!==void 0){A.bindFramebuffer(Z.FRAMEBUFFER,We.__webglFramebuffer),Ee.copy(L.viewport),lt.copy(L.scissor),rt=L.scissorTest,A.viewport(Ee),A.scissor(lt),A.setScissorTest(rt),ne=-1;return}else if(We.__webglFramebuffer===void 0)ge.setupRenderTarget(L);else if(We.__hasExternalTextures)ge.rebindTextures(L,te.get(L.texture).__webglTexture,te.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const bt=L.depthTexture;if(We.__boundDepthTexture!==bt){if(bt!==null&&te.has(bt)&&(L.width!==bt.image.width||L.height!==bt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ge.setupDepthRenderbuffer(L)}}const $e=L.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ne=!0);const ot=te.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(ot[Q])?le=ot[Q][ve]:le=ot[Q],ce=!0):L.samples>0&&ge.useMultisampledRTT(L)===!1?le=te.get(L).__webglMultisampledFramebuffer:Array.isArray(ot)?le=ot[ve]:le=ot,Ee.copy(L.viewport),lt.copy(L.scissor),rt=L.scissorTest}else Ee.copy(Ye).multiplyScalar(ye).floor(),lt.copy(mt).multiplyScalar(ye).floor(),rt=vt;if(ve!==0&&(le=ae),A.bindFramebuffer(Z.FRAMEBUFFER,le)&&A.drawBuffers(L,le),A.viewport(Ee),A.scissor(lt),A.setScissorTest(rt),ce){const We=te.get(L.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+Q,We.__webglTexture,ve)}else if(Ne){const We=Q;for(let $e=0;$e<L.textures.length;$e++){const ot=te.get(L.textures[$e]);Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0+$e,ot.__webglTexture,ve,We)}}else if(L!==null&&ve!==0){const We=te.get(L.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,We.__webglTexture,ve)}ne=-1};function Zo(L){const Q=te.get(L);return(Q.__readFormat!==L.format||Q.__readType!==L.type)&&(Q.__readFormat=L.format,Q.__readType=L.type,Q.__formatReadable=z.textureFormatReadable(L.format),Q.__typeReadable=z.textureTypeReadable(L.type)),Q}this.readRenderTargetPixels=function(L,Q,ve,le,ce,Ne,je,We=0){if(!(L&&L.isWebGLRenderTarget)){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=te.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&je!==void 0&&($e=$e[je]),$e){A.bindFramebuffer(Z.FRAMEBUFFER,$e);try{const ot=L.textures[We],bt=ot.format,Mt=ot.type;L.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+We);const st=Zo(ot);if(st.__formatReadable===!1){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(st.__typeReadable===!1){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=L.width-le&&ve>=0&&ve<=L.height-ce&&Z.readPixels(Q,ve,le,ce,Le.convert(bt),Le.convert(Mt),Ne)}finally{const ot=Re!==null?te.get(Re).__webglFramebuffer:null;A.bindFramebuffer(Z.FRAMEBUFFER,ot)}}},this.readRenderTargetPixelsAsync=async function(L,Q,ve,le,ce,Ne,je,We=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=te.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&je!==void 0&&($e=$e[je]),$e)if(Q>=0&&Q<=L.width-le&&ve>=0&&ve<=L.height-ce){A.bindFramebuffer(Z.FRAMEBUFFER,$e);const ot=L.textures[We],bt=ot.format,Mt=ot.type;L.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+We);const st=Zo(ot);if(st.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(st.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Bt=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Bt),Z.bufferData(Z.PIXEL_PACK_BUFFER,Ne.byteLength,Z.STREAM_READ),Z.readPixels(Q,ve,le,ce,Le.convert(bt),Le.convert(Mt),0),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,null);const rn=Re!==null?te.get(Re).__webglFramebuffer:null;A.bindFramebuffer(Z.FRAMEBUFFER,rn);const Qt=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await Nm(Z,Qt,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Bt),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,Ne),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,null),Z.deleteBuffer(Bt),Z.deleteSync(Qt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,Q=null,ve=0){const le=Math.pow(2,-ve),ce=Math.floor(L.image.width*le),Ne=Math.floor(L.image.height*le),je=Q!==null?Q.x:0,We=Q!==null?Q.y:0;ge.setTexture2D(L,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,ve,0,0,je,We,ce,Ne),A.unbindTexture()},this.copyTextureToTexture=function(L,Q,ve=null,le=null,ce=0,Ne=0){let je,We,$e,ot,bt,Mt,st,Bt,rn;const Qt=L.isCompressedTexture?L.mipmaps[Ne]:L.image;if(ve!==null)je=ve.max.x-ve.min.x,We=ve.max.y-ve.min.y,$e=ve.isBox3?ve.max.z-ve.min.z:1,ot=ve.min.x,bt=ve.min.y,Mt=ve.isBox3?ve.min.z:0;else{const xn=Math.pow(2,-ce);je=Math.floor(Qt.width*xn),We=Math.floor(Qt.height*xn),L.isDataArrayTexture?$e=Qt.depth:L.isData3DTexture?$e=Math.floor(Qt.depth*xn):$e=1,ot=0,bt=0,Mt=0}le!==null?(st=le.x,Bt=le.y,rn=le.z):(st=0,Bt=0,rn=0);const Xt=Le.convert(Q.format),In=Le.convert(Q.type);let et;Q.isData3DTexture?(ge.setTexture3D(Q,0),et=Z.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(ge.setTexture2DArray(Q,0),et=Z.TEXTURE_2D_ARRAY):(ge.setTexture2D(Q,0),et=Z.TEXTURE_2D),A.activeTexture(Z.TEXTURE0),A.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,Q.flipY),A.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),A.pixelStorei(Z.UNPACK_ALIGNMENT,Q.unpackAlignment);const Tt=A.getParameter(Z.UNPACK_ROW_LENGTH),Pt=A.getParameter(Z.UNPACK_IMAGE_HEIGHT),oi=A.getParameter(Z.UNPACK_SKIP_PIXELS),mi=A.getParameter(Z.UNPACK_SKIP_ROWS),Kn=A.getParameter(Z.UNPACK_SKIP_IMAGES);A.pixelStorei(Z.UNPACK_ROW_LENGTH,Qt.width),A.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Qt.height),A.pixelStorei(Z.UNPACK_SKIP_PIXELS,ot),A.pixelStorei(Z.UNPACK_SKIP_ROWS,bt),A.pixelStorei(Z.UNPACK_SKIP_IMAGES,Mt);const dr=L.isDataArrayTexture||L.isData3DTexture,Lt=Q.isDataArrayTexture||Q.isData3DTexture;if(L.isDepthTexture){const xn=te.get(L),pr=te.get(Q),en=te.get(xn.__renderTarget),Qn=te.get(pr.__renderTarget);A.bindFramebuffer(Z.READ_FRAMEBUFFER,en.__webglFramebuffer),A.bindFramebuffer(Z.DRAW_FRAMEBUFFER,Qn.__webglFramebuffer);for(let tr=0;tr<$e;tr++)dr&&(Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,te.get(L).__webglTexture,ce,Mt+tr),Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,te.get(Q).__webglTexture,Ne,rn+tr)),Z.blitFramebuffer(ot,bt,je,We,st,Bt,je,We,Z.DEPTH_BUFFER_BIT,Z.NEAREST);A.bindFramebuffer(Z.READ_FRAMEBUFFER,null),A.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else if(ce!==0||L.isRenderTargetTexture||te.has(L)){const xn=te.get(L),pr=te.get(Q);A.bindFramebuffer(Z.READ_FRAMEBUFFER,Y),A.bindFramebuffer(Z.DRAW_FRAMEBUFFER,ue);for(let en=0;en<$e;en++)dr?Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,xn.__webglTexture,ce,Mt+en):Z.framebufferTexture2D(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,xn.__webglTexture,ce),Lt?Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,pr.__webglTexture,Ne,rn+en):Z.framebufferTexture2D(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,pr.__webglTexture,Ne),ce!==0?Z.blitFramebuffer(ot,bt,je,We,st,Bt,je,We,Z.COLOR_BUFFER_BIT,Z.NEAREST):Lt?Z.copyTexSubImage3D(et,Ne,st,Bt,rn+en,ot,bt,je,We):Z.copyTexSubImage2D(et,Ne,st,Bt,ot,bt,je,We);A.bindFramebuffer(Z.READ_FRAMEBUFFER,null),A.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else Lt?L.isDataTexture||L.isData3DTexture?Z.texSubImage3D(et,Ne,st,Bt,rn,je,We,$e,Xt,In,Qt.data):Q.isCompressedArrayTexture?Z.compressedTexSubImage3D(et,Ne,st,Bt,rn,je,We,$e,Xt,Qt.data):Z.texSubImage3D(et,Ne,st,Bt,rn,je,We,$e,Xt,In,Qt):L.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,Ne,st,Bt,je,We,Xt,In,Qt.data):L.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,Ne,st,Bt,Qt.width,Qt.height,Xt,Qt.data):Z.texSubImage2D(Z.TEXTURE_2D,Ne,st,Bt,je,We,Xt,In,Qt);A.pixelStorei(Z.UNPACK_ROW_LENGTH,Tt),A.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Pt),A.pixelStorei(Z.UNPACK_SKIP_PIXELS,oi),A.pixelStorei(Z.UNPACK_SKIP_ROWS,mi),A.pixelStorei(Z.UNPACK_SKIP_IMAGES,Kn),Ne===0&&Q.generateMipmaps&&Z.generateMipmap(et),A.unbindTexture()},this.initRenderTarget=function(L){te.get(L).__webglFramebuffer===void 0&&ge.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?ge.setTextureCube(L,0):L.isData3DTexture?ge.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?ge.setTexture2DArray(L,0):ge.setTexture2D(L,0),A.unbindTexture()},this.resetState=function(){Se=0,be=0,Re=null,A.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Gt._getUnpackColorSpace()}}var Bo={},Vc={};var ng;function qy(){if(ng)return Vc;ng=1;var i=ag(),e=sg();function t(a){var l="https://react.dev/errors/"+a;if(1<arguments.length){l+="?args[]="+encodeURIComponent(arguments[1]);for(var h=2;h<arguments.length;h++)l+="&args[]="+encodeURIComponent(arguments[h])}return"Minified React error #"+a+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),g=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),_=Symbol.for("react.suspense_list"),x=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),U=Symbol.for("react.scope"),w=Symbol.for("react.activity"),y=Symbol.for("react.legacy_hidden"),O=Symbol.for("react.memo_cache_sentinel"),B=Symbol.for("react.view_transition"),P=Symbol.for("react.recoverable"),F=Symbol.iterator;function D(a){return a===null||typeof a!="object"?null:(a=F&&a[F]||a["@@iterator"],typeof a=="function"?a:null)}var V=Symbol.for("react.optimistic_key"),S=Array.isArray;function C(a,l){var h=a.length&3,v=a.length-h,E=l;for(l=0;l<v;){var N=a.charCodeAt(l)&255|(a.charCodeAt(++l)&255)<<8|(a.charCodeAt(++l)&255)<<16|(a.charCodeAt(++l)&255)<<24;++l,N=3432918353*(N&65535)+((3432918353*(N>>>16)&65535)<<16)&4294967295,N=N<<15|N>>>17,N=461845907*(N&65535)+((461845907*(N>>>16)&65535)<<16)&4294967295,E^=N,E=E<<13|E>>>19,E=5*(E&65535)+((5*(E>>>16)&65535)<<16)&4294967295,E=(E&65535)+27492+(((E>>>16)+58964&65535)<<16)}switch(N=0,h){case 3:N^=(a.charCodeAt(l+2)&255)<<16;case 2:N^=(a.charCodeAt(l+1)&255)<<8;case 1:N^=a.charCodeAt(l)&255,N=3432918353*(N&65535)+((3432918353*(N>>>16)&65535)<<16)&4294967295,N=N<<15|N>>>17,E^=461845907*(N&65535)+((461845907*(N>>>16)&65535)<<16)&4294967295}return E^=a.length,E^=E>>>16,E=2246822507*(E&65535)+((2246822507*(E>>>16)&65535)<<16)&4294967295,E^=E>>>13,E=3266489909*(E&65535)+((3266489909*(E>>>16)&65535)<<16)&4294967295,(E^E>>>16)>>>0}var k=Object.assign,H=Object.prototype.hasOwnProperty,q=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ae={},Y={};function ue(a){return H.call(Y,a)?!0:H.call(ae,a)?!1:q.test(a)?Y[a]=!0:(ae[a]=!0,!1)}var Se=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")),be=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Re=/["'&<>]/;function ne(a){if(typeof a=="boolean"||typeof a=="number"||typeof a=="bigint")return""+a;a=""+a;var l=Re.exec(a);if(l){var h="",v,E=0;for(v=l.index;v<a.length;v++){switch(a.charCodeAt(v)){case 34:l="&quot;";break;case 38:l="&amp;";break;case 39:l="&#x27;";break;case 60:l="&lt;";break;case 62:l="&gt;";break;default:continue}E!==v&&(h+=a.slice(E,v)),E=v+1,h+=l}a=E!==v?h+a.slice(E,v):h}return a}var G=/([A-Z])/g,Ee=/^ms-/,lt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function rt(a){return lt.test(""+a)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":a}var Ae=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe=e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ct={pending:!1,data:null,method:null,action:null},Me=oe.d;oe.d={f:Me.f,r:Me.r,D:pn,C:Ia,L:si,m:Zo,X:Q,S:L,M:ve};var ye=[],Ke=null,ut=/(<\/|<)(s)(cript)/gi;function Ye(a,l,h,v){return""+l+(h==="s"?"\\u0073":"\\u0053")+v}function mt(a,l,h,v,E){return{idPrefix:a===void 0?"":a,nextFormID:0,streamingFormat:0,bootstrapScriptContent:h,bootstrapScripts:v,bootstrapModules:E,instructions:0,hasBody:!1,hasHtml:!1,unknownResources:{},dnsResources:{},connectResources:{default:{},anonymous:{},credentials:{}},imageResources:{},styleResources:{},scriptResources:{},moduleUnknownResources:{},moduleScriptResources:{}}}function vt(a,l,h,v){return{insertionMode:a,selectedValue:l,tagScope:h,viewTransition:v}}function _t(a,l,h){var v=a.tagScope&-25;switch(l){case"noscript":return vt(2,null,v|1,null);case"select":return vt(2,h.value!=null?h.value:h.defaultValue,v,null);case"svg":return vt(4,null,v,null);case"picture":return vt(2,null,v|2,null);case"math":return vt(5,null,v,null);case"foreignObject":return vt(2,null,v,null);case"table":return vt(6,null,v,null);case"thead":case"tbody":case"tfoot":return vt(7,null,v,null);case"colgroup":return vt(9,null,v,null);case"tr":return vt(8,null,v,null);case"head":if(2>a.insertionMode)return vt(3,null,v,null);break;case"html":if(a.insertionMode===0)return vt(1,null,v,null)}return 6<=a.insertionMode||2>a.insertionMode?vt(2,null,v,null):a.viewTransition!==null||a.tagScope!==v?vt(a.insertionMode,a.selectedValue,v,null):a}function At(a){return a===null?null:{update:a.update,enter:"none",exit:"none",share:a.update,parentEnter:"none",parentExit:"none",name:a.autoName,autoName:a.autoName,nameIdx:0}}function Ze(a,l){return l.tagScope&32&&(a.instructions|=128),vt(l.insertionMode,l.selectedValue,l.tagScope|12,At(l.viewTransition))}function xt(a,l){a=At(l.viewTransition);var h=l.tagScope|16;return a!==null&&a.share!=="none"&&(h|=64),vt(l.insertionMode,l.selectedValue,h,a)}function Jt(a,l,h){return a="_"+a.idPrefix+"R_"+l,0<h&&(a+="H"+h.toString(32)),a+"_"}function Ft(a,l){l=l.viewTransition,l!==null&&(l.name!=="auto"&&(Z(a,"vt-name",l.nameIdx===0?l.name:l.name+"_"+l.nameIdx),l.nameIdx++),Z(a,"vt-update",l.update),l.enter!=="none"&&Z(a,"vt-enter",l.enter),l.exit!=="none"&&Z(a,"vt-exit",l.exit),l.share!=="none"&&Z(a,"vt-share",l.share))}var jt=new Map;function Rt(a,l){if(typeof l!="object")throw Error(t(62));var h=!0,v;for(v in l)if(H.call(l,v)){var E=l[v];if(E!=null&&typeof E!="boolean"&&E!==""){if(v.indexOf("--")===0){var N=ne(v);E=ne((""+E).trim())}else N=jt.get(v),N===void 0&&(N=ne(v.replace(G,"-$1").toLowerCase().replace(Ee,"-ms-")),jt.set(v,N)),E=typeof E=="number"?E===0||Se.has(v)?""+E:E+"px":ne((""+E).trim());h?(h=!1,a.push(' style="',N,":",E)):a.push(";",N,":",E)}}h||a.push('"')}function Kt(a,l,h){h&&typeof h!="function"&&typeof h!="symbol"&&a.push(" ",l,'=""')}function Z(a,l,h){typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&a.push(" ",l,'="',ne(h),'"')}var Wt=ne("javascript:throw new Error('React form unexpectedly submitted.')");function ht(a,l){this.push('<input type="hidden"'),z(a),Z(this,"name",l),Z(this,"value",a),this.push("/>")}function z(a){if(typeof a!="string")throw Error(t(480))}function A(a,l){if(typeof l.$$FORM_ACTION=="function"){var h=a.nextFormID++;a=a.idPrefix+h;try{var v=l.$$FORM_ACTION(a);if(v){var E=v.data;E?.forEach(z)}return v}catch(N){if(typeof N=="object"&&N!==null&&typeof N.then=="function")throw N}}return null}function ie(a,l,h,v,E,N,$,he){var re=null;if(typeof v=="function"){var se=A(l,v);se!==null?(he=se.name,v=se.action||"",E=se.encType,N=se.method,$=se.target,re=se.data):(a.push(" ","formAction",'="',Wt,'"'),$=N=E=v=he=null,Be(l,h))}return he!=null&&te(a,"name",he),v!=null&&te(a,"formAction",v),E!=null&&te(a,"formEncType",E),N!=null&&te(a,"formMethod",N),$!=null&&te(a,"formTarget",$),re}function te(a,l,h){switch(l){case"className":Z(a,"class",h);break;case"tabIndex":Z(a,"tabindex",h);break;case"dir":case"role":case"viewBox":case"width":case"height":Z(a,l,h);break;case"style":Rt(a,h);break;case"src":case"href":if(h==="")break;case"action":case"formAction":if(h==null||typeof h=="function"||typeof h=="symbol"||typeof h=="boolean")break;h=rt(""+h),a.push(" ",l,'="',ne(h),'"');break;case"defaultValue":case"defaultChecked":case"innerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":case"ref":break;case"autoFocus":case"multiple":case"muted":Kt(a,l.toLowerCase(),h);break;case"xlinkHref":if(typeof h=="function"||typeof h=="symbol"||typeof h=="boolean")break;h=rt(""+h),a.push(" ","xlink:href",'="',ne(h),'"');break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":typeof h!="function"&&typeof h!="symbol"&&a.push(" ",l,'="',ne(h),'"');break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":h&&typeof h!="function"&&typeof h!="symbol"&&a.push(" ",l,'=""');break;case"capture":case"download":h===!0?a.push(" ",l,'=""'):h!==!1&&typeof h!="function"&&typeof h!="symbol"&&a.push(" ",l,'="',ne(h),'"');break;case"cols":case"rows":case"size":case"span":typeof h!="function"&&typeof h!="symbol"&&!isNaN(h)&&1<=h&&a.push(" ",l,'="',ne(h),'"');break;case"rowSpan":case"start":typeof h=="function"||typeof h=="symbol"||isNaN(h)||a.push(" ",l,'="',ne(h),'"');break;case"xlinkActuate":Z(a,"xlink:actuate",h);break;case"xlinkArcrole":Z(a,"xlink:arcrole",h);break;case"xlinkRole":Z(a,"xlink:role",h);break;case"xlinkShow":Z(a,"xlink:show",h);break;case"xlinkTitle":Z(a,"xlink:title",h);break;case"xlinkType":Z(a,"xlink:type",h);break;case"xmlBase":Z(a,"xml:base",h);break;case"xmlLang":Z(a,"xml:lang",h);break;case"xmlSpace":Z(a,"xml:space",h);break;default:if((!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=be.get(l)||l,ue(l))){switch(typeof h){case"function":case"symbol":return;case"boolean":var v=l.toLowerCase().slice(0,5);if(v!=="data-"&&v!=="aria-")return}a.push(" ",l,'="',ne(h),'"')}}}function ge(a,l,h){if(l!=null){if(h!=null)throw Error(t(60));if(typeof l!="object"||!("__html"in l))throw Error(t(61));l=l.__html,l!=null&&a.push(""+l)}}function Fe(a){var l="";return i.Children.forEach(a,function(h){h!=null&&(l+=h)}),l}function Be(a,l){if((a.instructions&16)===0){a.instructions|=16;var h=l.preamble,v=l.bootstrapChunks;(h.htmlChunks||h.headChunks)&&v.length===0?(v.push(l.startInlineScript),hr(v,a),v.push(">",`addEventListener("submit",function(a){if(!a.defaultPrevented){var b=a.target,d=a.submitter,c=b.action,e=d;if(d){var f=d.getAttribute("formAction");null!=f&&(c=f,e=null)}"javascript:throw new Error('React form unexpectedly submitted.')"===c&&(a.preventDefault(),a=new FormData(b,e),c=b.ownerDocument||b,(c.$$reactFormReplay=c.$$reactFormReplay||[]).push(b,d,a))}});`,"<\/script>")):v.unshift(l.startInlineScript,">",`addEventListener("submit",function(a){if(!a.defaultPrevented){var b=a.target,d=a.submitter,c=b.action,e=d;if(d){var f=d.getAttribute("formAction");null!=f&&(c=f,e=null)}"javascript:throw new Error('React form unexpectedly submitted.')"===c&&(a.preventDefault(),a=new FormData(b,e),c=b.ownerDocument||b,(c.$$reactFormReplay=c.$$reactFormReplay||[]).push(b,d,a))}});`,"<\/script>")}}function me(a,l){a.push(_e("link"));for(var h in l)if(H.call(l,h)){var v=l[h];if(v!=null)switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(t(399,"link"));default:te(a,h,v)}}return a.push("/>"),null}var we=/(<\/|<)(s)(tyle)/gi;function ke(a,l,h,v){return""+l+(h==="s"?"\\73 ":"\\53 ")+v}function it(a,l,h,v){a.push(_e(h));for(var E in l)if(H.call(l,E)){var N=l[E];if(N!=null)switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(t(399,h));default:te(a,E,N)}}return Ft(a,v),a.push("/>"),null}function He(a,l){a.push(_e("title"));var h=null,v=null,E;for(E in l)if(H.call(l,E)){var N=l[E];if(N!=null)switch(E){case"children":h=N;break;case"dangerouslySetInnerHTML":v=N;break;default:te(a,E,N)}}return a.push(">"),l=Array.isArray(h)?2>h.length?h[0]:null:h,typeof l!="function"&&typeof l!="symbol"&&l!==null&&l!==void 0&&a.push(ne(""+l)),ge(a,v,h),a.push(Ie("title")),null}function ze(a,l){a.push(_e("script"));var h=null,v=null,E;for(E in l)if(H.call(l,E)){var N=l[E];if(N!=null)switch(E){case"children":h=N;break;case"dangerouslySetInnerHTML":v=N;break;default:te(a,E,N)}}return a.push(">"),ge(a,v,h),typeof h=="string"&&a.push((""+h).replace(ut,Ye)),a.push(Ie("script")),null}function at(a,l,h,v){a.push(_e(h));var E=h=null,N;for(N in l)if(H.call(l,N)){var $=l[N];if($!=null)switch(N){case"children":h=$;break;case"dangerouslySetInnerHTML":E=$;break;default:te(a,N,$)}}return Ft(a,v),a.push(">"),ge(a,E,h),h}function de(a,l,h,v){a.push(_e(h));var E=h=null,N;for(N in l)if(H.call(l,N)){var $=l[N];if($!=null)switch(N){case"children":h=$;break;case"dangerouslySetInnerHTML":E=$;break;default:te(a,N,$)}}return Ft(a,v),a.push(">"),ge(a,E,h),typeof h=="string"?(a.push(ne(h)),null):h}var Pe=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,W=new Map;function _e(a){var l=W.get(a);if(l===void 0){if(!Pe.test(a))throw Error(t(65,a));l="<"+a,W.set(a,l)}return l}function xe(a,l,h,v,E,N,$,he,re){switch(l){case"div":case"span":case"svg":case"path":break;case"a":a.push(_e("a"));var se=null,De=null,Ue;for(Ue in h)if(H.call(h,Ue)){var Qe=h[Ue];if(Qe!=null)switch(Ue){case"children":se=Qe;break;case"dangerouslySetInnerHTML":De=Qe;break;case"href":Qe===""?Z(a,"href",""):te(a,Ue,Qe);break;default:te(a,Ue,Qe)}}if(Ft(a,he),a.push(">"),ge(a,De,se),typeof se=="string"){a.push(ne(se));var Je=null}else Je=se;return Je;case"g":case"p":case"li":break;case"select":a.push(_e("select"));var tt=null,ft=null,qt;for(qt in h)if(H.call(h,qt)){var zt=h[qt];if(zt!=null)switch(qt){case"children":tt=zt;break;case"dangerouslySetInnerHTML":ft=zt;break;case"defaultValue":case"value":break;default:te(a,qt,zt)}}return Ft(a,he),a.push(">"),ge(a,ft,tt),tt;case"option":var an=he.selectedValue;a.push(_e("option"));var En=null,dt=null,wt=null,kt=null,tn;for(tn in h)if(H.call(h,tn)){var jn=h[tn];if(jn!=null)switch(tn){case"children":En=jn;break;case"selected":wt=jn;break;case"dangerouslySetInnerHTML":kt=jn;break;case"value":dt=jn;default:te(a,tn,jn)}}if(an!=null){var It=dt!==null?""+dt:Fe(En);if(S(an)){for(var gn=0;gn<an.length;gn++)if(""+an[gn]===It){a.push(' selected=""');break}}else""+an===It&&a.push(' selected=""')}else wt&&a.push(' selected=""');return a.push(">"),ge(a,kt,En),En;case"textarea":a.push(_e("textarea"));var dn=null,Hn=null,sn=null,ii;for(ii in h)if(H.call(h,ii)){var cn=h[ii];if(cn!=null)switch(ii){case"children":sn=cn;break;case"value":dn=cn;break;case"defaultValue":Hn=cn;break;case"dangerouslySetInnerHTML":throw Error(t(91));default:te(a,ii,cn)}}if(dn===null&&Hn!==null&&(dn=Hn),Ft(a,he),a.push(">"),sn!=null){if(dn!=null)throw Error(t(92));if(S(sn)){if(1<sn.length)throw Error(t(93));dn=""+sn[0]}dn=""+sn}return typeof dn=="string"&&dn[0]===`
`&&a.push(`
`),dn!==null&&a.push(ne(""+dn)),null;case"input":a.push(_e("input"));var ir=null,Nn=null,Fn=null,Nr=null,Mn=null,_i=null,Vn=null,Pi=null,Hi=null,mr;for(mr in h)if(H.call(h,mr)){var yn=h[mr];if(yn!=null)switch(mr){case"children":case"dangerouslySetInnerHTML":throw Error(t(399,"input"));case"name":ir=yn;break;case"formAction":Nn=yn;break;case"formEncType":Fn=yn;break;case"formMethod":Nr=yn;break;case"formTarget":Mn=yn;break;case"defaultChecked":Hi=yn;break;case"defaultValue":Vn=yn;break;case"checked":Pi=yn;break;case"value":_i=yn;break;default:te(a,mr,yn)}}var Ur=ie(a,v,E,Nn,Fn,Nr,Mn,ir);return Pi!==null?Kt(a,"checked",Pi):Hi!==null&&Kt(a,"checked",Hi),_i!==null?te(a,"value",_i):Vn!==null&&te(a,"value",Vn),Ft(a,he),a.push("/>"),Ur?.forEach(ht,a),null;case"button":a.push(_e("button"));var ka=null,rr=null,Fr=null,oo=null,Ha=null,Or=null,ml=null,Gi;for(Gi in h)if(H.call(h,Gi)){var $n=h[Gi];if($n!=null)switch(Gi){case"children":ka=$n;break;case"dangerouslySetInnerHTML":rr=$n;break;case"name":Fr=$n;break;case"formAction":oo=$n;break;case"formEncType":Ha=$n;break;case"formMethod":Or=$n;break;case"formTarget":ml=$n;break;default:te(a,Gi,$n)}}var vr=ie(a,v,E,oo,Ha,Or,ml,Fr);if(Ft(a,he),a.push(">"),vr?.forEach(ht,a),ge(a,rr,ka),typeof ka=="string"){a.push(ne(ka));var Ga=null}else Ga=ka;return Ga;case"form":a.push(_e("form"));var _r=null,lo=null,Vi=null,Li=null,Va=null,Br=null,sa;for(sa in h)if(H.call(h,sa)){var xr=h[sa];if(xr!=null)switch(sa){case"children":_r=xr;break;case"dangerouslySetInnerHTML":lo=xr;break;case"action":Vi=xr;break;case"encType":Li=xr;break;case"method":Va=xr;break;case"target":Br=xr;break;default:te(a,sa,xr)}}var Wa=null,oa=null;if(typeof Vi=="function"){var Yt=A(v,Vi);Yt!==null?(Vi=Yt.action||"",Li=Yt.encType,Va=Yt.method,Br=Yt.target,Wa=Yt.data,oa=Yt.name):(a.push(" ","action",'="',Wt,'"'),Br=Va=Li=Vi=null,Be(v,E))}if(Vi!=null&&te(a,"action",Vi),Li!=null&&te(a,"encType",Li),Va!=null&&te(a,"method",Va),Br!=null&&te(a,"target",Br),Ft(a,he),a.push(">"),oa!==null&&(a.push('<input type="hidden"'),Z(a,"name",oa),a.push("/>"),Wa?.forEach(ht,a)),ge(a,lo,_r),typeof _r=="string"){a.push(ne(_r));var la=null}else la=_r;return la;case"menuitem":a.push(_e("menuitem"));for(var zr in h)if(H.call(h,zr)){var ca=h[zr];if(ca!=null)switch(zr){case"children":case"dangerouslySetInnerHTML":throw Error(t(400));default:te(a,zr,ca)}}return Ft(a,he),a.push(">"),null;case"object":a.push(_e("object"));var Ii=null,Wi=null,xi;for(xi in h)if(H.call(h,xi)){var Mr=h[xi];if(Mr!=null)switch(xi){case"children":Ii=Mr;break;case"dangerouslySetInnerHTML":Wi=Mr;break;case"data":var Vt=rt(""+Mr);if(Vt==="")break;a.push(" ","data",'="',ne(Vt),'"');break;default:te(a,xi,Mr)}}if(Ft(a,he),a.push(">"),ge(a,Wi,Ii),typeof Ii=="string"){a.push(ne(Ii));var on=null}else on=Ii;return on;case"title":var Wn=he.tagScope&1,On=he.tagScope&4;if(he.insertionMode===4||Wn||h.itemProp!=null)var ua=He(a,h);else On?ua=null:(He(E.hoistableChunks,h),ua=void 0);return ua;case"link":var fa=he.tagScope&1,ha=he.tagScope&4,co=h.rel,Xi=h.href,Xa=h.precedence;if(he.insertionMode===4||fa||h.itemProp!=null||typeof co!="string"||typeof Xi!="string"||Xi===""){me(a,h);var yr=null}else if(h.rel==="stylesheet")if(typeof Xa!="string"||h.disabled!=null||h.onLoad||h.onError)yr=me(a,h);else{var Yi=E.styles.get(Xa),Bn=v.styleResources.hasOwnProperty(Xi)?v.styleResources[Xi]:void 0;if(Bn!==null){v.styleResources[Xi]=null,Yi||(Yi={precedence:ne(Xa),rules:[],hrefs:[],sheets:new Map},E.styles.set(Xa,Yi));var Sr={state:0,props:k({},h,{"data-precedence":h.precedence,precedence:null})};if(Bn){Bn.length===2&&le(Sr.props,Bn);var Ya=E.preloads.stylesheets.get(Xi);Ya&&0<Ya.length?Ya.length=0:Sr.state=1}Yi.sheets.set(Xi,Sr),$&&$.stylesheets.add(Sr)}else if(Yi){var uo=Yi.sheets.get(Xi);uo&&$&&$.stylesheets.add(uo)}re&&a.push("<!-- -->"),yr=null}else h.onLoad||h.onError?yr=me(a,h):(re&&a.push("<!-- -->"),yr=ha?null:me(E.hoistableChunks,h));return yr;case"script":var vl=he.tagScope&1,da=h.async;if(typeof h.src!="string"||!h.src||!da||typeof da=="function"||typeof da=="symbol"||h.onLoad||h.onError||he.insertionMode===4||vl||h.itemProp!=null)var fo=ze(a,h);else{var kr=h.src;if(h.type==="module")var mn=v.moduleScriptResources,Za=E.preloads.moduleScripts;else mn=v.scriptResources,Za=E.preloads.scripts;var br=mn.hasOwnProperty(kr)?mn[kr]:void 0;if(br!==null){mn[kr]=null;var pa=h;if(br){br.length===2&&(pa=k({},h),le(pa,br));var Er=Za.get(kr);Er&&(Er.length=0)}var bs=[];E.scripts.add(bs),ze(bs,pa)}re&&a.push("<!-- -->"),fo=null}return fo;case"style":var ho=he.tagScope&1,Hr=h.precedence,Mi=h.href,Es=h.nonce;if(he.insertionMode===4||ho||h.itemProp!=null||typeof Hr!="string"||typeof Mi!="string"||Mi===""){a.push(_e("style"));var Zi=null,_l=null,Ja;for(Ja in h)if(H.call(h,Ja)){var po=h[Ja];if(po!=null)switch(Ja){case"children":Zi=po;break;case"dangerouslySetInnerHTML":_l=po;break;default:te(a,Ja,po)}}a.push(">");var Gr=Array.isArray(Zi)?2>Zi.length?Zi[0]:null:Zi;typeof Gr!="function"&&typeof Gr!="symbol"&&Gr!==null&&Gr!==void 0&&a.push((""+Gr).replace(we,ke)),ge(a,_l,Zi),a.push(Ie("style"));var go=null}else{var ar=E.styles.get(Hr);if((v.styleResources.hasOwnProperty(Mi)?v.styleResources[Mi]:void 0)!==null){v.styleResources[Mi]=null,ar||(ar={precedence:ne(Hr),rules:[],hrefs:[],sheets:new Map},E.styles.set(Hr,ar));var Ts=E.nonce.style;if(!Ts||Ts===Es){ar.hrefs.push(ne(Mi));var xl=ar.rules,Ka=null,Ac=null,Qa;for(Qa in h)if(H.call(h,Qa)){var mo=h[Qa];if(mo!=null)switch(Qa){case"children":Ka=mo;break;case"dangerouslySetInnerHTML":Ac=mo}}var ga=Array.isArray(Ka)?2>Ka.length?Ka[0]:null:Ka;typeof ga!="function"&&typeof ga!="symbol"&&ga!==null&&ga!==void 0&&xl.push((""+ga).replace(we,ke)),ge(xl,Ac,Ka)}}ar&&$&&$.styles.add(ar),re&&a.push("<!-- -->"),go=void 0}return go;case"meta":var Ml=he.tagScope&1,qa=he.tagScope&4;if(he.insertionMode===4||Ml||h.itemProp!=null)var vo=it(a,h,"meta",he);else re&&a.push("<!-- -->"),vo=qa?null:typeof h.charSet=="string"?it(E.charsetChunks,h,"meta",he):h.name==="viewport"?it(E.viewportChunks,h,"meta",he):it(E.hoistableChunks,h,"meta",he);return vo;case"listing":case"pre":a.push(_e(l));var _o=null,ja=null,ma;for(ma in h)if(H.call(h,ma)){var Vr=h[ma];if(Vr!=null)switch(ma){case"children":_o=Vr;break;case"dangerouslySetInnerHTML":ja=Vr;break;default:te(a,ma,Vr)}}if(Ft(a,he),a.push(">"),ja!=null){if(_o!=null)throw Error(t(60));if(typeof ja!="object"||!("__html"in ja))throw Error(t(61));var Tr=ja.__html;Tr!=null&&(typeof Tr=="string"&&0<Tr.length&&Tr[0]===`
`?a.push(`
`,Tr):a.push(""+Tr))}return typeof _o=="string"&&_o[0]===`
`&&a.push(`
`),_o;case"img":var wu=he.tagScope&3,ei=h.src,r=h.srcSet;if(!(h.loading==="lazy"||!ei&&!r||typeof ei!="string"&&ei!=null||typeof r!="string"&&r!=null||h.fetchPriority==="low"||wu)&&(typeof ei!="string"||ei[4]!==":"||ei[0]!=="d"&&ei[0]!=="D"||ei[1]!=="a"&&ei[1]!=="A"||ei[2]!=="t"&&ei[2]!=="T"||ei[3]!=="a"&&ei[3]!=="A")&&(typeof r!="string"||r[4]!==":"||r[0]!=="d"&&r[0]!=="D"||r[1]!=="a"&&r[1]!=="A"||r[2]!=="t"&&r[2]!=="T"||r[3]!=="a"&&r[3]!=="A")){$!==null&&he.tagScope&64&&($.suspenseyImages=!0);var s=typeof h.sizes=="string"?h.sizes:void 0,f=r?r+`
`+(s||""):ei,m=E.preloads.images,b=m.get(f);if(b)(h.fetchPriority==="high"||10>E.highImagePreloads.size)&&(m.delete(f),E.highImagePreloads.add(b));else if(!v.imageResources.hasOwnProperty(f)){v.imageResources[f]=ye;var I=h.crossOrigin,X=typeof I=="string"?I==="use-credentials"?I:"":void 0,J=E.headers,j;J&&0<J.remainingCapacity&&typeof h.srcSet!="string"&&(h.fetchPriority==="high"||500>J.highImagePreloads.length)&&(j=ce(ei,"image",{imageSrcSet:h.srcSet,imageSizes:h.sizes,crossOrigin:X,integrity:h.integrity,nonce:h.nonce,type:h.type,fetchPriority:h.fetchPriority,referrerPolicy:h.referrerPolicy}),0<=(J.remainingCapacity-=j.length+2))?(E.resets.image[f]=ye,J.highImagePreloads&&(J.highImagePreloads+=", "),J.highImagePreloads+=j):(b=[],me(b,{rel:"preload",as:"image",href:r?void 0:ei,imageSrcSet:r,imageSizes:s,crossOrigin:X,integrity:h.integrity,type:h.type,fetchPriority:h.fetchPriority,referrerPolicy:h.referrerPolicy}),h.fetchPriority==="high"||10>E.highImagePreloads.size?E.highImagePreloads.add(b):(E.bulkPreloads.add(b),m.set(f,b)))}}return it(a,h,"img",he);case"base":case"area":case"br":case"col":case"embed":case"hr":case"keygen":case"param":case"source":case"track":case"wbr":return it(a,h,l,he);case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":break;case"head":if(2>he.insertionMode){var ee=N||E.preamble;if(ee.headChunks)throw Error(t(545,"`<head>`"));N!==null&&a.push("<!--head-->"),ee.headChunks=[];var Te=at(ee.headChunks,h,"head",he)}else Te=de(a,h,"head",he);return Te;case"body":if(2>he.insertionMode){var Ce=N||E.preamble;if(Ce.bodyChunks)throw Error(t(545,"`<body>`"));N!==null&&a.push("<!--body-->"),Ce.bodyChunks=[];var Ve=at(Ce.bodyChunks,h,"body",he)}else Ve=de(a,h,"body",he);return Ve;case"html":if(he.insertionMode===0){var Xe=N||E.preamble;if(Xe.htmlChunks)throw Error(t(545,"`<html>`"));N!==null&&a.push("<!--html-->"),Xe.htmlChunks=[""];var nt=at(Xe.htmlChunks,h,"html",he)}else nt=de(a,h,"html",he);return nt;default:if(l.indexOf("-")!==-1){a.push(_e(l));var St=null,Tn=null,Xn;for(Xn in h)if(H.call(h,Xn)){var nn=h[Xn];if(nn!=null){var yi=Xn;switch(Xn){case"children":St=nn;break;case"dangerouslySetInnerHTML":Tn=nn;break;case"style":Rt(a,nn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"ref":break;case"className":yi="class";default:if(ue(Xn)&&typeof nn!="function"&&typeof nn!="symbol"&&nn!==!1){if(nn===!0)nn="";else if(typeof nn=="object")continue;a.push(" ",yi,'="',ne(nn),'"')}}}}return Ft(a,he),a.push(">"),ge(a,Tn,St),St}}return de(a,h,l,he)}var Le=new Map;function Ie(a){var l=Le.get(a);return l===void 0&&(l="</"+a+">",Le.set(a,l)),l}function pe(a,l){a=a.preamble,a.htmlChunks===null&&l.htmlChunks&&(a.htmlChunks=l.htmlChunks),a.headChunks===null&&l.headChunks&&(a.headChunks=l.headChunks),a.bodyChunks===null&&l.bodyChunks&&(a.bodyChunks=l.bodyChunks)}function Ge(a,l){l=l.bootstrapChunks;for(var h=0;h<l.length-1;h++)a.push(l[h]);return h<l.length?(h=l[h],l.length=0,a.push(h)):!0}function Oe(a,l,h){if(a.push('<!--$?--><template id="'),h===null)throw Error(t(395));return a.push(l.boundaryPrefix),l=h.toString(16),a.push(l),a.push('"></template>')}function yt(a,l,h,v){switch(h.insertionMode){case 0:case 1:case 3:case 2:return a.push('<div hidden id="'),a.push(l.segmentPrefix),l=v.toString(16),a.push(l),a.push('">');case 4:return a.push('<svg aria-hidden="true" style="display:none" id="'),a.push(l.segmentPrefix),l=v.toString(16),a.push(l),a.push('">');case 5:return a.push('<math aria-hidden="true" style="display:none" id="'),a.push(l.segmentPrefix),l=v.toString(16),a.push(l),a.push('">');case 6:return a.push('<table hidden id="'),a.push(l.segmentPrefix),l=v.toString(16),a.push(l),a.push('">');case 7:return a.push('<table hidden><tbody id="'),a.push(l.segmentPrefix),l=v.toString(16),a.push(l),a.push('">');case 8:return a.push('<table hidden><tr id="'),a.push(l.segmentPrefix),l=v.toString(16),a.push(l),a.push('">');case 9:return a.push('<table hidden><colgroup id="'),a.push(l.segmentPrefix),l=v.toString(16),a.push(l),a.push('">');default:throw Error(t(397))}}function Ot(a,l){switch(l.insertionMode){case 0:case 1:case 3:case 2:return a.push("</div>");case 4:return a.push("</svg>");case 5:return a.push("</math>");case 6:return a.push("</table>");case 7:return a.push("</tbody></table>");case 8:return a.push("</tr></table>");case 9:return a.push("</colgroup></table>");default:throw Error(t(397))}}var $t=/[<\u2028\u2029]/g;function Pn(a){return JSON.stringify(a).replace($t,function(l){switch(l){case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}var vs=/[&><\u2028\u2029]/g;function er(a){return JSON.stringify(a).replace(vs,function(l){switch(l){case"&":return"\\u0026";case">":return"\\u003e";case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}var fr=!1,ta=!0;function Jn(a){var l=a.rules,h=a.hrefs,v=0;if(h.length){for(this.push(Ke.startInlineStyle),this.push(' media="not all" data-precedence="'),this.push(a.precedence),this.push('" data-href="');v<h.length-1;v++)this.push(h[v]),this.push(" ");for(this.push(h[v]),this.push('">'),v=0;v<l.length;v++)this.push(l[v]);ta=this.push("</style>"),fr=!0,l.length=0,h.length=0}}function ai(a){return a.state!==2?fr=!0:!1}function ln(a,l,h){return fr=!1,ta=!0,Ke=h,l.styles.forEach(Jn,a),Ke=null,l.stylesheets.forEach(ai),fr&&(h.stylesToHoist=!0),ta}function Ln(a){for(var l=0;l<a.length;l++)this.push(a[l]);a.length=0}var gi=[];function _n(a){me(gi,a.props);for(var l=0;l<gi.length;l++)this.push(gi[l]);gi.length=0,a.state=2}function Ws(a){var l=0<a.sheets.size;a.sheets.forEach(_n,this),a.sheets.clear();var h=a.rules,v=a.hrefs;if(!l||v.length){if(this.push(Ke.startInlineStyle),this.push(' data-precedence="'),this.push(a.precedence),a=0,v.length){for(this.push('" data-href="');a<v.length-1;a++)this.push(v[a]),this.push(" ");this.push(v[a])}for(this.push('">'),a=0;a<h.length;a++)this.push(h[a]);this.push("</style>"),h.length=0,v.length=0}}function La(a){if(a.state===0){a.state=1;var l=a.props;for(me(gi,{rel:"preload",as:"style",href:a.props.href,crossOrigin:l.crossOrigin,fetchPriority:l.fetchPriority,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy}),a=0;a<gi.length;a++)this.push(gi[a]);gi.length=0}}function _s(a){a.sheets.forEach(La,this),a.sheets.clear()}function hr(a,l){(l.instructions&32)===0&&(l.instructions|=32,a.push(' id="',ne("_"+l.idPrefix+"R_"),'"'))}function Xs(a,l){a.push("[");var h="[";l.stylesheets.forEach(function(v){if(v.state!==2)if(v.state===3)a.push(h),v=er(""+v.props.href),a.push(v),a.push("]"),h=",[";else{a.push(h);var E=v.props["data-precedence"],N=v.props,$=rt(""+v.props.href);$=er($),a.push($),E=""+E,a.push(","),E=er(E),a.push(E);for(var he in N)if(H.call(N,he)&&(E=N[he],E!=null))switch(he){case"href":case"rel":case"precedence":case"data-precedence":break;case"children":case"dangerouslySetInnerHTML":throw Error(t(399,"link"));default:Ys(a,he,E)}a.push("]"),h=",[",v.state=3}}),a.push("]")}function Ys(a,l,h){var v=l.toLowerCase();switch(typeof h){case"function":case"symbol":return}switch(l){case"innerHTML":case"dangerouslySetInnerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":case"style":case"ref":return;case"className":v="class",l=""+h;break;case"hidden":if(h===!1)return;l="";break;case"src":case"href":h=rt(h),l=""+h;break;default:if(2<l.length&&(l[0]==="o"||l[0]==="O")&&(l[1]==="n"||l[1]==="N")||!ue(l))return;l=""+h}a.push(","),v=er(v),a.push(v),a.push(","),v=er(l),a.push(v)}function Ht(){return{styles:new Set,stylesheets:new Set,suspenseyImages:!1}}function pn(a){var l=Dn||null;if(l){var h=l.resumableState,v=l.renderState;if(typeof a=="string"&&a){if(!h.dnsResources.hasOwnProperty(a)){h.dnsResources[a]=null,h=v.headers;var E,N;(N=h&&0<h.remainingCapacity)&&(N=(E="<"+(""+a).replace(Ne,je)+">; rel=dns-prefetch",0<=(h.remainingCapacity-=E.length+2))),N?(v.resets.dns[a]=null,h.preconnects&&(h.preconnects+=", "),h.preconnects+=E):(E=[],me(E,{href:a,rel:"dns-prefetch"}),v.preconnects.add(E))}aa(l)}}else Me.D(a)}function Ia(a,l){var h=Dn||null;if(h){var v=h.resumableState,E=h.renderState;if(typeof a=="string"&&a){var N=l==="use-credentials"?"credentials":typeof l=="string"?"anonymous":"default";if(!v.connectResources[N].hasOwnProperty(a)){v.connectResources[N][a]=null,v=E.headers;var $,he;if(he=v&&0<v.remainingCapacity){if(he="<"+(""+a).replace(Ne,je)+">; rel=preconnect",typeof l=="string"){var re=(""+l).replace(We,$e);he+='; crossorigin="'+re+'"'}he=($=he,0<=(v.remainingCapacity-=$.length+2))}he?(E.resets.connect[N][a]=null,v.preconnects&&(v.preconnects+=", "),v.preconnects+=$):(N=[],me(N,{rel:"preconnect",href:a,crossOrigin:l}),E.preconnects.add(N))}aa(h)}}else Me.C(a,l)}function si(a,l,h){var v=Dn||null;if(v){var E=v.resumableState,N=v.renderState;if(l&&a){switch(l){case"image":if(h)var $=h.imageSrcSet,he=h.imageSizes,re=h.fetchPriority;var se=$?$+`
`+(he||""):a;if(E.imageResources.hasOwnProperty(se))return;E.imageResources[se]=ye,E=N.headers;var De;E&&0<E.remainingCapacity&&typeof $!="string"&&re==="high"&&(De=ce(a,l,h),0<=(E.remainingCapacity-=De.length+2))?(N.resets.image[se]=ye,E.highImagePreloads&&(E.highImagePreloads+=", "),E.highImagePreloads+=De):(E=[],me(E,k({rel:"preload",href:$?void 0:a,as:l},h)),re==="high"?N.highImagePreloads.add(E):(N.bulkPreloads.add(E),N.preloads.images.set(se,E)));break;case"style":if(E.styleResources.hasOwnProperty(a))return;$=[],me($,k({rel:"preload",href:a,as:l},h)),E.styleResources[a]=!h||typeof h.crossOrigin!="string"&&typeof h.integrity!="string"?ye:[h.crossOrigin,h.integrity],N.preloads.stylesheets.set(a,$),N.bulkPreloads.add($);break;case"script":if(E.scriptResources.hasOwnProperty(a))return;$=[],N.preloads.scripts.set(a,$),N.bulkPreloads.add($),me($,k({rel:"preload",href:a,as:l},h)),E.scriptResources[a]=!h||typeof h.crossOrigin!="string"&&typeof h.integrity!="string"?ye:[h.crossOrigin,h.integrity];break;default:if(E.unknownResources.hasOwnProperty(l)){if($=E.unknownResources[l],$.hasOwnProperty(a))return}else $={},E.unknownResources[l]=$;$[a]=ye,(E=N.headers)&&0<E.remainingCapacity&&l==="font"&&(se=ce(a,l,h),0<=(E.remainingCapacity-=se.length+2))?(N.resets.font[a]=ye,E.fontPreloads&&(E.fontPreloads+=", "),E.fontPreloads+=se):(E=[],a=k({rel:"preload",href:a,as:l},h),me(E,a),l)==="font"?N.fontPreloads.add(E):N.bulkPreloads.add(E)}aa(v)}}else Me.L(a,l,h)}function Zo(a,l){var h=Dn||null;if(h){var v=h.resumableState,E=h.renderState;if(a){var N=l&&typeof l.as=="string"?l.as:"script";switch(N){case"script":if(v.moduleScriptResources.hasOwnProperty(a))return;N=[],v.moduleScriptResources[a]=!l||typeof l.crossOrigin!="string"&&typeof l.integrity!="string"?ye:[l.crossOrigin,l.integrity],E.preloads.moduleScripts.set(a,N);break;default:if(v.moduleUnknownResources.hasOwnProperty(N)){var $=v.moduleUnknownResources[N];if($.hasOwnProperty(a))return}else $={},v.moduleUnknownResources[N]=$;N=[],$[a]=ye}me(N,k({rel:"modulepreload",href:a},l)),E.bulkPreloads.add(N),aa(h)}}else Me.m(a,l)}function L(a,l,h){var v=Dn||null;if(v){var E=v.resumableState,N=v.renderState;if(a){l=l||"default";var $=N.styles.get(l),he=E.styleResources.hasOwnProperty(a)?E.styleResources[a]:void 0;he!==null&&(E.styleResources[a]=null,$||($={precedence:ne(l),rules:[],hrefs:[],sheets:new Map},N.styles.set(l,$)),l={state:0,props:k({rel:"stylesheet",href:a,"data-precedence":l},h)},he&&(he.length===2&&le(l.props,he),(N=N.preloads.stylesheets.get(a))&&0<N.length?N.length=0:l.state=1),$.sheets.set(a,l),aa(v))}}else Me.S(a,l,h)}function Q(a,l){var h=Dn||null;if(h){var v=h.resumableState,E=h.renderState;if(a){var N=v.scriptResources.hasOwnProperty(a)?v.scriptResources[a]:void 0;N!==null&&(v.scriptResources[a]=null,l=k({src:a,async:!0},l),N&&(N.length===2&&le(l,N),a=E.preloads.scripts.get(a))&&(a.length=0),a=[],E.scripts.add(a),ze(a,l),aa(h))}}else Me.X(a,l)}function ve(a,l){var h=Dn||null;if(h){var v=h.resumableState,E=h.renderState;if(a){var N=v.moduleScriptResources.hasOwnProperty(a)?v.moduleScriptResources[a]:void 0;N!==null&&(v.moduleScriptResources[a]=null,l=k({src:a,type:"module",async:!0},l),N&&(N.length===2&&le(l,N),a=E.preloads.moduleScripts.get(a))&&(a.length=0),a=[],E.scripts.add(a),ze(a,l),aa(h))}}else Me.M(a,l)}function le(a,l){a.crossOrigin==null&&(a.crossOrigin=l[0]),a.integrity==null&&(a.integrity=l[1])}function ce(a,l,h){a=(""+a).replace(Ne,je),l=(""+l).replace(We,$e),l="<"+a+'>; rel=preload; as="'+l+'"';for(var v in h)H.call(h,v)&&(a=h[v],typeof a=="string"&&(l+="; "+v.toLowerCase()+'="'+(""+a).replace(We,$e)+'"'));return l}var Ne=/[<>\r\n]/g;function je(a){switch(a){case"<":return"%3C";case">":return"%3E";case`
`:return"%0A";case"\r":return"%0D";default:throw Error("escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}}var We=/["';,\r\n]/g;function $e(a){switch(a){case'"':return"%22";case"'":return"%27";case";":return"%3B";case",":return"%2C";case`
`:return"%0A";case"\r":return"%0D";default:throw Error("escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}}function ot(a){this.styles.add(a)}function bt(a){this.stylesheets.add(a)}function Mt(a,l){l.styles.forEach(ot,a),l.stylesheets.forEach(bt,a),l.suspenseyImages&&(a.suspenseyImages=!0)}function st(a,l){var h=a.idPrefix,v=[],E=a.bootstrapScriptContent,N=a.bootstrapScripts,$=a.bootstrapModules;E!==void 0&&(v.push("<script"),hr(v,a),v.push(">",(""+E).replace(ut,Ye),"<\/script>")),E=h+"P:";var he=h+"S:";h+="B:";var re=new Set,se=new Set,De=new Set,Ue=new Map,Qe=new Set,Je=new Set,tt=new Set,ft={images:new Map,stylesheets:new Map,scripts:new Map,moduleScripts:new Map};if(N!==void 0)for(var qt=0;qt<N.length;qt++){var zt=N[qt],an,En=void 0,dt=void 0,wt={rel:"preload",as:"script",fetchPriority:"low",nonce:void 0};typeof zt=="string"?wt.href=an=zt:(wt.href=an=zt.src,wt.integrity=dt=typeof zt.integrity=="string"?zt.integrity:void 0,wt.crossOrigin=En=typeof zt=="string"||zt.crossOrigin==null?void 0:zt.crossOrigin==="use-credentials"?"use-credentials":""),zt=a;var kt=an;zt.scriptResources[kt]=null,zt.moduleScriptResources[kt]=null,zt=[],me(zt,wt),Qe.add(zt),v.push('<script src="',ne(an),'"'),typeof dt=="string"&&v.push(' integrity="',ne(dt),'"'),typeof En=="string"&&v.push(' crossorigin="',ne(En),'"'),hr(v,a),v.push(' async=""><\/script>')}if($!==void 0)for(N=0;N<$.length;N++)wt=$[N],En=an=void 0,dt={rel:"modulepreload",fetchPriority:"low",nonce:void 0},typeof wt=="string"?dt.href=qt=wt:(dt.href=qt=wt.src,dt.integrity=En=typeof wt.integrity=="string"?wt.integrity:void 0,dt.crossOrigin=an=typeof wt=="string"||wt.crossOrigin==null?void 0:wt.crossOrigin==="use-credentials"?"use-credentials":""),wt=a,zt=qt,wt.scriptResources[zt]=null,wt.moduleScriptResources[zt]=null,wt=[],me(wt,dt),Qe.add(wt),v.push('<script type="module" src="',ne(qt),'"'),typeof En=="string"&&v.push(' integrity="',ne(En),'"'),typeof an=="string"&&v.push(' crossorigin="',ne(an),'"'),hr(v,a),v.push(' async=""><\/script>');return{placeholderPrefix:E,segmentPrefix:he,boundaryPrefix:h,startInlineScript:"<script",startInlineStyle:"<style",preamble:{htmlChunks:null,headChunks:null,bodyChunks:null},externalRuntimeScript:null,bootstrapChunks:v,importMapChunks:[],onHeaders:void 0,headers:null,resets:{font:{},dns:{},connect:{default:{},anonymous:{},credentials:{}},image:{},style:{}},charsetChunks:[],viewportChunks:[],hoistableChunks:[],preconnects:re,fontPreloads:se,highImagePreloads:De,styles:Ue,bootstrapScripts:Qe,scripts:Je,bulkPreloads:tt,preloads:ft,nonce:{script:void 0,style:void 0},stylesToHoist:!1,generateStaticMarkup:l}}function Bt(a,l,h,v){return h.generateStaticMarkup?(a.push(ne(l)),!1):(l===""?a=v:(v&&a.push("<!-- -->"),a.push(ne(l)),a=!0),a)}function rn(a,l,h,v){l.generateStaticMarkup||h&&v&&a.push("<!-- -->")}var Qt=Function.prototype.bind,Xt=Symbol.for("react.client.reference");function In(a){if(a==null)return null;if(typeof a=="function")return a.$$typeof===Xt?null:a.displayName||a.name||null;if(typeof a=="string")return a;switch(a){case c:return"Fragment";case d:return"Profiler";case u:return"StrictMode";case T:return"Suspense";case _:return"SuspenseList";case w:return"Activity";case B:return"ViewTransition"}if(typeof a=="object")switch(a.$$typeof){case o:return"Portal";case g:return a.displayName||"Context";case p:return(a._context.displayName||"Context")+".Consumer";case M:var l=a.render;return a=a.displayName,a||(a=l.displayName||l.name||"",a=a!==""?"ForwardRef("+a+")":"ForwardRef"),a;case x:return l=a.displayName||null,l!==null?l:In(a.type)||"Memo";case R:l=a._payload,a=a._init;try{return In(a(l))}catch{}}return null}var et={},Tt=null;function Pt(a,l){if(a!==l){a.context._currentValue2=a.parentValue,a=a.parent;var h=l.parent;if(a===null){if(h!==null)throw Error(t(401))}else{if(h===null)throw Error(t(401));Pt(a,h)}l.context._currentValue2=l.value}}function oi(a){a.context._currentValue2=a.parentValue,a=a.parent,a!==null&&oi(a)}function mi(a){var l=a.parent;l!==null&&mi(l),a.context._currentValue2=a.value}function Kn(a,l){if(a.context._currentValue2=a.parentValue,a=a.parent,a===null)throw Error(t(402));a.depth===l.depth?Pt(a,l):Kn(a,l)}function dr(a,l){var h=l.parent;if(h===null)throw Error(t(402));a.depth===h.depth?Pt(a,h):dr(a,h),l.context._currentValue2=l.value}function Lt(a){var l=Tt;l!==a&&(l===null?mi(a):a===null?oi(l):l.depth===a.depth?Pt(l,a):l.depth>a.depth?Kn(l,a):dr(l,a),Tt=a)}var xn={enqueueSetState:function(a,l){a=a._reactInternals,a.queue!==null&&a.queue.push(l)},enqueueReplaceState:function(a,l){a=a._reactInternals,a.replace=!0,a.queue=[l]},enqueueForceUpdate:function(){}},pr={id:1,overflow:""};function en(a){var l=a.overflow;return a=a.id,(a&~(1<<32-tr(a)-1)).toString(32)+l}function Qn(a,l,h){var v=a.id;a=a.overflow;var E=32-tr(v)-1;v&=~(1<<E),h+=1;var N=32-tr(l)+E;if(30<N){var $=E-E%5;return N=(v&(1<<$)-1).toString(32),v>>=$,E-=$,{id:1<<32-tr(l)+E|h<<E|v,overflow:N+a}}return{id:1<<N|h<<E|v,overflow:a}}var tr=Math.clz32?Math.clz32:If,Jo=Math.log,Lf=Math.LN2;function If(a){return a>>>=0,a===0?32:31-(Jo(a)/Lf|0)|0}function vi(){}var li=Error(t(460));function Df(a,l,h){switch(h=a[h],h===void 0?a.push(l):h!==l&&(l.then(vi,vi),l=h),l.status){case"fulfilled":return l.value;case"rejected":throw a=l.reason,a===void 0&&!("reason"in l)?Error(t(600)):a;default:switch(typeof l.status=="string"?l.then(vi,vi):(a=l,a.status="pending",a.then(function(v){if(l.status==="pending"){var E=l;E.status="fulfilled",E.value=v}},function(v){if(l.status==="pending"){var E=l;E.status="rejected",E.reason=v}})),l.status){case"fulfilled":return l.value;case"rejected":throw l.reason}throw Ko=l,li}}var Ko=null;function Qo(){if(Ko===null)throw Error(t(459));var a=Ko;return Ko=null,a}function Nf(a,l){return a===l&&(a!==0||1/a===1/l)||a!==a&&l!==l}var su=typeof Object.is=="function"?Object.is:Nf,Lr=null,cc=null,uc=null,fc=null,qo=null,hn=null,Zs=!1,jo=!1,Js=0,Ks=0,Qs=-1,$o=0,xs=null;function ou(a){if(a=a._reason,typeof a=="function")try{var l=a()}catch{l="The reason for browser-only rendering could not be determined because its initializer threw."}else l=a;return l=Error(t(603),a===void 0?void 0:{cause:l}),Object.defineProperty(l,P,{value:!0}),l}function el(a){return typeof a!="object"||a===null?!1:a[P]===!0}function hc(a){var l=Error(t(604),H.call(a,"cause")?{cause:a.cause}:void 0);if(a=a.stack,a!==void 0){var h=a.indexOf(`
`);l.stack=l.name+": "+l.message+(h===-1?"":a.slice(h))}else l.stack=void 0;return l}var na=null,tl=0;function Ir(){if(Lr===null)throw Error(t(321));return Lr}function lu(){if(0<tl)throw Error(t(312));return{memoizedState:null,queue:null,next:null}}function dc(){return hn===null?qo===null?(Zs=!1,qo=hn=lu()):(Zs=!0,hn=qo):hn.next===null?(Zs=!1,hn=hn.next=lu()):(Zs=!0,hn=hn.next),hn}function ia(){var a=xs;return xs=null,a}function qs(){fc=uc=cc=Lr=null,jo=!1,qo=null,tl=0,hn=na=null}function cu(a,l){return typeof l=="function"?l(a):l}function uu(a,l,h){if(Lr=Ir(),hn=dc(),Zs){var v=hn.queue;if(l=v.dispatch,na!==null&&(h=na.get(v),h!==void 0)){na.delete(v),v=hn.memoizedState;do v=a(v,h.action),h=h.next;while(h!==null);return hn.memoizedState=v,[v,l]}return[hn.memoizedState,l]}return a=a===cu?typeof l=="function"?l():l:h!==void 0?h(l):l,hn.memoizedState=a,a=hn.queue={last:null,dispatch:null},a=a.dispatch=Uf.bind(null,Lr,a),[hn.memoizedState,a]}function fu(a,l){if(Lr=Ir(),hn=dc(),l=l===void 0?null:l,hn!==null){var h=hn.memoizedState;if(h!==null&&l!==null){var v=h[1];e:if(v===null)v=!1;else{for(var E=0;E<v.length&&E<l.length;E++)if(!su(l[E],v[E])){v=!1;break e}v=!0}if(v)return h[0]}}return a=a(),hn.memoizedState=[a,l],a}function Uf(a,l,h){if(25<=tl)throw Error(t(301));if(a===Lr)if(jo=!0,a={action:h,next:null},na===null&&(na=new Map),h=na.get(l),h===void 0)na.set(l,a);else{for(l=h;l.next!==null;)l=l.next;l.next=a}}function hu(){throw Error(t(440))}function du(){throw Error(t(394))}function Ff(){throw Error(t(479))}function pu(a,l,h){Ir();var v=Ks++,E=uc;if(typeof a.$$FORM_ACTION=="function"){var N=null,$=fc;E=E.formState;var he=a.$$IS_SIGNATURE_EQUAL;if(E!==null&&typeof he=="function"){var re=E[1];he.call(a,E[2],E[3])&&(N=h!==void 0?"p"+h:"k"+C(JSON.stringify([$,null,v]),0),re===N&&(Qs=v,l=E[0]))}var se=a.bind(null,l);return a=function(Ue){se(Ue)},typeof se.$$FORM_ACTION=="function"&&(a.$$FORM_ACTION=function(Ue){Ue=se.$$FORM_ACTION(Ue),h!==void 0&&(h+="",Ue.action=h);var Qe=Ue.data;return Qe&&(N===null&&(N=h!==void 0?"p"+h:"k"+C(JSON.stringify([$,null,v]),0)),Qe.append("$ACTION_KEY",N)),Ue}),[l,a,!1]}var De=a.bind(null,l);return[l,function(Ue){De(Ue)},!1]}function gu(a){var l=$o;return $o+=1,xs===null&&(xs=[]),Df(xs,a,l)}function Of(){throw Error(t(393))}var mu={readContext:function(a){return a._currentValue2},use:function(a){if(a!==null&&typeof a=="object"){if(typeof a.then=="function")return gu(a);if(a.$$typeof===P)throw ou(a);if(a.$$typeof===g)return a._currentValue2}throw Error(t(438,String(a)))},useContext:function(a){return Ir(),a._currentValue2},useMemo:fu,useReducer:uu,useRef:function(a){Lr=Ir(),hn=dc();var l=hn.memoizedState;return l===null?(a={current:a},hn.memoizedState=a):l},useState:function(a){return uu(cu,a)},useInsertionEffect:vi,useLayoutEffect:vi,useCallback:function(a,l){return fu(function(){return a},l)},useImperativeHandle:vi,useEffect:vi,useDebugValue:vi,useDeferredValue:function(a,l){return Ir(),l!==void 0?l:a},useTransition:function(){return Ir(),[!1,du]},useId:function(){var a=en(cc.treeContext),l=nl;if(l===null)throw Error(t(404));var h=Js++;return Jt(l,a,h)},useSyncExternalStore:function(a,l,h){if(h===void 0)throw Error(t(407));return h()},useOptimistic:function(a){return Ir(),[a,Ff]},useActionState:pu,useFormState:pu,useHostTransitionStatus:function(){return Ir(),Ct},useMemoCache:function(a){for(var l=Array(a),h=0;h<a;h++)l[h]=O;return l},useCacheRefresh:function(){return Of},useEffectEvent:function(){return hu}},nl=null,Bf={getCacheForType:function(){throw Error(t(248))},cacheSignal:function(){throw Error(t(248))}},pc,vu;function Da(a){if(pc===void 0)try{throw Error()}catch(h){var l=h.stack.trim().match(/\n( *(at )?)/);pc=l&&l[1]||"",vu=-1<h.stack.indexOf(`
    at`)?" (<anonymous>)":-1<h.stack.indexOf("@")?"@unknown:0:0":""}return`
`+pc+a+vu}var gc=!1;function il(a,l){if(!a||gc)return"";gc=!0;var h=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var v={DetermineComponentFrameRoot:function(){try{if(l){var Ue=function(){throw Error()};if(Object.defineProperty(Ue.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ue,[])}catch(tt){var Qe=tt}Reflect.construct(a,[],Ue)}else{try{Ue.call()}catch(tt){Qe=tt}Ue=!1;try{var Je=Object.getOwnPropertyDescriptor(a.prototype,"props");Object.defineProperty(a.prototype,"props",{configurable:!0,set:function(){throw Error()}}),Ue=!0,new a}finally{Ue&&(Je!==void 0?Object.defineProperty(a.prototype,"props",Je):delete a.prototype.props)}}}else{try{throw Error()}catch(tt){Qe=tt}(Ue=a())&&typeof Ue.catch=="function"&&Ue.catch(function(){})}}catch(tt){if(tt&&Qe&&typeof tt.stack=="string")return[tt.stack,Qe.stack]}return[null,null]}};v.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var E=Object.getOwnPropertyDescriptor(v.DetermineComponentFrameRoot,"name");E&&E.configurable&&Object.defineProperty(v.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var N=v.DetermineComponentFrameRoot(),$=N[0],he=N[1];if($&&he){var re=$.split(`
`),se=he.split(`
`);for(E=v=0;v<re.length&&!re[v].includes("DetermineComponentFrameRoot");)v++;for(;E<se.length&&!se[E].includes("DetermineComponentFrameRoot");)E++;if(v===re.length||E===se.length)for(v=re.length-1,E=se.length-1;1<=v&&0<=E&&re[v]!==se[E];)E--;for(;1<=v&&0<=E;v--,E--)if(re[v]!==se[E]){if(v!==1||E!==1)do if(v--,E--,0>E||re[v]!==se[E]){var De=`
`+re[v].replace(" at new "," at ");return a.displayName&&De.includes("<anonymous>")&&(De=De.replace("<anonymous>",a.displayName)),De}while(1<=v&&0<=E);break}}}finally{gc=!1,Error.prepareStackTrace=h}return(h=a?a.displayName||a.name:"")?Da(h):""}function _u(a){if(typeof a=="string")return Da(a);if(typeof a=="function")return a.prototype&&a.prototype.isReactComponent?il(a,!0):il(a,!1);if(typeof a=="object"&&a!==null){switch(a.$$typeof){case M:return il(a.render,!1);case x:return il(a.type,!1);case R:var l=a,h=l._payload;l=l._init;try{a=l(h)}catch{return Da("Lazy")}return _u(a)}if(typeof a.name=="string"){e:{h=a.name,l=a.env;var v=a.debugLocation;if(v!=null&&(a=Error.prepareStackTrace,Error.prepareStackTrace=void 0,v=v.stack,Error.prepareStackTrace=a,v.startsWith(`Error: react-stack-top-frame
`)&&(v=v.slice(29)),a=v.indexOf(`
`),a!==-1&&(v=v.slice(a+1)),a=v.indexOf("react_stack_bottom_frame"),a!==-1&&(a=v.lastIndexOf(`
`,a)),a=a!==-1?v=v.slice(0,a):"",v=a.lastIndexOf(`
`),a=v===-1?a:a.slice(v+1),a.indexOf(h)!==-1)){h=`
`+a;break e}h=Da(h+(l?" ["+l+"]":""))}return h}}switch(a){case _:return Da("SuspenseList");case T:return Da("Suspense");case B:return Da("ViewTransition")}return""}function Ms(a,l){return(500<l.byteSize||l.defer)&&l.preamble===null}function zf(a){if(typeof a=="object"&&a!==null&&typeof a.environmentName=="string"){var l=a.environmentName;a=[a].slice(0),typeof a[0]=="string"?a.splice(0,1,"[%s] "+a[0]," "+l+" "):a.splice(0,0,"[%s]"," "+l+" "),a.unshift(console),l=Qt.apply(console.error,a),l()}else console.error(a);return null}function kf(a,l,h,v,E,N,$,he,re,se,De){var Ue=new Set;this.destination=null,this.flushScheduled=!1,this.resumableState=a,this.renderState=l,this.rootFormatContext=h,this.progressiveChunkSize=v===void 0?12800:v,this.status=10,this.fatalError=null,this.aborted=!1,this.pendingRootTasks=this.allPendingTasks=this.nextSegmentId=0,this.completedPreambleSegments=this.completedRootSegment=null,this.byteSize=0,this.abortableTasks=Ue,this.pingedTasks=[],this.currentTask=null,this.clientRenderedBoundaries=[],this.completedBoundaries=[],this.partialBoundaries=[],this.postponedState=this.trackedPostpones=null,this.onError=E===void 0?zf:E,this.onBrowserBailout=N===void 0?vi:N,this.onAllReady=$===void 0?vi:$,this.onShellReady=he===void 0?vi:he,this.onShellError=re===void 0?vi:re,this.onFatalError=se===void 0?vi:se,this.renderLifetimeController=null,this.formState=De===void 0?null:De}function Hf(a,l,h,v,E,N,$,he,re,se,De,Ue){return l=new kf(l,h,v,E,N,$,he,re,se,De,Ue),h=gr(l,0,null,v,!1,!1),h.parentFlushed=!0,a=al(l,null,a,-1,null,h,null,null,l.abortableTasks,null,v,null,pr,null,null),Na(a),l.pingedTasks.push(a),l}var Dn=null;function rl(a,l){a.pingedTasks.push(l),a.pingedTasks.length===1&&(a.flushScheduled=a.destination!==null,no(a))}function mc(a,l,h,v,E){return h={status:0,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,row:l,completedSegments:[],byteSize:0,defer:E,fallbackAbortableTasks:h,errorDigest:null,contentState:Ht(),fallbackState:Ht(),preamble:v,tracked:null},l!==null&&(l.pendingTasks++,v=l.boundaries,v!==null&&(a.allPendingTasks++,h.pendingTasks++,v.push(h)),a=l.inheritedHoistables,a!==null&&Mt(h.contentState,a)),h}function al(a,l,h,v,E,N,$,he,re,se,De,Ue,Qe,Je,tt){a.allPendingTasks++,E===null?a.pendingRootTasks++:E.pendingTasks++,Je!==null&&Je.pendingTasks++;var ft={replay:null,node:h,childIndex:v,ping:{resolve:function(){return rl(a,ft)},reject:function(qt){a.aborted?ft.abortSet.delete(ft)&&Fa(ft,a,qt):rl(a,ft)}},blockedBoundary:E,blockedSegment:N,blockedPreamble:$,hoistableState:he,abortSet:re,keyPath:se,formatContext:De,context:Ue,treeContext:Qe,row:Je,componentStack:tt,thenableState:l};return re.add(ft),ft}function xu(a,l,h,v,E,N,$,he,re,se,De,Ue,Qe,Je){a.allPendingTasks++,N===null?a.pendingRootTasks++:N.pendingTasks++,Qe!==null&&Qe.pendingTasks++,h.pendingTasks++;var tt={replay:h,node:v,childIndex:E,ping:{resolve:function(){return rl(a,tt)},reject:function(ft){a.aborted?tt.abortSet.delete(tt)&&Fa(tt,a,ft):rl(a,tt)}},blockedBoundary:N,blockedSegment:null,blockedPreamble:null,hoistableState:$,abortSet:he,keyPath:re,formatContext:se,context:De,treeContext:Ue,row:Qe,componentStack:Je,thenableState:l};return he.add(tt),tt}function gr(a,l,h,v,E,N){return{status:0,parentFlushed:!1,id:-1,index:l,chunks:[],children:[],preambleChildren:[],parentFormatContext:v,boundary:h,lastPushedText:E,textEmbedded:N}}function Na(a){var l=a.node;typeof l=="object"&&l!==null&&l.$$typeof===n&&(a.componentStack={parent:a.componentStack,type:l.type})}function vc(a){return a===null?null:{parent:a.parent,type:"Suspense Fallback"}}function Ua(a){var l={};return a&&Object.defineProperty(l,"componentStack",{configurable:!0,enumerable:!0,get:function(){try{var h="",v=a;do h+=_u(v.type),v=v.parent;while(v);var E=h}catch(N){E=`
Error generating stack: `+N.message+`
`+N.stack}return Object.defineProperty(l,"componentStack",{value:E}),E}}),l}function zn(a,l,h){if(el(l))return a=a.onBrowserBailout,a(l,h),"";if(a=a.onError,l=a(l,h),l==null||typeof l=="string")return l===""?void 0:l}function qn(a,l){var h=a.onShellError,v=a.onFatalError;a.pendingRootTasks!==0&&h(l),v(l),gl(a),a.destination!==null?(a.status=13,a.destination.destroy(l)):(a.status=12,a.aborted||(a.fatalError=l))}function bn(a,l){_c(a,l.next,l.hoistables)}function _c(a,l,h){for(;l!==null;){h!==null&&(Mt(l.hoistables,h),l.inheritedHoistables=h);var v=l.boundaries;if(v!==null){l.boundaries=null;for(var E=0;E<v.length;E++){var N=v[E];h!==null&&Mt(N.contentState,h),nr(a,N,null,null)}}if(l.pendingTasks--,0<l.pendingTasks)break;h=l.hoistables,l=l.next}}function xc(a,l){var h=l.boundaries;if(h!==null&&l.pendingTasks===h.length){for(var v=!0,E=0;E<h.length;E++){var N=h[E];if(N.pendingTasks!==1||N.parentFlushed||Ms(a,N)){v=!1;break}}v&&_c(a,l,l.hoistables)}}function js(a){var l={pendingTasks:1,boundaries:null,hoistables:Ht(),inheritedHoistables:null,together:!1,next:null};return a!==null&&0<a.pendingTasks&&(l.pendingTasks++,l.boundaries=[],a.next=l),l}function Mc(a,l,h,v,E){var N=l.keyPath,$=l.treeContext,he=l.row;l.keyPath=h,h=v.length;var re=null;if(l.replay!==null){var se=l.replay.slots;if(se!==null&&typeof se=="object")for(var De=0;De<h;De++){var Ue=E!=="backwards"&&E!=="unstable_legacy-backwards"?De:h-1-De,Qe=v[Ue];l.row=re=js(re),l.treeContext=Qn($,h,Ue);var Je=se[Ue];typeof Je=="number"?(ol(a,l,Je,Qe,Ue),delete se[Ue]):kn(a,l,Qe,Ue),--re.pendingTasks===0&&bn(a,re)}else for(se=0;se<h;se++)De=E!=="backwards"&&E!=="unstable_legacy-backwards"?se:h-1-se,Ue=v[De],l.row=re=js(re),l.treeContext=Qn($,h,De),kn(a,l,Ue,De),--re.pendingTasks===0&&bn(a,re)}else if(E!=="backwards"&&E!=="unstable_legacy-backwards")for(E=0;E<h;E++)se=v[E],l.row=re=js(re),l.treeContext=Qn($,h,E),kn(a,l,se,E),--re.pendingTasks===0&&bn(a,re);else{for(se=l.blockedSegment,De=se.children.length,Ue=se.chunks.length,Qe=0;Qe<h;Qe++){Je=E==="unstable_legacy-backwards"?h-1-Qe:Qe;var tt=v[Je];l.row=re=js(re),l.treeContext=Qn($,h,Je);var ft=gr(a,Ue,null,l.formatContext,Je===0?se.lastPushedText:!0,!0);se.children.splice(De,0,ft),l.blockedSegment=ft;try{kn(a,l,tt,Je),rn(ft.chunks,a.renderState,ft.lastPushedText,ft.textEmbedded),ft.status=1,--re.pendingTasks===0&&bn(a,re)}catch(qt){throw ft.status=a.aborted?3:4,qt}}l.blockedSegment=se,se.lastPushedText=!1}he!==null&&re!==null&&0<re.pendingTasks&&(he.pendingTasks++,re.next=he),l.treeContext=$,l.row=he,l.keyPath=N}function Mu(a,l,h,v,E,N){var $=l.thenableState;for(l.thenableState=null,Lr={},cc=l,uc=a,fc=h,Ks=Js=0,Qs=-1,$o=0,xs=$,a=v(E,N);jo;)jo=!1,Ks=Js=0,Qs=-1,$o=0,tl+=1,hn=null,a=v(E,N);return qs(),a}function yu(a,l,h,v,E,N,$){var he=!1;if(N!==0&&a.formState!==null){var re=l.blockedSegment;if(re!==null){he=!0,re=re.chunks;for(var se=0;se<N;se++)se===$?re.push("<!--F!-->"):re.push("<!--F-->")}}N=l.keyPath,l.keyPath=h,E?(h=l.treeContext,l.treeContext=Qn(h,1,0),kn(a,l,v,-1),l.treeContext=h):he?kn(a,l,v,-1):Ci(a,l,v,-1),l.keyPath=N}function sl(a,l,h,v,E,N){if(typeof v=="function")if(v.prototype&&v.prototype.isReactComponent){var $=E;if("ref"in E){$={};for(var he in E)he!=="ref"&&($[he]=E[he])}var re=v.defaultProps;if(re){$===E&&($=k({},$,E));for(var se in re)$[se]===void 0&&($[se]=re[se])}var De=$,Ue=et,Qe=v.contextType;typeof Qe=="object"&&Qe!==null&&(Ue=Qe._currentValue2);var Je=new v(De,Ue),tt=Je.state!==void 0?Je.state:null;Je.updater=xn,Je.props=De,Je.state=tt;var ft={queue:[],replace:!1};Je._reactInternals=ft;var qt=v.contextType;Je.context=typeof qt=="object"&&qt!==null?qt._currentValue2:et;var zt=v.getDerivedStateFromProps;if(typeof zt=="function"){var an=zt(De,tt),En=an==null?tt:k({},tt,an);Je.state=En}if(typeof v.getDerivedStateFromProps!="function"&&typeof Je.getSnapshotBeforeUpdate!="function"&&(typeof Je.UNSAFE_componentWillMount=="function"||typeof Je.componentWillMount=="function")){var dt=Je.state;if(typeof Je.componentWillMount=="function"&&Je.componentWillMount(),typeof Je.UNSAFE_componentWillMount=="function"&&Je.UNSAFE_componentWillMount(),dt!==Je.state&&xn.enqueueReplaceState(Je,Je.state,null),ft.queue!==null&&0<ft.queue.length){var wt=ft.queue,kt=ft.replace;if(ft.queue=null,ft.replace=!1,kt&&wt.length===1)Je.state=wt[0];else{for(var tn=kt?wt[0]:Je.state,jn=!0,It=kt?1:0;It<wt.length;It++){var gn=wt[It],dn=typeof gn=="function"?gn.call(Je,tn,De,void 0):gn;dn!=null&&(jn?(jn=!1,tn=k({},tn,dn)):k(tn,dn))}Je.state=tn}}else ft.queue=null}var Hn=Je.render();if(a.aborted)throw null;var sn=l.keyPath;l.keyPath=h,Ci(a,l,Hn,-1),l.keyPath=sn}else{var ii=Mu(a,l,h,v,E,void 0);if(a.aborted)throw null;yu(a,l,h,ii,Js!==0,Ks,Qs)}else if(typeof v=="string"){var cn=l.blockedSegment;if(cn===null){var ir=E.children,Nn=l.formatContext,Fn=l.keyPath;l.formatContext=_t(Nn,v,E),l.keyPath=h,kn(a,l,ir,-1),l.formatContext=Nn,l.keyPath=Fn}else{var Nr=xe(cn.chunks,v,E,a.resumableState,a.renderState,l.blockedPreamble,l.hoistableState,l.formatContext,cn.lastPushedText);cn.lastPushedText=!1;var Mn=l.formatContext,_i=l.keyPath;if(l.keyPath=h,(l.formatContext=_t(Mn,v,E)).insertionMode===3){var Vn=gr(a,0,null,l.formatContext,!1,!1);cn.preambleChildren.push(Vn),l.blockedSegment=Vn;try{kn(a,l,Nr,-1),rn(Vn.chunks,a.renderState,Vn.lastPushedText,Vn.textEmbedded),Vn.status=1}finally{l.blockedSegment=cn}}else kn(a,l,Nr,-1);l.formatContext=Mn,l.keyPath=_i;e:{var Pi=cn.chunks,Hi=a.resumableState;switch(v){case"title":case"style":case"script":case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"input":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":break e;case"body":if(1>=Mn.insertionMode){Hi.hasBody=!0;break e}break;case"html":if(Mn.insertionMode===0){Hi.hasHtml=!0;break e}break;case"head":if(1>=Mn.insertionMode)break e}Pi.push(Ie(v))}cn.lastPushedText=!1}}else{switch(v){case y:case u:case d:case c:var mr=l.keyPath;l.keyPath=h,Ci(a,l,E.children,-1),l.keyPath=mr;return;case w:var yn=l.blockedSegment;if(yn===null){if(E.mode!=="hidden"){var Ur=l.keyPath;l.keyPath=h,kn(a,l,E.children,-1),l.keyPath=Ur}}else if(E.mode!=="hidden"){a.renderState.generateStaticMarkup||yn.chunks.push("<!--&-->"),yn.lastPushedText=!1;var ka=l.keyPath;l.keyPath=h,kn(a,l,E.children,-1),l.keyPath=ka,a.renderState.generateStaticMarkup||yn.chunks.push("<!--/&-->"),yn.lastPushedText=!1}return;case _:e:{var rr=E.children,Fr=E.revealOrder;if(Fr!=="independent"&&Fr!=="together"){if(S(rr)){Mc(a,l,h,rr,Fr);break e}var oo=D(rr);if(oo){var Ha=oo.call(rr);if(Ha){var Or=Ha.next();if(!Or.done){do Or=Ha.next();while(!Or.done);Mc(a,l,h,rr,Fr)}break e}}}if(Fr==="together"){var ml=l.keyPath,Gi=l.row,$n=l.row=js(null);$n.boundaries=[],$n.together=!0,l.keyPath=h,Ci(a,l,rr,-1),--$n.pendingTasks===0&&bn(a,$n),l.keyPath=ml,l.row=Gi,Gi!==null&&0<$n.pendingTasks&&(Gi.pendingTasks++,$n.next=Gi)}else{var vr=l.keyPath;l.keyPath=h,Ci(a,l,rr,-1),l.keyPath=vr}}return;case B:var Ga=l.formatContext,_r=l.keyPath,lo=a.resumableState;if(E.name==null||E.name==="auto"){var Vi=en(l.treeContext);Jt(lo,Vi,0)}if(l.formatContext=Ga,l.keyPath=h,E.name!=null&&E.name!=="auto")Ci(a,l,E.children,-1);else{var Li=l.treeContext;l.treeContext=Qn(Li,1,0),kn(a,l,E.children,-1),l.treeContext=Li}l.formatContext=Ga,l.keyPath=_r;return;case U:throw Error(t(343));case T:e:if(l.replay!==null){var Va=l.keyPath,Br=l.formatContext,sa=l.row;l.keyPath=h,l.formatContext=xt(a.resumableState,Br),l.row=null;var xr=E.children;try{kn(a,l,xr,-1)}finally{l.keyPath=Va,l.formatContext=Br,l.row=sa}}else{var Wa=l.keyPath,oa=l.formatContext,Yt=l.row,la=l.blockedBoundary,zr=l.blockedPreamble,ca=l.hoistableState,Ii=l.blockedSegment,Wi=E.fallback,xi=E.children,Mr=new Set,Vt=mc(a,l.row,Mr,null,!1),on=gr(a,Ii.chunks.length,Vt,l.formatContext,!1,!1);Ii.children.push(on),Ii.lastPushedText=!1;var Wn=gr(a,0,null,l.formatContext,!1,!1);Wn.parentFlushed=!0;var On=a.trackedPostpones;if(On!==null){var ua=l.componentStack,fa=[h[0],"Suspense Fallback",h[2]];if(On!==null){var ha=[fa[1],fa[2],[],null];On.workingMap.set(fa,ha),Vt.tracked={contentKeyPath:h,fallbackNode:ha}}l.blockedSegment=on,l.blockedPreamble=Vt.preamble===null?null:Vt.preamble.fallback,l.keyPath=fa,l.formatContext=Ze(a.resumableState,oa),l.componentStack=vc(ua);try{kn(a,l,Wi,-1),rn(on.chunks,a.renderState,on.lastPushedText,on.textEmbedded),on.status=1}catch(Mi){throw on.status=a.aborted?3:4,Mi}finally{l.blockedSegment=Ii,l.blockedPreamble=zr,l.keyPath=Wa,l.formatContext=oa}var co=al(a,null,xi,-1,Vt,Wn,Vt.preamble===null?null:Vt.preamble.content,Vt.contentState,l.abortSet,h,xt(a.resumableState,l.formatContext),l.context,l.treeContext,null,ua);Na(co),a.pingedTasks.push(co)}else{l.blockedBoundary=Vt,l.blockedPreamble=Vt.preamble===null?null:Vt.preamble.content,l.hoistableState=Vt.contentState,l.blockedSegment=Wn,l.keyPath=h,l.formatContext=xt(a.resumableState,oa),l.row=null;try{if(kn(a,l,xi,-1),rn(Wn.chunks,a.renderState,Wn.lastPushedText,Wn.textEmbedded),Wn.status=1,to(Vt,Wn),Vt.pendingTasks===0&&Vt.status===0){if(Vt.status=1,!Ms(a,Vt)){Yt!==null&&--Yt.pendingTasks===0&&bn(a,Yt),a.pendingRootTasks===0&&l.blockedPreamble&&Oa(a);break e}}else Yt!==null&&Yt.together&&xc(a,Yt)}catch(Mi){if(Vt.status=4,a.aborted){Wn.status=3;var Xi=a.fatalError}else Wn.status=4,Xi=Mi;var Xa=Ua(l.componentStack),yr=zn(a,Xi,Xa);Vt.errorDigest=yr,$s(a,Vt)}finally{l.blockedBoundary=la,l.blockedPreamble=zr,l.hoistableState=ca,l.blockedSegment=Ii,l.keyPath=Wa,l.formatContext=oa,l.row=Yt}var Yi=al(a,null,Wi,-1,la,on,Vt.preamble===null?null:Vt.preamble.fallback,Vt.fallbackState,Mr,[h[0],"Suspense Fallback",h[2]],Ze(a.resumableState,l.formatContext),l.context,l.treeContext,l.row,vc(l.componentStack));Na(Yi),a.pingedTasks.push(Yi)}}return}if(typeof v=="object"&&v!==null)switch(v.$$typeof){case M:if("ref"in E){var Bn={};for(var Sr in E)Sr!=="ref"&&(Bn[Sr]=E[Sr])}else Bn=E;var Ya=Mu(a,l,h,v.render,Bn,N);yu(a,l,h,Ya,Js!==0,Ks,Qs);return;case x:sl(a,l,h,v.type,E,N);return;case g:var uo=E.children,vl=l.keyPath,da=E.value,fo=v._currentValue2;v._currentValue2=da;var kr=Tt,mn={parent:kr,depth:kr===null?0:kr.depth+1,context:v,parentValue:fo,value:da};Tt=mn,l.context=mn,l.keyPath=h,Ci(a,l,uo,-1);var Za=Tt;if(Za===null)throw Error(t(403));Za.context._currentValue2=Za.parentValue;var br=Tt=Za.parent;l.context=br,l.keyPath=vl;return;case p:var pa=E.children,Er=pa(v._context._currentValue2),bs=l.keyPath;l.keyPath=h,Ci(a,l,Er,-1),l.keyPath=bs;return;case R:var ho=v._init,Hr=ho(v._payload);if(a.aborted)throw null;sl(a,l,h,Hr,E,N);return}throw Error(t(130,v==null?v:typeof v,""))}}function ol(a,l,h,v,E){var N=l.replay,$=l.blockedBoundary,he=gr(a,0,null,l.formatContext,!1,!1);he.id=h,he.parentFlushed=!0;try{l.replay=null,l.blockedSegment=he,kn(a,l,v,E),he.status=1,$===null?a.completedRootSegment=he:(to($,he),$.parentFlushed&&a.partialBoundaries.push($))}finally{l.replay=N,l.blockedSegment=null}}function Ci(a,l,h,v){l.replay!==null&&typeof l.replay.slots=="number"?ol(a,l,l.replay.slots,h,v):(l.node=h,l.childIndex=v,h=l.componentStack,Na(l),ll(a,l),l.componentStack=h)}function ll(a,l){var h=l.node,v=l.childIndex;if(h!==null){if(typeof h=="object"){switch(h.$$typeof){case n:var E=h.type,N=h.key,$=h.props;h=$.ref;var he=h!==void 0?h:null,re=In(E),se=N==null||N===V?v===-1?0:v:N;if(N=[l.keyPath,re,se],l.replay!==null)e:{var De=l.replay;for(v=De.nodes,h=0;h<v.length;h++){var Ue=v[h];if(se===Ue[1]){if(Ue.length===4){if(re!==null&&re!==Ue[0])throw Error(t(490,Ue[0],re));var Qe=Ue[2],Je=Ue[3],tt=l.node;l.replay={nodes:Qe,slots:Je,pendingTasks:1};try{if(sl(a,l,N,E,$,he),l.replay.pendingTasks===1&&0<l.replay.nodes.length)throw Error(t(488));l.replay.pendingTasks--}catch(tn){if(typeof tn=="object"&&tn!==null&&(tn===li||typeof tn.then=="function"||tn.message==="Maximum call stack size exceeded"))throw l.node===tt?l.replay=De:v.splice(h,1),tn;l.replay.pendingTasks--,N=Ua(l.componentStack),tt=a,$=l.blockedBoundary,a=a.aborted?a.fatalError:tn,N=zn(tt,a,N),eo(tt,$,Qe,Je,a,N)}l.replay=De}else{if(E!==T)throw Error(t(490,"Suspense",In(E)||"Unknown"));t:{De=Ue[5],E=Ue[2],he=Ue[3],re=Ue[4]===null?[]:Ue[4][2],Ue=Ue[4]===null?null:Ue[4][3],se=l.keyPath;var ft=l.formatContext,qt=l.row,zt=l.replay,an=l.blockedBoundary,En=l.hoistableState,dt=$.children;$=$.fallback;var wt=new Set,kt=mc(a,l.row,wt,null,!1);kt.parentFlushed=!0,kt.rootSegmentID=De,l.blockedBoundary=kt,l.hoistableState=kt.contentState,l.keyPath=N,l.formatContext=xt(a.resumableState,ft),l.row=null,l.replay={nodes:E,slots:he,pendingTasks:1};try{if(kn(a,l,dt,-1),l.replay.pendingTasks===1&&0<l.replay.nodes.length)throw Error(t(488));if(l.replay.pendingTasks--,kt.pendingTasks===0&&kt.status===0){kt.status=1,a.completedBoundaries.push(kt);break t}}catch(tn){kt.status=4,Qe=a.aborted?a.fatalError:tn,Je=Ua(l.componentStack),tt=zn(a,Qe,Je),kt.errorDigest=tt,l.replay.pendingTasks--,a.clientRenderedBoundaries.push(kt)}finally{l.blockedBoundary=an,l.hoistableState=En,l.replay=zt,l.keyPath=se,l.formatContext=ft,l.row=qt}Qe=xu(a,null,{nodes:re,slots:Ue,pendingTasks:0},$,-1,an,kt.fallbackState,wt,[N[0],"Suspense Fallback",N[2]],Ze(a.resumableState,l.formatContext),l.context,l.treeContext,l.row,vc(l.componentStack)),Na(Qe),a.pingedTasks.push(Qe)}}v.splice(h,1);break e}}}else sl(a,l,N,E,$,he);return;case o:throw Error(t(257));case R:if(Qe=h._init,h=Qe(h._payload),a.aborted)throw null;Ci(a,l,h,v);return}if(S(h)){ys(a,l,h,v);return}if((Qe=D(h))&&(Qe=Qe.call(h))){if(h=Qe.next(),!h.done){Je=[];do Je.push(h.value),h=Qe.next();while(!h.done);ys(a,l,Je,v)}return}if(typeof h.then=="function")return l.thenableState=null,Ci(a,l,gu(h),v);if(h.$$typeof===g)return Ci(a,l,h._currentValue2,v);throw v=Object.prototype.toString.call(h),Error(t(31,v==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":v))}typeof h=="string"?(v=l.blockedSegment,v!==null&&(v.lastPushedText=Bt(v.chunks,h,a.renderState,v.lastPushedText))):(typeof h=="number"||typeof h=="bigint")&&(v=l.blockedSegment,v!==null&&(v.lastPushedText=Bt(v.chunks,""+h,a.renderState,v.lastPushedText)))}}function ys(a,l,h,v){var E=l.keyPath;if(v!==-1&&(l.keyPath=[l.keyPath,"Fragment",v],l.replay!==null)){for(var N=l.replay,$=N.nodes,he=0;he<$.length;he++){var re=$[he];if(re[1]===v){v=re[2],re=re[3],l.replay={nodes:v,slots:re,pendingTasks:1};try{if(ys(a,l,h,-1),l.replay.pendingTasks===1&&0<l.replay.nodes.length)throw Error(t(488));l.replay.pendingTasks--}catch(Ue){if(typeof Ue=="object"&&Ue!==null&&(Ue===li||typeof Ue.then=="function"))throw Ue;l.replay.pendingTasks--;var se=Ua(l.componentStack);h=a;var De=l.blockedBoundary;a=a.aborted?a.fatalError:Ue,se=zn(h,a,se),eo(h,De,v,re,a,se)}l.replay=N,$.splice(he,1);break}}l.keyPath=E;return}if(N=l.treeContext,$=h.length,l.replay!==null&&(he=l.replay.slots,he!==null&&typeof he=="object")){for(v=0;v<$;v++)re=h[v],l.treeContext=Qn(N,$,v),De=he[v],typeof De=="number"?(ol(a,l,De,re,v),delete he[v]):kn(a,l,re,v);l.treeContext=N,l.keyPath=E;return}for(he=0;he<$;he++)v=h[he],l.treeContext=Qn(N,$,he),kn(a,l,v,he);l.treeContext=N,l.keyPath=E}function yc(a,l,h){h.status=5,h.rootSegmentID=a.nextSegmentId++;var v=h.tracked;if(v===null||(a=v.contentKeyPath,a===null))throw Error(t(486));v=v.fallbackNode;var E=[],N=l.workingMap.get(a);return N===void 0?(h=[a[1],a[2],E,null,v,h.rootSegmentID],l.workingMap.set(a,h),so(h,a[0],l),h):(N[4]=v,N[5]=h.rootSegmentID,N)}function Sc(a,l,h,v){v.status=5;var E=h.keyPath,N=h.blockedBoundary;if(N===null)v.id=a.nextSegmentId++,l.rootSlots=v.id,a.completedRootSegment!==null&&(a.completedRootSegment.status=5);else{if(N!==null&&N.status===0){var $=yc(a,l,N);if(N.tracked!==null&&N.tracked.contentKeyPath===E&&h.childIndex===-1){v.id===-1&&(v.id=v.parentFlushed?N.rootSegmentID:a.nextSegmentId++),$[3]=v.id;return}}if(v.id===-1&&(v.id=v.parentFlushed&&N!==null?N.rootSegmentID:a.nextSegmentId++),h.childIndex===-1)E===null?l.rootSlots=v.id:(h=l.workingMap.get(E),h===void 0?(h=[E[1],E[2],[],v.id],so(h,E[0],l)):h[3]=v.id);else{if(E===null){if(a=l.rootSlots,a===null)a=l.rootSlots={};else if(typeof a=="number")throw Error(t(491))}else if(N=l.workingMap,$=N.get(E),$===void 0)a={},$=[E[1],E[2],[],a],N.set(E,$),so($,E[0],l);else if(a=$[3],a===null)a=$[3]={};else if(typeof a=="number")throw Error(t(491));a[h.childIndex]=v.id}}}function $s(a,l){a=a.trackedPostpones,a!==null&&(l=l.tracked,l!==null&&(l=l.contentKeyPath,l!==null&&(a=a.workingMap.get(l),a!==void 0&&(a.length=4,a[2]=[],a[3]=null))))}function cl(a,l,h){return xu(a,h,l.replay,l.node,l.childIndex,l.blockedBoundary,l.hoistableState,l.abortSet,l.keyPath,l.formatContext,l.context,l.treeContext,l.row,l.componentStack)}function Su(a,l,h){var v=l.blockedSegment,E=gr(a,v.chunks.length,null,l.formatContext,v.lastPushedText,!0);return v.children.push(E),v.lastPushedText=!1,al(a,h,l.node,l.childIndex,l.blockedBoundary,E,l.blockedPreamble,l.hoistableState,l.abortSet,l.keyPath,l.formatContext,l.context,l.treeContext,l.row,l.componentStack)}function kn(a,l,h,v){var E=l.formatContext,N=l.context,$=l.keyPath,he=l.treeContext,re=l.componentStack,se=l.blockedSegment;if(se===null){se=l.replay;try{return Ci(a,l,h,v)}catch(Qe){if(qs(),h=Qe===li?Qo():Qe,!a.aborted&&typeof h=="object"&&h!==null){if(typeof h.then=="function"){v=Qe===li?ia():null,a=cl(a,l,v).ping,h.then(a.resolve,a.reject),l.formatContext=E,l.context=N,l.keyPath=$,l.treeContext=he,l.componentStack=re,l.replay=se,Lt(N);return}if(h.message==="Maximum call stack size exceeded"){h=Qe===li?ia():null,h=cl(a,l,h),a.pingedTasks.push(h),l.formatContext=E,l.context=N,l.keyPath=$,l.treeContext=he,l.componentStack=re,l.replay=se,Lt(N);return}}}}else{var De=se.children.length,Ue=se.chunks.length;try{return Ci(a,l,h,v)}catch(Qe){if(qs(),se.children.length=De,se.chunks.length=Ue,h=Qe===li?Qo():Qe,!a.aborted&&typeof h=="object"&&h!==null){if(typeof h.then=="function"){se=h,h=Qe===li?ia():null,a=Su(a,l,h).ping,se.then(a.resolve,a.reject),l.formatContext=E,l.context=N,l.keyPath=$,l.treeContext=he,l.componentStack=re,Lt(N);return}if(h.message==="Maximum call stack size exceeded"){se=Qe===li?ia():null,se=Su(a,l,se),a.pingedTasks.push(se),l.formatContext=E,l.context=N,l.keyPath=$,l.treeContext=he,l.componentStack=re,Lt(N);return}}}}throw l.formatContext=E,l.context=N,l.keyPath=$,l.treeContext=he,Lt(N),h}function bc(a){var l=a.blockedBoundary,h=a.blockedSegment;h!==null&&(h.status=3,nr(this,l,a.row,h))}function eo(a,l,h,v,E,N){for(var $=0;$<h.length;$++){var he=h[$];if(he.length===4)eo(a,l,he[2],he[3],E,N);else{he=he[5];var re=a,se=N,De=mc(re,null,new Set,null,!1);De.parentFlushed=!0,De.rootSegmentID=he,De.status=4,De.errorDigest=se,De.parentFlushed&&re.clientRenderedBoundaries.push(De)}}if(h.length=0,v!==null){if(l===null)throw Error(t(487));if(l.status!==4&&(l.status=4,l.errorDigest=N,l.parentFlushed&&a.clientRenderedBoundaries.push(l)),typeof v=="object")for(var Ue in v)delete v[Ue]}}function ul(a,l){if(a!==l.currentTask){var h=a.blockedBoundary;a=a.blockedSegment,a!==null&&(a.status=3),h!==null&&h.fallbackAbortableTasks.forEach(function(v){return ul(v,l)})}}function Fa(a,l,h){if(a!==l.currentTask){var v=a.blockedBoundary,E=a.blockedSegment;if(E===null||E.status===3){var N=Ua(a.componentStack),$=el(h);if(v===null){if(v=a.replay,v===null){$||l.trackedPostpones===null||E===null?$?(a=hc(h),zn(l,a,N),l.status!==12&&l.status!==13&&qn(l,a)):(zn(l,h,N),l.status!==12&&l.status!==13&&qn(l,h)):(v=l.trackedPostpones,zn(l,h,N),Sc(l,v,a,E),nr(l,null,a.row,E));return}l.status!==12&&l.status!==13&&(v.pendingTasks--,v.pendingTasks===0&&0<v.nodes.length&&(N=zn(l,h,N),eo(l,null,v.nodes,v.slots,h,N)),l.pendingRootTasks--,l.pendingRootTasks===0&&Tc(l))}else{var he=l.trackedPostpones;if(v.status!==4){if(!$&&he!==null&&E!==null)return zn(l,h,N),Sc(l,he,a,E),v.fallbackAbortableTasks.forEach(function(re){return Fa(re,l,h)}),v.fallbackAbortableTasks.clear(),nr(l,v,a.row,E);v.status=4,N=zn(l,h,N),v.errorDigest=N,$s(l,v),v.parentFlushed&&l.clientRenderedBoundaries.push(v)}v.pendingTasks--,N=v.row,N!==null&&--N.pendingTasks===0&&bn(l,N),v.fallbackAbortableTasks.forEach(function(re){return Fa(re,l,h)}),v.fallbackAbortableTasks.clear()}a=a.row,a!==null&&--a.pendingTasks===0&&bn(l,a),l.allPendingTasks--,l.allPendingTasks===0&&fl(l)}}}function Ec(a,l){try{var h=a.renderState,v=h.onHeaders;if(v){var E=h.headers;if(E){h.headers=null;var N=E.preconnects;if(E.fontPreloads&&(N&&(N+=", "),N+=E.fontPreloads),E.highImagePreloads&&(N&&(N+=", "),N+=E.highImagePreloads),!l){var $=h.styles.values(),he=$.next();e:for(;0<E.remainingCapacity&&!he.done;he=$.next())for(var re=he.value.sheets.values(),se=re.next();0<E.remainingCapacity&&!se.done;se=re.next()){var De=se.value,Ue=De.props,Qe=Ue.href,Je=De.props,tt=ce(Je.href,"style",{crossOrigin:Je.crossOrigin,integrity:Je.integrity,nonce:Je.nonce,type:Je.type,fetchPriority:Je.fetchPriority,referrerPolicy:Je.referrerPolicy,media:Je.media});if(0<=(E.remainingCapacity-=tt.length+2))h.resets.style[Qe]=ye,N&&(N+=", "),N+=tt,h.resets.style[Qe]=typeof Ue.crossOrigin=="string"||typeof Ue.integrity=="string"?[Ue.crossOrigin,Ue.integrity]:ye;else break e}}v(N?{Link:N}:{})}}}catch(ft){zn(a,ft,{})}}function Tc(a){a.trackedPostpones===null&&Ec(a,!0),a.trackedPostpones===null&&Oa(a),a=a.onShellReady,a()}function fl(a){Ec(a,a.trackedPostpones===null?!0:a.completedRootSegment===null||a.completedRootSegment.status!==5),Oa(a),a=a.onAllReady,a()}function to(a,l){if(l.chunks.length===0&&l.children.length===1&&l.children[0].boundary===null&&l.children[0].id===-1){var h=l.children[0];h.id=l.id,h.parentFlushed=!0,h.status!==1&&h.status!==3&&h.status!==4||to(a,h)}else a.completedSegments.push(l)}function nr(a,l,h,v){if(h!==null&&(--h.pendingTasks===0?bn(a,h):h.together&&xc(a,h)),a.allPendingTasks--,l===null){if(v!==null&&v.parentFlushed){if(a.completedRootSegment!==null)throw Error(t(389));a.completedRootSegment=v}a.pendingRootTasks--,a.pendingRootTasks===0&&Tc(a)}else if(l.pendingTasks--,l.status!==4)if(l.pendingTasks===0){if(l.status===0&&(l.status=1),v!==null&&v.parentFlushed&&(v.status===1||v.status===3)&&to(l,v),l.parentFlushed&&a.completedBoundaries.push(l),l.status===1)h=l.row,h!==null&&Mt(h.hoistables,l.contentState),Ms(a,l)||(a.allPendingTasks++,l.fallbackAbortableTasks.forEach(bc,a),l.fallbackAbortableTasks.clear(),h!==null&&--h.pendingTasks===0&&bn(a,h),a.allPendingTasks--),a.pendingRootTasks===0&&a.trackedPostpones===null&&l.preamble!==null&&Oa(a);else if(l.status===5&&(l=l.row,l!==null)){if(a.trackedPostpones!==null){h=a.trackedPostpones;var E=l.next;if(E!==null&&(v=E.boundaries,v!==null))for(E.boundaries=null,E=0;E<v.length;E++){var N=v[E];yc(a,h,N),nr(a,N,null,null)}}a.allPendingTasks++,--l.pendingTasks===0&&bn(a,l),a.allPendingTasks--}}else v===null||!v.parentFlushed||v.status!==1&&v.status!==3||(to(l,v),l.completedSegments.length===1&&l.parentFlushed&&a.partialBoundaries.push(l)),l=l.row,l!==null&&l.together&&xc(a,l);a.allPendingTasks===0&&fl(a)}function no(a){if(!(a.aborted||11<a.status)){var l=Tt,h=Ae.H;Ae.H=mu;var v=Ae.A;Ae.A=Bf;var E=Dn;Dn=a;var N=nl;nl=a.resumableState;try{var $=a.pingedTasks,he;for(he=0;he<$.length;he++){var re=$[he],se=a,De=re.blockedSegment;if(De===null){e:if(re.replay.pendingTasks!==0){var Ue=se.currentTask;se.currentTask=re,Lt(re.context);var Qe=re.node;try{if(typeof re.replay.slots=="number"?ol(se,re,re.replay.slots,re.node,re.childIndex):ll(se,re),re.replay.pendingTasks===1&&0<re.replay.nodes.length)throw Error(t(488));re.replay.pendingTasks--,re.abortSet.delete(re),nr(se,re.blockedBoundary,re.row,null)}catch(Fn){qs();var Je=Fn===li?Qo():Fn;if(se.aborted){Fn===li&&(re.thenableState=ia()),se.currentTask=Ue;var tt=se;ul(re,tt),re.abortSet.delete(re),Fa(re,tt,tt.fatalError)}else{if(typeof Je=="object"&&Je!==null){if(typeof Je.then=="function"){var ft=re.ping;Je.then(ft.resolve,ft.reject),re.thenableState=Fn===li?ia():null;break e}if(Je.message==="Maximum call stack size exceeded"&&re.node!==Qe){re.thenableState=null,se.pingedTasks.push(re);break e}}re.replay.pendingTasks--,re.abortSet.delete(re);var qt=Ua(re.componentStack);tt=se;var zt=re.blockedBoundary,an=se.aborted?se.fatalError:Je,En=re.replay.nodes,dt=re.replay.slots,wt=zn(tt,an,qt);eo(tt,zt,En,dt,an,wt),se.pendingRootTasks--,se.pendingRootTasks===0&&Tc(se),se.allPendingTasks--,se.allPendingTasks===0&&fl(se)}}finally{se.currentTask=Ue}}}else e:if(tt=De,tt.status===0){var kt=se.currentTask;se.currentTask=re,Lt(re.context);var tn=tt.children.length,jn=tt.chunks.length,It=re.node;try{ll(se,re),rn(tt.chunks,se.renderState,tt.lastPushedText,tt.textEmbedded),re.abortSet.delete(re),tt.status=1,nr(se,re.blockedBoundary,re.row,tt)}catch(Fn){qs(),tt.children.length=tn,tt.chunks.length=jn;var gn=Fn===li?Qo():Fn;if(se.aborted)Fn===li&&(re.thenableState=ia()),se.currentTask=kt,tt=se,ul(re,tt),re.abortSet.delete(re),Fa(re,tt,tt.fatalError);else{if(typeof gn=="object"&&gn!==null){if(typeof gn.then=="function"){tt.status=0,re.thenableState=Fn===li?ia():null;var dn=re.ping;gn.then(dn.resolve,dn.reject);break e}if(gn.message==="Maximum call stack size exceeded"&&re.node!==It){tt.status=0,re.thenableState=null,se.pingedTasks.push(re);break e}}var Hn=Ua(re.componentStack);re.abortSet.delete(re),tt.status=4;var sn=re.blockedBoundary,ii=re.row;if(ii!==null&&--ii.pendingTasks===0&&bn(se,ii),se.allPendingTasks--,sn===null)if(el(gn)){var cn=hc(gn);zn(se,cn,Hn),qn(se,cn)}else zn(se,gn,Hn),qn(se,gn);else{var ir=zn(se,gn,Hn);if(sn.pendingTasks--,sn.status!==4){sn.status=4,sn.errorDigest=ir,$s(se,sn);var Nn=sn.row;Nn!==null&&(se.allPendingTasks++,--Nn.pendingTasks===0&&bn(se,Nn),se.allPendingTasks--),sn.parentFlushed&&se.clientRenderedBoundaries.push(sn),se.pendingRootTasks===0&&se.trackedPostpones===null&&sn.preamble!==null&&Oa(se)}se.allPendingTasks===0&&fl(se)}}}finally{se.currentTask=kt}}}$.splice(0,he),a.destination!==null&&Ba(a,a.destination)}catch(Fn){zn(a,Fn,{}),qn(a,Fn)}finally{nl=N,Ae.H=h,Ae.A=v,h===mu&&Lt(l),Dn=E}}}function io(a,l,h){l.preambleChildren.length&&h.push(l.preambleChildren);for(var v=!1,E=0;E<l.children.length;E++)v=hl(a,l.children[E],h)||v;return v}function hl(a,l,h){var v=l.boundary;if(v===null)return io(a,l,h);var E=v.preamble;if(E===null)return!1;switch(v.status){case 1:if(pe(a.renderState,E.content),a.byteSize+=v.byteSize,l=v.completedSegments[0],!l)throw Error(t(391));return io(a,l,h);case 5:if(a.trackedPostpones!==null)return!0;case 4:if(l.status===1)return pe(a.renderState,E.fallback),io(a,l,h);default:return!0}}function Oa(a){if(a.completedRootSegment&&a.completedPreambleSegments===null){var l=[],h=a.byteSize,v=hl(a,a.completedRootSegment,l),E=a.renderState.preamble;v===!1||E.headChunks&&E.bodyChunks?a.completedPreambleSegments=l:a.byteSize=h}}function Ss(a,l,h,v){switch(h.parentFlushed=!0,h.status){case 0:h.id=a.nextSegmentId++;case 5:return v=h.id,h.lastPushedText=!1,h.textEmbedded=!1,a=a.renderState,l.push('<template id="'),l.push(a.placeholderPrefix),a=v.toString(16),l.push(a),l.push('"></template>');case 1:h.status=2;var E=!0,N=h.chunks,$=0;h=h.children;for(var he=0;he<h.length;he++){for(E=h[he];$<E.index;$++)l.push(N[$]);E=ao(a,l,E,v)}for(;$<N.length-1;$++)l.push(N[$]);return $<N.length&&(E=l.push(N[$])),E;case 3:return!0;default:throw Error(t(390))}}var ro=0;function ao(a,l,h,v){var E=h.boundary;if(E===null)return Ss(a,l,h,v);if(h.boundary=null,E.parentFlushed=!0,E.status===4){var N=E.row;return N!==null&&--N.pendingTasks===0&&bn(a,N),a.renderState.generateStaticMarkup||(E=E.errorDigest,l.push("<!--$!-->"),l.push("<template"),E!=null&&(l.push(' data-dgst="'),E=ne(E),l.push(E),l.push('"')),l.push("></template>")),Ss(a,l,h,v),a=a.renderState.generateStaticMarkup?!0:l.push("<!--/$-->"),a}if(E.status!==1)return E.status===0&&(E.rootSegmentID=a.nextSegmentId++),0<E.completedSegments.length&&a.partialBoundaries.push(E),Oe(l,a.renderState,E.rootSegmentID),v&&Mt(v,E.fallbackState),Ss(a,l,h,v),l.push("<!--/$-->");if(!dl&&Ms(a,E)&&(ro+E.byteSize>a.progressiveChunkSize||E.defer))return E.rootSegmentID=a.nextSegmentId++,a.completedBoundaries.push(E),Oe(l,a.renderState,E.rootSegmentID),Ss(a,l,h,v),l.push("<!--/$-->");if(ro+=E.byteSize,v&&Mt(v,E.contentState),h=E.row,h!==null&&Ms(a,E)&&--h.pendingTasks===0&&bn(a,h),a.renderState.generateStaticMarkup||l.push("<!--$-->"),h=E.completedSegments,h.length!==1)throw Error(t(391));return ao(a,l,h[0],v),a=a.renderState.generateStaticMarkup?!0:l.push("<!--/$-->"),a}function ra(a,l,h,v){return yt(l,a.renderState,h.parentFormatContext,h.id),ao(a,l,h,v),Ot(l,h.parentFormatContext)}function wc(a,l,h){ro=h.byteSize;for(var v=h.completedSegments,E=0;E<v.length;E++)bu(a,l,h,v[E]);v.length=0,v=h.row,v!==null&&Ms(a,h)&&--v.pendingTasks===0&&bn(a,v),ln(l,h.contentState,a.renderState),v=a.resumableState,a=a.renderState,E=h.rootSegmentID,h=h.contentState;var N=a.stylesToHoist,$=(v.instructions&128)!==0;return a.stylesToHoist=!1,l.push(a.startInlineScript),l.push(">"),N?((v.instructions&4)===0&&(v.instructions|=4,l.push('$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,null!=c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};')),(v.instructions&2)===0&&(v.instructions|=2,l.push(`$RB=[];$RV=function(a){$RT=performance.now();for(var b=0;b<a.length;b+=2){var c=a[b],e=a[b+1];null!==e.parentNode&&e.parentNode.removeChild(e);var f=c.parentNode;if(f){var g=c.previousSibling,h=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d||"/&"===d)if(0===h)break;else h--;else"$"!==d&&"$?"!==d&&"$~"!==d&&"$!"!==d&&"&"!==d||h++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;e.firstChild;)f.insertBefore(e.firstChild,c);g.data="$";g._reactRetry&&requestAnimationFrame(g._reactRetry)}}a.length=0};
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
A.finished.finally(function(){document.__reactViewTransition===A&&(document.__reactViewTransition=null)});$RB=[];return}}catch(a){}B(g)}.bind(null,$RV);`)),l.push('$RC("')),v=E.toString(16),l.push(a.boundaryPrefix),l.push(v),l.push('","'),l.push(a.segmentPrefix),l.push(v),N?(l.push('",'),Xs(l,h)):l.push('"'),h=l.push(")<\/script>"),Ge(l,a)&&h}function bu(a,l,h,v){if(v.status===2)return!0;var E=h.contentState,N=v.id;if(N===-1){if((v.id=h.rootSegmentID)===-1)throw Error(t(392));return ra(a,l,v,E)}return N===h.rootSegmentID?ra(a,l,v,E):(ra(a,l,v,E),h=a.resumableState,a=a.renderState,l.push(a.startInlineScript),l.push(">"),(h.instructions&1)===0?(h.instructions|=1,l.push('$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')):l.push('$RS("'),l.push(a.segmentPrefix),N=N.toString(16),l.push(N),l.push('","'),l.push(a.placeholderPrefix),l.push(N),l=l.push('")<\/script>'),l)}var dl=!1;function Ba(a,l){try{if(!(0<a.pendingRootTasks)){var h,v=a.completedRootSegment;if(v!==null){if(v.status===5)return;var E=a.completedPreambleSegments;if(E===null)return;ro=a.byteSize;var N=a.resumableState,$=a.renderState,he=$.preamble,re=he.htmlChunks,se=he.headChunks,De;if(re){for(De=0;De<re.length;De++)l.push(re[De]);if(se)for(De=0;De<se.length;De++)l.push(se[De]);else{var Ue=_e("head");l.push(Ue),l.push(">")}}else if(se)for(De=0;De<se.length;De++)l.push(se[De]);var Qe=$.charsetChunks;for(De=0;De<Qe.length;De++)l.push(Qe[De]);Qe.length=0,$.preconnects.forEach(Ln,l),$.preconnects.clear();var Je=$.viewportChunks;for(De=0;De<Je.length;De++)l.push(Je[De]);Je.length=0,$.fontPreloads.forEach(Ln,l),$.fontPreloads.clear(),$.highImagePreloads.forEach(Ln,l),$.highImagePreloads.clear(),Ke=$,$.styles.forEach(Ws,l),Ke=null;var tt=$.importMapChunks;for(De=0;De<tt.length;De++)l.push(tt[De]);tt.length=0,$.bootstrapScripts.forEach(Ln,l),$.scripts.forEach(Ln,l),$.scripts.clear(),$.bulkPreloads.forEach(Ln,l),$.bulkPreloads.clear(),N.instructions|=32;var ft=$.hoistableChunks;for(De=0;De<ft.length;De++)l.push(ft[De]);for(N=ft.length=0;N<E.length;N++){var qt=E[N];for($=0;$<qt.length;$++)ao(a,l,qt[$],null)}var zt=a.renderState.preamble,an=zt.headChunks;if(zt.htmlChunks||an){var En=Ie("head");l.push(En)}var dt=zt.bodyChunks;if(dt)for(E=0;E<dt.length;E++)l.push(dt[E]);ao(a,l,v,null),a.completedRootSegment=null;var wt=a.renderState;if(a.allPendingTasks!==0||a.clientRenderedBoundaries.length!==0||a.completedBoundaries.length!==0||a.trackedPostpones!==null&&(a.trackedPostpones.rootNodes.length!==0||a.trackedPostpones.rootSlots!==null)){var kt=a.resumableState;if((kt.instructions&64)===0){if(kt.instructions|=64,l.push(wt.startInlineScript),(kt.instructions&32)===0){kt.instructions|=32;var tn="_"+kt.idPrefix+"R_";l.push(' id="');var jn=ne(tn);l.push(jn),l.push('"')}l.push(">"),l.push("requestAnimationFrame(function(){$RT=performance.now()});"),l.push("<\/script>")}}Ge(l,wt)}var It=a.renderState;v=0;var gn=It.viewportChunks;for(v=0;v<gn.length;v++)l.push(gn[v]);gn.length=0,It.preconnects.forEach(Ln,l),It.preconnects.clear(),It.fontPreloads.forEach(Ln,l),It.fontPreloads.clear(),It.highImagePreloads.forEach(Ln,l),It.highImagePreloads.clear(),It.styles.forEach(_s,l),It.scripts.forEach(Ln,l),It.scripts.clear(),It.bulkPreloads.forEach(Ln,l),It.bulkPreloads.clear();var dn=It.hoistableChunks;for(v=0;v<dn.length;v++)l.push(dn[v]);dn.length=0;var Hn=a.clientRenderedBoundaries;for(h=0;h<Hn.length;h++){var sn=Hn[h];It=l;var ii=a.resumableState,cn=a.renderState,ir=sn.rootSegmentID,Nn=sn.errorDigest;It.push(cn.startInlineScript),It.push(">"),(ii.instructions&4)===0?(ii.instructions|=4,It.push('$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,null!=c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX("')):It.push('$RX("'),It.push(cn.boundaryPrefix);var Fn=ir.toString(16);if(It.push(Fn),It.push('"'),Nn!=null)if(It.push(","),Nn==null)It.push("null");else{var Nr=Pn(Nn);It.push(Nr)}var Mn=It.push(")<\/script>");if(!Mn){a.destination=null,h++,Hn.splice(0,h);return}}Hn.splice(0,h);var _i=a.completedBoundaries;for(h=0;h<_i.length;h++)if(!wc(a,l,_i[h])){a.destination=null,h++,_i.splice(0,h);return}_i.splice(0,h),dl=!0;var Vn=a.partialBoundaries;for(h=0;h<Vn.length;h++){var Pi=Vn[h];e:{Hn=a,sn=l,ro=Pi.byteSize;var Hi=Pi.completedSegments;for(Mn=0;Mn<Hi.length;Mn++)if(!bu(Hn,sn,Pi,Hi[Mn])){Mn++,Hi.splice(0,Mn);var mr=!1;break e}Hi.splice(0,Mn);var yn=Pi.row;yn!==null&&yn.together&&Pi.pendingTasks===1&&(yn.pendingTasks===1?_c(Hn,yn,yn.hoistables):yn.pendingTasks--),mr=ln(sn,Pi.contentState,Hn.renderState)}if(!mr){a.destination=null,h++,Vn.splice(0,h);return}}Vn.splice(0,h),dl=!1;var Ur=a.completedBoundaries;for(h=0;h<Ur.length;h++)if(!wc(a,l,Ur[h])){a.destination=null,h++,Ur.splice(0,h);return}Ur.splice(0,h)}}finally{dl=!1,h=a.postponedState,h!==null&&(h.nextSegmentId=a.nextSegmentId),a.allPendingTasks===0&&a.clientRenderedBoundaries.length===0&&a.completedBoundaries.length===0&&(a.flushScheduled=!1,h=a.resumableState,h.hasBody&&(Vn=Ie("body"),l.push(Vn)),h.hasHtml&&(h=Ie("html"),l.push(h)),gl(a),a.status=13,l.push(null),a.destination=null)}}function aa(a){if(a.flushScheduled===!1&&a.pingedTasks.length===0&&a.destination!==null){a.flushScheduled=!0;var l=a.destination;l?Ba(a,l):a.flushScheduled=!1}}function za(a,l){if(a.status===12)a.status=13,a=a.fatalError,el(a)&&(a=hc(a)),l.destroy(a);else if(a.status!==13&&a.destination===null){a.destination=l;try{Ba(a,l)}catch(h){zn(a,h,{}),qn(a,h)}}}function pl(a,l){try{if(0<l.size){var h=a.fatalError;l.forEach(function(v){return Fa(v,a,h)}),l.clear()}a.destination!==null&&Ba(a,a.destination)}catch(v){zn(a,v,{}),qn(a,v)}}function gl(a){a=a.renderLifetimeController,a!==null&&a.abort("The render ended.")}function Eu(a,l){if(!(a.aborted||a.status!==11&&a.status!==10)){gl(a);var h=typeof l=="object"&&l!==null&&l.$$typeof===P;a.aborted=!0,l=h?ou(l):l===void 0?Error(t(432)):typeof l=="object"&&l!==null&&typeof l.then=="function"?Error(t(530)):l,a.fatalError=l,l=a.abortableTasks,l.forEach(function(v){return ul(v,a)}),pl(a,l)}}function so(a,l,h){if(l===null)h.rootNodes.push(a);else{var v=h.workingMap,E=v.get(l);E===void 0&&(E=[l[1],l[2],[],null],v.set(l,E),so(E,l[0],h)),E[2].push(a)}}function Tu(){}function Dr(a,l,h,v){var E=!1,N=null,$="",he=!1;if(l=mt(l?l.identifierPrefix:void 0),a=Hf(a,l,st(l,h),vt(0,null,0,null),1/0,Tu,void 0,void 0,function(){he=!0},void 0,void 0,void 0),a.flushScheduled=a.destination!==null,no(a),a.status===10&&(a.status=11),a.trackedPostpones===null&&Ec(a,a.pendingRootTasks===0),Eu(a,v),za(a,{push:function(re){return re!==null&&($+=re),!0},destroy:function(re){E=!0,N=re}}),E&&N!==v)throw N;if(!he)throw Error(t(426));return $}return Vc.renderToStaticMarkup=function(a,l){return Dr(a,l,!0,'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')},Vc.renderToString=function(a,l){return Dr(a,l,!1,'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')},Vc.version="19.3.1",Vc}var zo={};var ig;function jy(){if(ig)return zo;ig=1;var i=ag(),e=sg();function t(r){var s="https://react.dev/errors/"+r;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var f=2;f<arguments.length;f++)s+="&args[]="+encodeURIComponent(arguments[f])}return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),g=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),_=Symbol.for("react.suspense_list"),x=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),U=Symbol.for("react.scope"),w=Symbol.for("react.activity"),y=Symbol.for("react.legacy_hidden"),O=Symbol.for("react.memo_cache_sentinel"),B=Symbol.for("react.view_transition"),P=Symbol.for("react.recoverable"),F=Symbol.iterator;function D(r){return r===null||typeof r!="object"?null:(r=F&&r[F]||r["@@iterator"],typeof r=="function"?r:null)}var V=Symbol.for("react.optimistic_key"),S=Array.isArray,C=Object.prototype.hasOwnProperty;function k(r,s){var f=r.length&3,m=r.length-f,b=s;for(s=0;s<m;){var I=r.charCodeAt(s)&255|(r.charCodeAt(++s)&255)<<8|(r.charCodeAt(++s)&255)<<16|(r.charCodeAt(++s)&255)<<24;++s,I=3432918353*(I&65535)+((3432918353*(I>>>16)&65535)<<16)&4294967295,I=I<<15|I>>>17,I=461845907*(I&65535)+((461845907*(I>>>16)&65535)<<16)&4294967295,b^=I,b=b<<13|b>>>19,b=5*(b&65535)+((5*(b>>>16)&65535)<<16)&4294967295,b=(b&65535)+27492+(((b>>>16)+58964&65535)<<16)}switch(I=0,f){case 3:I^=(r.charCodeAt(s+2)&255)<<16;case 2:I^=(r.charCodeAt(s+1)&255)<<8;case 1:I^=r.charCodeAt(s)&255,I=3432918353*(I&65535)+((3432918353*(I>>>16)&65535)<<16)&4294967295,I=I<<15|I>>>17,b^=461845907*(I&65535)+((461845907*(I>>>16)&65535)<<16)&4294967295}return b^=r.length,b^=b>>>16,b=2246822507*(b&65535)+((2246822507*(b>>>16)&65535)<<16)&4294967295,b^=b>>>13,b=3266489909*(b&65535)+((3266489909*(b>>>16)&65535)<<16)&4294967295,(b^b>>>16)>>>0}var H=new MessageChannel,q=[];H.port1.onmessage=function(){var r=q.shift();r&&r()};var ae=C.call(ArrayBuffer.prototype,"detached");function Y(r){q.push(r),H.port2.postMessage(null)}function ue(r){setTimeout(function(){throw r})}var Se=Promise,be=typeof queueMicrotask=="function"?queueMicrotask:function(r){Se.resolve(null).then(r).catch(ue)},Re=null,ne=0;function G(r,s){if(s.byteLength===0){if(ae&&s.buffer.detached)throw Error(t(612))}else if(2048<s.byteLength)0<ne&&(r.enqueue(new Uint8Array(Re.buffer,0,ne)),Re=new Uint8Array(2048),ne=0),r.enqueue(s);else{var f=Re.length-ne;f<s.byteLength&&(f===0?r.enqueue(Re):(Re.set(s.subarray(0,f),ne),r.enqueue(Re),s=s.subarray(f)),Re=new Uint8Array(2048),ne=0),Re.set(s,ne),ne+=s.byteLength}}function Ee(r,s){return G(r,s),!0}function lt(r){Re&&0<ne&&(r.enqueue(new Uint8Array(Re.buffer,0,ne)),Re=null,ne=0)}var rt=new TextEncoder;function Ae(r){return rt.encode(r)}function oe(r){return rt.encode(r)}function Ct(r){return r.byteLength}function Me(r,s){typeof r.error=="function"?r.error(s):r.close()}var ye=Object.assign,Ke=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ut={},Ye={};function mt(r){return C.call(Ye,r)?!0:C.call(ut,r)?!1:Ke.test(r)?Ye[r]=!0:(ut[r]=!0,!1)}var vt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")),_t=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),At=/["'&<>]/;function Ze(r){if(typeof r=="boolean"||typeof r=="number"||typeof r=="bigint")return""+r;r=""+r;var s=At.exec(r);if(s){var f="",m,b=0;for(m=s.index;m<r.length;m++){switch(r.charCodeAt(m)){case 34:s="&quot;";break;case 38:s="&amp;";break;case 39:s="&#x27;";break;case 60:s="&lt;";break;case 62:s="&gt;";break;default:continue}b!==m&&(f+=r.slice(b,m)),b=m+1,f+=s}r=b!==m?f+r.slice(b,m):f}return r}var xt=/([A-Z])/g,Jt=/^ms-/,Ft=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function jt(r){return Ft.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}var Rt=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Kt=e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},Wt=Kt.d;Kt.d={f:Wt.f,r:Wt.r,D:eo,C:ul,L:Fa,m:Ec,X:fl,S:Tc,M:to};var ht=[],z=null;oe('"></template>');var A=oe("<script"),ie=oe("<\/script>"),te=oe('<script src="'),ge=oe('<script type="module" src="'),Fe=oe(' nonce="'),Be=oe(' integrity="'),me=oe(' crossorigin="'),we=oe(' async=""><\/script>'),ke=oe("<style"),it=/(<\/|<)(s)(cript)/gi;function He(r,s,f,m){return""+s+(f==="s"?"\\u0073":"\\u0053")+m}var ze=oe('<script type="importmap">'),at=oe("<\/script>");function de(r,s,f,m,b,I){f=typeof s=="string"?s:s&&s.script;var X=f===void 0?A:oe('<script nonce="'+Ze(f)+'"'),J=typeof s=="string"?void 0:s&&s.style,j=J===void 0?ke:oe('<style nonce="'+Ze(J)+'"'),ee=r.idPrefix,Te=[],Ce=r.bootstrapScriptContent,Ve=r.bootstrapScripts,Xe=r.bootstrapModules;if(Ce!==void 0&&(Te.push(X),ys(Te,r),Te.push(pn,Ae((""+Ce).replace(it,He)),ie)),Ce=[],m!==void 0&&(Ce.push(f===void 0?ze:oe('<script type="importmap" nonce="'+Ze(f)+'">')),Ce.push(Ae((""+JSON.stringify(m)).replace(it,He))),Ce.push(at)),m=b?{preconnects:"",fontPreloads:"",highImagePreloads:"",remainingCapacity:2+(typeof I=="number"?I:2e3)}:null,b={placeholderPrefix:oe(ee+"P:"),segmentPrefix:oe(ee+"S:"),boundaryPrefix:oe(ee+"B:"),startInlineScript:X,startInlineStyle:j,preamble:W(),externalRuntimeScript:null,bootstrapChunks:Te,importMapChunks:Ce,onHeaders:b,headers:m,resets:{font:{},dns:{},connect:{default:{},anonymous:{},credentials:{}},image:{},style:{}},charsetChunks:[],viewportChunks:[],hoistableChunks:[],preconnects:new Set,fontPreloads:new Set,highImagePreloads:new Set,styles:new Map,bootstrapScripts:new Set,scripts:new Set,bulkPreloads:new Set,preloads:{images:new Map,stylesheets:new Map,scripts:new Map,moduleScripts:new Map},nonce:{script:f,style:J},hoistableState:null,stylesToHoist:!1},Ve!==void 0)for(m=0;m<Ve.length;m++)ee=Ve[m],J=X=void 0,j={rel:"preload",as:"script",fetchPriority:"low",nonce:s},typeof ee=="string"?j.href=I=ee:(j.href=I=ee.src,j.integrity=J=typeof ee.integrity=="string"?ee.integrity:void 0,j.crossOrigin=X=typeof ee=="string"||ee.crossOrigin==null?void 0:ee.crossOrigin==="use-credentials"?"use-credentials":""),ee=r,Ce=I,ee.scriptResources[Ce]=null,ee.moduleScriptResources[Ce]=null,ee=[],Ne(ee,j),b.bootstrapScripts.add(ee),Te.push(te,Ae(Ze(I)),ln),f&&Te.push(Fe,Ae(Ze(f)),ln),typeof J=="string"&&Te.push(Be,Ae(Ze(J)),ln),typeof X=="string"&&Te.push(me,Ae(Ze(X)),ln),ys(Te,r),Te.push(we);if(Xe!==void 0)for(s=0;s<Xe.length;s++)J=Xe[s],I=m=void 0,X={rel:"modulepreload",fetchPriority:"low",nonce:f},typeof J=="string"?X.href=Ve=J:(X.href=Ve=J.src,X.integrity=I=typeof J.integrity=="string"?J.integrity:void 0,X.crossOrigin=m=typeof J=="string"||J.crossOrigin==null?void 0:J.crossOrigin==="use-credentials"?"use-credentials":""),J=r,j=Ve,J.scriptResources[j]=null,J.moduleScriptResources[j]=null,J=[],Ne(J,X),b.bootstrapScripts.add(J),Te.push(ge,Ae(Ze(Ve)),ln),f&&Te.push(Fe,Ae(Ze(f)),ln),typeof I=="string"&&Te.push(Be,Ae(Ze(I)),ln),typeof m=="string"&&Te.push(me,Ae(Ze(m)),ln),ys(Te,r),Te.push(we);return b}function Pe(r,s,f,m,b){return{idPrefix:r===void 0?"":r,nextFormID:0,streamingFormat:0,bootstrapScriptContent:f,bootstrapScripts:m,bootstrapModules:b,instructions:0,hasBody:!1,hasHtml:!1,unknownResources:{},dnsResources:{},connectResources:{default:{},anonymous:{},credentials:{}},imageResources:{},styleResources:{},scriptResources:{},moduleUnknownResources:{},moduleScriptResources:{}}}function W(){return{htmlChunks:null,headChunks:null,bodyChunks:null}}function _e(r,s,f,m){return{insertionMode:r,selectedValue:s,tagScope:f,viewTransition:m}}function xe(r){return _e(r==="http://www.w3.org/2000/svg"?4:r==="http://www.w3.org/1998/Math/MathML"?5:0,null,0,null)}function Le(r,s,f){var m=r.tagScope&-25;switch(s){case"noscript":return _e(2,null,m|1,null);case"select":return _e(2,f.value!=null?f.value:f.defaultValue,m,null);case"svg":return _e(4,null,m,null);case"picture":return _e(2,null,m|2,null);case"math":return _e(5,null,m,null);case"foreignObject":return _e(2,null,m,null);case"table":return _e(6,null,m,null);case"thead":case"tbody":case"tfoot":return _e(7,null,m,null);case"colgroup":return _e(9,null,m,null);case"tr":return _e(8,null,m,null);case"head":if(2>r.insertionMode)return _e(3,null,m,null);break;case"html":if(r.insertionMode===0)return _e(1,null,m,null)}return 6<=r.insertionMode||2>r.insertionMode?_e(2,null,m,null):r.viewTransition!==null||r.tagScope!==m?_e(r.insertionMode,r.selectedValue,m,null):r}function Ie(r){return r===null?null:{update:r.update,enter:"none",exit:"none",share:r.update,parentEnter:"none",parentExit:"none",name:r.autoName,autoName:r.autoName,nameIdx:0}}function pe(r,s){return s.tagScope&32&&(r.instructions|=128),_e(s.insertionMode,s.selectedValue,s.tagScope|12,Ie(s.viewTransition))}function Ge(r,s){r=Ie(s.viewTransition);var f=s.tagScope|16;return r!==null&&r.share!=="none"&&(f|=64),_e(s.insertionMode,s.selectedValue,f,r)}function Oe(r,s,f){return r="_"+r.idPrefix+"R_"+s,0<f&&(r+="H"+f.toString(32)),r+"_"}var yt=oe("<!-- -->");function Ot(r,s,f,m){return s===""?m:(m&&r.push(yt),r.push(Ae(Ze(s))),!0)}function $t(r,s){s=s.viewTransition,s!==null&&(s.name!=="auto"&&(_n(r,"vt-name",s.nameIdx===0?s.name:s.name+"_"+s.nameIdx),s.nameIdx++),_n(r,"vt-update",s.update),s.enter!=="none"&&_n(r,"vt-enter",s.enter),s.exit!=="none"&&_n(r,"vt-exit",s.exit),s.share!=="none"&&_n(r,"vt-share",s.share))}var Pn=new Map,vs=oe(' style="'),er=oe(":"),fr=oe(";");function ta(r,s){if(typeof s!="object")throw Error(t(62));var f=!0,m;for(m in s)if(C.call(s,m)){var b=s[m];if(b!=null&&typeof b!="boolean"&&b!==""){if(m.indexOf("--")===0){var I=Ae(Ze(m));b=Ae(Ze((""+b).trim()))}else I=Pn.get(m),I===void 0&&(I=oe(Ze(m.replace(xt,"-$1").toLowerCase().replace(Jt,"-ms-"))),Pn.set(m,I)),b=typeof b=="number"?b===0||vt.has(m)?Ae(""+b):Ae(b+"px"):Ae(Ze((""+b).trim()));f?(f=!1,r.push(vs,I,er,b)):r.push(fr,I,er,b)}}f||r.push(ln)}var Jn=oe(" "),ai=oe('="'),ln=oe('"'),Ln=oe('=""');function gi(r,s,f){f&&typeof f!="function"&&typeof f!="symbol"&&r.push(Jn,Ae(s),Ln)}function _n(r,s,f){typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&r.push(Jn,Ae(s),ai,Ae(Ze(f)),ln)}var Ws=oe(Ze("javascript:throw new Error('React form unexpectedly submitted.')")),La=oe('<input type="hidden"');function _s(r,s){this.push(La),hr(r),_n(this,"name",s),_n(this,"value",r),this.push(Ia)}function hr(r){if(typeof r!="string")throw Error(t(480))}function Xs(r,s){if(typeof s.$$FORM_ACTION=="function"){var f=r.nextFormID++;r=r.idPrefix+f;try{var m=s.$$FORM_ACTION(r);if(m){var b=m.data;b?.forEach(hr)}return m}catch(I){if(typeof I=="object"&&I!==null&&typeof I.then=="function")throw I}}return null}function Ys(r,s,f,m,b,I,X,J){var j=null;if(typeof m=="function"){var ee=Xs(s,m);ee!==null?(J=ee.name,m=ee.action||"",b=ee.encType,I=ee.method,X=ee.target,j=ee.data):(r.push(Jn,Ae("formAction"),ai,Ws,ln),X=I=b=m=J=null,ve(s,f))}return J!=null&&Ht(r,"name",J),m!=null&&Ht(r,"formAction",m),b!=null&&Ht(r,"formEncType",b),I!=null&&Ht(r,"formMethod",I),X!=null&&Ht(r,"formTarget",X),j}function Ht(r,s,f){switch(s){case"className":_n(r,"class",f);break;case"tabIndex":_n(r,"tabindex",f);break;case"dir":case"role":case"viewBox":case"width":case"height":_n(r,s,f);break;case"style":ta(r,f);break;case"src":case"href":if(f==="")break;case"action":case"formAction":if(f==null||typeof f=="function"||typeof f=="symbol"||typeof f=="boolean")break;f=jt(""+f),r.push(Jn,Ae(s),ai,Ae(Ze(f)),ln);break;case"defaultValue":case"defaultChecked":case"innerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":case"ref":break;case"autoFocus":case"multiple":case"muted":gi(r,s.toLowerCase(),f);break;case"xlinkHref":if(typeof f=="function"||typeof f=="symbol"||typeof f=="boolean")break;f=jt(""+f),r.push(Jn,Ae("xlink:href"),ai,Ae(Ze(f)),ln);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":typeof f!="function"&&typeof f!="symbol"&&r.push(Jn,Ae(s),ai,Ae(Ze(f)),ln);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":f&&typeof f!="function"&&typeof f!="symbol"&&r.push(Jn,Ae(s),Ln);break;case"capture":case"download":f===!0?r.push(Jn,Ae(s),Ln):f!==!1&&typeof f!="function"&&typeof f!="symbol"&&r.push(Jn,Ae(s),ai,Ae(Ze(f)),ln);break;case"cols":case"rows":case"size":case"span":typeof f!="function"&&typeof f!="symbol"&&!isNaN(f)&&1<=f&&r.push(Jn,Ae(s),ai,Ae(Ze(f)),ln);break;case"rowSpan":case"start":typeof f=="function"||typeof f=="symbol"||isNaN(f)||r.push(Jn,Ae(s),ai,Ae(Ze(f)),ln);break;case"xlinkActuate":_n(r,"xlink:actuate",f);break;case"xlinkArcrole":_n(r,"xlink:arcrole",f);break;case"xlinkRole":_n(r,"xlink:role",f);break;case"xlinkShow":_n(r,"xlink:show",f);break;case"xlinkTitle":_n(r,"xlink:title",f);break;case"xlinkType":_n(r,"xlink:type",f);break;case"xmlBase":_n(r,"xml:base",f);break;case"xmlLang":_n(r,"xml:lang",f);break;case"xmlSpace":_n(r,"xml:space",f);break;default:if((!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=_t.get(s)||s,mt(s))){switch(typeof f){case"function":case"symbol":return;case"boolean":var m=s.toLowerCase().slice(0,5);if(m!=="data-"&&m!=="aria-")return}r.push(Jn,Ae(s),ai,Ae(Ze(f)),ln)}}}var pn=oe(">"),Ia=oe("/>");function si(r,s,f){if(s!=null){if(f!=null)throw Error(t(60));if(typeof s!="object"||!("__html"in s))throw Error(t(61));s=s.__html,s!=null&&r.push(Ae(""+s))}}function Zo(r){var s="";return i.Children.forEach(r,function(f){f!=null&&(s+=f)}),s}var L=oe(' selected=""'),Q=oe(`addEventListener("submit",function(a){if(!a.defaultPrevented){var b=a.target,d=a.submitter,c=b.action,e=d;if(d){var f=d.getAttribute("formAction");null!=f&&(c=f,e=null)}"javascript:throw new Error('React form unexpectedly submitted.')"===c&&(a.preventDefault(),a=new FormData(b,e),c=b.ownerDocument||b,(c.$$reactFormReplay=c.$$reactFormReplay||[]).push(b,d,a))}});`);function ve(r,s){if((r.instructions&16)===0){r.instructions|=16;var f=s.preamble,m=s.bootstrapChunks;(f.htmlChunks||f.headChunks)&&m.length===0?(m.push(s.startInlineScript),ys(m,r),m.push(pn,Q,ie)):m.unshift(s.startInlineScript,pn,Q,ie)}}var le=oe("<!--F!-->"),ce=oe("<!--F-->");function Ne(r,s){r.push(Tt("link"));for(var f in s)if(C.call(s,f)){var m=s[f];if(m!=null)switch(f){case"children":case"dangerouslySetInnerHTML":throw Error(t(399,"link"));default:Ht(r,f,m)}}return r.push(Ia),null}var je=/(<\/|<)(s)(tyle)/gi;function We(r,s,f,m){return""+s+(f==="s"?"\\73 ":"\\53 ")+m}function $e(r,s,f,m){r.push(Tt(f));for(var b in s)if(C.call(s,b)){var I=s[b];if(I!=null)switch(b){case"children":case"dangerouslySetInnerHTML":throw Error(t(399,f));default:Ht(r,b,I)}}return $t(r,m),r.push(Ia),null}function ot(r,s){r.push(Tt("title"));var f=null,m=null,b;for(b in s)if(C.call(s,b)){var I=s[b];if(I!=null)switch(b){case"children":f=I;break;case"dangerouslySetInnerHTML":m=I;break;default:Ht(r,b,I)}}return r.push(pn),s=Array.isArray(f)?2>f.length?f[0]:null:f,typeof s!="function"&&typeof s!="symbol"&&s!==null&&s!==void 0&&r.push(Ae(Ze(""+s))),si(r,m,f),r.push(Kn("title")),null}var bt=oe("<!--head-->"),Mt=oe("<!--body-->"),st=oe("<!--html-->");function Bt(r,s){r.push(Tt("script"));var f=null,m=null,b;for(b in s)if(C.call(s,b)){var I=s[b];if(I!=null)switch(b){case"children":f=I;break;case"dangerouslySetInnerHTML":m=I;break;default:Ht(r,b,I)}}return r.push(pn),si(r,m,f),typeof f=="string"&&r.push(Ae((""+f).replace(it,He))),r.push(Kn("script")),null}function rn(r,s,f,m){r.push(Tt(f));var b=f=null,I;for(I in s)if(C.call(s,I)){var X=s[I];if(X!=null)switch(I){case"children":f=X;break;case"dangerouslySetInnerHTML":b=X;break;default:Ht(r,I,X)}}return $t(r,m),r.push(pn),si(r,b,f),f}function Qt(r,s,f,m){r.push(Tt(f));var b=f=null,I;for(I in s)if(C.call(s,I)){var X=s[I];if(X!=null)switch(I){case"children":f=X;break;case"dangerouslySetInnerHTML":b=X;break;default:Ht(r,I,X)}}return $t(r,m),r.push(pn),si(r,b,f),typeof f=="string"?(r.push(Ae(Ze(f))),null):f}var Xt=oe(`
`),In=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,et=new Map;function Tt(r){var s=et.get(r);if(s===void 0){if(!In.test(r))throw Error(t(65,r));s=oe("<"+r),et.set(r,s)}return s}var Pt=oe("<!DOCTYPE html>");function oi(r,s,f,m,b,I,X,J,j){switch(s){case"div":case"span":case"svg":case"path":break;case"a":r.push(Tt("a"));var ee=null,Te=null,Ce;for(Ce in f)if(C.call(f,Ce)){var Ve=f[Ce];if(Ve!=null)switch(Ce){case"children":ee=Ve;break;case"dangerouslySetInnerHTML":Te=Ve;break;case"href":Ve===""?_n(r,"href",""):Ht(r,Ce,Ve);break;default:Ht(r,Ce,Ve)}}if($t(r,J),r.push(pn),si(r,Te,ee),typeof ee=="string"){r.push(Ae(Ze(ee)));var Xe=null}else Xe=ee;return Xe;case"g":case"p":case"li":break;case"select":r.push(Tt("select"));var nt=null,St=null,Tn;for(Tn in f)if(C.call(f,Tn)){var Xn=f[Tn];if(Xn!=null)switch(Tn){case"children":nt=Xn;break;case"dangerouslySetInnerHTML":St=Xn;break;case"defaultValue":case"value":break;default:Ht(r,Tn,Xn)}}return $t(r,J),r.push(pn),si(r,St,nt),nt;case"option":var nn=J.selectedValue;r.push(Tt("option"));var yi=null,Di=null,Ni=null,pt=null,vn;for(vn in f)if(C.call(f,vn)){var Ui=f[vn];if(Ui!=null)switch(vn){case"children":yi=Ui;break;case"selected":Ni=Ui;break;case"dangerouslySetInnerHTML":pt=Ui;break;case"value":Di=Ui;default:Ht(r,vn,Ui)}}if(nn!=null){var ci=Di!==null?""+Di:Zo(yi);if(S(nn)){for(var wn=0;wn<nn.length;wn++)if(""+nn[wn]===ci){r.push(L);break}}else""+nn===ci&&r.push(L)}else Ni&&r.push(L);return r.push(pn),si(r,pt,yi),yi;case"textarea":r.push(Tt("textarea"));var Yn=null,wr=null,Gn=null,Fi;for(Fi in f)if(C.call(f,Fi)){var Sn=f[Fi];if(Sn!=null)switch(Fi){case"children":Gn=Sn;break;case"value":Yn=Sn;break;case"defaultValue":wr=Sn;break;case"dangerouslySetInnerHTML":throw Error(t(91));default:Ht(r,Fi,Sn)}}if(Yn===null&&wr!==null&&(Yn=wr),$t(r,J),r.push(pn),Gn!=null){if(Yn!=null)throw Error(t(92));if(S(Gn)){if(1<Gn.length)throw Error(t(93));Yn=""+Gn[0]}Yn=""+Gn}return typeof Yn=="string"&&Yn[0]===`
`&&r.push(Xt),Yn!==null&&r.push(Ae(Ze(""+Yn))),null;case"input":r.push(Tt("input"));var Wr=null,Ji=null,An=null,va=null,Xr=null,Ar=null,Si=null,Rc=null,yl=null,xo;for(xo in f)if(C.call(f,xo)){var ui=f[xo];if(ui!=null)switch(xo){case"children":case"dangerouslySetInnerHTML":throw Error(t(399,"input"));case"name":Wr=ui;break;case"formAction":Ji=ui;break;case"formEncType":An=ui;break;case"formMethod":va=ui;break;case"formTarget":Xr=ui;break;case"defaultChecked":yl=ui;break;case"defaultValue":Si=ui;break;case"checked":Rc=ui;break;case"value":Ar=ui;break;default:Ht(r,xo,ui)}}var Au=Ys(r,m,b,Ji,An,va,Xr,Wr);return Rc!==null?gi(r,"checked",Rc):yl!==null&&gi(r,"checked",yl),Ar!==null?Ht(r,"value",Ar):Si!==null&&Ht(r,"value",Si),$t(r,J),r.push(Ia),Au?.forEach(_s,r),null;case"button":r.push(Tt("button"));var Mo=null,_a=null,ws=null,Cc=null,Sl=null,bl=null,Ru=null,xa;for(xa in f)if(C.call(f,xa)){var bi=f[xa];if(bi!=null)switch(xa){case"children":Mo=bi;break;case"dangerouslySetInnerHTML":_a=bi;break;case"name":ws=bi;break;case"formAction":Cc=bi;break;case"formEncType":Sl=bi;break;case"formMethod":bl=bi;break;case"formTarget":Ru=bi;break;default:Ht(r,xa,bi)}}var Cu=Ys(r,m,b,Cc,Sl,bl,Ru,ws);if($t(r,J),r.push(pn),Cu?.forEach(_s,r),si(r,_a,Mo),typeof Mo=="string"){r.push(Ae(Ze(Mo)));var Yr=null}else Yr=Mo;return Yr;case"form":r.push(Tt("form"));var yo=null,Pu=null,Ma=null,So=null,bo=null,$a=null,ya;for(ya in f)if(C.call(f,ya)){var Ki=f[ya];if(Ki!=null)switch(ya){case"children":yo=Ki;break;case"dangerouslySetInnerHTML":Pu=Ki;break;case"action":Ma=Ki;break;case"encType":So=Ki;break;case"method":bo=Ki;break;case"target":$a=Ki;break;default:Ht(r,ya,Ki)}}var As=null,es=null;if(typeof Ma=="function"){var Rr=Xs(m,Ma);Rr!==null?(Ma=Rr.action||"",So=Rr.encType,bo=Rr.method,$a=Rr.target,As=Rr.data,es=Rr.name):(r.push(Jn,Ae("action"),ai,Ws,ln),$a=bo=So=Ma=null,ve(m,b))}if(Ma!=null&&Ht(r,"action",Ma),So!=null&&Ht(r,"encType",So),bo!=null&&Ht(r,"method",bo),$a!=null&&Ht(r,"target",$a),$t(r,J),r.push(pn),es!==null&&(r.push(La),_n(r,"name",es),r.push(Ia),As?.forEach(_s,r)),si(r,Pu,yo),typeof yo=="string"){r.push(Ae(Ze(yo)));var El=null}else El=yo;return El;case"menuitem":r.push(Tt("menuitem"));for(var Tl in f)if(C.call(f,Tl)){var Rs=f[Tl];if(Rs!=null)switch(Tl){case"children":case"dangerouslySetInnerHTML":throw Error(t(400));default:Ht(r,Tl,Rs)}}return $t(r,J),r.push(pn),null;case"object":r.push(Tt("object"));var Eo=null,Pc=null,To;for(To in f)if(C.call(f,To)){var Cs=f[To];if(Cs!=null)switch(To){case"children":Eo=Cs;break;case"dangerouslySetInnerHTML":Pc=Cs;break;case"data":var Lu=jt(""+Cs);if(Lu==="")break;r.push(Jn,Ae("data"),ai,Ae(Ze(Lu)),ln);break;default:Ht(r,To,Cs)}}if($t(r,J),r.push(pn),si(r,Pc,Eo),typeof Eo=="string"){r.push(Ae(Ze(Eo)));var Iu=null}else Iu=Eo;return Iu;case"title":var Du=J.tagScope&1,wl=J.tagScope&4;if(J.insertionMode===4||Du||f.itemProp!=null)var Zr=ot(r,f);else wl?Zr=null:(ot(b.hoistableChunks,f),Zr=void 0);return Zr;case"link":var Lc=J.tagScope&1,Nu=J.tagScope&4,Gf=f.rel,Qi=f.href,wo=f.precedence;if(J.insertionMode===4||Lc||f.itemProp!=null||typeof Gf!="string"||typeof Qi!="string"||Qi===""){Ne(r,f);var Ps=null}else if(f.rel==="stylesheet")if(typeof wo!="string"||f.disabled!=null||f.onLoad||f.onError)Ps=Ne(r,f);else{var ts=b.styles.get(wo),un=m.styleResources.hasOwnProperty(Qi)?m.styleResources[Qi]:void 0;if(un!==null){m.styleResources[Qi]=null,ts||(ts={precedence:Ae(Ze(wo)),rules:[],hrefs:[],sheets:new Map},b.styles.set(wo,ts));var qi={state:0,props:ye({},f,{"data-precedence":f.precedence,precedence:null})};if(un){un.length===2&&nr(qi.props,un);var Oi=b.preloads.stylesheets.get(Qi);Oi&&0<Oi.length?Oi.length=0:qi.state=1}ts.sheets.set(Qi,qi),X&&X.stylesheets.add(qi)}else if(ts){var Al=ts.sheets.get(Qi);Al&&X&&X.stylesheets.add(Al)}j&&r.push(yt),Ps=null}else f.onLoad||f.onError?Ps=Ne(r,f):(j&&r.push(yt),Ps=Nu?null:Ne(b.hoistableChunks,f));return Ps;case"script":var Uu=J.tagScope&1,Ls=f.async;if(typeof f.src!="string"||!f.src||!Ls||typeof Ls=="function"||typeof Ls=="symbol"||f.onLoad||f.onError||J.insertionMode===4||Uu||f.itemProp!=null)var Ic=Bt(r,f);else{var Ao=f.src;if(f.type==="module")var Ro=m.moduleScriptResources,Fu=b.preloads.moduleScripts;else Ro=m.scriptResources,Fu=b.preloads.scripts;var Rl=Ro.hasOwnProperty(Ao)?Ro[Ao]:void 0;if(Rl!==null){Ro[Ao]=null;var Cl=f;if(Rl){Rl.length===2&&(Cl=ye({},f),nr(Cl,Rl));var Pl=Fu.get(Ao);Pl&&(Pl.length=0)}var Ll=[];b.scripts.add(Ll),Bt(Ll,Cl)}j&&r.push(yt),Ic=null}return Ic;case"style":var Vf=J.tagScope&1,Il=f.precedence,Is=f.href,Ou=f.nonce;if(J.insertionMode===4||Vf||f.itemProp!=null||typeof Il!="string"||typeof Is!="string"||Is===""){r.push(Tt("style"));var Ds=null,Dl=null,Ns;for(Ns in f)if(C.call(f,Ns)){var ns=f[Ns];if(ns!=null)switch(Ns){case"children":Ds=ns;break;case"dangerouslySetInnerHTML":Dl=ns;break;default:Ht(r,Ns,ns)}}r.push(pn);var Co=Array.isArray(Ds)?2>Ds.length?Ds[0]:null:Ds;typeof Co!="function"&&typeof Co!="symbol"&&Co!==null&&Co!==void 0&&r.push(Ae((""+Co).replace(je,We))),si(r,Dl,Ds),r.push(Kn("style"));var Bu=null}else{var is=b.styles.get(Il);if((m.styleResources.hasOwnProperty(Is)?m.styleResources[Is]:void 0)!==null){m.styleResources[Is]=null,is||(is={precedence:Ae(Ze(Il)),rules:[],hrefs:[],sheets:new Map},b.styles.set(Il,is));var zu=b.nonce.style;if(!zu||zu===Ou){is.hrefs.push(Ae(Ze(Is)));var ku=is.rules,Us=null,Nl=null,Hu;for(Hu in f)if(C.call(f,Hu)){var Wf=f[Hu];if(Wf!=null)switch(Hu){case"children":Us=Wf;break;case"dangerouslySetInnerHTML":Nl=Wf}}var Dc=Array.isArray(Us)?2>Us.length?Us[0]:null:Us;typeof Dc!="function"&&typeof Dc!="symbol"&&Dc!==null&&Dc!==void 0&&ku.push(Ae((""+Dc).replace(je,We))),si(ku,Nl,Us)}}is&&X&&X.styles.add(is),j&&r.push(yt),Bu=void 0}return Bu;case"meta":var Jg=J.tagScope&1,Kg=J.tagScope&4;if(J.insertionMode===4||Jg||f.itemProp!=null)var Xd=$e(r,f,"meta",J);else j&&r.push(yt),Xd=Kg?null:typeof f.charSet=="string"?$e(b.charsetChunks,f,"meta",J):f.name==="viewport"?$e(b.viewportChunks,f,"meta",J):$e(b.hoistableChunks,f,"meta",J);return Xd;case"listing":case"pre":r.push(Tt(s));var Nc=null,Uc=null,Fc;for(Fc in f)if(C.call(f,Fc)){var Gu=f[Fc];if(Gu!=null)switch(Fc){case"children":Nc=Gu;break;case"dangerouslySetInnerHTML":Uc=Gu;break;default:Ht(r,Fc,Gu)}}if($t(r,J),r.push(pn),Uc!=null){if(Nc!=null)throw Error(t(60));if(typeof Uc!="object"||!("__html"in Uc))throw Error(t(61));var Po=Uc.__html;Po!=null&&(typeof Po=="string"&&0<Po.length&&Po[0]===`
`?r.push(Xt,Ae(Po)):r.push(Ae(""+Po)))}return typeof Nc=="string"&&Nc[0]===`
`&&r.push(Xt),Nc;case"img":var Qg=J.tagScope&3,Ei=f.src,fi=f.srcSet;if(!(f.loading==="lazy"||!Ei&&!fi||typeof Ei!="string"&&Ei!=null||typeof fi!="string"&&fi!=null||f.fetchPriority==="low"||Qg)&&(typeof Ei!="string"||Ei[4]!==":"||Ei[0]!=="d"&&Ei[0]!=="D"||Ei[1]!=="a"&&Ei[1]!=="A"||Ei[2]!=="t"&&Ei[2]!=="T"||Ei[3]!=="a"&&Ei[3]!=="A")&&(typeof fi!="string"||fi[4]!==":"||fi[0]!=="d"&&fi[0]!=="D"||fi[1]!=="a"&&fi[1]!=="A"||fi[2]!=="t"&&fi[2]!=="T"||fi[3]!=="a"&&fi[3]!=="A")){X!==null&&J.tagScope&64&&(X.suspenseyImages=!0);var Yd=typeof f.sizes=="string"?f.sizes:void 0,Ul=fi?fi+`
`+(Yd||""):Ei,Xf=b.preloads.images,Lo=Xf.get(Ul);if(Lo)(f.fetchPriority==="high"||10>b.highImagePreloads.size)&&(Xf.delete(Ul),b.highImagePreloads.add(Lo));else if(!m.imageResources.hasOwnProperty(Ul)){m.imageResources[Ul]=ht;var Yf=f.crossOrigin,Zd=typeof Yf=="string"?Yf==="use-credentials"?Yf:"":void 0,Io=b.headers,Zf;Io&&0<Io.remainingCapacity&&typeof f.srcSet!="string"&&(f.fetchPriority==="high"||500>Io.highImagePreloads.length)&&(Zf=no(Ei,"image",{imageSrcSet:f.srcSet,imageSizes:f.sizes,crossOrigin:Zd,integrity:f.integrity,nonce:f.nonce,type:f.type,fetchPriority:f.fetchPriority,referrerPolicy:f.referrerPolicy}),0<=(Io.remainingCapacity-=Zf.length+2))?(b.resets.image[Ul]=ht,Io.highImagePreloads&&(Io.highImagePreloads+=", "),Io.highImagePreloads+=Zf):(Lo=[],Ne(Lo,{rel:"preload",as:"image",href:fi?void 0:Ei,imageSrcSet:fi,imageSizes:Yd,crossOrigin:Zd,integrity:f.integrity,type:f.type,fetchPriority:f.fetchPriority,referrerPolicy:f.referrerPolicy}),f.fetchPriority==="high"||10>b.highImagePreloads.size?b.highImagePreloads.add(Lo):(b.bulkPreloads.add(Lo),Xf.set(Ul,Lo)))}}return $e(r,f,"img",J);case"base":case"area":case"br":case"col":case"embed":case"hr":case"keygen":case"param":case"source":case"track":case"wbr":return $e(r,f,s,J);case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":break;case"head":if(2>J.insertionMode){var Jf=I||b.preamble;if(Jf.headChunks)throw Error(t(545,"`<head>`"));I!==null&&r.push(bt),Jf.headChunks=[];var Jd=rn(Jf.headChunks,f,"head",J)}else Jd=Qt(r,f,"head",J);return Jd;case"body":if(2>J.insertionMode){var Kf=I||b.preamble;if(Kf.bodyChunks)throw Error(t(545,"`<body>`"));I!==null&&r.push(Mt),Kf.bodyChunks=[];var Kd=rn(Kf.bodyChunks,f,"body",J)}else Kd=Qt(r,f,"body",J);return Kd;case"html":if(J.insertionMode===0){var Qf=I||b.preamble;if(Qf.htmlChunks)throw Error(t(545,"`<html>`"));I!==null&&r.push(st),Qf.htmlChunks=[Pt];var Qd=rn(Qf.htmlChunks,f,"html",J)}else Qd=Qt(r,f,"html",J);return Qd;default:if(s.indexOf("-")!==-1){r.push(Tt(s));var qf=null,qd=null,Fl;for(Fl in f)if(C.call(f,Fl)){var Jr=f[Fl];if(Jr!=null){var jd=Fl;switch(Fl){case"children":qf=Jr;break;case"dangerouslySetInnerHTML":qd=Jr;break;case"style":ta(r,Jr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"ref":break;case"className":jd="class";default:if(mt(Fl)&&typeof Jr!="function"&&typeof Jr!="symbol"&&Jr!==!1){if(Jr===!0)Jr="";else if(typeof Jr=="object")continue;r.push(Jn,Ae(jd),ai,Ae(Ze(Jr)),ln)}}}}return $t(r,J),r.push(pn),si(r,qd,qf),qf}}return Qt(r,f,s,J)}var mi=new Map;function Kn(r){var s=mi.get(r);return s===void 0&&(s=oe("</"+r+">"),mi.set(r,s)),s}function dr(r,s){r=r.preamble,r.htmlChunks===null&&s.htmlChunks&&(r.htmlChunks=s.htmlChunks),r.headChunks===null&&s.headChunks&&(r.headChunks=s.headChunks),r.bodyChunks===null&&s.bodyChunks&&(r.bodyChunks=s.bodyChunks)}function Lt(r,s){s=s.bootstrapChunks;for(var f=0;f<s.length-1;f++)G(r,s[f]);return f<s.length?(f=s[f],s.length=0,Ee(r,f)):!0}var xn=oe("requestAnimationFrame(function(){$RT=performance.now()});"),pr=oe('<template id="'),en=oe('"></template>'),Qn=oe("<!--&-->"),tr=oe("<!--/&-->"),Jo=oe("<!--$-->"),Lf=oe('<!--$?--><template id="'),If=oe('"></template>'),vi=oe("<!--$!-->"),li=oe("<!--/$-->"),Df=oe("<template"),Ko=oe('"'),Qo=oe(' data-dgst="');oe(' data-msg="'),oe(' data-stck="'),oe(' data-cstck="');var Nf=oe("></template>");function su(r,s,f){if(G(r,Lf),f===null)throw Error(t(395));return G(r,s.boundaryPrefix),G(r,Ae(f.toString(16))),Ee(r,If)}var Lr=oe('<div hidden id="'),cc=oe('">'),uc=oe("</div>"),fc=oe('<svg aria-hidden="true" style="display:none" id="'),qo=oe('">'),hn=oe("</svg>"),Zs=oe('<math aria-hidden="true" style="display:none" id="'),jo=oe('">'),Js=oe("</math>"),Ks=oe('<table hidden id="'),Qs=oe('">'),$o=oe("</table>"),xs=oe('<table hidden><tbody id="'),ou=oe('">'),el=oe("</tbody></table>"),hc=oe('<table hidden><tr id="'),na=oe('">'),tl=oe("</tr></table>"),Ir=oe('<table hidden><colgroup id="'),lu=oe('">'),dc=oe("</colgroup></table>");function ia(r,s,f,m){switch(f.insertionMode){case 0:case 1:case 3:case 2:return G(r,Lr),G(r,s.segmentPrefix),G(r,Ae(m.toString(16))),Ee(r,cc);case 4:return G(r,fc),G(r,s.segmentPrefix),G(r,Ae(m.toString(16))),Ee(r,qo);case 5:return G(r,Zs),G(r,s.segmentPrefix),G(r,Ae(m.toString(16))),Ee(r,jo);case 6:return G(r,Ks),G(r,s.segmentPrefix),G(r,Ae(m.toString(16))),Ee(r,Qs);case 7:return G(r,xs),G(r,s.segmentPrefix),G(r,Ae(m.toString(16))),Ee(r,ou);case 8:return G(r,hc),G(r,s.segmentPrefix),G(r,Ae(m.toString(16))),Ee(r,na);case 9:return G(r,Ir),G(r,s.segmentPrefix),G(r,Ae(m.toString(16))),Ee(r,lu);default:throw Error(t(397))}}function qs(r,s){switch(s.insertionMode){case 0:case 1:case 3:case 2:return Ee(r,uc);case 4:return Ee(r,hn);case 5:return Ee(r,Js);case 6:return Ee(r,$o);case 7:return Ee(r,el);case 8:return Ee(r,tl);case 9:return Ee(r,dc);default:throw Error(t(397))}}var cu=oe('$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'),uu=oe('$RS("'),fu=oe('","'),Uf=oe('")<\/script>');oe('<template data-rsi="" data-sid="'),oe('" data-pid="');var hu=oe(`$RB=[];$RV=function(a){$RT=performance.now();for(var b=0;b<a.length;b+=2){var c=a[b],e=a[b+1];null!==e.parentNode&&e.parentNode.removeChild(e);var f=c.parentNode;if(f){var g=c.previousSibling,h=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d||"/&"===d)if(0===h)break;else h--;else"$"!==d&&"$?"!==d&&"$~"!==d&&"$!"!==d&&"&"!==d||h++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;e.firstChild;)f.insertBefore(e.firstChild,c);g.data="$";g._reactRetry&&requestAnimationFrame(g._reactRetry)}}a.length=0};
$RC=function(a,b){if(b=document.getElementById(b))(a=document.getElementById(a))?(a.previousSibling.data="$~",$RB.push(a,b),2===$RB.length&&("number"!==typeof $RT?requestAnimationFrame($RV.bind(null,$RB)):(a=performance.now(),setTimeout($RV.bind(null,$RB),2300>a&&2E3<a?2300-a:$RT+300-a)))):b.parentNode.removeChild(b)};`),du=Ae(`$RV=function(B,g){function h(a,c){var e=a.getAttribute(c);e&&(c=a.style,l.push(a,c.viewTransitionName,c.viewTransitionClass),"auto"!==e&&(c.viewTransitionClass=e),(a=a.getAttribute("vt-name"))||(a="_T_"+N++ +"_"),a=CSS.escape(a)!==a?"r-"+btoa(a).replace(/=/g,""):a,c.viewTransitionName=a,C=!0)}var C=!1,N=0,l=[];try{var f=document.__reactViewTransition;if(f){f.finished.finally($RV.bind(null,g));return}var m=new Map;for(f=1;f<g.length;f+=2)for(var k=g[f].querySelectorAll("[vt-share]"),d=0;d<k.length;d++){var b=k[d];m.set(b.getAttribute("vt-name"),b)}var u=[];for(k=0;k<g.length;k+=2){var D=g[k],x=D.parentNode;if(x){var v=x.getBoundingClientRect();if(v.left||v.top||v.width||v.height){b=D;for(f=0;b;){if(8===b.nodeType){var t=b.data;if("/$"===t)if(0===f)break;else f--;else"$"!==t&&"$?"!==t&&"$~"!==t&&"$!"!==t||f++}else if(1===b.nodeType){d=b;var E=d.getAttribute("vt-name"),y=m.get(E);h(d,y?"vt-share":"vt-exit");y&&(h(y,"vt-share"),m.set(E,null));for(var F=d.querySelectorAll("[vt-share]"),
z=0;z<F.length;z++){var G=F[z],H=G.getAttribute("vt-name"),I=m.get(H);I&&(h(G,"vt-share"),h(I,"vt-share"),m.set(H,null))}var J=d.querySelectorAll("[vt-parent-exit]");for(d=0;d<J.length;d++)h(J[d],"vt-parent-exit")}b=b.nextSibling}for(var K=g[k+1],n=K.firstElementChild;n;){null!==m.get(n.getAttribute("vt-name"))&&h(n,"vt-enter");var L=n.querySelectorAll("[vt-parent-enter]");for(b=0;b<L.length;b++)h(L[b],"vt-parent-enter");n=n.nextElementSibling}b=x;do for(var p=b.firstElementChild;p;){var M=p.getAttribute("vt-update");
M&&"none"!==M&&!l.includes(p)&&h(p,"vt-update");p=p.nextElementSibling}while((b=b.parentNode)&&1===b.nodeType&&"none"!==b.getAttribute("vt-update"));u.push.apply(u,K.querySelectorAll('img[src]:not([loading="lazy"])'))}}}if(C){var A=document.__reactViewTransition=document.startViewTransition({update:function(){B(g);for(var a=[document.documentElement.clientHeight,document.fonts.ready],c={},e=0;e<u.length;c={g:c.g},e++)if(c.g=u[e],!c.g.complete){var q=c.g.getBoundingClientRect();0<q.bottom&&0<q.right&&
q.top<window.innerHeight&&q.left<window.innerWidth&&(q=new Promise(function(w){return function(r){w.g.addEventListener("load",r);w.g.addEventListener("error",r)}}(c)),a.push(q))}return Promise.race([Promise.all(a),new Promise(function(w){var r=performance.now();setTimeout(w,2300>r&&2E3<r?2300-r:500)})])},types:[]});A.ready.finally(function(){for(var a=l.length-3;0<=a;a-=3){var c=l[a],e=c.style;e.viewTransitionName=l[a+1];e.viewTransitionClass=l[a+1];""===c.getAttribute("style")&&c.removeAttribute("style")}});
A.finished.finally(function(){document.__reactViewTransition===A&&(document.__reactViewTransition=null)});$RB=[];return}}catch(a){}B(g)}.bind(null,$RV);`),Ff=oe('$RC("'),pu=oe(`$RM=new Map;$RR=function(n,w,p){function u(q){this._p=null;q()}for(var r=new Map,t=document,h,b,e=t.querySelectorAll("link[data-precedence],style[data-precedence]"),v=[],k=0;b=e[k++];)"not all"===b.getAttribute("media")?v.push(b):("LINK"===b.tagName&&$RM.set(b.getAttribute("href"),b),r.set(b.dataset.precedence,h=b));e=0;b=[];var l,a;for(k=!0;;){if(k){var f=p[e++];if(!f){k=!1;e=0;continue}var c=!1,m=0;var d=f[m++];if(a=$RM.get(d)){var g=a._p;c=!0}else{a=t.createElement("link");a.href=d;a.rel=
"stylesheet";for(a.dataset.precedence=l=f[m++];g=f[m++];)a.setAttribute(g,f[m++]);g=a._p=new Promise(function(q,x){a.onload=u.bind(a,q);a.onerror=u.bind(a,x)});$RM.set(d,a)}d=a.getAttribute("media");!g||d&&!matchMedia(d).matches||b.push(g);if(c)continue}else{a=v[e++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=r.get(l)||h;c===h&&(h=a);r.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=t.head,c.insertBefore(a,c.firstChild))}if(p=document.getElementById(n))p.previousSibling.data=
"$~";Promise.all(b).then($RC.bind(null,n,w),$RX.bind(null,n,"CSS failed to load"))};$RR("`),gu=oe('$RR("'),Of=oe('","'),mu=oe('",'),nl=oe('"'),Bf=oe(")<\/script>");oe('<template data-rci="" data-bid="'),oe('<template data-rri="" data-bid="'),oe('" data-sid="'),oe('" data-sty="');var pc=oe('$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,null!=c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};'),vu=oe('$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,null!=c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX("'),Da=oe('$RX("'),gc=oe('"'),il=oe(","),_u=oe("null"),Ms=oe(")<\/script>");oe('<template data-rxi="" data-bid="'),oe('" data-dgst="'),oe('" data-msg="'),oe('" data-stck="'),oe('" data-cstck="');var zf=/[<\u2028\u2029]/g;function kf(r){return JSON.stringify(r).replace(zf,function(s){switch(s){case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}var Hf=/[&><\u2028\u2029]/g;function Dn(r){return JSON.stringify(r).replace(Hf,function(s){switch(s){case"&":return"\\u0026";case">":return"\\u003e";case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}var rl=oe(' media="not all" data-precedence="'),mc=oe('" data-href="'),al=oe('">'),xu=oe("</style>"),gr=!1,Na=!0;function vc(r){var s=r.rules,f=r.hrefs,m=0;if(f.length){for(G(this,z.startInlineStyle),G(this,rl),G(this,r.precedence),G(this,mc);m<f.length-1;m++)G(this,f[m]),G(this,Mc);for(G(this,f[m]),G(this,al),m=0;m<s.length;m++)G(this,s[m]);Na=Ee(this,xu),gr=!0,s.length=0,f.length=0}}function Ua(r){return r.state!==2?gr=!0:!1}function zn(r,s,f){return gr=!1,Na=!0,z=f,s.styles.forEach(vc,r),z=null,s.stylesheets.forEach(Ua),gr&&(f.stylesToHoist=!0),Na}function qn(r){for(var s=0;s<r.length;s++)G(this,r[s]);r.length=0}var bn=[];function _c(r){Ne(bn,r.props);for(var s=0;s<bn.length;s++)G(this,bn[s]);bn.length=0,r.state=2}var xc=oe(' data-precedence="'),js=oe('" data-href="'),Mc=oe(" "),Mu=oe('">'),yu=oe("</style>");function sl(r){var s=0<r.sheets.size;r.sheets.forEach(_c,this),r.sheets.clear();var f=r.rules,m=r.hrefs;if(!s||m.length){if(G(this,z.startInlineStyle),G(this,xc),G(this,r.precedence),r=0,m.length){for(G(this,js);r<m.length-1;r++)G(this,m[r]),G(this,Mc);G(this,m[r])}for(G(this,Mu),r=0;r<f.length;r++)G(this,f[r]);G(this,yu),f.length=0,m.length=0}}function ol(r){if(r.state===0){r.state=1;var s=r.props;for(Ne(bn,{rel:"preload",as:"style",href:r.props.href,crossOrigin:s.crossOrigin,fetchPriority:s.fetchPriority,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy}),r=0;r<bn.length;r++)G(this,bn[r]);bn.length=0}}function Ci(r){r.sheets.forEach(ol,this),r.sheets.clear()}oe('<link rel="expect" href="#'),oe('" blocking="render"/>');var ll=oe(' id="');function ys(r,s){(s.instructions&32)===0&&(s.instructions|=32,r.push(ll,Ae(Ze("_"+s.idPrefix+"R_")),ln))}var yc=oe("["),Sc=oe(",["),$s=oe(","),cl=oe("]");function Su(r,s){G(r,yc);var f=yc;s.stylesheets.forEach(function(m){if(m.state!==2)if(m.state===3)G(r,f),G(r,Ae(Dn(""+m.props.href))),G(r,cl),f=Sc;else{G(r,f);var b=m.props["data-precedence"],I=m.props,X=jt(""+m.props.href);G(r,Ae(Dn(X))),b=""+b,G(r,$s),G(r,Ae(Dn(b)));for(var J in I)if(C.call(I,J)&&(b=I[J],b!=null))switch(J){case"href":case"rel":case"precedence":case"data-precedence":break;case"children":case"dangerouslySetInnerHTML":throw Error(t(399,"link"));default:kn(r,J,b)}G(r,cl),f=Sc,m.state=3}}),G(r,cl)}function kn(r,s,f){var m=s.toLowerCase();switch(typeof f){case"function":case"symbol":return}switch(s){case"innerHTML":case"dangerouslySetInnerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":case"style":case"ref":return;case"className":m="class",s=""+f;break;case"hidden":if(f===!1)return;s="";break;case"src":case"href":f=jt(f),s=""+f;break;default:if(2<s.length&&(s[0]==="o"||s[0]==="O")&&(s[1]==="n"||s[1]==="N")||!mt(s))return;s=""+f}G(r,$s),G(r,Ae(Dn(m))),G(r,$s),G(r,Ae(Dn(s)))}function bc(){return{styles:new Set,stylesheets:new Set,suspenseyImages:!1}}function eo(r){var s=Yt||null;if(s){var f=s.resumableState,m=s.renderState;if(typeof r=="string"&&r){if(!f.dnsResources.hasOwnProperty(r)){f.dnsResources[r]=null,f=m.headers;var b,I;(I=f&&0<f.remainingCapacity)&&(I=(b="<"+(""+r).replace(io,hl)+">; rel=dns-prefetch",0<=(f.remainingCapacity-=b.length+2))),I?(m.resets.dns[r]=null,f.preconnects&&(f.preconnects+=", "),f.preconnects+=b):(b=[],Ne(b,{href:r,rel:"dns-prefetch"}),m.preconnects.add(b))}qa(s)}}else Wt.D(r)}function ul(r,s){var f=Yt||null;if(f){var m=f.resumableState,b=f.renderState;if(typeof r=="string"&&r){var I=s==="use-credentials"?"credentials":typeof s=="string"?"anonymous":"default";if(!m.connectResources[I].hasOwnProperty(r)){m.connectResources[I][r]=null,m=b.headers;var X,J;if(J=m&&0<m.remainingCapacity){if(J="<"+(""+r).replace(io,hl)+">; rel=preconnect",typeof s=="string"){var j=(""+s).replace(Oa,Ss);J+='; crossorigin="'+j+'"'}J=(X=J,0<=(m.remainingCapacity-=X.length+2))}J?(b.resets.connect[I][r]=null,m.preconnects&&(m.preconnects+=", "),m.preconnects+=X):(I=[],Ne(I,{rel:"preconnect",href:r,crossOrigin:s}),b.preconnects.add(I))}qa(f)}}else Wt.C(r,s)}function Fa(r,s,f){var m=Yt||null;if(m){var b=m.resumableState,I=m.renderState;if(s&&r){switch(s){case"image":if(f)var X=f.imageSrcSet,J=f.imageSizes,j=f.fetchPriority;var ee=X?X+`
`+(J||""):r;if(b.imageResources.hasOwnProperty(ee))return;b.imageResources[ee]=ht,b=I.headers;var Te;b&&0<b.remainingCapacity&&typeof X!="string"&&j==="high"&&(Te=no(r,s,f),0<=(b.remainingCapacity-=Te.length+2))?(I.resets.image[ee]=ht,b.highImagePreloads&&(b.highImagePreloads+=", "),b.highImagePreloads+=Te):(b=[],Ne(b,ye({rel:"preload",href:X?void 0:r,as:s},f)),j==="high"?I.highImagePreloads.add(b):(I.bulkPreloads.add(b),I.preloads.images.set(ee,b)));break;case"style":if(b.styleResources.hasOwnProperty(r))return;X=[],Ne(X,ye({rel:"preload",href:r,as:s},f)),b.styleResources[r]=!f||typeof f.crossOrigin!="string"&&typeof f.integrity!="string"?ht:[f.crossOrigin,f.integrity],I.preloads.stylesheets.set(r,X),I.bulkPreloads.add(X);break;case"script":if(b.scriptResources.hasOwnProperty(r))return;X=[],I.preloads.scripts.set(r,X),I.bulkPreloads.add(X),Ne(X,ye({rel:"preload",href:r,as:s},f)),b.scriptResources[r]=!f||typeof f.crossOrigin!="string"&&typeof f.integrity!="string"?ht:[f.crossOrigin,f.integrity];break;default:if(b.unknownResources.hasOwnProperty(s)){if(X=b.unknownResources[s],X.hasOwnProperty(r))return}else X={},b.unknownResources[s]=X;X[r]=ht,(b=I.headers)&&0<b.remainingCapacity&&s==="font"&&(ee=no(r,s,f),0<=(b.remainingCapacity-=ee.length+2))?(I.resets.font[r]=ht,b.fontPreloads&&(b.fontPreloads+=", "),b.fontPreloads+=ee):(b=[],r=ye({rel:"preload",href:r,as:s},f),Ne(b,r),s)==="font"?I.fontPreloads.add(b):I.bulkPreloads.add(b)}qa(m)}}else Wt.L(r,s,f)}function Ec(r,s){var f=Yt||null;if(f){var m=f.resumableState,b=f.renderState;if(r){var I=s&&typeof s.as=="string"?s.as:"script";switch(I){case"script":if(m.moduleScriptResources.hasOwnProperty(r))return;I=[],m.moduleScriptResources[r]=!s||typeof s.crossOrigin!="string"&&typeof s.integrity!="string"?ht:[s.crossOrigin,s.integrity],b.preloads.moduleScripts.set(r,I);break;default:if(m.moduleUnknownResources.hasOwnProperty(I)){var X=m.moduleUnknownResources[I];if(X.hasOwnProperty(r))return}else X={},m.moduleUnknownResources[I]=X;I=[],X[r]=ht}Ne(I,ye({rel:"modulepreload",href:r},s)),b.bulkPreloads.add(I),qa(f)}}else Wt.m(r,s)}function Tc(r,s,f){var m=Yt||null;if(m){var b=m.resumableState,I=m.renderState;if(r){s=s||"default";var X=I.styles.get(s),J=b.styleResources.hasOwnProperty(r)?b.styleResources[r]:void 0;J!==null&&(b.styleResources[r]=null,X||(X={precedence:Ae(Ze(s)),rules:[],hrefs:[],sheets:new Map},I.styles.set(s,X)),s={state:0,props:ye({rel:"stylesheet",href:r,"data-precedence":s},f)},J&&(J.length===2&&nr(s.props,J),(I=I.preloads.stylesheets.get(r))&&0<I.length?I.length=0:s.state=1),X.sheets.set(r,s),qa(m))}}else Wt.S(r,s,f)}function fl(r,s){var f=Yt||null;if(f){var m=f.resumableState,b=f.renderState;if(r){var I=m.scriptResources.hasOwnProperty(r)?m.scriptResources[r]:void 0;I!==null&&(m.scriptResources[r]=null,s=ye({src:r,async:!0},s),I&&(I.length===2&&nr(s,I),r=b.preloads.scripts.get(r))&&(r.length=0),r=[],b.scripts.add(r),Bt(r,s),qa(f))}}else Wt.X(r,s)}function to(r,s){var f=Yt||null;if(f){var m=f.resumableState,b=f.renderState;if(r){var I=m.moduleScriptResources.hasOwnProperty(r)?m.moduleScriptResources[r]:void 0;I!==null&&(m.moduleScriptResources[r]=null,s=ye({src:r,type:"module",async:!0},s),I&&(I.length===2&&nr(s,I),r=b.preloads.moduleScripts.get(r))&&(r.length=0),r=[],b.scripts.add(r),Bt(r,s),qa(f))}}else Wt.M(r,s)}function nr(r,s){r.crossOrigin==null&&(r.crossOrigin=s[0]),r.integrity==null&&(r.integrity=s[1])}function no(r,s,f){r=(""+r).replace(io,hl),s=(""+s).replace(Oa,Ss),s="<"+r+'>; rel=preload; as="'+s+'"';for(var m in f)C.call(f,m)&&(r=f[m],typeof r=="string"&&(s+="; "+m.toLowerCase()+'="'+(""+r).replace(Oa,Ss)+'"'));return s}var io=/[<>\r\n]/g;function hl(r){switch(r){case"<":return"%3C";case">":return"%3E";case`
`:return"%0A";case"\r":return"%0D";default:throw Error("escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}}var Oa=/["';,\r\n]/g;function Ss(r){switch(r){case'"':return"%22";case"'":return"%27";case";":return"%3B";case",":return"%2C";case`
`:return"%0A";case"\r":return"%0D";default:throw Error("escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}}function ro(r){this.styles.add(r)}function ao(r){this.stylesheets.add(r)}function ra(r,s){s.styles.forEach(ro,r),s.stylesheets.forEach(ao,r),s.suspenseyImages&&(r.suspenseyImages=!0)}function wc(r,s){return s?r.suspenseyImages:0<r.stylesheets.size||r.suspenseyImages}var bu=Function.prototype.bind,dl=Symbol.for("react.client.reference");function Ba(r){if(r==null)return null;if(typeof r=="function")return r.$$typeof===dl?null:r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case c:return"Fragment";case d:return"Profiler";case u:return"StrictMode";case T:return"Suspense";case _:return"SuspenseList";case w:return"Activity";case B:return"ViewTransition"}if(typeof r=="object")switch(r.$$typeof){case o:return"Portal";case g:return r.displayName||"Context";case p:return(r._context.displayName||"Context")+".Consumer";case M:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case x:return s=r.displayName||null,s!==null?s:Ba(r.type)||"Memo";case R:s=r._payload,r=r._init;try{return Ba(r(s))}catch{}}return null}var aa={},za=null;function pl(r,s){if(r!==s){r.context._currentValue=r.parentValue,r=r.parent;var f=s.parent;if(r===null){if(f!==null)throw Error(t(401))}else{if(f===null)throw Error(t(401));pl(r,f)}s.context._currentValue=s.value}}function gl(r){r.context._currentValue=r.parentValue,r=r.parent,r!==null&&gl(r)}function Eu(r){var s=r.parent;s!==null&&Eu(s),r.context._currentValue=r.value}function so(r,s){if(r.context._currentValue=r.parentValue,r=r.parent,r===null)throw Error(t(402));r.depth===s.depth?pl(r,s):so(r,s)}function Tu(r,s){var f=s.parent;if(f===null)throw Error(t(402));r.depth===f.depth?pl(r,f):Tu(r,f),s.context._currentValue=s.value}function Dr(r){var s=za;s!==r&&(s===null?Eu(r):r===null?gl(s):s.depth===r.depth?pl(s,r):s.depth>r.depth?so(s,r):Tu(s,r),za=r)}var a={enqueueSetState:function(r,s){r=r._reactInternals,r.queue!==null&&r.queue.push(s)},enqueueReplaceState:function(r,s){r=r._reactInternals,r.replace=!0,r.queue=[s]},enqueueForceUpdate:function(){}},l={id:1,overflow:""};function h(r){var s=r.overflow;return r=r.id,(r&~(1<<32-E(r)-1)).toString(32)+s}function v(r,s,f){var m=r.id;r=r.overflow;var b=32-E(m)-1;m&=~(1<<b),f+=1;var I=32-E(s)+b;if(30<I){var X=b-b%5;return I=(m&(1<<X)-1).toString(32),m>>=X,b-=X,{id:1<<32-E(s)+b|f<<b|m,overflow:I+r}}return{id:1<<I|f<<b|m,overflow:r}}var E=Math.clz32?Math.clz32:he,N=Math.log,$=Math.LN2;function he(r){return r>>>=0,r===0?32:31-(N(r)/$|0)|0}function re(){}var se=Error(t(460));function De(r,s,f){switch(f=r[f],f===void 0?r.push(s):f!==s&&(s.then(re,re),s=f),s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,r===void 0&&!("reason"in s)?Error(t(600)):r;default:switch(typeof s.status=="string"?s.then(re,re):(r=s,r.status="pending",r.then(function(m){if(s.status==="pending"){var b=s;b.status="fulfilled",b.value=m}},function(m){if(s.status==="pending"){var b=s;b.status="rejected",b.reason=m}})),s.status){case"fulfilled":return s.value;case"rejected":throw s.reason}throw Ue=s,se}}var Ue=null;function Qe(){if(Ue===null)throw Error(t(459));var r=Ue;return Ue=null,r}function Je(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var tt=typeof Object.is=="function"?Object.is:Je,ft=null,qt=null,zt=null,an=null,En=null,dt=null,wt=!1,kt=!1,tn=0,jn=0,It=-1,gn=0,dn=null;function Hn(r){if(r=r._reason,typeof r=="function")try{var s=r()}catch{s="The reason for browser-only rendering could not be determined because its initializer threw."}else s=r;return s=Error(t(603),r===void 0?void 0:{cause:s}),Object.defineProperty(s,P,{value:!0}),s}function sn(r){return typeof r!="object"||r===null?!1:r[P]===!0}function ii(r){var s=Error(t(604),C.call(r,"cause")?{cause:r.cause}:void 0);if(r=r.stack,r!==void 0){var f=r.indexOf(`
`);s.stack=s.name+": "+s.message+(f===-1?"":r.slice(f))}else s.stack=void 0;return s}var cn=null,ir=0;function Nn(){if(ft===null)throw Error(t(321));return ft}function Fn(){if(0<ir)throw Error(t(312));return{memoizedState:null,queue:null,next:null}}function Nr(){return dt===null?En===null?(wt=!1,En=dt=Fn()):(wt=!0,dt=En):dt.next===null?(wt=!1,dt=dt.next=Fn()):(wt=!0,dt=dt.next),dt}function Mn(){var r=dn;return dn=null,r}function _i(){an=zt=qt=ft=null,kt=!1,En=null,ir=0,dt=cn=null}function Vn(r,s){return typeof s=="function"?s(r):s}function Pi(r,s,f){if(ft=Nn(),dt=Nr(),wt){var m=dt.queue;if(s=m.dispatch,cn!==null&&(f=cn.get(m),f!==void 0)){cn.delete(m),m=dt.memoizedState;do m=r(m,f.action),f=f.next;while(f!==null);return dt.memoizedState=m,[m,s]}return[dt.memoizedState,s]}return r=r===Vn?typeof s=="function"?s():s:f!==void 0?f(s):s,dt.memoizedState=r,r=dt.queue={last:null,dispatch:null},r=r.dispatch=mr.bind(null,ft,r),[dt.memoizedState,r]}function Hi(r,s){if(ft=Nn(),dt=Nr(),s=s===void 0?null:s,dt!==null){var f=dt.memoizedState;if(f!==null&&s!==null){var m=f[1];e:if(m===null)m=!1;else{for(var b=0;b<m.length&&b<s.length;b++)if(!tt(s[b],m[b])){m=!1;break e}m=!0}if(m)return f[0]}}return r=r(),dt.memoizedState=[r,s],r}function mr(r,s,f){if(25<=ir)throw Error(t(301));if(r===ft)if(kt=!0,r={action:f,next:null},cn===null&&(cn=new Map),f=cn.get(s),f===void 0)cn.set(s,r);else{for(s=f;s.next!==null;)s=s.next;s.next=r}}function yn(){throw Error(t(440))}function Ur(){throw Error(t(394))}function ka(){throw Error(t(479))}function rr(r,s,f){Nn();var m=jn++,b=zt;if(typeof r.$$FORM_ACTION=="function"){var I=null,X=an;b=b.formState;var J=r.$$IS_SIGNATURE_EQUAL;if(b!==null&&typeof J=="function"){var j=b[1];J.call(r,b[2],b[3])&&(I=f!==void 0?"p"+f:"k"+k(JSON.stringify([X,null,m]),0),j===I&&(It=m,s=b[0]))}var ee=r.bind(null,s);return r=function(Ce){ee(Ce)},typeof ee.$$FORM_ACTION=="function"&&(r.$$FORM_ACTION=function(Ce){Ce=ee.$$FORM_ACTION(Ce),f!==void 0&&(f+="",Ce.action=f);var Ve=Ce.data;return Ve&&(I===null&&(I=f!==void 0?"p"+f:"k"+k(JSON.stringify([X,null,m]),0)),Ve.append("$ACTION_KEY",I)),Ce}),[s,r,!1]}var Te=r.bind(null,s);return[s,function(Ce){Te(Ce)},!1]}function Fr(r){var s=gn;return gn+=1,dn===null&&(dn=[]),De(dn,r,s)}function oo(){throw Error(t(393))}var Ha={readContext:function(r){return r._currentValue},use:function(r){if(r!==null&&typeof r=="object"){if(typeof r.then=="function")return Fr(r);if(r.$$typeof===P)throw Hn(r);if(r.$$typeof===g)return r._currentValue}throw Error(t(438,String(r)))},useContext:function(r){return Nn(),r._currentValue},useMemo:Hi,useReducer:Pi,useRef:function(r){ft=Nn(),dt=Nr();var s=dt.memoizedState;return s===null?(r={current:r},dt.memoizedState=r):s},useState:function(r){return Pi(Vn,r)},useInsertionEffect:re,useLayoutEffect:re,useCallback:function(r,s){return Hi(function(){return r},s)},useImperativeHandle:re,useEffect:re,useDebugValue:re,useDeferredValue:function(r,s){return Nn(),s!==void 0?s:r},useTransition:function(){return Nn(),[!1,Ur]},useId:function(){var r=h(qt.treeContext),s=Or;if(s===null)throw Error(t(404));var f=tn++;return Oe(s,r,f)},useSyncExternalStore:function(r,s,f){if(f===void 0)throw Error(t(407));return f()},useOptimistic:function(r){return Nn(),[r,ka]},useActionState:rr,useFormState:rr,useHostTransitionStatus:function(){return Nn(),Z},useMemoCache:function(r){for(var s=Array(r),f=0;f<r;f++)s[f]=O;return s},useCacheRefresh:function(){return oo},useEffectEvent:function(){return yn}},Or=null,ml={getCacheForType:function(){throw Error(t(248))},cacheSignal:function(){throw Error(t(248))}},Gi,$n;function vr(r){if(Gi===void 0)try{throw Error()}catch(f){var s=f.stack.trim().match(/\n( *(at )?)/);Gi=s&&s[1]||"",$n=-1<f.stack.indexOf(`
    at`)?" (<anonymous>)":-1<f.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Gi+r+$n}var Ga=!1;function _r(r,s){if(!r||Ga)return"";Ga=!0;var f=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var m={DetermineComponentFrameRoot:function(){try{if(s){var Ce=function(){throw Error()};if(Object.defineProperty(Ce.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ce,[])}catch(nt){var Ve=nt}Reflect.construct(r,[],Ce)}else{try{Ce.call()}catch(nt){Ve=nt}Ce=!1;try{var Xe=Object.getOwnPropertyDescriptor(r.prototype,"props");Object.defineProperty(r.prototype,"props",{configurable:!0,set:function(){throw Error()}}),Ce=!0,new r}finally{Ce&&(Xe!==void 0?Object.defineProperty(r.prototype,"props",Xe):delete r.prototype.props)}}}else{try{throw Error()}catch(nt){Ve=nt}(Ce=r())&&typeof Ce.catch=="function"&&Ce.catch(function(){})}}catch(nt){if(nt&&Ve&&typeof nt.stack=="string")return[nt.stack,Ve.stack]}return[null,null]}};m.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var b=Object.getOwnPropertyDescriptor(m.DetermineComponentFrameRoot,"name");b&&b.configurable&&Object.defineProperty(m.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var I=m.DetermineComponentFrameRoot(),X=I[0],J=I[1];if(X&&J){var j=X.split(`
`),ee=J.split(`
`);for(b=m=0;m<j.length&&!j[m].includes("DetermineComponentFrameRoot");)m++;for(;b<ee.length&&!ee[b].includes("DetermineComponentFrameRoot");)b++;if(m===j.length||b===ee.length)for(m=j.length-1,b=ee.length-1;1<=m&&0<=b&&j[m]!==ee[b];)b--;for(;1<=m&&0<=b;m--,b--)if(j[m]!==ee[b]){if(m!==1||b!==1)do if(m--,b--,0>b||j[m]!==ee[b]){var Te=`
`+j[m].replace(" at new "," at ");return r.displayName&&Te.includes("<anonymous>")&&(Te=Te.replace("<anonymous>",r.displayName)),Te}while(1<=m&&0<=b);break}}}finally{Ga=!1,Error.prepareStackTrace=f}return(f=r?r.displayName||r.name:"")?vr(f):""}function lo(r){if(typeof r=="string")return vr(r);if(typeof r=="function")return r.prototype&&r.prototype.isReactComponent?_r(r,!0):_r(r,!1);if(typeof r=="object"&&r!==null){switch(r.$$typeof){case M:return _r(r.render,!1);case x:return _r(r.type,!1);case R:var s=r,f=s._payload;s=s._init;try{r=s(f)}catch{return vr("Lazy")}return lo(r)}if(typeof r.name=="string"){e:{f=r.name,s=r.env;var m=r.debugLocation;if(m!=null&&(r=Error.prepareStackTrace,Error.prepareStackTrace=void 0,m=m.stack,Error.prepareStackTrace=r,m.startsWith(`Error: react-stack-top-frame
`)&&(m=m.slice(29)),r=m.indexOf(`
`),r!==-1&&(m=m.slice(r+1)),r=m.indexOf("react_stack_bottom_frame"),r!==-1&&(r=m.lastIndexOf(`
`,r)),r=r!==-1?m=m.slice(0,r):"",m=r.lastIndexOf(`
`),r=m===-1?r:r.slice(m+1),r.indexOf(f)!==-1)){f=`
`+r;break e}f=vr(f+(s?" ["+s+"]":""))}return f}}switch(r){case _:return vr("SuspenseList");case T:return vr("Suspense");case B:return vr("ViewTransition")}return""}function Vi(r,s){return r=r==null||typeof r=="string"?r:r.default,s=s==null||typeof s=="string"?s:s.default,s==null?r==="auto"?null:r:s==="auto"?null:s}function Li(r,s){return(500<s.byteSize||wc(s.contentState,!1)||s.defer)&&s.preamble===null}function Va(r){if(typeof r=="object"&&r!==null&&typeof r.environmentName=="string"){var s=r.environmentName;r=[r].slice(0),typeof r[0]=="string"?r.splice(0,1,"%c%s%c "+r[0],"background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px"," "+s+" ",""):r.splice(0,0,"%c%s%c","background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px"," "+s+" ",""),r.unshift(console),s=bu.apply(console.error,r),s()}else console.error(r);return null}function Br(r,s,f,m,b,I,X,J,j,ee,Te){var Ce=new Set;this.destination=null,this.flushScheduled=!1,this.resumableState=r,this.renderState=s,this.rootFormatContext=f,this.progressiveChunkSize=m===void 0?12800:m,this.status=10,this.fatalError=null,this.aborted=!1,this.pendingRootTasks=this.allPendingTasks=this.nextSegmentId=0,this.completedPreambleSegments=this.completedRootSegment=null,this.byteSize=0,this.abortableTasks=Ce,this.pingedTasks=[],this.currentTask=null,this.clientRenderedBoundaries=[],this.completedBoundaries=[],this.partialBoundaries=[],this.postponedState=this.trackedPostpones=null,this.onError=b===void 0?Va:b,this.onBrowserBailout=I===void 0?re:I,this.onAllReady=X===void 0?re:X,this.onShellReady=J===void 0?re:J,this.onShellError=j===void 0?re:j,this.onFatalError=ee===void 0?re:ee,this.renderLifetimeController=null,this.formState=Te===void 0?null:Te}function sa(r,s,f,m,b,I,X,J,j,ee,Te,Ce){return s=new Br(s,f,m,b,I,X,J,j,ee,Te,Ce),f=Wi(s,0,null,m,!1,!1),f.parentFlushed=!0,r=ca(s,null,r,-1,null,f,null,null,s.abortableTasks,null,m,null,l,null,null),xi(r),s.pingedTasks.push(r),s}function xr(r,s,f,m,b,I,X,J,j,ee,Te){return r=sa(r,s,f,m,b,I,X,J,j,ee,Te,void 0),r.trackedPostpones={workingMap:new Map,rootNodes:[],rootSlots:null},r}function Wa(r,s,f,m,b,I,X,J,j){return f=new Br(s.resumableState,f,s.rootFormatContext,s.progressiveChunkSize,m,b,I,X,J,j,null),f.nextSegmentId=s.nextSegmentId,typeof s.replaySlots=="number"?(m=Wi(f,0,null,s.rootFormatContext,!1,!1),m.parentFlushed=!0,r=ca(f,null,r,-1,null,m,null,null,f.abortableTasks,null,s.rootFormatContext,null,l,null,null),xi(r),f.pingedTasks.push(r),f):(r=Ii(f,null,{nodes:s.replayNodes,slots:s.replaySlots,pendingTasks:0},r,-1,null,null,f.abortableTasks,null,s.rootFormatContext,null,l,null,null),xi(r),f.pingedTasks.push(r),f)}function oa(r,s,f,m,b,I,X,J,j){return r=Wa(r,s,f,m,b,I,X,J,j),r.trackedPostpones={workingMap:new Map,rootNodes:[],rootSlots:null},r}var Yt=null;function la(r,s){r.pingedTasks.push(s),r.pingedTasks.length===1&&(r.flushScheduled=r.destination!==null,r.trackedPostpones!==null||r.status===10?be(function(){return _l(r)}):Y(function(){return _l(r)}))}function zr(r,s,f,m,b){return f={status:0,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,row:s,completedSegments:[],byteSize:0,defer:b,fallbackAbortableTasks:f,errorDigest:null,contentState:bc(),fallbackState:bc(),preamble:m,tracked:null},s!==null&&(s.pendingTasks++,m=s.boundaries,m!==null&&(r.allPendingTasks++,f.pendingTasks++,m.push(f)),r=s.inheritedHoistables,r!==null&&ra(f.contentState,r)),f}function ca(r,s,f,m,b,I,X,J,j,ee,Te,Ce,Ve,Xe,nt){r.allPendingTasks++,b===null?r.pendingRootTasks++:b.pendingTasks++,Xe!==null&&Xe.pendingTasks++;var St={replay:null,node:f,childIndex:m,ping:{resolve:function(){return la(r,St)},reject:function(Tn){r.aborted?St.abortSet.delete(St)&&Er(St,r,Tn):la(r,St)}},blockedBoundary:b,blockedSegment:I,blockedPreamble:X,hoistableState:J,abortSet:j,keyPath:ee,formatContext:Te,context:Ce,treeContext:Ve,row:Xe,componentStack:nt,thenableState:s};return j.add(St),St}function Ii(r,s,f,m,b,I,X,J,j,ee,Te,Ce,Ve,Xe){r.allPendingTasks++,I===null?r.pendingRootTasks++:I.pendingTasks++,Ve!==null&&Ve.pendingTasks++,f.pendingTasks++;var nt={replay:f,node:m,childIndex:b,ping:{resolve:function(){return la(r,nt)},reject:function(St){r.aborted?nt.abortSet.delete(nt)&&Er(nt,r,St):la(r,nt)}},blockedBoundary:I,blockedSegment:null,blockedPreamble:null,hoistableState:X,abortSet:J,keyPath:j,formatContext:ee,context:Te,treeContext:Ce,row:Ve,componentStack:Xe,thenableState:s};return J.add(nt),nt}function Wi(r,s,f,m,b,I){return{status:0,parentFlushed:!1,id:-1,index:s,chunks:[],children:[],preambleChildren:[],parentFormatContext:m,boundary:f,lastPushedText:b,textEmbedded:I}}function xi(r){var s=r.node;typeof s=="object"&&s!==null&&s.$$typeof===n&&(r.componentStack={parent:r.componentStack,type:s.type})}function Mr(r){return r===null?null:{parent:r.parent,type:"Suspense Fallback"}}function Vt(r){var s={};return r&&Object.defineProperty(s,"componentStack",{configurable:!0,enumerable:!0,get:function(){try{var f="",m=r;do f+=lo(m.type),m=m.parent;while(m);var b=f}catch(I){b=`
Error generating stack: `+I.message+`
`+I.stack}return Object.defineProperty(s,"componentStack",{value:b}),b}}),s}function on(r,s,f){if(sn(s))return r=r.onBrowserBailout,r(s,f),"";if(r=r.onError,s=r(s,f),s==null||typeof s=="string")return s===""?void 0:s}function Wn(r,s){var f=r.onShellError,m=r.onFatalError;r.pendingRootTasks!==0&&f(s),m(s),ja(r),r.destination!==null?(r.status=13,Me(r.destination,s)):(r.status=12,r.aborted||(r.fatalError=s))}function On(r,s){ua(r,s.next,s.hoistables)}function ua(r,s,f){for(;s!==null;){f!==null&&(ra(s.hoistables,f),s.inheritedHoistables=f);var m=s.boundaries;if(m!==null){s.boundaries=null;for(var b=0;b<m.length;b++){var I=m[b];f!==null&&ra(I.contentState,f),Zi(r,I,null,null)}}if(s.pendingTasks--,0<s.pendingTasks)break;f=s.hoistables,s=s.next}}function fa(r,s){var f=s.boundaries;if(f!==null&&s.pendingTasks===f.length){for(var m=!0,b=0;b<f.length;b++){var I=f[b];if(I.pendingTasks!==1||I.parentFlushed||Li(r,I)){m=!1;break}}m&&ua(r,s,s.hoistables)}}function ha(r){var s={pendingTasks:1,boundaries:null,hoistables:bc(),inheritedHoistables:null,together:!1,next:null};return r!==null&&0<r.pendingTasks&&(s.pendingTasks++,s.boundaries=[],r.next=s),s}function co(r,s,f,m,b){var I=s.keyPath,X=s.treeContext,J=s.row;s.keyPath=f,f=m.length;var j=null;if(s.replay!==null){var ee=s.replay.slots;if(ee!==null&&typeof ee=="object")for(var Te=0;Te<f;Te++){var Ce=b!=="backwards"&&b!=="unstable_legacy-backwards"?Te:f-1-Te,Ve=m[Ce];s.row=j=ha(j),s.treeContext=v(X,f,Ce);var Xe=ee[Ce];typeof Xe=="number"?(Yi(r,s,Xe,Ve,Ce),delete ee[Ce]):mn(r,s,Ve,Ce),--j.pendingTasks===0&&On(r,j)}else for(ee=0;ee<f;ee++)Te=b!=="backwards"&&b!=="unstable_legacy-backwards"?ee:f-1-ee,Ce=m[Te],s.row=j=ha(j),s.treeContext=v(X,f,Te),mn(r,s,Ce,Te),--j.pendingTasks===0&&On(r,j)}else if(b!=="backwards"&&b!=="unstable_legacy-backwards")for(b=0;b<f;b++)ee=m[b],s.row=j=ha(j),s.treeContext=v(X,f,b),mn(r,s,ee,b),--j.pendingTasks===0&&On(r,j);else{for(ee=s.blockedSegment,Te=ee.children.length,Ce=ee.chunks.length,Ve=0;Ve<f;Ve++){Xe=b==="unstable_legacy-backwards"?f-1-Ve:Ve;var nt=m[Xe];s.row=j=ha(j),s.treeContext=v(X,f,Xe);var St=Wi(r,Ce,null,s.formatContext,Xe===0?ee.lastPushedText:!0,!0);ee.children.splice(Te,0,St),s.blockedSegment=St;try{mn(r,s,nt,Xe),St.lastPushedText&&St.textEmbedded&&St.chunks.push(yt),St.status=1,Es(r,s.blockedBoundary,St),--j.pendingTasks===0&&On(r,j)}catch(Tn){throw St.status=r.aborted?3:4,Tn}}s.blockedSegment=ee,ee.lastPushedText=!1}J!==null&&j!==null&&0<j.pendingTasks&&(J.pendingTasks++,j.next=J),s.treeContext=X,s.row=J,s.keyPath=I}function Xi(r,s,f,m,b,I){var X=s.thenableState;for(s.thenableState=null,ft={},qt=s,zt=r,an=f,jn=tn=0,It=-1,gn=0,dn=X,r=m(b,I);kt;)kt=!1,jn=tn=0,It=-1,gn=0,ir+=1,dt=null,r=m(b,I);return _i(),r}function Xa(r,s,f,m,b,I,X){var J=!1;if(I!==0&&r.formState!==null){var j=s.blockedSegment;if(j!==null){J=!0,j=j.chunks;for(var ee=0;ee<I;ee++)ee===X?j.push(le):j.push(ce)}}I=s.keyPath,s.keyPath=f,b?(f=s.treeContext,s.treeContext=v(f,1,0),mn(r,s,m,-1),s.treeContext=f):J?mn(r,s,m,-1):Bn(r,s,m,-1),s.keyPath=I}function yr(r,s,f,m,b,I){if(typeof m=="function")if(m.prototype&&m.prototype.isReactComponent){var X=b;if("ref"in b){X={};for(var J in b)J!=="ref"&&(X[J]=b[J])}var j=m.defaultProps;if(j){X===b&&(X=ye({},X,b));for(var ee in j)X[ee]===void 0&&(X[ee]=j[ee])}var Te=X,Ce=aa,Ve=m.contextType;typeof Ve=="object"&&Ve!==null&&(Ce=Ve._currentValue);var Xe=new m(Te,Ce),nt=Xe.state!==void 0?Xe.state:null;Xe.updater=a,Xe.props=Te,Xe.state=nt;var St={queue:[],replace:!1};Xe._reactInternals=St;var Tn=m.contextType;Xe.context=typeof Tn=="object"&&Tn!==null?Tn._currentValue:aa;var Xn=m.getDerivedStateFromProps;if(typeof Xn=="function"){var nn=Xn(Te,nt),yi=nn==null?nt:ye({},nt,nn);Xe.state=yi}if(typeof m.getDerivedStateFromProps!="function"&&typeof Xe.getSnapshotBeforeUpdate!="function"&&(typeof Xe.UNSAFE_componentWillMount=="function"||typeof Xe.componentWillMount=="function")){var Di=Xe.state;if(typeof Xe.componentWillMount=="function"&&Xe.componentWillMount(),typeof Xe.UNSAFE_componentWillMount=="function"&&Xe.UNSAFE_componentWillMount(),Di!==Xe.state&&a.enqueueReplaceState(Xe,Xe.state,null),St.queue!==null&&0<St.queue.length){var Ni=St.queue,pt=St.replace;if(St.queue=null,St.replace=!1,pt&&Ni.length===1)Xe.state=Ni[0];else{for(var vn=pt?Ni[0]:Xe.state,Ui=!0,ci=pt?1:0;ci<Ni.length;ci++){var wn=Ni[ci],Yn=typeof wn=="function"?wn.call(Xe,vn,Te,void 0):wn;Yn!=null&&(Ui?(Ui=!1,vn=ye({},vn,Yn)):ye(vn,Yn))}Xe.state=vn}}else St.queue=null}var wr=Xe.render();if(r.aborted)throw null;var Gn=s.keyPath;s.keyPath=f,Bn(r,s,wr,-1),s.keyPath=Gn}else{var Fi=Xi(r,s,f,m,b,void 0);if(r.aborted)throw null;Xa(r,s,f,Fi,tn!==0,jn,It)}else if(typeof m=="string"){var Sn=s.blockedSegment;if(Sn===null){var Wr=b.children,Ji=s.formatContext,An=s.keyPath;s.formatContext=Le(Ji,m,b),s.keyPath=f,mn(r,s,Wr,-1),s.formatContext=Ji,s.keyPath=An}else{var va=oi(Sn.chunks,m,b,r.resumableState,r.renderState,s.blockedPreamble,s.hoistableState,s.formatContext,Sn.lastPushedText);Sn.lastPushedText=!1;var Xr=s.formatContext,Ar=s.keyPath;if(s.keyPath=f,(s.formatContext=Le(Xr,m,b)).insertionMode===3){var Si=Wi(r,0,null,s.formatContext,!1,!1);Sn.preambleChildren.push(Si),s.blockedSegment=Si;try{mn(r,s,va,-1),Si.lastPushedText&&Si.textEmbedded&&Si.chunks.push(yt),Si.status=1,Es(r,s.blockedBoundary,Si)}finally{s.blockedSegment=Sn}}else mn(r,s,va,-1);s.formatContext=Xr,s.keyPath=Ar;e:{var Rc=Sn.chunks,yl=r.resumableState;switch(m){case"title":case"style":case"script":case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"input":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":break e;case"body":if(1>=Xr.insertionMode){yl.hasBody=!0;break e}break;case"html":if(Xr.insertionMode===0){yl.hasHtml=!0;break e}break;case"head":if(1>=Xr.insertionMode)break e}Rc.push(Kn(m))}Sn.lastPushedText=!1}}else{switch(m){case y:case u:case d:case c:var xo=s.keyPath;s.keyPath=f,Bn(r,s,b.children,-1),s.keyPath=xo;return;case w:var ui=s.blockedSegment;if(ui===null){if(b.mode!=="hidden"){var Au=s.keyPath;s.keyPath=f,mn(r,s,b.children,-1),s.keyPath=Au}}else if(b.mode!=="hidden"){ui.chunks.push(Qn),ui.lastPushedText=!1;var Mo=s.keyPath;s.keyPath=f,mn(r,s,b.children,-1),s.keyPath=Mo,ui.chunks.push(tr),ui.lastPushedText=!1}return;case _:e:{var _a=b.children,ws=b.revealOrder;if(ws!=="independent"&&ws!=="together"){if(S(_a)){co(r,s,f,_a,ws);break e}var Cc=D(_a);if(Cc){var Sl=Cc.call(_a);if(Sl){var bl=Sl.next();if(!bl.done){do bl=Sl.next();while(!bl.done);co(r,s,f,_a,ws)}break e}}}if(ws==="together"){var Ru=s.keyPath,xa=s.row,bi=s.row=ha(null);bi.boundaries=[],bi.together=!0,s.keyPath=f,Bn(r,s,_a,-1),--bi.pendingTasks===0&&On(r,bi),s.keyPath=Ru,s.row=xa,xa!==null&&0<bi.pendingTasks&&(xa.pendingTasks++,bi.next=xa)}else{var Cu=s.keyPath;s.keyPath=f,Bn(r,s,_a,-1),s.keyPath=Cu}}return;case B:var Yr=s.formatContext,yo=s.keyPath,Pu=r.resumableState;if(b.name!=null&&b.name!=="auto")var Ma=b.name;else{var So=h(s.treeContext);Ma=Oe(Pu,So,0)}var bo=Ma,$a=r.resumableState,ya=Vi(b.default,b.update),Ki=Vi(b.default,b.enter),As=Vi(b.default,b.exit),es=Vi(b.default,b.share),Rr=b.name;if(ya==null&&(ya="auto"),Ki==null&&(Ki="auto"),As==null&&(As="auto"),Rr==null){var El=Yr.viewTransition;El!==null?(Rr=El.name,es=El.share):(Rr="auto",es="none")}else es==null&&(es="auto"),Yr.tagScope&4&&($a.instructions|=128);Yr.tagScope&8?$a.instructions|=128:As="none",Yr.tagScope&16?$a.instructions|=128:Ki="none";var Tl={update:ya,enter:Ki,exit:As,share:es,parentEnter:"none",parentExit:"none",name:Rr,autoName:bo,nameIdx:0},Rs=Yr.tagScope&-25;Rs=ya!=="none"?Rs|32:Rs&-33,Ki!=="none"&&(Rs|=64);var Eo=_e(Yr.insertionMode,Yr.selectedValue,Rs,Tl);if(s.formatContext=Eo,s.keyPath=f,b.name!=null&&b.name!=="auto")Bn(r,s,b.children,-1);else{var Pc=s.treeContext;s.treeContext=v(Pc,1,0),mn(r,s,b.children,-1),s.treeContext=Pc}s.formatContext=Yr,s.keyPath=yo;return;case U:throw Error(t(343));case T:e:if(s.replay!==null){var To=s.keyPath,Cs=s.formatContext,Lu=s.row;s.keyPath=f,s.formatContext=Ge(r.resumableState,Cs),s.row=null;var Iu=b.children;try{mn(r,s,Iu,-1)}finally{s.keyPath=To,s.formatContext=Cs,s.row=Lu}}else{var Du=s.keyPath,wl=s.formatContext,Zr=s.row,Lc=s.blockedBoundary,Nu=s.blockedPreamble,Gf=s.hoistableState,Qi=s.blockedSegment,wo=b.fallback,Ps=b.children,ts=new Set,un=zr(r,s.row,ts,2>s.formatContext.insertionMode?{content:W(),fallback:W()}:null,!1),qi=Wi(r,Qi.chunks.length,un,s.formatContext,!1,!1);Qi.children.push(qi),Qi.lastPushedText=!1;var Oi=Wi(r,0,null,s.formatContext,!1,!1);Oi.parentFlushed=!0;var Al=r.trackedPostpones;if(Al!==null){var Uu=s.componentStack,Ls=[f[0],"Suspense Fallback",f[2]];if(Al!==null){var Ic=[Ls[1],Ls[2],[],null];Al.workingMap.set(Ls,Ic),un.tracked={contentKeyPath:f,fallbackNode:Ic}}s.blockedSegment=qi,s.blockedPreamble=un.preamble===null?null:un.preamble.fallback,s.keyPath=Ls,s.formatContext=pe(r.resumableState,wl),s.componentStack=Mr(Uu);try{mn(r,s,wo,-1),qi.lastPushedText&&qi.textEmbedded&&qi.chunks.push(yt),qi.status=1,Es(r,Lc,qi)}catch(Nl){throw qi.status=r.aborted?3:4,Nl}finally{s.blockedSegment=Qi,s.blockedPreamble=Nu,s.keyPath=Du,s.formatContext=wl}var Ao=ca(r,null,Ps,-1,un,Oi,un.preamble===null?null:un.preamble.content,un.contentState,s.abortSet,f,Ge(r.resumableState,s.formatContext),s.context,s.treeContext,null,Uu);xi(Ao),r.pingedTasks.push(Ao)}else{s.blockedBoundary=un,s.blockedPreamble=un.preamble===null?null:un.preamble.content,s.hoistableState=un.contentState,s.blockedSegment=Oi,s.keyPath=f,s.formatContext=Ge(r.resumableState,wl),s.row=null;try{if(mn(r,s,Ps,-1),Oi.lastPushedText&&Oi.textEmbedded&&Oi.chunks.push(yt),Oi.status=1,Es(r,un,Oi),Mi(un,Oi),un.pendingTasks===0&&un.status===0){if(un.status=1,!Li(r,un)){Zr!==null&&--Zr.pendingTasks===0&&On(r,Zr),r.pendingRootTasks===0&&s.blockedPreamble&&Gr(r);break e}}else Zr!==null&&Zr.together&&fa(r,Zr)}catch(Nl){if(un.status=4,r.aborted){Oi.status=3;var Ro=r.fatalError}else Oi.status=4,Ro=Nl;var Fu=Vt(s.componentStack),Rl=on(r,Ro,Fu);un.errorDigest=Rl,da(r,un)}finally{s.blockedBoundary=Lc,s.blockedPreamble=Nu,s.hoistableState=Gf,s.blockedSegment=Qi,s.keyPath=Du,s.formatContext=wl,s.row=Zr}var Cl=ca(r,null,wo,-1,Lc,qi,un.preamble===null?null:un.preamble.fallback,un.fallbackState,ts,[f[0],"Suspense Fallback",f[2]],pe(r.resumableState,s.formatContext),s.context,s.treeContext,s.row,Mr(s.componentStack));xi(Cl),r.pingedTasks.push(Cl)}}return}if(typeof m=="object"&&m!==null)switch(m.$$typeof){case M:if("ref"in b){var Pl={};for(var Ll in b)Ll!=="ref"&&(Pl[Ll]=b[Ll])}else Pl=b;var Vf=Xi(r,s,f,m.render,Pl,I);Xa(r,s,f,Vf,tn!==0,jn,It);return;case x:yr(r,s,f,m.type,b,I);return;case g:var Il=b.children,Is=s.keyPath,Ou=b.value,Ds=m._currentValue;m._currentValue=Ou;var Dl=za,Ns={parent:Dl,depth:Dl===null?0:Dl.depth+1,context:m,parentValue:Ds,value:Ou};za=Ns,s.context=Ns,s.keyPath=f,Bn(r,s,Il,-1);var ns=za;if(ns===null)throw Error(t(403));ns.context._currentValue=ns.parentValue;var Co=za=ns.parent;s.context=Co,s.keyPath=Is;return;case p:var Bu=b.children,is=Bu(m._context._currentValue),zu=s.keyPath;s.keyPath=f,Bn(r,s,is,-1),s.keyPath=zu;return;case R:var ku=m._init,Us=ku(m._payload);if(r.aborted)throw null;yr(r,s,f,Us,b,I);return}throw Error(t(130,m==null?m:typeof m,""))}}function Yi(r,s,f,m,b){var I=s.replay,X=s.blockedBoundary,J=Wi(r,0,null,s.formatContext,!1,!1);J.id=f,J.parentFlushed=!0;try{s.replay=null,s.blockedSegment=J,mn(r,s,m,b),J.status=1,Es(r,X,J),X===null?r.completedRootSegment=J:(Mi(X,J),X.parentFlushed&&r.partialBoundaries.push(X))}finally{s.replay=I,s.blockedSegment=null}}function Bn(r,s,f,m){s.replay!==null&&typeof s.replay.slots=="number"?Yi(r,s,s.replay.slots,f,m):(s.node=f,s.childIndex=m,f=s.componentStack,xi(s),Sr(r,s),s.componentStack=f)}function Sr(r,s){var f=s.node,m=s.childIndex;if(f!==null){if(typeof f=="object"){switch(f.$$typeof){case n:var b=f.type,I=f.key,X=f.props;f=X.ref;var J=f!==void 0?f:null,j=Ba(b),ee=I==null||I===V?m===-1?0:m:I;if(I=[s.keyPath,j,ee],s.replay!==null)e:{var Te=s.replay;for(m=Te.nodes,f=0;f<m.length;f++){var Ce=m[f];if(ee===Ce[1]){if(Ce.length===4){if(j!==null&&j!==Ce[0])throw Error(t(490,Ce[0],j));var Ve=Ce[2],Xe=Ce[3],nt=s.node;s.replay={nodes:Ve,slots:Xe,pendingTasks:1};try{if(yr(r,s,I,b,X,J),s.replay.pendingTasks===1&&0<s.replay.nodes.length)throw Error(t(488));s.replay.pendingTasks--}catch(vn){if(typeof vn=="object"&&vn!==null&&(vn===se||typeof vn.then=="function"||vn.message==="Maximum call stack size exceeded"))throw s.node===nt?s.replay=Te:m.splice(f,1),vn;s.replay.pendingTasks--,I=Vt(s.componentStack),nt=r,X=s.blockedBoundary,r=r.aborted?r.fatalError:vn,I=on(nt,r,I),br(nt,X,Ve,Xe,r,I)}s.replay=Te}else{if(b!==T)throw Error(t(490,"Suspense",Ba(b)||"Unknown"));t:{Te=Ce[5],b=Ce[2],J=Ce[3],j=Ce[4]===null?[]:Ce[4][2],Ce=Ce[4]===null?null:Ce[4][3],ee=s.keyPath;var St=s.formatContext,Tn=s.row,Xn=s.replay,nn=s.blockedBoundary,yi=s.hoistableState,Di=X.children;X=X.fallback;var Ni=new Set,pt=zr(r,s.row,Ni,2>s.formatContext.insertionMode?{content:W(),fallback:W()}:null,!1);pt.parentFlushed=!0,pt.rootSegmentID=Te,s.blockedBoundary=pt,s.hoistableState=pt.contentState,s.keyPath=I,s.formatContext=Ge(r.resumableState,St),s.row=null,s.replay={nodes:b,slots:J,pendingTasks:1};try{if(mn(r,s,Di,-1),s.replay.pendingTasks===1&&0<s.replay.nodes.length)throw Error(t(488));if(s.replay.pendingTasks--,pt.pendingTasks===0&&pt.status===0){pt.status=1,r.completedBoundaries.push(pt);break t}}catch(vn){pt.status=4,Ve=r.aborted?r.fatalError:vn,Xe=Vt(s.componentStack),nt=on(r,Ve,Xe),pt.errorDigest=nt,s.replay.pendingTasks--,r.clientRenderedBoundaries.push(pt)}finally{s.blockedBoundary=nn,s.hoistableState=yi,s.replay=Xn,s.keyPath=ee,s.formatContext=St,s.row=Tn}Ve=Ii(r,null,{nodes:j,slots:Ce,pendingTasks:0},X,-1,nn,pt.fallbackState,Ni,[I[0],"Suspense Fallback",I[2]],pe(r.resumableState,s.formatContext),s.context,s.treeContext,s.row,Mr(s.componentStack)),xi(Ve),r.pingedTasks.push(Ve)}}m.splice(f,1);break e}}}else yr(r,s,I,b,X,J);return;case o:throw Error(t(257));case R:if(Ve=f._init,f=Ve(f._payload),r.aborted)throw null;Bn(r,s,f,m);return}if(S(f)){Ya(r,s,f,m);return}if((Ve=D(f))&&(Ve=Ve.call(f))){if(f=Ve.next(),!f.done){Xe=[];do Xe.push(f.value),f=Ve.next();while(!f.done);Ya(r,s,Xe,m)}return}if(typeof f.then=="function")return s.thenableState=null,Bn(r,s,Fr(f),m);if(f.$$typeof===g)return Bn(r,s,f._currentValue,m);throw m=Object.prototype.toString.call(f),Error(t(31,m==="[object Object]"?"object with keys {"+Object.keys(f).join(", ")+"}":m))}typeof f=="string"?(m=s.blockedSegment,m!==null&&(m.lastPushedText=Ot(m.chunks,f,r.renderState,m.lastPushedText))):(typeof f=="number"||typeof f=="bigint")&&(m=s.blockedSegment,m!==null&&(m.lastPushedText=Ot(m.chunks,""+f,r.renderState,m.lastPushedText)))}}function Ya(r,s,f,m){var b=s.keyPath;if(m!==-1&&(s.keyPath=[s.keyPath,"Fragment",m],s.replay!==null)){for(var I=s.replay,X=I.nodes,J=0;J<X.length;J++){var j=X[J];if(j[1]===m){m=j[2],j=j[3],s.replay={nodes:m,slots:j,pendingTasks:1};try{if(Ya(r,s,f,-1),s.replay.pendingTasks===1&&0<s.replay.nodes.length)throw Error(t(488));s.replay.pendingTasks--}catch(Ce){if(typeof Ce=="object"&&Ce!==null&&(Ce===se||typeof Ce.then=="function"))throw Ce;s.replay.pendingTasks--;var ee=Vt(s.componentStack);f=r;var Te=s.blockedBoundary;r=r.aborted?r.fatalError:Ce,ee=on(f,r,ee),br(f,Te,m,j,r,ee)}s.replay=I,X.splice(J,1);break}}s.keyPath=b;return}if(I=s.treeContext,X=f.length,s.replay!==null&&(J=s.replay.slots,J!==null&&typeof J=="object")){for(m=0;m<X;m++)j=f[m],s.treeContext=v(I,X,m),Te=J[m],typeof Te=="number"?(Yi(r,s,Te,j,m),delete J[m]):mn(r,s,j,m);s.treeContext=I,s.keyPath=b;return}for(J=0;J<X;J++)m=f[J],s.treeContext=v(I,X,J),mn(r,s,m,J);s.treeContext=I,s.keyPath=b}function uo(r,s,f){f.status=5,f.rootSegmentID=r.nextSegmentId++;var m=f.tracked;if(m===null||(r=m.contentKeyPath,r===null))throw Error(t(486));m=m.fallbackNode;var b=[],I=s.workingMap.get(r);return I===void 0?(f=[r[1],r[2],b,null,m,f.rootSegmentID],s.workingMap.set(r,f),Tr(f,r[0],s),f):(I[4]=m,I[5]=f.rootSegmentID,I)}function vl(r,s,f,m){m.status=5;var b=f.keyPath,I=f.blockedBoundary;if(I===null)m.id=r.nextSegmentId++,s.rootSlots=m.id,r.completedRootSegment!==null&&(r.completedRootSegment.status=5);else{if(I!==null&&I.status===0){var X=uo(r,s,I);if(I.tracked!==null&&I.tracked.contentKeyPath===b&&f.childIndex===-1){m.id===-1&&(m.id=m.parentFlushed?I.rootSegmentID:r.nextSegmentId++),X[3]=m.id;return}}if(m.id===-1&&(m.id=m.parentFlushed&&I!==null?I.rootSegmentID:r.nextSegmentId++),f.childIndex===-1)b===null?s.rootSlots=m.id:(f=s.workingMap.get(b),f===void 0?(f=[b[1],b[2],[],m.id],Tr(f,b[0],s)):f[3]=m.id);else{if(b===null){if(r=s.rootSlots,r===null)r=s.rootSlots={};else if(typeof r=="number")throw Error(t(491))}else if(I=s.workingMap,X=I.get(b),X===void 0)r={},X=[b[1],b[2],[],r],I.set(b,X),Tr(X,b[0],s);else if(r=X[3],r===null)r=X[3]={};else if(typeof r=="number")throw Error(t(491));r[f.childIndex]=m.id}}}function da(r,s){r=r.trackedPostpones,r!==null&&(s=s.tracked,s!==null&&(s=s.contentKeyPath,s!==null&&(r=r.workingMap.get(s),r!==void 0&&(r.length=4,r[2]=[],r[3]=null))))}function fo(r,s,f){return Ii(r,f,s.replay,s.node,s.childIndex,s.blockedBoundary,s.hoistableState,s.abortSet,s.keyPath,s.formatContext,s.context,s.treeContext,s.row,s.componentStack)}function kr(r,s,f){var m=s.blockedSegment,b=Wi(r,m.chunks.length,null,s.formatContext,m.lastPushedText,!0);return m.children.push(b),m.lastPushedText=!1,ca(r,f,s.node,s.childIndex,s.blockedBoundary,b,s.blockedPreamble,s.hoistableState,s.abortSet,s.keyPath,s.formatContext,s.context,s.treeContext,s.row,s.componentStack)}function mn(r,s,f,m){var b=s.formatContext,I=s.context,X=s.keyPath,J=s.treeContext,j=s.componentStack,ee=s.blockedSegment;if(ee===null){ee=s.replay;try{return Bn(r,s,f,m)}catch(Ve){if(_i(),f=Ve===se?Qe():Ve,!r.aborted&&typeof f=="object"&&f!==null){if(typeof f.then=="function"){m=Ve===se?Mn():null,r=fo(r,s,m).ping,f.then(r.resolve,r.reject),s.formatContext=b,s.context=I,s.keyPath=X,s.treeContext=J,s.componentStack=j,s.replay=ee,Dr(I);return}if(f.message==="Maximum call stack size exceeded"){f=Ve===se?Mn():null,f=fo(r,s,f),r.pingedTasks.push(f),s.formatContext=b,s.context=I,s.keyPath=X,s.treeContext=J,s.componentStack=j,s.replay=ee,Dr(I);return}}}}else{var Te=ee.children.length,Ce=ee.chunks.length;try{return Bn(r,s,f,m)}catch(Ve){if(_i(),ee.children.length=Te,ee.chunks.length=Ce,f=Ve===se?Qe():Ve,!r.aborted&&typeof f=="object"&&f!==null){if(typeof f.then=="function"){ee=f,f=Ve===se?Mn():null,r=kr(r,s,f).ping,ee.then(r.resolve,r.reject),s.formatContext=b,s.context=I,s.keyPath=X,s.treeContext=J,s.componentStack=j,Dr(I);return}if(f.message==="Maximum call stack size exceeded"){ee=Ve===se?Mn():null,ee=kr(r,s,ee),r.pingedTasks.push(ee),s.formatContext=b,s.context=I,s.keyPath=X,s.treeContext=J,s.componentStack=j,Dr(I);return}}}}throw s.formatContext=b,s.context=I,s.keyPath=X,s.treeContext=J,Dr(I),f}function Za(r){var s=r.blockedBoundary,f=r.blockedSegment;f!==null&&(f.status=3,Zi(this,s,r.row,f))}function br(r,s,f,m,b,I){for(var X=0;X<f.length;X++){var J=f[X];if(J.length===4)br(r,s,J[2],J[3],b,I);else{J=J[5];var j=r,ee=I,Te=zr(j,null,new Set,null,!1);Te.parentFlushed=!0,Te.rootSegmentID=J,Te.status=4,Te.errorDigest=ee,Te.parentFlushed&&j.clientRenderedBoundaries.push(Te)}}if(f.length=0,m!==null){if(s===null)throw Error(t(487));if(s.status!==4&&(s.status=4,s.errorDigest=I,s.parentFlushed&&r.clientRenderedBoundaries.push(s)),typeof m=="object")for(var Ce in m)delete m[Ce]}}function pa(r,s){if(r!==s.currentTask){var f=r.blockedBoundary;r=r.blockedSegment,r!==null&&(r.status=3),f!==null&&f.fallbackAbortableTasks.forEach(function(m){return pa(m,s)})}}function Er(r,s,f){if(r!==s.currentTask){var m=r.blockedBoundary,b=r.blockedSegment;if(b===null||b.status===3){var I=Vt(r.componentStack),X=sn(f);if(m===null){if(m=r.replay,m===null){X||s.trackedPostpones===null||b===null?X?(r=ii(f),on(s,r,I),s.status!==12&&s.status!==13&&Wn(s,r)):(on(s,f,I),s.status!==12&&s.status!==13&&Wn(s,f)):(m=s.trackedPostpones,on(s,f,I),vl(s,m,r,b),Zi(s,null,r.row,b));return}s.status!==12&&s.status!==13&&(m.pendingTasks--,m.pendingTasks===0&&0<m.nodes.length&&(I=on(s,f,I),br(s,null,m.nodes,m.slots,f,I)),s.pendingRootTasks--,s.pendingRootTasks===0&&ho(s))}else{var J=s.trackedPostpones;if(m.status!==4){if(!X&&J!==null&&b!==null)return on(s,f,I),vl(s,J,r,b),m.fallbackAbortableTasks.forEach(function(j){return Er(j,s,f)}),m.fallbackAbortableTasks.clear(),Zi(s,m,r.row,b);m.status=4,I=on(s,f,I),m.errorDigest=I,da(s,m),m.parentFlushed&&s.clientRenderedBoundaries.push(m)}m.pendingTasks--,I=m.row,I!==null&&--I.pendingTasks===0&&On(s,I),m.fallbackAbortableTasks.forEach(function(j){return Er(j,s,f)}),m.fallbackAbortableTasks.clear()}r=r.row,r!==null&&--r.pendingTasks===0&&On(s,r),s.allPendingTasks--,s.allPendingTasks===0&&Hr(s)}}}function bs(r,s){try{var f=r.renderState,m=f.onHeaders;if(m){var b=f.headers;if(b){f.headers=null;var I=b.preconnects;if(b.fontPreloads&&(I&&(I+=", "),I+=b.fontPreloads),b.highImagePreloads&&(I&&(I+=", "),I+=b.highImagePreloads),!s){var X=f.styles.values(),J=X.next();e:for(;0<b.remainingCapacity&&!J.done;J=X.next())for(var j=J.value.sheets.values(),ee=j.next();0<b.remainingCapacity&&!ee.done;ee=j.next()){var Te=ee.value,Ce=Te.props,Ve=Ce.href,Xe=Te.props,nt=no(Xe.href,"style",{crossOrigin:Xe.crossOrigin,integrity:Xe.integrity,nonce:Xe.nonce,type:Xe.type,fetchPriority:Xe.fetchPriority,referrerPolicy:Xe.referrerPolicy,media:Xe.media});if(0<=(b.remainingCapacity-=nt.length+2))f.resets.style[Ve]=ht,I&&(I+=", "),I+=nt,f.resets.style[Ve]=typeof Ce.crossOrigin=="string"||typeof Ce.integrity=="string"?[Ce.crossOrigin,Ce.integrity]:ht;else break e}}m(I?{Link:I}:{})}}}catch(St){on(r,St,{})}}function ho(r){r.trackedPostpones===null&&bs(r,!0),r.trackedPostpones===null&&Gr(r),r=r.onShellReady,r()}function Hr(r){bs(r,r.trackedPostpones===null?!0:r.completedRootSegment===null||r.completedRootSegment.status!==5),Gr(r),r=r.onAllReady,r()}function Mi(r,s){if(s.chunks.length===0&&s.children.length===1&&s.children[0].boundary===null&&s.children[0].id===-1){var f=s.children[0];f.id=s.id,f.parentFlushed=!0,f.status!==1&&f.status!==3&&f.status!==4||Mi(r,f)}else r.completedSegments.push(s)}function Es(r,s,f){if(Ct!==null){f=f.chunks;for(var m=0,b=0;b<f.length;b++)m+=f[b].byteLength;s===null?r.byteSize+=m:s.byteSize+=m}}function Zi(r,s,f,m){if(f!==null&&(--f.pendingTasks===0?On(r,f):f.together&&fa(r,f)),r.allPendingTasks--,s===null){if(m!==null&&m.parentFlushed){if(r.completedRootSegment!==null)throw Error(t(389));r.completedRootSegment=m}r.pendingRootTasks--,r.pendingRootTasks===0&&ho(r)}else if(s.pendingTasks--,s.status!==4)if(s.pendingTasks===0){if(s.status===0&&(s.status=1),m!==null&&m.parentFlushed&&(m.status===1||m.status===3)&&Mi(s,m),s.parentFlushed&&r.completedBoundaries.push(s),s.status===1)f=s.row,f!==null&&ra(f.hoistables,s.contentState),Li(r,s)||(r.allPendingTasks++,s.fallbackAbortableTasks.forEach(Za,r),s.fallbackAbortableTasks.clear(),f!==null&&--f.pendingTasks===0&&On(r,f),r.allPendingTasks--),r.pendingRootTasks===0&&r.trackedPostpones===null&&s.preamble!==null&&Gr(r);else if(s.status===5&&(s=s.row,s!==null)){if(r.trackedPostpones!==null){f=r.trackedPostpones;var b=s.next;if(b!==null&&(m=b.boundaries,m!==null))for(b.boundaries=null,b=0;b<m.length;b++){var I=m[b];uo(r,f,I),Zi(r,I,null,null)}}r.allPendingTasks++,--s.pendingTasks===0&&On(r,s),r.allPendingTasks--}}else m===null||!m.parentFlushed||m.status!==1&&m.status!==3||(Mi(s,m),s.completedSegments.length===1&&s.parentFlushed&&r.partialBoundaries.push(s)),s=s.row,s!==null&&s.together&&fa(r,s);r.allPendingTasks===0&&Hr(r)}function _l(r){if(!(r.aborted||11<r.status)){var s=za,f=Rt.H;Rt.H=Ha;var m=Rt.A;Rt.A=ml;var b=Yt;Yt=r;var I=Or;Or=r.resumableState;try{var X=r.pingedTasks,J;for(J=0;J<X.length;J++){var j=X[J],ee=r,Te=j.blockedSegment;if(Te===null){e:if(j.replay.pendingTasks!==0){var Ce=ee.currentTask;ee.currentTask=j,Dr(j.context);var Ve=j.node;try{if(typeof j.replay.slots=="number"?Yi(ee,j,j.replay.slots,j.node,j.childIndex):Sr(ee,j),j.replay.pendingTasks===1&&0<j.replay.nodes.length)throw Error(t(488));j.replay.pendingTasks--,j.abortSet.delete(j),Zi(ee,j.blockedBoundary,j.row,null)}catch(An){_i();var Xe=An===se?Qe():An;if(ee.aborted){An===se&&(j.thenableState=Mn()),ee.currentTask=Ce;var nt=ee;pa(j,nt),j.abortSet.delete(j),Er(j,nt,nt.fatalError)}else{if(typeof Xe=="object"&&Xe!==null){if(typeof Xe.then=="function"){var St=j.ping;Xe.then(St.resolve,St.reject),j.thenableState=An===se?Mn():null;break e}if(Xe.message==="Maximum call stack size exceeded"&&j.node!==Ve){j.thenableState=null,ee.pingedTasks.push(j);break e}}j.replay.pendingTasks--,j.abortSet.delete(j);var Tn=Vt(j.componentStack);nt=ee;var Xn=j.blockedBoundary,nn=ee.aborted?ee.fatalError:Xe,yi=j.replay.nodes,Di=j.replay.slots,Ni=on(nt,nn,Tn);br(nt,Xn,yi,Di,nn,Ni),ee.pendingRootTasks--,ee.pendingRootTasks===0&&ho(ee),ee.allPendingTasks--,ee.allPendingTasks===0&&Hr(ee)}}finally{ee.currentTask=Ce}}}else e:if(nt=Te,nt.status===0){var pt=ee.currentTask;ee.currentTask=j,Dr(j.context);var vn=nt.children.length,Ui=nt.chunks.length,ci=j.node;try{Sr(ee,j),nt.lastPushedText&&nt.textEmbedded&&nt.chunks.push(yt),j.abortSet.delete(j),nt.status=1,Es(ee,j.blockedBoundary,nt),Zi(ee,j.blockedBoundary,j.row,nt)}catch(An){_i(),nt.children.length=vn,nt.chunks.length=Ui;var wn=An===se?Qe():An;if(ee.aborted)An===se&&(j.thenableState=Mn()),ee.currentTask=pt,nt=ee,pa(j,nt),j.abortSet.delete(j),Er(j,nt,nt.fatalError);else{if(typeof wn=="object"&&wn!==null){if(typeof wn.then=="function"){nt.status=0,j.thenableState=An===se?Mn():null;var Yn=j.ping;wn.then(Yn.resolve,Yn.reject);break e}if(wn.message==="Maximum call stack size exceeded"&&j.node!==ci){nt.status=0,j.thenableState=null,ee.pingedTasks.push(j);break e}}var wr=Vt(j.componentStack);j.abortSet.delete(j),nt.status=4;var Gn=j.blockedBoundary,Fi=j.row;if(Fi!==null&&--Fi.pendingTasks===0&&On(ee,Fi),ee.allPendingTasks--,Gn===null)if(sn(wn)){var Sn=ii(wn);on(ee,Sn,wr),Wn(ee,Sn)}else on(ee,wn,wr),Wn(ee,wn);else{var Wr=on(ee,wn,wr);if(Gn.pendingTasks--,Gn.status!==4){Gn.status=4,Gn.errorDigest=Wr,da(ee,Gn);var Ji=Gn.row;Ji!==null&&(ee.allPendingTasks++,--Ji.pendingTasks===0&&On(ee,Ji),ee.allPendingTasks--),Gn.parentFlushed&&ee.clientRenderedBoundaries.push(Gn),ee.pendingRootTasks===0&&ee.trackedPostpones===null&&Gn.preamble!==null&&Gr(ee)}ee.allPendingTasks===0&&Hr(ee)}}}finally{ee.currentTask=pt}}}X.splice(0,J),r.destination!==null&&ga(r,r.destination)}catch(An){on(r,An,{}),Wn(r,An)}finally{Or=I,Rt.H=f,Rt.A=m,f===Ha&&Dr(s),Yt=b}}}function Ja(r,s,f){s.preambleChildren.length&&f.push(s.preambleChildren);for(var m=!1,b=0;b<s.children.length;b++)m=po(r,s.children[b],f)||m;return m}function po(r,s,f){var m=s.boundary;if(m===null)return Ja(r,s,f);var b=m.preamble;if(b===null)return!1;switch(m.status){case 1:if(dr(r.renderState,b.content),r.byteSize+=m.byteSize,s=m.completedSegments[0],!s)throw Error(t(391));return Ja(r,s,f);case 5:if(r.trackedPostpones!==null)return!0;case 4:if(s.status===1)return dr(r.renderState,b.fallback),Ja(r,s,f);default:return!0}}function Gr(r){if(r.completedRootSegment&&r.completedPreambleSegments===null){var s=[],f=r.byteSize,m=po(r,r.completedRootSegment,s),b=r.renderState.preamble;m===!1||b.headChunks&&b.bodyChunks?r.completedPreambleSegments=s:r.byteSize=f}}function go(r,s,f,m){switch(f.parentFlushed=!0,f.status){case 0:f.id=r.nextSegmentId++;case 5:return m=f.id,f.lastPushedText=!1,f.textEmbedded=!1,r=r.renderState,G(s,pr),G(s,r.placeholderPrefix),r=Ae(m.toString(16)),G(s,r),Ee(s,en);case 1:f.status=2;var b=!0,I=f.chunks,X=0;f=f.children;for(var J=0;J<f.length;J++){for(b=f[J];X<b.index;X++)G(s,I[X]);b=Ts(r,s,b,m)}for(;X<I.length-1;X++)G(s,I[X]);return X<I.length&&(b=Ee(s,I[X])),b;case 3:return!0;default:throw Error(t(390))}}var ar=0;function Ts(r,s,f,m){var b=f.boundary;if(b===null)return go(r,s,f,m);if(f.boundary=null,b.parentFlushed=!0,b.status===4){var I=b.row;I!==null&&--I.pendingTasks===0&&On(r,I),b=b.errorDigest,Ee(s,vi),G(s,Df),b!=null&&(G(s,Qo),G(s,Ae(Ze(b))),G(s,Ko)),Ee(s,Nf),go(r,s,f,m)}else if(b.status!==1)b.status===0&&(b.rootSegmentID=r.nextSegmentId++),0<b.completedSegments.length&&r.partialBoundaries.push(b),su(s,r.renderState,b.rootSegmentID),m&&ra(m,b.fallbackState),go(r,s,f,m);else if(!Qa&&Li(r,b)&&(ar+b.byteSize>r.progressiveChunkSize||wc(b.contentState,mo)||b.defer))b.rootSegmentID=r.nextSegmentId++,r.completedBoundaries.push(b),su(s,r.renderState,b.rootSegmentID),go(r,s,f,m);else{if(ar+=b.byteSize,m&&ra(m,b.contentState),f=b.row,f!==null&&Li(r,b)&&--f.pendingTasks===0&&On(r,f),Ee(s,Jo),f=b.completedSegments,f.length!==1)throw Error(t(391));Ts(r,s,f[0],m)}return Ee(s,li)}function xl(r,s,f,m){return ia(s,r.renderState,f.parentFormatContext,f.id),Ts(r,s,f,m),qs(s,f.parentFormatContext)}function Ka(r,s,f){ar=f.byteSize;for(var m=f.completedSegments,b=0;b<m.length;b++)Ac(r,s,f,m[b]);m.length=0,m=f.row,m!==null&&Li(r,f)&&--m.pendingTasks===0&&On(r,m),zn(s,f.contentState,r.renderState),m=r.resumableState,r=r.renderState,b=f.rootSegmentID,f=f.contentState;var I=r.stylesToHoist,X=(m.instructions&128)!==0;return r.stylesToHoist=!1,G(s,r.startInlineScript),G(s,pn),I?((m.instructions&4)===0&&(m.instructions|=4,G(s,pc)),(m.instructions&2)===0&&(m.instructions|=2,G(s,hu)),X&&(m.instructions&256)===0&&(m.instructions|=256,G(s,du)),(m.instructions&8)===0?(m.instructions|=8,G(s,pu)):G(s,gu)):((m.instructions&2)===0&&(m.instructions|=2,G(s,hu)),X&&(m.instructions&256)===0&&(m.instructions|=256,G(s,du)),G(s,Ff)),m=Ae(b.toString(16)),G(s,r.boundaryPrefix),G(s,m),G(s,Of),G(s,r.segmentPrefix),G(s,m),I?(G(s,mu),Su(s,f)):G(s,nl),f=Ee(s,Bf),Lt(s,r)&&f}function Ac(r,s,f,m){if(m.status===2)return!0;var b=f.contentState,I=m.id;if(I===-1){if((m.id=f.rootSegmentID)===-1)throw Error(t(392));return xl(r,s,m,b)}return I===f.rootSegmentID?xl(r,s,m,b):(xl(r,s,m,b),f=r.resumableState,r=r.renderState,G(s,r.startInlineScript),G(s,pn),(f.instructions&1)===0?(f.instructions|=1,G(s,cu)):G(s,uu),G(s,r.segmentPrefix),I=Ae(I.toString(16)),G(s,I),G(s,fu),G(s,r.placeholderPrefix),G(s,I),s=Ee(s,Uf),s)}var Qa=!1,mo=!1;function ga(r,s){Re=new Uint8Array(2048),ne=0;try{if(!(0<r.pendingRootTasks)){var f,m=r.completedRootSegment;if(m!==null){if(m.status===5)return;var b=r.completedPreambleSegments;if(b===null)return;ar=r.byteSize;var I=r.resumableState,X=r.renderState,J=X.preamble,j=J.htmlChunks,ee=J.headChunks,Te;if(j){for(Te=0;Te<j.length;Te++)G(s,j[Te]);if(ee)for(Te=0;Te<ee.length;Te++)G(s,ee[Te]);else G(s,Tt("head")),G(s,pn)}else if(ee)for(Te=0;Te<ee.length;Te++)G(s,ee[Te]);var Ce=X.charsetChunks;for(Te=0;Te<Ce.length;Te++)G(s,Ce[Te]);Ce.length=0,X.preconnects.forEach(qn,s),X.preconnects.clear();var Ve=X.viewportChunks;for(Te=0;Te<Ve.length;Te++)G(s,Ve[Te]);Ve.length=0,X.fontPreloads.forEach(qn,s),X.fontPreloads.clear(),X.highImagePreloads.forEach(qn,s),X.highImagePreloads.clear(),z=X,X.styles.forEach(sl,s),z=null;var Xe=X.importMapChunks;for(Te=0;Te<Xe.length;Te++)G(s,Xe[Te]);Xe.length=0,X.bootstrapScripts.forEach(qn,s),X.scripts.forEach(qn,s),X.scripts.clear(),X.bulkPreloads.forEach(qn,s),X.bulkPreloads.clear(),j||ee||(I.instructions|=32);var nt=X.hoistableChunks;for(Te=0;Te<nt.length;Te++)G(s,nt[Te]);for(I=nt.length=0;I<b.length;I++){var St=b[I];for(X=0;X<St.length;X++)Ts(r,s,St[X],null)}var Tn=r.renderState.preamble,Xn=Tn.headChunks;(Tn.htmlChunks||Xn)&&G(s,Kn("head"));var nn=Tn.bodyChunks;if(nn)for(b=0;b<nn.length;b++)G(s,nn[b]);mo=!0,Ts(r,s,m,null),mo=!1,r.completedRootSegment=null;var yi=r.renderState;if(r.allPendingTasks!==0||r.clientRenderedBoundaries.length!==0||r.completedBoundaries.length!==0||r.trackedPostpones!==null&&(r.trackedPostpones.rootNodes.length!==0||r.trackedPostpones.rootSlots!==null)){var Di=r.resumableState;if((Di.instructions&64)===0){if(Di.instructions|=64,G(s,yi.startInlineScript),(Di.instructions&32)===0){Di.instructions|=32;var Ni="_"+Di.idPrefix+"R_";G(s,ll),G(s,Ae(Ze(Ni))),G(s,ln)}G(s,pn),G(s,xn),Ee(s,ie)}}Lt(s,yi)}var pt=r.renderState;m=0;var vn=pt.viewportChunks;for(m=0;m<vn.length;m++)G(s,vn[m]);vn.length=0,pt.preconnects.forEach(qn,s),pt.preconnects.clear(),pt.fontPreloads.forEach(qn,s),pt.fontPreloads.clear(),pt.highImagePreloads.forEach(qn,s),pt.highImagePreloads.clear(),pt.styles.forEach(Ci,s),pt.scripts.forEach(qn,s),pt.scripts.clear(),pt.bulkPreloads.forEach(qn,s),pt.bulkPreloads.clear();var Ui=pt.hoistableChunks;for(m=0;m<Ui.length;m++)G(s,Ui[m]);Ui.length=0;var ci=r.clientRenderedBoundaries;for(f=0;f<ci.length;f++){var wn=ci[f];pt=s;var Yn=r.resumableState,wr=r.renderState,Gn=wn.rootSegmentID,Fi=wn.errorDigest;G(pt,wr.startInlineScript),G(pt,pn),(Yn.instructions&4)===0?(Yn.instructions|=4,G(pt,vu)):G(pt,Da),G(pt,wr.boundaryPrefix),G(pt,Ae(Gn.toString(16))),G(pt,gc),Fi!=null&&(G(pt,il),Fi==null?G(pt,_u):G(pt,Ae(kf(Fi))));var Sn=Ee(pt,Ms);if(!Sn){r.destination=null,f++,ci.splice(0,f);return}}ci.splice(0,f);var Wr=r.completedBoundaries;for(f=0;f<Wr.length;f++)if(!Ka(r,s,Wr[f])){r.destination=null,f++,Wr.splice(0,f);return}Wr.splice(0,f),lt(s),Re=new Uint8Array(2048),ne=0,Qa=!0;var Ji=r.partialBoundaries;for(f=0;f<Ji.length;f++){var An=Ji[f];e:{ci=r,wn=s,ar=An.byteSize;var va=An.completedSegments;for(Sn=0;Sn<va.length;Sn++)if(!Ac(ci,wn,An,va[Sn])){Sn++,va.splice(0,Sn);var Xr=!1;break e}va.splice(0,Sn);var Ar=An.row;Ar!==null&&Ar.together&&An.pendingTasks===1&&(Ar.pendingTasks===1?ua(ci,Ar,Ar.hoistables):Ar.pendingTasks--),Xr=zn(wn,An.contentState,ci.renderState)}if(!Xr){r.destination=null,f++,Ji.splice(0,f);return}}Ji.splice(0,f),Qa=!1;var Si=r.completedBoundaries;for(f=0;f<Si.length;f++)if(!Ka(r,s,Si[f])){r.destination=null,f++,Si.splice(0,f);return}Si.splice(0,f)}}finally{Qa=!1,f=r.postponedState,f!==null&&(f.nextSegmentId=r.nextSegmentId),r.allPendingTasks===0&&r.clientRenderedBoundaries.length===0&&r.completedBoundaries.length===0?(r.flushScheduled=!1,f=r.resumableState,f.hasBody&&G(s,Kn("body")),f.hasHtml&&G(s,Kn("html")),lt(s),ja(r),r.status=13,s.close(),r.destination=null):lt(s)}}function Ml(r){r.flushScheduled=r.destination!==null,be(function(){return _l(r)}),Y(function(){r.status===10&&(r.status=11),r.trackedPostpones===null&&bs(r,r.pendingRootTasks===0)})}function qa(r){r.flushScheduled===!1&&r.pingedTasks.length===0&&r.destination!==null&&(r.flushScheduled=!0,Y(function(){var s=r.destination;s?ga(r,s):r.flushScheduled=!1}))}function vo(r,s){if(r.status===12)r.status=13,r=r.fatalError,sn(r)&&(r=ii(r)),Me(s,r);else if(r.status!==13&&r.destination===null){r.destination=s;try{ga(r,s)}catch(f){on(r,f,{}),Wn(r,f)}}}function _o(r,s){try{if(0<s.size){var f=r.fatalError;s.forEach(function(m){return Er(m,r,f)}),s.clear()}r.destination!==null&&ga(r,r.destination)}catch(m){on(r,m,{}),Wn(r,m)}}function ja(r){r=r.renderLifetimeController,r!==null&&r.abort("The render ended.")}function ma(r,s){if(s.aborted)Vr(r,s.reason);else{var f=new AbortController;r.renderLifetimeController=f,s.addEventListener("abort",function(){Vr(r,s.reason)},{signal:f.signal})}}function Vr(r,s){if(!(r.aborted||r.status!==11&&r.status!==10)){ja(r);var f=typeof s=="object"&&s!==null&&s.$$typeof===P;r.aborted=!0,s=f?Hn(s):s===void 0?Error(t(432)):typeof s=="object"&&s!==null&&typeof s.then=="function"?Error(t(530)):s,r.fatalError=s;var m=r.abortableTasks;m.forEach(function(b){return pa(b,r)}),Y(function(){return _o(r,m)})}}function Tr(r,s,f){if(s===null)f.rootNodes.push(r);else{var m=f.workingMap,b=m.get(s);b===void 0&&(b=[s[1],s[2],[],null],m.set(s,b),Tr(b,s[0],f)),b[2].push(r)}}function wu(r){var s=r.trackedPostpones;if(s===null||s.rootNodes.length===0&&s.rootSlots===null)return r.trackedPostpones=null;var f=r.completedRootSegment===null||r.completedRootSegment.status!==5&&r.completedPreambleSegments!==null;if(f){var m=r.nextSegmentId,b=s.rootSlots,I=r.resumableState;I.bootstrapScriptContent=void 0,I.bootstrapScripts=void 0,I.bootstrapModules=void 0}else{m=0,b=-1,I=r.resumableState;var X=r.renderState;I.nextFormID=0,I.hasBody=!1,I.hasHtml=!1,I.unknownResources={font:X.resets.font},I.dnsResources=X.resets.dns,I.connectResources=X.resets.connect,I.imageResources=X.resets.image,I.styleResources=X.resets.style,I.scriptResources={},I.moduleUnknownResources={},I.moduleScriptResources={},I.instructions=0}return s={nextSegmentId:m,rootFormatContext:r.rootFormatContext,progressiveChunkSize:r.progressiveChunkSize,resumableState:r.resumableState,replayNodes:s.rootNodes,replaySlots:b},f&&(r.postponedState=s),s}function ei(){var r=i.version;if(r!=="19.3.1")throw Error(t(527,r,"19.3.1"))}return ei(),ei(),zo.prerender=function(r,s){return new Promise(function(f,m){var b=s?s.onHeaders:void 0,I;b&&(I=function(j){b(new Headers(j))});var X=Pe(s?s.identifierPrefix:void 0,s?s.unstable_externalRuntimeSrc:void 0,s?s.bootstrapScriptContent:void 0,s?s.bootstrapScripts:void 0,s?s.bootstrapModules:void 0),J=xr(r,X,de(X,void 0,s?s.unstable_externalRuntimeSrc:void 0,s?s.importMap:void 0,I,s?s.maxHeadersLength:void 0),xe(s?s.namespaceURI:void 0),s?s.progressiveChunkSize:void 0,s?s.onError:void 0,s?s.onBrowserBailout:void 0,function(){var j=new ReadableStream({type:"bytes",pull:function(ee){vo(J,ee)},cancel:function(ee){J.destination=null,Vr(J,ee)}},{highWaterMark:0});j={postponed:wu(J),prelude:j},f(j)},void 0,void 0,m);s&&s.signal&&ma(J,s.signal),Ml(J)})},zo.renderToReadableStream=function(r,s){return new Promise(function(f,m){var b,I,X=new Promise(function(Ce,Ve){I=Ce,b=Ve}),J=s?s.onHeaders:void 0,j;J&&(j=function(Ce){J(new Headers(Ce))});var ee=Pe(s?s.identifierPrefix:void 0,s?s.unstable_externalRuntimeSrc:void 0,s?s.bootstrapScriptContent:void 0,s?s.bootstrapScripts:void 0,s?s.bootstrapModules:void 0),Te=sa(r,ee,de(ee,s?s.nonce:void 0,s?s.unstable_externalRuntimeSrc:void 0,s?s.importMap:void 0,j,s?s.maxHeadersLength:void 0),xe(s?s.namespaceURI:void 0),s?s.progressiveChunkSize:void 0,s?s.onError:void 0,s?s.onBrowserBailout:void 0,I,function(){var Ce=new ReadableStream({type:"bytes",pull:function(Ve){vo(Te,Ve)},cancel:function(Ve){Te.destination=null,Vr(Te,Ve)}},{highWaterMark:0});Ce.allReady=X,f(Ce)},function(Ce){X.catch(function(){}),m(Ce)},b,s?s.formState:void 0);s&&s.signal&&ma(Te,s.signal),Ml(Te)})},zo.resume=function(r,s,f){return new Promise(function(m,b){var I,X,J=new Promise(function(ee,Te){X=ee,I=Te}),j=Wa(r,s,de(s.resumableState,f?f.nonce:void 0,void 0,void 0,void 0,void 0),f?f.onError:void 0,f?f.onBrowserBailout:void 0,X,function(){var ee=new ReadableStream({type:"bytes",pull:function(Te){vo(j,Te)},cancel:function(Te){j.destination=null,Vr(j,Te)}},{highWaterMark:0});ee.allReady=J,m(ee)},function(ee){J.catch(function(){}),b(ee)},I);f&&f.signal&&ma(j,f.signal),Ml(j)})},zo.resumeAndPrerender=function(r,s,f){return new Promise(function(m,b){var I=oa(r,s,de(s.resumableState,void 0,void 0,void 0,void 0,void 0),f?f.onError:void 0,f?f.onBrowserBailout:void 0,function(){var X=new ReadableStream({type:"bytes",pull:function(J){vo(I,J)},cancel:function(J){I.destination=null,Vr(I,J)}},{highWaterMark:0});X={postponed:wu(I),prelude:X},m(X)},void 0,void 0,b);f&&f.signal&&ma(I,f.signal),Ml(I)})},zo.version="19.3.1",zo}var rg;function $y(){if(rg)return Bo;rg=1;var i,e;return i=qy(),e=jy(),Bo.version=i.version,Bo.renderToString=i.renderToString,Bo.renderToStaticMarkup=i.renderToStaticMarkup,Bo.renderToReadableStream=e.renderToReadableStream,Bo.resume=e.resume,Bo}var eS=$y();function tS({kind:i,playing:e=!1}){const t=og.useId().replace(/:/g,""),n=o=>`url(#${t}-${o})`;return fe.jsxs("svg",{className:`object-art art-${i}`,viewBox:"0 0 320 240","aria-hidden":"true",children:[fe.jsxs("defs",{children:[fe.jsxs("linearGradient",{id:`${t}-metal`,x2:".25",y2:"1",children:[fe.jsx("stop",{stopColor:"#e5d4a5"}),fe.jsx("stop",{offset:".25",stopColor:"#a58a55"}),fe.jsx("stop",{offset:".5",stopColor:"#ddc58b"}),fe.jsx("stop",{offset:"1",stopColor:"#6a5430"})]}),fe.jsxs("linearGradient",{id:`${t}-black`,x2:".5",y2:"1",children:[fe.jsx("stop",{stopColor:"#575955"}),fe.jsx("stop",{offset:".15",stopColor:"#282d2a"}),fe.jsx("stop",{offset:"1",stopColor:"#111513"})]}),fe.jsxs("linearGradient",{id:`${t}-wood`,x2:"0",y2:"1",children:[fe.jsx("stop",{stopColor:"#92684c"}),fe.jsx("stop",{offset:".16",stopColor:"#73533b"}),fe.jsx("stop",{offset:"1",stopColor:"#3f2c21"})]}),fe.jsxs("linearGradient",{id:`${t}-paper`,x2:".8",y2:"1",children:[fe.jsx("stop",{stopColor:"#f1e7cf"}),fe.jsx("stop",{offset:"1",stopColor:"#b9aa8c"})]}),fe.jsxs("radialGradient",{id:`${t}-lens`,cx:".35",cy:".3",children:[fe.jsx("stop",{stopColor:"#76978e"}),fe.jsx("stop",{offset:".28",stopColor:"#253f3e"}),fe.jsx("stop",{offset:".55",stopColor:"#121f22"}),fe.jsx("stop",{offset:".8",stopColor:"#29383c"}),fe.jsx("stop",{offset:"1",stopColor:"#080d0f"})]}),fe.jsxs("pattern",{id:`${t}-leather`,width:"4",height:"4",patternUnits:"userSpaceOnUse",children:[fe.jsx("rect",{width:"4",height:"4",fill:"#242724"}),fe.jsx("path",{d:"M0 1h2m1 2h1",stroke:"#383b34",strokeWidth:".6"})]})]}),i==="camera"&&fe.jsxs("g",{children:[fe.jsx("path",{d:"M60 131C1 157 20 228 81 215M258 136c60 29 43 88-4 77",fill:"none",stroke:"#3a2920",strokeWidth:"8"}),fe.jsx("path",{d:"M60 131C1 157 20 228 81 215",fill:"none",stroke:"#8c6744",strokeWidth:"1"}),fe.jsx("ellipse",{cx:"161",cy:"221",rx:"114",ry:"9",fill:"#080a08",opacity:".45"}),fe.jsx("rect",{x:"47",y:"103",width:"225",height:"113",rx:"11",fill:n("black"),stroke:"#72766a",strokeWidth:"1"}),fe.jsx("rect",{x:"51",y:"124",width:"217",height:"71",rx:"3",fill:n("leather")}),fe.jsx("path",{d:"M115 105l14-25h49l17 25",fill:n("black"),stroke:"#74766a"}),fe.jsx("path",{d:"M132 85h43l9 16h-62z",fill:"#51554c"}),fe.jsx("rect",{x:"61",y:"92",width:"35",height:"11",rx:"3",fill:n("metal")}),fe.jsx("rect",{x:"227",y:"94",width:"24",height:"9",rx:"3",fill:"#55594f"}),fe.jsx("path",{d:"M55 110h44m114 0h50",stroke:"#aaa990",strokeWidth:"2"}),fe.jsx("rect",{x:"67",y:"133",width:"27",height:"9",rx:"2",fill:"#c4b997"}),fe.jsx("circle",{cx:"165",cy:"162",r:"66",fill:"#111513",stroke:"#555950",strokeWidth:"2"}),fe.jsx("circle",{cx:"165",cy:"162",r:"59",fill:n("black"),stroke:"#93917c"}),Array.from({length:40},(o,c)=>fe.jsx("path",{d:"M165 102v5",stroke:"#898977",strokeWidth:"1",transform:`rotate(${c*9} 165 162)`},c)),fe.jsx("circle",{cx:"165",cy:"162",r:"48",fill:"#0c100f",stroke:"#70664f",strokeWidth:"3"}),fe.jsx("circle",{cx:"165",cy:"162",r:"41",fill:n("lens"),stroke:"#334542",strokeWidth:"2"}),fe.jsx("circle",{cx:"165",cy:"162",r:"24",fill:"#080f12",stroke:"#485b55"}),fe.jsx("path",{d:"M141 141q13-12 32-7",stroke:"#abc5af",strokeWidth:"3",opacity:".28",fill:"none"}),fe.jsx("ellipse",{cx:"181",cy:"181",rx:"12",ry:"4",fill:"#caa0b7",opacity:".12",transform:"rotate(-40 181 181)"}),fe.jsx("circle",{cx:"245",cy:"116",r:"4",fill:"#a09b80"})]}),i==="books"&&fe.jsxs("g",{children:[fe.jsx("ellipse",{cx:"153",cy:"223",rx:"132",ry:"8",fill:"#080a08",opacity:".35"}),fe.jsxs("g",{transform:"rotate(-8 94 217)",children:[fe.jsx("rect",{x:"37",y:"48",width:"48",height:"170",rx:"3",fill:"#625b40"}),fe.jsx("path",{d:"M42 49v168m38-166v166",stroke:"#aaa077",opacity:".5"}),fe.jsx("path",{d:"M43 68h35m-35 4h35m-35 123h35m-35 4h35",stroke:"#c8af73"})]}),fe.jsx("rect",{x:"91",y:"32",width:"48",height:"187",rx:"3",fill:"#623c3a"}),fe.jsx("path",{d:"M96 34v181m37-181v181M98 52h33m-33 142h33",stroke:"#ad8d68"}),fe.jsx("rect",{x:"143",y:"58",width:"31",height:"161",rx:"2",fill:"#b0a48a"}),fe.jsx("path",{d:"M148 62v152m20-152v152",stroke:"#d8c9a7"}),fe.jsxs("g",{transform:"rotate(8 215 217)",children:[fe.jsx("rect",{x:"180",y:"88",width:"83",height:"132",rx:"2",fill:n("wood")}),fe.jsx("rect",{x:"186",y:"94",width:"71",height:"120",fill:n("metal")}),fe.jsx("rect",{x:"189",y:"97",width:"65",height:"114",fill:n("paper")}),fe.jsx("rect",{x:"198",y:"109",width:"47",height:"78",fill:"#a49980"}),fe.jsx("path",{d:"M207 148h29m-14-14v28",stroke:"#c7bb9f",opacity:".6"})]})]}),i==="frames"&&fe.jsxs("g",{children:[fe.jsx("ellipse",{cx:"168",cy:"222",rx:"135",ry:"7",fill:"#080a08",opacity:".3"}),fe.jsxs("g",{transform:"rotate(-4 111 218)",children:[fe.jsx("rect",{x:"23",y:"34",width:"154",height:"183",fill:"#262a23",stroke:"#8f7148",strokeWidth:"4"}),fe.jsx("rect",{x:"31",y:"42",width:"138",height:"167",fill:n("paper")}),fe.jsx("rect",{x:"48",y:"60",width:"104",height:"120",fill:"#6b6e5d"}),fe.jsx("path",{d:"M48 180L152 60",stroke:"#c9c7a3",opacity:".12",strokeWidth:"30"}),fe.jsx("path",{d:"M48 60h104v120H48z",fill:"none",stroke:"#444b40"})]}),fe.jsxs("g",{transform:"rotate(4 222 218)",children:[fe.jsx("rect",{x:"157",y:"87",width:"135",height:"132",fill:n("wood"),stroke:"#b7a16f",strokeWidth:"2"}),fe.jsx("rect",{x:"165",y:"95",width:"119",height:"116",fill:n("paper")}),fe.jsx("rect",{x:"178",y:"108",width:"93",height:"84",fill:"#7a6558"}),fe.jsx("path",{d:"M178 192l93-84",stroke:"#ead9b1",strokeWidth:"26",opacity:".08"})]})]}),i==="paper"&&fe.jsxs("g",{transform:"rotate(-7 160 180)",children:[fe.jsx("path",{d:"M28 108l244 18 18 87-246 10z",fill:"#090b08",opacity:".3"}),fe.jsx("path",{d:"M30 102l239 14 18 90-244 8z",fill:"#9c9075"}),fe.jsx("path",{d:"M30 98l238 15 19 88-244 9z",fill:n("paper"),stroke:"#a99e81"}),fe.jsx("path",{d:"M44 198l240-8m-240 12l241-8",stroke:"#b2a78d"}),fe.jsx("path",{d:"M39 117l231 13M43 145l233 11",stroke:"#4a4b3e",strokeWidth:"1"}),fe.jsx("rect",{x:"52",y:"159",width:"64",height:"33",fill:"#8b8c74",transform:"rotate(3 52 159)"}),Array.from({length:7},(o,c)=>fe.jsx("path",{d:`M126 ${160+c*5}l140 8`,stroke:"#797b65",strokeWidth:"1",opacity:".65"},c)),fe.jsx("path",{d:"M156 108l10 96",stroke:"#998c6f",opacity:".4"})]}),i==="rocket"&&fe.jsxs("g",{children:[fe.jsx("ellipse",{cx:"157",cy:"224",rx:"91",ry:"7",fill:"#090b08",opacity:".4"}),fe.jsx("path",{d:"M103 224h112l-17-9h-80z",fill:n("wood")}),fe.jsx("path",{d:"M157 216V125",stroke:"#ac955e",strokeWidth:"4"}),fe.jsx("path",{d:"M156 213V128",stroke:"#e4cd94",strokeWidth:"1"}),fe.jsxs("g",{transform:"rotate(18 155 123)",children:[fe.jsx("path",{d:"M135 169l-23 24 3-56 20-24m40 56l23 24-3-56-20-24",fill:"#814e40",stroke:"#b78360"}),fe.jsx("path",{d:"M135 77q20-27 40 0v92h-40z",fill:n("paper"),stroke:"#8f8e78"}),fe.jsx("path",{d:"M135 77q4-36 20-59 16 23 20 59z",fill:n("metal")}),fe.jsx("path",{d:"M135 140h40v14h-40",fill:"#485447"}),fe.jsx("circle",{cx:"155",cy:"101",r:"10",fill:n("black"),stroke:n("metal"),strokeWidth:"3"}),fe.jsx("circle",{cx:"155",cy:"101",r:"5",fill:"#506b6b"}),fe.jsx("path",{d:"M138 171h34l-6 10h-21z",fill:n("black")}),fe.jsx("path",{d:"M142 80v51",stroke:"#fff3d9",opacity:".6"})]}),fe.jsx("rect",{x:"202",y:"181",width:"72",height:"36",rx:"3",fill:"#4a5145",stroke:"#86907a"}),fe.jsx("rect",{x:"210",y:"188",width:"28",height:"19",fill:"#24382f",stroke:"#b0a377"}),fe.jsx("path",{d:"M213 198h6l3-5 4 8 4-5h5",stroke:"#b8bb82",fill:"none"}),fe.jsx("circle",{cx:"252",cy:"196",r:"6",fill:n("metal")}),fe.jsx("circle",{cx:"265",cy:"205",r:"2",fill:"#b8b28b"})]}),i==="letter"&&fe.jsxs("g",{transform:"rotate(-5 150 180)",children:[fe.jsx("ellipse",{cx:"158",cy:"220",rx:"128",ry:"7",fill:"#080a08",opacity:".3"}),fe.jsx("path",{d:"M51 89l204 12-3 112-204-13z",fill:"#89806b"}),fe.jsx("path",{d:"M47 82l204 13-2 111-204-13z",fill:n("paper")}),fe.jsx("path",{d:"M46 85l98 78 106-66m-204 95l76-48m127 60l-74-52",fill:"none",stroke:"#a99a7a",strokeWidth:"1.4"}),fe.jsx("circle",{cx:"147",cy:"159",r:"17",fill:"#85483c",stroke:"#633c30",strokeWidth:"2"}),fe.jsx("circle",{cx:"147",cy:"159",r:"12",fill:"none",stroke:"#b57a58"}),fe.jsx("path",{d:"M232 203l31-112 6 2-31 112z",fill:n("metal")}),fe.jsx("path",{d:"M232 203l-1 11 7-9",fill:"#1c2725"})]}),i==="phone"&&fe.jsxs("g",{className:"phone-drawing",stroke:"#30352f",strokeWidth:"3",strokeLinejoin:"round",children:[fe.jsx("ellipse",{cx:"163",cy:"223",rx:"112",ry:"7",fill:"#19211d",opacity:".2",stroke:"none"}),fe.jsx("path",{d:"M86 143Q90 129 111 128h96q20 0 26 17l27 64q-89 23-191 0z",fill:"#92adb0"}),fe.jsx("path",{d:"M73 204q96 17 181-1l6 11q-91 22-191 0z",fill:"#607f84"}),fe.jsx("path",{d:"M105 132v-22m102 22v-22",fill:"none",strokeWidth:"8"}),fe.jsx("path",{className:"phone-cord",d:"M231 105q48 5 37 36c-20 13 22 7 5 22s19 9 1 22 18 8 0 20q-6 9-25 7",fill:"none",stroke:"#d9c5a4",strokeWidth:"4"}),fe.jsxs("g",{className:"phone-dial",children:[fe.jsx("ellipse",{cx:"162",cy:"171",rx:"45",ry:"34",fill:"#e0cfaa"}),fe.jsx("ellipse",{cx:"162",cy:"171",rx:"22",ry:"16",fill:"#8ca2a0"}),Array.from({length:10},(o,c)=>fe.jsx("ellipse",{cx:162+33*Math.cos(c*Math.PI/5),cy:171+25*Math.sin(c*Math.PI/5),rx:"5",ry:"4",fill:"#3d514e",stroke:"none"},c))]}),fe.jsxs("g",{className:"phone-receiver",children:[fe.jsx("path",{d:"M72 108Q66 67 103 62q58-21 116 0 37 5 29 46l-37 6-10-34q-40-10-78 0l-11 34z",fill:"#a9c5c5"}),fe.jsx("path",{d:"M77 101l30 5m109 0 27-5",fill:"none",stroke:"#647f80",strokeWidth:"6"}),fe.jsx("path",{d:"M104 68q59-19 111 0",fill:"none",stroke:"#dfebe0",opacity:".6"})]}),fe.jsx("g",{className:"phone-ring",fill:"none",stroke:"#e8cc8b",strokeWidth:"4",children:fe.jsx("path",{d:"M55 68l-15-7m20-7-9-15m208 29 16-7m-23-8 10-15"})})]}),i==="lamp"&&fe.jsxs("g",{children:[fe.jsx("ellipse",{cx:"178",cy:"224",rx:"75",ry:"8",fill:"#0a0c08",opacity:".4"}),fe.jsx("ellipse",{cx:"169",cy:"216",rx:"57",ry:"10",fill:n("metal")}),fe.jsx("path",{d:"M127 213q3-14 42-14 39 0 43 14",fill:n("black")}),fe.jsx("path",{d:"M169 202V113l-53-51",fill:"none",stroke:"#554a2f",strokeWidth:"9"}),fe.jsx("path",{d:"M167 199V114l-52-51",fill:"none",stroke:n("metal"),strokeWidth:"5"}),fe.jsx("circle",{cx:"168",cy:"116",r:"7",fill:n("metal")}),fe.jsx("path",{d:"M100 51q32-13 47 13l29 44q-41 8-73 32l-21-47q-10-27 18-42",fill:"#374d40",stroke:"#79806a"}),fe.jsx("path",{d:"M84 90q24-29 62-26",stroke:"#a9b094",opacity:".4",fill:"none",strokeWidth:"2"}),fe.jsx("ellipse",{cx:"139",cy:"123",rx:"43",ry:"10",transform:"rotate(-24 139 123)",fill:"#d1c28e",stroke:"#848067"}),fe.jsx("ellipse",{className:"lamp-bulb",cx:"139",cy:"123",rx:"26",ry:"6",transform:"rotate(-24 139 123)",fill:"#fff0b1"}),fe.jsx("path",{d:"M163 138v31",stroke:"#d7bc7c"}),fe.jsx("circle",{cx:"163",cy:"171",r:"3",fill:n("metal")})]}),i==="record"&&fe.jsxs("g",{children:[fe.jsx("ellipse",{cx:"161",cy:"223",rx:"125",ry:"8",fill:"#080a08",opacity:".4"}),fe.jsx("path",{d:"M32 126l221-10 39 64-234 16z",fill:"#716144",stroke:"#b39966"}),fe.jsx("path",{d:"M58 196l234-16v32L58 225 32 158v-32z",fill:n("wood")}),fe.jsx("path",{d:"M58 196v29m0-21l234-15",stroke:"#39281e"}),fe.jsx("g",{transform:"translate(145 157) scale(1 .39)",children:fe.jsxs("g",{className:e?"record-disc playing":"record-disc",children:[fe.jsx("circle",{r:"82",fill:"#161b17",stroke:"#787560"}),[72,64,56,48].map(o=>fe.jsx("circle",{r:o,fill:"none",stroke:"#414738",strokeWidth:".8"},o)),fe.jsx("circle",{r:"26",fill:"#875345"}),fe.jsx("path",{d:"M-17-5l34 10",stroke:"#c5a57d",strokeWidth:"2"}),fe.jsx("path",{d:"M-60-35q14-16 39-26",stroke:"#a3a28a",strokeWidth:"8",opacity:".08"}),fe.jsx("circle",{r:"3",fill:"#d3c69e"})]})}),fe.jsx("path",{d:"M243 135l-19 34-29 5",fill:"none",stroke:"#1d211a",strokeWidth:"7"}),fe.jsx("path",{d:"M243 131l-19 34-29 5",fill:"none",stroke:n("metal"),strokeWidth:"4"}),fe.jsx("ellipse",{cx:"243",cy:"132",rx:"9",ry:"4",fill:n("black")}),fe.jsx("rect",{x:"187",y:"167",width:"19",height:"8",rx:"1",fill:"#b4b199"}),fe.jsx("rect",{x:"74",y:"205",width:"35",height:"8",rx:"1",fill:n("metal")}),fe.jsx("circle",{cx:"261",cy:"199",r:"4",fill:n("metal")}),fe.jsx("circle",{cx:"277",cy:"198",r:"2",fill:e?"#bfcc8d":"#433b26"})]})]})}function nS(i,e){const{geometries:t,materials:n}=e;function o(S,C=0,k=.65){const H=new ru({color:S,metalness:C,roughness:k});return n.push(H),H}const c=o("#a9905e",0,.98),u=o("#b99a58",.7,.28),d=o("#d8cfb4"),p=o("#bfb79f"),g=o("#39291f"),M=o("#243a32"),T=o("#92a29b",.2,.2);function _(S,C,k,H,q,ae=i){t.push(S);const Y=new di(S,C);return Y.position.set(k,H,q),ae.add(Y),Y}function x(S,C,k,H,q,ae,Y){return _(new Vs(H,q,ae),Y,S,C,k)}function R(S,C,k,H,q,ae,Y=i){const ue=_(new Rf(H,q,6,64),ae,S,C,k,Y);return ue.rotation.x=Math.PI/2,ue}function U(S,C,k,H,q=i){const ae=C.clone().sub(S),Y=_(new Go(k,k,ae.length(),8),H,0,0,0,q);return Y.position.copy(S).add(C).multiplyScalar(.5),Y.quaternion.setFromUnitVectors(new K(0,1,0),ae.normalize()),Y}x(0,6.04,4,14,.16,18,d);for(const S of[5.64,5.78,5.91]){const C=(S-5.5)*.52;x(0,S,-4.88+C,14,.09,.12+C,p),x(-6.9+C,S,4,.12+C,.09,18,p),x(6.9-C,S,4,.12+C,.09,18,p)}x(0,5.61,-4.66,14,.025,.035,u);for(const S of[-5,-2,1,4])x(S,5.91,4,.12,.16,17.5,p);for(const S of[-3,0,3,6,9,12])x(0,5.91,S,13.5,.16,.12,p);for(const S of[-5,-2,1,4])for(const C of[-3,0,3,6,9])x(S+1.43,5.94,C+1.44,2.65,.025,.025,u),x(S+.1,5.94,C+1.4,.025,.025,2.65,u);for(const S of[.18,.35,1.65,1.78])x(0,S,-4.84,13.8,.07,.1,S===1.78?u:g);for(let S=1.4;S<6.9;S+=1.05)x(S,.98,-4.82,.035,1.2,.06,u),x(S+.5,.42,-4.81,.86,.025,.05,u),x(S+.5,1.54,-4.81,.86,.025,.05,u);for(const S of[-6.85,6.85]){x(S,.25,4,.12,.22,18,g),x(S,1.78,4,.08,.035,18,u);for(let C=-4;C<13;C+=1.4)x(S,.96,C,.065,1.35,.035,u)}x(-6.86,3.65,.5,.06,2.8,2.6,g),x(-6.8,3.65,.5,.04,2.57,2.35,T);for(const S of[-.7,.5,1.7])x(-6.75,3.65,S,.06,2.65,.055,u);x(-6.74,3.65,.5,.055,.06,2.4,u);for(const S of[-1,2])for(let C=0;C<4;C++)_(new Go(.11,.15,3.25,10),M,-6.6+C*.07,3.45,S+C*.12);for(const S of[-3.15,3.15])x(S,.035,1,.04,.006,4.5,c);for(const S of[-1.15,3.15])x(0,.035,S,6.3,.006,.04,c);for(let S=0;S<19;S++)for(const C of[-1,3]){const k=x(-2.9+S*.32,.039,C,.075,.005,.075,c);k.rotation.y=Math.PI/4}R(0,.033,1,1,.018,c).scale.set(1,1.4,.08);for(let S=0;S<12;S++){const C=S*Math.PI/6;R(Math.cos(C)*.5,.034,1+Math.sin(C)*.7,.18,.01,c).scale.set(.8,1.3,.08)}const y=new ur;y.position.set(.75,0,-1.4),i.add(y);const O=.75,B=-1.4;R(O,5.92,B,.65,.055,p),R(O,5.9,B,.43,.02,u),U(new K(0,5.92,0),new K(0,5.08,0),.025,u,y),R(0,4.78,0,.78,.035,u,y),R(0,4.49,0,.45,.027,u,y);const P=new ru({color:"#fff1c7",emissive:"#ffd691",emissiveIntensity:2.3,roughness:.4});n.push(P);const F=new Og({color:"#e6e8d8",metalness:.12,roughness:.12,transparent:!0,opacity:.65});n.push(F);for(let S=0;S<8;S++){const C=S*Math.PI/4,k=Math.cos(C),H=Math.sin(C),q=[new K(0,5.05,0),new K(k*.4,4.7,H*.4),new K(k*.94,4.74,H*.94),new K(k*1.05,5,H*1.05)];_(new Od(new Ng(q),16,.026,6,!1),u,0,0,0,y),_(new Go(.12,.075,.04,16),u,k*1.05,5,H*1.05,y),_(new Go(.034,.041,.2,10),d,k*1.05,5.12,H*1.05,y);const ae=_(new Af(.06,10,8),P,k*1.05,5.26,H*1.05,y);ae.scale.y=1.7,U(new K(k*.76,4.78,H*.76),new K(k*.76,4.5,H*.76),.008,u,y);const Y=_(new Ef(.09),F,k*.76,4.45,H*.76,y);Y.scale.y=1.8}const D=_(new Ef(.16),F,0,4.28,0,y);D.scale.y=1.8;const V=new Z0("#ffdb9a",14,15,2);return V.position.set(O,4.9,B),i.add(V),{update:(S,C)=>{V.intensity=S?2:C?7:14,P.emissiveIntensity=S?.35:C?1.2:2.3}}}function iS(i,e){const{geometries:t,materials:n}=e,o=new ur;o.position.set(-4.4,1,.2),o.userData.id="record",i.add(o);function c(S,C=0,k=.5){const H=new ru({color:S,metalness:C,roughness:k});return n.push(H),H}const u=c("#62432d"),d=c("#bba779",.75,.24),p=c("#161c19"),g=c("#242925"),M=c("#8c493e"),T=c("#d0c4a5");function _(S,C,k,H,q,ae=o){t.push(S);const Y=new di(S,C);return Y.position.set(k,H,q),ae.add(Y),Y}function x(S,C,k,H,q,ae,Y,ue=o){return _(new Vs(H,q,ae),Y,S,C,k,ue)}function R(S,C,k,H,q,ae,Y=o){return _(new Go(H,H,q,48),ae,S,C,k,Y)}x(0,0,0,1.85,.21,1.35,u),x(0,.112,0,1.78,.025,1.28,p);for(const S of[-.72,.72])for(const C of[-.48,.48])R(S,-.14,C,.085,.09,g);R(-.25,.14,0,.56,.04,d);const U=new ur;U.name="record-platter",U.position.set(-.25,.171,0),o.add(U),R(0,0,0,.525,.022,p,U);for(let S=.18;S<.5;S+=.026){const C=_(new Rf(S,.0019,3,64),g,0,.013,0,U);C.rotation.x=Math.PI/2}R(0,.015,0,.145,.005,M,U),x(.035,.019,0,.035,.002,.16,T,U),R(0,.033,0,.015,.04,d,U);const w=new ur;w.name="record-tonearm",w.position.set(.62,.2,-.4),o.add(w),R(0,0,0,.075,.08,d,w),x(0,.07,.19,.025,.025,.38,d,w);const y=x(-.105,.07,.44,.025,.025,.29,d,w);y.rotation.y=-.8,x(-.21,.052,.54,.075,.035,.13,p,w),R(-.21,.015,.57,.005,.06,d,w),x(.015,.07,-.1,.1,.1,.13,p,w),R(.64,.153,.43,.065,.025,d),x(.32,.151,.46,.17,.01,.1,T);const O=new ru({color:"#779775",emissive:"#91ba6c",emissiveIntensity:0});n.push(O),_(new Af(.018,8,6),O,.7,.025,.684);const B=new ur;B.position.set(0,.13,-.67),B.rotation.x=-1.22,o.add(B);const P=new Og({color:"#b7c1b4",transparent:!0,opacity:.13,roughness:.15,metalness:.05,side:Pr,depthWrite:!1});n.push(P),x(0,0,.67,1.88,.025,1.36,P,B);for(const S of[-.94,.94])x(S,0,.67,.018,.022,1.36,d,B);x(0,0,1.35,1.88,.02,.018,d,B);let F=0,D=0,V=0;return{body:o,update:(S,C,k)=>{const H=Math.min((S-V)/1e3,.05);V=S,F=k?cs.damp(F,C?1:0,3,H):C?1:0,D=k?cs.damp(D,C?1:0,4,H):C?1:0,k&&(U.rotation.y-=H*F*Math.PI*2*33.333/60),w.rotation.y=.2-D*.98,w.position.y=.2+(1-D)*.07,O.emissiveIntensity=C?1.5:0}}}class rS{constructor(e){this.arrive=e}arrive;x=-6.02;target=-6.02;trip=null;move(e,t,n,o){if(this.target=t,!o){this.trip=null,this.x=t,e&&this.arrive(e);return}this.trip={from:this.x,start:n,duration:Math.min(1400,Math.max(650,Math.abs(t-this.x)*170)),destination:e}}update(e,t){if(!this.trip)return;const n=this.trip,o=t?Math.min(1,(e-n.start)/n.duration):1,c=o===1?1:Math.floor(o*24)/24,u=c*c*(3-2*c);this.x=n.from+(this.target-n.from)*u,o===1&&(this.trip=null,this.x=this.target,n.destination&&this.arrive(n.destination))}get moving(){return this.trip!==null}}function aS(i){const e=[],t=[];for(const[n,o]of i)n!=="notes"&&o.traverse(c=>{if(!(c instanceof di))return;const u=c.material;if(u.transparent&&u.opacity<.2)return;const d=new di(c.geometry,c.material);d.matrixAutoUpdate=!1,d.matrixWorld.copy(c.matrixWorld),d.userData.id=n,e.push(d),n==="ladder"&&t.push({source:c,target:d})});return{targets:e,updateMoving:()=>t.forEach(({source:n,target:o})=>o.matrixWorld.copy(n.matrixWorld))}}function sS(i,e){if(!i||!e)return!0;const t=i.image;if(!(t instanceof HTMLCanvasElement))return!0;const n=i.userData.hitPixels;if(!n)return!1;const o=cs.clamp(Math.floor(e.x*t.width),0,t.width-1),c=cs.clamp(Math.floor((1-e.y)*t.height),0,t.height-1);return n[(c*t.width+o)*4+3]>=30}const Ql=(i,e=320,t=240)=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${e} ${t}">${i}</svg>`;function cS(i,e,t,n,o=()=>{}){const c=new Qy({antialias:!0});c.setPixelRatio(Math.min(devicePixelRatio,1.6)),c.outputColorSpace=ki,c.setClearColor("#252d28"),i.appendChild(c.domElement);const u=new f0,d=new lr(57,1,.1,60);d.position.set(0,1.65,6.8);const p=[],g=[],M=[],T=de=>{const Pe=document.createElement("canvas");Pe.width=640,Pe.height=480;const W=new yp(Pe);W.colorSpace=ki,p.push(W);const _e=new Image;return _e.onload=()=>{ht||(Pe.getContext("2d").drawImage(_e,0,0,640,480),W.userData.hitPixels=Pe.getContext("2d").getImageData(0,0,Pe.width,Pe.height).data,W.needsUpdate=!0)},_e.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(de)}`,W},_=de=>{const Pe=new G0({color:de});return g.push(Pe),Pe},x=_("#68452f"),R=_("#30251f"),U=_("#354b40"),w=_("#c9ba95"),y=_("#303e36"),O=_("#77534d");function B(de,Pe,W,_e,xe,Le,Ie,pe=u){const Ge=new Vs(_e,xe,Le);M.push(Ge);const Oe=new di(Ge,Ie);return Oe.position.set(de,Pe,W),pe.add(Oe),Oe}const P=new Map,F=new Map;function D(de,Pe,W,_e,xe,Le,Ie){const pe=new ur;pe.position.set(W,_e,xe),pe.userData.id=de,pe.userData.paper=!0;const Ge=new Kc({map:T(Pe),transparent:!0,side:Pr,depthWrite:!1});g.push(Ge);const Oe=new ic(Le,Ie);M.push(Oe);const yt=new di(Oe,Ge);return pe.add(yt),u.add(pe),P.set(de,pe),F.set(de,pe.position.clone()),pe}function V(de){return eS.renderToStaticMarkup(og.createElement(tS,{kind:de})).replace("<svg ",'<svg xmlns="http://www.w3.org/2000/svg" ').replace("<defs>",'<filter id="paint-edge"><feTurbulence type="fractalNoise" baseFrequency=".06" numOctaves="2" seed="6"/><feDisplacementMap in="SourceGraphic" scale="1.3"/></filter><style>.phone-ring{opacity:0}svg>g{filter:url(#paint-edge)}linearGradient stop{stop-color:#b4a17e}linearGradient[id$="black"] stop{stop-color:#34443e}linearGradient[id$="wood"] stop{stop-color:#8c674b}linearGradient[id$="paper"] stop{stop-color:#ded1b1}radialGradient stop{stop-color:#537d7b}</style><defs>')}B(0,-.12,0,14,.2,28,x),B(0,3,-5,14,6,.18,U),B(-7,3,4,.18,6,18,U),B(7,3,4,.18,6,18,U);for(let de=-7;de<7;de+=.7)B(de,.001,0,.018,.008,27,R);B(0,.012,1,7,.018,5,O);for(const de of[-3.3,3.3])B(de,.025,1,.045,.012,4.6,w);const S=nS(u,{geometries:M,materials:g}),C=-2.6,k=-4.55;B(C,2.65,k-.2,7.2,5.1,.2,R);for(const de of[-6.25,-3.8,-1.4,1.05])B(de,2.65,k+.15,.13,5.2,.75,x);const q=[.35,1.95,3.55,5.15];for(const de of q)B(C,de,k+.1,7.4,.14,.85,x),B(C,de+.055,k+.54,7.4,.035,.035,w);const ae=(de,Pe,W,_e)=>D(de,V(Pe),W,_e+.07+.7-.11,-3.98,1.85,1.4);ae("photography","camera",-5.02,3.55),ae("about","books",-2.6,3.55),ae("favorites","frames",-.17,3.55),ae("published","paper",-5.02,1.95);const Y=ae("engineering","rocket",-3.12,1.95);Y.scale.x=.78;const ue=D("device",Ql('<g stroke="#34443e" stroke-width="5" stroke-linejoin="round"><path d="M92 16h138v177q0 29-31 29H92z" fill="#c7bca3"/><path d="M108 35h105v85H108z" fill="#536055"/><path d="M122 48h76v57h-76z" fill="#9da77a"/><path d="M116 157h37m-19-18v37" stroke-width="12"/><circle cx="191" cy="154" r="10" fill="#875345"/><circle cx="211" cy="177" r="10" fill="#875345"/><path d="M157 201h19m9 0h19"/></g>'),-2.13,2.61,-3.97,1.65,1.35),Se=new ur;Se.position.set(-2.6,2.61,-3.98),Se.userData.id="engineering",Se.userData.paper=!0,u.add(Se),u.updateMatrixWorld(!0),Se.attach(Y),Se.attach(ue),P.set("engineering",Se),F.set("engineering",Se.position.clone()),P.delete("device"),F.delete("device");const be=new ur;be.userData.id="shelf-books",u.add(be),P.set("shelf-books",be),F.set("shelf-books",be.position.clone());for(let de=0;de<3;de++)for(let Pe=0;Pe<7;Pe++){const W=-5.93+de*2.43+Pe*.28,_e=.7+Pe%3*.15;B(W,.43+_e/2,-4.36,.21,_e,.4,[y,O,w][Pe%3],be),B(W,.63,-4.145,.17,.025,.015,w,be)}const Re=1.16;B(3.8,Re,-2.2,3.7,.16,1.5,x),B(3.8,.85,-2.2,3.4,.5,1.3,R);for(const de of[2.2,5.4])for(const Pe of[-2.8,-1.6])B(de,.55,Pe,.13,1.1,.13,x);const ne=Ql('<g stroke="#273b36" stroke-width="3" stroke-linejoin="round"><path d="M77 310l15-131q45-24 90 0l22 131" fill="#33433e"/><path d="M116 173l22 62 26-62" fill="#d9d4b6"/><path d="M134 185l-17-9v20l20-8 19 8v-20z" fill="#7d5148"/><path d="M96 191l-19 88 30 7m73-95 21 88-29 7" fill="#33433e"/><ellipse cx="137" cy="117" rx="37" ry="49" fill="#caa58a"/><path d="M102 122q-20-68 38-66 52 0 30 69l-8-31q-25 13-51-1z" fill="#c5cebe"/><circle cx="124" cy="117" r="4" fill="#263931"/><circle cx="150" cy="117" r="4" fill="#263931"/><path d="M129 144q10 6 19-1m-11-27-5 17h9" fill="none"/><ellipse cx="94" cy="286" rx="18" ry="12" fill="#e4dfc7"/><ellipse cx="182" cy="286" rx="18" ry="12" fill="#e4dfc7"/></g>',280,320);D("butler",ne,3.85,2.03,-2.95,1.65,2.6);let G=V("phone");const lt=G.match(/<g class="phone-receiver">[\s\S]*?<\/g>/)?.[0]||"";G=G.replace(lt,""),D("contact",G,3.05,Re+.08+.46-.065,-1.93,1.22,.92);const rt=D("receiver",Ql(lt),3.05,Re+.08+.46-.065,-1.91,1.22,.92);D("letter",V("letter"),4.02,Re+.38,-1.38,.85,.64),D("lamp",V("lamp"),4.95,Re+.08+.64,-2.17,1.65,1.28);const Ae=new ur;Ae.position.set(-5.7,0,-1.8),Ae.scale.setScalar(.8),u.add(Ae),B(0,.77,0,2,.14,1.3,x,Ae);for(const de of[-.8,.8])B(de,.38,0,.12,.76,1,R,Ae);const oe=iS(u,{geometries:M,materials:g});Ae.add(oe.body),oe.body.position.set(0,1,0),P.set("record",oe.body),F.set("record",oe.body.position.clone());const Ct=D("notes",Ql('<g fill="#e4d3a4" font-family="Georgia" font-size="66"><text x="55" y="110">♪</text><text x="180" y="65">♫</text></g>'),0,2.02,.04,1.6,1.2);Ae.add(Ct),Ct.visible=!1,B(3.8,3.9,-4.85,2.5,.06,.08,w);const Me=D("exit",Ql('<path d="M25 65l270-4 2 110-271 4z" fill="#416453" stroke="#c5cfac" stroke-width="5"/><text x="52" y="141" fill="#e2e9c0" font-family="sans-serif" font-size="58" letter-spacing="8">EXIT ↗</text>'),3.8,4.3,-4.65,1.85,1.38);B(-2.6,4.95,-3.5,7.5,.055,.06,w);const ye=Ql(`<g stroke-linecap="round"><path d="M55 12L20 370M94 12l14 358" stroke="#382e28" stroke-width="14"/><path d="M55 12L20 370M94 12l14 358" stroke="#bc9269" stroke-width="8"/>${Array.from({length:9},(de,Pe)=>`<path d="M${52-Pe*3} ${42+Pe*36}h${44+Pe*4}" stroke="#cdb486" stroke-width="8"/>`).join("")}<circle cx="23" cy="375" r="8" fill="#303c34"/><circle cx="108" cy="375" r="8" fill="#303c34"/></g>`,130,390),Ke=D("ladder",ye,-6.02,2.48,-3.28,.85,4.95);let ut=!1,Ye=0,mt=!1;const vt=new rS(de=>{i.removeAttribute("aria-busy"),o("Opening the selected collection."),n(de)});function _t(de,Pe,W,_e,xe,Le,Ie){const pe=document.createElement("canvas");pe.width=512,pe.height=Math.round(512*Le/xe);const Ge=pe.getContext("2d");Ge.fillStyle="#d8cead",Ge.fillRect(0,0,pe.width,pe.height);const Oe=new yp(pe);Oe.colorSpace=ki,p.push(Oe);const yt=new Kc({map:Oe,side:Pr});g.push(yt);const Ot=new ic(xe,Le);M.push(Ot);const $t=new di(Ot,yt);$t.position.set(W,_e,.015),$t.rotation.z=Ie,P.get(de)?.add($t);const Pn=new Image;Pn.onload=()=>{if(ht)return;const vs=Math.min(pe.width/Pn.width,pe.height/Pn.height),er=Pn.width*vs,fr=Pn.height*vs;Ge.drawImage(Pn,(pe.width-er)/2,(pe.height-fr)/2,er,fr),Oe.userData.hitPixels=Ge.getImageData(0,0,pe.width,pe.height).data,Oe.needsUpdate=!0},Pn.src=Pe}qg().then(de=>{if(ht)return;const Pe=Le=>de.posts.find(Ie=>Ie.id===Le)?.image.src,W=Pe("18151133245558753"),_e=Pe("18117687656072162"),xe=Pe("18119889931954458");W&&_t("favorites",W,-.386,-.006,.601,.7,Math.PI/45),_e&&_t("favorites",_e,.4,-.177,.538,.49,-Math.PI/45),xe&&_t("about",xe,.367,-.133,.272,.455,-Math.PI/22.5)}).catch(()=>{});const At=new X0("#eee3c8","#3b2920",2.4);u.add(At);const Ze=new K0("#ffe0ad",1.4);Ze.position.set(-4,7,5),u.add(Ze);const xt=new j0,Jt=new ct;let Ft=null,jt=null,Rt=0,Kt=.055,Z=null,Wt=!1,ht=!1;const z=matchMedia("(prefers-reduced-motion: reduce)"),A=de=>de==="receiver"||de==="butler"||de==="letter"?"contact":de==="device"?"engineering":de==="vinyl"?"record":de==="shelf-books"?"about":de;u.updateMatrixWorld(!0);const ie=aS(P);function te(de){const Pe=c.domElement.getBoundingClientRect();Jt.set((de.clientX-Pe.left)/Pe.width*2-1,-(de.clientY-Pe.top)/Pe.height*2+1),xt.setFromCamera(Jt,d),u.updateMatrixWorld(!0),ie.updateMoving();for(const W of xt.intersectObjects(ie.targets,!1)){const _e=W.object,xe=_e.material;if(sS(xe.map||void 0,W.uv))return{id:_e.userData.id,x:W.point.x}}return null}const ge=de=>{de!==jt&&(jt=de,t(jt?A(jt):null),c.domElement.style.cursor=jt?"pointer":"grab")},Fe=new Set(["photography","about","favorites","published","engineering","shelf-books"]);function Be(de,Pe){const W=A(de),_e=e().motion&&!z.matches;if(de==="ladder"){ut=!ut,vt.move(null,ut?.72:-6.02,performance.now(),_e);return}if(Fe.has(de)){const xe=de==="shelf-books"?Pe??-2.6:F.get(de)?.x??-2.6;let Le=cs.clamp(xe-.85,-6.02,.72);Math.abs(Le-vt.x)<.2&&(Le=cs.clamp(xe+.65,-6.02,.72)),i.setAttribute("aria-busy","true"),o("The ladder is moving to your selection."),vt.move(W,Le,performance.now(),_e);return}if(W==="contact"&&_e){Ye||(Ye=performance.now());return}n(W)}const me=de=>{de.button===0&&(Z={x:de.clientX,y:de.clientY,yaw:Rt,pitch:Kt},Wt=!1,c.domElement.setPointerCapture(de.pointerId))},we=de=>{if(Z){const Pe=de.clientX-Z.x,W=de.clientY-Z.y;Math.abs(Pe)+Math.abs(W)>6&&(Wt=!0,ge(null),c.domElement.style.cursor="grabbing"),Rt=cs.clamp(Z.yaw-Pe*.0018,-.46,.46),Kt=cs.clamp(Z.pitch+W*.0015,-.18,.3)}else Ft=null,ge(te(de)?.id||null)},ke=de=>{if(Z&&!Wt){const Pe=te(de);Pe&&Be(Pe.id,Pe.x)}Z=null},it=()=>{ge(null)},He=()=>{Z=null};c.domElement.addEventListener("pointerdown",me),c.domElement.addEventListener("pointermove",we),c.domElement.addEventListener("pointerup",ke),c.domElement.addEventListener("pointerleave",it),c.domElement.addEventListener("pointercancel",He);const ze=()=>{const de=i.clientWidth,Pe=i.clientHeight;c.setSize(de,Pe),d.aspect=de/Pe,d.fov=de<700?80:57,d.position.z=de<700?12:6.8,Ae.position.x=de<700?-4.7:-5.7,Ae.scale.setScalar(de<700?.65:.8),d.updateProjectionMatrix()},at=new ResizeObserver(ze);return at.observe(i),ze(),c.setAnimationLoop(de=>{if(ht||document.hidden)return;const Pe=e(),W=Pe.motion&&!z.matches,_e=de/1e3;d.lookAt(d.position.x+Math.sin(Rt)*10,d.position.y+Math.sin(Kt)*10,d.position.z-Math.cos(Rt)*10);const xe=jt||Ft;if(P.forEach((pe,Ge)=>{if(pe.position.copy(F.get(Ge)),pe.rotation.set(0,0,0),W&&xe===Ge&&!["ladder","receiver","contact","record","shelf-books"].includes(Ge)){const Oe=Math.floor(_e*10)/10;pe.rotation.z=Math.sin(Oe*7)*.025,pe.position.y+=.035,Ge==="about"&&(pe.rotation.z=Math.sin(Oe*5)*.045),Ge==="published"?pe.rotation.x=Math.sin(Oe*8)*.07:pe.rotation.x=0,Ge==="engineering"&&(pe.position.y+=Math.max(0,Math.sin(Oe*5))*.1)}}),vt.update(performance.now(),W),Ke.position.x=vt.x,i.dataset.ladderState=vt.moving?"moving":"idle",i.dataset.ladderX=vt.x.toFixed(3),W&&(Me.rotation.z=Math.sin(Math.floor(_e*8)/8)*.025),oe.update(de,Pe.playing,W),Ct.visible=Pe.playing,Ct.position.y=2.02+(W?_e%2*.15:0),Ye){const pe=Math.min((performance.now()-Ye)/650,1);rt.position.y+=pe*.4,rt.rotation.z=pe*.28,pe===1&&!mt&&(mt=!0,n("contact"))}else W&&(xe==="contact"||xe==="butler"||xe==="receiver")&&(rt.rotation.z=Math.sin(_e*22)*.025);const Le=Pe.lighting==="daylight",Ie=Pe.lighting==="darkroom";At.color.set(Ie?"#ff3730":"#eee3c8"),Ze.color.set(Ie?"#ff241c":"#ffe0ad"),At.intensity=Le?2.8:Ie?.7:1.8,P.forEach((pe,Ge)=>pe.traverse(Oe=>{pe.userData.paper&&Oe instanceof di&&Oe.material instanceof Kc&&Ge!=="exit"&&Oe.material.color.set(Ie?"#e56e63":Le?"#ffffff":"#ffe8c5")})),Ze.intensity=Le?1.6:Ie?.3:1,c.setClearColor(Le?"#889381":Ie?"#292329":"#394238"),S.update(Ie,Le),c.render(u,d)}),{activate:Be,focus:de=>{Ft=de,de&&(jt=null,t(de))},look:de=>{Rt=cs.clamp(Rt+de,-.46,.46)},reset:()=>{Rt=0,Kt=.055},dispose:()=>{ht=!0,c.setAnimationLoop(null),at.disconnect(),c.domElement.removeEventListener("pointerdown",me),c.domElement.removeEventListener("pointermove",we),c.domElement.removeEventListener("pointerup",ke),c.domElement.removeEventListener("pointerleave",it),c.domElement.removeEventListener("pointercancel",He),p.forEach(de=>de.dispose()),g.forEach(de=>de.dispose()),M.forEach(de=>de.dispose()),c.dispose(),c.domElement.remove()}}}export{cS as createPaperRoom};
