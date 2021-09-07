// Base URL
const base_url = "https://api.rawg.io/api/";

//Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

//Getting the date
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Current Day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const CurrentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${CurrentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${CurrentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${CurrentDay}`;

//Popular Games
const popular_games = `games?key=${process.env.REACT_APP_RAWG_API}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${process.env.REACT_APP_RAWG_API}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?key=${process.env.REACT_APP_RAWG_API}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames};`;
//Game Details
export const gameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}?key=${process.env.REACT_APP_RAWG_API}`;
//Screenshots
export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?key=${process.env.REACT_APP_RAWG_API}`;
//Searched game
export const searchedGameURL = (game_name) =>
  `${base_url}games?search=${game_name}&page_size=9&key=${process.env.REACT_APP_RAWG_API}`;
