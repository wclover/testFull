import { Course } from '@libs/db/models/course.model';
import { Episode } from '@libs/db/models/episode.model';
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';

@Crud({
    model: Episode
})
@Controller('episodes')
@ApiTags('课时')
export class EpisodesController {
    constructor(
        @InjectModel(Episode) private readonly model: ReturnModelType<typeof Episode>,
        @InjectModel(Course) private readonly courseMode: ReturnModelType<typeof Course>
    ) {}

    @Get('option')
    async option() {
        const course = (await this.courseMode.find()).map(item => ({
            label: item.name,
            value: item._id
        }))
        return {
            title: '课时管理',
            translate: false,
            column: [
              {prop: 'course', label: '所属课程', type: 'select', row: true, dicData: course},
              {prop: 'name', label: '课时名称', span: 24},
              {prop: 'file', label: '视频文件', span: 24, width: 120, listType: 'picture-img', type: 'upload', action: '/upload'}
            ]
        }
    }
}
