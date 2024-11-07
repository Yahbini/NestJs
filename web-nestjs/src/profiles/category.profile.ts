import { createMap, forMember, mapFrom, type Mapper, MappingProfile } from '@automapper/core'
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs'
import { Category } from '../entities/category.entity'
import { CategoryDTO } from '../dtos/category.dto'

export class CategoryProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper)
  }

  get profile(): MappingProfile {
    return (mapper) => {
      createMap(
        mapper,
        Category,
        CategoryDTO,
        forMember(
          (d) => d.id,
          mapFrom((s) => s.id)
        ),
        forMember(
          (d) => d.name,
          mapFrom((s) => s.name)
        )
      )
    }
  }
}
