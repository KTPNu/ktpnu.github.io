let membersDiv = document.getElementById("members");

let row = true;
fetch('/assets/members.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const members = data.members;
    let html = '';

    // Iterate over each member
    for(let i = 0; i < members.length; i++){
      // Generate HTML for each member 
      console.log(html);
      if(i % 4 === 0) {
        html += `<div class="row">`;
        row=true
      }

      html += `
        <div class="col">
          <div class="member-card">
            <div class="member-image">
              <img src="${members[i].image}" alt="${members[i].name}">
              <div class="icons">
                <a href="${members[i].github}"><i class="bi bi-github"></i></a>
                <a href="${members[i].linkedin}"><i class="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div class="member-info">
              <h4 class="member-name">${members[i].name}</h4>
              <p class="member-title">${members[i].title}</p>
            </div>
          </div>
        </div>`;

        if(i % 4 == 0 && i != 0 && row) {
            html += '</div>';
            row = false;
        }
    }


    
    console.log(html);
    // Add the generated HTML to the document
    document.getElementById('members').innerHTML = html;
  });




