import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import ChatWindow from "../components/chat/ChatWindow";

const Home = () => {
  return (
    <div className="h-screen bg-slate-950 flex flex-col overflow-hidden">
      <Navbar />

      <main className="flex flex-col md:flex-row flex-1 min-h-0 overflow-hidden">
        <Sidebar />

        <section className="flex-1 min-h-0 overflow-auto p-4 md:p-6 lg:p-8">
          <ChatWindow />
        </section>
      </main>
    </div>
  );
};

export default Home;