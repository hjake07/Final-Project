$(document).ready(function(){
    
    $('#submitButton').on('click', function(){
       $("#commentContainer").prepend(`<div id ="commentInner">
       <p id ="edit">Edit</p><p id ="delete">Delete</p>
       </div>`)
       originalComment = (`<h6>${$(".displayName").val()}</h6><br/>
            <img src ='pfp.png'><p>${$(".userComment").val()}</p>`)
        $("#commentInner").append(originalComment)
    })


    $('#commentContainer').on('click','#delete', function(){
     let parents = $(this).parents()[0]
     $(parents).toggleClass('displayNone')
      })



      $('#commentContainer').on('click',"#edit", function(){  
     let child = $(this).next()
     let afterChild = $(child).next()
     let imgChild= $(afterChild).next()
     let brChild = $(imgChild).next()
     let goal = $(brChild).next()

       $("#commentInner").append(`<textarea id="story" name="story"
       rows="5" cols="33">${$(goal).text()}</textarea><input id ="editButton" type = "submit">`)
       $('#commentInner').on('click','#editButton', function(){
        let newComment = (`<p>${$("#story").val()}</p>`)
        $("#commentInner").append(newComment)
        $(goal).addClass('displayNone')
        $("#editButton").addClass('displayNone')
        $("#story").addClass('displayNone')
        $("#edit").addClass('displayNone')
       
       })
        })

       
     
          
          
        
        
         
 

      })
