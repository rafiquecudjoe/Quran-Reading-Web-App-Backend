import axios from 'axios';

export const NotificationsCall:any = async (path:string): Promise<any> => {
    const response = await axios.get(`https://api.quran.com/api/v4/${path}`);

    return response.data;
};
