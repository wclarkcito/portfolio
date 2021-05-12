/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

// const BASE_URL = "http://localhost:8080";
// const BASE_URL = "https://dcl-portfolio-mail-handler.herokuapp.com";

export default {

    sendEmail: function (information) {
        console.log(information)
        return axios.post("http://wcportfolio-server/api/email", {
            email: information.email,
            message: information.message
        })
    }

}
