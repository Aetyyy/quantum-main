import Jumbotron from "@/components/Ui/Jumbotron";

export default function Home() {
  return (
    <main>
      <section id="Jumbotron" className="bg-violet-950">
        <Jumbotron />
      </section>
      <header className="bg-gradient-to-r from-violet-800 via-violet-700 to-violet-900 h-screen">
        <section id="Recomendations">Recomendations</section>
        <section id="category-button">Category</section>
        <section id="games-cards">Card</section>
      </header>
    </main>
  );
}
