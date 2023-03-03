import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-container">

          <div className="footer-brand">
            <img src="./Isotipo-02.png" alt="logo-tmp" />
          </div>

          <div className="footer-contact">
            <ul className="footer-contact_list">
              <li className="footer-contact_list_item">
                <FontAwesomeIcon icon={faEnvelope} />
                <span className="footer-contact_list_item_text">Correo@gmail.com</span>
              </li>

              <li className="footer-contact_list_item">
                <FontAwesomeIcon icon={faWhatsapp} />
                <span className="footer-contact_list_item_text">+569 999 999 91</span>
              </li>

              <li className="footer-contact_list_item">
                <FontAwesomeIcon icon={faInstagram} className="footer-contact_list_item_icon" />
                <span className="footer-contact_list_item_text">@Tumarcapuede</span>
              </li>

            </ul>
          </div>

        </div>
        <span>© 2023 Tu Marca Puede. All Rights Reserved</span>      
      </div>
    </>
    
  )
}
