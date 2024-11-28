import FlippingCard from "./components/FlippingCard";

function App() {
  return (
    
    <div className="flex flex-col min-h-screen ">
      <header className="bg-slate-100">
        <div className="container mx-auto p-4 max-w-6xl flex justify-center">
          <img
            src="./src/assets/logo.png"
            alt="CatMatch logo"
            className="w-32 h-auto"
          />
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center">
        <div className="container mx-auto grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-5 md:gap-4 p-2 justify-center place-items-center max-w-2xl">
     

          <FlippingCard />
          <FlippingCard />
          <FlippingCard />
          <FlippingCard />
          <FlippingCard />
          
          <FlippingCard />
          <FlippingCard />
          <FlippingCard />
          <FlippingCard />
          <FlippingCard />

          <FlippingCard />
          <FlippingCard />
          <FlippingCard />
          <FlippingCard />
          <FlippingCard />

          <FlippingCard />
          <FlippingCard />
          <FlippingCard />
          <FlippingCard />
          <FlippingCard />
        </div>
      </main>

      <footer className="bg-slate-100">
        <div className="container mx-auto p-4 text-center">
          <p>&copy; 2024 Ryan Holland</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
