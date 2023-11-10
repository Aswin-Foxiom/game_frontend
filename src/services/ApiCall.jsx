import axios from "axios";
import { BaseUrl } from "./Urls";
import { ShowToast } from "../utils/Toast";

export const apiCall = async (method, url, data, params, is_formdata) => {
  var headers = {
    "Content-Type": is_formdata ? "multipart/form-data" : "application/json",
    Authorization: "Bearer " + localStorage.getItem("token"),
  };
  var url = BaseUrl + url;

  try {
    const res = await axios({
      method,
      url,
      params,
      data,
      headers,
    });

    var response = { status: true, message: res.data };
    // ShowToast(res.data.message , true)
    return response;
  } catch (error) {
    console.log("THE ERRR US");
    var code = error.response?.status ?? null;
    ShowToast(
      error.response ? error.response.data.message : "Internal Server Error"
    );
    console.log(
      error.response ? error.response.data.message : "Internal Server Error"
    );
    if (code && code === 403) {
      localStorage.clear();
    }
    return error;
  }
};
