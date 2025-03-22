import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'



const About = () => {
  return (
   <>
   <Header image={HeaderImage} title="About Us" >
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
          molestiae? Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Nisi, obcaecati 
        esse quo, at ut architecto perspiciatis
        
   </Header>

   <section className="about__story">
    <div className="container about__story-container">
      <div className="about__section-image">
        <img src={StoryImage} alt="Our Story Image"/> 
      </div>
      <div className="about__section-content"> 
        <h1>Our Story</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Saepe modi esse eveniet hic, voluptate laudantium nemo
           obcaecati nisi, quae labore sunt. Lorem ipsum dolor sit, Lorem ipsum dolor sit amet 
           consectetur adipisicing elit. Temporibus,
            aspernatur illo illum voluptate sed iure rem molestiae alias? Quibusdam, nisi saepe!
           amet consectetur adipisicing elit. Repellendus ipsa illo rem.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat iste reprehenderit 
          voluptates error deserunt consectetur adipisci harum blanditiis magni, eius expedita
           repellendus aliquid architecto eaque ullam ea voluptate! Doloremque quidem ab consequuntur 
           fugiat dolores non unde porro,
           est a quae at minima reiciendis odio animi quisquam veritatis in, quia illo.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus dicta incidunt 
          veritatis neque consectetur natus voluptatum.
           Illum vitae velit tempore corrupti animi voluptatem dignissimos aliquam sint ut quas?
        </p>
      </div>
    </div>
   </section>


   <section className="about__Vision">
    <div className="container about__Vision-container">     
      <div className="about__section-content"> 
        <h1>Our Vision</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Saepe modi esse eveniet hic, voluptate laudantium nemo
           obcaecati nisi, quae labore sunt. Lorem ipsum dolor sit, Lorem ipsum dolor sit amet 
           consectetur adipisicing elit. Temporibus,
            aspernatur illo illum voluptate sed iure rem molestiae alias? Quibusdam, nisi saepe!
           amet consectetur adipisicing elit. Repellendus ipsa illo rem.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat iste reprehenderit 
          voluptates error deserunt consectetur adipisci harum blanditiis magni, eius expedita
           repellendus aliquid architecto eaque ullam ea voluptate! Doloremque quidem ab consequuntur 
           fugiat dolores non unde porro,
           est a quae at minima reiciendis odio animi quisquam veritatis in, quia illo.
        </p>   
      </div>
      <div className="about__section-image">
        <img src={VisionImage} alt="Our Story Image"/> 
      </div>
    </div>
   </section>

   <section className="about__mission">
    <div className="container about__mission-container">
      <div className="about__section-image">
        <img src={MissionImage} alt="Our Mission Image"/> 
      </div>
      <div className="about__section-content"> 
        <h1>Our Mission</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Saepe modi esse eveniet hic, voluptate laudantium nemo
           obcaecati nisi, quae labore sunt. Lorem ipsum dolor sit, Lorem ipsum dolor sit amet 
           consectetur adipisicing elit. Temporibus,
            aspernatur illo illum voluptate sed iure rem molestiae alias? Quibusdam, nisi saepe!
           amet consectetur adipisicing elit. Repellendus ipsa illo rem.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat iste reprehenderit 
          voluptates error deserunt consectetur adipisci harum blanditiis magni, eius expedita
           repellendus aliquid architecto eaque ullam ea voluptate! Doloremque quidem ab consequuntur 
           fugiat dolores non unde porro,
           est a quae at minima reiciendis odio animi quisquam veritatis in, quia illo.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus dicta incidunt 
          veritatis neque consectetur natus voluptatum.
           Illum vitae velit tempore corrupti animi voluptatem dignissimos aliquam sint ut quas?
        </p>
      </div>
    </div>
   </section>


   </>

  )
}

export default About
