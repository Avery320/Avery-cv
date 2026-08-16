import { readFile, writeFile } from "node:fs/promises";

const updatesFile = new URL("../src/data/project-updates.json", import.meta.url);
const publicProjects = [
  { id: "go2-humble", repository: "Avery320/go2_humble", branch: "main" },
  { id: "go2-viz", repository: "Avery320/go2_viz", branch: "main" },
];

const getLatestCommitDate = async ({ id, repository, branch }) => {
  const endpoint = new URL(`https://api.github.com/repos/${repository}/commits`);
  endpoint.searchParams.set("sha", branch);
  endpoint.searchParams.set("per_page", "1");

  const response = await fetch(endpoint, {
    headers: {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "User-Agent": "Avery-cv-project-updates",
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

  return [id, updatedAt];
};

const currentUpdates = JSON.parse(await readFile(updatesFile, "utf8"));
const latestUpdates = Object.fromEntries(await Promise.all(publicProjects.map(getLatestCommitDate)));
const nextUpdates = { ...currentUpdates, ...latestUpdates };

if (JSON.stringify(currentUpdates) === JSON.stringify(nextUpdates)) {
  console.log("Public project timestamps are already current.");
  process.exit(0);
}

await writeFile(updatesFile, `${JSON.stringify(nextUpdates, null, 2)}\n`);
console.log("Updated public project timestamps.");
