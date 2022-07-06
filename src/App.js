import Banner from "./components/Banner/Banner";
import Form from "./components/Form/Form";
import TeamSection from "./components/TeamSection/TeamSection";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {
   const [workers, setWorkers] = useState([]);

   const teams = [
      { name: "Programador", mainColor: "#57C278", secondaryColor: "#D9F7E9" },
      { name: "Front-End", mainColor: "#82CFFA", secondaryColor: "#E8F8FF" },
      { name: "Data-Science", mainColor: "#A6D157", secondaryColor: "#F0F8E2" },
      { name: "Devops", mainColor: "#E06B69", secondaryColor: "#FDE7E8" },
      { name: "UX e Design", mainColor: "#DB6EBF", secondaryColor: "#FAE9F5" },
      { name: "Mobile", mainColor: "#FFBA05", secondaryColor: "#FFF5D9" },
      {
         name: "Inovação e gestão",
         mainColor: "#FF8A29",
         secondaryColor: "#FFEEDF",
      },
   ];

   const teamsName = teams.map((team) => {
      return team.name;
   });

   function handleAddNewWorker(worker) {
      setWorkers([...workers, worker]);
   }

   return (
      <div className="App">
         <Banner />
         <Form
            teams={teamsName}
            handleNewWorker={(worker) => handleAddNewWorker(worker)}
         />
         {teams.map((team) => {
            return (
               <TeamSection
                  key={team.name}
                  team={team}
                  workers={workers.filter(
                     (worker) => worker.team === team.name
                  )}
               />
            );
         })}
         <Footer />
      </div>
   );
}

export default App;
