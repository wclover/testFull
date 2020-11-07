import { ApiProperty } from '@nestjs/swagger';
import { modelOptions, prop, Ref } from '@typegoose/typegoose';

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
}