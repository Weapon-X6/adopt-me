import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Mich!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese"></Pet>
      <Pet name="Pepper" animal="Bird" breed="Cockatiel"></Pet>
      <Pet name="Sudo" animal="Dog" breed="Wheaten Terrier"></Pet>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
