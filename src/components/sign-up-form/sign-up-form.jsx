import { useState, useContext } from "react";
import { UserContext } from "../../context/user-context.jsx"
import { createAuthUserWithEmailAndPassword, cerateUserDocumentFromAuth } from "../../utils/firebase";
import FormInput from "../sign-up-form-input/form-input";
import Button from "../button/button";
import "./sign-up-form.scss"
const SignUpForm = () => {
    const defaultFormFields = {
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
    }
    // 表单中与usestate中一一对应的对象
    const [formFields, setFormFields] = useState(defaultFormFields);
    // 初始化钩子
    const { displayName, email, password, confirmPassword } = formFields;
    // 解构
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
        console.log(name)
        // 先复制一遍当前formFields再对其中想要修改的内容进行覆盖
    }
    const clearAll = () => {
        setFormFields(defaultFormFields)
    }
    const { setCurrentUser } = useContext(UserContext)
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) return;
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await cerateUserDocumentFromAuth(user);
            setCurrentUser(user);
            clearAll();
        } catch (error) {
            if (error.code === "auth/email-already-in-use") alert("This email already in use")
            clearAll();
        }
    }


    return (
        <div className="sign-up-container">
            <h2>Don't have a count?</h2>
            <span>Sign Up with your email and password</span>
            <form onSubmit={handleSubmit}>
                {/* onsubmit 提交后执行的回调*/}
                <FormInput label="DisplayName" inputProp={{
                    type: "text",
                    require: true,
                    name: "displayName",
                    onChange: handleChange,
                    value: displayName
                }} />
                <FormInput label="Email" inputProp={{
                    type: "email",
                    require: true,
                    name: "email",
                    onChange: handleChange,
                    value: email
                }} />
                <FormInput label="Password" inputProp={{
                    type: "password",
                    require: true,
                    name: "password",
                    onChange: handleChange,
                    value: password
                }} />
                <FormInput label="Confirm Password" inputProp={{
                    type: "password",
                    require: true,
                    name: "confirmPassword",
                    onChange: handleChange,
                    value: confirmPassword
                }} />
                <Button children="Sign Up" type="submit" />
            </form>
        </div>
    );
};
export default SignUpForm