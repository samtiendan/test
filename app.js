// HW1a

class Meme {
        id;
        name;
        image;
        dateModified;
    
        constructor(id, name, image, dateModified) {
            this.id = id;
            this.name = name;
            this.image = image;
            this.dateModified = dateModified;
        }
        show() {
    
            MemeShow.textContent = `name : ${this.name} , image : ${this.image}, dateModified: ${this.dateModified}`
        }
        update(data) {
            this.name = data.name;
            this.image = data.image;
            MemeShow.textContent = `name : ${this.name} , image : ${this.image}, dateModified: ${this.dateModified}`
        }
    }


    // 1.b
class MemeCollection {
    id;
    name;
    owner;
    memes;
    constructor(id, name, owner, memes) {
     this.id = id;
     this.name = name;
     this.owner = owner;
     this.memes = memes;
    }
    add(newMeme){
        if(newMeme instanceof Meme){
            collectionMeme.push(newMeme)
        }
        else{
            console.log('Logcc')
        }
    }
    update(id,data){
        for(let i = 0; i<collectionMeme.length;i++){
            if(id === collectionMeme[i].id){
                collectionMeme[i].name = data.name;
                collectionMeme[i].image = data.image;
                collectionMeme[i].dateModified = data.dateModified;
            }
            else{
                console.log('Logcc')
            }
        }
    }
    delete(id){
        for(let i = 0; i<collectionMeme.length;i++){
            if(id === collectionMeme[i].id){
                collectionMeme.splice(i,1)
            }
        }
}

    show(){
        for(let i = 0; i<collectionMeme.length;i++){
            console.log(collectionMeme[i])
        }
    }
}



/// B3

// Web components là gì?
//Web components là một tập các quy chuẩn công nghệ dùng cho việc xây dựng các thành phần trang web được đóng gói (tách biệt với phần code còn lại của ứng dụng) và có thể tái sử dụng.

//Web Components mang đến 3 công nghệ chính:
//Custom elements: Một bộ API JavaScript cho phép định nghĩa các custom element và hành vi của chúng, sau đó có thể được sử dụng như mong muốn trong giao diện người dùng.
//Shadow DOM: một bộ API JavaScript cho phép đóng gói một cây DOM "ẩn" vào trong một element và kiểm soát các chức năng liên quan của element (đây là một DOM hoàn toàn tách biệt với DOM chính (main document DOM) ). Bằng cách này, chúng ta có thể giữ các chức năng của element ở mức độ private, để chúng có thể xử lý logic và style mà không hề gây xung đột với các phần bên ngoài.
//HTML templates: Bao gồm 2 element <template> và <slot> cho phép viết các mẫu html mà không hiển thị trong view. Những mẫu này có thể sử dụng lại nhiều lần.


// Vì sao cần dùng WebComponent
//Web Component là 1 Chuẩn Web được xây dựng bởi W3C, vì thế cho nên không sớm thì muộn nó cũng được các trình duyệt hỗ trợ
//Nên có thể n sẽ là tương lai =)))











