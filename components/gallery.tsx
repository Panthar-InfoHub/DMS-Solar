"use client"

export default function Gallery() {
  const galleryImages = [
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20250916_123155296-fg1fwS5LGuHIF6D9QaM2JTTgqsb4OB.jpg",
      caption: "Installed & Commissioned by DMS Solars EPC Team",
      title: "Rooftop Installation",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20250916_124152751-C2wKe6iFpRXrcRO511rltCt0oPg1Xn.jpg",
      caption: "Installed & Commissioned by DMS Solars EPC Team",
      title: "Panel Installation",
    },
    {
      image:
        "/website-images/gallery4.jpg",
      caption: "Installed & Commissioned by DMS Solars EPC Team",
      title: "Large Scale Installation",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20250916_124410843-WtN55EEGDnFncgKE5sM2LJsynHt8Cm.jpg",
      caption: "Installed & Commissioned by DMS Solars EPC Team",
      title: "Electrical Connections",
    },
  ]

  return (
    <section id="gallery" className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Work</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            EPC Projects Gallery - See Our Installations in Action
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {galleryImages.map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up card-hover"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/90 text-sm">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
