import PageContainer from "./components/PageContainer";

function App() {
  console.log(import.meta.env.MODE);

  return (
    <div className="App">
      <PageContainer />
    </div>
  );
}

export default App;
