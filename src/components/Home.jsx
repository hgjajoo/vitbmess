import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-200">
      <header className=" p-6 text-center pt-32 pb-32">
        <h1 className="text-3xl font-bold">Welcome to Mess Timetable</h1>
        <p className="text-xl mt-2">Your daily guide to the mess schedule and menu.</p>
      </header>

      <main className="p-8 text-center">
        <h2 className="text-2xl font-semibold mb-6">Explore the Menus</h2>
        <div className="flex flex-col items-center space-y-4 pb-12">
          <Link to="/mayuri" className="bg-zinc-700 p-4 rounded-lg text-white w-60 hover:bg-zinc-600">Mayuri Mess</Link>
          <Link to="/crcl" className="bg-zinc-700 p-4 rounded-lg text-white w-60 hover:bg-zinc-600">CRCL Mess</Link>
          <Link to="/ab" className="bg-zinc-700 p-4 rounded-lg text-white w-60 hover:bg-zinc-600">AB Mess</Link>
        </div>
        <div>
            <p className="text-center text-sm text-zinc-700 pb-32">
                Mobile App coming soon! <br/>
                Safal menu will be added soon, next month probably.
            </p>
        </div>
      </main>
    </div>
  );
}

export default Home;
