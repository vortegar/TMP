import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const CardsHomePage = ({ img }) => {
  return (
    <>
      <div class="card my-4">
        <div class="card-body">
          <div className="">
            <FontAwesomeIcon  className="card-homepage-tittle_container-img mb-2" icon={img} />
          </div>
          <span className="card-title fs-bolder d-block"> <strong className="">T</strong> = LOREM IPSUM.</span>
          <span  class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolores iste repellendus commodi sunt quisquam facilis quo similique doloribus qui voluptatem impedit, debitis animi maiores optio accusantium ratione possimus consequatur.</span>
        </div>
      </div>
    </>
  )
}

