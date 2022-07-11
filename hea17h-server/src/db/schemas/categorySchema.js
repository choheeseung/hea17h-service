import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CategorySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: false,
        },
    },
    {
        collection: 'categories',
        timestamps: true,
    },
);

export { CategorySchema };
