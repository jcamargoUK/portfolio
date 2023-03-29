import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
// import { useAuth } from "../../context/AuthContext";
import dynamic from 'next/dynamic'



export default function Layout(props) {

  return (
    <div>
      <NavBar />
      {props.children}
      <Footer />
    </div>
  );
}