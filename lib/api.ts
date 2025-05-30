export async function getProjects() {
  console.log("Fetching on the server...");
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_URL}/api/projects?depth=1`
  );

  if (!res.ok) throw new Error("Failed to fetch projects");

  return res.json();
}

export async function getAbout() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_URL}/api/globals/about`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch about content");
  }

  return res.json();
}
