// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth"
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,
} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAdbHl8zixANQsjKsilqkv9HmSt3iil0n4",
    authDomain: "fuguiclothing.firebaseapp.com",
    projectId: "fuguiclothing",
    storageBucket: "fuguiclothing.appspot.com",
    messagingSenderId: "24343415479",
    appId: "1:24343415479:web:023f6ae3f54f93635edb32"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
// 供应商为谷歌，也可为github等等
provider.setCustomParameters({
    prompt: "select_account"
});
// 好像是要求用户必须进行账户登录
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();
// 类似联系上数据库的感觉
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey)
    // 定义在哪个数据库上搞一个集合
    const batch = writeBatch(db);
    objectsToAdd.forEach(obj => {
        const docRef = doc(collectionRef, obj.title.toLowerCase());
        // 定义把文档搞到哪个集合上
        batch.set(docRef, obj)

    });
    await batch.commit();
    // 发射batch
    console.log("go!");
}
// 把数据提交到数据库
export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, "categories");
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, doc) => {
        const { title, items } = doc.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})
    return categoryMap;
}
export const cerateUserDocumentFromAuth = async (useAuth, ...otherInfo) => {
    const userDocRef = doc(db, "users", useAuth.uid);
    // 类似一个参考或者认证向数据库中的集合查询有没有某个id
    console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef)
    // 获取上面的参考但是他并不存在于数据库中
    console.log(userSnapshot);
    console.log(userSnapshot.exists());
    if (!userSnapshot.exists()) {
        // 结合着参考在数据库中创建文档和数据
        const { displayName, email } = useAuth;
        const createAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName, email, createAt, ...otherInfo
            })
        } catch (error) {
            console.log(error);
        }
    }
    return userDocRef;

}
export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
}
export const signInAuthWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
}
export const signOutAuth = async () => await signOut(auth);
export const onAuthStateChangedListener = async (callback) => await onAuthStateChanged(auth, callback);