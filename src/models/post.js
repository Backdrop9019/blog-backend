//스키마 정의
import mongoose from 'mongoose';

const {Schema} = mongoose;

const PostSchema = new Schema({
    title: String,
    body: String,
    tags: [String],
    publishedDate: {
        type: Date,
        default: Date.now,
    },
});

//모델 인스턴스 만들고 내보내줌
//스키마 이름이랑 스키마 객체 보내줌
const Post = mongoose.model('Post', PostSchema);
export default Post;








