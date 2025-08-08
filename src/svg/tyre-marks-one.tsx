import MarkOne from "../assets/tyre-mark-1.png"

export default function TyreMarkOne({ position }: { position: string }) {
  return (
    <div className={`absolute z-5 ${position} w-full h-fit`}>
      <div className="flex">
      {Array(10).fill(null).map((_, i) => (
        <img key={i} className="w-[30vw] object-cover" src={MarkOne} alt="Tyre Mark One" />
      ))}
      </div>
    </div>
  )
}