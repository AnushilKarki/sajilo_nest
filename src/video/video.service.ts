import { Injectable } from '@nestjs/common';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';

const allVideos = [
    {
        id:1,
        name:'tom and jerry',
        duration:'3 mins',
        title:'Tom and jerry'
    },
    {
        id:2,
        name:'soul',
        duration:'4 mins',
        title:'soul'
    },
];
@Injectable()
export class VideoService{
    create(createVideoDto: CreateVideoDto){
        return 'this action add new video';
    }

    findAll(){
        return allVideos;
    }

    findOne(id: number){
        const video = allVideos.find(video => video.id == id);
        if(video){
            return video;
        }else{
            return 'there is video with id ${id}';
        }
    }
    update(id: number,updatVideoDto: UpdateVideoDto){
        return 'not implemented';
    }
    remove(id: number){
        return 'not implemented';
    }
}