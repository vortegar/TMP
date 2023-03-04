export const InputForm = ({nameInput, type, placeholder, name }) => {
  return (
    <>
        <div className="form-info">
            <label className="form-info_label">{ nameInput }</label>
            
            <input 
                type       ={ type }
                placeholder={ placeholder }
                name       ={ name }
                className  ="form-info_input"
            />
        </div>
    </>
  )
}
