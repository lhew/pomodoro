export enum TaskStatus {
    DONE,
    IDLE,
    PROGRESS
}
export interface ITask {
    id: string;
    name: string;
    status: TaskStatus
}

export type  ITaskInput = Omit<ITask, 'id'|'status'>

export interface ITaskContext {
    tasks: ITask[] | [];
    addTask(task:ITaskInput):void
    removeTask(taskId:ITask['id']):void
}

