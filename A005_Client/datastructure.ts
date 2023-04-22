/*
Aufgabe: <L04_Datastructures>
Name: <Alexander Holstein>
Matrikel: <271466>
Datum: <22.04.2023>
Quellen: <Lara Halmosi,inspiriert von Theresa Hauser>
*/
namespace household{
    //definiert von welchen typ die einzelnen Werte haben
    export interface Task {
        task: string;
        datetime: string;
        person:string;
        comment: string;
        status:boolean;
    }
//aufbau der datensammlung
export interface Data {
    [name: string]: Task[];
    }

export async function handleLoad(): Promise<void> {
        console.log("async");
        
        let response: Response = await fetch("data.json");
        let task: string = await response.text();
        let data: Data = JSON.parse(task);
        
        generateTasks(data);

}
}