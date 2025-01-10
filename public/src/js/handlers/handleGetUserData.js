import { db, doc, getDoc } from "../configs/firebase.js";
import { GET_USER_ERROR_MESSAGES } from "../constants/main.js";
import { getCookie } from "../utils/cookie.js";
import Alert from "../components/Alert/Alert.js";

async function getUserData() {
    try {
        const docID = getCookie("UID");
        if (!docID) {
            console.warn(GET_USER_ERROR_MESSAGES.USER_DATA_PATH_NOT_FOUND);
            return null;
        }

        const userDocRef = doc(db, "users", docID);
        const userDoc = await getDoc(userDocRef);
        if (!userDoc.exists()) {
            console.error(GET_USER_ERROR_MESSAGES.DOCUMENT_NOT_FOUND);
            return null;
        }

        const userData = userDoc.data();
        return userData;
    } catch (error) {
        Alert("Lỗi truy vấn", GET_USER_ERROR_MESSAGES.FETCH_ERROR, 3000, "red", "black");
        return null;
    }
}

export { getUserData };
