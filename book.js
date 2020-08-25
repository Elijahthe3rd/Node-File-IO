const fs =require('fs')

class Book{

    constructor(title,Author,publisher,year,body){
        this.title=title
        this.Author=Author
        this.publisher=publisher
        this.year=year
        this.body=body
    }
    
    createFile(path,fileName){
        let info=`
        ${this.title}
        ${this.Author}
        ${this.publisher}
        ${this.year}
        ${this.body}
        `
        fs.writeFile(`${path}/${fileName}`,info,(err)=>{
            if(err) throw err
            console.log(`File Name: ${fileName} created successfully
            ${info}`)
        })
    }

    //function to read external files & takes in one string argument 
    readFile(path,fileName){
        
        //N.B) backtick / object /string template literals

        fs.readFile(`${path}/${fileName}`,"utf8",function(err,fileData){
            if(err)throw err
            console.log(fileData)
        })   
    }

    deleteFile(path,fileName){

        fs.unlink(`${path}/${fileName}`,(err)=>{
            err?  
                 console.error({message:err})
            : 
            console.log(JSON.stringify(`${fileName} succefully deleted (<_>)`,undefined,2))
        })    
    }

    UpdateFile(path,fileName,data){
        let updatedData=`
        ${data.title}
        ${data.Author}
        ${data.publisher}
        ${data.year}
        ${data.body}`

        fs.appendFile(`${path}/${fileName}`,updatedData,(err,file)=>{
            err?
            err=JSON.parse({message:err})
            :
            console.warn(`File Named: ${path+"/"+fileName} updated successfully`);
        })
        console.log(updatedData)
    }

}


const jsonInstance=require('/home/recruit/Desktop/backup/Sepuru/LocalAPI/objects/object')
let book=new Book(" not to the marriage of true minds","Shakes Spear","LondonP.K",new Date().toLocaleDateString(),jsonInstance.render())

// book.createFile("dela-cream")
// book.readFile("dela-cream2")
// book.createFile("dela-cream2")
// book.readFile("dela-cream2")
// book.deleteFile("dela-cream2")
// book.UpdateFile("dela-cream",book)
// book.UpdateFile("dela-cream",new Book("my Life love","Blood line barrer","K.G.M",new Date().toLocaleDateString(),jsonInstance.render()))


module.exports={book}