import Layout from "./components/Layout/layout"; //import the component as it appears o your file structure
import Home from "./pages/Home/home"; //import the component as it appears o your file structure
import About from "./pages/About/about"; //import the component as it appears o your file structure

function App() {
  return (
    <Layout>
      <Home />
      <About />
    </Layout>
  );
}

export default App;
