import { Carousel } from './carrousel/Carrousel';


export  const App = () =>{
  return (
    <div className='main-app'> 
    <Carousel picsCount={3} autoplay={false} speed={4000}/>         
    </div>
    
  );
}

