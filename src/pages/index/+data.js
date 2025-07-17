import fetch from 'node-fetch';

// Server-side cache for games data
const gamesCache = {
  data: null,
  version: null,
};

async function data() {
  console.time('data function execution time');

  const versionRes = await fetch('https://66001-dev.dingyi.io/api/game-space/frontend/game-space/version/get');
  const versionData = await versionRes.json();
  const frontendCdnGameListVersion = versionData.data.frontendCdnGameList;

  // Check if we have valid cached data with the same version
  if (gamesCache.version === frontendCdnGameListVersion) {
    console.log('Using cached games data, version:', frontendCdnGameListVersion);
    console.timeEnd('data function execution time');
    return {
      games: gamesCache.data,
    };
  }

  // Fetch new data if cache is invalid or version has changed
  console.log('Fetching new games data, version:', frontendCdnGameListVersion);
  const response = await fetch('https://cdn-dev.dingyi.io/66001/gameFullInfo/2/cn.json');
  const gamesResponse = await response.json();
  console.log('CDN version:', gamesResponse.version);

  const games = gamesResponse.data.slice(0, 100);

  // Update cache with new data
  gamesCache.data = games;
  gamesCache.version = frontendCdnGameListVersion;

  console.timeEnd('data function execution time');

  return {
    games,
  };
}

export { data };
