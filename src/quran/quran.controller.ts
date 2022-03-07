import { Controller, Get, Res,Param} from '@nestjs/common';
import { QuranService } from './quran.service';
import { ApiOperation, } from '@nestjs/swagger';
import { Response } from 'express';


@Controller('quran')
export class QuranController {
  constructor(private readonly quranService: QuranService) {}



  @Get('/ListChapters')
  @ApiOperation({ summary: "Get List of Holy Quran Chapters" })
  async listChapters(@Res() res: Response) {
    const response = await this.quranService.listChapters()
    
    return res.status(response.statusCode).send({
      message: response.message,
      status:response.status,
      data: response.data ? response.data : {}
    });
  }

  @Get('/getChapterVerses')
  @ApiOperation({ summary: "Get List of Holy Quran Chapters" })
  async getChapterVerses (@Res() res: Response) {
    const response = await this.quranService.getChapterVerses()

    return res.status(response.statusCode).send({
      message: response.message,
      status: response.status,
      data: response.data ? response.data : {}
    });
  }





}
