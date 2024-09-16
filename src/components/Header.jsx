import logoImg from "../assets/Logo.png";
import "./Header.css";
const reactDescription = ['Fundamental', 'Crucial', 'Core'];


function getRandomInt(max){
  return Math.floor(Math.random() * (max+1));
}

export default function Header() {
    const description = reactDescription[getRandomInt(2)];
    return(
      <header>
          <img src={logoImg} alt="Ocean" />
          <div>
            {description} React concepts you will need for almost any app you are
            going to build!
          </div>
      </header>
    )
  }