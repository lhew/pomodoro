import z from 'zod';


export const Settings = z.object({
    taskTime: z.number(),
    taskExtraTime: z.number(),
    breakTime: z.number(),
    breakExtraTime: z.number(),
    alarmSound: z.optional(z.string()),
})

export type ISettings = z.infer<typeof Settings>;


export interface ISettingsContext {
    settings: ISettings;
    toggleSettingsPopup: () => void;
    saveSettings: (settings: ISettings) => void;    
}

