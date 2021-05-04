import Constants from "expo-constants";
const { manifest } = Constants;

const uri = `http://${manifest.debuggerHost.split(':').shift()}:5000/api`;

export default uri;