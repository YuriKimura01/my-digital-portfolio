import { getProjects } from "@/lib/api";

export default async function ProjectsPage() {
  const { docs: projects } = await getProjects();

  return (
    <div className="grid gap-4">
      {projects.map((project: any) => (
        <div key={project.id} className="border p-4 rounded">
          <h2 className="text-xl font-bold">{project.title}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}
