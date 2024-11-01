import { Controller, Get } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { DemoService } from './demo.service'

@Controller('api/demo')
export class DemoController {
  constructor(
    private config: ConfigService,
    private demoService: DemoService
  ) {}

  @Get('index')
  index() {
    return {
      username: this.config.get('DATABASE_USERNAME'),
      port: this.config.get('DATABASE_PORT'),
      host: this.demoService.getHost()
    }
  }
}
