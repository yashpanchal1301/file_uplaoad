const dropArea = document.querySelector(".drag-area");
dragText = dropArea.querySelector("header");
 button = dropArea.querySelector("button");
 input = dropArea.querySelector("input");

let file;

button.onclick = () => {
    input.click();
}

input.addEventListener("change", function(){
    file = this.files[0];
    showFiles();
    dropArea.classList.add("active")
})

//if user drag file over dragarea
dropArea.addEventListener("dragover", (e) => {
    e.preventDefault();
 dropArea.classList.add("active")
 dragText.textContent = "Relaese to Upload File";
});

//if user drag file away from dragarea
dropArea.addEventListener("dragleave", () => {
     dropArea.classList.remove("active")
     dragText.textContent = "Drag & Drop to Upload File"
});


//if user drops file on drop area
dropArea.addEventListener("drop", (e) => {
    e.preventDefault();
    file = e.dataTransfer.files[0]
    showFiles()
})

   function showFiles(){
    let filetype = file.type;

    let validExtensions = ["image/jpeg", "image/jpg", "image/png"];
    if (validExtensions.includes(filetype)){
       let fileReader = new FileReader();
       fileReader.onload =() => {
        let fileURL = fileReader.result;
        let imgTag = `<img src="${fileURL}" alt="img" />`;
        dropArea.innerHTML = imgTag;
       }
       fileReader.readAsDataURL(file);
     }
    else{
        alert("This is not an Image type !! Files Supprted : .jpeg .jpg .png ");
        dropArea.classList.remove("active")
    }

   }


