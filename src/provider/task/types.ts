export enum TaskStatus {
    DONE,
    IDLE,
    PROGRESS
}
export interface ITask {
    id: string;
    name: string;
    status: TaskStatus
    current?: boolean;
}

export type  ITaskInput = Omit<ITask, 'id'|'status'>

export interface ITaskContext {
    tasks: ITask[] | [];
    addTask(task:string):void
    removeTask(taskId:ITask['id']):void
    setCurrentTask(taskId:ITask['id']):void
    setTaskStatus(_taskId:ITask['id'], _status: ITask['status']): void
    
}

