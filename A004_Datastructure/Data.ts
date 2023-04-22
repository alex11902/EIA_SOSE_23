namespace Aufgabenliste_datastructure {
    export interface Task {
        task: string;
        name: string;
        date: string;
        info: string;
    }

    export let data: Task[] = [
        {
            task: "Putzen",
            name: "Peter",
            date: "27.04.2023",
            info: "Gründlich!",
        }

    ]


}
