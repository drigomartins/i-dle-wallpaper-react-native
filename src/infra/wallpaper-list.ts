import { WallpaperItem } from '@/domain';
import { songYuqi } from './song-yuqi';
import { choMiYeon } from './cho-mi-yeon';
import { jeonSoYeon } from './jeon-So-yeon';
import { minnie } from './minnie';
import { seoSoojin } from './seo-soo-jin';
import { yehShuHua } from './yeh-shu-hua';
import { gIDLE } from './i-dle';

export const wallpaperList: WallpaperItem[] = [
  ...songYuqi,
  ...choMiYeon,
  ...jeonSoYeon,
  ...minnie,
  ...seoSoojin,
  ...yehShuHua,
  ...gIDLE,
];
