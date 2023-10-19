import { Schema, model } from 'mongoose';
import { Task } from '../../../../domain/task/task-domain';

const taskSchema: Schema<Task> = new Schema<Task>({
    id: { type: String, required: true },
    name: { type: String, required: true },
    isCompleted: {type: Boolean, required: true},
    status: {type: Boolean},
});

taskSchema.index({ creatorId: 1 });
export const taskModel = model<Task>('Task', taskSchema);

