import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";
import Pagination from "./components/Pagination";

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const Initialurl = "https://rickandmortyapi.com/api/character";

  const FetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  const onPrevious = () => {
    FetchCharacters(info.prev);
  };

  const onNext = () => {
    FetchCharacters(info.next);
  };

  useEffect(() => {
    FetchCharacters(Initialurl);
  }, []);

  return (
    <>
      <Navbar brand="Rick and Morty App" />

      <div className="container mt-5">
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
        <Characters characters={characters} />
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </div>
    </>
  );
}

export default App;
