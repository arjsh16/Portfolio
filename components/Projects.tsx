import Image from "next/image"

const projects = [
  { id: 1, title: "Project 1", description: "Description of Project 1" },
  { id: 2, title: "Project 2", description: "Description of Project 2" },
  { id: 3, title: "Project 3", description: "Description of Project 3" },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={`/placeholder.svg?height=200&width=300&text=${project.title}`}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

