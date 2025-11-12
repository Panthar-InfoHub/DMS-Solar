export default function Logo() {
  return (
    <a
      href="#home"
      className="flex items-center gap-2 group cursor-pointer transition-all duration-300 hover:opacity-90"
    >
      <img
        src="/website-images/logo.png"
        alt="DMS Solars Logo"
        className="h-18 w-auto"
      />
    </a>
  )
}
