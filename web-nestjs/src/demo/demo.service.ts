import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class DemoService {
  constructor(private config: ConfigService) {}

  getHost() {
    return this.config.get('DATABASE_HOST')
  }
}
