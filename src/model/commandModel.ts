import mongoose, { Schema, Document } from 'mongoose';

export interface ICommand extends Document {
    command: string;
    timestamp: Date;
    status: string;
}

const CommandSchema: Schema = new Schema({
    command: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
    status: { type: String, required: true },
});

export default mongoose.model<ICommand>('Command', CommandSchema);
