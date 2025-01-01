import Navbar from "@/components/Navbar";
import Landing from "./(nondashboard)/hero/page";

export default function Home() {
  return (
    <div className="nondashboard-layout">
      <Navbar/>
      <main className="nondashboard-layout__main">
        <Landing />
      </main>
    </div>
  );
}
