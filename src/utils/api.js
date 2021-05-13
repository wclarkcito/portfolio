/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const BASE_URL = "http://localhost:3030";
// const BASE_URL = "https://wcportfolio-server.herokuapp.com";

export default {

    sendEmail: function (information) {
        console.log(information)
        return axios.post(`${BASE_URL}/api/email`, {
            email: information.email,
            message: information.message
        })
    }

}
