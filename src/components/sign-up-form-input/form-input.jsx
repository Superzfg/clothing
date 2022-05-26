import "./form-input.scss"
const FormInput = ({ label, inputProp }) => {
    return (<div className="group">
        <input className="form-input" {...inputProp} />
        <label className={`${inputProp.value.length ? "shrink" : ""} form-input-label`}  >{label}</label>
    </div>)
}
export default FormInput