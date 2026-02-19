import mongoose, { Schema, Document, Model } from 'mongoose';

export interface INews extends Document {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    image: string;
    content: string[];
    createdAt: Date;
    updatedAt: Date;
}

const NewsSchema: Schema = new Schema(
    {
        slug: { type: String, required: true, unique: true },
        title: { type: String, required: true },
        excerpt: { type: String, required: true },
        category: { type: String, required: true },
        date: { type: String, required: true },
        image: { type: String, required: true },
        content: { type: [String], required: true },
    },
    {
        timestamps: true,
    }
);

// Model zaten tanımlıysa onu kullan, yoksa oluştur (Hot Reload için)
const News: Model<INews> = mongoose.models.News || mongoose.model<INews>('News', NewsSchema);

export default News;
