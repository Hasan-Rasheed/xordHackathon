import { Controller, Post, Body, Param} from '@nestjs/common';
import { CrawlerService } from './scrapper.service';


@Controller('scrap')
export class CrawlController {
  constructor(private readonly crawlService: CrawlerService) {}

  //request to send invoice mail
  @Post()
  async scrapping(
      @Body() obj:Object
  ) {
    try{
        const res= await this.crawlService.scrape(obj);
        return {res}

    }
    catch(error){
        throw error
    }
}

    
}