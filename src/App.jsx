import { Header } from "./components/Header"
import  { Post }  from "./Post"


import './global.css';



export function App() {
  

  return (
    <div>
      <Header />
        <Post  
          author="Erik Sales" 
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, iure temporibus ipsa, illo ducimus debitis aspernatur dicta, quo velit est nulla? Mollitia expedita illo esse aliquam iusto rerum voluptate illum!"
        />
        <Post 
        author="Karol Lustosa"
        content="Novo poste gerado teste"
        />
       
   
    </div>
  )
}
 