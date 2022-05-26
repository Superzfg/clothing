import { useState } from "react";
import { cerateUserDocumentFromAuth, signInWithGooglePopup, signInAuthWithEmailAndPassword } from "../../utils/firebase";
import FormInput from "../sign-up-form-input/form-input";
import Button from "../button/button";
import "../sign-up-form/sign-up-form.scss"

const SignInForm = () => {
    const defaultFormFields = {
        email: "",
        password: "",
    }
    // 表单中与usestate中一一对应的对象
    const [formFields, setFormFields] = useState(defaultFormFields);
    // 初始化钩子
    const { email, password } = formFields;
    // 解构
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
        // 先复制一遍当前formFields再对其中想要修改的内容进行覆盖
    }
    const clearAll = () => {
        setFormFields(defaultFormFields)
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await signInAuthWithEmailAndPassword(email, password)
        } catch (error) {

            switch (error.code) {
                case "auth/wrong-password":
                    alert("worng password")
                    break;
                case "auth/user-not-found":
                    alert("wrong email")
                    break;
                default:
                    console.log(error);
                    break;
            }
        }
    }
    const logGoogleUser = async () => {
        await signInWithGooglePopup();
        // user为登录谷歌后返回的对象中的一个属性
        // 把用户数据传给在数据库中创建集合的函数
    }

    return (
        <div className="sign-up-container">
            <h2>Already have a count?</h2>
            <span>Sign In with your email and password</span>
            <form onSubmit={handleSubmit}>
                {/* onsubmit 提交后执行的回调*/}

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
                <div className="buttons-container">
                    <Button children="Sign In" type="submit" />
                    <Button type="button" children="Sign In With Google Popup" buttonType="google" onClick={logGoogleUser} />
                </div>
            </form>
        </div>
    );
};
export default SignInForm