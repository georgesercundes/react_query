import axios from "axios";
import { useQuery, useMutation } from "react-query";

function App() {
  const { isLoading, error, data } = useQuery("cats", () =>
    axios("https://api.thecatapi.com/v1/images/search")
  );
  const [createUser] = useMutation((user) =>
    axios.post("apiurl.com/users", { user })
  );

  if (error) return <h1>Error: {error.message}, try again</h1>;
  if (isLoading) return <h1>Loading...</h1>;
  return (
    <div className="App">
      <img src={data.data[0].url} alt="cat.jpeg"></img>
    </div>
  );
}

export default App;
