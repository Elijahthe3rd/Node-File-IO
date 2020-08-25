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

//class that i created to render/give me random text as body mostly are attributes of array object with
const jsonInstance=require('/home/recruit/Desktop/backup/Sepuru/LocalAPI/objects/object')

//TESTS BELOW

//Instanciating my class/creating object of of class and constructing it  
let book=new Book(" not to the marriage of true minds","Shakes Spear","LondonP.K",new Date().toLocaleDateString(),jsonInstance.render())

/* (N.B) the following are the tests i used to run my project
 * please check each method / function before using my tests 
 *
 * book.readFile("dela-cream2") //upgraded to the bellow
 * book.readFile(path,fileName)
 * 
 * book.createFile("dela-cream2")//upgraded to the bellow
 * book.createFile(path,fileName)
 * 
 * book.deleteFile("dela-cream2")
 * 
 * OPTION.1 before upgrades)
 * book.UpdateFile("dela-cream",book)//upgraded to the bellow
 * OPTION.2)
 * book.UpdateFile(path,fileName,data(.e.g book))
 * OPTION.3) 
 * book.UpdateFile(path,fileName,"dela-cream",new Book("my Life love","Blood line barrer","K.G.M",new Date().toLocaleDateString(),jsonInstance.render()))
 */

module.exports={book}