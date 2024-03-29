export interface TempData {
  gameMode: string;
  championName: string;
  kills: number;
  deaths: number;
  assists: number;
  win: string;
}

export interface Champs {
  name: string;
}

const topLane = [
  `Aatrox`,
  `Akali`,
  `Akshan`,
  `Camille`,
  `Cho'gath`,
  `Darius`,
  `Dr. Mundo`,
  `Fiora`,
  `Gangplank`,
  `Garen`,
  `Gnar`,
  `Gwen`,
  `Illaoi`,
  `Irelia`,
  `Jax`,
  `Jayce`,
  `Kayle`,
  `Kennen`,
  `Kled`,
  `K'sante`,
  `Malphite`,
  `Maokai`,
  `Wukong`,
  `Mordekaiser`,
  `Nasus`,
  `Olaf`,
  `Ornn`,
  `Pantheon`,
  `Poppy`,
  `Quinn`,
  `Renekton`,
  `Rengar`,
  `Riven`,
  `Rumble`,
  `Sett`,
  `Shen`,
  `Singed`,
  `Sion`,
  `Swain`,
  `Sylas`,
  `Tham Kench`,
  `Trundle`,
  `Trndamere`,
  `Urgot`,
  `Vladimir`,
  `Volibear`,
  `Warwick`,
  `Yasuo`,
  `Yone`,
  `Yorick`,
];
const jungle = [
  `Amumu`,
  `Bel'veth`,
  `Brand`,
  `Briar`,
  `Diana`,
  `Evelynn`,
  `Elise`,
  `Fiddlesticks`,
  `Gragas`,
  `Graves`,
  `Gwen`,
  `Hecarim`,
  `Ivern`,
  `Jarvan IV`,
  `Jax`,
  `Karthus`,
  `Kayn`,
  `Kha'zix`,
  `Kindred`,
  `Lee Sin`,
  `Lillia`,
  `Master Yi`,
  `Maokai`,
  `Wukong`,
  `Mordekaiser`,
  `Nidalee`,
  `Nocturne`,
  `Nunu & Willump`,
  `Olaf`,
  `Pantheon`,
  `Poppy`,
  `Rek'sai`,
  `Rell`,
  `Rengar`,
  `Sejuani`,
  `Shaco`,
  `Shen`,
  `Shyvana`,
  `Skarner`,
  `Sylas`,
  `Taliyah`,
  `Talon`,
  `Trundle`,
  `Twitch`,
  `Udyr`,
  `Vi`,
  `Viego`,
  `Volibear`,
  `Warwick`,
  `Xin Zhao`,
  `Zac`,
  `Zed`,
];
const midLane = [
  `Ahri`,
  `Akali`,
  `Akshan`,
  `Anivia`,
  `Annie`,
  `Aurelion Sol`,
  `Azir`,
  `Brand`,
  `Cassiopeia`,
  `Corki`,
  `Diana`,
  `Ekko`,
  `Fizz`,
  `Galio`,
  `Gangplank`,
  `Heimerdinger`,
  `Irelia`,
  `Jayce`,
  `Kassadin`,
  `Katarina`,
  `Kennen`,
  `Leblanc`,
  `Lissandra`,
  `Lux`,
  `Malzahar`,
  `Naafiri`,
  `Neeko`,
  `Orianna`,
  `Qiyana`,
  `Ryze`,
  `Sylas`,
  `Syndra`,
  `Talon`,
  `Twisted Fate`,
  `Varus`,
  `Veigar`,
  `Vel'Koz`,
  `Vex`,
  `Viktor`,
  `Vladimir`,
  `Xerath`,
  `Yasuo`,
  `Yone`,
  `Zed`,
  `Zilean`,
  `Zoe`,
  `Ziggs`,
];
const adc = [
  `Aphelios`,
  `Ashe`,
  `Caitlyn`,
  `Draven`,
  `Ezreal`,
  `Jhin`,
  `Jinx`,
  `Kaisa`,
  `Kalista`,
  `Kog'Maw`,
  `Lucian`,
  `Miss Fortune`,
  `Nilah`,
  `Samira`,
  `Senna`,
  `Seraphine`,
  `Sivir`,
  `Smolder`,
  `Twitch`,
  `Varus`,
  `Vayne`,
  `Xayah`,
  `Zeri`,
  `Yasuo`,
];
const support = [
  `Alistar`,
  `Amumu`,
  `Annie`,
  `Bard`,
  `Blitzcrank`,
  `Brand`,
  `Braum`,
  `Janna`,
  `Karma`,
  `Leona`,
  `Lulu`,
  `Lux`,
  `Milio`,
  `Morgana`,
  `Nami`,
  `Nautilus`,
  `Pantheon`,
  `Poppy`,
  `Pyke`,
  `Rakan`,
  `Rell`,
  `Renata Glasc`,
  `Seraphine`,
  `Sett`,
  `Shen`,
  `Sona`,
  `Soraka`,
  `Swain`,
  `Tahm Kench`,
  `Taric`,
  `Thresh`,
  `Vel'Koz`,
  `Xerath`,
  `Yuumi`,
  `Zyra`,
];

export { topLane, jungle, midLane, adc, support };
