export default function ExitSign({onExit,label,className='',autoFocus=false}:{onExit:()=>void;label:string;className?:string;autoFocus?:boolean}){
 return <button type="button" className={`gui-exit exit-sign ${className}`} aria-label={label} autoFocus={autoFocus} onClick={onExit}><span>EXIT</span><span aria-hidden="true">↗</span></button>;
}
