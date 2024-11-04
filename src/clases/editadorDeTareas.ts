import ListaTareas from "./listaTareas";
import NodeTarea from "./nodeTarea";
import Tarea from "./tarea";



export default class EditadorDeTareas{
    constructor(){
    }

    public editTitle(list:ListaTareas, task:Tarea, title:string){
        let listTarea: NodeTarea;
        listTarea = list.search(task);

        if(listTarea !== null){
            listTarea.value.setTitle(title);
        }
    }

    public editDescription(list:ListaTareas, task:Tarea, Desc:string){
        let listTarea: NodeTarea;
        listTarea = list.search(task);
        
        if(listTarea !== null){
            listTarea.value.setDescription(Desc);
        }
    }

    public editExpirationDate(list:ListaTareas, task:Tarea, expDate:Date){
        let listTarea: NodeTarea;
        listTarea = list.search(task);
        
        if(listTarea !== null){
            listTarea.value.setExpirationDate(expDate);
        }

    }

    public editPriority(list:ListaTareas, task:Tarea, prio:number){
        let listTarea: NodeTarea;
        listTarea = list.search(task);
        
        if(listTarea !== null){
            listTarea.value.setPriority(prio);
        }
    
    }

    public editCategory(list:ListaTareas, task:Tarea, category:string){
        let listTarea: NodeTarea;
        listTarea = list.search(task);
        
        
        if(listTarea !== null){
            listTarea.value.setCategory(category);
        }
    
    }

    public editTag(list:ListaTareas, task:Tarea, tag:string){
        let listTarea: NodeTarea;
        listTarea = list.search(task);
        
        if(listTarea !== null){
            listTarea.value.setTag(tag);
        }
    
    }

    public editPercentage(list:ListaTareas, task:Tarea, percentage:number){
        let listTarea: NodeTarea;
        listTarea = list.search(task);
        
        if(listTarea !== null){
            listTarea.value.setPercentage(percentage);
        }
    }



    
}

