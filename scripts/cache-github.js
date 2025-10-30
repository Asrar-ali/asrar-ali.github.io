// Fetch public repos and cache subset for the site
import fs from "node:fs";
import https from "node:https";

const user = "Asrar-ali";
const url = `https://api.github.com/users/${user}/repos?per_page=100&sort=updated`;
const options = { headers: { "User-Agent": "md-ali-portfolio", "Accept": "application/vnd.github+json" } };

https.get(url, options, (res) => {
  let data = "";
  res.on("data", (c) => (data += c));
  res.on("end", () => {
    try {
      const repos = JSON.parse(data).map((r) => ({
        name: r.name,
        description: r.description,
        html_url: r.html_url,
        stars: r.stargazers_count,
        language: r.language,
      }));
      const standout = repos
        .filter((r) => r.description)
        .sort((a, b) => b.stars - a.stars)
        .slice(0, 9);
      fs.mkdirSync("public/cache", { recursive: true });
      fs.writeFileSync("public/cache/github-cache.json", JSON.stringify({ fetchedAt: new Date().toISOString(), repos: standout }, null, 2));
      console.log("Cached", standout.length, "repos");
    } catch (e) {
      console.error("Cache parse error", e);
    }
  });
}).on("error", (e) => console.error(e));
