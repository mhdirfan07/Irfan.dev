import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../../keystatic.config';
import ClientHome from './ClientHome';

// Server Component (tanpa "use client")
export default async function Home() {
  const reader = createReader(process.cwd(), keystaticConfig);

  // Fetch all singletons
  const heroData = await reader.singletons.homepage.read();
  const aboutData = await reader.singletons.about.read();
  const validationData = await reader.singletons.validationLogs.read();
  const ctaData = await reader.singletons.ctaBlock.read();
  const footerData = await reader.singletons.footer.read();

  // Fetch collections
  const projectsDataRaw = await reader.collections.projects.all();
  // Karena content berbentuk fungsi asinkron (Document field), kita ekstrak atau ambil data utamanya saja, 
  // Untuk komponen ProjectsSection biasanya yang dibutuhkan: title, description, link, repoUrl, techStack dll.
  const projectsData = projectsDataRaw.map((p) => ({
    slug: p.slug,
    title: p.entry.title,
    description: p.entry.description,
    coverImage: p.entry.coverImage || null,
    link: p.entry.link,
    repoUrl: p.entry.repoUrl,
    category: p.entry.category,
    techStack: p.entry.techStack,
    // Jika butuh content Document: content: p.entry.content() - tapi ini Promise, jadi kalau tidak dipakai di-skip dulu.
  }));

  const experienceDataRaw = await reader.collections.experience.all();
  const experienceData = experienceDataRaw.map(e => e.entry);

  const allData = {
    heroData: heroData || null,
    aboutData: aboutData || null,
    projectsData: projectsData || [],
    experienceData: experienceData || [],
    validationData: validationData || null,
    ctaData: ctaData || null,
    footerData: footerData || null,
  };

  return <ClientHome data={allData} />;
}
