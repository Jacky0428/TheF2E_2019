console.log("ok")

$(function(){
  initialDragAndDropEvent()
  initialGame()
})


function initialDragAndDropEvent(){  

  // $(".mycontainer").on("dragstart", ".img[draggable=true]", dragStart)
  $(".mycontainer").on("dragstart", "img[draggable=true]", dragStart)

  function dragStart (e) {
    console.log('dragStart')
    // console.log(e.target.parentElement.id)
    // e.originalEvent.dataTransfer.setData('text/plain', e.target.parentElement.id)
    console.log(e.target.id)
    e.originalEvent.dataTransfer.setData('text/plain', e.target.id)
  }
  

  $(".card").on("drop", dropped).on("dragenter", cancelDefault).on("dragover", cancelDefault)

  function dropped (e) {
    console.log('dropped')
    cancelDefault(e)
    let id = e.originalEvent.dataTransfer.getData('text/plain')
    let el = $(e.target)
    let tagName = el.prop("tagName")
    if(tagName === "DIV"){
      $(e.target).append($("#"+id))
    } else if(tagName === "IMG") {
      $(e.target).after($("#"+id))
    } else {
      alert("錯誤：不能拉到此處。")
    }

  }
  
  function cancelDefault (e) {
    e.preventDefault()
    e.stopPropagation()
    return false
  }
  
}


var cards = []
function initialGame(){
  var cardType = ["spade", "heart", "diamond", "club"]
  for(let i = 1; i <= 13; i++){
    cards.push(cardType[0]+i)
    cards.push(cardType[1]+i)
    cards.push(cardType[2]+i)
    cards.push(cardType[3]+i)
  }

  $.each(cards, function(i, card){
    if(i <= 6){
      $("#line1 .card").append(`<img src="svg/${card}.svg" draggable="true" id="${card}">`)
    } else if(i <= 13){
      $("#line2 .card").append(`<img src="svg/${card}.svg" draggable="true" id="${card}">`)
    } else if(i <= 20){
      $("#line3 .card").append(`<img src="svg/${card}.svg" draggable="true" id="${card}">`)
    } else if(i <= 27){
      $("#line4 .card").append(`<img src="svg/${card}.svg" draggable="true" id="${card}">`)
    } else if(i <= 33){
      $("#line5 .card").append(`<img src="svg/${card}.svg" draggable="true" id="${card}">`)
    } else if(i <= 39){
      $("#line6 .card").append(`<img src="svg/${card}.svg" draggable="true" id="${card}">`)
    } else if(i <= 45){
      $("#line7 .card").append(`<img src="svg/${card}.svg" draggable="true" id="${card}">`)
    } else if(i <= 51){
      $("#line8 .card").append(`<img src="svg/${card}.svg" draggable="true" id="${card}">`)
    } else {
      alert("錯誤：排超過52張。")
    }
  })
}
