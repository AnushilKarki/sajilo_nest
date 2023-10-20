import { Test, TestingModule } from '@nestjs/testing';
import { VideoController } from './video.controller';
import { VideoService } from './video.service';

describe('videoController',() => {
    let controller: VideoController;

    beforeEach(async () => {
        const module : TestingModule = await Test.createTestingModule({
            controllers: [VideoController],
            providers: [VideoService],
        }).compile();
        
    })
})