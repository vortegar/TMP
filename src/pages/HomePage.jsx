import { CardsHomePage } from "../components/CardsHomePage"
import { Footer } from "../components/Footer"

import { faEye, faGift, faHeart } from "@fortawesome/free-solid-svg-icons"

export const HomePage = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <h1 className="fw-bolder fs-1">El Metodo <span className="text-title-tmp">TMP.</span></h1>
          <span className="text-tmp">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero dolore, maiores dicta aliquam est non repellendus modi consequatur iusto consequuntur tenetur, enim numquam ea nobis distinctio impedit illo provident consectetur.</span>
        </div>

        <div className="mt-5">
          <h1 className="fw-bold fs-3">UN SISTEMA <span className="text-title-tmp">ELABORADO POR PROFESIONALES</span></h1>
          <span className="text-tmp">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis alias illum quo aperiam corrupti, corporis repudiandae quod, voluptate doloribus consequatur qui fugiat velit incidunt nostrum dolore fugit placeat tempore cupiditate.</span>
        </div>
        
        <div className="container my-5">
          <div className="">
            <img className="img-fluid position-relative img-person" src="./retrato-mujer.png" alt="" />
          </div>
          <div>
            <img className="position-absolute img-fluid img-backgroud" src="./blob-haikei.svg" alt="" />
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
