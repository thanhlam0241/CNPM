import axiosClient from "./axios";

class AccountApi {
    addAccount = (params) => {
        const url = '/accounts';
        return axiosClient.post(url, { params });
    };
    checkLogin = (params) => {
        const url = '/accounts';
        return axiosClient.get(url, { params });
    };
    getAllAccount = () => {
        const url = '/accounts';
        return axiosClient.get(url);
    }
}

const accountApi = new AccountApi();
export default accountApi;