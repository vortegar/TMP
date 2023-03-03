import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const CardsHomePage = ({ img }) => {
  return (
    <>
        <div className="card-homepage">
            <div className="card-homepage-tittle">
                <span className="card-homepage-tittle_container">
                    <FontAwesomeIcon  className="card-homepage-tittle_container-img" icon={img} />
                </span>
                <span className="card-homepage-tittle_container-tittle"> <strong>T</strong> = LOREM IPSUM.</span>
            </div>
            <div className="card-homepage-tittle_container-description">
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolores iste repellendus commodi sunt quisquam facilis quo similique doloribus qui voluptatem impedit, debitis animi maiores optio accusantium ratione possimus consequatur.</span>
            </div>
        </div>
    </>
  )
}
