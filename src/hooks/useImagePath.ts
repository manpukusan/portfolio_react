import cold001 from '../images/cold/cold001.jpg';
import cold002 from '../images/cold/cold002.jpg';
import cold003 from '../images/cold/cold003.jpg';
import anemia001 from '../images/anemia/anemia001.jpg';
import anemia002 from '../images/anemia/anemia002.jpg';
import anemia003 from '../images/anemia/anemia003.jpg';
import eyestrain001 from '../images/eyestrain/eyestrain001.jpg';
import eyestrain002 from '../images/eyestrain/eyestrain002.jpg';
import eyestrain003 from '../images/eyestrain/eyestrain003.jpg';
import headache001 from '../images/headache/headache001.jpg';
import headache002 from '../images/headache/headache002.jpg';
import headache003 from '../images/headache/headache003.jpg';

export const useImagePath = (imageName: string) => {
  let imagePath;
  switch (imageName.slice(0, 4)) {
    case 'cold':
      switch (imageName.slice(-3)) {
        case '001':
          imagePath = cold001;
          break;
        case '002':
          imagePath = cold002;
          break;
        case '003':
          imagePath = cold003;
          break;
        default:
          break;
      }
      break;
    case 'anem':
      switch (imageName.slice(-3)) {
        case '001':
          imagePath = anemia001;
          break;
        case '002':
          imagePath = anemia002;
          break;
        case '003':
          imagePath = anemia003;
          break;
        default:
          break;
      }
      break;
    case 'eyes':
      switch (imageName.slice(-3)) {
        case '001':
          imagePath = eyestrain001;
          break;
        case '002':
          imagePath = eyestrain002;
          break;
        case '003':
          imagePath = eyestrain003;
          break;
        default:
          break;
      }
      break;
    case 'head':
      switch (imageName.slice(-3)) {
        case '001':
          imagePath = headache001;
          break;
        case '002':
          imagePath = headache002;
          break;
        case '003':
          imagePath = headache003;
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return { imagePath };
};
