import axios from "axios";

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer 0KicTL5WR1061wrmcLsx-j6TxBVdLf0PogRB-r34x8rIgPxdJgyVvCFfUbq-XWBnwvln07mTqZyP9P1MzFwb3RvJPAPw-1_QjvhxTUTqr3OaCvRWnLhVEsRxe_SFZXYx'
    }
})