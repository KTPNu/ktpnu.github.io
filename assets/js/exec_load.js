let execDiv = document.getElementById('execDiv');

fetch('/assets/members.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const members = data.members.sort((a, b) => {
            const rank = {
              "President": 1,
              "Executive Vice President": 2
            };
      
            // Assign rank to titles or default value for no title
            const rankA = rank[a.title] || (a.title ? 3 : 4);
            const rankB = rank[b.title] || (b.title ? 3 : 4);
      
            return rankA - rankB; // Sort by rank
          });
        let html = '';

        for (let i = 0; i < members.length; i++){
            if (members[i].title) {
                linkedin_link = members[i].linkedin;
                github_link = members[i].github;
                title = members[i].title;
                headshot = members[i].image ? members[i].image : "images/Headshots/placeholder.png";
                exec_name = members[i].name;

                html += `
                <div class="container profile">
                    <div class="to-linkedin">
                        <a href="${linkedin_link}" target="_blank"><img class="profile"
                            src="${headshot}" alt="${exec_name}" height="100px"></a>
                        <a href="${linkedin_link}" target="_blank"><ion-icon name="logo-linkedin"
                            class="linkedin-icon" style="font-size: 30px; color: var(--primary-dark)"></ion-icon></a>
                    </div>
                    <div class="headshot-text">${exec_name}</div>
                    <div class="role">${title}<br><br></div>
                </div>
                `
            }

        }

        execDiv.innerHTML = html;
    })
