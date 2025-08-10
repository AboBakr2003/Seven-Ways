import MarkTwo from "../../public/tyre-mark-2.png"

export default function TyreMarkTwo({ position }: { position: string }) {
  return (
    <div className={`absolute z-5 ${position} w-full h-fit`}>
      <div className="flex">
      {Array(10).fill(null).map((_, i) => (
        <img key={i} loading="lazy" className="w-[30vw] object-cover" src={MarkTwo} alt="Tyre Mark Two" />
      ))}
      </div>
    </div>
  )
}