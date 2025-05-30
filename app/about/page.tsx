import { getAbout } from "@/lib/api";
import Image from "next/image";

export default async function AboutPage() {
  const about = await getAbout();

  return (
    <div className="space-y-8 p-6 max-w-4xl mx-auto">
      {/* Hero Section */}
      <section>
        <h1 className="text-4xl font-bold">{about.headline}</h1>
        <p className="text-lg mt-2">{about.subheadline}</p>
      </section>

      {/* Profile Section */}
      {about.profile && (
        <section className="flex flex-col md:flex-row items-start gap-6">
          {about.profile.image && (
            <div className="relative w-40 h-40 rounded overflow-hidden">
              <Image
                src={`${process.env.NEXT_PUBLIC_CMS_URL}/media/${about.profile.image}`}
                alt={about.profile.name}
                fill
                className="object-cover rounded"
              />
            </div>
          )}
          <div>
            <h2 className="text-2xl font-semibold">{about.profile.name}</h2>
            <p className="text-sm text-gray-500">{about.profile.title}</p>
            <p className="mt-2">{about.profile.description}</p>
          </div>
        </section>
      )}

      {/* Certifications */}
      {about.certifications?.length > 0 && (
        <section>
          <h3 className="text-xl font-bold mb-2">Certifications & Education</h3>
          <ul className="list-disc pl-5 space-y-1">
            {about.certifications.map((cert: any, idx: any) => (
              <li key={idx}>
                <strong>{cert.title}</strong>
                {cert.description && <> – {cert.description}</>}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Skills */}
      {about.skills?.length > 0 && (
        <section>
          <h3 className="text-xl font-bold mb-2">Skills</h3>
          {about.skills.map((skillGroup: any, idx: any) => (
            <div key={idx} className="mb-4">
              <strong>{skillGroup.category}:</strong>
              <ul className="list-disc pl-5">
                {skillGroup.items.map((item: any, i: any) => (
                  <li key={i}>{item.name}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}

      {/* Experience */}
      {about.experience?.length > 0 && (
        <section>
          <h3 className="text-xl font-bold mb-2">Professional Experience</h3>
          <ul className="space-y-4">
            {about.experience.map((exp: any, idx: any) => (
              <li key={idx}>
                <p className="font-semibold">{exp.title}</p>
                <p className="text-sm text-gray-600">
                  {exp.company} ・ {exp.period}
                </p>
                <p>{exp.description}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Navigation Items */}
      {about.navItems?.length > 0 && (
        <section>
          <h3 className="text-xl font-bold mb-2">Links</h3>
          <ul className="list-disc pl-5">
            {about.navItems.map((nav: any, idx: any) => (
              <li key={idx}>
                <a
                  href={nav.url}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {nav.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
