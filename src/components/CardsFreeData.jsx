import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons"

export const CardsFreeData = ({title,}) => {
  return (
    <>
        <div className="card m-4">
            <img src="./Que-es-un-curso-en-linea.jpg" className="card-img-top h-25 mt-0" alt="detalles"/>
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <h4 className="card-title fw-bold">{title}</h4>
                    <FontAwesomeIcon icon={faFileArrowDown} className="data-free-fontawesome" />
                </div>
                <p className="card-text text-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eligendi error.</p>
                <div  className="text-center">
                    <button className="btn btn-free-data">Descargar plantilla</button>
                </div>
            </div>
        </div>
    </>
  )
}