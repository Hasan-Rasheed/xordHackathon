import { Injectable } from '@nestjs/common';
import { NestCrawlerService } from 'nest-crawler';

@Injectable()
export class CrawlerService {
  constructor(
    private readonly crawler: NestCrawlerService,
  ) {}

  // scraping the specific page
  public async scrape(obj): Promise<any> {
    interface ExampleCom {
      title: string;
      // info: string;
      content: string;
    }
console.log(obj)
    const data: ExampleCom = await this.crawler.fetch({
      target: obj.url,
      fetch: {
        title: 'h1',
        // info: {
        //   selector: 'p > a',
        //   attr: 'href',
        // },
        content: {
          selector: '.Syllabus',
          how: 'html',
        },
      },
    });

    console.log(data);
    return data
    // {
    //   title: 'Example Domain',
    //   info: 'http://www.iana.org/domains/example',
    //   content: '<div><h1>Example Heading</h1><p>Example Paragraph</p></div>'
    // }
  }
}