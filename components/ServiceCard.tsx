type Props = { title:string; desc:string; items?:string[] }
export default function ServiceCard({ title, desc, items=[] }: Props){
  return (
    <div className="card h-full">
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="mt-2 text-sm muted">{desc}</p>
      {items.length > 0 && (
        <ul className="mt-4 space-y-1 text-sm list-disc list-inside">
          {items.map((i)=> <li key={i}>{i}</li>)}
        </ul>
      )}
    </div>
  )
}
