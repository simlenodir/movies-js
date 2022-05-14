let box = findEl('.row')
let Btn = findEl('.btn')

Btn.addEventListener('click', many)

function many(){


    for (let i = 0; i < 8 ; i++) {
    
// creating elements

        let elCard = createEl(`div`)
        let elImg = createEl('img') 
        let elBox1 = createEl('div')
        let elh5  = createEl('h5')
        let elText = createEl('p')
        let elList = createEl('ul')
        let elItem = createEl('li')
        let elItem2 = createEl('li')
        let elItem3 = createEl('li')
        let elLink = createEl('a')
    
        // appending elements  
        
        box.append(elCard)
        elCard.append(elImg)
        elCard.append(elBox1)
        elBox1.append(elh5)
        elBox1.append(elText)
        elCard.append(elList)
        elList.append(elItem)
        elList.append(elItem2)
        elList.append(elItem3)
        elCard.append(elLink)
    
        // giving Classnames
    
         elCard.className = `card my-3`
         elImg.className = `card-img-top`
         elBox1.className = `card-body`
         elh5.className = `card-title`
         elText.className = `card-text`
         elList.className = `list-group list-group-flush`
         elItem.className = `list-group-item`
         elItem2.className = `list-group-item`
         elItem3.className = `list-group-item`
         elLink.className = `card-link`
    
        //  rendering
    
        elImg.src = movies[i].smallPoster
        elh5.textContent = movies[i].title
        elText.textContent = movies[i].summary
        elItem.textContent = movies[i].language
        elItem2.textContent = movies[i].imdbRating
        elItem3.textContent = movies[i].runtime
        elLink.textContent = movies[i].trailer
    
        // Style
    
        elCard.style.width = `16rem`

    

    }
    

}


<iframe width="560" height="315" 
src="https://www.youtube.com/embed/gNQpsgDmaME" title="YouTube video player"
 frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
  gyroscope; picture-in-picture" 
allowfullscreen></iframe>