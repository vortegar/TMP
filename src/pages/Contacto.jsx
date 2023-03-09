import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Footer } from "../components/Footer"
import { InputForm } from "../components/InputForm"
import { TextAreaForm } from "../components/TextAreaForm"

export const Contacto = () => {
  return (
    <>
      <div >
        <div className="container-contact">
            <h3 className="container-contact_tittle">CONTÁCTANOS</h3>
            <div className="container-contact_information">
              <div className="container-contact_information_contenedor">
                <div>
                  <FontAwesomeIcon className="container-contact_information_text-img_img " icon={faWhatsapp}/>
                </div>
                <div className="container-contact_information_text-img_text">
                  <span className="d-none d-sm-block">+56 9 999 999 91.</span>
                </div>
              </div>
              <div>
                <div>
                  <FontAwesomeIcon className="container-contact_information_text-img_img" icon={faEnvelope}/>
                </div>
                <div className="container-contact_information_text-img_text">
                  <span className="d-none d-sm-block">tumarcapuede@gmail.com</span>
                </div>
              </div>
            </div>

            <form>
              <InputForm 
                nameInput="Nombre*" 
                type="text" 
                placeholder="Nombre" 
                name="name"
              />

              <InputForm 
                nameInput="Correo*" 
                type="text" 
                placeholder="tumarcapuede@google.com" 
                name="email"
              />

              <InputForm 
                nameInput="Asunto*" 
                type="text" 
                placeholder="Quiero información de..." 
                name="asunto"
              />

            <TextAreaForm
              nameInput="Asunto*" 
              type="text" 
              placeholder="Quiero información sobre..." 
              name="asunto"                          
            />
            <div className="btn-submit">
              <button className="btn btn-container-contact">Enviar</button>
            </div>
          </form>
        </div>
      </div>      

      <Footer />
    </>
  )
}
