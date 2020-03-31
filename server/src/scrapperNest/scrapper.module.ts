import { Module } from '@nestjs/common';
import { NestCrawlerModule } from 'nest-crawler';
import { CrawlerService } from './scrapper.service';
import { CrawlController } from './scrapper.controller';


@Module({
  imports: [
    NestCrawlerModule,
    
  ],
  controllers: [CrawlController],
  providers: [CrawlerService],
})
export class CrawlerModule {}