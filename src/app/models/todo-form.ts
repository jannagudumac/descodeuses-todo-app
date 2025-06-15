import { FormControl } from "@angular/forms";

//create a typed form

export interface TodoForm {
    id: FormControl <number | null>;
    title: FormControl <string | null>;
    completed: FormControl <boolean | null>;
    priority: FormControl <string | null>;
    dueDate: FormControl <Date | null>;
    
}