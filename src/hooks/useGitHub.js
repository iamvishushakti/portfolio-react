import { useEffect, useState } from "react";

export function useGitHub(username = "iamvishushakti") {
  const [data, setData] = useState({
    profile: null,
    repos: [],
    loading: true,
    error: false,
  });

  useEffect(() => {
    let alive = true;
    async function load() {
      try {
        const [userRes, repoRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(
            `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
          ),
        ]);
        if (!userRes.ok || !repoRes.ok)
          throw new Error("GitHub API unavailable");
        const [profile, repos] = await Promise.all([
          userRes.json(),
          repoRes.json(),
        ]);
        if (alive)
          setData({
            profile,
            repos: repos.filter((r) => !r.fork).slice(0, 4),
            loading: false,
            error: false,
          });
      } catch {
        if (alive)
          setData((current) => ({ ...current, loading: false, error: true }));
      }
    }
    load();
    return () => {
      alive = false;
    };
  }, [username]);

  return data;
}
