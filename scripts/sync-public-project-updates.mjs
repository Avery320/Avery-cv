import { readFile, writeFile } from "node:fs/promises";

const updatesFile = new URL("../src/data/project-updates.json", import.meta.url);
const sourcesFile = new URL("../src/data/public-project-sources.json", import.meta.url);
const publicProjects = JSON.parse(await readFile(sourcesFile, "utf8"));

const getLatestCommitDate = async ({ repository, branch }) => {
  const endpoint = new URL(`https://api.github.com/repos/${repository}/commits`);
  endpoint.searchParams.set("sha", branch);
  endpoint.searchParams.set("per_page", "1");

  const response = await fetch(endpoint, {
    headers: {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "User-Agent": "Avery-cv-project-updates",
      ...(process.env.GH_TOKEN && { Authorization: `Bearer ${process.env.GH_TOKEN}` }),
    },
  });

  if (!response.ok) {
    throw new Error(`Unable to read ${repository}: GitHub API returned ${response.status}`);
  }

  const [latestCommit] = await response.json();
  const updatedAt = latestCommit?.commit?.committer?.date;

  if (!updatedAt) {
    throw new Error(`Unable to find the latest commit date for ${repository}`);
  }

  return updatedAt;
};

const currentUpdates = JSON.parse(await readFile(updatesFile, "utf8"));
const nextUpdates = {};
let successfulRequests = 0;

for (const project of publicProjects) {
  try {
    nextUpdates[project.id] = await getLatestCommitDate(project);
    successfulRequests += 1;
    console.log(`Read ${project.repository}.`);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.warn(`::warning title=Unable to sync ${project.id}::${message}`);

    if (currentUpdates[project.id]) {
      nextUpdates[project.id] = currentUpdates[project.id];
    }
  }
}

if (successfulRequests === 0 && publicProjects.length > 0) {
  throw new Error("Unable to read any configured public project.");
}

if (JSON.stringify(currentUpdates) === JSON.stringify(nextUpdates)) {
  console.log("Public project timestamps are already current.");
  process.exit(0);
}

await writeFile(updatesFile, `${JSON.stringify(nextUpdates, null, 2)}\n`);
console.log("Updated public project timestamps.");
