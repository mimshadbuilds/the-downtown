export default function SectionIndex({title, className = ''}) {
    return (
        <div className="border-b border-ylo pb-2">
            <h2 className={`text-2xl font-semibold mb-4 ${className}`}>
            {title}
            </h2>
        </div>
    )
}