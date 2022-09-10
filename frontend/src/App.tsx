import Header from "./components/Header"
import SalesCard from "./components/SalesCard"

const App = () =>  (
  <>
    {/* HEADER */}
    <Header/>

    <main>
      <section id="sales">
        <div className="dsmeta-container">
         <SalesCard/>
        </div>
      </section>
    </main>
    </>
)

export default App
