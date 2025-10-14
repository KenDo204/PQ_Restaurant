const PRODUCT_API='http://localhost:8083/web_order/foods';
class APIService{
    getFoods(){
        return fetch(PRODUCT_API,{
            method:'GET',
        }).then((res)=>res.json());
    }
}
export default new APIService();