import { ApiProperty } from '@nestjs/swagger';
import { arrayProp, modelOptions, prop, Ref } from '@typegoose/typegoose';
import { Episode } from './episode.model';

@modelOptions({
    schemaOptions: {
        timestamps: true
    }
})
export class Course {
    @ApiProperty({description: '课程名称'})
    @prop()
    name: string

    @ApiProperty({description: '封面图'})    // api文档
    @prop() // 数据库字段
    cover: string

    @arrayProp({itemsRef: 'Episode'})
    episodes: Ref<Episode>[]
}