//les modeles de donnees sont les entites du system
//fichier qui decrit la forme des donnees
//semblable a une table de donnee

export interface Todo {
    //in typescript | allows you to have multiple types
    // null field is optional

    //identifiant 
    id: number | null;
    title: string | null;
    completed: boolean | null;
    priority: string | null;
    dueDate: string;
    description: string | null;
}