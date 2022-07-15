// create your App component here
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => setData(data.message));
  }, []);

  if (!data.length) return <p>Loading...</p>;

  return (
    <div>
      <img src={data} alt="A Random Dog" />
    </div>
  );
}

export default App;