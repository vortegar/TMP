import { CardsHomePage } from "../components/CardsHomePage"
import { Footer } from "../components/Footer"

import { faEye, faGift, faHeart } from "@fortawesome/free-solid-svg-icons"

export const HomePage = () => {
  return (
    <>
      <div className="container-all">
        <div className="container-one">
          <h1 className="container_tittle-one">El Metodo TMP.</h1>
          <span className="container_description-one">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero dolore, maiores dicta aliquam est non repellendus modi consequatur iusto consequuntur tenetur, enim numquam ea nobis distinctio impedit illo provident consectetur.</span>
        </div>

        <div className="container-two">
          <h1 className="container_tittle-two">UN SISTEMA ELABORADO POR PROFESIONALES</h1>
          <span className="container_description-two">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis alias illum quo aperiam corrupti, corporis repudiandae quod, voluptate doloribus consequatur qui fugiat velit incidunt nostrum dolore fugit placeat tempore cupiditate.</span>
        </div>
        
        <div className="container-three">
          <div>
            <img className="container-three_img-one" src="./retrato-mujer.png" alt="" />
          </div>
          <div>
            <img className="container-three_img-two" src="./blob-haikei.svg" alt="" />
          </div>
        </div>

        <CardsHomePage img={ faHeart }/>
        <CardsHomePage img={ faGift }/>
        <CardsHomePage img={ faEye }/>
        <Footer />  
      </div>
      
    </>
  )
}
