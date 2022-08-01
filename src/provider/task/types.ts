import z from 'zod';

export const TaskStatus = z.enum(["DONE", "IDLE", "PROGRESS", "CURRENT"]);
export type ETaskStatus = z.infer<typeof TaskStatus>

export const Task = z.object({
    id: z.string(),
    name: z.string(),
    status: TaskStatus,
    current: z.optional(z.boolean({}))
})

export type ITask = z.infer<typeof Task>;

export type  ITaskInput = Omit<ITask, 'id'|'status'>

export interface ITaskContext {
    tasks: ITask[] | [];
    addTask(task:string):void
    removeTask(taskId:ITask['id']):void
    setCurrentTask(taskId:ITask['id']):void
    setTaskStatus(_taskId:ITask['id'], _status: ITask['status']): void
    get(_taskType: ETaskStatus): ITask[]
    
}

