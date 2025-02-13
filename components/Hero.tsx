import Image from "next/image"

export default function Hero() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <Image
          src="/placeholder.svg?height=150&width=150"
          alt="Your Name"
          width={150}
          height={150}
          className="rounded-full mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold mb-4">Arjun Sharma</h1>
        <p className="text-xl mb-8">Software Development Portfolio</p>
        <a
          href="#contact"
          className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors"
        >
          Get in touch
        </a>
      </div>
    </section>
  )
}

