import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
// import { useAuth } from "../../context/AuthContext";
// import bubbles from '../../../public/assets/videos/bubbles.mp4'

export default function Layout(props) {

  // const backgroundStyle = {
  //   background: `url(${bubbles})`,
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  //   minHeight: '100vh'
  // };

  return (
    <div>
      <NavBar />
      {props.children}
      <Footer />
    </div>
  );
}