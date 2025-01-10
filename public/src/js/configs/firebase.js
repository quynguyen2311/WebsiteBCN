import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore, collection, getDoc, doc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// Cấu hình Firebase của ứng dụng web của bạn
const firebaseConfig = {
	apiKey: "AIzaSyCculfG8YeqAe3udtTj3LRT3mRst3VmL64",
	authDomain: "wbcn-6e0ca.firebaseapp.com",
	databaseURL: "https://wbcn-6e0ca-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "wbcn-6e0ca",
	storageBucket: "wbcn-6e0ca.firebasestorage.app",
	messagingSenderId: "9516548918",
	appId: "1:9516548918:web:37a49911e5672d3b5ce997",
	measurementId: "G-FVSEGFNJHX",
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db, collection, getDoc, doc };
