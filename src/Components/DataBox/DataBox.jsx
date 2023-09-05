
export default function DataBox({title , children }) {
    return (
        <div>
            <h4 className="mt-4 text-white border-primary border-bottom border-3" style={{width:'fit-content'}}>{title}</h4>
            <div className="py-3">
                {children}
            </div>
        </div>
    )
}
