import "./App.css";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import AddProduct from "./product/AddProduct";

function App() {
  return (
    <div>
      <NavBar />
      <div className="flex">
        <SideBar />
        <AddProduct />
      </div>
    </div>
  );
}

export default App;
