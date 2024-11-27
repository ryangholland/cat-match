function App() {
  return (
    <div className="flex flex-col min-h-screen ">
      <header className="bg-slate-100">
        <div className="container mx-auto p-4 max-w-6xl flex">
          <img src="./src/assets/logo.png" alt="CatMatch logo" className="w-32 h-auto" />

        </div>
      </header>

      <main className="flex-grow"></main>

      <footer className="bg-slate-100">
        <div className="container mx-auto p-4 text-center">
          <p>&copy; 2024 Ryan Holland</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
