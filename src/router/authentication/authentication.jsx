
// import { getRedirectResult } from "firebase/auth"
import SignInForm from "../../components/sign-in-form/sign-in-form"
import SignUpForm from "../../components/sign-up-form/sign-up-form"
import "./authentication.scss"

const Authentication = () => {
    /*  useEffect(
         () => {
             (async () => {
                 const response = await getRedirectResult(auth);
                 if (response) {
                     const userDorRef = await cerateUserDocumentFromAuth(response.user);
                 }
             })();
         }
         , [])
     //   重定向登录会切换页面，需要使用auth传入getRedirectResult得到相应的内容 */
    return (
        <div className="authentication-container">
            <SignInForm />
            {/* <button onClick={signInWithGoogleRedirect}>Sign In With Google Redirct</button> */}
            <SignUpForm />
            {/* <UserContext.Consumer>{(value) => {
                return <h2>{value}</h2>
            }}</UserContext.Consumer> */}
        </div>
    )

}
export default Authentication;