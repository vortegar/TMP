export const TextAreaForm = ({nameInput, placeholder, name }) => {
  return (
    <>
        <div className="form-info">
            <label className="form-info_label">{ nameInput }</label>
            <textarea
              placeholder={ placeholder }
              name       ={ name }
              className  ="form-info_textarea"            
            />
        </div>
    </>
  )
}
