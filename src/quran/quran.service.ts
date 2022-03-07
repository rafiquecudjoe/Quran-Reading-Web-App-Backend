import { Injectable } from '@nestjs/common';
import { NotificationsCall } from 'util/QuranApiCall';
import { ListChaptersResponseBody } from './entities/quran.entity';




@Injectable()
export class QuranService {
 

  async listChapters(): Promise<ListChaptersResponseBody>{

    try {

      const path = "chapters?language=en"

      const chapters = await NotificationsCall(path)


      return { statusCode: 200, status: "success", message: "Chapters Retrieved Successfully", data: chapters }
    } catch (error) {
      console.log(error)
    }
  }


 async getChapterVerses() {
   

   try {

     const path = "by_chapter/1?language=en&words=true&page=1&per_page=10"

     const chapters = await NotificationsCall(path)


     return { statusCode: 200, status: "success", message: "Chapters Retrieved Successfully", data: chapters }
   } catch (error) {
     return { statusCode: 500, status: "failure", message: "An error occurred", data: {} }
   }
   
   
   
 }

}
