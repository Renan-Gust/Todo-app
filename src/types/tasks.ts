import { Dispatch, SetStateAction } from "react";

export type TaskType = {
    id: string;
    title: string;
    completed: boolean;
}

export type TasksType = {
    tasks?: TaskType[];
    setTasks?: Dispatch<SetStateAction<TaskType[]>>;
}

export type ThemeType = {
    theme?: "dark" | "light";
    setTheme?: Dispatch<SetStateAction<"dark" | "light">>;
}