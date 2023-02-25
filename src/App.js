import Posted from "./components/Posted";
import Stories from "./components/Stories";
import TopRow from "./components/TopRow";
import vishal from "./assets/vishal.JPG";
import Ramcharan from "./assets/ramcharan.jpg";
import Ntr from "./assets/ntr.jpg";
import Prabhas from "./assets/prabhas.jpg";
import Alluarjun from "./assets/alluarjun.jpg";
import BottomRow from "./components/BottomRow";



function App() {

  const posts = [
    {
      id: 1,
      src: vishal,
      username: "Vishal Pippirichetti",
      caption: "Be awesome today.",
    },
    {
      id: 2,
      src: Ramcharan,
      username: "Ram Charan",
      caption: "Be a Warrior, not a Worrier..",
    },
    {
      id: 3,
      src: Ntr,
      username: "N.T.R",
      caption: "There's nothing better than being yourself.",
    },
    {
      id: 4,
      src: Prabhas,
      username: "Prabhas",
      caption: "Live for the experiences you can't describe.",
    },
    {
      id: 5,
      src: Alluarjun,
      username: "Allu Arjun",
      caption: "Just be yourself; nobody else exists like you.",
    },
  ];

  
  return (
    <div>
      <TopRow/>
      <Stories posts={posts}/>
      {
        posts.map((post)=>(
          <div key={post.id}>
          <Posted post={post}/>
         
          </div>
        ) )
      }
      <BottomRow/>
    </div>
  );
}

export default App;
