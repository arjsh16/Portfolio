export default function Contact() {
  return (
    <section id="contact" className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <input type="text" id="name" name="name" className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input type="email" id="email" name="email" className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">
              Message
            </label>
            <textarea id="message" name="message" rows={4} className="w-full p-2 border rounded" required></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

