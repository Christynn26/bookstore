export default function FullSection({children, padding}){
    return(
        <div 
        className="fullsection bg-slate-700"
        style={{padding: padding}}
        >
            {children}
        </div>
    );
}