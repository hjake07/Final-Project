$(document).ready(function(){
    
    $('#submitButton').on('click', function(){
      let beginning = (`<div id ="commentInner">
      <p id ="edit">Edit</p><p id ="delete">Delete</p>
      </div>`)
       $("#commentContainer").prepend(beginning)
       originalComment = (`<h6>${$(".displayName").val()}</h6><br/>
            <img src ='pfp.png'><p>${$(".userComment").val()}</p>`)
        $("#commentInner").append(originalComment)
      })


    $('#commentContainer').on('click','#delete', function(){
     let parents = $(this).parents()[0]
     $(parents).toggleClass('displayNone')
      })



      $('#commentContainer').on('click',"#edit", function(){  
        let inside = $(this).parents()[0]
        let thisOne = $(this)
     let child = $(this).next()
     let afterChild = $(child).next()
     let imgChild= $(afterChild).next()
     let brChild = $(imgChild).next()
     let goal = $(brChild).next()

       $(inside).append(`<textarea id="story" name="story"
       rows="5" cols="33">${$(goal).text()}</textarea><input id ="editButton" type = "submit">`)
       $(inside).on('click','#editButton', function(){
        let newComment = (`<p>${$("#story").val()}</p>`)
        $(inside).append(newComment)
        $(goal).addClass('displayNone')
        $("#editButton").addClass('displayNone')
        $("#story").addClass('displayNone')
        $(thisOne).addClass('displayNone')
       
       })
        })

       
     
          
          
        
        
         
      

      })
