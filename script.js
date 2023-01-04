//ISRO api

var isroApiUrl = "https://isro.vercel.app/api/centres"

async function isroApi(){
    var urlFetch = await fetch(isroApiUrl)
    var data = urlFetch.json()
    var endResult = await data
    // console.log(endResult)

    for(let i of endResult.centres){
        var id  = i.id
        var name = i.name
        var place = i.Place
        var state = i.State
        // console.log(id,name,place,state)

        var parent = document.createElement('div')
        parent.setAttribute('class','card row col-lg-4 col-sm-12')
        parent.innerHTML = `
        
           <div class="card-header">    
           <h3>${name}</h3>
           </div>
           <div class="card-body">
             
               <p><b>ID:</b>${id}</p>
               <p><b>PLACE:</b>${place}</p>
               <p><b>STATE:</b>${state}</p>
           </div> 
           `

        document.querySelector('body').append(parent)
    }
}



//City bikes

var cityBikeUrl = "http://api.citybik.es/v2/networks"

async function cityBike(){
    
    var urlFetch = await fetch(cityBikeUrl)
    var data = urlFetch.json()
    var endResult = await data
    //console.log(endResult)
    for(let i of endResult.networks){
        //console.log(i.name)
        try{
            var hrefLink = `http://api.citybik.es/v2/networks/${i.id}`
            var linkFetch = await fetch(hrefLink)
            var dataLink = linkFetch.json()
            var finalResult = await dataLink

            var name = i.name
            var  city = i.location.city
            var country = i.location.country
            //console.log(name)

            //console.log(finalResult)
            
            var company = finalResult.network.company[0]
            //console.log(company)

            
            
        }
            
            
      
        catch(err){
            // console.log(err)
            // console.log("error is occured")
        }
        
            var parent2 = document.createElement('div')
            parent2.setAttribute('class','card row col-lg-4 col-sm-12')
            parent2.innerHTML =`
            
                <div class="card-header">
                    <h3>${name}<h3>
                </div>
                <div class = "card-body">
                    <p><b>COMPANY</b>:${company}</p>
                    <p><b>CITY</b>:${city}</p>
                    <p><b>COUNTRY</b>:${country}</p>
                </div>
            `
            document.querySelector('body').append(parent2)    
        
        
    }
}





//Tamilnadu cases

var pendingCaseUrl = "https://api.data.gov.in/resource/edf54914-06c6-4deb-bd1a-772d32250f3f?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json"

async function pendingCase(){
    var urlFetch1= await fetch(pendingCaseUrl)
    var data2 = urlFetch1.json()
    var finalOut = await data2
    // console.log(finalOut)

    var title = finalOut.title
    // console.log(title)
    var org = finalOut.org[0]
    // console.log(org)

    for(let i of finalOut.records){
        var siNo = i.si_no_
        var district = i.name_of_the_district
        var civilCase = i.civil_cases
        var criminalCase = i.criminal_cases
        var totalPendingCase = i.total_pendency

        // console.log(siNo,district,civilCase,criminalCase,totalPendingCase)

        var parent3 = document.createElement('div')
            parent3.setAttribute('class','card row col-lg-4 col-sm-12')
            parent3.innerHTML =`
            
                <div class="card-header">
                    <h3>${district}<h3>
                </div>
                <div class = "card-body">
                    <p><b>CIVIL CASE</b>:${civilCase}</p>
                    <p><b>CRIMINAL CASE</b>:${criminalCase}</p>
                    <p><b>TOTAL PENDING CASES</b>:${totalPendingCase}</p>
                </div>
            `
            document.querySelector('body').append(parent3) 
    }

}
isroApi()
cityBike()
pendingCase()