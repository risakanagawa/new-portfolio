export const selectedProject = selectedProject =>{ 
    console.log('action!')
    console.log(selectedProject)
    
    return{
        type: "SELECTED_ITEM", payload: selectedProject
    }
};
  