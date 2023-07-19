import character from '../../assets/png/card-char.png';
import ghost from '../../assets/png/card-ghost.png';
import defaultAvatar from '../../assets/png/default-avatar.png';
import profile1 from '../../assets/png/profile1.png';
import profile2 from '../../assets/png/profile2.png';
import profile3 from '../../assets/png/profile3.png';
import profile4 from '../../assets/png/profile4.png';
import profile5 from '../../assets/png/profile5.png';
import profile6 from '../../assets/png/profile6.png';
import profile7 from '../../assets/png/profile7.png';
import profile8 from '../../assets/png/profile8.png';

const profile = [
  profile1,
  profile2,
  profile3,
  profile4,
  profile5,
  profile6,
  profile7,
  profile8,
];

const pngs = {
  character,
  ghost,
  profile,
  defaultAvatar,
};

export type PngKeyTypes = keyof typeof pngs;
export default pngs;
