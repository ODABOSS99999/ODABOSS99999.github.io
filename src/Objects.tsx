import { useId } from 'react';
export type ObjectKind = 'camera' | 'books' | 'frames' | 'paper' | 'rocket' | 'letter' | 'lamp' | 'record' | 'phone';
export function ObjectArt({ kind, playing = false }: { kind: ObjectKind; playing?: boolean }) {
  const id = useId().replace(/:/g, '');
  const fill = (name: string) => `url(#${id}-${name})`;
  return <svg className={`object-art art-${kind}`} viewBox="0 0 320 240" aria-hidden="true">
    <defs>
      <linearGradient id={`${id}-metal`} x2=".25" y2="1"><stop stopColor="#e5d4a5"/><stop offset=".25" stopColor="#a58a55"/><stop offset=".5" stopColor="#ddc58b"/><stop offset="1" stopColor="#6a5430"/></linearGradient>
      <linearGradient id={`${id}-black`} x2=".5" y2="1"><stop stopColor="#575955"/><stop offset=".15" stopColor="#282d2a"/><stop offset="1" stopColor="#111513"/></linearGradient>
      <linearGradient id={`${id}-wood`} x2="0" y2="1"><stop stopColor="#92684c"/><stop offset=".16" stopColor="#73533b"/><stop offset="1" stopColor="#3f2c21"/></linearGradient>
      <linearGradient id={`${id}-paper`} x2=".8" y2="1"><stop stopColor="#f1e7cf"/><stop offset="1" stopColor="#b9aa8c"/></linearGradient>
      <radialGradient id={`${id}-lens`} cx=".35" cy=".3"><stop stopColor="#76978e"/><stop offset=".28" stopColor="#253f3e"/><stop offset=".55" stopColor="#121f22"/><stop offset=".8" stopColor="#29383c"/><stop offset="1" stopColor="#080d0f"/></radialGradient>
      <pattern id={`${id}-leather`} width="4" height="4" patternUnits="userSpaceOnUse"><rect width="4" height="4" fill="#242724"/><path d="M0 1h2m1 2h1" stroke="#383b34" strokeWidth=".6"/></pattern>
    </defs>
    {kind === 'camera' && <g>
      <path d="M60 131C1 157 20 228 81 215M258 136c60 29 43 88-4 77" fill="none" stroke="#3a2920" strokeWidth="8"/><path d="M60 131C1 157 20 228 81 215" fill="none" stroke="#8c6744" strokeWidth="1"/>
      <ellipse cx="161" cy="221" rx="114" ry="9" fill="#080a08" opacity=".45"/>
      <rect x="47" y="103" width="225" height="113" rx="11" fill={fill('black')} stroke="#72766a" strokeWidth="1"/>
      <rect x="51" y="124" width="217" height="71" rx="3" fill={fill('leather')}/>
      <path d="M115 105l14-25h49l17 25" fill={fill('black')} stroke="#74766a"/><path d="M132 85h43l9 16h-62z" fill="#51554c"/>
      <rect x="61" y="92" width="35" height="11" rx="3" fill={fill('metal')}/><rect x="227" y="94" width="24" height="9" rx="3" fill="#55594f"/>
      <path d="M55 110h44m114 0h50" stroke="#aaa990" strokeWidth="2"/><rect x="67" y="133" width="27" height="9" rx="2" fill="#c4b997"/>
      <circle cx="165" cy="162" r="66" fill="#111513" stroke="#555950" strokeWidth="2"/><circle cx="165" cy="162" r="59" fill={fill('black')} stroke="#93917c"/>
      {Array.from({length:40},(_,i)=><path key={i} d="M165 102v5" stroke="#898977" strokeWidth="1" transform={`rotate(${i*9} 165 162)`}/>)}
      <circle cx="165" cy="162" r="48" fill="#0c100f" stroke="#70664f" strokeWidth="3"/><circle cx="165" cy="162" r="41" fill={fill('lens')} stroke="#334542" strokeWidth="2"/>
      <circle cx="165" cy="162" r="24" fill="#080f12" stroke="#485b55"/><path d="M141 141q13-12 32-7" stroke="#abc5af" strokeWidth="3" opacity=".28" fill="none"/><ellipse cx="181" cy="181" rx="12" ry="4" fill="#caa0b7" opacity=".12" transform="rotate(-40 181 181)"/>
      <circle cx="245" cy="116" r="4" fill="#a09b80"/>
    </g>}
    {kind === 'books' && <g>
      <ellipse cx="153" cy="223" rx="132" ry="8" fill="#080a08" opacity=".35"/>
      <g transform="rotate(-8 94 217)"><rect x="37" y="48" width="48" height="170" rx="3" fill="#625b40"/><path d="M42 49v168m38-166v166" stroke="#aaa077" opacity=".5"/><path d="M43 68h35m-35 4h35m-35 123h35m-35 4h35" stroke="#c8af73"/></g>
      <rect x="91" y="32" width="48" height="187" rx="3" fill="#623c3a"/><path d="M96 34v181m37-181v181M98 52h33m-33 142h33" stroke="#ad8d68"/>
      <rect x="143" y="58" width="31" height="161" rx="2" fill="#b0a48a"/><path d="M148 62v152m20-152v152" stroke="#d8c9a7"/>
      <g transform="rotate(8 215 217)"><rect x="180" y="88" width="83" height="132" rx="2" fill={fill('wood')}/><rect x="186" y="94" width="71" height="120" fill={fill('metal')}/><rect x="189" y="97" width="65" height="114" fill={fill('paper')}/><rect x="198" y="109" width="47" height="78" fill="#a49980"/><path d="M207 148h29m-14-14v28" stroke="#c7bb9f" opacity=".6"/></g>
    </g>}
    {kind === 'frames' && <g>
      <ellipse cx="168" cy="222" rx="135" ry="7" fill="#080a08" opacity=".3"/>
      <g transform="rotate(-4 111 218)"><rect x="23" y="34" width="154" height="183" fill="#262a23" stroke="#8f7148" strokeWidth="4"/><rect x="31" y="42" width="138" height="167" fill={fill('paper')}/><rect x="48" y="60" width="104" height="120" fill="#6b6e5d"/><path d="M48 180L152 60" stroke="#c9c7a3" opacity=".12" strokeWidth="30"/><path d="M48 60h104v120H48z" fill="none" stroke="#444b40"/></g>
      <g transform="rotate(4 222 218)"><rect x="157" y="87" width="135" height="132" fill={fill('wood')} stroke="#b7a16f" strokeWidth="2"/><rect x="165" y="95" width="119" height="116" fill={fill('paper')}/><rect x="178" y="108" width="93" height="84" fill="#7a6558"/><path d="M178 192l93-84" stroke="#ead9b1" strokeWidth="26" opacity=".08"/></g>
    </g>}
    {kind === 'paper' && <g transform="rotate(-7 160 180)">
      <path d="M28 108l244 18 18 87-246 10z" fill="#090b08" opacity=".3"/><path d="M30 102l239 14 18 90-244 8z" fill="#9c9075"/><path d="M30 98l238 15 19 88-244 9z" fill={fill('paper')} stroke="#a99e81"/><path d="M44 198l240-8m-240 12l241-8" stroke="#b2a78d"/><path d="M39 117l231 13M43 145l233 11" stroke="#4a4b3e" strokeWidth="1"/>
      
      <rect x="52" y="159" width="64" height="33" fill="#8b8c74" transform="rotate(3 52 159)"/>
      {Array.from({length:7},(_,i)=><path key={i} d={`M126 ${160+i*5}l140 8`} stroke="#797b65" strokeWidth="1" opacity=".65"/>)}<path d="M156 108l10 96" stroke="#998c6f" opacity=".4"/>
    </g>}
    {kind === 'rocket' && <g>
      <ellipse cx="157" cy="224" rx="91" ry="7" fill="#090b08" opacity=".4"/>
      <path d="M103 224h112l-17-9h-80z" fill={fill('wood')}/><path d="M157 216V125" stroke="#ac955e" strokeWidth="4"/><path d="M156 213V128" stroke="#e4cd94" strokeWidth="1"/>
      <g transform="rotate(18 155 123)"><path d="M135 169l-23 24 3-56 20-24m40 56l23 24-3-56-20-24" fill="#814e40" stroke="#b78360"/><path d="M135 77q20-27 40 0v92h-40z" fill={fill('paper')} stroke="#8f8e78"/><path d="M135 77q4-36 20-59 16 23 20 59z" fill={fill('metal')}/><path d="M135 140h40v14h-40" fill="#485447"/><circle cx="155" cy="101" r="10" fill={fill('black')} stroke={fill('metal')} strokeWidth="3"/><circle cx="155" cy="101" r="5" fill="#506b6b"/><path d="M138 171h34l-6 10h-21z" fill={fill('black')}/><path d="M142 80v51" stroke="#fff3d9" opacity=".6"/></g>
      <rect x="202" y="181" width="72" height="36" rx="3" fill="#4a5145" stroke="#86907a"/><rect x="210" y="188" width="28" height="19" fill="#24382f" stroke="#b0a377"/><path d="M213 198h6l3-5 4 8 4-5h5" stroke="#b8bb82" fill="none"/><circle cx="252" cy="196" r="6" fill={fill('metal')}/><circle cx="265" cy="205" r="2" fill="#b8b28b"/>
    </g>}
    {kind === 'letter' && <g transform="rotate(-5 150 180)">
      <ellipse cx="158" cy="220" rx="128" ry="7" fill="#080a08" opacity=".3"/>
      <path d="M51 89l204 12-3 112-204-13z" fill="#89806b"/><path d="M47 82l204 13-2 111-204-13z" fill={fill('paper')}/><path d="M46 85l98 78 106-66m-204 95l76-48m127 60l-74-52" fill="none" stroke="#a99a7a" strokeWidth="1.4"/>
      <circle cx="147" cy="159" r="17" fill="#85483c" stroke="#633c30" strokeWidth="2"/><circle cx="147" cy="159" r="12" fill="none" stroke="#b57a58"/>
      <path d="M232 203l31-112 6 2-31 112z" fill={fill('metal')}/><path d="M232 203l-1 11 7-9" fill="#1c2725"/>
    </g>}
    {kind === 'phone' && <g className="phone-drawing" stroke="#30352f" strokeWidth="3" strokeLinejoin="round">
      <ellipse cx="163" cy="223" rx="112" ry="7" fill="#19211d" opacity=".2" stroke="none"/>
      <path d="M86 143Q90 129 111 128h96q20 0 26 17l27 64q-89 23-191 0z" fill="#92adb0"/>
      <path d="M73 204q96 17 181-1l6 11q-91 22-191 0z" fill="#607f84"/>
      <path d="M105 132v-22m102 22v-22" fill="none" strokeWidth="8"/>
      <path className="phone-cord" d="M231 105q48 5 37 36c-20 13 22 7 5 22s19 9 1 22 18 8 0 20q-6 9-25 7" fill="none" stroke="#d9c5a4" strokeWidth="4"/>
      <g className="phone-dial"><ellipse cx="162" cy="171" rx="45" ry="34" fill="#e0cfaa"/><ellipse cx="162" cy="171" rx="22" ry="16" fill="#8ca2a0"/>{Array.from({length:10},(_,i)=><ellipse key={i} cx={162+33*Math.cos(i*Math.PI/5)} cy={171+25*Math.sin(i*Math.PI/5)} rx="5" ry="4" fill="#3d514e" stroke="none"/>)}</g>
      <g className="phone-receiver"><path d="M72 108Q66 67 103 62q58-21 116 0 37 5 29 46l-37 6-10-34q-40-10-78 0l-11 34z" fill="#a9c5c5"/><path d="M77 101l30 5m109 0 27-5" fill="none" stroke="#647f80" strokeWidth="6"/><path d="M104 68q59-19 111 0" fill="none" stroke="#dfebe0" opacity=".6"/></g>
      <g className="phone-ring" fill="none" stroke="#e8cc8b" strokeWidth="4"><path d="M55 68l-15-7m20-7-9-15m208 29 16-7m-23-8 10-15"/></g>
    </g>}
    {kind === 'lamp' && <g>
      <ellipse cx="178" cy="224" rx="75" ry="8" fill="#0a0c08" opacity=".4"/><ellipse cx="169" cy="216" rx="57" ry="10" fill={fill('metal')}/><path d="M127 213q3-14 42-14 39 0 43 14" fill={fill('black')}/><path d="M169 202V113l-53-51" fill="none" stroke="#554a2f" strokeWidth="9"/><path d="M167 199V114l-52-51" fill="none" stroke={fill('metal')} strokeWidth="5"/>
      <circle cx="168" cy="116" r="7" fill={fill('metal')}/><path d="M100 51q32-13 47 13l29 44q-41 8-73 32l-21-47q-10-27 18-42" fill="#374d40" stroke="#79806a"/>
      <path d="M84 90q24-29 62-26" stroke="#a9b094" opacity=".4" fill="none" strokeWidth="2"/><ellipse cx="139" cy="123" rx="43" ry="10" transform="rotate(-24 139 123)" fill="#d1c28e" stroke="#848067"/><ellipse className="lamp-bulb" cx="139" cy="123" rx="26" ry="6" transform="rotate(-24 139 123)" fill="#fff0b1"/><path d="M163 138v31" stroke="#d7bc7c"/><circle cx="163" cy="171" r="3" fill={fill('metal')}/>
    </g>}
    {kind === 'record' && <g>
      <ellipse cx="161" cy="223" rx="125" ry="8" fill="#080a08" opacity=".4"/><path d="M32 126l221-10 39 64-234 16z" fill="#716144" stroke="#b39966"/><path d="M58 196l234-16v32L58 225 32 158v-32z" fill={fill('wood')}/><path d="M58 196v29m0-21l234-15" stroke="#39281e"/>
      <g transform="translate(145 157) scale(1 .39)"><g className={playing ? 'record-disc playing' : 'record-disc'}><circle r="82" fill="#161b17" stroke="#787560"/>{[72,64,56,48].map(r=><circle key={r} r={r} fill="none" stroke="#414738" strokeWidth=".8"/>)}<circle r="26" fill="#875345"/><path d="M-17-5l34 10" stroke="#c5a57d" strokeWidth="2"/><path d="M-60-35q14-16 39-26" stroke="#a3a28a" strokeWidth="8" opacity=".08"/><circle r="3" fill="#d3c69e"/></g></g>
      <path d="M243 135l-19 34-29 5" fill="none" stroke="#1d211a" strokeWidth="7"/><path d="M243 131l-19 34-29 5" fill="none" stroke={fill('metal')} strokeWidth="4"/><ellipse cx="243" cy="132" rx="9" ry="4" fill={fill('black')}/><rect x="187" y="167" width="19" height="8" rx="1" fill="#b4b199"/>
      <rect x="74" y="205" width="35" height="8" rx="1" fill={fill('metal')}/><circle cx="261" cy="199" r="4" fill={fill('metal')}/><circle cx="277" cy="198" r="2" fill={playing ? '#bfcc8d' : '#433b26'}/>
    </g>}
  </svg>;
}
